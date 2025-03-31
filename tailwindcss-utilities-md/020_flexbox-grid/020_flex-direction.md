## タイトル
title: Flexbox & Grid: Flex Direction (フレックス方向)

## タグ
tags: ["tailwindcss", "utilities", "flexbox", "flex-direction", "row", "column", "reverse", "layout"]

## 概要
`flex-{direction}` ユーティリティは、Flex コンテナ内の Flex アイテムが配置される主軸の方向を制御します。CSS の `flex-direction` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`flex-row`**: デフォルト。アイテムを左から右へ水平方向に配置します (テキストの書字方向に依存)。主軸は水平、交差軸は垂直になります。
*   **`flex-row-reverse`**: アイテムを右から左へ水平方向に配置します。
*   **`flex-col`**: アイテムを上から下へ垂直方向に配置します。主軸は垂直、交差軸は水平になります。
*   **`flex-col-reverse`**: アイテムを下から上へ垂直方向に配置します。

```html
<div class="space-y-8 p-4">

  {/* flex-row (Default) */}
  <div>
    <p class="text-sm mb-1">flex-row (Default): Left to Right</p>
    <div class="flex flex-row bg-gray-100 dark:bg-gray-800 rounded p-2 space-x-2">
      <div class="p-2 rounded bg-blue-300 dark:bg-blue-800">1</div>
      <div class="p-2 rounded bg-blue-400 dark:bg-blue-700">2</div>
      <div class="p-2 rounded bg-blue-500 dark:bg-blue-600">3</div>
    </div>
  </div>

  {/* flex-row-reverse */}
  <div>
    <p class="text-sm mb-1">flex-row-reverse: Right to Left</p>
    <div class="flex flex-row-reverse bg-gray-100 dark:bg-gray-800 rounded p-2 space-x-2 space-x-reverse"> {/* space-x-reverse で逆順のマージン */}
      <div class="p-2 rounded bg-green-300 dark:bg-green-800">1</div>
      <div class="p-2 rounded bg-green-400 dark:bg-green-700">2</div>
      <div class="p-2 rounded bg-green-500 dark:bg-green-600">3</div>
    </div>
  </div>

  {/* flex-col */}
  <div>
    <p class="text-sm mb-1">flex-col: Top to Bottom</p>
    <div class="flex flex-col bg-gray-100 dark:bg-gray-800 rounded p-2 space-y-2 w-32"> {/* 幅を指定 */}
      <div class="p-2 rounded bg-yellow-300 dark:bg-yellow-800">1</div>
      <div class="p-2 rounded bg-yellow-400 dark:bg-yellow-700">2</div>
      <div class="p-2 rounded bg-yellow-500 dark:bg-yellow-600">3</div>
    </div>
  </div>

  {/* flex-col-reverse */}
  <div>
    <p class="text-sm mb-1">flex-col-reverse: Bottom to Top</p>
    <div class="flex flex-col-reverse bg-gray-100 dark:bg-gray-800 rounded p-2 space-y-2 space-y-reverse w-32"> {/* space-y-reverse */}
      <div class="p-2 rounded bg-purple-300 dark:bg-purple-800">1</div>
      <div class="p-2 rounded bg-purple-400 dark:bg-purple-700">2</div>
      <div class="p-2 rounded bg-purple-500 dark:bg-purple-600">3</div>
    </div>
  </div>

</div>
```

## 主軸と交差軸への影響

`flex-direction` を変更すると、**主軸 (main axis)** と **交差軸 (cross axis)** が入れ替わります。これは、配置ユーティリティ (`justify-*`, `items-*`) の効果に影響を与えます。

*   **`flex-row` / `flex-row-reverse`**:
    *   主軸: 水平方向
    *   `justify-*` は水平方向の配置を制御します。
    *   `items-*` は垂直方向の配置を制御します。
*   **`flex-col` / `flex-col-reverse`**:
    *   主軸: 垂直方向
    *   `justify-*` は垂直方向の配置を制御します。
    *   `items-*` は水平方向の配置を制御します。

```html
<div class="flex flex-col items-center justify-center h-32 bg-pink-100 dark:bg-pink-900/30 rounded p-2 w-40">
  <p class="text-xs mb-1">flex-col items-center justify-center</p>
  <div class="p-1 rounded bg-pink-300 dark:bg-pink-700">Item 1</div>
  <div class="p-1 rounded bg-pink-400 dark:bg-pink-600 mt-1">Item 2</div>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてフレックス方向を変更するのは、レスポンシブレイアウトで非常によく使われるテクニックです。

```html
{/* デフォルトは縦並び (モバイル)、md 以上で横並び */}
<div class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
  <div class="p-4 bg-red-200 dark:bg-red-900 rounded">Item 1</div>
  <div class="p-4 bg-red-300 dark:bg-red-800 rounded">Item 2</div>
  <div class="p-4 bg-red-400 dark:bg-red-700 rounded">Item 3</div>
</div>
```

## 注意点

*   `flex-direction` は Flex コンテナ (親要素に `flex` または `inline-flex` が適用されている要素) に適用します。
*   `flex-row-reverse` や `flex-col-reverse` を使用する場合、視覚的な順序と DOM の順序が異なるため、キーボードナビゲーションやスクリーンリーダーの読み上げ順序に影響を与える可能性があります。アクセシビリティに配慮して使用してください。
*   逆順にした場合、`space-x-*` や `space-y-*` の効果も逆になるため、`space-x-reverse` や `space-y-reverse` を併用してマージンの方向を調整する必要がある場合があります。`gap-*` を使用する場合はこの問題は発生しません。

## 関連ユーティリティ

*   `display` (`flex`, `inline-flex`): Flex コンテナを作成します。
*   `justify-content` (`justify-*`): 主軸方向の配置。
*   `align-items` (`items-*`): 交差軸方向の配置。
*   `flex-wrap`: アイテムの折り返し。
*   `gap`: アイテム間の間隔。
*   `space-between` (`space-x-*`, `space-y-*`): アイテム間のスペース。

## 公式ドキュメント参照
*   [Tailwind CSS: Flex Direction](https://tailwindcss.com/docs/flex-direction)
*   [MDN: flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
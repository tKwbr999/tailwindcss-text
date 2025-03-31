## タイトル
title: Flexbox & Grid: Justify Content (主軸方向の配置)

## タグ
tags: ["tailwindcss", "utilities", "flexbox", "grid", "justify-content", "alignment", "layout", "main-axis"]

## 概要
`justify-{value}` ユーティリティは、Flex コンテナまたは Grid コンテナの**主軸 (main axis)** に沿って、アイテム群をどのように配置し、アイテム間のスペースをどのように分配するかを制御します。CSS の `justify-content` プロパティに対応します。

*   **Flexbox:**
    *   `flex-direction: row` (デフォルト) の場合、**水平方向**の配置を制御します。
    *   `flex-direction: column` の場合、**垂直方向**の配置を制御します。
*   **Grid:**
    *   常に**インライン軸 (通常は水平方向)** に沿ったアイテム群の配置を制御します。

## 基本的な使い方とパラメータ

*   **`justify-start`**: (Flexbox デフォルト) アイテムをコンテナの**開始**側に寄せます。
*   **`justify-center`**: アイテムをコンテナの**中央**に寄せます。
*   **`justify-end`**: アイテムをコンテナの**終了**側に寄せます。
*   **`justify-between`**: 最初のアイテムを開始側、最後のアイテムを終了側に配置し、残りのアイテム間のスペースを**均等に分配**します。
*   **`justify-around`**: 各アイテムの**両側**に均等なスペースを設けます。結果として、アイテム間のスペースはコンテナの端とアイテム間のスペースの 2 倍になります。
*   **`justify-evenly`**: すべてのアイテム間、およびアイテムとコンテナの端との間のスペースを**完全に均等**に分配します。
*   **`justify-stretch`**: (Grid のみ、デフォルト) アイテムがコンテナのサイズに合わせて伸長します (`align-items` や `justify-items` が `stretch` の場合)。

```html
<div class="space-y-8 p-4">

  {/* --- Flexbox (row) --- */}
  <div>
    <p class="text-sm mb-1 font-semibold">Flexbox (row)</p>
    <div class="flex justify-start bg-gray-100 dark:bg-gray-800 rounded p-2 mb-2"> {/* Default */}
      <div class="p-2 rounded bg-blue-400">1</div> <div class="p-2 rounded bg-blue-500">2</div> <div class="p-2 rounded bg-blue-600">3</div>
    </div>
    <div class="flex justify-center bg-gray-100 dark:bg-gray-800 rounded p-2 mb-2">
      <div class="p-2 rounded bg-blue-400">1</div> <div class="p-2 rounded bg-blue-500">2</div> <div class="p-2 rounded bg-blue-600">3</div>
    </div>
    <div class="flex justify-end bg-gray-100 dark:bg-gray-800 rounded p-2 mb-2">
       <div class="p-2 rounded bg-blue-400">1</div> <div class="p-2 rounded bg-blue-500">2</div> <div class="p-2 rounded bg-blue-600">3</div>
    </div>
    <div class="flex justify-between bg-gray-100 dark:bg-gray-800 rounded p-2 mb-2">
       <div class="p-2 rounded bg-blue-400">1</div> <div class="p-2 rounded bg-blue-500">2</div> <div class="p-2 rounded bg-blue-600">3</div>
    </div>
    <div class="flex justify-around bg-gray-100 dark:bg-gray-800 rounded p-2 mb-2">
       <div class="p-2 rounded bg-blue-400">1</div> <div class="p-2 rounded bg-blue-500">2</div> <div class="p-2 rounded bg-blue-600">3</div>
    </div>
    <div class="flex justify-evenly bg-gray-100 dark:bg-gray-800 rounded p-2">
       <div class="p-2 rounded bg-blue-400">1</div> <div class="p-2 rounded bg-blue-500">2</div> <div class="p-2 rounded bg-blue-600">3</div>
    </div>
  </div>

  {/* --- Flexbox (column) --- */}
  <div>
    <p class="text-sm mb-1 font-semibold">Flexbox (column) - Height needed</p>
    <div class="flex flex-col justify-between bg-gray-100 dark:bg-gray-800 rounded p-2 h-48 w-24"> {/* h-48 が必要 */}
      <div class="p-2 rounded bg-green-400">1</div>
      <div class="p-2 rounded bg-green-500">2</div>
      <div class="p-2 rounded bg-green-600">3</div>
    </div>
  </div>

  {/* --- Grid --- */}
  <div>
    <p class="text-sm mb-1 font-semibold">Grid (justify-items との違いに注意)</p>
    {/* Grid では justify-content はコンテナ内のアイテム群全体の配置 */}
    <div class="grid grid-cols-3 gap-2 bg-gray-100 dark:bg-gray-800 rounded p-2 w-96 justify-between"> {/* アイテム幅が小さい場合 */}
      <div class="p-2 rounded bg-yellow-400 w-16">1</div>
      <div class="p-2 rounded bg-yellow-500 w-16">2</div>
      <div class="p-2 rounded bg-yellow-600 w-16">3</div>
    </div>
     <div class="grid grid-cols-3 gap-2 bg-gray-100 dark:bg-gray-800 rounded p-2 w-96 justify-center mt-2">
      <div class="p-2 rounded bg-yellow-400 w-16">1</div>
      <div class="p-2 rounded bg-yellow-500 w-16">2</div>
      <div class="p-2 rounded bg-yellow-600 w-16">3</div>
    </div>
  </div>

</div>
```

## Flexbox と Grid での挙動の違い

*   **Flexbox:** 主軸に沿ったアイテム間のスペース配分と全体の配置を制御します。`flex-direction` によって主軸が変わることに注意が必要です。
*   **Grid:** インライン軸 (通常は水平) に沿った**グリッドアイテム群全体**の配置を制御します。グリッドトラックの合計幅がコンテナ幅より小さい場合に効果が現れます。個々のアイテムをセル内で水平方向に配置するのは `justify-items` または `justify-self` です。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて配置方法を変更できます。

```html
{/* モバイルでは中央揃え、md 以上では両端揃え */}
<div class="flex justify-center md:justify-between ...">
  {/* ... items ... */}
</div>
```

## 注意点

*   `justify-content` は Flexbox または Grid コンテナに適用します。
*   効果を視覚的に確認するには、コンテナ内のアイテムの合計サイズがコンテナサイズよりも小さい必要があります (スペースが余っている状態)。
*   Flexbox で `flex-direction: column` を使用する場合、`justify-*` は垂直方向の配置を制御するため、コンテナに高さ (`h-*`) が設定されている必要があります。

## 関連ユーティリティ

*   `display` (`flex`, `grid`): Flex または Grid コンテナを作成します。
*   `flex-direction`: Flexbox の主軸方向を制御します。
*   `align-items`: Flexbox/Grid の交差軸方向のアイテム配置 (単一行/単一セル内)。
*   `align-content`: Flexbox/Grid の交差軸方向のアイテム**群**の配置 (複数行/複数トラックの場合)。
*   `justify-items`: Grid のインライン軸方向のアイテム配置 (単一セル内)。
*   `place-content`: `justify-content` と `align-content` のショートハンド。

## 公式ドキュメント参照
*   [Tailwind CSS: Justify Content](https://tailwindcss.com/docs/justify-content)
*   [MDN: justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
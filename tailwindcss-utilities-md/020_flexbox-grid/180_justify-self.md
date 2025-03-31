## タイトル
title: Flexbox & Grid: Justify Self (Grid アイテム個別の水平配置)

## タグ
tags: ["tailwindcss", "utilities", "grid", "justify-self", "alignment", "layout", "inline-axis"]

## 概要
`justify-self-{value}` ユーティリティは、**個々の** Grid アイテムが、自身が配置されているグリッドエリア (セル) 内で**インライン軸 (通常は水平方向)** に沿ってどのように配置されるかを制御します。CSS の `justify-self` プロパティに対応します。

これは、Grid コンテナに設定する `justify-items` (すべてのアイテムのデフォルト配置) を、特定のアイテムに対して個別に上書きするために使用します。

**注意:** このプロパティは **Grid レイアウトのアイテム専用**です。Flexbox レイアウトには効果がありません。

## 基本的な使い方とパラメータ

*   **`justify-self-auto`**: デフォルト。親の Grid コンテナの `justify-items` プロパティの値に従います (`justify-items` のデフォルトは `stretch`)。
*   **`justify-self-start`**: アイテムをグリッドエリアの**開始**側 (通常は左) に配置します。
*   **`justify-self-center`**: アイテムをグリッドエリアの**中央** (水平方向) に配置します。
*   **`justify-self-end`**: アイテムをグリッドエリアの**終了**側 (通常は右) に配置します。
*   **`justify-self-stretch`**: アイテムをグリッドエリアの幅いっぱいに引き伸ばします (アイテム自身が幅を持たない場合)。

```html
<div class="space-y-4 p-4">

  {/* justify-items-start コンテナ内で justify-self を使用 */}
  <div>
    <p class="text-sm mb-1">Container: justify-items-start</p>
    <div class="grid grid-cols-3 gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded justify-items-start h-24">
      <div class="p-2 rounded bg-blue-400">Start (Default)</div>
      <div class="p-2 rounded bg-blue-500 justify-self-center">Center (Override)</div> {/* 個別に中央揃え */}
      <div class="p-2 rounded bg-blue-600 justify-self-end">End (Override)</div>   {/* 個別に右揃え */}
      <div class="p-2 rounded bg-blue-400">Start (Default)</div>
      <div class="p-2 rounded bg-blue-500 justify-self-stretch">Stretch (Override)</div> {/* 個別に引き伸ばし */}
      <div class="p-2 rounded bg-blue-600">Start (Default)</div>
    </div>
  </div>

  {/* justify-items-stretch コンテナ内で justify-self を使用 */}
   <div>
    <p class="text-sm mb-1">Container: justify-items-stretch (Default)</p>
    <div class="grid grid-cols-3 gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded justify-items-stretch h-24">
      <div class="p-2 rounded bg-green-400">Stretch (Default)</div>
      <div class="p-2 rounded bg-green-500 justify-self-start w-16">Start (Override, w-16)</div> {/* 幅指定が必要 */}
      <div class="p-2 rounded bg-green-600 justify-self-center w-20">Center (Override, w-20)</div> {/* 幅指定が必要 */}
      <div class="p-2 rounded bg-green-400">Stretch (Default)</div>
      <div class="p-2 rounded bg-green-500 justify-self-end w-12">End (Override, w-12)</div>   {/* 幅指定が必要 */}
      <div class="p-2 rounded bg-green-600">Stretch (Default)</div>
    </div>
    <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">
      `justify-self-start/center/end` を使う場合、アイテムがセル幅いっぱいに伸びなくなるため、必要に応じてアイテム自身に幅 (`w-*`) を指定します。
    </p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて個々のアイテムの水平配置を変更できます。

```html
<div class="grid grid-cols-3 justify-items-center ...">
  <div class="justify-self-auto md:justify-self-start ...">Item 1</div> {/* md以上で左揃え */}
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## 注意点

*   `justify-self-*` は Grid アイテム (Grid コンテナの直接の子要素) に適用します。
*   `justify-items` (コンテナに設定) の値を上書きします。
*   `justify-self-start`, `center`, `end` を適用すると、アイテムは自身のコンテンツ幅または指定された幅 (`w-*`) になります。セル幅いっぱいに広がらなくなるため、意図しない場合は注意が必要です。
*   Flexbox レイアウトには効果がありません (Flexbox ではアイテム個別の交差軸配置に `align-self` を使いますが、主軸方向の個別配置は通常マージン (`mx-auto` など) で行います)。

## 関連ユーティリティ

*   `display` (`grid`, `inline-grid`): Grid コンテナを作成します。
*   `justify-items`: Grid コンテナ内での**すべてのアイテム**のデフォルト水平配置。
*   `align-self`: **個々の Grid アイテム**のセル内での**垂直**方向の配置。
*   `place-self`: `align-self` と `justify-self` のショートハンド。

## 公式ドキュメント参照
*   [Tailwind CSS: Justify Self](https://tailwindcss.com/docs/justify-self)
*   [MDN: justify-self](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
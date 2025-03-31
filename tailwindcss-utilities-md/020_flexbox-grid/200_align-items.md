## タイトル
title: Flexbox & Grid: Align Items (交差軸方向のアイテム配置)

## タグ
tags: ["tailwindcss", "utilities", "flexbox", "grid", "align-items", "alignment", "layout", "cross-axis"]

## 概要
`items-{value}` ユーティリティは、Flexbox コンテナの現在の行、または Grid コンテナの各セル内で、アイテムを**交差軸 (cross axis)** に沿ってどのように配置するかを制御します。CSS の `align-items` プロパティに対応します。

*   **Flexbox:**
    *   `flex-direction: row` (デフォルト) の場合、**垂直方向**の配置を制御します。
    *   `flex-direction: column` の場合、**水平方向**の配置を制御します。
*   **Grid:**
    *   常に**ブロック軸 (通常は垂直方向)** に沿ったセル内でのアイテム配置を制御します。

これは、複数行/列が存在する場合に行/列グループ全体の配置を制御する `align-content` とは異なります。`align-items` は**単一の行/列内**での配置を扱います。

## 基本的な使い方とパラメータ

*   **`items-start`**: アイテムを行/セルの**開始**側 (通常は上端) に配置します。
*   **`items-center`**: アイテムを行/セルの**中央** (垂直方向) に配置します。
*   **`items-end`**: アイテムを行/セルの**終了**側 (通常は下端) に配置します。
*   **`items-baseline`**: アイテムをテキストの**ベースライン**に揃えます。
*   **`items-stretch`**: デフォルト。アイテムを行/セルの高さ (または幅) いっぱいに引き伸ばします (アイテム自身がサイズを持たない場合)。

```html
<div class="space-y-8 p-4">

  {/* --- Flexbox (row) --- */}
  <div>
    <p class="text-sm mb-1 font-semibold">Flexbox (row) - Height needed (h-24)</p>
    <div class="flex items-start h-24 bg-gray-100 dark:bg-gray-800 rounded p-2 mb-2 space-x-2">
      <span class="text-xs">items-start</span>
      <div class="p-2 rounded bg-blue-400">Item 1</div> <div class="p-6 rounded bg-blue-500">Item 2 (Tall)</div> <div class="p-2 rounded bg-blue-600">Item 3</div>
    </div>
    <div class="flex items-center h-24 bg-gray-100 dark:bg-gray-800 rounded p-2 mb-2 space-x-2">
       <span class="text-xs">items-center</span>
       <div class="p-2 rounded bg-blue-400">Item 1</div> <div class="p-6 rounded bg-blue-500">Item 2 (Tall)</div> <div class="p-2 rounded bg-blue-600">Item 3</div>
    </div>
    <div class="flex items-end h-24 bg-gray-100 dark:bg-gray-800 rounded p-2 mb-2 space-x-2">
       <span class="text-xs">items-end</span>
       <div class="p-2 rounded bg-blue-400">Item 1</div> <div class="p-6 rounded bg-blue-500">Item 2 (Tall)</div> <div class="p-2 rounded bg-blue-600">Item 3</div>
    </div>
    <div class="flex items-baseline h-24 bg-gray-100 dark:bg-gray-800 rounded p-2 mb-2 space-x-2">
       <span class="text-xs">items-baseline</span>
       <div class="p-2 rounded bg-blue-400 text-xs">Item 1 (xs)</div> <div class="p-6 rounded bg-blue-500 text-lg">Item 2 (lg)</div> <div class="p-2 rounded bg-blue-600 text-sm">Item 3 (sm)</div>
    </div>
     <div class="flex items-stretch h-24 bg-gray-100 dark:bg-gray-800 rounded p-2 space-x-2"> {/* Default */}
       <span class="text-xs">items-stretch (Default)</span>
       <div class="p-2 rounded bg-blue-400">Item 1</div> <div class="p-2 rounded bg-blue-500">Item 2</div> <div class="p-2 rounded bg-blue-600">Item 3</div> {/* 高さいっぱいに伸びる */}
    </div>
  </div>

  {/* --- Grid --- */}
  <div>
    <p class="text-sm mb-1 font-semibold">Grid</p>
    <div class="grid grid-cols-3 gap-2 h-32 bg-gray-100 dark:bg-gray-800 rounded p-2 items-center"> {/* items-center */}
       <span class="col-span-3 text-xs text-center mb-1">items-center</span>
       <div class="p-4 rounded bg-green-300 dark:bg-green-800">1</div>
       <div class="p-8 rounded bg-green-400 dark:bg-green-700">2 (Tall)</div> {/* セル内で中央揃え */}
       <div class="p-4 rounded bg-green-500 dark:bg-green-600">3</div>
    </div>
     <div class="grid grid-cols-3 gap-2 h-32 bg-gray-100 dark:bg-gray-800 rounded p-2 items-end mt-4"> {/* items-end */}
       <span class="col-span-3 text-xs text-center mb-1">items-end</span>
       <div class="p-4 rounded bg-green-300 dark:bg-green-800">1</div>
       <div class="p-8 rounded bg-green-400 dark:bg-green-700">2 (Tall)</div> {/* セル内で下揃え */}
       <div class="p-4 rounded bg-green-500 dark:bg-green-600">3</div>
    </div>
  </div>

</div>
```

## `align-self` との関係

`align-items` は Flexbox または Grid コンテナに適用し、**すべての**アイテムのデフォルトの交差軸方向の配置を設定します。

一方、`align-self-{value}` ユーティリティ (例: `self-center`) は**個々の** Flex または Grid アイテムに適用し、そのアイテムだけ `align-items` の設定を上書きして配置を制御します。

```html
<div class="flex items-start h-24 bg-gray-100 dark:bg-gray-800 rounded p-2 space-x-2"> {/* デフォルトは start */}
  <div class="p-2 rounded bg-red-400">Start (Default)</div>
  <div class="p-6 rounded bg-red-500 self-center">Center (Override)</div> {/* このアイテムだけ中央揃え */}
  <div class="p-2 rounded bg-red-600 self-end">End (Override)</div>   {/* このアイテムだけ下揃え */}
  <div class="p-2 rounded bg-red-400 self-stretch">Stretch (Override)</div> {/* このアイテムだけ引き伸ばし */}
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてアイテムの配置を変更できます。

```html
<div class="flex items-center md:items-start ...">
  {/* モバイルでは中央揃え、md 以上では上揃え */}
  {/* ... items ... */}
</div>
```

## 注意点

*   `align-items` は Flexbox または Grid コンテナに適用します。
*   効果を視覚的に確認するには、コンテナの交差軸方向のサイズ (Flexbox row なら高さ、Flexbox col なら幅、Grid なら行の高さ) が、アイテムのサイズよりも大きい必要があります。
*   `items-stretch` (デフォルト) では、アイテムは交差軸方向いっぱいに伸びようとしますが、アイテム自身にサイズ (`h-*` や `w-*`) が指定されている場合はそちらが優先されます。

## 関連ユーティリティ

*   `display` (`flex`, `grid`): Flex または Grid コンテナを作成します。
*   `flex-direction`: Flexbox の主軸方向を制御し、`align-items` が影響する軸を変更します。
*   `align-content`: **複数行/列**になった場合の行/列グループ全体の配置 (交差軸)。
*   `align-self`: **個々のアイテム**の配置 (交差軸)。
*   `justify-items`: Grid の**インライン軸**方向のアイテム配置 (単一セル内)。
*   `place-items`: `align-items` と `justify-items` のショートハンド (Grid のみ)。

## 公式ドキュメント参照
*   [Tailwind CSS: Align Items](https://tailwindcss.com/docs/align-items)
*   [MDN: align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
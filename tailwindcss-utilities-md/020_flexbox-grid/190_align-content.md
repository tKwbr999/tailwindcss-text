## タイトル
title: Flexbox & Grid: Align Content (複数行/列の配置)

## タグ
tags: ["tailwindcss", "utilities", "flexbox", "grid", "align-content", "alignment", "layout", "cross-axis", "multi-line"]

## 概要
`content-{value}` ユーティリティは、Flexbox コンテナ (で `flex-wrap: wrap` が有効な場合) または Grid コンテナにおいて、アイテムが複数行または複数列にまたがる場合に、**交差軸 (cross axis)** に沿って**行/列のグループ全体**をどのように配置し、その間のスペースをどのように分配するかを制御します。CSS の `align-content` プロパティに対応します。

これは、単一の行/列内でのアイテムの配置を制御する `align-items` とは異なります。`align-content` は、複数行/列が存在する場合にのみ効果があります。

## 基本的な使い方とパラメータ

*   **`content-normal`**: デフォルト (`align-content: normal;`)。通常は `stretch` と同様の振る舞いをしますが、コンテキストによって異なります。
*   **`content-start`**: 行/列グループをコンテナの**開始**側 (通常は上端) に寄せます。
*   **`content-center`**: 行/列グループをコンテナの**中央** (垂直方向) に配置します。
*   **`content-end`**: 行/列グループをコンテナの**終了**側 (通常は下端) に寄せます。
*   **`content-between`**: 最初の行/列を開始側、最後の行/列を終了側に配置し、残りの行/列間のスペースを**均等に分配**します。
*   **`content-around`**: 各行/列の**両側**に均等なスペースを設けます。
*   **`content-evenly`**: すべての行/列間、および行/列とコンテナの端との間のスペースを**完全に均等**に分配します。
*   **`content-baseline`**: (実験的) 行/列をベースラインに揃えます。

```html
<div class="space-y-8 p-4">

  {/* Flexbox (wrap) で align-content を使用 */}
  {/* コンテナに高さが必要 */}
  <div>
    <p class="text-sm mb-1 font-semibold">Flexbox (wrap) - Height needed (h-48)</p>
    <div class="flex flex-wrap content-start h-48 w-64 border rounded dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-1 gap-2 mb-4">
      <span class="w-full text-xs">content-start</span>
      <div class="p-2 rounded bg-blue-300 w-20">1</div> <div class="p-2 rounded bg-blue-400 w-20">2</div> <div class="p-2 rounded bg-blue-500 w-20">3</div> <div class="p-2 rounded bg-blue-600 w-20">4</div>
    </div>
    <div class="flex flex-wrap content-center h-48 w-64 border rounded dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-1 gap-2 mb-4">
       <span class="w-full text-xs">content-center</span>
       <div class="p-2 rounded bg-blue-300 w-20">1</div> <div class="p-2 rounded bg-blue-400 w-20">2</div> <div class="p-2 rounded bg-blue-500 w-20">3</div> <div class="p-2 rounded bg-blue-600 w-20">4</div>
    </div>
    <div class="flex flex-wrap content-end h-48 w-64 border rounded dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-1 gap-2 mb-4">
       <span class="w-full text-xs">content-end</span>
       <div class="p-2 rounded bg-blue-300 w-20">1</div> <div class="p-2 rounded bg-blue-400 w-20">2</div> <div class="p-2 rounded bg-blue-500 w-20">3</div> <div class="p-2 rounded bg-blue-600 w-20">4</div>
    </div>
     <div class="flex flex-wrap content-between h-48 w-64 border rounded dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-1 gap-2 mb-4">
       <span class="w-full text-xs">content-between</span>
       <div class="p-2 rounded bg-blue-300 w-20">1</div> <div class="p-2 rounded bg-blue-400 w-20">2</div> <div class="p-2 rounded bg-blue-500 w-20">3</div> <div class="p-2 rounded bg-blue-600 w-20">4</div>
    </div>
    {/* around, evenly も同様 */}
  </div>

  {/* Grid で align-content を使用 */}
  {/* コンテナに高さがあり、行の合計高さがコンテナより小さい場合に効果あり */}
   <div>
    <p class="text-sm mb-1 font-semibold">Grid - Height needed & Row height < Container height</p>
    <div class="grid grid-cols-3 grid-rows-2 gap-2 h-48 w-80 border rounded dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-2 content-center"> {/* content-center */}
       <span class="col-span-3 text-xs text-center mb-1">content-center</span>
       <div class="p-4 rounded bg-green-300 dark:bg-green-800">1</div>
       <div class="p-4 rounded bg-green-400 dark:bg-green-700">2</div>
       <div class="p-4 rounded bg-green-500 dark:bg-green-600">3</div>
       <div class="p-4 rounded bg-green-300 dark:bg-green-800">4</div>
       <div class="p-4 rounded bg-green-400 dark:bg-green-700">5</div>
    </div>
  </div>

</div>
```

## `align-items` との違い

*   **`align-content`**: コンテナ内の**行/列のグループ全体**を、交差軸に沿ってどのように配置するかを制御します。複数行/列が存在する場合にのみ効果があります。
*   **`align-items`**: **単一の行/列内**で、各アイテムを交差軸に沿ってどのように配置するかを制御します。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて行/列グループの配置方法を変更できます。

```html
<div class="flex flex-wrap content-start md:content-center ...">
  {/* モバイルでは上寄せ、md 以上で中央揃え */}
  {/* ... items ... */}
</div>
```

## 注意点

*   `align-content` は Flexbox または Grid コンテナに適用します。
*   **Flexbox:** `flex-wrap: wrap` または `flex-wrap: wrap-reverse` が設定されており、かつアイテムが実際に複数行に折り返されている場合にのみ効果があります。
*   **Grid:** グリッドの行 (または `grid-auto-flow: column` の場合は列) の合計サイズが、コンテナの対応するサイズよりも小さい場合にのみ効果があります。
*   効果を確認するには、コンテナに明示的な高さ (`h-*`) または幅 (`w-*`, `grid-auto-flow: column` の場合) が設定されている必要があります。

## 関連ユーティリティ

*   `display` (`flex`, `grid`): Flex または Grid コンテナを作成します。
*   `flex-wrap`: Flex アイテムの折り返しを制御します。
*   `align-items`: 単一行/列内でのアイテムの配置 (交差軸)。
*   `justify-content`: 主軸方向のアイテム群の配置。
*   `place-content`: `align-content` と `justify-content` のショートハンド。

## 公式ドキュメント参照
*   [Tailwind CSS: Align Content](https://tailwindcss.com/docs/align-content)
*   [MDN: align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
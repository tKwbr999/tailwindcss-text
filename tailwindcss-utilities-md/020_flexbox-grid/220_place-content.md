## タイトル
title: Flexbox & Grid: Place Content (複数行/列の配置ショートハンド)

## タグ
tags: ["tailwindcss", "utilities", "flexbox", "grid", "place-content", "align-content", "justify-content", "alignment", "layout"]

## 概要
`place-content-{value}` ユーティリティは、コンテナ内でアイテムの**行/列グループ全体**を**両方の軸 (垂直・水平)** に沿ってどのように配置するかを制御するショートハンドです。CSS の `place-content` プロパティに対応し、`align-content` と `justify-content` を同時に設定します。

これは、アイテムが複数行/列にまたがる場合にのみ効果があります (Flexbox では `flex-wrap: wrap`、Grid ではアイテムの合計サイズがコンテナを超える場合など)。

## 基本的な使い方とパラメータ

`place-content-{value}` の形式でクラスを指定します。値は `align-content` と `justify-content` で利用可能なキーワードの組み合わせです。

*   **`place-content-center`**: `align-content: center; justify-content: center;` (中央揃え)
*   **`place-content-start`**: `align-content: start; justify-content: start;` (開始位置揃え)
*   **`place-content-end`**: `align-content: end; justify-content: end;` (終了位置揃え)
*   **`place-content-between`**: `align-content: space-between; justify-content: space-between;` (両端揃え)
*   **`place-content-around`**: `align-content: space-around; justify-content: space-around;` (均等配置、端は半分のスペース)
*   **`place-content-evenly`**: `align-content: space-evenly; justify-content: space-evenly;` (完全均等配置)
*   **`place-content-baseline`**: `align-content: baseline; justify-content: baseline;` (ベースライン揃え、主に Flexbox)
*   **`place-content-stretch`**: `align-content: stretch; justify-content: stretch;` (Grid のデフォルト)

```html
<div class="space-y-8 p-4">

  {/* Grid で place-content を使用 */}
  {/* コンテナにサイズがあり、アイテムの合計サイズがコンテナより小さい場合に効果あり */}
  <div>
    <p class="text-sm mb-1 font-semibold">Grid (h-48 w-80)</p>
    <div class="grid grid-cols-3 gap-2 h-48 w-80 border rounded dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-2 place-content-center mb-4">
      <span class="col-span-3 text-xs text-center">place-content-center</span>
      <div class="p-4 rounded bg-blue-300 w-16 h-10">1</div> <div class="p-4 rounded bg-blue-400 w-16 h-10">2</div> <div class="p-4 rounded bg-blue-500 w-16 h-10">3</div>
      <div class="p-4 rounded bg-blue-300 w-16 h-10">4</div> <div class="p-4 rounded bg-blue-400 w-16 h-10">5</div>
    </div>
     <div class="grid grid-cols-3 gap-2 h-48 w-80 border rounded dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-2 place-content-between">
      <span class="col-span-3 text-xs text-center">place-content-between</span>
      <div class="p-4 rounded bg-green-300 w-16 h-10">1</div> <div class="p-4 rounded bg-green-400 w-16 h-10">2</div> <div class="p-4 rounded bg-green-500 w-16 h-10">3</div>
      <div class="p-4 rounded bg-green-300 w-16 h-10">4</div> <div class="p-4 rounded bg-green-400 w-16 h-10">5</div>
    </div>
  </div>

  {/* Flexbox (wrap) で place-content を使用 */}
  {/* コンテナに高さが必要 */}
   <div>
    <p class="text-sm mb-1 font-semibold">Flexbox (wrap, h-48 w-64)</p>
    <div class="flex flex-wrap h-48 w-64 border rounded dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-1 gap-2 place-content-end">
       <span class="w-full text-xs text-right">place-content-end</span>
       <div class="p-2 rounded bg-yellow-300 w-20">1</div> <div class="p-2 rounded bg-yellow-400 w-20">2</div> <div class="p-2 rounded bg-yellow-500 w-20">3</div> <div class="p-2 rounded bg-yellow-600 w-20">4</div>
    </div>
  </div>

</div>
```

## `align-content` と `justify-content` との関係

`place-content-{value}` は、`align-content-{value}` と `justify-content-{value}` を同時に設定する便利なショートハンドです。

例えば、`place-content-center` は以下と同じ意味になります。
```css
align-content: center;
justify-content: center;
```

もし `align-content` と `justify-content` で異なる値を指定したい場合は、それぞれのユーティリティ (`content-*`, `justify-*`) を個別に使用します。

```html
{/* 垂直方向は中央揃え (align-content)、水平方向は両端揃え (justify-content) */}
<div class="grid grid-cols-3 gap-2 h-48 w-80 border rounded dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-2 content-center justify-between">
  {/* ... items ... */}
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて配置方法を変更できます。

```html
<div class="grid place-content-start md:place-content-center ...">
  {/* モバイルでは左上揃え、md 以上で中央揃え */}
  {/* ... items ... */}
</div>
```

## 注意点

*   `place-content` は Flexbox または Grid コンテナに適用します。
*   **複数行/列が存在する場合にのみ効果があります。**
    *   Flexbox: `flex-wrap: wrap` または `flex-wrap: wrap-reverse` が設定され、アイテムが実際に折り返されている必要があります。
    *   Grid: グリッドトラックの合計サイズがコンテナサイズよりも小さい必要があります。
*   効果を確認するには、コンテナに明示的なサイズ (幅と高さの両方、または主軸と交差軸のサイズ) が設定されている必要があります。

## 関連ユーティリティ

*   `align-content`: 交差軸方向の行/列グループ全体の配置。
*   `justify-content`: 主軸方向のアイテム群全体の配置。
*   `align-items`: 単一行/列内でのアイテムの配置 (交差軸)。
*   `justify-items`: Grid のインライン軸方向のアイテム配置 (単一セル内)。
*   `place-items`: `align-items` と `justify-items` のショートハンド (Grid のみ)。

## 公式ドキュメント参照
*   [Tailwind CSS: Place Content](https://tailwindcss.com/docs/place-content)
*   [MDN: place-content](https://developer.mozilla.org/en-US/docs/Web/CSS/place-content)
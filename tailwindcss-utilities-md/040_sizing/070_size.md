## タイトル
title: Sizing: Size (幅と高さの同時設定)

## タグ
tags: ["tailwindcss", "utilities", "sizing", "size", "width", "height", "square", "responsive", "layout"]

## 概要
`size-{size}` ユーティリティは、要素の**幅 (width) と高さ (height) を同時に同じ値に設定**するためのショートハンドです。CSS の `width` および `height` プロパティに対応します。

主に正方形の要素を作成したり、幅と高さを一括で指定したい場合に便利です。このユーティリティは Tailwind CSS v3.3 で導入されました。

## 基本的な使い方とパラメータ

値は通常、Tailwind の `theme.spacing` スケール (`0`, `1`, `4`, `px` など) または `auto` を使用します。

*   **`size-auto`**: `width: auto; height: auto;`
*   **`size-0`**: `width: 0px; height: 0px;`
*   **`size-px`**: `width: 1px; height: 1px;`
*   **`size-4`**: `width: 1rem; height: 1rem;` (16px x 16px)
*   **`size-16`**: `width: 4rem; height: 4rem;` (64px x 64px)
*   **`size-full`**: `width: 100%; height: 100%;` (親要素に依存)
*   **`size-min`**: `width: min-content; height: min-content;`
*   **`size-max`**: `width: max-content; height: max-content;`
*   **`size-fit`**: `width: fit-content; height: fit-content;`

```html
<div class="flex flex-wrap items-start gap-4 p-4">

  {/* 固定サイズ */}
  <div class="size-16 p-2 bg-blue-200 dark:bg-blue-900/30 rounded flex items-center justify-center">size-16</div>
  <div class="size-24 p-2 bg-blue-300 dark:bg-blue-800/30 rounded flex items-center justify-center">size-24</div>
  <div class="size-32 p-2 bg-blue-400 dark:bg-blue-700/30 rounded flex items-center justify-center">size-32</div>

  {/* キーワード */}
  <div class="size-auto p-2 bg-green-200 dark:bg-green-900/30 rounded border dark:border-green-700">size-auto</div>
  <div class="size-min p-2 bg-green-300 dark:bg-green-800/30 rounded border dark:border-green-700">size-min</div>
  {/* size-max/fit は内容による */}

  {/* 親要素に依存 */}
  <div class="w-40 h-20 bg-gray-200 dark:bg-gray-700 rounded p-1"> {/* 親 */}
    <div class="size-full p-2 bg-yellow-300 dark:bg-yellow-800/30 rounded border dark:border-yellow-700">size-full (fills parent)</div>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてサイズを変更できます。

```html
{/* デフォルトは size-16、md 以上で size-32 */}
<div class="size-16 md:size-32 bg-purple-200 dark:bg-purple-900/30 rounded">
  Responsive Size
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.size` (または `theme.size`) でカスタムのサイズ値を追加できます。`theme.spacing` スケールを継承しているため、`spacing` で定義した値も `size-*` で使用可能です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        'icon-lg': '3rem', // 48px
      },
      size: { // size 固有のキーも追加可能
        'icon-sm': '1.5rem', // 24px
        'avatar': '2.5rem', // 40px
      }
    },
  },
}
```

```html
<div class="size-icon-sm bg-red-200 rounded">sm</div>
<div class="size-avatar bg-red-300 rounded-full"></div> {/* アバター例 */}
<div class="size-icon-lg bg-red-400 rounded">lg</div> {/* spacing から継承 */}
```

## 任意の値 (Arbitrary Values)

任意の値を使ってサイズを直接指定することも可能です。

```html
<div class="size-[100px] bg-indigo-200 rounded">size-[100px]</div>
<div class="size-[50vmin] bg-indigo-300 rounded">size-[50vmin]</div> {/* ビューポート単位 */}
```

## 注意点

*   `size-*` は `width` と `height` の両方を設定します。どちらか一方だけを設定したい場合は `w-*` または `h-*` を使用してください。
*   パーセンテージベースの値 (`size-full` など) は、親要素に適切なサイズが設定されている必要があります。
*   このユーティリティは Tailwind CSS v3.3 以降で利用可能です。

## 関連ユーティリティ

*   `width` (`w-*`): 要素の幅。
*   `height` (`h-*`): 要素の高さ。
*   `min-width` (`min-w-*`), `max-width` (`max-w-*`): 最小幅と最大幅。
*   `min-height` (`min-h-*`), `max-height` (`max-h-*`): 最小高さと最大高さ。

## 公式ドキュメント参照
*   [Tailwind CSS: Size](https://tailwindcss.com/docs/size)
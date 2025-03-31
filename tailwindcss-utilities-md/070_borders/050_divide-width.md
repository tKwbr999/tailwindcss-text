## タイトル
title: Borders: Divide Width (要素間のボーダー太さ)

## タグ
tags: ["tailwindcss", "utilities", "borders", "divide-width", "divide-x", "divide-y", "flexbox", "grid", "separator"]

## 概要
`divide-x-{width}`, `divide-y-{width}`, `divide-x`, `divide-y` ユーティリティは、Flexbox または Grid コンテナ内の**隣接する子要素の間**にボーダー (区切り線) を追加します。これは、各子要素 (最初の子を除く) に `border-left-width` または `border-top-width` を設定することで実現されます。

ボーダーの色やスタイルも別途指定する必要があります。

## 基本的な使い方とパラメータ

### 水平方向の区切り (`divide-x-{width}` または `divide-x`)

Flex コンテナ (`flex-row` または `inline-flex`) または Grid コンテナ内の隣接する**列**の間に垂直なボーダーを追加します。最初の子要素の**左側**にはボーダーは追加されません。

*   **`divide-x`**: `border-left-width: 1px;` を 2 番目以降の子要素に適用します。
*   **`divide-x-0`**: `border-left-width: 0px;` (区切りなし)
*   **`divide-x-2`**: `border-left-width: 2px;`
*   **`divide-x-4`**: `border-left-width: 4px;`
*   **`divide-x-8`**: `border-left-width: 8px;`
*   **`divide-x-reverse`**: `flex-direction: row-reverse` の場合に、`border-right-width` を適用します。

```html
<div class="flex divide-x divide-gray-300 dark:divide-gray-600 bg-gray-100 dark:bg-gray-800 rounded p-2">
  <div class="px-4 py-2">Item 1</div> {/* 左ボーダーなし */}
  <div class="px-4 py-2">Item 2</div> {/* 左に 1px ボーダー */}
  <div class="px-4 py-2">Item 3</div> {/* 左に 1px ボーダー */}
</div>

<div class="flex divide-x-4 divide-blue-500 divide-dashed mt-4 bg-gray-100 dark:bg-gray-800 rounded p-2"> {/* 太さ、色、スタイルを指定 */}
  <div class="px-4 py-2">Item A</div>
  <div class="px-4 py-2">Item B</div>
  <div class="px-4 py-2">Item C</div>
</div>

<div class="flex flex-row-reverse divide-x-2 divide-x-reverse divide-red-500 mt-4 bg-gray-100 dark:bg-gray-800 rounded p-2"> {/* 逆順 */}
  <div class="px-4 py-2">Right 1</div> {/* 右ボーダーなし */}
  <div class="px-4 py-2">Right 2</div> {/* 右に 2px ボーダー */}
  <div class="px-4 py-2">Right 3</div> {/* 右に 2px ボーダー */}
</div>
```

### 垂直方向の区切り (`divide-y-{width}` または `divide-y`)

Flex コンテナ (`flex-col`) または Grid コンテナ内の隣接する**行**の間に水平なボーダーを追加します。最初の子要素の**上側**にはボーダーは追加されません。

*   **`divide-y`**: `border-top-width: 1px;` を 2 番目以降の子要素に適用します。
*   **`divide-y-0`**: `border-top-width: 0px;`
*   **`divide-y-2`**: `border-top-width: 2px;`
*   **`divide-y-4`**: `border-top-width: 4px;`
*   **`divide-y-8`**: `border-top-width: 8px;`
*   **`divide-y-reverse`**: `flex-direction: column-reverse` の場合に、`border-bottom-width` を適用します。

```html
<div class="flex flex-col divide-y divide-gray-300 dark:divide-gray-600 bg-gray-100 dark:bg-gray-800 rounded p-2 w-48">
  <div class="py-2 px-4">Item 1</div> {/* 上ボーダーなし */}
  <div class="py-2 px-4">Item 2</div> {/* 上に 1px ボーダー */}
  <div class="py-2 px-4">Item 3</div> {/* 上に 1px ボーダー */}
</div>

<div class="grid grid-cols-1 divide-y-2 divide-green-500 divide-dotted mt-4 bg-gray-100 dark:bg-gray-800 rounded p-2 w-48"> {/* Grid でも使用可能 */}
  <div class="py-2 px-4">Row A</div>
  <div class="py-2 px-4">Row B</div>
  <div class="py-2 px-4">Row C</div>
</div>
```

## 色とスタイルの指定

`divide-{width}` と一緒に、`divide-{color}` および `divide-{style}` ユーティリティを使って、区切り線の色とスタイルを指定する必要があります。

*   `divide-slate-500`, `divide-red-600` など
*   `divide-solid` (デフォルトに近い), `divide-dashed`, `divide-dotted`, `divide-double`, `divide-none`

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて区切り線の太さ、色、スタイルを変更できます。

```html
{/* モバイルでは区切りなし、md 以上で 1px の区切り線 */}
<div class="flex divide-x-0 md:divide-x md:divide-gray-300 ...">
  {/* ... items ... */}
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.divideWidth` (または `theme.divideWidth`) でカスタムの太さを追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      divideWidth: {
        'DEFAULT': '1px',
        '0': '0',
        '2': '2px',
        '3': '3px', // divide-x-3, divide-y-3 を追加
        '4': '4px',
        '8': '8px',
      },
    },
  },
}
```

## 任意の値 (Arbitrary Values)

任意の値を使って区切り線の太さを直接指定することも可能です。

```html
<div class="flex divide-x-[3px] divide-blue-500 ...">...</div>
```

## 注意点

*   `divide-*` ユーティリティは、コンテナ要素 (Flex または Grid) に適用し、その**直接の子要素の間**にボーダーを追加します。ネストされた要素には影響しません。
*   これは各子要素に `border-left` または `border-top` を追加するショートカットです。複雑なケースでは、子要素に直接 `border-l-*` や `border-t-*` を適用する方が制御しやすい場合があります。
*   `divide-x-reverse` / `divide-y-reverse` は、対応する `flex-*-reverse` と一緒に使用します。

## 関連ユーティリティ

*   `border-width`, `border-color`, `border-style`: 要素自身のボーダー。
*   `divide-color`: 区切り線の色。
*   `divide-style`: 区切り線のスタイル。
*   `flex-direction`: Flexbox の方向。
*   `gap`: Flexbox/Grid アイテム間の溝。

## 公式ドキュメント参照
*   [Tailwind CSS: Divide Width](https://tailwindcss.com/docs/divide-width)
*   [Tailwind CSS: Divide Color](https://tailwindcss.com/docs/divide-color)
*   [Tailwind CSS: Divide Style](https://tailwindcss.com/docs/divide-style)
## タイトル
title: Borders: Divide Color (要素間のボーダー色)

## タグ
tags: ["tailwindcss", "utilities", "borders", "divide-color", "divide", "color", "opacity", "separator"]

## 概要
`divide-{color}` ユーティリティは、`divide-x-*` または `divide-y-*` ユーティリティで作成された要素間の区切り線の色を設定します。CSS の `border-color` プロパティを、特定の子要素セレクタ (`> * + *`) を介して適用します。

値は、Tailwind のカラーパレット (`slate`, `red`, `blue`, `emerald` など、シェードを含む)、`inherit`, `current`, `transparent` を使用できます。

## 基本的な使い方とパラメータ

`divide-{color}-{shade}` の形式でクラスを指定します。`divide-x` または `divide-y` (または `divide-x-{width}`, `divide-y-{width}`) も同時に指定する必要があります。

*   `divide-inherit`: 親要素のボーダー色を継承します (通常はあまり使われない)。
*   `divide-current`: 要素自身のテキスト色 (`color`) と同じ色を使用します。
*   `divide-transparent`: 透明な区切り線。
*   `divide-black`, `divide-white`
*   `divide-slate-500`, `divide-red-600`, `divide-emerald-400` など (色名 + シェード)

```html
<div class="space-y-4 p-4">

  {/* 水平方向の区切り色 */}
  <div>
    <p class="text-sm mb-1">Horizontal Divide Color</p>
    <div class="flex divide-x divide-blue-500 bg-gray-100 dark:bg-gray-800 rounded p-2">
      <div class="px-4 py-2">Item 1</div>
      <div class="px-4 py-2">Item 2</div> {/* Left border is blue-500 */}
      <div class="px-4 py-2">Item 3</div> {/* Left border is blue-500 */}
    </div>
  </div>

  {/* 垂直方向の区切り色 */}
  <div>
    <p class="text-sm mb-1">Vertical Divide Color</p>
    <div class="flex flex-col divide-y divide-green-600 bg-gray-100 dark:bg-gray-800 rounded p-2 w-48">
      <div class="py-2 px-4">Item A</div>
      <div class="py-2 px-4">Item B</div> {/* Top border is green-600 */}
      <div class="py-2 px-4">Item C</div> {/* Top border is green-600 */}
    </div>
  </div>

  {/* 不透明度の変更 */}
   <div>
    <p class="text-sm mb-1">Divide Color with Opacity</p>
    <div class="flex divide-x-2 divide-purple-500/50 bg-gray-100 dark:bg-gray-800 rounded p-2">
      <div class="px-4 py-2">Item X</div>
      <div class="px-4 py-2">Item Y</div> {/* Left border is purple-500 with 50% opacity */}
      <div class="px-4 py-2">Item Z</div>
    </div>
     <div class="flex divide-x-2 divide-purple-500/[.25] mt-2 bg-gray-100 dark:bg-gray-800 rounded p-2">
      <div class="px-4 py-2">Item P</div>
      <div class="px-4 py-2">Item Q</div> {/* Left border is purple-500 with 25% opacity */}
    </div>
  </div>

</div>
```

## 不透明度の変更

`/{opacity}` 修飾子を使って、区切り線の色の不透明度を変更できます。

```html
<div class="flex divide-x divide-red-500/30 ...">
  {/* Red divider with 30% opacity */}
</div>
```
これは内部的に `--tw-divide-opacity` CSS 変数を設定することで実現されます。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて区切り線の色を変更できます。

```html
<div class="flex divide-x divide-gray-300 md:divide-blue-500 ...">
  {/* Gray divider on small screens, blue on medium and wider */}
</div>
```

## 状態修飾子

`dark:` 修飾子と組み合わせて、ダークモード時に区切り線の色を変更するのは一般的です。`hover:` や `focus:` などは、コンテナ要素に適用するため、個々の子要素間の区切り線の状態に応じた変化を直接制御するのは難しいです (子要素側で `group-hover` などを使う必要があります)。

```html
<div class="flex divide-x divide-gray-200 dark:divide-gray-700 ...">
  {/* Divider color adapts to dark mode */}
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.divideColor` (または `theme.divideColor`) でカスタムカラーを追加できます。通常は `theme.borderColor` を継承し、さらに `theme.borderColor` は `theme.colors` を継承するため、`colors` で定義したカスタムカラーは `divide-*` でも利用可能です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#ff5733',
      },
      // divideColor は borderColor を継承し、borderColor は colors を継承する
      // divideColor: theme => ({
      //   ...theme('borderColor'), // borderColor を継承
      //   'primary': '#3490dc',
      //   'secondary': '#ffed4a',
      // }),
      // borderColor: theme => ({ // borderColor をカスタマイズしても divideColor に影響
      //   ...theme('colors'),
      //   DEFAULT: theme('colors.gray.200', 'currentColor'),
      //   'brand-alt': '#e3342f',
      // })
    },
  },
}
```

```html
<div class="flex divide-x divide-brand ...">Custom brand divider color</div>
```

## 任意の値 (Arbitrary Values)

任意の色コードを使って区切り線の色を直接指定することも可能です。

```html
<div class="flex divide-x divide-[#ffcc00] ...">Arbitrary yellow divider</div>
<div class="flex divide-y divide-[var(--my-separator-color)]/[.6] ...">Divider color from CSS variable with opacity</div>
```

## 注意点

*   `divide-{color}` ユーティリティは、`divide-x` または `divide-y` (または `divide-*-{width}`) がコンテナ要素に適用されていないと効果がありません。
*   区切り線のスタイル (線種) は `divide-{style}` ユーティリティで制御します。
*   デフォルトの区切り線の色は `theme.borderColor.DEFAULT` (通常は `gray-200` 付近) に設定されています。

## 関連ユーティリティ

*   `divide-width`: 区切り線の太さ。
*   `divide-style`: 区切り線のスタイル (solid, dashed など)。
*   `border-color`: 要素自身のボーダーの色。
*   `text-color`, `background-color`: 他のカラーユーティリティ。

## 公式ドキュメント参照
*   [Tailwind CSS: Divide Color](https://tailwindcss.com/docs/divide-color)
*   [MDN: border-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color) (内部的には border-left/top-color を使用)
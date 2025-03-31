## タイトル
title: Effects: Box Shadow Color (シャドウの色)

## タグ
tags: ["tailwindcss", "utilities", "effects", "box-shadow-color", "shadow-color", "shadow", "color", "opacity"]

## 概要
`shadow-{color}` ユーティリティは、`shadow-*` ユーティリティで適用されたボックスシャドウの色を設定します。CSS の `--tw-shadow-color` カスタムプロパティを介して、`box-shadow` プロパティの色部分を制御します。

値は、Tailwind のカラーパレット (`slate`, `red`, `blue`, `emerald` など、シェードを含む)、`inherit`, `current`, `transparent` を使用できます。

**注意:** このユーティリティはシャドウの**色のみ**を変更します。シャドウのサイズやぼかし具合 (`shadow-sm`, `shadow-lg` など) も別途指定する必要があります。

## 基本的な使い方とパラメータ

`shadow-{color}-{shade}` または `shadow-{keyword}` の形式でクラスを指定します。`shadow` または `shadow-{size}` と組み合わせて使用します。

*   **`shadow-inherit`**: 親要素のシャドウ色を継承 (通常は使われない)。
*   **`shadow-current`**: 要素自身のテキスト色 (`color`) と同じ色を使用します。
*   **`shadow-transparent`**: 透明なシャドウ (効果が見えない)。
*   **`shadow-black`, `shadow-white`**
*   **`shadow-slate-500`, `shadow-red-600`, `shadow-emerald-400` など**: 色名 + シェード。

**デフォルトの色:** `shadow-{size}` のみを指定した場合、デフォルトのシャドウ色は `--tw-shadow-color` 変数で定義され、通常は半透明の黒 (`0,0,0`) です。

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 bg-gray-100 dark:bg-gray-900">
  {/* デフォルトのシャドウ色 (半透明の黒) */}
  <div class="shadow-xl p-6 bg-white dark:bg-gray-800 rounded-lg text-center">Default Shadow Color</div>

  {/* 色付きシャドウ */}
  <div class="shadow-xl shadow-blue-500/50 p-6 bg-white dark:bg-gray-800 rounded-lg text-center">shadow-blue-500/50</div>
  <div class="shadow-xl shadow-green-600/40 p-6 bg-white dark:bg-gray-800 rounded-lg text-center">shadow-green-600/40</div>
  <div class="shadow-lg shadow-pink-500 p-6 bg-white dark:bg-gray-800 rounded-lg text-center">shadow-pink-500 (Opacity 100%)</div>
  <div class="shadow-lg shadow-current text-purple-600 p-6 bg-white dark:bg-gray-800 rounded-lg text-center">shadow-current (Purple)</div>
  <div class="shadow-lg shadow-transparent p-6 bg-white dark:bg-gray-800 rounded-lg text-center border dark:border-gray-700">shadow-transparent</div>
</div>
```

## 不透明度の変更

`/{opacity}` 修飾子を使って、シャドウの色の不透明度を変更できます。これは色付きシャドウを自然に見せるために非常によく使われます。

```html
<div class="shadow-lg shadow-indigo-500/30 ...">Indigo shadow with 30% opacity</div>
<div class="shadow-lg shadow-indigo-500/[.15] ...">Indigo shadow with 15% opacity (Arbitrary)</div>
```
これは内部的に `--tw-shadow-color` 変数に RGBA または HSLA の値を設定することで実現されます。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてシャドウの色を変更できます。

```html
<div class="shadow-lg shadow-gray-500/50 md:shadow-blue-500/50 ...">
  Shadow color changes on medium screens.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じてシャドウの色を変更できます。

```html
<button class="shadow hover:shadow-lg hover:shadow-blue-500/40 focus:shadow-xl focus:shadow-green-500/50 ...">
  Shadow color changes on hover/focus
</button>

<div class="shadow-md shadow-black/10 dark:shadow-white/10 ...">
  Subtle shadow color adapted for dark mode.
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.boxShadowColor` (または `theme.boxShadowColor`) でカスタムカラーを追加できます。通常は `theme.colors` を継承するため、`colors` で定義したカスタムカラーは `shadow-*` でも利用可能です。デフォルトのシャドウ色 (`--tw-shadow-color` のデフォルト値) もここで変更できます。

```javascript
// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#ff5733',
      },
      boxShadowColor: theme => ({
        // デフォルトのシャドウ色を変更 (例: 少し濃いグレー)
        // DEFAULT: theme('colors.gray.700', '#374151'),
        ...theme('colors'), // colors を継承
        'primary': theme('colors.blue.500'),
        'danger-light': theme('colors.red.300'),
      }),
    },
  },
}
```

```html
<div class="shadow-lg shadow-primary/40 ...">Primary colored shadow</div>
<div class="shadow-lg shadow-brand/30 ...">Brand colored shadow</div>
```

## 任意の値 (Arbitrary Values)

任意の色コードを使ってシャドウの色を直接指定することも可能です。

```html
<div class="shadow-lg shadow-[#ffcc00]/60 ...">Arbitrary yellow shadow</div>
<div class="shadow-xl shadow-[var(--my-shadow-color)]/[.25] ...">Shadow color from CSS variable with opacity</div>
```

## 注意点

*   `shadow-{color}` ユーティリティは、`shadow` または `shadow-{size}` ユーティリティと組み合わせて使用する必要があります。色だけを指定してもシャドウは表示されません。
*   Tailwind は内部的に `--tw-shadow` (シャドウの形状) と `--tw-shadow-color` (シャドウの色) という 2 つの CSS 変数を使って `box-shadow` を生成します。`shadow-{color}` は `--tw-shadow-color` を上書きします。

## 関連ユーティリティ

*   `box-shadow` (`shadow-*`): シャドウのサイズと形状。
*   `opacity`: 要素全体の不透明度。
*   `ring-color`: リングの色。
*   `border-color`, `text-color`, `background-color`: 他のカラーユーティリティ。

## 公式ドキュメント参照
*   [Tailwind CSS: Box Shadow Color](https://tailwindcss.com/docs/box-shadow-color)
*   [MDN: box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
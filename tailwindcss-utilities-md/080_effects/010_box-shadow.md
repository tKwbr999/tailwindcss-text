## タイトル
title: Effects: Box Shadow (ボックスシャドウ)

## タグ
tags: ["tailwindcss", "utilities", "effects", "box-shadow", "shadow", "elevation", "depth"]

## 概要
`shadow-{size}` ユーティリティは、要素にドロップシャドウ効果を追加します。CSS の `box-shadow` プロパティに対応します。

Tailwind は、`sm` (小さい) から `2xl` (非常に大きい) までのサイズと、内側のシャドウ (`inner`)、およびシャドウなし (`none`) を含む、事前定義されたシャドウのセットを提供します。これらは通常、複数の `box-shadow` 値を組み合わせて自然な影を表現しています。

## 基本的な使い方とパラメータ

*   **`shadow-sm`**: 小さなシャドウ。
*   **`shadow`**: 標準的なシャドウ。
*   **`shadow-md`**: やや大きいシャドウ (デフォルトの `shadow` より少し大きい)。
*   **`shadow-lg`**: 大きいシャドウ。
*   **`shadow-xl`**: さらに大きいシャドウ。
*   **`shadow-2xl`**: 最も大きいシャドウ。
*   **`shadow-inner`**: 要素の内側にシャドウを適用します。
*   **`shadow-none`**: シャドウを削除します (`box-shadow: none;`)。

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 bg-gray-100 dark:bg-gray-900">
  <div class="shadow-sm p-6 bg-white dark:bg-gray-800 rounded-lg text-center">shadow-sm</div>
  <div class="shadow p-6 bg-white dark:bg-gray-800 rounded-lg text-center">shadow</div>
  <div class="shadow-md p-6 bg-white dark:bg-gray-800 rounded-lg text-center">shadow-md</div>
  <div class="shadow-lg p-6 bg-white dark:bg-gray-800 rounded-lg text-center">shadow-lg</div>
  <div class="shadow-xl p-6 bg-white dark:bg-gray-800 rounded-lg text-center">shadow-xl</div>
  <div class="shadow-2xl p-6 bg-white dark:bg-gray-800 rounded-lg text-center">shadow-2xl</div>
  <div class="shadow-inner p-6 bg-gray-200 dark:bg-gray-700 rounded-lg text-center">shadow-inner</div>
  <div class="shadow-none p-6 bg-white dark:bg-gray-800 rounded-lg text-center border dark:border-gray-700">shadow-none</div>
</div>
```

## シャドウの色 (`shadow-{color}`)

デフォルトでは、シャドウの色は半透明の黒 (`--tw-shadow-color: 0,0,0`) をベースに、`--tw-shadow` CSS 変数で定義された `box-shadow` 値と組み合わされます。

`shadow-{color}` ユーティリティ (例: `shadow-blue-500/50`) を使うと、シャドウの色と不透明度を変更できます (Tailwind v3.0+)。これは `--tw-shadow-color` 変数を上書きします。

```html
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 bg-gray-100 dark:bg-gray-900">
  <div class="shadow-lg shadow-cyan-500/50 p-6 bg-white dark:bg-gray-800 rounded-lg text-center">shadow-lg shadow-cyan-500/50</div>
  <div class="shadow-xl shadow-indigo-500/40 p-6 bg-white dark:bg-gray-800 rounded-lg text-center">shadow-xl shadow-indigo-500/40</div>
</div>
```
**注意:** `shadow-{color}` はシャドウの**色**のみを変更します。シャドウのサイズやぼかし具合は `shadow-sm`, `shadow-lg` などで指定する必要があります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてシャドウのサイズや色を変更できます。

```html
<div class="shadow-md md:shadow-xl lg:shadow-none ...">
  Shadow size changes based on screen size.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じてシャドウを変更できます。要素を浮き上がらせるようなホバーエフェクトによく使われます。

```html
<button class="bg-white dark:bg-gray-700 p-4 rounded shadow hover:shadow-lg focus:shadow-xl transition-shadow duration-200">
  Shadow changes on hover/focus
</button>

<div class="shadow dark:shadow-lg dark:shadow-blue-900/50 ...">
  Different shadow in dark mode.
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.boxShadow` (または `theme.boxShadow`) でカスタムのシャドウを追加したり、デフォルトのシャドウを上書きしたりできます。値には CSS の `box-shadow` プロパティで有効な文字列を指定します。複数のシャドウをカンマ区切りで指定することも可能です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', // `shadow` クラスのデフォルト
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)', // 新しいサイズを追加
        'outline-blue': '0 0 0 3px rgba(59, 130, 246, 0.5)', // アウトライン風シャドウ
      },
    },
  },
}
```

```html
<div class="shadow-3xl ...">Custom 3xl shadow</div>
<button class="focus:shadow-outline-blue ...">Custom outline shadow on focus</button>
```
`theme.extend.boxShadowColor` (または `theme.boxShadowColor`) でシャドウの色 (`--tw-shadow-color`) のデフォルト値を変更したり、カスタムカラーを追加したりすることもできます。

## 任意の値 (Arbitrary Values)

任意の値を使って `box-shadow` を直接指定することも可能です。

```html
<div class="shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] ...">Arbitrary shadow</div>
<div class="shadow-[0_0_0_4px_theme(colors.red.500)] ...">Arbitrary colored shadow using theme color</div>
```

## 注意点

*   シャドウは要素の境界の外側に描画されますが、`outline` とは異なり、**レイアウト上のスペースは占有しません**。
*   複数のシャドウ効果 (例: `shadow-lg` と `shadow-blue-500`) を組み合わせる場合、Tailwind は内部的に CSS 変数 (`--tw-shadow`, `--tw-shadow-color`) を使ってこれらを合成します。
*   `shadow-inner` は内側にシャドウを描画します。

## 関連ユーティリティ

*   `box-shadow-color` (`shadow-{color}`): シャドウの色。
*   `opacity`: 要素全体の不透明度。
*   `ring-width`, `ring-color` など (`ring-*`): `box-shadow` を利用したリング効果。

## 公式ドキュメント参照
*   [Tailwind CSS: Box Shadow](https://tailwindcss.com/docs/box-shadow)
*   [Tailwind CSS: Box Shadow Color](https://tailwindcss.com/docs/box-shadow-color)
*   [MDN: box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
## タイトル
title: Borders: Ring Color (リングの色)

## タグ
tags: ["tailwindcss", "utilities", "borders", "ring", "ring-color", "color", "focus", "shadow", "opacity"]

## 概要
`ring-{color}` ユーティリティは、`ring` または `ring-{width}` ユーティリティで作成されたリング (輪郭線) の色を設定します。CSS の `--tw-ring-color` カスタムプロパティを介して `box-shadow` の色を制御します。

値は、Tailwind のカラーパレット (`slate`, `red`, `blue`, `emerald` など、シェードを含む)、`inherit`, `current`, `transparent` を使用できます。

## 基本的な使い方とパラメータ

`ring-{color}-{shade}` または `ring-{keyword}` の形式でクラスを指定します。リングの太さ (`ring`, `ring-2` など) も同時に指定する必要があります。

*   **`ring-inherit`**: 親要素のリング色を継承 (通常は使われない)。
*   **`ring-current`**: 要素自身のテキスト色 (`color`) と同じ色を使用します。
*   **`ring-transparent`**: 透明なリング。
*   **`ring-black`, `ring-white`**
*   **`ring-slate-500`, `ring-red-600`, `ring-emerald-400` など**: 色名 + シェード。

**デフォルトの色:** `ring` または `ring-{width}` のみを指定した場合、デフォルトのリング色は `rgb(59 130 246 / 0.5)` (半透明の青、`blue-500/50` に近い) が適用されます。これは `tailwind.config.js` で変更可能です。

```html
<div class="grid grid-cols-2 sm:grid-cols-3 gap-6 p-4">
  {/* フォーカス時に色付きリングを表示 */}
  <button class="focus:outline-none focus:ring-2 focus:ring-blue-500 p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Focus Blue Ring</button>
  <button class="focus:outline-none focus:ring-4 focus:ring-green-500 p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Focus Green Ring (Thick)</button>
  <button class="focus:outline-none focus:ring focus:ring-pink-500/50 p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Focus Pink Ring (50% Opacity)</button>
  <button class="focus:outline-none focus:ring-2 focus:ring-current text-purple-600 p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Focus Current Ring (Purple)</button>
  <button class="focus:outline-none focus:ring-2 focus:ring-transparent p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Focus Transparent Ring</button>
  <button class="focus:outline-none focus:ring p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Focus Default Ring Color</button> {/* デフォルト色 */}
</div>
```

## 不透明度の変更

`/{opacity}` 修飾子を使って、リングの色の不透明度を変更できます。

```html
<button class="focus:outline-none focus:ring-4 focus:ring-indigo-600/75 ...">
  Focus Indigo Ring with 75% opacity
</button>
<button class="focus:outline-none focus:ring-4 focus:ring-indigo-600/[.15] ...">
  Focus Indigo Ring with 15% opacity (Arbitrary)
</button>
```
これは内部的に `--tw-ring-opacity` CSS 変数を設定することで実現されます。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてリングの色を変更できます。

```html
<button class="focus:ring focus:ring-gray-500 md:focus:ring-blue-500 ...">
  Ring color changes on medium screens.
</button>
```

## 状態修飾子

`focus:`, `focus-visible:`, `focus-within:`, `hover:`, `dark:` などと組み合わせて、インタラクションやモードに応じてリングの色を変更するのが一般的です。

```html
<input type="text" class="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500 dark:focus-visible:ring-violet-400 rounded p-2 border dark:border-gray-700 ...">

<div class="group rounded-lg p-4 border dark:border-gray-700 hover:ring-2 hover:ring-sky-500 ...">
  <p>Ring appears on group hover</p>
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.ringColor` (または `theme.ringColor`) でカスタムカラーを追加できます。通常は `theme.colors` を継承するため、`colors` で定義したカスタムカラーは `ring-*` でも利用可能です。デフォルトのリング色もここで変更できます。

```javascript
// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#ff5733',
      },
      ringColor: theme => ({
        // DEFAULT キーで `ring` クラスのみの場合の色を設定
        DEFAULT: theme('colors.blue.500', '#3b82f6'),
        'primary': theme('colors.indigo.500', '#6366f1'),
        'danger': theme('colors.red.600', '#dc2626'),
        // 'brand' は colors から継承される
      }),
    },
  },
}
```

```html
<button class="focus:ring focus:ring-primary ...">Focus primary ring color</button>
<button class="focus:ring focus:ring-danger ...">Focus danger ring color</button>
<button class="focus:ring focus:ring-brand ...">Focus brand ring color</button>
<button class="focus:ring ...">Focus default ring color (now blue-500)</button>
```

## 任意の値 (Arbitrary Values)

任意の色コードを使ってリングの色を直接指定することも可能です。

```html
<button class="focus:ring-2 focus:ring-[#ffcc00] ...">Focus arbitrary yellow ring</button>
<button class="focus:ring-2 focus:ring-[var(--focus-ring-color)]/[.6] ...">Ring color from CSS variable with opacity</button>
```

## 注意点

*   リングを表示するには、通常、色 (`ring-{color}`) と太さ (`ring`, `ring-2` など) を指定する必要があります。
*   リングは `box-shadow` を利用しているため、複数の `box-shadow` を組み合わせる際には注意が必要です (Tailwind は内部で CSS 変数を使ってこれを管理しています)。
*   リングは要素のボーダーの外側に描画されます。要素との間にスペースを設けたい場合は `ring-offset-*` ユーティリティを使用します。

## 関連ユーティリティ

*   `ring-width`: リングの太さ。
*   `ring-offset-width`: リングと要素の間のオフセット幅。
*   `ring-offset-color`: リングオフセット部分の色。
*   `outline-color`: アウトラインの色。
*   `border-color`, `text-color`, `background-color`: 他のカラーユーティリティ。

## 公式ドキュメント参照
*   [Tailwind CSS: Ring Color](https://tailwindcss.com/docs/ring-color)
*   [MDN: box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) (リングの実装に使われている)
## タイトル
title: Borders: Border Color (ボーダーの色)

## タグ
tags: ["tailwindcss", "utilities", "borders", "border-color", "color", "opacity"]

## 概要
`border-{color}` ユーティリティは、要素のボーダー (枠線) の色を設定します。CSS の `border-color` プロパティに対応します。

値は、Tailwind のカラーパレット (`slate`, `red`, `blue`, `emerald` など、シェードを含む)、`inherit`, `current`, `transparent` を使用できます。また、特定の辺の色だけを設定するユーティリティ (`border-t-*`, `border-x-*` など) もあります。

## 基本的な使い方とパラメータ

### すべての辺 (`border-{color}`)

`border-{color}-{shade}` の形式でクラスを指定します。ボーダー幅 (`border`, `border-2` など) も同時に指定する必要があります。

*   `border-inherit`: 親要素のボーダー色を継承します。
*   `border-current`: 要素自身のテキスト色 (`color`) と同じ色を使用します。
*   `border-transparent`: 透明なボーダー。スペースは確保されますが見えません。
*   `border-black`, `border-white`
*   `border-slate-500`, `border-red-600`, `border-emerald-400` など (色名 + シェード)

```html
<div class="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
  <div class="border-4 border-black dark:border-white p-4 rounded">border-black</div>
  <div class="border-4 border-transparent p-4 rounded bg-gray-200 dark:bg-gray-700">border-transparent</div>
  <div class="border-4 border-current text-blue-600 dark:text-blue-400 p-4 rounded">border-current</div>
  <div class="border-4 border-red-500 p-4 rounded">border-red-500</div>
  <div class="border-4 border-lime-400 dark:border-lime-600 p-4 rounded">border-lime-400</div>
  <div class="border-4 border-fuchsia-700 p-4 rounded">border-fuchsia-700</div>
</div>
```

### 特定の辺 (`border-{t|r|b|l}-{color}`)

特定の辺のボーダー色を設定します。

*   `border-t-{color}`: 上辺 (`border-top-color`)
*   `border-r-{color}`: 右辺 (`border-right-color`)
*   `border-b-{color}`: 下辺 (`border-bottom-color`)
*   `border-l-{color}`: 左辺 (`border-left-color`)

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
  <div class="border-4 border-t-blue-500 border-r-green-500 border-b-red-500 border-l-yellow-500 p-4 rounded">Multi-color border</div>
  <div class="border-b-4 border-indigo-500 p-4 rounded">Bottom border only (color)</div>
</div>
```

### 水平・垂直方向 (`border-x-{color}`, `border-y-{color}`)

*   **`border-x-{color}`**: 左右 (`border-left-color`, `border-right-color`) のボーダー色を同時に設定します。
*   **`border-y-{color}`**: 上下 (`border-top-color`, `border-bottom-color`) のボーダー色を同時に設定します。

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
  <div class="border-4 border-x-cyan-500 border-y-transparent p-4 rounded">border-x-cyan-500</div>
  <div class="border-4 border-y-pink-500 border-x-transparent p-4 rounded">border-y-pink-500</div>
</div>
```

## 不透明度の変更

`/{opacity}` 修飾子を使って、ボーダーの色の不透明度を変更できます。

```html
<div class="border-4 border-purple-600/50 p-4 rounded">Purple border with 50% opacity</div>
<div class="border-4 border-purple-600/[.20] p-4 rounded mt-4">Purple border with 20% opacity (Arbitrary)</div>
```
これは内部的に `--tw-border-opacity` CSS 変数を設定することで実現されます。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてボーダー色を変更できます。

```html
<div class="border-4 border-gray-300 md:border-blue-500 ...">
  Border color changes on medium screens.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `dark:`, `group-hover:`, `focus-within:` などと組み合わせて、インタラクションやモードに応じてボーダー色を変更するのは非常に一般的です。入力フィールドのフォーカス状態を示す際などによく使われます。

```html
<input type="text" class="border-2 border-gray-300 focus:border-blue-500 dark:border-gray-700 dark:focus:border-blue-600 rounded p-2">

<div class="border border-slate-200 dark:border-slate-700 rounded group hover:border-slate-400 dark:hover:border-slate-500 ...">
  <p class="group-hover:text-slate-700 dark:group-hover:text-slate-300">Hoverable card</p>
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.borderColor` (または `theme.borderColor`) でカスタムカラーを追加できます。通常は `theme.colors` を継承するため、`colors` で定義したカスタムカラーは `border-*` でも利用可能です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#ff5733',
      },
      // borderColor は通常 colors を継承する
      // borderColor: theme => ({
      //   ...theme('colors'),
      //   DEFAULT: theme('colors.gray.200', 'currentColor'), // デフォルトのボーダー色
      //   'primary': '#3490dc',
      //   'danger': '#e3342f',
      // }),
    },
  },
}
```

```html
<div class="border-4 border-brand ...">Custom brand border color</div>
```
shadcn/ui を使用している場合、ボーダー色は主に CSS 変数 (`--border`, `--input`, `--ring`) を介して制御されます。

## 任意の値 (Arbitrary Values)

任意の色コードを使ってボーダー色を直接指定することも可能です。

```html
<div class="border-4 border-[#aabbcc] ...">Arbitrary border color</div>
<div class="border-b-2 border-[var(--my-border-color)]/[.75] ...">Border color from CSS variable with opacity</div>
```

## 注意点

*   ボーダーを表示するには、通常、色 (`border-{color}`) に加えて、太さ (`border`, `border-2` など) とスタイル (`border-solid` など) を指定する必要があります。ただし、`border-width` が 0 以外の場合、デフォルトで `border-style: solid` と現在のテキスト色に近い色が適用されることが多いです。
*   `border-current` は要素のテキスト色 (`color`) を使用します。

## 関連ユーティリティ

*   `border-width`: ボーダーの太さ。
*   `border-style`: ボーダーの線種。
*   `divide-color`: **子要素の間**のボーダー色。
*   `ring-color`: アウトラインのようなリングの色。
*   `text-color`, `background-color`: 他のカラーユーティリティ。

## 公式ドキュメント参照
*   [Tailwind CSS: Border Color](https://tailwindcss.com/docs/border-color)
*   [MDN: border-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
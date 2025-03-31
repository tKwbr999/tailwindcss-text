## タイトル
title: Backgrounds: Background Color (背景色)

## タグ
tags: ["tailwindcss", "utilities", "backgrounds", "background-color", "bg", "color", "opacity"]

## 概要
`bg-{color}` ユーティリティは、要素の背景色を設定します。CSS の `background-color` プロパティに対応します。

Tailwind は豊富なカラーパレットをデフォルトで提供しており (`slate`, `red`, `blue`, `emerald` など)、各色には通常 10 段階の明度 (シェード、`50` ～ `900`) が用意されています。

## 基本的な使い方とパラメータ

`bg-{color}-{shade}` の形式でクラスを指定します。

*   `bg-inherit`: 親要素の背景色を継承します。
*   `bg-current`: 要素自身のテキスト色 (`color`) と同じ色を使用します。
*   `bg-transparent`: 透明な背景。
*   `bg-black`, `bg-white`
*   `bg-slate-500`, `bg-red-600`, `bg-emerald-400` など (色名 + シェード)

```html
<div class="space-y-2 p-4">
  <div class="p-4 rounded bg-inherit border dark:border-gray-700">Inherit background (depends on parent)</div>
  <div class="p-4 rounded bg-current text-blue-600 dark:text-blue-400 border dark:border-gray-700">Current color background (matches text color)</div>
  <div class="p-4 rounded bg-transparent border dark:border-gray-700">Transparent background</div>
  <div class="p-4 rounded bg-black text-white">Black background</div>
  <div class="p-4 rounded bg-white text-black border dark:border-gray-300">White background</div>
  <div class="p-4 rounded bg-yellow-300 dark:bg-yellow-700 text-yellow-900 dark:text-yellow-100">Yellow 300 (Dark: Yellow 700)</div>
  <div class="p-4 rounded bg-sky-600 text-white">Sky 600</div>
</div>
```

## 不透明度の変更

`/{opacity}` 修飾子を使って、背景色の不透明度を変更できます。値は `0` から `100` のパーセンテージ、または `theme.opacity` で定義されたキー (例: `50`, `75`) を使用します。

```html
<div class="space-y-2 p-4">
  <div class="p-4 rounded bg-purple-600 text-white">Purple 600 (Opacity 100%)</div>
  <div class="p-4 rounded bg-purple-600/75 text-white">Purple 600 / Opacity 75%</div>
  <div class="p-4 rounded bg-purple-600/50 text-black">Purple 600 / Opacity 50%</div>
  <div class="p-4 rounded bg-purple-600/[.10] text-black border dark:border-gray-700">Purple 600 / Opacity 10% (Arbitrary)</div>
</div>
```
これは CSS の `background-color` プロパティに `rgba()` や `hsla()` を使う代わりに、Tailwind が内部的に `--tw-bg-opacity` CSS 変数を設定することで実現されます。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて背景色を変更できます。

```html
<div class="bg-gray-100 md:bg-blue-100 dark:bg-gray-800 md:dark:bg-blue-900 ...">
  Background color changes on medium screens.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `active:`, `dark:`, `group-hover:`, `disabled:` などと組み合わせて、インタラクションやモードに応じて背景色を変更するのは非常に一般的です。

```html
<button class="bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 ...">
  Interactive Button
</button>

<div class="bg-white dark:bg-gray-900 group hover:bg-gray-50 dark:hover:bg-gray-800 ...">
  <p class="group-hover:text-blue-600">Hoverable Card</p>
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.colors` (または `theme.colors`) でカスタムカラーを追加したり、既存の色を上書きしたりできます。ここで定義された色は、`text-*`, `bg-*`, `border-*` など、すべてのカラーユーティリティで使用可能になります。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-bg': '#f0f4f8',
        'brand-bg-dark': '#1a202c',
        'primary-hover': '#2b6cb0',
      },
    },
  },
}
```

```html
<div class="bg-brand-bg dark:bg-brand-bg-dark ...">Custom background</div>
<button class="bg-primary hover:bg-primary-hover ...">Button with custom hover</button>
```
shadcn/ui を使用している場合、背景色は主に CSS 変数 (`--background`, `--card`, `--primary` など) を介して制御され、`tailwind.config.js` の `colors` 設定はこれらの変数を参照するように設定されます。

## 任意の値 (Arbitrary Values)

任意の色コード (HEX, RGB, HSL) を使って背景色を直接指定することも可能です。

```html
<div class="bg-[#f0e68c]">Khaki background using arbitrary HEX</div>
<div class="bg-[rgba(255,0,0,0.5)]">Red background with 50% opacity using arbitrary RGBA</div>
<div class="bg-[var(--custom-bg)]/[.75]">Background from CSS variable with opacity</div>
```

## 注意点

*   背景色は要素のパディング領域まで広がりますが、ボーダーの下には描画されません (`bg-clip-border` がデフォルトの場合)。
*   背景色と前景のテキスト色 (`text-*`) のコントラスト比が十分にあるか、アクセシビリティの観点から確認してください。

## 関連ユーティリティ

*   `background-image` (`bg-gradient-*` など): 背景画像やグラデーション。
*   `background-clip`: 背景の描画範囲。
*   `text-color` (`text-*`): テキストの色。
*   `border-color` (`border-*`): ボーダーの色。
*   `opacity` (`opacity-*`): 要素全体の不透明度。

## 公式ドキュメント参照
*   [Tailwind CSS: Background Color](https://tailwindcss.com/docs/background-color)
*   [Tailwind CSS: Customizing Colors](https://tailwindcss.com/docs/customizing-colors)
*   [MDN: background-color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
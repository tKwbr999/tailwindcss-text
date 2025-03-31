## タイトル
title: Typography: Text Color (文字色)

## タグ
tags: ["tailwindcss", "utilities", "typography", "text-color", "color", "opacity"]

## 概要
`text-{color}` ユーティリティは、テキストの色を設定します。CSS の `color` プロパティに対応します。

Tailwind は豊富なカラーパレットをデフォルトで提供しており (`slate`, `red`, `blue`, `emerald` など)、各色には通常 10 段階の明度 (シェード、`50` ～ `900`) が用意されています。

## 基本的な使い方とパラメータ

`text-{color}-{shade}` の形式でクラスを指定します。

*   `text-black`, `text-white`
*   `text-transparent`
*   `text-inherit` (親要素の色を継承)
*   `text-current` (SVG などで現在のテキスト色を使用)
*   `text-slate-500`, `text-red-600`, `text-emerald-400` など (色名 + シェード)

```html
<div class="space-y-2 p-4">
  <p class="text-black dark:text-white">Text Black (Dark: White)</p>
  <p class="text-gray-500 dark:text-gray-400">Text Gray 500 (Dark: Gray 400)</p>
  <p class="text-red-600">Text Red 600</p>
  <p class="text-blue-500">Text Blue 500</p>
  <p class="text-emerald-700 dark:text-emerald-300">Text Emerald 700 (Dark: Emerald 300)</p>
  <p class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Transparent Text with Gradient Background</p>
  <svg class="w-6 h-6 inline-block text-blue-600" fill="currentColor" viewBox="0 0 20 20">{/* SVG path */}</svg>
  <span class="text-lg">Icon color set by <code class="text-sm">text-current</code> (implicitly)</span>
</div>
```

## 不透明度の変更

`/{opacity}` 修飾子を使って、テキストの色の不透明度を変更できます。値は `0` から `100` のパーセンテージ、または `theme.opacity` で定義されたキー (例: `50`, `75`) を使用します。

```html
<div class="space-y-2 p-4">
  <p class="text-blue-600">Text Blue 600 (Opacity 100%)</p>
  <p class="text-blue-600/75">Text Blue 600 / Opacity 75%</p>
  <p class="text-blue-600/50">Text Blue 600 / Opacity 50%</p>
  <p class="text-blue-600/[.25]">Text Blue 600 / Opacity 25% (Arbitrary)</p>
</div>
```
これは CSS の `rgba()` や `hsla()` を使う代わりに、`color` プロパティと `opacity` プロパティ (または `--tw-text-opacity` CSS 変数) を組み合わせて実現されます。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてテキストの色を変更できます。

```html
<p class="text-gray-700 md:text-blue-600 ...">
  Gray text on small screens, blue on medium and wider.
</p>
```

## 状態修飾子

`hover:`, `focus:`, `active:`, `dark:`, `group-hover:` などと組み合わせて、特定の状態でテキストの色を変更するのは非常に一般的です。

```html
<a href="#" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
  Link with hover and dark mode states
</a>

<button class="text-gray-500 disabled:text-gray-300 ...">
  Submit (Disabled state color)
</button>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.colors` (または `theme.colors`) でカスタムカラーを追加したり、既存の色を上書きしたりできます。ここで定義された色は、`text-*`, `bg-*`, `border-*` など、すべてのカラーユーティリティで使用可能になります。

```javascript
// tailwind.config.js
const colors = require('tailwindcss/colors') // デフォルトカラーをインポート

module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': { // カスタムカラー 'brand' を定義
          light: '#63b3ed',
          DEFAULT: '#3182ce', // text-brand で使われる
          dark: '#2c5282',
        },
        // デフォルトの gray を上書き (例: neutral を使う)
        // gray: colors.neutral,
      },
    },
  },
}
```

```html
<p class="text-brand">Custom brand color</p>
<p class="text-brand-light">Light brand color</p>
<p class="text-gray-500">Neutral gray 500 (if overridden)</p>
```
shadcn/ui を使用している場合、色は主に CSS 変数 (`--foreground`, `--primary-foreground` など) を介して制御され、`tailwind.config.js` の `colors` 設定はこれらの変数を参照するように設定されます。

## 任意の値 (Arbitrary Values)

任意の色コード (HEX, RGB, HSL) を使ってテキストの色を直接指定することも可能です。

```html
<p class="text-[#ff0000]">Red text using arbitrary HEX</p>
<p class="text-[rgb(0,255,0)]">Green text using arbitrary RGB</p>
<p class="text-[hsl(210,50%,50%)]">Blue text using arbitrary HSL</p>
<p class="text-[var(--custom-text-color)]">Text color from CSS variable</p>
```
任意の値で不透明度を指定することもできます: `text-[#ff0000]/50`

## 注意点

*   色の選択は、可読性とアクセシビリティ (コントラスト比) に大きく影響します。背景色とのコントラストが十分にあるか確認してください。
*   `text-transparent` は、背景画像やグラデーションをテキストの形にクリッピング (`bg-clip-text`) するテクニックでよく使われます。

## 関連ユーティリティ

*   `background-color` (`bg-*`): 背景色。
*   `border-color` (`border-*`): ボーダー色。
*   `placeholder-color` (`placeholder-*`): プレースホルダーテキストの色。
*   `ring-color` (`ring-*`): フォーカスリングなどの色。
*   `opacity` (`opacity-*`): 要素全体の不透明度。

## 公式ドキュメント参照
*   [Tailwind CSS: Text Color](https://tailwindcss.com/docs/text-color)
*   [Tailwind CSS: Customizing Colors](https://tailwindcss.com/docs/customizing-colors)
*   [MDN: color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
*   [MDN: opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
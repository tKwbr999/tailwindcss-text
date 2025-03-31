## タイトル
title: SVG: Stroke Color (SVG の線の色)

## タグ
tags: ["tailwindcss", "utilities", "svg", "stroke", "color", "line"]

## 概要
`stroke-{color}` ユーティリティは、SVG 要素の線の色を設定します。CSS の `stroke` プロパティに対応します。

値は、Tailwind のカラーパレット (`slate`, `red`, `blue`, `emerald` など、シェードを含む)、`none`, `inherit`, `current`, `transparent` を使用できます。

## 基本的な使い方とパラメータ

`stroke-{color}-{shade}` または `stroke-{keyword}` の形式でクラスを SVG 要素またはその子要素 (`<path>`, `<circle>`, `<line>` など) に適用します。線の太さ (`stroke-{width}`) も同時に指定する必要があります。

*   **`stroke-none`**: 線なし (`stroke: none;`)。塗りつぶしのみのアイコンなどで使用します。
*   **`stroke-inherit`**: 親要素の `stroke` 値を継承。
*   **`stroke-current`**: 要素の現在のテキスト色 (`color`) を使用します (`stroke: currentColor;`)。テキスト色ユーティリティ (`text-*`) と連携して SVG の線の色を制御するのに非常に便利です。
*   **`stroke-transparent`**: 透明な線。
*   **`stroke-black`, `stroke-white`**
*   **`stroke-slate-500`, `stroke-red-600`, `stroke-emerald-400` など**: 色名 + シェード。

```html
<div class="flex flex-wrap gap-4 p-4">
  {/* 線のみのアイコン */}
  <svg class="w-16 h-16 fill-none stroke-blue-500 stroke-2" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <svg class="w-16 h-16 fill-none stroke-green-500 stroke-2" viewBox="0 0 20 20">
     <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <svg class="w-16 h-16 fill-none stroke-red-500/50 stroke-2" viewBox="0 0 20 20"> {/* Opacity */}
     <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <svg class="w-16 h-16 fill-yellow-200 stroke-none" viewBox="0 0 20 20"> {/* Stroke none, Fillあり */}
     <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
  </svg>
  {/* stroke-current: テキスト色と同じになる */}
  <span class="text-orange-500 dark:text-orange-400">
    <svg class="w-16 h-16 fill-none stroke-current stroke-2" viewBox="0 0 20 20">
      <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    (stroke-current)
  </span>
</div>
```

## 不透明度の変更

`/{opacity}` 修飾子を使って、線の色の不透明度を変更できます。

```html
<svg class="w-16 h-16 fill-none stroke-indigo-600/75 stroke-2" viewBox="0 0 20 20">...</svg>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて線の色を変更できます。

```html
<svg class="stroke-gray-500 md:stroke-blue-500 ..." viewBox="0 0 20 20">...</svg>
```

## 状態修飾子

`hover:`, `focus:`, `dark:`, `group-hover:` などと組み合わせて、インタラクションやモードに応じて線の色を変更できます。

```html
<button class="group ...">
  <svg class="w-6 h-6 fill-none stroke-gray-500 group-hover:stroke-blue-500 dark:stroke-gray-400 dark:group-hover:stroke-blue-400 stroke-2" viewBox="0 0 20 20">...</svg>
  Hover Me
</button>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.stroke` (または `theme.stroke`) でカスタムカラーを追加できます。通常は `theme.colors` を継承するため、`colors` で定義したカスタムカラーは `stroke-*` でも利用可能です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#ff5733',
      },
      stroke: theme => ({
        ...theme('colors'), // colors を継承
        'primary': theme('colors.blue.600'), // stroke-primary を追加
      })
    },
  },
}
```

```html
<svg class="stroke-primary stroke-2 ..." viewBox="0 0 20 20">...</svg>
<svg class="stroke-brand stroke-2 ..." viewBox="0 0 20 20">...</svg>
```

## 任意の値 (Arbitrary Values)

任意の色コードを使って線の色を直接指定することも可能です。

```html
<svg class="stroke-[#aabbcc] stroke-2 ..." viewBox="0 0 20 20">...</svg>
<svg class="stroke-[var(--icon-stroke)]/[.9] stroke-2 ..." viewBox="0 0 20 20">...</svg> {/* CSS 変数と不透明度 */}
```

## 注意点

*   `stroke` プロパティは SVG 要素およびその子要素 (`<path>`, `<circle>`, `<line>`, `<rect>` など) に適用されます。
*   線を表示するには、通常、色 (`stroke-*`) に加えて太さ (`stroke-{width}`) を指定する必要があります。
*   `stroke-current` は、SVG アイコンの色を周囲のテキスト色と同期させるのに非常に便利です。

## 関連ユーティリティ

*   `fill` (`fill-*`): SVG の塗りつぶし色。
*   `stroke-width` (`stroke-*`): SVG の線の太さ。
*   `text-color` (`text-*`): テキストの色 (`stroke-current` と連携)。

## 公式ドキュメント参照
*   [Tailwind CSS: Stroke](https://tailwindcss.com/docs/stroke)
*   [MDN: stroke](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke) (SVG 属性)
*   [MDN: stroke (CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS/stroke) (CSS プロパティ)
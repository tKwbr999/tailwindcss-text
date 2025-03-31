## タイトル
title: SVG: Stroke Width (SVG の線の太さ)

## タグ
tags: ["tailwindcss", "utilities", "svg", "stroke-width", "stroke", "line", "thickness"]

## 概要
`stroke-{width}` ユーティリティは、SVG 要素の線の太さを設定します。CSS の `stroke-width` プロパティに対応します。

値は通常、固定の数値 (`0`, `1`, `2`) で指定します。

## 基本的な使い方とパラメータ

*   **`stroke-0`**: `stroke-width: 0;` (線なし)
*   **`stroke-1`**: `stroke-width: 1;` (デフォルトに近い細さ)
*   **`stroke-2`**: `stroke-width: 2;` (やや太い)

これらのクラスは、SVG 要素またはその子要素 (`<path>`, `<circle>`, `<line>` など) に適用します。線の色 (`stroke-{color}`) も同時に指定する必要があります。

```html
<div class="flex flex-wrap gap-4 p-4">
  <svg class="w-16 h-16 fill-none stroke-blue-500 stroke-0" viewBox="0 0 20 20"> {/* 線なし */}
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <svg class="w-16 h-16 fill-none stroke-blue-500 stroke-1" viewBox="0 0 20 20"> {/* 細線 */}
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <svg class="w-16 h-16 fill-none stroke-blue-500 stroke-2" viewBox="0 0 20 20"> {/* 太線 */}
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて線の太さを変更できます。

```html
<svg class="stroke-1 md:stroke-2 ..." viewBox="0 0 20 20">...</svg>
```

## 状態修飾子

`hover:`, `focus:`, `dark:`, `group-hover:` などと組み合わせて、インタラクションやモードに応じて線の太さを変更できます。

```html
<button class="group ...">
  <svg class="w-6 h-6 fill-none stroke-gray-500 stroke-1 group-hover:stroke-2 group-hover:stroke-blue-500 ..." viewBox="0 0 20 20">...</svg>
</button>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.strokeWidth` (または `theme.strokeWidth`) でカスタムの太さを追加できます。値には数値または単位付きの文字列 (`'1.5'`, `'3px'`) を指定できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      strokeWidth: {
        '0': '0',
        '1': '1',
        '1.5': '1.5', // stroke-1.5 クラスを追加
        '2': '2',
        '3': '3',   // stroke-3 クラスを追加
      },
    },
  },
}
```

```html
<svg class="stroke-1.5 ..." viewBox="0 0 20 20">...</svg>
<svg class="stroke-3 ..." viewBox="0 0 20 20">...</svg>
```

## 任意の値 (Arbitrary Values)

任意の値を使って線の太さを直接指定することも可能です。

```html
<svg class="stroke-[1.75] ..." viewBox="0 0 20 20">...</svg>
<svg class="stroke-[var(--icon-stroke-width)] ..." viewBox="0 0 20 20">...</svg>
```

## 注意点

*   `stroke-width` は SVG 要素にのみ適用されます。通常の HTML 要素のボーダーには `border-width` を使用します。
*   線を表示するには、通常、太さ (`stroke-*`) と色 (`stroke-{color}`) の両方を指定する必要があります。`stroke-width` が 0 より大きい場合でも、`stroke` (色) が `none` または透明だと線は見えません。
*   `stroke-width` の値は、SVG のビューポートや `vector-effect="non-scaling-stroke"` 属性の影響を受けることがあります。

## 関連ユーティリティ

*   `stroke` (`stroke-*`): SVG の線の色。
*   `fill` (`fill-*`): SVG の塗りつぶし色。
*   `border-width`: HTML 要素のボーダーの太さ。

## 公式ドキュメント参照
*   [Tailwind CSS: Stroke Width](https://tailwindcss.com/docs/stroke-width)
*   [MDN: stroke-width](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width) (SVG 属性)
*   [MDN: stroke-width (CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-width) (CSS プロパティ)
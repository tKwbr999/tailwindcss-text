## タイトル
title: SVG: Fill Color (SVG の塗りつぶし色)

## タグ
tags: ["tailwindcss", "utilities", "svg", "fill", "color"]

## 概要
`fill-{color}` ユーティリティは、SVG 要素の塗りつぶし色を設定します。CSS の `fill` プロパティに対応します。

値は、Tailwind のカラーパレット (`slate`, `red`, `blue`, `emerald` など、シェードを含む)、`none`, `inherit`, `current`, `transparent` を使用できます。

## 基本的な使い方とパラメータ

`fill-{color}-{shade}` または `fill-{keyword}` の形式でクラスを SVG 要素またはその子要素 (`<path>`, `<circle>`, `<rect>` など) に適用します。

*   **`fill-none`**: 塗りつぶしなし (`fill: none;`)。線のみのアイコンなどで使用します。
*   **`fill-inherit`**: 親要素の `fill` 値を継承。
*   **`fill-current`**: 要素の現在のテキスト色 (`color`) を使用します (`fill: currentColor;`)。テキスト色ユーティリティ (`text-*`) と連携して SVG の色を制御するのに非常に便利です。**これがデフォルトの挙動に近いことが多いです。**
*   **`fill-transparent`**: 透明な塗りつぶし。
*   **`fill-black`, `fill-white`**
*   **`fill-slate-500`, `fill-red-600`, `fill-emerald-400` など**: 色名 + シェード。

```html
<div class="flex flex-wrap gap-4 p-4">
  <svg class="w-16 h-16 fill-blue-500" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" /> {/* Circle */}
  </svg>
  <svg class="w-16 h-16 fill-green-500" viewBox="0 0 20 20">
     <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
  </svg>
  <svg class="w-16 h-16 fill-red-500/50" viewBox="0 0 20 20"> {/* Opacity */}
     <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
  </svg>
  <svg class="w-16 h-16 fill-none stroke-purple-600 stroke-2" viewBox="0 0 20 20"> {/* Fill none, Strokeあり */}
     <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  {/* fill-current: テキスト色と同じになる */}
  <span class="text-orange-500 dark:text-orange-400">
    <svg class="w-16 h-16 fill-current" viewBox="0 0 20 20">
      <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
    </svg>
    (fill-current)
  </span>
</div>
```

## 不透明度の変更

`/{opacity}` 修飾子を使って、塗りつぶし色の不透明度を変更できます。

```html
<svg class="w-16 h-16 fill-indigo-600/75" viewBox="0 0 20 20">...</svg>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて塗りつぶし色を変更できます。

```html
<svg class="fill-gray-500 md:fill-blue-500 ..." viewBox="0 0 20 20">...</svg>
```

## 状態修飾子

`hover:`, `focus:`, `dark:`, `group-hover:` などと組み合わせて、インタラクションやモードに応じて塗りつぶし色を変更できます。アイコンボタンのホバーエフェクトなどでよく使われます。

```html
<button class="group ...">
  <svg class="w-6 h-6 fill-gray-500 group-hover:fill-blue-500 dark:fill-gray-400 dark:group-hover:fill-blue-400" viewBox="0 0 20 20">...</svg>
  Hover Me
</button>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.fill` (または `theme.fill`) でカスタムカラーを追加できます。通常は `theme.colors` を継承するため、`colors` で定義したカスタムカラーは `fill-*` でも利用可能です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#ff5733',
      },
      fill: theme => ({
        ...theme('colors'), // colors を継承
        'primary': theme('colors.blue.600'), // fill-primary を追加
      })
    },
  },
}
```

```html
<svg class="fill-primary ..." viewBox="0 0 20 20">...</svg>
<svg class="fill-brand ..." viewBox="0 0 20 20">...</svg>
```

## 任意の値 (Arbitrary Values)

任意の色コードを使って塗りつぶし色を直接指定することも可能です。

```html
<svg class="fill-[#aabbcc] ..." viewBox="0 0 20 20">...</svg>
<svg class="fill-[var(--icon-fill)]/[.9] ..." viewBox="0 0 20 20">...</svg> {/* CSS 変数と不透明度 */}
```

## 注意点

*   `fill` プロパティは SVG 要素およびその子要素 (`<path>`, `<circle>`, `<rect>`, `<text>` など) に適用されます。
*   `fill-current` は非常に便利で、SVG アイコンの色を周囲のテキスト色と簡単に同期させることができます。多くのアイコンライブラリ (Heroicons, Lucide など) は、デフォルトで `fill="currentColor"` または `stroke="currentColor"` を使用するように設計されています。
*   SVG 内の個々の要素 (`<path>` など) に直接 `fill-*` クラスを適用することも、親の `<svg>` 要素に適用して継承させることも可能です。

## 関連ユーティリティ

*   `stroke` (`stroke-*`): SVG の線の色。
*   `stroke-width` (`stroke-*`): SVG の線の太さ。
*   `text-color` (`text-*`): テキストの色 (`fill-current` と連携)。

## 公式ドキュメント参照
*   [Tailwind CSS: Fill](https://tailwindcss.com/docs/fill)
*   [MDN: fill](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill) (SVG 属性)
*   [MDN: fill (CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS/fill) (CSS プロパティ)
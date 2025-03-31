## タイトル
title: Typography: List Style Image (リストマーカー画像)

## タグ
tags: ["tailwindcss", "utilities", "typography", "list-style-image", "list", "marker", "image", "url"]

## 概要
`list-image-*` ユーティリティは、リストアイテム (`<li>`) のマーカーとして画像を使用することを可能にします。CSS の `list-style-image` プロパティに対応します。

デフォルトでは、Tailwind は `list-image-none` のみを提供します。カスタム画像を使用するには、任意の値 (Arbitrary Values) または設定ファイルでのカスタマイズが必要です。

## 基本的な使い方とパラメータ

*   **`list-image-none`**: デフォルト (`list-style-image: none;`)。マーカーとして画像を使用しません。`list-style-type` で指定されたマーカー (例: `list-disc`, `list-decimal`) が表示されます。
*   **`list-image-[url(...)]`**: 任意の値を使用して、マーカーとして使用する画像の URL を直接指定します。

```html
<div class="p-4 space-y-4">

  {/* デフォルト (画像なし) */}
  <ul class="list-disc list-inside list-image-none">
    <li>Default: list-image-none</li>
    <li>Uses list-style-type (disc)</li>
  </ul>

  {/* 任意の値で画像を指定 */}
  {/* 画像のサイズや位置の調整は CSS では難しい場合がある */}
  <ul class="list-image-[url('https://via.placeholder.com/12/0000FF/FFFFFF?text=')] list-inside ml-4">
    <li class="mb-1">Custom image marker (Blue Square)</li>
    <li class="mb-1">Positioning might need adjustments</li>
    <li class="mb-1">Consider using background images or pseudo-elements for better control</li>
  </ul>

   {/* 設定ファイルで定義したカスタム値を使用 (後述) */}
   {/* <ul class="list-image-checkmark list-inside ml-4"> ... </ul> */}

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてマーカー画像を変更または解除できますが、一般的ではありません。

```html
<ul class="list-image-none md:list-image-[url(...)] ...">
  {/* md 以上でマーカー画像を表示 */}
  {/* ... list items ... */}
</ul>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.listStyleImage` (または `theme.listStyleImage`) で、カスタムのマーカー画像に名前を付けて定義できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("/img/checkmark.svg")', // list-image-checkmark クラスを追加
        arrow: 'url("/img/arrow.png")',       // list-image-arrow クラスを追加
      },
    },
  },
}
```

```html
<ul class="list-image-checkmark list-inside ml-4">
  <li class="mb-1">Item with checkmark</li>
  <li class="mb-1">Another item</li>
</ul>

<ul class="list-image-arrow list-inside ml-4 mt-4">
  <li class="mb-1">Item with arrow</li>
  <li class="mb-1">Another item</li>
</ul>
```

## 注意点

*   **制御の難しさ:** CSS の `list-style-image` プロパティは、マーカー画像のサイズ、位置、垂直方向の揃えなどを細かく制御する機能が限られています。多くの場合、期待通りの表示にするには調整が難しいことがあります。
*   **代替案:** より精密な制御が必要な場合は、以下の方法がよく使われます。
    *   **`::marker` 疑似要素:** CSS で `::marker` 疑似要素の `content` プロパティを使って画像やカスタムテキストを設定する (Tailwind のコアユーティリティには直接対応していない)。
    *   **背景画像:** `<li>` 要素の `::before` 疑似要素に背景画像としてマーカーを設定し、`background-position`, `background-size` で調整する。
    *   **Flexbox/Grid とアイコン:** `<li>` を Flexbox または Grid コンテナにし、アイコンフォントや SVG アイコンをテキストの前に配置する。これが最も柔軟で一般的な方法です。

```html
{/* 代替案: Flexbox と SVG アイコン */}
<ul>
  <li class="flex items-start mb-2">
    <svg class="w-4 h-4 mr-2 mt-1 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">{/* check icon path */}</svg>
    <span>List item using Flexbox and SVG icon for better control.</span>
  </li>
   <li class="flex items-start">
    <svg class="w-4 h-4 mr-2 mt-1 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">{/* check icon path */}</svg>
    <span>Another list item.</span>
  </li>
</ul>
```

## 関連ユーティリティ

*   `list-style-type` (`list-disc`, `list-decimal` など): マーカーの種類 (円、数字など)。
*   `list-style-position` (`list-inside`, `list-outside`): マーカーの位置。

## 公式ドキュメント参照
*   [Tailwind CSS: List Style Image](https://tailwindcss.com/docs/list-style-image)
*   [MDN: list-style-image](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image)
*   [MDN: ::marker](https://developer.mozilla.org/en-US/docs/Web/CSS/::marker) (代替案)
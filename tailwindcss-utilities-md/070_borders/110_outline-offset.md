## タイトル
title: Borders: Outline Offset (アウトラインのオフセット)

## タグ
tags: ["tailwindcss", "utilities", "borders", "outline", "outline-offset", "spacing", "focus"]

## 概要
`outline-offset-{amount}` ユーティリティは、要素のアウトラインとその要素の境界 (ボーダーの外側の端) との間のスペースを設定します。CSS の `outline-offset` プロパティに対応します。

アウトラインが要素に近すぎたり離れすぎたりする場合に、その間隔を調整するために使用します。

## 基本的な使い方とパラメータ

値は固定のピクセル値で指定します。

*   **`outline-offset-0`**: `outline-offset: 0px;` (オフセットなし、ボーダーに接する)
*   **`outline-offset-1`**: `outline-offset: 1px;`
*   **`outline-offset-2`**: `outline-offset: 2px;` (デフォルトで `outline-none` を打ち消す際に適用されることがある)
*   **`outline-offset-4`**: `outline-offset: 4px;`
*   **`outline-offset-8`**: `outline-offset: 8px;`

アウトライン自体 (`outline`, `outline-{width}`, `outline-{color}` など) も同時に指定する必要があります。

```html
<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
  {/* フォーカス時に異なるオフセットのアウトラインを表示 */}
  <button class="outline-none focus:outline focus:outline-2 focus:outline-blue-500 focus:outline-offset-0 p-4 rounded bg-gray-200 dark:bg-gray-700">Offset 0</button>
  <button class="outline-none focus:outline focus:outline-2 focus:outline-green-500 focus:outline-offset-1 p-4 rounded bg-gray-200 dark:bg-gray-700">Offset 1</button>
  <button class="outline-none focus:outline focus:outline-2 focus:outline-red-500 focus:outline-offset-2 p-4 rounded bg-gray-200 dark:bg-gray-700">Offset 2</button>
  <button class="outline-none focus:outline focus:outline-2 focus:outline-purple-500 focus:outline-offset-4 p-4 rounded bg-gray-200 dark:bg-gray-700">Offset 4</button>
  <button class="outline-none focus:outline focus:outline-2 focus:outline-pink-500 focus:outline-offset-8 p-4 rounded bg-gray-200 dark:bg-gray-700">Offset 8</button>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてアウトラインのオフセットを変更できます。

```html
<button class="focus:outline focus:outline-offset-2 md:focus:outline-offset-4 ...">
  Outline offset changes on medium screens.
</button>
```

## 状態修飾子

`focus:`, `focus-visible:`, `focus-within:` などの状態修飾子と組み合わせて、フォーカス時にオフセットを設定するのが最も一般的な使い方です。

```html
<input type="text" class="outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 ...">
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.outlineOffset` (または `theme.outlineOffset`) でカスタムのオフセット値を追加できます。値には `px`, `rem`, `em` などの単位を使用できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      outlineOffset: {
        '3': '3px',
        '6': '6px',
        'sm': '0.125em', // フォントサイズ相対
      },
    },
  },
}
```

```html
<button class="focus:outline focus:outline-offset-3 ...">Custom offset 3px</button>
<button class="focus:outline focus:outline-offset-sm ...">Custom small offset</button>
```

## 任意の値 (Arbitrary Values)

任意の値を使ってアウトラインのオフセットを直接指定することも可能です。

```html
<button class="focus:outline focus:outline-offset-[5px] ...">Arbitrary offset 5px</button>
```

## 注意点

*   `outline-offset-*` ユーティリティは、アウトラインが表示されている (`outline-style` が `none` または `hidden` 以外) 場合にのみ効果があります。
*   オフセットの値には負の値を指定することもでき、アウトラインを要素の**内側**に描画させることができます (`outline-offset-[-2px]`)。ただし、内側に描画されたアウトラインはコンテンツと重なる可能性があります。
*   アウトラインはレイアウトに影響を与えません。オフセットを追加しても要素の占めるスペースは変わりません。

## 関連ユーティリティ

*   `outline-width`: アウトラインの太さ。
*   `outline-style`: アウトラインの線種。
*   `outline-color`: アウトラインの色。
*   `ring-offset-width`, `ring-offset-color`: リングのオフセット。

## 公式ドキュメント参照
*   [Tailwind CSS: Outline Offset](https://tailwindcss.com/docs/outline-offset)
*   [MDN: outline-offset](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset)
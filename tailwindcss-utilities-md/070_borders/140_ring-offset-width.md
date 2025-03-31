## タイトル
title: Borders: Ring Offset Width (リングのオフセット幅)

## タグ
tags: ["tailwindcss", "utilities", "borders", "ring", "ring-offset", "ring-offset-width", "focus", "shadow", "spacing"]

## 概要
`ring-offset-{width}` ユーティリティは、`ring` ユーティリティで作成されたリングと、要素本体との間のスペース (オフセット) の太さを設定します。これは、リングが要素のボーダーや背景と重なって見えにくくなるのを防ぐために、リングを要素から少し「浮かせる」効果を生み出します。

内部的には、`box-shadow` を複数重ねて使用し、一番内側のシャドウ (オフセット部分) の色を `ring-offset-color` で指定することで実現されます。

## 基本的な使い方とパラメータ

値は固定のピクセル値で指定します。

*   **`ring-offset-0`**: `outline-offset: 0px;` (オフセットなし)
*   **`ring-offset-1`**: `outline-offset: 1px;`
*   **`ring-offset-2`**: `outline-offset: 2px;` (デフォルトで `ring` と一緒に適用されることが多い)
*   **`ring-offset-4`**: `outline-offset: 4px;`
*   **`ring-offset-8`**: `outline-offset: 8px;`

リング自体 (`ring`, `ring-{width}`, `ring-{color}`) も同時に指定する必要があります。また、オフセット部分の色を背景色に合わせるために `ring-offset-{color}` も通常併用します。

```html
<div class="grid grid-cols-2 sm:grid-cols-3 gap-6 p-4 bg-white dark:bg-black"> {/* 背景色を変えてオフセットを見やすく */}

  {/* オフセットなし */}
  <button class="focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-0 p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Offset 0</button>

  {/* オフセット 2px (デフォルトに近い) */}
  {/* オフセット色はデフォルトで白 */}
  <button class="focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Offset 2 (Default Color)</button>

  {/* オフセット 4px + オフセット色指定 */}
  <button class="focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-offset-4 focus:ring-offset-white dark:focus:ring-offset-black p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Offset 4 (White/Black)</button>

  {/* オフセット 8px + オフセット色指定 */}
  <button class="focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-8 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Offset 8 (Gray-100/900)</button>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてオフセット幅を変更できます。

```html
<button class="focus:ring focus:ring-offset-2 md:focus:ring-offset-4 ...">
  Ring offset changes on medium screens.
</button>
```

## 状態修飾子

`focus:`, `focus-visible:`, `focus-within:` などの状態修飾子と組み合わせて、フォーカス時にオフセットを設定するのが最も一般的な使い方です。

```html
<input type="text" class="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 ...">
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.ringOffsetWidth` (または `theme.ringOffsetWidth`) でカスタムのオフセット幅を追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      ringOffsetWidth: {
        '3': '3px',
        '6': '6px',
      },
    },
  },
}
```

```html
<button class="focus:ring focus:ring-offset-3 ...">Custom offset 3px</button>
```

## 任意の値 (Arbitrary Values)

任意の値を使ってオフセット幅を直接指定することも可能です。

```html
<button class="focus:ring focus:ring-offset-[3px] ...">Arbitrary offset 3px</button>
```

## 注意点

*   `ring-offset-{width}` ユーティリティは、リング (`ring`, `ring-{width}`) が表示されている場合にのみ効果があります。
*   オフセット部分の色は `ring-offset-{color}` で指定します。指定しない場合、デフォルトの色 (通常は白) が使用され、背景色によってはオフセットが目立たない、または不自然に見えることがあります。通常は要素の背景色に合わせてオフセット色を指定します。
*   リングは `box-shadow` で実装されているため、オフセットも `box-shadow` の重ね合わせで表現されます。

## 関連ユーティリティ

*   `ring-width`: リングの太さ。
*   `ring-color`: リングの色。
*   `ring-offset-color`: リングオフセット部分の色。
*   `outline-offset`: アウトラインのオフセット。

## 公式ドキュメント参照
*   [Tailwind CSS: Ring Offset Width](https://tailwindcss.com/docs/ring-offset-width)
*   [MDN: box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) (リングの実装に使われている)
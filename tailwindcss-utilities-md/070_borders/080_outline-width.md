## タイトル
title: Borders: Outline Width (アウトラインの太さ)

## タグ
tags: ["tailwindcss", "utilities", "borders", "outline", "outline-width", "focus", "accessibility"]

## 概要
`outline-{width}` ユーティリティは、要素のアウトライン (輪郭線) の太さを設定します。CSS の `outline-width` プロパティに対応します。

アウトラインはボーダーの外側に描画され、レイアウトに影響を与えません (スペースを占有しません)。主に、キーボード操作によるフォーカス状態を視覚的に示すために使用されます。

## 基本的な使い方とパラメータ

値は固定のピクセル値で指定します。

*   **`outline-0`**: `outline-width: 0px;`
*   **`outline-1`**: `outline-width: 1px;`
*   **`outline-2`**: `outline-width: 2px;`
*   **`outline-4`**: `outline-width: 4px;`
*   **`outline-8`**: `outline-width: 8px;`

アウトラインを表示するには、通常、太さ (`outline-*`) に加えて、スタイル (`outline`, `outline-dashed` など) と色 (`outline-{color}`) を指定する必要があります。ただし、`outline-none` (スタイルなし) を打ち消すために `outline` (スタイル solid) と `outline-{width}` を指定するだけでも、デフォルトの色 (ブラウザ依存、通常は青系) で表示されることが多いです。

```html
<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
  {/* フォーカス時にアウトラインを表示する例 */}
  <button class="outline-none focus:outline focus:outline-1 focus:outline-blue-500 p-4 rounded bg-gray-200 dark:bg-gray-700">Focus Me (1px)</button>
  <button class="outline-none focus:outline focus:outline-2 focus:outline-green-500 p-4 rounded bg-gray-200 dark:bg-gray-700">Focus Me (2px)</button>
  <button class="outline-none focus:outline focus:outline-4 focus:outline-red-500 p-4 rounded bg-gray-200 dark:bg-gray-700">Focus Me (4px)</button>
  <button class="outline-none focus:outline focus:outline-8 focus:outline-purple-500 p-4 rounded bg-gray-200 dark:bg-gray-700">Focus Me (8px)</button>
  <button class="outline-none focus:outline-0 focus:ring-2 focus:ring-pink-500 p-4 rounded bg-gray-200 dark:bg-gray-700">Focus Me (0px, Ring instead)</button> {/* outline-0 で打ち消し */}
</div>
```
**注意:** 上記の例では `outline-none` でデフォルトのアウトラインを消し、`focus:` 修飾子を使ってフォーカス時にのみアウトラインが表示されるようにしています。`outline` クラスは `outline-style: solid;` と `outline-width: 1px` (またはブラウザデフォルト) を設定します。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてアウトラインの太さを変更できますが、一般的ではありません。

```html
<button class="focus:outline-2 md:focus:outline-4 ...">
  Outline thickness changes on focus based on screen size.
</button>
```

## 状態修飾子

`focus:`, `focus-visible:`, `focus-within:` などの状態修飾子と組み合わせて、フォーカス時にアウトラインを表示するのが最も一般的な使い方です。`focus-visible:` を使うと、キーボード操作によるフォーカス時にのみアウトラインが表示され、マウス操作では表示されないため、より洗練されたインタラクションになります。

```html
<button class="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ...">
  Outline appears only on keyboard focus (focus-visible)
</button>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.outlineWidth` (または `theme.outlineWidth`) でカスタムの太さを追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      outlineWidth: {
        '3': '3px',
        '6': '6px',
      },
    },
  },
}
```

```html
<button class="focus:outline-3 ...">Custom outline width 3px</button>
```

## 任意の値 (Arbitrary Values)

任意の値を使ってアウトラインの太さを直接指定することも可能です。

```html
<button class="focus:outline-[5px] ...">Arbitrary outline width 5px</button>
```

## 注意点

*   アウトラインは要素の**外側**に描画され、**レイアウトに影響を与えません** (スペースを占有しません)。これはボーダーとの大きな違いです。
*   アウトラインは必ずしも要素の角の形 (`border-radius`) に追従するとは限りません (ブラウザ依存)。角丸に沿った輪郭線が必要な場合は、`ring` ユーティリティの使用を検討してください。
*   アウトラインを表示するには、太さ (`outline-*`)、スタイル (`outline`, `outline-dashed` など)、色 (`outline-{color}`) を指定します。`outline-none` でデフォルトのアウトラインスタイルを無効化できます。

## 関連ユーティリティ

*   `outline-style` (`outline`, `outline-dashed`, `outline-dotted`, `outline-double`, `outline-none`): アウトラインの線種。
*   `outline-color`: アウトラインの色。
*   `outline-offset`: アウトラインと要素の境界との間のスペース。
*   `ring-width`, `ring-color`, `ring-offset-width`, `ring-offset-color`: `box-shadow` を利用してアウトラインのような効果を作成するユーティリティ。角丸に追従します。

## 公式ドキュメント参照
*   [Tailwind CSS: Outline Width](https://tailwindcss.com/docs/outline-width)
*   [MDN: outline-width](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width)
*   [Tailwind CSS: Outline Style](https://tailwindcss.com/docs/outline-style)
*   [Tailwind CSS: Outline Color](https://tailwindcss.com/docs/outline-color)
*   [Tailwind CSS: Outline Offset](https://tailwindcss.com/docs/outline-offset)
*   [Tailwind CSS: Ring Width](https://tailwindcss.com/docs/ring-width) (代替案)
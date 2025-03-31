## タイトル
title: Interactivity: Cursor (カーソルアイコン)

## タグ
tags: ["tailwindcss", "utilities", "interactivity", "cursor", "pointer", "wait", "not-allowed", "default", "hover"]

## 概要
`cursor-{type}` ユーティリティは、ユーザーが要素上にマウスカーソルを合わせたときに表示されるカーソルアイコンの種類を設定します。CSS の `cursor` プロパティに対応します。

これにより、要素がクリック可能であること、処理中であること、操作が許可されていないことなどを視覚的に示すことができます。

## 基本的な使い方とパラメータ

*   **`cursor-auto`**: デフォルト。ブラウザが状況に応じてカーソルを決定します。
*   **`cursor-default`**: プラットフォームのデフォルトカーソル (通常は矢印)。
*   **`cursor-pointer`**: ポインティングデバイス (指差しアイコン) を表示します。リンクやボタンなど、クリック可能な要素に使用します。
*   **`cursor-wait`**: 処理中であることを示すカーソル (通常は砂時計や回転アイコン) を表示します。
*   **`cursor-text`**: テキスト選択が可能であることを示すカーソル (通常は I ビーム)。
*   **`cursor-move`**: 移動可能であることを示すカーソル (通常は十字矢印)。
*   **`cursor-grab`**:掴むことができることを示すカーソル (通常は開いた手)。
*   **`cursor-grabbing`**: 掴んでいる状態を示すカーソル (通常は閉じた手)。
*   **`cursor-not-allowed`**: 操作が許可されていないことを示すカーソル (通常は禁止マーク)。`disabled` 属性を持つ要素に自動的に適用されることが多いです。
*   **`cursor-help`**: ヘルプが利用可能であることを示すカーソル (通常は疑問符付き矢印)。
*   **`cursor-zoom-in`**, **`cursor-zoom-out`**: ズームイン/アウトが可能であることを示すカーソル。
*   **`cursor-col-resize`**, **`cursor-row-resize`**: 列/行のリサイズが可能であることを示すカーソル。
*   **`cursor-n-resize`**, **`cursor-e-resize`**, **`cursor-s-resize`**, **`cursor-w-resize`**: 各方向へのリサイズカーソル。
*   **`cursor-ne-resize`**, **`cursor-nw-resize`**, **`cursor-se-resize`**, **`cursor-sw-resize`**: 斜め方向へのリサイズカーソル。
*   **`cursor-all-scroll`**: 全方向へのスクロールが可能であることを示すカーソル。

```html
<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 p-4 text-center text-sm">
  <div class="cursor-auto p-4 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">auto</div>
  <div class="cursor-default p-4 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">default</div>
  <div class="cursor-pointer p-4 bg-blue-100 dark:bg-blue-900/30 rounded border dark:border-blue-700">pointer</div>
  <div class="cursor-wait p-4 bg-yellow-100 dark:bg-yellow-800/30 rounded border dark:border-yellow-700">wait</div>
  <div class="cursor-text p-4 bg-green-100 dark:bg-green-900/30 rounded border dark:border-green-700">text</div>
  <div class="cursor-move p-4 bg-purple-100 dark:bg-purple-900/30 rounded border dark:border-purple-700">move</div>
  <div class="cursor-grab p-4 bg-pink-100 dark:bg-pink-900/30 rounded border dark:border-pink-700">grab</div>
  <div class="cursor-grabbing p-4 bg-pink-200 dark:bg-pink-800/30 rounded border dark:border-pink-600">grabbing</div>
  <div class="cursor-not-allowed p-4 bg-red-100 dark:bg-red-900/30 rounded border dark:border-red-700">not-allowed</div>
  <div class="cursor-help p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded border dark:border-indigo-700">help</div>
  <div class="cursor-zoom-in p-4 bg-teal-100 dark:bg-teal-900/30 rounded border dark:border-teal-700">zoom-in</div>
  <div class="cursor-zoom-out p-4 bg-cyan-100 dark:bg-cyan-900/30 rounded border dark:border-cyan-700">zoom-out</div>
  {/* ... 他のリサイズカーソルなど ... */}
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてカーソルを変更できますが、一般的ではありません。

```html
<div class="cursor-pointer md:cursor-default ...">
  Clickable on small screens, default cursor on medium and wider.
</div>
```

## 状態修飾子

`hover:` や `disabled:` などと組み合わせて、特定の状態でカーソルを変更することがあります。特に `disabled` 状態の要素に `cursor-not-allowed` を適用するのは一般的です (ただし、`<button disabled>` などではブラウザが自動的に行うことが多い)。

```html
<button disabled class="... cursor-not-allowed">Submit</button>

<div class="cursor-grab active:cursor-grabbing ...">Draggable Element</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.cursor` (または `theme.cursor`) でカスタムのカーソル値を追加できます。値には CSS の `cursor` プロパティで有効な値を文字列で指定します (例: `'cell'`, `'crosshair'`, `url(/path/to/cursor.cur), auto`)。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      cursor: {
        'fancy': 'url(/cursors/fancy.cur), pointer',
        'crosshair': 'crosshair',
      },
    },
  },
}
```

```html
<div class="cursor-fancy ...">Custom fancy cursor</div>
<canvas class="cursor-crosshair ..."></canvas>
```

## 任意の値 (Arbitrary Values)

任意の値を使ってカーソルを直接指定することも可能です。

```html
<div class="cursor-[zoom-in] ...">Arbitrary zoom-in cursor</div>
<div class="cursor-[url(/my-cursor.png),_pointer] ...">Arbitrary image cursor</div>
```
(任意の値で `url()` を使う場合、カンマやスペースはアンダースコア `_` に置き換える必要がある場合があります。)

## 注意点

*   カーソルの実際の見た目は、ユーザーの OS やブラウザの設定に依存します。
*   カスタムカーソル画像を使用する場合、互換性のあるフォーマット (`.cur`, `.png`, `.svg` など) を使用し、フォールバックカーソル (例: `pointer`, `auto`) を指定することが推奨されます。
*   要素のインタラクションとカーソルの種類を一致させることが、ユーザーにとって分かりやすいインターフェースを作る上で重要です (例: クリックできる要素には `cursor-pointer`)。

## 関連ユーティリティ

*   `pointer-events`: 要素がマウスポインターイベントのターゲットになるかどうか。
*   `user-select`: テキスト選択を許可するかどうか。

## 公式ドキュメント参照
*   [Tailwind CSS: Cursor](https://tailwindcss.com/docs/cursor)
*   [MDN: cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
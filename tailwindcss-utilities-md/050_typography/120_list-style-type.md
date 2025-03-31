## タイトル
title: Typography: List Style Type (リストマーカーの種類)

## タグ
tags: ["tailwindcss", "utilities", "typography", "list-style-type", "list", "marker", "disc", "decimal", "none"]

## 概要
`list-{type}` ユーティリティは、リストアイテム (`<li>`) のマーカーの種類を設定します。CSS の `list-style-type` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`list-none`**: マーカーを表示しません (`list-style-type: none;`)。
*   **`list-disc`**: デフォルトの黒丸 (disc) マーカーを表示します (`list-style-type: disc;`)。`<ul>` のデフォルトスタイルです。
*   **`list-decimal`**: 数字 (1, 2, 3...) マーカーを表示します (`list-style-type: decimal;`)。`<ol>` のデフォルトスタイルです。

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">

  <div>
    <h3 class="font-semibold mb-2">list-disc (Default for ul)</h3>
    <ul class="list-disc list-outside pl-5 space-y-1 bg-gray-100 dark:bg-gray-800 p-4 rounded border dark:border-gray-700">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>

  <div>
    <h3 class="font-semibold mb-2">list-decimal (Default for ol)</h3>
    <ol class="list-decimal list-outside pl-5 space-y-1 bg-gray-100 dark:bg-gray-800 p-4 rounded border dark:border-gray-700">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
  </div>

  <div>
    <h3 class="font-semibold mb-2">list-none</h3>
    <ul class="list-none space-y-1 bg-gray-100 dark:bg-gray-800 p-4 rounded border dark:border-gray-700">
      <li>No marker</li>
      <li>No marker</li>
      <li>No marker</li>
    </ul>
  </div>

</div>
```
**注意:** `list-outside` (デフォルト) を使用する場合、マーカーを表示するスペースを確保するために `pl-*` (左パディング) が必要になることがよくあります。

## その他のリストスタイルタイプ

Tailwind のコアには `disc`, `decimal`, `none` のみが含まれていますが、CSS の `list-style-type` は他にも多くの値 (例: `circle`, `square`, `upper-roman`, `lower-alpha`) をサポートしています。これらを使用したい場合は、任意の値を使うか、設定ファイルでカスタマイズします。

```html
{/* 任意の値を使用 */}
<ul class="list-[circle] list-outside pl-5 space-y-1"> {/* 白丸 */}
  <li>Circle marker</li>
</ul>

<ol class="list-[upper-roman] list-outside pl-5 space-y-1"> {/* ローマ数字 (大文字) */}
  <li>Roman I</li>
  <li>Roman II</li>
</ol>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてマーカーの種類を変更できますが、一般的ではありません。

```html
<ul class="list-none sm:list-disc sm:pl-5 ...">
  {/* モバイルではマーカーなし、sm 以上で disc マーカー */}
  {/* ... list items ... */}
</ul>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.listStyleType` (または `theme.listStyleType`) でカスタムのマーカータイプを追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      listStyleType: {
        square: 'square', // list-square クラスを追加
        'lower-alpha': 'lower-alpha', // list-lower-alpha クラスを追加
        // カスタム文字列も可能 (ただしサポートは限定的)
        // arrow: '"→ "',
      },
    },
  },
}
```

```html
<ul class="list-square list-outside pl-5">...</ul>
<ol class="list-lower-alpha list-outside pl-5">...</ol>
```

## 注意点

*   マーカーの位置は `list-style-position` (`list-inside`, `list-outside`) で制御します。
*   マーカーとして画像を使用する場合は `list-style-image` (`list-image-*`) を使用します。
*   `list-none` は、デフォルトのリストスタイルをリセットしたい場合によく使用されます (例: ナビゲーションメニューを `<ul>` でマークアップする場合)。

## 関連ユーティリティ

*   `list-style-position` (`list-inside`, `list-outside`): マーカーの位置。
*   `list-style-image` (`list-image-*`): マーカー画像。
*   `padding` (`pl-*`): `list-outside` 使用時のスペース確保。

## 公式ドキュメント参照
*   [Tailwind CSS: List Style Type](https://tailwindcss.com/docs/list-style-type)
*   [MDN: list-style-type](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)
## タイトル
title: Typography: Text Indent (テキストインデント)

## タグ
tags: ["tailwindcss", "utilities", "typography", "text-indent", "indent", "paragraph", "spacing"]

## 概要
`indent-{size}` ユーティリティは、テキストブロック (通常は段落 `<p>`) の**最初の行**のインデント (字下げ) を設定します。CSS の `text-indent` プロパティに対応します。

値は通常、Tailwind の `theme.spacing` スケール (`0`, `1`, `2`, `4`, `px` など) を使用します。負の値も利用可能です。

## 基本的な使い方とパラメータ

*   **`indent-0`**: `text-indent: 0px;` (インデントなし)
*   **`indent-px`**: `text-indent: 1px;`
*   **`indent-0.5`**: `text-indent: 0.125rem;` (2px)
*   **`indent-1`**: `text-indent: 0.25rem;` (4px)
*   **`indent-2`**: `text-indent: 0.5rem;` (8px)
*   **`indent-4`**: `text-indent: 1rem;` (16px)
*   ... (値が大きいほどインデントも大きくなる)
*   **`-indent-{size}`**: 負のインデント (ぶら下げインデントなど)。

```html
<div class="space-y-4 p-4 max-w-prose mx-auto"> {/* 読みやすい幅に制限 */}

  <p class="indent-0 bg-gray-100 dark:bg-gray-800 p-2 rounded">
    indent-0: No indent. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>

  <p class="indent-8 bg-gray-100 dark:bg-gray-800 p-2 rounded">
    indent-8 (2rem): The first line of this paragraph is indented by 2rem (32px). Subsequent lines will start from the normal left edge. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>

  <p class="indent-16 bg-gray-100 dark:bg-gray-800 p-2 rounded">
    indent-16 (4rem): A larger indent for the first line. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </p>

  {/* 負のインデント */}
  <p class="-indent-4 pl-4 bg-gray-100 dark:bg-gray-800 p-2 rounded"> {/* pl-4 でスペース確保 */}
    -indent-4 (Negative): The first line starts before the rest of the text (hanging indent effect, requires padding). Excepteur sint occaecat cupidatat non proident.
  </p>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてインデントを変更できます。

```html
<p class="indent-4 md:indent-8 ...">
  Indent size changes on medium screens and wider.
</p>
```

## 状態修飾子

`hover:` や `first-line:` (Tailwind v3.0+) などと組み合わせて、特定の状態や行に対してインデントを適用することも可能です (ただし、一般的ではありません)。

```html
<p class="first-line:indent-0 indent-4 ...">
  First line has no indent, subsequent lines (if wrapped) inherit indent-4 (browser support varies).
</p>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.textIndent` (または `theme.textIndent`) でカスタムのインデント値を追加できます。`theme.spacing` スケールを継承しているため、`spacing` で定義した値も `indent-*` で使用可能です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '7': '1.75rem',
      },
      textIndent: { // textIndent 固有のキーも追加可能
        'paragraph': '1.5em', // フォントサイズ相対
      }
    },
  },
}
```

```html
<p class="indent-7 ...">Custom indent from spacing scale</p>
<p class="indent-paragraph text-lg ...">Custom indent relative to font size</p>
```

## 任意の値 (Arbitrary Values)

任意の値を使ってインデントを直接指定することも可能です。

```html
<p class="indent-[2.5ch] ...">Indent by 2.5 character widths</p>
<p class="indent-[5%] ...">Indent by 5% of the container width</p>
<p class="-indent-[10px] pl-[10px] ...">Negative arbitrary indent</p>
```

## 注意点

*   `text-indent` はブロックレベル要素 (または `display: list-item` など) の**最初の整形された行**にのみ適用されます。
*   負のインデントを使用する場合、テキストが親要素からはみ出す可能性があるため、親要素に適切なパディング (`pl-*`) を設定する必要がある場合があります。
*   書字方向が右から左 (RTL) の場合、インデントは右側から適用されます。

## 関連ユーティリティ

*   `padding` (`pl-*`, `pr-*`): 要素の内側の左右の余白。
*   `margin` (`ml-*`, `mr-*`): 要素の外側の左右の余白。

## 公式ドキュメント参照
*   [Tailwind CSS: Text Indent](https://tailwindcss.com/docs/text-indent)
*   [MDN: text-indent](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
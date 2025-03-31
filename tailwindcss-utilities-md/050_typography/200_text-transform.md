## タイトル
title: Typography: Text Transform (大文字/小文字変換)

## タグ
tags: ["tailwindcss", "utilities", "typography", "text-transform", "uppercase", "lowercase", "capitalize", "normal-case"]

## 概要
`uppercase`, `lowercase`, `capitalize`, `normal-case` ユーティリティは、テキストの大文字と小文字の変換を制御します。CSS の `text-transform` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`uppercase`**: すべての文字を大文字に変換します (`text-transform: uppercase;`)。
*   **`lowercase`**: すべての文字を小文字に変換します (`text-transform: lowercase;`)。
*   **`capitalize`**: 各単語の最初の文字を大文字に変換します (`text-transform: capitalize;`)。
*   **`normal-case`**: デフォルト。大文字/小文字の変換を行いません (`text-transform: none;`)。親要素から継承した変換を打ち消す場合に使用します。

```html
<div class="space-y-2 p-4">
  <p class="uppercase">Makes text uppercase.</p>
  <p class="lowercase">Makes text LOWERCASE.</p>
  <p class="capitalize">capitalizes the first letter of each word.</p>
  <p class="normal-case">Displays text normally (no transformation).</p>

  <div class="uppercase"> {/* 親要素で uppercase */}
    <p>Inherits uppercase.</p>
    <p class="normal-case">Resets to normal case.</p>
  </div>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてテキスト変換を変更できます。

```html
<h1 class="capitalize md:uppercase ...">
  Capitalized on small screens, uppercase on medium and wider.
</h1>
```

## 状態修飾子

`hover:`, `focus:` などと組み合わせて、インタラクションに応じて変換を変更することも可能です。

```html
<button class="normal-case hover:uppercase ...">
  Hover to make uppercase
</button>
```

## 注意点

*   `text-transform` はテキストの表示上の見た目を変えるだけで、実際のテキストコンテンツ (DOM 内の文字列) は変更しません。
*   `capitalize` の挙動は、単語の区切り方に関して言語やブラウザによって微妙に異なる場合があります。
*   特定の言語 (例: ドイツ語の ß) の大文字変換ルールは複雑な場合があります。

## 関連ユーティリティ

*   他のタイポグラフィ関連ユーティリティ (`font-size`, `font-weight` など)。

## 公式ドキュメント参照
*   [Tailwind CSS: Text Transform](https://tailwindcss.com/docs/text-transform)
*   [MDN: text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
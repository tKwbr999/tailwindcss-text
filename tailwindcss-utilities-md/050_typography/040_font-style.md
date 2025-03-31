## タイトル
title: Typography: Font Style (フォントスタイル)

## タグ
tags: ["tailwindcss", "utilities", "typography", "font-style", "italic", "normal"]

## 概要
`italic` および `not-italic` ユーティリティは、テキストをイタリック体で表示するかどうかを制御します。CSS の `font-style` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`italic`**: テキストをイタリック体で表示します (`font-style: italic;`)。
*   **`not-italic`**: テキストを通常のスタイルで表示します (`font-style: normal;`)。親要素などから継承されたイタリックスタイルを打ち消す場合に使用します。

```html
<div class="space-y-2 p-4">
  <p class="not-italic">Normal text (default, not-italic).</p>
  <p class="italic">Italic text.</p>

  <blockquote class="italic border-l-4 pl-4 my-4">
    <p>"This whole blockquote is italic."</p>
    <footer class="not-italic text-sm text-gray-600 dark:text-gray-400">— Someone famous <cite>(Style reset with not-italic)</cite></footer>
  </blockquote>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてフォントスタイルを変更できますが、通常はあまり使われません。

```html
<p class="not-italic md:italic ...">
  Italic on medium screens and wider.
</p>
```

## 状態修飾子

`hover:`, `focus:` などと組み合わせて、特定の状態でスタイルを変更することも可能です。

```html
<a href="#" class="not-italic hover:italic ...">
  Hover to make italic
</a>
```

## 注意点

*   イタリック体が利用可能かどうかは、使用しているフォントファミリーに依存します。フォントがイタリック体を持っていない場合、ブラウザは擬似的な斜体 (oblique) で表示しようとすることがあります。
*   `font-style` は主に `italic` と `normal` の切り替えに使用されます。CSS には `oblique` という値もありますが、Tailwind のコアユーティリティには含まれていません (任意の値 `font-[oblique_10deg]` などで指定可能)。

## 関連ユーティリティ

*   `font-family`: フォントファミリー。
*   `font-weight`: フォントの太さ。
*   `text-decoration`: 下線、打ち消し線など。

## 公式ドキュメント参照
*   [Tailwind CSS: Font Style](https://tailwindcss.com/docs/font-style)
*   [MDN: font-style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
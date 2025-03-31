## タイトル
title: Typography: Text Decoration Line (テキスト装飾線)

## タグ
tags: ["tailwindcss", "utilities", "typography", "text-decoration", "underline", "overline", "line-through", "no-underline"]

## 概要
`underline`, `overline`, `line-through`, `no-underline` ユーティリティは、テキストに装飾線を追加または削除します。CSS の `text-decoration-line` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`underline`**: テキストに下線を追加します (`text-decoration-line: underline;`)。リンク (`<a>`) のデフォルトスタイルです。
*   **`overline`**: テキストに上線を追加します (`text-decoration-line: overline;`)。
*   **`line-through`**: テキストに打ち消し線を追加します (`text-decoration-line: line-through;`)。
*   **`no-underline`**: テキストの装飾線を削除します (`text-decoration-line: none;`)。リンクの下線を消したい場合などによく使われます。

```html
<div class="space-y-2 p-4 text-lg">
  <p class="underline">Underlined text.</p>
  <p class="overline">Overlined text.</p>
  <p class="line-through">Line-through text.</p>
  <p class="no-underline">No text decoration (default for most elements).</p>
  <a href="#" class="underline hover:no-underline">Link with underline, removed on hover.</a>
</div>
```

## 複数の装飾線

これらのユーティリティは**組み合わせることができません**。例えば、`underline line-through` としても、通常は最後に指定されたクラス (`line-through`) のみが適用されます。複数の装飾線を同時に適用したい場合は、カスタム CSS を使用する必要があります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて装飾線を変更できます。

```html
<p class="underline md:no-underline ...">
  Underlined on small screens, no underline on medium and wider.
</p>
```

## 状態修飾子

`hover:`, `focus:`, `active:` などと組み合わせて、インタラクションに応じて装飾線を変更するのは非常に一般的です。特にリンクのホバー効果でよく使われます。

```html
<a href="#" class="no-underline hover:underline focus:underline ...">
  Underline appears on hover or focus.
</a>
```

## 注意点

*   これらのユーティリティは `text-decoration-line` プロパティのみを制御します。線の色、スタイル (点線など)、太さを変更するには、それぞれ `text-decoration-color`, `text-decoration-style`, `text-decoration-thickness` に対応するユーティリティを使用します (次のセクションで解説)。
*   `<a>` タグにはデフォルトで `underline` が適用されることが多いため、下線を消したい場合は `no-underline` を明示的に指定します。

## 関連ユーティリティ

*   `text-decoration-color` (`decoration-*`): 装飾線の色。
*   `text-decoration-style` (`decoration-*`): 装飾線のスタイル (solid, wavy, dotted など)。
*   `text-decoration-thickness` (`decoration-*`): 装飾線の太さ。
*   `text-underline-offset` (`underline-offset-*`): 下線とテキストの間のオフセット (間隔)。

## 公式ドキュメント参照
*   [Tailwind CSS: Text Decoration](https://tailwindcss.com/docs/text-decoration) (Line, Color, Style, Thickness を含む)
*   [MDN: text-decoration-line](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line)
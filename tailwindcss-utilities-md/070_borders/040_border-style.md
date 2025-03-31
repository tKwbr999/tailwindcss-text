## タイトル
title: Borders: Border Style (ボーダーの線種)

## タグ
tags: ["tailwindcss", "utilities", "borders", "border-style", "solid", "dashed", "dotted", "double", "none"]

## 概要
`border-{style}` ユーティリティは、要素のボーダー (枠線) のスタイル (線種) を設定します。CSS の `border-style` プロパティに対応します。

ボーダーを表示するには、通常、スタイル (`border-solid` など) に加えて、太さ (`border`, `border-2` など) と色 (`border-{color}`) を指定する必要があります。

## 基本的な使い方とパラメータ

*   **`border-solid`**: 実線ボーダー (`border-style: solid;`)。最も一般的で、`border-width` が 0 以外の場合のデフォルトに近い挙動です (ブラウザ依存)。
*   **`border-dashed`**: 破線ボーダー (`border-style: dashed;`)。
*   **`border-dotted`**: 点線ボーダー (`border-style: dotted;`)。
*   **`border-double`**: 二重線ボーダー (`border-style: double;`)。ボーダー幅が 3px 以上ないと効果が見えにくい場合があります。
*   **`border-hidden`**: ボーダーを非表示にします (`border-style: hidden;`)。`border-0` と似ていますが、テーブルのボーダー相殺 (`border-collapse`) において挙動が異なります。
*   **`border-none`**: ボーダーを表示しません (`border-style: none;`)。デフォルトのボーダースタイルを打ち消します。

```html
<div class="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
  <div class="border-4 border-blue-500 border-solid p-4 rounded text-center">Solid (Default-like)</div>
  <div class="border-4 border-green-500 border-dashed p-4 rounded text-center">Dashed</div>
  <div class="border-4 border-red-500 border-dotted p-4 rounded text-center">Dotted</div>
  <div class="border-4 border-purple-500 border-double p-4 rounded text-center">Double</div>
  <div class="border-4 border-gray-500 border-hidden p-4 rounded text-center bg-gray-100 dark:bg-gray-800">Hidden</div>
  <div class="border-4 border-gray-500 border-none p-4 rounded text-center bg-gray-100 dark:bg-gray-800">None</div>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてボーダースタイルを変更できます。

```html
<div class="border-2 border-dashed md:border-solid ...">
  Dashed border on small screens, solid on medium and wider.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じてボーダースタイルを変更できます。

```html
<button class="border-2 border-blue-500 border-solid hover:border-dashed focus:border-dotted ...">
  Border style changes on hover/focus
</button>
```

## 注意点

*   ボーダーを表示するには、通常、スタイル (`border-solid` など)、太さ (`border-*`)、色 (`border-*`) の 3 つが必要です。ただし、`border-width` が 0 以外の場合、多くのブラウザではデフォルトで `border-style: solid` が適用されます。
*   `border-hidden` は `border-none` と似ていますが、`border-collapse: collapse` が設定されたテーブル内で隣接するセルのボーダーの表示に影響を与える点が異なります (`hidden` は優先度が高い)。通常は `border-none` または `border-0` を使用します。
*   `border-double` の二重線が見えるためには、`border-width` が少なくとも `3px` (例: `border-3` (カスタム) や `border-4`) 必要です。

## 関連ユーティリティ

*   `border-width`: ボーダーの太さ。
*   `border-color`: ボーダーの色。
*   `divide-style`: **子要素の間**のボーダー線種。
*   `outline-style`: アウトラインの線種。
*   `ring-style`: (コアにはない) リングの線種 (通常は solid)。

## 公式ドキュメント参照
*   [Tailwind CSS: Border Style](https://tailwindcss.com/docs/border-style)
*   [MDN: border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
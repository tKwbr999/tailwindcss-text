## タイトル
title: Layout: Box Decoration Break (複数行/カラム要素の装飾)

## タグ
tags: ["tailwindcss", "utilities", "layout", "box-decoration-break", "clone", "slice", "inline", "fragment"]

## 概要
`box-decoration-clone` および `box-decoration-slice` ユーティリティは、インライン要素が複数行に折り返されたり、ブロック要素がカラムやページで分割されたりした場合に、その要素の `padding`, `border`, `border-radius`, `box-shadow`, `background` などの装飾が各フラグメント（断片）にどのように適用されるかを制御します。CSS の `box-decoration-break` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`box-decoration-slice`**: デフォルト。要素が分割された場合、装飾 (パディング、ボーダーなど) は要素全体を囲むようにレンダリングされ、分割点で「スライス」されたように見えます。角丸や影は通常、要素全体の端にのみ適用されます。
*   **`box-decoration-clone`**: 要素が分割された場合、各フラグメントが独立した要素であるかのように、それぞれのフラグメントに対して装飾が適用（複製）されます。角丸や影なども各フラグメントに適用されます。

```html
<div class="columns-2 gap-6 p-4 bg-gray-100 dark:bg-gray-800 rounded">

  {/* デフォルト (slice) */}
  <span class="box-decoration-slice bg-gradient-to-r from-indigo-300 to-pink-300 text-black p-2 rounded-lg shadow-md leading-[3]">
    This is a long inline text that will likely wrap across multiple lines or columns.
    The background, padding, border-radius, and shadow are sliced at the break points.
  </span>

  <br><br><hr class="my-4 border-dashed dark:border-gray-700"><br>

  {/* clone を適用 */}
  <span class="box-decoration-clone bg-gradient-to-r from-indigo-300 to-pink-300 text-black p-2 rounded-lg shadow-md leading-[3]">
    This is another long inline text using box-decoration-clone.
    Notice how the background, padding, border-radius, and shadow are cloned for each line fragment.
  </span>

</div>

<hr class="my-8 border-dashed dark:border-gray-700">

{/* ブロック要素での例 (カラム分割) */}
<div class="columns-2 gap-6 p-4 bg-gray-100 dark:bg-gray-800 rounded">
  <div class="box-decoration-slice mb-4 p-4 border-4 border-dashed border-purple-400 bg-purple-100 dark:bg-purple-900/30">
    <h4 class="font-bold">Slice (Default)</h4>
    This block might break across columns. The border and padding are sliced.
  </div>

  <div class="box-decoration-clone p-4 border-4 border-dashed border-green-400 bg-green-100 dark:bg-green-900/30">
     <h4 class="font-bold">Clone</h4>
    This block uses clone. If it breaks, each fragment gets its own border and padding.
  </div>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて `box-decoration-break` の動作を変更できます。

```html
<span class="box-decoration-slice md:box-decoration-clone ...">
  Decoration behavior changes on medium screens and wider.
</span>
```

## 注意点

*   このプロパティは、要素が実際に複数行に折り返されるか、カラム/ページで分割される場合にのみ効果があります。
*   すべての装飾プロパティ (`background`, `border`, `padding`, `margin`, `box-shadow`, `border-radius`, `clip-path` など) に影響します。
*   ブラウザのサポート状況や、他のスタイルとの組み合わせによっては、予期しない表示になる可能性もあります。比較的マイナーなプロパティであり、特定のデザインを実現するために限定的に使用されることが多いです。

## 関連ユーティリティ

*   `columns`: 複数カラムレイアウト。
*   `break-before`, `break-after`, `break-inside`: 区切り制御。
*   各種装飾ユーティリティ (`bg-*`, `border-*`, `p-*`, `shadow-*`, `rounded-*` など)。

## 公式ドキュメント参照
*   [Tailwind CSS: Box Decoration Break](https://tailwindcss.com/docs/box-decoration-break)
*   [MDN: box-decoration-break](https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break)
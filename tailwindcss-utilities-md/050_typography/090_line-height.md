## タイトル
title: Typography: Line Height (行の高さ)

## タグ
tags: ["tailwindcss", "utilities", "typography", "line-height", "leading", "spacing", "vertical rhythm"]

## 概要
`leading-{size}` ユーティリティは、テキストの行の高さを設定します。CSS の `line-height` プロパティに対応します。「リーディング (Leading)」とも呼ばれます。

行の高さは、テキストの各行が占める垂直方向のスペースを決定し、行間のスペース（行送り）に影響を与えます。読みやすさにおいて非常に重要な要素です。

## 基本的な使い方とパラメータ

値は通常、キーワード (数値または相対的なサイズ) で指定します。

*   **`leading-3`** ～ **`leading-10`**: 固定の数値 (`.75rem` ～ `2.5rem`)。通常はフォントサイズに合わせて調整されます。
*   **`leading-none`**: `line-height: 1;` (フォントサイズと同じ高さ)
*   **`leading-tight`**: `line-height: 1.25;` (やや詰める)
*   **`leading-snug`**: `line-height: 1.375;` (少し詰める)
*   **`leading-normal`**: `line-height: 1.5;` (デフォルト、標準的な行間)
*   **`leading-relaxed`**: `line-height: 1.625;` (少し広げる)
*   **`leading-loose`**: `line-height: 2;` (広げる)

単位なしの数値 (例: `1.5`) は、現在の要素の `font-size` に対する倍率として計算されます。これが一般的で推奨される方法です。

```html
<div class="space-y-4 p-4 max-w-md mx-auto">
  <p class="text-base leading-none bg-gray-100 dark:bg-gray-800 p-1 rounded">Leading None (1). The quick brown fox jumps over the lazy dog.</p>
  <p class="text-base leading-tight bg-gray-100 dark:bg-gray-800 p-1 rounded">Leading Tight (1.25). The quick brown fox jumps over the lazy dog.</p>
  <p class="text-base leading-snug bg-gray-100 dark:bg-gray-800 p-1 rounded">Leading Snug (1.375). The quick brown fox jumps over the lazy dog.</p>
  <p class="text-base leading-normal bg-gray-100 dark:bg-gray-800 p-1 rounded">Leading Normal (1.5). The quick brown fox jumps over the lazy dog.</p>
  <p class="text-base leading-relaxed bg-gray-100 dark:bg-gray-800 p-1 rounded">Leading Relaxed (1.625). The quick brown fox jumps over the lazy dog.</p>
  <p class="text-base leading-loose bg-gray-100 dark:bg-gray-800 p-1 rounded">Leading Loose (2). The quick brown fox jumps over the lazy dog.</p>

  <hr class="my-4 border-dashed dark:border-gray-700">

  {/* 固定値 */}
  <p class="text-sm leading-4 bg-gray-100 dark:bg-gray-800 p-1 rounded">Text SM with Leading 4 (1rem / 16px). Fixed line height.</p>
  <p class="text-lg leading-8 bg-gray-100 dark:bg-gray-800 p-1 rounded">Text LG with Leading 8 (2rem / 32px). Fixed line height.</p>
</div>
```

## フォントサイズとの関係

Tailwind のデフォルトの `text-{size}` ユーティリティは、多くの場合、適切な `line-height` も同時に設定します (例: `text-base` は `leading-normal` (1.5) を含む)。

`leading-*` ユーティリティを使うと、`text-{size}` で設定されたデフォルトの行の高さを**上書き**できます。

```html
<p class="text-3xl leading-none">Large text, but no extra line height.</p>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて行の高さを変更できます。

```html
<p class="leading-normal md:leading-relaxed ...">
  Line height increases on medium screens and wider.
</p>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.lineHeight` (または `theme.lineHeight`) でカスタムの行の高さの値やキーを追加できます。値には単位なしの数値、または `rem`, `px`, `%` などの単位付きの値を指定できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      lineHeight: {
        '11': '2.75rem', // 固定値
        'tighter': '1.1', // 単位なし (倍率)
        'paragraph': '1.75',
      },
    },
  },
}
```

```html
<p class="leading-tighter">Tighter line height</p>
<p class="leading-paragraph">Custom paragraph line height</p>
<p class="leading-11">Fixed line height 2.75rem</p>
```

## 任意の値 (Arbitrary Values)

任意の値を使って行の高さを直接指定することも可能です。

```html
<p class="leading-[1.8]">Custom line height 1.8</p>
<p class="leading-[30px]">Custom line height 30px</p>
```

## 注意点

*   行の高さはテキストの垂直方向のリズムと読みやすさに大きく影響します。一般的に、本文テキストでは `1.5` (`leading-normal`) から `1.75` 程度の値が読みやすいとされています。
*   見出しなど大きなフォントサイズの場合は、行の高さを少し詰める (`leading-tight` や `leading-snug`) とバランスが取れることがあります。
*   固定値 (`rem`, `px`) で指定すると、フォントサイズが変わっても行の高さは固定されますが、単位なしの数値で指定すると、フォントサイズに応じて行の高さもスケーリングします。通常は**単位なしの数値**を使用するのが柔軟性が高く推奨されます。

## 関連ユーティリティ

*   `font-size` (`text-*`): フォントサイズ。
*   `font-family`, `font-weight`, `letter-spacing` など他のタイポグラフィユーティリティ。
*   `margin`, `padding`: 要素間の垂直方向のスペースにも影響します。

## 公式ドキュメント参照
*   [Tailwind CSS: Line Height](https://tailwindcss.com/docs/line-height)
*   [MDN: line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
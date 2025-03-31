## タイトル
title: Typography: Text Wrap (テキストの折り返し)

## タグ
tags: ["tailwindcss", "utilities", "typography", "text-wrap", "wrap", "nowrap", "balance", "pretty", "whitespace"]

## 概要
`text-wrap`, `text-nowrap`, `text-balance`, `text-pretty` ユーティリティは、要素内でテキストがどのように折り返されるかを制御します。CSS の `text-wrap` プロパティに対応します (Tailwind v3.3 で導入)。

これは従来の `whitespace-nowrap` と一部機能が重複しますが、より新しい折り返し制御 (`balance`, `pretty`) も含みます。

## 基本的な使い方とパラメータ

*   **`text-wrap`**: デフォルト (`text-wrap: wrap;`)。通常の折り返し動作。テキストはコンテナの境界で折り返されます。
*   **`text-nowrap`**: テキストの折り返しを禁止します (`text-wrap: nowrap;`)。`whitespace-nowrap` と同じ効果です。テキストは一行で表示され、コンテナからはみ出す可能性があります。
*   **`text-balance`**: (実験的サポート) テキストの行の長さを均等にしようと試みます (`text-wrap: balance;`)。特に複数行の見出しなどで、最後の行だけが極端に短くなる（孤立行、orphan）のを防ぎ、よりバランスの取れた見た目になります。通常、短いテキストブロック (数行程度) に効果があります。
*   **`text-pretty`**: (実験的サポート) `text-balance` よりも高度なアルゴリズムで、孤立行を防ぎ、ハイフネーションを考慮するなどして、より読みやすいテキストブロックを作成しようと試みます (`text-wrap: pretty;`)。本文のような長いテキストに適しています。

```html
<div class="space-y-6 p-4 max-w-md mx-auto">

  <div>
    <p class="text-sm mb-1">text-wrap (Default)</p>
    <p class="text-wrap bg-gray-100 dark:bg-gray-800 p-2 rounded border dark:border-gray-700">
      This is a long text that will wrap normally within the container boundaries. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  <div>
    <p class="text-sm mb-1">text-nowrap</p>
    <p class="text-nowrap overflow-x-auto p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      This very long text will not wrap and will overflow its container horizontally. You might need overflow-x-auto to see it all.
    </p>
  </div>

  <div>
    <p class="text-sm mb-1">text-balance (Try resizing window)</p>
    <h2 class="text-2xl font-bold text-balance bg-gray-100 dark:bg-gray-800 p-2 rounded border dark:border-gray-700">
      A Slightly Longer Heading That Might Wrap Unevenly Without Balance
    </h2>
     <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">
      `text-balance` attempts to make lines roughly equal length. Most effective on short blocks like headings. Browser support varies.
    </p>
  </div>

   <div>
    <p class="text-sm mb-1">text-pretty (Subtle effect)</p>
    <p class="text-pretty bg-gray-100 dark:bg-gray-800 p-2 rounded border dark:border-gray-700 text-justify">
      The `text-pretty` utility tries to optimize line breaks for readability, avoiding orphans and considering hyphenation. The effect might be subtle compared to `text-balance` but is intended for longer paragraphs like this one. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
     <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">
      `text-pretty` aims for better overall paragraph layout. Browser support varies.
    </p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて折り返し方法を変更できます。

```html
<p class="text-balance md:text-wrap ...">
  Balanced text on small screens, normal wrap on medium and wider.
</p>
```

## `whitespace` との関係

*   `text-nowrap` は `whitespace-nowrap` と同じ効果を持ちます。どちらを使用しても構いません。
*   `text-wrap` は `whitespace-normal` (デフォルト) と同じ効果です。
*   `text-balance` と `text-pretty` は `whitespace` ユーティリティでは実現できません。

## 注意点

*   **ブラウザサポート:** `text-wrap: balance` と `text-wrap: pretty` は比較的新しい CSS の機能であり、すべてのブラウザでサポートされているわけではありません (2024年初頭時点)。主要なモダンブラウザ (Chrome, Edge, Safari) の最新版ではサポートが進んでいますが、Firefox などではまだ対応していない場合があります。使用する際は、ターゲットとするブラウザの互換性を確認してください。サポートされていないブラウザでは、通常の `wrap` として扱われます。
*   **パフォーマンス:** 特に `text-pretty` は、最適な改行位置を計算するためにブラウザのリソースを消費する可能性があります。非常に長いテキストに適用する場合は、パフォーマンスへの影響を考慮してください。
*   **効果の度合い:** `text-balance` は短いテキストブロック (見出しなど、通常 6 行以下) で最も効果を発揮します。`text-pretty` はより長いテキスト向けですが、その効果は `text-balance` ほど劇的ではない場合があります。

## 関連ユーティリティ

*   `whitespace`: テキストの空白文字と折り返しを制御する従来のユーティリティ。
*   `word-break`: 単語の途中での改行ルールを制御します。
*   `hyphens`: ハイフネーション (単語の途中でハイフンを入れて改行する) を制御します。

## 公式ドキュメント参照
*   [Tailwind CSS: Text Wrap](https://tailwindcss.com/docs/text-wrap)
*   [MDN: text-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap)
*   [CSS Text Module Level 4 (W3C Working Draft)](https://drafts.csswg.org/css-text-4/#text-wrap) (balance, pretty の仕様)
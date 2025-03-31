## タイトル
title: Layout: Break Inside (要素内の改ページ・改カラム回避)

## タグ
tags: ["tailwindcss", "utilities", "layout", "columns", "print", "pagination", "break-inside"]

## 概要
`break-inside-{value}` ユーティリティは、要素の**内部**でカラム区切りやページ区切りが発生するかどうかを制御します。主に、複数カラムレイアウトや印刷時に、特定の要素（画像、コードブロック、引用など）が途中で分割されてしまうのを防ぐために使用します。CSS の `break-inside` プロパティに対応します。

## 基本的な使い方とパラメータ

以下のクラスが利用可能です。

*   **`break-inside-auto`**: デフォルト。要素内部での区切りを許可します。
*   **`break-inside-avoid`**: 要素内部での区切り (カラム区切り、ページ区切り両方) を避けます。要素全体が次のカラムやページに移動する可能性があります。
*   **`break-inside-avoid-page`**: 要素内部での**ページ**区切りを避けます (印刷時など)。カラム区切りは許可されます。
*   **`break-inside-avoid-column`**: 要素内部での**カラム**区切りを避けます。ページ区切りは許可されます。

```html
<div class="columns-2 md:columns-3 gap-8 p-4 bg-gray-100 dark:bg-gray-800 rounded">
  <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

  {/* この引用ブロックは途中で分割される可能性がある */}
  <figure class="mb-4 p-4 border-l-4 border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
    <blockquote class="italic text-gray-700 dark:text-gray-300">
      "これは通常の引用です。カラムの途中で改行されるかもしれません。"
    </blockquote>
  </figure>

  <p class="mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

  {/* この引用ブロックは内部での分割が避けられる */}
  <figure class="break-inside-avoid mb-4 p-4 border-l-4 border-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 dark:border-indigo-700">
    <blockquote class="italic text-indigo-700 dark:text-indigo-300">
      "この引用 (`break-inside-avoid`) は、カラムやページの途中で分割されません。ブロック全体が次のカラム/ページに移動します。"
    </blockquote>
  </figure>

  <p class="mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

  {/* 印刷時のみ内部改ページを回避 */}
  <div class="print:break-inside-avoid-page mb-4">
    <h4 class="font-semibold">印刷時に分割されないセクション</h4>
    <p>この内容は印刷時にページの途中で分割されません。</p>
    <img src="https://via.placeholder.com/100" alt="Placeholder" class="w-full aspect-square object-cover rounded mt-2">
  </div>

  <p class="mb-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
```

## レスポンシブ

`break-inside-*` ユーティリティ自体は通常、レスポンシブプレフィックス (`sm:`, `md:` など) と組み合わせて使うことは稀です。カラムレイアウト (`columns-*`) がレスポンシブに変化することに合わせて、区切り動作も自動的に調整されるためです。

## 印刷時の制御 (`print:`)

`print:` 修飾子と `break-inside-avoid-page` を組み合わせることで、印刷時のみ特定の要素がページ間で分割されるのを防ぐことができます。図表やコードブロックなどが途中で切れてしまうのを避けるのに役立ちます。

```html
<pre class="print:break-inside-avoid-page bg-gray-800 text-white p-4 rounded overflow-x-auto"><code>
function helloWorld() {
  console.log("Hello, World!");
  // このコードブロックは印刷時にページ分割されません
}
</code></pre>
```

## 注意点

*   `break-inside-avoid` を適用すると、要素全体が次のカラムやページに移動するため、レイアウトに大きな空白が生じる可能性があります。使いすぎには注意が必要です。
*   ブラウザのサポート状況や実装によっては、期待通りに動作しない場合もあります。特に複雑なネスト構造やフロート要素などが絡む場合。
*   主に複数カラムレイアウトや印刷コンテキストで使用されるユーティリティです。

## 関連ユーティリティ

*   `columns`: 複数カラムレイアウトを作成します。
*   `break-after`: 要素の**後**で区切りを制御します。
*   `break-before`: 要素の**前**で区切りを制御します。

## 公式ドキュメント参照
*   [Tailwind CSS: Break Inside](https://tailwindcss.com/docs/break-inside)
*   [MDN: break-inside](https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside)
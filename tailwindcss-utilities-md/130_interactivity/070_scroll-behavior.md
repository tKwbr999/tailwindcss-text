## タイトル
title: Interactivity: Scroll Behavior (スクロール動作)

## タグ
tags: ["tailwindcss", "utilities", "interactivity", "scroll-behavior", "scroll", "smooth", "auto", "anchor link"]

## 概要
`scroll-auto` および `scroll-smooth` ユーティリティは、ユーザーがページ内リンク (`#hash`) をクリックしたり、JavaScript によってプログラム的にスクロールがトリガーされたりした場合に、スクロールが**瞬時に**行われるか、**滑らかに (スムーズに)** アニメーションするかを制御します。CSS の `scroll-behavior` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`scroll-auto`**: デフォルト。スクロールは瞬時に行われます (`scroll-behavior: auto;`)。
*   **`scroll-smooth`**: スムーズスクロールを有効にします (`scroll-behavior: smooth;`)。

通常、このクラスはスクロール可能なコンテナ (例: `overflow-y-auto` が設定された `div`) または `<html>` 要素 (ページ全体のスクロール) に適用します。

```html
<style>
/* スムーズスクロールは html 要素に適用するのが一般的 */
/* html { scroll-behavior: smooth; } */
/* Tailwind では html/body に直接クラスを付与するか、 */
/* グローバル CSS で設定します */
</style>

<body class="scroll-smooth"> {/* または html タグに */}

<nav class="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 shadow z-10 flex space-x-4">
  <a href="#section-1" class="text-blue-600 hover:underline">Section 1</a>
  <a href="#section-2" class="text-blue-600 hover:underline">Section 2</a>
  <a href="#section-3" class="text-blue-600 hover:underline">Section 3</a>
</nav>

<div class="pt-20 space-y-8"> {/* ヘッダー分のスペース */}
  <section id="section-1" class="h-screen bg-gray-100 dark:bg-gray-700 p-8">
    <h2 class="text-2xl font-bold">Section 1</h2>
    <p>Click the links above to scroll smoothly.</p>
  </section>
  <section id="section-2" class="h-screen bg-gray-200 dark:bg-gray-600 p-8">
    <h2 class="text-2xl font-bold">Section 2</h2>
  </section>
  <section id="section-3" class="h-screen bg-gray-300 dark:bg-gray-500 p-8">
    <h2 class="text-2xl font-bold">Section 3</h2>
  </section>
</div>

{/* スクロール可能なコンテナの例 */}
<div class="h-48 w-64 overflow-y-auto scroll-smooth border rounded dark:border-gray-700 mt-8 p-2">
  <a href="#item-3" class="block text-sm text-blue-500 mb-2">Scroll to Item 3</a>
  <div id="item-1" class="h-20 bg-red-200 mb-2">Item 1</div>
  <div id="item-2" class="h-20 bg-red-300 mb-2">Item 2</div>
  <div id="item-3" class="h-20 bg-red-400 mb-2">Item 3</div>
  <div id="item-4" class="h-20 bg-red-500 mb-2">Item 4</div>
</div>

</body>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてスムーズスクロールを有効/無効にできます。

```html
<html class="scroll-auto md:scroll-smooth">
  {/* モバイルでは瞬時、md 以上でスムーズスクロール */}
</html>
```

## 状態修飾子

`scroll-behavior` は通常、状態に応じて変更するものではありません。

## `motion-reduce` との連携

ユーザーが OS で視差効果などを無効にする設定 (`prefers-reduced-motion: reduce`) をしている場合、スムーズスクロールも無効にすることがアクセシビリティの観点から推奨されます。Tailwind では `motion-reduce` 修飾子を使ってこれを実現できます。

```html
<html class="scroll-smooth motion-reduce:scroll-auto">
  {/* スムーズスクロールを有効にするが、ユーザー設定で無効化 */}
</html>
```
Tailwind の Preflight (ベーススタイルリセット) には、`prefers-reduced-motion: reduce` が設定されている場合にスムーズスクロールを無効にするスタイルが**デフォルトで含まれています**。そのため、通常は `scroll-smooth` を適用するだけで、`motion-reduce` を明示的に指定する必要はありません。

## 注意点

*   `scroll-behavior` は、**プログラムによるスクロール**と**ナビゲーションによるスクロール** (アンカーリンク `#hash` など) にのみ影響します。ユーザーがマウスホイールやタッチ操作で行う通常のスクロールには影響しません。
*   スムーズスクロールのアニメーション速度やイージング関数は、ブラウザによって実装が異なり、CSS で直接制御することはできません。
*   ブラウザのサポート状況は良好ですが、非常に古いブラウザではサポートされていない場合があります。

## 関連ユーティリティ

*   `scroll-margin` (`scroll-m-*`): スクロール停止位置のマージン。
*   `scroll-padding` (`scroll-p-*`): スクロールポートのパディング。
*   `scroll-snap` (`snap-*`): スクロールスナップ。

## 公式ドキュメント参照
*   [Tailwind CSS: Scroll Behavior](https://tailwindcss.com/docs/scroll-behavior)
*   [MDN: scroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)
*   [Tailwind CSS: Motion Reduce](https://tailwindcss.com/docs/hover-focus-and-other-states#motion-reduce)
## タイトル
title: Layout: Overflow (はみ出したコンテンツの処理)

## タグ
tags: ["tailwindcss", "utilities", "layout", "overflow", "scroll", "hidden", "clip", "visible", "auto"]

## 概要
`overflow-{value}`, `overflow-x-{value}`, `overflow-y-{value}` ユーティリティは、要素のコンテンツがその要素のパディングボックス (padding box) に収まらない場合に、はみ出した部分をどのように処理するかを制御します。スクロールバーを表示させたり、はみ出しを隠したり、切り取ったりすることができます。CSS の `overflow`, `overflow-x`, `overflow-y` プロパティに対応します。

## 基本的な使い方とパラメータ

### `overflow` (水平・垂直両方)

*   **`overflow-auto`**: コンテンツがはみ出した場合にのみスクロールバーを表示します。
*   **`overflow-hidden`**: はみ出したコンテンツを隠します。スクロールバーは表示されません。
*   **`overflow-clip`**: `overflow-hidden` と同様にはみ出しを隠しますが、プログラムによるスクロールも禁止します。パフォーマンスがわずかに向上する可能性があります。
*   **`overflow-visible`**: デフォルト。はみ出したコンテンツは要素のボックスの外側に表示されます。
*   **`overflow-scroll`**: コンテンツのはみ出しに関わらず、常にスクロールバーを表示します (スペースが確保されます)。

### `overflow-x`, `overflow-y` (特定の方向)

*   **`overflow-x-auto`**, **`overflow-x-hidden`**, etc.: 水平方向のオーバーフローのみを制御します。
*   **`overflow-y-auto`**, **`overflow-y-hidden`**, etc.: 垂直方向のオーバーフローのみを制御します。

```html
<div class="space-y-8 p-4">

  {/* overflow-auto */}
  <div>
    <p class="text-sm mb-1">overflow-auto (はみ出したらスクロール)</p>
    <div class="overflow-auto w-64 h-24 p-2 border rounded bg-gray-100 dark:bg-gray-800">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </div>

  {/* overflow-hidden */}
  <div>
    <p class="text-sm mb-1">overflow-hidden (はみ出しを隠す)</p>
    <div class="overflow-hidden w-64 h-24 p-2 border rounded bg-gray-100 dark:bg-gray-800">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </div>

  {/* overflow-clip */}
   <div>
    <p class="text-sm mb-1">overflow-clip (隠してスクロールも禁止)</p>
    <div class="overflow-clip w-64 h-24 p-2 border rounded bg-gray-100 dark:bg-gray-800">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </div>

  {/* overflow-visible (デフォルト) */}
   <div>
    <p class="text-sm mb-1">overflow-visible (はみ出して表示)</p>
    <div class="overflow-visible w-64 h-16 p-2 border rounded bg-gray-100 dark:bg-gray-800 relative z-0"> {/* z-index注意 */}
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>

  {/* overflow-scroll */}
   <div>
    <p class="text-sm mb-1">overflow-scroll (常にスクロールバー)</p>
    <div class="overflow-scroll w-64 h-24 p-2 border rounded bg-gray-100 dark:bg-gray-800">
       Short content. Scrollbars are always visible.
    </div>
  </div>

  {/* overflow-x / overflow-y */}
   <div>
    <p class="text-sm mb-1">overflow-x-auto / overflow-y-hidden</p>
    <div class="overflow-x-auto overflow-y-hidden whitespace-nowrap w-64 h-24 p-2 border rounded bg-gray-100 dark:bg-gray-800">
      This is a very long horizontal line of text that needs horizontal scrolling. Vertical scrolling is hidden. This is a very long horizontal line of text that needs horizontal scrolling. Vertical scrolling is hidden.
    </div>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてオーバーフローの挙動を変更できます。

```html
{/* デフォルトは隠す、md 以上ではみ出したらスクロール */}
<div class="overflow-hidden md:overflow-auto h-32 ...">
  {/* ... content ... */}
</div>
```

## 注意点

*   `overflow` を `scroll`, `auto`, `hidden`, `clip` のいずれかに設定すると、通常、要素は新しい**ブロック整形コンテキスト (Block Formatting Context, BFC)** を作成します。これは、内部のフロートを包含したり、マージンの相殺を防いだりする効果があります (`display: flow-root;` に似た効果)。
*   `overflow-visible` (デフォルト) 以外の値が設定されている要素では、`border-radius` で角を丸めても、はみ出したコンテンツは角丸の外側で切り取られます。
*   スクロールバーの表示は、OS やブラウザの設定によって見た目が異なる場合があります。また、`overflow-scroll` は常にスクロールバー用のスペースを確保するため、レイアウトに影響を与える可能性があります。`overflow-auto` の方が一般的には好まれます。
*   `overflow-clip` は比較的新しい値であり、古いブラウザではサポートされていない可能性があります。

## 関連ユーティリティ

*   `overscroll-behavior`: 要素内でスクロールが限界に達したときのブラウザのデフォルトのスクロール動作 (ページ全体のスクロールなど) を制御します。
*   `whitespace` (`whitespace-nowrap` など): テキストの折り返しを制御します。`overflow-x-auto` と組み合わせて使うことがあります。
*   `text-overflow` (`truncate` など): テキストがはみ出した場合に省略記号 (...) を表示します。`overflow-hidden` と `whitespace-nowrap` が必要です。

## 公式ドキュメント参照
*   [Tailwind CSS: Overflow](https://tailwindcss.com/docs/overflow)
*   [MDN: overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
*   [MDN: Block formatting context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)
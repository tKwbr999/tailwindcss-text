## タイトル
title: Interactivity: Scroll Snap Stop (スナップ停止挙動)

## タグ
tags: ["tailwindcss", "utilities", "interactivity", "scroll-snap-stop", "scroll-snap", "snap", "normal", "always"]

## 概要
`snap-normal` および `snap-always` ユーティリティは、スクロールスナップコンテナ内で、ユーザーがスクロール操作を行った際に、ブラウザがスナップ位置を通過できるか、それとも必ず各スナップ位置で停止しなければならないかを制御します。CSS の `scroll-snap-stop` プロパティに対応します。

このユーティリティは、**スクロールコンテナ** (例: `overflow-auto`, `snap-x`/`snap-y` を持つ要素) に適用します。

## 基本的な使い方とパラメータ

*   **`snap-normal`**: デフォルト。ユーザーは速いスクロール操作で複数のスナップ位置を通過できます (`scroll-snap-stop: normal;`)。ブラウザは最も適切と思われるスナップ位置で停止します。
*   **`snap-always`**: ユーザーはスクロール操作でスナップ位置を通過できず、**必ず**次のスナップ位置で停止します (`scroll-snap-stop: always;`)。

```html
<div class="flex space-x-8 p-4">

  {/* snap-normal (Default) */}
  <div class="w-64">
    <p class="text-sm mb-1 font-semibold">snap-normal (Default)</p>
    <div class="h-48 overflow-y-auto snap-y snap-mandatory scroll-smooth border rounded dark:border-gray-700 snap-normal">
      <div class="h-48 bg-blue-100 dark:bg-blue-900/50 snap-start flex items-center justify-center">Section 1</div>
      <div class="h-48 bg-blue-200 dark:bg-blue-800/50 snap-start flex items-center justify-center">Section 2</div>
      <div class="h-48 bg-blue-300 dark:bg-blue-700/50 snap-start flex items-center justify-center">Section 3</div>
      <div class="h-48 bg-blue-400 dark:bg-blue-600/50 snap-start flex items-center justify-center">Section 4</div>
    </div>
    <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">速くスクロールすると、中間のセクションをスキップできます。</p>
  </div>

  {/* snap-always */}
  <div class="w-64">
    <p class="text-sm mb-1 font-semibold">snap-always</p>
    <div class="h-48 overflow-y-auto snap-y snap-mandatory scroll-smooth border rounded dark:border-gray-700 snap-always">
      <div class="h-48 bg-green-100 dark:bg-green-900/50 snap-start flex items-center justify-center">Section A</div>
      <div class="h-48 bg-green-200 dark:bg-green-800/50 snap-start flex items-center justify-center">Section B</div>
      <div class="h-48 bg-green-300 dark:bg-green-700/50 snap-start flex items-center justify-center">Section C</div>
      <div class="h-48 bg-green-400 dark:bg-green-600/50 snap-start flex items-center justify-center">Section D</div>
    </div>
     <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">速くスクロールしても、必ず次のセクションで停止します。</p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてスナップ停止の挙動を変更できます。

```html
<div class="snap-y snap-normal md:snap-always ...">
  {/* モバイルでは通過可能、md 以上では必ず停止 */}
  {/* ... snap targets ... */}
</div>
```

## 注意点

*   `scroll-snap-stop` は比較的新しい CSS プロパティであり、ブラウザのサポート状況を確認してください (特に Safari の古いバージョンなど)。サポートされていないブラウザでは `snap-normal` として扱われます。
*   このユーティリティは、スクロールスナップ (`snap-x`, `snap-y` など) が有効になっているスクロールコンテナに適用する必要があります。
*   `snap-always` は、ユーザーが意図したよりもスクロールが遅く感じられたり、操作性が低下したりする可能性があるため、慎重に使用してください。ページネーションのような明確な区切りがある場合に適しています。

## 関連ユーティリティ

*   `scroll-snap-type` (`snap-x`, `snap-y`, `snap-both`, `snap-mandatory`, `snap-proximity`): スクロールコンテナのスナップ動作。
*   `scroll-snap-align` (`snap-start`, `snap-center`, `snap-end`): スナップターゲット要素の揃え位置。
*   `scroll-padding` (`scroll-p*`): スクロールコンテナのスナップポートのパディング。
*   `scroll-margin` (`scroll-m*`): スナップターゲット要素のマージン。
*   `overflow`: スクロールコンテナを作成します。

## 公式ドキュメント参照
*   [Tailwind CSS: Scroll Snap Stop](https://tailwindcss.com/docs/scroll-snap-stop)
*   [MDN: scroll-snap-stop](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop)
*   [Can I use: scroll-snap-stop](https://caniuse.com/css-scroll-snap-stop) (ブラウザサポート状況)
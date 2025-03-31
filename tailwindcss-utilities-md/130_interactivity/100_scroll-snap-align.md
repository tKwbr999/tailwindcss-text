## タイトル
title: Interactivity: Scroll Snap Align (スナップ位置の揃え)

## タグ
tags: ["tailwindcss", "utilities", "interactivity", "scroll-snap-align", "scroll-snap", "snap", "start", "center", "end", "alignment"]

## 概要
`snap-{alignment}` ユーティリティは、スクロールスナップコンテナ内で、各スナップターゲット要素がスナップポート (表示領域) のどの位置に揃う (スナップする) かを制御します。CSS の `scroll-snap-align` プロパティに対応します。

このユーティリティは、**スナップターゲットとなる子要素**に適用します。親のスクロールコンテナには `snap-x` または `snap-y` (および `snap-mandatory`/`proximity`) を設定する必要があります。

## 基本的な使い方とパラメータ

*   **`snap-start`**: 要素の**開始**端 (通常は上端または左端) をスナップポートの開始端に揃えます。
*   **`snap-center`**: 要素の**中央**をスナップポートの中央に揃えます。
*   **`snap-end`**: 要素の**終了**端 (通常は下端または右端) をスナップポートの終了端に揃えます。
*   **`snap-align-none`**: デフォルト。この要素はスナップ位置として扱われません。

```html
{/* 水平スクロールスナップの例 */}
<div class="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth">
  <div class="flex-shrink-0 w-4 h-4"></div> {/* 左端のスペース用 */}
  <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 snap-center p-4"> {/* 中央揃え */}
    <div class="h-48 bg-blue-200 dark:bg-blue-900 rounded flex items-center justify-center">Card 1 (Center)</div>
  </div>
  <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 snap-start p-4"> {/* 開始位置揃え */}
    <div class="h-48 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">Card 2 (Start)</div>
  </div>
  <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 snap-end p-4"> {/* 終了位置揃え */}
    <div class="h-48 bg-yellow-200 dark:bg-yellow-700 rounded flex items-center justify-center">Card 3 (End)</div>
  </div>
   <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 snap-center p-4">
    <div class="h-48 bg-purple-200 dark:bg-purple-900 rounded flex items-center justify-center">Card 4 (Center)</div>
  </div>
  <div class="flex-shrink-0 w-4 h-4"></div> {/* 右端のスペース用 */}
</div>
<p class="text-xs mt-2 text-center text-gray-600 dark:text-gray-400">
  水平にスクロールすると、各カードが指定された位置 (中央、開始、終了) にスナップします。
</p>

<hr class="my-8 border-dashed dark:border-gray-700">

{/* 垂直スクロールスナップの例 */}
<div class="h-72 w-64 overflow-y-auto snap-y snap-mandatory scroll-smooth border rounded dark:border-gray-700">
   <div class="h-72 bg-red-100 dark:bg-red-900/50 snap-start flex items-center justify-center">Section 1 (Start)</div>
   <div class="h-72 bg-indigo-100 dark:bg-indigo-900/50 snap-center flex items-center justify-center">Section 2 (Center)</div>
   <div class="h-72 bg-teal-100 dark:bg-teal-900/50 snap-end flex items-center justify-center">Section 3 (End)</div>
   <div class="h-72 bg-orange-100 dark:bg-orange-900/50 snap-start flex items-center justify-center">Section 4 (Start)</div>
</div>
 <p class="text-xs mt-2 text-center text-gray-600 dark:text-gray-400">
  垂直にスクロールすると、各セクションが指定された位置にスナップします。
</p>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてスナップ位置を変更できます。

```html
<div class="snap-center md:snap-start ...">
  Snaps to center on small screens, snaps to start on medium and wider.
</div>
```

## 注意点

*   `snap-{alignment}` ユーティリティは、**スクロールスナップコンテナの子要素 (スナップターゲット)** に適用します。
*   親のスクロールコンテナには、スクロール方向 (`snap-x` または `snap-y`) とスナップの厳密さ (`snap-mandatory` または `snap-proximity`) を指定する `snap-*` ユーティリティを設定する必要があります。
*   `scroll-padding` (`scroll-p*`) をスクロールコンテナに設定することで、スナップ位置をコンテナの端からオフセットさせることができます (固定ヘッダーなどを考慮する場合)。
*   CSS Scroll Snap は比較的新しい機能であり、ブラウザ間の挙動に微妙な違いがある場合があります。

## 関連ユーティリティ

*   `scroll-snap-type` (`snap-x`, `snap-y`, `snap-both`, `snap-mandatory`, `snap-proximity`): スクロールコンテナのスナップ動作。
*   `scroll-padding` (`scroll-p*`): スクロールコンテナのスナップポートのパディング。
*   `scroll-margin` (`scroll-m*`): スナップターゲット要素のマージン (オフセット)。
*   `scroll-snap-stop` (`snap-normal`, `snap-always`): スクロールスナップの停止挙動。
*   `overflow`: スクロールコンテナを作成します。

## 公式ドキュメント参照
*   [Tailwind CSS: Scroll Snap Align](https://tailwindcss.com/docs/scroll-snap-align)
*   [MDN: scroll-snap-align](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align)
*   [A Guide to CSS Scroll Snap](https://css-tricks.com/practical-css-scroll-snapping/) (CSS-Tricks)
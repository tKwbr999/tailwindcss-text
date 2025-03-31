## タイトル
title: Interactivity: Scroll Padding (スクロールパディング)

## タグ
tags: ["tailwindcss", "utilities", "interactivity", "scroll-padding", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl", "scroll-p", "scroll-px", "scroll-py", "scroll-snap", "offset"]

## 概要
`scroll-p{t|r|b|l|x|y}-{amount}` ユーティリティは、スクロールコンテナの**スクロールポート** (要素の内容が表示される領域) の端からのオフセット (パディング) を設定します。CSS の `scroll-padding-top`, `scroll-padding-right`, `scroll-padding-bottom`, `scroll-padding-left` プロパティに対応します。

これは主に**スクロールスナップ** (`snap-*` ユーティリティ) と組み合わせて使用され、スナップ位置をコンテナの端から内側にオフセットさせます。例えば、固定ヘッダーや他の UI 要素がスナップされた要素の上に重ならないようにするために使用します。

## 基本的な使い方とパラメータ

値は通常、Tailwind の `theme.spacing` スケール (`0`, `1`, `2`, `4`, `px` など) を使用します。

*   **`scroll-pt-{amount}`**: 上方向のスクロールパディング (`scroll-padding-top`)。
*   **`scroll-pr-{amount}`**: 右方向のスクロールパディング (`scroll-padding-right`)。
*   **`scroll-pb-{amount}`**: 下方向のスクロールパディング (`scroll-padding-bottom`)。
*   **`scroll-pl-{amount}`**: 左方向のスクロールパディング (`scroll-padding-left`)。
*   **`scroll-px-{amount}`**: 水平方向 (左右) のスクロールパディング。
*   **`scroll-py-{amount}`**: 垂直方向 (上下) のスクロールパディング。
*   **`scroll-p-{amount}`**: 全方向のスクロールパディング。

クラスは**スクロールコンテナ** (例: `overflow-auto` を持つ要素) に適用します。

```html
{/* スクロールスナップコンテナ */}
<div class="relative h-72 overflow-y-auto snap-y snap-mandatory scroll-smooth scroll-p-4 md:scroll-pt-16"> {/* 上方向に 4rem (md以上) のパディング */}
  <div class="sticky top-0 h-16 bg-white dark:bg-gray-800 shadow z-10 flex items-center justify-center md:hidden">Mobile Header (h-16)</div>
  <div class="sticky top-0 h-16 bg-blue-200 dark:bg-blue-900 shadow z-10 hidden md:flex items-center justify-center">Desktop Header (h-16)</div>

  {/* スナップターゲット */}
  <div id="snap-1" class="h-72 bg-red-100 dark:bg-red-900/50 snap-start flex items-center justify-center">Section 1</div>
  <div id="snap-2" class="h-72 bg-green-100 dark:bg-green-900/50 snap-start flex items-center justify-center">Section 2</div>
  <div id="snap-3" class="h-72 bg-yellow-100 dark:bg-yellow-800/50 snap-start flex items-center justify-center">Section 3</div>
</div>

<p class="text-xs mt-2 text-gray-600 dark:text-gray-400">
  上記コンテナは垂直方向 (`snap-y`) にスナップします。`scroll-pt-16` (md以上) により、スナップ時にセクションの上部がヘッダーの下に隠れないように、16 (4rem) のスペースが確保されます。
</p>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてスクロールパディングを変更できます。これは、レスポンシブな固定ヘッダーの高さに合わせてオフセットを調整する場合に非常に便利です。

```html
<div class="overflow-y-auto snap-y scroll-pt-12 md:scroll-pt-16 lg:scroll-pt-20 ...">
  {/* ヘッダーの高さが画面サイズによって変わる場合 */}
  {/* ... snap targets ... */}
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.scrollPadding` (または `theme.scrollPadding`) でカスタムのスクロールパディング値を追加できます。`theme.spacing` スケールを継承しているため、`spacing` で定義した値も `scroll-p*` で使用可能です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem', // 72px
      },
      scrollPadding: { // scrollPadding 固有のキーも追加可能
        'header-h': 'var(--header-height)', // CSS 変数を参照
        // spacing を継承しない場合はここで定義
        // '4': '1rem',
        // ...
      }
    },
  },
}
```

```html
<div class="scroll-pt-18 ...">Scroll padding top 4.5rem</div>
<div class="scroll-pt-header-h ...">Scroll padding top using CSS variable</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使ってスクロールパディングを直接指定することも可能です。

```html
<div class="scroll-pt-[66px] ...">Arbitrary scroll padding top 66px</div>
<div class="scroll-p-[2rem] ...">Arbitrary scroll padding all sides 2rem</div>
```

## `scroll-margin` との違い

*   **`scroll-padding` (`scroll-p*`)**: **スクロールコンテナ**に適用し、スナップ位置の**内側**のオフセットを設定します。コンテナの端とスナップされる要素の間のスペースを定義します。
*   **`scroll-margin` (`scroll-m*`)**: **スナップされる要素自体**に適用し、その要素の**外側**のマージンとして機能します。要素がスナップされる際の「当たり判定」のオフセットを定義します。

多くの場合、固定ヘッダーなどのオフセットには `scroll-padding` をスクロールコンテナに設定する方が直感的で管理しやすいです。

## 注意点

*   `scroll-padding` は、スクロールスナップ (`snap-*`) が有効になっているコンテナや、プログラムによるスクロール (`Element.scrollIntoView()` など) のターゲット位置に影響します。通常のユーザースクロールには直接影響しません。
*   このプロパティは比較的新しいため、古いブラウザではサポートされていない可能性があります。

## 関連ユーティリティ

*   `scroll-margin` (`scroll-m*`): スクロール停止位置のマージン (要素側)。
*   `scroll-snap-type` (`snap-x`, `snap-y`, `snap-both`, `snap-mandatory`, `snap-proximity`): スクロールスナップの挙動。
*   `scroll-snap-align` (`snap-start`, `snap-center`, `snap-end`, `snap-align-none`): スナップ位置の揃え方 (アイテム側)。
*   `scroll-snap-stop` (`snap-normal`, `snap-always`): スクロールスナップの停止挙動。
*   `overflow`: スクロールコンテナを作成します。

## 公式ドキュメント参照
*   [Tailwind CSS: Scroll Padding](https://tailwindcss.com/docs/scroll-padding)
*   [MDN: scroll-padding](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding) (および関連プロパティ)
*   [Can I use: scroll-padding](https://caniuse.com/css-scroll-padding) (ブラウザサポート状況)
## タイトル
title: Interactivity: Scroll Snap Type (スナップ軸と厳密さ)

## タグ
tags: ["tailwindcss", "utilities", "interactivity", "scroll-snap-type", "scroll-snap", "snap", "x", "y", "both", "mandatory", "proximity"]

## 概要
`snap-{axis}` および `snap-{strictness}` ユーティリティは、スクロールコンテナがどの軸 (水平、垂直、または両方) でスクロールスナップを有効にするか、また、どの程度厳密にスナップ位置に強制するかを制御します。CSS の `scroll-snap-type` プロパティに対応します。

このユーティリティは、**スクロールコンテナ** (例: `overflow-auto` を持つ要素) に適用します。子要素には `snap-align` (`snap-start`, `snap-center`, `snap-end`) を設定します。

## 基本的な使い方とパラメータ

### スナップ軸 (`snap-{axis}`)

*   **`snap-none`**: デフォルト。スクロールスナップを無効にします (`scroll-snap-type: none;`)。
*   **`snap-x`**: 水平方向 (`X` 軸) のみスナップを有効にします (`scroll-snap-type: x var(--tw-scroll-snap-strictness);`)。
*   **`snap-y`**: 垂直方向 (`Y` 軸) のみスナップを有効にします (`scroll-snap-type: y var(--tw-scroll-snap-strictness);`)。
*   **`snap-both`**: 水平・垂直両方の軸でスナップを有効にします (`scroll-snap-type: both var(--tw-scroll-snap-strictness);`)。

### スナップの厳密さ (`snap-{strictness}`)

スナップ軸ユーティリティ (`snap-x`, `snap-y`, `snap-both`) と**組み合わせて**使用します。CSS 変数 `--tw-scroll-snap-strictness` を介して `scroll-snap-type` の 2 番目の値 (strictness) を設定します。

*   **(クラスなし)**: デフォルトは `proximity` (`--tw-scroll-snap-strictness: proximity;`)。ユーザーがスナップ位置の近くでスクロールを停止した場合にのみ、その位置にスナップします。遠くで停止した場合はスナップしません。
*   **`snap-mandatory`**: ユーザーがスクロールを停止すると、ブラウザは**必ず**最も近いスナップ位置に移動します (`--tw-scroll-snap-strictness: mandatory;`)。
*   **`snap-proximity`**: `mandatory` 以外のクラスが指定された場合に、明示的に `proximity` を設定します (`--tw-scroll-snap-strictness: proximity;`)。

```html
<div class="space-y-8 p-4">

  {/* 水平スナップ (Mandatory) */}
  <div>
    <p class="text-sm mb-1 font-semibold">snap-x snap-mandatory</p>
    <div class="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth border rounded dark:border-gray-700">
      <div class="flex-shrink-0 w-4 h-4"></div>
      <div class="flex-shrink-0 w-64 h-32 bg-blue-100 dark:bg-blue-900/50 snap-center flex items-center justify-center mx-2 rounded">Card 1</div>
      <div class="flex-shrink-0 w-64 h-32 bg-blue-200 dark:bg-blue-800/50 snap-center flex items-center justify-center mx-2 rounded">Card 2</div>
      <div class="flex-shrink-0 w-64 h-32 bg-blue-300 dark:bg-blue-700/50 snap-center flex items-center justify-center mx-2 rounded">Card 3</div>
      <div class="flex-shrink-0 w-4 h-4"></div>
    </div>
     <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">スクロールを止めると必ず最寄りのカード中央にスナップします。</p>
  </div>

  {/* 垂直スナップ (Proximity - デフォルト) */}
   <div>
    <p class="text-sm mb-1 font-semibold">snap-y (Proximity by default)</p>
    <div class="h-64 w-64 overflow-y-auto snap-y scroll-smooth border rounded dark:border-gray-700">
      {/* snap-proximity は明示的に書かなくてもデフォルト */}
      <div class="h-64 bg-green-100 dark:bg-green-900/50 snap-start flex items-center justify-center">Section 1</div>
      <div class="h-64 bg-green-200 dark:bg-green-800/50 snap-start flex items-center justify-center">Section 2</div>
      <div class="h-64 bg-green-300 dark:bg-green-700/50 snap-start flex items-center justify-center">Section 3</div>
    </div>
     <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">スナップ位置の近くで止めるとスナップしますが、中間で止めることも可能です。</p>
  </div>

   {/* 両軸スナップ */}
   <div>
    <p class="text-sm mb-1 font-semibold">snap-both snap-mandatory</p>
    <div class="h-64 w-64 overflow-auto snap-both snap-mandatory scroll-smooth border rounded dark:border-gray-700 grid grid-cols-2"> {/* overflow-auto で両方向スクロール */}
      <div class="h-64 w-64 bg-red-100 snap-center flex items-center justify-center">1</div>
      <div class="h-64 w-64 bg-red-200 snap-center flex items-center justify-center">2</div>
      <div class="h-64 w-64 bg-red-300 snap-center flex items-center justify-center">3</div>
      <div class="h-64 w-64 bg-red-400 snap-center flex items-center justify-center">4</div>
    </div>
     <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">水平・垂直両方向にスナップします。</p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてスナップの軸や厳密さを変更できます。

```html
{/* モバイルではスナップなし、md 以上で Y 軸 mandatory スナップ */}
<div class="overflow-y-auto snap-none md:snap-y md:snap-mandatory ...">
  {/* ... snap targets ... */}
</div>
```

## 注意点

*   `scroll-snap-type` はスクロールコンテナ (通常 `overflow` が `visible` 以外に設定された要素) に適用します。
*   子要素 (スナップターゲット) には `scroll-snap-align` (`snap-start`, `snap-center`, `snap-end`) を設定する必要があります。
*   `snap-mandatory` は、ユーザーが意図しない位置でスクロールを止められないため、コンテンツが見切れてしまう可能性がある場合に UX を損なうことがあります。特に、スナップターゲットのサイズがスクロールコンテナのサイズよりも大きい場合に注意が必要です。`snap-proximity` の方が安全な場合が多いです。
*   CSS Scroll Snap は比較的新しい機能であり、ブラウザ間の挙動に微妙な違いがある場合があります。

## 関連ユーティリティ

*   `scroll-snap-align` (`snap-start`, `snap-center`, `snap-end`): スナップターゲット要素の揃え位置。
*   `scroll-padding` (`scroll-p*`): スクロールコンテナのスナップポートのパディング。
*   `scroll-margin` (`scroll-m*`): スナップターゲット要素のマージン。
*   `scroll-snap-stop` (`snap-normal`, `snap-always`): スクロールスナップの停止挙動。
*   `overflow`: スクロールコンテナを作成します。
*   `scroll-behavior`: スクロールのアニメーション。

## 公式ドキュメント参照
*   [Tailwind CSS: Scroll Snap Type](https://tailwindcss.com/docs/scroll-snap-type)
*   [MDN: scroll-snap-type](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)
*   [A Guide to CSS Scroll Snap](https://css-tricks.com/practical-css-scroll-snapping/) (CSS-Tricks)
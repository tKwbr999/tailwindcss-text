## タイトル
title: Transforms: Scale (拡大・縮小)

## タグ
tags: ["tailwindcss", "utilities", "transforms", "scale", "size", "2d", "3d"]

## 概要
`scale-{amount}`, `scale-x-{amount}`, `scale-y-{amount}` ユーティリティは、要素を拡大または縮小します。CSS の `transform` プロパティの `scale()`, `scaleX()`, `scaleY()` 関数に対応します。

値 `100` が元のサイズです。`100` 未満の値は縮小、`100` より大きい値は拡大します。

## 基本的な使い方とパラメータ

値はパーセンテージに基づいた数値で指定します。

*   **`scale-{amount}`**: 水平・垂直両方向に同じ比率で拡大・縮小します。
    *   `scale-0`: `transform: scale(0);`
    *   `scale-50`: `transform: scale(.5);` (半分に縮小)
    *   `scale-75`: `transform: scale(.75);`
    *   `scale-90`: `transform: scale(.9);`
    *   `scale-95`: `transform: scale(.95);`
    *   `scale-100`: `transform: scale(1);` (デフォルト、元のサイズ)
    *   `scale-105`: `transform: scale(1.05);`
    *   `scale-110`: `transform: scale(1.1);`
    *   `scale-125`: `transform: scale(1.25);` (1.25倍に拡大)
    *   `scale-150`: `transform: scale(1.5);`
*   **`scale-x-{amount}`**: 水平方向 (`X` 軸) にのみ拡大・縮小します (`transform: scaleX(...);`)。
*   **`scale-y-{amount}`**: 垂直方向 (`Y` 軸) にのみ拡大・縮小します (`transform: scaleY(...);`)。

```html
<div class="flex flex-wrap items-center justify-center gap-8 p-8">
  <div class="scale-75 bg-blue-500 text-white w-24 h-24 rounded flex items-center justify-center">scale-75</div>
  <div class="scale-100 bg-blue-500 text-white w-24 h-24 rounded flex items-center justify-center">scale-100</div>
  <div class="scale-125 bg-blue-500 text-white w-24 h-24 rounded flex items-center justify-center">scale-125</div>
  <div class="scale-x-150 bg-green-500 text-white w-24 h-24 rounded flex items-center justify-center">scale-x-150</div>
  <div class="scale-y-50 bg-red-500 text-white w-24 h-24 rounded flex items-center justify-center">scale-y-50</div>
</div>
```

## Transform Origin (変形の原点)

デフォルトでは、拡大・縮小は要素の**中心**を基準に行われます。変形の原点を変更したい場合は、`origin-{keyword}` ユーティリティ (例: `origin-top-left`) を使用します。

```html
<div class="flex flex-wrap items-center justify-center gap-8 p-8">
  <div class="scale-150 origin-top-left bg-purple-500 text-white w-24 h-24 rounded flex items-center justify-center">scale-150 origin-top-left</div>
  <div class="scale-150 origin-bottom-right bg-purple-500 text-white w-24 h-24 rounded flex items-center justify-center">scale-150 origin-bottom-right</div>
</div>
```

## Transform の組み合わせ

`scale-*` は、他の `transform` ユーティリティ (例: `rotate-*`, `translate-*`, `skew-*`) と組み合わせて使用できます。Tailwind は内部的に CSS 変数を使ってこれらを管理し、指定された順序で適用します。

```html
<div class="scale-125 rotate-6 skew-x-12 translate-x-4 ...">Combined Transforms</div>
```

## ハードウェアアクセラレーション

`transform` プロパティを使用すると、ブラウザはパフォーマンス向上のために自動的にハードウェアアクセラレーションを有効にすることがあります (要素が新しいコンポジットレイヤーに配置される)。これにより、アニメーションがより滑らかになります。`transform-gpu` クラスを使って明示的に有効にすることもできます (ただし、常に必要とは限りません)。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて拡大・縮小率を変更できます。

```html
<div class="scale-100 md:scale-125 ...">
  Scales up on medium screens and wider.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `active:`, `group-hover:` などと組み合わせて、インタラクションに応じて要素を拡大・縮小させるのは非常に一般的なエフェクトです。`transition` ユーティリティと組み合わせることで、滑らかなアニメーションになります。

```html
<button class="scale-100 hover:scale-110 active:scale-95 transition-transform duration-150 ease-in-out ...">
  Scale on Hover/Active
</button>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.scale` (または `theme.scale`) でカスタムのスケール値を追加できます。値は CSS の `scale()` 関数で有効な数値 (例: `1.75`) またはパーセンテージ文字列 (`'115%'`) で指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      scale: {
        '102': '1.02', // scale-102 クラスを追加
        '175': '1.75',
        '200': '2',
      },
    },
  },
}
```

```html
<div class="scale-175 ...">Custom scale 175%</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使ってスケール値を直接指定することも可能です。

```html
<div class="scale-[1.03] ...">Arbitrary scale 103%</div>
<div class="scale-x-[1.2] scale-y-[0.8] ...">Arbitrary non-uniform scale</div>
```

## 注意点

*   `scale` は要素とその内容全体を変形させます。テキストなども含めて拡大・縮小されます。
*   `transform` プロパティは要素のレイアウト上のスペースには影響を与えません。拡大しても周囲の要素を押しのけることはありません (重なる可能性があります)。

## 関連ユーティリティ

*   `transform-origin` (`origin-*`): 変形の原点。
*   他の `transform` ユーティリティ (`rotate-*`, `translate-*`, `skew-*`)。
*   `transform` (`transform`, `transform-gpu`, `transform-none`): Transform 機能の有効化/ハードウェアアクセラレーション。
*   `transition-transform`: `transform` プロパティのトランジションを有効化。

## 公式ドキュメント参照
*   [Tailwind CSS: Scale](https://tailwindcss.com/docs/scale)
*   [MDN: transform: scale()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale)
*   [MDN: transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
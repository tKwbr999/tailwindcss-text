## タイトル
title: Transforms: Skew (傾斜)

## タグ
tags: ["tailwindcss", "utilities", "transforms", "skew", "skew-x", "skew-y", "2d", "angle"]

## 概要
`skew-x-{angle}` および `skew-y-{angle}` ユーティリティは、要素を水平または垂直方向に傾ける (スキュー変形) させます。CSS の `transform` プロパティの `skewX()` および `skewY()` 関数に対応します。

値は角度 (`deg`) で指定します。正の値は一方の方向に、負の値は反対方向に傾けます。

## 基本的な使い方とパラメータ

Tailwind は一般的な角度に対応するクラスを提供します。

*   **`skew-x-{angle}`**: 水平方向 (`X` 軸) に傾けます。
    *   `skew-x-0`: 傾斜なし。
    *   `skew-x-1`, `skew-x-2`, `skew-x-3`, `skew-x-6`, `skew-x-12`: 正の角度で傾斜。
    *   `-skew-x-12` ～ `-skew-x-1`: 負の角度で逆方向に傾斜。
*   **`skew-y-{angle}`**: 垂直方向 (`Y` 軸) に傾けます。
    *   `skew-y-0`: 傾斜なし。
    *   `skew-y-1`, `skew-y-2`, `skew-y-3`, `skew-y-6`, `skew-y-12`: 正の角度で傾斜。
    *   `-skew-y-12` ～ `-skew-y-1`: 負の角度で逆方向に傾斜。

```html
<div class="flex flex-wrap items-center justify-center gap-8 p-8">
  <div class="skew-x-0 bg-blue-500 text-white w-24 h-16 rounded flex items-center justify-center">skew-x-0</div>
  <div class="skew-x-12 bg-blue-500 text-white w-24 h-16 rounded flex items-center justify-center">skew-x-12</div>
  <div class="-skew-x-12 bg-blue-500 text-white w-24 h-16 rounded flex items-center justify-center">-skew-x-12</div>
  <div class="skew-y-6 bg-green-500 text-white w-24 h-16 rounded flex items-center justify-center">skew-y-6</div>
  <div class="-skew-y-6 bg-green-500 text-white w-24 h-16 rounded flex items-center justify-center">-skew-y-6</div>
  <div class="skew-x-6 skew-y-3 bg-red-500 text-white w-24 h-16 rounded flex items-center justify-center">skew-x-6 skew-y-3</div>
</div>
```

## Transform Origin (変形の原点)

デフォルトでは、傾斜は要素の**中心**を基準に行われます。変形の原点を変更したい場合は、`origin-{keyword}` ユーティリティを使用します。

```html
<div class="flex flex-wrap items-center justify-center gap-8 p-8">
  <div class="skew-x-12 origin-top-left bg-purple-500 text-white w-24 h-16 rounded flex items-center justify-center">Skew 12 (origin-top-left)</div>
  <div class="skew-x-12 origin-bottom-right bg-purple-500 text-white w-24 h-16 rounded flex items-center justify-center">Skew 12 (origin-bottom-right)</div>
</div>
```

## Transform の組み合わせ

`skew-*` は、他の `transform` ユーティリティ (例: `scale-*`, `rotate-*`, `translate-*`) と組み合わせて使用できます。

```html
<div class="skew-x-6 rotate-3 scale-95 ...">Combined Transforms</div>
```

## ハードウェアアクセラレーション

`transform` プロパティを使用すると、ブラウザはパフォーマンス向上のために自動的にハードウェアアクセラレーションを有効にすることがあります。`transform-gpu` クラスで明示的に有効にすることもできます。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて傾斜角度を変更できます。

```html
<div class="skew-x-0 md:skew-x-6 ...">
  Skew applied on medium screens and wider.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `active:`, `group-hover:` などと組み合わせて、インタラクションに応じて要素を傾けるアニメーションを作成できます。`transition` ユーティリティと組み合わせると滑らかになります。

```html
<button class="skew-x-0 hover:skew-x-3 active:-skew-x-1 transition-transform duration-150 ease-in-out ...">
  Skew on Hover/Active
</button>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.skew` (または `theme.skew`) でカスタムの傾斜角度を追加できます。キーがクラス名 (`skew-x-{key}`, `skew-y-{key}`) になり、値が角度の文字列 (`'5deg'`, `'-10deg'`) になります。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      skew: {
        '15': '15deg',
        '20': '20deg',
        '-15': '-15deg',
      },
    },
  },
}
```

```html
<div class="skew-x-15 ...">Custom skew 15deg</div>
<div class="-skew-y-20 ...">Custom negative skew 20deg</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って傾斜角度を直接指定することも可能です。

```html
<div class="skew-x-[17deg] ...">Arbitrary skew 17deg</div>
<div class="-skew-y-[5.5deg] ...">Arbitrary negative skew</div>
```

## 注意点

*   `skew` は要素とその内容全体を変形させます。テキストなども傾きます。
*   `transform` プロパティは要素のレイアウト上のスペースには影響を与えません。傾けても周囲の要素の位置は変わりません (重なる可能性があります)。

## 関連ユーティリティ

*   `transform-origin` (`origin-*`): 変形の原点。
*   他の `transform` ユーティリティ (`scale-*`, `rotate-*`, `translate-*`)。
*   `transform` (`transform`, `transform-gpu`, `transform-none`): Transform 機能の有効化/ハードウェアアクセラレーション。
*   `transition-transform`: `transform` プロパティのトランジションを有効化。

## 公式ドキュメント参照
*   [Tailwind CSS: Skew](https://tailwindcss.com/docs/skew)
*   [MDN: transform: skewX()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewX)
*   [MDN: transform: skewY()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewY)
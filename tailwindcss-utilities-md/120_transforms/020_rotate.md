## タイトル
title: Transforms: Rotate (回転)

## タグ
tags: ["tailwindcss", "utilities", "transforms", "rotate", "2d", "angle"]

## 概要
`rotate-{angle}` ユーティリティは、要素を 2D 平面上で回転させます。CSS の `transform` プロパティの `rotate()` 関数に対応します。

値は角度 (`deg`) で指定します。正の値は時計回り、負の値は反時計回りに回転します。

## 基本的な使い方とパラメータ

Tailwind は一般的な角度に対応するクラスを提供します。

*   **`rotate-0`**: `transform: rotate(0deg);` (回転なし)
*   **`rotate-1`**: `transform: rotate(1deg);`
*   **`rotate-2`**: `transform: rotate(2deg);`
*   **`rotate-3`**: `transform: rotate(3deg);`
*   **`rotate-6`**: `transform: rotate(6deg);`
*   **`rotate-12`**: `transform: rotate(12deg);`
*   **`rotate-45`**: `transform: rotate(45deg);`
*   **`rotate-90`**: `transform: rotate(90deg);`
*   **`rotate-180`**: `transform: rotate(180deg);`
*   **`-rotate-180`** ～ **`-rotate-1`**: 負の角度で反時計回りに回転。

```html
<div class="flex flex-wrap items-center justify-center gap-8 p-8">
  <div class="rotate-0 bg-blue-500 text-white w-24 h-16 rounded flex items-center justify-center">0 deg</div>
  <div class="rotate-12 bg-blue-500 text-white w-24 h-16 rounded flex items-center justify-center">12 deg</div>
  <div class="rotate-45 bg-blue-500 text-white w-24 h-16 rounded flex items-center justify-center">45 deg</div>
  <div class="rotate-90 bg-blue-500 text-white w-24 h-16 rounded flex items-center justify-center">90 deg</div>
  <div class="rotate-180 bg-blue-500 text-white w-24 h-16 rounded flex items-center justify-center">180 deg</div>
  <div class="-rotate-45 bg-green-500 text-white w-24 h-16 rounded flex items-center justify-center">-45 deg</div>
</div>
```

## Transform Origin (変形の原点)

デフォルトでは、回転は要素の**中心**を基準に行われます。変形の原点を変更したい場合は、`origin-{keyword}` ユーティリティ (例: `origin-top-left`) を使用します。

```html
<div class="flex flex-wrap items-center justify-center gap-8 p-8">
  <div class="rotate-45 origin-top-left bg-purple-500 text-white w-24 h-16 rounded flex items-center justify-center">Rotate 45 (origin-top-left)</div>
  <div class="rotate-45 origin-bottom-right bg-purple-500 text-white w-24 h-16 rounded flex items-center justify-center">Rotate 45 (origin-bottom-right)</div>
</div>
```

## Transform の組み合わせ

`rotate-*` は、他の `transform` ユーティリティ (例: `scale-*`, `translate-*`, `skew-*`) と組み合わせて使用できます。

```html
<div class="rotate-6 scale-110 translate-x-4 ...">Combined Transforms</div>
```

## ハードウェアアクセラレーション

`transform` プロパティを使用すると、ブラウザはパフォーマンス向上のために自動的にハードウェアアクセラレーションを有効にすることがあります。`transform-gpu` クラスで明示的に有効にすることもできます。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて回転角度を変更できます。

```html
<div class="rotate-0 md:rotate-12 ...">
  Rotates on medium screens and wider.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `active:`, `group-hover:` などと組み合わせて、インタラクションに応じて要素を回転させるアニメーションを作成できます。`transition` ユーティリティと組み合わせると滑らかになります。

```html
<button class="rotate-0 hover:rotate-12 active:rotate-6 transition-transform duration-150 ease-in-out ...">
  Rotate on Hover/Active
</button>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.rotate` (または `theme.rotate`) でカスタムの回転角度を追加できます。キーがクラス名 (`rotate-{key}`) になり、値が角度の文字列 (`'15deg'`, `'-7.5deg'`) になります。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      rotate: {
        '15': '15deg',
        '22.5': '22.5deg',
        '-15': '-15deg',
      },
    },
  },
}
```

```html
<div class="rotate-15 ...">Custom rotate 15deg</div>
<div class="-rotate-15 ...">Custom rotate -15deg</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って回転角度を直接指定することも可能です。

```html
<div class="rotate-[17deg] ...">Arbitrary rotate 17deg</div>
<div class="-rotate-[33deg] ...">Arbitrary negative rotate</div>
```

## 注意点

*   `rotate` は要素とその内容全体を変形させます。
*   `transform` プロパティは要素のレイアウト上のスペースには影響を与えません。回転しても周囲の要素の位置は変わりません (重なる可能性があります)。

## 関連ユーティリティ

*   `transform-origin` (`origin-*`): 変形の原点。
*   他の `transform` ユーティリティ (`scale-*`, `translate-*`, `skew-*`)。
*   `transform` (`transform`, `transform-gpu`, `transform-none`): Transform 機能の有効化/ハードウェアアクセラレーション。
*   `transition-transform`: `transform` プロパティのトランジションを有効化。

## 公式ドキュメント参照
*   [Tailwind CSS: Rotate](https://tailwindcss.com/docs/rotate)
*   [MDN: transform: rotate()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate)
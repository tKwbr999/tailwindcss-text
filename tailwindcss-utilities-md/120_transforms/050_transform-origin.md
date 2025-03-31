## タイトル
title: Transforms: Transform Origin (変形の原点)

## タグ
tags: ["tailwindcss", "utilities", "transforms", "transform-origin", "origin", "center", "top", "bottom", "left", "right"]

## 概要
`origin-{keyword}` ユーティリティは、要素に適用される `transform` (拡大縮小、回転、傾斜) の基準となる原点を設定します。CSS の `transform-origin` プロパティに対応します。

デフォルトでは、変形は要素の中心 (`origin-center`) を基準に行われます。

## 基本的な使い方とパラメータ

値はキーワードで指定します。

*   **`origin-center`**: デフォルト。要素の中心を原点とします。
*   **`origin-top`**: 要素の上端中央を原点とします。
*   **`origin-top-right`**: 要素の右上隅を原点とします。
*   **`origin-right`**: 要素の右端中央を原点とします。
*   **`origin-bottom-right`**: 要素の右下隅を原点とします。
*   **`origin-bottom`**: 要素の下端中央を原点とします。
*   **`origin-bottom-left`**: 要素の左下隅を原点とします。
*   **`origin-left`**: 要素の左端中央を原点とします。
*   **`origin-top-left`**: 要素の左上隅を原点とします。

```html
<div class="flex flex-wrap justify-center items-center gap-12 p-8">

  {/* Rotate with different origins */}
  <div class="relative w-24 h-24">
    <div class="absolute inset-0 bg-blue-200 opacity-50 rounded"></div>
    <div class="origin-center rotate-45 w-full h-full bg-blue-500 rounded text-white flex items-center justify-center text-xs">center (default)</div>
  </div>
  <div class="relative w-24 h-24">
     <div class="absolute inset-0 bg-blue-200 opacity-50 rounded"></div>
    <div class="origin-top-left rotate-45 w-full h-full bg-blue-500 rounded text-white flex items-center justify-center text-xs">top-left</div>
  </div>
   <div class="relative w-24 h-24">
     <div class="absolute inset-0 bg-blue-200 opacity-50 rounded"></div>
    <div class="origin-bottom-right rotate-45 w-full h-full bg-blue-500 rounded text-white flex items-center justify-center text-xs">bottom-right</div>
  </div>

  {/* Scale with different origins */}
   <div class="relative w-24 h-24">
     <div class="absolute inset-0 bg-green-200 opacity-50 rounded"></div>
    <div class="origin-center scale-150 w-full h-full bg-green-500 rounded text-white flex items-center justify-center text-xs">center (default)</div>
  </div>
   <div class="relative w-24 h-24">
     <div class="absolute inset-0 bg-green-200 opacity-50 rounded"></div>
    <div class="origin-top-left scale-150 w-full h-full bg-green-500 rounded text-white flex items-center justify-center text-xs">top-left</div>
  </div>
   <div class="relative w-24 h-24">
     <div class="absolute inset-0 bg-green-200 opacity-50 rounded"></div>
    <div class="origin-bottom-right scale-150 w-full h-full bg-green-500 rounded text-white flex items-center justify-center text-xs">bottom-right</div>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて変形の原点を変更できます。

```html
<div class="origin-center md:origin-top-left ...">
  Transform origin changes on medium screens.
</div>
```

## 状態修飾子

`hover:`, `focus:` などと組み合わせて、インタラクションに応じて原点を変更することも可能ですが、一般的ではありません。通常は変形自体 (`hover:scale-110` など) を状態に応じて変更します。

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.transformOrigin` (または `theme.transformOrigin`) でカスタムの原点を追加できます。値には CSS の `transform-origin` プロパティで有効な値を文字列で指定します (例: `'top 10px'`, `'25% 75%'`)。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transformOrigin: {
        'top-center': 'top center', // 既存の 'top' と同じだが、明示的に
        'bottom-10': 'center bottom 2.5rem', // 下から 2.5rem の中央
      },
    },
  },
}
```

```html
<div class="origin-bottom-10 rotate-12 ...">Custom origin</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って変形の原点を直接指定することも可能です。

```html
<div class="origin-[30%_70%] rotate-45 ...">Arbitrary origin 30% 70%</div>
<div class="origin-[var(--origin-x)_var(--origin-y)] scale-125 ...">Origin from CSS variables</div>
```

## 注意点

*   `transform-origin` は、`transform` ユーティリティ (`scale-*`, `rotate-*`, `skew-*`) が適用されている要素にのみ効果があります。`translate-*` (移動) には影響しません。
*   デフォルトの原点は要素の中心 (`50% 50%`) です。

## 関連ユーティリティ

*   `transform` ユーティリティ (`scale-*`, `rotate-*`, `translate-*`, `skew-*`): 要素の変形。
*   `transform` (`transform`, `transform-gpu`, `transform-none`): Transform 機能の有効化/ハードウェアアクセラレーション。

## 公式ドキュメント参照
*   [Tailwind CSS: Transform Origin](https://tailwindcss.com/docs/transform-origin)
*   [MDN: transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
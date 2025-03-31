## タイトル
title: Filters: Saturate (彩度)

## タグ
tags: ["tailwindcss", "utilities", "filters", "saturate", "saturation", "filter", "effects", "image", "color"]

## 概要
`saturate-{amount}` ユーティリティは、要素に彩度 (saturation) フィルターを適用します。CSS の `filter` プロパティの `saturate()` 関数に対応します。

値 `100` が元の彩度です。`100` 未満の値は彩度を下げ (色がくすむ)、`100` より大きい値は彩度を上げます (色がより鮮やかになる)。値 `0` は完全に彩度を失い、グレースケールと同じ効果になります。

## 基本的な使い方とパラメータ

値はパーセンテージに基づいた数値で指定します。

*   **`saturate-0`**: `filter: saturate(0);` (グレースケールと同じ)
*   **`saturate-50`**: `filter: saturate(.5);` (彩度を下げる)
*   **`saturate-100`**: `filter: saturate(1);` (デフォルト、元の彩度)
*   **`saturate-150`**: `filter: saturate(1.5);` (彩度を上げる)
*   **`saturate-200`**: `filter: saturate(2);` (彩度を非常に上げる)

```html
<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=Sat+100" alt="Original" class="saturate-100 rounded-lg"> {/* Default */}
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=Sat+50" alt="Saturate 50" class="saturate-50 rounded-lg">
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=Sat+0" alt="Saturate 0" class="saturate-0 rounded-lg">
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=Sat+150" alt="Saturate 150" class="saturate-150 rounded-lg">
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=Sat+200" alt="Saturate 200" class="saturate-200 rounded-lg">
</div>
```

## フィルターの組み合わせ

`saturate-*` は、他の `filter` ユーティリティ (例: `blur-*`, `brightness-*`, `contrast-*`) と組み合わせて使用できます。

```html
<img src="https://via.placeholder.com/150" alt="Saturated and Bright" class="saturate-200 brightness-110 rounded-lg">
```

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のためにハードウェアアクセラレーションが有効になることがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて彩度を変更できます。

```html
<img src="..." alt="..." class="saturate-100 md:saturate-150">
```

## 状態修飾子

`hover:`, `focus:`, `group-hover:` などと組み合わせて、インタラクションに応じて彩度を変更できます。ホバー時に画像を鮮やかにするなどのエフェクトに使われます。

```html
<img src="..." alt="..." class="saturate-50 hover:saturate-100 transition duration-300 cursor-pointer rounded-lg">
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.saturate` (または `theme.saturate`) でカスタムの彩度値を追加できます。値は CSS の `saturate()` 関数で有効な数値 (例: `1.2`) またはパーセンテージ文字列 (`'75%'`) で指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      saturate: {
        '25': '.25',
        '75': '.75',
        '125': '1.25',
      },
    },
  },
}
```

```html
<img src="..." alt="..." class="saturate-75">
<img src="..." alt="..." class="saturate-125">
```

## 任意の値 (Arbitrary Values)

任意の値を使って彩度を直接指定することも可能です。

```html
<img src="..." alt="..." class="saturate-[.9]"> {/* saturate(0.9) */}
<img src="..." alt="..." class="saturate-[1.8]"> {/* saturate(1.8) */}
```

## 注意点

*   `saturate` フィルターは要素全体とその内容に適用されます。
*   値を極端にすると、不自然な色合いになる可能性があります。
*   `saturate-0` は `grayscale` と同じ効果になります。

## 関連ユーティリティ

*   `backdrop-saturate`: 要素の**背景**にあるコンテンツの彩度を調整します。
*   他の `filter` ユーティリティ (`blur`, `brightness`, `contrast`, `grayscale`, `hue-rotate`, `invert`, `sepia`, `drop-shadow`)。
*   `filter` (`filter`, `filter-none`): フィルター効果の有効/無効を切り替えます。

## 公式ドキュメント参照
*   [Tailwind CSS: Saturate](https://tailwindcss.com/docs/saturate)
*   [MDN: filter: saturate()](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate)
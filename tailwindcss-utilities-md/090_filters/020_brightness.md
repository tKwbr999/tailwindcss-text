## タイトル
title: Filters: Brightness (明るさ)

## タグ
tags: ["tailwindcss", "utilities", "filters", "brightness", "filter", "effects", "image"]

## 概要
`brightness-{amount}` ユーティリティは、要素に明るさ (brightness) フィルターを適用します。CSS の `filter` プロパティの `brightness()` 関数に対応します。

値 `100` が元の明るさです。`100` 未満の値は画像を暗くし、`100` より大きい値は画像を明るくします。値 `0` は画像を完全に黒にします。

## 基本的な使い方とパラメータ

値はパーセンテージに基づいた数値で指定します。

*   **`brightness-0`**: `filter: brightness(0);` (真っ黒)
*   **`brightness-50`**: `filter: brightness(.5);` (暗く)
*   **`brightness-75`**: `filter: brightness(.75);`
*   **`brightness-90`**: `filter: brightness(.9);`
*   **`brightness-95`**: `filter: brightness(.95);`
*   **`brightness-100`**: `filter: brightness(1);` (デフォルト、元の明るさ)
*   **`brightness-105`**: `filter: brightness(1.05);`
*   **`brightness-110`**: `filter: brightness(1.1);`
*   **`brightness-125`**: `filter: brightness(1.25);` (明るく)
*   **`brightness-150`**: `filter: brightness(1.5);`
*   **`brightness-200`**: `filter: brightness(2);` (非常に明るく)

```html
<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
  <img src="https://via.placeholder.com/150" alt="Original" class="brightness-100 rounded-lg">
  <img src="https://via.placeholder.com/150" alt="Brightness 75" class="brightness-75 rounded-lg">
  <img src="https://via.placeholder.com/150" alt="Brightness 50" class="brightness-50 rounded-lg">
  <img src="https://via.placeholder.com/150" alt="Brightness 0" class="brightness-0 rounded-lg">
  <img src="https://via.placeholder.com/150" alt="Brightness 110" class="brightness-110 rounded-lg">
  <img src="https://via.placeholder.com/150" alt="Brightness 125" class="brightness-125 rounded-lg">
  <img src="https://via.placeholder.com/150" alt="Brightness 150" class="brightness-150 rounded-lg">
  <img src="https://via.placeholder.com/150" alt="Brightness 200" class="brightness-200 rounded-lg">
</div>
```

## フィルターの組み合わせ

`brightness-*` は、他の `filter` ユーティリティ (例: `blur-*`, `contrast-*`, `grayscale`) と組み合わせて使用できます。

```html
<img src="https://via.placeholder.com/150" alt="Bright and Saturated" class="brightness-125 saturate-150 rounded-lg">
```

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のためにハードウェアアクセラレーションが有効になることがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて明るさを変更できます。

```html
<img src="..." alt="..." class="brightness-75 md:brightness-100">
```

## 状態修飾子

`hover:`, `focus:`, `group-hover:` などと組み合わせて、インタラクションに応じて明るさを変更できます。画像ギャラリーのホバーエフェクトなどで使われます。

```html
<img src="..." alt="..." class="brightness-90 hover:brightness-110 transition duration-300">
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.brightness` (または `theme.brightness`) でカスタムの明るさの値を追加できます。値は CSS の `brightness()` 関数で有効な数値 (例: `1.75`) またはパーセンテージ文字列 (`'60%'`) で指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      brightness: {
        '25': '.25',
        '60': '.60',
        '175': '1.75',
      },
    },
  },
}
```

```html
<img src="..." alt="..." class="brightness-60">
<img src="..." alt="..." class="brightness-175">
```

## 任意の値 (Arbitrary Values)

任意の値を使って明るさを直接指定することも可能です。

```html
<img src="..." alt="..." class="brightness-[.8]"> {/* brightness(0.8) */}
<img src="..." alt="..." class="brightness-[1.35]"> {/* brightness(1.35) */}
```

## 注意点

*   `brightness` フィルターは要素全体とその内容に適用されます。
*   値を大きくしすぎると白飛びし、小さくしすぎると黒潰れする可能性があります。

## 関連ユーティリティ

*   `backdrop-brightness`: 要素の**背景**にあるコンテンツの明るさを調整します。
*   他の `filter` ユーティリティ (`blur`, `contrast`, `grayscale`, `hue-rotate`, `invert`, `saturate`, `sepia`, `drop-shadow`)。

## 公式ドキュメント参照
*   [Tailwind CSS: Brightness](https://tailwindcss.com/docs/brightness)
*   [MDN: filter: brightness()](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness)
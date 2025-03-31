## タイトル
title: Filters: Contrast (コントラスト)

## タグ
tags: ["tailwindcss", "utilities", "filters", "contrast", "filter", "effects", "image"]

## 概要
`contrast-{amount}` ユーティリティは、要素にコントラストフィルターを適用します。CSS の `filter` プロパティの `contrast()` 関数に対応します。

値 `100` が元のコントラストです。`100` 未満の値はコントラストを下げ (色が灰色に近づく)、`100` より大きい値はコントラストを上げます (明るい色はより明るく、暗い色はより暗くなる)。値 `0` は画像を完全に灰色にします。

## 基本的な使い方とパラメータ

値はパーセンテージに基づいた数値で指定します。

*   **`contrast-0`**: `filter: contrast(0);` (完全な灰色)
*   **`contrast-50`**: `filter: contrast(.5);` (低いコントラスト)
*   **`contrast-75`**: `filter: contrast(.75);`
*   **`contrast-100`**: `filter: contrast(1);` (デフォルト、元のコントラスト)
*   **`contrast-125`**: `filter: contrast(1.25);` (高いコントラスト)
*   **`contrast-150`**: `filter: contrast(1.5);`
*   **`contrast-200`**: `filter: contrast(2);` (非常に高いコントラスト)

```html
<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
  <img src="https://via.placeholder.com/150/a3a3a3/ffffff?text=Original" alt="Original" class="contrast-100 rounded-lg">
  <img src="https://via.placeholder.com/150/a3a3a3/ffffff?text=Contrast+75" alt="Contrast 75" class="contrast-75 rounded-lg">
  <img src="https://via.placeholder.com/150/a3a3a3/ffffff?text=Contrast+50" alt="Contrast 50" class="contrast-50 rounded-lg">
  <img src="https://via.placeholder.com/150/a3a3a3/ffffff?text=Contrast+0" alt="Contrast 0" class="contrast-0 rounded-lg">
  <img src="https://via.placeholder.com/150/a3a3a3/ffffff?text=Contrast+125" alt="Contrast 125" class="contrast-125 rounded-lg">
  <img src="https://via.placeholder.com/150/a3a3a3/ffffff?text=Contrast+150" alt="Contrast 150" class="contrast-150 rounded-lg">
  <img src="https://via.placeholder.com/150/a3a3a3/ffffff?text=Contrast+200" alt="Contrast 200" class="contrast-200 rounded-lg">
</div>
```

## フィルターの組み合わせ

`contrast-*` は、他の `filter` ユーティリティ (例: `blur-*`, `brightness-*`, `saturate-*`) と組み合わせて使用できます。

```html
<img src="https://via.placeholder.com/150" alt="High Contrast and Bright" class="contrast-150 brightness-110 rounded-lg">
```

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のためにハードウェアアクセラレーションが有効になることがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてコントラストを変更できます。

```html
<img src="..." alt="..." class="contrast-100 md:contrast-125">
```

## 状態修飾子

`hover:`, `focus:`, `group-hover:` などと組み合わせて、インタラクションに応じてコントラストを変更できます。

```html
<img src="..." alt="..." class="contrast-100 hover:contrast-125 transition duration-300">
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.contrast` (または `theme.contrast`) でカスタムのコントラスト値を追加できます。値は CSS の `contrast()` 関数で有効な数値 (例: `1.8`) またはパーセンテージ文字列 (`'65%'`) で指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      contrast: {
        '25': '.25',
        '65': '.65',
        '175': '1.75',
      },
    },
  },
}
```

```html
<img src="..." alt="..." class="contrast-65">
<img src="..." alt="..." class="contrast-175">
```

## 任意の値 (Arbitrary Values)

任意の値を使ってコントラストを直接指定することも可能です。

```html
<img src="..." alt="..." class="contrast-[.9]"> {/* contrast(0.9) */}
<img src="..." alt="..." class="contrast-[1.15]"> {/* contrast(1.15) */}
```

## 注意点

*   `contrast` フィルターは要素全体とその内容に適用されます。
*   値を極端にすると、色の詳細が失われる可能性があります (白飛びや黒潰れ)。

## 関連ユーティリティ

*   `backdrop-contrast`: 要素の**背景**にあるコンテンツのコントラストを調整します。
*   他の `filter` ユーティリティ (`blur`, `brightness`, `grayscale`, `hue-rotate`, `invert`, `saturate`, `sepia`, `drop-shadow`)。

## 公式ドキュメント参照
*   [Tailwind CSS: Contrast](https://tailwindcss.com/docs/contrast)
*   [MDN: filter: contrast()](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast)
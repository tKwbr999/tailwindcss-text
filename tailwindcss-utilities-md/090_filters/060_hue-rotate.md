## タイトル
title: Filters: Hue Rotate (色相回転)

## タグ
tags: ["tailwindcss", "utilities", "filters", "hue-rotate", "filter", "effects", "image", "color"]

## 概要
`hue-rotate-{angle}` ユーティリティは、要素の色相 (hue) を指定した角度だけ回転させるフィルターを適用します。CSS の `filter` プロパティの `hue-rotate()` 関数に対応します。

これにより、要素の色味全体を変化させ、異なるカラーバリエーションのような効果を作り出すことができます。

## 基本的な使い方とパラメータ

値は角度 (`deg`) で指定します。Tailwind は一般的な角度に対応するクラスを提供します。負の値 (`-hue-rotate-*`) も利用可能です。

*   **`hue-rotate-0`**: `filter: hue-rotate(0deg);` (デフォルト、変化なし)
*   **`hue-rotate-15`**: `filter: hue-rotate(15deg);`
*   **`hue-rotate-30`**: `filter: hue-rotate(30deg);`
*   **`hue-rotate-60`**: `filter: hue-rotate(60deg);`
*   **`hue-rotate-90`**: `filter: hue-rotate(90deg);`
*   **`hue-rotate-180`**: `filter: hue-rotate(180deg);` (色相環の反対側の色になる)
*   **`-hue-rotate-180`** ～ **`-hue-rotate-15`**: 負の角度で回転。

```html
<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=Original" alt="Original" class="hue-rotate-0 rounded-lg">
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=15deg" alt="Hue Rotate 15" class="hue-rotate-15 rounded-lg">
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=30deg" alt="Hue Rotate 30" class="hue-rotate-30 rounded-lg">
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=60deg" alt="Hue Rotate 60" class="hue-rotate-60 rounded-lg">
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=90deg" alt="Hue Rotate 90" class="hue-rotate-90 rounded-lg">
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=180deg" alt="Hue Rotate 180" class="hue-rotate-180 rounded-lg">
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=-60deg" alt="Hue Rotate -60" class="-hue-rotate-60 rounded-lg">
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=-90deg" alt="Hue Rotate -90" class="-hue-rotate-90 rounded-lg">
</div>
```

## フィルターの組み合わせ

`hue-rotate-*` は、他の `filter` ユーティリティ (例: `blur-*`, `saturate-*`) と組み合わせて使用できます。

```html
<img src="https://via.placeholder.com/150" alt="Hue Rotate and Saturate" class="hue-rotate-90 saturate-150 rounded-lg">
```

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のためにハードウェアアクセラレーションが有効になることがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて色相回転の角度を変更できます。

```html
<img src="..." alt="..." class="hue-rotate-0 md:hue-rotate-90">
```

## 状態修飾子

`hover:`, `focus:`, `group-hover:` などと組み合わせて、インタラクションに応じて色相回転を適用または変更できます。

```html
<img src="..." alt="..." class="hue-rotate-0 hover:hue-rotate-180 transition duration-500">
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.hueRotate` (または `theme.hueRotate`) でカスタムの角度を追加できます。キーがクラス名 (`hue-rotate-{key}`) になり、値が角度の文字列 (`'270deg'`) になります。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      hueRotate: {
        '-270': '-270deg',
        '270': '270deg',
        '360': '360deg', // 変化なしと同じ
      },
    },
  },
}
```

```html
<img src="..." alt="..." class="hue-rotate-270">
```

## 任意の値 (Arbitrary Values)

任意の値を使って回転角度を直接指定することも可能です。

```html
<img src="..." alt="..." class="hue-rotate-[120deg]">
<img src="..." alt="..." class="-hue-rotate-[22.5deg]">
```

## 注意点

*   `hue-rotate` フィルターは要素全体とその内容の色相に影響します。
*   白、黒、グレーなどの無彩色には効果がありません。
*   回転角度は 0deg から 360deg のサイクルで繰り返されます (`hue-rotate-360` は `hue-rotate-0` と同じです)。

## 関連ユーティリティ

*   `backdrop-hue-rotate`: 要素の**背景**にあるコンテンツの色相を回転させます。
*   他の `filter` ユーティリティ (`blur`, `brightness`, `contrast`, `grayscale`, `invert`, `saturate`, `sepia`, `drop-shadow`)。
*   `filter` (`filter`, `filter-none`): フィルター効果の有効/無効を切り替えます。

## 公式ドキュメント参照
*   [Tailwind CSS: Hue Rotate](https://tailwindcss.com/docs/hue-rotate)
*   [MDN: filter: hue-rotate()](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate)
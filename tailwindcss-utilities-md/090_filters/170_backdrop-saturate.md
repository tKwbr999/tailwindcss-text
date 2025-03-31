## タイトル
title: Filters: Backdrop Saturate (背景の彩度)

## タグ
tags: ["tailwindcss", "utilities", "filters", "backdrop-filter", "backdrop-saturate", "saturate", "saturation", "effects", "ui", "color"]

## 概要
`backdrop-saturate-{amount}` ユーティリティは、要素の**背後にある領域**に彩度 (saturation) フィルターを適用します。CSS の `backdrop-filter` プロパティの `saturate()` 関数に対応します。

値 `100` が元の彩度です。`100` 未満の値は背景の彩度を下げ (色がくすむ)、`100` より大きい値は背景の彩度を上げます (色がより鮮やかになる)。値 `0` は背景を完全にグレースケールにします。

## 基本的な使い方とパラメータ

値はパーセンテージに基づいた数値で指定します。

*   **`backdrop-saturate-0`**: `backdrop-filter: saturate(0);` (背景がグレースケール)
*   **`backdrop-saturate-50`**: `backdrop-filter: saturate(.5);` (背景の彩度を下げる)
*   **`backdrop-saturate-100`**: `backdrop-filter: saturate(1);` (デフォルト、変化なし)
*   **`backdrop-saturate-150`**: `backdrop-filter: saturate(1.5);` (背景の彩度を上げる)
*   **`backdrop-saturate-200`**: `backdrop-filter: saturate(2);` (背景の彩度を非常に上げる)

**注意:** 効果を確認するには、要素に**半透明の背景色** (`bg-opacity-*` または `bg-white/50` など) を設定する必要があります。

```html
<div class="relative h-48 p-4">
  {/* 背景要素 */}
  <img src="https://via.placeholder.com/400x200/3b82f6/ffffff?text=Background+Content" class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="Background">

  {/* 前景要素に backdrop-saturate を適用 */}
  <div class="absolute inset-4 grid grid-cols-2 gap-4">
    <div class="backdrop-saturate-50 bg-white/10 p-4 rounded-lg text-center shadow-lg">
      <p class="text-white font-semibold">Backdrop Saturate 50</p>
      <p class="text-xs text-gray-200">(Desaturated Backdrop)</p>
    </div>
     <div class="backdrop-saturate-150 bg-black/10 p-4 rounded-lg text-center shadow-lg">
      <p class="text-white font-semibold">Backdrop Saturate 150</p>
       <p class="text-xs text-gray-200">(Supersaturated Backdrop)</p>
    </div>
     <div class="backdrop-saturate-200 backdrop-blur-sm bg-white/5 p-4 rounded-lg text-center shadow-lg"> {/* 組み合わせ */}
      <p class="text-white font-semibold">Saturate 200 + Blur SM</p>
    </div>
     <div class="backdrop-saturate-0 bg-white/10 p-4 rounded-lg text-center shadow-lg">
      <p class="text-white font-semibold">Backdrop Saturate 0</p>
       <p class="text-xs text-gray-200">(Grayscale Backdrop)</p>
    </div>
  </div>
</div>
```

## フィルターの組み合わせ

`backdrop-saturate-*` は、他の `backdrop-filter` ユーティリティ (例: `backdrop-blur-*`, `backdrop-contrast-*`) と組み合わせて使用できます。

```html
<div class="backdrop-saturate-150 backdrop-brightness-110 bg-white/10 ...">
  Saturated and bright backdrop
</div>
```

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のためにハードウェアアクセラレーションが有効になることがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて背景の彩度を変更できます。

```html
<div class="backdrop-saturate-100 md:backdrop-saturate-150 ...">
  Backdrop saturation changes on medium screens.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じて背景の彩度を変更できます。

```html
<div class="backdrop-saturate-100 hover:backdrop-saturate-50 transition duration-300 ...">
  Backdrop desaturates on hover.
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.backdropSaturate` (または `theme.backdropSaturate`) でカスタムの彩度値を追加できます。値は `saturate` と同様に数値またはパーセンテージ文字列で指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backdropSaturate: {
        '25': '.25',
        '75': '.75',
        '125': '1.25',
      },
    },
  },
}
```

```html
<div class="backdrop-saturate-75 ...">Custom backdrop saturation 75%</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って背景の彩度を直接指定することも可能です。

```html
<div class="backdrop-saturate-[1.3] ...">Arbitrary backdrop saturation 130%</div>
```

## 注意点

*   `backdrop-filter` は比較的新しい CSS プロパティであり、ブラウザの互換性を確認してください。
*   効果を視覚的に確認するには、要素に**半透明の背景**が必要です。
*   `backdrop-filter` は計算負荷が高いため、パフォーマンスに注意してください。
*   `backdrop-saturate-0` は `backdrop-grayscale` と同じ効果になります。

## 関連ユーティリティ

*   `saturate`: 要素**自体**の彩度を調整します。
*   他の `backdrop-filter` ユーティリティ (`backdrop-blur`, `backdrop-brightness`, `backdrop-contrast`, `backdrop-grayscale`, `backdrop-hue-rotate`, `backdrop-invert`, `backdrop-opacity`, `backdrop-sepia`)。
*   `backdrop-filter` (`backdrop-filter`, `backdrop-filter-none`): バックドロップフィルター効果の有効/無効を切り替えます。
*   `background-color` (`bg-*`, `bg-opacity-*`): 背景色と不透明度。

## 公式ドキュメント参照
*   [Tailwind CSS: Backdrop Saturate](https://tailwindcss.com/docs/backdrop-saturate)
*   [MDN: backdrop-filter: saturate()](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#saturate())
*   [Can I use: backdrop-filter](https://caniuse.com/css-backdrop-filter) (ブラウザサポート状況)
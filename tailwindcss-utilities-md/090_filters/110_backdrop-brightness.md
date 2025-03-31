## タイトル
title: Filters: Backdrop Brightness (背景の明るさ)

## タグ
tags: ["tailwindcss", "utilities", "filters", "backdrop-filter", "backdrop-brightness", "brightness", "effects", "ui"]

## 概要
`backdrop-brightness-{amount}` ユーティリティは、要素の**背後にある領域**に明るさ (brightness) フィルターを適用します。CSS の `backdrop-filter` プロパティの `brightness()` 関数に対応します。

値 `100` が元の明るさです。`100` 未満の値は背景を暗くし、`100` より大きい値は背景を明るくします。

## 基本的な使い方とパラメータ

値はパーセンテージに基づいた数値で指定します。

*   **`backdrop-brightness-0`**: `backdrop-filter: brightness(0);` (背景が真っ黒)
*   **`backdrop-brightness-50`**: `backdrop-filter: brightness(.5);` (背景を暗く)
*   **`backdrop-brightness-75`**: `backdrop-filter: brightness(.75);`
*   **`backdrop-brightness-90`**: `backdrop-filter: brightness(.9);`
*   **`backdrop-brightness-95`**: `backdrop-filter: brightness(.95);`
*   **`backdrop-brightness-100`**: `backdrop-filter: brightness(1);` (デフォルト、変化なし)
*   **`backdrop-brightness-105`**: `backdrop-filter: brightness(1.05);`
*   **`backdrop-brightness-110`**: `backdrop-filter: brightness(1.1);`
*   **`backdrop-brightness-125`**: `backdrop-filter: brightness(1.25);` (背景を明るく)
*   **`backdrop-brightness-150`**: `backdrop-filter: brightness(1.5);`
*   **`backdrop-brightness-200`**: `backdrop-filter: brightness(2);` (背景を非常に明るく)

**注意:** 効果を確認するには、要素に**半透明の背景色** (`bg-opacity-*` または `bg-white/50` など) を設定する必要があります。

```html
<div class="relative h-48 p-4">
  {/* 背景要素 */}
  <img src="https://via.placeholder.com/400x200/a3a3a3/ffffff?text=Background+Content" class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="Background">

  {/* 前景要素に backdrop-brightness を適用 */}
  <div class="absolute inset-4 grid grid-cols-2 gap-4">
    <div class="backdrop-brightness-50 bg-white/10 p-4 rounded-lg text-center shadow-lg">
      <p class="text-white font-semibold">Backdrop Brightness 50</p>
      <p class="text-xs text-gray-200">(Darker Backdrop)</p>
    </div>
     <div class="backdrop-brightness-150 bg-black/10 p-4 rounded-lg text-center shadow-lg">
      <p class="text-white font-semibold">Backdrop Brightness 150</p>
       <p class="text-xs text-gray-200">(Brighter Backdrop)</p>
    </div>
  </div>
</div>
```

## フィルターの組み合わせ

`backdrop-brightness-*` は、他の `backdrop-filter` ユーティリティ (例: `backdrop-blur-*`, `backdrop-contrast-*`) と組み合わせて使用できます。

```html
<div class="backdrop-brightness-75 backdrop-blur-sm bg-white/30 ...">
  Darkened and blurred backdrop
</div>
```

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のためにハードウェアアクセラレーションが有効になることがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて背景の明るさを変更できます。

```html
<div class="backdrop-brightness-100 md:backdrop-brightness-75 ...">
  Backdrop brightness changes on medium screens.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じて背景の明るさを変更できます。

```html
<div class="backdrop-brightness-100 hover:backdrop-brightness-110 transition duration-300 ...">
  Backdrop brightness increases on hover.
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.backdropBrightness` (または `theme.backdropBrightness`) でカスタムの明るさの値を追加できます。値は `brightness` と同様に数値またはパーセンテージ文字列で指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backdropBrightness: {
        '65': '.65',
        '175': '1.75',
      },
    },
  },
}
```

```html
<div class="backdrop-brightness-65 ...">Custom backdrop brightness 65%</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って背景の明るさを直接指定することも可能です。

```html
<div class="backdrop-brightness-[.85] ...">Arbitrary backdrop brightness 85%</div>
```

## 注意点

*   `backdrop-filter` は比較的新しい CSS プロパティであり、ブラウザの互換性を確認してください。
*   効果を視覚的に確認するには、要素に**半透明の背景**が必要です。
*   `backdrop-filter` は計算負荷が高いため、パフォーマンスに注意してください。

## 関連ユーティリティ

*   `brightness`: 要素**自体**の明るさを調整します。
*   他の `backdrop-filter` ユーティリティ (`backdrop-blur`, `backdrop-contrast`, `backdrop-grayscale`, `backdrop-hue-rotate`, `backdrop-invert`, `backdrop-opacity`, `backdrop-saturate`, `backdrop-sepia`)。
*   `backdrop-filter` (`backdrop-filter`, `backdrop-filter-none`): バックドロップフィルター効果の有効/無効を切り替えます。
*   `background-color` (`bg-*`, `bg-opacity-*`): 背景色と不透明度。

## 公式ドキュメント参照
*   [Tailwind CSS: Backdrop Brightness](https://tailwindcss.com/docs/backdrop-brightness)
*   [MDN: backdrop-filter: brightness()](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#brightness())
*   [Can I use: backdrop-filter](https://caniuse.com/css-backdrop-filter) (ブラウザサポート状況)
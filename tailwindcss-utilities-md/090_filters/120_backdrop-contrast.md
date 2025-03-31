## タイトル
title: Filters: Backdrop Contrast (背景のコントラスト)

## タグ
tags: ["tailwindcss", "utilities", "filters", "backdrop-filter", "backdrop-contrast", "contrast", "effects", "ui"]

## 概要
`backdrop-contrast-{amount}` ユーティリティは、要素の**背後にある領域**にコントラストフィルターを適用します。CSS の `backdrop-filter` プロパティの `contrast()` 関数に対応します。

値 `100` が元のコントラストです。`100` 未満の値は背景のコントラストを下げ、`100` より大きい値は背景のコントラストを上げます。

## 基本的な使い方とパラメータ

値はパーセンテージに基づいた数値で指定します。

*   **`backdrop-contrast-0`**: `backdrop-filter: contrast(0);` (背景が完全に灰色)
*   **`backdrop-contrast-50`**: `backdrop-filter: contrast(.5);` (背景のコントラストを下げる)
*   **`backdrop-contrast-75`**: `backdrop-filter: contrast(.75);`
*   **`backdrop-contrast-100`**: `backdrop-filter: contrast(1);` (デフォルト、変化なし)
*   **`backdrop-contrast-125`**: `backdrop-filter: contrast(1.25);` (背景のコントラストを上げる)
*   **`backdrop-contrast-150`**: `backdrop-filter: contrast(1.5);`
*   **`backdrop-contrast-200`**: `backdrop-filter: contrast(2);` (背景のコントラストを非常に上げる)

**注意:** 効果を確認するには、要素に**半透明の背景色** (`bg-opacity-*` または `bg-white/50` など) を設定する必要があります。

```html
<div class="relative h-48 p-4">
  {/* 背景要素 */}
  <img src="https://via.placeholder.com/400x200/a3a3a3/ffffff?text=Background+Content" class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="Background">

  {/* 前景要素に backdrop-contrast を適用 */}
  <div class="absolute inset-4 grid grid-cols-2 gap-4">
    <div class="backdrop-contrast-50 bg-white/10 p-4 rounded-lg text-center shadow-lg">
      <p class="text-white font-semibold">Backdrop Contrast 50</p>
      <p class="text-xs text-gray-200">(Lower Backdrop Contrast)</p>
    </div>
     <div class="backdrop-contrast-150 bg-black/10 p-4 rounded-lg text-center shadow-lg">
      <p class="text-white font-semibold">Backdrop Contrast 150</p>
       <p class="text-xs text-gray-200">(Higher Backdrop Contrast)</p>
    </div>
     <div class="backdrop-contrast-200 backdrop-blur-sm bg-white/5 p-4 rounded-lg text-center shadow-lg"> {/* 組み合わせ */}
      <p class="text-white font-semibold">Contrast 200 + Blur SM</p>
    </div>
     <div class="backdrop-contrast-0 bg-white/10 p-4 rounded-lg text-center shadow-lg">
      <p class="text-white font-semibold">Backdrop Contrast 0</p>
       <p class="text-xs text-gray-200">(Gray Backdrop)</p>
    </div>
  </div>
</div>
```

## フィルターの組み合わせ

`backdrop-contrast-*` は、他の `backdrop-filter` ユーティリティ (例: `backdrop-blur-*`, `backdrop-saturate-*`) と組み合わせて使用できます。

```html
<div class="backdrop-contrast-125 backdrop-blur-md bg-white/20 ...">
  Higher contrast and blurred backdrop
</div>
```

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のためにハードウェアアクセラレーションが有効になることがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて背景のコントラストを変更できます。

```html
<div class="backdrop-contrast-100 md:backdrop-contrast-125 ...">
  Backdrop contrast changes on medium screens.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じて背景のコントラストを変更できます。

```html
<div class="backdrop-contrast-100 hover:backdrop-contrast-75 transition duration-300 ...">
  Backdrop contrast decreases on hover.
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.backdropContrast` (または `theme.backdropContrast`) でカスタムのコントラスト値を追加できます。値は `contrast` と同様に数値またはパーセンテージ文字列で指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backdropContrast: {
        '25': '.25',
        '175': '1.75',
      },
    },
  },
}
```

```html
<div class="backdrop-contrast-175 ...">Custom backdrop contrast 175%</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って背景のコントラストを直接指定することも可能です。

```html
<div class="backdrop-contrast-[.95] ...">Arbitrary backdrop contrast 95%</div>
```

## 注意点

*   `backdrop-filter` は比較的新しい CSS プロパティであり、ブラウザの互換性を確認してください。
*   効果を視覚的に確認するには、要素に**半透明の背景**が必要です。
*   `backdrop-filter` は計算負荷が高いため、パフォーマンスに注意してください。

## 関連ユーティリティ

*   `contrast`: 要素**自体**のコントラストを調整します。
*   他の `backdrop-filter` ユーティリティ (`backdrop-blur`, `backdrop-brightness`, `backdrop-grayscale`, `backdrop-hue-rotate`, `backdrop-invert`, `backdrop-opacity`, `backdrop-saturate`, `backdrop-sepia`)。
*   `backdrop-filter` (`backdrop-filter`, `backdrop-filter-none`): バックドロップフィルター効果の有効/無効を切り替えます。
*   `background-color` (`bg-*`, `bg-opacity-*`): 背景色と不透明度。

## 公式ドキュメント参照
*   [Tailwind CSS: Backdrop Contrast](https://tailwindcss.com/docs/backdrop-contrast)
*   [MDN: backdrop-filter: contrast()](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#contrast())
*   [Can I use: backdrop-filter](https://caniuse.com/css-backdrop-filter) (ブラウザサポート状況)
## タイトル
title: Filters: Backdrop Grayscale (背景のグレースケール)

## タグ
tags: ["tailwindcss", "utilities", "filters", "backdrop-filter", "backdrop-grayscale", "grayscale", "effects", "ui"]

## 概要
`backdrop-grayscale` および `backdrop-grayscale-0` ユーティリティは、要素の**背後にある領域**にグレースケールフィルターを適用します。CSS の `backdrop-filter` プロパティの `grayscale()` 関数に対応します。

`backdrop-grayscale` は背景を完全に白黒にし、`backdrop-grayscale-0` は元の色に戻します。

## 基本的な使い方とパラメータ

*   **`backdrop-grayscale`**: 背景を完全にグレースケールにします (`backdrop-filter: grayscale(100%);`)。
*   **`backdrop-grayscale-0`**: デフォルト。背景にグレースケールフィルターを適用しません (`backdrop-filter: grayscale(0);`)。

**注意:** 効果を確認するには、要素に**半透明の背景色** (`bg-opacity-*` または `bg-white/50` など) を設定する必要があります。

```html
<div class="relative h-48 p-4">
  {/* 背景要素 */}
  <img src="https://via.placeholder.com/400x200/3b82f6/ffffff?text=Background+Content" class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="Background">

  {/* 前景要素に backdrop-grayscale を適用 */}
  <div class="absolute inset-4 grid grid-cols-2 gap-4">
    <div class="backdrop-grayscale bg-white/20 p-4 rounded-lg text-center shadow-lg">
      <p class="text-white font-semibold">Backdrop Grayscale</p>
      <p class="text-xs text-gray-200">(Backdrop is B&W)</p>
    </div>
     <div class="backdrop-grayscale-0 bg-black/10 p-4 rounded-lg text-center shadow-lg"> {/* Default */}
      <p class="text-white font-semibold">Backdrop Grayscale 0</p>
       <p class="text-xs text-gray-200">(Backdrop has color)</p>
    </div>
     <div class="backdrop-grayscale backdrop-blur-sm bg-white/10 p-4 rounded-lg text-center shadow-lg"> {/* 組み合わせ */}
      <p class="text-white font-semibold">Grayscale + Blur SM</p>
    </div>
  </div>
</div>
```

## フィルターの組み合わせ

`backdrop-grayscale` は、他の `backdrop-filter` ユーティリティ (例: `backdrop-blur-*`, `backdrop-contrast-*`) と組み合わせて使用できます。

```html
<div class="backdrop-grayscale backdrop-brightness-125 bg-white/10 ...">
  Grayscale and bright backdrop
</div>
```

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のためにハードウェアアクセラレーションが有効になることがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて背景のグレースケールを適用または解除できます。

```html
<div class="backdrop-grayscale-0 md:backdrop-grayscale ...">
  Backdrop becomes grayscale on medium screens and wider.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じて背景のグレースケールを適用または解除できます。

```html
<div class="backdrop-grayscale hover:backdrop-grayscale-0 transition duration-300 ...">
  Backdrop color appears on hover.
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.backdropGrayscale` (または `theme.backdropGrayscale`) でカスタムのグレースケール値を追加できます。値は `grayscale` と同様にパーセンテージ文字列または数値で指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backdropGrayscale: {
        '50': '.5', // backdrop-grayscale-50 クラスを追加
      },
    },
  },
}
```

```html
<div class="backdrop-grayscale-50 ...">50% backdrop grayscale</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って背景のグレースケールの度合いを直接指定することも可能です。

```html
<div class="backdrop-grayscale-[30%] ...">Arbitrary 30% backdrop grayscale</div>
```

## 注意点

*   `backdrop-filter` は比較的新しい CSS プロパティであり、ブラウザの互換性を確認してください。
*   効果を視覚的に確認するには、要素に**半透明の背景**が必要です。
*   `backdrop-filter` は計算負荷が高いため、パフォーマンスに注意してください。
*   `backdrop-grayscale-0` は `backdrop-filter: grayscale(0);` を設定しますが、他のバックドロップフィルター効果が適用されている場合、それらは解除されません。すべてのバックドロップフィルターを解除するには `backdrop-filter-none` を使用します。

## 関連ユーティリティ

*   `grayscale`: 要素**自体**をグレースケールにします。
*   他の `backdrop-filter` ユーティリティ (`backdrop-blur`, `backdrop-brightness`, `backdrop-contrast`, `backdrop-hue-rotate`, `backdrop-invert`, `backdrop-opacity`, `backdrop-saturate`, `backdrop-sepia`)。
*   `backdrop-filter` (`backdrop-filter`, `backdrop-filter-none`): バックドロップフィルター効果の有効/無効を切り替えます。
*   `background-color` (`bg-*`, `bg-opacity-*`): 背景色と不透明度。

## 公式ドキュメント参照
*   [Tailwind CSS: Backdrop Grayscale](https://tailwindcss.com/docs/backdrop-grayscale)
*   [MDN: backdrop-filter: grayscale()](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#grayscale())
*   [Can I use: backdrop-filter](https://caniuse.com/css-backdrop-filter) (ブラウザサポート状況)
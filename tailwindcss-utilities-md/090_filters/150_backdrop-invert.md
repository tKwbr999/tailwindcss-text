## タイトル
title: Filters: Backdrop Invert (背景の色反転)

## タグ
tags: ["tailwindcss", "utilities", "filters", "backdrop-filter", "backdrop-invert", "invert", "effects", "ui", "color", "negative"]

## 概要
`backdrop-invert` および `backdrop-invert-0` ユーティリティは、要素の**背後にある領域**に色反転フィルターを適用します。CSS の `backdrop-filter` プロパティの `invert()` 関数に対応します。

`backdrop-invert` は背景の色を完全に反転させ、`backdrop-invert-0` は元の色に戻します。

## 基本的な使い方とパラメータ

*   **`backdrop-invert`**: 背景の色を完全に反転させます (`backdrop-filter: invert(100%);`)。
*   **`backdrop-invert-0`**: デフォルト。背景の色を反転させません (`backdrop-filter: invert(0);`)。

**注意:** 効果を確認するには、要素に**半透明の背景色** (`bg-opacity-*` または `bg-white/50` など) を設定する必要があります。

```html
<div class="relative h-48 p-4">
  {/* 背景要素 */}
  <img src="https://via.placeholder.com/400x200/3b82f6/ffffff?text=Background+Content" class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="Background">

  {/* 前景要素に backdrop-invert を適用 */}
  <div class="absolute inset-4 grid grid-cols-2 gap-4">
    <div class="backdrop-invert bg-white/10 p-4 rounded-lg text-center shadow-lg">
      <p class="text-white font-semibold mix-blend-difference">Backdrop Invert</p> {/* テキストが見えるように mix-blend-difference を適用 */}
      <p class="text-xs text-gray-200 mix-blend-difference">(Backdrop colors are inverted)</p>
    </div>
     <div class="backdrop-invert-0 bg-black/10 p-4 rounded-lg text-center shadow-lg"> {/* Default */}
      <p class="text-white font-semibold">Backdrop Invert 0</p>
       <p class="text-xs text-gray-200">(Backdrop colors are normal)</p>
    </div>
     <div class="backdrop-invert backdrop-blur-sm bg-white/5 p-4 rounded-lg text-center shadow-lg"> {/* 組み合わせ */}
      <p class="text-white font-semibold mix-blend-difference">Invert + Blur SM</p>
    </div>
  </div>
</div>
```

## フィルターの組み合わせ

`backdrop-invert` は、他の `backdrop-filter` ユーティリティ (例: `backdrop-blur-*`, `backdrop-contrast-*`) と組み合わせて使用できます。

```html
<div class="backdrop-invert backdrop-grayscale bg-white/10 ...">
  Inverted and grayscale backdrop
</div>
```

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のためにハードウェアアクセラレーションが有効になることがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて背景の色反転を適用または解除できます。

```html
<div class="backdrop-invert-0 md:backdrop-invert ...">
  Backdrop inversion applied on medium screens and wider.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じて背景の色反転を適用または解除できます。

```html
<div class="backdrop-invert-0 hover:backdrop-invert transition duration-300 ...">
  Backdrop inverts on hover.
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.backdropInvert` (または `theme.backdropInvert`) でカスタムの反転度合いを追加できます。値は `invert` と同様にパーセンテージ文字列または数値で指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backdropInvert: {
        '25': '.25', // backdrop-invert-25 クラスを追加
        '50': '.5',
        '75': '.75',
      },
    },
  },
}
```

```html
<div class="backdrop-invert-50 ...">50% backdrop inversion</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って背景の反転度合いを直接指定することも可能です。

```html
<div class="backdrop-invert-[.8] ...">Arbitrary 80% backdrop inversion</div>
```

## 注意点

*   `backdrop-filter` は比較的新しい CSS プロパティであり、ブラウザの互換性を確認してください。
*   効果を視覚的に確認するには、要素に**半透明の背景**が必要です。
*   `backdrop-filter` は計算負荷が高いため、パフォーマンスに注意してください。
*   `backdrop-invert-0` は `backdrop-filter: invert(0);` を設定しますが、他のバックドロップフィルター効果が適用されている場合、それらは解除されません。すべてのバックドロップフィルターを解除するには `backdrop-filter-none` を使用します。

## 関連ユーティリティ

*   `invert`: 要素**自体**の色を反転させます。
*   他の `backdrop-filter` ユーティリティ (`backdrop-blur`, `backdrop-brightness`, `backdrop-contrast`, `backdrop-grayscale`, `backdrop-hue-rotate`, `backdrop-opacity`, `backdrop-saturate`, `backdrop-sepia`)。
*   `backdrop-filter` (`backdrop-filter`, `backdrop-filter-none`): バックドロップフィルター効果の有効/無効を切り替えます。
*   `background-color` (`bg-*`, `bg-opacity-*`): 背景色と不透明度。

## 公式ドキュメント参照
*   [Tailwind CSS: Backdrop Invert](https://tailwindcss.com/docs/backdrop-invert)
*   [MDN: backdrop-filter: invert()](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#invert())
*   [Can I use: backdrop-filter](https://caniuse.com/css-backdrop-filter) (ブラウザサポート状況)
## タイトル
title: Filters: Backdrop Sepia (背景のセピア調)

## タグ
tags: ["tailwindcss", "utilities", "filters", "backdrop-filter", "backdrop-sepia", "sepia", "effects", "ui", "color"]

## 概要
`backdrop-sepia` および `backdrop-sepia-0` ユーティリティは、要素の**背後にある領域**にセピア調フィルターを適用します。CSS の `backdrop-filter` プロパティの `sepia()` 関数に対応します。

`backdrop-sepia` は背景をセピアトーンにし、`backdrop-sepia-0` は元の色に戻します。

## 基本的な使い方とパラメータ

*   **`backdrop-sepia`**: 背景を完全にセピア調にします (`backdrop-filter: sepia(100%);`)。
*   **`backdrop-sepia-0`**: デフォルト。背景にセピアフィルターを適用しません (`backdrop-filter: sepia(0);`)。

**注意:** 効果を確認するには、要素に**半透明の背景色** (`bg-opacity-*` または `bg-white/50` など) を設定する必要があります。

```html
<div class="relative h-48 p-4">
  {/* 背景要素 */}
  <img src="https://via.placeholder.com/400x200/3b82f6/ffffff?text=Background+Content" class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="Background">

  {/* 前景要素に backdrop-sepia を適用 */}
  <div class="absolute inset-4 grid grid-cols-2 gap-4">
    <div class="backdrop-sepia bg-white/20 p-4 rounded-lg text-center shadow-lg">
      <p class="text-white font-semibold mix-blend-difference">Backdrop Sepia</p>
      <p class="text-xs text-gray-200 mix-blend-difference">(Backdrop has sepia tone)</p>
    </div>
     <div class="backdrop-sepia-0 bg-black/10 p-4 rounded-lg text-center shadow-lg"> {/* Default */}
      <p class="text-white font-semibold">Backdrop Sepia 0</p>
       <p class="text-xs text-gray-200">(Backdrop has normal color)</p>
    </div>
     <div class="backdrop-sepia backdrop-blur-sm bg-white/10 p-4 rounded-lg text-center shadow-lg"> {/* 組み合わせ */}
      <p class="text-white font-semibold mix-blend-difference">Sepia + Blur SM</p>
    </div>
  </div>
</div>
```

## フィルターの組み合わせ

`backdrop-sepia` は、他の `backdrop-filter` ユーティリティ (例: `backdrop-blur-*`, `backdrop-contrast-*`) と組み合わせて使用できます。

```html
<div class="backdrop-sepia backdrop-brightness-90 bg-white/15 ...">
  Sepia and slightly darker backdrop
</div>
```

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のためにハードウェアアクセラレーションが有効になることがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて背景のセピア効果を適用または解除できます。

```html
<div class="backdrop-sepia-0 md:backdrop-sepia ...">
  Backdrop sepia applied on medium screens and wider.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じて背景のセピア効果を適用または解除できます。

```html
<div class="backdrop-sepia hover:backdrop-sepia-0 transition duration-300 ...">
  Backdrop sepia removed on hover.
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.backdropSepia` (または `theme.backdropSepia`) でカスタムのセピア度合いを追加できます。値は `sepia` と同様にパーセンテージ文字列または数値で指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backdropSepia: {
        '50': '.5', // backdrop-sepia-50 クラスを追加
      },
    },
  },
}
```

```html
<div class="backdrop-sepia-50 ...">50% backdrop sepia</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って背景のセピアの度合いを直接指定することも可能です。

```html
<div class="backdrop-sepia-[.75] ...">Arbitrary 75% backdrop sepia</div>
```

## 注意点

*   `backdrop-filter` は比較的新しい CSS プロパティであり、ブラウザの互換性を確認してください。
*   効果を視覚的に確認するには、要素に**半透明の背景**が必要です。
*   `backdrop-filter` は計算負荷が高いため、パフォーマンスに注意してください。
*   `backdrop-sepia-0` は `backdrop-filter: sepia(0);` を設定しますが、他のバックドロップフィルター効果が適用されている場合、それらは解除されません。すべてのバックドロップフィルターを解除するには `backdrop-filter-none` を使用します。

## 関連ユーティリティ

*   `sepia`: 要素**自体**にセピアフィルターを適用します。
*   他の `backdrop-filter` ユーティリティ (`backdrop-blur`, `backdrop-brightness`, `backdrop-contrast`, `backdrop-grayscale`, `backdrop-hue-rotate`, `backdrop-invert`, `backdrop-opacity`, `backdrop-saturate`)。
*   `backdrop-filter` (`backdrop-filter`, `backdrop-filter-none`): バックドロップフィルター効果の有効/無効を切り替えます。
*   `background-color` (`bg-*`, `bg-opacity-*`): 背景色と不透明度。

## 公式ドキュメント参照
*   [Tailwind CSS: Backdrop Sepia](https://tailwindcss.com/docs/backdrop-sepia)
*   [MDN: backdrop-filter: sepia()](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#sepia())
*   [Can I use: backdrop-filter](https://caniuse.com/css-backdrop-filter) (ブラウザサポート状況)
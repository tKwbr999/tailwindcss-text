## タイトル
title: Filters: Backdrop Opacity (背景の不透明度)

## タグ
tags: ["tailwindcss", "utilities", "filters", "backdrop-filter", "backdrop-opacity", "opacity", "effects", "ui", "transparent"]

## 概要
`backdrop-opacity-{amount}` ユーティリティは、要素の**背後にある領域**に不透明度フィルターを適用します。CSS の `backdrop-filter` プロパティの `opacity()` 関数に対応します。

値 `100` が元の不透明度 (変化なし) で、`0` は背景を完全に透明にします。これにより、要素を通して見える背景の透明度を調整できます。

## 基本的な使い方とパラメータ

値は `theme.opacity` スケールに基づいており、`0` から `100` までのパーセンテージで指定します (通常は 5 または 10 刻み)。

*   **`backdrop-opacity-0`**: `backdrop-filter: opacity(0);` (背景が完全に透明)
*   **`backdrop-opacity-5`**: `backdrop-filter: opacity(0.05);`
*   ...
*   **`backdrop-opacity-75`**: `backdrop-filter: opacity(0.75);`
*   ...
*   **`backdrop-opacity-100`**: `backdrop-filter: opacity(1);` (デフォルト、変化なし)

**注意:** 効果を確認するには、要素に**半透明の背景色** (`bg-opacity-*` または `bg-white/50` など) を設定する必要があります。また、背後に他のコンテンツが存在する必要があります。

```html
<div class="relative h-48 p-4">
  {/* 背景要素 */}
  <img src="https://via.placeholder.com/400x200/3b82f6/ffffff?text=Background+Content" class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="Background">

  {/* 前景要素に backdrop-opacity を適用 */}
  <div class="absolute inset-4 grid grid-cols-2 gap-4">
    <div class="backdrop-opacity-50 bg-white/10 p-4 rounded-lg text-center shadow-lg">
      <p class="text-white font-semibold">Backdrop Opacity 50</p>
      <p class="text-xs text-gray-200">(Backdrop is 50% transparent)</p>
    </div>
     <div class="backdrop-opacity-10 bg-black/10 p-4 rounded-lg text-center shadow-lg">
      <p class="text-white font-semibold">Backdrop Opacity 10</p>
       <p class="text-xs text-gray-200">(Backdrop is 90% transparent)</p>
    </div>
     <div class="backdrop-opacity-100 backdrop-blur-sm bg-white/5 p-4 rounded-lg text-center shadow-lg"> {/* 組み合わせ */}
      <p class="text-white font-semibold">Opacity 100 + Blur SM</p>
       <p class="text-xs text-gray-200">(Backdrop not transparent)</p>
    </div>
     <div class="backdrop-opacity-0 bg-white/10 p-4 rounded-lg text-center shadow-lg">
      <p class="text-white font-semibold">Backdrop Opacity 0</p>
       <p class="text-xs text-gray-200">(Backdrop fully transparent)</p>
    </div>
  </div>
</div>
```

## フィルターの組み合わせ

`backdrop-opacity-*` は、他の `backdrop-filter` ユーティリティ (例: `backdrop-blur-*`, `backdrop-saturate-*`) と組み合わせて使用できます。

```html
<div class="backdrop-opacity-75 backdrop-blur-md bg-white/10 ...">
  Blurred backdrop with 75% opacity
</div>
```

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のためにハードウェアアクセラレーションが有効になることがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて背景の不透明度を変更できます。

```html
<div class="backdrop-opacity-100 md:backdrop-opacity-50 ...">
  Backdrop opacity changes on medium screens.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じて背景の不透明度を変更できます。

```html
<div class="backdrop-opacity-80 hover:backdrop-opacity-100 transition duration-300 ...">
  Backdrop becomes fully opaque on hover.
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.backdropOpacity` (または `theme.backdropOpacity`) でカスタムの不透明度値を追加できます。通常は `theme.opacity` スケールを継承します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // opacity を拡張すると backdropOpacity でも使える
      opacity: {
        '15': '0.15',
        '65': '0.65',
      },
      // backdropOpacity 固有のキーも追加可能
      // backdropOpacity: theme => ({
      //   ...theme('opacity'),
      //   'heavy': '.98',
      // }),
    },
  },
}
```

```html
<div class="backdrop-opacity-65 ...">Custom backdrop opacity 65%</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って背景の不透明度を直接指定することも可能です。

```html
<div class="backdrop-opacity-[.33] ...">Arbitrary backdrop opacity 33%</div>
```

## 注意点

*   `backdrop-filter` は比較的新しい CSS プロパティであり、ブラウザの互換性を確認してください。
*   効果を視覚的に確認するには、要素に**半透明の背景**が必要です。
*   `backdrop-filter` は計算負荷が高いため、パフォーマンスに注意してください。
*   `backdrop-opacity` は要素の**背景**の不透明度を変更します。要素**自体**の不透明度を変更するには `opacity` ユーティリティを使用します。

## 関連ユーティリティ

*   `opacity`: 要素**自体**の不透明度。
*   他の `backdrop-filter` ユーティリティ (`backdrop-blur`, `backdrop-brightness`, `backdrop-contrast`, `backdrop-grayscale`, `backdrop-hue-rotate`, `backdrop-invert`, `backdrop-saturate`, `backdrop-sepia`)。
*   `backdrop-filter` (`backdrop-filter`, `backdrop-filter-none`): バックドロップフィルター効果の有効/無効を切り替えます。
*   `background-color` (`bg-*`, `bg-opacity-*`): 背景色と不透明度。

## 公式ドキュメント参照
*   [Tailwind CSS: Backdrop Opacity](https://tailwindcss.com/docs/backdrop-opacity)
*   [MDN: backdrop-filter: opacity()](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#opacity())
*   [Can I use: backdrop-filter](https://caniuse.com/css-backdrop-filter) (ブラウザサポート状況)
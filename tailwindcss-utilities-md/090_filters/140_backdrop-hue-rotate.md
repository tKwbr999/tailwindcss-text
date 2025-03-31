## タイトル
title: Filters: Backdrop Hue Rotate (背景の色相回転)

## タグ
tags: ["tailwindcss", "utilities", "filters", "backdrop-filter", "backdrop-hue-rotate", "hue-rotate", "effects", "ui", "color"]

## 概要
`backdrop-hue-rotate-{angle}` ユーティリティは、要素の**背後にある領域**に色相回転 (hue rotate) フィルターを適用します。CSS の `backdrop-filter` プロパティの `hue-rotate()` 関数に対応します。

これにより、要素自体には影響を与えずに、背景の色味を変化させることができます。

## 基本的な使い方とパラメータ

値は角度 (`deg`) で指定します。Tailwind は一般的な角度に対応するクラスを提供します。負の値 (`-backdrop-hue-rotate-*`) も利用可能です。

*   **`backdrop-hue-rotate-0`**: `backdrop-filter: hue-rotate(0deg);` (デフォルト、変化なし)
*   **`backdrop-hue-rotate-15`**: `backdrop-filter: hue-rotate(15deg);`
*   **`backdrop-hue-rotate-30`**: `backdrop-filter: hue-rotate(30deg);`
*   **`backdrop-hue-rotate-60`**: `backdrop-filter: hue-rotate(60deg);`
*   **`backdrop-hue-rotate-90`**: `backdrop-filter: hue-rotate(90deg);`
*   **`backdrop-hue-rotate-180`**: `backdrop-filter: hue-rotate(180deg);`
*   **`-backdrop-hue-rotate-180`** ～ **`-backdrop-hue-rotate-15`**: 負の角度で回転。

**注意:** 効果を確認するには、要素に**半透明の背景色** (`bg-opacity-*` または `bg-white/50` など) を設定する必要があります。

```html
<div class="relative h-48 p-4">
  {/* 背景要素 */}
  <img src="https://via.placeholder.com/400x200/3b82f6/ffffff?text=Background+Content" class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="Background">

  {/* 前景要素に backdrop-hue-rotate を適用 */}
  <div class="absolute inset-4 grid grid-cols-2 gap-4">
    <div class="backdrop-hue-rotate-60 bg-white/10 p-4 rounded-lg text-center shadow-lg">
      <p class="text-white font-semibold">Backdrop Hue Rotate 60</p>
    </div>
     <div class="backdrop-hue-rotate-180 bg-black/10 p-4 rounded-lg text-center shadow-lg">
      <p class="text-white font-semibold">Backdrop Hue Rotate 180</p>
    </div>
     <div class="-backdrop-hue-rotate-90 backdrop-blur-sm bg-white/5 p-4 rounded-lg text-center shadow-lg"> {/* 組み合わせ */}
      <p class="text-white font-semibold">Rotate -90 + Blur SM</p>
    </div>
     <div class="backdrop-hue-rotate-0 bg-white/10 p-4 rounded-lg text-center shadow-lg"> {/* Default */}
      <p class="text-white font-semibold">Backdrop Hue Rotate 0</p>
    </div>
  </div>
</div>
```

## フィルターの組み合わせ

`backdrop-hue-rotate-*` は、他の `backdrop-filter` ユーティリティ (例: `backdrop-blur-*`, `backdrop-contrast-*`) と組み合わせて使用できます。

```html
<div class="backdrop-hue-rotate-90 backdrop-brightness-125 bg-white/20 ...">
  Hue rotated and bright backdrop
</div>
```

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のためにハードウェアアクセラレーションが有効になることがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて背景の色相回転を変更できます。

```html
<div class="backdrop-hue-rotate-0 md:backdrop-hue-rotate-90 ...">
  Backdrop hue rotation changes on medium screens.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じて背景の色相回転を変更できます。

```html
<div class="backdrop-hue-rotate-0 hover:backdrop-hue-rotate-30 transition duration-300 ...">
  Backdrop hue rotates on hover.
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.backdropHueRotate` (または `theme.backdropHueRotate`) でカスタムの角度を追加できます。値は角度の文字列 (`'270deg'`) で指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backdropHueRotate: {
        '270': '270deg',
      },
    },
  },
}
```

```html
<div class="backdrop-hue-rotate-270 ...">Custom backdrop hue rotate 270deg</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って背景の色相回転角度を直接指定することも可能です。

```html
<div class="backdrop-hue-rotate-[120deg] ...">Arbitrary backdrop hue rotate 120deg</div>
<div class="-backdrop-hue-rotate-[22.5deg] ...">Negative arbitrary backdrop hue rotate</div>
```

## 注意点

*   `backdrop-filter` は比較的新しい CSS プロパティであり、ブラウザの互換性を確認してください。
*   効果を視覚的に確認するには、要素に**半透明の背景**が必要です。
*   `backdrop-filter` は計算負荷が高いため、パフォーマンスに注意してください。
*   背景の無彩色 (白、黒、グレー) 部分には効果がありません。

## 関連ユーティリティ

*   `hue-rotate`: 要素**自体**の色相を回転させます。
*   他の `backdrop-filter` ユーティリティ (`backdrop-blur`, `backdrop-brightness`, `backdrop-contrast`, `backdrop-grayscale`, `backdrop-invert`, `backdrop-opacity`, `backdrop-saturate`, `backdrop-sepia`)。
*   `backdrop-filter` (`backdrop-filter`, `backdrop-filter-none`): バックドロップフィルター効果の有効/無効を切り替えます。
*   `background-color` (`bg-*`, `bg-opacity-*`): 背景色と不透明度。

## 公式ドキュメント参照
*   [Tailwind CSS: Backdrop Hue Rotate](https://tailwindcss.com/docs/backdrop-hue-rotate)
*   [MDN: backdrop-filter: hue-rotate()](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#hue-rotate())
*   [Can I use: backdrop-filter](https://caniuse.com/css-backdrop-filter) (ブラウザサポート状況)
## タイトル
title: Filters: Backdrop Blur (背景のぼかし)

## タグ
tags: ["tailwindcss", "utilities", "filters", "backdrop-filter", "backdrop-blur", "blur", "effects", "ui", "glassmorphism"]

## 概要
`backdrop-blur-{amount}` ユーティリティは、要素の**背後にある領域**にぼかし (blur) フィルターを適用します。CSS の `backdrop-filter` プロパティの `blur()` 関数に対応します。

これにより、要素自体はぼかさずに、すりガラスのような効果や、モーダル、ドロップダウンメニューの背景を視覚的に分離する効果を作成できます。

## 基本的な使い方とパラメータ

値はキーワードで指定します。

*   **`backdrop-blur-none`**: `backdrop-filter: blur(0);` (ぼかしなし)
*   **`backdrop-blur-sm`**: `backdrop-filter: blur(4px);` (小さいぼかし)
*   **`backdrop-blur`**: `backdrop-filter: blur(8px);` (デフォルトのぼかし)
*   **`backdrop-blur-md`**: `backdrop-filter: blur(12px);`
*   **`backdrop-blur-lg`**: `backdrop-filter: blur(16px);`
*   **`backdrop-blur-xl`**: `backdrop-filter: blur(24px);`
*   **`backdrop-blur-2xl`**: `backdrop-filter: blur(40px);`
*   **`backdrop-blur-3xl`**: `backdrop-filter: blur(64px);` (大きいぼかし)

**注意:** 効果を確認するには、要素に**半透明の背景色** (`bg-opacity-*` または `bg-white/50` など) を設定する必要があります。完全に不透明な背景では、背後のぼかしが見えません。

```html
<div class="relative h-64 p-4">
  {/* 背景要素 */}
  <img src="https://via.placeholder.com/400x200/a3a3a3/ffffff?text=Background+Content" class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="Background">

  {/* 前景要素に backdrop-blur を適用 */}
  <div class="absolute inset-10 flex flex-col items-center justify-center space-y-4">
    <div class="backdrop-blur-sm bg-white/30 p-6 rounded-lg text-center shadow-lg">
      <p class="text-black font-semibold">Backdrop Blur SM</p>
      <p class="text-xs">(bg-white/30)</p>
    </div>
     <div class="backdrop-blur-lg bg-black/20 p-6 rounded-lg text-center shadow-lg">
      <p class="text-white font-semibold">Backdrop Blur LG</p>
       <p class="text-xs text-gray-200">(bg-black/20)</p>
    </div>
     <div class="backdrop-blur-none bg-red-500/50 p-6 rounded-lg text-center shadow-lg">
       <p class="text-white font-semibold">Backdrop Blur None</p>
       <p class="text-xs text-red-100">(bg-red-500/50)</p>
    </div>
  </div>
</div>
```

## フィルターの組み合わせ

`backdrop-blur-*` は、他の `backdrop-filter` ユーティリティ (例: `backdrop-brightness-*`, `backdrop-contrast-*`) と組み合わせて使用できます。

```html
<div class="backdrop-blur-md backdrop-saturate-150 bg-white/50 ...">
  Blurred and saturated backdrop
</div>
```
**注意:** `filter` ユーティリティ (`blur-*` など) と `backdrop-filter` ユーティリティ (`backdrop-blur-*` など) は**別々に適用**されます。`blur` は要素自体をぼかし、`backdrop-blur` は要素の背後をぼかします。

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のためにハードウェアアクセラレーションが有効になることがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて背景のぼかしを変更できます。

```html
<div class="backdrop-blur-none md:backdrop-blur-lg ...">
  Backdrop blur applied on medium screens and wider.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じて背景のぼかしを変更できます。

```html
<div class="backdrop-blur-sm hover:backdrop-blur-md transition duration-300 ...">
  Backdrop blur increases on hover.
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.backdropBlur` (または `theme.backdropBlur`) でカスタムのぼかし量を追加できます。値は `blur` と同様に `px`, `rem` などの単位を使用できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backdropBlur: {
        'xs': '2px',
        '4xl': '96px',
      },
    },
  },
}
```

```html
<div class="backdrop-blur-xs ...">Custom extra small backdrop blur</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って背景のぼかし量を直接指定することも可能です。

```html
<div class="backdrop-blur-[3px] ...">Arbitrary backdrop blur 3px</div>
```

## 注意点

*   `backdrop-filter` は比較的新しい CSS プロパティであり、すべてのブラウザで完全にサポートされているわけではありません (特に Firefox ではデフォルトで無効になっている場合があります)。使用する際はブラウザの互換性を確認してください。
*   効果を視覚的に確認するには、要素に**半透明の背景**が必要です。
*   `backdrop-filter` は計算負荷が高いため、多用したりアニメーションさせたりするとパフォーマンスに影響を与える可能性があります。

## 関連ユーティリティ

*   `blur`: 要素**自体**をぼかします。
*   他の `backdrop-filter` ユーティリティ (`backdrop-brightness`, `backdrop-contrast`, `backdrop-grayscale`, `backdrop-hue-rotate`, `backdrop-invert`, `backdrop-opacity`, `backdrop-saturate`, `backdrop-sepia`)。
*   `backdrop-filter` (`backdrop-filter`, `backdrop-filter-none`): バックドロップフィルター効果の有効/無効を切り替えます。
*   `background-color` (`bg-*`, `bg-opacity-*`): 背景色と不透明度。

## 公式ドキュメント参照
*   [Tailwind CSS: Backdrop Blur](https://tailwindcss.com/docs/backdrop-blur)
*   [MDN: backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
*   [Can I use: backdrop-filter](https://caniuse.com/css-backdrop-filter) (ブラウザサポート状況)
## タイトル
title: Filters: Blur (ぼかし)

## タグ
tags: ["tailwindcss", "utilities", "filters", "blur", "filter", "effects"]

## 概要
`blur-{amount}` ユーティリティは、要素にぼかし (blur) フィルターを適用します。CSS の `filter` プロパティの `blur()` 関数に対応します。

値が大きいほど、ぼかし効果が強くなります。

## 基本的な使い方とパラメータ

*   **`blur-none`**: `filter: blur(0);` (ぼかしなし)
*   **`blur-sm`**: `filter: blur(4px);` (小さいぼかし)
*   **`blur`**: `filter: blur(8px);` (デフォルトのぼかし)
*   **`blur-md`**: `filter: blur(12px);`
*   **`blur-lg`**: `filter: blur(16px);`
*   **`blur-xl`**: `filter: blur(24px);`
*   **`blur-2xl`**: `filter: blur(40px);`
*   **`blur-3xl`**: `filter: blur(64px);` (大きいぼかし)

```html
<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
  <img src="https://via.placeholder.com/150" alt="Original" class="blur-none rounded-lg">
  <img src="https://via.placeholder.com/150" alt="Blur SM" class="blur-sm rounded-lg">
  <img src="https://via.placeholder.com/150" alt="Blur" class="blur rounded-lg">
  <img src="https://via.placeholder.com/150" alt="Blur MD" class="blur-md rounded-lg">
  <img src="https://via.placeholder.com/150" alt="Blur LG" class="blur-lg rounded-lg">
  <img src="https://via.placeholder.com/150" alt="Blur XL" class="blur-xl rounded-lg">
  <img src="https://via.placeholder.com/150" alt="Blur 2XL" class="blur-2xl rounded-lg">
  <img src="https://via.placeholder.com/150" alt="Blur 3XL" class="blur-3xl rounded-lg">
</div>
```

## フィルターの組み合わせ

`blur-*` は、他の `filter` ユーティリティ (例: `brightness-*`, `contrast-*`, `grayscale`) と組み合わせて使用できます。複数のフィルターユーティリティを同じ要素に適用すると、CSS の `filter` プロパティに複数の関数がスペース区切りで追加されます。

```html
<img src="https://via.placeholder.com/150" alt="Blurred and Grayscale" class="blur-md grayscale rounded-lg">
```

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のために自動的にハードウェアアクセラレーションが有効になることがあります (要素が新しいコンポジットレイヤーに配置される)。これは、`transform` や `will-change` を適用した場合と同様の効果です。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてぼかしの強さを変更できます。

```html
<img src="..." alt="..." class="blur-sm md:blur-lg">
```

## 状態修飾子

`hover:`, `focus:`, `group-hover:` などと組み合わせて、インタラクションに応じてぼかし効果を適用または変更できます。モーダル表示時に背景をぼかす、画像ホバー時にぼかしを解除するなどのエフェクトに使われます。

```html
{/* 背景をぼかす例 */}
<div class="relative">
  <img src="..." alt="Background" class="blur-md">
  <div class="absolute inset-0 flex items-center justify-center">
    <p class="text-white text-2xl font-bold text-shadow">Foreground Text</p>
  </div>
</div>

{/* ホバーでぼかし解除 */}
<img src="..." alt="..." class="blur-sm hover:blur-none transition duration-300">
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.blur` (または `theme.blur`) でカスタムのぼかし量を追加できます。値には `px`, `rem` などの単位を使用できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      blur: {
        'xs': '2px',
        '4xl': '96px',
      },
    },
  },
}
```

```html
<img src="..." alt="..." class="blur-xs">
<img src="..." alt="..." class="blur-4xl">
```

## 任意の値 (Arbitrary Values)

任意の値を使ってぼかし量を直接指定することも可能です。

```html
<img src="..." alt="..." class="blur-[5px]">
<img src="..." alt="..." class="blur-[1.5rem]">
```

## 注意点

*   `blur` フィルターは要素全体とその内容に適用されます。
*   ぼかし効果は計算負荷が高いため、多用したりアニメーションさせたりするとパフォーマンスに影響を与える可能性があります。
*   要素の**背景のみ**をぼかしたい場合は、`backdrop-blur` ユーティリティを使用します。

## 関連ユーティリティ

*   `backdrop-blur`: 要素の背景にあるコンテンツをぼかします。
*   他の `filter` ユーティリティ (`brightness`, `contrast`, `grayscale`, `hue-rotate`, `invert`, `saturate`, `sepia`, `drop-shadow`)。

## 公式ドキュメント参照
*   [Tailwind CSS: Blur](https://tailwindcss.com/docs/blur)
*   [MDN: filter: blur()](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur)
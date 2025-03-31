## タイトル
title: Borders: Border Radius (角の丸み)

## タグ
tags: ["tailwindcss", "utilities", "borders", "border-radius", "rounded", "corners"]

## 概要
`rounded-{size}` ユーティリティは、要素の角の丸み (半径) を設定します。CSS の `border-radius` プロパティに対応します。

Tailwind は、`none` (角丸なし) から `full` (完全な円/楕円) まで、いくつかのサイズを提供します。また、特定の角だけを丸めるためのユーティリティも用意されています。

## 基本的な使い方とパラメータ

### すべての角 (`rounded-{size}`)

*   **`rounded-none`**: `border-radius: 0px;` (角丸なし)
*   **`rounded-sm`**: `border-radius: 0.125rem;` (2px)
*   **`rounded`**: `border-radius: 0.25rem;` (4px) (デフォルトのサイズ)
*   **`rounded-md`**: `border-radius: 0.375rem;` (6px)
*   **`rounded-lg`**: `border-radius: 0.5rem;` (8px)
*   **`rounded-xl`**: `border-radius: 0.75rem;` (12px)
*   **`rounded-2xl`**: `border-radius: 1rem;` (16px)
*   **`rounded-3xl`**: `border-radius: 1.5rem;` (24px)
*   **`rounded-full`**: `border-radius: 9999px;` (要素を円または楕円にする)

```html
<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
  <div class="rounded-none w-24 h-24 bg-blue-200 flex items-center justify-center text-xs">none</div>
  <div class="rounded-sm w-24 h-24 bg-blue-300 flex items-center justify-center text-xs">sm</div>
  <div class="rounded w-24 h-24 bg-blue-400 flex items-center justify-center text-xs">default</div>
  <div class="rounded-md w-24 h-24 bg-blue-500 flex items-center justify-center text-xs">md</div>
  <div class="rounded-lg w-24 h-24 bg-blue-600 text-white flex items-center justify-center text-xs">lg</div>
  <div class="rounded-xl w-24 h-24 bg-blue-700 text-white flex items-center justify-center text-xs">xl</div>
  <div class="rounded-2xl w-24 h-24 bg-blue-800 text-white flex items-center justify-center text-xs">2xl</div>
  <div class="rounded-3xl w-24 h-24 bg-blue-900 text-white flex items-center justify-center text-xs">3xl</div>
  <div class="rounded-full w-24 h-24 bg-pink-500 text-white flex items-center justify-center text-xs">full</div>
</div>
```

### 特定の辺 (`rounded-{t|r|b|l}-{size}`)

特定の辺に隣接する 2 つの角を丸めます。

*   `rounded-t-{size}`: 上の角 (Top-left, Top-right)
*   `rounded-r-{size}`: 右の角 (Top-right, Bottom-right)
*   `rounded-b-{size}`: 下の角 (Bottom-right, Bottom-left)
*   `rounded-l-{size}`: 左の角 (Top-left, Bottom-left)

サイズ (`sm`, `md`, `lg`, `full` など) を省略するとデフォルトの `rounded` サイズが適用されます。

```html
<div class="grid grid-cols-2 gap-4 p-4">
  <div class="rounded-t-lg w-32 h-24 bg-green-300 dark:bg-green-800 text-center pt-2">rounded-t-lg</div>
  <div class="rounded-b-2xl w-32 h-24 bg-green-400 dark:bg-green-700 text-center pt-2">rounded-b-2xl</div>
  <div class="rounded-l-full w-32 h-24 bg-green-500 dark:bg-green-600 text-center pt-2">rounded-l-full</div>
  <div class="rounded-r-md w-32 h-24 bg-green-600 dark:bg-green-500 text-center pt-2">rounded-r-md</div>
</div>
```

### 特定の角 (`rounded-{tl|tr|br|bl}-{size}`)

特定の 1 つの角だけを丸めます。

*   `rounded-tl-{size}`: 左上 (Top-left)
*   `rounded-tr-{size}`: 右上 (Top-right)
*   `rounded-br-{size}`: 右下 (Bottom-right)
*   `rounded-bl-{size}`: 左下 (Bottom-left)

サイズを省略するとデフォルトの `rounded` サイズが適用されます。

```html
<div class="grid grid-cols-2 gap-4 p-4">
  <div class="rounded-tl-xl rounded-br-xl w-32 h-24 bg-yellow-300 dark:bg-yellow-800 text-center pt-2">tl-xl, br-xl</div>
  <div class="rounded-tr-lg rounded-bl-lg w-32 h-24 bg-yellow-400 dark:bg-yellow-700 text-center pt-2">tr-lg, bl-lg</div>
  <div class="rounded-t-md rounded-bl-3xl w-32 h-24 bg-yellow-500 dark:bg-yellow-600 text-center pt-2">t-md, bl-3xl</div>
  <div class="rounded-full w-32 h-24 bg-yellow-600 dark:bg-yellow-500 text-center pt-2">rounded-full</div> {/* 参考 */}
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて角の丸みを変更できます。

```html
{/* デフォルトは角丸なし、md 以上で大きく丸める */}
<div class="rounded-none md:rounded-2xl ...">...</div>
```

## 状態修飾子

`hover:`, `focus:` などと組み合わせて、インタラクションに応じて角の丸みを変更することも可能です (ただし、アニメーションさせたい場合は注意が必要)。

```html
<button class="rounded-md hover:rounded-xl focus:rounded-lg transition-all ...">
  Rounded corners change on hover/focus
</button>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.borderRadius` (または `theme.borderRadius`) でカスタムの角丸サイズを追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem', // 32px
        '5xl': '2.5rem', // 40px
        'half': '50%',   // 常に高さ/幅の半分 (円/楕円とは異なる)
      },
    },
  },
}
```

```html
<div class="rounded-4xl ...">Custom 4xl radius</div>
<div class="w-40 h-20 rounded-half bg-red-200">rounded-half (50%)</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って角丸サイズを直接指定することも可能です。

```html
<div class="rounded-[10px] ...">Arbitrary radius 10px</div>
<div class="rounded-t-[1rem] rounded-b-[5px] ...">Different arbitrary radii</div>
```

## 注意点

*   要素に背景色やボーダーがない場合、角丸の効果は視覚的に現れません。
*   子要素が親要素の角丸からはみ出すのを防ぐには、親要素に `overflow-hidden` を適用する必要があります。

## 関連ユーティリティ

*   `border-width` (`border-*`): ボーダーの太さ。
*   `border-color` (`border-*`): ボーダーの色。
*   `border-style` (`border-*`): ボーダーの線種。
*   `overflow` (`overflow-hidden`): はみ出しの制御。

## 公式ドキュメント参照
*   [Tailwind CSS: Border Radius](https://tailwindcss.com/docs/border-radius)
*   [MDN: border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
## タイトル
title: Borders: Border Width (ボーダーの太さ)

## タグ
tags: ["tailwindcss", "utilities", "borders", "border-width", "border"]

## 概要
`border`, `border-{width}`, `border-{side}`, `border-{side}-{width}` ユーティリティは、要素のボーダー (枠線) の太さを設定します。CSS の `border-width`, `border-top-width`, `border-right-width`, `border-bottom-width`, `border-left-width` プロパティに対応します。

ボーダーを表示するには、通常、太さ (`border-*`) に加えて、色 (`border-{color}`) とスタイル (`border-solid` など、ただし `solid` はデフォルトの場合が多い) を指定する必要があります。

## 基本的な使い方とパラメータ

### すべての辺 (`border` または `border-{width}`)

*   **`border`**: `border-width: 1px;` を設定します。最も基本的なボーダーです。
*   **`border-0`**: `border-width: 0px;` (ボーダーなし)
*   **`border-2`**: `border-width: 2px;`
*   **`border-4`**: `border-width: 4px;`
*   **`border-8`**: `border-width: 8px;`

```html
<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
  <div class="border border-blue-500 p-4 rounded text-center">border (1px)</div>
  <div class="border-2 border-green-500 p-4 rounded text-center">border-2</div>
  <div class="border-4 border-red-500 p-4 rounded text-center">border-4</div>
  <div class="border-8 border-purple-500 p-4 rounded text-center">border-8</div>
  <div class="border-0 border-gray-500 p-4 rounded text-center bg-gray-100 dark:bg-gray-800">border-0 (No border)</div>
</div>
```
**注意:** 上記の例では、視覚的に確認しやすいように `border-{color}` も併せて指定しています。`border` や `border-2` だけでは、デフォルトのボーダー色 (通常は `currentColor` または黒) が適用されるため、背景色によっては見えにくい場合があります。

### 特定の辺 (`border-{t|r|b|l}` または `border-{t|r|b|l}-{width}`)

特定の辺のボーダー幅を設定します。

*   `border-t`, `border-r`, `border-b`, `border-l`: それぞれ上、右、下、左のボーダー幅を `1px` に設定します。
*   `border-t-{width}`, `border-r-{width}`, `border-b-{width}`, `border-l-{width}`: 特定の辺のボーダー幅を `0`, `2`, `4`, `8` px に設定します。

```html
<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
  <div class="border-t-4 border-blue-500 p-4 rounded text-center">border-t-4</div>
  <div class="border-r-4 border-green-500 p-4 rounded text-center">border-r-4</div>
  <div class="border-b-4 border-red-500 p-4 rounded text-center">border-b-4</div>
  <div class="border-l-4 border-purple-500 p-4 rounded text-center">border-l-4</div>
  <div class="border-t-2 border-b-4 border-yellow-500 p-4 rounded text-center">t-2, b-4</div>
  <div class="border-x-4 border-pink-500 p-4 rounded text-center">border-x-4 (left & right)</div> {/* border-x-* は後述 */}
  <div class="border-y-8 border-indigo-500 p-4 rounded text-center">border-y-8 (top & bottom)</div> {/* border-y-* は後述 */}
</div>
```

### 水平・垂直方向 (`border-x-{width}`, `border-y-{width}`)

*   **`border-x-{width}`**: 左右 (`border-left-width`, `border-right-width`) のボーダー幅を同時に設定します。
*   **`border-y-{width}`**: 上下 (`border-top-width`, `border-bottom-width`) のボーダー幅を同時に設定します。
*   `border-x`, `border-y`: それぞれ左右、上下のボーダー幅を `1px` に設定します。

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
  <div class="border-x-4 border-cyan-500 p-4 rounded text-center">border-x-4</div>
  <div class="border-y-4 border-teal-500 p-4 rounded text-center">border-y-4</div>
  <div class="border-x-2 border-y-8 border-orange-500 p-4 rounded text-center">x-2, y-8</div>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてボーダー幅を変更できます。

```html
{/* デフォルトはボーダーなし、md 以上で 2px ボーダー */}
<div class="border-0 md:border-2 border-gray-500 ...">...</div>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じてボーダー幅を変更することも可能です (レイアウトシフトに注意)。

```html
<button class="border-2 border-transparent hover:border-blue-500 focus:border-green-500 ...">
  Border appears on hover/focus
</button>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.borderWidth` (または `theme.borderWidth`) でカスタムのボーダー幅の値やキーを追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      borderWidth: {
        'DEFAULT': '1px', // `border` クラスのデフォルト値 (通常は変更不要)
        '3': '3px',
        '6': '6px',
        'px': '1px', // `border-px` クラスを追加 (デフォルトの `border` と同じだが明示的)
      },
    },
  },
}
```

```html
<div class="border-3 border-red-500 ...">Custom border width 3px</div>
<div class="border-px border-gray-400 ...">Explicit 1px border</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使ってボーダー幅を直接指定することも可能です。

```html
<div class="border-[3px] border-blue-500 ...">Arbitrary border width 3px</div>
<div class="border-t-[1.5px] border-b-[2.5px] border-green-500 ...">Arbitrary top/bottom width</div>
```

## 注意点

*   ボーダーを表示するには、通常、幅 (`border-*`)、色 (`border-{color}`), スタイル (`border-solid` など) の 3 つを指定する必要があります。ただし、`border-width` を 0 以外に設定すると、デフォルトで `border-style: solid` と `border-color: currentColor` (またはテーマで設定されたデフォルト色) が適用されることが多いです。
*   `box-sizing: border-box;` (Tailwind デフォルト) の場合、ボーダー幅は要素の `width`/`height` に含まれます。

## 関連ユーティリティ

*   `border-color`: ボーダーの色。
*   `border-style`: ボーダーの線種 (solid, dashed, dotted など)。
*   `divide-width`: **子要素の間**のボーダー幅。
*   `ring-width`: アウトラインのようなリングの太さ。

## 公式ドキュメント参照
*   [Tailwind CSS: Border Width](https://tailwindcss.com/docs/border-width)
*   [MDN: border-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)
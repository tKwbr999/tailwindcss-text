## タイトル
title: Spacing: Margin (マージン)

## タグ
tags: ["tailwindcss", "utilities", "spacing", "margin", "m", "mx", "my", "mt", "mr", "mb", "ml", "layout", "negative margin"]

## 概要
`m-*`, `mx-*`, `my-*`, `mt-*`, `mr-*`, `mb-*`, `ml-*` ユーティリティは、要素の**外側**の余白 (マージン) を設定します。CSS の `margin`, `margin-left`, `margin-right`, `margin-top`, `margin-bottom` プロパティに対応します。

値は通常、Tailwind の `theme.spacing` スケールに基づいており、`0`, `1`, `2`, `4`, `auto`, `px` などが含まれます。**負の値**も利用可能です。

## 基本的な使い方とパラメータ

### 全方向 (`m-{size}`)
要素の上下左右すべてに同じマージンを設定します。

*   `m-0`: `margin: 0px;`
*   `m-px`: `margin: 1px;`
*   `m-1`: `margin: 0.25rem;` (4px)
*   `m-4`: `margin: 1rem;` (16px)
*   `m-auto`: `margin: auto;` (ブロック要素の水平中央揃えなどに使用)
*   ...

```html
<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">
  <div class="m-4 p-2 bg-blue-200 dark:bg-blue-900/30 border dark:border-blue-700 rounded">
    m-4 (1rem margin on all sides)
  </div>
  <div class="m-8 p-2 bg-blue-300 dark:bg-blue-800/30 border dark:border-blue-600 rounded">
    m-8 (2rem margin on all sides)
  </div>
</div>
```

### 水平方向 (`mx-{size}`)
左右 (`margin-left` と `margin-right`) に同じマージンを設定します。

*   `mx-auto`: `margin-left: auto; margin-right: auto;` (ブロック要素の水平中央揃えに頻用)

```html
<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">
  <div class="mx-auto w-48 p-2 bg-green-200 dark:bg-green-900/30 border dark:border-green-700 rounded text-center">
    mx-auto (centered)
  </div>
  <div class="mx-12 my-4 p-2 bg-green-300 dark:bg-green-800/30 border dark:border-green-600 rounded">
    mx-12 (3rem margin left & right), my-4
  </div>
</div>
```

### 垂直方向 (`my-{size}`)
上下 (`margin-top` と `margin-bottom`) に同じマージンを設定します。

```html
<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">
  <div class="my-6 p-2 bg-yellow-100 dark:bg-yellow-800/30 border dark:border-yellow-700 rounded">
    my-6 (1.5rem margin top & bottom)
  </div>
   <div class="my-2 p-2 bg-yellow-200 dark:bg-yellow-700/30 border dark:border-yellow-600 rounded">
    my-2 (0.5rem margin top & bottom)
  </div>
</div>
```

### 個別方向 (`mt-*`, `mr-*`, `mb-*`, `ml-*`)
特定の方向のマージンを設定します。

*   `mt-{size}`: `margin-top`
*   `mr-{size}`: `margin-right`
*   `mb-{size}`: `margin-bottom`
*   `ml-{size}`: `margin-left`

```html
<div class="mt-6 mb-2 ml-10 mr-4 p-2 bg-purple-100 dark:bg-purple-900/30 border dark:border-purple-700 rounded">
  mt-6, mb-2, ml-10, mr-4
</div>
```

### 負のマージン (`-m-*`, `-mx-*`, etc.)
プレフィックスとしてハイフン `-` を付けることで、負のマージンを設定できます。要素を重ねたり、親要素のパディングを打ち消したりするのに使われます。

```html
<div class="flex bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-hidden">
  <div class="p-4 bg-red-300 dark:bg-red-800 rounded z-10">Element 1</div>
  {/* Element 2 を左にずらして重ねる */}
  <div class="-ml-8 p-4 bg-red-400 dark:bg-red-700 rounded shadow-lg">Element 2 (-ml-8)</div>
</div>

<div class="bg-gray-200 dark:bg-gray-700 p-8 rounded mt-4">
  {/* 親のパディングを打ち消して端まで広げる */}
  <div class="-mx-8 px-8 py-4 bg-indigo-200 dark:bg-indigo-900">Full-width inside padded parent</div>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてマージンを変更できます。

```html
{/* デフォルトは m-4、md 以上で m-8 */}
<div class="m-4 md:m-8 ...">...</div>

{/* モバイルではマージンなし、lg 以上で左右にマージン auto (中央揃え) */}
<div class="w-full lg:mx-auto lg:max-w-3xl ...">...</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.margin` (または `theme.margin`) で、`theme.spacing` スケールに基づいてカスタムのマージン値を追加できます。`margin` は `spacing` スケールを継承するため、通常は `theme.extend.spacing` で定義した値が `m-*` などでも利用可能になります。負の値のキーも定義できます (例: `'-13': '-3.25rem'`)。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '72': '18rem',
      },
      // margin 固有のキーを追加することも可能
      // margin: {
      //   'section': '5rem',
      // }
    },
  },
}
```

```html
<div class="m-13 bg-teal-100 rounded">Custom margin m-13 (3.25rem)</div>
<div class="-m-13 bg-teal-200 rounded">Negative custom margin -m-13</div>
{/* <div class="mt-section ...">Custom Section Margin</div> */}
```

## 任意の値 (Arbitrary Values)

任意の値を使ってマージンを直接指定することも可能です。負の値も指定できます。

```html
<div class="m-[17px] bg-orange-100 rounded">Arbitrary margin m-[17px]</div>
<div class="mt-[-3px] ml-[10%] bg-cyan-100 rounded">Arbitrary negative/percentage margin</div>
```

## 注意点

*   マージンは要素の**外側**のスペースです。
*   隣接するブロック要素の**垂直マージン**は、通常「相殺 (collapse)」されます。つまり、上の要素の `mb-4` と下の要素の `mt-6` がある場合、間のスペースは `1rem + 1.5rem = 2.5rem` ではなく、大きい方の `1.5rem` (`mt-6`) になります。Flexbox や Grid コンテナ内のアイテム、または `display: flow-root` など新しいブロック整形コンテキストを作成する要素では、マージンの相殺は発生しません。
*   `mx-auto` による水平中央揃えは、要素がブロックレベル要素であり、かつ幅 (`width`) が指定されている場合にのみ機能します。

## 関連ユーティリティ

*   `padding` (`p-*`, `px-*`, `py-*`, ...): 要素の**内側**の余白。
*   `space-between` (`space-x-*`, `space-y-*`): Flexbox/Grid アイテム間のスペース (マージンベース)。
*   `gap`: Flexbox/Grid アイテム間の溝。

## 公式ドキュメント参照
*   [Tailwind CSS: Margin](https://tailwindcss.com/docs/margin)
*   [MDN: margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
*   [MDN: Mastering margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
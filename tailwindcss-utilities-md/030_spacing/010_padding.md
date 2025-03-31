## タイトル
title: Spacing: Padding (パディング)

## タグ
tags: ["tailwindcss", "utilities", "spacing", "padding", "p", "px", "py", "pt", "pr", "pb", "pl", "layout"]

## 概要
`p-*`, `px-*`, `py-*`, `pt-*`, `pr-*`, `pb-*`, `pl-*` ユーティリティは、要素の**内側**の余白 (パディング) を設定します。CSS の `padding`, `padding-left`, `padding-right`, `padding-top`, `padding-bottom` プロパティに対応します。

値は通常、Tailwind の `theme.spacing` スケールに基づいており、`0`, `1`, `2`, `4`, `px` (1px) などが含まれます。

## 基本的な使い方とパラメータ

### 全方向 (`p-{size}`)
要素の上下左右すべてに同じパディングを設定します。

*   `p-0`: `padding: 0px;`
*   `p-px`: `padding: 1px;`
*   `p-0.5`: `padding: 0.125rem;` (2px)
*   `p-1`: `padding: 0.25rem;` (4px)
*   `p-2`: `padding: 0.5rem;` (8px)
*   `p-4`: `padding: 1rem;` (16px)
*   ... (値が大きいほどパディングも大きくなる)

```html
<div class="p-4 bg-blue-100 dark:bg-blue-900/30 border dark:border-blue-700 rounded">
  p-4 (1rem padding on all sides)
</div>
```

### 水平方向 (`px-{size}`)
左右 (`padding-left` と `padding-right`) に同じパディングを設定します。

```html
<div class="px-8 py-2 bg-green-100 dark:bg-green-900/30 border dark:border-green-700 rounded">
  px-8 (2rem padding left & right), py-2 (0.5rem padding top & bottom)
</div>
```

### 垂直方向 (`py-{size}`)
上下 (`padding-top` と `padding-bottom`) に同じパディングを設定します。

```html
<div class="px-4 py-6 bg-yellow-100 dark:bg-yellow-800/30 border dark:border-yellow-700 rounded">
  py-6 (1.5rem padding top & bottom), px-4 (1rem padding left & right)
</div>
```

### 個別方向 (`pt-*`, `pr-*`, `pb-*`, `pl-*`)
特定の方向のパディングを設定します。

*   `pt-{size}`: `padding-top`
*   `pr-{size}`: `padding-right`
*   `pb-{size}`: `padding-bottom`
*   `pl-{size}`: `padding-left`

```html
<div class="pt-6 pb-2 pl-10 pr-4 bg-purple-100 dark:bg-purple-900/30 border dark:border-purple-700 rounded">
  pt-6, pb-2, pl-10, pr-4
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてパディングを変更できます。

```html
{/* デフォルトは p-4、md 以上で p-8 */}
<div class="p-4 md:p-8 bg-indigo-100 dark:bg-indigo-900/30 rounded">
  Padding changes on medium screens and wider.
</div>
```

## 状態修飾子

`hover:`, `focus:` などと組み合わせて、特定の状態でパディングを変更することも可能です (ただし、レイアウトシフトを引き起こす可能性があるため注意が必要です)。

```html
<button class="p-2 hover:p-3 bg-red-500 text-white rounded transition-all">
  Padding increases on hover
</button>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.padding` (または `theme.padding`) で、`theme.spacing` スケールに基づいてカスタムのパディング値を追加できます。`padding` は `spacing` スケールを継承するため、通常は `theme.extend.spacing` で定義した値が `p-*` などでも利用可能になります。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: { // spacing を拡張すると padding でも使える
        '13': '3.25rem',
        '72': '18rem',
      },
      // padding 固有のキーを追加することも可能
      // padding: {
      //   'button-x': '1.5rem',
      // }
    },
  },
}
```

```html
<div class="p-13 bg-teal-100 rounded">Custom padding p-13 (3.25rem)</div>
{/* <button class="px-button-x py-2 ...">Custom Button Padding</button> */}
```

## 任意の値 (Arbitrary Values)

任意の値を使ってパディングを直接指定することも可能です。

```html
<div class="p-[13px] bg-orange-100 rounded">Arbitrary padding p-[13px]</div>
<div class="px-[calc(10%+1rem)] py-[5vh] bg-cyan-100 rounded">Arbitrary complex padding</div>
```

## 注意点

*   パディングは要素の**内側**のスペースであり、要素の**コンテンツ**と**ボーダー**の間に適用されます。
*   `box-sizing: border-box;` (Tailwind のデフォルト) の場合、パディングを追加しても要素の**外側の寸法** (width/height で指定したサイズ) は通常変わりません。コンテンツ領域がその分狭くなります。
*   `box-sizing: content-box;` の場合、パディングを追加すると要素の**外側の寸法**が大きくなります。

## 関連ユーティリティ

*   `margin` (`m-*`, `mx-*`, `my-*`, ...): 要素の**外側**の余白。
*   `space-between` (`space-x-*`, `space-y-*`): Flexbox/Grid アイテム間のスペース (マージンベース)。
*   `gap`: Flexbox/Grid アイテム間の溝。

## 公式ドキュメント参照
*   [Tailwind CSS: Padding](https://tailwindcss.com/docs/padding)
*   [MDN: padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
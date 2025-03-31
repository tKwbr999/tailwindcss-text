## タイトル
title: Spacing: Space Between (アイテム間のスペース)

## タグ
tags: ["tailwindcss", "utilities", "spacing", "space-between", "space-x", "space-y", "flexbox", "grid", "margin", "layout"]

## 概要
`space-x-{amount}` および `space-y-{amount}` ユーティリティは、Flexbox、Grid、または他のコンテナ内の**隣接する子要素の間**に均等なスペースを追加します。これは、最初の子要素を除くすべての子要素にマージン (`margin-left` または `margin-top`) を追加することで実現されます。

`gap-*` ユーティリティがより新しく、多くの場合推奨されますが、`space-*` は特定の場合や古いブラウザの互換性のために依然として有用です。

## 基本的な使い方とパラメータ

値は通常、Tailwind の `theme.spacing` スケール (`0`, `1`, `2`, `4`, `px`, etc.) を使用します。負の値も利用可能です。

*   **`space-x-{amount}`**: 隣接する**水平方向**のアイテム間に `margin-left` を追加します (最初のアイテムを除く)。`flex-direction: row` (デフォルト) の場合に主に使用されます。
*   **`space-y-{amount}`**: 隣接する**垂直方向**のアイテム間に `margin-top` を追加します (最初のアイテムを除く)。`flex-direction: column` の場合や、通常のブロック要素の縦積みに使用されます。
*   **`space-x-reverse`**, **`space-y-reverse`**: アイテムの順序が逆 (`flex-row-reverse`, `flex-col-reverse`) の場合に、マージンを適用する方向を反転させます (`margin-right` または `margin-bottom` を使用)。

```html
<div class="space-y-8 p-4">

  {/* space-x: 水平方向のスペース */}
  <div>
    <p class="text-sm mb-1">space-x-4</p>
    <div class="flex flex-row space-x-4 p-2 bg-gray-100 dark:bg-gray-800 rounded">
      <div class="p-4 rounded bg-blue-300 dark:bg-blue-800">1</div> {/* margin-left なし */}
      <div class="p-4 rounded bg-blue-400 dark:bg-blue-700">2</div> {/* margin-left: 1rem */}
      <div class="p-4 rounded bg-blue-500 dark:bg-blue-600">3</div> {/* margin-left: 1rem */}
    </div>
  </div>

  {/* space-y: 垂直方向のスペース */}
  <div>
    <p class="text-sm mb-1">space-y-2</p>
    <div class="flex flex-col space-y-2 p-2 bg-gray-100 dark:bg-gray-800 rounded w-32">
      <div class="p-4 rounded bg-green-300 dark:bg-green-800">1</div> {/* margin-top なし */}
      <div class="p-4 rounded bg-green-400 dark:bg-green-700">2</div> {/* margin-top: 0.5rem */}
      <div class="p-4 rounded bg-green-500 dark:bg-green-600">3</div> {/* margin-top: 0.5rem */}
    </div>
  </div>

  {/* space-x-reverse */}
   <div>
    <p class="text-sm mb-1">flex-row-reverse space-x-4 space-x-reverse</p>
    <div class="flex flex-row-reverse space-x-4 space-x-reverse p-2 bg-gray-100 dark:bg-gray-800 rounded">
      <div class="p-4 rounded bg-yellow-300 dark:bg-yellow-800">1</div> {/* margin-right なし */}
      <div class="p-4 rounded bg-yellow-400 dark:bg-yellow-700">2</div> {/* margin-right: 1rem */}
      <div class="p-4 rounded bg-yellow-500 dark:bg-yellow-600">3</div> {/* margin-right: 1rem */}
    </div>
  </div>

  {/* 負のスペース (要素を重ねる) */}
   <div>
    <p class="text-sm mb-1">Negative space (-space-x-4)</p>
    <div class="flex flex-row -space-x-4 p-2 bg-gray-100 dark:bg-gray-800 rounded">
      <div class="w-16 h-16 rounded-full bg-red-300 border-2 border-white dark:border-gray-900"></div> {/* margin-left なし */}
      <div class="w-16 h-16 rounded-full bg-red-400 border-2 border-white dark:border-gray-900"></div> {/* margin-left: -1rem */}
      <div class="w-16 h-16 rounded-full bg-red-500 border-2 border-white dark:border-gray-900"></div> {/* margin-left: -1rem */}
    </div>
  </div>

</div>
```

## `gap` との違い

*   **適用対象:** `space-*` はコンテナ要素に適用し、**隣接する子要素の間**にマージンを追加します。`gap-*` は Flexbox または Grid コンテナに適用し、アイテム間の**溝 (gutter)** を設定します。
*   **実装:** `space-*` はマージン (`margin-left` または `margin-top`) を使います。`gap-*` は CSS の `gap` プロパティを使います。
*   **端のスペース:** `space-*` はコンテナの端 (最初の子要素の前、最後の子要素の後) にはスペースを追加しません。`gap-*` も同様に端には適用されません。
*   **折り返し (`flex-wrap`):** `space-x-*` は水平方向の間隔のみを追加するため、折り返した際の**行間のスペースは制御できません**。一方、`gap-*` は行間 (`row-gap`) と列間 (`column-gap`) の両方を制御できるため、折り返しのある Flexbox レイアウトでは `gap-*` の方が適しています。
*   **互換性:** `space-*` はマージンに基づいているため、すべてのブラウザで動作します。`gap` は比較的新しいプロパティですが、現代的なブラウザでは広くサポートされています。

**推奨:**
*   **Grid レイアウトでは常に `gap-*` を使用します。**
*   **Flexbox レイアウトでも、アイテム間に均等なスペースが必要な場合は `gap-*` を優先的に使用します。** 特に `flex-wrap` と組み合わせる場合に便利です。
*   Flexbox で折り返しがなく、単純に隣接アイテム間にスペースを追加したい場合や、`gap` が使えない環境では `space-*` を使用します。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてアイテム間のスペースを変更できます。

```html
{/* デフォルトは space-y-4、md 以上で space-y-8 */}
<div class="flex flex-col space-y-4 md:space-y-8 ...">
  {/* ... items ... */}
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.space` (または `theme.space`) で、`theme.spacing` スケールに基づいてカスタムのスペース値を追加できます。負の値のキーも定義できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: { // spacing を拡張すると space でも使える
        '13': '3.25rem',
      },
      // space 固有のキーを追加することも可能
      // space: {
      //   'widget': '1.75rem',
      // }
    },
  },
}
```

```html
<div class="flex space-x-13 ...">...</div>
<div class="flex flex-col -space-y-13 ...">...</div>
{/* <div class="flex space-x-widget ...">...</div> */}
```

## 任意の値 (Arbitrary Values)

任意の値を使ってスペースを直接指定することも可能です。負の値も指定できます。

```html
<div class="flex space-x-[1.1rem] ...">...</div>
<div class="flex flex-col space-y-[-3px] ...">...</div>
```

## 注意点

*   `space-*` ユーティリティは、直接の子要素セレクタ (`> * + *`) を使ってマージンを適用します。そのため、コンテナ内に他のラッパー要素などがあると期待通りに動作しない場合があります。
*   マージンの相殺 (margin collapsing) は `space-y-*` には影響しません (Flex/Grid アイテム間では発生しないため)。通常のブロック要素に `space-y-*` を適用した場合も、`margin-top` のみが追加されるため相殺は起こりにくいです。

## 関連ユーティリティ

*   `margin` (`m-*`, `mx-*`, `my-*`, ...): 個々の要素の外側の余白。
*   `padding` (`p-*`, `px-*`, `py-*`, ...): 要素の内側の余白。
*   `gap`: Flexbox/Grid アイテム間の溝。

## 公式ドキュメント参照
*   [Tailwind CSS: Space Between](https://tailwindcss.com/docs/space)
*   [MDN: margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
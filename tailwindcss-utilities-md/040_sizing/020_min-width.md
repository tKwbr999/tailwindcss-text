## タイトル
title: Sizing: Min-Width (最小幅)

## タグ
tags: ["tailwindcss", "utilities", "sizing", "min-width", "min-w", "responsive", "layout"]

## 概要
`min-w-{size}` ユーティリティは、要素の最小幅を設定します。CSS の `min-width` プロパティに対応します。これにより、要素が特定の幅よりも小さくならないように保証できます。Flex アイテムが縮小 (`shrink`) する際の下限としても機能します。

## 基本的な使い方とパラメータ

値は通常、キーワードまたは Tailwind の `theme.spacing` スケールに対応するキーを使用します。

*   **`min-w-0`**: `min-width: 0px;`
*   **`min-w-full`**: `min-width: 100%;`
*   **`min-w-min`**: `min-width: min-content;` (内容が折り返さない最小の幅)
*   **`min-w-max`**: `min-width: max-content;` (内容が収まる最大の幅、折り返さない)
*   **`min-w-fit`**: `min-width: fit-content;` (内容に合わせて伸縮する最小幅)
*   **`min-w-{spacing}`**: (v3.0 以降) `theme.spacing` スケールの値を使って固定の最小幅を指定します (例: `min-w-64` は `16rem`)。

```html
<div class="space-y-4 p-4">

  {/* 固定の最小幅 */}
  <div>
    <p class="text-sm mb-1">min-w-64 (16rem / 256px)</p>
    <div class="min-w-64 w-1/2 p-4 bg-blue-200 dark:bg-blue-900/30 rounded border dark:border-blue-700">
      Width is 50% (w-1/2), but won't shrink below 16rem. (Resize window)
    </div>
  </div>

  {/* コンテンツに基づく最小幅 */}
  <div class="flex space-x-4">
    <div class="min-w-min p-4 bg-green-200 dark:bg-green-900/30 rounded border dark:border-green-700 whitespace-nowrap">
      min-w-min (fits this text)
    </div>
     <div class="min-w-max p-4 bg-yellow-200 dark:bg-yellow-800/30 rounded border dark:border-yellow-700 whitespace-nowrap">
      min-w-max (fits this longer text without wrapping)
    </div>
     <div class="min-w-fit p-4 bg-purple-200 dark:bg-purple-900/30 rounded border dark:border-purple-700">
      min-w-fit (fits content)
    </div>
  </div>

  {/* Flex アイテムの縮小防止 */}
  <div>
    <p class="text-sm mb-1">Flex item with min-w-0 (can shrink fully)</p>
    <div class="flex w-64 border rounded dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
      <div class="min-w-0 flex-1 p-2 bg-red-300 dark:bg-red-800 rounded">Flex item 1 (min-w-0)</div>
      <div class="flex-1 p-2 bg-red-400 dark:bg-red-700 rounded">Flex item 2</div>
    </div>
     <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">
      Flex アイテムはデフォルトで `min-width: auto` が設定されているため、コンテンツ幅以下には縮小しません。完全に縮小させたい場合は `min-w-0` が必要です。
    </p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて最小幅を変更できます。

```html
{/* デフォルトは最小幅なし、md 以上で最小幅 32rem */}
<div class="min-w-0 md:min-w-[32rem] ...">
  Content area
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.minWidth` (または `theme.minWidth`) でカスタムの最小幅の値を追加できます。デフォルトでは `theme.spacing` スケールは継承しないため、固定値やパーセンテージ、キーワード (`min-content` など) を直接指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      minWidth: {
        'xs': '20rem', // 320px
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        'screen-sm': '640px', // 固定ピクセル値
        '1/2': '50%',        // パーセンテージ
      },
    },
  },
}
```

```html
<div class="min-w-sm ...">Minimum width of 24rem</div>
<div class="min-w-1/2 ...">Minimum width of 50%</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って最小幅を直接指定することも可能です。

```html
<div class="min-w-[250px] ...">...</div>
<div class="min-w-[calc(100%_-_4rem)] ...">...</div>
```

## 注意点

*   `min-width` は要素がそれ以上縮小しないようにする下限を設定します。`width` で指定された値よりも優先される場合があります (例: `w-1/4` でも `min-w-64` があれば、64rem より小さくならない)。
*   Flex アイテムはデフォルトで `min-width: auto` (またはコンテンツ幅) を持つため、コンテナが狭くなってもコンテンツがはみ出すことがあります。アイテムをコンテナ幅に合わせて完全に縮小させたい場合は、アイテムに `min-w-0` を明示的に設定する必要があります。

## 関連ユーティリティ

*   `width` (`w-*`): 要素の幅。
*   `max-width` (`max-w-*`): 要素の最大幅。
*   `flex-shrink` (`shrink`): Flex アイテムの縮小係数。

## 公式ドキュメント参照
*   [Tailwind CSS: Min-Width](https://tailwindcss.com/docs/min-width)
*   [MDN: min-width](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
## タイトル
title: Sizing: Min-Height (最小高さ)

## タグ
tags: ["tailwindcss", "utilities", "sizing", "min-height", "min-h", "responsive", "layout"]

## 概要
`min-h-{size}` ユーティリティは、要素の最小高さを設定します。CSS の `min-height` プロパティに対応します。これにより、要素が特定の高さよりも低くならないように保証できます。コンテンツが少ない場合でも最低限の高さを確保したい場合などに使用します。

## 基本的な使い方とパラメータ

値は通常、キーワード、Tailwind の `theme.spacing` スケール、または `screen` (ビューポート高さ) を使用します。

*   **`min-h-0`**: `min-height: 0px;`
*   **`min-h-full`**: `min-height: 100%;` (親要素の高さに依存)
*   **`min-h-screen`**: `min-height: 100vh;` (ビューポートの高さ)
*   **`min-h-min`**: `min-height: min-content;` (内容が収まる最小の高さ)
*   **`min-h-max`**: `min-height: max-content;` (内容が収まる最大の高さ)
*   **`min-h-fit`**: `min-height: fit-content;` (内容に合わせて伸縮する最小高さ)
*   **`min-h-{spacing}`**: (v3.0 以降) `theme.spacing` スケールの値を使って固定の最小高さを指定します (例: `min-h-32` は `8rem`)。

```html
<div class="space-y-4 p-4">

  {/* 固定の最小高さ */}
  <div>
    <p class="text-sm mb-1">min-h-32 (8rem / 128px)</p>
    <div class="min-h-32 p-4 bg-blue-200 dark:bg-blue-900/30 rounded border dark:border-blue-700">
      Content might be short, but the element's height won't go below 8rem.
    </div>
  </div>

  {/* ビューポート高さ */}
  <div>
    <p class="text-sm mb-1">min-h-screen</p>
    <div class="min-h-screen p-4 bg-green-200 dark:bg-green-900/30 rounded border dark:border-green-700 flex items-center justify-center">
      This element will always be at least the height of the viewport. (Used for sticky footers etc.)
    </div>
  </div>

  {/* 親要素の高さに依存 */}
   <div class="h-48 bg-gray-200 dark:bg-gray-700 p-1 rounded"> {/* 親に高さが必要 */}
     <p class="text-xs mb-1">Parent (h-48)</p>
     <div class="min-h-full p-4 bg-yellow-200 dark:bg-yellow-800/30 rounded border dark:border-yellow-700">
       min-h-full (takes at least the parent's height)
     </div>
   </div>

   {/* コンテンツに基づく最小高さ */}
   <div class="flex space-x-4">
     <div class="min-h-min p-4 bg-purple-200 dark:bg-purple-900/30 rounded border dark:border-purple-700 w-24">min-h-min fits content</div>
     <div class="min-h-max p-4 bg-purple-300 dark:bg-purple-800/30 rounded border dark:border-purple-600 w-24">min-h-max fits tallest possible content line</div>
     <div class="min-h-fit p-4 bg-purple-400 dark:bg-purple-700/30 rounded border dark:border-purple-500 w-24">min-h-fit</div>
   </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて最小高さを変更できます。

```html
{/* デフォルトは最小高さなし、md 以上で最小高さ screen */}
<div class="min-h-0 md:min-h-screen ...">
  Full screen height on medium screens and wider.
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.minHeight` (または `theme.minHeight`) でカスタムの最小高さの値を追加できます。デフォルトでは `theme.spacing` スケールは継承しないため、固定値、パーセンテージ、キーワード、ビューポート単位などを直接指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      minHeight: {
        '1/2': '50%',        // 親要素の 50%
        'svh': '100svh',     // Small viewport height
        'lvh': '100lvh',     // Large viewport height
        'dvh': '100dvh',     // Dynamic viewport height
        '64': '16rem',       // 固定値 (spacing と同じキーでも定義可能)
      },
    },
  },
}
```

```html
<div class="h-64"> {/* 親要素 */}
  <div class="min-h-1/2 bg-indigo-200 p-2 rounded">min-h-1/2</div>
</div>
<div class="min-h-svh bg-indigo-300 p-2 rounded mt-2">min-h-svh</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って最小高さを直接指定することも可能です。

```html
<div class="min-h-[300px] ...">...</div>
<div class="min-h-[50vh] ...">...</div>
<div class="min-h-[var(--header-height)] ...">...</div>
```

## 注意点

*   `min-height` は要素がそれ以上**低くならない**ようにする下限を設定します。要素の実際の高さは、コンテンツや `height` プロパティによってこれより大きくなる可能性があります。
*   パーセンテージ (`min-h-full` など) は、**親要素に高さが明示的に指定されている**場合にのみ期待通りに機能します。
*   `min-h-screen` はビューポートの高さを基準とするため、スティッキーフッターレイアウトなどでよく使用されます。`svh`, `lvh`, `dvh` などの新しいビューポート単位も任意の値やカスタマイズで利用可能です。

## 関連ユーティリティ

*   `height` (`h-*`): 要素の高さ。
*   `max-height` (`max-h-*`): 要素の最大高さ。
*   `width` (`w-*`), `min-width` (`min-w-*`), `max-width` (`max-w-*`): 幅関連のサイジング。

## 公式ドキュメント参照
*   [Tailwind CSS: Min-Height](https://tailwindcss.com/docs/min-height)
*   [MDN: min-height](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height)
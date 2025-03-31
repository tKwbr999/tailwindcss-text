## タイトル
title: Sizing: Max-Height (最大高さ)

## タグ
tags: ["tailwindcss", "utilities", "sizing", "max-height", "max-h", "responsive", "layout", "overflow"]

## 概要
`max-h-{size}` ユーティリティは、要素の最大高さを設定します。CSS の `max-height` プロパティに対応します。これにより、要素が特定の高さよりも大きくならないように制限できます。コンテンツの量に関わらず高さを一定以下に保ち、必要に応じてスクロールさせたい場合などに使用します。

## 基本的な使い方とパラメータ

値は通常、キーワード、Tailwind の `theme.spacing` スケール、割合、または `screen` (ビューポート高さ) を使用します。

*   **`max-h-0`**: `max-height: 0px;`
*   **`max-h-px`**: `max-height: 1px;`
*   **`max-h-none`**: `max-height: none;` (最大高さの制限なし)
*   **`max-h-full`**: `max-height: 100%;` (親要素の高さに依存)
*   **`max-h-screen`**: `max-height: 100vh;` (ビューポートの高さ)
*   **`max-h-min`**: `max-height: min-content;` (内容が収まる最小の高さ)
*   **`max-h-max`**: `max-height: max-content;` (内容が収まる最大の高さ)
*   **`max-h-fit`**: `max-height: fit-content;` (内容に合わせて伸縮する最大高さ)
*   **`max-h-{spacing}`**: `theme.spacing` スケールの値を使って固定の最大高さを指定します (例: `max-h-96` は `24rem`)。

```html
<div class="space-y-4 p-4">

  {/* 固定の最大高さ */}
  <div>
    <p class="text-sm mb-1">max-h-32 (8rem / 128px) with overflow-auto</p>
    <div class="max-h-32 overflow-auto p-4 bg-blue-200 dark:bg-blue-900/30 rounded border dark:border-blue-700">
      This content is quite long and will likely exceed the maximum height of 8rem.
      Since overflow-auto is applied, a scrollbar will appear when the content overflows.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </div>

  {/* 最大高さ制限なし */}
  <div>
    <p class="text-sm mb-1">max-h-none (No limit)</p>
    <div class="max-h-none p-4 bg-green-200 dark:bg-green-900/30 rounded border dark:border-green-700">
      This element has no maximum height restriction. It will grow as tall as its content needs.
      <br>Line 2<br>Line 3
    </div>
  </div>

  {/* ビューポート高さ */}
   <div>
    <p class="text-sm mb-1">max-h-screen</p>
    <div class="max-h-screen overflow-auto p-4 bg-yellow-200 dark:bg-yellow-800/30 rounded border dark:border-yellow-700">
      The height of this element is limited to the viewport height (100vh). If content exceeds this, it will scroll.
      <div class="h-[120vh]">Simulated content taller than viewport</div>
    </div>
  </div>

   {/* 親要素の高さに依存 */}
   <div class="h-48 bg-gray-200 dark:bg-gray-700 p-1 rounded"> {/* 親に高さが必要 */}
     <p class="text-xs mb-1">Parent (h-48)</p>
     <div class="max-h-full overflow-auto p-4 bg-purple-200 dark:bg-purple-900/30 rounded border dark:border-purple-700 h-64"> {/* h-64 > 親の h-48 */}
       max-h-full limits height to parent's height (h-48). Content overflows and scrolls.
       <br>Line 2<br>Line 3<br>Line 4<br>Line 5<br>Line 6<br>Line 7<br>Line 8
     </div>
   </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて最大高さを変更できます。

```html
{/* デフォルトは max-h-64、md 以上で最大高さ制限なし */}
<div class="max-h-64 md:max-h-none overflow-auto ...">
  Content might scroll on small screens.
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.maxHeight` (または `theme.maxHeight`) でカスタムの最大高さの値を追加できます。デフォルトでは `theme.spacing` スケールは継承しないため、固定値、パーセンテージ、キーワード、ビューポート単位などを直接指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      maxHeight: {
        '1/2': '50%',        // 親要素の 50%
        'svh': '100svh',     // Small viewport height
        'lvh': '100lvh',     // Large viewport height
        'dvh': '100dvh',     // Dynamic viewport height
        '128': '32rem',      // 固定値 (spacing と同じキーでも定義可能)
      },
    },
  },
}
```

```html
<div class="h-96"> {/* 親要素 */}
  <div class="max-h-1/2 overflow-auto ...">Max height is 50% of parent</div>
</div>
<div class="max-h-dvh overflow-auto ...">Max height is dynamic viewport height</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って最大高さを直接指定することも可能です。

```html
<div class="max-h-[500px] overflow-auto ...">...</div>
<div class="max-h-[75vh] overflow-auto ...">...</div>
```

## 注意点

*   `max-height` は要素がそれ以上**高くならない**ようにする上限を設定します。要素の実際の高さは、コンテンツや `height` プロパティによってこれより小さくなる可能性があります。
*   `max-height` を設定した場合、コンテンツがその高さを超えるとデフォルトでははみ出して表示されます。通常は `overflow-auto` や `overflow-hidden` を併用して、はみ出したコンテンツの処理方法を指定します。
*   パーセンテージ (`max-h-full` など) は、**親要素に高さが明示的に指定されている**場合にのみ期待通りに機能します。

## 関連ユーティリティ

*   `height` (`h-*`): 要素の高さ。
*   `min-height` (`min-h-*`): 要素の最小高さ。
*   `overflow` (`overflow-*`): コンテンツがはみ出した場合の処理。
*   `width` (`w-*`), `min-width` (`min-w-*`), `max-width` (`max-w-*`): 幅関連のサイジング。

## 公式ドキュメント参照
*   [Tailwind CSS: Max-Height](https://tailwindcss.com/docs/max-height)
*   [MDN: max-height](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
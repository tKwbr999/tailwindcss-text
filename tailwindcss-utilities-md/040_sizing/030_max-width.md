## タイトル
title: Sizing: Max-Width (最大幅)

## タグ
tags: ["tailwindcss", "utilities", "sizing", "max-width", "max-w", "responsive", "layout", "container"]

## 概要
`max-w-{size}` ユーティリティは、要素の最大幅を設定します。CSS の `max-width` プロパティに対応します。これにより、要素が特定の幅よりも大きくならないように制限できます。テキストコンテンツの行長を読みやすい長さに制限したり、大きな画面で要素が広がりすぎるのを防いだりするのに役立ちます。

## 基本的な使い方とパラメータ

値は通常、キーワード、Tailwind の `theme.spacing` スケール、割合、またはブレークポイント名に対応するサイズを使用します。

*   **`max-w-0`**: `max-width: 0rem;`
*   **`max-w-none`**: `max-width: none;` (最大幅の制限なし)
*   **`max-w-xs`**: `max-width: 20rem;` (320px)
*   **`max-w-sm`**: `max-width: 24rem;` (384px)
*   **`max-w-md`**: `max-width: 28rem;` (448px)
*   **`max-w-lg`**: `max-width: 32rem;` (512px)
*   **`max-w-xl`**: `max-width: 36rem;` (576px)
*   **`max-w-2xl`** ～ **`max-w-7xl`**: さらに大きな固定幅。
*   **`max-w-full`**: `max-width: 100%;` (親要素の幅を超えない)
*   **`max-w-min`**: `max-width: min-content;` (内容が折り返さない最小の幅)
*   **`max-w-max`**: `max-width: max-content;` (内容が収まる最大の幅、折り返さない)
*   **`max-w-fit`**: `max-width: fit-content;` (内容に合わせて伸縮する最大幅)
*   **`max-w-prose`**: `max-width: 65ch;` (約 65 文字分の幅。読みやすいテキスト幅の目安)
*   **`max-w-screen-sm`**: `max-width: 640px;` (sm ブレークポイントと同じ幅)
*   **`max-w-screen-md`**: `max-width: 768px;` (md ブレークポイントと同じ幅)
*   **`max-w-screen-lg`**, **`max-w-screen-xl`**, **`max-w-screen-2xl`**: 対応するブレークポイントと同じ幅。

```html
<div class="space-y-4 p-4">

  {/* 固定の最大幅 */}
  <div>
    <p class="text-sm mb-1">max-w-md (28rem / 448px)</p>
    <div class="max-w-md mx-auto p-4 bg-blue-200 dark:bg-blue-900/30 rounded border dark:border-blue-700">
      This container's width is limited to 28rem. It will center because of mx-auto. Lorem ipsum dolor sit amet...
    </div>
  </div>

  {/* 親要素に対する最大幅 */}
  <div class="w-full bg-gray-200 dark:bg-gray-700 p-1 rounded">
    <div class="max-w-full p-2 bg-green-300 dark:bg-green-800/30 rounded mb-1">max-w-full (100% of parent)</div>
    {/* max-w-xs は親が広くても 20rem を超えない */}
    <div class="max-w-xs p-2 bg-green-400 dark:bg-green-700/30 rounded">max-w-xs (20rem)</div>
  </div>

  {/* コンテンツに基づく最大幅 */}
  <div class="space-y-2">
    <div class="max-w-min p-2 bg-yellow-200 dark:bg-yellow-800/30 rounded border dark:border-yellow-700 inline-block">max-w-min</div>
    <br>
    <div class="max-w-max p-2 bg-yellow-300 dark:bg-yellow-700/30 rounded border dark:border-yellow-600 inline-block">max-w-max (fits this longer content)</div>
    <br>
    <div class="max-w-fit p-2 bg-yellow-400 dark:bg-yellow-600/30 rounded border dark:border-yellow-500 inline-block">max-w-fit</div>
  </div>

  {/* テキストの読みやすさ (prose) */}
   <div>
    <p class="text-sm mb-1">max-w-prose (approx 65 characters)</p>
    <p class="max-w-prose mx-auto text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>

  {/* スクリーン幅に基づく最大幅 */}
  <div>
    <p class="text-sm mb-1">max-w-screen-md (768px)</p>
    <div class="max-w-screen-md mx-auto p-4 bg-purple-200 dark:bg-purple-900/30 rounded border dark:border-purple-700">
      This container's max-width matches the 'md' breakpoint.
    </div>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて最大幅を変更できます。これは、大きな画面でのレイアウト崩れを防ぐために非常によく使われます。

```html
{/* デフォルトは全幅、lg 以上で最大幅 5xl */}
<div class="w-full lg:max-w-5xl mx-auto ...">
  Content centered and width-limited on large screens.
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.maxWidth` (または `theme.maxWidth`) でカスタムの最大幅の値を追加できます。`theme.spacing`, `theme.screens` スケールやパーセンテージ、キーワードなどを値として使用できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      maxWidth: {
        '8xl': '88rem', // 1408px
        '1/2': '50%',   // 親要素の 50%
        'container-sm': '640px', // 意味的な名前付け
      },
    },
  },
}
```

```html
<div class="max-w-8xl mx-auto ...">...</div>
<div class="max-w-1/2 ...">...</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って最大幅を直接指定することも可能です。

```html
<div class="max-w-[900px] mx-auto ...">...</div>
<div class="max-w-[80ch] mx-auto ...">...</div> {/* 文字数ベース */}
```

## 注意点

*   `max-width` は要素がそれ以上**大きくならない**ようにする上限を設定します。要素の実際の幅は、コンテンツや利用可能なスペース、`width` プロパティなどによって決まりますが、`max-width` を超えることはありません。
*   `max-w-prose` は、ラテン文字ベースのフォントで約 65 文字が収まる幅 (`65ch`) を目安としています。日本語のような全角文字が多い場合は、意図した文字数にならない可能性があります。
*   `max-w-screen-*` は、`theme.screens` の設定に依存します。

## 関連ユーティリティ

*   `width` (`w-*`): 要素の幅。
*   `min-width` (`min-w-*`): 要素の最小幅。
*   `container`: ブレークポイントに基づいた `max-width` と中央揃えを提供します。

## 公式ドキュメント参照
*   [Tailwind CSS: Max-Width](https://tailwindcss.com/docs/max-width)
*   [MDN: max-width](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
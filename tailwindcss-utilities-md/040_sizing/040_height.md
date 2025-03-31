## タイトル
title: Sizing: Height (高さ)

## タグ
tags: ["tailwindcss", "utilities", "sizing", "height", "h", "responsive", "layout"]

## 概要
`h-{size}` ユーティリティは、要素の高さを設定します。CSS の `height` プロパティに対応します。

値は、Tailwind のデフォルト設定では、スペーシングスケール (`0`, `1`, `4`, `px` など)、割合 (`1/2`, `full` など)、固定サイズキーワード (`auto`, `min`, `max`, `fit`)、およびビューポート単位 (`screen`) を使用できます。

## 基本的な使い方とパラメータ

### 固定高さ (Spacing Scale)
`theme.spacing` スケールに基づいた固定の高さを指定します。

*   `h-0`: `height: 0px;`
*   `h-px`: `height: 1px;`
*   `h-0.5`: `height: 0.125rem;` (2px)
*   `h-4`: `height: 1rem;` (16px)
*   `h-64`: `height: 16rem;` (256px)
*   ...

```html
<div class="flex items-start space-x-2">
  <div class="h-16 p-2 bg-blue-200 dark:bg-blue-900/30 rounded">h-16 (4rem / 64px)</div>
  <div class="h-24 p-2 bg-blue-300 dark:bg-blue-800/30 rounded">h-24 (6rem / 96px)</div>
  <div class="h-32 p-2 bg-blue-400 dark:bg-blue-700/30 rounded">h-32 (8rem / 128px)</div>
</div>
```

### 割合 (Percentage)
親要素の高さに対する割合で指定します。**親要素に高さが指定されていないと効果がない**場合が多いことに注意してください。

*   `h-1/2`: `height: 50%;`
*   `h-1/3`: `height: 33.333333%;`
*   `h-2/3`: `height: 66.666667%;`
*   `h-1/4`, `h-2/4` (`h-1/2`), `h-3/4`
*   `h-1/5`, `h-2/5`, `h-3/5`, `h-4/5`
*   `h-1/6`, `h-5/6`
*   `h-full`: `height: 100%;` (親要素の高さに合わせる)
*   `h-screen`: `height: 100vh;` (ビューポートの高さ)

```html
<div class="h-48 bg-gray-200 dark:bg-gray-700 rounded p-1"> {/* 親要素に高さ h-48 を指定 */}
  <div class="h-1/2 p-2 bg-green-300 dark:bg-green-800/30 rounded mb-1">h-1/2</div>
  <div class="h-1/3 p-2 bg-green-400 dark:bg-green-700/30 rounded mb-1">h-1/3</div>
  <div class="h-full p-2 bg-green-500 dark:bg-green-600/30 rounded">h-full (親の高さ)</div>
</div>
<div class="h-screen bg-red-500 text-white p-2 mt-2">h-screen (ビューポートの高さ)</div>
```

### キーワード
*   `h-auto`: `height: auto;` (ブラウザのデフォルト。通常はコンテンツの高さ)
*   `h-min`: `height: min-content;` (内容が収まる最小の高さ)
*   `h-max`: `height: max-content;` (内容が収まる最大の高さ)
*   `h-fit`: `height: fit-content;` (内容に合わせて伸縮するが、利用可能な最大高さを超えない)

```html
<div class="flex items-start space-x-2">
  <div class="h-auto w-24 p-2 bg-yellow-200 dark:bg-yellow-800/30 rounded border dark:border-yellow-700">h-auto fits content height</div>
  <div class="h-min w-24 p-2 bg-yellow-300 dark:bg-yellow-700/30 rounded border dark:border-yellow-600">h-min</div>
  <div class="h-max w-24 p-2 bg-yellow-400 dark:bg-yellow-600/30 rounded border dark:border-yellow-500">h-max fits the tallest content</div>
  <div class="h-fit w-24 p-2 bg-yellow-500 dark:bg-yellow-500/30 rounded border dark:border-yellow-400">h-fit</div>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて高さを変更できます。

```html
{/* デフォルトは h-32、md 以上で h-64 */}
<div class="h-32 md:h-64 bg-purple-200 dark:bg-purple-900/30 p-4 rounded">
  Responsive Height
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.height` (または `theme.height`) でカスタムの高さの値を追加できます。`theme.spacing` スケールを継承しているため、`spacing` で定義した値も `h-*` で使用可能です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: { // spacing を拡張すると height でも使える
        '128': '32rem',
      },
      height: { // height 固有のキーも追加可能
        '1/7': '14.2857143%',
        '112': '28rem', // 448px
        'screen/2': '50vh', // ビューポート高さの半分
      }
    },
  },
}
```

```html
<div class="h-128 bg-indigo-200 p-2 rounded">h-128 (from spacing)</div>
<div class="h-112 bg-indigo-300 p-2 rounded mt-2">h-112 (from height)</div>
<div class="h-screen/2 bg-indigo-400 p-2 rounded mt-2">h-screen/2 (50vh)</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って高さを直接指定することも可能です。

```html
<div class="h-[300px] bg-pink-200 p-2 rounded">h-[300px]</div>
<div class="h-[calc(100%_-_2rem)] bg-pink-300 p-2 rounded mt-2">h-[calc(100%_-_2rem)]</div>
<div class="h-[var(--custom-height)] bg-pink-400 p-2 rounded mt-2">h-[var(--custom-height)]</div>
```

## 注意点

*   高さの計算は `box-sizing` プロパティの影響を受けます。Tailwind のデフォルト (`box-border`) では、指定した高さにパディングとボーダーが含まれます。
*   パーセンテージ (`h-1/2`, `h-full` など) は、**親要素に高さが明示的に指定されている**場合にのみ期待通りに機能します。親要素の高さがコンテンツ依存 (`height: auto;`) の場合、パーセンテージ高さは通常効果がありません。`h-screen` は例外で、常にビューポートの高さを基準にします。
*   `h-min`, `h-max`, `h-fit` は比較的新しい CSS の値であり、ブラウザのサポート状況を確認してください。

## 関連ユーティリティ

*   `min-height` (`min-h-*`): 要素の最小高さ。
*   `max-height` (`max-h-*`): 要素の最大高さ。
*   `width` (`w-*`): 要素の幅。
*   `size` (`size-*`): 幅と高さを同時に設定するショートハンド (v3.3+)。
*   `box-sizing`: 幅と高さの計算方法。

## 公式ドキュメント参照
*   [Tailwind CSS: Height](https://tailwindcss.com/docs/height)
*   [MDN: height](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
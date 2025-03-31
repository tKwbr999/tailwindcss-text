## タイトル
title: Sizing: Width (幅)

## タグ
tags: ["tailwindcss", "utilities", "sizing", "width", "w", "responsive", "layout"]

## 概要
`w-{size}` ユーティリティは、要素の幅を設定します。CSS の `width` プロパティに対応します。

値は、Tailwind のデフォルト設定では、スペーシングスケール (`0`, `1`, `4`, `px` など)、割合 (`1/2`, `1/3`, `full` など)、固定サイズキーワード (`auto`, `min`, `max`, `fit`)、およびビューポート単位 (`screen`) を使用できます。

## 基本的な使い方とパラメータ

### 固定幅 (Spacing Scale)
`theme.spacing` スケールに基づいた固定幅を指定します。

*   `w-0`: `width: 0px;`
*   `w-px`: `width: 1px;`
*   `w-0.5`: `width: 0.125rem;` (2px)
*   `w-4`: `width: 1rem;` (16px)
*   `w-64`: `width: 16rem;` (256px)
*   ...

```html
<div class="space-y-2">
  <div class="w-32 p-2 bg-blue-200 dark:bg-blue-900/30 rounded">w-32 (8rem / 128px)</div>
  <div class="w-64 p-2 bg-blue-300 dark:bg-blue-800/30 rounded">w-64 (16rem / 256px)</div>
  <div class="w-96 p-2 bg-blue-400 dark:bg-blue-700/30 rounded">w-96 (24rem / 384px)</div>
</div>
```

### 割合 (Percentage)
親要素の幅に対する割合で指定します。

*   `w-1/2`: `width: 50%;`
*   `w-1/3`: `width: 33.333333%;`
*   `w-2/3`: `width: 66.666667%;`
*   `w-1/4`, `w-2/4` (`w-1/2`), `w-3/4`
*   `w-1/5`, `w-2/5`, `w-3/5`, `w-4/5`
*   `w-1/6`, `w-5/6`
*   `w-1/12`, `w-5/12`, `w-7/12`, `w-11/12`
*   `w-full`: `width: 100%;`
*   `w-screen`: `width: 100vw;` (ビューポート幅)

```html
<div class="w-full bg-gray-200 dark:bg-gray-700 rounded p-1">
  <div class="w-1/2 p-2 bg-green-300 dark:bg-green-800/30 rounded mb-1">w-1/2</div>
  <div class="w-2/3 p-2 bg-green-400 dark:bg-green-700/30 rounded mb-1">w-2/3</div>
  <div class="w-full p-2 bg-green-500 dark:bg-green-600/30 rounded">w-full</div>
</div>
<div class="w-screen bg-red-500 text-white p-2 mt-2">w-screen (ビューポート幅)</div>
```

### キーワード
*   `w-auto`: `width: auto;` (ブラウザのデフォルト。通常はコンテンツ幅)
*   `w-min`: `width: min-content;` (内容が折り返さない最小の幅)
*   `w-max`: `width: max-content;` (内容が収まる最大の幅、折り返さない)
*   `w-fit`: `width: fit-content;` (内容に合わせて伸縮するが、利用可能な最大幅を超えない)

```html
<div class="space-y-2">
  <div class="w-auto inline-block p-2 bg-yellow-200 dark:bg-yellow-800/30 rounded border dark:border-yellow-700">w-auto (fits content)</div>
  <div class="w-min p-2 bg-yellow-300 dark:bg-yellow-700/30 rounded border dark:border-yellow-600">w-min (min content width)</div>
  <div class="w-max p-2 bg-yellow-400 dark:bg-yellow-600/30 rounded border dark:border-yellow-500 whitespace-nowrap">w-max (max content width, no wrap)</div>
  <div class="w-fit p-2 bg-yellow-500 dark:bg-yellow-500/30 rounded border dark:border-yellow-400">w-fit (fits content up to available width)</div>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて幅を変更できます。

```html
{/* デフォルトは全幅、md 以上で 1/2 幅 */}
<div class="w-full md:w-1/2 bg-purple-200 dark:bg-purple-900/30 p-4 rounded">
  Responsive Width
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.width` (または `theme.width`) でカスタムの幅の値を追加できます。`theme.spacing` スケールを継承しているため、`spacing` で定義した値も `w-*` で使用可能です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: { // spacing を拡張すると width でも使える
        '128': '32rem',
      },
      width: { // width 固有のキーも追加可能
        '1/7': '14.2857143%',
        '120': '30rem', // 480px
      }
    },
  },
}
```

```html
<div class="w-128 bg-indigo-200 p-2 rounded">w-128 (from spacing)</div>
<div class="w-1/7 bg-indigo-300 p-2 rounded mt-2">w-1/7 (from width)</div>
<div class="w-120 bg-indigo-400 p-2 rounded mt-2">w-120 (from width)</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って幅を直接指定することも可能です。

```html
<div class="w-[300px] bg-pink-200 p-2 rounded">w-[300px]</div>
<div class="w-[calc(100%_-_2rem)] bg-pink-300 p-2 rounded mt-2">w-[calc(100%_-_2rem)]</div>
<div class="w-[var(--custom-width)] bg-pink-400 p-2 rounded mt-2">w-[var(--custom-width)]</div>
```

## 注意点

*   幅の計算は `box-sizing` プロパティの影響を受けます。Tailwind のデフォルト (`box-border`) では、指定した幅にパディングとボーダーが含まれます。
*   パーセンテージ (`w-1/2` など) は、親要素の幅に対する割合です。親要素に幅が適切に設定されていないと期待通りに動作しない場合があります。
*   `w-screen` はビューポート全体の幅を指定するため、スクロールバーの幅を含まず、意図しない水平スクロールが発生する可能性があります。通常は `w-full` を使用します。

## 関連ユーティリティ

*   `min-width` (`min-w-*`): 要素の最小幅。
*   `max-width` (`max-w-*`): 要素の最大幅。
*   `height` (`h-*`): 要素の高さ。
*   `size` (`size-*`): 幅と高さを同時に設定するショートハンド (v3.3+)。
*   `box-sizing`: 幅と高さの計算方法。

## 公式ドキュメント参照
*   [Tailwind CSS: Width](https://tailwindcss.com/docs/width)
*   [MDN: width](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
## タイトル
title: Borders: Divide Style (要素間のボーダースタイル)

## タグ
tags: ["tailwindcss", "utilities", "borders", "divide-style", "divide", "solid", "dashed", "dotted", "double", "none", "separator"]

## 概要
`divide-{style}` ユーティリティは、`divide-x-*` または `divide-y-*` ユーティリティで作成された要素間の区切り線のスタイル (線種) を設定します。CSS の `border-style` プロパティを、特定の子要素セレクタ (`> * + *`) を介して適用します。

ボーダーを表示するには、通常、スタイル (`divide-solid` など) に加えて、太さ (`divide-x` など) と色 (`divide-{color}`) を指定する必要があります。

## 基本的な使い方とパラメータ

*   **`divide-solid`**: 実線の区切り線 (`border-style: solid;`)。`divide-width` が 0 以外の場合のデフォルトに近い挙動です。
*   **`divide-dashed`**: 破線の区切り線 (`border-style: dashed;`)。
*   **`divide-dotted`**: 点線の区切り線 (`border-style: dotted;`)。
*   **`divide-double`**: 二重線の区切り線 (`border-style: double;`)。`divide-width` が 3px 以上ないと効果が見えにくい場合があります。
*   **`divide-none`**: 区切り線を表示しません (`border-style: none;`)。

```html
<div class="space-y-4 p-4">

  {/* 水平方向の区切りスタイル */}
  <div>
    <p class="text-sm mb-1">Horizontal Divide Styles</p>
    <div class="flex divide-x-2 divide-gray-400 dark:divide-gray-600 bg-gray-100 dark:bg-gray-800 rounded p-2 mb-2 divide-solid">
      <div class="px-4 py-2">Solid (Default-like)</div> <div class="px-4 py-2">Solid</div>
    </div>
    <div class="flex divide-x-2 divide-gray-400 dark:divide-gray-600 bg-gray-100 dark:bg-gray-800 rounded p-2 mb-2 divide-dashed">
      <div class="px-4 py-2">Dashed</div> <div class="px-4 py-2">Dashed</div>
    </div>
    <div class="flex divide-x-2 divide-gray-400 dark:divide-gray-600 bg-gray-100 dark:bg-gray-800 rounded p-2 mb-2 divide-dotted">
      <div class="px-4 py-2">Dotted</div> <div class="px-4 py-2">Dotted</div>
    </div>
    <div class="flex divide-x-4 divide-gray-400 dark:divide-gray-600 bg-gray-100 dark:bg-gray-800 rounded p-2 mb-2 divide-double"> {/* divide-x-4 で太く */}
      <div class="px-4 py-2">Double</div> <div class="px-4 py-2">Double</div>
    </div>
     <div class="flex divide-x-2 divide-gray-400 dark:divide-gray-600 bg-gray-100 dark:bg-gray-800 rounded p-2 divide-none">
      <div class="px-4 py-2">None</div> <div class="px-4 py-2">None (No divider)</div>
    </div>
  </div>

  {/* 垂直方向の区切りスタイル */}
  <div>
    <p class="text-sm mb-1">Vertical Divide Styles</p>
    <div class="flex flex-col divide-y-2 divide-blue-400 bg-gray-100 dark:bg-gray-800 rounded p-2 w-48 divide-dashed">
      <div class="py-2 px-4">Dashed A</div>
      <div class="py-2 px-4">Dashed B</div>
      <div class="py-2 px-4">Dashed C</div>
    </div>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて区切り線のスタイルを変更できます。

```html
<div class="flex divide-x divide-dotted md:divide-solid ...">
  {/* モバイルでは点線、md 以上で実線 */}
</div>
```

## 状態修飾子

`dark:` 修飾子と組み合わせて、ダークモード時に区切り線のスタイルを変更できます。`hover:` や `focus:` などは、コンテナ要素に適用するため、直接的なインタラクションでのスタイル変更は通常行いません。

```html
<div class="flex divide-x divide-solid dark:divide-dashed ...">
  {/* ライトモードでは実線、ダークモードでは破線 */}
</div>
```

## カスタマイズ (`tailwind.config.js`)

Tailwind のデフォルト設定には、`divide-style` のためのカスタマイズオプションは含まれていません。カスタムの線スタイル (例: `groove`, `ridge`) をユーティリティとして追加したい場合は、プラグインを作成するか、CSS で直接定義する必要があります。

## 注意点

*   `divide-{style}` ユーティリティは、`divide-x` または `divide-y` (または `divide-*-{width}`) がコンテナ要素に適用されていないと効果がありません。
*   区切り線の太さは `divide-{width}`、色は `divide-{color}` で制御します。
*   `divide-double` が見えるためには、`divide-width` が少なくとも `3px` (例: `divide-x-4`) 必要です。
*   `divide-none` は `divide-width` が設定されていても線が表示されなくなります。

## 関連ユーティリティ

*   `divide-width`: 区切り線の太さ。
*   `divide-color`: 区切り線の色。
*   `border-style`: 要素自身のボーダーの線種。
*   `outline-style`: アウトラインの線種。

## 公式ドキュメント参照
*   [Tailwind CSS: Divide Style](https://tailwindcss.com/docs/divide-style)
*   [MDN: border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style) (内部的には border-left/top-style を使用)
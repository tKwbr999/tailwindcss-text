## タイトル
title: Backgrounds: Background Position (背景画像の位置)

## タグ
tags: ["tailwindcss", "utilities", "backgrounds", "background-position", "bg-position", "image", "layout"]

## 概要
`bg-{position}` ユーティリティは、要素の背景画像の初期位置を設定します。CSS の `background-position` プロパティに対応します。

値は通常、キーワード (例: `top`, `center`, `bottom`, `left`, `right`) の組み合わせで指定します。

## 基本的な使い方とパラメータ

*   **`bg-bottom`**: `background-position: bottom;` (下端中央)
*   **`bg-center`**: `background-position: center;` (中央)
*   **`bg-left`**: `background-position: left;` (左端中央)
*   **`bg-left-bottom`**: `background-position: left bottom;` (左下)
*   **`bg-left-top`**: `background-position: left top;` (左上)
*   **`bg-right`**: `background-position: right;` (右端中央)
*   **`bg-right-bottom`**: `background-position: right bottom;` (右下)
*   **`bg-right-top`**: `background-position: right top;` (右上)
*   **`bg-top`**: `background-position: top;` (上端中央)

```html
<div class="grid grid-cols-3 gap-4 p-4">

  <div class="text-center">
    <p class="text-sm mb-1">bg-left-top</p>
    <div class="h-32 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-no-repeat bg-left-top" style="background-image: url('https://via.placeholder.com/80/3b82f6/ffffff?text=BG')"></div>
  </div>

  <div class="text-center">
    <p class="text-sm mb-1">bg-top</p>
    <div class="h-32 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-no-repeat bg-top" style="background-image: url('https://via.placeholder.com/80/3b82f6/ffffff?text=BG')"></div>
  </div>

   <div class="text-center">
    <p class="text-sm mb-1">bg-right-top</p>
    <div class="h-32 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-no-repeat bg-right-top" style="background-image: url('https://via.placeholder.com/80/3b82f6/ffffff?text=BG')"></div>
  </div>

   <div class="text-center">
    <p class="text-sm mb-1">bg-left</p>
    <div class="h-32 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-no-repeat bg-left" style="background-image: url('https://via.placeholder.com/80/3b82f6/ffffff?text=BG')"></div>
  </div>

   <div class="text-center">
    <p class="text-sm mb-1">bg-center (Default)</p>
    <div class="h-32 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-no-repeat bg-center" style="background-image: url('https://via.placeholder.com/80/3b82f6/ffffff?text=BG')"></div>
  </div>

   <div class="text-center">
    <p class="text-sm mb-1">bg-right</p>
    <div class="h-32 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-no-repeat bg-right" style="background-image: url('https://via.placeholder.com/80/3b82f6/ffffff?text=BG')"></div>
  </div>

   <div class="text-center">
    <p class="text-sm mb-1">bg-left-bottom</p>
    <div class="h-32 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-no-repeat bg-left-bottom" style="background-image: url('https://via.placeholder.com/80/3b82f6/ffffff?text=BG')"></div>
  </div>

   <div class="text-center">
    <p class="text-sm mb-1">bg-bottom</p>
    <div class="h-32 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-no-repeat bg-bottom" style="background-image: url('https://via.placeholder.com/80/3b82f6/ffffff?text=BG')"></div>
  </div>

   <div class="text-center">
    <p class="text-sm mb-1">bg-right-bottom</p>
    <div class="h-32 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-no-repeat bg-right-bottom" style="background-image: url('https://via.placeholder.com/80/3b82f6/ffffff?text=BG')"></div>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて背景画像の位置を変更できます。

```html
<div class="bg-center md:bg-top ..." style="background-image: url(...)">
  {/* モバイルでは中央、md 以上で上端に配置 */}
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.backgroundPosition` (または `theme.backgroundPosition`) でカスタムの位置キーワードを追加できます。値には CSS の `background-position` プロパティで有効な値を文字列で指定します (例: `'50% 75%'`, `'top 10px right 20px'`)。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundPosition: {
        'center-bottom-5': 'center bottom 1.25rem', // 下から 1.25rem の中央
        'top-4': 'center top 1rem', // 上から 1rem の中央 (既存の top とは異なる)
      },
    },
  },
}
```

```html
<div class="bg-center-bottom-5 ..." style="background-image: url(...)"></div>
<div class="bg-top-4 ..." style="background-image: url(...)"></div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って背景画像の位置を直接指定することも可能です。

```html
<div class="bg-[center_top_1rem] ..." style="background-image: url(...)"></div>
<div class="bg-[25%_75%] ..." style="background-image: url(...)"></div>
```

## 注意点

*   これらのユーティリティは、要素に背景画像 (`bg-image`, `bg-gradient-*` など) が設定されている場合にのみ効果があります。
*   背景画像の原点 (どのボックスを基準に配置するか) は `background-origin` (`bg-origin-*`) ユーティリティで制御します。
*   背景画像のサイズは `background-size` (`bg-cover`, `bg-contain` など) で制御します。
*   背景画像の繰り返しは `background-repeat` (`bg-no-repeat`, `bg-repeat` など) で制御します。

## 関連ユーティリティ

*   `background-image` (`bg-gradient-*` など): 背景画像。
*   `background-origin`: 背景画像の原点。
*   `background-size`: 背景画像のサイズ。
*   `background-repeat`: 背景画像の繰り返し。
*   `background-attachment`: 背景画像の固定方法。

## 公式ドキュメント参照
*   [Tailwind CSS: Background Position](https://tailwindcss.com/docs/background-position)
*   [MDN: background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
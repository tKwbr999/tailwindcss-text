## タイトル
title: Backgrounds: Background Repeat (背景画像の繰り返し)

## タグ
tags: ["tailwindcss", "utilities", "backgrounds", "background-repeat", "bg-repeat", "repeat", "no-repeat", "repeat-x", "repeat-y", "round", "space", "image"]

## 概要
`bg-repeat`, `bg-no-repeat`, `bg-repeat-x`, `bg-repeat-y`, `bg-repeat-round`, `bg-repeat-space` ユーティリティは、要素の背景画像がどのように繰り返されるかを制御します。CSS の `background-repeat` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`bg-repeat`**: デフォルト。背景画像を水平・垂直両方向に繰り返します (`background-repeat: repeat;`)。
*   **`bg-no-repeat`**: 背景画像を繰り返しません (`background-repeat: no-repeat;`)。画像は一度だけ描画されます。
*   **`bg-repeat-x`**: 背景画像を水平方向にのみ繰り返します (`background-repeat: repeat-x;`)。
*   **`bg-repeat-y`**: 背景画像を垂直方向にのみ繰り返します (`background-repeat: repeat-y;`)。
*   **`bg-repeat-round`**: 背景画像を、画像が切り取られないようにスペースを調整しながら繰り返します (`background-repeat: round;`)。画像のサイズが調整されることがあります。
*   **`bg-repeat-space`**: 背景画像を、画像が切り取られないように、かつ画像間に均等なスペースを入れて繰り返します (`background-repeat: space;`)。画像のサイズは変更されません。

```html
{/* 画像 URL (例) */}
<% let imageUrl = "https://via.placeholder.com/60x40/3b82f6/ffffff?text=Tile"; %>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">

  <div class="space-y-1">
    <p class="text-sm font-medium">bg-repeat (Default)</p>
    <div class="h-40 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-repeat" style="background-image: url('<%= imageUrl %>')"></div>
  </div>

  <div class="space-y-1">
    <p class="text-sm font-medium">bg-no-repeat</p>
    <div class="h-40 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-no-repeat bg-center" style="background-image: url('<%= imageUrl %>')"></div> {/* bg-center で中央に配置 */}
  </div>

  <div class="space-y-1">
    <p class="text-sm font-medium">bg-repeat-x</p>
    <div class="h-40 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-repeat-x bg-top" style="background-image: url('<%= imageUrl %>')"></div> {/* bg-top で上端に配置 */}
  </div>

  <div class="space-y-1">
    <p class="text-sm font-medium">bg-repeat-y</p>
    <div class="h-40 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-repeat-y bg-left" style="background-image: url('<%= imageUrl %>')"></div> {/* bg-left で左端に配置 */}
  </div>

  <div class="space-y-1">
    <p class="text-sm font-medium">bg-repeat-round</p>
    <div class="h-40 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-repeat-round" style="background-image: url('<%= imageUrl %>')"></div>
    <p class="text-xs text-gray-600 dark:text-gray-400">画像サイズが調整される場合あり</p>
  </div>

  <div class="space-y-1">
    <p class="text-sm font-medium">bg-repeat-space</p>
    <div class="h-40 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-repeat-space" style="background-image: url('<%= imageUrl %>')"></div>
     <p class="text-xs text-gray-600 dark:text-gray-400">画像間にスペースが入る</p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて繰り返しの方法を変更できます。

```html
<div class="bg-no-repeat md:bg-repeat ..." style="background-image: url(...)">
  {/* モバイルでは繰り返さず、md 以上で繰り返す */}
</div>
```

## 注意点

*   これらのユーティリティは、要素に背景画像 (`bg-image`, `bg-gradient-*` など) が設定されている場合にのみ効果があります。
*   `bg-repeat-round` と `bg-repeat-space` のブラウザサポートは比較的新しいですが、主要なモダンブラウザでは利用可能です。古いブラウザでは `bg-repeat` として扱われることがあります。
*   背景画像の初期位置は `background-position` (`bg-*`) で、サイズは `background-size` (`bg-cover`, `bg-contain`) で制御します。

## 関連ユーティリティ

*   `background-image` (`bg-gradient-*` など): 背景画像。
*   `background-position`: 背景画像の位置。
*   `background-size`: 背景画像のサイズ。
*   `background-attachment`: 背景画像の固定方法。
*   `background-origin`: 背景画像の原点。
*   `background-clip`: 背景の描画範囲。

## 公式ドキュメント参照
*   [Tailwind CSS: Background Repeat](https://tailwindcss.com/docs/background-repeat)
*   [MDN: background-repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
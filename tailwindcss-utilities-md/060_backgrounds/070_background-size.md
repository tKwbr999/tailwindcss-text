## タイトル
title: Backgrounds: Background Size (背景画像のサイズ)

## タグ
tags: ["tailwindcss", "utilities", "backgrounds", "background-size", "bg-size", "cover", "contain", "auto"]

## 概要
`bg-{size}` ユーティリティは、要素の背景画像のサイズを制御します。CSS の `background-size` プロパティに対応します。

これにより、背景画像をコンテナに合わせて拡大縮小したり、特定のサイズに固定したりできます。

## 基本的な使い方とパラメータ

*   **`bg-auto`**: デフォルト。背景画像は元のサイズで表示されます (`background-size: auto;`)。
*   **`bg-cover`**: アスペクト比を維持したまま、背景画像が要素全体を**完全に覆う**ように拡大縮小されます (`background-size: cover;`)。画像の中心が表示され、はみ出す部分は切り取られます。
*   **`bg-contain`**: アスペクト比を維持したまま、背景画像全体が要素内に**完全に収まる**ように拡大縮小されます (`background-size: contain;`)。要素と画像の比率が異なる場合、余白が生じます。

```html
<% let imageUrl = "https://via.placeholder.com/300x200/3b82f6/ffffff?text=Image(3:2)"; %>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">

  <div class="space-y-1">
    <p class="text-sm font-medium">bg-auto (Default)</p>
    <div class="h-40 w-full rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-no-repeat bg-center bg-auto" style="background-image: url('<%= imageUrl %>')"></div>
    <p class="text-xs text-gray-600 dark:text-gray-400">元の画像サイズ (300x200) で表示</p>
  </div>

  <div class="space-y-1">
    <p class="text-sm font-medium">bg-cover</p>
    <div class="h-40 w-full rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-no-repeat bg-center bg-cover" style="background-image: url('<%= imageUrl %>')"></div>
     <p class="text-xs text-gray-600 dark:text-gray-400">コンテナを覆うように拡大縮小 (一部切れる)</p>
  </div>

  <div class="space-y-1">
    <p class="text-sm font-medium">bg-contain</p>
    <div class="h-40 w-full rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-no-repeat bg-center bg-contain" style="background-image: url('<%= imageUrl %>')"></div>
     <p class="text-xs text-gray-600 dark:text-gray-400">コンテナに収まるように拡大縮小 (余白ができる)</p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて背景画像のサイズを変更できます。

```html
<div class="bg-contain md:bg-cover ..." style="background-image: url(...)">
  {/* モバイルでは contain、md 以上で cover */}
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.backgroundSize` (または `theme.backgroundSize`) でカスタムのサイズキーワードや値を定義できます。値には CSS の `background-size` プロパティで有効な値を文字列で指定します (例: `'50%'`, `'100px auto'`, `'auto 80%'`)。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%', // bg-50% クラスを追加
        '16': '4rem', // bg-16 クラスを追加 (spacing スケールとは独立)
      },
    },
  },
}
```

```html
<div class="bg-50% ..." style="background-image: url(...)"></div>
<div class="bg-16 ..." style="background-image: url(...)"></div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って背景画像のサイズを直接指定することも可能です。

```html
<div class="bg-[length:200px_100px] ..." style="background-image: url(...)"></div> {/* 幅 200px, 高さ 100px */}
<div class="bg-[length:auto_75%] ..." style="background-image: url(...)"></div>   {/* 幅 auto, 高さ 75% */}
<div class="bg-[size:contain] ..." style="background-image: url(...)"></div>     {/* キーワードも可 */}
```
(Tailwind v3.2 以前は `bg-[200px_100px]` のような形式でしたが、v3.2 からは CSS カスタムプロパティとの衝突を避けるため `bg-[length:...]` または `bg-[size:...]` という形式が推奨されています。)

## 注意点

*   これらのユーティリティは、要素に背景画像 (`bg-image`, `bg-gradient-*` など) が設定されている場合にのみ効果があります。
*   `bg-cover` や `bg-contain` はアスペクト比を維持しますが、`bg-fill` (CSS の `100% 100%` に相当、Tailwind のコアにはない) は比率を無視して引き伸ばします。
*   背景画像の位置は `background-position` (`bg-*`) で制御します。`bg-cover` や `bg-contain` と `bg-center` を組み合わせることが一般的です。

## 関連ユーティリティ

*   `background-image` (`bg-gradient-*` など): 背景画像。
*   `background-position`: 背景画像の位置。
*   `background-repeat`: 背景画像の繰り返し。
*   `background-attachment`: 背景画像の固定方法。
*   `background-origin`: 背景画像の原点。
*   `background-clip`: 背景の描画範囲。

## 公式ドキュメント参照
*   [Tailwind CSS: Background Size](https://tailwindcss.com/docs/background-size)
*   [MDN: background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
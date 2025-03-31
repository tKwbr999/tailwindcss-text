## タイトル
title: Effects: Background Blend Mode (背景の混合モード)

## タグ
tags: ["tailwindcss", "utilities", "effects", "background-blend-mode", "bg-blend", "background", "color", "image", "gradient", "multiply", "screen", "overlay"]

## 概要
`bg-blend-{mode}` ユーティリティは、要素に複数の背景レイヤー (背景色、背景画像、グラデーションなど) が設定されている場合に、それらのレイヤーがどのように混合されるかを制御します。CSS の `background-blend-mode` プロパティに対応します。

これにより、背景色の上に重ねた背景画像を特定の方法でブレンドして、ユニークな視覚効果を作成できます。

## 基本的な使い方とパラメータ

利用可能なブレンドモードは `mix-blend-mode` と同じです。

*   **`bg-blend-normal`**: デフォルト。混合しません。上のレイヤーが下のレイヤーを覆い隠します。
*   **`bg-blend-multiply`**: 色を掛け合わせます (暗くなる)。
*   **`bg-blend-screen`**: 色を反転して掛け合わせ、反転します (明るくなる)。
*   **`bg-blend-overlay`**: `multiply` と `screen` の組み合わせ。
*   **`bg-blend-darken`**: 暗い方の色を選択。
*   **`bg-blend-lighten`**: 明るい方の色を選択。
*   **`bg-blend-color-dodge`**: 下の色を明るくして上の色を反映。
*   **`bg-blend-color-burn`**: 下の色を暗くして上の色を反映。
*   **`bg-blend-hard-light`**: 強い `overlay`。
*   **`bg-blend-soft-light`**: 柔らかい `overlay`。
*   **`bg-blend-difference`**: 色の差分。
*   **`bg-blend-exclusion`**: `difference` よりコントラストが低い。
*   **`bg-blend-hue`**: 下の輝度/彩度 + 上の色相。
*   **`bg-blend-saturation`**: 下の輝度/色相 + 上の彩度。
*   **`bg-blend-color`**: 下の輝度 + 上の色相/彩度。
*   **`bg-blend-luminosity`**: 下の色相/彩度 + 上の輝度。

**注意:** 効果を確認するには、要素に**複数の背景レイヤー** (例: `bg-{color}` と `bg-[url(...)]` または `bg-gradient-*`) を設定する必要があります。

```html
<% let imageUrl = "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80"; %>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">

  <div class="space-y-1">
    <p class="text-sm font-medium">Normal (No Blend)</p>
    <div class="h-40 rounded border dark:border-gray-700 bg-blue-500 bg-blend-normal bg-center bg-cover" style="background-image: url('<%= imageUrl %>')"></div>
    <p class="text-xs text-gray-600 dark:text-gray-400">画像が背景色を覆う</p>
  </div>

  <div class="space-y-1">
    <p class="text-sm font-medium">bg-blend-multiply</p>
    <div class="h-40 rounded border dark:border-gray-700 bg-blue-500 bg-blend-multiply bg-center bg-cover" style="background-image: url('<%= imageUrl %>')"></div>
     <p class="text-xs text-gray-600 dark:text-gray-400">画像と背景色が掛け合わされ暗くなる</p>
  </div>

  <div class="space-y-1">
    <p class="text-sm font-medium">bg-blend-screen</p>
    <div class="h-40 rounded border dark:border-gray-700 bg-blue-500 bg-blend-screen bg-center bg-cover" style="background-image: url('<%= imageUrl %>')"></div>
     <p class="text-xs text-gray-600 dark:text-gray-400">画像と背景色がスクリーン合成され明るくなる</p>
  </div>

   <div class="space-y-1">
    <p class="text-sm font-medium">bg-blend-overlay</p>
    <div class="h-40 rounded border dark:border-gray-700 bg-blue-500 bg-blend-overlay bg-center bg-cover" style="background-image: url('<%= imageUrl %>')"></div>
     <p class="text-xs text-gray-600 dark:text-gray-400">オーバーレイ合成</p>
  </div>

   <div class="space-y-1">
    <p class="text-sm font-medium">bg-blend-luminosity</p>
    <div class="h-40 rounded border dark:border-gray-700 bg-blue-500 bg-blend-luminosity bg-center bg-cover" style="background-image: url('<%= imageUrl %>')"></div>
     <p class="text-xs text-gray-600 dark:text-gray-400">背景色の輝度を使用</p>
  </div>

   <div class="space-y-1">
    <p class="text-sm font-medium">Gradient + bg-blend-multiply</p>
    <div class="h-40 rounded border dark:border-gray-700 bg-gradient-to-r from-yellow-400 to-pink-500 bg-blend-multiply bg-center bg-cover" style="background-image: url('<%= imageUrl %>')"></div>
     <p class="text-xs text-gray-600 dark:text-gray-400">画像とグラデーションを乗算</p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてブレンドモードを変更できます。

```html
<div class="bg-blend-multiply md:bg-blend-screen ..." style="background-image: url(...); background-color: ...">
  Blend mode changes on medium screens.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じてブレンドモードを変更できます。

```html
<div class="bg-blend-normal hover:bg-blend-overlay transition-all duration-300 ..." style="background-image: url(...); background-color: ...">
  Blend mode changes on hover.
</div>
```

## `mix-blend-mode` との違い

*   **`background-blend-mode` (`bg-blend-*`)**: 要素の**背景レイヤー同士** (背景色、背景画像、グラデーション) を混合します。要素の内容 (テキストなど) には影響しません。
*   **`mix-blend-mode` (`mix-blend-*`)**: 要素**全体**とその**下にある要素** (背景や他の要素) を混合します。要素の内容 (テキストなど) も混合されます。

## 注意点

*   `background-blend-mode` が効果を発揮するには、要素に**少なくとも 2 つの背景レイヤー** (例: `background-color` と `background-image`) が設定されている必要があります。
*   ブラウザのサポート状況は良好ですが、一部の古いブラウザではサポートされていないモードがあります。
*   複雑なブレンドモードはパフォーマンスに影響を与える可能性があります。

## 関連ユーティリティ

*   `background-color` (`bg-*`): 背景色。
*   `background-image` (`bg-gradient-*`, `bg-[url(...)]`): 背景画像。
*   `mix-blend-mode` (`mix-blend-*`): 要素とその背景要素との混合モード。

## 公式ドキュメント参照
*   [Tailwind CSS: Background Blend Mode](https://tailwindcss.com/docs/background-blend-mode)
*   [MDN: background-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode)
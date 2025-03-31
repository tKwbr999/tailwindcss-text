## タイトル
title: Backgrounds: Background Origin (背景画像の原点)

## タグ
tags: ["tailwindcss", "utilities", "backgrounds", "background-origin", "border-box", "padding-box", "content-box", "background-position"]

## 概要
`bg-origin-{keyword}` ユーティリティは、要素の背景画像 (`background-image`) の配置 (`background-position`) の基準となる原点を設定します。CSS の `background-origin` プロパティに対応します。

これにより、背景画像がボーダー領域から始まるか、パディング領域から始まるか、コンテンツ領域から始まるかを制御できます。

## 基本的な使い方とパラメータ

*   **`bg-origin-border`**: デフォルト。背景画像の原点はボーダーボックスの左上隅になります。`background-position` はボーダーの外側の端を基準に計算されます。
*   **`bg-origin-padding`**: 背景画像の原点はパディングボックスの左上隅になります。`background-position` はボーダーの内側、パディングの外側の端を基準に計算されます。
*   **`bg-origin-content`**: 背景画像の原点はコンテンツボックスの左上隅になります。`background-position` はパディングの内側の端を基準に計算されます。

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">

  {/* bg-origin-border (Default) */}
  <div class="space-y-1">
    <p class="text-sm font-medium">bg-origin-border (Default)</p>
    <div class="bg-origin-border p-6 border-8 border-dashed border-blue-500/50 bg-blue-100 dark:bg-blue-900/30 rounded h-40 bg-no-repeat" style="background-image: url('https://via.placeholder.com/50/0000FF/FFFFFF?text=BG'); background-position: top left;">
      {/* BG image starts at top-left of border box */}
    </div>
    <p class="text-xs text-gray-600 dark:text-gray-400">背景はボーダーの左上から配置</p>
  </div>

  {/* bg-origin-padding */}
  <div class="space-y-1">
    <p class="text-sm font-medium">bg-origin-padding</p>
    <div class="bg-origin-padding p-6 border-8 border-dashed border-green-500/50 bg-green-100 dark:bg-green-900/30 rounded h-40 bg-no-repeat" style="background-image: url('https://via.placeholder.com/50/008000/FFFFFF?text=BG'); background-position: top left;">
      {/* BG image starts at top-left of padding box */}
    </div>
     <p class="text-xs text-gray-600 dark:text-gray-400">背景はパディングの左上から配置</p>
  </div>

  {/* bg-origin-content */}
  <div class="space-y-1">
    <p class="text-sm font-medium">bg-origin-content</p>
    <div class="bg-origin-content p-6 border-8 border-dashed border-yellow-500/50 bg-yellow-100 dark:bg-yellow-800/30 rounded h-40 bg-no-repeat" style="background-image: url('https://via.placeholder.com/50/FFA500/FFFFFF?text=BG'); background-position: top left;">
      {/* BG image starts at top-left of content box */}
    </div>
     <p class="text-xs text-gray-600 dark:text-gray-400">背景はコンテンツの左上から配置</p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて背景画像の原点を変更できますが、一般的ではありません。

```html
<div class="bg-origin-padding md:bg-origin-content ..." style="background-image: url(...)">
  {/* Origin changes on medium screens */}
</div>
```

## 注意点

*   このユーティリティは、要素に背景画像 (`bg-image`, `bg-gradient-*` など) が設定されている場合にのみ効果があります。背景色のみの場合は影響しません。
*   `background-origin` は `background-clip` と密接に関連しています。`background-clip` は背景が**描画される範囲**を制御し、`background-origin` は背景画像の**配置の基準点**を制御します。多くの場合、これらを同じ値 (例: `bg-clip-padding bg-origin-padding`) に設定すると直感的な結果が得られます。
*   `background-attachment: fixed;` (`bg-fixed`) が設定されている場合、`background-origin` は無視され、背景は常にビューポートを基準に配置されます。

## 関連ユーティリティ

*   `background-image` (`bg-gradient-*` など): 背景画像を設定します。
*   `background-position` (`bg-*`): 背景画像の位置。
*   `background-clip`: 背景の描画範囲。
*   `background-attachment`: 背景画像の固定方法。
*   `border-width` (`border-*`), `padding` (`p-*`): これらの値が `padding-box` と `content-box` の位置に影響します。

## 公式ドキュメント参照
*   [Tailwind CSS: Background Origin](https://tailwindcss.com/docs/background-origin)
*   [MDN: background-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin)
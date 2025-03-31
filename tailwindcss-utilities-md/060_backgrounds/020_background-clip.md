## タイトル
title: Backgrounds: Background Clip (背景の描画範囲)

## タグ
tags: ["tailwindcss", "utilities", "backgrounds", "background-clip", "border-box", "padding-box", "content-box", "text", "gradient"]

## 概要
`bg-clip-{keyword}` ユーティリティは、要素の背景 (色または画像) がどの領域まで描画されるかを制御します。CSS の `background-clip` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`bg-clip-border`**: デフォルト。背景はボーダーボックス (ボーダーの外側の端) まで拡張されます。
*   **`bg-clip-padding`**: 背景はパディングボックス (ボーダーの内側、パディング領域を含む) まで拡張されます。ボーダーの下には描画されません。
*   **`bg-clip-content`**: 背景はコンテンツボックス (パディングの内側、コンテンツ領域のみ) まで拡張されます。ボーダーとパディングの下には描画されません。
*   **`bg-clip-text`**: 背景を前景テキストの形で切り抜きます。テキスト自体は透明 (`text-transparent`) にする必要があります。これにより、テキストにグラデーションや背景画像を適用できます。

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

  {/* bg-clip-border (Default) */}
  <div class="space-y-2">
    <p class="text-sm font-medium">bg-clip-border (Default)</p>
    <div class="bg-clip-border p-6 border-8 border-dashed border-blue-500/50 bg-blue-200 dark:bg-blue-900/30 rounded">
      Background extends to the outside edge of the border.
    </div>
  </div>

  {/* bg-clip-padding */}
  <div class="space-y-2">
    <p class="text-sm font-medium">bg-clip-padding</p>
    <div class="bg-clip-padding p-6 border-8 border-dashed border-green-500/50 bg-green-200 dark:bg-green-900/30 rounded">
      Background extends to the inside edge of the border (under padding).
    </div>
  </div>

  {/* bg-clip-content */}
  <div class="space-y-2">
    <p class="text-sm font-medium">bg-clip-content</p>
    <div class="bg-clip-content p-6 border-8 border-dashed border-yellow-500/50 bg-yellow-200 dark:bg-yellow-800/30 rounded">
      Background is clipped to the content box (inside padding).
    </div>
  </div>

  {/* bg-clip-text */}
  <div class="space-y-2">
    <p class="text-sm font-medium">bg-clip-text</p>
    <span class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      Gradient Text
    </span>
    <p class="text-xs text-gray-600 dark:text-gray-400">Requires `text-transparent` and a background (color or image).</p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてクリッピング領域を変更できますが、一般的ではありません。

```html
<div class="bg-clip-padding md:bg-clip-content ...">
  Clipping changes on medium screens.
</div>
```

## 注意点

*   `bg-clip-border`, `bg-clip-padding`, `bg-clip-content` の違いは、要素にボーダー (`border-*`) やパディング (`p-*`) が設定されている場合に顕著になります。
*   `bg-clip-text` を使用する場合、効果を確認するには**必ず `text-transparent` を併用**し、背景色 (`bg-*`) または背景画像 (`bg-image`, `bg-gradient-*`) を設定する必要があります。
*   `background-clip: text` のブラウザサポートは比較的新しいですが、主要なモダンブラウザでは利用可能です (ベンダープレフィックス `-webkit-background-clip: text` が内部的に使われることがあります)。

## 関連ユーティリティ

*   `background-color` (`bg-*`), `background-image` (`bg-gradient-*` など): 背景を設定します。
*   `border-width` (`border-*`), `border-color` (`border-*`): ボーダーを設定します。
*   `padding` (`p-*`): パディングを設定します。
*   `text-color` (`text-transparent`): テキストの色 (透明度)。

## 公式ドキュメント参照
*   [Tailwind CSS: Background Clip](https://tailwindcss.com/docs/background-clip)
*   [MDN: background-clip](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)
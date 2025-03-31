## タイトル
title: Typography: Text Underline Offset (下線のオフセット)

## タグ
tags: ["tailwindcss", "utilities", "typography", "text-underline-offset", "underline", "offset", "spacing"]

## 概要
`underline-offset-{amount}` ユーティリティは、テキストの下線 (`underline`) とテキストのベースラインとの間の垂直方向の距離 (オフセット) を設定します。CSS の `text-underline-offset` プロパティに対応します。

これにより、下線がテキストに近すぎたり遠すぎたりする場合に、その位置を微調整できます。

## 基本的な使い方とパラメータ

値はキーワードまたは固定のピクセル値で指定します。

*   **`underline-offset-auto`**: デフォルト。ブラウザがフォントに基づいて適切なオフセットを自動的に決定します。
*   **`underline-offset-0`**: `text-underline-offset: 0px;` (オフセットなし)
*   **`underline-offset-1`**: `text-underline-offset: 1px;`
*   **`underline-offset-2`**: `text-underline-offset: 2px;`
*   **`underline-offset-4`**: `text-underline-offset: 4px;`
*   **`underline-offset-8`**: `text-underline-offset: 8px;`

`underline` ユーティリティと組み合わせて使用する必要があります。

```html
<div class="space-y-4 p-4 text-lg">
  <p class="underline underline-offset-auto">Auto Offset Underline (Default)</p>
  <p class="underline underline-offset-0 decoration-blue-500">Offset 0 Blue Underline</p>
  <p class="underline underline-offset-1 decoration-red-500">Offset 1 Red Underline</p>
  <p class="underline underline-offset-2 decoration-green-500">Offset 2 Green Underline</p>
  <p class="underline underline-offset-4 decoration-pink-500 decoration-2">Offset 4 Pink Underline (Thickness 2)</p> {/* 太さも併用 */}
  <p class="underline underline-offset-8 decoration-purple-500">Offset 8 Purple Underline</p>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて下線のオフセットを変更できます。

```html
<p class="underline underline-offset-2 md:underline-offset-4 ...">
  Underline offset changes on medium screens.
</p>
```

## 状態修飾子

`hover:`, `focus:` などと組み合わせて、インタラクションに応じてオフセットを変更することも可能です。

```html
<a href="#" class="underline underline-offset-1 hover:underline-offset-4 focus:underline-offset-4 transition-all ...">
  Underline offset changes on hover/focus.
</a>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.textUnderlineOffset` (または `theme.textUnderlineOffset`) でカスタムのオフセット値やキーを追加できます。値には `px`, `rem`, `em` などの単位を使用できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      textUnderlineOffset: {
        '3': '3px',
        '6': '6px',
        'small': '0.1em', // フォントサイズに相対的なオフセット
      },
    },
  },
}
```

```html
<p class="underline underline-offset-3">Custom offset 3px</p>
<p class="underline underline-offset-small text-3xl">Custom small offset (relative to font size)</p>
```

## 任意の値 (Arbitrary Values)

任意の値を使って下線のオフセットを直接指定することも可能です。

```html
<p class="underline underline-offset-[3px]">Arbitrary offset 3px</p>
<p class="underline underline-offset-[0.15em]">Arbitrary offset 0.15em</p>
```

## 注意点

*   `underline-offset-*` ユーティリティは、`underline` ユーティリティが適用されていないと効果がありません。`overline` や `line-through` には影響しません。
*   オフセットの値が大きすぎると、下線が次の行のテキストと重なってしまう可能性があります。
*   ブラウザのサポート状況は比較的新しい機能のため、古いブラウザでは動作しない場合があります。

## 関連ユーティリティ

*   `text-decoration-line` (`underline`): 下線を表示します。
*   `text-decoration-color` (`decoration-*`): 装飾線の色。
*   `text-decoration-style` (`decoration-*`): 装飾線のスタイル。
*   `text-decoration-thickness` (`decoration-*`): 装飾線の太さ。

## 公式ドキュメント参照
*   [Tailwind CSS: Text Underline Offset](https://tailwindcss.com/docs/text-underline-offset)
*   [MDN: text-underline-offset](https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset)
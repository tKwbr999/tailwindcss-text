## タイトル
title: Typography: Text Decoration Thickness (装飾線の太さ)

## タグ
tags: ["tailwindcss", "utilities", "typography", "text-decoration-thickness", "decoration", "thickness", "underline"]

## 概要
`decoration-{width}` ユーティリティは、テキストに適用された装飾線 (下線、上線、打ち消し線) の太さを設定します。CSS の `text-decoration-thickness` プロパティに対応します。

## 基本的な使い方とパラメータ

値はキーワードまたは固定のピクセル値で指定します。

*   **`decoration-auto`**: デフォルト。ブラウザがフォントに基づいて適切な太さを自動的に決定します。
*   **`decoration-from-font`**: フォントファイル自体に推奨される太さの情報が含まれている場合、それを使用します。サポートしているフォントは限られます。
*   **`decoration-0`**: `text-decoration-thickness: 0px;`
*   **`decoration-1`**: `text-decoration-thickness: 1px;`
*   **`decoration-2`**: `text-decoration-thickness: 2px;`
*   **`decoration-4`**: `text-decoration-thickness: 4px;`
*   **`decoration-8`**: `text-decoration-thickness: 8px;`

装飾線自体 (`underline`, `line-through` など) も同時に指定する必要があります。

```html
<div class="space-y-4 p-4 text-lg">
  <p class="underline decoration-auto">Auto Thickness Underline (Default)</p>
  <p class="underline decoration-from-font">From Font Thickness Underline (Font support needed)</p>
  <p class="underline decoration-0">Thickness 0 Underline</p>
  <p class="underline decoration-1 decoration-blue-500">Thickness 1 Blue Underline</p>
  <p class="underline decoration-2 decoration-red-500">Thickness 2 Red Underline</p>
  <p class="underline decoration-4 decoration-green-500">Thickness 4 Green Underline</p>
  <p class="underline decoration-8 decoration-pink-500">Thickness 8 Pink Underline</p>
  <p class="line-through decoration-wavy decoration-2 decoration-gray-500">Wavy gray line-through with thickness 2</p> {/* スタイルや色と併用 */}
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて装飾線の太さを変更できます。

```html
<p class="underline decoration-2 md:decoration-4 ...">
  Decoration thickness changes on medium screens.
</p>
```

## 状態修飾子

`hover:`, `focus:` などと組み合わせて、インタラクションに応じて装飾線の太さを変更することも可能です。

```html
<a href="#" class="underline decoration-1 hover:decoration-2 focus:decoration-2 transition-all ...">
  Underline thickness changes on hover/focus.
</a>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.textDecorationThickness` (または `theme.textDecorationThickness`) でカスタムの太さの値やキーを追加できます。値には `px`, `rem`, `em` などの単位を使用できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      textDecorationThickness: {
        '3': '3px',
        'heavy': '0.2em', // フォントサイズに相対的な太さ
      },
    },
  },
}
```

```html
<p class="underline decoration-3">Custom thickness 3px</p>
<p class="underline decoration-heavy text-3xl">Custom heavy thickness (relative to font size)</p>
```

## 任意の値 (Arbitrary Values)

任意の値を使って装飾線の太さを直接指定することも可能です。

```html
<p class="underline decoration-[3px]">Arbitrary thickness 3px</p>
<p class="underline decoration-[0.15em]">Arbitrary thickness 0.15em</p>
```

## 注意点

*   `decoration-{width}` ユーティリティは、`underline`, `overline`, `line-through` のいずれかが適用されていないと効果がありません。
*   線の太さが太すぎると、特に `overline` や `line-through` でテキストが読みにくくなる可能性があります。
*   `decoration-from-font` はフォント側の対応が必要であり、すべてのフォントで機能するわけではありません。

## 関連ユーティリティ

*   `text-decoration-line` (`underline`, `overline`, `line-through`, `no-underline`): 装飾線の種類。
*   `text-decoration-color` (`decoration-*`): 装飾線の色。
*   `text-decoration-style` (`decoration-*`): 装飾線のスタイル (solid, wavy, dotted など)。
*   `text-underline-offset` (`underline-offset-*`): 下線とテキストの間のオフセット。

## 公式ドキュメント参照
*   [Tailwind CSS: Text Decoration Thickness](https://tailwindcss.com/docs/text-decoration-thickness)
*   [MDN: text-decoration-thickness](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness)
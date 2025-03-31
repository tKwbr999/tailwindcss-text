## タイトル
title: Typography: Text Decoration Color (装飾線の色)

## タグ
tags: ["tailwindcss", "utilities", "typography", "text-decoration-color", "decoration", "color", "underline", "line-through"]

## 概要
`decoration-{color}` ユーティリティは、テキストに適用された装飾線 (下線、上線、打ち消し線) の色を設定します。CSS の `text-decoration-color` プロパティに対応します。

値は、Tailwind のカラーパレット (`slate`, `red`, `blue` など、シェードを含む) や `inherit`, `current`, `transparent` を使用できます。

## 基本的な使い方とパラメータ

`decoration-{color}-{shade}` または `decoration-{keyword}` の形式でクラスを指定します。装飾線自体 (`underline`, `line-through` など) も同時に指定する必要があります。

*   **`decoration-inherit`**: 親要素の `text-decoration-color` を継承します。
*   **`decoration-current`**: 要素自身のテキスト色 (`color`) と同じ色を使用します (デフォルトの挙動に近い)。
*   **`decoration-transparent`**: 透明な装飾線。
*   **`decoration-{color}-{shade}`**: Tailwind のカラーパレットから色を指定します (例: `decoration-blue-500`, `decoration-pink-600`)。

```html
<div class="space-y-4 p-4 text-lg">
  <p class="underline decoration-red-500">Underline with red color</p>
  <p class="underline decoration-emerald-400 dark:decoration-emerald-600">Underline with emerald color (dark variant)</p>
  <p class="line-through decoration-gray-400">Line-through with gray color</p>
  <p class="underline decoration-wavy decoration-blue-600">Wavy blue underline (style + color)</p> {/* スタイルも併用 */}

  {/* 不透明度の変更 */}
  <p class="underline decoration-indigo-500/50">Indigo underline with 50% opacity</p>
  <p class="underline decoration-indigo-500/[.25]">Indigo underline with 25% opacity (Arbitrary)</p>

  {/* デフォルトの挙動 (current に近い) */}
  <p class="underline text-purple-600">Default underline color matches text color (purple)</p>
  {/* decoration-current を明示的に指定 */}
  <p class="underline decoration-current text-orange-600">Explicit decoration-current matches text color (orange)</p>
</div>
```

## 不透明度の変更

`text-{color}` と同様に、`/{opacity}` 修飾子を使って装飾線の色の不透明度を変更できます。

```html
<p class="underline decoration-sky-500/30">Sky underline with 30% opacity</p>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて装飾線の色を変更できます。

```html
<p class="underline decoration-black md:decoration-blue-500 ...">
  Decoration color changes on medium screens.
</p>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じて装飾線の色を変更できます。

```html
<a href="#" class="underline decoration-transparent hover:decoration-current transition-colors duration-200">
  Underline color appears on hover
</a>

<p class="underline decoration-pink-500 dark:decoration-violet-500">
  Decoration color changes in dark mode.
</p>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.textDecorationColor` (または `theme.textDecorationColor`) でカスタムの色を追加できます。通常は `theme.colors` を継承するため、`colors` で定義したカスタムカラーは `decoration-*` でも利用可能です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#ff5733',
      },
      // textDecorationColor 固有のキーも定義可能
      // textDecorationColor: theme => ({
      //   ...theme('colors'), // デフォルトカラーを継承
      //   'special-underline': '#bada55',
      // })
    },
  },
}
```

```html
<p class="underline decoration-brand">Underline with custom brand color</p>
{/* <p class="underline decoration-special-underline">Special underline color</p> */}
```

## 任意の値 (Arbitrary Values)

任意の色コードを使って装飾線の色を直接指定することも可能です。

```html
<p class="underline decoration-[#ffcc00]">Arbitrary yellow underline</p>
<p class="underline decoration-[var(--link-underline-color)]/75">Underline color from CSS variable with opacity</p>
```

## 注意点

*   `decoration-{color}` ユーティリティは、`underline`, `overline`, `line-through` のいずれかが適用されていないと効果がありません。
*   デフォルトでは、装飾線の色は要素のテキスト色 (`color`) と同じになることが多いですが、明示的に `decoration-current` を指定するか、特定の色を指定することで制御できます。

## 関連ユーティリティ

*   `text-decoration-line` (`underline`, `overline`, `line-through`, `no-underline`): 装飾線の種類。
*   `text-decoration-style` (`decoration-*`): 装飾線のスタイル (solid, wavy, dotted など)。
*   `text-decoration-thickness` (`decoration-*`): 装飾線の太さ。
*   `text-underline-offset` (`underline-offset-*`): 下線とテキストの間のオフセット。
*   `text-color` (`text-*`): テキスト自体の色。

## 公式ドキュメント参照
*   [Tailwind CSS: Text Decoration Color](https://tailwindcss.com/docs/text-decoration-color)
*   [MDN: text-decoration-color](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color)
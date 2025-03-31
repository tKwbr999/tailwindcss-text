## タイトル
title: Backgrounds: Gradient Color Stops (グラデーションの色)

## タグ
tags: ["tailwindcss", "utilities", "backgrounds", "gradient-color-stops", "gradient", "from", "via", "to", "color", "opacity"]

## 概要
`from-{color}`, `via-{color}`, `to-{color}` ユーティリティは、`bg-gradient-*` ユーティリティで作成されたグラデーションの開始色、中間色、終了色を設定します。CSS の `--tw-gradient-stops` カスタムプロパティを介して `linear-gradient()`, `radial-gradient()`, `conic-gradient()` 関数に色情報を渡します。

## 基本的な使い方とパラメータ

*   **`from-{color}`**: グラデーションの**開始色**を設定します。`--tw-gradient-from` CSS 変数を設定し、`--tw-gradient-stops` に追加されます。
*   **`via-{color}`**: (オプション) グラデーションの**中間色**を設定します。`--tw-gradient-via` CSS 変数を設定し、`--tw-gradient-stops` の中間に追加されます。`from-*` と `to-*` の間に指定します。
*   **`to-{color}`**: グラデーションの**終了色**を設定します。`--tw-gradient-to` CSS 変数を設定し、`--tw-gradient-stops` に追加されます。

色は、Tailwind のカラーパレット (`slate-500`, `red-600` など)、`inherit`, `current`, `transparent`、またはカスタムカラーを使用できます。

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

  {/* from / to */}
  <div class="space-y-1">
    <p class="text-sm font-medium">from-blue-500 to-cyan-400</p>
    <div class="h-24 rounded bg-gradient-to-r from-blue-500 to-cyan-400"></div>
  </div>

  {/* from / via / to */}
  <div class="space-y-1">
    <p class="text-sm font-medium">from-purple-500 via-pink-500 to-red-500</p>
    <div class="h-24 rounded bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
  </div>

  {/* 異なる方向と組み合わせ */}
  <div class="space-y-1">
    <p class="text-sm font-medium">bg-gradient-to-br from-yellow-200 via-orange-400 to-rose-600</p>
    <div class="h-24 rounded bg-gradient-to-br from-yellow-200 via-orange-400 to-rose-600"></div>
  </div>

  {/* 透明色へのグラデーション */}
  <div class="space-y-1 relative">
     <p class="text-sm font-medium">from-black/50 to-transparent</p>
     <div class="absolute inset-0 bg-cover bg-center rounded" style="background-image: url('https://via.placeholder.com/400x200/cccccc/000000?text=Underneath')"></div>
    <div class="h-24 rounded bg-gradient-to-t from-black/50 to-transparent relative"></div>
    <p class="text-xs text-gray-600 dark:text-gray-400">下半分が黒の半透明から上部が透明になる</p>
  </div>

  {/* 中間色の位置指定 (任意の値 - v3.2+) */}
   <div class="space-y-1">
    <p class="text-sm font-medium">from-cyan-500 via-sky-500 via-[70%] to-blue-500</p>
    <div class="h-24 rounded bg-gradient-to-r from-cyan-500 via-sky-500 via-[70%] to-blue-500"></div>
    <p class="text-xs text-gray-600 dark:text-gray-400">中間色 (sky) の位置を 70% 地点に指定</p>
  </div>

</div>
```

## 不透明度の変更

`from-{color}/{opacity}`, `via-{color}/{opacity}`, `to-{color}/{opacity}` の形式で、各カラーストップの不透明度を個別に設定できます。

```html
<div class="h-24 rounded bg-gradient-to-r from-blue-500/50 via-transparent to-green-500/50">
  {/* From Blue 50% -> Transparent -> To Green 50% */}
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてグラデーションの色を変更できます。

```html
<div class="bg-gradient-to-r from-blue-500 to-cyan-500 md:from-purple-500 md:to-pink-500 ...">
  {/* グラデーションの色が md サイズ以上で変わる */}
</div>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じてグラデーションの色を変更できます。

```html
<button class="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 ...">
  Hover Me
</button>

<div class="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 ...">
  Adapts to dark mode
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.gradientColorStops` (または `theme.gradientColorStops`) でカスタムのグラデーションカラーストップを追加できます。通常は `theme.colors` を継承するため、`colors` で定義したカスタムカラーは `from-*`, `via-*`, `to-*` でも利用可能です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': {
          light: '#63b3ed',
          DEFAULT: '#3182ce',
          dark: '#2c5282',
        },
      },
      // gradientColorStops は通常 colors を継承する
      // gradientColorStops: theme => theme('colors'),
      // 固有のキーを追加することも可能
      // gradientColorStops: theme => ({
      //   ...theme('colors'),
      //   'brand-start': '#ff0000',
      //   'brand-end': '#0000ff',
      // }),
    },
  },
}
```

```html
<div class="bg-gradient-to-r from-brand-light via-brand to-brand-dark ...">
  Custom brand gradient
</div>
{/* <div class="bg-gradient-to-r from-brand-start to-brand-end ...">...</div> */}
```

## 任意の値 (Arbitrary Values)

任意の色コードや CSS 変数を使ってカラーストップを直接指定することも可能です。中間色の位置 (`via-[percentage]`) も指定できます (v3.2+)。

```html
<div class="bg-gradient-to-r from-[#ff0000] via-[hsl(120,100%,50%)]/[.5] to-[var(--my-color)] ...">
  Arbitrary color stops with opacity and variable
</div>

<div class="bg-gradient-to-r from-blue-400 via-purple-500 via-[30%] to-pink-500 ...">
  Middle color stop at 30%
</div>
```

## 注意点

*   `from-*`, `via-*`, `to-*` ユーティリティは、`bg-gradient-*` ユーティリティと組み合わせて使用する必要があります。
*   `from-*` は必須ですが、`via-*` と `to-*` はオプションです。
    *   `from-*` のみ: `from-{color}` から `transparent` へのグラデーションになります。
    *   `from-*` と `to-*`: 2 色のグラデーションになります。
    *   `from-*`, `via-*`, `to-*`: 3 色 (以上) のグラデーションになります。複数の `via-*` を使うことも可能です (ただし、任意の値やカスタム CSS が必要になる場合があります)。
*   グラデーションの方向は `bg-gradient-to-{direction}` で制御します。

## 関連ユーティリティ

*   `background-image` (`bg-gradient-*`): グラデーションの方向や種類。
*   `text-color` (`text-*`): テキストの色。

## 公式ドキュメント参照
*   [Tailwind CSS: Gradient Color Stops](https://tailwindcss.com/docs/gradient-color-stops)
*   [MDN: linear-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) (カラーストップの指定方法)
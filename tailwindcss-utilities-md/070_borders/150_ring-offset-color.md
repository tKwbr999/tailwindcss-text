## タイトル
title: Borders: Ring Offset Color (リングオフセットの色)

## タグ
tags: ["tailwindcss", "utilities", "borders", "ring", "ring-offset", "ring-offset-color", "focus", "shadow", "color"]

## 概要
`ring-offset-{color}` ユーティリティは、`ring-offset-{width}` ユーティリティで作成されたリングと要素本体との間のスペース (オフセット) の色を設定します。CSS の `--tw-ring-offset-color` カスタムプロパティを介して `box-shadow` の色を制御します。

通常、この色は要素の**背景色**に合わせて設定し、オフセットが自然な「隙間」として見えるようにします。

## 基本的な使い方とパラメータ

値は、Tailwind のカラーパレット (`slate`, `red`, `blue`, `emerald` など、シェードを含む)、`inherit`, `current`, `transparent` を使用できます。

`ring-offset-{color}-{shade}` または `ring-offset-{keyword}` の形式でクラスを指定します。リング (`ring-*`) とオフセット幅 (`ring-offset-*`) も同時に指定する必要があります。

**デフォルトの色:** `ring-offset-{width}` のみを指定した場合、デフォルトのオフセット色は**白 (`#ffffff`)** です。

```html
<div class="grid grid-cols-2 sm:grid-cols-3 gap-6 p-4 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900"> {/* 背景にグラデーション */}

  {/* デフォルトのオフセット色 (白) */}
  <button class="focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-4 p-4 rounded-lg bg-white dark:bg-gray-700">Offset White (Default)</button>

  {/* 背景色に合わせる (例: Gray-100) */}
  <button class="focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-4 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 p-4 rounded-lg bg-gray-100 dark:bg-gray-900">Offset bg color</button>

  {/* 異なる色を指定 */}
  <button class="focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-offset-4 focus:ring-offset-yellow-300 p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Offset Yellow-300</button>

  {/* 透明 */}
  <button class="focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-4 focus:ring-offset-transparent p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Offset Transparent</button>

</div>
```

## 不透明度の変更

`/{opacity}` 修飾子を使って、オフセットの色の不透明度を変更できますが、通常は背景色に合わせるため、あまり使われません。

```html
<button class="focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-offset-blue-500/50 ...">
  Offset Blue with 50% opacity
</button>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてオフセットの色を変更できます。

```html
<button class="focus:ring focus:ring-offset-2 focus:ring-offset-white md:focus:ring-offset-gray-100 ...">
  Offset color changes on medium screens.
</button>
```

## 状態修飾子

`focus:`, `focus-visible:`, `focus-within:`, `dark:` などと組み合わせて、状態に応じてオフセットの色を変更するのが一般的です。特にダークモード対応で重要になります。

```html
<input type="text" class="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950 ...">
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.ringOffsetColor` (または `theme.ringOffsetColor`) でカスタムカラーを追加できます。通常は `theme.colors` を継承するため、`colors` で定義したカスタムカラーは `ring-offset-*` でも利用可能です。デフォルトのオフセット色もここで変更できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-bg': '#f0f4f8',
      },
      ringOffsetColor: theme => ({
        // デフォルトのオフセット色を白から変更する場合
        // DEFAULT: theme('colors.gray.100', '#f7fafc'),
        ...theme('colors'), // colors を継承
        'brand': theme('colors.brand-bg'), // カスタムカラーを参照
      }),
    },
  },
}
```

```html
<button class="focus:ring focus:ring-offset-2 focus:ring-offset-brand ...">Offset with custom brand background color</button>
```

## 任意の値 (Arbitrary Values)

任意の色コードを使ってオフセットの色を直接指定することも可能です。

```html
<button class="focus:ring focus:ring-offset-2 focus:ring-offset-[#f5f5f5] ...">Arbitrary light gray offset</button>
```

## 注意点

*   `ring-offset-{color}` ユーティリティは、リング (`ring-*`) とオフセット幅 (`ring-offset-*`) が設定されている場合にのみ効果があります。
*   オフセットの色は、要素の背景色と一致させるのが一般的です。これにより、リングが要素から自然に離れているように見えます。背景がグラデーションや画像の場合は、`ring-offset-transparent` を使うか、最も近い単色を指定することを検討します。
*   ダークモードを使用する場合、`dark:ring-offset-{color}` を使って、ダークモード時の背景色に合わせたオフセット色を指定することを忘れないでください。

## 関連ユーティリティ

*   `ring-width`: リングの太さ。
*   `ring-color`: リングの色。
*   `ring-offset-width`: リングと要素の間のオフセット幅。
*   `background-color` (`bg-*`): 要素の背景色。

## 公式ドキュメント参照
*   [Tailwind CSS: Ring Offset Color](https://tailwindcss.com/docs/ring-offset-color)
*   [MDN: box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) (リングの実装に使われている)
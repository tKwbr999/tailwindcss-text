## タイトル
title: Borders: Outline Color (アウトラインの色)

## タグ
tags: ["tailwindcss", "utilities", "borders", "outline", "outline-color", "color", "focus", "accessibility"]

## 概要
`outline-{color}` ユーティリティは、要素のアウトライン (輪郭線) の色を設定します。CSS の `outline-color` プロパティに対応します。

値は、Tailwind のカラーパレット (`slate`, `red`, `blue`, `emerald` など、シェードを含む)、`inherit`, `current`, `transparent` を使用できます。

アウトラインを表示するには、通常、色 (`outline-{color}`) に加えて、太さ (`outline-*`) とスタイル (`outline`, `outline-dashed` など) を指定する必要があります。

## 基本的な使い方とパラメータ

`outline-{color}-{shade}` または `outline-{keyword}` の形式でクラスを指定します。

*   `outline-inherit`: 親要素のアウトライン色を継承します。
*   `outline-current`: 要素自身のテキスト色 (`color`) と同じ色を使用します。
*   `outline-transparent`: 透明なアウトライン。スペースは占有しませんが見えません。
*   `outline-black`, `outline-white`
*   `outline-slate-500`, `outline-red-600`, `outline-emerald-400` など (色名 + シェード)

```html
<div class="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
  {/* フォーカス時に色付きアウトラインを表示 */}
  <button class="outline-none focus:outline focus:outline-2 focus:outline-blue-500 p-4 rounded bg-gray-200 dark:bg-gray-700">Focus Blue</button>
  <button class="outline-none focus:outline focus:outline-4 focus:outline-green-500 p-4 rounded bg-gray-200 dark:bg-gray-700">Focus Green</button>
  <button class="outline-none focus:outline focus:outline-1 focus:outline-pink-500/50 p-4 rounded bg-gray-200 dark:bg-gray-700">Focus Pink (50% Opacity)</button>
  <button class="outline-none focus:outline focus:outline-2 focus:outline-current text-purple-600 p-4 rounded bg-gray-200 dark:bg-gray-700">Focus Current (Purple)</button>
  <button class="outline-none focus:outline focus:outline-4 focus:outline-transparent focus:ring-2 focus:ring-red-500 p-4 rounded bg-gray-200 dark:bg-gray-700">Focus Transparent (Ring visible)</button>
</div>
```
**注意:** アウトラインはボーダーの外側に描画されるため、`outline-transparent` を使っても背景が見えるわけではありません。フォーカスリング (`ring-*`) と組み合わせて使うことがあります。

## 不透明度の変更

`/{opacity}` 修飾子を使って、アウトラインの色の不透明度を変更できます。

```html
<button class="focus:outline focus:outline-2 focus:outline-indigo-600/75 ...">
  Focus Indigo Outline with 75% opacity
</button>
```
これは内部的に `--tw-outline-opacity` CSS 変数を設定することで実現されます (ただし、`outline-color` 自体が RGBA や HSLA でない場合はブラウザの挙動に依存する可能性があります)。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてアウトラインの色を変更できます。

```html
<button class="focus:outline focus:outline-gray-500 md:focus:outline-blue-500 ...">
  Outline color changes on medium screens.
</button>
```

## 状態修飾子

`focus:`, `focus-visible:`, `focus-within:` などの状態修飾子と組み合わせて、フォーカス時にアウトラインの色を設定するのが最も一般的な使い方です。`dark:` でダークモード時の色を調整することもできます。

```html
<input type="text" class="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:focus-visible:outline-violet-400 ...">
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.outlineColor` (または `theme.outlineColor`) でカスタムカラーを追加できます。通常は `theme.colors` を継承するため、`colors` で定義したカスタムカラーは `outline-*` でも利用可能です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#ff5733',
      },
      // outlineColor は通常 colors を継承する
      // outlineColor: theme => ({
      //   ...theme('colors'),
      //   DEFAULT: theme('colors.blue.500', 'currentColor'), // フォーカス時のデフォルト色
      //   'focus-custom': '#bada55',
      // })
    },
  },
}
```

```html
<button class="focus:outline focus:outline-2 focus:outline-brand ...">Focus brand color outline</button>
```

## 任意の値 (Arbitrary Values)

任意の色コードを使ってアウトラインの色を直接指定することも可能です。

```html
<button class="focus:outline focus:outline-2 focus:outline-[#ffcc00] ...">Focus arbitrary yellow outline</button>
<button class="focus:outline focus:outline-2 focus:outline-[var(--focus-color)]/[.8] ...">Focus outline from CSS variable with opacity</button>
```

## 注意点

*   アウトラインを表示するには、通常、色 (`outline-{color}`)、太さ (`outline-*`)、スタイル (`outline` など) を指定する必要があります。
*   `outline-color` は `outline-style` が `none` または `hidden` の場合は効果がありません。
*   アクセシビリティの観点から、フォーカス状態を示すアウトラインは、背景とのコントラストが十分にある色を選択することが重要です。

## 関連ユーティリティ

*   `outline-width`: アウトラインの太さ。
*   `outline-style`: アウトラインの線種。
*   `outline-offset`: アウトラインと要素境界との間のスペース。
*   `ring-color`: リングの色 (代替のフォーカス表示)。
*   `border-color`, `text-color`, `background-color`: 他のカラーユーティリティ。

## 公式ドキュメント参照
*   [Tailwind CSS: Outline Color](https://tailwindcss.com/docs/outline-color)
*   [MDN: outline-color](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color)
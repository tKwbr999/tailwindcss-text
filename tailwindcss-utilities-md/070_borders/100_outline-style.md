## タイトル
title: Borders: Outline Style (アウトラインの線種)

## タグ
tags: ["tailwindcss", "utilities", "borders", "outline", "outline-style", "solid", "dashed", "dotted", "double", "none", "focus"]

## 概要
`outline`, `outline-dashed`, `outline-dotted`, `outline-double`, `outline-none` ユーティリティは、要素のアウトライン (輪郭線) のスタイル (線種) を設定します。CSS の `outline-style` プロパティに対応します。

アウトラインを表示するには、通常、スタイル (`outline` など) に加えて、太さ (`outline-*`) と色 (`outline-{color}`) を指定する必要があります。

## 基本的な使い方とパラメータ

*   **`outline-none`**: アウトラインを表示しません (`outline-style: none;` および `outline-offset: 2px;` を設定し、デフォルトのブラウザアウトラインを打ち消します)。フォーカス状態を独自にスタイリングする場合のベースとしてよく使われます。
*   **`outline`**: 実線のアウトラインを表示します (`outline-style: solid;`)。`outline-width` も同時に設定される場合があります (Tailwind のバージョンや設定による)。
*   **`outline-dashed`**: 破線のアウトラインを表示します (`outline-style: dashed;`)。
*   **`outline-dotted`**: 点線のアウトラインを表示します (`outline-style: dotted;`)。
*   **`outline-double`**: 二重線のアウトラインを表示します (`outline-style: double;`)。`outline-width` が 3px 以上ないと効果が見えにくい場合があります。

```html
<div class="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
  {/* フォーカス時に異なるスタイルのアウトラインを表示 */}
  <button class="outline-none focus:outline focus:outline-2 focus:outline-blue-500 p-4 rounded bg-gray-200 dark:bg-gray-700">Focus Solid (outline)</button>
  <button class="outline-none focus:outline-dashed focus:outline-2 focus:outline-green-500 p-4 rounded bg-gray-200 dark:bg-gray-700">Focus Dashed</button>
  <button class="outline-none focus:outline-dotted focus:outline-2 focus:outline-red-500 p-4 rounded bg-gray-200 dark:bg-gray-700">Focus Dotted</button>
  <button class="outline-none focus:outline-double focus:outline-4 focus:outline-purple-500 p-4 rounded bg-gray-200 dark:bg-gray-700">Focus Double (width 4)</button>
  <button class="outline-none focus:ring-2 focus:ring-pink-500 p-4 rounded bg-gray-200 dark:bg-gray-700">Focus None (Ring instead)</button>
</div>
```
**注意:**
*   `outline` クラスは `outline-style: solid` を設定しますが、同時にデフォルトの `outline-width` (通常 1px または 2px) も設定する場合があります。他の太さを指定したい場合は `outline-{width}` を併用します。
*   `outline-none` は `outline-style: none` に加えて、デフォルトのアウトラインオフセットを打ち消すスタイルも含むことがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてアウトラインスタイルを変更できます。

```html
<button class="focus:outline-dotted md:focus:outline-solid ...">
  Outline style changes on medium screens.
</button>
```

## 状態修飾子

`focus:`, `focus-visible:`, `focus-within:` などの状態修飾子と組み合わせて、フォーカス時にアウトラインスタイルを設定するのが最も一般的な使い方です。

```html
<input type="text" class="outline-none focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 ...">
```

## カスタマイズ (`tailwind.config.js`)

Tailwind のデフォルト設定には、`outline-style` のためのカスタマイズオプションは含まれていません。カスタムの線スタイル (例: `groove`, `ridge`) をユーティリティとして追加したい場合は、プラグインを作成するか、CSS で直接定義する必要があります。

## 注意点

*   アウトラインを表示するには、通常、スタイル (`outline` など)、太さ (`outline-*`)、色 (`outline-{color}`) の 3 つが必要です。
*   `outline-style: none` (`outline-none`) を指定すると、太さや色が設定されていてもアウトラインは表示されません。
*   アウトラインはレイアウトに影響を与えません。

## 関連ユーティリティ

*   `outline-width`: アウトラインの太さ。
*   `outline-color`: アウトラインの色。
*   `outline-offset`: アウトラインと要素境界との間のスペース。
*   `border-style`: ボーダーの線種。
*   `ring-width`, `ring-color` など (`ring-*`): アウトラインの代替となるリング。

## 公式ドキュメント参照
*   [Tailwind CSS: Outline Style](https://tailwindcss.com/docs/outline-style)
*   [MDN: outline-style](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-style)
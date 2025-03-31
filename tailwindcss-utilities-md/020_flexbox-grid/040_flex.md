## タイトル
title: Flexbox & Grid: Flex (フレックスショートハンド)

## タグ
tags: ["tailwindcss", "utilities", "flexbox", "flex", "flex-grow", "flex-shrink", "flex-basis", "layout", "sizing"]

## 概要
`flex-{value}` ユーティリティは、Flex アイテムがどのように伸長・縮小するか、またその基本サイズを制御するためのショートハンドです。CSS の `flex` プロパティ (`flex-grow`, `flex-shrink`, `flex-basis` の一括指定) に対応します。

これにより、Flex コンテナ内の利用可能なスペースに対するアイテムの挙動を簡潔に定義できます。

## 基本的な使い方とパラメータ

Tailwind は以下の主要な `flex` ショートハンドを提供します。

*   **`flex-1`**: `flex: 1 1 0%;`
    *   `flex-grow: 1` (伸長する)
    *   `flex-shrink: 1` (縮小する)
    *   `flex-basis: 0%` (基本サイズ 0%)
    *   **効果:** 利用可能なスペースを他の `flex-1` アイテムと均等に分け合います。最もよく使われる値です。
*   **`flex-auto`**: `flex: 1 1 auto;`
    *   `flex-grow: 1` (伸長する)
    *   `flex-shrink: 1` (縮小する)
    *   `flex-basis: auto` (基本サイズはコンテンツまたは `width`/`height` に依存)
    *   **効果:** 利用可能なスペースを埋めるように伸長・縮小しますが、基本サイズはコンテンツに基づきます。
*   **`flex-initial`**: `flex: 0 1 auto;`
    *   `flex-grow: 0` (伸長しない)
    *   `flex-shrink: 1` (縮小する)
    *   `flex-basis: auto` (基本サイズはコンテンツまたは `width`/`height` に依存)
    *   **効果:** アイテムは自身のコンテンツサイズを基本とし、スペースが足りない場合にのみ縮小します。伸長はしません。
*   **`flex-none`**: `flex: 0 0 auto;`
    *   `flex-grow: 0` (伸長しない)
    *   `flex-shrink: 0` (縮小しない)
    *   `flex-basis: auto` (基本サイズはコンテンツまたは `width`/`height` に依存)
    *   **効果:** アイテムは自身のサイズを維持し、伸長も縮小もしません。固定サイズの要素に適しています。

```html
<div class="flex border rounded dark:border-gray-700 p-2 space-x-2 w-full bg-gray-100 dark:bg-gray-800">

  {/* flex-1: 利用可能なスペースを均等に分割 */}
  <div class="flex-1 p-2 rounded bg-blue-300 dark:bg-blue-800 text-center">flex-1</div>
  <div class="flex-1 p-2 rounded bg-blue-400 dark:bg-blue-700 text-center">flex-1</div>
  <div class="flex-1 p-2 rounded bg-blue-500 dark:bg-blue-600 text-center">flex-1</div>

</div>

<hr class="my-8 border-dashed dark:border-gray-700">

<div class="flex border rounded dark:border-gray-700 p-2 space-x-2 w-full bg-gray-100 dark:bg-gray-800">

  {/* flex-auto: コンテンツ幅を基本にスペースを分配 */}
  <div class="flex-auto p-2 rounded bg-green-300 dark:bg-green-800 text-center">flex-auto (short)</div>
  <div class="flex-auto p-2 rounded bg-green-400 dark:bg-green-700 text-center">flex-auto (longer content takes more space initially)</div>
  <div class="flex-auto p-2 rounded bg-green-500 dark:bg-green-600 text-center">flex-auto</div>

</div>

<hr class="my-8 border-dashed dark:border-gray-700">

<div class="flex border rounded dark:border-gray-700 p-2 space-x-2 w-96 bg-gray-100 dark:bg-gray-800"> {/* 固定幅コンテナ */}

  {/* flex-initial: 縮小はするが伸長はしない */}
  <div class="flex-initial p-2 rounded bg-yellow-300 dark:bg-yellow-800 text-center whitespace-nowrap">flex-initial (shrinks if needed)</div>
  <div class="flex-initial p-2 rounded bg-yellow-400 dark:bg-yellow-700 text-center whitespace-nowrap">flex-initial</div>
  <div class="flex-1 p-2 rounded bg-yellow-500 dark:bg-yellow-600 text-center">flex-1 (takes remaining space)</div>

</div>

<hr class="my-8 border-dashed dark:border-gray-700">

<div class="flex border rounded dark:border-gray-700 p-2 space-x-2 w-full bg-gray-100 dark:bg-gray-800">

  {/* flex-none: 伸長も縮小もしない */}
  <div class="flex-none p-2 rounded bg-purple-300 dark:bg-purple-800 text-center w-20">flex-none (w-20)</div>
  <div class="flex-1 p-2 rounded bg-purple-400 dark:bg-purple-700 text-center">flex-1 (takes remaining space)</div>
  <div class="flex-none p-2 rounded bg-purple-500 dark:bg-purple-600 text-center w-32">flex-none (w-32)</div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて `flex` の挙動を変更できます。

```html
{/* デフォルトは均等分割、md 以上ではコンテンツ幅基準 */}
<div class="flex-1 md:flex-auto ...">...</div>

{/* デフォルトは固定幅、lg 以上で伸長可能 */}
<div class="flex-none lg:flex-1 ...">...</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.flex` でカスタムの `flex` ショートハンド値を追加できます。値には CSS の `flex` プロパティで有効な文字列を指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%', // flex-grow: 2, flex-shrink: 2, flex-basis: 0%
        'half': '1 1 50%', // flex-grow: 1, flex-shrink: 1, flex-basis: 50%
      },
    },
  },
}
```

```html
<div class="flex ...">
  <div class="flex-1 ...">Item 1</div>
  <div class="flex-2 ...">Item 2 (takes twice the space)</div> {/* カスタム値を使用 */}
</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って `flex` プロパティを直接指定することも可能です。角括弧 `[]` 内にスペース区切りで `grow shrink basis` の値を記述します。ハイフン `-` はアンダースコア `_` に置き換える必要があります (例: `calc(100%_-_theme(spacing.4))` )。

```html
<div class="flex-[2_1_auto] ...">...</div> {/* grow: 2, shrink: 1, basis: auto */}
<div class="flex-[1_0_50%] ...">...</div> {/* grow: 1, shrink: 0, basis: 50% */}
```

## 注意点

*   `flex-*` ユーティリティは Flex アイテム (Flex コンテナの直接の子要素) にのみ適用されます。
*   `flex-1`, `flex-auto`, `flex-initial`, `flex-none` は最も一般的なユースケースをカバーしますが、より細かい制御が必要な場合は `grow-*`, `shrink-*`, `basis-*` を個別に指定します。

## 関連ユーティリティ

*   `flex-grow` (`grow`): アイテムが伸長する比率。
*   `flex-shrink` (`shrink`): アイテムが縮小する比率。
*   `flex-basis` (`basis-*`): アイテムの基本サイズ。
*   `display` (`flex`, `inline-flex`): Flex コンテナを作成します。

## 公式ドキュメント参照
*   [Tailwind CSS: Flex](https://tailwindcss.com/docs/flex)
*   [MDN: flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
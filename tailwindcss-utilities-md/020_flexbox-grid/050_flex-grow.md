## タイトル
title: Flexbox & Grid: Flex Grow (フレックス伸長係数)

## タグ
tags: ["tailwindcss", "utilities", "flexbox", "flex-grow", "grow", "sizing", "layout"]

## 概要
`grow` および `grow-0` ユーティリティは、Flex アイテムが Flex コンテナ内の利用可能な**余剰スペース**をどの程度占めるか (伸長するか) を制御します。CSS の `flex-grow` プロパティに対応します。

`flex-grow` は、コンテナ内のすべてのアイテムの `flex-basis` (基本サイズ) を合計した後に残ったスペースを、各アイテムの `flex-grow` 係数の**比率**に応じて分配します。

## 基本的な使い方とパラメータ

*   **`grow`**: `flex-grow: 1;` を適用します。利用可能な余剰スペースがあれば、他の `grow` が指定されたアイテムと等しくスペースを分け合って伸長します。`flex-1` や `flex-auto` の一部です。
*   **`grow-0`**: デフォルト (`flex-grow: 0;`)。アイテムは利用可能なスペースがあっても伸長しません。`flex-initial` や `flex-none` の一部です。

```html
<div class="flex border rounded dark:border-gray-700 p-2 space-x-2 w-full bg-gray-100 dark:bg-gray-800">

  {/* grow-0 (デフォルト): 伸長しない */}
  <div class="grow-0 p-2 rounded bg-blue-300 dark:bg-blue-800">No Grow (grow-0)</div>
  <div class="grow-0 p-2 rounded bg-blue-400 dark:bg-blue-700">No Grow</div>

  {/* grow: 余剰スペースを占める */}
  <div class="grow p-2 rounded bg-green-400 dark:bg-green-700 text-center">Grow (grow)</div>

</div>

<hr class="my-8 border-dashed dark:border-gray-700">

<div class="flex border rounded dark:border-gray-700 p-2 space-x-2 w-full bg-gray-100 dark:bg-gray-800">

  {/* 複数の grow アイテム: スペースを均等に分割 */}
  <div class="grow p-2 rounded bg-yellow-300 dark:bg-yellow-800 text-center">Grow 1</div>
  <div class="grow p-2 rounded bg-yellow-400 dark:bg-yellow-700 text-center">Grow 2</div>
  <div class="grow-0 p-2 rounded bg-yellow-500 dark:bg-yellow-600 text-center">No Grow</div>

</div>

<hr class="my-8 border-dashed dark:border-gray-700">

<div class="flex border rounded dark:border-gray-700 p-2 space-x-2 w-full bg-gray-100 dark:bg-gray-800">

  {/* 異なる grow 係数 (任意の値を使用) */}
  <div class="grow-[2] p-2 rounded bg-purple-300 dark:bg-purple-800 text-center">Grow 2</div> {/* grow-[2] */}
  <div class="grow p-2 rounded bg-purple-400 dark:bg-purple-700 text-center">Grow 1 (grow)</div>
  <div class="grow-0 p-2 rounded bg-purple-500 dark:bg-purple-600 text-center">No Grow</div>
  {/* Grow 2 は Grow 1 の 2 倍の余剰スペースを得る */}

</div>
```

## `flex-basis` との関係

`flex-grow` が分配するのは、あくまでコンテナ内の**余剰スペース**です。各アイテムの初期サイズは `flex-basis` (または `width`/`height`) によって決まります。

*   `basis-0 grow`: アイテムの基本サイズが 0 なので、余剰スペースを `grow` 係数の比率で完全に分け合います。結果的に、アイテムの最終的なサイズ比が `grow` 係数の比率に近くなります (例: `grow-[2]` は `grow` の 2 倍の幅になる)。`flex-1` はこれ (`grow basis-0`) に `shrink` を加えたものです。
*   `basis-auto grow`: アイテムはまずコンテンツに必要なサイズを確保し、その上で残った余剰スペースを `grow` 係数の比率で分け合います。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて伸長するかどうかを変更できます。

```html
{/* デフォルトは伸長しない、md 以上で伸長する */}
<div class="grow-0 md:grow ...">...</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.flexGrow` でカスタムの `flex-grow` 値 (に対応するクラス) を追加できますが、Tailwind のデフォルト (`grow` と `grow-0`) でほとんどのケースはカバーでき、必要に応じて任意の値を使うのが一般的です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      flexGrow: {
        '2': '2', // grow-2 クラスを追加 (flex-grow: 2;)
        '3': '3',
      },
    },
  },
}
```

## 任意の値 (Arbitrary Values)

`grow-[{number}]` の形式で、任意の `flex-grow` 係数を直接指定できます。これはカスタム値を追加するよりも柔軟です。

```html
<div class="flex ...">
  <div class="grow-[3] ...">Takes 3 parts of extra space</div>
  <div class="grow-[1] ...">Takes 1 part of extra space</div>
</div>
```

## 注意点

*   `flex-grow` は Flex アイテムにのみ適用されます。
*   `flex-grow` の合計値は重要ではなく、各アイテム間の**比率**が重要です (`grow-[2]` と `grow` は、`grow-[4]` と `grow-[2]` と同じ比率でスペースを分配します)。
*   負の値は無効です。

## 関連ユーティリティ

*   `flex-shrink` (`shrink`): アイテムが縮小する比率。
*   `flex-basis` (`basis-*`): アイテムの基本サイズ。
*   `flex`: `flex-grow`, `flex-shrink`, `flex-basis` のショートハンド。

## 公式ドキュメント参照
*   [Tailwind CSS: Flex Grow](https://tailwindcss.com/docs/flex-grow)
*   [MDN: flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
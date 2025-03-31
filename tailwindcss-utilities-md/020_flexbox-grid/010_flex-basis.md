## タイトル
title: Flexbox & Grid: Flex Basis (フレックス基本サイズ)

## タグ
tags: ["tailwindcss", "utilities", "flexbox", "flex-basis", "sizing", "layout"]

## 概要
`basis-{size}` ユーティリティは、Flex アイテムの初期の主軸方向のサイズ (main size) を設定します。CSS の `flex-basis` プロパティに対応します。

`flex-basis` は、アイテムが `flex-grow` によって伸長したり `flex-shrink` によって縮小したりする**前**の、理想的なまたは仮定のサイズを定義します。`flex` ショートハンドユーティリティ (`flex-1`, `flex-auto`, `flex-none`) の一部としても暗黙的に設定されます。

## 基本的な使い方とパラメータ

値は通常、Tailwind のスペーシングスケール (`0`, `1`, `4`, `px`, etc.) またはサイジングスケール (`1/2`, `full`, `auto` など) を使用します。

*   **`basis-auto`**: デフォルト (`flex-basis: auto;`)。アイテムのサイズは、そのコンテンツに基づいて決まります (または `width`/`height` プロパティがあればそれに従います)。`flex-auto` や `flex-initial` の基礎となります。
*   **`basis-0`**: (`flex-basis: 0px;`)。アイテムの基本サイズを 0 に設定します。`flex-grow` と組み合わせると、利用可能なスペースを割合に応じて分配するのに役立ちます。`flex-1` の基礎となります。
*   **`basis-full`**: (`flex-basis: 100%;`)。アイテムの基本サイズをコンテナの 100% に設定します。`flex-wrap` と組み合わせると、アイテムを強制的に改行させるのに使えます。
*   **`basis-{spacing}`**: (`flex-basis: {spacing};`)。`theme.spacing` スケールの値を使って固定の基本サイズを指定します (例: `basis-10` は `2.5rem`)。
*   **`basis-{fraction}`**: (`flex-basis: {percentage};`)。`1/2`, `1/3`, `2/3` など、割合で基本サイズを指定します (例: `basis-1/2` は `50%`)。

```html
<div class="flex flex-row border rounded dark:border-gray-700 p-2 space-x-2">

  {/* basis-auto (デフォルトに近い挙動) */}
  <div class="basis-auto bg-blue-200 dark:bg-blue-900 p-2 rounded text-center">Auto</div>

  {/* basis-0 (flex-grow と組み合わせる) */}
  <div class="basis-0 flex-grow bg-green-200 dark:bg-green-900 p-2 rounded text-center">Basis 0, Grow 1</div>
  <div class="basis-0 flex-grow-[2] bg-green-200 dark:bg-green-900 p-2 rounded text-center">Basis 0, Grow 2</div>

  {/* 固定サイズ */}
  <div class="basis-24 bg-yellow-200 dark:bg-yellow-800 p-2 rounded text-center">Basis 24 (6rem)</div>

  {/* 割合 */}
  <div class="basis-1/4 bg-purple-200 dark:bg-purple-900 p-2 rounded text-center">Basis 1/4</div>

</div>

<hr class="my-8 border-dashed dark:border-gray-700">

{/* basis-full での改行 */}
<div class="flex flex-wrap border rounded dark:border-gray-700 p-2">
  <div class="basis-1/3 bg-red-200 dark:bg-red-900 p-2">1/3</div>
  <div class="basis-1/3 bg-red-200 dark:bg-red-900 p-2">1/3</div>
  <div class="basis-full h-0"></div> {/* 改行用ダミー */}
  <div class="basis-1/2 bg-orange-200 dark:bg-orange-900 p-2">1/2 (Next Line)</div>
  <div class="basis-1/2 bg-orange-200 dark:bg-orange-900 p-2">1/2 (Next Line)</div>
</div>
```

## `flex` ショートハンドとの関係

`flex-basis` は、`flex` ショートハンドユーティリティ (`flex-1`, `flex-auto`, `flex-none`) の一部として暗黙的に設定されています。

*   **`flex-1`**: `flex: 1 1 0%;` (`flex-grow: 1; flex-shrink: 1; flex-basis: 0%;`)
*   **`flex-auto`**: `flex: 1 1 auto;` (`flex-grow: 1; flex-shrink: 1; flex-basis: auto;`)
*   **`flex-initial`**: `flex: 0 1 auto;` (`flex-grow: 0; flex-shrink: 1; flex-basis: auto;`)
*   **`flex-none`**: `flex: 0 0 auto;` (`flex-grow: 0; flex-shrink: 0; flex-basis: auto;`)

通常はこれらのショートハンドを使う方が簡潔ですが、`flex-basis` を個別に指定したい場合に `basis-*` ユーティリティを使用します。例えば、`flex-grow` はさせたいが、初期サイズはコンテンツ幅 (`auto`) ではなく固定値にしたい場合 (`flex-grow basis-32`) などです。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて `flex-basis` を変更できます。

```html
{/* デフォルトは auto、md 以上で 50% */}
<div class="basis-auto md:basis-1/2 ...">...</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.flexBasis` でカスタムの `flex-basis` 値を追加できます。値は `theme.spacing` や `theme.width` などと同様の形式で指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      flexBasis: {
        '1/7': '14.2857143%',
        '128': '32rem',
      },
    },
  },
}
```

## 任意の値 (Arbitrary Values)

任意の値を使って `flex-basis` を直接指定することも可能です。

```html
<div class="basis-[600px] ...">...</div>
<div class="basis-[calc(100%-4rem)] ...">...</div>
```

## 注意点

*   `flex-basis` は Flex アイテム (Flex コンテナの直接の子要素) にのみ適用されます。
*   `flex-direction` が `row` の場合は幅の基本サイズ、`col` の場合は高さの基本サイズとして機能します。
*   `flex-basis` の値はあくまで「基本」サイズであり、`flex-grow` や `flex-shrink`、コンテナの空きスペースやコンテンツの最小サイズ (`min-content`) によって最終的なサイズは変化します。

## 関連ユーティリティ

*   `flex-grow` (`grow`): アイテムが伸長する比率。
*   `flex-shrink` (`shrink`): アイテムが縮小する比率。
*   `flex`: `flex-grow`, `flex-shrink`, `flex-basis` のショートハンド。
*   `width` (`w-*`), `height` (`h-*`): `flex-basis: auto` の場合の基本サイズに影響します。

## 公式ドキュメント参照
*   [Tailwind CSS: Flex Basis](https://tailwindcss.com/docs/flex-basis)
*   [MDN: flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)
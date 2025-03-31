## タイトル
title: Flexbox & Grid: Flex Shrink (フレックス縮小係数)

## タグ
tags: ["tailwindcss", "utilities", "flexbox", "flex-shrink", "shrink", "sizing", "layout"]

## 概要
`shrink` および `shrink-0` ユーティリティは、Flex コンテナ内のスペースが不足した場合に、Flex アイテムがどの程度縮小するかを制御します。CSS の `flex-shrink` プロパティに対応します。

`flex-shrink` は、コンテナ内のアイテムの `flex-basis` (基本サイズ) の合計がコンテナサイズを超える場合に、その**超過分**のスペースを各アイテムの `flex-shrink` 係数と `flex-basis` を考慮した**比率**に応じて、各アイテムから取り除きます (縮小させます)。

## 基本的な使い方とパラメータ

*   **`shrink`**: デフォルト (`flex-shrink: 1;`)。スペースが不足した場合、他の `shrink` が指定されたアイテムと相対的に縮小します。`flex-1`, `flex-auto`, `flex-initial` の一部です。
*   **`shrink-0`**: (`flex-shrink: 0;`)。スペースが不足してもアイテムは縮小しません。自身の `flex-basis` またはコンテンツサイズを維持しようとします。`flex-none` の一部です。

```html
<div class="flex border rounded dark:border-gray-700 p-2 space-x-2 w-96 bg-gray-100 dark:bg-gray-800"> {/* 固定幅コンテナ */}

  {/* shrink (デフォルト): スペースが足りないので縮小する */}
  <div class="shrink basis-64 p-2 rounded bg-blue-300 dark:bg-blue-800">
    Shrink (Default) basis-64 (256px) - Will shrink
  </div>
  <div class="shrink basis-64 p-2 rounded bg-blue-400 dark:bg-blue-700">
    Shrink (Default) basis-64 (256px) - Will shrink
  </div>
  {/* 合計 basis (512px) > コンテナ幅 (384px) なので縮小される */}

</div>

<hr class="my-8 border-dashed dark:border-gray-700">

<div class="flex border rounded dark:border-gray-700 p-2 space-x-2 w-96 bg-gray-100 dark:bg-gray-800">

  {/* shrink-0: 縮小しない */}
  <div class="shrink-0 basis-64 p-2 rounded bg-green-300 dark:bg-green-800">
    No Shrink (shrink-0) basis-64 (256px) - Won't shrink
  </div>
  <div class="shrink basis-64 p-2 rounded bg-green-400 dark:bg-green-700">
    Shrink (Default) basis-64 (256px) - Will shrink more
  </div>
  {/* shrink-0 の要素は縮小せず、残りの要素がより多く縮小する */}

</div>

<hr class="my-8 border-dashed dark:border-gray-700">

<div class="flex border rounded dark:border-gray-700 p-2 space-x-2 w-96 bg-gray-100 dark:bg-gray-800">

  {/* 異なる shrink 係数 (任意の値を使用) */}
  <div class="shrink-[2] basis-64 p-2 rounded bg-purple-300 dark:bg-purple-800">
    Shrink 2 basis-64
  </div>
  <div class="shrink basis-64 p-2 rounded bg-purple-400 dark:bg-purple-700">
    Shrink 1 basis-64
  </div>
  {/* Shrink 2 は Shrink 1 の 2 倍の比率で縮小する (basis も考慮される) */}

</div>
```

## 縮小量の計算 (簡略化)

実際の縮小量は `flex-shrink` 係数だけでなく、`flex-basis` (または `width`/`height`) も考慮されるため、単純な比率にはなりません。大まかには、`(flex-shrink * flex-basis)` の値が大きいアイテムほど、超過スペースに対してより多くの割合で縮小します。

正確な計算は複雑ですが、「`shrink-0` は縮小しない」「`shrink` (デフォルトの 1) は縮小する」「より大きな `shrink` 係数を持つアイテムは、より縮小しやすい」と理解しておけば十分な場合が多いです。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて縮小するかどうかを変更できます。

```html
{/* デフォルトは縮小する、md 以上では縮小しない */}
<div class="shrink md:shrink-0 ...">...</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.flexShrink` でカスタムの `flex-shrink` 値 (に対応するクラス) を追加できますが、任意の値を使う方が一般的です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      flexShrink: {
        '2': '2', // shrink-2 クラスを追加 (flex-shrink: 2;)
      },
    },
  },
}
```

## 任意の値 (Arbitrary Values)

`shrink-[{number}]` の形式で、任意の `flex-shrink` 係数を直接指定できます。

```html
<div class="shrink-[3] ...">Shrinks more readily</div>
```

## 注意点

*   `flex-shrink` は Flex アイテムにのみ適用されます。
*   `flex-shrink: 0` (`shrink-0`) を指定すると、アイテムは `flex-basis` や `min-width` で指定されたサイズよりも小さくなることはありません (ただし、コンテナ自体のサイズがそれより小さい場合ははみ出す可能性があります)。
*   `flex-wrap: wrap;` が指定されている場合、アイテムは縮小する代わりに折り返すため、`flex-shrink` の効果は通常見られません。

## 関連ユーティリティ

*   `flex-grow` (`grow`): アイテムが伸長する比率。
*   `flex-basis` (`basis-*`): アイテムの基本サイズ。
*   `flex`: `flex-grow`, `flex-shrink`, `flex-basis` のショートハンド。
*   `min-width` (`min-w-*`): アイテムの最小幅。`flex-shrink` による縮小の下限に影響します。

## 公式ドキュメント参照
*   [Tailwind CSS: Flex Shrink](https://tailwindcss.com/docs/flex-shrink)
*   [MDN: flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
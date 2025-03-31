## タイトル
title: Flexbox & Grid: Grid Auto Columns (暗黙的なグリッド列サイズ)

## タグ
tags: ["tailwindcss", "utilities", "grid", "grid-auto-columns", "layout", "columns", "implicit grid"]

## 概要
`auto-cols-{size}` ユーティリティは、Grid レイアウトにおいて、`grid-template-columns` で明示的に配置されなかったり、グリッドの範囲外に配置されたりして**暗黙的に作成されるグリッド列**のサイズを制御します。CSS の `grid-auto-columns` プロパティに対応します。

これは主に `grid-auto-flow: column` と組み合わせて使用され、自動的に追加される列の幅を指定するのに役立ちます。

## 基本的な使い方とパラメータ

値は通常、キーワードまたは Tailwind の `theme.spacing` スケールに対応するキーを使用します。

*   **`auto-cols-auto`**: デフォルト。暗黙的な列の幅は、その列に含まれる最も幅広のアイテムのコンテンツに基づいて決まります。
*   **`auto-cols-min`**: 暗黙的な列の幅は、その列に含まれる最も幅広のアイテムの**最小コンテンツサイズ**に基づいて決まります。
*   **`auto-cols-max`**: 暗黙的な列の幅は、その列に含まれる最も幅広のアイテムの**最大コンテンツサイズ**に基づいて決まります。
*   **`auto-cols-fr`**: 暗黙的な列は、利用可能な残りのスペースを均等に分割します (`1fr`)。
*   **`auto-cols-{spacing}`**: (v3.3 以降) 暗黙的な列の幅を `theme.spacing` スケールの値で固定します (例: `auto-cols-64` は `16rem`)。

```html
<div class="space-y-8 p-4">

  {/* grid-auto-flow: column との組み合わせ */}
  <div>
    <p class="text-sm mb-1">grid-flow-col auto-cols-auto (Default)</p>
    {/* コンテナに高さと列数を指定しない場合、列幅はコンテンツ依存 */}
    <div class="grid grid-flow-col auto-cols-auto gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded h-24 overflow-x-auto">
      <div class="p-4 rounded bg-blue-300 dark:bg-blue-800">Auto Width 1</div>
      <div class="p-4 rounded bg-blue-400 dark:bg-blue-700">Wider Content Item 2</div>
      <div class="p-4 rounded bg-blue-500 dark:bg-blue-600">Item 3</div>
      <div class="p-4 rounded bg-blue-300 dark:bg-blue-800">4</div>
    </div>
  </div>

  <div>
    <p class="text-sm mb-1">grid-flow-col auto-cols-min</p>
    <div class="grid grid-flow-col auto-cols-min gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded h-24 overflow-x-auto">
      <div class="p-4 rounded bg-green-300 dark:bg-green-800">Auto Width 1</div>
      <div class="p-4 rounded bg-green-400 dark:bg-green-700">Wider Content Item 2</div> {/* 最小幅になる */}
      <div class="p-4 rounded bg-green-500 dark:bg-green-600">Item 3</div>
      <div class="p-4 rounded bg-green-300 dark:bg-green-800">4</div>
    </div>
  </div>

  <div>
    <p class="text-sm mb-1">grid-flow-col auto-cols-max</p>
    <div class="grid grid-flow-col auto-cols-max gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded h-24 overflow-x-auto">
      <div class="p-4 rounded bg-yellow-300 dark:bg-yellow-800">Auto Width 1</div>
      <div class="p-4 rounded bg-yellow-400 dark:bg-yellow-700">Wider Content Item 2</div> {/* 最大幅になる */}
      <div class="p-4 rounded bg-yellow-500 dark:bg-yellow-600">Item 3</div>
      <div class="p-4 rounded bg-yellow-300 dark:bg-yellow-800">4</div>
    </div>
  </div>

  <div>
    <p class="text-sm mb-1">grid-flow-col auto-cols-fr</p>
    {/* コンテナ幅が必要 */}
    <div class="grid grid-flow-col auto-cols-fr gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded h-24 w-full">
      <div class="p-4 rounded bg-purple-300 dark:bg-purple-800 text-center">1fr</div>
      <div class="p-4 rounded bg-purple-400 dark:bg-purple-700 text-center">1fr</div>
      <div class="p-4 rounded bg-purple-500 dark:bg-purple-600 text-center">1fr</div>
      <div class="p-4 rounded bg-purple-300 dark:bg-purple-800 text-center">1fr</div>
    </div>
  </div>

   <div>
    <p class="text-sm mb-1">grid-flow-col auto-cols-64 (Fixed Width - v3.3+)</p>
    <div class="grid grid-flow-col auto-cols-64 gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded h-24 overflow-x-auto">
      <div class="p-4 rounded bg-pink-300 dark:bg-pink-800">Fixed 16rem</div>
      <div class="p-4 rounded bg-pink-400 dark:bg-pink-700">Fixed 16rem</div>
      <div class="p-4 rounded bg-pink-500 dark:bg-pink-600">Fixed 16rem</div>
      <div class="p-4 rounded bg-pink-300 dark:bg-pink-800">Fixed 16rem</div>
    </div>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて暗黙的な列のサイズを変更できます。

```html
<div class="grid grid-flow-col auto-cols-auto md:auto-cols-fr ...">
  {/* デフォルトはコンテンツ幅、md 以上で均等分割 */}
  {/* ... items ... */}
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.gridAutoColumns` でカスタム値を定義できます。値には `grid-auto-columns` プロパティで有効な値を文字列で指定します (例: `'minmax(0, 1fr)'`, `'200px'`)。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gridAutoColumns: {
        '2xs': '16rem', // 256px
        'compact': 'min-content',
      },
    },
  },
}
```

```html
<div class="grid grid-flow-col auto-cols-compact gap-4 ...">...</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って `grid-auto-columns` を直接指定することも可能です。

```html
<div class="grid grid-flow-col auto-cols-[250px] gap-4 ...">...</div>
<div class="grid grid-flow-col auto-cols-[minmax(100px,_1fr)] gap-4 ...">...</div>
```

## 注意点

*   `grid-auto-columns` は Grid コンテナに適用します。
*   このプロパティは、**暗黙的に作成された列**にのみ影響します。`grid-template-columns` で明示的に定義された列のサイズは変更しません。
*   `grid-auto-flow` が `row` (デフォルト) の場合、`grid-auto-columns` は通常効果がありません (暗黙的な列が作成されにくいため)。主に `grid-auto-flow: column;` と組み合わせて使用します。

## 関連ユーティリティ

*   `display` (`grid`, `inline-grid`): Grid コンテナを作成します。
*   `grid-auto-flow`: アイテムの自動配置方向を制御します。
*   `grid-template-columns`: グリッドの列を明示的に定義します。
*   `grid-auto-rows`: 暗黙的に作成される**行**の高さを制御します。

## 公式ドキュメント参照
*   [Tailwind CSS: Grid Auto Columns](https://tailwindcss.com/docs/grid-auto-columns)
*   [MDN: grid-auto-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
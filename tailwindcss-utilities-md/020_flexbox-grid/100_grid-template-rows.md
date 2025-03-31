## タイトル
title: Flexbox & Grid: Grid Template Rows (グリッド行定義)

## タグ
tags: ["tailwindcss", "utilities", "grid", "grid-template-rows", "layout", "rows", "responsive"]

## 概要
`grid-rows-{number}` および `grid-rows-none` ユーティリティは、Grid コンテナ内に明示的な**行**トラックを作成し、そのサイズを定義します。CSS の `grid-template-rows` プロパティに対応します。これにより、コンテンツを配置するための水平方向のグリッド線を設定します。

## 基本的な使い方とパラメータ

*   **`grid-rows-{number}`**: 指定した数 (`1` ～ `12`) の**均等な高さ**を持つ行を作成します。
    *   例: `grid-rows-3` は `grid-template-rows: repeat(3, minmax(0, 1fr));` に対応し、利用可能な高さを 3 等分する行を 3 つ作成します (ただし、コンテナに高さが指定されている必要があります)。
*   **`grid-rows-none`**: デフォルト (`grid-template-rows: none;`)。明示的な行定義を行いません。行の高さはコンテンツに基づいて暗黙的に決定されます。

```html
<div class="space-y-8 p-4">

  {/* grid-rows-3: 3つの均等な高さの行 */}
  {/* コンテナに高さ (h-48) が必要 */}
  <div>
    <p class="text-sm mb-1">grid-rows-3 (Container height needed: h-48)</p>
    <div class="grid grid-rows-3 grid-flow-col gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded h-48"> {/* grid-flow-col で列方向に配置 */}
      <div class="p-4 rounded bg-blue-300 dark:bg-blue-800">1</div>
      <div class="p-4 rounded bg-blue-400 dark:bg-blue-700">2</div>
      <div class="p-4 rounded bg-blue-500 dark:bg-blue-600">3</div>
      <div class="p-4 rounded bg-blue-300 dark:bg-blue-800">4</div>
      <div class="p-4 rounded bg-blue-400 dark:bg-blue-700">5</div>
      <div class="p-4 rounded bg-blue-500 dark:bg-blue-600">6</div>
    </div>
  </div>

  {/* grid-rows-none (デフォルト): 行の高さはコンテンツ依存 */}
   <div>
    <p class="text-sm mb-1">grid-rows-none (Default)</p>
    <div class="grid grid-cols-3 grid-rows-none gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded">
      <div class="p-4 rounded bg-green-300 dark:bg-green-800">Item 1</div>
      <div class="p-12 rounded bg-green-400 dark:bg-green-700">Item 2 (Tall)</div>
      <div class="p-4 rounded bg-green-500 dark:bg-green-600">Item 3</div>
      <div class="p-4 rounded bg-green-300 dark:bg-green-800">Item 4</div>
      <div class="p-4 rounded bg-green-400 dark:bg-green-700">Item 5</div>
      <div class="p-8 rounded bg-green-500 dark:bg-green-600">Item 6 (Medium)</div>
      {/* 行の高さは各行で最も高いアイテムに依存 */}
    </div>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて行の定義を変更できます。

```html
{/* デフォルトは暗黙的な行、md 以上で 2 行グリッド */}
<div class="grid grid-rows-none md:grid-rows-2 md:h-64 gap-4">
  {/* ... content ... */}
</div>
```

## 複雑な行定義 (任意の値)

`grid-cols-*` と同様に、`grid-rows-*` も均等な高さの行しか作成できません。異なる高さの行や、コンテンツに合わせた高さ (`auto`)、利用可能なスペースに基づく高さ (`fr` 単位) を組み合わせたい場合は、任意の値 (Arbitrary Values) を使用します。角括弧 `[]` 内に CSS の `grid-template-rows` プロパティの値を直接記述します (スペースはアンダースコア `_` に置き換えます)。

```html
{/* ヘッダー (auto) + メイン (可変) + フッター (auto) */}
<div class="grid grid-rows-[auto_1fr_auto] h-screen gap-4">
  <header class="bg-yellow-200 dark:bg-yellow-800 p-4 rounded">Header (auto height)</header>
  <main class="bg-yellow-300 dark:bg-yellow-700 p-4 rounded">Main Content (1fr height)</main>
  <footer class="bg-yellow-400 dark:bg-yellow-600 p-4 rounded">Footer (auto height)</footer>
</div>

{/* repeat() 関数を使用 */}
<div class="grid grid-rows-[repeat(auto-fill,minmax(100px,auto))] gap-4 h-96 overflow-y-auto">
  {/* 最低 100px の高さを持つ行を自動で埋める */}
  <div class="bg-purple-200 p-4 rounded">Row Item 1</div>
  <div class="bg-purple-300 p-4 rounded">Row Item 2</div>
  <div class="bg-purple-400 p-4 rounded">Row Item 3</div>
  {/* ... */}
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.gridTemplateRows` でカスタムの行定義 (に対応するクラス名) を追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gridTemplateRows: {
        // 8 行グリッドを追加
        '8': 'repeat(8, minmax(0, 1fr))',
        // レイアウト用のカスタム定義
        'layout': 'auto 1fr auto',
      },
    },
  },
}
```

```html
<div class="grid grid-rows-8 gap-4">...</div>
<div class="grid grid-rows-layout h-screen">...</div>
```

## 注意点

*   `grid-rows-*` は Grid コンテナ (親要素に `grid` または `inline-grid` が適用されている要素) に適用します。
*   `grid-rows-{number}` で均等な高さを実現するには、多くの場合、Grid コンテナ自体に**高さ (`h-*`) が指定されている**必要があります。高さが指定されていない場合、`1fr` はコンテンツの高さに基づいて計算されるため、必ずしも均等にはなりません。
*   任意の値を使うと非常に柔軟なレイアウトが可能ですが、CSS Grid の `grid-template-rows` プロパティの知識が必要になります。

## 関連ユーティリティ

*   `display` (`grid`, `inline-grid`): Grid コンテナを作成します。
*   `grid-template-columns`: グリッドの列を定義します。
*   `grid-row` (`row-span-*`, `row-start-*`, `row-end-*`): アイテムがどの行を占めるかを制御します。
*   `grid-auto-rows`: 暗黙的に作成される行の高さを制御します。
*   `gap`: グリッドアイテム間の間隔。
*   `height` (`h-*`): コンテナの高さを指定します。

## 公式ドキュメント参照
*   [Tailwind CSS: Grid Template Rows](https://tailwindcss.com/docs/grid-template-rows)
*   [MDN: grid-template-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)
*   [CSS Grid Layout (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
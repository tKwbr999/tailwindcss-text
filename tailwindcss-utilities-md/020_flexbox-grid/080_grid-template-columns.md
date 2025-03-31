## タイトル
title: Flexbox & Grid: Grid Template Columns (グリッド列定義)

## タグ
tags: ["tailwindcss", "utilities", "grid", "grid-template-columns", "layout", "columns", "responsive"]

## 概要
`grid-cols-{number}` および `grid-cols-none` ユーティリティは、Grid コンテナ内の列の数と幅を定義します。CSS の `grid-template-columns` プロパティに対応します。これにより、コンテンツを配置するための垂直方向のグリッド線を設定します。

## 基本的な使い方とパラメータ

*   **`grid-cols-{number}`**: 指定した数 (`1` ～ `12`) の**均等な幅**を持つ列を作成します。
    *   例: `grid-cols-3` は `grid-template-columns: repeat(3, minmax(0, 1fr));` に対応し、利用可能な幅を 3 等分する列を 3 つ作成します。
*   **`grid-cols-none`**: デフォルト (`grid-template-columns: none;`)。明示的な列定義を行いません。アイテムは暗黙的なグリッドルールに従って配置されます (通常は 1 列)。

```html
<div class="space-y-8 p-4">

  {/* grid-cols-3: 3つの均等な列 */}
  <div>
    <p class="text-sm mb-1">grid-cols-3</p>
    <div class="grid grid-cols-3 gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded">
      <div class="p-4 rounded bg-blue-300 dark:bg-blue-800">1</div>
      <div class="p-4 rounded bg-blue-400 dark:bg-blue-700">2</div>
      <div class="p-4 rounded bg-blue-500 dark:bg-blue-600">3</div>
      <div class="p-4 rounded bg-blue-300 dark:bg-blue-800">4</div>
      <div class="p-4 rounded bg-blue-400 dark:bg-blue-700">5</div>
    </div>
  </div>

  {/* grid-cols-6: 6つの均等な列 */}
  <div>
    <p class="text-sm mb-1">grid-cols-6</p>
    <div class="grid grid-cols-6 gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded">
      <div class="p-2 rounded bg-green-300 dark:bg-green-800">1</div>
      <div class="p-2 rounded bg-green-400 dark:bg-green-700">2</div>
      <div class="p-2 rounded bg-green-500 dark:bg-green-600">3</div>
      <div class="p-2 rounded bg-green-300 dark:bg-green-800">4</div>
      <div class="p-2 rounded bg-green-400 dark:bg-green-700">5</div>
      <div class="p-2 rounded bg-green-500 dark:bg-green-600">6</div>
      <div class="p-2 rounded bg-green-300 dark:bg-green-800">7</div>
    </div>
  </div>

   {/* grid-cols-none (デフォルトに近い挙動) */}
   <div>
    <p class="text-sm mb-1">grid-cols-none (Implicit Grid)</p>
    <div class="grid grid-cols-none p-2 bg-gray-100 dark:bg-gray-800 rounded">
      <div class="p-4 rounded bg-yellow-300 dark:bg-yellow-800">Implicit Item 1</div>
      <div class="p-4 rounded bg-yellow-400 dark:bg-yellow-700 mt-2">Implicit Item 2</div> {/* 通常は縦に並ぶ */}
    </div>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて列数を変更するのは、レスポンシブグリッドレイアウトの基本です。

```html
{/* デフォルトは 1 列、sm で 2 列、lg で 4 列 */}
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  {/* ... */}
</div>
```

## 複雑な列定義 (任意の値)

`grid-cols-{number}` は均等幅の列しか作成できません。異なる幅の列や、コンテンツに合わせた幅 (`auto`)、利用可能なスペースに基づく幅 (`fr` 単位) を組み合わせたい場合は、任意の値 (Arbitrary Values) を使用します。角括弧 `[]` 内に CSS の `grid-template-columns` プロパティの値を直接記述します (スペースはアンダースコア `_` に置き換えます)。

```html
{/* サイドバー (固定幅) + メインコンテンツ (可変幅) */}
<div class="grid grid-cols-[200px_1fr] gap-4">
  <aside class="bg-gray-200 dark:bg-gray-700 p-4 rounded">Sidebar (200px)</aside>
  <main class="bg-gray-300 dark:bg-gray-600 p-4 rounded">Main Content (1fr)</main>
</div>

{/* 3 列レイアウト: auto 幅 + 可変幅 + 固定幅 */}
<div class="grid grid-cols-[auto_1fr_150px] gap-4">
  <div class="bg-red-200 p-2 rounded">Auto Width</div>
  <div class="bg-red-300 p-2 rounded">1fr</div>
  <div class="bg-red-400 p-2 rounded">150px</div>
</div>

{/* repeat() 関数を使用 */}
<div class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
  {/* 幅 150px 以上を維持しつつ、可能な限り多くの列を自動で作成 */}
  <div class="bg-indigo-200 p-4 rounded">Item</div>
  <div class="bg-indigo-300 p-4 rounded">Item</div>
  <div class="bg-indigo-400 p-4 rounded">Item</div>
  <div class="bg-indigo-500 p-4 rounded">Item</div>
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.gridTemplateColumns` でカスタムの列定義 (に対応するクラス名) を追加できます。キーがクラス名 (`grid-cols-{key}`) になり、値が `grid-template-columns` の値になります。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        // 16 カラムグリッドを追加
        '16': 'repeat(16, minmax(0, 1fr))',
        // サイドバーレイアウト用のカスタム定義
        'sidebar': '240px 1fr',
        // フッターレイアウト用のカスタム定義
        'footer': '200px minmax(900px, 1fr) 100px',
      },
    },
  },
}
```

```html
<div class="grid grid-cols-16 gap-4">...</div>
<div class="grid grid-cols-sidebar gap-8">...</div>
```

## 注意点

*   `grid-cols-*` は Grid コンテナ (親要素に `grid` または `inline-grid` が適用されている要素) に適用します。
*   任意の値を使うと非常に柔軟なレイアウトが可能ですが、CSS Grid の `grid-template-columns` プロパティの知識が必要になります。
*   `fr` 単位は、固定幅 (`px`, `rem`) や `auto` 幅のトラックを除いた**残りの利用可能なスペース**を分割する比率を表します。

## 関連ユーティリティ

*   `display` (`grid`, `inline-grid`): Grid コンテナを作成します。
*   `grid-template-rows`: グリッドの行を定義します。
*   `grid-column` (`col-span-*`, `col-start-*`, `col-end-*`): アイテムがどの列を占めるかを制御します。
*   `gap`: グリッドアイテム間の間隔。

## 公式ドキュメント参照
*   [Tailwind CSS: Grid Template Columns](https://tailwindcss.com/docs/grid-template-columns)
*   [MDN: grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
*   [CSS Grid Layout (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
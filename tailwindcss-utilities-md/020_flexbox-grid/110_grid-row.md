## タイトル
title: Flexbox & Grid: Grid Row Start / End / Span (グリッド行の配置)

## タグ
tags: ["tailwindcss", "utilities", "grid", "grid-row", "grid-row-start", "grid-row-end", "span", "layout", "responsive"]

## 概要
`row-span-{n}`, `row-start-{n}`, `row-end-{n}` ユーティリティは、Grid アイテムがグリッドコンテナ内でどの**行**を占めるか、またはいくつの行にまたがるかを制御します。CSS の `grid-row-start`, `grid-row-end`, および `grid-row` ショートハンドプロパティに対応します。

これらは `grid-template-rows` で定義されたグリッド線 (または暗黙的に生成されたグリッド線) に基づいてアイテムを配置します。

## 基本的な使い方とパラメータ

### 行スパン (`row-span-{n}`)

アイテムがいくつの行にまたがるかを指定します。

*   **`row-span-{number}`**: アイテムが指定した数 (`1` ～ `12`) の行にまたがります。
    *   例: `row-span-2` は `grid-row: span 2 / span 2;` に対応します。
*   **`row-span-full`**: アイテムがグリッドのすべての行にまたがります (`grid-row: 1 / -1;`)。コンテナに明示的な行数 (`grid-rows-*`) が定義されている場合に有効です。

```html
<div class="grid grid-rows-3 grid-flow-col gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded h-48"> {/* 3行グリッド, 列方向に自動配置 */}
  <div class="row-span-2 p-4 rounded bg-blue-300 dark:bg-blue-800">row-span-2</div>
  <div class="p-4 rounded bg-blue-400 dark:bg-blue-700">Default (span 1)</div>
  <div class="p-4 rounded bg-blue-500 dark:bg-blue-600">Default (span 1)</div>
  <div class="row-span-3 p-4 rounded bg-blue-600 dark:bg-blue-500">row-span-3 (row-span-full)</div>
  <div class="p-4 rounded bg-blue-400 dark:bg-blue-700">Default (span 1)</div>
</div>
```

### 開始・終了ライン (`row-start-{n}`, `row-end-{n}`)

アイテムが開始または終了する水平グリッド線の番号を指定します。グリッド線は上から 1 から数え始めます。負の値は末尾から数えます (`-1` は最後の線)。

*   **`row-start-{number}`**: アイテムが開始するグリッド線の番号 (`1` ～ `13`) を指定します。
*   **`row-end-{number}`**: アイテムが終了するグリッド線の番号 (`1` ～ `13`) を指定します。
*   **`row-start-auto`**, **`row-end-auto`**: デフォルト。自動配置されます。

```html
<div class="grid grid-rows-4 grid-flow-col gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded h-64"> {/* 4行グリッド */}
  {/* 2 番目のラインから 4 番目のラインまで (2 行分) */}
  <div class="row-start-2 row-end-4 p-4 rounded bg-green-300 dark:bg-green-800">row-start-2 row-end-4</div>

  {/* 3 番目のラインから開始 (残りは自動) */}
  <div class="row-start-3 row-span-2 p-4 rounded bg-green-400 dark:bg-green-700">row-start-3 row-span-2</div>

  {/* 最初のラインから 3 行分 (row-span-3 と同じ) */}
  <div class="row-start-1 row-end-4 p-4 rounded bg-green-500 dark:bg-green-600">row-start-1 row-end-4</div>

  {/* 最後から 2 番目のラインで終了 */}
  <div class="row-start-2 row-end-[-1] p-4 rounded bg-green-600 dark:bg-green-500">row-start-2 row-end-[-1]</div>
  {/* row-end-5 と同じ (4 行グリッドの場合) */}
</div>
```

**注意:** `row-end-*` は、アイテムがそのラインの**前**で終了することを意味します。例えば `row-end-4` は 1 から 3 行目を占めます。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてアイテムの行スパンや開始/終了位置を変更できます。

```html
<div class="grid grid-rows-4 gap-4">
  {/* モバイルでは 1 行、md 以上では 2 行にまたがる */}
  <div class="row-span-1 md:row-span-2 bg-yellow-200 p-4 rounded">Content A</div>

  {/* モバイルでは自動配置、md 以上では 3 行目から開始 */}
  <div class="row-auto md:row-start-3 md:row-span-2 bg-yellow-300 p-4 rounded">Content B</div>
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.gridRow`, `theme.extend.gridRowStart`, `theme.extend.gridRowEnd` でカスタム値を追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gridRow: {
        'span-16': 'span 16 / span 16', // 16 行スパン用
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        // ...
      },
      gridRowEnd: {
        '8': '8',
        '9': '9',
        // ...
      },
    },
  },
}
```

## 任意の値 (Arbitrary Values)

任意の値を使って `grid-row`, `grid-row-start`, `grid-row-end` を直接指定することも可能です。

```html
<div class="row-[span_3_/_span_8] ...">Starts at line 3, ends at line 8</div>
<div class="row-start-[5] ...">Starts at line 5</div>
<div class="row-end-[7] ...">Ends before line 7</div>
<div class="row-[_span_16_/_span_16] ...">Spans 16 rows (if grid has enough)</div>
```
(任意の値で `span N` を指定する場合、`row-[_span_N_/_span_N]` のように記述する必要がある場合があります。)

## 注意点

*   これらのユーティリティは Grid アイテム (Grid コンテナの直接の子要素) にのみ適用されます。
*   グリッド線の番号は上から 1 から始まります。
*   `row-span-*` はアイテムの開始位置に依存せず、単純に指定された数の行にまたがります。
*   `row-start-*` と `row-end-*` を同時に指定すると、アイテムの正確な垂直方向の位置と高さが決まります。
*   `grid-template-rows` で明示的に行が定義されていない場合でも、これらのユーティリティは暗黙的なグリッドに対して機能します。

## 関連ユーティリティ

*   `display` (`grid`, `inline-grid`): Grid コンテナを作成します。
*   `grid-template-rows`: グリッドの行を定義します。
*   `grid-column` (`col-span-*`, `col-start-*`, `col-end-*`): アイテムがどの列を占めるかを制御します。
*   `grid-auto-rows`: 暗黙的に作成される行の高さを制御します。

## 公式ドキュメント参照
*   [Tailwind CSS: Grid Row](https://tailwindcss.com/docs/grid-row)
*   [MDN: grid-row](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
*   [MDN: grid-row-start](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start)
*   [MDN: grid-row-end](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end)
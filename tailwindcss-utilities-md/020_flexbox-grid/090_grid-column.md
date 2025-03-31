## タイトル
title: Flexbox & Grid: Grid Column Start / End / Span (グリッド列の配置)

## タグ
tags: ["tailwindcss", "utilities", "grid", "grid-column", "grid-column-start", "grid-column-end", "span", "layout", "responsive"]

## 概要
`col-span-{n}`, `col-start-{n}`, `col-end-{n}` ユーティリティは、Grid アイテムがグリッドコンテナ内でどの列を占めるか、またはいくつの列にまたがるかを制御します。CSS の `grid-column-start`, `grid-column-end`, および `grid-column` ショートハンドプロパティに対応します。

これらは `grid-template-columns` で定義されたグリッド線に基づいてアイテムを配置します。

## 基本的な使い方とパラメータ

### カラムスパン (`col-span-{n}`)

アイテムがいくつの列にまたがるかを指定します。

*   **`col-span-{number}`**: アイテムが指定した数 (`1` ～ `12`) の列にまたがります。
    *   例: `col-span-2` は `grid-column: span 2 / span 2;` に対応します。
*   **`col-span-full`**: アイテムがグリッドのすべての列にまたがります (`grid-column: 1 / -1;`)。

```html
<div class="grid grid-cols-6 gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
  <div class="col-span-4 p-4 rounded bg-blue-300 dark:bg-blue-800">col-span-4</div>
  <div class="col-span-2 p-4 rounded bg-blue-400 dark:bg-blue-700">col-span-2</div>
  <div class="p-4 rounded bg-blue-300 dark:bg-blue-800">Default (span 1)</div>
  <div class="col-span-5 p-4 rounded bg-blue-500 dark:bg-blue-600">col-span-5</div>
  <div class="col-span-full p-4 rounded bg-blue-600 dark:bg-blue-500 text-center">col-span-full</div>
</div>
```

### 開始・終了ライン (`col-start-{n}`, `col-end-{n}`)

アイテムが開始または終了するグリッド線の番号を指定します。グリッド線は 1 から数え始めます。負の値は末尾から数えます (`-1` は最後の線)。

*   **`col-start-{number}`**: アイテムが開始するグリッド線の番号 (`1` ～ `13`) を指定します。
*   **`col-end-{number}`**: アイテムが終了するグリッド線の番号 (`1` ～ `13`) を指定します。
*   **`col-start-auto`**, **`col-end-auto`**: デフォルト。自動配置されます。

```html
<div class="grid grid-cols-6 gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
  {/* 2 番目のラインから 5 番目のラインまで (3 列分) */}
  <div class="col-start-2 col-end-5 p-4 rounded bg-green-300 dark:bg-green-800">col-start-2 col-end-5</div>

  {/* 4 番目のラインから開始 (残りは自動) */}
  <div class="col-start-4 col-span-2 p-4 rounded bg-green-400 dark:bg-green-700">col-start-4 col-span-2</div>

  {/* 最初のラインから 3 列分 (col-span-3 と同じ) */}
  <div class="col-start-1 col-end-4 p-4 rounded bg-green-500 dark:bg-green-600">col-start-1 col-end-4</div>

  {/* 最後から 2 番目のラインで終了 */}
  <div class="col-start-5 col-end-[-1] p-4 rounded bg-green-600 dark:bg-green-500">col-start-5 col-end-[-1]</div>
  {/* col-end-7 と同じ (6 列グリッドの場合) */}
</div>
```

**注意:** `col-end-*` は、アイテムがそのラインの**前**で終了することを意味します。例えば `col-end-5` は 1 から 4 列目を占めます。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてアイテムのスパンや開始/終了位置を変更できます。これは複雑なレスポンシブグリッドレイアウトを作成する上で非常に重要です。

```html
<div class="grid grid-cols-4 md:grid-cols-12 gap-4">
  {/* モバイルでは 2 列、md 以上では 6 列 */}
  <div class="col-span-2 md:col-span-6 bg-yellow-200 p-4 rounded">Content A</div>

  {/* モバイルでは 2 列、md 以上では 4 列で 7 列目から開始 */}
  <div class="col-span-2 md:col-span-4 md:col-start-7 bg-yellow-300 p-4 rounded">Content B</div>

  {/* モバイルでは全幅、md 以上では 12 列 */}
  <div class="col-span-4 md:col-span-12 bg-yellow-400 p-4 rounded">Content C</div>
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.gridColumn`, `theme.extend.gridColumnStart`, `theme.extend.gridColumnEnd` でカスタム値を追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gridColumn: {
        'span-16': 'span 16 / span 16', // 16 カラムスパン用
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
      },
    },
  },
}
```

## 任意の値 (Arbitrary Values)

任意の値を使って `grid-column`, `grid-column-start`, `grid-column-end` を直接指定することも可能です。

```html
<div class="col-[span_3_/_span_8] ...">Starts at line 3, ends at line 8</div>
<div class="col-start-[9] ...">Starts at line 9</div>
<div class="col-end-[11] ...">Ends before line 11</div>
<div class="col-[_span_16_/_span_16] ...">Spans 16 columns (if grid has enough)</div>
```
(任意の値で `span N` を指定する場合、`col-[_span_N_/_span_N]` のように記述する必要がある場合があります。)

## 注意点

*   これらのユーティリティは Grid アイテム (Grid コンテナの直接の子要素) にのみ適用されます。
*   グリッド線の番号は 1 から始まります。
*   `col-span-*` はアイテムの開始位置に依存せず、単純に指定された数の列にまたがります。
*   `col-start-*` と `col-end-*` を同時に指定すると、アイテムの正確な位置と幅が決まります。

## 関連ユーティリティ

*   `display` (`grid`, `inline-grid`): Grid コンテナを作成します。
*   `grid-template-columns`: グリッドの列を定義します。
*   `grid-row` (`row-span-*`, `row-start-*`, `row-end-*`): アイテムがどの行を占めるかを制御します。

## 公式ドキュメント参照
*   [Tailwind CSS: Grid Column](https://tailwindcss.com/docs/grid-column)
*   [MDN: grid-column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)
*   [MDN: grid-column-start](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start)
*   [MDN: grid-column-end](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end)
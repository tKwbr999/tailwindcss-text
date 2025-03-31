## タイトル
title: Flexbox & Grid: Grid Auto Flow (グリッド自動配置方向)

## タグ
tags: ["tailwindcss", "utilities", "grid", "grid-auto-flow", "layout", "row", "column", "dense"]

## 概要
`grid-flow-{value}` ユーティリティは、Grid コンテナ内で明示的に配置されていないアイテム (自動配置アイテム) が、グリッド内の空いているスペースにどのように流れ込むかを制御します。CSS の `grid-auto-flow` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`grid-flow-row`**: デフォルト。アイテムは行 (水平方向) に沿って配置され、必要に応じて新しい行が追加されます。
*   **`grid-flow-col`**: アイテムは列 (垂直方向) に沿って配置され、必要に応じて新しい列が追加されます。コンテナに明示的な高さ (`h-*`) や行数 (`grid-rows-*`) が設定されている場合に効果が分かりやすいです。
*   **`grid-flow-row-dense`**: `grid-flow-row` と同様に行方向に配置しますが、「密 (dense)」なパッキングアルゴリズムを使用します。グリッド内に空きスペースがある場合、後続のアイテムを前方に移動させてそのスペースを埋めようとします。アイテムの視覚的な順序が DOM 順序と異なる場合があります。
*   **`grid-flow-col-dense`**: `grid-flow-col` と同様に列方向に配置しますが、「密」なパッキングアルゴリズムを使用します。

```html
<div class="space-y-8 p-4">

  {/* grid-flow-row (Default) */}
  <div>
    <p class="text-sm mb-1">grid-flow-row (Default)</p>
    <div class="grid grid-cols-3 grid-rows-2 gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded h-32">
      <div class="p-2 rounded bg-blue-300 dark:bg-blue-800">1</div>
      <div class="p-2 rounded bg-blue-400 dark:bg-blue-700 col-span-2">2 (col-span-2)</div>
      {/* 3 は次の行の先頭へ */}
      <div class="p-2 rounded bg-blue-500 dark:bg-blue-600">3</div>
      <div class="p-2 rounded bg-blue-300 dark:bg-blue-800">4</div>
    </div>
  </div>

  {/* grid-flow-col */}
  <div>
    <p class="text-sm mb-1">grid-flow-col</p>
    <div class="grid grid-cols-3 grid-rows-2 grid-flow-col gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded h-32">
      <div class="p-2 rounded bg-green-300 dark:bg-green-800">1</div>
      <div class="p-2 rounded bg-green-400 dark:bg-green-700 row-span-2">2 (row-span-2)</div>
      {/* 3 は次の列の先頭へ */}
      <div class="p-2 rounded bg-green-500 dark:bg-green-600">3</div>
      <div class="p-2 rounded bg-green-300 dark:bg-green-800">4</div>
    </div>
  </div>

  {/* grid-flow-row-dense */}
  <div>
    <p class="text-sm mb-1">grid-flow-row-dense</p>
    <div class="grid grid-cols-3 grid-rows-3 gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded h-48">
      <div class="p-2 rounded bg-yellow-300 dark:bg-yellow-800 col-span-2">1 (col-span-2)</div>
      <div class="p-2 rounded bg-yellow-400 dark:bg-yellow-700">2</div>
      {/* 3 は通常なら次の行だが、dense により 1 行目の空きスペースに配置される */}
      <div class="p-2 rounded bg-yellow-500 dark:bg-yellow-600">3 (fills gap)</div>
      <div class="p-2 rounded bg-yellow-300 dark:bg-yellow-800">4</div>
      <div class="p-2 rounded bg-yellow-400 dark:bg-yellow-700">5</div>
    </div>
  </div>

   {/* grid-flow-col-dense */}
  <div>
    <p class="text-sm mb-1">grid-flow-col-dense</p>
    <div class="grid grid-cols-3 grid-rows-3 grid-flow-col-dense gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded h-48">
      <div class="p-2 rounded bg-purple-300 dark:bg-purple-800 row-span-2">1 (row-span-2)</div>
      <div class="p-2 rounded bg-purple-400 dark:bg-purple-700">2</div>
      {/* 3 は通常なら次の列だが、dense により 1 列目の空きスペースに配置される */}
      <div class="p-2 rounded bg-purple-500 dark:bg-purple-600">3 (fills gap)</div>
      <div class="p-2 rounded bg-purple-300 dark:bg-purple-800">4</div>
      <div class="p-2 rounded bg-purple-400 dark:bg-purple-700">5</div>
    </div>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて自動配置の方向を変更できます。

```html
{/* デフォルトは行方向、md 以上で列方向 */}
<div class="grid grid-flow-row md:grid-flow-col ...">
  {/* ... items ... */}
</div>
```

## 注意点

*   `grid-auto-flow` は Grid コンテナに適用します。
*   `dense` パッキングアルゴリズムを使用すると、アイテムの**視覚的な順序が DOM の順序と大きく異なる**可能性があります。これはアクセシビリティ (特にキーボードナビゲーションやスクリーンリーダーの読み上げ順序) に悪影響を与える可能性があるため、**慎重に使用する必要があります**。レイアウト上の見た目を優先するあまり、コンテンツの論理的な順序が失われないように注意してください。
*   `grid-flow-col` を効果的に使うには、コンテナに高さ (`h-*`) や明示的な行数 (`grid-rows-*`) が設定されていることが望ましいです。そうでない場合、アイテムは単に水平方向に並び続けるだけに見えることがあります。

## 関連ユーティリティ

*   `display` (`grid`, `inline-grid`): Grid コンテナを作成します。
*   `grid-template-columns`, `grid-template-rows`: グリッドの列と行を明示的に定義します。
*   `grid-auto-columns`, `grid-auto-rows`: 暗黙的に作成される列や行のサイズを制御します。
*   `order`: 個々のアイテムの順序を制御します (`dense` と組み合わせると複雑になる可能性があります)。

## 公式ドキュメント参照
*   [Tailwind CSS: Grid Auto Flow](https://tailwindcss.com/docs/grid-auto-flow)
*   [MDN: grid-auto-flow](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
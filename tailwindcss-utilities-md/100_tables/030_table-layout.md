## タイトル
title: Tables: Table Layout (テーブルレイアウトアルゴリズム)

## タグ
tags: ["tailwindcss", "utilities", "tables", "table-layout", "auto", "fixed", "layout", "performance"]

## 概要
`table-auto` および `table-fixed` ユーティリティは、テーブルのセル幅を計算するためにブラウザが使用するアルゴリズムを制御します。CSS の `table-layout` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`table-auto`**: デフォルト。ブラウザはテーブルの**内容全体**に基づいて各列の幅を計算します。コンテンツが最も広いセルに合わせて列幅が調整されます。
*   **`table-fixed`**: ブラウザはテーブルの**最初の行の内容**、またはテーブルや列に設定された**明示的な幅** (`w-*` など) に基づいて列幅を計算します。テーブルの内容全体を読み込む前にレイアウトが決定されるため、一般的に `table-auto` よりも高速です。

```html
<div class="space-y-8 p-4">

  {/* table-auto (Default) */}
  <div>
    <p class="text-sm mb-1 font-semibold">table-auto (Default)</p>
    <table class="table-auto border-collapse border border-slate-400 dark:border-slate-600 w-full">
      <thead>
        <tr>
          <th class="border border-slate-300 dark:border-slate-700 p-2 w-1/4">Song</th> {/* 幅指定は目安 */}
          <th class="border border-slate-300 dark:border-slate-700 p-2">Artist</th>
          <th class="border border-slate-300 dark:border-slate-700 p-2">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-300 dark:border-slate-700 p-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td> {/* この長いコンテンツに合わせて列幅が決まる */}
          <td class="border border-slate-300 dark:border-slate-700 p-2">Malcolm Lockyer</td>
          <td class="border border-slate-300 dark:border-slate-700 p-2">1961</td>
        </tr>
        <tr>
          <td class="border border-slate-300 dark:border-slate-700 p-2">Witchy Woman</td>
          <td class="border border-slate-300 dark:border-slate-700 p-2">The Eagles</td>
          <td class="border border-slate-300 dark:border-slate-700 p-2">1972</td>
        </tr>
      </tbody>
    </table>
    <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">列幅はセル内容全体に基づいて自動調整されます。</p>
  </div>

  {/* table-fixed */}
  <div>
    <p class="text-sm mb-1 font-semibold">table-fixed</p>
    <table class="table-fixed border-collapse border border-slate-500 dark:border-slate-500 w-full">
      <thead>
        <tr>
          <th class="border border-slate-600 dark:border-slate-400 p-2 w-1/2">Song</th> {/* この幅指定が優先される */}
          <th class="border border-slate-600 dark:border-slate-400 p-2 w-1/4">Artist</th>
          <th class="border border-slate-600 dark:border-slate-400 p-2 w-1/4">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-700 dark:border-slate-300 p-2 truncate">The Sliding Mr. Bones (Next Stop, Pottersville)</td> {/* 内容がはみ出す場合は truncate などが必要 */}
          <td class="border border-slate-700 dark:border-slate-300 p-2">Malcolm Lockyer</td>
          <td class="border border-slate-700 dark:border-slate-300 p-2">1961</td>
        </tr>
        <tr>
          <td class="border border-slate-700 dark:border-slate-300 p-2">Witchy Woman</td>
          <td class="border border-slate-700 dark:border-slate-300 p-2">The Eagles</td>
          <td class="border border-slate-700 dark:border-slate-300 p-2">1972</td>
        </tr>
      </tbody>
    </table>
     <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">列幅はテーブルまたは最初の行の幅指定に基づきます。内容がはみ出す可能性があります。</p>
  </div>

</div>
```

## `table-auto` vs `table-fixed`

*   **`table-auto` (デフォルト):**
    *   **メリット:** 列幅がコンテンツに自動的にフィットするため、予期しないコンテンツのはみ出しが起こりにくい。
    *   **デメリット:** テーブルの内容全体を解析する必要があるため、特に大きなテーブルではレンダリングが遅くなる可能性がある。
*   **`table-fixed`:**
    *   **メリット:** テーブルの最初の行または明示的な幅指定だけを見てレイアウトを決定するため、レンダリングが高速。列幅が固定されるため、レイアウトが予測しやすい。
    *   **デメリット:** セルの内容が指定された幅を超えると、はみ出したり、レイアウトが崩れたりする可能性がある。`overflow-*`, `text-overflow` (`truncate`), `word-break` などのユーティリティを併用して、はみ出し処理を適切に行う必要がある。

**どちらを使うべきか？**

*   テーブルの内容量が少なく、レンダリング速度が問題にならない場合は `table-auto` (デフォルト) で問題ありません。
*   テーブルの内容量が多い、または列幅を厳密に制御したい場合は、`table-fixed` を使用し、`<thead>` の `<th>` や `<colgroup>`/`<col>` タグで各列の幅 (`w-*`) を明示的に指定するのが一般的です。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてレイアウトアルゴリズムを変更できますが、一般的ではありません。通常はテーブル全体で一貫したアルゴリズムを使用します。

```html
<table class="table-auto md:table-fixed ...">
  {/* ... table content ... */}
</table>
```

## 注意点

*   これらのユーティリティは `<table>` 要素に適用します。
*   `table-fixed` を使用する場合、テーブル全体の幅 (`w-full` など) と、各列の幅 (`<th>` や `<col>` で `w-*` を指定) を設定することが重要です。すべての列に幅を指定しない場合、残りの幅が均等に分配されるか、ブラウザのデフォルトの挙動に依存します。

## 関連ユーティリティ

*   `border-collapse`: テーブルボーダーの結合/分離。
*   `border-spacing`: セル間隔 (`border-separate` 時)。
*   `width` (`w-*`): テーブルや列の幅指定。
*   `text-overflow` (`truncate`), `overflow`, `whitespace`, `word-break`: `table-fixed` 使用時のはみ出し処理。

## 公式ドキュメント参照
*   [Tailwind CSS: Table Layout](https://tailwindcss.com/docs/table-layout)
*   [MDN: table-layout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout)
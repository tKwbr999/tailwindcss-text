## タイトル
title: Tables: Border Collapse (テーブルボーダーの結合)

## タグ
tags: ["tailwindcss", "utilities", "tables", "border-collapse", "collapse", "separate", "border"]

## 概要
`border-collapse` および `border-separate` ユーティリティは、テーブル要素 (`<table>`) のボーダーモデルを制御します。CSS の `border-collapse` プロパティに対応します。

*   **`border-collapse`**: 隣接するテーブルセルのボーダーを**結合**して一本の線として表示します。セル間のスペースはなくなります。
*   **`border-separate`**: デフォルト。各テーブルセルが**独立した**ボーダーを持ちます。セル間のスペースは `border-spacing` プロパティで制御できます。

## 基本的な使い方とパラメータ

クラスを `<table>` 要素に適用します。

```html
<div class="space-y-8 p-4">

  {/* border-collapse */}
  <div>
    <p class="text-sm mb-1 font-semibold">border-collapse</p>
    <table class="border-collapse border border-slate-400 dark:border-slate-600 w-full">
      <thead>
        <tr>
          <th class="border border-slate-300 dark:border-slate-700 p-2">State</th>
          <th class="border border-slate-300 dark:border-slate-700 p-2">City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-300 dark:border-slate-700 p-2">Indiana</td>
          <td class="border border-slate-300 dark:border-slate-700 p-2">Indianapolis</td>
        </tr>
        <tr>
          <td class="border border-slate-300 dark:border-slate-700 p-2">Ohio</td>
          <td class="border border-slate-300 dark:border-slate-700 p-2">Columbus</td>
        </tr>
      </tbody>
    </table>
    <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">隣接するボーダーが結合され、一本線になります。</p>
  </div>

  {/* border-separate (Default) */}
  <div>
    <p class="text-sm mb-1 font-semibold">border-separate (Default)</p>
    {/* border-spacing-* でセル間隔を指定 */}
    <table class="border-separate border border-slate-500 dark:border-slate-500 w-full border-spacing-2">
       <thead>
        <tr>
          <th class="border border-slate-600 dark:border-slate-400 p-2 rounded-sm">State</th> {/* 個別に角丸も可能 */}
          <th class="border border-slate-600 dark:border-slate-400 p-2 rounded-sm">City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-700 dark:border-slate-300 p-2 rounded-sm">Indiana</td>
          <td class="border border-slate-700 dark:border-slate-300 p-2 rounded-sm">Indianapolis</td>
        </tr>
        <tr>
          <td class="border border-slate-700 dark:border-slate-300 p-2 rounded-sm">Ohio</td>
          <td class="border border-slate-700 dark:border-slate-300 p-2 rounded-sm">Columbus</td>
        </tr>
      </tbody>
    </table>
     <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">各セルが独立したボーダーを持ち、`border-spacing` で間隔が設定されます。</p>
  </div>

</div>
```

## `border-spacing` との関係

`border-separate` (デフォルト) を使用する場合、`border-spacing-{size}`, `border-spacing-x-{size}`, `border-spacing-y-{size}` ユーティリティを使って、隣接するセルのボーダー間の水平および垂直方向の間隔を設定できます。

`border-collapse` を使用する場合、`border-spacing` は効果がありません。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてボーダーモデルを変更できますが、一般的ではありません。

```html
<table class="border-separate md:border-collapse ...">
  {/* ... table content ... */}
</table>
```

## 注意点

*   これらのユーティリティは `<table>` 要素に適用します。
*   `border-collapse` を使用すると、個々のセルに設定された `border-radius` は通常無視されます。角を丸めたい場合は `border-separate` を使用します。
*   `border-collapse` は、テーブルの `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<td>`, `<th>` 要素のボーダーに影響します。

## 関連ユーティリティ

*   `border-spacing`: `border-separate` 時のセル間隔。
*   `border-width`, `border-color`, `border-style`: ボーダーのスタイル。
*   `table-layout`: テーブルのレイアウトアルゴリズム。

## 公式ドキュメント参照
*   [Tailwind CSS: Border Collapse](https://tailwindcss.com/docs/border-collapse)
*   [MDN: border-collapse](https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse)
*   [Tailwind CSS: Border Spacing](https://tailwindcss.com/docs/border-spacing)
## タイトル
title: Tables: Border Spacing (テーブルセル間隔)

## タグ
tags: ["tailwindcss", "utilities", "tables", "border-spacing", "spacing", "border-separate", "layout"]

## 概要
`border-spacing-{size}`, `border-spacing-x-{size}`, `border-spacing-y-{size}` ユーティリティは、`border-separate` (デフォルトのテーブルボーダーモデル) が適用されたテーブルの隣接するセル間の水平および垂直方向の間隔を設定します。CSS の `border-spacing` プロパティに対応します。

**注意:** このユーティリティは、`<table>` 要素に `border-separate` が適用されている場合にのみ効果があります。`border-collapse` が適用されている場合は無視されます。

## 基本的な使い方とパラメータ

値は通常、Tailwind の `theme.spacing` スケール (`0`, `1`, `2`, `4`, `px` など) を使用します。

*   **`border-spacing-{size}`**: 水平・垂直両方の間隔を同じ値に設定します。
*   **`border-spacing-x-{size}`**: 水平方向の間隔のみを設定します。
*   **`border-spacing-y-{size}`**: 垂直方向の間隔のみを設定します。

```html
<div class="space-y-8 p-4">

  {/* border-spacing */}
  <div>
    <p class="text-sm mb-1 font-semibold">border-separate border-spacing-2</p>
    <table class="border-separate border border-slate-500 dark:border-slate-500 w-full border-spacing-2">
       <thead>
        <tr>
          <th class="border border-slate-600 dark:border-slate-400 p-2">State</th>
          <th class="border border-slate-600 dark:border-slate-400 p-2">City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-700 dark:border-slate-300 p-2">Indiana</td>
          <td class="border border-slate-700 dark:border-slate-300 p-2">Indianapolis</td>
        </tr>
        <tr>
          <td class="border border-slate-700 dark:border-slate-300 p-2">Ohio</td>
          <td class="border border-slate-700 dark:border-slate-300 p-2">Columbus</td>
        </tr>
      </tbody>
    </table>
    <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">セル間に 0.5rem (8px) の間隔ができます。</p>
  </div>

  {/* border-spacing-x / border-spacing-y */}
  <div>
    <p class="text-sm mb-1 font-semibold">border-separate border-spacing-x-6 border-spacing-y-1</p>
    <table class="border-separate border border-slate-500 dark:border-slate-500 w-full border-spacing-x-6 border-spacing-y-1">
       <thead>
        <tr>
          <th class="border border-slate-600 dark:border-slate-400 p-2">State</th>
          <th class="border border-slate-600 dark:border-slate-400 p-2">City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-700 dark:border-slate-300 p-2">Indiana</td>
          <td class="border border-slate-700 dark:border-slate-300 p-2">Indianapolis</td>
        </tr>
        <tr>
          <td class="border border-slate-700 dark:border-slate-300 p-2">Ohio</td>
          <td class="border border-slate-700 dark:border-slate-300 p-2">Columbus</td>
        </tr>
      </tbody>
    </table>
     <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">水平方向に 1.5rem、垂直方向に 0.25rem の間隔。</p>
  </div>

   {/* border-collapse では無効 */}
   <div>
    <p class="text-sm mb-1 font-semibold">border-collapse border-spacing-4 (No effect)</p>
    <table class="border-collapse border border-slate-400 dark:border-slate-600 w-full border-spacing-4">
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
      </tbody>
    </table>
     <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">`border-collapse` が指定されているため、`border-spacing` は無視されます。</p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてセル間隔を変更できます。

```html
<table class="border-separate border-spacing-1 md:border-spacing-3 ...">
  {/* ... table content ... */}
</table>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.borderSpacing` (または `theme.borderSpacing`) でカスタムの間隔値を追加できます。`theme.spacing` スケールを継承しているため、`spacing` で定義した値も `border-spacing-*` で使用可能です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '1.5': '0.375rem', // 6px
      },
      borderSpacing: { // borderSpacing 固有のキーも追加可能
        'widget': '1.75rem',
        // spacing を継承しない場合はここで定義
        // '1': '0.25rem',
        // '2': '0.5rem',
        // ...
      }
    },
  },
}
```

```html
<table class="border-separate border-spacing-1.5 ...">...</table>
<table class="border-separate border-spacing-widget ...">...</table>
```

## 任意の値 (Arbitrary Values)

任意の値を使ってセル間隔を直接指定することも可能です。水平・垂直を個別に指定する場合はスペースで区切ります。

```html
<table class="border-separate border-spacing-[5px] ...">...</table>
<table class="border-separate border-spacing-[10px_20px] ...">...</table> {/* horizontal 10px, vertical 20px */}
```

## 注意点

*   `border-spacing-*` ユーティリティは `<table>` 要素に適用し、かつ `border-separate` が有効である必要があります。
*   `border-spacing` はテーブルの外側のボーダーと最初の/最後のセルとの間のスペースにも影響します。
*   セル間の間隔には `gap-*` ユーティリティは使用できません。テーブルレイアウトでは `border-spacing` を使用します。

## 関連ユーティリティ

*   `border-collapse`: テーブルのボーダーモデル (結合 or 分離)。
*   `table-layout`: テーブルのレイアウトアルゴリズム。
*   `padding` (`p-*`): セル**内**の余白。

## 公式ドキュメント参照
*   [Tailwind CSS: Border Spacing](https://tailwindcss.com/docs/border-spacing)
*   [MDN: border-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing)
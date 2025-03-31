## タイトル
title: Tables: Caption Side (キャプションの位置)

## タグ
tags: ["tailwindcss", "utilities", "tables", "caption-side", "caption", "top", "bottom"]

## 概要
`caption-top` および `caption-bottom` ユーティリティは、テーブルのキャプション (`<caption>`) 要素の表示位置を、テーブルの上または下に設定します。CSS の `caption-side` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`caption-top`**: デフォルト。キャプションをテーブルの上に表示します (`caption-side: top;`)。
*   **`caption-bottom`**: キャプションをテーブルの下に表示します (`caption-side: bottom;`)。

クラスを `<table>` 要素に適用します。`<caption>` 要素がテーブル内に存在する必要があります。

```html
<div class="space-y-8 p-4">

  {/* caption-top (Default) */}
  <div>
    <p class="text-sm mb-1 font-semibold">caption-top (Default)</p>
    <table class="caption-top border-collapse border border-slate-400 dark:border-slate-600 w-full">
      <caption>Table 1: Default caption position (top).</caption>
      <thead>
        <tr>
          <th class="border border-slate-300 dark:border-slate-700 p-2">Header 1</th>
          <th class="border border-slate-300 dark:border-slate-700 p-2">Header 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-300 dark:border-slate-700 p-2">Data A1</td>
          <td class="border border-slate-300 dark:border-slate-700 p-2">Data B1</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* caption-bottom */}
  <div>
    <p class="text-sm mb-1 font-semibold">caption-bottom</p>
    <table class="caption-bottom border-collapse border border-slate-500 dark:border-slate-500 w-full">
       <caption>Table 2: Caption explicitly positioned at the bottom.</caption>
       <thead>
        <tr>
          <th class="border border-slate-600 dark:border-slate-400 p-2">Header X</th>
          <th class="border border-slate-600 dark:border-slate-400 p-2">Header Y</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-700 dark:border-slate-300 p-2">Data X1</td>
          <td class="border border-slate-700 dark:border-slate-300 p-2">Data Y1</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてキャプションの位置を変更できますが、一般的ではありません。

```html
<table class="caption-top md:caption-bottom ...">
  <caption>Caption position changes on medium screens.</caption>
  {/* ... table content ... */}
</table>
```

## 注意点

*   これらのユーティリティは `<table>` 要素に適用します。
*   テーブル内に `<caption>` 要素が存在しないと効果がありません。
*   `caption-side` プロパティのブラウザサポートは良好ですが、非常に古いブラウザでは動作しない可能性があります。

## 関連ユーティリティ

*   `text-align`: キャプション内のテキスト揃え。
*   他のテーブル関連ユーティリティ (`border-collapse`, `border-spacing`, `table-layout`)。

## 公式ドキュメント参照
*   [Tailwind CSS: Caption Side](https://tailwindcss.com/docs/caption-side)
*   [MDN: caption-side](https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side)
*   [MDN: <caption>: The Table Caption element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)
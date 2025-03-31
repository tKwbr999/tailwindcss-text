## タイトル
title: Typography: Vertical Align (垂直方向の揃え)

## タグ
tags: ["tailwindcss", "utilities", "typography", "vertical-align", "alignment", "inline", "table-cell", "baseline", "middle", "top", "bottom"]

## 概要
`align-{alignment}` ユーティリティは、インライン要素、インラインブロック要素、またはテーブルセル要素の垂直方向の揃え方を、それらが属する行ボックス (line box) またはテーブルセル内で制御します。CSS の `vertical-align` プロパティに対応します。

**注意:** このユーティリティは、**Flexbox アイテムや Grid アイテムの配置には影響しません**。それらの配置には `align-items`, `align-self` などを使用します。`vertical-align` は主に、テキストと画像/アイコンの整列や、テーブルセル内のコンテンツ配置に使用されます。

## 基本的な使い方とパラメータ

*   **`align-baseline`**: デフォルト。要素のベースラインを親要素のベースラインに揃えます。
*   **`align-top`**: 要素の上端を行ボックスの上端 (またはテーブルセルの上端) に揃えます。
*   **`align-middle`**: 要素の中央を親要素のベースライン + x-height の半分 (テキストの中央あたり) に揃えます。テーブルセル内ではセルの中央に配置します。
*   **`align-bottom`**: 要素の下端を行ボックスの下端 (またはテーブルセルの下端) に揃えます。
*   **`align-text-top`**: 要素の上端を親要素の**テキスト**の上端に揃えます。
*   **`align-text-bottom`**: 要素の下端を親要素の**テキスト**の下端に揃えます。
*   **`align-sub`**: 下付き文字のように配置します (`vertical-align: sub;`)。
*   **`align-super`**: 上付き文字のように配置します (`vertical-align: super;`)。

```html
<div class="p-4 space-y-4">

  {/* インライン要素 (テキストと画像) */}
  <div class="text-lg border p-2 rounded dark:border-gray-700">
    Align an icon:
    <svg class="inline-block align-baseline w-6 h-6 bg-blue-200 rounded" viewBox="0 0 20 20"></svg> (baseline)
    <svg class="inline-block align-top w-6 h-6 bg-green-200 rounded" viewBox="0 0 20 20"></svg> (top)
    <svg class="inline-block align-middle w-6 h-6 bg-yellow-200 rounded" viewBox="0 0 20 20"></svg> (middle)
    <svg class="inline-block align-bottom w-6 h-6 bg-red-200 rounded" viewBox="0 0 20 20"></svg> (bottom)
    <svg class="inline-block align-text-top w-6 h-6 bg-purple-200 rounded" viewBox="0 0 20 20"></svg> (text-top)
    <svg class="inline-block align-text-bottom w-6 h-6 bg-indigo-200 rounded" viewBox="0 0 20 20"></svg> (text-bottom)
    within the text line.
  </div>

  {/* テーブルセル */}
  <table class="border-collapse border border-slate-400 dark:border-slate-600 w-full">
    <thead>
      <tr>
        <th class="border border-slate-300 dark:border-slate-700 p-2">Align</th>
        <th class="border border-slate-300 dark:border-slate-700 p-2">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-slate-300 dark:border-slate-700 p-2 align-top">align-top</td>
        <td class="border border-slate-300 dark:border-slate-700 p-2 align-top h-24 bg-gray-100 dark:bg-gray-800">Cell content aligned to the top.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 dark:border-slate-700 p-2 align-middle">align-middle</td>
        <td class="border border-slate-300 dark:border-slate-700 p-2 align-middle h-24 bg-gray-100 dark:bg-gray-800">Cell content aligned to the middle.</td>
      </tr>
      <tr>
        <td class="border border-slate-300 dark:border-slate-700 p-2 align-bottom">align-bottom</td>
        <td class="border border-slate-300 dark:border-slate-700 p-2 align-bottom h-24 bg-gray-100 dark:bg-gray-800">Cell content aligned to the bottom.</td>
      </tr>
       <tr>
        <td class="border border-slate-300 dark:border-slate-700 p-2 align-baseline">align-baseline</td>
        <td class="border border-slate-300 dark:border-slate-700 p-2 align-baseline h-24 bg-gray-100 dark:bg-gray-800">Cell content <span class="text-xs">aligned</span> to the <span class="text-2xl">baseline</span>.</td>
      </tr>
    </tbody>
  </table>

  {/* 上付き・下付き文字 */}
   <p class="text-lg">H<span class="align-sub text-sm">2</span>O and E=mc<span class="align-super text-sm">2</span></p>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて垂直方向の揃え方を変更できますが、一般的ではありません。

```html
<img src="..." class="inline-block align-middle md:align-baseline ...">
```

## 注意点

*   `vertical-align` はインラインレベル要素 (`display: inline` または `inline-block`) とテーブルセル要素 (`<td>`, `<th>`) にのみ適用されます。ブロックレベル要素には効果がありません。
*   Flexbox や Grid レイアウトでは、アイテムの垂直方向の配置には `align-items` や `align-self` を使用します。`vertical-align` はこれらのレイアウトコンテキストでは通常無視されます。
*   `align-middle` の挙動は、インライン要素とテーブルセルで異なります。インライン要素では親のベースライン + x-height の半分に揃え、テーブルセルではセルの中央に揃えます。

## 関連ユーティリティ

*   `display` (`inline`, `inline-block`, `table-cell` など): 要素の表示形式。
*   `align-items`, `align-self`: Flexbox/Grid アイテムの交差軸方向の配置。

## 公式ドキュメント参照
*   [Tailwind CSS: Vertical Align](https://tailwindcss.com/docs/vertical-align)
*   [MDN: vertical-align](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)
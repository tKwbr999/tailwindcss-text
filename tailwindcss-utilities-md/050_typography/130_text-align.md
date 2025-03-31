## タイトル
title: Typography: Text Align (テキストの水平揃え)

## タグ
tags: ["tailwindcss", "utilities", "typography", "text-align", "left", "center", "right", "justify", "start", "end"]

## 概要
`text-{alignment}` ユーティリティは、ブロックレベル要素またはテーブルセル内のインラインコンテンツ (テキストなど) の水平方向の揃え方を制御します。CSS の `text-align` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`text-left`**: テキストを左揃えにします (`text-align: left;`)。LRT (左から右へ書く) 言語でのデフォルトです。
*   **`text-center`**: テキストを中央揃えにします (`text-align: center;`)。
*   **`text-right`**: テキストを右揃えにします (`text-align: right;`)。RTL (右から左へ書く) 言語でのデフォルトです。
*   **`text-justify`**: テキストを両端揃え (均等割り付け) にします (`text-align: justify;`)。行の左右の端が揃うように、単語間のスペースが調整されます。最後の行は通常、左揃えになります。
*   **`text-start`**: テキストを書字方向の**開始**側に揃えます (`text-align: start;`)。LRT では左揃え、RTL では右揃えになります。国際化対応で推奨されます。
*   **`text-end`**: テキストを書字方向の**終了**側に揃えます (`text-align: end;`)。LRT では右揃え、RTL では左揃えになります。国際化対応で推奨されます。

```html
<div class="space-y-4 p-4">
  <p class="text-left bg-gray-100 dark:bg-gray-800 p-2 rounded">Left aligned text (Default in LTR). Lorem ipsum dolor sit amet.</p>
  <p class="text-center bg-gray-100 dark:bg-gray-800 p-2 rounded">Center aligned text. Lorem ipsum dolor sit amet.</p>
  <p class="text-right bg-gray-100 dark:bg-gray-800 p-2 rounded">Right aligned text. Lorem ipsum dolor sit amet.</p>
  <p class="text-justify bg-gray-100 dark:bg-gray-800 p-2 rounded">Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
  <p class="text-start bg-gray-100 dark:bg-gray-800 p-2 rounded">Start aligned text (Left in LTR, Right in RTL).</p>
  <p class="text-end bg-gray-100 dark:bg-gray-800 p-2 rounded">End aligned text (Right in LTR, Left in RTL).</p>
</div>

{/* RTL (Right-to-Left) の例 */}
<div dir="rtl" class="space-y-4 p-4 mt-4 border-t dark:border-gray-700">
  <p class="text-sm font-semibold">RTL Example (dir="rtl"):</p>
  <p class="text-left bg-gray-100 dark:bg-gray-800 p-2 rounded">text-left (still aligns left)</p>
  <p class="text-right bg-gray-100 dark:bg-gray-800 p-2 rounded">text-right (Default in RTL)</p>
  <p class="text-start bg-gray-100 dark:bg-gray-800 p-2 rounded">text-start (aligns right in RTL)</p>
  <p class="text-end bg-gray-100 dark:bg-gray-800 p-2 rounded">text-end (aligns left in RTL)</p>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてテキストの揃え方を変更できます。

```html
{/* モバイルでは中央揃え、md 以上で左揃え */}
<p class="text-center md:text-left ...">
  Alignment changes based on screen size.
</p>
```

## 注意点

*   `text-align` は、適用された要素自身の揃え方ではなく、その要素**内部のインラインコンテンツ**の揃え方を制御します。ブロックレベル要素自体を中央揃えにするには `mx-auto` を使用します。
*   `text-justify` は、テキストの見た目を整えることができますが、単語間のスペースが不自然に広がることがあり、読みにくくなる場合もあります。特に狭い幅のコンテナでは注意が必要です。
*   国際化 (i18n) を考慮する場合、`text-left`, `text-right` の代わりに、書字方向に応じて自動的に揃え方向が変わる `text-start`, `text-end` を使用することが推奨されます。

## 関連ユーティリティ

*   `margin` (`mx-auto`): ブロックレベル要素の水平中央揃え。
*   `vertical-align`: インラインレベル要素やテーブルセル内の垂直方向の揃え。
*   Flexbox (`justify-content`, `items-center` など): Flex アイテムの配置。
*   Grid (`justify-items`, `align-items` など): Grid アイテムの配置。

## 公式ドキュメント参照
*   [Tailwind CSS: Text Align](https://tailwindcss.com/docs/text-align)
*   [MDN: text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
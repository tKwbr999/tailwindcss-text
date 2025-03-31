## タイトル
title: Typography: Font Variant Numeric (数字・記号の字形制御)

## タグ
tags: ["tailwindcss", "utilities", "typography", "font-variant-numeric", "opentype", "figures", "fractions", "ordinal", "slashed-zero"]

## 概要
`font-variant-numeric` ユーティリティは、数字、分数、序数マーカーなどの字形 (グリフ) を制御するための OpenType フォント機能 を有効または無効にします。CSS の `font-variant-numeric` プロパティおよび関連する個別プロパティ (`font-variant-ligatures`, `font-variant-caps` なども含む) に対応します。

これらのユーティリティが効果を発揮するには、**使用しているフォントが対応する OpenType 機能を持っている**必要があります。

## 基本的な使い方とパラメータ

### 数字 (Figures)
*   **`normal-nums`**: デフォルト。フォントの標準の数字スタイルを使用します。
*   **`ordinal`**: 序数マーカー (例: 1st, 2nd) 用の特別な字形を有効にします (`font-variant-numeric: ordinal;`)。
*   **`slashed-zero`**: 数字のゼロ (0) にスラッシュが入った字形を有効にします (`font-variant-numeric: slashed-zero;`)。O (オー) との区別に役立ちます。
*   **`lining-nums`**: すべての数字が同じ高さ (大文字と同じ高さ) になるライニング数字を有効にします (`font-variant-numeric: lining-nums;`)。テーブルなどでの使用に適しています。
*   **`oldstyle-nums`**: 小文字のように高さが異なるオールドスタイル数字 (テキストフィギュア) を有効にします (`font-variant-numeric: oldstyle-nums;`)。本文テキストによく馴染みます。
*   **`proportional-nums`**: 数字ごとに幅が異なるプロポーショナル数字を有効にします (`font-variant-numeric: proportional-nums;`)。本文テキストに適しています。
*   **`tabular-nums`**: すべての数字が同じ幅を持つテーブル数字 (等幅数字) を有効にします (`font-variant-numeric: tabular-nums;`)。数値データを縦に揃えたい場合に適しています。

### 分数 (Fractions)
*   **`diagonal-fractions`**: `1/2` のような形式を、斜め線を使った特別な分数グリフ (例: ½) に変換します (`font-variant-numeric: diagonal-fractions;`)。
*   **`stacked-fractions`**: 水平線を使った分数グリフ (例: <0xC2><0xBD> のような形、フォント依存) に変換します (`font-variant-numeric: stacked-fractions;`)。サポートしているフォントは少ないです。

```html
<div class="space-y-4 p-4 font-sans"> {/* フォントが機能を持っているか確認 */}

  <div>
    <p class="text-sm mb-1">Number Styles (Font: Inter or similar)</p>
    <p class="text-2xl normal-nums">1234567890 (Normal)</p>
    <p class="text-2xl lining-nums">1234567890 (Lining)</p>
    <p class="text-2xl oldstyle-nums">1234567890 (Oldstyle)</p>
    <p class="text-2xl proportional-nums">11111 vs 99999 (Proportional)</p>
    <p class="text-2xl tabular-nums">11111 vs 99999 (Tabular)</p>
    <p class="text-2xl slashed-zero">0 O (Slashed Zero)</p>
    <p class="text-2xl ordinal">1st 2nd 3rd 4th</p>
  </div>

  <hr class="my-4 border-dashed dark:border-gray-700">

  <div>
    <p class="text-sm mb-1">Fractions</p>
    <p class="text-2xl normal-nums">1/2, 1/4, 3/4 (Normal)</p>
    <p class="text-2xl diagonal-fractions">1/2, 1/4, 3/4 (Diagonal)</p>
    <p class="text-2xl stacked-fractions">1/2, 1/4, 3/4 (Stacked - Font support rare)</p>
  </div>

</div>
```

## 複数の機能の組み合わせ

複数の `font-variant-numeric` ユーティリティを組み合わせることができます。Tailwind は内部的に CSS 変数を使ってこれらを管理し、競合しないようにします。

```html
{/* 等幅でライニング数字 */}
<p class="tabular-nums lining-nums">1,234.56</p>
```

## リセット

特定の機能を無効にするには、`normal-nums` を使用します。これはすべての `font-variant-numeric` 機能をリセットします。

```html
<div class="tabular-nums">
  <p>Table figures</p>
  <p class="normal-nums">Normal figures inside tabular context</p>
</div>
```

## レスポンシブ / 状態修飾子

これらのユーティリティは、レスポンシブプレフィックス (`md:tabular-nums`) や状態修飾子 (`hover:slashed-zero`) と組み合わせて使用することも可能ですが、通常は一貫した表示のために要素全体または特定のセクションに対して静的に適用されます。

## 注意点

*   **フォントのサポートが必須:** これらのクラスは、使用しているフォントが対応する OpenType 機能を持っている場合にのみ効果があります。すべてのフォントがすべての機能をサポートしているわけではありません。Web フォントを使用する場合は、必要な機能が含まれているか確認してください。
*   **ブラウザのサポート:** CSS の `font-variant-numeric` プロパティ自体のブラウザサポートも確認してください (ただし、主要なモダンブラウザでは広くサポートされています)。
*   **リガチャ (Ligatures) やキャップ (Caps) など:** Tailwind は `font-variant-ligatures` や `font-variant-caps` に対応するユーティリティも提供しています (例: `common-ligatures`, `small-caps`)。これらは別のドキュメントページで解説されています。

## 関連ユーティリティ

*   `font-family`: フォントファミリー。
*   Tailwind CSS Docs: Font Variant Ligatures (合字)
*   Tailwind CSS Docs: Font Variant Caps (大文字・小文字)
*   Tailwind CSS Docs: Font Variant Position (上付き・下付き文字) - (v3.4 時点ではコアに含まれていない可能性あり)

## 公式ドキュメント参照
*   [Tailwind CSS: Font Variant Numeric](https://tailwindcss.com/docs/font-variant-numeric)
*   [MDN: font-variant-numeric](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric)
*   [MDN: OpenType font features guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/OpenType_fonts_guide)
## タイトル
title: Filters: Grayscale (グレースケール)

## タグ
tags: ["tailwindcss", "utilities", "filters", "grayscale", "filter", "effects", "image", "black and white"]

## 概要
`grayscale` および `grayscale-0` ユーティリティは、要素の色をグレースケール (白黒) に変換するフィルターを適用します。CSS の `filter` プロパティの `grayscale()` 関数に対応します。

`grayscale` は要素を完全に白黒にし、`grayscale-0` は元の色に戻します。

## 基本的な使い方とパラメータ

*   **`grayscale`**: 要素を完全にグレースケールにします (`filter: grayscale(100%);`)。
*   **`grayscale-0`**: デフォルト。グレースケールフィルターを適用しません (`filter: grayscale(0);`)。他の状態 (`hover:` など) で適用された `grayscale` を打ち消す場合に使用します。

```html
<div class="flex flex-wrap gap-4 p-4">
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=Color" alt="Color" class="grayscale-0 rounded-lg"> {/* Default */}
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=Grayscale" alt="Grayscale" class="grayscale rounded-lg">
</div>
```

## フィルターの組み合わせ

`grayscale` は、他の `filter` ユーティリティ (例: `blur-*`, `contrast-*`, `sepia`) と組み合わせて使用できます。

```html
<img src="https://via.placeholder.com/150" alt="Grayscale and Contrast" class="grayscale contrast-150 rounded-lg">
```

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のためにハードウェアアクセラレーションが有効になることがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてグレースケールを適用または解除できます。

```html
{/* モバイルではグレースケール、md 以上でカラー */}
<img src="..." alt="..." class="grayscale md:grayscale-0">
```

## 状態修飾子

`hover:`, `focus:`, `group-hover:` などと組み合わせて、インタラクションに応じてグレースケール効果を適用または解除できます。非アクティブなアイテムをグレースケールにし、ホバー時にカラーにするなどの表現に使われます。

```html
<img src="..." alt="..." class="grayscale hover:grayscale-0 transition duration-300 cursor-pointer rounded-lg">
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.grayscale` (または `theme.grayscale`) でカスタムのグレースケール値を定義できますが、Tailwind のデフォルト (`grayscale` と `grayscale-0`) でほとんどのケースはカバーできます。任意の値を使う方が一般的です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      grayscale: {
        '50': '50%', // grayscale-50 クラスを追加 (filter: grayscale(50%))
      },
    },
  },
}
```

```html
<img src="..." alt="..." class="grayscale-50"> {/* 半分グレースケール */}
```

## 任意の値 (Arbitrary Values)

任意の値を使ってグレースケールの度合いを直接指定することも可能です。`0%` から `100%` の間のパーセンテージ、または `0` から `1` の間の数値で指定します。

```html
<img src="..." alt="..." class="grayscale-[30%]"> {/* 30% Grayscale */}
<img src="..." alt="..." class="grayscale-[0.8]"> {/* 80% Grayscale */}
```

## 注意点

*   `grayscale` フィルターは要素全体とその内容に適用されます。
*   `grayscale-0` は `filter: grayscale(0);` を設定しますが、他のフィルター効果 (例: `blur`) が適用されている場合、それらは解除されません。すべてのフィルターを解除するには `filter-none` を使用します。

## 関連ユーティリティ

*   `backdrop-grayscale`: 要素の**背景**にあるコンテンツをグレースケールにします。
*   他の `filter` ユーティリティ (`blur`, `brightness`, `contrast`, `hue-rotate`, `invert`, `saturate`, `sepia`, `drop-shadow`)。
*   `filter` (`filter`, `filter-none`): フィルター効果の有効/無効を切り替えます。

## 公式ドキュメント参照
*   [Tailwind CSS: Grayscale](https://tailwindcss.com/docs/grayscale)
*   [MDN: filter: grayscale()](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale)
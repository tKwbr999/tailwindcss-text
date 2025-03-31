## タイトル
title: Filters: Invert (色反転)

## タグ
tags: ["tailwindcss", "utilities", "filters", "invert", "filter", "effects", "image", "color", "negative"]

## 概要
`invert` および `invert-0` ユーティリティは、要素の色を反転させるフィルターを適用します。CSS の `filter` プロパティの `invert()` 関数に対応します。

`invert` は要素の色を完全に反転させ (例: 白は黒に、赤はシアンに)、`invert-0` は元の色に戻します。

## 基本的な使い方とパラメータ

*   **`invert`**: 要素の色を完全に反転させます (`filter: invert(100%);`)。
*   **`invert-0`**: デフォルト。色を反転させません (`filter: invert(0);`)。他の状態 (`hover:` など) で適用された `invert` を打ち消す場合に使用します。

```html
<div class="flex flex-wrap gap-4 p-4">
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=Original" alt="Original" class="invert-0 rounded-lg"> {/* Default */}
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=Inverted" alt="Inverted" class="invert rounded-lg">
</div>
```

## フィルターの組み合わせ

`invert` は、他の `filter` ユーティリティ (例: `blur-*`, `grayscale`, `sepia`) と組み合わせて使用できます。

```html
<img src="https://via.placeholder.com/150" alt="Inverted and Sepia" class="invert sepia rounded-lg">
```

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のためにハードウェアアクセラレーションが有効になることがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて色の反転を適用または解除できます。

```html
{/* モバイルでは反転、md 以上で通常表示 */}
<img src="..." alt="..." class="invert md:invert-0">
```

## 状態修飾子

`hover:`, `focus:`, `group-hover:`, `dark:` などと組み合わせて、インタラクションやモードに応じて色の反転を適用または解除できます。ダークモードでアイコンの色を反転させるなどの用途があります。

```html
<img src="..." alt="..." class="invert-0 hover:invert transition duration-300 cursor-pointer rounded-lg">

{/* ダークモードでアイコンを反転させる例 */}
<img src="/path/to/icon-dark.svg" alt="Icon" class="dark:invert">
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.invert` (または `theme.invert`) でカスタムの反転度合い (に対応するクラス名) を追加できます。値は CSS の `invert()` 関数で有効なパーセンテージ文字列 (`'25%'`, `'75%'` など) または数値 (`0.25`, `0.75`) で指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      invert: {
        '25': '.25', // invert-25 クラスを追加 (filter: invert(25%))
        '50': '.5',
        '75': '.75',
      },
    },
  },
}
```

```html
<img src="..." alt="..." class="invert-75"> {/* 75% Inverted */}
```

## 任意の値 (Arbitrary Values)

任意の値を使って反転の度合いを直接指定することも可能です。

```html
<img src="..." alt="..." class="invert-[.6]"> {/* 60% Inverted */}
<img src="..." alt="..." class="invert-[33%]"> {/* 33% Inverted */}
```

## 注意点

*   `invert` フィルターは要素全体とその内容の色に影響します。
*   `invert(100%)` は色相環の反対側の色に変換します。
*   `invert-0` は `filter: invert(0);` を設定しますが、他のフィルター効果 (例: `blur`) が適用されている場合、それらは解除されません。すべてのフィルターを解除するには `filter-none` を使用します。

## 関連ユーティリティ

*   `backdrop-invert`: 要素の**背景**にあるコンテンツの色を反転させます。
*   他の `filter` ユーティリティ (`blur`, `brightness`, `contrast`, `grayscale`, `hue-rotate`, `saturate`, `sepia`, `drop-shadow`)。
*   `filter` (`filter`, `filter-none`): フィルター効果の有効/無効を切り替えます。

## 公式ドキュメント参照
*   [Tailwind CSS: Invert](https://tailwindcss.com/docs/invert)
*   [MDN: filter: invert()](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert)
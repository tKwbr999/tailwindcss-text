## タイトル
title: Filters: Sepia (セピア調)

## タグ
tags: ["tailwindcss", "utilities", "filters", "sepia", "filter", "effects", "image", "color"]

## 概要
`sepia` および `sepia-0` ユーティリティは、要素にセピア調フィルターを適用します。CSS の `filter` プロパティの `sepia()` 関数に対応します。

`sepia` は要素の色をセピアトーン (茶色がかった古写真のような色合い) に変換し、`sepia-0` は元の色に戻します。

## 基本的な使い方とパラメータ

*   **`sepia`**: 要素を完全にセピア調にします (`filter: sepia(100%);`)。
*   **`sepia-0`**: デフォルト。セピアフィルターを適用しません (`filter: sepia(0);`)。他の状態 (`hover:` など) で適用された `sepia` を打ち消す場合に使用します。

```html
<div class="flex flex-wrap gap-4 p-4">
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=Original" alt="Original" class="sepia-0 rounded-lg"> {/* Default */}
  <img src="https://via.placeholder.com/150/3b82f6/ffffff?text=Sepia" alt="Sepia" class="sepia rounded-lg">
</div>
```

## フィルターの組み合わせ

`sepia` は、他の `filter` ユーティリティ (例: `blur-*`, `contrast-*`, `brightness-*`) と組み合わせて使用できます。

```html
<img src="https://via.placeholder.com/150" alt="Sepia and Contrast" class="sepia contrast-75 rounded-lg">
```

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のためにハードウェアアクセラレーションが有効になることがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてセピア効果を適用または解除できます。

```html
{/* モバイルではセピア、md 以上で通常表示 */}
<img src="..." alt="..." class="sepia md:sepia-0">
```

## 状態修飾子

`hover:`, `focus:`, `group-hover:` などと組み合わせて、インタラクションに応じてセピア効果を適用または解除できます。

```html
<img src="..." alt="..." class="sepia-0 hover:sepia transition duration-300 cursor-pointer rounded-lg">
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.sepia` (または `theme.sepia`) でカスタムのセピア度合い (に対応するクラス名) を追加できます。値は CSS の `sepia()` 関数で有効なパーセンテージ文字列 (`'50%'`, `'75%'` など) または数値 (`0.5`, `0.75`) で指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      sepia: {
        '25': '.25', // sepia-25 クラスを追加 (filter: sepia(25%))
        '50': '.5',
        '75': '.75',
      },
    },
  },
}
```

```html
<img src="..." alt="..." class="sepia-50"> {/* 50% Sepia */}
```

## 任意の値 (Arbitrary Values)

任意の値を使ってセピアの度合いを直接指定することも可能です。

```html
<img src="..." alt="..." class="sepia-[.6]"> {/* 60% Sepia */}
<img src="..." alt="..." class="sepia-[45%]"> {/* 45% Sepia */}
```

## 注意点

*   `sepia` フィルターは要素全体とその内容に適用されます。
*   `sepia-0` は `filter: sepia(0);` を設定しますが、他のフィルター効果 (例: `blur`) が適用されている場合、それらは解除されません。すべてのフィルターを解除するには `filter-none` を使用します。

## 関連ユーティリティ

*   `backdrop-sepia`: 要素の**背景**にあるコンテンツにセピアフィルターを適用します。
*   他の `filter` ユーティリティ (`blur`, `brightness`, `contrast`, `grayscale`, `hue-rotate`, `invert`, `saturate`, `drop-shadow`)。
*   `filter` (`filter`, `filter-none`): フィルター効果の有効/無効を切り替えます。

## 公式ドキュメント参照
*   [Tailwind CSS: Sepia](https://tailwindcss.com/docs/sepia)
*   [MDN: filter: sepia()](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia)
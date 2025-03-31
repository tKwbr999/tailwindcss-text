## タイトル
title: Filters: Drop Shadow (ドロップシャドウ)

## タグ
tags: ["tailwindcss", "utilities", "filters", "drop-shadow", "filter", "effects", "shadow", "png", "svg"]

## 概要
`drop-shadow-{size}` ユーティリティは、要素にドロップシャドウフィルターを適用します。CSS の `filter` プロパティの `drop-shadow()` 関数に対応します。

`box-shadow` ユーティリティとは異なり、`drop-shadow` は要素の**実際の形状 (アルファマスク)** に沿って影を生成します。これは、透明な部分を持つ PNG 画像や SVG などに対して、その輪郭に合わせた影を付けたい場合に特に有効です。

## 基本的な使い方とパラメータ

値はキーワードで指定します。デフォルトのシャドウの色は `--tw-drop-shadow` CSS 変数で制御され、通常は半透明の黒です。

*   **`drop-shadow-sm`**: 小さなドロップシャドウ。
*   **`drop-shadow`**: 標準的なドロップシャドウ。
*   **`drop-shadow-md`**: やや大きいドロップシャドウ。
*   **`drop-shadow-lg`**: 大きいドロップシャドウ。
*   **`drop-shadow-xl`**: さらに大きいドロップシャドウ。
*   **`drop-shadow-2xl`**: 最も大きいドロップシャドウ。
*   **`drop-shadow-none`**: ドロップシャドウを削除します (`filter: drop-shadow(0 0 #0000);`)。

```html
{/* Placeholder for a transparent PNG or SVG */}
<% let imageUrl = "https://via.placeholder.com/150/000000/FFFFFF?text=Shape"; %>
<%-- In a real scenario, use an image with transparency --%>

<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-8 bg-gray-100 dark:bg-gray-900">
  <img src="<%= imageUrl %>" alt="Original" class="drop-shadow-none">
  <img src="<%= imageUrl %>" alt="Drop Shadow SM" class="drop-shadow-sm">
  <img src="<%= imageUrl %>" alt="Drop Shadow" class="drop-shadow">
  <img src="<%= imageUrl %>" alt="Drop Shadow MD" class="drop-shadow-md">
  <img src="<%= imageUrl %>" alt="Drop Shadow LG" class="drop-shadow-lg">
  <img src="<%= imageUrl %>" alt="Drop Shadow XL" class="drop-shadow-xl">
  <img src="<%= imageUrl %>" alt="Drop Shadow 2XL" class="drop-shadow-2xl">
</div>

<hr class="my-8 border-dashed dark:border-gray-700">

{/* Box Shadow との比較 */}
<div class="flex justify-around p-8 bg-gray-100 dark:bg-gray-900">
  <div class="text-center">
    <p class="text-sm mb-2">Box Shadow (shadow-lg)</p>
    {/* Box shadow follows the rectangular box */}
    <svg width="100" height="100" viewBox="0 0 100 100" class="shadow-lg">
      <polygon points="0,100 50,0 100,100" fill="#3b82f6"/>
    </svg>
  </div>
  <div class="text-center">
    <p class="text-sm mb-2">Drop Shadow (drop-shadow-lg)</p>
    {/* Drop shadow follows the shape of the SVG */}
    <svg width="100" height="100" viewBox="0 0 100 100" class="drop-shadow-lg">
       <polygon points="0,100 50,0 100,100" fill="#3b82f6"/>
    </svg>
  </div>
</div>
```

## フィルターの組み合わせ

`drop-shadow-*` は、他の `filter` ユーティリティ (例: `blur-*`, `brightness-*`) と組み合わせて使用できます。

```html
<img src="..." alt="..." class="drop-shadow-lg brightness-110">
```

## ハードウェアアクセラレーション

フィルターを適用すると、ブラウザによってはパフォーマンス向上のためにハードウェアアクセラレーションが有効になることがあります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてドロップシャドウを変更できます。

```html
<img src="..." alt="..." class="drop-shadow-md md:drop-shadow-xl">
```

## 状態修飾子

`hover:`, `focus:`, `group-hover:` などと組み合わせて、インタラクションに応じてドロップシャドウを適用または変更できます。

```html
<button class="drop-shadow hover:drop-shadow-lg transition ...">Hover Me</button>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.dropShadow` (または `theme.dropShadow`) でカスタムのドロップシャドウを追加できます。値には CSS の `drop-shadow()` 関数で有効な値を文字列で指定します。複数のドロップシャドウを適用することも可能です (スペース区切り)。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      dropShadow: {
        'sm': '0 1px 1px rgb(0 0 0 / 0.05)',
        'DEFAULT': ['0 1px 2px rgb(0 0 0 / 0.1)', '0 1px 1px rgb(0 0 0 / 0.06)'], // `drop-shadow` クラス
        'md': ['0 4px 3px rgb(0 0 0 / 0.07)', '0 2px 2px rgb(0 0 0 / 0.06)'],
        // ... lg, xl, 2xl
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)', // 新しいサイズ
        'glow': [ // 複数の影を組み合わせる例
          '0 0px 20px rgba(255,255, 255, 0.35)',
          '0 0px 65px rgba(255, 255,255, 0.2)'
        ]
      },
    },
  },
}
```

```html
<img src="..." alt="..." class="drop-shadow-3xl">
<div class="drop-shadow-glow ...">Glowing Effect</div>
```
**注意:** `drop-shadow` フィルターでは、`box-shadow` のように色を直接ユーティリティクラス (`shadow-{color}`) で変更することはできません。色付きのドロップシャドウが必要な場合は、カスタム定義で色を含む `drop-shadow()` 値を指定するか、任意の値を使用します。

## 任意の値 (Arbitrary Values)

任意の値を使って `drop-shadow()` を直接指定することも可能です。

```html
<img src="..." alt="..." class="drop-shadow-[0_2px_3px_rgba(0,0,0,0.2)]">
<img src="..." alt="..." class="drop-shadow-[0_0_10px_#ff0000]"> {/* 赤いドロップシャドウ */}
```

## 注意点

*   `drop-shadow` は要素の**アルファチャンネル (透明度)** を考慮して影を生成します。完全に透明な部分には影が付きません。
*   `box-shadow` と比較して、`drop-shadow` は計算負荷が高くなる可能性があります。特に複雑な形状や多数の要素に適用する場合はパフォーマンスに注意してください。
*   `filter` プロパティのブラウザサポート状況を確認してください (主要なモダンブラウザではサポートされています)。

## 関連ユーティリティ

*   `box-shadow` (`shadow-*`): 要素の矩形ボックスに対する影。
*   他の `filter` ユーティリティ (`blur`, `brightness`, `contrast` など)。
*   `backdrop-filter`: 要素の**背景**にあるコンテンツにフィルターを適用します。

## 公式ドキュメント参照
*   [Tailwind CSS: Drop Shadow](https://tailwindcss.com/docs/drop-shadow)
*   [MDN: filter: drop-shadow()](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow)
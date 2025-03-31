## タイトル
title: Flexbox & Grid: Order (順序)

## タグ
tags: ["tailwindcss", "utilities", "flexbox", "grid", "order", "layout", "responsive", "accessibility"]

## 概要
`order-{value}` ユーティリティは、Flex アイテムまたは Grid アイテムが表示される順序を制御します。CSS の `order` プロパティに対応します。

デフォルトでは、アイテムは DOM (HTML ソースコード) に記述された順序で表示されます (`order: 0`)。`order` ユーティリティを使うと、この視覚的な順序を DOM の順序とは独立して変更できます。

## 基本的な使い方とパラメータ

`order-{number}` の形式でクラスを指定します。数値が小さいアイテムほど先に表示されます。

*   **`order-1`** ～ **`order-12`**: 順序を指定します (値 1 ～ 12)。
*   **`order-first`**: 最も小さい順序 (`order: -9999;`) を設定し、他のどのアイテムよりも先に表示させます。
*   **`order-last`**: 最も大きい順序 (`order: 9999;`) を設定し、他のどのアイテムよりも後に表示させます。
*   **`order-none`**: デフォルトの順序 (`order: 0;`) を設定します。レスポンシブなどで順序指定をリセットする場合に使います。

```html
<div class="flex flex-wrap gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">

  {/* デフォルトの順序 (DOM 順) */}
  <div class="p-4 rounded bg-blue-300 dark:bg-blue-800">Item 1 (DOM Order 1)</div>
  <div class="p-4 rounded bg-blue-400 dark:bg-blue-700">Item 2 (DOM Order 2)</div>
  <div class="p-4 rounded bg-blue-500 dark:bg-blue-600">Item 3 (DOM Order 3)</div>

</div>

<hr class="my-8 border-dashed dark:border-gray-700">

<div class="flex flex-wrap gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">

  {/* order-* を使って順序を変更 */}
  <div class="order-3 p-4 rounded bg-green-300 dark:bg-green-800">Item 1 (DOM Order 1, Visual Order 3)</div>
  <div class="order-1 p-4 rounded bg-green-400 dark:bg-green-700">Item 2 (DOM Order 2, Visual Order 1)</div>
  <div class="order-2 p-4 rounded bg-green-500 dark:bg-green-600">Item 3 (DOM Order 3, Visual Order 2)</div>

</div>

<hr class="my-8 border-dashed dark:border-gray-700">

<div class="flex flex-wrap gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">

  {/* order-first と order-last */}
  <div class="order-last p-4 rounded bg-yellow-300 dark:bg-yellow-800">Item A (DOM 1, Visual Last)</div>
  <div class="p-4 rounded bg-yellow-400 dark:bg-yellow-700">Item B (DOM 2, Visual Middle)</div> {/* order-none (0) */}
  <div class="order-first p-4 rounded bg-yellow-500 dark:bg-yellow-600">Item C (DOM 3, Visual First)</div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてアイテムの順序を変更するのは非常に一般的な使い方です。例えば、モバイルでは特定の要素を先に表示し、デスクトップでは別の順序にする、といったことが可能です。

```html
<div class="flex flex-col md:flex-row gap-4">
  {/* モバイルでは最初、md 以上では最後 */}
  <div class="order-first md:order-last p-4 bg-purple-200 dark:bg-purple-900 rounded">Sidebar Content</div>
  {/* モバイルでは最後、md 以上では最初 */}
  <div class="order-last md:order-first flex-1 p-4 bg-purple-300 dark:bg-purple-800 rounded">Main Content</div>
</div>
```
この例では、`order-none` (デフォルトの `order: 0`) を明示的に指定する必要はありません。`order-first` や `order-last` がない要素は `order: 0` として扱われ、それらの間で DOM 順に配置されます。

## アクセシビリティに関する注意点

`order` ユーティリティは**視覚的な表示順序のみ**を変更し、**DOM (HTML ソースコード) の順序は変更しません**。これは、キーボードの Tab キーによるフォーカス移動順序や、スクリーンリーダーによる読み上げ順序に影響を与えます。

*   **フォーカス順序:** Tab キーによるフォーカスは、通常 DOM の順序に従います。視覚的な順序とフォーカス順序が大きく異なると、キーボードユーザーにとって混乱を招き、操作性が低下する可能性があります。
*   **読み上げ順序:** スクリーンリーダーも通常 DOM の順序に従ってコンテンツを読み上げます。視覚的な順序と読み上げ順序が異なると、コンテンツの文脈や意味が理解しにくくなる可能性があります。

**推奨事項:**

*   `order` ユーティリティは、レイアウト上の理由で視覚的な順序を微調整する必要がある場合に限定して使用します。
*   コンテンツの論理的な順序 (DOM 順序) と視覚的な順序が大きく乖離するような使い方は避けるべきです。
*   特にフォーム要素やインタラクティブな要素の順序を変更する場合は、キーボード操作とスクリーンリーダーでのテストを必ず行い、アクセシビリティが損なわれていないかを確認してください。
*   可能であれば、DOM 構造自体を目的の視覚的順序に合わせてマークアップするのが最もアクセシブルな方法です。

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.order` でカスタムの `order` 値 (に対応するクラス) を追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      order: {
        '13': '13', // order-13 クラスを追加
      },
    },
  },
}
```

## 任意の値 (Arbitrary Values)

任意の値を使って `order` を直接指定することも可能です。

```html
<div class="order-[99] ...">...</div>
```

## 関連ユーティリティ

*   `display` (`flex`, `grid`): Flex または Grid コンテナを作成します。`order` はこれらのコンテナの子要素に適用されます。

## 公式ドキュメント参照
*   [Tailwind CSS: Order](https://tailwindcss.com/docs/order)
*   [MDN: order](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
*   [Flexbox & the keyboard navigation disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) (アクセシビリティに関する記事)
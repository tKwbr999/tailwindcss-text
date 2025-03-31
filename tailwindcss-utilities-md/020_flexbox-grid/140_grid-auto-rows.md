## タイトル
title: Flexbox & Grid: Grid Auto Rows (暗黙的なグリッド行サイズ)

## タグ
tags: ["tailwindcss", "utilities", "grid", "grid-auto-rows", "layout", "rows", "implicit grid"]

## 概要
`auto-rows-{size}` ユーティリティは、Grid レイアウトにおいて、`grid-template-rows` で明示的に配置されなかったり、グリッドの範囲外に配置されたりして**暗黙的に作成されるグリッド行**のサイズ (高さ) を制御します。CSS の `grid-auto-rows` プロパティに対応します。

これは主に `grid-auto-flow: row` (デフォルト) と組み合わせて使用され、自動的に追加される行の高さを指定するのに役立ちます。

## 基本的な使い方とパラメータ

値は通常、キーワードまたは Tailwind の `theme.spacing` スケールに対応するキーを使用します。

*   **`auto-rows-auto`**: デフォルト。暗黙的な行の高さは、その行に含まれる最も高さのあるアイテムのコンテンツに基づいて決まります。
*   **`auto-rows-min`**: 暗黙的な行の高さは、その行に含まれる最も高さのあるアイテムの**最小コンテンツサイズ**に基づいて決まります。
*   **`auto-rows-max`**: 暗黙的な行の高さは、その行に含まれる最も高さのあるアイテムの**最大コンテンツサイズ**に基づいて決まります。
*   **`auto-rows-fr`**: 暗黙的な行は、利用可能な残りの垂直方向のスペースを均等に分割します (`1fr`)。コンテナに高さが指定されている必要があります。
*   **`auto-rows-{spacing}`**: (v3.3 以降) 暗黙的な行の高さを `theme.spacing` スケールの値で固定します (例: `auto-rows-16` は `4rem`)。

```html
<div class="space-y-8 p-4">

  {/* grid-auto-flow: row (Default) との組み合わせ */}
  <div>
    <p class="text-sm mb-1">auto-rows-auto (Default)</p>
    {/* 行の高さはコンテンツ依存 */}
    <div class="grid grid-cols-3 auto-rows-auto gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded">
      <div class="p-4 rounded bg-blue-300 dark:bg-blue-800">Auto Height 1</div>
      <div class="p-12 rounded bg-blue-400 dark:bg-blue-700">Tall Content Item 2</div>
      <div class="p-4 rounded bg-blue-500 dark:bg-blue-600">Item 3</div>
      <div class="p-8 rounded bg-blue-300 dark:bg-blue-800">Item 4 (Medium)</div>
      <div class="p-4 rounded bg-blue-400 dark:bg-blue-700">Item 5</div>
    </div>
  </div>

  <div>
    <p class="text-sm mb-1">auto-rows-min</p>
    <div class="grid grid-cols-3 auto-rows-min gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded">
      <div class="p-4 rounded bg-green-300 dark:bg-green-800">Auto Height 1</div>
      <div class="p-12 rounded bg-green-400 dark:bg-green-700">Tall Content Item 2</div> {/* 最小高さになる */}
      <div class="p-4 rounded bg-green-500 dark:bg-green-600">Item 3</div>
      <div class="p-8 rounded bg-green-300 dark:bg-green-800">Item 4 (Medium)</div>
      <div class="p-4 rounded bg-green-400 dark:bg-green-700">Item 5</div>
    </div>
  </div>

  <div>
    <p class="text-sm mb-1">auto-rows-max</p>
    <div class="grid grid-cols-3 auto-rows-max gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded">
       <div class="p-4 rounded bg-yellow-300 dark:bg-yellow-800">Auto Height 1</div>
      <div class="p-12 rounded bg-yellow-400 dark:bg-yellow-700">Tall Content Item 2</div> {/* 最大高さになる */}
      <div class="p-4 rounded bg-yellow-500 dark:bg-yellow-600">Item 3</div>
      <div class="p-8 rounded bg-yellow-300 dark:bg-yellow-800">Item 4 (Medium)</div>
      <div class="p-4 rounded bg-yellow-400 dark:bg-yellow-700">Item 5</div>
    </div>
  </div>

  <div>
    <p class="text-sm mb-1">auto-rows-fr</p>
    {/* コンテナ高さが必要 */}
    <div class="grid grid-cols-3 auto-rows-fr gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded h-48">
      <div class="p-4 rounded bg-purple-300 dark:bg-purple-800">1fr height</div>
      <div class="p-4 rounded bg-purple-400 dark:bg-purple-700">1fr height</div>
      <div class="p-4 rounded bg-purple-500 dark:bg-purple-600">1fr height</div>
      <div class="p-4 rounded bg-purple-300 dark:bg-purple-800">1fr height</div>
      <div class="p-4 rounded bg-purple-400 dark:bg-purple-700">1fr height</div>
    </div>
  </div>

   <div>
    <p class="text-sm mb-1">auto-rows-16 (Fixed Height - v3.3+)</p>
    <div class="grid grid-cols-3 auto-rows-16 gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded">
      <div class="p-4 rounded bg-pink-300 dark:bg-pink-800">Fixed 4rem</div>
      <div class="p-4 rounded bg-pink-400 dark:bg-pink-700">Fixed 4rem</div>
      <div class="p-4 rounded bg-pink-500 dark:bg-pink-600">Fixed 4rem</div>
      <div class="p-4 rounded bg-pink-300 dark:bg-pink-800">Fixed 4rem</div>
      <div class="p-4 rounded bg-pink-400 dark:bg-pink-700">Fixed 4rem</div>
    </div>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて暗黙的な行の高さを変更できます。

```html
<div class="grid auto-rows-auto md:auto-rows-fr ...">
  {/* デフォルトはコンテンツ高さ、md 以上で均等分割 */}
  {/* ... items ... */}
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.gridAutoRows` でカスタム値を定義できます。値には `grid-auto-rows` プロパティで有効な値を文字列で指定します (例: `'minmax(100px, auto)'`, `'8rem'`)。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gridAutoRows: {
        'compact': 'min-content',
        'tall': '20rem',
      },
    },
  },
}
```

```html
<div class="grid auto-rows-compact gap-4 ...">...</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って `grid-auto-rows` を直接指定することも可能です。

```html
<div class="grid auto-rows-[80px] gap-4 ...">...</div>
<div class="grid auto-rows-[minmax(60px,_auto)] gap-4 ...">...</div>
```

## 注意点

*   `grid-auto-rows` は Grid コンテナに適用します。
*   このプロパティは、**暗黙的に作成された行**にのみ影響します。`grid-template-rows` で明示的に定義された行のサイズは変更しません。
*   `grid-auto-flow` が `column` の場合、`grid-auto-rows` は通常効果がありません (暗黙的な行が作成されにくいため)。主に `grid-auto-flow: row;` (デフォルト) と組み合わせて使用します。
*   `auto-rows-fr` を使用する場合、コンテナに高さ (`h-*`) が指定されていないと効果がない場合があります。

## 関連ユーティリティ

*   `display` (`grid`, `inline-grid`): Grid コンテナを作成します。
*   `grid-auto-flow`: アイテムの自動配置方向を制御します。
*   `grid-template-rows`: グリッドの行を明示的に定義します。
*   `grid-auto-columns`: 暗黙的に作成される**列**の幅を制御します。

## 公式ドキュメント参照
*   [Tailwind CSS: Grid Auto Rows](https://tailwindcss.com/docs/grid-auto-rows)
*   [MDN: grid-auto-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
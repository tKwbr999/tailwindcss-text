## タイトル
title: Layout: Columns (段組み)

## タグ
tags: ["tailwindcss", "utilities", "layout", "columns", "multi-column", "responsive"]

## 概要
`columns-{count}` または `columns-{width}` ユーティリティを使って、テキストなどのコンテンツを新聞記事のような複数段（カラム）に分割して表示します。CSS の Multi-column Layout プロパティに基づいています。

## 基本的な使い方とパラメータ

### カラム数で指定 (`columns-{count}`)

`columns-{number}` クラスで、要素の内容を指定した数のカラムに分割します。

*   `columns-1` ～ `columns-12`: 指定した数のカラムを作成します。
*   `columns-auto`: デフォルト。カラム分割しません。

```html
<div class="p-4 bg-gray-100 dark:bg-gray-800 rounded">
  <h3 class="text-lg font-semibold mb-2">3 カラムレイアウト (columns-3)</h3>
  <div class="columns-3 gap-8"> {/* gap-* でカラム間の間隔を指定 */}
    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <img src="https://via.placeholder.com/150" alt="Placeholder" class="w-full aspect-square object-cover rounded mb-4"> {/* 画像なども配置可能 */}
    <p class="mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p class="mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <h4 class="font-medium mb-2">小見出し</h4>
    <p class="mb-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</div>
```

### カラム幅で指定 (`columns-{width}`)

`columns-{size}` クラスで、各カラムの最適な幅を指定します。コンテナの幅に応じてカラム数が自動的に調整されます。Tailwind の `theme.spacing` スケールに基づいたサイズ (`xs`, `sm`, `md`, `lg` など) を使用します。

*   `columns-xs` (20rem / 320px)
*   `columns-sm` (24rem / 384px)
*   `columns-md` (28rem / 448px)
*   `columns-lg` (32rem / 512px)
*   ... ～ `columns-7xl` (80rem / 1280px)

```html
<div class="p-4 bg-gray-100 dark:bg-gray-800 rounded mt-8">
  <h3 class="text-lg font-semibold mb-2">カラム幅で指定 (columns-sm)</h3>
  <div class="columns-sm gap-6"> {/* 各カラムが最低 24rem 幅になるように自動調整 */}
    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    <img src="https://via.placeholder.com/150" alt="Placeholder" class="w-full aspect-video object-cover rounded mb-4">
    <p class="mb-4">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
    <p class="mb-4">In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
  </div>
</div>
```

## カラム間の間隔 (`gap`)

`gap-{size}` または `gap-x-{size}` ユーティリティを使って、カラム間の間隔（溝）を指定します。`columns-*` と一緒に使うのが一般的です。

```html
<div class="columns-2 gap-12"> {/* カラム間に 3rem (48px) の間隔 */}
  {/* ... content ... */}
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてカラム数やカラム幅、ギャップを変更できます。

```html
{/* デフォルトは 1 カラム、md 以上で 2 カラム、lg 以上で 3 カラム */}
<div class="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 lg:gap-8">
  {/* ... content ... */}
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.columns` で、カスタムのカラム数やカラム幅を追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      columns: {
        '4xs': '16rem', // 256px
        '16': '16',     // 16 カラム
      },
    },
  },
}
```

```html
<div class="columns-4xs lg:columns-16 gap-4"> {/* カスタム値を使用 */}
  {/* ... content ... */}
</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使ってカラム数やカラム幅を直接指定することも可能です。

```html
<div class="columns-[18rem]"> {/* カラム幅を 18rem に */}
  {/* ... content ... */}
</div>

<div class="columns-[5]"> {/* 5 カラムに */}
  {/* ... content ... */}
</div>
```

## 注意点

*   カラムレイアウトは、主にテキストコンテンツを読みやすく分割するために使用されます。複雑なコンポーネントレイアウトには Flexbox や Grid の方が適している場合が多いです。
*   カラムをまたがる要素の制御 (`break-inside`, `break-after`, `break-before`) には、関連するユーティリティ (次のセクションで解説) を使用します。
*   ブラウザによっては、カラム間の高さの揃え方などに微妙な差異が生じることがあります。

## 関連ユーティリティ

*   `gap` (`gap-x`, `gap-y`): カラム間の間隔。
*   `break-after`, `break-before`, `break-inside`: カラムやページ区切りを制御。

## 公式ドキュメント参照
*   [Tailwind CSS: Columns](https://tailwindcss.com/docs/columns)
*   [MDN: columns](https://developer.mozilla.org/en-US/docs/Web/CSS/columns)
*   [MDN: column-width](https://developer.mozilla.org/en-US/docs/Web/CSS/column-width)
*   [MDN: column-count](https://developer.mozilla.org/en-US/docs/Web/CSS/column-count)
*   [MDN: column-gap](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
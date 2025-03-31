## タイトル
title: Layout: Z-Index (重なり順)

## タグ
tags: ["tailwindcss", "utilities", "layout", "z-index", "stacking context", "position", "absolute", "fixed", "sticky"]

## 概要
`z-{index}` ユーティリティは、配置された要素 (`position` が `static` 以外) のスタック順序 (z 軸方向の重なり順) を制御します。CSS の `z-index` プロパティに対応します。値が大きい要素ほど手前に表示されます。

`z-index` は、同じスタッキングコンテキスト (stacking context) 内にある要素間でのみ比較されます。

## 基本的な使い方とパラメータ

`z-{index}` の形式でクラスを指定します。

*   **`z-0`**: `z-index: 0;`
*   **`z-10`**: `z-index: 10;`
*   **`z-20`**: `z-index: 20;`
*   **`z-30`**: `z-index: 30;`
*   **`z-40`**: `z-index: 40;`
*   **`z-50`**: `z-index: 50;`
*   **`z-auto`**: `z-index: auto;` (デフォルト)

負の値も利用可能です (`-z-10` など)。

```html
<div class="relative h-48 p-4 border rounded bg-gray-100 dark:bg-gray-800">
  <p class="text-sm mb-2">Z-Index Stacking Order:</p>

  {/* z-index が大きいほど手前に表示される */}
  <div class="absolute top-4 left-4 w-24 h-24 rounded bg-red-500 opacity-80 z-10 flex items-center justify-center text-white">
    z-10
  </div>
  <div class="absolute top-8 left-8 w-24 h-24 rounded bg-blue-500 opacity-80 z-20 flex items-center justify-center text-white">
    z-20 (手前)
  </div>
  <div class="absolute top-12 left-12 w-24 h-24 rounded bg-green-500 opacity-80 z-0 flex items-center justify-center text-white">
    z-0 (奥)
  </div>
   <div class="absolute top-16 left-16 w-24 h-24 rounded bg-yellow-500 opacity-80 z-auto flex items-center justify-center text-black">
    z-auto (z-0 と同じ)
  </div>
   <div class="absolute top-20 left-20 w-24 h-24 rounded bg-purple-500 opacity-80 -z-10 flex items-center justify-center text-white">
    -z-10 (一番奥)
  </div>

  {/* position: static の要素は z-index が効かない */}
  <div class="static mt-32 p-2 bg-gray-400 rounded">Static element (z-index ignored)</div>
</div>
```

## スタッキングコンテキスト

`z-index` の値は、要素が属する**スタッキングコンテキスト**内でのみ意味を持ちます。新しいスタッキングコンテキストは、以下のいずれかの条件を満たす要素によって作成されます。

*   `position` が `absolute` または `relative` で、`z-index` が `auto` 以外。
*   `position` が `fixed` または `sticky`。
*   要素が `flex` または `grid` コンテナの**子要素**で、`z-index` が `auto` 以外。
*   `opacity` が 1 未満。
*   `transform`, `filter`, `perspective`, `clip-path`, `mask` のいずれかが `none` 以外。
*   `isolation: isolate;` (`isolate` クラス)。
*   `will-change` が `z-index` に影響を与えるプロパティを指定している。
*   `contain: layout;` または `paint;` または `strict;` または `content;`。

異なるスタッキングコンテキストに属する要素同士では、`z-index` の値を直接比較できません。代わりに、それらの要素が含まれるスタッキングコンテキスト自体の重なり順が優先されます。

```html
<div class="relative p-4 border rounded bg-gray-100 dark:bg-gray-800">
  {/* Context 1 (z-10) */}
  <div class="relative z-10 p-4 bg-blue-100 dark:bg-blue-900/30 rounded mb-2">
    <p class="text-xs mb-1">Stacking Context 1 (z-10)</p>
    {/* この z-30 は Context 1 内でのみ有効 */}
    <div class="absolute top-8 left-8 w-20 h-20 rounded bg-blue-500 z-30">Inner z-30</div>
  </div>

  {/* Context 2 (z-20) */}
  <div class="relative z-20 p-4 bg-green-100 dark:bg-green-900/30 rounded">
     <p class="text-xs mb-1">Stacking Context 2 (z-20)</p>
     {/* この z-0 は Context 2 内でのみ有効だが、Context 2 自体が手前にある */}
    <div class="absolute top-2 left-16 w-20 h-20 rounded bg-green-500 z-0">Inner z-0 (Above blue z-30)</div>
  </div>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて `z-index` を変更できます。

```html
{/* モバイルでは奥、md 以上で手前 */}
<div class="absolute z-10 md:z-30 ...">...</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.zIndex` でカスタムの `z-index` 値を追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      zIndex: {
        '60': '60',
        '70': '70',
        'modal': '100', // 意味的な名前付け
      },
    },
  },
}
```

```html
<div class="fixed inset-0 bg-black/50 z-modal"> {/* カスタム値を使用 */}
  {/* Modal Content */}
</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って `z-index` を直接指定することも可能です。

```html
<div class="absolute z-[9999] ...">...</div>
```

## 注意点

*   `z-index` は `position` が `static` (デフォルト) の要素には効果がありません。
*   `z-index` の乱用は、管理が困難な複雑なスタッキング順序を生み出す可能性があります。必要最低限の使用に留め、スタッキングコンテキストを意識することが重要です。
*   `isolation: isolate;` (`isolate` クラス) を使うと、意図的に新しいスタッキングコンテキストを作成し、`z-index` の影響範囲を限定できます。

## 関連ユーティリティ

*   `position` (`relative`, `absolute`, `fixed`, `sticky`): 要素の配置方法を指定し、スタッキングコンテキストの作成に関与します。
*   `isolation` (`isolate`): 新しいスタッキングコンテキストを作成します。

## 公式ドキュメント参照
*   [Tailwind CSS: Z-Index](https://tailwindcss.com/docs/z-index)
*   [MDN: z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
*   [MDN: The stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
## タイトル
title: Effects: Opacity (不透明度)

## タグ
tags: ["tailwindcss", "utilities", "effects", "opacity", "transparent", "visibility"]

## 概要
`opacity-{amount}` ユーティリティは、要素全体の不透明度を設定します。CSS の `opacity` プロパティに対応します。

値 `0` は要素を完全に透明にし、`100` は完全に不透明にします。

## 基本的な使い方とパラメータ

値は `0` から `100` までのパーセンテージで指定します (通常は 5 または 10 刻み)。

*   **`opacity-0`**: `opacity: 0;` (完全に透明)
*   **`opacity-5`**: `opacity: 0.05;`
*   **`opacity-10`**: `opacity: 0.1;`
*   ...
*   **`opacity-75`**: `opacity: 0.75;`
*   ...
*   **`opacity-95`**: `opacity: 0.95;`
*   **`opacity-100`**: `opacity: 1;` (デフォルト、完全に不透明)

```html
<div class="flex flex-wrap gap-4 p-4">
  <div class="opacity-100 p-4 rounded bg-blue-500 text-white">opacity-100</div>
  <div class="opacity-75 p-4 rounded bg-blue-500 text-white">opacity-75</div>
  <div class="opacity-50 p-4 rounded bg-blue-500 text-white">opacity-50</div>
  <div class="opacity-25 p-4 rounded bg-blue-500 text-white">opacity-25</div>
  <div class="opacity-10 p-4 rounded bg-blue-500 text-black border dark:border-gray-700">opacity-10</div>
  <div class="opacity-5 p-4 rounded bg-blue-500 text-black border dark:border-gray-700">opacity-5</div>
  <div class="opacity-0 p-4 rounded bg-blue-500 text-black border dark:border-gray-700">opacity-0 (Invisible, but takes space)</div>
</div>
```

## `opacity-0` vs `invisible` vs `hidden`

*   **`opacity-0`**: 要素は視覚的に完全に透明になりますが、**レイアウト上のスペースは保持**し、**インタラクション (クリックなど) も可能**な場合があります。アニメーションやトランジションでフェードイン/アウトさせる際によく使われます。
*   **`invisible` (`visibility: hidden;`)**: 要素は視覚的に非表示になり、インタラクションも受け付けませんが、**レイアウト上のスペースは保持**します。
*   **`hidden` (`display: none;`)**: 要素はレンダリングツリーから完全に削除され、視覚的にも表示されず、**レイアウト上のスペースも占有しません**。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて不透明度を変更できます。

```html
<div class="opacity-50 md:opacity-100 ...">
  Semi-transparent on small screens, fully opaque on medium and wider.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `disabled:`, `group-hover:` などと組み合わせて、インタラクションに応じて不透明度を変更するのは非常に一般的です。特に `disabled` 状態のスタイル設定や、ホバーエフェクトでよく使われます。

```html
<button class="bg-blue-500 text-white p-2 rounded opacity-100 hover:opacity-75 focus:opacity-90 disabled:opacity-50 transition-opacity">
  Opacity changes on hover/focus/disabled
</button>

<div class="group ...">
  <img src="..." class="opacity-80 group-hover:opacity-100 transition-opacity">
  <p>Image becomes fully opaque on group hover</p>
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.opacity` (または `theme.opacity`) でカスタムの不透明度の値やキーを追加できます。値は `0` から `1` の間の数値、またはパーセンテージ文字列 (`'67%'`) で指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
        '85': '0.85',
      },
    },
  },
}
```

```html
<div class="opacity-15 ...">Custom opacity 15%</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って不透明度を直接指定することも可能です。

```html
<div class="opacity-[.12] ...">Arbitrary opacity 12%</div>
<div class="opacity-[var(--my-opacity)] ...">Opacity from CSS variable</div>
```

## 注意点

*   `opacity` は要素とその**すべての子孫要素**に影響します。子要素だけで不透明度を元に戻すことはできません。背景色やテキスト色などの個別の不透明度を制御したい場合は、`bg-opacity` (`bg-red-500/50` など) や `text-opacity` (`text-red-500/50` など) を使用します。
*   `opacity` が `1` 未満の要素は、新しいスタッキングコンテキストを作成します。これは `z-index` の挙動に影響を与える可能性があります。

## 関連ユーティリティ

*   `background-opacity` (`bg-opacity-*` または `bg-color/opacity`): 背景色の不透明度。
*   `border-opacity` (`border-opacity-*` または `border-color/opacity`): ボーダー色の不透明度。
*   `text-opacity` (`text-opacity-*` または `text-color/opacity`): テキスト色の不透明度。
*   `divide-opacity` (`divide-opacity-*` または `divide-color/opacity`): 区切り線の不透明度。
*   `ring-opacity` (`ring-opacity-*` または `ring-color/opacity`): リングの不透明度。
*   `visibility` (`visible`, `invisible`): 要素の表示/非表示 (スペース保持)。
*   `display` (`hidden`): 要素の表示/非表示 (スペース削除)。

## 公式ドキュメント参照
*   [Tailwind CSS: Opacity](https://tailwindcss.com/docs/opacity)
*   [MDN: opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
## タイトル
title: Layout: Visibility (表示/非表示)

## タグ
tags: ["tailwindcss", "utilities", "layout", "visibility", "visible", "invisible", "hidden", "display", "accessibility"]

## 概要
`visible` および `invisible` ユーティリティは、要素を**レイアウト上のスペースを保持したまま**視覚的に表示するか非表示にするかを制御します。CSS の `visibility` プロパティに対応します。

これは `display: none;` を適用する `hidden` ユーティリティとは異なります。`hidden` は要素をレンダリングツリーから完全に削除し、レイアウト上のスペースも占有しません。

## 基本的な使い方とパラメータ

*   **`visible`**: デフォルト。要素は通常通り表示されます (`visibility: visible;`)。
*   **`invisible`**: 要素は視覚的に非表示になりますが、レイアウト上のスペースは保持されます (`visibility: hidden;`)。要素は存在し、スクリーンリーダーなどの支援技術によってはアクセス可能な場合があります。

```html
<div class="p-4 space-y-4">

  <div class="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
    <div class="w-16 h-16 bg-blue-500 rounded flex items-center justify-center text-white">Visible</div>
    <div class="invisible w-16 h-16 bg-green-500 rounded flex items-center justify-center text-white">Invisible (Space Reserved)</div>
    <div class="w-16 h-16 bg-red-500 rounded flex items-center justify-center text-white">Visible</div>
  </div>
  <p class="text-sm text-gray-600 dark:text-gray-400">
    中央の緑のボックスは `invisible` ですが、レイアウト上のスペースは確保されています。
  </p>

  <hr class="my-8 border-dashed dark:border-gray-700">

  <div class="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
    <div class="w-16 h-16 bg-blue-500 rounded flex items-center justify-center text-white">Visible</div>
    <div class="hidden w-16 h-16 bg-green-500 rounded flex items-center justify-center text-white">Hidden (No Space)</div>
    <div class="w-16 h-16 bg-red-500 rounded flex items-center justify-center text-white">Visible</div>
  </div>
   <p class="text-sm text-gray-600 dark:text-gray-400">
    中央の緑のボックスは `hidden` なので、表示されず、スペースも確保されません。
  </p>

</div>
```

## `hidden` (`display: none`) と `invisible` (`visibility: hidden`) の違い

| 特徴             | `hidden` (`display: none`) | `invisible` (`visibility: hidden`) |
| :--------------- | :------------------------- | :--------------------------------- |
| **視覚的な表示** | 非表示                     | 非表示                             |
| **レイアウト**   | スペースを占有しない       | スペースを占有する                 |
| **イベント**     | イベントを受け取らない     | イベントを受け取らない             |
| **子孫要素**     | 子孫も非表示               | 子孫も非表示 (ただし子孫で `visible` に上書き可能) |
| **アクセシビリティ** | 通常無視される             | アクセス可能な場合がある           |
| **アニメーション** | 不可                       | 可能 (例: `opacity` と併用)        |

**使い分け:**

*   **`hidden`**: 要素を完全に削除し、レイアウトに影響を与えたくない場合。条件付きレンダリングの代わりなど。
*   **`invisible`**: 要素のスペースは確保しつつ、一時的に視覚的に隠したい場合。アニメーションでフェードイン/アウトさせる前の初期状態など。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて表示/非表示を切り替えることができます。ただし、レイアウトを維持したまま非表示にするユースケースは `hidden` ほど多くはありません。

```html
<div class="visible md:invisible ...">
  Visible on small screens, invisible (but takes space) on medium and wider.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `group-hover:` などと組み合わせて、特定の状態で `invisible` にすることも可能です。

```html
<button class="bg-blue-500 text-white p-2 rounded hover:invisible">
  Hover to make invisible (keeps space)
</button>
```

## 注意点

*   `invisible` は要素のスペースを保持するため、意図しない空白がレイアウトに残ることがあります。完全に要素を消したい場合は `hidden` を使用してください。
*   アクセシビリティの観点から、重要なコンテンツを `invisible` で隠すのは避けるべきです。スクリーンリーダーが読み上げる可能性があるため、混乱を招く可能性があります。

## 関連ユーティリティ

*   `display` (`hidden`): 要素をレイアウトから完全に削除します。
*   `opacity` (`opacity-0`): 要素を透明にしますが、スペースは保持し、イベントも受け付ける可能性があります。アニメーションによく使われます。

## 公式ドキュメント参照
*   [Tailwind CSS: Visibility](https://tailwindcss.com/docs/visibility)
*   [MDN: visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)
## タイトル
title: Layout: Display (表示形式)

## タグ
tags: ["tailwindcss", "utilities", "layout", "display", "block", "inline-block", "inline", "flex", "inline-flex", "grid", "inline-grid", "contents", "hidden"]

## 概要
`display` ユーティリティは、要素がどのように表示され、レイアウトにどのように影響するかを制御します。CSS の `display` プロパティに対応し、要素をブロックレベル、インラインレベル、フレックスコンテナ、グリッドコンテナなどに設定します。要素の表示/非表示も制御します。

## 基本的な使い方とパラメータ

主要な `display` ユーティリティクラス:

*   **`block`**: ブロックレベル要素として表示します。利用可能な幅全体を占め、前後に改行が入ります (`<div>`, `<p>`, `<h1>` などがデフォルト)。
*   **`inline-block`**: インラインレベル要素のようにテキストと同じ行に配置されますが、`width`, `height`, `margin`, `padding` を持つことができます。
*   **`inline`**: インラインレベル要素として表示します。テキストの一部のように扱われ、幅や高さ、上下のマージンは通常効果がありません (`<span>`, `<a>`, `<strong>` などがデフォルト)。
*   **`flex`**: ブロックレベルのフレックスコンテナを作成します。子要素を Flexbox で配置します。
*   **`inline-flex`**: インラインレベルのフレックスコンテナを作成します。
*   **`grid`**: ブロックレベルのグリッドコンテナを作成します。子要素を Grid で配置します。
*   **`inline-grid`**: インラインレベルのグリッドコンテナを作成します。
*   **`contents`**: 要素自身のボックスを生成せず、子要素が親要素に直接属しているかのように扱わせます。アクセシビリティに影響を与える可能性があるため、注意が必要です。
*   **`hidden`**: 要素を完全に非表示にします (`display: none;`)。レイアウト上のスペースも占有しません。

```html
<div class="space-y-4 p-4">

  {/* block */}
  <div class="block bg-blue-200 dark:bg-blue-900 p-2 rounded">display: block (takes full width)</div>

  {/* inline-block */}
  <div class="space-x-2">
    <div class="inline-block bg-green-200 dark:bg-green-900 p-2 rounded w-24 h-16">inline-block</div>
    <div class="inline-block bg-green-200 dark:bg-green-900 p-2 rounded w-32 h-12">inline-block</div>
    <span>Text flows around.</span>
  </div>

  {/* inline */}
  <div>
    This is <span class="inline bg-yellow-200 dark:bg-yellow-800 px-1 rounded">inline</span> text. Width/height have no effect.
  </div>

  {/* flex */}
  <div class="flex bg-purple-200 dark:bg-purple-900 p-2 rounded space-x-2">
    <div>Flex</div>
    <div>Item 1</div>
    <div>Item 2</div>
  </div>

  {/* grid */}
  <div class="grid grid-cols-3 gap-2 bg-pink-200 dark:bg-pink-900 p-2 rounded">
    <div>Grid</div>
    <div>Item 1</div>
    <div>Item 2</div>
  </div>

  {/* hidden */}
  <div>
    This text is visible.
    <span class="hidden">This text is hidden (display: none).</span>
    This text is also visible.
  </div>

  {/* contents (注意して使用) */}
  <div class="flex space-x-4 p-2 bg-red-100 dark:bg-red-900/30 rounded">
    <span>Parent Flex</span>
    <div class="contents"> {/* この div はボックスを生成しない */}
      <span class="bg-red-300 dark:bg-red-700 p-1 rounded">Child 1 (acts as flex item)</span>
      <span class="bg-red-300 dark:bg-red-700 p-1 rounded">Child 2 (acts as flex item)</span>
    </div>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて `display` プロパティを変更できます。これはレスポンシブレイアウトの基本です。

```html
{/* デフォルトは非表示、md 以上でブロック要素として表示 */}
<div class="hidden md:block bg-cyan-200 dark:bg-cyan-900 p-2 rounded">
  Visible only on medium screens and wider.
</div>

{/* デフォルトはブロック、lg 以上でフレックスコンテナ */}
<div class="block lg:flex lg:space-x-4 bg-lime-200 dark:bg-lime-900 p-2 rounded">
  <div class="bg-lime-300 dark:bg-lime-700 p-1 rounded mb-2 lg:mb-0">Item 1</div>
  <div class="bg-lime-300 dark:bg-lime-700 p-1 rounded">Item 2</div>
</div>
```

## 状態修飾子

`hover:`, `focus:`, `group-hover:` などと組み合わせて、特定の状態でのみ表示を変更することも可能です（例: ホバー時に要素を表示するなど）。ただし、`display` の変更はレイアウトシフトを引き起こす可能性があるため、`opacity` や `visibility` の方が適している場合もあります。

```html
<div class="group relative">
  <button>Hover Me</button>
  <div class="hidden group-hover:block absolute top-full left-0 bg-white dark:bg-gray-700 p-2 rounded shadow-md">
    Tooltip or Dropdown
  </div>
</div>
```

## `hidden` vs `invisible`

*   **`hidden` (`display: none;`)**: 要素をレンダリングツリーから完全に削除します。要素は存在せず、レイアウト上のスペースも占有しません。スクリーンリーダーからも通常は無視されます。
*   **`invisible` (`visibility: hidden;`)**: 要素はレイアウト上に存在しスペースを占有しますが、視覚的に表示されなくなります。スクリーンリーダーは読み上げる可能性があります。

アニメーションやレイアウトを維持したまま非表示にしたい場合は `invisible` や `opacity-0` を検討します。完全に要素を消したい場合は `hidden` を使用します。

## 注意点

*   `display` プロパティは要素の基本的なレンダリング方法を決定するため、レイアウトに大きな影響を与えます。
*   `contents` は、要素自身のボックスモデルを無視させる特殊な値です。Flexbox や Grid の子要素として直接配置したいが、中間的なラッパー要素が必要な場合などに使われることがありますが、アクセシビリティツリーに影響を与える可能性があるため、慎重に使用する必要があります。

## 関連ユーティリティ

*   `visibility` (`visible`, `invisible`)
*   `opacity` (`opacity-*`)
*   Flexbox 関連 (`flex`, `justify-*`, `items-*` など)
*   Grid 関連 (`grid`, `grid-cols-*`, `gap-*` など)

## 公式ドキュメント参照
*   [Tailwind CSS: Display](https://tailwindcss.com/docs/display)
*   [MDN: display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
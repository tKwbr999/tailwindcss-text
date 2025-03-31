## タイトル
title: Flexbox & Grid: Flex Wrap (フレックス折り返し)

## タグ
tags: ["tailwindcss", "utilities", "flexbox", "flex-wrap", "wrap", "nowrap", "reverse", "layout", "responsive"]

## 概要
`flex-wrap`, `flex-nowrap`, `flex-wrap-reverse` ユーティリティは、Flex コンテナ内の Flex アイテムがコンテナの主軸方向に収まりきらない場合に、複数行 (または複数列) に折り返すかどうか、またその方向を制御します。CSS の `flex-wrap` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`flex-nowrap`**: デフォルト。アイテムは折り返さず、コンテナからはみ出すか、`flex-shrink` によって縮小されます。
*   **`flex-wrap`**: アイテムはコンテナの幅 (または高さ) に収まらない場合、次の行 (または列) に折り返されます。
*   **`flex-wrap-reverse`**: `flex-wrap` と同様に折り返しますが、交差軸の方向が逆になります (例: `flex-row` の場合、下の行から上に折り返す)。

```html
<div class="space-y-8 p-4">

  {/* flex-nowrap (Default) */}
  <div>
    <p class="text-sm mb-1">flex-nowrap (Default): Items overflow or shrink</p>
    <div class="flex flex-nowrap w-64 border rounded dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-1">
      <div class="flex-none p-2 rounded bg-blue-300 dark:bg-blue-800 m-1 w-20">Item 1</div>
      <div class="flex-none p-2 rounded bg-blue-400 dark:bg-blue-700 m-1 w-20">Item 2</div>
      <div class="flex-none p-2 rounded bg-blue-500 dark:bg-blue-600 m-1 w-20">Item 3</div>
      <div class="flex-none p-2 rounded bg-blue-600 dark:bg-blue-500 m-1 w-20">Item 4</div> {/* はみ出す */}
    </div>
  </div>

  {/* flex-wrap */}
  <div>
    <p class="text-sm mb-1">flex-wrap: Items wrap to the next line</p>
    <div class="flex flex-wrap w-64 border rounded dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-1 gap-2"> {/* gap を使うと便利 */}
      <div class="p-2 rounded bg-green-300 dark:bg-green-800 w-20">Item 1</div>
      <div class="p-2 rounded bg-green-400 dark:bg-green-700 w-20">Item 2</div>
      <div class="p-2 rounded bg-green-500 dark:bg-green-600 w-20">Item 3</div>
      <div class="p-2 rounded bg-green-600 dark:bg-green-500 w-20">Item 4</div> {/* 次の行へ */}
      <div class="p-2 rounded bg-green-700 dark:bg-green-400 w-20">Item 5</div>
    </div>
  </div>

  {/* flex-wrap-reverse */}
  <div>
    <p class="text-sm mb-1">flex-wrap-reverse: Items wrap to the previous line (visually)</p>
    <div class="flex flex-wrap-reverse w-64 h-32 border rounded dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-1 gap-2">
      <div class="p-2 rounded bg-yellow-300 dark:bg-yellow-800 w-20">Item 1</div>
      <div class="p-2 rounded bg-yellow-400 dark:bg-yellow-700 w-20">Item 2</div>
      <div class="p-2 rounded bg-yellow-500 dark:bg-yellow-600 w-20">Item 3</div>
      <div class="p-2 rounded bg-yellow-600 dark:bg-yellow-500 w-20">Item 4</div> {/* 上の行へ */}
      <div class="p-2 rounded bg-yellow-700 dark:bg-yellow-400 w-20">Item 5</div>
    </div>
  </div>

</div>
```

## `align-content` との組み合わせ

`flex-wrap` または `flex-wrap-reverse` を使用してアイテムが複数行に折り返された場合、**行全体の交差軸方向の配置**を制御するために `align-content-*` ユーティリティを使用できます。(`align-items-*` は単一行内でのアイテムの配置を制御します)。

*   `content-start`: 行をコンテナの先頭に詰めます。
*   `content-center`: 行をコンテナの中央に配置します。
*   `content-end`: 行をコンテナの末尾に詰めます。
*   `content-between`: 最初の行を先頭、最後の行を末尾に配置し、残りの行を均等に配置します。
*   `content-around`: 各行の上下に均等なスペースを設けます。
*   `content-evenly`: 各行間のスペースを完全に均等にします。

```html
<div class="flex flex-wrap content-center h-48 w-64 border rounded dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-1 gap-2">
  <p class="w-full text-xs text-center mb-1">flex-wrap content-center</p>
  <div class="p-2 rounded bg-purple-300 dark:bg-purple-800 w-20">Item 1</div>
  <div class="p-2 rounded bg-purple-400 dark:bg-purple-700 w-20">Item 2</div>
  <div class="p-2 rounded bg-purple-500 dark:bg-purple-600 w-20">Item 3</div>
  <div class="p-2 rounded bg-purple-600 dark:bg-purple-500 w-20">Item 4</div>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて折り返し動作を変更できます。例えば、モバイルでは折り返し、デスクトップでは折り返さない、といったレイアウトが可能です。

```html
{/* デフォルトは折り返し、lg 以上では折り返さない */}
<div class="flex flex-wrap lg:flex-nowrap ...">
  {/* ... items ... */}
</div>
```

## 注意点

*   `flex-wrap` は Flex コンテナ (親要素に `flex` または `inline-flex` が適用されている要素) に適用します。
*   `flex-wrap` を使用する場合、アイテム間の間隔には `gap-*` ユーティリティを使うのが最も簡単で推奨されます。`space-*` やマージンを使う場合は、折り返し時の挙動に注意が必要です。
*   `flex-wrap-reverse` は視覚的な順序のみを変更し、DOM の順序は変わりません。アクセシビリティに注意してください。

## 関連ユーティリティ

*   `display` (`flex`, `inline-flex`): Flex コンテナを作成します。
*   `flex-direction`: 主軸の方向を制御します。
*   `align-content`: 複数行になった場合の行全体の配置を制御します。
*   `align-items`: 単一行内でのアイテムの配置を制御します。
*   `gap`: アイテム間の間隔。

## 公式ドキュメント参照
*   [Tailwind CSS: Flex Wrap](https://tailwindcss.com/docs/flex-wrap)
*   [Tailwind CSS: Align Content](https://tailwindcss.com/docs/align-content)
*   [MDN: flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
*   [MDN: align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
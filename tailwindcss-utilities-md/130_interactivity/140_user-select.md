## タイトル
title: Interactivity: User Select (テキスト選択の制御)

## タグ
tags: ["tailwindcss", "utilities", "interactivity", "user-select", "select", "text selection", "none", "text", "all", "auto"]

## 概要
`select-{value}` ユーティリティは、ユーザーが要素内のテキストをクリックやドラッグで選択できるかどうかを制御します。CSS の `user-select` プロパティ (および古いブラウザ用のベンダープレフィックス) に対応します。

## 基本的な使い方とパラメータ

*   **`select-none`**: 要素内のテキスト選択を禁止します (`user-select: none;`)。ボタンのラベルやインタラクティブな UI 要素で、意図しないテキスト選択を防ぐのに役立ちます。
*   **`select-text`**: テキスト選択を許可します (`user-select: text;`)。通常、テキストコンテンツに対してデフォルトで有効になっていますが、親要素で `select-none` が指定されている場合に、部分的に選択を許可するために使用できます。
*   **`select-all`**: 要素をクリックすると、その要素内のすべてのテキストが一度に選択されるようにします (`user-select: all;`)。コードブロックやエラーメッセージなどをコピーしやすくするのに便利です。
*   **`select-auto`**: デフォルト。ブラウザのデフォルトの挙動に従います (`user-select: auto;`)。通常はテキスト要素 (`<p>`, `<h1>` など) では選択可能、フォームコントロール (`<button>`, `<input>` など) では選択不可になります。

```html
<div class="space-y-4 p-4">

  <div>
    <p class="text-sm mb-1">select-none</p>
    <div class="select-none p-4 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      You cannot select this text. Try dragging your mouse over it.
    </div>
  </div>

  <div>
    <p class="text-sm mb-1">select-text</p>
    <div class="select-text p-4 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      You can select this text normally. (This is usually the default for text).
    </div>
  </div>

  <div>
    <p class="text-sm mb-1">select-all</p>
    <div class="select-all p-4 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      Clicking this text block will select all of it at once. Useful for code snippets or IDs. Example: <code class="font-mono">npm install tailwindcss</code>
    </div>
  </div>

  <div>
    <p class="text-sm mb-1">select-auto (Default)</p>
    <div class="select-auto p-4 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      Browser default behavior. Text is usually selectable.
    </div>
    <button class="select-auto mt-2 p-2 bg-blue-500 text-white rounded">
      Button text is usually not selectable by default (auto).
    </button>
  </div>

  {/* 組み合わせ */}
   <div class="select-none p-4 bg-gray-200 dark:bg-gray-700 rounded border dark:border-gray-600">
     This part is not selectable, but
     <span class="select-text font-semibold text-blue-600 dark:text-blue-400">this part inside is selectable</span>
     because of `select-text`.
   </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてテキスト選択の可否を変更できます。

```html
<p class="select-none md:select-text ...">
  Text selection disabled on small screens, enabled on medium and wider.
</p>
```

## 注意点

*   `select-none` は、ユーザーがテキストをコピー＆ペーストするのを妨げるため、必要な情報 (エラーコード、住所など) に対しては使用しないように注意してください。主にインタラクティブな UI 要素の誤操作を防ぐ目的で使用します。
*   `select-all` はクリック時に全選択を促しますが、部分的な選択も可能です (ブラウザによる)。
*   `user-select` プロパティのブラウザサポートは良好ですが、古いブラウザではベンダープレフィックス (`-webkit-user-select`, `-moz-user-select`) が必要になる場合があります (Tailwind はこれらを自動的に含めます)。

## 関連ユーティリティ

*   `cursor`: マウスカーソルの種類。`select-none` と `cursor-default` を組み合わせることがあります。

## 公式ドキュメント参照
*   [Tailwind CSS: User Select](https://tailwindcss.com/docs/user-select)
*   [MDN: user-select](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)
## タイトル
title: Typography: Whitespace (空白文字の扱い)

## タグ
tags: ["tailwindcss", "utilities", "typography", "whitespace", "wrap", "nowrap", "pre", "break-spaces"]

## 概要
`whitespace-{value}` ユーティリティは、要素内の空白文字 (スペース、タブ、改行) がどのように処理され、テキストがどのように折り返されるかを制御します。CSS の `white-space` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`whitespace-normal`**: デフォルト。連続する空白文字は一つにまとめられ、テキストは必要に応じて折り返されます (`white-space: normal;`)。
*   **`whitespace-nowrap`**: テキストの折り返しを禁止します (`white-space: nowrap;`)。テキストは一行で表示され、コンテナからはみ出す可能性があります。`text-nowrap` と同じ効果です。
*   **`whitespace-pre`**: 空白文字 (スペース、タブ、改行) をそのまま保持します (`white-space: pre;`)。テキストは改行文字でのみ折り返されます。`<pre>` タグのデフォルトスタイルです。
*   **`whitespace-pre-line`**: 連続する空白文字は一つにまとめられますが、改行文字は保持され、テキストは必要に応じて折り返されます (`white-space: pre-line;`)。
*   **`whitespace-pre-wrap`**: 空白文字をそのまま保持し、テキストは必要に応じて折り返されます (`white-space: pre-wrap;`)。
*   **`whitespace-break-spaces`**: (v3.2+) `whitespace-pre-wrap` と似ていますが、行末のスペースも保持し、改行の機会を提供します (`white-space: break-spaces;`)。より予測可能な折り返しが必要な場合に役立ちます。

```html
<div class="space-y-4 p-4 max-w-md mx-auto">

  <div>
    <p class="text-sm mb-1">whitespace-normal (Default)</p>
    <p class="whitespace-normal p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      Multiple    spaces collapse.
      Newlines are ignored and text wraps normally. Lorem ipsum dolor sit amet.
    </p>
  </div>

  <div>
    <p class="text-sm mb-1">whitespace-nowrap</p>
    <p class="whitespace-nowrap overflow-x-auto p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      Multiple    spaces collapse. Text does not wrap and might overflow. Use overflow-x-auto to see.
    </p>
  </div>

  <div>
    <p class="text-sm mb-1">whitespace-pre</p>
    <pre class="whitespace-pre overflow-x-auto p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">Multiple    spaces are preserved.
Newlines are preserved.
Text only wraps at newlines.</pre>
    {/* 通常は <pre> タグを使う */}
  </div>

  <div>
    <p class="text-sm mb-1">whitespace-pre-line</p>
    <p class="whitespace-pre-line p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      Multiple    spaces collapse.
      Newlines are preserved.
      Text wraps normally when needed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  <div>
    <p class="text-sm mb-1">whitespace-pre-wrap</p>
    <p class="whitespace-pre-wrap overflow-auto p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      Multiple    spaces are preserved.
      Newlines are preserved.
      Text wraps normally when needed. Lorem ipsum dolor sit amet.    Trailing spaces might collapse depending on wrap.
    </p>
  </div>

   <div>
    <p class="text-sm mb-1">whitespace-break-spaces (v3.2+)</p>
    <p class="whitespace-break-spaces overflow-auto p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      Multiple    spaces are preserved.
      Newlines are preserved.
      Text wraps normally.    Trailing spaces are preserved and provide wrapping opportunities.
    </p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて空白文字の扱い方を変更できます。

```html
{/* モバイルでは折り返し、md 以上で折り返しなし */}
<p class="whitespace-normal md:whitespace-nowrap ...">
  Long text content...
</p>
```

## 注意点

*   `whitespace-nowrap` を使用するとテキストがコンテナからはみ出す可能性があるため、`overflow-hidden`, `overflow-x-auto`, `text-overflow` (`truncate`) などと組み合わせて使うことがよくあります。
*   `whitespace-pre`, `pre-line`, `pre-wrap`, `break-spaces` は、ソースコードのインデントや改行をそのまま表示したい場合に便利です。通常は `<pre>` タグと組み合わせて使われます。
*   `whitespace-break-spaces` は比較的新しい値で、ブラウザのサポート状況を確認してください。

## 関連ユーティリティ

*   `text-overflow` (`truncate`, `text-ellipsis`, `text-clip`): テキストのはみ出し処理。
*   `overflow` (`overflow-*`): 要素のはみ出し処理。
*   `word-break`: 単語の途中での改行ルール。
*   `text-wrap`: (v3.3+) テキストの折り返し制御 (`balance`, `pretty` を含む)。`whitespace-nowrap` と `text-nowrap` は同じ効果です。

## 公式ドキュメント参照
*   [Tailwind CSS: Whitespace](https://tailwindcss.com/docs/whitespace)
*   [MDN: white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
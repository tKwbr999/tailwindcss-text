## タイトル
title: Typography: Text Overflow (テキストのはみ出し処理)

## タグ
tags: ["tailwindcss", "utilities", "typography", "text-overflow", "truncate", "ellipsis", "clip", "overflow", "whitespace"]

## 概要
`truncate`, `text-ellipsis`, `text-clip` ユーティリティは、テキストがコンテナ要素の境界からはみ出した場合に、どのように表示するかを制御します。CSS の `text-overflow` プロパティに対応します。

これらのユーティリティは通常、テキストの折り返しを禁止する `whitespace-nowrap` と、はみ出しを隠す `overflow-hidden` と組み合わせて使用します。

## 基本的な使い方とパラメータ

*   **`truncate`**: 最も一般的に使用されます。テキストが 1 行に収まらない場合に、末尾を省略記号 (...) で切り詰めます。これは `overflow-hidden`, `whitespace-nowrap`, `text-overflow: ellipsis;` を一括で適用する便利なショートハンドです。
*   **`text-ellipsis`**: テキストがはみ出した部分を省略記号 (...) で表示します (`text-overflow: ellipsis;`)。`overflow-hidden` と `whitespace-nowrap` (または他の `overflow` や `whitespace` の設定) を別途指定する必要があります。
*   **`text-clip`**: テキストがはみ出した部分をコンテナの境界で単純に切り取ります (`text-overflow: clip;`)。省略記号は表示されません。`overflow-hidden` と `whitespace-nowrap` (または他の `overflow` 設定) を別途指定する必要があります。

```html
<div class="space-y-4 p-4 max-w-sm mx-auto"> {/* 最大幅を設定 */}

  {/* truncate */}
  <div>
    <p class="text-sm mb-1">truncate (ellipsis + overflow + nowrap)</p>
    <p class="truncate p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      This is a very long text that will be truncated with an ellipsis at the end.
    </p>
  </div>

  {/* text-ellipsis */}
  <div>
    <p class="text-sm mb-1">text-ellipsis (requires overflow & nowrap)</p>
    <p class="overflow-hidden whitespace-nowrap text-ellipsis p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      This is a very long text that needs overflow and nowrap to show ellipsis.
    </p>
  </div>

  {/* text-clip */}
  <div>
    <p class="text-sm mb-1">text-clip (requires overflow & nowrap)</p>
    <p class="overflow-hidden whitespace-nowrap text-clip p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      This is a very long text that will be simply clipped at the container edge.
    </p>
  </div>

  {/* 複数行の切り詰め (line-clamp を使用) */}
   <div>
    <p class="text-sm mb-1">Multi-line truncation (Use line-clamp plugin)</p>
    <p class="line-clamp-3 p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      For truncating text to a specific number of lines (e.g., 3 lines), use the `@tailwindcss/line-clamp` plugin and the `line-clamp-*` utility. This text will be clamped after the third line if it's long enough. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてテキストのはみ出し処理を変更できます。

```html
{/* モバイルでは切り詰め、md 以上では通常表示 */}
<p class="truncate md:text-clip md:whitespace-normal md:overflow-visible ...">
  Long text content...
</p>
```
(`truncate` を解除する場合、`overflow`, `whitespace`, `text-overflow` をリセットする必要があることに注意してください。)

## 注意点

*   `text-ellipsis` と `text-clip` は、単独では効果がありません。要素に `overflow: hidden;` (`overflow-hidden`) と、通常は `whitespace: nowrap;` (`whitespace-nowrap`) が設定されている必要があります。
*   `truncate` はこれらを一括で設定する便利なユーティリティですが、**1 行のテキスト**にしか適用できません。
*   複数行のテキストを指定した行数で切り詰めて省略記号を表示したい場合は、`@tailwindcss/line-clamp` プラグインと `line-clamp-*` ユーティリティを使用します。

## 関連ユーティリティ

*   `overflow` (`overflow-hidden`): 要素のはみ出し処理。
*   `whitespace` (`whitespace-nowrap`): テキストの折り返し制御。
*   `line-clamp` (`line-clamp-*`): (プラグイン) 複数行のテキスト切り詰め。

## 公式ドキュメント参照
*   [Tailwind CSS: Text Overflow](https://tailwindcss.com/docs/text-overflow)
*   [MDN: text-overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)
*   [@tailwindcss/line-clamp Plugin](https://github.com/tailwindlabs/tailwindcss-line-clamp)
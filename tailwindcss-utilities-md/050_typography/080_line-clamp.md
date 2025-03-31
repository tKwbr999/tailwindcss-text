## タイトル
title: Typography: Line Clamp (行数制限と省略)

## タグ
tags: ["tailwindcss", "utilities", "typography", "line-clamp", "truncate", "ellipsis", "plugin"]

## 概要
`line-clamp-{n}` ユーティリティは、テキストコンテンツを指定した行数に制限し、収まらない部分を省略記号 (...) で表示します。CSS の `-webkit-line-clamp` プロパティに基づいています。

**注意:** このユーティリティを使用するには、公式プラグイン **`@tailwindcss/line-clamp`** をインストールし、`tailwind.config.js` の `plugins` 配列に追加する必要があります。

## セットアップ (`@tailwindcss/line-clamp` プラグイン)

1.  **インストール:**
    ```bash
    npm install -D @tailwindcss/line-clamp
    # または yarn add -D / pnpm add -D
    ```
2.  **`tailwind.config.js` に追加:**
    ```javascript
    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        require('@tailwindcss/line-clamp'),
        // ... 他のプラグイン
      ],
    }
    ```

## 基本的な使い方とパラメータ

`line-clamp-{number}` の形式でクラスを指定します。

*   **`line-clamp-1`**: 1 行で切り詰め。
*   **`line-clamp-2`**: 2 行で切り詰め。
*   **`line-clamp-3`**: 3 行で切り詰め。
*   ...
*   **`line-clamp-6`**: 6 行で切り詰め。
*   **`line-clamp-none`**: 切り詰めを解除します。

```html
<div class="space-y-4 p-4 max-w-md mx-auto"> {/* 最大幅を設定 */}

  <div>
    <p class="text-sm mb-1">line-clamp-2</p>
    <p class="line-clamp-2 text-base bg-gray-100 dark:bg-gray-800 p-2 rounded border dark:border-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
    </p>
  </div>

  <div>
    <p class="text-sm mb-1">line-clamp-3</p>
    <p class="line-clamp-3 text-base bg-gray-100 dark:bg-gray-800 p-2 rounded border dark:border-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
    </p>
  </div>

  <div>
    <p class="text-sm mb-1">line-clamp-none (解除)</p>
    <p class="line-clamp-3 md:line-clamp-none text-base bg-gray-100 dark:bg-gray-800 p-2 rounded border dark:border-gray-700">
      This text is clamped to 3 lines by default, but clamping is removed on medium screens and wider. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて行数制限を変更したり、解除したり (`md:line-clamp-none`) できます。

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.lineClamp` (または `theme.lineClamp`) でカスタムの行数を追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      lineClamp: {
        '7': '7',
        '8': '8',
        // ...
        '12': '12',
      },
    },
  },
   plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
```

```html
<p class="line-clamp-8 ...">Clamped to 8 lines</p>
```

## 任意の値 (Arbitrary Values)

任意の値を使って行数を直接指定することも可能です。

```html
<p class="line-clamp-[10] ...">Clamped to 10 lines</p>
```

## 注意点

*   `line-clamp-*` ユーティリティは、内部的に `-webkit-box-orient: vertical;`, `display: -webkit-box;`, `overflow: hidden;` といったプロパティも設定します。これらのスタイルが他のスタイルと競合しないか注意してください。
*   ブラウザのサポートは `-webkit-line-clamp` プロパティに依存します。主要なモダンブラウザではサポートされていますが、非常に古いブラウザでは動作しない可能性があります。
*   テキストが指定した行数に満たない場合は、省略記号は表示されません。

## 関連ユーティリティ

*   `text-overflow` (`truncate`): **1 行**のテキストがはみ出した場合に省略記号を表示します。`overflow-hidden` と `whitespace-nowrap` が必要です。複数行には対応していません。
*   `overflow` (`overflow-hidden`): 要素のはみ出しを隠します。
*   `whitespace` (`whitespace-nowrap`): テキストの折り返しを禁止します。

## 公式ドキュメント参照
*   [@tailwindcss/line-clamp Plugin](https://github.com/tailwindlabs/tailwindcss-line-clamp)
*   [MDN: -webkit-line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) (非標準ですが広く使われています)
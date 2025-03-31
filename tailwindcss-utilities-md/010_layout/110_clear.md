## タイトル
title: Layout: Clear (フロート回り込み解除)

## タグ
tags: ["tailwindcss", "utilities", "layout", "floats", "clear", "clearfix", "legacy"]

## 概要
`clear-{value}` ユーティリティは、要素が先行する浮動要素 (float) の隣に回り込むのを防ぎます。要素の上端が、指定された方向の浮動要素の下端よりも下にくるように配置されます。CSS の `clear` プロパティに対応します。

**注意:** `float` と同様に、`clear` も現代的な Flexbox や Grid レイアウトでは使用頻度が低いです。これらの新しいレイアウト手法では、通常、回り込み解除を明示的に行う必要はありません。`float` を使用した場合にのみ、このユーティリティが必要になります。

## 基本的な使い方とパラメータ

*   **`clear-left`**: 左側に浮動している要素の回り込みを解除します。要素は左側の浮動要素の下に移動します。
*   **`clear-right`**: 右側に浮動している要素の回り込みを解除します。要素は右側の浮動要素の下に移動します。
*   **`clear-both`**: 左右両方の浮動要素の回り込みを解除します。要素は左右どちらの浮動要素よりも下に移動します。最も一般的に使用されます。
*   **`clear-none`**: デフォルト。回り込みを解除しません。

```html
<div class="p-4 bg-gray-100 dark:bg-gray-800 rounded">

  <div class="mb-4">
    <div class="float-left w-24 h-16 bg-blue-200 dark:bg-blue-900 rounded mr-4">Floated Left</div>
    <div class="float-right w-24 h-16 bg-green-200 dark:bg-green-900 rounded ml-4">Floated Right</div>
    <p>This text wraps around both floated elements. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>

  {/* clear-both で回り込みを解除 */}
  <div class="clear-both pt-4 border-t border-dashed dark:border-gray-700">
    <h3 class="text-lg font-semibold">Cleared Section</h3>
    <p>This section uses `clear-both`, so it starts below both floated elements.</p>
  </div>

</div>

<hr class="my-8 border-dashed dark:border-gray-700">

<div class="p-4 bg-gray-100 dark:bg-gray-800 rounded">
  <div class="float-left w-1/3 bg-purple-200 dark:bg-purple-900 p-2 rounded mr-4">Left Float</div>
  <p>This text wraps around the left float.</p>
  <p class="clear-left pt-2 mt-2 border-t dark:border-gray-600">This paragraph uses `clear-left` and starts below the left float.</p>
</div>
```

## clearfix ハックの代替

従来、`float` を使用したレイアウトでは、親要素が浮動する子要素の高さを認識できなくなる問題を解決するために「clearfix ハック」と呼ばれる CSS のテクニックが使われていました。

Tailwind では、多くの場合、より簡単な方法で解決できます。

1.  **親要素を Flexbox または Grid コンテナにする:** 親要素に `flex` や `grid` を適用すると、通常は clearfix が不要になります。
2.  **`flow-root` ユーティリティ:** 親要素に `display: flow-root;` を適用します。これは新しいブロック整形コンテキストを作成し、内部のフロートを包含します。

```html
{/* flow-root を使った clearfix の代替 */}
<div class="flow-root p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded">
  <div class="float-left w-16 h-16 bg-yellow-300 dark:bg-yellow-700 rounded mr-4">Float</div>
  <div class="float-right w-16 h-16 bg-yellow-300 dark:bg-yellow-700 rounded ml-4">Float</div>
  <p class="text-sm">The parent element with `flow-root` correctly contains the floated children.</p>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、特定の画面サイズでのみ回り込み解除を適用できます。

```html
<div class="float-left ...">...</div>
<p>...</p>
{/* md サイズ以上でのみ回り込み解除 */}
<div class="md:clear-left ...">Starts below on md+ screens</div>
```

## 注意点

*   `clear` は `float` と密接に関連しています。`float` を使用しない限り、`clear` を使う必要はありません。
*   現代的なレイアウトでは、Flexbox や Grid を使用し、`clear` の必要性をなくすことが推奨されます。

## 関連ユーティリティ

*   `float`: 要素を浮動させます。
*   `display` (`flow-root`): 新しいブロック整形コンテキストを作成し、clearfix の代替として機能します。

## 公式ドキュメント参照
*   [Tailwind CSS: Clear](https://tailwindcss.com/docs/clear)
*   [Tailwind CSS: Display (`flow-root`)](https://tailwindcss.com/docs/display#flow-root)
*   [MDN: clear](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)
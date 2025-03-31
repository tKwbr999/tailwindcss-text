## タイトル
title: Layout: Box Sizing (ボックスサイズの算出方法)

## タグ
tags: ["tailwindcss", "utilities", "layout", "box-sizing", "border-box", "content-box", "css box model"]

## 概要
`box-border` および `box-content` ユーティリティは、要素の `width` および `height` プロパティが、その要素のパディング (padding) とボーダー (border) を含めて計算されるか (`border-box`)、含めずに計算されるか (`content-box`) を制御します。CSS の `box-sizing` プロパティに対応します。

**Tailwind CSS のデフォルトは `box-border` です。** これは、ほとんどのモダンな CSS 設計で推奨される方法であり、要素の幅や高さを指定したときに、パディングやボーダーを追加しても全体の寸法が変わらないため、レイアウト計算が直感的になります。

## 基本的な使い方とパラメータ

*   **`box-border`**: (Tailwind のデフォルト) 要素の `width` と `height` は、**コンテンツ + パディング + ボーダー** を含んだ寸法になります。`width: 100px; padding: 10px; border: 1px;` の場合、要素の実際の表示幅は 100px のままです。
*   **`box-content`**: 要素の `width` と `height` は、**コンテンツのみ**の寸法になります。`width: 100px; padding: 10px; border: 1px;` の場合、要素の実際の表示幅は `100px + (10px * 2) + (1px * 2) = 122px` になります。

```html
<div class="p-4 bg-gray-100 dark:bg-gray-800 rounded space-y-4">

  {/* box-border (Tailwind デフォルト) */}
  <div>
    <p class="text-sm mb-1">box-border (Default): Width includes padding & border.</p>
    <div class="box-border w-48 h-24 p-4 border-4 border-blue-500 bg-blue-100 dark:bg-blue-900/30">
      Content (w-48 = 192px total width)
    </div>
  </div>

  {/* box-content */}
  <div>
    <p class="text-sm mb-1">box-content: Width is only content width.</p>
    <div class="box-content w-48 h-24 p-4 border-4 border-green-500 bg-green-100 dark:bg-green-900/30">
      Content (Actual width = 192px + 32px padding + 8px border = 232px)
    </div>
  </div>

</div>
```

## なぜ `box-border` がデフォルトなのか？

`box-border` を使うと、要素に `width` や `height` を指定した後で `padding` や `border` を追加しても、要素の**外側の寸法が変わらない**ため、レイアウトの予測が非常にしやすくなります。例えば、`w-1/2` で幅 50% にした要素にパディングを追加しても、幅は 50% のまま維持されます。

`box-content` の場合、パディングやボーダーを追加すると要素全体の寸法が大きくなるため、特にグリッドレイアウトや隣接する要素との関係で予期しないレイアウト崩れが発生しやすくなります。

Tailwind は、このモダンな CSS 設計のベストプラクティスに従い、すべての要素にデフォルトで `border-box` を適用するスタイルを Preflight (ベーススタイルリセット) に含んでいます。

## `box-content` を使う場面

通常、`box-border` が推奨されますが、外部ライブラリや特定の状況で `content-box` の挙動が必要な場合に、`box-content` クラスを使って部分的に上書きすることができます。しかし、その必要性は稀です。

## レスポンシブ

`box-sizing` をレスポンシブに変更することは通常ありませんが、技術的には可能です。

```html
<div class="box-border md:box-content ...">
  Box sizing changes on medium screens (rarely needed).
</div>
```

## 注意点

*   Tailwind を使用している場合、意識的に `box-content` を指定しない限り、すべての要素は `box-border` として扱われます。
*   `box-sizing` は要素の寸法計算の基本となるため、この違いを理解しておくことは重要です。

## 関連ユーティリティ

*   `width` (`w-*`)
*   `height` (`h-*`)
*   `padding` (`p-*`, `px-*`, `py-*`, ...)
*   `border-width` (`border-*`)

## 公式ドキュメント参照
*   [Tailwind CSS: Box Sizing](https://tailwindcss.com/docs/box-sizing)
*   [MDN: box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
*   [CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
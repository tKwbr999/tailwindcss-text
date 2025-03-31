## タイトル
title: Accessibility: Screen Readers (スクリーンリーダー制御)

## タグ
tags: ["tailwindcss", "utilities", "accessibility", "a11y", "screen-reader", "sr-only", "not-sr-only", "visibility"]

## 概要
`sr-only` および `not-sr-only` ユーティリティは、要素を視覚的に隠しつつスクリーンリーダーなどの支援技術ではアクセス可能にする、またはその逆を行うためのアクセシビリティ補助機能です。

## 基本的な使い方とパラメータ

*   **`sr-only` (Screen Reader Only):**
    *   **効果:** 要素を視覚的に画面から隠しますが、スクリーンリーダーでは読み上げられる状態を維持します (`position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;`)。
    *   **用途:**
        *   アイコンボタンに視覚的には不要だがスクリーンリーダーには必要なラベルを提供する (例: `<button><svg>...</svg><span class="sr-only">設定を開く</span></button>`)。
        *   "メインコンテンツへスキップ" のような、通常は隠しておきキーボードフォーカス時に表示するリンク。
        *   視覚的には明らかな情報 (例: 色で区別されたステータス) に、スクリーンリーダー向けのテキスト補足を追加する。
*   **`not-sr-only`**:
    *   **効果:** `sr-only` によって適用されたスタイルを打ち消し、要素を再び視覚的に表示します (`position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal;`)。
    *   **用途:** 通常、`focus:` や `group-focus:` などの状態修飾子と組み合わせて、`sr-only` で隠された要素 (例: スキップリンク) がフォーカスを受け取ったときに表示されるようにします。

```html
<div class="space-y-6 p-4">

  {/* sr-only の例: アイコンボタンのラベル */}
  <button class="p-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> {/* Placeholder Icon */}
      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
    </svg>
    <span class="sr-only">プロフィール</span> {/* スクリーンリーダー用ラベル */}
  </button>

  {/* sr-only と not-sr-only の例: スキップリンク */}
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:p-3 focus:bg-white dark:focus:bg-gray-800 focus:text-blue-700 dark:focus:text-blue-300 focus:ring-2 focus:ring-blue-500 rounded-lg">
    メインコンテンツへスキップ
  </a>

  {/* 通常のテキスト */}
  <p>This is regular text.</p>

  {/* メインコンテンツの開始位置 (スキップリンクのターゲット) */}
  <main id="main-content">
    <h2 class="text-xl font-semibold">Main Content</h2>
    <p>This is the main content area.</p>
  </main>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて要素をスクリーンリーダー専用にするかどうかを切り替えることも可能ですが、アクセシビリティの観点からは、通常は常にアクセス可能にしておくべきです。

```html
{/* 特定のサイズでのみ sr-only にする例 (非推奨な場合が多い) */}
<span class="md:sr-only">Visible only on small screens</span>
```

## 状態修飾子

`focus:not-sr-only`, `focus-within:not-sr-only`, `group-focus:not-sr-only` などと組み合わせて、フォーカス時に `sr-only` で隠された要素を表示させるのが主な使い方です。

## `hidden` や `invisible` との違い

*   **`sr-only`**: 視覚的に隠すが、スクリーンリーダーには**読み上げられる**。レイアウト上のスペースは占有しない (絶対配置のため)。
*   **`hidden` (`display: none;`)**: 視覚的に隠し、スクリーンリーダーからも**無視され**、レイアウト上のスペースも**占有しない**。
*   **`invisible` (`visibility: hidden;`)**: 視覚的に隠すが、スクリーンリーダーには**読み上げられる可能性があり**、レイアウト上のスペースは**占有する**。

アクセシビリティのために情報を残しつつ視覚的に隠したい場合は `sr-only` を使用します。完全に不要な要素は `hidden` を使用します。

## 注意点

*   `sr-only` はアクセシビリティを向上させるための重要なツールですが、乱用するとスクリーンリーダーユーザーにとって冗長な情報が増える可能性があります。視覚的な情報と補完し合う形で適切に使用してください。
*   `focus:not-sr-only` を使用する場合、フォーカスが当たったときに要素が他のコンテンツと重なったり、レイアウトを崩したりしないように、`absolute`, `z-index`, 背景色などのスタイルを適切に設定する必要があります。

## 関連ユーティリティ

*   `display` (`hidden`): 要素を完全に非表示にする。
*   `visibility` (`invisible`): 要素を視覚的に非表示にする (スペースは保持)。

## 公式ドキュメント参照
*   [Tailwind CSS: Screen Readers](https://tailwindcss.com/docs/screen-readers)
*   [WebAIM: Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/) (アクセシビリティに関する解説)
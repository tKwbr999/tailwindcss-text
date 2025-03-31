## タイトル
title: Typography: Word Break (単語の改行)

## タグ
tags: ["tailwindcss", "utilities", "typography", "word-break", "line break", "overflow", "hyphens"]

## 概要
`break-normal`, `break-words`, `break-all`, `break-keep` ユーティリティは、テキストがコンテナの境界に達したときに、単語の途中で改行を許可するかどうか、またどのように行うかを制御します。CSS の `overflow-wrap` および `word-break` プロパティに対応します。

これは、URL や長い単語がコンテナからはみ出すのを防いだり、特定の言語 (CJK など) での改行を適切に処理したりするのに役立ちます。

## 基本的な使い方とパラメータ

*   **`break-normal`**: デフォルト。通常の単語区切りでのみ改行します (`overflow-wrap: break-word; word-break: normal;`)。長い単語ははみ出す可能性があります。
*   **`break-words`**: 長い単語がコンテナからはみ出す場合に、単語の**途中**で改行を許可します (`overflow-wrap: break-word;`)。`break-normal` と似ていますが、`overflow-wrap` を明示的に設定します。
*   **`break-all`**: 単語の途中かどうかに関わらず、文字単位で改行を許可します (`word-break: break-all;`)。CJK (中国語、日本語、韓国語) テキスト以外では、意図しない場所で単語が分割される可能性があるため注意が必要です。
*   **`break-keep`**: (主に CJK 向け) CJK テキストにおいて、単語の途中での改行を禁止します (`word-break: keep-all;`)。

```html
<div class="space-y-4 p-4 max-w-xs mx-auto"> {/* 幅を制限 */}

  <div>
    <p class="text-sm mb-1">break-normal (Default)</p>
    <p class="break-normal p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      LooooooooongWordThatMightOverflow. Normal wrapping occurs at spaces.
    </p>
  </div>

  <div>
    <p class="text-sm mb-1">break-words</p>
    <p class="break-words p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      LooooooooongWordThatWillBreakIfNeeded. Allows breaking within the long word.
    </p>
  </div>

  <div>
    <p class="text-sm mb-1">break-all</p>
    <p class="break-all p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      AllowsBreakingAnywhereEvenInShortWords. Use with caution for non-CJK text.
    </p>
  </div>

  {/* break-keep は CJK テキストでの効果が主 */}
  <div>
    <p class="text-sm mb-1">break-keep (For CJK)</p>
    <p class="break-keep p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700">
      CJKテキストでは単語の途中での改行を抑制します。日本語の場合など。
    </p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて改行ルールを変更できます。

```html
{/* モバイルでは単語途中改行を許可、md 以上では通常の改行 */}
<p class="break-words md:break-normal ...">
  LongURLOrIdentifierThatNeedsToBreakOnMobile.com
</p>
```

## 注意点

*   **`break-words` vs `break-all`**:
    *   `break-words` (`overflow-wrap: break-word;`) は、単語全体が収まらない場合に**のみ**、単語の途中で改行します。通常のスペースでの改行が優先されます。
    *   `break-all` (`word-break: break-all;`) は、単語の途中かどうかに関わらず、コンテナの端に達したら**文字単位**で強制的に改行します。ラテン文字などでは読みにくくなる可能性があります。CJK テキストに適しています。
*   **ハイフネーション (`hyphens-*`)**: 単語の途中で改行する際に、ハイフン (-) を自動的に挿入したい場合は、`hyphens-auto` または `hyphens-manual` ユーティリティを併用します (ブラウザと辞書のサポートが必要)。
*   これらのユーティリティはテキストの折り返しに影響するため、`whitespace-nowrap` などとは通常同時に使用しません。

## 関連ユーティリティ

*   `whitespace`: テキストの空白文字と折り返し。
*   `text-overflow` (`truncate`): テキストのはみ出しを省略記号で表示。
*   `hyphens`: ハイフネーションの制御。

## 公式ドキュメント参照
*   [Tailwind CSS: Word Break](https://tailwindcss.com/docs/word-break)
*   [Tailwind CSS: Overflow Wrap](https://tailwindcss.com/docs/overflow-wrap) (Tailwind v3.0 より前の `break-words` はこちらで説明)
*   [MDN: word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
*   [MDN: overflow-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap)
## タイトル
title: Typography: Hyphens (ハイフネーション)

## タグ
tags: ["tailwindcss", "utilities", "typography", "hyphens", "line break", "word break"]

## 概要
`hyphens-none`, `hyphens-manual`, `hyphens-auto` ユーティリティは、テキストがコンテナの境界で折り返される際に、単語の途中でハイフン (-) を使って改行 (ハイフネーション) するかどうか、またその方法を制御します。CSS の `hyphens` プロパティに対応します。

ハイフネーションを有効にすると、特に両端揃え (`text-justify`) のテキストや狭いカラムでの単語間の不自然なスペースを減らし、より均等なテキストブロックを作成するのに役立ちます。

## 基本的な使い方とパラメータ

*   **`hyphens-none`**: デフォルト。ハイフネーションを行いません。単語は途中ではなく、スペースでのみ改行されます (ただし `break-words` や `break-all` が指定されている場合を除く)。
*   **`hyphens-manual`**: HTML 内にソフトハイフン (`&shy;` または `\u00AD`) が挿入されている場合にのみ、その位置でハイフネーションを許可します。
*   **`hyphens-auto`**: ブラウザが言語辞書に基づいて、適切な位置で自動的にハイフネーションを行います。**`<html>` タグに `lang` 属性 (例: `lang="en"`) が正しく設定されている必要があります。**

```html
<div class="space-y-4 p-4 max-w-xs mx-auto"> {/* 幅を制限 */}

  <div>
    <p class="text-sm mb-1">hyphens-none (Default)</p>
    <p class="hyphens-none p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700 text-justify">
      This demonstrates justification without hyphenation. Long words like 'supercalifragilisticexpialidocious' might cause large gaps.
    </p>
  </div>

  <div>
    <p class="text-sm mb-1">hyphens-manual (with &amp;shy;)</p>
    <p class="hyphens-manual p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700 text-justify">
      Manual hy&shy;phen&shy;ation allows breaks only at soft hyphens (&amp;shy;). Super&shy;cali&shy;fragilistic&shy;expiali&shy;docious.
    </p>
  </div>

  <div>
    <p class="text-sm mb-1">hyphens-auto (lang="en" needed)</p>
    {/* HTML タグに lang="en" が設定されていると仮定 */}
    <p class="hyphens-auto p-2 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700 text-justify">
      Automatic hyphenation attempts to break words like 'supercalifragilisticexpialidocious' at appropriate points based on the language dictionary. Justification looks better.
    </p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてハイフネーションの挙動を変更できます。

```html
{/* モバイルでは自動ハイフネーション、md 以上では無効 */}
<p class="hyphens-auto md:hyphens-none ...">
  Hyphenation behavior changes based on screen size.
</p>
```

## 注意点

*   **言語設定:** `hyphens-auto` が正しく機能するには、`<html>` タグに適切な `lang` 属性 (例: `<html lang="en">`, `<html lang="ja">`) が設定されている必要があります。これにより、ブラウザは正しい言語のハイフネーション辞書を使用できます。
*   **ブラウザと辞書のサポート:** 自動ハイフネーションの品質と利用可能性は、ブラウザと OS が持つハイフネーション辞書に依存します。すべての言語で利用できるわけではなく、また辞書がインストールされていない場合もあります。
*   **パフォーマンス:** 自動ハイフネーションは、テキストレンダリング時に追加の計算を必要とするため、非常に大量のテキストに適用するとパフォーマンスにわずかな影響を与える可能性があります。
*   **`word-break` との組み合わせ:** `word-break` (`break-all`, `break-keep`) と `hyphens` を同時に使用した場合の挙動は複雑になる可能性があります。通常はどちらか一方を使用します。

## 関連ユーティリティ

*   `word-break` (`break-*`): 単語の途中での改行ルール。
*   `text-wrap`: テキストの折り返し制御 (`balance`, `pretty` など)。
*   `text-justify`: テキストの両端揃え。

## 公式ドキュメント参照
*   [Tailwind CSS: Hyphens](https://tailwindcss.com/docs/hyphens)
*   [MDN: hyphens](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens)
*   [MDN: lang attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
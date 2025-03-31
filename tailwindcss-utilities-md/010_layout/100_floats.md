## タイトル
title: Layout: Floats (回り込み)

## タグ
tags: ["tailwindcss", "utilities", "layout", "floats", "float", "clear", "legacy"]

## 概要
`float-{value}` ユーティリティは、要素をコンテナ内で左右どちらかに「浮動」させ、後続のインラインコンテンツ（主にテキスト）をその周りに回り込ませます。CSS の `float` プロパティに対応します。

**注意:** Flexbox や Grid が登場する前はレイアウトの主要な手法でしたが、現代的な CSS レイアウトでは、より複雑な配置や垂直方向の制御が難しいため、**画像とテキストの回り込みなど、限定的な用途以外での使用は推奨されません。** レイアウトには Flexbox や Grid を使用するのが一般的です。

## 基本的な使い方とパラメータ

*   **`float-start`**: 要素をコンテナの**開始**側 (通常は左、RTL 環境では右) に浮動させます。
*   **`float-end`**: 要素をコンテナの**終了**側 (通常は右、RTL 環境では左) に浮動させます。
*   **`float-right`**: 要素をコンテナの**右**側に浮動させます (書字方向の影響を受けません)。
*   **`float-left`**: 要素をコンテナの**左**側に浮動させます (書字方向の影響を受けません)。
*   **`float-none`**: デフォルト。要素を浮動させません。

```html
<div class="p-4 bg-gray-100 dark:bg-gray-800 rounded clear-both"> {/* clear-both で後続要素への影響を防ぐ */}

  <h3 class="text-lg font-semibold mb-2">Float Left</h3>
  <div class="mb-4">
    <img src="https://via.placeholder.com/100" alt="Placeholder" class="float-left mr-4 mb-2 w-24 h-24 rounded"> {/* 左にフロート、右と下にマージン */}
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  </div>

  <hr class="my-4 border-dashed dark:border-gray-700 clear-both"> {/* 回り込み解除 */}

  <h3 class="text-lg font-semibold mb-2">Float Right</h3>
  <div class="mb-4">
    <img src="https://via.placeholder.com/100" alt="Placeholder" class="float-right ml-4 mb-2 w-24 h-24 rounded"> {/* 右にフロート、左と下にマージン */}
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
  </div>

</div>
```

## 回り込みの解除 (`clear`)

`float` を使用すると、後続の要素も回り込みの影響を受けることがあります。これを解除するには、回り込みを解除したい要素、またはフロート要素の**後**に配置する要素に `clear-{value}` ユーティリティを適用します。

*   **`clear-left`**: 左側のフロートを解除します。
*   **`clear-right`**: 右側のフロートを解除します。
*   **`clear-both`**: 左右両方のフロートを解除します。
*   **`clear-none`**: デフォルト。フロートを解除しません。

```html
<div>
  <div class="float-left w-1/2 bg-blue-200 p-2">Floated Left</div>
  <p>This text might wrap around the floated element.</p>
  <div class="clear-left bg-green-200 p-2 mt-2">This element clears the left float.</div>
</div>
```
または、clearfix ハックと呼ばれる手法もありますが、Tailwind では `clear-*` を使うか、親要素を Flexbox や Grid コンテナにする方が簡単です。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてフロートの挙動を変更できます。例えば、モバイルではフロートさせず、デスクトップでのみフロートさせる、といった使い方が可能です。

```html
<img src="..." alt="..." class="w-32 h-32 md:float-left md:mr-4 mb-2">
<p>Text content...</p>
```

## 現代的なレイアウトとの比較

*   **Flexbox/Grid の方が優れている点:**
    *   垂直方向の中央揃えが容易。
    *   アイテム間のスペース配分が柔軟。
    *   アイテムの順序変更が可能。
    *   複雑なレイアウト構造を直感的に構築できる。
    *   `clear` を意識する必要がほとんどない。
*   **Float の限定的な利点:**
    *   テキストの回り込み表現には依然として最も簡単な方法。

## 注意点

*   `float` をレイアウト目的で多用すると、`clear` の管理が煩雑になり、予期しないレイアウト崩れの原因となることがあります。
*   可能な限り、レイアウトには Flexbox (`flex`) または Grid (`grid`) を使用することを強く推奨します。

## 関連ユーティリティ

*   `clear`: フロートの回り込みを解除します。
*   `display` (`flex`, `grid` など): 主要なレイアウト手法。

## 公式ドキュメント参照
*   [Tailwind CSS: Floats](https://tailwindcss.com/docs/float)
*   [Tailwind CSS: Clear](https://tailwindcss.com/docs/clear)
*   [MDN: float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
*   [MDN: clear](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)
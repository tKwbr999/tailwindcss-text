## タイトル
title: Layout: Position (配置方法)

## タグ
tags: ["tailwindcss", "utilities", "layout", "position", "static", "relative", "absolute", "fixed", "sticky", "z-index"]

## 概要
`position` ユーティリティは、要素がドキュメントフローの中でどのように配置されるかを制御します。CSS の `position` プロパティに対応します。`top-*`, `right-*`, `bottom-*`, `left-*`, `inset-*` ユーティリティと組み合わせて、要素の正確な位置を指定します。また、`z-index` による重なり順の制御にも影響を与えます。

## 基本的な使い方とパラメータ

*   **`static`**: デフォルト。要素は通常のドキュメントフローに従って配置されます。`top`, `right`, `bottom`, `left`, `z-index` プロパティは効果がありません。
*   **`relative`**: 要素は通常のドキュメントフローに従って配置されますが、`top`, `right`, `bottom`, `left` を使って、**本来の位置からの相対的なオフセット**を指定できます。また、新しいスタッキングコンテキストを作成しませんが、`z-index` が指定された場合はスタッキングコンテキストの基準となります。後続の要素の配置には影響を与えません。
*   **`absolute`**: 要素は通常のドキュメントフローから取り除かれ、**最も近い `position` が `static` 以外**の祖先要素を基準として配置されます。そのような祖先要素がない場合は、初期包含ブロック (通常は `<html>`) を基準とします。`top`, `right`, `bottom`, `left` で位置を指定します。
*   **`fixed`**: 要素は通常のドキュメントフローから取り除かれ、**ビューポート (ブラウザウィンドウ)** を基準として配置されます。スクロールしても画面上の同じ位置に留まります。`top`, `right`, `bottom`, `left` で位置を指定します。
*   **`sticky`**: 要素は通常のドキュメントフローに従って配置されますが、スクロール位置が特定の閾値 (通常は `top`, `right`, `bottom`, `left` で指定) に達すると、その位置に**固定 (fixed)** されたように振る舞います。最も近いスクロール可能な祖先要素、またはビューポートに対して固定されます。

```html
<div class="relative h-64 p-4 border rounded bg-gray-100 dark:bg-gray-800 space-y-4 overflow-auto"> {/* 親要素に relative が必要 */}

  {/* static (デフォルト) */}
  <div class="static p-2 bg-gray-300 dark:bg-gray-600 rounded">Static (Default)</div>

  {/* relative */}
  <div class="relative p-2 bg-blue-200 dark:bg-blue-900 rounded top-2 left-4">
    Relative (offset from normal position)
  </div>

  {/* absolute */}
  {/* 親の relative コンテナを基準に配置 */}
  <div class="absolute top-4 right-4 p-2 bg-green-200 dark:bg-green-900 rounded w-32">
    Absolute (top-4 right-4)
  </div>

  {/* fixed (ビューポート基準 - この例では親に固定されるように見えるが...) */}
  {/* 実際にはウィンドウに対して固定される */}
  <div class="fixed bottom-4 left-4 p-2 bg-purple-200 dark:bg-purple-900 rounded shadow-lg z-20">
    Fixed (bottom-4 left-4)
  </div>

  {/* sticky (スクロールすると上部に固定) */}
  <div class="sticky top-0 p-2 bg-yellow-200 dark:bg-yellow-700 rounded shadow z-10">
    Sticky (top-0) - Scroll down
  </div>

  {/* 通常のフローの要素 */}
  <div class="p-2 bg-gray-300 dark:bg-gray-600 rounded mt-8">Normal Flow</div>
  <div class="h-96"></div> {/* スクロール用ダミー */}

</div>
```

## 位置指定ユーティリティ

`relative`, `absolute`, `fixed`, `sticky` と組み合わせて、要素の位置を指定します。

*   `top-*`, `right-*`, `bottom-*`, `left-*`: 各辺からのオフセットを指定します (例: `top-4`, `left-0`)。
*   `inset-*`: `top`, `right`, `bottom`, `left` を一括で指定します。
    *   `inset-0`: 上下左右すべて 0 (親要素いっぱいに広がる)。
    *   `inset-4`: 上下左右すべて `1rem` のオフセット。
    *   `inset-x-*`: 左右 (`left`, `right`) を指定。
    *   `inset-y-*`: 上下 (`top`, `bottom`) を指定。

```html
<div class="relative h-32 bg-gray-200 dark:bg-gray-700 rounded">
  <div class="absolute inset-0 bg-red-300 dark:bg-red-800/50 rounded m-4">absolute inset-0 m-4</div>
  <div class="absolute inset-x-0 bottom-0 h-8 bg-blue-300 dark:bg-blue-800/50 rounded-b">absolute inset-x-0 bottom-0</div>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて `position` や位置指定ユーティリティを変更できます。

```html
{/* デフォルトは static、md 以上で absolute */}
<div class="static md:absolute md:top-0 md:right-0 ...">...</div>

{/* デフォルトは top-4、lg 以上で top-8 */}
<div class="absolute top-4 lg:top-8 ...">...</div>
```

## スタッキングコンテキストと `z-index`

`position` が `static` 以外で、かつ `z-index` が `auto` 以外の場合、要素は新しいスタッキングコンテキストを作成します。`absolute`, `fixed`, `sticky` は要素を通常のフローから外すため、`z-index` を使って他の要素との重なり順を制御することがよくあります。

## 注意点

*   `absolute`, `fixed`, `sticky` を使用する要素の親要素には、基準となるように `position: relative;` (`relative` クラス) を設定することが一般的です (特に `absolute` の場合)。
*   `fixed` はビューポートに対して固定されるため、親要素のスクロールとは無関係に画面上に留まります。
*   `sticky` は、親要素がスクロールコンテナであり、かつ `overflow` が `visible` (または `clip` 以外) でないと期待通りに動作しない場合があります。また、`top-*` などで指定した閾値に達するまでは `relative` のように振る舞います。

## 関連ユーティリティ

*   `top-right-bottom-left` (`top-*`, `inset-*` など): 要素の位置を指定します。
*   `z-index` (`z-*`): 要素の重なり順を制御します。
*   `display`: 要素の表示形式を制御します。

## 公式ドキュメント参照
*   [Tailwind CSS: Position](https://tailwindcss.com/docs/position)
*   [Tailwind CSS: Top / Right / Bottom / Left](https://tailwindcss.com/docs/top-right-bottom-left)
*   [MDN: position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
*   [MDN: Understanding Z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
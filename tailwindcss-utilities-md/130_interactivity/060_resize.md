## タイトル
title: Interactivity: Resize (リサイズ制御)

## タグ
tags: ["tailwindcss", "utilities", "interactivity", "resize", "textarea", "overflow"]

## 概要
`resize-none`, `resize-y`, `resize-x`, `resize` ユーティリティは、要素がユーザーによってリサイズ可能かどうか、またどの方向にリサイズ可能かを制御します。CSS の `resize` プロパティに対応します。

主に `<textarea>` 要素の右下にあるリサイズハンドルを制御するために使用されますが、`overflow` が `auto`, `scroll`, `hidden` のいずれかに設定されている他の要素にも適用できます。

## 基本的な使い方とパラメータ

*   **`resize-none`**: 要素のリサイズを禁止します (`resize: none;`)。
*   **`resize-y`**: 垂直方向のみリサイズを許可します (`resize: vertical;`)。
*   **`resize-x`**: 水平方向のみリサイズを許可します (`resize: horizontal;`)。
*   **`resize`**: 水平・垂直両方向のリサイズを許可します (`resize: both;`)。

**注意:** 多くのブラウザでは、`<textarea>` はデフォルトで垂直方向のリサイズ (`resize: vertical;` または `resize: both;` に近い挙動) が可能です。`resize-none` はこのデフォルトの挙動を無効にするためによく使われます。

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

  <div class="space-y-1">
    <label for="resize-none-example" class="text-sm font-medium">resize-none</label>
    <textarea id="resize-none-example" rows="3" class="resize-none w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Cannot be resized"></textarea>
  </div>

  <div class="space-y-1">
    <label for="resize-y-example" class="text-sm font-medium">resize-y</label>
    <textarea id="resize-y-example" rows="3" class="resize-y w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Resizable vertically"></textarea>
  </div>

  <div class="space-y-1">
    <label for="resize-x-example" class="text-sm font-medium">resize-x</label>
    <textarea id="resize-x-example" rows="3" class="resize-x w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Resizable horizontally"></textarea>
  </div>

  <div class="space-y-1">
    <label for="resize-both-example" class="text-sm font-medium">resize (both)</label>
    <textarea id="resize-both-example" rows="3" class="resize w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Resizable in both directions"></textarea>
  </div>

  {/* div 要素での例 (overflow が必要) */}
   <div class="space-y-1">
    <label class="text-sm font-medium">Resizable Div (resize + overflow)</label>
    <div class="resize overflow-auto w-48 h-24 p-2 border rounded dark:bg-gray-800 dark:border-gray-700">
      This div is resizable because it has `overflow: auto` and `resize`.
    </div>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてリサイズの可否を変更できます。

```html
{/* モバイルではリサイズ不可、md 以上で垂直リサイズ可能 */}
<textarea class="resize-none md:resize-y ..."></textarea>
```

## 注意点

*   `resize` プロパティが効果を発揮するには、要素の `overflow` プロパティが `visible` (デフォルト) 以外 (例: `auto`, `scroll`, `hidden`) に設定されている必要があります。ただし、`<textarea>` は例外で、`overflow: auto` がデフォルトで適用されているため、通常は `resize` ユーティリティだけで機能します。
*   `resize` ユーティリティは、ユーザーが要素のサイズを変更できるかどうかを制御するものであり、要素の初期サイズや最大/最小サイズを設定するものではありません。それらは `w-*`, `h-*`, `min-w-*`, `max-h-*` などで制御します。

## 関連ユーティリティ

*   `overflow`: 要素のはみ出し処理とスクロール。`resize` の前提条件となることがあります。
*   `width`, `height`, `min-width`, `max-width`, `min-height`, `max-height`: 要素のサイズ制御。

## 公式ドキュメント参照
*   [Tailwind CSS: Resize](https://tailwindcss.com/docs/resize)
*   [MDN: resize](https://developer.mozilla.org/en-US/docs/Web/CSS/resize)
## タイトル
title: Layout: Top / Right / Bottom / Left / Inset (位置指定)

## タグ
tags: ["tailwindcss", "utilities", "layout", "position", "top", "right", "bottom", "left", "inset", "absolute", "relative", "fixed", "sticky"]

## 概要
`top-{value}`, `right-{value}`, `bottom-{value}`, `left-{value}`, および `inset-{value}` ユーティリティは、`position` が `static` 以外 (つまり `relative`, `absolute`, `fixed`, `sticky`) に設定された要素の位置を制御します。CSS の `top`, `right`, `bottom`, `left` プロパティに対応します。

## 基本的な使い方とパラメータ

値は通常、Tailwind のスペーシングスケール (`0`, `1`, `2`, `4`, `px`, etc.)、パーセンテージ (`1/2`, `full` など)、または `auto` を使用します。負の値 (`-top-4`, `-inset-x-8` など) も利用可能です。

*   **`top-{value}`**: 要素の上端の位置を指定します。
*   **`right-{value}`**: 要素の右端の位置を指定します。
*   **`bottom-{value}`**: 要素の下端の位置を指定します。
*   **`left-{value}`**: 要素の左端の位置を指定します。
*   **`inset-{value}`**: `top`, `right`, `bottom`, `left` を**すべて同じ値**に設定するショートハンドです。
*   **`inset-x-{value}`**: `left` と `right` を同じ値に設定します。
*   **`inset-y-{value}`**: `top` と `bottom` を同じ値に設定します。

```html
<div class="relative h-64 p-4 border rounded bg-gray-100 dark:bg-gray-800">
  <p class="text-sm mb-2">Parent is relative</p>

  {/* top / left */}
  <div class="absolute top-0 left-0 p-2 bg-red-200 dark:bg-red-900 rounded">
    absolute top-0 left-0
  </div>

  {/* top / right */}
  <div class="absolute top-4 right-4 p-2 bg-blue-200 dark:bg-blue-900 rounded">
    absolute top-4 right-4
  </div>

  {/* bottom / left (負の値) */}
  <div class="absolute bottom-8 -left-2 p-2 bg-green-200 dark:bg-green-900 rounded shadow">
    absolute bottom-8 -left-2
  </div>

  {/* bottom / right (パーセンテージ) */}
  <div class="absolute bottom-1/4 right-1/4 p-2 bg-yellow-200 dark:bg-yellow-800 rounded">
    absolute bottom-1/4 right-1/4
  </div>

  {/* inset (全方向) */}
  <div class="absolute inset-8 p-2 border border-dashed border-purple-500 rounded">
    absolute inset-8
  </div>

  {/* inset-x / inset-y */}
  <div class="absolute inset-x-4 inset-y-16 p-2 bg-pink-200 dark:bg-pink-900 rounded text-center">
    absolute inset-x-4 inset-y-16
  </div>

  {/* sticky と top */}
  <div class="sticky top-0 left-0 right-0 p-1 bg-opacity-80 backdrop-blur-sm bg-white dark:bg-gray-700 rounded shadow text-center text-xs z-10">
    sticky top-0
  </div>

   <div class="h-96"></div> {/* スクロール用 */}
</div>
```

## 配置の基準

これらのユーティリティがどの位置を基準にするかは、要素の `position` プロパティの値によって決まります。

*   **`relative`**: 要素の**本来の静的な位置**からの相対的なオフセットを指定します。要素自体は移動しますが、元のスペースは保持されます。
*   **`absolute`**: **最も近い `position: static` 以外の祖先要素**のパディングボックスを基準とします。そのような祖先がない場合は、初期包含ブロック (通常は `<html>`) が基準になります。
*   **`fixed`**: **ビューポート**を基準とします。
*   **`sticky`**: 通常は**最も近いスクロール可能な祖先要素**のスクロールポートを基準としますが、ビューポートに対して固定される場合もあります。`top`, `left` などで指定した閾値に達するまでは `relative` のように振る舞います。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて要素の位置を変更できます。

```html
{/* デフォルトは右下、lg 以上で左上 */}
<div class="absolute bottom-4 right-4 lg:top-4 lg:left-4 lg:bottom-auto lg:right-auto ...">
  Position changes on large screens
</div>
```
(`lg:bottom-auto` のように `auto` を指定して、小さい画面での設定を打ち消す必要がある場合があります。)

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.inset`, `theme.extend.spacing` (top, right, bottom, left は spacing スケールを共有) で、カスタムの値やキーを追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem', // 72 というキーで 18rem を使えるように (例: top-72)
        '80': '20rem',
      },
      inset: { // inset 専用の値も定義可能
        '1/10': '10%',
      }
    },
  },
}
```

## 任意の値 (Arbitrary Values)

任意の値を使ってオフセットを直接指定することも可能です。

```html
<div class="absolute top-[11px] left-[var(--custom-offset)] ...">...</div>
<div class="absolute inset-[10%_20px_30%_40px] ...">...</div> {/* top right bottom left */}
```

## 注意点

*   これらのユーティリティは `position` が `static` (デフォルト) の要素には効果がありません。
*   `absolute` や `fixed` を使用すると要素は通常のドキュメントフローから外れるため、他の要素のレイアウトに影響を与える可能性があります。
*   `sticky` の挙動は親要素の `overflow` プロパティなどに影響されるため、注意が必要です。

## 関連ユーティリティ

*   `position` (`static`, `relative`, `absolute`, `fixed`, `sticky`): 要素の配置方法を指定します。
*   `z-index` (`z-*`): 要素の重なり順を制御します。

## 公式ドキュメント参照
*   [Tailwind CSS: Top / Right / Bottom / Left](https://tailwindcss.com/docs/top-right-bottom-left)
*   [MDN: top](https://developer.mozilla.org/en-US/docs/Web/CSS/top) (right, bottom, left も同様)
*   [MDN: inset](https://developer.mozilla.org/en-US/docs/Web/CSS/inset)
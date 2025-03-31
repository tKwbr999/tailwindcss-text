## タイトル
title: Flexbox & Grid: Place Items (Grid セル内配置ショートハンド)

## タグ
tags: ["tailwindcss", "utilities", "grid", "place-items", "align-items", "justify-items", "alignment", "layout"]

## 概要
`place-items-{value}` ユーティリティは、Grid コンテナ内の**すべてのグリッドセル**において、そのセル内のアイテムを**両方の軸 (垂直・水平)** に沿ってどのように配置するかを制御するショートハンドです。CSS の `place-items` プロパティに対応し、`align-items` と `justify-items` を同時に設定します。

**注意:** このプロパティは **Grid レイアウト専用**です。Flexbox レイアウトには効果がありません。

## 基本的な使い方とパラメータ

`place-items-{value}` の形式でクラスを指定します。値は `align-items` と `justify-items` で利用可能なキーワードの組み合わせです。

*   **`place-items-start`**: `align-items: start; justify-items: start;` (左上揃え)
*   **`place-items-center`**: `align-items: center; justify-items: center;` (中央揃え)
*   **`place-items-end`**: `align-items: end; justify-items: end;` (右下揃え)
*   **`place-items-stretch`**: デフォルト (`align-items: stretch; justify-items: stretch;`)。アイテムをセルいっぱいに引き伸ばします。

```html
<div class="space-y-8 p-4">

  {/* place-items-start */}
  <div>
    <p class="text-sm mb-1">place-items-start</p>
    <div class="grid grid-cols-3 gap-4 h-32 p-2 bg-gray-100 dark:bg-gray-800 rounded place-items-start">
      <div class="p-2 rounded bg-blue-400">Start</div> <div class="p-2 rounded bg-blue-500">Start</div> <div class="p-2 rounded bg-blue-600">Start</div>
      <div class="p-2 rounded bg-blue-400">Start</div> <div class="p-2 rounded bg-blue-500">Start</div>
    </div>
  </div>

  {/* place-items-center */}
  <div>
    <p class="text-sm mb-1">place-items-center</p>
    <div class="grid grid-cols-3 gap-4 h-32 p-2 bg-gray-100 dark:bg-gray-800 rounded place-items-center">
      <div class="p-2 rounded bg-green-400">Center</div> <div class="p-2 rounded bg-green-500">Center</div> <div class="p-2 rounded bg-green-600">Center</div>
      <div class="p-2 rounded bg-green-400">Center</div> <div class="p-2 rounded bg-green-500">Center</div>
    </div>
  </div>

  {/* place-items-end */}
  <div>
    <p class="text-sm mb-1">place-items-end</p>
    <div class="grid grid-cols-3 gap-4 h-32 p-2 bg-gray-100 dark:bg-gray-800 rounded place-items-end">
       <div class="p-2 rounded bg-yellow-400">End</div> <div class="p-2 rounded bg-yellow-500">End</div> <div class="p-2 rounded bg-yellow-600">End</div>
       <div class="p-2 rounded bg-yellow-400">End</div> <div class="p-2 rounded bg-yellow-500">End</div>
    </div>
  </div>

  {/* place-items-stretch (Default) */}
   <div>
    <p class="text-sm mb-1">place-items-stretch (Default)</p>
    <div class="grid grid-cols-3 gap-4 h-32 p-2 bg-gray-100 dark:bg-gray-800 rounded place-items-stretch">
       <div class="p-2 rounded bg-purple-400">Stretch</div> <div class="p-2 rounded bg-purple-500">Stretch</div> <div class="p-2 rounded bg-purple-600">Stretch</div>
       <div class="p-2 rounded bg-purple-400">Stretch</div> <div class="p-2 rounded bg-purple-500">Stretch</div>
    </div>
  </div>

</div>
```

## `align-items` と `justify-items` との関係

`place-items-{value}` は、`align-items-{value}` と `justify-items-{value}` を同時に設定する便利なショートハンドです。

例えば、`place-items-center` は以下と同じ意味になります。
```css
align-items: center;
justify-items: center;
```

もし垂直方向と水平方向で異なる配置を指定したい場合は、`align-items-*` と `justify-items-*` を個別に指定します。

```html
{/* 垂直方向は中央揃え (align-items)、水平方向は左揃え (justify-items) */}
<div class="grid grid-cols-3 gap-4 h-32 p-2 bg-gray-100 dark:bg-gray-800 rounded items-center justify-items-start">
  {/* ... items ... */}
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてセル内のアイテム配置を変更できます。

```html
<div class="grid place-items-start md:place-items-center ...">
  {/* モバイルでは左上揃え、md 以上で中央揃え */}
  {/* ... items ... */}
</div>
```

## 注意点

*   `place-items` は Grid コンテナに適用します。Flexbox には効果がありません。
*   これはコンテナ内の**すべての**アイテムのデフォルト配置を設定します。個々のアイテムの配置を上書きするには `place-self`, `align-self`, `justify-self` を使用します。
*   `place-items-start`, `center`, `end` を使用すると、アイテムは自身のコンテンツサイズまたは指定されたサイズ (`w-*`, `h-*`) になります。セルいっぱいに広がらなくなるため注意が必要です (`stretch` がデフォルトの理由)。

## 関連ユーティリティ

*   `display` (`grid`, `inline-grid`): Grid コンテナを作成します。
*   `align-items`: すべてのアイテムのデフォルト垂直配置。
*   `justify-items`: すべてのアイテムのデフォルト水平配置。
*   `align-self`: 個々のアイテムの垂直配置。
*   `justify-self`: 個々のアイテムの水平配置。
*   `place-self`: `align-self` と `justify-self` のショートハンド。
*   `place-content`: `align-content` と `justify-content` のショートハンド (行/列グループ全体の配置)。

## 公式ドキュメント参照
*   [Tailwind CSS: Place Items](https://tailwindcss.com/docs/place-items)
*   [MDN: place-items](https://developer.mozilla.org/en-US/docs/Web/CSS/place-items)
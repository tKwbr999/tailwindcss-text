## タイトル
title: Flexbox & Grid: Place Self (Grid アイテム個別の配置ショートハンド)

## タグ
tags: ["tailwindcss", "utilities", "grid", "place-self", "align-self", "justify-self", "alignment", "layout"]

## 概要
`place-self-{value}` ユーティリティは、**個々の** Grid アイテムが、自身が配置されているグリッドエリア (セル) 内で**両方の軸 (垂直・水平)** に沿ってどのように配置されるかを制御するショートハンドです。CSS の `place-self` プロパティに対応し、`align-self` と `justify-self` を同時に設定します。

これは、Grid コンテナに設定する `place-items` (または `align-items` / `justify-items`) のデフォルト配置を、特定のアイテムに対して個別に上書きするために使用します。

**注意:** このプロパティは **Grid レイアウトのアイテム専用**です。Flexbox レイアウトには効果がありません。

## 基本的な使い方とパラメータ

`place-self-{value}` の形式でクラスを指定します。値は `align-self` と `justify-self` で利用可能なキーワードの組み合わせです。

*   **`place-self-auto`**: デフォルト。親コンテナの `place-items` (または `align-items`/`justify-items`) プロパティの値に従います。
*   **`place-self-start`**: `align-self: start; justify-self: start;` (左上揃え)
*   **`place-self-center`**: `align-self: center; justify-self: center;` (中央揃え)
*   **`place-self-end`**: `align-self: end; justify-self: end;` (右下揃え)
*   **`place-self-stretch`**: `align-self: stretch; justify-self: stretch;` (セルいっぱいに引き伸ばし)

```html
<div class="space-y-4 p-4">

  {/* place-items-stretch (デフォルト) コンテナ内で place-self を使用 */}
  <div>
    <p class="text-sm mb-1">Container: place-items-stretch (Default)</p>
    <div class="grid grid-cols-3 gap-4 h-48 p-2 bg-gray-100 dark:bg-gray-800 rounded place-items-stretch">
      <div class="p-2 rounded bg-blue-400 place-self-start w-16 h-10">Start</div> {/* 左上揃え (サイズ指定が必要) */}
      <div class="p-2 rounded bg-blue-500 place-self-center w-16 h-10">Center</div> {/* 中央揃え (サイズ指定が必要) */}
      <div class="p-2 rounded bg-blue-600 place-self-end w-16 h-10">End</div>   {/* 右下揃え (サイズ指定が必要) */}
      <div class="p-2 rounded bg-blue-400 place-self-stretch">Stretch (Default)</div> {/* デフォルトの挙動 */}
      <div class="p-2 rounded bg-blue-500 align-self-center justify-self-start w-16">Align:Center, Justify:Start</div> {/* 個別指定 */}
      <div class="p-2 rounded bg-blue-600">Stretch (Default)</div>
    </div>
     <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">
      `place-self-start/center/end` を使うとアイテムは自身のコンテンツサイズになるため、通常は `w-*` や `h-*` でサイズを指定します。
    </p>
  </div>

  {/* place-items-center コンテナ内で place-self を使用 */}
   <div>
    <p class="text-sm mb-1">Container: place-items-center</p>
    <div class="grid grid-cols-3 gap-4 h-48 p-2 bg-gray-100 dark:bg-gray-800 rounded place-items-center">
      <div class="p-2 rounded bg-green-400">Center (Default)</div>
      <div class="p-2 rounded bg-green-500 place-self-start">Start (Override)</div> {/* 左上揃え */}
      <div class="p-2 rounded bg-green-600 place-self-stretch">Stretch (Override)</div> {/* 引き伸ばし */}
      <div class="p-2 rounded bg-green-400 place-self-end">End (Override)</div>   {/* 右下揃え */}
      <div class="p-2 rounded bg-green-500">Center (Default)</div>
    </div>
  </div>

</div>
```

## `align-self` と `justify-self` との関係

`place-self-{value}` は、`align-self-{value}` と `justify-self-{value}` を同時に設定する便利なショートハンドです。

例えば、`place-self-center` は以下と同じ意味になります。
```css
align-self: center;
justify-self: center;
```

もし垂直方向と水平方向で異なる配置を指定したい場合は、`align-self-*` と `justify-self-*` を個別に指定します。

```html
<div class="grid grid-cols-3 ...">
  {/* 垂直方向は中央揃え、水平方向は右揃え */}
  <div class="align-self-center justify-self-end ...">Item</div>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて個々のアイテムの配置を変更できます。

```html
<div class="grid place-items-center ...">
  <div class="place-self-auto md:place-self-start ...">
    Item (md以上で左上揃え)
  </div>
  {/* ... other items ... */}
</div>
```

## 注意点

*   `place-self` は Grid アイテム (Grid コンテナの直接の子要素) に適用します。Flexbox には効果がありません。
*   これはコンテナに設定された `place-items` (または `align-items`/`justify-items`) の値を上書きします。
*   `place-self-start`, `center`, `end` を適用すると、アイテムは自身のコンテンツサイズまたは指定されたサイズ (`w-*`, `h-*`) になります。セルいっぱいに広がらなくなるため注意が必要です。

## 関連ユーティリティ

*   `display` (`grid`, `inline-grid`): Grid コンテナを作成します。
*   `place-items`: コンテナ内での**すべてのアイテム**のデフォルト配置 (垂直・水平)。
*   `align-self`: 個々のアイテムの**垂直**方向の配置。
*   `justify-self`: 個々のアイテムの**水平**方向の配置。
*   `place-content`: `align-content` と `justify-content` のショートハンド (行/列グループ全体の配置)。

## 公式ドキュメント参照
*   [Tailwind CSS: Place Self](https://tailwindcss.com/docs/place-self)
*   [MDN: place-self](https://developer.mozilla.org/en-US/docs/Web/CSS/place-self)
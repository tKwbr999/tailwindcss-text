## タイトル
title: Flexbox & Grid: Align Self (アイテム個別の交差軸配置)

## タグ
tags: ["tailwindcss", "utilities", "flexbox", "grid", "align-self", "alignment", "layout", "cross-axis"]

## 概要
`self-{value}` ユーティリティは、**個々の** Flex アイテムまたは Grid アイテムが、コンテナの**交差軸 (cross axis)** に沿ってどのように配置されるかを制御します。CSS の `align-self` プロパティに対応します。

これは、コンテナに設定する `align-items` (すべてのアイテムのデフォルト配置) を、特定のアイテムに対して個別に上書きするために使用します。

## 基本的な使い方とパラメータ

*   **`self-auto`**: デフォルト。親コンテナの `align-items` プロパティの値に従います (`align-items` のデフォルトは `stretch`)。
*   **`self-start`**: アイテムを交差軸の**開始**側 (通常は上端) に配置します。
*   **`self-center`**: アイテムを交差軸の**中央**に配置します。
*   **`self-end`**: アイテムを交差軸の**終了**側 (通常は下端) に配置します。
*   **`self-stretch`**: アイテムを交差軸方向いっぱいに引き伸ばします (アイテム自身がサイズを持たない場合)。
*   **`self-baseline`**: (Flexbox のみ) アイテムをコンテナのベースラインに揃えます。

```html
<div class="space-y-8 p-4">

  {/* Flexbox で align-self を使用 */}
  <div>
    <p class="text-sm mb-1 font-semibold">Flexbox (items-stretch by default)</p>
    <div class="flex h-32 bg-gray-100 dark:bg-gray-800 rounded p-2 space-x-2 items-stretch"> {/* items-stretch がデフォルト */}
      <div class="p-2 rounded bg-blue-400 self-start w-16">Start</div>   {/* 個別に上揃え */}
      <div class="p-2 rounded bg-blue-500 self-center w-16">Center</div> {/* 個別に中央揃え */}
      <div class="p-2 rounded bg-blue-600 self-end w-16">End</div>     {/* 個別に下揃え */}
      <div class="p-2 rounded bg-blue-400 self-stretch w-16">Stretch (Default)</div> {/* デフォルトの挙動 */}
      <div class="p-2 rounded bg-blue-500 self-baseline w-16 text-xs">Baseline</div> {/* ベースライン揃え */}
    </div>
  </div>

  {/* Grid で align-self を使用 */}
  <div>
    <p class="text-sm mb-1 font-semibold">Grid (items-stretch by default)</p>
    <div class="grid grid-cols-3 gap-4 h-32 bg-gray-100 dark:bg-gray-800 rounded p-2 items-stretch"> {/* items-stretch がデフォルト */}
      <div class="p-2 rounded bg-green-400 self-start">Start</div>   {/* 個別に上揃え */}
      <div class="p-2 rounded bg-green-500 self-center">Center</div> {/* 個別に中央揃え */}
      <div class="p-2 rounded bg-green-600 self-end">End</div>     {/* 個別に下揃え */}
      <div class="p-2 rounded bg-green-400 self-stretch">Stretch (Default)</div> {/* デフォルトの挙動 */}
      <div class="p-2 rounded bg-green-500">Stretch (Default)</div>
       {/* self-baseline は Grid では一般的でない */}
    </div>
  </div>

</div>
```

## `align-items` との関係

`align-items` は Flexbox または Grid **コンテナ**に適用し、その中の**すべての**アイテムのデフォルトの交差軸方向の配置を設定します。

`align-self` は**個々の** Flex または Grid **アイテム**に適用し、そのアイテムだけ `align-items` の設定を上書きします。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて個々のアイテムの垂直 (または水平) 配置を変更できます。

```html
<div class="flex items-center ..."> {/* デフォルトは中央揃え */}
  <div>Item 1</div>
  <div class="self-auto md:self-start ...">Item 2 (md以上で上揃え)</div>
  <div>Item 3</div>
</div>
```

## 注意点

*   `align-self-*` は Flex アイテムまたは Grid アイテムに適用します。
*   `align-items` (コンテナに設定) の値を上書きします。
*   `self-stretch` 以外の値を適用すると、アイテムは交差軸方向いっぱいに伸びなくなります。アイテム自身のコンテンツサイズまたは指定されたサイズ (`h-*` や `w-*`) になります。
*   `self-baseline` は主に Flexbox で意味を持ちます。

## 関連ユーティリティ

*   `display` (`flex`, `grid`): Flex または Grid コンテナを作成します。
*   `align-items`: コンテナ内での**すべてのアイテム**のデフォルト交差軸配置。
*   `justify-self`: **個々の Grid アイテム**の**インライン軸** (水平) 方向の配置。
*   `place-self`: `align-self` と `justify-self` のショートハンド (Grid のみ)。

## 公式ドキュメント参照
*   [Tailwind CSS: Align Self](https://tailwindcss.com/docs/align-self)
*   [MDN: align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
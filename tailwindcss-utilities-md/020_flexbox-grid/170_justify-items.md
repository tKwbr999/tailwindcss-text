## タイトル
title: Flexbox & Grid: Justify Items (Grid セル内の水平配置)

## タグ
tags: ["tailwindcss", "utilities", "grid", "justify-items", "alignment", "layout", "inline-axis"]

## 概要
`justify-items-{value}` ユーティリティは、Grid コンテナ内の**各グリッドセル**において、そのセル内のアイテムを**インライン軸 (通常は水平方向)** に沿ってどのように配置するかを定義します。CSS の `justify-items` プロパティに対応します。

これは、グリッドアイテム群全体をコンテナ内で配置する `justify-content` とは異なり、**個々のセル内**でのアイテムの水平方向の揃え方を指定します。

**注意:** このプロパティは **Grid レイアウト専用**です。Flexbox レイアウトには効果がありません (Flexbox では `align-items` や `justify-content` を使います)。

## 基本的な使い方とパラメータ

*   **`justify-items-start`**: アイテムを各グリッドセルの**開始**側 (通常は左) に配置します。
*   **`justify-items-center`**: アイテムを各グリッドセルの**中央** (水平方向) に配置します。
*   **`justify-items-end`**: アイテムを各グリッドセルの**終了**側 (通常は右) に配置します。
*   **`justify-items-stretch`**: デフォルト。アイテムを各グリッドセルの幅いっぱいに引き伸ばします (アイテム自身が幅を持たない場合)。

```html
<div class="space-y-8 p-4">

  {/* justify-items-start */}
  <div>
    <p class="text-sm mb-1">justify-items-start</p>
    <div class="grid grid-cols-3 gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded justify-items-start h-24">
      <div class="p-2 rounded bg-blue-400">Start</div>
      <div class="p-2 rounded bg-blue-500">Start</div>
      <div class="p-2 rounded bg-blue-600">Start</div>
      <div class="p-2 rounded bg-blue-400">Start</div>
      <div class="p-2 rounded bg-blue-500">Start</div>
    </div>
  </div>

  {/* justify-items-center */}
  <div>
    <p class="text-sm mb-1">justify-items-center</p>
    <div class="grid grid-cols-3 gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded justify-items-center h-24">
      <div class="p-2 rounded bg-green-400">Center</div>
      <div class="p-2 rounded bg-green-500">Center</div>
      <div class="p-2 rounded bg-green-600">Center</div>
      <div class="p-2 rounded bg-green-400">Center</div>
      <div class="p-2 rounded bg-green-500">Center</div>
    </div>
  </div>

  {/* justify-items-end */}
  <div>
    <p class="text-sm mb-1">justify-items-end</p>
    <div class="grid grid-cols-3 gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded justify-items-end h-24">
       <div class="p-2 rounded bg-yellow-400">End</div>
       <div class="p-2 rounded bg-yellow-500">End</div>
       <div class="p-2 rounded bg-yellow-600">End</div>
       <div class="p-2 rounded bg-yellow-400">End</div>
       <div class="p-2 rounded bg-yellow-500">End</div>
    </div>
  </div>

  {/* justify-items-stretch (Default) */}
   <div>
    <p class="text-sm mb-1">justify-items-stretch (Default)</p>
    <div class="grid grid-cols-3 gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded justify-items-stretch h-24">
       <div class="p-2 rounded bg-purple-400">Stretch</div> {/* 幅いっぱいに広がる */}
       <div class="p-2 rounded bg-purple-500">Stretch</div>
       <div class="p-2 rounded bg-purple-600">Stretch</div>
       <div class="p-2 rounded bg-purple-400 w-20">Stretch (w-20 overrides)</div> {/* 幅指定があればそちらが優先 */}
       <div class="p-2 rounded bg-purple-500">Stretch</div>
    </div>
  </div>

</div>
```

## `justify-self` との関係

`justify-items` は Grid コンテナに適用し、**すべての**グリッドアイテムのデフォルトの水平方向の配置を設定します。

一方、`justify-self-{value}` ユーティリティ (例: `justify-self-center`) は**個々のグリッドアイテム**に適用し、そのアイテムだけ `justify-items` の設定を上書きして配置を制御します。

```html
<div class="grid grid-cols-3 gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded justify-items-start h-24"> {/* デフォルトは start */}
  <div class="p-2 rounded bg-red-400">Start (Default)</div>
  <div class="p-2 rounded bg-red-500 justify-self-center">Center (Override)</div> {/* このアイテムだけ中央揃え */}
  <div class="p-2 rounded bg-red-600 justify-self-end">End (Override)</div>   {/* このアイテムだけ右揃え */}
  <div class="p-2 rounded bg-red-400">Start (Default)</div>
  <div class="p-2 rounded bg-red-500 justify-self-stretch">Stretch (Override)</div> {/* このアイテムだけ引き伸ばし */}
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてセル内の水平配置を変更できます。

```html
<div class="grid grid-cols-3 justify-items-center md:justify-items-start ...">
  {/* モバイルでは中央揃え、md 以上では左揃え */}
  {/* ... items ... */}
</div>
```

## 注意点

*   `justify-items-*` は Grid コンテナに適用します。
*   アイテム自身の幅がグリッドセルの幅よりも小さい場合に効果が視覚的に現れます。`justify-items-stretch` (デフォルト) では、アイテムはセルの幅いっぱいに広がろうとします。
*   Flexbox レイアウトには効果がありません。

## 関連ユーティリティ

*   `display` (`grid`, `inline-grid`): Grid コンテナを作成します。
*   `justify-content`: Grid コンテナ内での**アイテム群全体**の水平方向の配置。
*   `justify-self`: **個々の Grid アイテム**のセル内での水平方向の配置。
*   `align-items`: Grid コンテナ内での**すべてのアイテム**の**垂直**方向の配置。
*   `place-items`: `align-items` と `justify-items` のショートハンド。

## 公式ドキュメント参照
*   [Tailwind CSS: Justify Items](https://tailwindcss.com/docs/justify-items)
*   [MDN: justify-items](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
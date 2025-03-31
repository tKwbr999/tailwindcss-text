## タイトル
title: Typography: List Style Position (リストマーカー位置)

## タグ
tags: ["tailwindcss", "utilities", "typography", "list-style-position", "list", "marker", "inside", "outside"]

## 概要
`list-inside` および `list-outside` ユーティリティは、リストアイテム (`<li>`) のマーカー (例: ビュレットポイント、数字) が、リストアイテムのコンテンツボックスの**内側**に配置されるか、**外側**に配置されるかを制御します。CSS の `list-style-position` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`list-inside`**: マーカーはリストアイテムのコンテンツの開始位置、テキストの最初の行と同じ行に配置されます。テキストが折り返すと、2 行目以降はマーカーの下ではなく、リストアイテムの左端から始まります。
*   **`list-outside`**: デフォルト。マーカーはリストアイテムのコンテンツボックスの外側、左側に配置されます。テキストが折り返しても、すべての行がマーカーの右側で揃います。

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">

  <div>
    <h3 class="font-semibold mb-2">list-inside</h3>
    <ul class="list-disc list-inside bg-gray-100 dark:bg-gray-800 p-4 rounded border dark:border-gray-700 space-y-1">
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</li>
      <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
    </ul>
    <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">マーカーがテキストの左マージン内に配置され、折り返したテキストは左端から始まります。</p>
  </div>

  <div>
    <h3 class="font-semibold mb-2">list-outside (Default)</h3>
    <ul class="list-disc list-outside bg-gray-100 dark:bg-gray-800 p-4 pl-10 rounded border dark:border-gray-700 space-y-1"> {/* 左側にスペースが必要なため pl-10 を追加 */}
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</li>
      <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
    </ul>
     <p class="text-xs mt-1 text-gray-600 dark:text-gray-400">マーカーがテキストの外側に配置され、折り返したテキストもマーカーの右側で揃います。`pl-*` などで左側のスペース確保が必要です。</p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてマーカーの位置を変更できます。

```html
<ul class="list-disc list-inside md:list-outside md:pl-6 ...">
  {/* モバイルでは inside、md 以上では outside */}
  {/* ... list items ... */}
</ul>
```

## 注意点

*   `list-outside` (デフォルト) を使用する場合、マーカーが要素のボックスの外側に配置されるため、親要素のパディングがないとマーカーが見切れてしまうことがあります。通常、`ul` や `ol` 要素に左パディング (`pl-*`) を追加して、マーカーが表示されるスペースを確保します。
*   `list-inside` はインデントが浅くなるため、ネストされたリストなどでは `list-outside` の方が構造が分かりやすい場合があります。
*   マーカーの種類は `list-style-type` (`list-disc`, `list-decimal` など) で制御します。

## 関連ユーティリティ

*   `list-style-type` (`list-disc`, `list-decimal` など): マーカーの種類。
*   `list-style-image` (`list-image-*`): マーカーとして画像を使用。
*   `padding` (`pl-*`): `list-outside` 使用時のスペース確保。

## 公式ドキュメント参照
*   [Tailwind CSS: List Style Position](https://tailwindcss.com/docs/list-style-position)
*   [MDN: list-style-position](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position)
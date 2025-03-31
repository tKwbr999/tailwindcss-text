## タイトル
title: Layout: Overscroll Behavior (スクロール連鎖の制御)

## タグ
tags: ["tailwindcss", "utilities", "layout", "overscroll-behavior", "scroll chaining", "contain", "none", "auto"]

## 概要
`overscroll-{value}`, `overscroll-x-{value}`, `overscroll-y-{value}` ユーティリティは、ユーザーがスクロール可能な領域の限界までスクロールしたときに、ブラウザがどのように振る舞うか (例: 親要素やページ全体のスクロールを開始するかどうか) を制御します。CSS の `overscroll-behavior`, `overscroll-behavior-x`, `overscroll-behavior-y` プロパティに対応します。

これにより、「スクロール連鎖 (scroll chaining)」と呼ばれる、意図しない親要素のスクロールを防ぐことができます。モーダルダイアログやチャットウィンドウなど、独立してスクロールする UI 要素で特に役立ちます。

## 基本的な使い方とパラメータ

### `overscroll` (水平・垂直両方)

*   **`overscroll-auto`**: デフォルト。通常のスクロール連鎖が発生します。要素の限界までスクロールすると、親要素のスクロールが始まります。
*   **`overscroll-contain`**: スクロール連鎖を防ぎます。要素の限界までスクロールしても、親要素はスクロールしません。ただし、要素内での「バウンス」効果 (macOS や iOS で見られる、限界を超えて引っ張るようなエフェクト) は発生する可能性があります。
*   **`overscroll-none`**: スクロール連鎖を防ぎ、かつバウンス効果も抑制します。

### `overscroll-x`, `overscroll-y` (特定の方向)

*   **`overscroll-x-auto`**, **`overscroll-x-contain`**, **`overscroll-x-none`**: 水平方向のオーバースクロール動作のみを制御します。
*   **`overscroll-y-auto`**, **`overscroll-y-contain`**, **`overscroll-y-none`**: 垂直方向のオーバースクロール動作のみを制御します。

```html
<div class="h-64 overflow-y-auto border border-dashed dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800/50 rounded">
  <p class="text-sm mb-2 font-semibold">Parent Scrollable Area (overscroll-auto - Default)</p>

  {/* overscroll-contain の例 */}
  <div class="h-40 overflow-y-scroll overscroll-contain bg-white dark:bg-gray-700 p-4 rounded shadow mb-4 border dark:border-gray-600">
    <p class="text-sm mb-1 font-medium">Child (overscroll-contain)</p>
    <p class="text-xs">このエリア内でスクロールし、限界に達しても親要素 (背景) はスクロールしません。(バウンスは発生するかも)</p>
    <div class="h-64"></div> {/* スクロール用ダミー */}
    <p class="text-xs">Scroll ends here.</p>
  </div>

  {/* overscroll-none の例 */}
  <div class="h-40 overflow-y-scroll overscroll-none bg-white dark:bg-gray-700 p-4 rounded shadow border dark:border-gray-600">
     <p class="text-sm mb-1 font-medium">Child (overscroll-none)</p>
    <p class="text-xs">このエリア内でスクロールし、限界に達しても親要素はスクロールせず、バウンス効果も抑制されます。</p>
    <div class="h-64"></div> {/* スクロール用ダミー */}
    <p class="text-xs">Scroll ends here.</p>
  </div>

  <div class="h-64"></div> {/* 親スクロール用ダミー */}
  <p class="text-sm">End of parent area.</p>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてオーバースクロールの挙動を変更できます。

```html
{/* モバイルではスクロール連鎖を防ぎ、デスクトップでは許可する */}
<div class="overflow-y-auto overscroll-y-contain md:overscroll-y-auto ...">
  {/* ... scrollable content ... */}
</div>
```

## ユースケース

*   **モーダルダイアログ:** ダイアログ内のコンテンツをスクロールしても、背景のページが一緒にスクロールしないように `overscroll-contain` を適用します。
*   **チャットウィンドウ:** チャット履歴をスクロールしても、ページ全体が動かないようにします。
*   **埋め込みマップ:** マップ内をパンしたりズームしたりする際に、意図せずページ全体がスクロールするのを防ぎます。
*   **モバイルのプルダウン更新:** ページ上部でのプルダウン更新ジェスチャーを無効にしたい場合に `overscroll-none` を使うことがあります。

## 注意点

*   `overscroll-behavior` は、要素が実際にスクロール可能 (`overflow: scroll` または `overflow: auto` でコンテンツがはみ出している状態) でないと効果がありません。
*   ブラウザや OS によって、特にバウンス効果の挙動は異なる場合があります。
*   `overscroll-none` は、ユーザーが期待するかもしれないネイティブなスクロールエフェクト (バウンスやプルダウン更新) を無効にするため、使いすぎると UX を損なう可能性があります。`overscroll-contain` の方が一般的には安全です。

## 関連ユーティリティ

*   `overflow`: 要素のコンテンツがはみ出した場合の処理方法を制御します。

## 公式ドキュメント参照
*   [Tailwind CSS: Overscroll Behavior](https://tailwindcss.com/docs/overscroll-behavior)
*   [MDN: overscroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior)
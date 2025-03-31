## タイトル
title: Interactivity: Touch Action (タッチ操作の制御)

## タグ
tags: ["tailwindcss", "utilities", "interactivity", "touch-action", "touch", "pan", "pinch-zoom", "mobile", "gesture"]

## 概要
`touch-{action}` ユーティリティは、タッチスクリーンデバイス上で要素に対して許可されるデフォルトのタッチ操作 (パン、ピンチズームなど) を制御します。CSS の `touch-action` プロパティに対応します。

これは主に、カスタムのタッチジェスチャー (例: スワイプ、カスタムズーム) を JavaScript で実装する際に、ブラウザのデフォルト動作が干渉しないようにするために使用されます。

## 基本的な使い方とパラメータ

*   **`touch-auto`**: デフォルト。ブラウザがすべてのパンおよびズーム操作を自由に処理します (`touch-action: auto;`)。
*   **`touch-none`**: すべてのデフォルトのタッチ操作 (パン、ズーム) を無効にします (`touch-action: none;`)。カスタムジェスチャーを実装する場合に最もよく使われます。
*   **`touch-pan-x`**: 水平方向のパンのみを許可します (`touch-action: pan-x;`)。垂直方向のパンやズームは無効になります。カルーセルなどで使われます。
*   **`touch-pan-left`**, **`touch-pan-right`**: それぞれ左方向または右方向への水平パンのみを許可します。
*   **`touch-pan-y`**: 垂直方向のパンのみを許可します (`touch-action: pan-y;`)。水平方向のパンやズームは無効になります。縦スクロールリストなどで使われます。
*   **`touch-pan-up`**, **`touch-pan-down`**: それぞれ上方向または下方向への垂直パンのみを許可します。
*   **`touch-pinch-zoom`**: ピンチ操作によるズームのみを許可します (`touch-action: pinch-zoom;`)。パンは無効になります。マップや画像ビューアなどで使われます。
*   **`touch-manipulation`**: パンとピンチズームの両方を許可しますが、ダブルタップでのズームなどの追加的な非標準ジェスチャーを無効にします (`touch-action: manipulation;`)。`touch-auto` より予測可能な動作になります。

```html
<div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 text-center text-sm">

  <div class="touch-auto p-4 h-24 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-700 flex items-center justify-center">
    touch-auto (Default) <br> (All gestures enabled)
  </div>

  <div class="touch-none p-4 h-24 bg-red-100 dark:bg-red-900/30 rounded border dark:border-red-700 flex items-center justify-center">
    touch-none <br> (No panning/zooming)
  </div>

  <div class="touch-pan-x p-4 h-24 bg-blue-100 dark:bg-blue-900/30 rounded border dark:border-blue-700 flex items-center justify-center overflow-x-auto whitespace-nowrap">
    touch-pan-x <br> (Horizontal pan only) Long content... Long content...
  </div>

   <div class="touch-pan-y p-4 h-24 bg-green-100 dark:bg-green-900/30 rounded border dark:border-green-700 flex items-center justify-center overflow-y-auto">
    <div>touch-pan-y <br> (Vertical pan only) <br> More <br> Content <br> Here</div>
  </div>

   <div class="touch-pinch-zoom p-4 h-24 bg-yellow-100 dark:bg-yellow-800/30 rounded border dark:border-yellow-700 flex items-center justify-center">
    touch-pinch-zoom <br> (Zoom only)
  </div>

   <div class="touch-manipulation p-4 h-24 bg-purple-100 dark:bg-purple-900/30 rounded border dark:border-purple-700 flex items-center justify-center">
    touch-manipulation <br> (Pan & Zoom, no double-tap zoom etc.)
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて許可するタッチ操作を変更できます。

```html
{/* モバイルではパンのみ、md 以上ではすべて許可 */}
<div class="touch-pan-x md:touch-auto ...">
  {/* Draggable element */}
</div>
```

## 注意点

*   `touch-action` は、ブラウザが処理する**デフォルト**のタッチジェスチャーにのみ影響します。JavaScript で `addEventListener` を使って実装されたカスタムジェスチャーには影響しません。
*   このプロパティは主にタッチスクリーンデバイスでの挙動を制御しますが、マウスやペン入力にも影響を与える場合があります。
*   `touch-none` を設定すると、その要素上でのすべてのデフォルトのスクロールやズーム操作ができなくなるため、ユーザーが必要な操作を行えなくならないように注意が必要です。カスタムジェスチャーを確実に実装する場合にのみ使用してください。
*   `touch-pan-left`, `touch-pan-right`, `touch-pan-up`, `touch-pan-down` は、一方向へのスワイプジェスチャーを実装する際に、反対方向への意図しないスクロールを防ぐのに役立ちます。

## 関連ユーティリティ

*   `overflow`: 要素のスクロール動作。
*   `overscroll-behavior`: スクロール連鎖の制御。

## 公式ドキュメント参照
*   [Tailwind CSS: Touch Action](https://tailwindcss.com/docs/touch-action)
*   [MDN: touch-action](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action)
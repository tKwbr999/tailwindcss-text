## タイトル
title: Interactivity: Pointer Events (ポインターイベントの制御)

## タグ
tags: ["tailwindcss", "utilities", "interactivity", "pointer-events", "none", "auto", "click", "hover", "svg"]

## 概要
`pointer-events-none` および `pointer-events-auto` ユーティリティは、要素がマウスポインターイベント (クリック、ホバー、ドラッグなど) のターゲットになるかどうかを制御します。CSS の `pointer-events` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`pointer-events-none`**: 要素がポインターイベントのターゲットになるのを防ぎます (`pointer-events: none;`)。要素は視覚的には表示されたままですが、クリックやホバーなどのインタラクションはできなくなり、イベントはその下にある要素に「通過」します。
*   **`pointer-events-auto`**: デフォルト。要素は通常通りポインターイベントを受け取ります (`pointer-events: auto;`)。`pointer-events-none` を打ち消す場合に使用します。

```html
<div class="relative p-8">
  {/* 背景のボタン (通常はクリック可能) */}
  <button class="absolute inset-0 w-full h-full bg-blue-200 dark:bg-blue-900 rounded" onclick="alert('Background Button Clicked!')">
    Background Button
  </button>

  {/* pointer-events-none を適用した前景要素 */}
  <div class="relative pointer-events-none bg-red-500/50 text-white p-4 rounded text-center">
    <p>Pointer Events None</p>
    <p class="text-xs">Clicks pass through this element.</p>
  </div>

  <hr class="my-8 border-dashed dark:border-gray-700">

  {/* pointer-events-auto で打ち消し */}
  <div class="relative pointer-events-none bg-green-500/30 p-4 rounded">
     <p class="text-white">Parent has pointer-events-none</p>
     {/* このボタンはクリック可能 */}
     <button class="pointer-events-auto bg-green-600 text-white p-2 rounded mt-2" onclick="alert('Foreground Button Clicked!')">
       Button (pointer-events-auto)
     </button>
  </div>

</div>
```

## ユースケース

*   **装飾要素の無視:** デザイン目的で配置された要素 (例: アイコン、オーバーレイ) が、その下にあるインタラクティブな要素 (ボタン、リンク) へのクリックを妨げないようにする。
*   **SVG の一部を無視:** SVG グラフィック内で、特定のパスやグループだけをクリック可能にし、他の部分は無視させたい場合。
*   **複雑な UI:** ドラッグ＆ドロップ操作中に、特定の要素を一時的にイベントターゲットから除外するなど。
*   **無効化された要素:** `disabled` 属性と組み合わせて、視覚的には表示しつつインタラクションを完全に無効にする (ただし、通常は `disabled` 属性だけで十分な場合が多い)。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてポインターイベントの挙動を変更できます。

```html
{/* モバイルではクリック不可、md 以上でクリック可能 */}
<div class="pointer-events-none md:pointer-events-auto ...">
  Clickable only on medium screens and wider.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `disabled:` などと組み合わせて、特定の状態でポインターイベントを無効化または有効化することも可能です。

```html
{/* disabled 状態のカスタムスタイル */}
<button disabled class="opacity-50 pointer-events-none ...">Submit</button>
```

## 注意点

*   `pointer-events-none` は、その要素だけでなく、**すべての子孫要素**のポインターイベントも無効にします。子孫要素でイベントを受け取りたい場合は、その子孫要素に `pointer-events-auto` を明示的に設定して打ち消す必要があります。
*   キーボードによるフォーカスや操作には影響しません。`pointer-events-none` が設定されていても、Tab キーでフォーカスを移動したり、Enter キーでボタンをアクティブにしたりすることは可能です。キーボード操作も無効にしたい場合は `disabled` 属性を使用します。
*   アクセシビリティ: スクリーンリーダーは `pointer-events-none` が設定された要素を通常通り読み上げる可能性があります。視覚的にインタラクションできないのに読み上げられると混乱を招く場合があるため、使い方に注意が必要です。本当に不要な要素は `hidden` (`display: none`) で非表示にすることを検討してください。

## 関連ユーティリティ

*   `cursor` (`cursor-not-allowed` など): マウスカーソルの種類。
*   `disabled` 属性 (HTML): 要素を無効化します。
*   `hidden` (`display: none`): 要素を完全に非表示にします。
*   `invisible` (`visibility: hidden`): 要素を視覚的に非表示にしますが、スペースは保持します。

## 公式ドキュメント参照
*   [Tailwind CSS: Pointer Events](https://tailwindcss.com/docs/pointer-events)
*   [MDN: pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
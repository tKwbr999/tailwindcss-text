## タイトル
title: Transitions & Animation: Transition Duration (トランジション時間)

## タグ
tags: ["tailwindcss", "utilities", "transitions", "animation", "transition-duration", "duration", "speed"]

## 概要
`duration-{amount}` ユーティリティは、CSS トランジションが完了するまでにかかる時間 (継続時間) を設定します。CSS の `transition-duration` プロパティに対応します。

値が大きいほどアニメーションはゆっくりになり、小さいほど速くなります。

## 基本的な使い方とパラメータ

値はミリ秒 (`ms`) または秒 (`s`) で指定します。Tailwind は一般的な時間に対応するクラスを提供します。

*   **`duration-0`**: `transition-duration: 0ms;` (アニメーションなし)
*   **`duration-75`**: `transition-duration: 75ms;`
*   **`duration-100`**: `transition-duration: 100ms;`
*   **`duration-150`**: `transition-duration: 150ms;` (デフォルト)
*   **`duration-200`**: `transition-duration: 200ms;`
*   **`duration-300`**: `transition-duration: 300ms;`
*   **`duration-500`**: `transition-duration: 500ms;`
*   **`duration-700`**: `transition-duration: 700ms;`
*   **`duration-1000`**: `transition-duration: 1000ms;` (1秒)

```html
<div class="space-y-4 p-4">
  <button class="transition hover:bg-blue-600 bg-blue-500 text-white p-2 rounded duration-75">
    Duration 75ms
  </button>
  <button class="transition hover:bg-green-600 bg-green-500 text-white p-2 rounded duration-150"> {/* Default */}
    Duration 150ms (Default)
  </button>
   <button class="transition hover:bg-red-600 bg-red-500 text-white p-2 rounded duration-300">
    Duration 300ms
  </button>
   <button class="transition hover:bg-purple-600 bg-purple-500 text-white p-2 rounded duration-500">
    Duration 500ms
  </button>
   <button class="transition hover:bg-pink-600 bg-pink-500 text-white p-2 rounded duration-1000">
    Duration 1000ms (1s)
  </button>
   <button class="transition hover:bg-gray-600 bg-gray-500 text-white p-2 rounded duration-0">
    Duration 0ms (No transition)
  </button>
</div>
```
**注意:** トランジション効果を有効にするには、`transition` (または `transition-{property}`) ユーティリティも併せて指定する必要があります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてトランジション時間を変更できます。

```html
<button class="transition duration-150 md:duration-500 ...">
  Transition duration changes on medium screens.
</button>
```

## 状態修飾子

`duration-*` ユーティリティ自体に状態修飾子 (`hover:duration-500` など) を適用することは通常ありません。トランジション時間は要素の基本状態に設定し、状態変化時のスタイル (`hover:bg-blue-600` など) を指定します。

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.transitionDuration` (または `theme.transitionDuration`) でカスタムの継続時間を追加できます。値にはミリ秒 (`'120ms'`) または秒 (`'1.5s'`) を文字列で指定します。デフォルトの `duration-150` の値を変更することも可能です (`DEFAULT` キーを使用)。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        'DEFAULT': '200ms', // デフォルトの duration-150 を 200ms に変更
        '0': '0ms',
        '2000': '2000ms', // duration-2000 クラスを追加
        'fast': '50ms',   // duration-fast クラスを追加
      },
    },
  },
}
```

```html
<button class="transition duration-fast ...">Fast transition</button>
<button class="transition duration-2000 ...">Slow transition (2s)</button>
<button class="transition duration ...">Default duration (now 200ms)</button>
```

## 任意の値 (Arbitrary Values)

任意の値を使って継続時間を直接指定することも可能です。

```html
<button class="transition duration-[250ms] ...">Arbitrary duration 250ms</button>
<button class="transition duration-[1.2s] ...">Arbitrary duration 1.2s</button>
```

## 注意点

*   `duration-*` は、`transition` または `transition-{property}` が設定されている要素に適用します。
*   適切なトランジション時間は、ユーザー体験に大きく影響します。短すぎると変化が認識できず、長すぎるとユーザーを待たせてしまいます。一般的に UI 要素のインタラクションでは `100ms` から `300ms` 程度がよく使われます。

## 関連ユーティリティ

*   `transition-property` (`transition`, `transition-*`): トランジション対象のプロパティ。
*   `transition-timing-function` (`ease-*`): トランジションの速度曲線。
*   `transition-delay` (`delay-*`): トランジション開始までの遅延時間。
*   `animate-duration`: (キーフレームアニメーション用) アニメーション全体の時間。

## 公式ドキュメント参照
*   [Tailwind CSS: Transition Duration](https://tailwindcss.com/docs/transition-duration)
*   [MDN: transition-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)
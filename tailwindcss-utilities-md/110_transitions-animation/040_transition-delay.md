## タイトル
title: Transitions & Animation: Transition Delay (トランジション遅延時間)

## タグ
tags: ["tailwindcss", "utilities", "transitions", "animation", "transition-delay", "delay", "timing"]

## 概要
`delay-{amount}` ユーティリティは、要素の状態が変化してから CSS トランジションが実際に開始されるまでの待機時間 (遅延) を設定します。CSS の `transition-delay` プロパティに対応します。

これにより、複数の要素のアニメーションタイミングをずらしたり、特定のアクション後に少し間を置いてからアニメーションを開始させたりすることができます。

## 基本的な使い方とパラメータ

値はミリ秒 (`ms`) または秒 (`s`) で指定します。Tailwind は `duration-*` と同じ時間スケールを提供します。

*   **`delay-0`**: `transition-delay: 0ms;` (遅延なし、デフォルト)
*   **`delay-75`**: `transition-delay: 75ms;`
*   **`delay-100`**: `transition-delay: 100ms;`
*   **`delay-150`**: `transition-delay: 150ms;`
*   **`delay-200`**: `transition-delay: 200ms;`
*   **`delay-300`**: `transition-delay: 300ms;`
*   **`delay-500`**: `transition-delay: 500ms;`
*   **`delay-700`**: `transition-delay: 700ms;`
*   **`delay-1000`**: `transition-delay: 1000ms;` (1秒)

```html
<div class="space-y-4 p-4">
  <button class="transition duration-300 ease-in-out hover:bg-blue-600 bg-blue-500 text-white p-2 rounded delay-0"> {/* Default */}
    Delay 0ms (Instant Start)
  </button>
  <button class="transition duration-300 ease-in-out hover:bg-green-600 bg-green-500 text-white p-2 rounded delay-150">
    Delay 150ms
  </button>
   <button class="transition duration-300 ease-in-out hover:bg-red-600 bg-red-500 text-white p-2 rounded delay-300">
    Delay 300ms
  </button>
   <button class="transition duration-300 ease-in-out hover:bg-purple-600 bg-purple-500 text-white p-2 rounded delay-500">
    Delay 500ms
  </button>
   <button class="transition duration-300 ease-in-out hover:bg-pink-600 bg-pink-500 text-white p-2 rounded delay-1000">
    Delay 1000ms (1s)
  </button>
</div>
```
**注意:** トランジション効果を有効にするには、`transition` (または `transition-{property}`) および `duration-*` ユーティリティも併せて指定する必要があります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて遅延時間を変更できます。

```html
<button class="transition delay-150 md:delay-500 ...">
  Transition delay changes on medium screens.
</button>
```

## 状態修飾子

`delay-*` ユーティリティ自体に状態修飾子 (`hover:delay-500` など) を適用することは通常ありません。遅延時間は要素の基本状態に設定します。

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.transitionDelay` (または `theme.transitionDelay`) でカスタムの遅延時間を追加できます。値にはミリ秒 (`'120ms'`) または秒 (`'1.5s'`) を文字列で指定します。`duration-*` と同じスケールを共有します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms', // delay-2000 クラスを追加
        'fast': '50ms',   // delay-fast クラスを追加
      },
    },
  },
}
```

```html
<button class="transition delay-fast ...">Fast delay</button>
<button class="transition delay-2000 ...">Slow delay (2s)</button>
```

## 任意の値 (Arbitrary Values)

任意の値を使って遅延時間を直接指定することも可能です。

```html
<button class="transition delay-[450ms] ...">Arbitrary delay 450ms</button>
<button class="transition delay-[2.5s] ...">Arbitrary delay 2.5s</button>
```

## 注意点

*   `delay-*` は、`transition` または `transition-{property}` および `duration-*` が設定されている要素に適用します。
*   遅延時間は、トランジションが**開始するまで**の時間です。トランジション自体の長さは `duration-*` で制御します。
*   複数の要素に異なる `delay-*` を設定することで、連続的なアニメーション (staggered animation) を作成できます。

## 関連ユーティリティ

*   `transition-property` (`transition`, `transition-*`): トランジション対象のプロパティ。
*   `transition-duration` (`duration-*`): トランジションの継続時間。
*   `transition-timing-function` (`ease-*`): トランジションの速度曲線。
*   `animate-delay`: (キーフレームアニメーション用) アニメーション開始までの遅延時間。

## 公式ドキュメント参照
*   [Tailwind CSS: Transition Delay](https://tailwindcss.com/docs/transition-delay)
*   [MDN: transition-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay)
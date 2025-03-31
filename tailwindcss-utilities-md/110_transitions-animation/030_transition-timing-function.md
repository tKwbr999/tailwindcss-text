## タイトル
title: Transitions & Animation: Transition Timing Function (イージング)

## タグ
tags: ["tailwindcss", "utilities", "transitions", "animation", "transition-timing-function", "ease", "linear", "in", "out", "in-out", "cubic-bezier"]

## 概要
`ease-{value}` ユーティリティは、CSS トランジションの時間経過に伴う速度の変化 (加速度曲線、イージング関数) を制御します。CSS の `transition-timing-function` プロパティに対応します。

これにより、アニメーションがより自然で滑らかに見えるようになります。

## 基本的な使い方とパラメータ

*   **`ease-linear`**: `transition-timing-function: linear;` (一定速度)
*   **`ease-in`**: `transition-timing-function: cubic-bezier(0.4, 0, 1, 1);` (ゆっくり始まり、徐々に加速)
*   **`ease-out`**: `transition-timing-function: cubic-bezier(0, 0, 0.2, 1);` (速く始まり、徐々に減速)
*   **`ease-in-out`**: `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);` (デフォルト。ゆっくり始まり、中間で加速し、ゆっくり終わる)

```html
<div class="space-y-8 p-4">
  <div class="relative h-20">
    <p class="text-xs mb-1">Hover over the squares:</p>
    <div class="flex space-x-4">
      <div class="w-16 h-16 bg-blue-500 rounded transition-transform duration-500 ease-linear hover:translate-x-32">Linear</div>
      <div class="w-16 h-16 bg-green-500 rounded transition-transform duration-500 ease-in hover:translate-x-32">In</div>
      <div class="w-16 h-16 bg-red-500 rounded transition-transform duration-500 ease-out hover:translate-x-32">Out</div>
      <div class="w-16 h-16 bg-purple-500 rounded transition-transform duration-500 ease-in-out hover:translate-x-32">In-Out (Default)</div>
    </div>
  </div>
</div>
```
**注意:** 上記コード例では、効果を分かりやすくするために `transition-transform`, `duration-500`, `hover:translate-x-32` も併せて指定しています。

## デフォルトのイージング

Tailwind のデフォルトのトランジション (`transition` クラス) は、`ease-in-out` タイミング関数を使用します。これは多くの UI アニメーションで自然に見えるため、一般的に良い出発点となります。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてイージング関数を変更できますが、一般的ではありません。

```html
<button class="transition ease-in md:ease-out ...">
  Easing function changes on medium screens.
</button>
```

## 状態修飾子

`ease-*` ユーティリティ自体に状態修飾子 (`hover:ease-in` など) を適用することは通常ありません。イージング関数は要素の基本状態に設定します。

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.transitionTimingFunction` (または `theme.transitionTimingFunction`) でカスタムのイージング関数を追加できます。値には CSS の `transition-timing-function` で有効なキーワード (`steps(4, end)` など) や `cubic-bezier()` 関数を文字列で指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionTimingFunction: {
        'DEFAULT': 'cubic-bezier(0.4, 0, 0.2, 1)', // ease-in-out (デフォルト)
        'linear': 'linear',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        // カスタム Cubic Bezier を追加
        'bounce': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)', // ease-bounce クラスを追加
        // steps() 関数の例
        'steps-4': 'steps(4, end)', // ease-steps-4 クラスを追加
      },
    },
  },
}
```

```html
<div class="transition-transform duration-500 ease-bounce hover:scale-125 ...">Bounce Easing</div>
<div class="transition-opacity duration-1000 ease-steps-4 hover:opacity-0 ...">Steps Easing</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って `transition-timing-function` を直接指定することも可能です。特に `cubic-bezier()` を微調整したい場合に便利です。

```html
<div class="transition-transform duration-500 ease-[cubic-bezier(0.1,0.7,1.0,0.1)] hover:translate-x-16 ...">
  Custom Cubic Bezier
</div>
```

## 注意点

*   `ease-*` は、`transition` または `transition-{property}` および `duration-*` が設定されている要素に適用します。
*   イージング関数の選択は、アニメーションの印象を大きく左右します。`linear` は機械的な動き、`ease-in-out` は自然な動き、`ease-in` は加速感、`ease-out` は減速感を与えます。目的に合わせて選択してください。
*   Cubic Bezier 関数を使うと非常に細かな速度制御が可能ですが、調整には [cubic-bezier.com](https://cubic-bezier.com/) のようなツールを使うと便利です。

## 関連ユーティリティ

*   `transition-property` (`transition`, `transition-*`): トランジション対象のプロパティ。
*   `transition-duration` (`duration-*`): トランジションの継続時間。
*   `transition-delay` (`delay-*`): トランジション開始までの遅延時間。
*   `animate-timing-function`: (キーフレームアニメーション用) アニメーション全体の速度曲線。

## 公式ドキュメント参照
*   [Tailwind CSS: Transition Timing Function](https://tailwindcss.com/docs/transition-timing-function)
*   [MDN: transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
*   [cubic-bezier.com](https://cubic-bezier.com/) (Cubic Bezier 関数作成ツール)
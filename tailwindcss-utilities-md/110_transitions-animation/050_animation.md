## タイトル
title: Transitions & Animation: Animation (キーフレームアニメーション)

## タグ
tags: ["tailwindcss", "utilities", "transitions", "animation", "keyframes", "animate", "spin", "ping", "pulse", "bounce"]

## 概要
`animate-{name}` ユーティリティは、要素に事前定義されたキーフレームアニメーションを適用します。CSS の `animation` プロパティに対応します。

Tailwind は、一般的な UI アニメーション (スピン、ピング、パルス、バウンス) のためのユーティリティをデフォルトで提供します。カスタムアニメーションも `tailwind.config.js` で定義できます。

## 基本的な使い方とパラメータ

*   **`animate-spin`**: 要素を滑らかに回転させます。ローディングスピナーなどに使用します。
*   **`animate-ping`**: 要素のサイズと不透明度を変化させて、レーダーのパルスのような効果を作成します。通知バッジなどに使用します。
*   **`animate-pulse`**: 要素の不透明度をゆっくり変化させて、フェードイン・アウトを繰り返す効果を作成します。スケルトンローディングなどに使用します。
*   **`animate-bounce`**: 要素を垂直方向に軽くバウンドさせます。通知やスクロール誘導などに使用します。
*   **`animate-none`**: アニメーションを適用しません。レスポンシブや状態修飾子でアニメーションを無効化する場合に使用します。

```html
<div class="flex flex-wrap justify-center items-center gap-8 p-8">

  {/* animate-spin */}
  <svg class="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>

  {/* animate-ping */}
  <span class="relative flex h-6 w-6">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full h-6 w-6 bg-sky-500"></span>
  </span>

  {/* animate-pulse */}
  <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    <div class="animate-pulse flex space-x-4">
      <div class="rounded-full bg-slate-200 dark:bg-slate-700 h-10 w-10"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>
            <div class="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  </div>

  {/* animate-bounce */}
  <svg class="animate-bounce w-6 h-6 text-green-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
  </svg>

   {/* animate-none */}
   <button class="animate-bounce hover:animate-none bg-red-500 text-white p-2 rounded">
     Stop Bouncing on Hover
   </button>

</div>
```

## アニメーションのカスタマイズ

`animation` ユーティリティは、CSS の `animation` ショートハンドプロパティに対応します。Tailwind は内部的に `@keyframes` ルールと `animation` プロパティを組み合わせてこれらのユーティリティを定義しています。

アニメーションの**速度** (`duration-*`)、**タイミング関数** (`ease-*`)、**遅延** (`delay-*`) は、トランジションと同様のユーティリティクラスを使って制御できます (ただし、これらはアニメーション全体に適用されます)。

```html
{/* ゆっくり回転 */}
<svg class="animate-spin duration-[3s] ease-linear h-10 w-10 ..."></svg>

{/* 1秒遅れてバウンス開始 */}
<svg class="animate-bounce delay-1000 w-6 h-6 ..."></svg>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてアニメーションを変更または無効化できます。

```html
{/* モバイルでは回転、md 以上では回転しない */}
<div class="animate-spin md:animate-none ...">...</div>
```

## 状態修飾子

`hover:`, `focus:`, `motion-safe:`, `motion-reduce:` などと組み合わせて、インタラクションやユーザー設定に応じてアニメーションを制御できます。

*   **`motion-safe:`**: ユーザーが OS で視差効果などを無効にしていない場合にのみアニメーションを適用します (アクセシビリティ配慮)。
*   **`motion-reduce:`**: ユーザーが視差効果などを無効にしている場合にアニメーションを無効化または控えめなものに変更します。

```html
<button class="motion-safe:hover:animate-ping ...">Ping on hover (if motion is safe)</button>

<div class="animate-spin motion-reduce:animate-none ...">
  Spinning animation disabled if user prefers reduced motion.
</div>
```

## カスタムアニメーション (`tailwind.config.js`)

`tailwind.config.js` でカスタムの `@keyframes` ルールと、それを使用する `animation` ユーティリティを定義できます。

1.  **`theme.extend.keyframes`**: `@keyframes` ルールを定義します。キーが名前 (`wiggle`) になり、値がキーフレームオブジェクトになります。
2.  **`theme.extend.animation`**: アニメーションユーティリティを定義します。キーがクラス名 (`animate-{key}`) になり、値が `keyframes` で定義した名前と、継続時間、タイミング関数などを組み合わせた文字列になります。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite', // animate-wiggle クラス
        'fade-in-slow': 'fade-in 2s ease-out forwards', // animate-fade-in-slow クラス, forwards で最後の状態を維持
      },
    },
  },
}
```

```html
<div class="animate-wiggle">Wiggle wiggle!</div>
<div class="animate-fade-in-slow">Fade In Slowly</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って `animation` プロパティを直接指定することも可能です。

```html
<div class="animate-[bounce_2s_ease-in-out_3]">Bounce 3 times over 2 seconds</div>
```

## 注意点

*   アニメーションはユーザーの注意を引きますが、過度な使用は煩わしく感じさせたり、パフォーマンスに影響を与えたりする可能性があります。効果的に使用してください。
*   `motion-reduce` 修飾子を使って、ユーザー設定に応じてアニメーションを無効化または軽減することを検討してください。

## 関連ユーティリティ

*   `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`: CSS トランジション関連。
*   `transform` ユーティリティ (`scale-*`, `rotate-*`, `translate-*` など): アニメーションでよく使われる変形。

## 公式ドキュメント参照
*   [Tailwind CSS: Animation](https://tailwindcss.com/docs/animation)
*   [Tailwind CSS: Keyframes](https://tailwindcss.com/docs/keyframes)
*   [MDN: animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
*   [MDN: @keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
*   [Tailwind CSS: Motion Safe](https://tailwindcss.com/docs/hover-focus-and-other-states#motion-safe)
*   [Tailwind CSS: Motion Reduce](https://tailwindcss.com/docs/hover-focus-and-other-states#motion-reduce)
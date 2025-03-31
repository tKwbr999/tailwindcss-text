## タイトル
title: Transitions & Animation: Transition Property (トランジション対象プロパティ)

## タグ
tags: ["tailwindcss", "utilities", "transitions", "animation", "transition-property", "transition", "colors", "opacity", "shadow", "transform"]

## 概要
`transition-{properties}` ユーティリティは、要素の状態が変化したとき (例: ホバー時) に、どの CSS プロパティがトランジション (徐々に変化) するかを制御します。CSS の `transition-property` プロパティに対応します。

トランジション効果を適用するには、通常、対象プロパティ (`transition-*`) に加えて、変化時間 (`duration-*`) とタイミング関数 (`ease-*`) を指定します。

## 基本的な使い方とパラメータ

Tailwind は、よく使われるプロパティの組み合わせに対するショートハンドを提供します。

*   **`transition-none`**: `transition-property: none;` (トランジションなし)
*   **`transition-all`**: `transition-property: all;` (すべてのプロパティを対象)
*   **`transition-colors`**: `background-color`, `border-color`, `text-color`, `fill`, `stroke` を対象とします。
*   **`transition-opacity`**: `opacity` を対象とします。
*   **`transition-shadow`**: `box-shadow` を対象とします。
*   **`transition-transform`**: `transform` を対象とします。
*   **`transition`**: デフォルト。`colors`, `opacity`, `shadow`, `transform` をすべて対象とします。

```html
<div class="space-y-4 p-4">
  <button class="transition hover:bg-blue-600 bg-blue-500 text-white p-2 rounded">
    Transition Default (All common)
  </button>
  <button class="transition-colors duration-300 ease-in-out hover:bg-green-600 bg-green-500 text-white p-2 rounded">
    Transition Colors
  </button>
   <button class="transition-opacity duration-300 ease-in-out hover:opacity-50 opacity-100 bg-red-500 text-white p-2 rounded">
    Transition Opacity
  </button>
   <button class="transition-shadow duration-300 ease-in-out hover:shadow-lg shadow-md bg-yellow-400 text-black p-2 rounded">
    Transition Shadow
  </button>
   <button class="transition-transform duration-300 ease-in-out hover:scale-110 scale-100 bg-purple-500 text-white p-2 rounded">
    Transition Transform
  </button>
   <button class="transition-all duration-300 ease-in-out hover:bg-pink-600 hover:text-yellow-200 hover:scale-105 hover:shadow-xl bg-pink-500 text-white p-2 rounded shadow">
    Transition All
  </button>
   <button class="transition-none hover:bg-gray-600 bg-gray-500 text-white p-2 rounded">
    Transition None (Instant change)
  </button>
</div>
```
**注意:** 上記コード例では、効果を分かりやすくするために `duration-*` や `ease-*` も併せて指定しています。

## 複数のプロパティの指定

`transition` ユーティリティは、複数のプロパティを対象とするショートハンドです。もし特定の組み合わせ (例: `opacity` と `transform` のみ) をトランジションさせたい場合は、任意の値を使用するか、カスタムユーティリティを定義します。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてトランジション対象プロパティを変更できますが、一般的ではありません。

## 状態修飾子

`transition-*` ユーティリティ自体に状態修飾子 (`hover:transition-colors` など) を適用することは通常ありません。トランジションは要素の基本状態に設定し、状態修飾子 (`hover:bg-blue-600` など) で変化後のスタイルを指定します。

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.transitionProperty` (または `theme.transitionProperty`) でカスタムのプロパティセットを追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'width-height': ['width', 'height'], // 配列でも指定可能
      },
    },
  },
}
```

```html
<div class="transition-height duration-300 h-16 hover:h-32 ...">Transition height</div>
<div class="transition-spacing duration-300 p-4 hover:p-8 ...">Transition spacing</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って `transition-property` を直接指定することも可能です。

```html
<div class="transition-[width] duration-300 w-16 hover:w-32 ...">Transition width (arbitrary)</div>
<div class="transition-[transform,opacity] duration-300 opacity-50 hover:opacity-100 scale-90 hover:scale-100 ...">Transition transform and opacity</div>
```

## 注意点

*   トランジションを適用したいプロパティを `transition-*` で指定し忘れると、そのプロパティの変化はアニメーションせず、瞬時に切り替わります。
*   `transition-all` は便利ですが、意図しないプロパティまでトランジション対象となり、パフォーマンスに影響を与える可能性があるため、必要なプロパティだけを指定する方が推奨されます。デフォルトの `transition` はよく使われるプロパティに限定されています。
*   すべての CSS プロパティがトランジション可能なわけではありません (例: `display`)。

## 関連ユーティリティ

*   `transition-duration` (`duration-*`): トランジションの継続時間。
*   `transition-timing-function` (`ease-*`): トランジションの速度曲線 (イージング)。
*   `transition-delay` (`delay-*`): トランジション開始までの遅延時間。
*   `animate-*`: より複雑なキーフレームアニメーション。

## 公式ドキュメント参照
*   [Tailwind CSS: Transition Property](https://tailwindcss.com/docs/transition-property)
*   [MDN: transition-property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)
*   [MDN: transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) (ショートハンドプロパティ)
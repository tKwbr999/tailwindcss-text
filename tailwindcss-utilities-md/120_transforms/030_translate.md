## タイトル
title: Transforms: Translate (移動)

## タグ
tags: ["tailwindcss", "utilities", "transforms", "translate", "translate-x", "translate-y", "position", "2d"]

## 概要
`translate-x-{amount}`, `translate-y-{amount}` ユーティリティは、要素を本来の位置から水平または垂直方向に移動させます。CSS の `transform` プロパティの `translateX()`, `translateY()`, または `translate()` 関数に対応します。

値は通常、Tailwind のスペーシングスケール (`0`, `1`, `4`, `px` など) または割合 (`1/2`, `full` など) を使用します。負の値も利用可能です。

## 基本的な使い方とパラメータ

*   **`translate-x-{amount}`**: 水平方向 (`X` 軸) に移動します。
    *   `translate-x-0`: 移動なし。
    *   `translate-x-4`: 右に `1rem` 移動。
    *   `-translate-x-8`: 左に `2rem` 移動。
    *   `translate-x-1/2`: 右に要素の幅の 50% 移動。
    *   `-translate-x-full`: 左に要素の幅の 100% 移動。
*   **`translate-y-{amount}`**: 垂直方向 (`Y` 軸) に移動します。
    *   `translate-y-0`: 移動なし。
    *   `translate-y-4`: 下に `1rem` 移動。
    *   `-translate-y-8`: 上に `2rem` 移動。
    *   `translate-y-1/2`: 下に要素の高さの 50% 移動。
    *   `-translate-y-full`: 上に要素の高さの 100% 移動。

```html
<div class="relative h-48 p-4 border rounded bg-gray-100 dark:bg-gray-800 overflow-hidden">
  <p class="text-sm mb-2">Translate Examples:</p>

  {/* translate-x */}
  <div class="absolute top-4 left-1/2 w-20 h-10 rounded bg-blue-500 text-white flex items-center justify-center translate-x-8">
    X: 8 (2rem)
  </div>
   <div class="absolute top-16 left-1/2 w-20 h-10 rounded bg-blue-600 text-white flex items-center justify-center -translate-x-1/2">
    X: -1/2 (-50%)
  </div>

  {/* translate-y */}
   <div class="absolute top-1/2 left-4 w-20 h-10 rounded bg-green-500 text-white flex items-center justify-center translate-y-4">
    Y: 4 (1rem)
  </div>
   <div class="absolute top-1/2 left-32 w-20 h-10 rounded bg-green-600 text-white flex items-center justify-center -translate-y-full">
    Y: -full (-100%)
  </div>

   {/* 両方 */}
    <div class="absolute top-1/2 left-1/2 w-20 h-10 rounded bg-red-500 text-white flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
    Center (-x-1/2, -y-1/2)
  </div>

</div>
```
**中央揃えのテクニック:**
`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2` は、要素のサイズに関わらず、親要素 (`position: relative` が必要) の中央に要素を配置するための一般的なテクニックです。

## Transform Origin (変形の原点)

`translate` は変形の原点 (`transform-origin`) の影響を受けません。常に要素自身の位置を基準に移動します。

## Transform の組み合わせ

`translate-*` は、他の `transform` ユーティリティ (例: `scale-*`, `rotate-*`, `skew-*`) と組み合わせて使用できます。

```html
<div class="translate-x-4 rotate-6 scale-110 ...">Combined Transforms</div>
```

## ハードウェアアクセラレーション

`transform` プロパティを使用すると、ブラウザはパフォーマンス向上のために自動的にハードウェアアクセラレーションを有効にすることがあります。`transform-gpu` クラスで明示的に有効にすることもできます。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて移動量を変更できます。

```html
{/* モバイルでは移動なし、md 以上で右に移動 */}
<div class="translate-x-0 md:translate-x-16 ...">...</div>
```

## 状態修飾子

`hover:`, `focus:`, `active:`, `group-hover:` などと組み合わせて、インタラクションに応じて要素を移動させるアニメーションを作成できます。`transition` ユーティリティと組み合わせると滑らかになります。

```html
<button class="translate-y-0 hover:-translate-y-1 active:translate-y-0.5 transition-transform duration-150 ease-in-out ...">
  Move on Hover/Active
</button>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.translate` (または `theme.translate`) でカスタムの移動量を追加できます。`theme.spacing` スケールを継承しているため、`spacing` で定義した値も `translate-*` で使用可能です。パーセンテージや `auto` なども定義できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
      },
      translate: { // translate 固有のキーも追加可能
        '1/7': '14.2857143%',
        '112': '28rem', // 448px
        'screen': '100vw', // ビューポート幅分移動
      }
    },
  },
}
```

```html
<div class="translate-x-72 ...">Translate by spacing value</div>
<div class="-translate-y-1/7 ...">Translate by custom fraction</div>
<div class="translate-x-screen ...">Translate by screen width</div>
```

## 任意の値 (Arbitrary Values)

任意の値を使って移動量を直接指定することも可能です。

```html
<div class="translate-x-[13px] ...">Arbitrary translate 13px</div>
<div class="translate-y-[calc(50%_+_1rem)] ...">Arbitrary complex translate</div>
<div class="translate-x-[var(--slide-offset)] ...">Translate using CSS variable</div>
```

## 注意点

*   `translate` は要素の**視覚的な位置**のみを変更し、**レイアウト上の元のスペースは保持**します。周囲の要素の配置には影響を与えません (要素が重なる可能性があります)。レイアウト自体を変更したい場合は、マージン (`m-*`) や `position` ユーティリティを使用します。
*   パーセンテージ値 (`translate-x-1/2` など) は、**要素自身のサイズ**に対する割合です。

## 関連ユーティリティ

*   `transform-origin` (`origin-*`): 変形の原点 (translate には影響しない)。
*   他の `transform` ユーティリティ (`scale-*`, `rotate-*`, `skew-*`)。
*   `transform` (`transform`, `transform-gpu`, `transform-none`): Transform 機能の有効化/ハードウェアアクセラレーション。
*   `transition-transform`: `transform` プロパティのトランジションを有効化。
*   `position` (`absolute`, `relative` など): 要素の配置方法。
*   `margin` (`m-*`): 要素の外側の余白 (レイアウトに影響)。

## 公式ドキュメント参照
*   [Tailwind CSS: Translate](https://tailwindcss.com/docs/translate)
*   [MDN: transform: translate()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate)
*   [MDN: transform: translateX()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX)
*   [MDN: transform: translateY()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateY)
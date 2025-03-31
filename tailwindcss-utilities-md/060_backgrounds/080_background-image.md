## タイトル
title: Backgrounds: Background Image (背景画像・グラデーション)

## タグ
tags: ["tailwindcss", "utilities", "backgrounds", "background-image", "bg-image", "gradient", "url", "linear-gradient", "radial-gradient", "conic-gradient"]

## 概要
`bg-gradient-*`, `bg-none`, `bg-[url(...)]` ユーティリティは、要素の背景画像を設定します。CSS の `background-image` プロパティに対応します。

Tailwind は主に線形グラデーション (`linear-gradient`) を簡単に適用するためのユーティリティを提供しますが、任意の値を使って URL 画像や他のグラデーションタイプも指定できます。

## 基本的な使い方とパラメータ

### グラデーション (`bg-gradient-to-{direction}`)

線形グラデーションを作成します。グラデーションの色は `from-*`, `via-*`, `to-*` ユーティリティ (次のセクションで解説) で指定します。

*   **`bg-gradient-to-t`**: 上方向へのグラデーション (`to top`)
*   **`bg-gradient-to-tr`**: 右上方向へのグラデーション (`to top right`)
*   **`bg-gradient-to-r`**: 右方向へのグラデーション (`to right`)
*   **`bg-gradient-to-br`**: 右下方向へのグラデーション (`to bottom right`)
*   **`bg-gradient-to-b`**: 下方向へのグラデーション (`to bottom`) (デフォルトの方向)
*   **`bg-gradient-to-bl`**: 左下方向へのグラデーション (`to bottom left`)
*   **`bg-gradient-to-l`**: 左方向へのグラデーション (`to left`)
*   **`bg-gradient-to-tl`**: 左上方向へのグラデーション (`to top left`)

```html
<div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
  {/* グラデーションの色は from-*, via-*, to-* で指定 */}
  <div class="h-24 rounded bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white">to right</div>
  <div class="h-24 rounded bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center text-white">to bottom right (via pink)</div>
  <div class="h-24 rounded bg-gradient-to-t from-green-400 to-emerald-600 flex items-center justify-center text-white">to top</div>
  <div class="h-24 rounded bg-gradient-to-tl from-yellow-300 via-orange-400 to-rose-500 flex items-center justify-center text-white">to top left (via orange)</div>
</div>
```

### 画像なし (`bg-none`)

背景画像を削除します (`background-image: none;`)。親要素から継承した背景画像などを打ち消す場合に使用します。

```html
<div class="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded">
  <p class="bg-none text-white">No background image here.</p>
</div>
```

### URL 画像 (任意の値)

任意の URL を使って背景画像を指定します。`bg-[url('/path/to/image.jpg')]` のように記述します。

```html
<div class="h-40 w-full rounded border dark:border-gray-700 bg-no-repeat bg-center bg-cover bg-[url('https://via.placeholder.com/400x200/cccccc/000000?text=URL_Image')]" >
  {/* Content over background image */}
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて背景画像やグラデーションを変更できます。

```html
<div class="bg-none md:bg-gradient-to-r md:from-blue-500 ...">
  {/* モバイルでは背景なし、md 以上でグラデーション */}
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.backgroundImage` (または `theme.backgroundImage`) でカスタムの背景画像やグラデーション (に対応するクラス名) を追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))', // Radial gradient 用
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',   // Conic gradient 用
      },
    },
  },
}
```

```html
<div class="bg-hero-pattern ...">Hero Section</div>
<footer class="bg-footer-texture ...">Footer</footer>

{/* Radial Gradient (from/via/to と組み合わせる) */}
<div class="h-32 w-32 rounded-full bg-gradient-radial from-sky-400 to-blue-600"></div>

{/* Conic Gradient (from/via/to と組み合わせる) */}
<div class="h-32 w-32 rounded-full bg-gradient-conic from-yellow-400 via-red-500 to-pink-600"></div>
```

## 任意の値 (Arbitrary Values)

任意の `background-image` の値を直接指定することも可能です。

```html
<div class="bg-[url('/images/custom.png')] ...">...</div>
<div class="bg-[linear-gradient(to_top,rgba(0,0,0,0.5),transparent)] ...">...</div>
<div class="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 ...">...</div>
```

## 注意点

*   背景画像を使用する場合、`background-repeat`, `background-position`, `background-size`, `background-attachment` などの関連ユーティリティを組み合わせて表示を調整することが一般的です。
*   グラデーションの色は `from-{color}`, `via-{color}`, `to-{color}` ユーティリティで指定します。これらは次のセクションで解説します。
*   `radial-gradient` や `conic-gradient` を使用するには、`tailwind.config.js` で対応する `backgroundImage` キーを定義する必要があります (上記カスタマイズ例参照)。

## 関連ユーティリティ

*   `gradient-color-stops` (`from-*`, `via-*`, `to-*`): グラデーションの色。
*   `background-repeat`: 背景画像の繰り返し。
*   `background-position`: 背景画像の位置。
*   `background-size`: 背景画像のサイズ。
*   `background-attachment`: 背景画像の固定方法。
*   `background-origin`: 背景画像の原点。
*   `background-clip`: 背景の描画範囲。

## 公式ドキュメント参照
*   [Tailwind CSS: Background Image](https://tailwindcss.com/docs/background-image)
*   [Tailwind CSS: Gradient Color Stops](https://tailwindcss.com/docs/gradient-color-stops)
*   [MDN: background-image](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
*   [MDN: linear-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)
*   [MDN: radial-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient)
*   [MDN: conic-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient)
## タイトル
title: Layout: Aspect Ratio (アスペクト比)

## タグ
tags: ["tailwindcss", "utilities", "layout", "aspect-ratio", "video", "image", "responsive"]

## 概要
要素のアスペクト比（幅に対する高さの比率）を固定するためのユーティリティクラスです。主に動画 (`iframe`) や画像の埋め込みで、親要素の幅に基づいて高さを自動調整し、指定した比率を維持したい場合に使用します。

## 基本的な使い方とパラメータ

`aspect-{ratio}` の形式でクラスを指定します。

*   **`aspect-auto`**: デフォルト。要素固有のアスペクト比を使用します。
*   **`aspect-square`**: アスペクト比を 1:1 (正方形) にします。
*   **`aspect-video`**: アスペクト比を 16:9 (一般的な動画比率) にします。

```html
{/* 16:9 のアスペクト比を持つ iframe (例: YouTube埋め込み) */}
<div class="w-full max-w-xl mx-auto"> {/* 親要素で幅を指定 */}
  <div class="aspect-video">
    <iframe class="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

<hr class="my-8 border-dashed dark:border-gray-700">

{/* 正方形のアスペクト比を持つ画像コンテナ */}
<div class="w-48 mx-auto"> {/* 親要素で幅を指定 */}
  <div class="aspect-square bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
    <span class="text-gray-500 dark:text-gray-400">1:1</span>
    {/* <img src="..." alt="..." class="w-full h-full object-cover rounded"> */}
  </div>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてアスペクト比を変更できます。

```html
{/* デフォルトは正方形、md以上で 16:9 */}
<div class="w-full max-w-md mx-auto">
  <div class="aspect-square md:aspect-video bg-indigo-200 dark:bg-indigo-900 rounded flex items-center justify-center">
    <span class="text-indigo-800 dark:text-indigo-200">aspect-square md:aspect-video</span>
  </div>
</div>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.aspectRatio` でカスタムのアスペクト比を追加できます。キーがクラス名 (`aspect-{key}`) になり、値が比率 (数値または `'width/height'` 形式の文字列) になります。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3', // aspect-4/3 クラスを追加
        '3/2': '3 / 2', // aspect-3/2 クラスを追加
        'golden': '1.618 / 1', // aspect-golden クラスを追加
      },
    },
  },
}
```

```html
{/* カスタムアスペクト比を使用 */}
<div class="w-64 mx-auto">
  <div class="aspect-4/3 bg-teal-200 dark:bg-teal-900 rounded flex items-center justify-center">
    <span class="text-teal-800 dark:text-teal-200">aspect-4/3</span>
  </div>
</div>
```

## 任意の値 (Arbitrary Values)

設定ファイルで定義されていない任意のアスペクト比を直接クラス名に記述することも可能です。`aspect-[width/height]` の形式で指定します。

```html
{/* 任意のアスペクト比 2:1 を指定 */}
<div class="w-full max-w-lg mx-auto">
  <div class="aspect-[2/1] bg-rose-200 dark:bg-rose-900 rounded flex items-center justify-center">
    <span class="text-rose-800 dark:text-rose-200">aspect-[2/1]</span>
  </div>
</div>
```

## 注意点

*   このユーティリティは、要素の**幅**に基づいて**高さ**を自動調整します。したがって、通常は親要素や要素自身に幅を指定する必要があります (`w-full`, `max-w-md` など)。
*   内部の要素 (例: `iframe`, `img`) には `w-full h-full` を適用して、アスペクト比コンテナいっぱいに広がるようにします。画像の場合は `object-fit` (例: `object-cover`) も併用すると良いでしょう。
*   この機能は CSS の `aspect-ratio` プロパティに基づいています。古いブラウザではサポートされていない場合があります。

## 関連ユーティリティ

*   `object-fit` (`object-cover`, `object-contain` など): `<img>` や `<video>` 要素の内容がコンテナにどうフィットするかを制御します。
*   `object-position` (`object-center`, `object-top` など): `object-fit` を使用した際の要素内容の位置を制御します。

## 公式ドキュメント参照
*   [Tailwind CSS: Aspect Ratio](https://tailwindcss.com/docs/aspect-ratio)
*   [MDN: aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)
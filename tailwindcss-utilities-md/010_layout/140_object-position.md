## タイトル
title: Layout: Object Position (置換要素のコンテンツ位置)

## タグ
tags: ["tailwindcss", "utilities", "layout", "object-position", "image", "video", "replaced element", "object-fit"]

## 概要
`object-{position}` ユーティリティは、`object-fit` プロパティが `contain`, `cover`, `none`, `scale-down` のいずれかである場合に、置換要素 (`<img>`, `<video>` など) のコンテンツがコンテナ内のどの位置に配置されるかを制御します。CSS の `object-position` プロパティに対応します。

`object-fit: fill;` (デフォルト) の場合は、コンテンツがコンテナいっぱいに引き伸ばされるため、`object-position` は効果がありません。

## 基本的な使い方とパラメータ

`object-{position}` の形式でクラスを指定します。位置はキーワードで指定します。

*   **`object-bottom`**: コンテナの下端に配置。
*   **`object-center`**: コンテナの中央 (水平・垂直) に配置 (デフォルト)。
*   **`object-left`**: コンテナの左端に配置。
*   **`object-left-bottom`**: コンテナの左下に配置。
*   **`object-left-top`**: コンテナの左上に配置。
*   **`object-right`**: コンテナの右端に配置。
*   **`object-right-bottom`**: コンテナの右下に配置。
*   **`object-right-top`**: コンテナの右上に配置。
*   **`object-top`**: コンテナの上端に配置。

```html
{/* object-cover と object-position の組み合わせ */}
<div class="grid grid-cols-3 gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
  <div class="text-center">
    <p class="text-sm mb-1">object-cover object-top</p>
    <div class="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
      <img src="https://via.placeholder.com/400x300/3b82f6/ffffff" alt="Cover Top" class="w-full h-full object-cover object-top">
    </div>
    <p class="text-xs mt-1">画像の上部が表示される</p>
  </div>
  <div class="text-center">
    <p class="text-sm mb-1">object-cover object-center (Default)</p>
    <div class="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
      <img src="https://via.placeholder.com/400x300/3b82f6/ffffff" alt="Cover Center" class="w-full h-full object-cover object-center">
    </div>
     <p class="text-xs mt-1">画像の中央が表示される</p>
  </div>
  <div class="text-center">
    <p class="text-sm mb-1">object-cover object-bottom</p>
    <div class="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
      <img src="https://via.placeholder.com/400x300/3b82f6/ffffff" alt="Cover Bottom" class="w-full h-full object-cover object-bottom">
    </div>
     <p class="text-xs mt-1">画像の下部が表示される</p>
  </div>
</div>

<hr class="my-8 border-dashed dark:border-gray-700">

{/* object-contain と object-position の組み合わせ */}
<div class="grid grid-cols-3 gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
   <div class="text-center">
    <p class="text-sm mb-1">object-contain object-left-top</p>
    <div class="w-full aspect-video bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
      <img src="https://via.placeholder.com/100x100/ec4899/ffffff" alt="Contain Left Top" class="w-full h-full object-contain object-left-top">
    </div>
    <p class="text-xs mt-1">左上に配置される</p>
  </div>
   <div class="text-center">
    <p class="text-sm mb-1">object-contain object-center (Default)</p>
    <div class="w-full aspect-video bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
      <img src="https://via.placeholder.com/100x100/ec4899/ffffff" alt="Contain Center" class="w-full h-full object-contain object-center">
    </div>
     <p class="text-xs mt-1">中央に配置される</p>
  </div>
   <div class="text-center">
    <p class="text-sm mb-1">object-contain object-right-bottom</p>
    <div class="w-full aspect-video bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
      <img src="https://via.placeholder.com/100x100/ec4899/ffffff" alt="Contain Right Bottom" class="w-full h-full object-contain object-right-bottom">
    </div>
     <p class="text-xs mt-1">右下に配置される</p>
  </div>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてコンテンツの位置を変更できます。

```html
<img src="..." alt="..." class="w-full h-64 object-cover object-center md:object-top">
{/* md サイズ以上では画像の上部を表示 */}
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.objectPosition` でカスタムの位置キーワードを追加できます。値には CSS の `object-position` プロパティで有効な値を文字列で指定します (例: `'50% 25%'`, `'top 10px right 20px'`)。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      objectPosition: {
        'center-bottom': 'center bottom',
        'top-4': 'center top 1rem', // 上から 1rem の位置
      },
    },
  },
}
```

```html
<img src="..." alt="..." class="object-cover object-center-bottom">
<img src="..." alt="..." class="object-contain object-top-4">
```

## 任意の値 (Arbitrary Values)

任意の値を使って `object-position` を直接指定することも可能です。`object-[position]` の形式で指定します。

```html
<img src="..." alt="..." class="object-cover object-[center_75%]"> {/* 垂直方向 75% の位置 */}
<img src="..." alt="..." class="object-contain object-[top_10px_right_20px]"> {/* 上から 10px, 右から 20px */}
```

## 注意点

*   `object-position` は `object-fit` が `contain`, `cover`, `none`, `scale-down` のいずれかの場合にのみ効果があります。`object-fit: fill;` (デフォルト) では効果がありません。
*   `object-cover` と組み合わせる場合、どの部分が表示され、どの部分が切り取られるかを制御します。
*   `object-contain` と組み合わせる場合、コンテナ内の余白の中でコンテンツがどこに配置されるかを制御します。

## 関連ユーティリティ

*   `object-fit`: 置換要素のコンテンツがコンテナにどのようにフィットするかを制御します。
*   `aspect-ratio`: 要素のアスペクト比を固定します。

## 公式ドキュメント参照
*   [Tailwind CSS: Object Position](https://tailwindcss.com/docs/object-position)
*   [MDN: object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
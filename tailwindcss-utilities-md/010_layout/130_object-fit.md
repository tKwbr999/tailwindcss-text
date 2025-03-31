## タイトル
title: Layout: Object Fit (置換要素のフィット方法)

## タグ
tags: ["tailwindcss", "utilities", "layout", "object-fit", "image", "video", "replaced element", "contain", "cover", "fill", "none", "scale-down"]

## 概要
`object-{fit}` ユーティリティは、`<img>` や `<video>` などの置換要素 (replaced element) のコンテンツが、その要素自身のボックス（コンテナ）にどのように収まるかを制御します。CSS の `object-fit` プロパティに対応します。アスペクト比を維持したままコンテナに合わせたり、コンテナいっぱいに引き伸ばしたりする際に使用します。

## 基本的な使い方とパラメータ

*   **`object-contain`**: アスペクト比を維持したまま、要素のコンテンツ全体がコンテナ内に収まるように縮小または拡大されます。コンテナとコンテンツのアスペクト比が異なる場合、余白（レターボックス）が生じます。
*   **`object-cover`**: アスペクト比を維持したまま、要素のコンテンツ全体がコンテナを完全に覆うように縮小または拡大されます。コンテナとコンテンツのアスペクト比が異なる場合、コンテンツの一部が切り取られます (クリッピング)。
*   **`object-fill`**: デフォルト。アスペクト比を無視して、コンテンツがコンテナを完全に埋めるように引き伸ばされます。コンテンツが歪む可能性があります。
*   **`object-none`**: コンテンツはリサイズされず、元のサイズで表示されます。コンテナからはみ出す部分は切り取られます。
*   **`object-scale-down`**: コンテンツのサイズが `object-none` または `object-contain` のどちらか小さい方として表示されます。つまり、コンテナより小さい場合は元のサイズで表示され (`object-none` と同じ)、コンテナより大きい場合はコンテナに収まるように縮小されます (`object-contain` と同じ)。

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">

  {/* 元画像 (例: 4:3 比率) */}
  <div class="text-center">
    <p class="text-sm mb-1">Original (4:3)</p>
    <img src="https://via.placeholder.com/400x300/cccccc/969696" alt="Original 4:3" class="w-full h-auto mx-auto rounded">
  </div>

  {/* コンテナ (例: 1:1 比率) */}
  <div class="text-center">
    <p class="text-sm mb-1">Container (1:1)</p>
    <div class="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded"></div>
  </div>

  <div></div> {/* Spacer */}

  {/* object-contain */}
  <div class="text-center">
    <p class="text-sm mb-1">object-contain</p>
    <div class="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded overflow-hidden"> {/* overflow-hidden が重要 */}
      <img src="https://via.placeholder.com/400x300/22c55e/ffffff" alt="Contain" class="w-full h-full object-contain">
    </div>
    <p class="text-xs mt-1">全体が表示され、余白ができる</p>
  </div>

  {/* object-cover */}
  <div class="text-center">
    <p class="text-sm mb-1">object-cover</p>
    <div class="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
      <img src="https://via.placeholder.com/400x300/3b82f6/ffffff" alt="Cover" class="w-full h-full object-cover">
    </div>
     <p class="text-xs mt-1">コンテナを覆い、一部が切れる</p>
  </div>

  {/* object-fill */}
  <div class="text-center">
    <p class="text-sm mb-1">object-fill (Default)</p>
    <div class="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
      <img src="https://via.placeholder.com/400x300/f97316/ffffff" alt="Fill" class="w-full h-full object-fill">
    </div>
     <p class="text-xs mt-1">引き伸ばされ、歪む可能性</p>
  </div>

  {/* object-none */}
  <div class="text-center">
    <p class="text-sm mb-1">object-none</p>
    <div class="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
      <img src="https://via.placeholder.com/400x300/ec4899/ffffff" alt="None" class="w-full h-full object-none object-center"> {/* object-position で位置調整 */}
    </div>
     <p class="text-xs mt-1">リサイズされず、中央部分が表示</p>
  </div>

  {/* object-scale-down */}
  <div class="text-center">
    <p class="text-sm mb-1">object-scale-down</p>
    {/* コンテナより画像が大きい場合 (contain と同じ) */}
    <div class="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded overflow-hidden mb-2">
      <img src="https://via.placeholder.com/400x300/8b5cf6/ffffff" alt="Scale Down (Larger)" class="w-full h-full object-scale-down">
    </div>
    {/* コンテナより画像が小さい場合 (none と同じ) */}
    <div class="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
       <img src="https://via.placeholder.com/100x75/8b5cf6/ffffff" alt="Scale Down (Smaller)" class="w-full h-full object-scale-down object-center">
    </div>
     <p class="text-xs mt-1">小さい場合はそのまま、大きい場合は縮小</p>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてフィット方法を変更できます。

```html
<img src="..." alt="..." class="w-full h-48 object-cover sm:object-contain lg:object-fill">
```

## 注意点

*   `object-fit` は `<img>` や `<video>` などの置換要素にのみ適用されます。通常の `<div>` などには効果がありません。
*   `object-cover` や `object-none` を使用する場合、コンテナ要素に `overflow-hidden` を適用しないと、はみ出した部分が表示されてしまう可能性があります。
*   コンテンツの位置を調整したい場合は、`object-position` ユーティリティ (次のセクションで解説) を併用します。

## 関連ユーティリティ

*   `object-position`: `object-fit` を使用した際のコンテンツの位置を制御します。
*   `aspect-ratio`: 要素のアスペクト比を固定します。`object-fit` と組み合わせて使うことが多いです。
*   `overflow` (`overflow-hidden` など): 要素のコンテナからはみ出したコンテンツの表示方法を制御します。

## 公式ドキュメント参照
*   [Tailwind CSS: Object Fit](https://tailwindcss.com/docs/object-fit)
*   [MDN: object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
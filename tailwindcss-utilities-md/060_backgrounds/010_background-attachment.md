## タイトル
title: Backgrounds: Background Attachment (背景画像の固定)

## タグ
tags: ["tailwindcss", "utilities", "backgrounds", "background-attachment", "fixed", "local", "scroll", "image"]

## 概要
`bg-fixed`, `bg-local`, `bg-scroll` ユーティリティは、要素の背景画像がビューポートに対して固定されるか、要素の内容と一緒にスクロールするか、要素自体と一緒にスクロールするかを制御します。CSS の `background-attachment` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`bg-fixed`**: 背景画像をビューポートに対して固定します (`background-attachment: fixed;`)。要素をスクロールしても背景画像は動きません。
*   **`bg-local`**: 背景画像を要素の**内容**に対して固定します (`background-attachment: local;`)。要素の内容がスクロールすると、背景画像も一緒にスクロールします。
*   **`bg-scroll`**: デフォルト。背景画像を要素自体に対して固定します (`background-attachment: scroll;`)。要素がスクロールしても背景画像は要素の境界に対して固定されたままですが、ページ全体のスクロールには追従します。

```html
<div class="space-y-8 p-4">

  {/* bg-fixed */}
  <div>
    <p class="text-sm mb-1">bg-fixed (Viewport fixed)</p>
    <div class="h-40 w-full overflow-auto rounded border dark:border-gray-700 bg-cover bg-center bg-fixed" style="background-image: url('https://via.placeholder.com/600x400/888888/ffffff?text=Fixed')">
      <div class="h-64 text-white p-4 text-shadow">Scroll inside this div. The background image remains fixed relative to the viewport. Lorem ipsum dolor sit amet...</div>
    </div>
  </div>

  {/* bg-local */}
  <div>
    <p class="text-sm mb-1">bg-local (Scrolls with content)</p>
    <div class="h-40 w-full overflow-auto rounded border dark:border-gray-700 bg-cover bg-center bg-local" style="background-image: url('https://via.placeholder.com/600x400/444444/ffffff?text=Local')">
      <div class="h-64 text-white p-4 text-shadow">Scroll inside this div. The background image scrolls along with the content. Lorem ipsum dolor sit amet...</div>
    </div>
  </div>

  {/* bg-scroll (Default) */}
  <div>
    <p class="text-sm mb-1">bg-scroll (Default - Scrolls with element, not content)</p>
    <div class="h-40 w-full overflow-auto rounded border dark:border-gray-700 bg-cover bg-center bg-scroll" style="background-image: url('https://via.placeholder.com/600x400/cccccc/000000?text=Scroll')">
      <div class="h-64 text-black p-4">Scroll inside this div. The background image stays fixed relative to the element's border, not the content. Lorem ipsum dolor sit amet...</div>
    </div>
  </div>

</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて背景の固定方法を変更できます。

```html
<div class="bg-scroll md:bg-fixed ..." style="background-image: url(...)">
  {/* md 以上で背景が固定される */}
</div>
```

## 注意点

*   これらのユーティリティは、要素に背景画像 (`bg-image`, `bg-gradient-*` など) が設定されている場合にのみ効果があります。
*   `bg-fixed` は、背景画像をビューポートに対して固定するため、要素のスクロールとは独立して表示されます。これはパララックス効果のような表現に使われることがありますが、モバイルデバイスでのパフォーマンス問題や予期しない表示を引き起こす可能性があるため、注意が必要です。
*   `bg-local` は、要素の内容と一緒に背景がスクロールするため、スクロール可能なコンテナ内で背景をコンテンツに追従させたい場合に便利です。
*   `bg-scroll` (デフォルト) は、ページ全体がスクロールする際には背景も一緒に動きますが、要素内部でスクロールが発生しても背景は要素の境界に対して固定されたままです。

## 関連ユーティリティ

*   `bg-image`, `bg-gradient-*`: 背景画像を設定します。
*   `bg-repeat`: 背景画像の繰り返し方法。
*   `bg-position`: 背景画像の位置。
*   `bg-size`: 背景画像のサイズ。
*   `overflow`: 要素のスクロール動作。

## 公式ドキュメント参照
*   [Tailwind CSS: Background Attachment](https://tailwindcss.com/docs/background-attachment)
*   [MDN: background-attachment](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)
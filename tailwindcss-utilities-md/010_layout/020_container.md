## タイトル
title: Layout: Container (コンテナ)

## タグ
tags: ["tailwindcss", "utilities", "layout", "container", "centering", "max-width", "responsive"]

## 概要
`container` クラスは、要素の幅を現在のブレークポイントに基づいて固定の最大幅 (`max-width`) に制限し、水平方向中央に配置するためのユーティリティです。ページ全体のコンテンツや特定のセクションの幅を制御し、大きな画面で見やすさを保つのに役立ちます。

## 基本的な使い方

コンテナとして機能させたい要素に `container` クラスを追加します。

```html
<div class="container mx-auto px-4 py-8 bg-gray-100 dark:bg-gray-800 rounded">
  <h2 class="text-xl font-semibold mb-2">コンテンツエリア</h2>
  <p>この div は `container` クラスによって幅が制限され、中央揃えになります。</p>
  <p>現在のブレークポイントに応じて `max-width` が変わります。</p>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400">
    (ウィンドウ幅を変更して確認してください)
  </p>
</div>
```

**デフォルトの動作:**

*   `container` クラスは、現在のブレークポイントに応じて以下の `max-width` を適用します (Tailwind のデフォルト設定の場合):
    *   `sm` (640px): `max-width: 640px;`
    *   `md` (768px): `max-width: 768px;`
    *   `lg` (1024px): `max-width: 1024px;`
    *   `xl` (1280px): `max-width: 1280px;`
    *   `2xl` (1536px): `max-width: 1536px;`
*   最小のブレークポイント (`sm` 未満) では `max-width` は適用されず、要素は利用可能な幅全体に広がります。
*   **注意:** `container` クラスだけでは中央揃えになりません。通常、`mx-auto` (左右のマージンを自動設定) を**併用**して中央揃えを実現します。

## パディングの追加

コンテナの左右にパディングを追加したい場合は、`px-*` ユーティリティを併用します。

```html
{/* 左右に 1rem (16px) のパディングを追加 */}
<div class="container mx-auto px-4">
  {/* ... コンテンツ ... */}
</div>

{/* ブレークポイントごとにパディングを変更 */}
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  {/* ... コンテンツ ... */}
</div>
```

Tailwind の設定で、コンテナにデフォルトでパディングを含めることも可能です (後述)。

## 中央揃え (デフォルト)

`container` クラスは、デフォルトでは自動的に中央揃えを行いません。`mx-auto` を追加する必要があります。

ただし、`tailwind.config.js` で `container.center` を `true` に設定すると、`container` クラス自体が `margin-left: auto; margin-right: auto;` を含むようになり、`mx-auto` を追加する必要がなくなります。

```javascript
// tailwind.config.js でコンテナを自動中央揃えにする設定
module.exports = {
  theme: {
    container: {
      center: true,
    },
  },
}
```
```html
{/* 上記設定がある場合、mx-auto は不要 */}
<div class="container px-4">
  {/* ... コンテンツ ... */}
</div>
```

## デフォルトパディングの設定

`tailwind.config.js` の `container.padding` で、コンテナにデフォルトの水平パディングを設定できます。

```javascript
// tailwind.config.js でデフォルトパディングを設定
module.exports = {
  theme: {
    container: {
      padding: '2rem', // すべてのブレークポイントで左右に 2rem のパディング
    },
  },
}
```

```javascript
// ブレークポイントごとに異なるパディングを設定
module.exports = {
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem', // デフォルト (sm 未満)
        sm: '2rem',      // sm 以上
        lg: '4rem',      // lg 以上
        xl: '5rem',      // xl 以上
        '2xl': '6rem',     // 2xl 以上
      },
    },
  },
}
```

```html
{/* 上記設定がある場合、px-* は不要 (設定されたパディングが自動で適用される) */}
<div class="container mx-auto"> {/* または center: true なら mx-auto も不要 */}
  {/* ... コンテンツ ... */}
</div>
```

## ブレークポイントごとの最大幅のカスタマイズ

`theme.screens` をカスタマイズすると、`container` が参照する `max-width` も自動的に更新されます。`container` 専用の `max-width` を設定したい場合は、`theme.container.screens` を使用します (ただし、これは `theme.screens` を上書きするため、通常は `theme.screens` のカスタマイズが推奨されます)。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: { // ここを変更すると container の max-width も変わる
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px', // デフォルトから変更
      '2xl': '1440px', // デフォルトから変更
    },
    // container: { // 通常は theme.screens を使う
    //   screens: {
    //     sm: '600px',
    //     md: '700px',
    //     // ...
    //   }
    // }
  },
}
```

## まとめ

`container` ユーティリティは、`mx-auto` (中央揃え) や `px-*` (パディング) と組み合わせて使うことで、レスポンシブな固定幅レイアウトを簡単に作成できます。`tailwind.config.js` で中央揃えやデフォルトパディングを有効にすると、さらに記述を簡潔にできます。

## 公式ドキュメント参照
*   [Tailwind CSS: Container](https://tailwindcss.com/docs/container)
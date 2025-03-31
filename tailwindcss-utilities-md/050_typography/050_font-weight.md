## タイトル
title: Typography: Font Weight (フォントの太さ)

## タグ
tags: ["tailwindcss", "utilities", "typography", "font-weight", "bold", "light", "normal", "semibold", "medium"]

## 概要
`font-{weight}` ユーティリティは、テキストの太さ (ウェイト) を設定します。CSS の `font-weight` プロパティに対応します。

Tailwind は、一般的な太さの段階に対応するクラスを提供します。

## 基本的な使い方とパラメータ

*   **`font-thin`**: `font-weight: 100;`
*   **`font-extralight`**: `font-weight: 200;`
*   **`font-light`**: `font-weight: 300;`
*   **`font-normal`**: `font-weight: 400;` (通常の太さ、多くの要素のデフォルト)
*   **`font-medium`**: `font-weight: 500;`
*   **`font-semibold`**: `font-weight: 600;`
*   **`font-bold`**: `font-weight: 700;` (太字、`<strong>` や `<b>` のデフォルト)
*   **`font-extrabold`**: `font-weight: 800;`
*   **`font-black`**: `font-weight: 900;`

```html
<div class="space-y-1 p-4">
  <p class="font-thin">Thin (100)</p>
  <p class="font-extralight">Extra Light (200)</p>
  <p class="font-light">Light (300)</p>
  <p class="font-normal">Normal (400)</p>
  <p class="font-medium">Medium (500)</p>
  <p class="font-semibold">Semibold (600)</p>
  <p class="font-bold">Bold (700)</p>
  <p class="font-extrabold">Extra Bold (800)</p>
  <p class="font-black">Black (900)</p>
</div>
```

## 利用可能な太さ

実際に表示される太さは、使用しているフォントファミリーがその太さのウェイトを持っているかどうかに依存します。フォントが必要なウェイトを持っていない場合、ブラウザは利用可能な最も近いウェイトで代替表示しようとしたり、擬似的に太らせたりすることがあります (faux bold)。

Web フォントを使用する場合は、必要なウェイトのフォントファイルも読み込むように設定する必要があります。

```css
/* 例: Inter フォントで複数のウェイトを読み込む */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

/* tailwind.config.js で Inter を設定 */
// module.exports = { theme: { extend: { fontFamily: { sans: ['Inter', 'sans-serif'] } } } }
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてフォントの太さを変更できます。

```html
<p class="font-normal md:font-bold ...">
  Normal weight on small screens, bold on medium and wider.
</p>
```

## 状態修飾子

`hover:`, `focus:` などと組み合わせて、特定の状態で太さを変更することも可能です。

```html
<a href="#" class="font-medium hover:font-bold ...">
  Hover to make bold
</a>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.fontWeight` (または `theme.fontWeight`) でカスタムの太さの値やキーを追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontWeight: {
        'normal': '400', // デフォルトを上書き (通常は不要)
        'medium': '550', // medium を少し太くする
        'heavy': '850',  // 新しい 'heavy' を追加
      },
    },
  },
}
```

```html
<p class="font-medium">Slightly bolder medium</p>
<p class="font-heavy">Heavy text</p>
```

## 任意の値 (Arbitrary Values)

任意の値を使って `font-weight` を直接指定することも可能です。

```html
<p class="font-[555]">Custom weight 555</p>
```

## 注意点

*   数値 (100-900) は CSS の `font-weight` の標準的な値に対応します。
*   すべてのフォントがすべてのウェイトを持っているわけではありません。Variable Fonts を使用すると、より柔軟なウェイト指定が可能になります。

## 関連ユーティリティ

*   `font-family`: フォントファミリー。
*   `font-size`: フォントサイズ。
*   `font-style`: イタリックなど。

## 公式ドキュメント参照
*   [Tailwind CSS: Font Weight](https://tailwindcss.com/docs/font-weight)
*   [MDN: font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
*   [Variable Fonts (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
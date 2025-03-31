## タイトル
title: Typography: Font Size (フォントサイズ)

## タグ
tags: ["tailwindcss", "utilities", "typography", "font-size", "text", "responsive"]

## 概要
`text-{size}` ユーティリティは、テキストのフォントサイズを設定します。CSS の `font-size` プロパティに対応します。

Tailwind は、`xs` (極小) から `9xl` (極大) までの豊富なサイズスケールをデフォルトで提供しており、これらは通常、対応する `line-height` (行の高さ) も含んでいます。

## 基本的な使い方とパラメータ

`text-{size}` の形式でクラスを指定します。

*   **`text-xs`**: `font-size: 0.75rem;` (12px), `line-height: 1rem;` (16px)
*   **`text-sm`**: `font-size: 0.875rem;` (14px), `line-height: 1.25rem;` (20px)
*   **`text-base`**: `font-size: 1rem;` (16px), `line-height: 1.5rem;` (24px) (デフォルトの基本サイズ)
*   **`text-lg`**: `font-size: 1.125rem;` (18px), `line-height: 1.75rem;` (28px)
*   **`text-xl`**: `font-size: 1.25rem;` (20px), `line-height: 1.75rem;` (28px)
*   **`text-2xl`**: `font-size: 1.5rem;` (24px), `line-height: 2rem;` (32px)
*   **`text-3xl`** ～ **`text-9xl`**: さらに大きなサイズ。

```html
<div class="space-y-2 p-4">
  <p class="text-xs">Text XS (0.75rem / 12px)</p>
  <p class="text-sm">Text SM (0.875rem / 14px)</p>
  <p class="text-base">Text Base (1rem / 16px)</p>
  <p class="text-lg">Text LG (1.125rem / 18px)</p>
  <p class="text-xl">Text XL (1.25rem / 20px)</p>
  <p class="text-2xl">Text 2XL (1.5rem / 24px)</p>
  <p class="text-3xl">Text 3XL</p>
  <p class="text-4xl">Text 4XL</p>
  {/* ... up to 9xl */}
</div>
```

## 行の高さ (Line Height)

Tailwind のデフォルトの `text-{size}` ユーティリティは、多くの場合、対応する `line-height` も同時に設定します。これは、各フォントサイズに対して読みやすい行間を確保するためです。

例: `text-lg` は `font-size: 1.125rem; line-height: 1.75rem;` を設定します。

もし `line-height` を個別に制御したい場合は、`leading-*` ユーティリティを使用します。

```html
<p class="text-2xl leading-tight">Text 2XL with tight leading</p>
<p class="text-base leading-loose">Text Base with loose leading</p>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてフォントサイズを変更できます。これは見出しや本文のサイズをデバイスごとに調整する一般的なテクニックです。

```html
{/* モバイルでは text-lg、md 以上で text-2xl */}
<h1 class="text-lg md:text-2xl font-bold">Responsive Heading</h1>

{/* モバイルでは text-sm、lg 以上で text-base */}
<p class="text-sm lg:text-base">Responsive body text.</p>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.fontSize` (または `theme.fontSize`) でカスタムのフォントサイズを追加したり、デフォルトのサイズや行の高さを変更したりできます。

*   **単純なサイズ指定:** 値にフォントサイズのみを指定します (例: `'10xl': '10rem'`)。この場合、`line-height` はデフォルト値 (通常は `normal`) になります。
*   **サイズと行の高さを指定:** 値に `[fontSize, lineHeight]` の形式の配列、または `{ fontSize, lineHeight }` の形式のオブジェクトを指定します。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontSize: {
        // 新しいサイズを追加
        'xxs': '0.625rem', // 10px (line-height は normal)
        '10xl': ['10rem', { lineHeight: '1' }], // 10rem, line-height: 1

        // デフォルトの text-sm の line-height を変更
        // 'sm': ['0.875rem', '1.4'], // デフォルトは ['0.875rem', '1.25rem']

         // オブジェクト形式での指定
        'h1-custom': ['3rem', {
          lineHeight: '3.5rem',
          letterSpacing: '-0.02em', // 同時に letter-spacing も設定可能
          fontWeight: '700',       // 同時に font-weight も設定可能
        }],
      },
    },
  },
}
```

```html
<p class="text-xxs">Extra extra small text</p>
<h1 class="text-10xl">Massive Heading</h1>
<h1 class="text-h1-custom">Custom H1 Style</h1>
```

## 任意の値 (Arbitrary Values)

任意の値を使ってフォントサイズを直接指定することも可能です。

```html
<p class="text-[15px]">Font size 15px</p>
<p class="text-[1.1em]">Font size 1.1em</p>
<p class="text-[clamp(1rem,_2vw,_1.5rem)]">Fluid font size</p> {/* clamp() も使用可能 */}
```
任意の値で指定した場合、`line-height` は設定されません。必要であれば `leading-*` ユーティリティを併用してください。

## 注意点

*   `rem` 単位はルート要素 (`html`) のフォントサイズに基づきます (通常はブラウザデフォルトの 16px)。`1rem = 16px` (デフォルト設定の場合)。
*   `em` 単位は現在の要素のフォントサイズに基づきます。
*   一貫性のあるタイポグラフィスケールを維持するため、任意の値の多用は避け、可能な限り `tailwind.config.js` で定義されたサイズを使用することが推奨されます。

## 関連ユーティリティ

*   `line-height` (`leading-*`): 行の高さを制御します。
*   `font-family` (`font-*`): フォントファミリー。
*   `font-weight` (`font-*`): フォントの太さ。
*   `letter-spacing` (`tracking-*`): 文字間隔。
*   `text-align`: テキストの水平方向の揃え。

## 公式ドキュメント参照
*   [Tailwind CSS: Font Size](https://tailwindcss.com/docs/font-size)
*   [MDN: font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
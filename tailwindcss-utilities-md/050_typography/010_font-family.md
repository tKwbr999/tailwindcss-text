## タイトル
title: Typography: Font Family (フォントファミリー)

## タグ
tags: ["tailwindcss", "utilities", "typography", "font-family", "font-sans", "font-serif", "font-mono", "web fonts", "custom fonts"]

## 概要
`font-{family}` ユーティリティは、要素のテキストに使用されるフォントファミリーを設定します。CSS の `font-family` プロパティに対応します。

Tailwind はデフォルトで、一般的な Sans Serif (`font-sans`)、Serif (`font-serif`)、Monospace (`font-mono`) のフォントスタックを提供します。これらはクロスプラットフォームで適切に表示されるように設計されています。

## 基本的な使い方とパラメータ

*   **`font-sans`**: デフォルト。UI で一般的に使用される Sans Serif フォントスタック。
    *   デフォルト値 (例): `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
*   **`font-serif`**: Serif フォントスタック。
    *   デフォルト値 (例): `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`
*   **`font-mono`**: Monospace フォントスタック。コード表示などに使用されます。
    *   デフォルト値 (例): `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`

```html
<div class="space-y-4 p-4">
  <p class="font-sans text-lg">Sans Serif フォント (デフォルト)</p>
  <p class="font-serif text-lg">Serif フォント</p>
  <p class="font-mono text-lg">Monospace フォント</p>
</div>
```
**注意:** 実際に表示されるフォントは、ユーザーのシステムにインストールされているフォントや、Web フォントとして読み込まれているフォントに依存します。Tailwind のデフォルトスタックは、利用可能なフォントの中から最適なものを選択しようとします。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてフォントファミリーを変更することも可能ですが、通常はサイト全体で一貫したフォントファミリーを使用することが多いため、あまり一般的ではありません。

```html
<p class="font-serif md:font-sans ...">
  Font changes on medium screens and wider (rarely needed).
</p>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.fontFamily` (または `theme.fontFamily`) で、デフォルトのフォントスタックを上書きしたり、新しいフォントファミリーを追加したりできます。

*   **デフォルトの上書き:** `sans`, `serif`, `mono` キーを使ってデフォルトのスタックを変更します。
*   **新しいファミリーの追加:** 任意のキー (例: `display`, `body`) を使って新しいフォントファミリーを定義します。

```javascript
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // デフォルトの sans-serif スタックの先頭に 'Inter' を追加
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        // 新しい 'display' ファミリーを追加
        display: ['Oswald', 'ui-sans-serif', 'system-ui'],
        // 日本語フォント用の設定例
        jp: ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
}
```

```html
<h1 class="font-display text-3xl">Display Font Heading</h1>
<p class="font-sans">Body text using Inter (if available) and system sans-serif fonts.</p>
<p class="font-jp">日本語テキストには Noto Sans JP を優先的に使用。</p>
```

**Web フォントの使用:**

カスタムフォント (例: Google Fonts, Adobe Fonts, またはセルフホストフォント) を使用する場合は、`tailwind.config.js` で定義する前に、CSS (`@font-face`) や `<link>` タグ、またはフレームワークの機能 (例: `next/font`) を使って**フォントファイルを読み込む**必要があります。

```css
/* 例: styles.css での @font-face */
@font-face {
  font-family: 'Oswald';
  src: url('/fonts/Oswald-VariableFont_wght.ttf') format('truetype');
  font-weight: 200 700;
  font-display: swap;
}
```

## 任意の値 (Arbitrary Values)

任意の値を使ってフォントファミリーを直接指定することも可能です。フォント名にスペースが含まれる場合はアンダースコア `_` に置き換えるか、引用符で囲みます。

```html
<p class="font-['Georgia',_serif]">Font specified with arbitrary value.</p>
<p class="font-['Times_New_Roman',_Times,_serif]">Font with spaces.</p>
```

## 注意点

*   指定したフォントがユーザーの環境で利用可能でない場合、フォントスタック内の次のフォント、最終的にはブラウザのデフォルトフォントが使用されます。
*   Web フォントを使用する場合は、パフォーマンスへの影響（読み込み時間、ファイルサイズ）を考慮してください。`font-display: swap;` を設定すると、フォント読み込み中のテキスト非表示を防ぐのに役立ちます。

## 関連ユーティリティ

*   `font-size` (`text-*`): フォントサイズ。
*   `font-weight` (`font-*`): フォントの太さ。
*   `font-style` (`italic`, `not-italic`): フォントスタイル。
*   `letter-spacing` (`tracking-*`): 文字間隔。
*   `line-height` (`leading-*`): 行の高さ。

## 公式ドキュメント参照
*   [Tailwind CSS: Font Family](https://tailwindcss.com/docs/font-family)
*   [MDN: font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
*   [Using Custom Fonts (Tailwind CSS)](https://tailwindcss.com/docs/font-family#using-custom-fonts)
*   [Google Fonts](https://fonts.google.com/)
*   [next/font (Next.js)](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
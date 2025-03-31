## タイトル
title: Typography: Letter Spacing (文字間隔)

## タグ
tags: ["tailwindcss", "utilities", "typography", "letter-spacing", "tracking", "kerning"]

## 概要
`tracking-{size}` ユーティリティは、テキストの文字間隔 (字間) を調整します。CSS の `letter-spacing` プロパティに対応します。「トラッキング (Tracking)」とも呼ばれます。

## 基本的な使い方とパラメータ

値はキーワードで指定します。

*   **`tracking-tighter`**: `letter-spacing: -0.05em;` (より狭く)
*   **`tracking-tight`**: `letter-spacing: -0.025em;` (やや狭く)
*   **`tracking-normal`**: `letter-spacing: 0em;` (デフォルト、通常の字間)
*   **`tracking-wide`**: `letter-spacing: 0.025em;` (やや広く)
*   **`tracking-wider`**: `letter-spacing: 0.05em;` (広く)
*   **`tracking-widest`**: `letter-spacing: 0.1em;` (最も広く)

単位 `em` は現在のフォントサイズに基づきます。つまり、フォントサイズが大きいほど、実際のスペースも広くなります。

```html
<div class="space-y-2 p-4 text-lg"> {/* text-lg で少し大きく表示 */}
  <p class="tracking-tighter">Tracking Tighter (-0.05em)</p>
  <p class="tracking-tight">Tracking Tight (-0.025em)</p>
  <p class="tracking-normal">Tracking Normal (0em)</p>
  <p class="tracking-wide">Tracking Wide (0.025em)</p>
  <p class="tracking-wider">Tracking Wider (0.05em)</p>
  <p class="tracking-widest">Tracking Widest (0.1em)</p>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて文字間隔を変更できます。例えば、大きな見出しを小さい画面では少し詰め、大きな画面では広げるといった調整が可能です。

```html
<h1 class="text-4xl tracking-tight md:tracking-normal lg:tracking-wide">
  Responsive Letter Spacing
</h1>
```

## 状態修飾子

`hover:` や `focus:` などと組み合わせて、インタラクションに応じて文字間隔を変更することも可能です (アニメーションと組み合わせるなど)。

```html
<button class="tracking-normal hover:tracking-wider transition-all duration-200 ...">
  Hover Me
</button>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.letterSpacing` (または `theme.letterSpacing`) でカスタムの文字間隔の値やキーを追加できます。値には `em`, `rem`, `px` など、CSS で有効な単位を使用できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      letterSpacing: {
        'tightest': '-.075em', // tracking-tightest クラスを追加
        'looser': '.15em',    // tracking-looser クラスを追加
        'px': '1px',        // tracking-px クラスを追加
      },
    },
  },
}
```

```html
<p class="tracking-tightest">Tracking Tightest</p>
<p class="tracking-looser">Tracking Looser</p>
<p class="tracking-px">Tracking 1px</p>
```

## 任意の値 (Arbitrary Values)

任意の値を使って文字間隔を直接指定することも可能です。

```html
<p class="tracking-[-0.03em]">Slightly tighter tracking</p>
<p class="tracking-[2px]">Tracking of 2px</p>
```

## 注意点

*   文字間隔の調整は、テキストの読みやすさやデザインの印象に影響を与えます。過度な調整は避け、特に本文テキストでは `tracking-normal` または微調整に留めるのが一般的です。
*   見出しや短いテキストで、デザイン上のアクセントとして広めたり狭めたりすることがあります。
*   `letter-spacing` (トラッキング) はすべての文字間に均等なスペースを追加・削除するのに対し、「カーニング (Kerning)」は特定の文字ペア間のスペースを微調整するフォント固有の機能です。Tailwind はカーニングを制御するユーティリティも提供しています (`kerning` - v3.4 時点ではコアに含まれていない可能性あり)。

## 関連ユーティリティ

*   `font-family`, `font-size`, `font-weight`: フォント関連の基本プロパティ。
*   `line-height` (`leading-*`): 行の高さ。
*   `word-spacing`: (コアユーティリティにはないが CSS プロパティ) 単語間のスペース。

## 公式ドキュメント参照
*   [Tailwind CSS: Letter Spacing](https://tailwindcss.com/docs/letter-spacing)
*   [MDN: letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
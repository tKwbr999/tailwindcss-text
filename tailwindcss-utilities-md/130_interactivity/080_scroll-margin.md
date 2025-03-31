## タイトル
title: Interactivity: Scroll Margin (スクロール停止マージン)

## タグ
tags: ["tailwindcss", "utilities", "interactivity", "scroll-margin", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml", "scroll-m", "scroll-mx", "scroll-my", "anchor link", "sticky header", "offset"]

## 概要
`scroll-m{t|r|b|l|x|y}-{amount}` ユーティリティは、要素がビューポートにスクロールされたとき (例: ページ内リンク `#hash` でジャンプしたときや `Element.scrollIntoView()` が呼び出されたとき) に、要素とそのスクロールコンテナの境界との間に確保されるマージン (オフセット) を設定します。CSS の `scroll-margin-top`, `scroll-margin-right`, `scroll-margin-bottom`, `scroll-margin-left` プロパティに対応します。

これは主に、固定ヘッダー (`position: sticky` または `fixed`) があり、ページ内リンクでジャンプした際にターゲット要素がヘッダーの下に隠れてしまうのを防ぐために使用されます。

## 基本的な使い方とパラメータ

値は通常、Tailwind の `theme.spacing` スケール (`0`, `1`, `2`, `4`, `px` など) を使用します。

*   **`scroll-mt-{amount}`**: 上方向のスクロールマージン (`scroll-margin-top`)。
*   **`scroll-mr-{amount}`**: 右方向のスクロールマージン (`scroll-margin-right`)。
*   **`scroll-mb-{amount}`**: 下方向のスクロールマージン (`scroll-margin-bottom`)。
*   **`scroll-ml-{amount}`**: 左方向のスクロールマージン (`scroll-margin-left`)。
*   **`scroll-mx-{amount}`**: 水平方向 (左右) のスクロールマージン。
*   **`scroll-my-{amount}`**: 垂直方向 (上下) のスクロールマージン。
*   **`scroll-m-{amount}`**: 全方向のスクロールマージン。

```html
<body class="scroll-smooth"> {/* スムーズスクロール有効 */}

<header class="sticky top-0 h-16 bg-white dark:bg-gray-800 shadow z-10 flex items-center px-4">
  Fixed Header (h-16 / 4rem)
  <nav class="ml-auto space-x-4">
    <a href="#section1" class="text-blue-600 hover:underline">Section 1</a>
    <a href="#section2" class="text-blue-600 hover:underline">Section 2</a>
  </nav>
</header>

<main class="pt-16"> {/* ヘッダー分のスペース */}
  <section id="section1" class="h-screen bg-gray-100 dark:bg-gray-700 p-8 scroll-mt-16"> {/* scroll-mt-16 (4rem) */}
    <h2 class="text-2xl font-bold">Section 1</h2>
    <p>Clicking the "Section 1" link will scroll here, leaving a 4rem (16px * 4) space above this section to account for the sticky header.</p>
    <div class="h-[120vh]"></div> {/* Scroll space */}
  </section>

  <section id="section2" class="h-screen bg-gray-200 dark:bg-gray-600 p-8 scroll-mt-[70px]"> {/* scroll-mt-[70px] (任意の値) */}
    <h2 class="text-2xl font-bold">Section 2</h2>
    <p>This section has a custom scroll margin top of 70px.</p>
     <div class="h-[120vh]"></div> {/* Scroll space */}
  </section>
</main>

</body>
```
**解説:**
上記の例では、`header` が `sticky top-0 h-16` で固定されています。各 `section` に `scroll-mt-16` (またはヘッダーの高さに合わせた値) を設定することで、ナビゲーションリンク (`#section1`, `#section2`) をクリックしてジャンプした際に、セクションの開始位置がヘッダーの下に隠れることなく、ヘッダーの高さ分のマージンが確保された位置にスクロールが停止します。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてスクロールマージンを変更できます。例えば、モバイルではヘッダーの高さが異なる場合に調整できます。

```html
<section id="target" class="scroll-mt-12 md:scroll-mt-16 ...">
  {/* モバイルでは 3rem、md 以上では 4rem のオフセット */}
</section>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.scrollMargin` (または `theme.scrollMargin`) でカスタムのスクロールマージン値を追加できます。`theme.spacing` スケールを継承しているため、`spacing` で定義した値も `scroll-m*` で使用可能です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem', // 72px
      },
      scrollMargin: { // scrollMargin 固有のキーも追加可能
        'header': '4rem', // scroll-mt-header などが使える
        // spacing を継承しない場合はここで定義
        // '4': '1rem',
        // ...
      }
    },
  },
}
```

```html
<section id="section3" class="scroll-mt-18 ...">Scroll margin top 4.5rem</section>
<section id="section4" class="scroll-mt-header ...">Scroll margin top using custom key</section>
```

## 任意の値 (Arbitrary Values)

任意の値を使ってスクロールマージンを直接指定することも可能です。

```html
<section id="section5" class="scroll-mt-[68px] ...">Arbitrary scroll margin top 68px</section>
<section id="section6" class="scroll-m-[2rem] ...">Arbitrary scroll margin all sides 2rem</section>
```

## 注意点

*   `scroll-margin` は、要素が**スクロールポート (通常はビューポートまたはスクロール可能な祖先要素) のスナップポートにスナップされる位置**を調整します。これは、ターゲットナビゲーション (`#hash`)、`Element.scrollIntoView()`、および場合によっては通常のスクロール操作にも影響します。
*   このプロパティは比較的新しいため、古いブラウザではサポートされていない可能性があります。

## 関連ユーティリティ

*   `scroll-padding` (`scroll-p-*`): スクロール**コンテナ**のパディング。スクロールスナップ領域を調整します。
*   `scroll-snap` (`snap-*`): スクロールスナップの挙動を制御します。
*   `scroll-behavior` (`scroll-smooth`, `scroll-auto`): スクロールのアニメーション。
*   `position` (`sticky`, `fixed`): 固定ヘッダーなどの実装。

## 公式ドキュメント参照
*   [Tailwind CSS: Scroll Margin](https://tailwindcss.com/docs/scroll-margin)
*   [MDN: scroll-margin](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin) (および関連プロパティ)
*   [Can I use: scroll-margin](https://caniuse.com/css-scroll-margin) (ブラウザサポート状況)
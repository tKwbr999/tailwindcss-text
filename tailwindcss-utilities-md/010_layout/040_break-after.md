## タイトル
title: Layout: Break After (要素後の改ページ・改カラム)

## タグ
tags: ["tailwindcss", "utilities", "layout", "columns", "print", "pagination", "break-after"]

## 概要
`break-after-{value}` ユーティリティは、要素の**後**でカラム区切りやページ区切りをどのように処理するかを制御します。主に複数カラムレイアウト (`columns-*`) や印刷時 (`print:`) の改ページ制御に使用されます。CSS の `break-after` プロパティに対応します。

## 基本的な使い方とパラメータ

以下のクラスが利用可能です。

*   **`break-after-auto`**: デフォルト。区切りを強制も禁止もしません。
*   **`break-after-avoid`**: 要素の後での区切りを避けます。
*   **`break-after-all`**: 要素の後で常に区切りを挿入します (カラムの場合はカラム区切り、ページの場合は改ページ)。
*   **`break-after-avoid-page`**: 要素の後での**ページ**区切りを避けます (印刷時など)。
*   **`break-after-page`**: 要素の後で常に**ページ**区切りを挿入します (印刷時など)。
*   **`break-after-left`**: 要素の後で区切りを挿入し、次の内容が左側のカラムまたはページ (見開きの場合) に配置されるようにします。
*   **`break-after-right`**: 要素の後で区切りを挿入し、次の内容が右側のカラムまたはページ (見開きの場合) に配置されるようにします。
*   **`break-after-column`**: 要素の後で常に**カラム**区切りを挿入します。

```html
<div class="columns-2 gap-8 p-4 bg-gray-100 dark:bg-gray-800 rounded">
  <p class="mb-4">最初の段落。この後にカラム区切りが入る可能性があります。</p>

  <h3 class="text-lg font-semibold mb-2 break-after-column">セクション 1</h3>
  <p class="mb-4">セクション 1 の内容。この見出しの後には必ずカラム区切りが挿入されます。</p>

  <h3 class="text-lg font-semibold mb-2 break-after-avoid">セクション 2 (区切り回避)</h3>
  <p class="mb-4">セクション 2 の内容。この見出しの後ではカラム区切りが避けられます。</p>
  <p class="mb-4">セクション 2 の続きの内容。</p>

  {/* 印刷時の改ページ制御 (画面上では変化なし) */}
  <div class="break-after-page">
    <h3 class="text-lg font-semibold mb-2">印刷用セクション A</h3>
    <p>このセクションの後には必ず改ページが入ります (印刷時)。</p>
  </div>

  <div>
    <h3 class="text-lg font-semibold mb-2">印刷用セクション B</h3>
    <p>これは次のページに表示されるはずです。</p>
  </div>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて区切り動作を変更できますが、カラムレイアウト自体がレスポンシブに変化する場合が多いため、特定のブレークポイントで `break-after-*` を指定するユースケースは限定的かもしれません。

```html
<div class="columns-1 md:columns-2 gap-8">
  <p class="mb-4 md:break-after-column">md サイズ以上の場合のみ、この後にカラム区切りが入る。</p>
  {/* ... content ... */}
</div>
```

## 印刷時の制御 (`print:`)

`print:` 修飾子と組み合わせることで、印刷時のみ改ページを制御できます。

```html
<article>
  <section>
    <h2>セクション 1</h2>
    <p>...</p>
  </section>
  <section class="print:break-after-page"> {/* 印刷時のみこのセクションの後に改ページ */}
    <h2>セクション 2</h2>
    <p>...</p>
  </section>
  <section>
    <h2>セクション 3</h2>
    <p>...</p>
  </section>
</article>
```

## 注意点

*   `break-after-*` の実際の効果は、コンテナのレイアウト (カラム数など) やコンテンツの量、ブラウザの実装によって影響を受けます。特に `break-after-left`, `break-after-right` は、厳密な制御が難しい場合があります。
*   主に複数カラムレイアウトや印刷レイアウトのためのユーティリティです。通常の Flexbox や Grid レイアウトではあまり使用しません。

## 関連ユーティリティ

*   `columns`: 複数カラムレイアウトを作成します。
*   `break-before`: 要素の**前**で区切りを制御します。
*   `break-inside`: 要素の**内部**で区切りが発生するのを制御します。

## 公式ドキュメント参照
*   [Tailwind CSS: Break After](https://tailwindcss.com/docs/break-after)
*   [MDN: break-after](https://developer.mozilla.org/en-US/docs/Web/CSS/break-after)
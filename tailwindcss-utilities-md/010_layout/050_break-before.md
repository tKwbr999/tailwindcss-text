## タイトル
title: Layout: Break Before (要素前の改ページ・改カラム)

## タグ
tags: ["tailwindcss", "utilities", "layout", "columns", "print", "pagination", "break-before"]

## 概要
`break-before-{value}` ユーティリティは、要素の**前**でカラム区切りやページ区切りをどのように処理するかを制御します。主に複数カラムレイアウト (`columns-*`) や印刷時 (`print:`) の改ページ制御に使用されます。CSS の `break-before` プロパティに対応します。

## 基本的な使い方とパラメータ

以下のクラスが利用可能です。

*   **`break-before-auto`**: デフォルト。区切りを強制も禁止もしません。
*   **`break-before-avoid`**: 要素の前での区切りを避けます。
*   **`break-before-all`**: 要素の前で常に区切りを挿入します (カラムの場合はカラム区切り、ページの場合は改ページ)。
*   **`break-before-avoid-page`**: 要素の前での**ページ**区切りを避けます (印刷時など)。
*   **`break-before-page`**: 要素の前で常に**ページ**区切りを挿入します (印刷時など)。
*   **`break-before-left`**: 要素の前で区切りを挿入し、その要素が左側のカラムまたはページ (見開きの場合) の先頭に配置されるようにします。
*   **`break-before-right`**: 要素の前で区切りを挿入し、その要素が右側のカラムまたはページ (見開きの場合) の先頭に配置されるようにします。
*   **`break-before-column`**: 要素の前で常に**カラム**区切りを挿入します。

```html
<div class="columns-2 gap-8 p-4 bg-gray-100 dark:bg-gray-800 rounded">
  <p class="mb-4">最初の段落。</p>
  <p class="mb-4">この段落の後、次の見出しの前でカラム区切りが入る可能性があります。</p>

  <h3 class="text-lg font-semibold mb-2 break-before-column">セクション 1</h3>
  <p class="mb-4">この見出しの前には必ずカラム区切りが挿入され、新しいカラムの先頭から始まります。</p>

  <h3 class="text-lg font-semibold mb-2 break-before-avoid">セクション 2 (区切り回避)</h3>
  <p class="mb-4">この見出しの前ではカラム区切りが避けられます。前の要素と同じカラムに配置されやすくなります。</p>

  {/* 印刷時の改ページ制御 (画面上では変化なし) */}
  <div class="break-before-page">
    <h3 class="text-lg font-semibold mb-2">印刷用セクション C</h3>
    <p>このセクションの前には必ず改ページが入ります (印刷時)。</p>
  </div>

  <div class="break-before-avoid-page">
    <h3 class="text-lg font-semibold mb-2">印刷用セクション D (改ページ回避)</h3>
    <p>このセクションの前では改ページが避けられます。</p>
  </div>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて区切り動作を変更できます。

```html
<div class="columns-1 md:columns-2 gap-8">
  {/* ... content ... */}
  <h3 class="text-lg font-semibold mb-2 md:break-before-column">新しいセクション</h3>
  <p>md サイズ以上の場合のみ、この見出しの前でカラム区切りが入る。</p>
  {/* ... content ... */}
</div>
```

## 印刷時の制御 (`print:`)

`print:` 修飾子と組み合わせることで、印刷時のみ改ページを制御できます。

```html
<article>
  <section>
    <h2>概要</h2>
    <p>...</p>
  </section>
  <section class="print:break-before-page"> {/* 印刷時のみこのセクションの前で改ページ */}
    <h2>詳細</h2>
    <p>...</p>
  </section>
</article>
```

## 注意点

*   `break-before-*` の効果も、コンテナのレイアウト、コンテンツ量、ブラウザ実装に依存します。
*   主に複数カラムレイアウトや印刷レイアウトのためのユーティリティです。

## 関連ユーティリティ

*   `columns`: 複数カラムレイアウトを作成します。
*   `break-after`: 要素の**後**で区切りを制御します。
*   `break-inside`: 要素の**内部**で区切りが発生するのを制御します。

## 公式ドキュメント参照
*   [Tailwind CSS: Break Before](https://tailwindcss.com/docs/break-before)
*   [MDN: break-before](https://developer.mozilla.org/en-US/docs/Web/CSS/break-before)
## タイトル
title: Typography: Content (疑似要素の内容)

## タグ
tags: ["tailwindcss", "utilities", "typography", "content", "pseudo-elements", "before", "after", "quotes"]

## 概要
`content-{value}` ユーティリティは、CSS の `content` プロパティを設定します。これは主に `::before` および `::after` 疑似要素と組み合わせて使用され、要素の前後に追加の装飾的なコンテンツ (テキスト、引用符、画像、カウンタなど) を挿入します。

Tailwind はデフォルトで、空のコンテンツ (`content-none`) と、引用符 (`content-['"']` など) を設定するための基本的なユーティリティを提供します。より複雑な内容は任意の値を使用します。

## 基本的な使い方とパラメータ

*   **`content-none`**: `content: none;` を設定します。疑似要素にデフォルトで設定されている `content` を打ち消す場合などに使用します。
*   **任意の値 (`content-[...]`)**:
    *   **文字列:** `content-['hello']`, `content-['>_']` のように、表示したい文字列を引用符で囲んで指定します。
    *   **引用符:** `content-['open-quote']`, `content-['close-quote']` を使うと、言語に応じた適切な引用符が挿入されます (`quotes` プロパティと連携)。
    *   **属性:** `content-[attr(data-tooltip)]` のように、要素の属性値を表示できます。
    *   **URL:** `content-[url('/img/icon.svg')]` のように、画像を表示できます (ただし、サイズ調整などは難しい)。
    *   **カウンタ:** `content-[counter(list-item)]` のように、CSS カウンタの値を表示できます。
    *   **空:** `content-['']` は空の文字列を設定します。`content-none` とは異なり、疑似要素自体は生成されます。

**注意:** `content-*` ユーティリティは、通常 `before:*` や `after:*` 修飾子と組み合わせて使用します。

```html
<div class="space-y-4 p-4">

  {/* before/after に文字列を追加 */}
  <p class="before:content-['«_'] after:content-['_»'] before:mr-1 after:ml-1 text-blue-600 dark:text-blue-400">
    Quoted Text Example
  </p>

  {/* 引用符 */}
  <blockquote class="before:content-['open-quote'] after:content-['close-quote'] quotes-['“','”','‘','’'] italic text-gray-700 dark:text-gray-300">
    This uses open-quote and close-quote.
  </blockquote>

  {/* 属性値を表示 (ツールチップ風) */}
  <span class="relative group">
    Hover Me
    <span
      data-tooltip="This is a tooltip!"
      class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity
             before:content-[attr(data-tooltip)]"
    ></span>
  </span>

  {/* 画像を表示 (非推奨: サイズ制御不可) */}
  {/* <p class="before:content-[url('/img/icon.png')] before:mr-2">Item with icon</p> */}

  {/* 空の content (装飾目的など) */}
  <div class="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-red-500 before:rounded-full">
    List item styled with empty content pseudo-element.
  </div>

  {/* content-none でデフォルトの content を打ち消す */}
  <q class="before:content-none after:content-none">
    Default quotes of q element are removed by content-none.
  </q>

</div>
```

## レスポンシブ / 状態修飾子

`before:*` や `after:*` と組み合わせることで、レスポンシブ (`md:before:content-['Desktop:']`) や状態 (`hover:after:content-['_↗']`) に応じて疑似要素の内容を変更できます。

```html
<a href="#" class="after:content-['_↗'] hover:after:content-['_⤴'] focus:after:content-['_🎯'] ...">
  Link Text
</a>
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.content` (または `theme.content`) でカスタムのコンテンツ値 (に対応するクラス名) を追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      content: {
        'link': 'url("/icons/link.svg")', // content-link クラスを追加
        'star': '"★"',                  // content-star クラスを追加
        'none': 'none', // content-none はデフォルトで存在
      },
    },
  },
}
```

```html
<a href="#" class="before:content-link before:mr-1 ...">External Link</a>
<span class="after:content-star after:ml-1 ...">Important</span>
```

## 注意点

*   `content` プロパティは `::before` および `::after` 疑似要素に対してのみ効果があります。通常の要素に適用しても何も起こりません。
*   `content` で挿入されたものは装飾的な要素として扱われ、通常は DOM の一部とはみなされません (例: テキスト選択できない、スクリーンリーダーに読み上げられない場合がある)。アクセシビリティに重要な情報は `content` だけで提供しないようにしてください。
*   画像 (`url()`) を `content` で表示する場合、サイズや配置の制御が難しいため、通常は `<img>` タグや背景画像を使用する方が適切です。

## 関連ユーティリティ

*   `before:`, `after:`: 疑似要素をターゲットにするための修飾子。
*   `quotes`: `open-quote`, `close-quote` と連携する引用符の種類。

## 公式ドキュメント参照
*   [Tailwind CSS: Content](https://tailwindcss.com/docs/content)
*   [MDN: content](https://developer.mozilla.org/en-US/docs/Web/CSS/content)
*   [MDN: ::before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before)
*   [MDN: ::after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after)
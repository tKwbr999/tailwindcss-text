## タイトル
title: Typography: Text Decoration Style (装飾線のスタイル)

## タグ
tags: ["tailwindcss", "utilities", "typography", "text-decoration-style", "decoration", "style", "solid", "double", "dotted", "dashed", "wavy"]

## 概要
`decoration-{style}` ユーティリティは、テキストに適用された装飾線 (下線、上線、打ち消し線) のスタイル (線種) を設定します。CSS の `text-decoration-style` プロパティに対応します。

## 基本的な使い方とパラメータ

*   **`decoration-solid`**: デフォルト。実線を表示します (`text-decoration-style: solid;`)。
*   **`decoration-double`**: 二重線を表示します (`text-decoration-style: double;`)。
*   **`decoration-dotted`**: 点線を表示します (`text-decoration-style: dotted;`)。
*   **`decoration-dashed`**: 破線を表示します (`text-decoration-style: dashed;`)。
*   **`decoration-wavy`**: 波線を表示します (`text-decoration-style: wavy;`)。

装飾線自体 (`underline`, `line-through` など) も同時に指定する必要があります。

```html
<div class="space-y-4 p-4 text-lg">
  <p class="underline decoration-solid">Solid Underline (Default)</p>
  <p class="underline decoration-double decoration-blue-500">Double Blue Underline</p>
  <p class="underline decoration-dotted decoration-red-500">Dotted Red Underline</p>
  <p class="underline decoration-dashed decoration-green-500 decoration-2">Dashed Green Underline (Thickness 2)</p> {/* 太さも併用 */}
  <p class="underline decoration-wavy decoration-pink-500">Wavy Pink Underline</p>
  <p class="line-through decoration-wavy decoration-gray-500">Wavy gray line-through</p>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じて装飾線のスタイルを変更できます。

```html
<p class="underline decoration-solid md:decoration-wavy ...">
  Solid underline on small screens, wavy on medium and wider.
</p>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じて装飾線のスタイルを変更できます。

```html
<a href="#" class="underline decoration-dotted hover:decoration-solid focus:decoration-solid ...">
  Dotted underline, becomes solid on hover/focus.
</a>
```

## カスタマイズ (`tailwind.config.js`)

Tailwind のデフォルト設定には、`text-decoration-style` のためのカスタマイズオプションは含まれていません。カスタムの線スタイル (例: `text-decoration-style: underline dotted;` のような組み合わせ) をユーティリティクラスとして追加したい場合は、プラグインを作成するか、CSS で直接定義する必要があります。

## 注意点

*   `decoration-{style}` ユーティリティは、`underline`, `overline`, `line-through` のいずれかが適用されていないと効果がありません。
*   ブラウザによっては、`double`, `dotted`, `dashed`, `wavy` の線の描画が若干異なる場合があります。特に線の太さ (`text-decoration-thickness`) と組み合わせた場合の表示に注意が必要です。

## 関連ユーティリティ

*   `text-decoration-line` (`underline`, `overline`, `line-through`, `no-underline`): 装飾線の種類。
*   `text-decoration-color` (`decoration-*`): 装飾線の色。
*   `text-decoration-thickness` (`decoration-*`): 装飾線の太さ。
*   `text-underline-offset` (`underline-offset-*`): 下線とテキストの間のオフセット。

## 公式ドキュメント参照
*   [Tailwind CSS: Text Decoration Style](https://tailwindcss.com/docs/text-decoration-style)
*   [MDN: text-decoration-style](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style)
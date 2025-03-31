## タイトル
title: Interactivity: Accent Color (アクセントカラー)

## タグ
tags: ["tailwindcss", "utilities", "interactivity", "accent-color", "accent", "form", "checkbox", "radio", "range", "progress", "color"]

## 概要
`accent-{color}` ユーティリティは、チェックボックス (`<input type="checkbox">`)、ラジオボタン (`<input type="radio">`)、レンジ入力 (`<input type="range">`)、プログレスバー (`<progress>`) など、特定のフォームコントロール要素のアクセントカラーを設定します。CSS の `accent-color` プロパティに対応します。

これにより、ブラウザのデフォルトのアクセントカラー (通常は青系) を、プロジェクトのブランドカラーなどに合わせて簡単に変更できます。

## 基本的な使い方とパラメータ

`accent-{color}-{shade}` または `accent-{keyword}` の形式でクラスを指定します。値は Tailwind のカラーパレット、`auto`, `inherit`, `current`, `transparent` を使用できます。

*   **`accent-auto`**: デフォルト。ブラウザのデフォルトのアクセントカラーを使用します。
*   **`accent-inherit`**: 親要素のアクセントカラーを継承。
*   **`accent-current`**: 要素のテキスト色 (`color`) を使用。
*   **`accent-transparent`**: 透明。
*   **`accent-{color}-{shade}`**: 指定した色を使用 (例: `accent-pink-500`, `accent-emerald-600`)。

```html
<div class="grid grid-cols-2 gap-6 p-4">
  <div class="space-y-3">
    <p class="text-sm font-medium">Checkboxes</p>
    <div class="flex items-center space-x-2">
      <input type="checkbox" checked class="h-4 w-4 accent-auto" /> <span>Auto (Default)</span>
    </div>
    <div class="flex items-center space-x-2">
      <input type="checkbox" checked class="h-4 w-4 accent-pink-500" /> <span>Pink 500</span>
    </div>
    <div class="flex items-center space-x-2">
      <input type="checkbox" checked class="h-4 w-4 accent-teal-600" /> <span>Teal 600</span>
    </div>
     <div class="flex items-center space-x-2">
      <input type="checkbox" checked class="h-4 w-4 accent-current text-orange-500" /> <span class="text-orange-500">Current (Orange)</span>
    </div>
  </div>

  <div class="space-y-3">
    <p class="text-sm font-medium">Radio Buttons</p>
    <div class="flex items-center space-x-2">
      <input type="radio" name="radio-ex" checked class="h-4 w-4 accent-auto" /> <span>Auto (Default)</span>
    </div>
    <div class="flex items-center space-x-2">
      <input type="radio" name="radio-ex" class="h-4 w-4 accent-fuchsia-500" /> <span>Fuchsia 500</span>
    </div>
    <div class="flex items-center space-x-2">
      <input type="radio" name="radio-ex" class="h-4 w-4 accent-lime-600" /> <span>Lime 600</span>
    </div>
  </div>

  <div class="space-y-3 col-span-2">
    <p class="text-sm font-medium">Range Input</p>
    <input type="range" min="0" max="100" value="50" class="w-full accent-indigo-500" />
  </div>

  <div class="space-y-3 col-span-2">
    <p class="text-sm font-medium">Progress Bar</p>
    <progress max="100" value="75" class="w-full accent-amber-500 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-moz-progress-bar]:rounded-lg"></progress>
    {/* Note: Progress bar styling needs vendor prefixes for full compatibility */}
  </div>

</div>
```

## 不透明度の変更

`/{opacity}` 修飾子を使って、アクセントカラーの不透明度を変更できます。

```html
<input type="checkbox" checked class="accent-red-500/50 ...">
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてアクセントカラーを変更できます。

```html
<input type="range" class="accent-blue-500 md:accent-green-500 ...">
```

## 状態修飾子

`dark:` 修飾子と組み合わせて、ダークモード時に異なるアクセントカラーを設定するのは一般的です。`hover:` や `focus:` は通常、アクセントカラー自体ではなく、リングや他のスタイルでフィードバックを提供します。

```html
<input type="checkbox" checked class="accent-sky-500 dark:accent-sky-400 ...">
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.accentColor` (または `theme.accentColor`) でカスタムカラーを追加できます。通常は `theme.colors` を継承するため、`colors` で定義したカスタムカラーは `accent-*` でも利用可能です。デフォルトの `accent-auto` の挙動は変更できません。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#ff5733',
      },
      accentColor: theme => ({
        ...theme('colors'), // colors を継承
        'primary': theme('colors.blue.600'), // accent-primary を追加
      })
    },
  },
}
```

```html
<input type="radio" class="accent-primary ...">
<input type="checkbox" checked class="accent-brand ...">
```

## 任意の値 (Arbitrary Values)

任意の色コードを使ってアクセントカラーを直接指定することも可能です。

```html
<input type="range" class="accent-[#ff8800] ...">
<progress value="50" max="100" class="accent-[var(--progress-color)] ..."></progress>
```

## 注意点

*   `accent-color` は比較的新しい CSS プロパティです。主要なモダンブラウザではサポートされていますが、古いブラウザ (特に IE) では動作しません。
*   このプロパティは、ブラウザが提供するネイティブなフォームコントロールの**特定の部分の色**のみを変更します。コントロール全体の形状や、チェックマーク自体の形などを変更することはできません。より高度なカスタマイズには、フォーム要素を非表示にしてカスタムスタイルを適用するテクニックや、専用のライブラリ (例: `@tailwindcss/forms` プラグイン、shadcn/ui の `Checkbox`, `RadioGroup` コンポーネントなど) が必要です。
*   shadcn/ui のフォーム関連コンポーネント (`Checkbox`, `RadioGroup`, `Switch`, `Slider`) は、内部的に Radix UI プリミティブを使用し、`accent-color` ではなく Tailwind のユーティリティクラスで完全にスタイリングされているため、`accent-*` ユーティリティは直接効果がありません。これらのコンポーネントの色はテーマ設定やクラスの直接編集でカスタマイズします。

## 関連ユーティリティ

*   `background-color`, `border-color`, `text-color`: 他のカラーユーティリティ。
*   `@tailwindcss/forms` プラグイン: フォーム要素に基本的なスタイルを提供し、カスタマイズしやすくします。

## 公式ドキュメント参照
*   [Tailwind CSS: Accent Color](https://tailwindcss.com/docs/accent-color)
*   [MDN: accent-color](https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color)
*   [Can I use: accent-color](https://caniuse.com/css-accent-color) (ブラウザサポート状況)
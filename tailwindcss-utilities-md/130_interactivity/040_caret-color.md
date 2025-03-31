## タイトル
title: Interactivity: Caret Color (キャレットの色)

## タグ
tags: ["tailwindcss", "utilities", "interactivity", "caret-color", "caret", "form", "input", "textarea", "color"]

## 概要
`caret-{color}` ユーティリティは、`<input>` や `<textarea>` などの編集可能な要素に表示されるテキスト入力カーソル (キャレット) の色を設定します。CSS の `caret-color` プロパティに対応します。

これにより、フォーム入力フィールドのブランドカラーやデザインに合わせて、キャレットの色をカスタマイズできます。

## 基本的な使い方とパラメータ

`caret-{color}-{shade}` または `caret-{keyword}` の形式でクラスを指定します。値は Tailwind のカラーパレット、`inherit`, `current`, `transparent` を使用できます。

*   **`caret-inherit`**: 親要素のキャレット色を継承。
*   **`caret-current`**: 要素のテキスト色 (`color`) と同じ色を使用。
*   **`caret-transparent`**: 透明なキャレット (カーソルが見えなくなる)。
*   **`caret-black`, `caret-white`**
*   **`caret-slate-500`, `caret-red-600`, `caret-emerald-400` など**: 色名 + シェード。

**デフォルトの色:** `caret-color` が指定されていない場合、通常は要素のテキスト色 (`color`) が使用されます (`caret-current` と同様)。

```html
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
  <div class="space-y-1">
    <label for="input-default" class="text-sm font-medium">Default Caret</label>
    <input type="text" id="input-default" value="Focus here (Default caret color)" class="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
  </div>
  <div class="space-y-1">
    <label for="input-pink" class="text-sm font-medium">Pink Caret</label>
    <input type="text" id="input-pink" value="Focus here (Pink caret)" class="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 caret-pink-500">
  </div>
   <div class="space-y-1">
    <label for="input-teal" class="text-sm font-medium">Teal Caret</label>
    <textarea id="input-teal" rows="3" class="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 caret-teal-600">Focus inside this textarea (Teal caret)</textarea>
  </div>
   <div class="space-y-1">
    <label for="input-current" class="text-sm font-medium text-purple-600 dark:text-purple-400">Current Color Caret</label>
    <input type="text" id="input-current" value="Focus here (Purple caret)" class="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 caret-current text-purple-600 dark:text-purple-400">
  </div>
   <div class="space-y-1">
    <label for="input-transparent" class="text-sm font-medium">Transparent Caret</label>
    <input type="text" id="input-transparent" value="Focus here (Invisible caret)" class="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 caret-transparent">
  </div>
</div>
```

## 不透明度の変更

`/{opacity}` 修飾子を使って、キャレットの色の不透明度を変更できます。

```html
<input type="text" class="caret-blue-500/50 ..."> {/* 50% Opacity Blue Caret */}
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてキャレットの色を変更できますが、一般的ではありません。

```html
<input type="text" class="caret-black md:caret-blue-500 ...">
```

## 状態修飾子

`focus:` 修飾子と組み合わせて、フォーカス時にキャレットの色を変更することができます。`dark:` でダークモード時の色を調整することも可能です。

```html
<input type="text" class="caret-transparent focus:caret-indigo-500 dark:focus:caret-indigo-400 ...">
{/* Initially transparent, becomes indigo on focus */}
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.caretColor` (または `theme.caretColor`) でカスタムカラーを追加できます。通常は `theme.colors` を継承するため、`colors` で定義したカスタムカラーは `caret-*` でも利用可能です。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#ff5733',
      },
      caretColor: theme => ({
        ...theme('colors'), // colors を継承
        'primary': theme('colors.blue.600'), // caret-primary を追加
      })
    },
  },
}
```

```html
<input type="text" class="caret-primary ...">
<input type="text" class="caret-brand ...">
```

## 任意の値 (Arbitrary Values)

任意の色コードを使ってキャレットの色を直接指定することも可能です。

```html
<input type="text" class="caret-[#ff8800] ...">
<input type="text" class="caret-[var(--input-caret-color)]/[.8] ..."> {/* CSS 変数と不透明度 */}
```

## 注意点

*   `caret-color` は、テキストを入力または編集できる要素 (`<input>`, `<textarea>`, `contenteditable` 属性を持つ要素など) にのみ効果があります。
*   キャレットの形状や点滅の仕方はブラウザや OS に依存し、`caret-color` では変更できません。
*   キャレットが見えにくい色にならないよう、背景色とのコントラストに注意してください。

## 関連ユーティリティ

*   `text-color`: テキストの色。
*   `accent-color`: フォームコントロールのアクセントカラー (チェックボックスなど)。
*   `background-color`, `border-color`: 他のカラーユーティリティ。

## 公式ドキュメント参照
*   [Tailwind CSS: Caret Color](https://tailwindcss.com/docs/caret-color)
*   [MDN: caret-color](https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color)
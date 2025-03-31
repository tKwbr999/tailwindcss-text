## タイトル
title: Borders: Ring Width (リングの太さ)

## タグ
tags: ["tailwindcss", "utilities", "borders", "ring", "ring-width", "focus", "shadow", "outline", "accessibility"]

## 概要
`ring`, `ring-{width}`, `ring-inset` ユーティリティは、要素の外側 (または内側) に `box-shadow` を使ってソリッドな色のリング (輪郭線) を作成します。CSS の `box-shadow` プロパティを `--tw-ring-offset-shadow`, `--tw-ring-shadow`, `--tw-shadow` CSS 変数と組み合わせて制御します。

これは `outline` の代替として、特にフォーカス状態を視覚的に示すためによく使用されます。`outline` と異なり、`border-radius` に追従して角が丸くなる利点があります。

## 基本的な使い方とパラメータ

*   **`ring`**: デフォルトの太さ (通常 3px) のリングを作成します。`ring-blue-500` のように色ユーティリティと組み合わせて使用します。
*   **`ring-0`**: `box-shadow: none;` (リングなし)
*   **`ring-1`**: 1px の太さのリング。
*   **`ring-2`**: 2px の太さのリング。
*   **`ring-4`**: 4px の太さのリング。
*   **`ring-8`**: 8px の太さのリング。
*   **`ring-inset`**: リングを要素の**内側**に描画します (`--tw-ring-inset: inset;`)。

リングを表示するには、通常、太さ (`ring`, `ring-2` など) と色 (`ring-{color}`) を指定する必要があります。

```html
<div class="grid grid-cols-2 sm:grid-cols-3 gap-6 p-4">
  {/* フォーカス時にリングを表示 */}
  <button class="focus:outline-none focus:ring focus:ring-blue-500 p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Focus Ring (Default)</button>
  <button class="focus:outline-none focus:ring-1 focus:ring-green-500 p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Focus Ring 1</button>
  <button class="focus:outline-none focus:ring-2 focus:ring-red-500 p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Focus Ring 2</button>
  <button class="focus:outline-none focus:ring-4 focus:ring-purple-500 p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Focus Ring 4</button>
  <button class="focus:outline-none focus:ring-8 focus:ring-pink-500 p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Focus Ring 8</button>
  <button class="focus:outline-none focus:ring-0 focus:border-2 focus:border-yellow-500 p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Focus Ring 0 (Border instead)</button>

  {/* 内側リング */}
  <button class="focus:outline-none focus:ring-4 focus:ring-inset focus:ring-cyan-500 p-4 rounded-lg bg-gray-200 dark:bg-gray-700">Focus Ring Inset</button>
</div>
```
**注意:**
*   `ring` クラスはデフォルトの太さ (通常 3px) を設定します。`ring-1`, `ring-2` などは明示的な太さを設定します。
*   `ring-0` はリングを無効化します。
*   リングの色は `ring-{color}` で指定します。
*   リングのオフセット (要素との隙間) は `ring-offset-{width}` で調整できます。

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてリングの太さを変更できます。

```html
<button class="focus:ring-2 md:focus:ring-4 ...">
  Ring width changes on medium screens.
</button>
```

## 状態修飾子

`focus:`, `focus-visible:`, `focus-within:` などの状態修飾子と組み合わせて、フォーカス時にリングを表示するのが最も一般的な使い方です。`hover:` など他の状態でも使用可能です。

```html
<input type="text" class="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded p-2 border dark:border-gray-700 ...">
```

## カスタマイズ (`tailwind.config.js`)

`tailwind.config.js` の `theme.extend.ringWidth` (または `theme.ringWidth`) でカスタムの太さを追加できます。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      ringWidth: {
        'DEFAULT': '3px', // `ring` クラスのデフォルト値
        '0': '0px',
        '1': '1px',
        '2': '2px',
        '3': '3px', // ring-3 クラスを追加
        '4': '4px',
        '8': '8px',
        '12': '12px', // ring-12 クラスを追加
      },
    },
  },
}
```

```html
<button class="focus:ring-3 ...">Custom ring width 3px</button>
<button class="focus:ring-12 ...">Custom ring width 12px</button>
```

## 任意の値 (Arbitrary Values)

任意の値を使ってリングの太さを直接指定することも可能です。

```html
<button class="focus:ring-[5px] ...">Arbitrary ring width 5px</button>
```

## `outline` と `ring` の違い

| 特徴             | `outline-*`                     | `ring-*` (`box-shadow`)         |
| :--------------- | :------------------------------ | :------------------------------ |
| **CSS プロパティ** | `outline`                       | `box-shadow`                    |
| **角の形状**     | 角丸に追従しない場合がある      | 角丸 (`border-radius`) に追従する |
| **オフセット**   | `outline-offset` で制御         | `ring-offset-*` で制御          |
| **レイアウト**   | 影響しない                      | 影響しない                      |
| **重ね合わせ**   | ボーダーの上に描画される        | ボーダーの下に描画される        |
| **推奨用途**     | 基本的なフォーカス表示          | 角丸に沿ったフォーカス表示、複数のリング効果 |

一般的に、角丸要素のフォーカス表示には `ring-*` の方が見た目が自然になるため推奨されます。

## 注意点

*   リングを表示するには、太さ (`ring-*`) と色 (`ring-{color}`) を指定する必要があります。
*   `ring-inset` を使用すると、リングは要素の内側に描画されます。
*   リングと要素の間に隙間を開けたい場合は `ring-offset-{width}` と `ring-offset-{color}` を使用します。

## 関連ユーティリティ

*   `ring-color`: リングの色。
*   `ring-offset-width`: リングと要素の間のオフセット幅。
*   `ring-offset-color`: リングオフセット部分の色 (通常は背景色に合わせる)。
*   `outline-width`, `outline-color`, `outline-style`, `outline-offset`: アウトライン関連。
*   `box-shadow` (`shadow-*`): 一般的なボックスシャドウ。

## 公式ドキュメント参照
*   [Tailwind CSS: Ring Width](https://tailwindcss.com/docs/ring-width)
*   [Tailwind CSS: Ring Color](https://tailwindcss.com/docs/ring-color)
*   [Tailwind CSS: Ring Offset Width](https://tailwindcss.com/docs/ring-offset-width)
*   [Tailwind CSS: Ring Offset Color](https://tailwindcss.com/docs/ring-offset-color)
*   [MDN: box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) (リングの実装に使われている)
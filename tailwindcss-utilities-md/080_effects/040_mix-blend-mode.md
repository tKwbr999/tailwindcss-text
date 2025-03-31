## タイトル
title: Effects: Mix Blend Mode (要素の混合モード)

## タグ
tags: ["tailwindcss", "utilities", "effects", "mix-blend-mode", "blend", "color", "multiply", "screen", "overlay", "darken", "lighten", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]

## 概要
`mix-blend-{mode}` ユーティリティは、要素のコンテンツが、その要素の**背景**にあるコンテンツとどのように色が混合 (ブレンド) されるかを制御します。CSS の `mix-blend-mode` プロパティに対応します。

これにより、画像やテキストを背景と重ね合わせて、Photoshop のレイヤーブレンドモードのような効果を作成できます。

## 基本的な使い方とパラメータ

*   **`mix-blend-normal`**: デフォルト。混合しません。
*   **`mix-blend-multiply`**: 色を掛け合わせます。結果は常に暗くなります。白は透明になります。
*   **`mix-blend-screen`**: 色を反転して掛け合わせ、さらに反転します。結果は常に明るくなります。黒は透明になります。
*   **`mix-blend-overlay`**: `multiply` と `screen` を組み合わせたような効果。暗い色はより暗く、明るい色はより明るくなります。
*   **`mix-blend-darken`**: 各カラーチャンネルで暗い方の色を選択します。
*   **`mix-blend-lighten`**: 各カラーチャンネルで明るい方の色を選択します。
*   **`mix-blend-color-dodge`**: 下のレイヤーの色を明るくして、上のレイヤーの色を反映させます。
*   **`mix-blend-color-burn`**: 下のレイヤーの色を暗くして、上のレイヤーの色を反映させます。
*   **`mix-blend-hard-light`**: `multiply` または `screen` の効果を、上のレイヤーの色に応じて強く適用します。
*   **`mix-blend-soft-light`**: `darken` または `lighten` の効果を、上のレイヤーの色に応じて柔らかく適用します。
*   **`mix-blend-difference`**: 明るい方の色から暗い方の色を引きます。白は反転、黒は変化なし。
*   **`mix-blend-exclusion`**: `difference` に似ていますが、コントラストが低くなります。
*   **`mix-blend-hue`**: 下のレイヤーの輝度と彩度を維持し、上のレイヤーの色相を使用します。
*   **`mix-blend-saturation`**: 下のレイヤーの輝度と色相を維持し、上のレイヤーの彩度を使用します。
*   **`mix-blend-color`**: 下のレイヤーの輝度を維持し、上のレイヤーの色相と彩度を使用します。
*   **`mix-blend-luminosity`**: 下のレイヤーの色相と彩度を維持し、上のレイヤーの輝度を使用します。
*   **`mix-blend-plus-lighter`**: (v3.2+) 両方のレイヤーの色を加算します。

```html
<div class="relative p-4">
  {/* 背景画像 */}
  <img src="https://via.placeholder.com/400x200/cccccc/000000?text=Background" class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="Background">

  <div class="relative grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white font-bold text-lg">
    <div class="mix-blend-multiply bg-blue-500 p-8 rounded-lg">Multiply</div>
    <div class="mix-blend-screen bg-blue-500 p-8 rounded-lg">Screen</div>
    <div class="mix-blend-overlay bg-blue-500 p-8 rounded-lg">Overlay</div>
    <div class="mix-blend-darken bg-blue-500 p-8 rounded-lg">Darken</div>
    <div class="mix-blend-lighten bg-blue-500 p-8 rounded-lg">Lighten</div>
    <div class="mix-blend-color-dodge bg-blue-500 p-8 rounded-lg">Color Dodge</div>
    <div class="mix-blend-color-burn bg-blue-500 p-8 rounded-lg">Color Burn</div>
    <div class="mix-blend-hard-light bg-blue-500 p-8 rounded-lg">Hard Light</div>
    <div class="mix-blend-soft-light bg-blue-500 p-8 rounded-lg">Soft Light</div>
    <div class="mix-blend-difference bg-blue-500 p-8 rounded-lg">Difference</div>
    <div class="mix-blend-exclusion bg-blue-500 p-8 rounded-lg">Exclusion</div>
    <div class="mix-blend-hue bg-blue-500 p-8 rounded-lg">Hue</div>
    <div class="mix-blend-saturation bg-blue-500 p-8 rounded-lg">Saturation</div>
    <div class="mix-blend-color bg-blue-500 p-8 rounded-lg">Color</div>
    <div class="mix-blend-luminosity bg-blue-500 p-8 rounded-lg">Luminosity</div>
    <div class="mix-blend-plus-lighter bg-blue-500 p-8 rounded-lg">Plus Lighter</div>
  </div>
</div>
```

## レスポンシブ

ブレークポイントプレフィックス (`sm:`, `md:` など) を使って、画面サイズに応じてブレンドモードを変更できます。

```html
<div class="mix-blend-normal md:mix-blend-multiply ...">
  Blend mode changes on medium screens.
</div>
```

## 状態修飾子

`hover:`, `focus:`, `dark:` などと組み合わせて、インタラクションやモードに応じてブレンドモードを変更できます。

```html
<div class="mix-blend-screen hover:mix-blend-overlay transition-all ...">
  Blend mode changes on hover.
</div>
```

## 注意点

*   `mix-blend-mode` が効果を発揮するには、要素が重なり合っている必要があります。通常、`position: absolute` や `position: fixed`、または Flexbox/Grid レイアウトで要素を重ねて配置します。
*   要素が新しいスタッキングコンテキストを作成する場合 (`opacity` が 1 未満、`transform`, `filter` などが適用されている場合)、`mix-blend-mode` はそのスタッキングコンテキスト内の要素とのみ混合されます。意図しない結果になる場合は、`isolation: isolate;` (`isolate` クラス) を親要素に追加してスタッキングコンテキストを分離することを検討してください。
*   ブラウザのサポート状況は良好ですが、一部の古いブラウザではサポートされていないモードがあります。
*   パフォーマンス: 複雑なブレンドモードは、特にアニメーションと組み合わせると、ブラウザのレンダリング負荷を高める可能性があります。

## 関連ユーティリティ

*   `background-blend-mode` (`bg-blend-*`): 要素の**背景レイヤー同士** (背景色と背景画像など) の混合モードを制御します。
*   `isolation` (`isolate`): 新しいスタッキングコンテキストを作成し、ブレンドモードの影響範囲を限定します。
*   `opacity`: 要素の不透明度。

## 公式ドキュメント参照
*   [Tailwind CSS: Mix Blend Mode](https://tailwindcss.com/docs/mix-blend-mode)
*   [MDN: mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode)
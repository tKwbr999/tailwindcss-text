## タイトル
title: Layout: Isolation (スタッキングコンテキストの分離)

## タグ
tags: ["tailwindcss", "utilities", "layout", "isolation", "z-index", "stacking context", "mix-blend-mode"]

## 概要
`isolate` および `isolation-auto` ユーティリティは、要素が新しいスタッキングコンテキスト (stacking context) を作成するかどうかを制御します。CSS の `isolation` プロパティに対応します。

主に、`z-index` や `mix-blend-mode` を使用する際に、要素の重なり順やブレンドモードの適用範囲をその要素とその子孫に限定したい場合に役立ちます。

## 基本的な使い方とパラメータ

*   **`isolate`**: 要素に対して新しいスタッキングコンテキストを作成します (`isolation: isolate;`)。この要素内の `z-index` は、この要素の外にある要素とは独立して計算されます。また、`mix-blend-mode` の効果もこの要素の範囲に限定されます。
*   **`isolation-auto`**: デフォルト。新しいスタッキングコンテキストを作成しません (`isolation: auto;`)。

```html
<div class="relative p-4 bg-gray-100 dark:bg-gray-800 rounded">
  <h3 class="text-lg font-semibold mb-2">Isolation Example</h3>

  <div class="relative h-40"> {/* 親要素に relative が必要 */}

    {/* 背景要素 */}
    <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 opacity-75"></div>

    {/* isolation-auto (デフォルト) の場合 */}
    <div class="isolation-auto absolute inset-4 flex items-center justify-center">
      <div class="w-20 h-20 bg-pink-500 rounded-full mix-blend-multiply"></div> {/* 背景と混色 */}
      <div class="absolute -top-2 -left-2 w-16 h-16 bg-yellow-300 rounded z-10">Z=10 (Auto)</div> {/* z-index はグローバル */}
    </div>

    {/* isolate を適用した場合 */}
    <div class="isolate absolute inset-x-4 bottom-4 h-24 bg-white dark:bg-gray-700 p-2 rounded shadow-lg">
      <p class="text-xs mb-1">Inside Isolate:</p>
      <div class="relative h-12">
        <div class="absolute top-0 left-0 w-16 h-16 bg-lime-500 rounded-full mix-blend-screen"></div> {/* この要素の背景と混色 */}
        {/* この z-index は isolate コンテナ内でのみ有効 */}
        <div class="absolute top-2 left-8 w-12 h-12 bg-orange-400 rounded z-10">Z=10 (Isolated)</div>
      </div>
    </div>

     {/* isolate コンテナ外の要素 (z-index が低いが上に表示される可能性がある) */}
     <div class="absolute bottom-2 right-2 w-16 h-16 bg-red-500 rounded z-0">Z=0 (Outside)</div>

  </div>
</div>
```

## 解説

**スタッキングコンテキスト (Stacking Context)**

HTML 要素は、`z-index` プロパティや特定の CSS プロパティ (`position: relative/absolute/fixed/sticky` で `z-index` が `auto` 以外、`opacity` が 1 未満、`transform`, `filter`, `mix-blend-mode` など) によって、階層的な「スタッキングコンテキスト」を形成します。

同じスタッキングコンテキスト内では、`z-index` の値が大きい要素が手前に表示されます。しかし、異なるスタッキングコンテキスト間では、`z-index` の値に関わらず、親のスタッキングコンテキストの重なり順が優先されます。

**`isolate` の効果**

`isolate` クラス (`isolation: isolate;`) を要素に適用すると、その要素は**強制的に新しいスタッキングコンテキストを作成**します。

*   **`z-index` のスコープ:** `isolate` を適用した要素内部の `z-index` は、その要素の範囲内でのみ有効になります。外部の要素の `z-index` とは比較されません。これにより、コンポーネント内部の `z-index` 管理が容易になり、意図しない重なりを防ぐことができます。
*   **`mix-blend-mode` の適用範囲:** `mix-blend-mode` (要素とその背景の色の混合方法を指定) の効果が、`isolate` を適用した要素とその背景に限定されます。これがないと、要素はスタッキングコンテキスト内の他の要素とも混色してしまう可能性があります。

**ユースケース**

*   再利用可能なコンポーネントを作成する際に、内部の `z-index` が外部のレイアウトに影響を与えないようにしたい場合。
*   特定の要素グループに対して `mix-blend-mode` を適用し、その効果をそのグループ内に限定したい場合。
*   複雑な `z-index` の重なり順の問題をデバッグ・解決したい場合。

## レスポンシブ

`isolation` をレスポンシブに変更することは稀ですが、技術的には可能です。

```html
<div class="isolation-auto md:isolate ...">
  Isolation behavior changes on medium screens.
</div>
```

## 注意点

*   `isolation` は比較的最近の CSS プロパティであり、古いブラウザではサポートされていない可能性があります。
*   `z-index` や `mix-blend-mode` を使用しない限り、通常はこのユーティリティを意識する必要はありません。
*   新しいスタッキングコンテキストを作成する他の CSS プロパティ (`opacity`, `transform` など) でも同様の効果が得られる場合がありますが、`isolate` はスタッキングコンテキストの作成のみを目的とするため、意図が明確になります。

## 関連ユーティリティ

*   `z-index` (`z-*`): 要素の重なり順を制御します。
*   `mix-blend-mode` (`mix-blend-*`): 要素とその背景の混色モードを指定します。
*   `position` (`relative`, `absolute` など): 要素の配置方法を指定します (スタッキングコンテキストの作成に関与)。
*   `opacity` (`opacity-*`): 要素の不透明度を指定します (スタッキングコンテキストの作成に関与)。

## 公式ドキュメント参照
*   [Tailwind CSS: Isolation](https://tailwindcss.com/docs/isolation)
*   [MDN: isolation](https://developer.mozilla.org/en-US/docs/Web/CSS/isolation)
*   [MDN: The stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
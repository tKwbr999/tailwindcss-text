import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// 背景ブレンドモードの効果を示すため、背景色と背景画像 (グラデーションを使用) を重ねます。

const BgBlendModeExample: React.FC<{ blendMode: string; label: string }> = ({
  blendMode,
  label,
}) => {
  // const imageUrl =
  //   'url("https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80")'; // 山の画像例
  return (
    <div
      className={`h-32 w-full rounded bg-blue-500 ${blendMode} bg-center bg-cover relative`} // relative を追加
    >
      <span className="text-xs p-1 bg-black/70 text-white rounded-sm absolute top-1 left-1">
        {label} ({blendMode})
      </span>
      {/* 背景色 (青) と背景画像 (山) が指定されたモードでブレンドされる */}
    </div>
  );
};

// ページコンポーネント本体
const BackgroundBlendModePage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Effects: Background Blend Mode ';
const jaTitle = '背景ブレンドモード';
  const links = [
    {
      title: 'Tailwind CSS: Background Blend Mode',
      url: 'https://tailwindcss.com/docs/background-blend-mode',
    },
    {
      title: 'MDN: background-blend-mode',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode',
    },
  ];

  // // コードスニペットを定義 (代表例)
  // const blendNormalHtml = `<div class="bg-blend-normal bg-blue-500 bg-center bg-cover ..." style="background-image: url(...)">...</div>`; // Default
  // const blendMultiplyHtml = `<div class="bg-blend-multiply bg-blue-500 bg-center bg-cover ..." style="background-image: url(...)">...</div>`;
  // const blendScreenHtml = `<div class="bg-blend-screen bg-blue-500 bg-center bg-cover ..." style="background-image: url(...)">...</div>`;
  // const blendOverlayHtml = `<div class="bg-blend-overlay bg-blue-500 bg-center bg-cover ..." style="background-image: url(...)">...</div>`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Background Blend Mode - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Background Blend Mode utility in Tailwind CSS. Examples and usage details for Background Blend Mode." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の背景レイヤー (背景色と背景画像など) が互いにどのように混合 (ブレンド)
              されるかを設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>background-blend-mode</code> プロパティを制御します。
            </p>
            <p>
              これは <code>mix-blend-mode</code> と似ていますが、<code>mix-blend-mode</code>{' '}
              が要素とその下のレイヤーをブレンドするのに対し、<code>background-blend-mode</code>{' '}
              は同じ要素内の背景レイヤー同士をブレンドします。
            </p>
          </div>
        </section>
        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            基本的な使い方とパラメータ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              <code>bg-blend-{'{mode}'}</code>{' '}
              の形式でクラスを要素に適用します。要素には背景色と背景画像の両方が設定されている必要があります。
            </p>
            <p>
              利用可能なモード (<code>mix-blend-mode</code> と同じ):
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4 columns-2">
              <li>
                <strong>
                  <code>bg-blend-normal</code>
                </strong>
                : デフォルト。ブレンドしません。
              </li>
              <li>
                <strong>
                  <code>bg-blend-multiply</code>
                </strong>
                : 乗算。
              </li>
              <li>
                <strong>
                  <code>bg-blend-screen</code>
                </strong>
                : スクリーン。
              </li>
              <li>
                <strong>
                  <code>bg-blend-overlay</code>
                </strong>
                : オーバーレイ。
              </li>
              <li>
                <strong>
                  <code>bg-blend-darken</code>
                </strong>
                : 比較 (暗)。
              </li>
              <li>
                <strong>
                  <code>bg-blend-lighten</code>
                </strong>
                : 比較 (明)。
              </li>
              <li>
                <strong>
                  <code>bg-blend-color-dodge</code>
                </strong>
                : 覆い焼きカラー。
              </li>
              <li>
                <strong>
                  <code>bg-blend-color-burn</code>
                </strong>
                : 焼き込みカラー。
              </li>
              <li>
                <strong>
                  <code>bg-blend-hard-light</code>
                </strong>
                : ハードライト。
              </li>
              <li>
                <strong>
                  <code>bg-blend-soft-light</code>
                </strong>
                : ソフトライト。
              </li>
              <li>
                <strong>
                  <code>bg-blend-difference</code>
                </strong>
                : 差の絶対値。
              </li>
              <li>
                <strong>
                  <code>bg-blend-exclusion</code>
                </strong>
                : 除外。
              </li>
              <li>
                <strong>
                  <code>bg-blend-hue</code>
                </strong>
                : 色相。
              </li>
              <li>
                <strong>
                  <code>bg-blend-saturation</code>
                </strong>
                : 彩度。
              </li>
              <li>
                <strong>
                  <code>bg-blend-color</code>
                </strong>
                : カラー。
              </li>
              <li>
                <strong>
                  <code>bg-blend-luminosity</code>
                </strong>
                : 輝度。
              </li>
              {/* v3.1+ */}
              {/* <li><strong><code>bg-blend-plus-lighter</code></strong>: 加算 (より明るく)。 (v3.1+)</li> */}{' '}
              {/* bg-blend には plus-lighter は通常ない */}
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる背景ブレンドモードの適用例。青い背景色と山の背景画像をブレンドしています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <BgBlendModeExample blendMode="bg-blend-normal" label="Normal" />
            <BgBlendModeExample blendMode="bg-blend-multiply" label="Multiply" />
            <BgBlendModeExample blendMode="bg-blend-screen" label="Screen" />
            <BgBlendModeExample blendMode="bg-blend-overlay" label="Overlay" />
            <BgBlendModeExample blendMode="bg-blend-darken" label="Darken" />
            <BgBlendModeExample blendMode="bg-blend-lighten" label="Lighten" />
            <BgBlendModeExample blendMode="bg-blend-color-dodge" label="Color Dodge" />
            <BgBlendModeExample blendMode="bg-blend-color-burn" label="Color Burn" />
            <BgBlendModeExample blendMode="bg-blend-difference" label="Difference" />
            <BgBlendModeExample blendMode="bg-blend-exclusion" label="Exclusion" />
            <BgBlendModeExample blendMode="bg-blend-hue" label="Hue" />
            <BgBlendModeExample blendMode="bg-blend-saturation" label="Saturation" />
            <BgBlendModeExample blendMode="bg-blend-color" label="Color" />
            <BgBlendModeExample blendMode="bg-blend-luminosity" label="Luminosity" />
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:bg-blend-screen</code> など) や状態 (
            <code>hover:bg-blend-multiply</code> など) に応じて背景ブレンドモードを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時にブレンドモードを変更して視覚的な効果を与えることができます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="bg-blue-500 bg-blend-normal hover:bg-blend-multiply ..." style="background-image: url(...)">
  Hover Me
</div>
              `.trim()}
              </code>
            </pre>
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <code>background-blend-mode</code> は、要素に複数の背景レイヤー
                (通常は背景色と背景画像、または複数の背景画像) がある場合にのみ効果があります。
              </li>
              <li>効果は、ブレンドされる色や画像によって大きく異なります。</li>
              <li>ブラウザのサポート状況、特に古いブラウザでは注意が必要です。</li>
            </ul>
          </div>
        </section>
        {/* 関連ユーティリティ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            関連ユーティリティ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <code>mix-blend-mode</code> (<code>mix-blend-*</code>):
                要素とその下のレイヤーとのブレンドモードを設定します。
              </li>
              <li>
                <code>background-color</code> (<code>bg-*</code>): 背景色を設定します。
              </li>
              <li>
                <code>background-image</code> (<code>bg-*</code>):
                背景画像やグラデーションを設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default BackgroundBlendModePage;

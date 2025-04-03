import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// 背景要素の上に半透明の要素を重ねて効果を示します。

const BackdropBlurExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'; // 山の画像例
  return (
    <div className="relative h-48 w-full rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-px">
        {' '}
        {/* gap-px で境界線を表現 */}
        <div className="backdrop-blur-none bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            None
          </span>
        </div>
        <div className="backdrop-blur-sm bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            Small
          </span>
        </div>
        <div className="backdrop-blur bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            Default
          </span>
        </div>
        <div className="backdrop-blur-md bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            Medium
          </span>
        </div>
        <div className="backdrop-blur-lg bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            Large
          </span>
        </div>
        <div className="backdrop-blur-xl bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            XL
          </span>
        </div>
        <div className="backdrop-blur-2xl bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            2XL
          </span>
        </div>
        <div className="backdrop-blur-3xl bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            3XL
          </span>
        </div>
      </div>
    </div>
  );
};

const ArbitraryBackdropBlurExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80';
  return (
    <div className="relative h-32 w-64 rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30 flex items-center justify-center p-2">
        <span className="text-black text-sm font-semibold">任意の値: backdrop-blur-[2px]</span>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const BackdropBlurPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Filters: Backdrop Blur (背景ぼかし)';
  const links = [
    {
      title: 'Tailwind CSS: Backdrop Blur',
      url: 'https://tailwindcss.com/docs/backdrop-blur',
    },
    {
      title: 'MDN: backdrop-filter',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter',
    },
  ];

  // コードスニペットを定義
  const backdropBlurHtml = `
<div class="backdrop-blur-none ...">...</div> {/* Default */}
<div class="backdrop-blur-sm ...">...</div>
<div class="backdrop-blur ...">...</div>
<div class="backdrop-blur-md ...">...</div>
<div class="backdrop-blur-lg ...">...</div>
<div class="backdrop-blur-xl ...">...</div>
<div class="backdrop-blur-2xl ...">...</div>
<div class="backdrop-blur-3xl ...">...</div>
  `.trim();
  const arbitraryBackdropBlurHtml = `<div class="backdrop-blur-[2px] ...">...</div>`;

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Backdrop Blur - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Backdrop Blur utility in Tailwind CSS. Examples and usage details for Backdrop Blur." />
        {/* OGP タグ */}
        <meta property="og:title" content="Backdrop Blur - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Backdrop Blur utility in Tailwind CSS. Examples and usage details for Backdrop Blur." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/filters/backdrop-blur" />
        {/* <meta property="og:image" content="[画像のURL]" /> */} {/* 必要に応じて画像URLを設定 */}
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の背後にあるコンテンツにぼかし (blur)
              フィルターを適用するためのユーティリティクラスです。すりガラスのような効果を作成するのに使用されます。
            </p>
            <p>
              CSS の <code>backdrop-filter: blur();</code> プロパティを制御します。
            </p>
            <p>
              <strong>注意:</strong>{' '}
              この効果を有効にするには、要素に透明または半透明の背景が必要です (例:{' '}
              <code>bg-white/50</code>)。
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
              <code>backdrop-blur-{'{amount}'}</code>{' '}
              の形式でクラスを要素に適用します。要素には透明度のある背景色が必要です。
            </p>
            <p>
              デフォルトで用意されているぼかし量 (<code>blur-*</code> と同じキー):
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>backdrop-blur-none</code>
                </strong>{' '}
                (0px - デフォルト)
              </li>
              <li>
                <strong>
                  <code>backdrop-blur-sm</code>
                </strong>{' '}
                (4px)
              </li>
              <li>
                <strong>
                  <code>backdrop-blur</code>
                </strong>{' '}
                (8px - デフォルトの <code>backdrop-blur</code> クラス)
              </li>
              <li>
                <strong>
                  <code>backdrop-blur-md</code>
                </strong>{' '}
                (12px)
              </li>
              <li>
                <strong>
                  <code>backdrop-blur-lg</code>
                </strong>{' '}
                (16px)
              </li>
              <li>
                <strong>
                  <code>backdrop-blur-xl</code>
                </strong>{' '}
                (24px)
              </li>
              <li>
                <strong>
                  <code>backdrop-blur-2xl</code>
                </strong>{' '}
                (40px)
              </li>
              <li>
                <strong>
                  <code>backdrop-blur-3xl</code>
                </strong>{' '}
                (64px)
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>backdrop-blur-[2px]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる背景ぼかし量の適用例。半透明の白い背景 (bg-white/30) を使用。
          </p>
          <div className="space-y-6">
            {/* Standard Backdrop Blur */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準の背景ぼかし量
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{backdropBlurHtml}</code>
              </pre>
              <BackdropBlurExample />
            </div>
            {/* Arbitrary Backdrop Blur */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryBackdropBlurHtml}</code>
              </pre>
              <ArbitraryBackdropBlurExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:backdrop-blur-lg</code> など) や状態 (
            <code>hover:backdrop-blur-sm</code> など) に応じて背景ぼかし効果を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時に背景のぼかしを弱めるインタラクションを作成できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="relative h-32 w-64 ...">
  <img src="..." class="absolute ...">
  <div class="absolute inset-0 backdrop-blur hover:backdrop-blur-sm transition duration-300 bg-white/30 ...">
    Hover Me
  </div>
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
                <code>backdrop-filter</code>{' '}
                プロパティは、すべてのブラウザで完全にサポートされているわけではありません。特に古いブラウザでは注意が必要です。
              </li>
              <li>
                効果を視認するためには、要素に透明または半透明の背景 (例: <code>bg-opacity-*</code>,{' '}
                <code>bg-white/50</code>) が必要です。
              </li>
              <li>
                複数の <code>backdrop-filter</code> ユーティリティ (例:{' '}
                <code>backdrop-blur-md</code>, <code>backdrop-brightness-50</code>)
                を組み合わせることができます。
              </li>
              <li>
                パフォーマンス:
                過度な背景フィルターや多数の要素への適用は、パフォーマンスに影響を与える可能性があります。
              </li>
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
                <code>backdrop-filter</code>:
                他の背景フィルターユーティリティを有効にするための基本クラス。
                <code>backdrop-blur-*</code> は自動的にこれを有効にします。
              </li>
              <li>
                <code>filter</code> (<code>blur-*</code> など):
                要素自体とその内容にフィルターを適用します。
              </li>
              <li>
                他の背景フィルターユーティリティ: <code>backdrop-brightness</code>,{' '}
                <code>backdrop-contrast</code>, <code>backdrop-grayscale</code>,{' '}
                <code>backdrop-hue-rotate</code>, <code>backdrop-invert</code>,{' '}
                <code>backdrop-opacity</code>, <code>backdrop-saturate</code>,{' '}
                <code>backdrop-sepia</code>。
              </li>
              <li>
                <code>background-color</code> と透明度 (<code>bg-opacity-*</code> または{' '}
                <code>bg-color/opacity</code>): 半透明の背景を設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default BackdropBlurPage;

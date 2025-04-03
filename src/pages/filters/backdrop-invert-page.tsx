import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// 背景要素の上に半透明の要素を重ねて効果を示します。

const BackdropInvertExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'; // 山の画像例
  return (
    <div className="relative h-48 w-full rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 grid grid-cols-2 gap-px">
        {' '}
        {/* gap-px で境界線を表現 */}
        <div className="backdrop-invert bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            invert
          </span>
        </div>
        <div className="backdrop-invert-0 bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            invert-0 (Default)
          </span>
        </div>
      </div>
    </div>
  );
};

const ArbitraryBackdropInvertExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80';
  // 任意の値は通常 0 (0%) から 1 (100%)
  return (
    <div className="relative h-32 w-64 rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 backdrop-filter backdrop-invert-[.75] bg-white/30 flex items-center justify-center p-2">
        {/* backdrop-filter が必要になる場合がある */}
        <span className="text-black text-sm font-semibold">任意の値: backdrop-invert-[.75]</span>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const BackdropInvertPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Filters: Backdrop Invert (背景の色反転)';
  const links = [
    {
      title: 'Tailwind CSS: Backdrop Invert',
      url: 'https://tailwindcss.com/docs/backdrop-invert',
    },
    {
      title: 'MDN: backdrop-filter',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter',
    },
    {
      title: 'MDN: filter: invert() (関連)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert',
    },
  ];

  // コードスニペットを定義
  const backdropInvertHtml = `
<div class="backdrop-invert ...">...</div>   {/* 100% invert */}
<div class="backdrop-invert-0 ...">...</div> {/* 0% invert (Default) */}
  `.trim();
  const arbitraryBackdropInvertHtml = `<div class="backdrop-filter backdrop-invert-[.75] ...">...</div> {/* Requires JIT & backdrop-filter enabled */} `;

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Backdrop Invert - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Backdrop Invert utility in Tailwind CSS. Examples and usage details for Backdrop Invert." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の背後にあるコンテンツに色反転 (invert)
              フィルターを適用するためのユーティリティクラスです。背景の色を反転させます。
            </p>
            <p>
              CSS の <code>backdrop-filter: invert();</code> プロパティを制御します。
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
              <code>backdrop-invert</code> または <code>backdrop-invert-0</code>{' '}
              の形式でクラスを要素に適用します。要素には透明度のある背景色が必要です。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>backdrop-invert</code>
                </strong>
                : 背景の色を完全に反転させます (<code>backdrop-filter: invert(100%);</code>)。
              </li>
              <li>
                <strong>
                  <code>backdrop-invert-0</code>
                </strong>
                : 背景の色の反転を行いません (<code>backdrop-filter: invert(0%);</code>
                )。これがデフォルトの挙動です。
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>backdrop-invert-[.75]</code>) も使用可能です (Tailwind JIT
              モード)。0 から 1 の間の数値を指定します (例: 0.75 は 75% 反転)。この場合、
              <code>backdrop-filter</code> ユーティリティも必要になることがあります。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            背景色反転フィルターの適用例。半透明の白い背景 (bg-white/30) を使用。
          </p>
          <div className="space-y-6">
            {/* Standard Backdrop Invert */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準背景色反転
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{backdropInvertHtml}</code>
              </pre>
              <BackdropInvertExample />
            </div>
            {/* Arbitrary Backdrop Invert */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                任意の値 (JIT)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryBackdropInvertHtml}</code>
              </pre>
              <ArbitraryBackdropInvertExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:backdrop-invert</code> など) や状態 (
            <code>hover:backdrop-invert-0</code> など) に応じて背景の色反転効果を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時に背景の色反転を解除する効果を作成できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="relative h-32 w-64 ...">
  <img src="..." class="absolute ...">
  <div class="absolute inset-0 backdrop-invert hover:backdrop-invert-0 transition duration-300 bg-white/30 ...">
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
                プロパティは、すべてのブラウザで完全にサポートされているわけではありません。
              </li>
              <li>効果を視認するためには、要素に透明または半透明の背景が必要です。</li>
              <li>
                複数の <code>backdrop-filter</code> ユーティリティを組み合わせることができます。
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
                <code>backdrop-invert-*</code> は自動的にこれを有効にします。
              </li>
              <li>
                <code>filter</code> (<code>invert</code> など):
                要素自体とその内容にフィルターを適用します。
              </li>
              <li>
                他の背景フィルターユーティリティ: <code>backdrop-blur</code>,{' '}
                <code>backdrop-brightness</code>, <code>backdrop-contrast</code>,{' '}
                <code>backdrop-grayscale</code>, <code>backdrop-hue-rotate</code>,{' '}
                <code>backdrop-opacity</code>, <code>backdrop-saturate</code>,{' '}
                <code>backdrop-sepia</code>。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default BackdropInvertPage;

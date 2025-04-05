import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// 背景要素の上に要素を重ねて効果を示します。背景要素が見えるように、前面要素の背景色自体は透明または半透明である必要があります。

const BackdropOpacityExample: React.FC = () => {
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
        {/* 背景色自体は透明だが、backdrop-opacityで背景が透けて見える度合いが変わる */}
        <div className="backdrop-opacity-100 bg-black/10 flex items-center justify-center p-2 relative">
          <span className="text-white text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            100
          </span>
        </div>
        <div className="backdrop-opacity-75 bg-black/10 flex items-center justify-center p-2 relative">
          <span className="text-white text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            75
          </span>
        </div>
        <div className="backdrop-opacity-50 bg-black/10 flex items-center justify-center p-2 relative">
          <span className="text-white text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            50
          </span>
        </div>
        <div className="backdrop-opacity-25 bg-black/10 flex items-center justify-center p-2 relative">
          <span className="text-white text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            25
          </span>
        </div>
        <div className="backdrop-opacity-10 bg-black/10 flex items-center justify-center p-2 relative">
          <span className="text-white text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            10
          </span>
        </div>
        <div className="backdrop-opacity-0 bg-black/10 flex items-center justify-center p-2 relative">
          <span className="text-white text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

const ArbitraryBackdropOpacityExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80';
  return (
    <div className="relative h-32 w-64 rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 backdrop-filter backdrop-opacity-[.65] bg-black/10 flex items-center justify-center p-2">
        {/* backdrop-filter が必要になる場合がある */}
        <span className="text-white text-sm font-semibold">任意の値: backdrop-opacity-[.65]</span>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const BackdropOpacityPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Filters: Backdrop Opacity ';
const jaTitle = '背景の不透明度';
  const links = [
    {
      title: 'Tailwind CSS: Backdrop Opacity',
      url: 'https://tailwindcss.com/docs/backdrop-opacity',
    },
    {
      title: 'MDN: backdrop-filter',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter',
    },
    {
      title: 'MDN: filter: opacity() (関連)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/opacity',
    },
  ];

  // コードスニペットを定義
  const backdropOpacityHtml = `
<div class="backdrop-opacity-50 bg-white/30 ...">...</div> {/* 50% */}
<div class="backdrop-opacity-25 bg-white/30 ...">...</div> {/* 25% */}
  `.trim();
  const arbitraryBackdropOpacityHtml = `<div class="backdrop-filter backdrop-opacity-[.65] bg-white/30 ...">...</div> {/* Requires JIT & backdrop-filter enabled */} `;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Backdrop Opacity - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Backdrop Opacity utility in Tailwind CSS. Examples and usage details for Backdrop Opacity." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の背後にあるコンテンツに不透明度 (opacity)
              フィルターを適用するためのユーティリティクラスです。背景要素の透明度を調整します。
            </p>
            <p>
              CSS の <code>backdrop-filter: opacity();</code> プロパティを制御します。
            </p>
            <p>
              <strong>注意:</strong>{' '}
              この効果を有効にするには、要素に透明または半透明の背景が必要です (例:{' '}
              <code>bg-white/50</code>)。要素自体の <code>opacity</code> とは異なり、要素の内容
              (テキストなど) の不透明度には影響しません。
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
              <code>backdrop-opacity-{'{amount}'}</code>{' '}
              の形式でクラスを要素に適用します。要素には透明度のある背景色が必要です。
            </p>
            <p>
              <code>{'{amount}'}</code> には、0 から 100 までの数値 (通常は 5 または 10 刻み)
              を指定します。これはパーセンテージに対応します (例: <code>backdrop-opacity-50</code>{' '}
              は 50% の不透明度)。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>backdrop-opacity-0</code>
                </strong>{' '}
                (0%)
              </li>
              <li>
                <strong>
                  <code>backdrop-opacity-5</code>
                </strong>{' '}
                (5%)
              </li>
              <li>...</li>
              <li>
                <strong>
                  <code>backdrop-opacity-25</code>
                </strong>{' '}
                (25%)
              </li>
              <li>
                <strong>
                  <code>backdrop-opacity-50</code>
                </strong>{' '}
                (50%)
              </li>
              <li>
                <strong>
                  <code>backdrop-opacity-75</code>
                </strong>{' '}
                (75%)
              </li>
              <li>...</li>
              <li>
                <strong>
                  <code>backdrop-opacity-100</code>
                </strong>{' '}
                (100% - デフォルト、変化なし)
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>backdrop-opacity-[.65]</code>) も使用可能です (Tailwind JIT
              モード)。0 から 1 の間の数値を指定します (例: 0.65 は 65%)。この場合、
              <code>backdrop-filter</code> ユーティリティも必要になることがあります。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる背景不透明度フィルターの適用例。半透明の黒い背景 (bg-black/10) を使用。
          </p>
          <div className="space-y-6">
            {/* Standard Backdrop Opacity */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準の背景不透明度
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{backdropOpacityHtml}</code>
              </pre>
              <BackdropOpacityExample />
            </div>
            {/* Arbitrary Backdrop Opacity */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryBackdropOpacityHtml}</code>
              </pre>
              <ArbitraryBackdropOpacityExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:backdrop-opacity-50</code> など) や状態 (
            <code>hover:backdrop-opacity-75</code> など) に応じて背景の不透明度を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時に背景の不透明度を上げる効果を作成できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="relative h-32 w-64 ...">
  <img src="..." class="absolute ...">
  <div class="absolute inset-0 backdrop-opacity-25 hover:backdrop-opacity-50 transition duration-300 bg-black/10 ...">
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
              <li>
                要素自体の不透明度を変更するには <code>opacity-*</code> ユーティリティを使用します。
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
                <code>backdrop-opacity-*</code> は自動的にこれを有効にします。
              </li>
              <li>
                <code>filter</code> (<code>opacity-*</code> など):
                要素自体とその内容にフィルターを適用します。
              </li>
              <li>
                他の背景フィルターユーティリティ: <code>backdrop-blur</code>,{' '}
                <code>backdrop-brightness</code>, <code>backdrop-contrast</code>,{' '}
                <code>backdrop-grayscale</code>, <code>backdrop-hue-rotate</code>,{' '}
                <code>backdrop-invert</code>, <code>backdrop-saturate</code>,{' '}
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

export default BackdropOpacityPage;

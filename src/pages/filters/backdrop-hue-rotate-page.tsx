import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// 背景要素の上に半透明の要素を重ねて効果を示します。

const BackdropHueRotateExample: React.FC = () => {
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
        <div className="backdrop-hue-rotate-0 bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            0 (Default)
          </span>
        </div>
        <div className="backdrop-hue-rotate-15 bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            15
          </span>
        </div>
        <div className="backdrop-hue-rotate-30 bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            30
          </span>
        </div>
        <div className="backdrop-hue-rotate-60 bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            60
          </span>
        </div>
        <div className="backdrop-hue-rotate-90 bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            90
          </span>
        </div>
        <div className="backdrop-hue-rotate-180 bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            180
          </span>
        </div>
      </div>
    </div>
  );
};

const ArbitraryBackdropHueRotateExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80';
  return (
    <div className="relative h-32 w-64 rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 backdrop-filter backdrop-hue-rotate-[270deg] bg-white/30 flex items-center justify-center p-2">
        {/* backdrop-filter が必要になる場合がある */}
        <span className="text-black text-sm font-semibold">
          任意の値: backdrop-hue-rotate-[270deg]
        </span>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const BackdropHueRotatePage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Filters: Backdrop Hue Rotate ';
const jaTitle = '背景の色相回転';
  const links = [
    {
      title: 'Tailwind CSS: Backdrop Hue Rotate',
      url: 'https://tailwindcss.com/docs/backdrop-hue-rotate',
    },
    {
      title: 'MDN: backdrop-filter',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter',
    },
    {
      title: 'MDN: filter: hue-rotate() (関連)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate',
    },
  ];

  // コードスニペットを定義
  const backdropHueRotateHtml = `
<div class="backdrop-hue-rotate-0 ...">...</div>   {/* 0deg (Default) */}
<div class="backdrop-hue-rotate-15 ...">...</div>  {/* 15deg */}
<div class="backdrop-hue-rotate-90 ...">...</div>  {/* 90deg */}
<div class="backdrop-hue-rotate-180 ...">...</div> {/* 180deg */}
  `.trim();
  const arbitraryBackdropHueRotateHtml = `<div class="backdrop-filter backdrop-hue-rotate-[270deg] ...">...</div> {/* Requires JIT & backdrop-filter enabled */} `;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Backdrop Hue Rotate - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Backdrop Hue Rotate utility in Tailwind CSS. Examples and usage details for Backdrop Hue Rotate." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の背後にあるコンテンツに色相回転 (hue-rotate)
              フィルターを適用するためのユーティリティクラスです。背景の色味を変化させます。
            </p>
            <p>
              CSS の <code>backdrop-filter: hue-rotate();</code> プロパティを制御します。
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
              <code>backdrop-hue-rotate-{'{amount}'}</code>{' '}
              の形式でクラスを要素に適用します。要素には透明度のある背景色が必要です。
            </p>
            <p>
              <code>{'{amount}'}</code> には、回転させる角度 (deg) を指定します。Tailwind
              は一般的な角度の値を提供します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>backdrop-hue-rotate-0</code>
                </strong>{' '}
                (0deg - デフォルト、変化なし)
              </li>
              <li>
                <strong>
                  <code>backdrop-hue-rotate-15</code>
                </strong>{' '}
                (15deg)
              </li>
              <li>
                <strong>
                  <code>backdrop-hue-rotate-30</code>
                </strong>{' '}
                (30deg)
              </li>
              <li>
                <strong>
                  <code>backdrop-hue-rotate-60</code>
                </strong>{' '}
                (60deg)
              </li>
              <li>
                <strong>
                  <code>backdrop-hue-rotate-90</code>
                </strong>{' '}
                (90deg)
              </li>
              <li>
                <strong>
                  <code>backdrop-hue-rotate-180</code>
                </strong>{' '}
                (180deg)
              </li>
            </ul>
            <p className="mt-4">
              負の値 (例: <code>-backdrop-hue-rotate-30</code>) も使用可能で、逆方向に回転させます。
            </p>
            <p>
              任意の値 (例: <code>backdrop-hue-rotate-[270deg]</code>) も使用可能です (Tailwind JIT
              モード)。この場合、<code>backdrop-filter</code>{' '}
              ユーティリティも必要になることがあります。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる背景色相回転フィルターの適用例。半透明の白い背景 (bg-white/30) を使用。
          </p>
          <div className="space-y-6">
            {/* Standard Backdrop Hue Rotate */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準の背景色相回転
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{backdropHueRotateHtml}</code>
              </pre>
              <BackdropHueRotateExample />
            </div>
            {/* Arbitrary Backdrop Hue Rotate */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryBackdropHueRotateHtml}</code>
              </pre>
              <ArbitraryBackdropHueRotateExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:backdrop-hue-rotate-90</code> など) や状態 (
            <code>hover:backdrop-hue-rotate-180</code> など) に応じて背景の色相回転を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時に背景の色相を変化させる効果を作成できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="relative h-32 w-64 ...">
  <img src="..." class="absolute ...">
  <div class="absolute inset-0 backdrop-hue-rotate-0 hover:backdrop-hue-rotate-90 transition duration-300 bg-white/30 ...">
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
                <code>backdrop-hue-rotate-*</code> は自動的にこれを有効にします。
              </li>
              <li>
                <code>filter</code> (<code>hue-rotate-*</code> など):
                要素自体とその内容にフィルターを適用します。
              </li>
              <li>
                他の背景フィルターユーティリティ: <code>backdrop-blur</code>,{' '}
                <code>backdrop-brightness</code>, <code>backdrop-contrast</code>,{' '}
                <code>backdrop-grayscale</code>, <code>backdrop-invert</code>,{' '}
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

export default BackdropHueRotatePage;

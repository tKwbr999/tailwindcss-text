import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// 背景要素の上に半透明の要素を重ねて効果を示します。

const BackdropContrastExample: React.FC = () => {
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
        <div className="backdrop-contrast-0 bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            0
          </span>
        </div>
        <div className="backdrop-contrast-50 bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            50
          </span>
        </div>
        <div className="backdrop-contrast-75 bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            75
          </span>
        </div>
        <div className="backdrop-contrast-100 bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            100 (Default)
          </span>
        </div>
        <div className="backdrop-contrast-125 bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            125
          </span>
        </div>
        <div className="backdrop-contrast-150 bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            150
          </span>
        </div>
        <div className="backdrop-contrast-200 bg-white/30 flex items-center justify-center p-2 relative">
          <span className="text-black text-xs font-semibold absolute top-1 left-1 bg-black/20 px-1 rounded-sm">
            200
          </span>
        </div>
      </div>
    </div>
  );
};

const ArbitraryBackdropContrastExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80';
  return (
    <div className="relative h-32 w-64 rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 backdrop-contrast-[.85] bg-white/30 flex items-center justify-center p-2">
        <span className="text-black text-sm font-semibold">任意の値: backdrop-contrast-[.85]</span>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const BackdropContrastPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Filters: Backdrop Contrast ';
  const jaTitle = '背景コントラスト';
  const links = [
    {
      title: 'Tailwind CSS: Backdrop Contrast',
      url: 'https://tailwindcss.com/docs/backdrop-contrast',
    },
    {
      title: 'MDN: backdrop-filter',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter',
    },
    {
      title: 'MDN: filter: contrast() (関連)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast',
    },
  ];

  // コードスニペットを定義
  const backdropContrastHtml = `
<div class="backdrop-contrast-50 ...">...</div>  {/* 50% */}
<div class="backdrop-contrast-100 ...">...</div> {/* 100% (Default) */}
<div class="backdrop-contrast-150 ...">...</div> {/* 150% */}
  `.trim();
  const arbitraryBackdropContrastHtml = `<div class="backdrop-contrast-[.85] ...">...</div>`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>
      <Helmet>
        <title>Backdrop Contrast - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Backdrop Contrast utility in Tailwind CSS. Examples and usage details for Backdrop Contrast."
        />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の背後にあるコンテンツにコントラストフィルターを適用するためのユーティリティクラスです。背景の明るい部分と暗い部分の差を調整します。
            </p>
            <p>
              CSS の <code>backdrop-filter: contrast();</code> プロパティを制御します。
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
              <code>backdrop-contrast-{'{amount}'}</code>{' '}
              の形式でクラスを要素に適用します。要素には透明度のある背景色が必要です。
            </p>
            <p>
              <code>{'{amount}'}</code> には、0 から 200 までの数値 (通常は 25 または 50 刻み)
              を指定します。これはパーセンテージに対応します (例: <code>backdrop-contrast-150</code>{' '}
              は 150% のコントラスト)。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>backdrop-contrast-0</code>
                </strong>{' '}
                (0%)
              </li>
              <li>
                <strong>
                  <code>backdrop-contrast-50</code>
                </strong>{' '}
                (50%)
              </li>
              <li>
                <strong>
                  <code>backdrop-contrast-75</code>
                </strong>{' '}
                (75%)
              </li>
              <li>
                <strong>
                  <code>backdrop-contrast-100</code>
                </strong>{' '}
                (100% - デフォルト、変化なし)
              </li>
              <li>
                <strong>
                  <code>backdrop-contrast-125</code>
                </strong>{' '}
                (125%)
              </li>
              <li>
                <strong>
                  <code>backdrop-contrast-150</code>
                </strong>{' '}
                (150%)
              </li>
              <li>
                <strong>
                  <code>backdrop-contrast-200</code>
                </strong>{' '}
                (200%)
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>backdrop-contrast-[.85]</code>) も使用可能です (Tailwind JIT
              モード)。0 以上の数値を指定します (例: 0.85 は 85%)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる背景コントラストフィルターの適用例。半透明の白い背景 (bg-white/30) を使用。
          </p>
          <div className="space-y-6">
            {/* Standard Backdrop Contrast */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準の背景コントラスト
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{backdropContrastHtml}</code>
              </pre>
              <BackdropContrastExample />
            </div>
            {/* Arbitrary Backdrop Contrast */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryBackdropContrastHtml}</code>
              </pre>
              <ArbitraryBackdropContrastExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:backdrop-contrast-150</code> など) や状態 (
            <code>hover:backdrop-contrast-125</code> など)
            に応じて背景のコントラストを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時に背景のコントラストを上げる効果を作成できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="relative h-32 w-64 ...">
  <img src="..." class="absolute ...">
  <div class="absolute inset-0 backdrop-contrast-100 hover:backdrop-contrast-125 transition duration-300 bg-white/30 ...">
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
                <code>backdrop-contrast-*</code> は自動的にこれを有効にします。
              </li>
              <li>
                <code>filter</code> (<code>contrast-*</code> など):
                要素自体とその内容にフィルターを適用します。
              </li>
              <li>
                他の背景フィルターユーティリティ: <code>backdrop-blur</code>,{' '}
                <code>backdrop-brightness</code>, <code>backdrop-grayscale</code>,{' '}
                <code>backdrop-hue-rotate</code>, <code>backdrop-invert</code>,{' '}
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

export default BackdropContrastPage;

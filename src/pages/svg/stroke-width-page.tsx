import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const StrokeWidthExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <svg className="size-16 stroke-blue-500 fill-none stroke-0" viewBox="0 0 24 24">
        {' '}
        {/* stroke-0 */}
        <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z" />
      </svg>
      <svg className="size-16 stroke-green-500 fill-none stroke-1" viewBox="0 0 24 24">
        {' '}
        {/* stroke-1 */}
        <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z" />
      </svg>
      <svg className="size-16 stroke-red-500 fill-none stroke-2" viewBox="0 0 24 24">
        {' '}
        {/* stroke-2 */}
        <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z" />
      </svg>
    </div>
  );
};

const ArbitraryStrokeWidthExample: React.FC = () => {
  return (
    <svg className="size-16 stroke-purple-500 fill-none stroke-[3]" viewBox="0 0 24 24">
      {' '}
      {/* stroke-[3] */}
      <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z" />
    </svg>
  );
};

// ページコンポーネント本体
const StrokeWidthPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'SVG: Stroke Width (線の太さ)';
  const links = [
    {
      title: 'Tailwind CSS: Stroke Width',
      url: 'https://tailwindcss.com/docs/stroke-width',
    },
    {
      title: 'MDN: stroke-width (SVG Attribute)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width',
    },
  ];

  // コードスニペットを定義
  const strokeWidthHtml = `
<svg class="stroke-0 ...">...</svg> {/* 0px */}
<svg class="stroke-1 ...">...</svg> {/* 1px */}
<svg class="stroke-2 ...">...</svg> {/* 2px */}
  `.trim();

  const arbitraryStrokeWidthHtml = `<svg class="stroke-[3] ...">...</svg>`;

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Stroke Width - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Stroke Width utility in Tailwind CSS. Examples and usage details for Stroke Width." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>SVG 要素の線の太さを設定するためのユーティリティクラスです。</p>
            <p>
              CSS の <code>stroke-width</code> プロパティを制御します。
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
              <code>stroke-{'{width}'}</code> の形式でクラスを SVG
              要素またはその子要素に適用します。
            </p>
            <p>
              <code>{'{width}'}</code> には、線の太さを示す数値を指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>stroke-0</code>
                </strong>{' '}
                (0px)
              </li>
              <li>
                <strong>
                  <code>stroke-1</code>
                </strong>{' '}
                (1px)
              </li>
              <li>
                <strong>
                  <code>stroke-2</code>
                </strong>{' '}
                (2px)
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>stroke-[3]</code>) も使用可能です (Tailwind JIT
              モード)。単位なしの数値はピクセルとして解釈されます。
            </p>
            <p>
              線の色を設定するには <code>stroke-*</code> ユーティリティを使用します。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる線の太さの適用例。<code>fill-none</code> を併用しています。
          </p>
          <div className="space-y-6">
            {/* Standard Stroke Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準の線の太さ
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{strokeWidthHtml}</code>
              </pre>
              <StrokeWidthExample />
            </div>
            {/* Arbitrary Stroke Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryStrokeWidthHtml}</code>
              </pre>
              <ArbitraryStrokeWidthExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:stroke-2</code> など) や状態 (<code>hover:stroke-1</code>{' '}
            など) に応じて線の太さを変更できます。トランジションと組み合わせることも可能です (
            <code>transition</code> が必要ですが、<code>stroke-width</code>{' '}
            のトランジションは一般的ではありません)。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ホバー時に線の太さを変更する例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<svg class="stroke-1 hover:stroke-2 transition ...">
  {/* ... */}
</svg>
              `.trim()}
              </code>
            </pre>
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
                <code>stroke-*</code>: SVG の線の色を設定します。
              </li>
              <li>
                <code>fill-*</code>: SVG の塗りつぶし色を設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default StrokeWidthPage;

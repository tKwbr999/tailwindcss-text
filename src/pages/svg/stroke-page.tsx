import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const StrokeExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <svg className="size-16 stroke-blue-500 fill-none stroke-2" viewBox="0 0 24 24">
        <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z" />
      </svg>
      <svg className="size-16 stroke-green-500 fill-none stroke-2" viewBox="0 0 24 24">
        <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z" />
      </svg>
      <svg className="size-16 stroke-current text-red-500 fill-none stroke-2" viewBox="0 0 24 24">
        {' '}
        {/* stroke-current */}
        <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z" />
      </svg>
      <svg className="size-16 stroke-none fill-purple-500" viewBox="0 0 24 24">
        {' '}
        {/* stroke-none */}
        <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z" />
      </svg>
    </div>
  );
};

const ArbitraryStrokeExample: React.FC = () => {
  return (
    <svg className="size-16 stroke-[#ff7f50] fill-none stroke-2" viewBox="0 0 24 24">
      {' '}
      {/* stroke-[#ff7f50] */}
      <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z" />
    </svg>
  );
};

// ページコンポーネント本体
const StrokePage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'SVG: Stroke ';
const jaTitle = '線';
  const links = [
    {
      title: 'Tailwind CSS: Stroke',
      url: 'https://tailwindcss.com/docs/stroke',
    },
    {
      title: 'MDN: stroke (SVG Attribute)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke',
    },
  ];

  // コードスニペットを定義
  const strokeHtml = `
{/* Stroke with a specific color */}
<svg class="stroke-blue-500 fill-none stroke-2 ...">...</svg>

{/* Use the current text color */}
<svg class="stroke-current text-red-500 fill-none stroke-2 ...">...</svg>

{/* No stroke */}
<svg class="stroke-none fill-black ...">...</svg>
  `.trim();

  const arbitraryStrokeHtml = `<svg class="stroke-[#ff7f50] fill-none stroke-2 ...">...</svg>`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Stroke - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Stroke utility in Tailwind CSS. Examples and usage details for Stroke." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>SVG 要素の線の色を設定するためのユーティリティクラスです。</p>
            <p>
              CSS の <code>stroke</code> プロパティを制御します。
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
              <code>stroke-{'{color}'}</code> の形式でクラスを SVG
              要素またはその子要素に適用します。
            </p>
            <p>
              <code>{'{color}'}</code> には、Tailwind のカラーパレット (例: <code>blue-500</code>,{' '}
              <code>green-600</code>) を指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>stroke-inherit</code>
                </strong>
                : 親要素から継承します。
              </li>
              <li>
                <strong>
                  <code>stroke-current</code>
                </strong>
                : 現在のテキストカラー (<code>currentColor</code>)
                を使用します。テキストカラーユーティリティ (<code>text-*</code>)
                と組み合わせて使用します。
              </li>
              <li>
                <strong>
                  <code>stroke-transparent</code>
                </strong>
                : 透明にします。
              </li>
              <li>
                <strong>
                  <code>stroke-black</code>
                </strong>
                ,{' '}
                <strong>
                  <code>stroke-white</code>
                </strong>
              </li>
              <li>
                <strong>
                  <code>stroke-{'{color}-{shade}'}</code>
                </strong>
                : Tailwind のカラーパレット (例: <code>stroke-sky-500</code>)。
              </li>
              <li>
                <strong>
                  <code>stroke-none</code>
                </strong>
                : 線を無効にします (<code>stroke: none;</code>)。
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>stroke-[#ff7f50]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
            <p>
              線の太さを設定するには <code>stroke-width-*</code> ユーティリティを使用します。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる線の色の適用例。<code>fill-none</code> と <code>stroke-2</code> を併用しています。
          </p>
          <div className="space-y-6">
            {/* Standard Stroke */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準の線の色
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{strokeHtml}</code>
              </pre>
              <StrokeExample />
            </div>
            {/* Arbitrary Stroke */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryStrokeHtml}</code>
              </pre>
              <ArbitraryStrokeExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:stroke-green-500</code> など) や状態 (
            <code>hover:stroke-red-500</code> など)
            に応じて線の色を変更できます。トランジションと組み合わせることも可能です (
            <code>transition-colors</code> が必要)。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">ホバー時に線の色を変更する例:</p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<svg class="stroke-blue-500 hover:stroke-purple-500 transition-colors duration-300 fill-none stroke-2 ...">
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
                <code>fill-*</code>: SVG の塗りつぶし色を設定します。
              </li>
              <li>
                <code>stroke-width-*</code>: SVG の線の太さを設定します。
              </li>
              <li>
                <code>text-*</code>: <code>stroke-current</code>{' '}
                と組み合わせて使用するテキストカラー。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default StrokePage;

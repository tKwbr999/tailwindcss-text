import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// 画像に反転フィルターを適用します。

const InvertExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'; // 山の画像例
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <img src={imageUrl} alt="Invert" className="invert rounded-lg" />
      <img src={imageUrl} alt="No Invert" className="invert-0 rounded-lg" /> {/* Default */}
    </div>
  );
};

const ArbitraryInvertExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80';
  // 任意の値は通常 0 (0%) から 1 (100%)
  return (
    <img
      src={imageUrl}
      alt="Arbitrary Invert (Example)"
      className="filter invert-[.75] rounded-lg"
    />
    // filter ユーティリティと任意の値を使用 (Tailwind JIT)
  );
};

// ページコンポーネント本体
const InvertPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Filters: Invert (色反転)';
  const links = [
    {
      title: 'Tailwind CSS: Invert',
      url: 'https://tailwindcss.com/docs/invert',
    },
    {
      title: 'MDN: filter: invert()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert',
    },
  ];

  // コードスニペットを定義
  const invertHtml = `
<img class="invert ..." src="..." alt="...">   {/* 100% invert */}
<img class="invert-0 ..." src="..." alt="..."> {/* 0% invert (Default) */}
  `.trim();
  const arbitraryInvertHtml = `<img class="filter invert-[.75] ..." src="..." alt="..."> {/* Requires JIT & filter enabled */} `;

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Invert - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Invert utility in Tailwind CSS. Examples and usage details for Invert." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の色を反転させるためのユーティリティクラスです。画像やテキストなどの要素の色をネガのように反転させます。
            </p>
            <p>
              CSS の <code>filter: invert();</code> プロパティを制御します。
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
              <code>invert</code> または <code>invert-0</code> の形式でクラスを要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>invert</code>
                </strong>
                : 要素の色を完全に反転させます (<code>filter: invert(100%);</code>)。
              </li>
              <li>
                <strong>
                  <code>invert-0</code>
                </strong>
                : 色の反転を行いません (<code>filter: invert(0%);</code>
                )。これがデフォルトの挙動です。
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>invert-[.75]</code>) も使用可能です (Tailwind JIT モード)。0 から
              1 の間の数値を指定します (例: 0.75 は 75% 反転)。この場合、<code>filter</code>{' '}
              ユーティリティも必要になることがあります。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">色反転フィルターの適用例。</p>
          <div className="space-y-6">
            {/* Standard Invert */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準の色反転
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{invertHtml}</code>
              </pre>
              <InvertExample />
            </div>
            {/* Arbitrary Invert */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                任意の値 (JIT)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryInvertHtml}</code>
              </pre>
              <ArbitraryInvertExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:invert</code> など) や状態 (<code>hover:invert-0</code> など)
            に応じて色反転効果を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時に色反転を解除する効果を作成できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<img class="invert hover:invert-0 transition duration-300 ..." src="..." alt="...">
              `.trim()}
              </code>
            </pre>
            <img
              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80"
              alt="Hover to remove invert"
              className="invert hover:invert-0 transition duration-300 rounded-lg w-48"
            />
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>色反転フィルターは要素全体とその内容に適用されます。</li>
              <li>複数のフィルターユーティリティを組み合わせることができます。</li>
              <li>
                背景要素に色反転フィルターを適用したい場合は、<code>backdrop-invert-*</code>{' '}
                ユーティリティを使用します。
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
                <code>filter</code>: 他のフィルターユーティリティを有効にするための基本クラス。
                <code>invert-*</code> は自動的にこれを有効にします。
              </li>
              <li>
                <code>backdrop-filter</code> (<code>backdrop-invert</code> など):
                要素の背後にあるコンテンツにフィルターを適用します。
              </li>
              <li>
                他のフィルターユーティリティ: <code>blur</code>, <code>brightness</code>,{' '}
                <code>contrast</code>, <code>grayscale</code>, <code>hue-rotate</code>,{' '}
                <code>saturate</code>, <code>sepia</code>, <code>drop-shadow</code>。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default InvertPage;

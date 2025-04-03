import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// 画像にグレースケールフィルターを適用します。

const GrayscaleExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'; // 山の画像例
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <img src={imageUrl} alt="Grayscale" className="grayscale rounded-lg" />
      <img src={imageUrl} alt="No Grayscale" className="grayscale-0 rounded-lg" /> {/* Default */}
    </div>
  );
};

const ArbitraryGrayscaleExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80';
  // 任意の値は通常 0 (0%) から 1 (100%) の範囲ですが、Tailwind はキーワードのみ提供
  // ここでは例として filter プロパティを直接使うか、カスタム設定が必要
  // Tailwind のデフォルトでは任意の値クラスは生成されない
  return (
    <img
      src={imageUrl}
      alt="Arbitrary Grayscale (Example)"
      className="filter grayscale-[50%] rounded-lg"
    />
    // filter ユーティリティと任意の値を使用 (Tailwind JIT)
  );
};

// ページコンポーネント本体
const GrayscalePage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Filters: Grayscale (グレースケール)';
  const links = [
    {
      title: 'Tailwind CSS: Grayscale',
      url: 'https://tailwindcss.com/docs/grayscale',
    },
    {
      title: 'MDN: filter: grayscale()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale',
    },
  ];

  // コードスニペットを定義
  const grayscaleHtml = `
<img class="grayscale ..." src="..." alt="...">   {/* 100% grayscale */}
<img class="grayscale-0 ..." src="..." alt="..."> {/* 0% grayscale (Default) */}
  `.trim();
  const arbitraryGrayscaleHtml = `<img class="filter grayscale-[50%] ..." src="..." alt="..."> {/* Requires JIT & filter enabled */} `;

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Grayscale - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Grayscale utility in Tailwind CSS. Examples and usage details for Grayscale." />
        {/* OGP タグ */}
        <meta property="og:title" content="Grayscale - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Grayscale utility in Tailwind CSS. Examples and usage details for Grayscale." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/filters/grayscale" />
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
              要素にグレースケールフィルターを適用するためのユーティリティクラスです。要素の色を完全にまたは部分的に白黒に変換します。
            </p>
            <p>
              CSS の <code>filter: grayscale();</code> プロパティを制御します。
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
              <code>grayscale</code> または <code>grayscale-0</code>{' '}
              の形式でクラスを要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>grayscale</code>
                </strong>
                : 要素を完全にグレースケールにします (<code>filter: grayscale(100%);</code>)。
              </li>
              <li>
                <strong>
                  <code>grayscale-0</code>
                </strong>
                : グレースケールフィルターを適用しません (<code>filter: grayscale(0%);</code>
                )。これがデフォルトの挙動です。
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>grayscale-[50%]</code>) も使用可能です (Tailwind JIT モード)。0%
              から 100% の間のパーセンテージを指定します。この場合、<code>filter</code>{' '}
              ユーティリティも必要になることがあります。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            グレースケールフィルターの適用例。
          </p>
          <div className="space-y-6">
            {/* Standard Grayscale */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準グレースケール
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{grayscaleHtml}</code>
              </pre>
              <GrayscaleExample />
            </div>
            {/* Arbitrary Grayscale */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                任意の値 (JIT)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryGrayscaleHtml}</code>
              </pre>
              <ArbitraryGrayscaleExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:grayscale</code> など) や状態 (<code>hover:grayscale-0</code>{' '}
            など) に応じてグレースケール効果を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時にグレースケールを解除する効果を作成できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<img class="grayscale hover:grayscale-0 transition duration-300 ..." src="..." alt="...">
              `.trim()}
              </code>
            </pre>
            <img
              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80"
              alt="Hover to remove grayscale"
              className="grayscale hover:grayscale-0 transition duration-300 rounded-lg w-48"
            />
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>グレースケールフィルターは要素全体とその内容に適用されます。</li>
              <li>複数のフィルターユーティリティを組み合わせることができます。</li>
              <li>
                背景要素にグレースケールフィルターを適用したい場合は、
                <code>backdrop-grayscale-*</code> ユーティリティを使用します。
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
                <code>grayscale-*</code> は自動的にこれを有効にします。
              </li>
              <li>
                <code>backdrop-filter</code> (<code>backdrop-grayscale</code> など):
                要素の背後にあるコンテンツにフィルターを適用します。
              </li>
              <li>
                他のフィルターユーティリティ: <code>blur</code>, <code>brightness</code>,{' '}
                <code>contrast</code>, <code>hue-rotate</code>, <code>invert</code>,{' '}
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

export default GrayscalePage;

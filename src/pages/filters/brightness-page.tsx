import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// 画像に明るさフィルターを適用します。

const BrightnessExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'; // 山の画像例
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
      <img src={imageUrl} alt="Brightness 0" className="brightness-0 rounded-lg" />
      <img src={imageUrl} alt="Brightness 50" className="brightness-50 rounded-lg" />
      <img src={imageUrl} alt="Brightness 75" className="brightness-75 rounded-lg" />
      <img src={imageUrl} alt="Brightness 90" className="brightness-90 rounded-lg" />
      <img src={imageUrl} alt="Brightness 100" className="brightness-100 rounded-lg" />{' '}
      {/* Default */}
      <img src={imageUrl} alt="Brightness 110" className="brightness-110 rounded-lg" />
      <img src={imageUrl} alt="Brightness 125" className="brightness-125 rounded-lg" />
      <img src={imageUrl} alt="Brightness 150" className="brightness-150 rounded-lg" />
      <img src={imageUrl} alt="Brightness 200" className="brightness-200 rounded-lg" />
    </div>
  );
};

const ArbitraryBrightnessExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80';
  return <img src={imageUrl} alt="Arbitrary Brightness" className="brightness-[.65] rounded-lg" />;
};

// ページコンポーネント本体
const BrightnessPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Filters: Brightness (明るさ)';
  const links = [
    {
      title: 'Tailwind CSS: Brightness',
      url: 'https://tailwindcss.com/docs/brightness',
    },
    {
      title: 'MDN: filter: brightness()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness',
    },
  ];

  // コードスニペットを定義
  const brightnessHtml = `
<img class="brightness-0 ..." src="..." alt="...">   {/* 0% */}
<img class="brightness-50 ..." src="..." alt="...">  {/* 50% */}
<img class="brightness-100 ..." src="..." alt="..."> {/* 100% (Default) */}
<img class="brightness-150 ..." src="..." alt="..."> {/* 150% */}
<img class="brightness-200 ..." src="..." alt="..."> {/* 200% */}
  `.trim();
  const arbitraryBrightnessHtml = `<img class="brightness-[.65] ..." src="..." alt="...">`;

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Brightness - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Brightness utility in Tailwind CSS. Examples and usage details for Brightness." />
        {/* OGP タグ */}
        <meta property="og:title" content="Brightness - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Brightness utility in Tailwind CSS. Examples and usage details for Brightness." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/filters/brightness" />
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
              要素に明るさ (brightness)
              フィルターを適用するためのユーティリティクラスです。要素を明るくしたり暗くしたりする効果があります。
            </p>
            <p>
              CSS の <code>filter: brightness();</code> プロパティを制御します。
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
              <code>brightness-{'{amount}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>
              <code>{'{amount}'}</code> には、0 から 200 までの数値 (通常は 25 または 50 刻み)
              を指定します。これはパーセンテージに対応します (例: <code>brightness-50</code> は 50%
              の明るさ)。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>brightness-0</code>
                </strong>{' '}
                (0%)
              </li>
              <li>
                <strong>
                  <code>brightness-50</code>
                </strong>{' '}
                (50%)
              </li>
              <li>
                <strong>
                  <code>brightness-75</code>
                </strong>{' '}
                (75%)
              </li>
              <li>
                <strong>
                  <code>brightness-90</code>
                </strong>{' '}
                (90%)
              </li>
              <li>
                <strong>
                  <code>brightness-95</code>
                </strong>{' '}
                (95%)
              </li>
              <li>
                <strong>
                  <code>brightness-100</code>
                </strong>{' '}
                (100% - デフォルト、変化なし)
              </li>
              <li>
                <strong>
                  <code>brightness-105</code>
                </strong>{' '}
                (105%)
              </li>
              <li>
                <strong>
                  <code>brightness-110</code>
                </strong>{' '}
                (110%)
              </li>
              <li>
                <strong>
                  <code>brightness-125</code>
                </strong>{' '}
                (125%)
              </li>
              <li>
                <strong>
                  <code>brightness-150</code>
                </strong>{' '}
                (150%)
              </li>
              <li>
                <strong>
                  <code>brightness-200</code>
                </strong>{' '}
                (200%)
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>brightness-[.65]</code>) も使用可能です (Tailwind JIT モード)。0
              以上の数値を指定します (例: 0.65 は 65%)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる明るさフィルターの適用例。
          </p>
          <div className="space-y-6">
            {/* Standard Brightness */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準の明るさ
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{brightnessHtml}</code>
              </pre>
              <BrightnessExample />
            </div>
            {/* Arbitrary Brightness */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryBrightnessHtml}</code>
              </pre>
              <ArbitraryBrightnessExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:brightness-150</code> など) や状態 (
            <code>hover:brightness-75</code> など) に応じて明るさを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時に画像を少し暗くする効果を作成できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<img class="brightness-100 hover:brightness-75 transition duration-300 ..." src="..." alt="...">
              `.trim()}
              </code>
            </pre>
            <img
              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80"
              alt="Hover to darken"
              className="brightness-100 hover:brightness-75 transition duration-300 rounded-lg w-48"
            />
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>明るさフィルターは要素全体とその内容に適用されます。</li>
              <li>
                複数のフィルターユーティリティ (例: <code>brightness-75</code>,{' '}
                <code>contrast-125</code>) を組み合わせることができます。
              </li>
              <li>
                背景要素に明るさフィルターを適用したい場合は、<code>backdrop-brightness-*</code>{' '}
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
                <code>brightness-*</code> は自動的にこれを有効にします。
              </li>
              <li>
                <code>backdrop-filter</code> (<code>backdrop-brightness-*</code> など):
                要素の背後にあるコンテンツにフィルターを適用します。
              </li>
              <li>
                他のフィルターユーティリティ: <code>blur</code>, <code>contrast</code>,{' '}
                <code>grayscale</code>, <code>hue-rotate</code>, <code>invert</code>,{' '}
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

export default BrightnessPage;

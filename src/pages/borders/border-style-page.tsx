import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// ボーダーのスタイルを示すため、ボーダー幅と色も設定します。

const BorderStyleExample: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="border-4 border-black dark:border-white border-solid p-4 rounded">
        border-solid (デフォルト)
      </div>
      <div className="border-4 border-black dark:border-white border-dashed p-4 rounded">
        border-dashed
      </div>
      <div className="border-4 border-black dark:border-white border-dotted p-4 rounded">
        border-dotted
      </div>
      <div className="border-4 border-black dark:border-white border-double p-4 rounded">
        border-double
      </div>
      <div className="border-4 border-black dark:border-white border-hidden p-4 rounded bg-gray-200 dark:bg-gray-700">
        border-hidden (見えない)
      </div>
      <div className="border-4 border-black dark:border-white border-none p-4 rounded bg-gray-200 dark:bg-gray-700">
        border-none (境界線なし)
      </div>
    </div>
  );
};

// ページコンポーネント本体
const BorderStylePage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Borders: Border Style (境界線のスタイル)';
  const links = [
    {
      title: 'Tailwind CSS: Border Style',
      url: 'https://tailwindcss.com/docs/border-style',
    },
    {
      title: 'MDN: border-style',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-style',
    },
  ];

  // コードスニペットを定義
  const borderStyleHtml = `
<div class="border-4 border-solid ...">...</div>   {/* Default with border-* */}
<div class="border-4 border-dashed ...">...</div>
<div class="border-4 border-dotted ...">...</div>
<div class="border-4 border-double ...">...</div>
<div class="border-4 border-hidden ...">...</div> {/* Like border-none */}
<div class="border-none ...">...</div>     {/* No border */}
  `.trim();

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Border Style - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Border Style utility in Tailwind CSS. Examples and usage details for Border Style." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の境界線 (border) のスタイル (実線、破線、点線など)
              を設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>border-style</code> プロパティを制御します。
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
              <code>border-{'{style}'}</code> の形式でクラスを要素に適用します。通常、境界線の太さ (
              <code>border</code>, <code>border-*</code>) と色 (<code>border-*</code>)
              と一緒に使用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>border-solid</code>
                </strong>
                : 実線 (デフォルト、<code>border</code> クラスに含まれる)。
              </li>
              <li>
                <strong>
                  <code>border-dashed</code>
                </strong>
                : 破線。
              </li>
              <li>
                <strong>
                  <code>border-dotted</code>
                </strong>
                : 点線。
              </li>
              <li>
                <strong>
                  <code>border-double</code>
                </strong>
                : 二重線。境界線の太さが 3px 以上でないと効果が見えにくい場合があります。
              </li>
              <li>
                <strong>
                  <code>border-hidden</code>
                </strong>
                : <code>border-style: hidden;</code>。<code>border-none</code>{' '}
                と似ていますが、テーブルの境界線コンフリクト解決において優先度が異なります。
              </li>
              <li>
                <strong>
                  <code>border-none</code>
                </strong>
                : 境界線を表示しません (<code>border-style: none;</code>)。
              </li>
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる境界線スタイルの適用例。<code>border-4</code> と <code>border-black</code>{' '}
            を併用しています。
          </p>
          <div>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{borderStyleHtml}</code>
            </pre>
            <BorderStyleExample />
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:border-dashed</code> など) や状態 (
            <code>hover:border-dotted</code> など) に応じて境界線のスタイルを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時に境界線のスタイルを点線に変更できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<button class="border-2 border-solid hover:border-dotted border-blue-500 ...">
  Hover for Dotted Border
</button>
              `.trim()}
              </code>
            </pre>
            <button className="border-2 border-solid hover:border-dotted border-blue-500 text-blue-700 dark:text-blue-300 py-2 px-4 rounded">
              Hover for Dotted Border
            </button>
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                境界線を表示するには、スタイル (<code>border-*</code>) に加えて、通常は太さ (
                <code>border</code>, <code>border-*</code>) と色 (<code>border-*</code>)
                も指定する必要があります。<code>border</code> クラスは{' '}
                <code>border-width: 1px;</code> と <code>border-style: solid;</code> を設定します。
              </li>
              <li>
                <code>border-double</code> の見た目は、境界線の太さ (<code>border-width</code>)
                に依存します。太さが 1px や 2px だと実線に見えることがあります。
              </li>
              <li>
                <code>border-hidden</code> は主にテーブルの境界線コンフリクト (
                <code>border-collapse</code>) で使用される特殊な値です。通常は{' '}
                <code>border-none</code> を使用します。
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
                <code>border-width</code> (<code>border</code>, <code>border-*</code>):
                境界線の太さを設定します。
              </li>
              <li>
                <code>border-color</code> (<code>border-*</code>): 境界線の色を設定します。
              </li>
              <li>
                <code>divide-style</code> (<code>divide-solid</code>, <code>divide-dashed</code>{' '}
                など): 子要素間の境界線のスタイルを設定します。
              </li>
              <li>
                <code>outline-style</code> (<code>outline</code>, <code>outline-dashed</code> など):
                アウトラインのスタイルを設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default BorderStylePage;

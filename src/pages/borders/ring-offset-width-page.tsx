import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// リングオフセットの効果を示すため、リングのスタイル、太さ、色、およびオフセットの色も設定します。

const RingOffsetWidthExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center p-4 bg-gray-300 dark:bg-gray-700 rounded">
      {' '}
      {/* 背景でオフセット色が見えるように */}
      <button className="ring ring-blue-500 ring-offset-0 ring-offset-white dark:ring-offset-black p-4 rounded">
        offset-0 (0px)
      </button>
      <button className="ring ring-blue-500 ring-offset-1 ring-offset-white dark:ring-offset-black p-4 rounded">
        offset-1 (1px)
      </button>
      <button className="ring ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-black p-4 rounded">
        offset-2 (2px)
      </button>
      <button className="ring ring-blue-500 ring-offset-4 ring-offset-white dark:ring-offset-black p-4 rounded">
        offset-4 (4px)
      </button>
      <button className="ring ring-blue-500 ring-offset-8 ring-offset-white dark:ring-offset-black p-4 rounded">
        offset-8 (8px)
      </button>
    </div>
  );
};

const ArbitraryRingOffsetWidthExample: React.FC = () => {
  return (
    <div className="p-4 bg-gray-300 dark:bg-gray-700 rounded inline-block">
      <button className="ring ring-purple-500 ring-offset-[3px] ring-offset-white dark:ring-offset-black p-4 rounded">
        任意の値: ring-offset-[3px]
      </button>
    </div>
  );
};

// ページコンポーネント本体
const RingOffsetWidthPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Borders: Ring Offset Width ';
const jaTitle = 'リングオフセットの太さ';
  const links = [
    {
      title: 'Tailwind CSS: Ring Offset Width',
      url: 'https://tailwindcss.com/docs/ring-offset-width',
    },
    {
      title: 'MDN: box-shadow (関連)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow',
    },
  ];

  // コードスニペットを定義
  const ringOffsetWidthHtml = `
<button class="ring ring-offset-0 ring-offset-white ...">...</button> {/* 0px */}
<button class="ring ring-offset-1 ring-offset-white ...">...</button> {/* 1px */}
<button class="ring ring-offset-2 ring-offset-white ...">...</button> {/* 2px */}
<button class="ring ring-offset-4 ring-offset-white ...">...</button> {/* 4px */}
<button class="ring ring-offset-8 ring-offset-white ...">...</button> {/* 8px */}
  `.trim();
  const arbitraryRingOffsetWidthHtml = `<button class="ring ring-offset-[3px] ring-offset-white ...">...</button>`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Ring Offset Width - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Ring Offset Width utility in Tailwind CSS. Examples and usage details for Ring Offset Width." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の境界線 (または要素の端) とリング (<code>ring-*</code>) との間のスペース
              (オフセット)
              の太さを設定するためのユーティリティクラスです。これにより、リングが要素に直接隣接せず、間に隙間があるように見せることができます。
            </p>
            <p>
              CSS の <code>--tw-ring-offset-width</code> カスタムプロパティを制御し、これが{' '}
              <code>box-shadow</code> の生成に使用されます。
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
              <code>ring-offset-{'{width}'}</code>{' '}
              の形式でクラスを要素に適用します。通常、リングの太さ (<code>ring</code>,{' '}
              <code>ring-*</code>)、リングの色 (<code>ring-*</code>)、およびオフセットの色 (
              <code>ring-offset-*</code>) も一緒に指定します。
            </p>
            <p>デフォルトで用意されている太さ:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>ring-offset-0</code>
                </strong>{' '}
                (0px)
              </li>
              <li>
                <strong>
                  <code>ring-offset-1</code>
                </strong>{' '}
                (1px)
              </li>
              <li>
                <strong>
                  <code>ring-offset-2</code>
                </strong>{' '}
                (2px - デフォルト)
              </li>
              <li>
                <strong>
                  <code>ring-offset-4</code>
                </strong>{' '}
                (4px)
              </li>
              <li>
                <strong>
                  <code>ring-offset-8</code>
                </strong>{' '}
                (8px)
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>ring-offset-[3px]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
            <p>
              オフセット部分の色は <code>ring-offset-{'{color}'}</code>{' '}
              で指定します。指定しない場合、デフォルトは通常白 (<code>#fff</code>) です。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なるリングオフセットの太さの適用例。リングの色とオフセットの色も指定しています。
          </p>
          <div className="space-y-6">
            {/* Standard Offset Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準オフセット
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{ringOffsetWidthHtml}</code>
              </pre>
              <RingOffsetWidthExample />
            </div>
            {/* Arbitrary Offset Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryRingOffsetWidthHtml}</code>
              </pre>
              <ArbitraryRingOffsetWidthExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:ring-offset-4</code> など) や状態 (
            <code>focus:ring-offset-2</code> など) に応じてリングオフセットの太さを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              フォーム要素がフォーカスされたときにリングのオフセットを変更できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<input class="focus:ring focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-100 focus:outline-none ..." />
              `.trim()}
              </code>
            </pre>
            <input
              className="focus:ring focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-100 focus:outline-none border border-gray-300 p-2 rounded"
              placeholder="Focus me"
            />
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                リングオフセットを使用するには、リング自体が表示されている必要があります (太さ{' '}
                <code>ring</code> または <code>ring-*</code> と色 <code>ring-*</code>{' '}
                が設定されている)。
              </li>
              <li>
                オフセット部分の色は <code>ring-offset-{'{color}'}</code>{' '}
                で指定します。背景が単色でない場合、オフセットの色を適切に設定しないと意図しない見た目になることがあります。
              </li>
              <li>
                リングとオフセットは <code>box-shadow</code>{' '}
                を利用して実装されているため、要素のレイアウトには影響を与えません。
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
                <code>ring-width</code> (<code>ring</code>, <code>ring-*</code>):
                リングの太さを設定します。
              </li>
              <li>
                <code>ring-color</code> (<code>ring-*</code>): リングの色を設定します。
              </li>
              <li>
                <code>ring-offset-color</code> (<code>ring-offset-*</code>):
                リングのオフセット部分の色を設定します。
              </li>
              <li>
                <code>outline-offset</code> (<code>outline-offset-*</code>):
                アウトラインのオフセットを設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default RingOffsetWidthPage;

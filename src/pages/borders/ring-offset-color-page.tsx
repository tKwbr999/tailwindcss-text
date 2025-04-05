import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// リングオフセットの色を示すため、リングのスタイル、太さ、色、オフセットの太さも設定します。

const RingOffsetColorExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center p-4 bg-gray-300 dark:bg-gray-700 rounded">
      {' '}
      {/* 背景でオフセット色が見えるように */}
      <button className="ring ring-blue-500 ring-offset-4 ring-offset-sky-300 p-4 rounded">
        offset-sky-300
      </button>
      <button className="ring ring-blue-500 ring-offset-4 ring-offset-red-300 p-4 rounded">
        offset-red-300
      </button>
      <button className="ring ring-blue-500 ring-offset-4 ring-offset-emerald-300 p-4 rounded">
        offset-emerald-300
      </button>
      <button className="ring ring-blue-500 ring-offset-4 ring-offset-amber-300 p-4 rounded">
        offset-amber-300
      </button>
      <button className="ring ring-blue-500 ring-offset-4 ring-offset-violet-300 p-4 rounded">
        offset-violet-300
      </button>
      <button className="ring ring-blue-500 ring-offset-4 ring-offset-pink-300 p-4 rounded">
        offset-pink-300
      </button>
    </div>
  );
};

const ArbitraryRingOffsetColorExample: React.FC = () => {
  return (
    <div className="p-4 bg-gray-300 dark:bg-gray-700 rounded inline-block">
      <button className="ring ring-purple-500 ring-offset-4 ring-offset-[#ff7f50] p-4 rounded">
        任意の値: ring-offset-[#ff7f50] (Coral)
      </button>
    </div>
  );
};

// ページコンポーネント本体
const RingOffsetColorPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Borders: Ring Offset Color ';
  const jaTitle = 'リングオフセットの色';
  const links = [
    {
      title: 'Tailwind CSS: Ring Offset Color',
      url: 'https://tailwindcss.com/docs/ring-offset-color',
    },
    {
      title: 'MDN: box-shadow (関連)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow',
    },
  ];

  // コードスニペットを定義
  const ringOffsetColorHtml = `<button class="ring ring-offset-4 ring-offset-sky-300 ...">...</button>`;
  const arbitraryRingOffsetColorHtml = `<button class="ring ring-offset-4 ring-offset-[#ff7f50] ...">...</button>`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>
      <Helmet>
        <title>Ring Offset Color - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Ring Offset Color utility in Tailwind CSS. Examples and usage details for Ring Offset Color."
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
              要素とリング (<code>ring-*</code>) との間のスペース (オフセット)
              の色を設定するためのユーティリティクラスです。<code>ring-offset-width</code>{' '}
              と組み合わせて使用します。
            </p>
            <p>
              CSS の <code>--tw-ring-offset-color</code> カスタムプロパティを制御し、これが{' '}
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
              <code>
                ring-offset-{'{color}'}[-{'{shade}'}]
              </code>{' '}
              の形式でクラスを要素に適用します。通常、リングの太さ (<code>ring</code>,{' '}
              <code>ring-*</code>)、リングの色 (<code>ring-*</code>)、およびオフセットの太さ (
              <code>ring-offset-*</code>) も一緒に指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>
                    ring-offset-{'{color}'}[-{'{shade}'}]
                  </code>
                </strong>{' '}
                (例: <code>ring-offset-blue-500</code>, <code>ring-offset-red-600</code>):
                指定した色と濃淡をリングのオフセット部分に適用します。
              </li>
              <li>
                <strong>特殊な値</strong>: <code>ring-offset-inherit</code>,{' '}
                <code>ring-offset-current</code>, <code>ring-offset-transparent</code>,{' '}
                <code>ring-offset-black</code>, <code>ring-offset-white</code> (デフォルト)。
              </li>
            </ul>
            <p className="mt-4">
              任意の色 (例: <code>ring-offset-[#ff7f50]</code>) も使用可能です (Tailwind JIT
              モード)。
            </p>
            <p>
              透明度はサポートされていません
              (オフセットは通常、下のコンテンツを隠すために不透明な色を使用します)。
            </p>
          </div>
        </section>
        {/* 色の指定例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            色の指定例
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なるリングオフセットの色の適用例。<code>ring</code>, <code>ring-blue-500</code>,{' '}
            <code>ring-offset-4</code> を併用。
          </p>
          <div>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{ringOffsetColorHtml}</code>
            </pre>
            <RingOffsetColorExample />
          </div>
        </section>
        {/* 任意の値 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            任意の値
          </h2>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              角括弧を使用して、任意の色コード (HEX, RGB, HSL) を直接指定できます。
            </p>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{arbitraryRingOffsetColorHtml}</code>
            </pre>
            <ArbitraryRingOffsetColorExample />
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:ring-offset-red-500</code> など) や状態 (
            <code>focus:ring-offset-blue-100</code>, <code>dark:ring-offset-black</code> など)
            に応じてリングオフセットの色を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ダークモードでオフセットの色を調整したり、フォーカス時にオフセットの色を変更したりできます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<button class="ring ring-blue-500 ring-offset-4 ring-offset-white dark:ring-offset-black focus:ring-offset-blue-200 ...">
  Button
</button>
              `.trim()}
              </code>
            </pre>
            <div className="p-4 bg-gray-300 dark:bg-gray-700 rounded inline-block">
              <button className="ring ring-blue-500 ring-offset-4 ring-offset-white dark:ring-offset-black focus:ring-offset-blue-200 p-4 rounded">
                Button
              </button>
            </div>
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                リングオフセットの色を設定するには、リング自体が表示され、かつオフセットの太さが 0
                より大きい必要があります (<code>ring</code>, <code>ring-*</code>,{' '}
                <code>ring-offset-*</code>)。
              </li>
              <li>
                オフセットの色は、要素の背景色とリングの色との間に視覚的な区切りを提供します。通常、要素の背景色と同じか、それに近い色を指定します。
              </li>
              <li>
                デフォルトのオフセット色は白 (<code>#fff</code>)
                です。ダークモードなど、背景が白でない場合は明示的に{' '}
                <code>dark:ring-offset-black</code> や他の適切な色を指定する必要があります。
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
                <code>ring-offset-width</code> (<code>ring-offset-*</code>):
                リングと要素の間のオフセット (隙間) の太さを設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default RingOffsetColorPage;

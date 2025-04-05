import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// アウトラインのオフセットを示すため、アウトラインのスタイル、太さ、色も設定します。

const OutlineOffsetExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <button className="outline outline-2 outline-offset-0 outline-blue-500 p-4 rounded">
        offset-0 (0px)
      </button>
      <button className="outline outline-2 outline-offset-1 outline-blue-500 p-4 rounded">
        offset-1 (1px)
      </button>
      <button className="outline outline-2 outline-offset-2 outline-blue-500 p-4 rounded">
        offset-2 (2px)
      </button>
      <button className="outline outline-2 outline-offset-4 outline-blue-500 p-4 rounded">
        offset-4 (4px)
      </button>
      <button className="outline outline-2 outline-offset-8 outline-blue-500 p-4 rounded">
        offset-8 (8px)
      </button>
    </div>
  );
};

const ArbitraryOutlineOffsetExample: React.FC = () => {
  return (
    <button className="outline outline-2 outline-offset-[3px] outline-purple-500 p-4 rounded">
      任意の値: outline-offset-[3px]
    </button>
  );
};

// ページコンポーネント本体
const OutlineOffsetPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Borders: Outline Offset ';
  const jaTitle = 'アウトラインのオフセット';
  const links = [
    {
      title: 'Tailwind CSS: Outline Offset',
      url: 'https://tailwindcss.com/docs/outline-offset',
    },
    {
      title: 'MDN: outline-offset',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset',
    },
  ];

  // コードスニペットを定義
  const outlineOffsetHtml = `
<button class="outline outline-2 outline-offset-0 ...">...</button> {/* 0px */}
<button class="outline outline-2 outline-offset-1 ...">...</button> {/* 1px */}
<button class="outline outline-2 outline-offset-2 ...">...</button> {/* 2px */}
<button class="outline outline-2 outline-offset-4 ...">...</button> {/* 4px */}
<button class="outline outline-2 outline-offset-8 ...">...</button> {/* 8px */}
  `.trim();
  const arbitraryOutlineOffsetHtml = `<button class="outline outline-2 outline-offset-[3px] ...">...</button>`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>
      <Helmet>
        <title>Outline Offset - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Outline Offset utility in Tailwind CSS. Examples and usage details for Outline Offset."
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
              要素の境界線 (border) とアウトラインとの間のスペース (オフセット)
              を設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>outline-offset</code> プロパティを制御します。
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
              <code>outline-offset-{'{amount}'}</code>{' '}
              の形式でクラスを要素に適用します。通常、アウトラインのスタイル、太さ、色も一緒に指定します。
            </p>
            <p>デフォルトで用意されているオフセット量:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>outline-offset-0</code>
                </strong>{' '}
                (0px)
              </li>
              <li>
                <strong>
                  <code>outline-offset-1</code>
                </strong>{' '}
                (1px)
              </li>
              <li>
                <strong>
                  <code>outline-offset-2</code>
                </strong>{' '}
                (2px)
              </li>
              <li>
                <strong>
                  <code>outline-offset-4</code>
                </strong>{' '}
                (4px)
              </li>
              <li>
                <strong>
                  <code>outline-offset-8</code>
                </strong>{' '}
                (8px)
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>outline-offset-[3px]</code>) も使用可能です (Tailwind JIT
              モード)。負の値も指定できます。
            </p>
            <p>
              デフォルトのオフセットは <code>0</code> です。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なるアウトラインオフセットの適用例。<code>outline</code>, <code>outline-2</code>,{' '}
            <code>outline-blue-500</code> を併用。
          </p>
          <div className="space-y-6">
            {/* Standard Offset */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準オフセット
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{outlineOffsetHtml}</code>
              </pre>
              <OutlineOffsetExample />
            </div>
            {/* Arbitrary Offset */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryOutlineOffsetHtml}</code>
              </pre>
              <ArbitraryOutlineOffsetExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:outline-offset-4</code> など) や状態 (
            <code>focus:outline-offset-2</code> など)
            に応じてアウトラインのオフセットを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              フォーム要素がフォーカスされたときにアウトラインのオフセットを変更できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<input class="outline outline-2 outline-blue-500 outline-offset-0 focus:outline-offset-2 ..." />
              `.trim()}
              </code>
            </pre>
            <input
              className="outline outline-2 outline-blue-500 outline-offset-0 focus:outline-offset-2 border border-gray-300 p-2 rounded"
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
                アウトラインのオフセットを設定するには、アウトライン自体が表示されている必要があります
                (太さ、スタイル、色が設定されている)。
              </li>
              <li>
                アウトラインはレイアウトに影響を与えないため、オフセットを変更しても周囲の要素の位置は変わりません。
              </li>
              <li>負のオフセットを指定すると、アウトラインが要素の内側に描画されます。</li>
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
                <code>outline-width</code> (<code>outline-*</code>):
                アウトラインの太さを設定します。
              </li>
              <li>
                <code>outline-style</code> (<code>outline</code>, <code>outline-dashed</code> など):
                アウトラインのスタイルを設定します。
              </li>
              <li>
                <code>outline-color</code> (<code>outline-*</code>): アウトラインの色を設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default OutlineOffsetPage;

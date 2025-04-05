import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// アウトラインは要素の境界線の外側に描画されます。

const OutlineWidthExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="outline outline-0 outline-blue-500 p-4 rounded">outline-0 (0px)</button>
      <button className="outline outline-1 outline-blue-500 p-4 rounded">outline-1 (1px)</button>
      <button className="outline outline-2 outline-blue-500 p-4 rounded">outline-2 (2px)</button>
      <button className="outline outline-4 outline-blue-500 p-4 rounded">outline-4 (4px)</button>
      <button className="outline outline-8 outline-blue-500 p-4 rounded">outline-8 (8px)</button>
    </div>
  );
};

const ArbitraryOutlineWidthExample: React.FC = () => {
  return (
    <button className="outline outline-[3px] outline-purple-500 p-4 rounded">
      任意の値: outline-[3px]
    </button>
  );
};

// ページコンポーネント本体
const OutlineWidthPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Borders: Outline Width ';
const jaTitle = 'アウトラインの太さ';
  const links = [
    {
      title: 'Tailwind CSS: Outline Width',
      url: 'https://tailwindcss.com/docs/outline-width',
    },
    {
      title: 'MDN: outline-width',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width',
    },
  ];

  // コードスニペットを定義
  const outlineWidthHtml = `
<button class="outline outline-0 ...">...</button> {/* 0px */}
<button class="outline outline-1 ...">...</button> {/* 1px */}
<button class="outline outline-2 ...">...</button> {/* 2px */}
<button class="outline outline-4 ...">...</button> {/* 4px */}
<button class="outline outline-8 ...">...</button> {/* 8px */}
  `.trim();
  const arbitraryOutlineWidthHtml = `<button class="outline outline-[3px] ...">...</button>`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Outline Width - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Outline Width utility in Tailwind CSS. Examples and usage details for Outline Width." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の境界線 (border)
              の外側に描画されるアウトラインの太さを設定するためのユーティリティクラスです。アウトラインはレイアウトに影響を与えずに要素を視覚的に強調するためによく使用されます
              (例: フォーカス時の表示)。
            </p>
            <p>
              CSS の <code>outline-width</code> プロパティを制御します。
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
              <code>outline-{'{width}'}</code>{' '}
              の形式でクラスを要素に適用します。通常、アウトラインのスタイル (<code>outline</code>,{' '}
              <code>outline-dashed</code> など) と色 (<code>outline-{'{color}'}</code>)
              も一緒に指定します。
            </p>
            <p>デフォルトで用意されている太さ:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>outline-0</code>
                </strong>{' '}
                (0px)
              </li>
              <li>
                <strong>
                  <code>outline-1</code>
                </strong>{' '}
                (1px)
              </li>
              <li>
                <strong>
                  <code>outline-2</code>
                </strong>{' '}
                (2px)
              </li>
              <li>
                <strong>
                  <code>outline-4</code>
                </strong>{' '}
                (4px)
              </li>
              <li>
                <strong>
                  <code>outline-8</code>
                </strong>{' '}
                (8px)
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>outline-[3px]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
            <p>
              アウトラインを表示するには、太さ、スタイル、色のすべてを指定する必要があります。Tailwind
              の <code>outline</code> クラスは <code>outline-style: solid;</code> を設定します。
              <code>outline-none</code> はアウトラインを非表示にします。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なるアウトラインの太さの適用例。<code>outline</code> (スタイル) と{' '}
            <code>outline-blue-500</code> (色) を併用しています。
          </p>
          <div className="space-y-6">
            {/* Standard Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準の太さ</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{outlineWidthHtml}</code>
              </pre>
              <OutlineWidthExample />
            </div>
            {/* Arbitrary Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryOutlineWidthHtml}</code>
              </pre>
              <ArbitraryOutlineWidthExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:outline-4</code> など) や状態 (<code>focus:outline-2</code>{' '}
            など) に応じてアウトラインの太さを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              フォーム要素がフォーカスされたときにアウトラインを表示するのは一般的なアクセシビリティパターンです。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<input class="outline-none focus:outline focus:outline-2 focus:outline-blue-500 ..." />
              `.trim()}
              </code>
            </pre>
            <input
              className="outline-none focus:outline focus:outline-2 focus:outline-blue-500 border border-gray-300 p-2 rounded"
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
                アウトラインは要素のレイアウトに影響を与えません。つまり、アウトラインを追加しても要素のサイズや周囲の要素の位置は変わりません。これは境界線
                (border) との主な違いです。
              </li>
              <li>
                アウトラインを表示するには、太さ (<code>outline-*</code>)、スタイル (
                <code>outline</code>, <code>outline-dashed</code> など)、色 (<code>outline-*</code>)
                を指定する必要があります。<code>outline-none</code>{' '}
                はすべてのアウトラインを削除します。
              </li>
              <li>アウトラインは通常、要素の境界線の外側に描画されます。</li>
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
                <code>outline-style</code> (<code>outline</code>, <code>outline-dashed</code>,{' '}
                <code>outline-dotted</code>, <code>outline-double</code>, <code>outline-none</code>
                ): アウトラインのスタイルを設定します。
              </li>
              <li>
                <code>outline-color</code> (<code>outline-*</code>): アウトラインの色を設定します。
              </li>
              <li>
                <code>outline-offset</code> (<code>outline-offset-*</code>):
                アウトラインと要素の境界線との間のスペースを設定します。
              </li>
              <li>
                <code>ring-width</code> (<code>ring-*</code>): <code>box-shadow</code>{' '}
                を利用して要素の外側に輪郭線 (リング)
                を追加します。アウトラインとは異なるアプローチです。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default OutlineWidthPage;

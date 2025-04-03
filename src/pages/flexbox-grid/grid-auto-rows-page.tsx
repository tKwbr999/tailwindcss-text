import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const AutoRowsAutoExample: React.FC = () => {
  return (
    <div className="grid grid-flow-row auto-rows-auto gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">Item 1</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-6 rounded text-center">Item 2 (Taller)</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">Item 3</div>
      {/* 各行の高さはコンテンツに基づいて自動調整される */}
    </div>
  );
};

const AutoRowsMinExample: React.FC = () => {
  return (
    <div className="grid grid-flow-row auto-rows-min gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded text-center">Item 1</div>
      <div className="bg-green-300 dark:bg-green-700 p-6 rounded text-center">Item 2 (Taller)</div>
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded text-center">Item 3</div>
      {/* 各行の高さはその行内の最も背の高いアイテムの最小コンテンツ高さに合わせて最小限になる */}
    </div>
  );
};

const AutoRowsMaxExample: React.FC = () => {
  return (
    <div className="grid grid-flow-row auto-rows-max gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">Item 1</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-6 rounded text-center">
        Item 2 (Taller)
      </div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">Item 3</div>
      {/* 各行の高さはその行内の最も背の高いアイテムの最大コンテンツ高さに合わせて最大化される (auto と似た挙動に見えることが多い) */}
    </div>
  );
};

const AutoRowsFrExample: React.FC = () => {
  return (
    <div className="grid grid-flow-row auto-rows-fr gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded h-48">
      {' '}
      {/* 高さを指定 */}
      <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">1fr</div>
      <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">1fr</div>
      <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">1fr</div>
      {/* 暗黙的に作成された各行が利用可能な高さを均等に分け合う */}
    </div>
  );
};

// ページコンポーネント本体
const GridAutoRowsPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Flexbox & Grid: Grid Auto Rows (グリッド自動行サイズ)';
  const links = [
    {
      title: 'Tailwind CSS: Grid Auto Rows',
      url: 'https://tailwindcss.com/docs/grid-auto-rows',
    },
    {
      title: 'MDN: grid-auto-rows',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows',
    },
  ];

  // コードスニペットを定義
  const autoRowsAutoHtml = `
<div class="grid grid-flow-row auto-rows-auto gap-4 ...">
  <div>Item 1</div>
  <div>Item 2 (Taller)</div>
</div>
  `.trim();

  const autoRowsMinHtml = `
<div class="grid grid-flow-row auto-rows-min gap-4 ...">
  <div>Item 1</div>
  <div>Item 2 (Taller)</div>
</div>
  `.trim();

  const autoRowsMaxHtml = `
<div class="grid grid-flow-row auto-rows-max gap-4 ...">
  <div>Item 1</div>
  <div>Item 2 (Taller)</div>
</div>
  `.trim();

  const autoRowsFrHtml = `
<div class="grid grid-flow-row auto-rows-fr gap-4 h-48 ..."> {/* Height needed */}
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
  `.trim();

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Grid Auto Rows - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Grid Auto Rows utility in Tailwind CSS. Examples and usage details for Grid Auto Rows." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              グリッドコンテナ内で、<code>grid-template-rows</code>{' '}
              によって明示的にサイズが設定されていない行 (暗黙的なグリッド行)
              のサイズを制御するためのユーティリティクラスです。 これは主に、
              <code>grid-auto-flow</code> が <code>row</code> または <code>row dense</code>{' '}
              に設定されている場合 (デフォルト)
              や、アイテムが明示的なグリッド範囲外に配置された場合に適用されます。
            </p>
            <p>
              CSS の <code>grid-auto-rows</code> プロパティを制御します。
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
              <code>auto-rows-{'{value}'}</code> の形式でクラスをグリッドコンテナに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>auto-rows-auto</code>
                </strong>{' '}
                (<code>grid-auto-rows: auto;</code>):
                デフォルト。暗黙的な行のサイズは、その行に配置されるアイテムのコンテンツに基づいて自動的に決まります。
              </li>
              <li>
                <strong>
                  <code>auto-rows-min</code>
                </strong>{' '}
                (<code>grid-auto-rows: min-content;</code>):
                暗黙的な行のサイズは、その行内の最も背の高いアイテム (オーバーフローしない最小高さ)
                に合わせて最小限になります。
              </li>
              <li>
                <strong>
                  <code>auto-rows-max</code>
                </strong>{' '}
                (<code>grid-auto-rows: max-content;</code>):
                暗黙的な行のサイズは、その行内の最も背の高いアイテム
                (コンテンツをすべて表示するために必要な高さ) に合わせて最大化されます。
              </li>
              <li>
                <strong>
                  <code>auto-rows-fr</code>
                </strong>{' '}
                (<code>grid-auto-rows: minmax(0, 1fr);</code>):
                暗黙的な行が利用可能なスペースを均等に分け合うようにします (<code>1fr</code>{' '}
                と同様の挙動)。コンテナに高さが指定されている必要があります。
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>auto-rows-[100px]</code>,{' '}
              <code>auto-rows-[minmax(50px,_auto)]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            使用例 (grid-flow-row との組み合わせ)
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            <code>grid-flow-row</code> (デフォルト) と組み合わせた場合の各 auto-rows 値の適用例。
          </p>
          <div className="space-y-6">
            {/* Auto */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                auto-rows-auto (デフォルト)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{autoRowsAutoHtml}</code>
              </pre>
              <AutoRowsAutoExample />
            </div>
            {/* Min */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                auto-rows-min
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{autoRowsMinHtml}</code>
              </pre>
              <AutoRowsMinExample />
            </div>
            {/* Max */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                auto-rows-max
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{autoRowsMaxHtml}</code>
              </pre>
              <AutoRowsMaxExample />
            </div>
            {/* Fr */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                auto-rows-fr
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{autoRowsFrHtml}</code>
              </pre>
              <AutoRowsFrExample />
            </div>
          </div>
        </section>
        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など)
            を使って、画面サイズに応じて暗黙的な行のサイズ設定を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>auto-rows-auto md:auto-rows-min</code>{' '}
              はデフォルトでコンテンツ高さ、中程度の画面サイズ以上で最小コンテンツ高さを行の基準とします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="grid grid-flow-row auto-rows-auto md:auto-rows-min gap-4 ...">
  {/* ... items */}
</div>
              `.trim()}
              </code>
            </pre>
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <code>grid-auto-rows</code> はグリッドコンテナに適用します。
              </li>
              <li>
                このプロパティは、<code>grid-template-rows</code>{' '}
                で明示的に定義されていない行、または <code>grid-auto-flow: row</code> (デフォルト)
                によって暗黙的に作成される行のサイズに影響します。
              </li>
              <li>
                <code>auto-rows-min</code> や <code>auto-rows-max</code>,{' '}
                <code>auto-rows-auto</code>{' '}
                は、行内のコンテンツサイズに依存するため、コンテンツが変わると行の高さも変わる可能性があります。
              </li>
              <li>
                <code>auto-rows-fr</code> を効果的に使用するには、通常グリッドコンテナに明示的な高さ
                (<code>h-*</code>) が必要です。
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
                <code>display</code> (<code>grid</code>, <code>inline-grid</code>):
                要素をグリッドコンテナにします。
              </li>
              <li>
                <code>grid-auto-flow</code> (<code>grid-flow-row</code>,{' '}
                <code>grid-flow-row-dense</code>): アイテムの自動配置方向を行にします。
                <code>grid-auto-rows</code> が特に意味を持つ状況です。
              </li>
              <li>
                <code>grid-template-rows</code> (<code>grid-rows-*</code>):
                明示的な行テンプレートを定義します。
              </li>
              <li>
                <code>grid-auto-columns</code> (<code>auto-cols-*</code>):
                暗黙的な列のサイズを制御します。
              </li>
              <li>
                <code>height</code> (<code>h-*</code>): グリッドコンテナの高さを設定します。
                <code>auto-rows-fr</code> を使用する場合に重要です。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default GridAutoRowsPage;

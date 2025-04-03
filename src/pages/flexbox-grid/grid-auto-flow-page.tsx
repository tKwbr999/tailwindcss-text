import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const GridFlowRowExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 grid-flow-row gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      {' '}
      {/* grid-rows-2 を追加 */}
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">1</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">2</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">3</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">4</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">5</div>
      {/* アイテムは行方向に配置され、3列目で折り返して次の行へ */}
    </div>
  );
};

const GridFlowColExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 grid-flow-col gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded h-48">
      {' '}
      {/* grid-rows-2, h-48 を追加 */}
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded text-center">1</div>
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded text-center">2</div>
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded text-center">3</div>
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded text-center">4</div>
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded text-center">5</div>
      {/* アイテムは列方向に配置され、2行目で折り返して次の列へ */}
    </div>
  );
};

const GridFlowRowDenseExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 grid-flow-row-dense gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      {' '}
      {/* grid-rows-3 */}
      <div className="col-span-2 bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">
        A (col-span-2)
      </div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">B</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">C</div>
      <div className="col-span-2 bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">
        D (col-span-2)
      </div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">E</div>
      {/* 'dense' アルゴリズムにより、アイテム C が A の後の空きスペース (1行目3列目) を埋めるように配置される */}
    </div>
  );
};

const GridFlowColDenseExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 grid-flow-col-dense gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded h-64">
      {' '}
      {/* grid-rows-3, h-64 */}
      <div className="row-span-2 bg-red-300 dark:bg-red-700 p-2 rounded text-center flex items-center justify-center">
        A (row-span-2)
      </div>
      <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">B</div>
      <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">C</div>
      <div className="row-span-2 bg-red-300 dark:bg-red-700 p-2 rounded text-center flex items-center justify-center">
        D (row-span-2)
      </div>
      <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">E</div>
      {/* 'dense' アルゴリズムにより、アイテム C が A の後の空きスペース (1列目3行目) を埋めるように配置される */}
    </div>
  );
};

// ページコンポーネント本体
const GridAutoFlowPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Flexbox & Grid: Grid Auto Flow (グリッド自動配置フロー)';
  const links = [
    {
      title: 'Tailwind CSS: Grid Auto Flow',
      url: 'https://tailwindcss.com/docs/grid-auto-flow',
    },
    {
      title: 'MDN: grid-auto-flow',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow',
    },
  ];

  // コードスニペットを定義
  const flowRowHtml = `
<div class="grid grid-cols-3 grid-flow-row gap-4 ...">
  <div>1</div> <div>2</div> <div>3</div> {/* First row */}
  <div>4</div> <div>5</div> {/* Second row */}
</div>
  `.trim();

  const flowColHtml = `
<div class="grid grid-cols-3 grid-rows-2 grid-flow-col gap-4 h-48 ..."> {/* Explicit rows needed */}
  <div>1</div> {/* Col 1, Row 1 */}
  <div>2</div> {/* Col 1, Row 2 */}
  <div>3</div> {/* Col 2, Row 1 */}
  <div>4</div> {/* Col 2, Row 2 */}
  <div>5</div> {/* Col 3, Row 1 */}
</div>
  `.trim();

  const flowRowDenseHtml = `
<div class="grid grid-cols-3 grid-flow-row-dense gap-4 ...">
  <div class="col-span-2 ...">A</div>
  <div>B</div> {/* This might fill the gap after A */}
  <div>C</div>
</div>
  `.trim();

  const flowColDenseHtml = `
<div class="grid grid-cols-3 grid-rows-3 grid-flow-col-dense gap-4 h-64 ...">
  <div class="row-span-2 ...">A</div>
  <div>B</div> {/* This might fill the gap after A */}
  <div>C</div>
</div>
  `.trim();

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Grid Auto Flow - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Grid Auto Flow utility in Tailwind CSS. Examples and usage details for Grid Auto Flow." />
        {/* OGP タグ */}
        <meta property="og:title" content="Grid Auto Flow - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Grid Auto Flow utility in Tailwind CSS. Examples and usage details for Grid Auto Flow." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/flexbox-grid/grid-auto-flow" />
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
              グリッドコンテナ内で、明示的に配置されていないグリッドアイテム
              (自動配置されるアイテム)
              がどのようにグリッドに流し込まれるかを制御するためのユーティリティクラスです。アイテムを行方向、列方向、または空きスペースを埋めるように配置するかを指定します。
            </p>
            <p>
              CSS の <code>grid-auto-flow</code> プロパティを制御します。
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
              <code>grid-flow-{'{keyword}'}</code> の形式でクラスをグリッドコンテナに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>grid-flow-row</code>
                </strong>
                : デフォルト。アイテムを行方向に配置し、列がいっぱいになると次の行に移動します。
              </li>
              <li>
                <strong>
                  <code>grid-flow-col</code>
                </strong>
                : アイテムを列方向に配置し、行がいっぱいになると次の列に移動します。通常、
                <code>grid-template-rows</code> または <code>grid-auto-rows</code>{' '}
                で行の高さを定義する必要があります。
              </li>
              <li>
                <strong>
                  <code>grid-flow-row-dense</code>
                </strong>
                : <code>grid-flow-row</code>{' '}
                と同様に行方向に配置しますが、「dense」パッキングアルゴリズムを使用します。これにより、後続のアイテムがグリッド内の空きスペースを埋めるように配置されることがあります。
              </li>
              <li>
                <strong>
                  <code>grid-flow-col-dense</code>
                </strong>
                : <code>grid-flow-col</code>{' '}
                と同様に列方向に配置しますが、「dense」パッキングアルゴリズムを使用します。後続のアイテムがグリッド内の空きスペースを埋めるように配置されることがあります。
              </li>
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる grid-auto-flow 値の適用例。
          </p>
          <div className="space-y-6">
            {/* Row */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                grid-flow-row (デフォルト)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{flowRowHtml}</code>
              </pre>
              <GridFlowRowExample />
            </div>
            {/* Column */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                grid-flow-col
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{flowColHtml}</code>
              </pre>
              <GridFlowColExample />
            </div>
            {/* Row Dense */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                grid-flow-row-dense
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{flowRowDenseHtml}</code>
              </pre>
              <GridFlowRowDenseExample />
            </div>
            {/* Column Dense */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                grid-flow-col-dense
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{flowColDenseHtml}</code>
              </pre>
              <GridFlowColDenseExample />
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
            を使って、画面サイズに応じて自動配置フローを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>grid-flow-row md:grid-flow-col</code>{' '}
              はデフォルトで行方向に配置し、中程度の画面サイズ以上で列方向に配置します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="grid grid-cols-3 grid-rows-3 grid-flow-row md:grid-flow-col gap-4 ...">
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
                <code>grid-auto-flow</code> はグリッドコンテナに適用します。
              </li>
              <li>
                <code>grid-flow-col</code> を使用する場合、通常は <code>grid-template-rows</code>{' '}
                または <code>grid-auto-rows</code>{' '}
                で行の高さを定義しないと、アイテムの高さがコンテンツ依存となり、レイアウトが崩れる可能性があります。
              </li>
              <li>
                <code>dense</code> パッキングアルゴリズムを使用すると、アイテムの視覚的な順序が DOM
                の順序と大きく異なる可能性があります。これはアクセシビリティ
                (特にキーボードナビゲーションやスクリーンリーダー)
                に影響を与える可能性があるため、注意して使用してください。コンテンツの論理的な順序が重要な場合は避けるべきです。
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
                <code>grid-template-columns</code> (<code>grid-cols-*</code>):
                グリッドの列テンプレートを定義します。
              </li>
              <li>
                <code>grid-template-rows</code> (<code>grid-rows-*</code>):
                グリッドの行テンプレートを定義します。
              </li>
              <li>
                <code>grid-auto-columns</code> / <code>grid-auto-rows</code>:
                暗黙的に作成されるグリッドトラックのサイズを設定します。<code>grid-flow-col</code>{' '}
                や <code>grid-flow-row</code> で新しいトラックが作成される際に使用されます。
              </li>
              <li>
                <code>grid-column</code> / <code>grid-row</code>:
                アイテムの配置を明示的に指定します。自動配置はこの影響を受けます。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default GridAutoFlowPage;

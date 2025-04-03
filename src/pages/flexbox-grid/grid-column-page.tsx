import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const ColSpanExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="col-span-2 bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">
        col-span-2
      </div>{' '}
      {/* 2列分の幅 */}
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">1</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">2</div>
      <div className="col-span-3 bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">
        col-span-3
      </div>{' '}
      {/* 3列分の幅 */}
    </div>
  );
};

const ColStartEndExample: React.FC = () => {
  return (
    <div className="grid grid-cols-6 gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="col-start-2 col-span-4 bg-green-300 dark:bg-green-700 p-4 rounded text-center">
        col-start-2 col-span-4
      </div>{' '}
      {/* 2列目から始まり4列分 */}
      <div className="col-start-1 col-end-3 bg-green-300 dark:bg-green-700 p-4 rounded text-center">
        col-start-1 col-end-3
      </div>{' '}
      {/* 1列目から始まり3列目の前まで */}
      <div className="col-end-7 col-span-2 bg-green-300 dark:bg-green-700 p-4 rounded text-center">
        col-end-7 col-span-2
      </div>{' '}
      {/* 7列目の前 (つまり6列目) で終わり、2列分 (5, 6列目) */}
      <div className="col-start-4 col-end-6 bg-green-300 dark:bg-green-700 p-4 rounded text-center">
        col-start-4 col-end-6
      </div>{' '}
      {/* 4列目から始まり6列目の前まで (4, 5列目) */}
    </div>
  );
};

const ColFullExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">1</div>
      <div className="col-span-full bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">
        col-span-full
      </div>{' '}
      {/* 全列にまたがる */}
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">2</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">3</div>
    </div>
  );
};

// ページコンポーネント本体
const GridColumnPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Flexbox & Grid: Grid Column Start / End (グリッド列の開始/終了)';
  const links = [
    {
      title: 'Tailwind CSS: Grid Column Start / End',
      url: 'https://tailwindcss.com/docs/grid-column',
    },
    {
      title: 'MDN: grid-column-start',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start',
    },
    {
      title: 'MDN: grid-column-end',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end',
    },
    {
      title: 'MDN: grid-column (shorthand)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column',
    },
  ];

  // コードスニペットを定義
  const colSpanHtml = `
<div class="grid grid-cols-3 gap-4 ...">
  <div class="col-span-2 ...">Item 1 (spans 2 columns)</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div class="col-span-3 ...">Item 4 (spans 3 columns)</div>
</div>
  `.trim();

  const colStartEndHtml = `
<div class="grid grid-cols-6 gap-4 ...">
  <div class="col-start-2 col-span-4 ...">Item A</div> {/* Starts at column 2, spans 4 */}
  <div class="col-start-1 col-end-3 ...">Item B</div> {/* Starts at 1, ends before 3 */}
  <div class="col-end-7 col-span-2 ...">Item C</div> {/* Ends before 7, spans 2 (cols 5 & 6) */}
  <div class="col-start-4 col-end-6 ...">Item D</div> {/* Starts at 4, ends before 6 */}
</div>
  `.trim();

  const colFullHtml = `
<div class="grid grid-cols-3 gap-4 ...">
  <div>1</div>
  <div class="col-span-full ...">Full Width Item</div> {/* Spans all 3 columns */}
  <div>2</div>
  <div>3</div>
</div>
  `.trim();

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Grid Column - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Grid Column utility in Tailwind CSS. Examples and usage details for Grid Column." />
        {/* OGP タグ */}
        <meta property="og:title" content="Grid Column - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Grid Column utility in Tailwind CSS. Examples and usage details for Grid Column." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/flexbox-grid/grid-column" />
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
              グリッドアイテムがグリッドコンテナ内でどの列から始まり、どの列で終わるか、またはいくつの列にまたがる
              (span)
              かを制御するためのユーティリティクラスです。グリッドレイアウトにおけるアイテムの水平方向の配置とサイズを決定します。
            </p>
            <p>
              CSS の <code>grid-column-start</code>, <code>grid-column-end</code>, および{' '}
              <code>grid-column</code> (ショートハンド) プロパティを制御します。
            </p>
          </div>
        </section>
        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            基本的な使い方とパラメータ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>以下の形式でクラスをグリッドアイテムに適用します:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>col-span-{'{number}'}</code>
                </strong>{' '}
                (例: <code>col-span-1</code>, ..., <code>col-span-12</code>,{' '}
                <code>col-span-full</code>): アイテムが指定した数の列にまたがるようにします。
                <code>col-span-full</code> は利用可能なすべての列にまたがります。これは{' '}
                <code>
                  grid-column: span {'{number}'} / span {'{number}'};
                </code>{' '}
                または <code>grid-column: 1 / -1;</code> に対応します。
              </li>
              <li>
                <strong>
                  <code>col-start-{'{number}'}</code>
                </strong>{' '}
                (例: <code>col-start-1</code>, ..., <code>col-start-13</code>,{' '}
                <code>col-start-auto</code>): アイテムが指定したグリッド線から始まるようにします
                (1から始まる番号)。<code>grid-column-start</code> プロパティを設定します。
              </li>
              <li>
                <strong>
                  <code>col-end-{'{number}'}</code>
                </strong>{' '}
                (例: <code>col-end-1</code>, ..., <code>col-end-13</code>, <code>col-end-auto</code>
                ): アイテムが指定したグリッド線の直前で終わるようにします (1から始まる番号)。
                <code>grid-column-end</code> プロパティを設定します。
              </li>
            </ul>
            <p className="mt-4">
              グリッド線は列の間にある線です。例えば、3列のグリッドには1から4までの4本の垂直グリッド線があります。
              <code>col-start-1</code> は最初の線の左から、<code>col-end-4</code> は4番目の線の左
              (つまり3列目の右端) で終わることを意味します。
            </p>
            <p>
              任意の値 (例: <code>col-span-[3]</code>, <code>col-start-[5]</code>) も使用可能です
              (Tailwind JIT モード)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる grid-column 関連ユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* Spanning Columns */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                列にまたがる (col-span)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{colSpanHtml}</code>
              </pre>
              <ColSpanExample />
            </div>
            {/* Starting and Ending Lines */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                開始線と終了線を指定 (col-start / col-end)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{colStartEndHtml}</code>
              </pre>
              <ColStartEndExample />
            </div>
            {/* Spanning Full Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                全列にまたがる (col-span-full)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{colFullHtml}</code>
              </pre>
              <ColFullExample />
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
            を使って、画面サイズに応じてアイテムの列配置を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>col-span-full md:col-span-2</code>{' '}
              はデフォルトで全列にまたがり、中程度の画面サイズ以上で2列にまたがるようにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 ...">
  <div class="md:col-span-2 ...">Main Content</div>
  <div class="...">Sidebar</div>
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
                これらのユーティリティはグリッドアイテムに適用します。親要素がグリッドコンテナ (
                <code>display: grid</code>) である必要があります。
              </li>
              <li>グリッド線の番号は1から始まります。</li>
              <li>
                <code>col-end</code>{' '}
                で指定する番号は、アイテムが終わる「直前」の線を示します。例えば{' '}
                <code>col-end-3</code>{' '}
                は3番目の線の手前、つまり2列目の右端で終わることを意味します。
              </li>
              <li>
                <code>col-span-{'{number}'}</code> は{' '}
                <code>
                  grid-column: span {'{number}'} / span {'{number}'};
                </code>{' '}
                のショートハンドであり、開始位置は自動配置に任せ、指定した数の列にまたがります。
              </li>
              <li>
                <code>col-start-*</code> と <code>col-end-*</code>{' '}
                を組み合わせることで、より明示的に開始位置と終了位置を指定できます。
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
                グリッドの列テンプレートを定義します。これらのユーティリティが参照する列構造を定義します。
              </li>
              <li>
                <code>grid-row</code> (<code>row-span-*</code>, <code>row-start-*</code>,{' '}
                <code>row-end-*</code>): アイテムの行方向の配置とサイズを制御します。
              </li>
              <li>
                <code>gap</code> (<code>gap-*</code>, <code>gap-x-*</code>, <code>gap-y-*</code>):
                グリッドトラック間の溝を設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default GridColumnPage;

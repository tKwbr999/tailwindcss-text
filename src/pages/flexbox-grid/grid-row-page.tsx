import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const RowSpanExample: React.FC = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded h-48"> {/* grid-flow-col, 高さを指定 */}
      <div className="row-span-2 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center flex items-center justify-center">row-span-2</div> {/* 2行分の高さ */}
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">1</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">2</div>
      <div className="row-span-3 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center flex items-center justify-center">row-span-3</div> {/* 3行分の高さ */}
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">3</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">4</div>
    </div>
  );
};

const RowStartEndExample: React.FC = () => {
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded h-64"> {/* grid-flow-col, 高さを指定 */}
      <div className="row-start-2 row-span-2 bg-green-300 dark:bg-green-700 p-2 rounded text-center flex items-center justify-center">row-start-2 row-span-2</div> {/* 2行目から始まり2行分 */}
      <div className="row-start-1 row-end-3 bg-green-300 dark:bg-green-700 p-2 rounded text-center flex items-center justify-center">row-start-1 row-end-3</div> {/* 1行目から始まり3行目の前まで */}
      <div className="row-end-5 row-span-2 bg-green-300 dark:bg-green-700 p-2 rounded text-center flex items-center justify-center">row-end-5 row-span-2</div> {/* 5行目の前 (4行目) で終わり、2行分 (3, 4行目) */}
      <div className="row-start-3 row-end-4 bg-green-300 dark:bg-green-700 p-2 rounded text-center flex items-center justify-center">row-start-3 row-end-4</div> {/* 3行目から始まり4行目の前まで (3行目のみ) */}
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded text-center">Item 5</div>
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded text-center">Item 6</div>
    </div>
  );
};

const RowFullExample: React.FC = () => {
    return (
      <div className="grid grid-rows-3 grid-flow-col gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded h-48"> {/* grid-flow-col, 高さを指定 */}
        <div className="bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">1</div>
        <div className="row-span-full bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center flex items-center justify-center">row-span-full</div> {/* 全行にまたがる */}
        <div className="bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">2</div>
        <div className="bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">3</div>
        <div className="bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">4</div>
      </div>
    );
  };


// ページコンポーネント本体
const GridRowPage: React.FC = () => {
  // コードスニペットを定義
  const rowSpanHtml = `
<div class="grid grid-rows-3 grid-flow-col gap-4 h-48 ...">
  <div class="row-span-2 ...">Item A (spans 2 rows)</div>
  <div>Item B</div>
  <div>Item C</div>
  <div class="row-span-3 ...">Item D (spans 3 rows)</div>
  {/* ... */}
</div>
  `.trim();

  const rowStartEndHtml = `
<div class="grid grid-rows-4 grid-flow-col gap-4 h-64 ...">
  <div class="row-start-2 row-span-2 ...">Item A</div> {/* Starts at row 2, spans 2 */}
  <div class="row-start-1 row-end-3 ...">Item B</div> {/* Starts at 1, ends before 3 */}
  <div class="row-end-5 row-span-2 ...">Item C</div> {/* Ends before 5, spans 2 (rows 3 & 4) */}
  <div class="row-start-3 row-end-4 ...">Item D</div> {/* Starts at 3, ends before 4 */}
</div>
  `.trim();

  const rowFullHtml = `
<div class="grid grid-rows-3 grid-flow-col gap-4 h-48 ...">
  <div>1</div>
  <div class="row-span-full ...">Full Height Item</div> {/* Spans all 3 rows */}
  <div>2</div>
  {/* ... */}
</div>
  `.trim();


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Flexbox & Grid: Grid Row Start / End (グリッド行の開始/終了)
        </h1>
        {/* 概要 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              概要
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              グリッドアイテムがグリッドコンテナ内でどの行から始まり、どの行で終わるか、またはいくつの行にまたがる (span) かを制御するためのユーティリティクラスです。グリッドレイアウトにおけるアイテムの垂直方向の配置とサイズを決定します。
            </p>
            <p>
              CSS の <code>grid-row-start</code>, <code>grid-row-end</code>, および <code>grid-row</code> (ショートハンド) プロパティを制御します。
            </p>
          </CardContent>
        </Card>
        {/* 基本的な使い方とパラメータ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              基本的な使い方とパラメータ
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              以下の形式でクラスをグリッドアイテムに適用します:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>row-span-{'{number}'}</code></strong> (例: <code>row-span-1</code>, ..., <code>row-span-6</code>, <code>row-span-full</code>): アイテムが指定した数の行にまたがるようにします。<code>row-span-full</code> は利用可能なすべての行にまたがります。これは <code>grid-row: span {'{number}'} / span {'{number}'};</code> または <code>grid-row: 1 / -1;</code> に対応します。</li>
              <li><strong><code>row-start-{'{number}'}</code></strong> (例: <code>row-start-1</code>, ..., <code>row-start-7</code>, <code>row-start-auto</code>): アイテムが指定したグリッド線から始まるようにします (1から始まる番号)。<code>grid-row-start</code> プロパティを設定します。</li>
              <li><strong><code>row-end-{'{number}'}</code></strong> (例: <code>row-end-1</code>, ..., <code>row-end-7</code>, <code>row-end-auto</code>): アイテムが指定したグリッド線の直前で終わるようにします (1から始まる番号)。<code>grid-row-end</code> プロパティを設定します。</li>
            </ul>
             <p className="mt-4">
              グリッド線は行の間にある線です。例えば、3行のグリッドには1から4までの4本の水平グリッド線があります。<code>row-start-1</code> は最初の線の上から、<code>row-end-4</code> は4番目の線の上 (つまり3行目の下端) で終わることを意味します。
            </p>
             <p>
              任意の値 (例: <code>row-span-[3]</code>, <code>row-start-[5]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </CardContent>
        </Card>

        {/* 各パラメータの例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              異なる grid-row 関連ユーティリティの適用例。<code>grid-flow-col</code> とコンテナの高さ指定が必要です。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Spanning Rows */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">行にまたがる (row-span)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{rowSpanHtml}</code>
              </pre>
              <RowSpanExample />
            </div>
            {/* Starting and Ending Lines */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">開始線と終了線を指定 (row-start / row-end)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{rowStartEndHtml}</code>
              </pre>
              <RowStartEndExample />
            </div>
             {/* Spanning Full Height */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">全行にまたがる (row-span-full)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{rowFullHtml}</code>
              </pre>
              <RowFullExample />
            </div>
          </CardContent>
        </Card>

        {/* レスポンシブ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてアイテムの行配置を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>row-span-1 md:row-span-2</code> はデフォルトで1行分の高さ、中程度の画面サイズ以上で2行分の高さになります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="grid grid-rows-3 grid-flow-col ...">
  <div class="row-span-1 md:row-span-2 ...">Item A</div>
  {/* ... */}
</div>
              `.trim()}</code>
            </pre>
          </CardContent>
        </Card>

        {/* 注意点 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              注意点
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                これらのユーティリティはグリッドアイテムに適用します。親要素がグリッドコンテナ (<code>display: grid</code>) である必要があります。
              </li>
              <li>
                グリッド線の番号は1から始まります。
              </li>
               <li>
                <code>row-end</code> で指定する番号は、アイテムが終わる「直前」の線を示します。例えば <code>row-end-3</code> は3番目の線の手前、つまり2行目の下端で終わることを意味します。
              </li>
               <li>
                <code>row-span-{'{number}'}</code> は <code>grid-row: span {'{number}'} / span {'{number}'};</code> のショートハンドであり、開始位置は自動配置に任せ、指定した数の行にまたがります。
              </li>
               <li>
                <code>row-start-*</code> と <code>row-end-*</code> を組み合わせることで、より明示的に開始位置と終了位置を指定できます。
              </li>
               <li>
                行の高さを制御するには、親コンテナに <code>grid-template-rows</code> (<code>grid-rows-*</code>) や <code>grid-auto-rows</code> を設定するか、コンテナ自体に高さを指定する必要があります。
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* 関連ユーティリティ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              関連ユーティリティ
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
               <li>
                <code>display</code> (<code>grid</code>, <code>inline-grid</code>): 要素をグリッドコンテナにします。
              </li>
              <li>
                <code>grid-template-rows</code> (<code>grid-rows-*</code>): グリッドの行テンプレートを定義します。これらのユーティリティが参照する行構造を定義します。
              </li>
              <li>
                <code>grid-column</code> (<code>col-span-*</code>, <code>col-start-*</code>, <code>col-end-*</code>): アイテムの列方向の配置とサイズを制御します。
              </li>
               <li>
                <code>grid-auto-flow</code> (<code>grid-flow-row</code>, <code>grid-flow-col</code> など): アイテムが自動配置される方向を制御します。
              </li>
               <li>
                <code>gap</code> (<code>gap-*</code>, <code>gap-x-*</code>, <code>gap-y-*</code>): グリッドトラック間の溝を設定します。
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* 公式ドキュメント参照 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              公式ドキュメント参照
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <a
                  href="https://tailwindcss.com/docs/grid-row"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Grid Row Start / End
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: grid-row-start
                </a>
              </li>
               <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: grid-row-end
                </a>
              </li>
               <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: grid-row (shorthand)
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GridRowPage;
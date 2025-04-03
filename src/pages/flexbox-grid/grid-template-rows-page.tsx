import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const GridRowsExample: React.FC = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded h-48"> {/* grid-flow-col で列方向に配置, 高さを指定 */}
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">1</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">2</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">3</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">4</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">5</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">6</div>
      {/* 3行のグリッドが作成され、アイテムは列方向に流し込まれる */}
    </div>
  );
};

const GridRowsNoneExample: React.FC = () => {
  return (
    <div className="grid grid-rows-none grid-flow-col gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded h-32"> {/* grid-flow-col, 高さを指定 */}
      {/* grid-rows-none は通常、他のグリッドプロパティと組み合わせて使用される。
          単独ではアイテムは暗黙的な行に配置される。 */}
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded text-center">1</div>
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded text-center">2</div>
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded text-center">3</div>
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded text-center">4</div>
    </div>
  );
};

const GridRowsSubgridExample: React.FC = () => {
    // 注意: subgrid は比較的新しい機能で、ブラウザのサポート状況に注意が必要です。
    //       また、Tailwind CSS v3.3 以降でサポートされています。
    //       この例は概念を示すもので、完全な動作には適切なネスト構造が必要です。
    return (
      <div className="grid grid-rows-3 gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded h-64">
        <div className="bg-yellow-200 dark:bg-yellow-800 p-2 rounded">Outer 1</div>
        <div className="grid grid-rows-subgrid row-span-2 gap-2 bg-yellow-300 dark:bg-yellow-700 p-2 rounded">
          {/* この内部グリッドは親の行定義 (2行分) を継承する */}
          <div className="bg-yellow-500 dark:bg-yellow-600 p-2 rounded text-center">Sub 1</div>
          <div className="bg-yellow-500 dark:bg-yellow-600 p-2 rounded text-center">Sub 2</div>
        </div>
         {/* <div className="bg-yellow-200 dark:bg-yellow-800 p-2 rounded">Outer 2</div> */}
      </div>
    );
  };

const ArbitraryRowsExample: React.FC = () => {
    return (
      <div className="grid grid-rows-[auto_1fr_50px] grid-flow-col gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded h-64">
        <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">auto</div>
        <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">1fr</div>
        <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">50px</div>
        <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">Item 4</div>
        <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">Item 5</div>
        <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">Item 6</div>
      </div>
    );
  };


// ページコンポーネント本体
const GridTemplateRowsPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Flexbox & Grid: Grid Template Rows (グリッド行テンプレート)';
  const links = [
    {
      title: 'Tailwind CSS: Grid Template Rows',
      url: 'https://tailwindcss.com/docs/grid-template-rows',
    },
    {
      title: 'MDN: grid-template-rows',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows',
    },
  ];

  // コードスニペットを定義
  const gridRowsHtml = `
<div class="grid grid-rows-3 grid-flow-col gap-4 h-48 ..."> {/* grid-flow-col, 高さを指定 */}
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>
  `.trim();

  const gridRowsNoneHtml = `
<div class="grid grid-rows-none grid-flow-col ...">
  {/* アイテムは暗黙的な行に配置される */}
  <div>1</div>
  <div>2</div>
</div>
  `.trim();

  const gridRowsSubgridHtml = `
<div class="grid grid-rows-3 gap-4 ...">
  <div>Outer 1</div>
  {/* 親の行定義 (2行分) を継承 */}
  <div class="grid grid-rows-subgrid row-span-2 gap-2 ...">
    <div>Sub 1</div>
    <div>Sub 2</div>
  </div>
</div>
  `.trim();

    const arbitraryRowsHtml = `
<div class="grid grid-rows-[auto_1fr_50px] grid-flow-col gap-4 h-64 ...">
  <div>Row 1 (auto)</div>
  <div>Row 2 (1fr)</div>
  <div>Row 3 (50px)</div>
  {/* ... more items */}
</div>
  `.trim();


  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Grid Template Rows - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Grid Template Rows utility in Tailwind CSS. Examples and usage details for Grid Template Rows." />
        {/* OGP タグ */}
        <meta property="og:title" content="Grid Template Rows - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Grid Template Rows utility in Tailwind CSS. Examples and usage details for Grid Template Rows." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/flexbox-grid/grid-template-rows" />
        {/* <meta property="og:image" content="[画像のURL]" /> */} {/* 必要に応じて画像URLを設定 */}
      </Helmet>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              グリッドコンテナ内の行の数とサイズを定義するためのユーティリティクラスです。グリッドレイアウトの垂直方向の構造を作成します。
            </p>
            <p>
              CSS の <code>grid-template-rows</code> プロパティを制御します。
            </p>
          </div>
        </section>

        {/* 基本的な使い方とパラメータ */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            基本的な使い方とパラメータ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              <code>grid-rows-{'{number}'}</code>, <code>grid-rows-none</code>, <code>grid-rows-subgrid</code>, または任意の値を使用してクラスをグリッドコンテナ (<code>display: grid</code> または <code>inline-grid</code> が適用された要素) に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>grid-rows-{'{number}'}</code></strong> (例: <code>grid-rows-1</code>, ..., <code>grid-rows-6</code>): 指定した数の均等高さの行を作成します (例: <code>grid-rows-3</code> は <code>grid-template-rows: repeat(3, minmax(0, 1fr));</code>)。コンテナに高さが指定されている必要があります。</li>
              <li><strong><code>grid-rows-none</code></strong> (<code>grid-template-rows: none;</code>): 明示的な行定義を行いません。アイテムは暗黙的なグリッドルールに従って配置されます。</li>
              <li><strong><code>grid-rows-subgrid</code></strong> (<code>grid-template-rows: subgrid;</code>): ネストされたグリッドコンテナが、親グリッドの行定義を継承するようにします。親グリッドで占める行のサイズと数をそのまま内部で使用します (比較的新しい機能、Tailwind v3.3+)。</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>grid-rows-[auto_1fr_50px]</code>) を使用して、より複雑な行定義 (自動高さ、可変高さ、固定高さなど) を行うことも可能です (Tailwind JIT モード)。<code>minmax()</code>, <code>repeat()</code>, <code>fit-content()</code> などの CSS グリッド関数も利用できます。
            </p>
          </div>
        </section>

        {/* 使用例 */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なる grid-template-rows 値の適用例。多くの場合、コンテナに高さ (例: <code>h-48</code>) と <code>grid-flow-col</code> が必要です。
          </p>
          <div className="space-y-6">
            {/* Numbered Rows */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">数値指定 (grid-rows-3)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{gridRowsHtml}</code>
              </pre>
              <GridRowsExample />
            </div>
            {/* None */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">grid-rows-none</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{gridRowsNoneHtml}</code>
              </pre>
              <GridRowsNoneExample />
            </div>
             {/* Subgrid */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">grid-rows-subgrid (要対応ブラウザ)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{gridRowsSubgridHtml}</code>
              </pre>
              <GridRowsSubgridExample />
            </div>
             {/* Arbitrary */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryRowsHtml}</code>
              </pre>
              <ArbitraryRowsExample />
            </div>
          </div>
        </section>

        {/* レスポンシブ */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて行の数や定義を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>grid-rows-6 sm:grid-rows-3</code> はデフォルトで6行、スモールスクリーン以上で3行のグリッドを作成します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="grid grid-rows-6 sm:grid-rows-3 grid-flow-col gap-4 h-96 ...">
  {/* ... items */}
</div>
              `.trim()}</code>
            </pre>
          </div>
        </section>

        {/* 注意点 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <code>grid-template-rows</code> はグリッドコンテナに適用します。
              </li>
              <li>
                <code>grid-rows-{'{number}'}</code> で均等高さの行を作成する場合、通常はコンテナに明示的な高さ (<code>h-*</code>) が必要です。そうでない場合、行の高さはコンテンツに基づいて決まります。
              </li>
               <li>
                <code>subgrid</code> はブラウザのサポートがまだ限定的です。
              </li>
               <li>
                グリッドアイテムの配置は、<code>grid-row</code> (<code>row-span-*</code>, <code>row-start-*</code>, <code>row-end-*</code>) や <code>grid-column</code> ユーティリティでさらに細かく制御できます。
              </li>
               <li>
                行間の溝 (gap) は <code>gap-*</code>, <code>gap-x-*</code>, <code>gap-y-*</code> ユーティリティで設定します。
              </li>
            </ul>
          </div>
        </section>

        {/* 関連ユーティリティ */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            関連ユーティリティ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
               <li>
                <code>display</code> (<code>grid</code>, <code>inline-grid</code>): 要素をグリッドコンテナにします。
              </li>
              <li>
                <code>grid-template-columns</code> (<code>grid-cols-*</code>): グリッドの列テンプレートを定義します。
              </li>
              <li>
                <code>grid-auto-flow</code> (<code>grid-flow-row</code>, <code>grid-flow-col</code> など): アイテムが自動配置される方向を制御します。<code>grid-rows-*</code> を使う場合、<code>grid-flow-col</code> を指定することが多いです。
              </li>
               <li>
                <code>grid-auto-columns</code> / <code>grid-auto-rows</code>: 暗黙的に作成されるグリッドトラックのサイズを設定します。
              </li>
               <li>
                <code>grid-row</code> (<code>row-span-*</code>, <code>row-start-*</code>, <code>row-end-*</code>): アイテムがどの行に配置されるかを制御します。
              </li>
               <li>
                <code>grid-column</code> (<code>col-span-*</code>, <code>col-start-*</code>, <code>col-end-*</code>): アイテムがどの列に配置されるかを制御します。
              </li>
               <li>
                <code>gap</code> (<code>gap-*</code>, <code>gap-x-*</code>, <code>gap-y-*</code>): グリッドトラック間の溝を設定します。
              </li>
               <li>
                <code>height</code> (<code>h-*</code>): グリッドコンテナの高さを設定します。<code>grid-rows-*</code> で均等分割する場合に重要です。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default GridTemplateRowsPage;
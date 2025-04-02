import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
        <div className="bg-yellow-300 dark:bg-yellow-700 p-6 rounded text-center">Item 2 (Taller)</div>
        <div className="bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">Item 3</div>
        {/* 各行の高さはその行内の最も背の高いアイテムの最大コンテンツ高さに合わせて最大化される (auto と似た挙動に見えることが多い) */}
      </div>
    );
  };

const AutoRowsFrExample: React.FC = () => {
    return (
      <div className="grid grid-flow-row auto-rows-fr gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded h-48"> {/* 高さを指定 */}
        <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">1fr</div>
        <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">1fr</div>
        <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">1fr</div>
        {/* 暗黙的に作成された各行が利用可能な高さを均等に分け合う */}
      </div>
    );
  };


// ページコンポーネント本体
const GridAutoRowsPage: React.FC = () => {
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
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Flexbox & Grid: Grid Auto Rows (グリッド自動行サイズ)
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
              グリッドコンテナ内で、<code>grid-template-rows</code> によって明示的にサイズが設定されていない行 (暗黙的なグリッド行) のサイズを制御するためのユーティリティクラスです。
              これは主に、<code>grid-auto-flow</code> が <code>row</code> または <code>row dense</code> に設定されている場合 (デフォルト) や、アイテムが明示的なグリッド範囲外に配置された場合に適用されます。
            </p>
            <p>
              CSS の <code>grid-auto-rows</code> プロパティを制御します。
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
              <code>auto-rows-{'{value}'}</code> の形式でクラスをグリッドコンテナに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>auto-rows-auto</code></strong> (<code>grid-auto-rows: auto;</code>): デフォルト。暗黙的な行のサイズは、その行に配置されるアイテムのコンテンツに基づいて自動的に決まります。</li>
              <li><strong><code>auto-rows-min</code></strong> (<code>grid-auto-rows: min-content;</code>): 暗黙的な行のサイズは、その行内の最も背の高いアイテム (オーバーフローしない最小高さ) に合わせて最小限になります。</li>
              <li><strong><code>auto-rows-max</code></strong> (<code>grid-auto-rows: max-content;</code>): 暗黙的な行のサイズは、その行内の最も背の高いアイテム (コンテンツをすべて表示するために必要な高さ) に合わせて最大化されます。</li>
              <li><strong><code>auto-rows-fr</code></strong> (<code>grid-auto-rows: minmax(0, 1fr);</code>): 暗黙的な行が利用可能なスペースを均等に分け合うようにします (<code>1fr</code> と同様の挙動)。コンテナに高さが指定されている必要があります。</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>auto-rows-[100px]</code>, <code>auto-rows-[minmax(50px,_auto)]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </CardContent>
        </Card>

        {/* 各パラメータの例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例 (grid-flow-row との組み合わせ)
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>grid-flow-row</code> (デフォルト) と組み合わせた場合の各 auto-rows 値の適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Auto */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">auto-rows-auto (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{autoRowsAutoHtml}</code>
              </pre>
              <AutoRowsAutoExample />
            </div>
            {/* Min */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">auto-rows-min</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{autoRowsMinHtml}</code>
              </pre>
              <AutoRowsMinExample />
            </div>
             {/* Max */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">auto-rows-max</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{autoRowsMaxHtml}</code>
              </pre>
              <AutoRowsMaxExample />
            </div>
             {/* Fr */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">auto-rows-fr</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{autoRowsFrHtml}</code>
              </pre>
              <AutoRowsFrExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて暗黙的な行のサイズ設定を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>auto-rows-auto md:auto-rows-min</code> はデフォルトでコンテンツ高さ、中程度の画面サイズ以上で最小コンテンツ高さを行の基準とします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="grid grid-flow-row auto-rows-auto md:auto-rows-min gap-4 ...">
  {/* ... items */}
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
                <code>grid-auto-rows</code> はグリッドコンテナに適用します。
              </li>
              <li>
                このプロパティは、<code>grid-template-rows</code> で明示的に定義されていない行、または <code>grid-auto-flow: row</code> (デフォルト) によって暗黙的に作成される行のサイズに影響します。
              </li>
               <li>
                <code>auto-rows-min</code> や <code>auto-rows-max</code>, <code>auto-rows-auto</code> は、行内のコンテンツサイズに依存するため、コンテンツが変わると行の高さも変わる可能性があります。
              </li>
               <li>
                <code>auto-rows-fr</code> を効果的に使用するには、通常グリッドコンテナに明示的な高さ (<code>h-*</code>) が必要です。
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
                <code>grid-auto-flow</code> (<code>grid-flow-row</code>, <code>grid-flow-row-dense</code>): アイテムの自動配置方向を行にします。<code>grid-auto-rows</code> が特に意味を持つ状況です。
              </li>
              <li>
                <code>grid-template-rows</code> (<code>grid-rows-*</code>): 明示的な行テンプレートを定義します。
              </li>
               <li>
                <code>grid-auto-columns</code> (<code>auto-cols-*</code>): 暗黙的な列のサイズを制御します。
              </li>
               <li>
                <code>height</code> (<code>h-*</code>): グリッドコンテナの高さを設定します。<code>auto-rows-fr</code> を使用する場合に重要です。
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
                  href="https://tailwindcss.com/docs/grid-auto-rows"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Grid Auto Rows
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: grid-auto-rows
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GridAutoRowsPage;
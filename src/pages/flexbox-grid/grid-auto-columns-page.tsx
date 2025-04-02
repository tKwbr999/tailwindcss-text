import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const AutoColsAutoExample: React.FC = () => {
  return (
    <div className="grid grid-flow-col auto-cols-auto gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">短い</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">少し長いコンテンツ</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">もっともっと長いコンテンツが入る列</div>
      {/* 各列の幅はコンテンツに基づいて自動調整される */}
    </div>
  );
};

const AutoColsMinExample: React.FC = () => {
  return (
    <div className="grid grid-flow-col auto-cols-min gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">短い</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">少し長いコンテンツ</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">もっともっと長いコンテンツが入る列</div>
      {/* 各列の幅はその列内の最も幅の広いコンテンツに合わせて最小限になる */}
    </div>
  );
};

const AutoColsMaxExample: React.FC = () => {
    return (
      <div className="grid grid-flow-col auto-cols-max gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">短い</div>
        <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">少し長いコンテンツ</div>
        <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">もっともっと長いコンテンツが入る列</div>
        {/* 各列の幅はその列内の最も幅の広いコンテンツに合わせて最大化される (auto と似た挙動に見えることが多い) */}
      </div>
    );
  };

const AutoColsFrExample: React.FC = () => {
    return (
      <div className="grid grid-flow-col auto-cols-fr gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">1fr</div>
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">1fr</div>
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">1fr</div>
        {/* 暗黙的に作成された各列が利用可能なスペースを均等に分け合う */}
      </div>
    );
  };


// ページコンポーネント本体
const GridAutoColumnsPage: React.FC = () => {
  // コードスニペットを定義
  const autoColsAutoHtml = `
<div class="grid grid-flow-col auto-cols-auto gap-4 ...">
  <div>Item 1</div>
  <div>Item 2 (Longer)</div>
</div>
  `.trim();

  const autoColsMinHtml = `
<div class="grid grid-flow-col auto-cols-min gap-4 ...">
  <div>Item 1</div>
  <div>Item 2 (Longer)</div>
</div>
  `.trim();

  const autoColsMaxHtml = `
<div class="grid grid-flow-col auto-cols-max gap-4 ...">
  <div>Item 1</div>
  <div>Item 2 (Longer)</div>
</div>
  `.trim();

    const autoColsFrHtml = `
<div class="grid grid-flow-col auto-cols-fr gap-4 ...">
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
          Flexbox & Grid: Grid Auto Columns (グリッド自動列サイズ)
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
              グリッドコンテナ内で、<code>grid-template-columns</code> によって明示的にサイズが設定されていない列 (暗黙的なグリッド列) のサイズを制御するためのユーティリティクラスです。
              これは主に、<code>grid-auto-flow</code> が <code>column</code> または <code>column dense</code> に設定されている場合や、アイテムが明示的なグリッド範囲外に配置された場合に適用されます。
            </p>
            <p>
              CSS の <code>grid-auto-columns</code> プロパティを制御します。
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
              <code>auto-cols-{'{value}'}</code> の形式でクラスをグリッドコンテナに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>auto-cols-auto</code></strong> (<code>grid-auto-columns: auto;</code>): デフォルト。暗黙的な列のサイズは、その列に配置されるアイテムのコンテンツに基づいて自動的に決まります。</li>
              <li><strong><code>auto-cols-min</code></strong> (<code>grid-auto-columns: min-content;</code>): 暗黙的な列のサイズは、その列内の最も幅の広いアイテム (オーバーフローしない最小幅) に合わせて最小限になります。</li>
              <li><strong><code>auto-cols-max</code></strong> (<code>grid-auto-columns: max-content;</code>): 暗黙的な列のサイズは、その列内の最も幅の広いアイテム (コンテンツをすべて表示するために必要な幅) に合わせて最大化されます。</li>
              <li><strong><code>auto-cols-fr</code></strong> (<code>grid-auto-columns: minmax(0, 1fr);</code>): 暗黙的な列が利用可能なスペースを均等に分け合うようにします (<code>1fr</code> と同様の挙動)。</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>auto-cols-[200px]</code>, <code>auto-cols-[minmax(100px,_1fr)]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </CardContent>
        </Card>

        {/* 各パラメータの例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例 (grid-flow-col との組み合わせ)
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>grid-flow-col</code> と組み合わせた場合の各 auto-cols 値の適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Auto */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">auto-cols-auto (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{autoColsAutoHtml}</code>
              </pre>
              <AutoColsAutoExample />
            </div>
            {/* Min */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">auto-cols-min</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{autoColsMinHtml}</code>
              </pre>
              <AutoColsMinExample />
            </div>
             {/* Max */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">auto-cols-max</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{autoColsMaxHtml}</code>
              </pre>
              <AutoColsMaxExample />
            </div>
             {/* Fr */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">auto-cols-fr</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{autoColsFrHtml}</code>
              </pre>
              <AutoColsFrExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて暗黙的な列のサイズ設定を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>auto-cols-min md:auto-cols-fr</code> はデフォルトで最小コンテンツ幅、中程度の画面サイズ以上で利用可能なスペースを均等に分け合うようにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="grid grid-flow-col auto-cols-min md:auto-cols-fr gap-4 ...">
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
                <code>grid-auto-columns</code> はグリッドコンテナに適用します。
              </li>
              <li>
                このプロパティは、<code>grid-template-columns</code> で明示的に定義されていない列、または <code>grid-auto-flow: column</code> によって暗黙的に作成される列のサイズに影響します。
              </li>
               <li>
                <code>auto-cols-min</code> や <code>auto-cols-max</code> は、列内のコンテンツサイズに依存するため、コンテンツが変わると列幅も変わる可能性があります。
              </li>
               <li>
                <code>auto-cols-fr</code> は、利用可能なスペースを均等に分配するため、コンテナの幅に依存します。
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
                <code>grid-auto-flow</code> (<code>grid-flow-col</code>, <code>grid-flow-col-dense</code>): アイテムの自動配置方向を列にします。<code>grid-auto-columns</code> が特に意味を持つ状況です。
              </li>
              <li>
                <code>grid-template-columns</code> (<code>grid-cols-*</code>): 明示的な列テンプレートを定義します。
              </li>
               <li>
                <code>grid-auto-rows</code> (<code>auto-rows-*</code>): 暗黙的な行のサイズを制御します。
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
                  href="https://tailwindcss.com/docs/grid-auto-columns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Grid Auto Columns
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: grid-auto-columns
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GridAutoColumnsPage;
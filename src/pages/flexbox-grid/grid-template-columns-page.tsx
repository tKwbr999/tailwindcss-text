import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const GridColsExample: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">1</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">2</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">3</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">4</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">5</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">6</div>
      {/* 4列のグリッドが作成される */}
    </div>
  );
};

const GridColsNoneExample: React.FC = () => {
  return (
    <div className="grid grid-cols-none gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      {/* grid-cols-none は通常、他のグリッドプロパティと組み合わせて使用されるか、
          レスポンシブでグリッドを解除する場合に使われる。
          単独ではアイテムは暗黙的な列に配置される (通常は1列に見える)。 */}
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">1</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">2</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">3</div>
    </div>
  );
};

const GridColsSubgridExample: React.FC = () => {
    // 注意: subgrid は比較的新しい機能で、ブラウザのサポート状況に注意が必要です。
    //       また、Tailwind CSS v3.3 以降でサポートされています。
    //       この例は概念を示すもので、完全な動作には適切なネスト構造が必要です。
    return (
      <div className="grid grid-cols-3 gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <div className="bg-yellow-200 dark:bg-yellow-800 p-2 rounded">Outer 1</div>
        <div className="grid grid-cols-subgrid col-span-2 gap-2 bg-yellow-300 dark:bg-yellow-700 p-2 rounded">
          {/* この内部グリッドは親の列定義 (2列分) を継承する */}
          <div className="bg-yellow-500 dark:bg-yellow-600 p-2 rounded text-center">Sub 1</div>
          <div className="bg-yellow-500 dark:bg-yellow-600 p-2 rounded text-center">Sub 2</div>
        </div>
        <div className="bg-yellow-200 dark:bg-yellow-800 p-2 rounded col-span-3">Outer 2</div>
      </div>
    );
  };

const ArbitraryColsExample: React.FC = () => {
    return (
      <div className="grid grid-cols-[200px_1fr_minmax(100px,_300px)] gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">200px</div>
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">1fr</div>
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">minmax(100px, 300px)</div>
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center col-span-3">Span 3</div>
      </div>
    );
  };


// ページコンポーネント本体
const GridTemplateColumnsPage: React.FC = () => {
  // コードスニペットを定義
  const gridColsHtml = `
<div class="grid grid-cols-4 gap-4 ...">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  {/* ... */}
</div>
  `.trim();

  const gridColsNoneHtml = `
<div class="grid grid-cols-none ...">
  {/* アイテムは暗黙的な列に配置される */}
  <div>1</div>
  <div>2</div>
</div>
  `.trim();

  const gridColsSubgridHtml = `
<div class="grid grid-cols-3 gap-4 ...">
  <div>Outer 1</div>
  {/* 親の列定義 (2列分) を継承 */}
  <div class="grid grid-cols-subgrid col-span-2 gap-2 ...">
    <div>Sub 1</div>
    <div>Sub 2</div>
  </div>
</div>
  `.trim();

    const arbitraryColsHtml = `
<div class="grid grid-cols-[200px_1fr_minmax(100px,_300px)] gap-4 ...">
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
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
          Flexbox & Grid: Grid Template Columns (グリッド列テンプレート)
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
              グリッドコンテナ内の列の数とサイズを定義するためのユーティリティクラスです。グリッドレイアウトの基本的な構造を作成します。
            </p>
            <p>
              CSS の <code>grid-template-columns</code> プロパティを制御します。
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
              <code>grid-cols-{'{number}'}</code>, <code>grid-cols-none</code>, <code>grid-cols-subgrid</code>, または任意の値を使用してクラスをグリッドコンテナ (<code>display: grid</code> または <code>inline-grid</code> が適用された要素) に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>grid-cols-{'{number}'}</code></strong> (例: <code>grid-cols-1</code>, ..., <code>grid-cols-12</code>): 指定した数の均等幅の列を作成します (例: <code>grid-cols-4</code> は <code>grid-template-columns: repeat(4, minmax(0, 1fr));</code>)。</li>
              <li><strong><code>grid-cols-none</code></strong> (<code>grid-template-columns: none;</code>): 明示的な列定義を行いません。アイテムは暗黙的なグリッドルールに従って配置されます (通常は1列のように振る舞いますが、他のグリッドプロパティに依存します)。</li>
              <li><strong><code>grid-cols-subgrid</code></strong> (<code>grid-template-columns: subgrid;</code>): ネストされたグリッドコンテナが、親グリッドの列定義を継承するようにします。親グリッドで占める列のサイズと数をそのまま内部で使用します (比較的新しい機能、Tailwind v3.3+)。</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>grid-cols-[200px_1fr_auto]</code>) を使用して、より複雑な列定義 (固定幅、可変幅、コンテンツ幅など) を行うことも可能です (Tailwind JIT モード)。<code>minmax()</code>, <code>repeat()</code>, <code>fit-content()</code> などの CSS グリッド関数も利用できます。
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
              異なる grid-template-columns 値の適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Numbered Columns */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">数値指定 (grid-cols-4)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{gridColsHtml}</code>
              </pre>
              <GridColsExample />
            </div>
            {/* None */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">grid-cols-none</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{gridColsNoneHtml}</code>
              </pre>
              <GridColsNoneExample />
            </div>
             {/* Subgrid */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">grid-cols-subgrid (要対応ブラウザ)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{gridColsSubgridHtml}</code>
              </pre>
              <GridColsSubgridExample />
            </div>
             {/* Arbitrary */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryColsHtml}</code>
              </pre>
              <ArbitraryColsExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて列の数や定義を変更できます。レスポンシブグリッドレイアウトの基本です。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>grid-cols-1 md:grid-cols-3</code> はデフォルトで1列、中程度の画面サイズ以上で3列のグリッドを作成します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 ...">
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
                <code>grid-template-columns</code> はグリッドコンテナに適用します。
              </li>
              <li>
                <code>grid-cols-{'{number}'}</code> は均等幅の列を作成しますが、任意の値を使えば異なる幅の列を組み合わせることができます。
              </li>
               <li>
                <code>subgrid</code> は非常に強力ですが、ブラウザのサポートがまだ限定的である点に注意が必要です。
              </li>
               <li>
                グリッドアイテムの配置は、<code>grid-column</code> (<code>col-span-*</code>, <code>col-start-*</code>, <code>col-end-*</code>) や <code>grid-row</code> ユーティリティでさらに細かく制御できます。
              </li>
               <li>
                列間の溝 (gap) は <code>gap-*</code>, <code>gap-x-*</code>, <code>gap-y-*</code> ユーティリティで設定します。
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
                <code>grid-template-rows</code> (<code>grid-rows-*</code>): グリッドの行テンプレートを定義します。
              </li>
              <li>
                <code>grid-auto-flow</code> (<code>grid-flow-row</code>, <code>grid-flow-col</code> など): アイテムが自動配置される方向を制御します。
              </li>
               <li>
                <code>grid-auto-columns</code> / <code>grid-auto-rows</code>: 暗黙的に作成されるグリッドトラックのサイズを設定します。
              </li>
               <li>
                <code>grid-column</code> (<code>col-span-*</code>, <code>col-start-*</code>, <code>col-end-*</code>): アイテムがどの列に配置されるかを制御します。
              </li>
               <li>
                <code>grid-row</code> (<code>row-span-*</code>, <code>row-start-*</code>, <code>row-end-*</code>): アイテムがどの行に配置されるかを制御します。
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
                  href="https://tailwindcss.com/docs/grid-template-columns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Grid Template Columns
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: grid-template-columns
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GridTemplateColumnsPage;
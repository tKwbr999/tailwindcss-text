import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Borders: Outline Width (アウトラインの太さ)
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
              要素の境界線 (border) の外側に描画されるアウトラインの太さを設定するためのユーティリティクラスです。アウトラインはレイアウトに影響を与えずに要素を視覚的に強調するためによく使用されます (例: フォーカス時の表示)。
            </p>
            <p>
              CSS の <code>outline-width</code> プロパティを制御します。
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
              <code>outline-{'{width}'}</code> の形式でクラスを要素に適用します。通常、アウトラインのスタイル (<code>outline</code>, <code>outline-dashed</code> など) と色 (<code>outline-{'{color}'}</code>) も一緒に指定します。
            </p>
            <p>デフォルトで用意されている太さ:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>outline-0</code></strong> (0px)</li>
              <li><strong><code>outline-1</code></strong> (1px)</li>
              <li><strong><code>outline-2</code></strong> (2px)</li>
              <li><strong><code>outline-4</code></strong> (4px)</li>
              <li><strong><code>outline-8</code></strong> (8px)</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>outline-[3px]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
             <p>
              アウトラインを表示するには、太さ、スタイル、色のすべてを指定する必要があります。Tailwind の <code>outline</code> クラスは <code>outline-style: solid;</code> を設定します。<code>outline-none</code> はアウトラインを非表示にします。
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
              異なるアウトラインの太さの適用例。<code>outline</code> (スタイル) と <code>outline-blue-500</code> (色) を併用しています。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
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
          </CardContent>
        </Card>

        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブと状態変化
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイント (<code>md:outline-4</code> など) や状態 (<code>focus:outline-2</code> など) に応じてアウトラインの太さを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              フォーム要素がフォーカスされたときにアウトラインを表示するのは一般的なアクセシビリティパターンです。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<input class="outline-none focus:outline focus:outline-2 focus:outline-blue-500 ..." />
              `.trim()}</code>
            </pre>
             <input className="outline-none focus:outline focus:outline-2 focus:outline-blue-500 border border-gray-300 p-2 rounded" placeholder="Focus me" />
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
                アウトラインは要素のレイアウトに影響を与えません。つまり、アウトラインを追加しても要素のサイズや周囲の要素の位置は変わりません。これは境界線 (border) との主な違いです。
              </li>
              <li>
                アウトラインを表示するには、太さ (<code>outline-*</code>)、スタイル (<code>outline</code>, <code>outline-dashed</code> など)、色 (<code>outline-*</code>) を指定する必要があります。<code>outline-none</code> はすべてのアウトラインを削除します。
              </li>
               <li>
                アウトラインは通常、要素の境界線の外側に描画されます。
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
                <code>outline-style</code> (<code>outline</code>, <code>outline-dashed</code>, <code>outline-dotted</code>, <code>outline-double</code>, <code>outline-none</code>): アウトラインのスタイルを設定します。
              </li>
              <li>
                <code>outline-color</code> (<code>outline-*</code>): アウトラインの色を設定します。
              </li>
              <li>
                <code>outline-offset</code> (<code>outline-offset-*</code>): アウトラインと要素の境界線との間のスペースを設定します。
              </li>
               <li>
                <code>ring-width</code> (<code>ring-*</code>): <code>box-shadow</code> を利用して要素の外側に輪郭線 (リング) を追加します。アウトラインとは異なるアプローチです。
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
                  href="https://tailwindcss.com/docs/outline-width"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Outline Width
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: outline-width
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OutlineWidthPage;
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// アウトラインのオフセットを示すため、アウトラインのスタイル、太さ、色も設定します。

const OutlineOffsetExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <button className="outline outline-2 outline-offset-0 outline-blue-500 p-4 rounded">offset-0 (0px)</button>
      <button className="outline outline-2 outline-offset-1 outline-blue-500 p-4 rounded">offset-1 (1px)</button>
      <button className="outline outline-2 outline-offset-2 outline-blue-500 p-4 rounded">offset-2 (2px)</button>
      <button className="outline outline-2 outline-offset-4 outline-blue-500 p-4 rounded">offset-4 (4px)</button>
      <button className="outline outline-2 outline-offset-8 outline-blue-500 p-4 rounded">offset-8 (8px)</button>
    </div>
  );
};

const ArbitraryOutlineOffsetExample: React.FC = () => {
    return (
      <button className="outline outline-2 outline-offset-[3px] outline-purple-500 p-4 rounded">
        任意の値: outline-offset-[3px]
      </button>
    );
  };


// ページコンポーネント本体
const OutlineOffsetPage: React.FC = () => {
  // コードスニペットを定義
  const outlineOffsetHtml = `
<button class="outline outline-2 outline-offset-0 ...">...</button> {/* 0px */}
<button class="outline outline-2 outline-offset-1 ...">...</button> {/* 1px */}
<button class="outline outline-2 outline-offset-2 ...">...</button> {/* 2px */}
<button class="outline outline-2 outline-offset-4 ...">...</button> {/* 4px */}
<button class="outline outline-2 outline-offset-8 ...">...</button> {/* 8px */}
  `.trim();
  const arbitraryOutlineOffsetHtml = `<button class="outline outline-2 outline-offset-[3px] ...">...</button>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Borders: Outline Offset (アウトラインのオフセット)
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
              要素の境界線 (border) とアウトラインとの間のスペース (オフセット) を設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>outline-offset</code> プロパティを制御します。
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
              <code>outline-offset-{'{amount}'}</code> の形式でクラスを要素に適用します。通常、アウトラインのスタイル、太さ、色も一緒に指定します。
            </p>
            <p>デフォルトで用意されているオフセット量:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>outline-offset-0</code></strong> (0px)</li>
              <li><strong><code>outline-offset-1</code></strong> (1px)</li>
              <li><strong><code>outline-offset-2</code></strong> (2px)</li>
              <li><strong><code>outline-offset-4</code></strong> (4px)</li>
              <li><strong><code>outline-offset-8</code></strong> (8px)</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>outline-offset-[3px]</code>) も使用可能です (Tailwind JIT モード)。負の値も指定できます。
            </p>
             <p>
              デフォルトのオフセットは <code>0</code> です。
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
              異なるアウトラインオフセットの適用例。<code>outline</code>, <code>outline-2</code>, <code>outline-blue-500</code> を併用。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Offset */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準オフセット</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{outlineOffsetHtml}</code>
              </pre>
              <OutlineOffsetExample />
            </div>
            {/* Arbitrary Offset */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryOutlineOffsetHtml}</code>
              </pre>
              <ArbitraryOutlineOffsetExample />
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
              ブレークポイント (<code>md:outline-offset-4</code> など) や状態 (<code>focus:outline-offset-2</code> など) に応じてアウトラインのオフセットを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              フォーム要素がフォーカスされたときにアウトラインのオフセットを変更できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<input class="outline outline-2 outline-blue-500 outline-offset-0 focus:outline-offset-2 ..." />
              `.trim()}</code>
            </pre>
             <input className="outline outline-2 outline-blue-500 outline-offset-0 focus:outline-offset-2 border border-gray-300 p-2 rounded" placeholder="Focus me" />
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
                アウトラインのオフセットを設定するには、アウトライン自体が表示されている必要があります (太さ、スタイル、色が設定されている)。
              </li>
              <li>
                アウトラインはレイアウトに影響を与えないため、オフセットを変更しても周囲の要素の位置は変わりません。
              </li>
               <li>
                負のオフセットを指定すると、アウトラインが要素の内側に描画されます。
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
                <code>outline-width</code> (<code>outline-*</code>): アウトラインの太さを設定します。
              </li>
              <li>
                <code>outline-style</code> (<code>outline</code>, <code>outline-dashed</code> など): アウトラインのスタイルを設定します。
              </li>
              <li>
                <code>outline-color</code> (<code>outline-*</code>): アウトラインの色を設定します。
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
                  href="https://tailwindcss.com/docs/outline-offset"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Outline Offset
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: outline-offset
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OutlineOffsetPage;
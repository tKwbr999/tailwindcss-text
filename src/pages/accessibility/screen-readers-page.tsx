import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const ScreenReadersExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">sr-only</h3>
        <p>
          The following text is visually hidden but accessible to screen readers:
          <span className="sr-only">(This is important information for screen reader users)</span>
        </p>
        <p>This text is normally visible.</p>
      </div>
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">not-sr-only</h3>
        <p className="sr-only">
          This parent paragraph is visually hidden.
          <span className="not-sr-only text-blue-600 dark:text-blue-400">(But this span is made visible again!)</span>
        </p>
         <p>This text is normally visible.</p>
      </div>
    </div>
  );
};


// ページコンポーネント本体
const ScreenReadersPage: React.FC = () => {
  // コードスニペットを定義
  const srOnlyHtml = `
<a href="/login">
  <svg>{/* ... */}</svg>
  <span class="sr-only">Sign in</span> {/* Visually hidden label */}
</a>

<p>
  Today's forecast is
  <span class="sr-only">sunny with a high of 75 degrees</span> {/* Additional context */}
  <span aria-hidden="true">☀️ 75°</span> {/* Visual representation */}
</p>
  `.trim();

  const notSrOnlyHtml = `
<div class="sr-only focus-within:not-sr-only"> {/* Show on focus within */}
  <a href="/skip-to-content">Skip to content</a>
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
          Accessibility: Screen Readers (スクリーンリーダー)
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
              要素を視覚的に隠しつつ、スクリーンリーダーからはアクセス可能にするためのユーティリティクラスです。アイコンボタンのラベルや、視覚的には不要だがスクリーンリーダーユーザーには有用な追加情報を提供する場合などに使用します。
            </p>
            <p>
              CSS の様々なプロパティ (<code>position</code>, <code>width</code>, <code>height</code>, <code>padding</code>, <code>margin</code>, <code>overflow</code>, <code>clip</code>, <code>white-space</code>, <code>border-width</code>) を組み合わせて要素を視覚的に隠します。
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
              要素に以下のクラスを適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>sr-only</code></strong>: 要素を視覚的に隠し、スクリーンリーダーからのみアクセス可能にします。</li>
              <li><strong><code>not-sr-only</code></strong>: <code>sr-only</code> によって隠された要素を再び視覚的に表示させます。通常、<code>focus</code> や <code>focus-within</code> などの状態修飾子と組み合わせて、フォーカス時にスキップリンクなどを表示するために使用されます。</li>
            </ul>
          </CardContent>
        </Card>

        {/* 各パラメータの例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>sr-only</code> と <code>not-sr-only</code> の基本的な使い方。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Screen Readers Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">視覚的な非表示と再表示</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{srOnlyHtml}</code>
              </pre>
               <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{notSrOnlyHtml}</code>
              </pre>
              <ScreenReadersExample />
            </div>
          </CardContent>
        </Card>

        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              状態変化との組み合わせ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>not-sr-only</code> は、<code>focus</code> や <code>focus-within</code> と組み合わせて、フォーカス時に要素を表示させるためによく使用されます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              フォーカス時にスキップリンクを表示する例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<a href="#content" class="sr-only focus:not-sr-only">
  Skip to content
</a>
{/* ... */}
<main id="content">
  {/* Page content */}
</main>
              `.trim()}</code>
            </pre>
             <a href="#content-example" className="sr-only focus:not-sr-only bg-blue-500 text-white px-4 py-2 rounded absolute top-0 left-0 m-2">
              Skip to content Example
            </a>
             <div id="content-example" className="mt-12">Example Content Area</div>
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
                  href="https://tailwindcss.com/docs/screen-readers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Screen Readers
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScreenReadersPage;
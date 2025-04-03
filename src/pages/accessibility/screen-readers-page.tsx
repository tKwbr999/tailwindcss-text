import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

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
          <span className="not-sr-only text-blue-600 dark:text-blue-400">
            (But this span is made visible again!)
          </span>
        </p>
        <p>This text is normally visible.</p>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const ScreenReadersPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Accessibility: Screen Readers (スクリーンリーダー)';
  const links = [
    {
      title: 'Tailwind CSS: Screen Readers',
      url: 'https://tailwindcss.com/docs/screen-readers',
    },
  ];

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

  // children として渡すコンテンツ部分
  const content = (
    <div className="space-y-8">
      {' '}
      {/* 元のCard間のマージンを再現 */}
      {/* 概要 */}
      <section>
        <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
        <div className="text-stone-700 dark:text-stone-300 space-y-4">
          <p>
            要素を視覚的に隠しつつ、スクリーンリーダーからはアクセス可能にするためのユーティリティクラスです。アイコンボタンのラベルや、視覚的には不要だがスクリーンリーダーユーザーには有用な追加情報を提供する場合などに使用します。
          </p>
          <p>
            CSS の様々なプロパティ (<code>position</code>, <code>width</code>, <code>height</code>,{' '}
            <code>padding</code>, <code>margin</code>, <code>overflow</code>, <code>clip</code>,{' '}
            <code>white-space</code>, <code>border-width</code>)
            を組み合わせて要素を視覚的に隠します。
          </p>
        </div>
      </section>
      {/* 基本的な使い方とパラメータ */}
      <section>
        <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
          基本的な使い方とパラメータ
        </h2>
        <div className="text-stone-700 dark:text-stone-300 space-y-4">
          <p>要素に以下のクラスを適用します。</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>
              <strong>
                <code>sr-only</code>
              </strong>
              : 要素を視覚的に隠し、スクリーンリーダーからのみアクセス可能にします。
            </li>
            <li>
              <strong>
                <code>not-sr-only</code>
              </strong>
              : <code>sr-only</code> によって隠された要素を再び視覚的に表示させます。通常、
              <code>focus</code> や <code>focus-within</code>{' '}
              などの状態修飾子と組み合わせて、フォーカス時にスキップリンクなどを表示するために使用されます。
            </li>
          </ul>
        </div>
      </section>
      {/* 各パラメータの例 */}
      <section>
        <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
        <p className="text-stone-600 dark:text-stone-400 mb-4">
          <code>sr-only</code> と <code>not-sr-only</code> の基本的な使い方。
        </p>
        <div className="space-y-6">
          {/* Screen Readers Example */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
              視覚的な非表示と再表示
            </h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{srOnlyHtml}</code>
            </pre>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{notSrOnlyHtml}</code>
            </pre>
            <ScreenReadersExample />
          </div>
        </div>
      </section>
      {/* レスポンシブと状態変化 */}
      <section>
        <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
          状態変化との組み合わせ
        </h2>
        <p className="text-stone-600 dark:text-stone-400 mb-4">
          <code>not-sr-only</code> は、<code>focus</code> や <code>focus-within</code>{' '}
          と組み合わせて、フォーカス時に要素を表示させるためによく使用されます。
        </p>
        <div>
          <p className="text-stone-700 dark:text-stone-300 mb-4">
            フォーカス時にスキップリンクを表示する例:
          </p>
          {/* コード表示 */}
          <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
            <code className="language-html">
              {`
<a href="#content" class="sr-only focus:not-sr-only">
  Skip to content
</a>
{/* ... */}
<main id="content">
  {/* Page content */}
</main>
            `.trim()}
            </code>
          </pre>
          <a
            href="#content-example"
            className="sr-only focus:not-sr-only bg-blue-500 text-white px-4 py-2 rounded absolute top-0 left-0 m-2"
          >
            Skip to content Example
          </a>
          <div id="content-example" className="mt-12">
            Example Content Area
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <ArticleLayout title={title} links={links}>
      {content}
    </ArticleLayout>
  );
};

export default ScreenReadersPage;

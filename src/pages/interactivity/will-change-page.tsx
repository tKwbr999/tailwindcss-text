import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const WillChangeExample: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Will Change Scroll */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">will-change-scroll</h3>
        <div className="will-change-scroll p-4 border rounded bg-blue-100 dark:bg-blue-900">
          This element is optimized for scroll position changes.
          <div className="h-48 overflow-y-scroll mt-2 border rounded">
             <p>Scrollable content...</p>
             <div className="h-96"></div> {/* Spacer */}
             <p>End of scrollable content.</p>
          </div>
        </div>
      </div>

      {/* Will Change Contents */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">will-change-contents</h3>
        <div className="will-change-contents p-4 border rounded bg-green-100 dark:bg-green-900">
          This element is optimized for changes in its contents.
          {/* Content might change dynamically */}
        </div>
      </div>

      {/* Will Change Transform */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">will-change-transform</h3>
        <button className="will-change-transform transition duration-300 hover:scale-110 bg-yellow-500 text-black px-4 py-2 rounded">
          Optimized for Transform
        </button>
      </div>

       {/* Will Change Auto (Default) */}
       <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">will-change-auto (デフォルト)</h3>
        <div className="will-change-auto p-4 border rounded bg-gray-100 dark:bg-gray-800">
          Browser default optimization behavior.
        </div>
      </div>
    </div>
  );
};


// ページコンポーネント本体
const WillChangePage: React.FC = () => {
  // コードスニペットを定義
  const willChangeHtml = `
{/* Optimize for scroll position changes */}
<div class="will-change-scroll ...">...</div>

{/* Optimize for content changes */}
<div class="will-change-contents ...">...</div>

{/* Optimize for transform changes */}
<div class="will-change-transform ...">...</div>

{/* Use browser default optimization */}
<div class="will-change-auto ...">...</div>
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
          Interactivity: Will Change (変更予測)
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
              要素のどのプロパティが将来的に変更される可能性が高いかをブラウザに事前に通知するためのユーティリティクラスです。これにより、ブラウザは変更が発生する前に関連する最適化を行うことができます。
            </p>
            <p>
              CSS の <code>will-change</code> プロパティを制御します。
            </p>
            <p className="font-bold text-orange-600 dark:text-orange-400">
              注意: このプロパティはパフォーマンス最適化のためのヒントですが、過度に使用すると逆効果になる可能性があります。実際に変更される要素、特にアニメーションやトランジションが適用される要素に限定して使用することが推奨されます。
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
              <code>will-change-{'{property}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>Tailwind が提供する主なキーワード:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>will-change-auto</code></strong>: ブラウザが通常の最適化を行います (<code>will-change: auto;</code>)。これがデフォルトです。</li>
              <li><strong><code>will-change-scroll</code></strong>: スクロール位置の変更に対して最適化します (<code>will-change: scroll-position;</code>)。</li>
              <li><strong><code>will-change-contents</code></strong>: 要素の内容の変更に対して最適化します (<code>will-change: contents;</code>)。</li>
              <li><strong><code>will-change-transform</code></strong>: transform プロパティ (scale, rotate, translate, skew) の変更に対して最適化します (<code>will-change: transform;</code>)。</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>will-change-[opacity]</code>) も使用可能です (Tailwind JIT モード)。CSS の <code>will-change</code> で有効なプロパティ名を指定します。
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
              異なる <code>will-change</code> 設定の適用例。これらは主にブラウザの内部的な最適化に影響します。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Will Change Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">変更予測の指定</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{willChangeHtml}</code>
              </pre>
              <WillChangeExample />
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
              <code>will-change</code> は通常、要素の基本スタイルとして適用されます。状態変化 (<code>hover:will-change-transform</code> など) で適用することも可能ですが、変更が実際に起こる直前または起こっている間に適用するのが最も効果的です。レスポンシブ (<code>md:will-change-scroll</code> など) での適用も可能です。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ホバー時に transform が変化する要素に最適化を適用する例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<button class="will-change-transform transition hover:scale-110 ...">
  Hover Me
</button>
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
                <strong>過剰使用の回避:</strong> <code>will-change</code> を多くの要素やプロパティに適用すると、ブラウザが過剰なメモリを消費し、パフォーマンスが低下する可能性があります。実際に変更が頻繁に発生する、またはコストの高いアニメーション/トランジションが適用される要素に限定して使用してください。
              </li>
              <li>
                変更が完了したら、可能であれば <code>will-change</code> を <code>will-change-auto</code> に戻すことが推奨されます (JavaScript を使用)。
              </li>
               <li>
                これはブラウザへのヒントであり、必ずしもパフォーマンスが向上するとは限りません。実際のパフォーマンスを測定して効果を確認することが重要です。
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
                  href="https://tailwindcss.com/docs/will-change"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Will Change
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/will-change"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: will-change
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WillChangePage;
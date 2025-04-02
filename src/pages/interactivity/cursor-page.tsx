import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const CursorExample: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
      <div className="cursor-auto border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-auto</div>
      <div className="cursor-default border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-default</div>
      <div className="cursor-pointer border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-pointer</div>
      <div className="cursor-wait border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-wait</div>
      <div className="cursor-text border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-text</div>
      <div className="cursor-move border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-move</div>
      <div className="cursor-help border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-help</div>
      <div className="cursor-not-allowed border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-not-allowed</div>
      <div className="cursor-none border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-none</div>
      <div className="cursor-context-menu border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-context-menu</div>
      <div className="cursor-progress border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-progress</div>
      <div className="cursor-cell border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-cell</div>
      <div className="cursor-crosshair border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-crosshair</div>
      <div className="cursor-vertical-text border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-vertical-text</div>
      <div className="cursor-alias border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-alias</div>
      <div className="cursor-copy border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-copy</div>
      <div className="cursor-no-drop border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-no-drop</div>
      <div className="cursor-grab border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-grab</div>
      <div className="cursor-grabbing border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-grabbing</div>
      <div className="cursor-all-scroll border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-all-scroll</div>
      <div className="cursor-col-resize border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-col-resize</div>
      <div className="cursor-row-resize border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-row-resize</div>
      <div className="cursor-n-resize border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-n-resize</div>
      <div className="cursor-e-resize border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-e-resize</div>
      <div className="cursor-s-resize border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-s-resize</div>
      <div className="cursor-w-resize border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-w-resize</div>
      <div className="cursor-ne-resize border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-ne-resize</div>
      <div className="cursor-nw-resize border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-nw-resize</div>
      <div className="cursor-se-resize border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-se-resize</div>
      <div className="cursor-sw-resize border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-sw-resize</div>
      <div className="cursor-ew-resize border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-ew-resize</div>
      <div className="cursor-ns-resize border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-ns-resize</div>
      <div className="cursor-nesw-resize border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-nesw-resize</div>
      <div className="cursor-nwse-resize border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-nwse-resize</div>
      <div className="cursor-zoom-in border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-zoom-in</div>
      <div className="cursor-zoom-out border p-3 text-center rounded bg-white dark:bg-gray-700">cursor-zoom-out</div>
    </div>
  );
};


// ページコンポーネント本体
const CursorPage: React.FC = () => {
  // コードスニペットを定義
  const cursorHtml = `
<button class="cursor-pointer ...">...</button>
<span class="cursor-wait ...">Loading...</span>
<p class="cursor-text ...">Selectable text.</p>
<div class="cursor-not-allowed ...">Disabled Area</div>
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
          Interactivity: Cursor (カーソル)
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
              要素上にマウスカーソルがあるときに表示されるカーソルの種類を制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>cursor</code> プロパティを制御します。
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
              <code>cursor-{'{keyword}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>利用可能なキーワード:</p>
            <ul className="list-disc list-inside space-y-1 pl-4 columns-2 md:columns-3">
              <li><code>auto</code> (デフォルト)</li>
              <li><code>default</code></li>
              <li><code>pointer</code></li>
              <li><code>wait</code></li>
              <li><code>text</code></li>
              <li><code>move</code></li>
              <li><code>help</code></li>
              <li><code>not-allowed</code></li>
              <li><code>none</code></li>
              <li><code>context-menu</code></li>
              <li><code>progress</code></li>
              <li><code>cell</code></li>
              <li><code>crosshair</code></li>
              <li><code>vertical-text</code></li>
              <li><code>alias</code></li>
              <li><code>copy</code></li>
              <li><code>no-drop</code></li>
              <li><code>grab</code></li>
              <li><code>grabbing</code></li>
              <li><code>all-scroll</code></li>
              <li><code>col-resize</code></li>
              <li><code>row-resize</code></li>
              <li><code>n-resize</code></li>
              <li><code>e-resize</code></li>
              <li><code>s-resize</code></li>
              <li><code>w-resize</code></li>
              <li><code>ne-resize</code></li>
              <li><code>nw-resize</code></li>
              <li><code>se-resize</code></li>
              <li><code>sw-resize</code></li>
              <li><code>ew-resize</code></li>
              <li><code>ns-resize</code></li>
              <li><code>nesw-resize</code></li>
              <li><code>nwse-resize</code></li>
              <li><code>zoom-in</code></li>
              <li><code>zoom-out</code></li>
            </ul>
             <p className="mt-4">
              任意の値は通常サポートされませんが、カスタムカーソルを使用する場合は CSS で直接指定するか、Tailwind の設定を拡張します。
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
              異なるカーソルスタイルの適用例。各ボックスにホバーしてカーソルの変化を確認してください。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Cursors */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準カーソル</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{cursorHtml}</code>
              </pre>
              <CursorExample />
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
              ブレークポイント (<code>md:cursor-pointer</code> など) や状態 (<code>hover:cursor-wait</code>, <code>disabled:cursor-not-allowed</code> など) に応じてカーソルスタイルを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              無効化されたボタンに <code>not-allowed</code> カーソルを表示する例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<button disabled class="disabled:cursor-not-allowed ...">
  Cannot Submit
</button>
              `.trim()}</code>
            </pre>
             <button disabled className="disabled:cursor-not-allowed bg-gray-300 text-gray-500 px-4 py-2 rounded">
              Cannot Submit
            </button>
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
                  href="https://tailwindcss.com/docs/cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Cursor
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/cursor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: cursor
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CursorPage;
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const ResizeExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="resize-none" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Resize None:</label>
        <textarea id="resize-none" className="resize-none border border-gray-300 rounded p-2 w-full h-24 dark:bg-gray-700 dark:text-white dark:border-gray-600" defaultValue="Cannot be resized."></textarea>
      </div>
      <div>
        <label htmlFor="resize-y" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Resize Y (Vertical):</label>
        <textarea id="resize-y" className="resize-y border border-gray-300 rounded p-2 w-full h-24 dark:bg-gray-700 dark:text-white dark:border-gray-600" defaultValue="Can be resized vertically."></textarea>
      </div>
      <div>
        <label htmlFor="resize-x" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Resize X (Horizontal):</label>
        <textarea id="resize-x" className="resize-x border border-gray-300 rounded p-2 w-full h-24 dark:bg-gray-700 dark:text-white dark:border-gray-600" defaultValue="Can be resized horizontally."></textarea>
      </div>
      <div>
        <label htmlFor="resize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Resize (Both):</label>
        <textarea id="resize" className="resize border border-gray-300 rounded p-2 w-full h-24 dark:bg-gray-700 dark:text-white dark:border-gray-600" defaultValue="Can be resized in both directions."></textarea>
      </div>
    </div>
  );
};


// ページコンポーネント本体
const ResizePage: React.FC = () => {
  // コードスニペットを定義
  const resizeHtml = `
{/* Disable resizing */}
<textarea class="resize-none ..."></textarea>

{/* Enable vertical resizing */}
<textarea class="resize-y ..."></textarea>

{/* Enable horizontal resizing */}
<textarea class="resize-x ..."></textarea>

{/* Enable resizing in both directions */}
<textarea class="resize ..."></textarea>
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
          Interactivity: Resize (リサイズ)
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
              要素 (通常は <code>&lt;textarea&gt;</code>) をユーザーがリサイズできるかどうか、またどの方向にリサイズできるかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>resize</code> プロパティを制御します。
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
              要素 (通常は <code>&lt;textarea&gt;</code>) に以下のクラスを適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>resize-none</code></strong>: 要素のリサイズを無効にします (<code>resize: none;</code>)。</li>
              <li><strong><code>resize-y</code></strong>: 垂直方向のリサイズのみを許可します (<code>resize: vertical;</code>)。</li>
              <li><strong><code>resize-x</code></strong>: 水平方向のリサイズのみを許可します (<code>resize: horizontal;</code>)。</li>
              <li><strong><code>resize</code></strong>: 水平・垂直両方向のリサイズを許可します (<code>resize: both;</code>)。これが多くのブラウザでの <code>&lt;textarea&gt;</code> のデフォルトの挙動です。</li>
            </ul>
             <p className="mt-4">
              要素がリサイズ可能であるためには、通常 <code>overflow</code> プロパティが <code>auto</code>, <code>scroll</code>, または <code>hidden</code> である必要がありますが、<code>&lt;textarea&gt;</code> では通常デフォルトでそうなっています。
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
              異なるリサイズ設定の適用例。テキストエリアの右下隅をドラッグして試してください。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Resize Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">リサイズ制御</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{resizeHtml}</code>
              </pre>
              <ResizeExample />
            </div>
          </CardContent>
        </Card>

        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              特定のブレークポイントでのみリサイズ動作を変更するには、クラス名の前にブレークポイントプレフィックスを追加します (例: <code>md:resize-none</code>)。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常はリサイズ可能にし、中程度の画面サイズ以上でリサイズを無効にする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<textarea class="resize md:resize-none ..."></textarea>
              `.trim()}</code>
            </pre>
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
                  href="https://tailwindcss.com/docs/resize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Resize
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/resize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: resize
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResizePage;
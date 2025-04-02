import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const UserSelectExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">select-none</h3>
        <p className="select-none border border-gray-300 rounded p-3 bg-white dark:bg-gray-700">
          This text cannot be selected. Try dragging your mouse over it.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">select-text</h3>
        <p className="select-text border border-gray-300 rounded p-3 bg-white dark:bg-gray-700">
          This text can be selected normally. (This is often the default behavior for text).
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">select-all</h3>
        <p className="select-all border border-gray-300 rounded p-3 bg-white dark:bg-gray-700">
          Clicking once on this text will select all of it.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">select-auto (Default)</h3>
        <p className="select-auto border border-gray-300 rounded p-3 bg-white dark:bg-gray-700">
          Browser default selection behavior. Usually same as select-text for text content.
        </p>
      </div>
    </div>
  );
};


// ページコンポーネント本体
const UserSelectPage: React.FC = () => {
  // コードスニペットを定義
  const userSelectHtml = `
{/* Prevent selection */}
<p class="select-none ...">Cannot select this.</p>

{/* Allow text selection */}
<p class="select-text ...">Can select this text.</p>

{/* Select all content on click */}
<p class="select-all ...">Click to select all.</p>

{/* Use browser default */}
<p class="select-auto ...">Browser default behavior.</p>
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
          Interactivity: User Select (ユーザー選択)
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
              ユーザーが要素内のテキストを選択できるかどうか、またどのように選択できるかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>user-select</code> プロパティを制御します。
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
              <li><strong><code>select-none</code></strong>: 要素内のテキスト選択を完全に無効にします (<code>user-select: none;</code>)。</li>
              <li><strong><code>select-text</code></strong>: ユーザーがテキストを選択できるようにします (<code>user-select: text;</code>)。通常、テキスト要素のデフォルトです。</li>
              <li><strong><code>select-all</code></strong>: 要素をクリックすると、その要素内のすべてのテキストが選択されます (<code>user-select: all;</code>)。</li>
              <li><strong><code>select-auto</code></strong>: ブラウザのデフォルトの選択動作を使用します (<code>user-select: auto;</code>)。これがほとんどの要素のデフォルトです。</li>
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
              異なるユーザー選択設定の適用例。各テキストブロックで選択を試してみてください。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* User Select Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">ユーザー選択の制御</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{userSelectHtml}</code>
              </pre>
              <UserSelectExample />
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
              特定のブレークポイントでのみユーザー選択動作を変更するには、クラス名の前にブレークポイントプレフィックスを追加します (例: <code>md:select-all</code>)。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常はテキスト選択可能にし、中程度の画面サイズ以上で選択不可にする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="select-text md:select-none ...">
  Selectable on small screens, not on medium and up.
</p>
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
                  href="https://tailwindcss.com/docs/user-select"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: User Select
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/user-select"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: user-select
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserSelectPage;
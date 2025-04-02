import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const PointerEventsExample: React.FC = () => {
  return (
    <div className="relative p-4 border rounded-lg h-32">
      <button className="absolute top-2 left-2 pointer-events-none opacity-50 bg-red-500 text-white px-4 py-2 rounded">
        Pointer Events None (Cannot Click)
      </button>
      <button className="absolute bottom-2 right-2 pointer-events-auto bg-green-500 text-white px-4 py-2 rounded">
        Pointer Events Auto (Can Click)
      </button>
       <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-gray-600 dark:text-gray-400">
        Try clicking the buttons.
      </p>
    </div>
  );
};


// ページコンポーネント本体
const PointerEventsPage: React.FC = () => {
  // コードスニペットを定義
  const pointerEventsNoneHtml = `
<button class="pointer-events-none opacity-50 ...">
  Cannot be clicked
</button>
  `.trim();

  const pointerEventsAutoHtml = `
<div class="pointer-events-none ..."> {/* Parent disables pointer events */}
  <button class="pointer-events-auto ...">
    Can be clicked
  </button> {/* Child re-enables pointer events */}
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
          Interactivity: Pointer Events (ポインターイベント)
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
              要素がポインターイベント (クリック、ホバーなど) のターゲットになるかどうかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>pointer-events</code> プロパティを制御します。
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
              <li><strong><code>pointer-events-none</code></strong>: 要素がポインターイベントのターゲットになるのを防ぎます (<code>pointer-events: none;</code>)。要素は視覚的には表示されますが、クリックやホバーなどのインタラクションはできません。イベントはその下にある要素に「通過」します。</li>
              <li><strong><code>pointer-events-auto</code></strong>: 要素がポインターイベントのターゲットになることを許可します (<code>pointer-events: auto;</code>)。これがデフォルトの挙動です。親要素で <code>pointer-events-none</code> が設定されている場合に、子要素でイベントを再度有効にするために使用できます。</li>
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
              <code>pointer-events-none</code> と <code>pointer-events-auto</code> の効果。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Pointer Events Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">ポインターイベントの制御</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{pointerEventsNoneHtml}</code>
              </pre>
               <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{pointerEventsAutoHtml}</code>
              </pre>
              <PointerEventsExample />
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
              ブレークポイント (<code>md:pointer-events-auto</code> など) や状態 (<code>disabled:pointer-events-none</code> など) に応じてポインターイベントの挙動を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              無効化されたボタンのポインターイベントを無効にする例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<button disabled class="opacity-50 pointer-events-none ...">
  Disabled Button
</button>
              `.trim()}</code>
            </pre>
             <button disabled className="opacity-50 pointer-events-none bg-gray-300 text-gray-500 px-4 py-2 rounded">
              Disabled Button
            </button>
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
                <code>pointer-events-none</code> は要素とその子孫要素のポインターイベントを無効にしますが、子孫要素で <code>pointer-events-auto</code> を指定することで、その子孫要素のイベントを再度有効にできます。
              </li>
              <li>
                キーボードナビゲーションやスクリーンリーダーによるアクセスには影響しません。
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
                  href="https://tailwindcss.com/docs/pointer-events"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Pointer Events
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: pointer-events
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PointerEventsPage;
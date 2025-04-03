import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

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
  // ArticleLayout に渡すデータ
  const title = 'Interactivity: Pointer Events (ポインターイベント)';
  const links = [
    {
      title: 'Tailwind CSS: Pointer Events',
      url: 'https://tailwindcss.com/docs/pointer-events',
    },
    {
      title: 'MDN: pointer-events',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events',
    },
  ];

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
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Pointer Events - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Pointer Events utility in Tailwind CSS. Examples and usage details for Pointer Events." />
        {/* OGP タグ */}
        <meta property="og:title" content="Pointer Events - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Pointer Events utility in Tailwind CSS. Examples and usage details for Pointer Events." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/interactivity/pointer-events" />
        {/* <meta property="og:image" content="[画像のURL]" /> */} {/* 必要に応じて画像URLを設定 */}
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素がポインターイベント (クリック、ホバーなど)
              のターゲットになるかどうかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>pointer-events</code> プロパティを制御します。
            </p>
          </div>
        </section>
        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            基本的な使い方とパラメータ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>要素に以下のクラスを適用します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>pointer-events-none</code>
                </strong>
                : 要素がポインターイベントのターゲットになるのを防ぎます (
                <code>pointer-events: none;</code>
                )。要素は視覚的には表示されますが、クリックやホバーなどのインタラクションはできません。イベントはその下にある要素に「通過」します。
              </li>
              <li>
                <strong>
                  <code>pointer-events-auto</code>
                </strong>
                : 要素がポインターイベントのターゲットになることを許可します (
                <code>pointer-events: auto;</code>)。これがデフォルトの挙動です。親要素で{' '}
                <code>pointer-events-none</code>{' '}
                が設定されている場合に、子要素でイベントを再度有効にするために使用できます。
              </li>
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            <code>pointer-events-none</code> と <code>pointer-events-auto</code> の効果。
          </p>
          <div className="space-y-6">
            {/* Pointer Events Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                ポインターイベントの制御
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{pointerEventsNoneHtml}</code>
              </pre>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{pointerEventsAutoHtml}</code>
              </pre>
              <PointerEventsExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:pointer-events-auto</code> など) や状態 (
            <code>disabled:pointer-events-none</code> など)
            に応じてポインターイベントの挙動を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              無効化されたボタンのポインターイベントを無効にする例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<button disabled class="opacity-50 pointer-events-none ...">
  Disabled Button
</button>
              `.trim()}
              </code>
            </pre>
            <button
              disabled
              className="opacity-50 pointer-events-none bg-gray-300 text-gray-500 px-4 py-2 rounded"
            >
              Disabled Button
            </button>
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <code>pointer-events-none</code>{' '}
                は要素とその子孫要素のポインターイベントを無効にしますが、子孫要素で{' '}
                <code>pointer-events-auto</code>{' '}
                を指定することで、その子孫要素のイベントを再度有効にできます。
              </li>
              <li>キーボードナビゲーションやスクリーンリーダーによるアクセスには影響しません。</li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default PointerEventsPage;

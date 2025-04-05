import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const AppearanceExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="appearance-none-select"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Appearance None (Select):
        </label>
        <select
          id="appearance-none-select"
          className="appearance-none border border-gray-300 rounded px-3 py-2 w-full"
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <p className="text-xs text-gray-500 mt-1">ブラウザのデフォルトのスタイルが抑制されます。</p>
      </div>
      <div>
        <label
          htmlFor="appearance-auto-select"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Appearance Auto (Select - Default):
        </label>
        <select
          id="appearance-auto-select"
          className="appearance-auto border border-gray-300 rounded px-3 py-2 w-full"
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <p className="text-xs text-gray-500 mt-1">ブラウザのデフォルトのスタイルが適用されます。</p>
      </div>
      <div>
        <label
          htmlFor="appearance-none-button"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Appearance None (Button):
        </label>
        <button
          id="appearance-none-button"
          className="appearance-none bg-blue-500 text-white px-4 py-2 rounded"
        >
          Styled Button (No Default Appearance)
        </button>
        <p className="text-xs text-gray-500 mt-1">
          ボタンのデフォルトスタイルが抑制され、カスタムスタイルが適用されます。
        </p>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const AppearancePage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Interactivity: Appearance ';
  const jaTitle = '外観';
  const links = [
    {
      title: 'Tailwind CSS: Appearance',
      url: 'https://tailwindcss.com/docs/appearance',
    },
    {
      title: 'MDN: appearance',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/appearance',
    },
  ];

  // コードスニペットを定義
  const appearanceNoneHtml = `
{/* Suppress browser default styling */}
<select class="appearance-none ...">
  {/* ... */}
</select>

<button class="appearance-none ...">
  Custom Button
</button>
  `.trim();

  const appearanceAutoHtml = `
{/* Use browser default styling (usually the default anyway) */}
<select class="appearance-auto ...">
  {/* ... */}
</select>
  `.trim();

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>
      <Helmet>
        <title>Appearance - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Appearance utility in Tailwind CSS. Examples and usage details for Appearance."
        />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素のネイティブな外観 (appearance)
              を抑制するためのユーティリティクラスです。特にフォーム要素のスタイルを完全にカスタマイズしたい場合に使用します。
            </p>
            <p>
              CSS の <code>appearance</code> プロパティを制御します。
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
                  <code>appearance-none</code>
                </strong>
                : 要素のプラットフォームネイティブなスタイルを抑制します (
                <code>appearance: none;</code>
                )。これにより、背景、境界線、パディングなどを自由に設定できます。
              </li>
              <li>
                <strong>
                  <code>appearance-auto</code>
                </strong>
                : 要素にデフォルトのプラットフォームスタイルを使用させます (
                <code>appearance: auto;</code>
                )。これは通常、クラスを指定しない場合のデフォルトの動作です。
              </li>
            </ul>
            <p className="mt-4">
              このユーティリティは、<code>&lt;select&gt;</code>,{' '}
              <code>&lt;input type="search"&gt;</code>, <code>&lt;button&gt;</code>{' '}
              などの要素で特に役立ちます。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            <code>appearance-none</code> を使用してデフォルトスタイルを抑制する例。
          </p>
          <div className="space-y-6">
            {/* Appearance None */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                appearance-none
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{appearanceNoneHtml}</code>
              </pre>
            </div>
            {/* Appearance Auto */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                appearance-auto (比較用)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{appearanceAutoHtml}</code>
              </pre>
            </div>
            {/* Rendered Example */}
            <AppearanceExample />
          </div>
        </section>
        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            特定のブレークポイントでのみ外観を変更するには、クラス名の前にブレークポイントプレフィックスを追加します
            (例: <code>md:appearance-none</code>)。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常はデフォルトの外観を使用し、中程度の画面サイズ以上でネイティブスタイルを抑制する場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<select class="appearance-auto md:appearance-none ...">
  {/* ... */}
</select>
              `.trim()}
              </code>
            </pre>
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <code>appearance-none</code> を使用すると、要素のデフォルトの視覚的スタイル (例:
                select 要素のドロップダウン矢印)
                が削除されるため、カスタムスタイルで代替を提供する必要がある場合があります。
              </li>
              <li>
                すべての要素やすべてのブラウザで <code>appearance: none;</code>{' '}
                が期待通りに機能するとは限りません。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default AppearancePage;

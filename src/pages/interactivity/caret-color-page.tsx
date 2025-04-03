import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const CaretColorExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="caret-blue"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Caret Blue 500:
        </label>
        <input
          type="text"
          id="caret-blue"
          defaultValue="Focus here"
          className="caret-blue-500 border border-gray-300 rounded px-3 py-2 w-full focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
      </div>
      <div>
        <label
          htmlFor="caret-pink"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Caret Pink 500:
        </label>
        <textarea
          id="caret-pink"
          defaultValue="Focus inside this textarea"
          className="caret-pink-500 border border-gray-300 rounded px-3 py-2 w-full h-20 focus:ring focus:ring-pink-200 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="caret-transparent"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Caret Transparent:
        </label>
        <input
          type="text"
          id="caret-transparent"
          defaultValue="Caret is transparent"
          className="caret-transparent border border-gray-300 rounded px-3 py-2 w-full focus:ring focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
      </div>
      <div>
        <label
          htmlFor="caret-current"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Caret Current (inherits text color):
        </label>
        <input
          type="text"
          id="caret-current"
          defaultValue="Focus here"
          className="caret-current text-purple-600 border border-gray-300 rounded px-3 py-2 w-full focus:ring focus:ring-purple-200 dark:bg-gray-700 dark:text-purple-400 dark:border-gray-600"
        />
      </div>
    </div>
  );
};

const ArbitraryCaretColorExample: React.FC = () => {
  return (
    <div>
      <label
        htmlFor="caret-arbitrary"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        Caret Arbitrary (#ff7f50 - Coral):
      </label>
      <input
        type="text"
        id="caret-arbitrary"
        defaultValue="Focus here"
        className="caret-[#ff7f50] border border-gray-300 rounded px-3 py-2 w-full focus:ring focus:ring-orange-200 dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />
    </div>
  );
};

// ページコンポーネント本体
const CaretColorPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Interactivity: Caret Color (キャレットカラー)';
  const links = [
    {
      title: 'Tailwind CSS: Caret Color',
      url: 'https://tailwindcss.com/docs/caret-color',
    },
    {
      title: 'MDN: caret-color',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color',
    },
  ];

  // コードスニペットを定義
  const caretColorHtml = `
<input type="text" class="caret-pink-500 ...">
<textarea class="caret-indigo-300 ..."></textarea>

{/* Use caret-inherit to inherit from parent */}
<div class="text-blue-600">
  <input type="text" class="caret-inherit ...">
</div>

{/* Use caret-current to use the current text color */}
<input type="text" class="text-purple-600 caret-current ...">

{/* Use caret-transparent */}
<input type="text" class="caret-transparent ...">
  `.trim();

  const arbitraryCaretColorHtml = `<input type="text" class="caret-[#ff7f50] ...">`;

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Caret Color - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Caret Color utility in Tailwind CSS. Examples and usage details for Caret Color." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              テキスト入力フィールド (input や textarea) のキャレット (カーソル)
              の色を制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>caret-color</code> プロパティを制御します。
            </p>
          </div>
        </section>
        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            基本的な使い方とパラメータ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              <code>caret-{'{color}'}</code> の形式でクラスを入力要素に適用します。
            </p>
            <p>
              <code>{'{color}'}</code> には、Tailwind のカラーパレット (例: <code>pink-500</code>,{' '}
              <code>blue-600</code>) を指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>caret-inherit</code>
                </strong>
                : 親要素から継承します。
              </li>
              <li>
                <strong>
                  <code>caret-current</code>
                </strong>
                : 現在のテキストカラーを使用します。
              </li>
              <li>
                <strong>
                  <code>caret-transparent</code>
                </strong>
                : キャレットを透明にします。
              </li>
              <li>
                <strong>
                  <code>caret-black</code>
                </strong>
                ,{' '}
                <strong>
                  <code>caret-white</code>
                </strong>
              </li>
              <li>
                <strong>
                  <code>caret-{'{color}-{shade}'}</code>
                </strong>
                : Tailwind のカラーパレット (例: <code>caret-sky-500</code>)。
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>caret-[#ff7f50]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なるキャレットカラーの適用例。入力フィールドにフォーカスして確認してください。
          </p>
          <div className="space-y-6">
            {/* Standard Caret Color */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準のキャレットカラー
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{caretColorHtml}</code>
              </pre>
              <CaretColorExample />
            </div>
            {/* Arbitrary Caret Color */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryCaretColorHtml}</code>
              </pre>
              <ArbitraryCaretColorExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            キャレットカラーは通常、要素の基本スタイルとして定義されますが、ブレークポイント (
            <code>md:caret-green-500</code> など) や状態 (<code>focus:caret-red-500</code> -
            ただし通常は不要) で変更することも可能です。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              中程度の画面サイズ以上でキャレットカラーを変更する例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<input type="text" class="caret-blue-500 md:caret-green-500 ...">
              `.trim()}
              </code>
            </pre>
          </div>
        </section>
        {/* 注意点 Card は削除 (内容は概要と重複) */}
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default CaretColorPage;

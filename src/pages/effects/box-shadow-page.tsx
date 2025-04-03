import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const ShadowExample: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4">
      <div className="shadow-sm bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
        shadow-sm
      </div>
      <div className="shadow bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
        shadow (default)
      </div>
      <div className="shadow-md bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
        shadow-md
      </div>
      <div className="shadow-lg bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
        shadow-lg
      </div>
      <div className="shadow-xl bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
        shadow-xl
      </div>
      <div className="shadow-2xl bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
        shadow-2xl
      </div>
      <div className="shadow-inner bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
        shadow-inner
      </div>
      <div className="shadow-none bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
        shadow-none
      </div>
    </div>
  );
};

const ArbitraryShadowExample: React.FC = () => {
  return (
    <div className="shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
      任意の値: shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]
    </div>
  );
};

// ページコンポーネント本体
const BoxShadowPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Effects: Box Shadow (ボックスシャドウ)';
  const links = [
    {
      title: 'Tailwind CSS: Box Shadow',
      url: 'https://tailwindcss.com/docs/box-shadow',
    },
    {
      title: 'Tailwind CSS: Box Shadow Color (v3.0+)',
      url: 'https://tailwindcss.com/docs/box-shadow-color',
    },
    {
      title: 'MDN: box-shadow',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow',
    },
  ];

  // コードスニペットを定義
  const shadowHtml = `
<div class="shadow-sm ...">...</div>
<div class="shadow ...">...</div> {/* Default */}
<div class="shadow-md ...">...</div>
<div class="shadow-lg ...">...</div>
<div class="shadow-xl ...">...</div>
<div class="shadow-2xl ...">...</div>
<div class="shadow-inner ...">...</div>
<div class="shadow-none ...">...</div>
  `.trim();
  const arbitraryShadowHtml = `<div class="shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] ...">...</div>`;

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Box Shadow - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Box Shadow utility in Tailwind CSS. Examples and usage details for Box Shadow." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素にボックスシャドウ (影)
              を追加するためのユーティリティクラスです。要素に奥行きを与えたり、視覚的に浮き上がらせたりする効果があります。
            </p>
            <p>
              CSS の <code>box-shadow</code> プロパティを制御します。Tailwind
              は複数の定義済みシャドウサイズと、内側のシャドウ (inner shadow) を提供します。
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
              <code>shadow-{'{size}'}</code> または <code>shadow-inner</code>,{' '}
              <code>shadow-none</code> の形式でクラスを要素に適用します。
            </p>
            <p>デフォルトで用意されているサイズ:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>shadow-sm</code>
                </strong>
                : 小さな影。
              </li>
              <li>
                <strong>
                  <code>shadow</code>
                </strong>
                : デフォルトの影。
              </li>
              <li>
                <strong>
                  <code>shadow-md</code>
                </strong>
                : 中程度の影。
              </li>
              <li>
                <strong>
                  <code>shadow-lg</code>
                </strong>
                : 大きな影。
              </li>
              <li>
                <strong>
                  <code>shadow-xl</code>
                </strong>
                : より大きな影。
              </li>
              <li>
                <strong>
                  <code>shadow-2xl</code>
                </strong>
                : 最大の影。
              </li>
              <li>
                <strong>
                  <code>shadow-inner</code>
                </strong>
                : 内側の影。
              </li>
              <li>
                <strong>
                  <code>shadow-none</code>
                </strong>
                : 影を削除します。
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>shadow-[0_10px_20px_rgba(0,0,0,0.5)]</code>) も使用可能です
              (Tailwind JIT モード)。CSS の <code>box-shadow</code> の値を直接指定します。
            </p>
            <p>
              シャドウの色は <code>shadow-{'{color}'}</code> ユーティリティ (v3.0+) で変更できます。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なるボックスシャドウユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* Standard Shadows */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準シャドウ
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{shadowHtml}</code>
              </pre>
              <ShadowExample />
            </div>
            {/* Arbitrary Shadow */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryShadowHtml}</code>
              </pre>
              <ArbitraryShadowExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:shadow-lg</code> など) や状態 (<code>hover:shadow-xl</code>,{' '}
            <code>focus:shadow-outline</code> など) に応じてボックスシャドウを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ボタンやカードのホバー時に影を強くするのは一般的なインタラクションです。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<button class="shadow-md hover:shadow-xl transition-shadow ...">
  Hover Me
</button>
              `.trim()}
              </code>
            </pre>
            <button className="shadow-md hover:shadow-xl transition-shadow bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Hover Me
            </button>
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                ボックスシャドウは要素のレイアウトに影響を与えませんが、視覚的には要素の外側に広がります。
              </li>
              <li>
                デフォルトのシャドウの色は通常、半透明の黒ですが、<code>shadow-{'{color}'}</code>{' '}
                ユーティリティ (v3.0+) で変更できます。
              </li>
              <li>
                複数のシャドウを重ねることも可能ですが、任意の値を使用するか、カスタム CSS
                で定義する必要があります。
              </li>
              <li>
                <code>shadow-inner</code> は要素の内側に影を落とします。
              </li>
            </ul>
          </div>
        </section>
        {/* 関連ユーティリティ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            関連ユーティリティ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <code>box-shadow-color</code> (<code>shadow-*</code> v3.0+):
                ボックスシャドウの色を設定します。
              </li>
              <li>
                <code>opacity</code> (<code>opacity-*</code>): 要素全体の透明度を設定します。
              </li>
              <li>
                <code>ring-width</code> (<code>ring-*</code>): <code>box-shadow</code>{' '}
                を利用してリング (輪郭線) を作成します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default BoxShadowPage;

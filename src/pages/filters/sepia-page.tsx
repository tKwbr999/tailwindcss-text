import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// 画像にセピアフィルターを適用します。

const SepiaExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'; // 山の画像例
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <img src={imageUrl} alt="Sepia" className="sepia rounded-lg" />
      <img src={imageUrl} alt="No Sepia" className="sepia-0 rounded-lg" /> {/* Default */}
    </div>
  );
};

const ArbitrarySepiaExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80';
  // 任意の値は通常 0 (0%) から 1 (100%)
  return (
    <img src={imageUrl} alt="Arbitrary Sepia (Example)" className="filter sepia-[.65] rounded-lg" />
    // filter ユーティリティと任意の値を使用 (Tailwind JIT)
  );
};

// ページコンポーネント本体
const SepiaPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Filters: Sepia (セピア)';
  const links = [
    {
      title: 'Tailwind CSS: Sepia',
      url: 'https://tailwindcss.com/docs/sepia',
    },
    {
      title: 'MDN: filter: sepia()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia',
    },
  ];

  // コードスニペットを定義
  const sepiaHtml = `
<img class="sepia ..." src="..." alt="...">   {/* 100% sepia */}
<img class="sepia-0 ..." src="..." alt="..."> {/* 0% sepia (Default) */}
  `.trim();
  const arbitrarySepiaHtml = `<img class="filter sepia-[.65] ..." src="..." alt="..."> {/* Requires JIT & filter enabled */} `;

  return (
    <ArticleLayout title={title} links={links}>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素にセピアフィルターを適用するためのユーティリティクラスです。要素の色をセピア調に変換します。
            </p>
            <p>
              CSS の <code>filter: sepia();</code> プロパティを制御します。
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
              <code>sepia</code> または <code>sepia-0</code> の形式でクラスを要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>sepia</code>
                </strong>
                : 要素を完全にセピア調にします (<code>filter: sepia(100%);</code>)。
              </li>
              <li>
                <strong>
                  <code>sepia-0</code>
                </strong>
                : セピアフィルターを適用しません (<code>filter: sepia(0%);</code>
                )。これがデフォルトの挙動です。
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>sepia-[.65]</code>) も使用可能です (Tailwind JIT モード)。0 から 1
              の間の数値を指定します (例: 0.65 は 65% セピア)。この場合、<code>filter</code>{' '}
              ユーティリティも必要になることがあります。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">セピアフィルターの適用例。</p>
          <div className="space-y-6">
            {/* Standard Sepia */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準セピア</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{sepiaHtml}</code>
              </pre>
              <SepiaExample />
            </div>
            {/* Arbitrary Sepia */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                任意の値 (JIT)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitrarySepiaHtml}</code>
              </pre>
              <ArbitrarySepiaExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:sepia</code> など) や状態 (<code>hover:sepia-0</code> など)
            に応じてセピア効果を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時にセピア効果を解除するインタラクションを作成できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<img class="sepia hover:sepia-0 transition duration-300 ..." src="..." alt="...">
              `.trim()}
              </code>
            </pre>
            <img
              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80"
              alt="Hover to remove sepia"
              className="sepia hover:sepia-0 transition duration-300 rounded-lg w-48"
            />
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>セピアフィルターは要素全体とその内容に適用されます。</li>
              <li>複数のフィルターユーティリティを組み合わせることができます。</li>
              <li>
                背景要素にセピアフィルターを適用したい場合は、<code>backdrop-sepia-*</code>{' '}
                ユーティリティを使用します。
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
                <code>filter</code>: 他のフィルターユーティリティを有効にするための基本クラス。
                <code>sepia-*</code> は自動的にこれを有効にします。
              </li>
              <li>
                <code>backdrop-filter</code> (<code>backdrop-sepia</code> など):
                要素の背後にあるコンテンツにフィルターを適用します。
              </li>
              <li>
                他のフィルターユーティリティ: <code>blur</code>, <code>brightness</code>,{' '}
                <code>contrast</code>, <code>grayscale</code>, <code>hue-rotate</code>,{' '}
                <code>invert</code>, <code>saturate</code>, <code>drop-shadow</code>。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default SepiaPage;

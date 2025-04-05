import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// シャドウの色を示すため、シャドウのサイズも設定します (shadow-lg を使用)。

const ShadowColorExample: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4">
      <div className="shadow-lg shadow-cyan-500/50 bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
        shadow-cyan-500/50
      </div>
      <div className="shadow-lg shadow-rose-500/50 bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
        shadow-rose-500/50
      </div>
      <div className="shadow-lg shadow-lime-500/50 bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
        shadow-lime-500/50
      </div>
      <div className="shadow-lg shadow-violet-500 bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
        shadow-violet-500 (no opacity)
      </div>
      <div className="shadow-lg shadow-black bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
        shadow-black
      </div>
      <div className="shadow-lg shadow-inherit text-blue-600 bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
        shadow-inherit (not obvious here)
      </div>
    </div>
  );
};

const ArbitraryShadowColorExample: React.FC = () => {
  return (
    <div className="shadow-lg shadow-[#ff7f50]/60 bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
      任意の値: shadow-[#ff7f50]/60 (Coral 60%)
    </div>
  );
};

// ページコンポーネント本体
const BoxShadowColorPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Effects: Box Shadow Color ';
const jaTitle = 'ボックスシャドウの色';
  const links = [
    {
      title: 'Tailwind CSS: Box Shadow Color (v3.0+)',
      url: 'https://tailwindcss.com/docs/box-shadow-color',
    },
    {
      title: 'Tailwind CSS: Box Shadow',
      url: 'https://tailwindcss.com/docs/box-shadow',
    },
    {
      title: 'MDN: box-shadow',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow',
    },
  ];

  // コードスニペットを定義
  const shadowColorHtml = `
<div class="shadow-lg shadow-cyan-500/50 ...">...</div>
<div class="shadow-lg shadow-rose-500 ...">...</div>
  `.trim();
  const arbitraryShadowColorHtml = `<div class="shadow-lg shadow-[#ff7f50]/60 ...">...</div>`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Box Shadow Color - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Box Shadow Color utility in Tailwind CSS. Examples and usage details for Box Shadow Color." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素に追加されたボックスシャドウの色を設定するためのユーティリティクラスです。Tailwind
              のカラーパレットを使用して、影に色を付けることができます。
            </p>
            <p>
              CSS の <code>--tw-shadow-color</code> カスタムプロパティを制御し、これが{' '}
              <code>box-shadow</code> の色として使用されます。
              <strong>これは Tailwind CSS v3.0 で追加された機能です。</strong>
            </p>
          </div>
        </section>
        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            基本的な使い方とパラメータ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">(v3.0+)</p>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              <code>
                shadow-{'{color}'}[-{'{shade}'}]
              </code>{' '}
              の形式でクラスを要素に適用します。通常、シャドウのサイズ (<code>shadow-*</code>)
              も一緒に指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>
                    shadow-{'{color}'}[-{'{shade}'}]
                  </code>
                </strong>{' '}
                (例: <code>shadow-blue-500</code>, <code>shadow-red-600/50</code>): 指定した色と濃淡
                (およびオプションの透明度) をシャドウの色として適用します。
              </li>
              <li>
                <strong>特殊な値</strong>: <code>shadow-inherit</code>, <code>shadow-current</code>,{' '}
                <code>shadow-transparent</code>, <code>shadow-black</code>,{' '}
                <code>shadow-white</code>。
              </li>
            </ul>
            <p className="mt-4">
              任意の色 (例: <code>shadow-[#ff7f50]/60</code>) も使用可能です (Tailwind JIT
              モード)。透明度もスラッシュ記法で指定できます。
            </p>
            <p>
              このユーティリティを指定しない場合、デフォルトのシャドウの色 (通常は半透明の黒)
              が使用されます。
            </p>
          </div>
        </section>
        {/* 色の指定例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            色の指定例
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            様々な色のシャドウ。<code>shadow-lg</code> を併用。
          </p>
          <div>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{shadowColorHtml}</code>
            </pre>
            <ShadowColorExample />
          </div>
        </section>
        {/* 任意の値 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            任意の値
          </h2>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              角括弧を使用して、任意の色コード (HEX, RGB, HSL) と透明度を直接指定できます。
            </p>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{arbitraryShadowColorHtml}</code>
            </pre>
            <ArbitraryShadowColorExample />
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:shadow-red-500</code> など) や状態 (
            <code>hover:shadow-blue-600</code>, <code>dark:shadow-gray-600</code> など)
            に応じてシャドウの色を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ホバー時にシャドウの色を変えることで、インタラクティブな効果を表現できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<button class="shadow-lg shadow-blue-500/50 hover:shadow-blue-700/70 ...">
  Hover Me
</button>
              `.trim()}
              </code>
            </pre>
            <button className="shadow-lg shadow-blue-500/50 hover:shadow-blue-700/70 transition bg-white text-black font-bold py-2 px-4 rounded">
              Hover Me
            </button>
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>このユーティリティは Tailwind CSS v3.0 で導入されました。</li>
              <li>
                シャドウの色を変更するには、シャドウ自体が適用されている必要があります (
                <code>shadow-*</code>)。
              </li>
              <li>
                シャドウの色ユーティリティは、Tailwind が内部で使用する{' '}
                <code>--tw-shadow-color</code> カスタムプロパティを設定します。これにより、
                <code>box-shadow</code> ユーティリティがこの色を使用します。
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
                <code>box-shadow</code> (<code>shadow-*</code>):
                ボックスシャドウのサイズと形状を設定します。
              </li>
              <li>
                <code>opacity</code> (<code>opacity-*</code>): 要素全体の透明度を設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default BoxShadowColorPage;

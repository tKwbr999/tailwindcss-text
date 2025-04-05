import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const OpacityExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <div className="opacity-100 bg-blue-500 size-20 rounded flex items-center justify-center text-white">
        100
      </div>
      <div className="opacity-75 bg-blue-500 size-20 rounded flex items-center justify-center text-white">
        75
      </div>
      <div className="opacity-50 bg-blue-500 size-20 rounded flex items-center justify-center text-white">
        50
      </div>
      <div className="opacity-25 bg-blue-500 size-20 rounded flex items-center justify-center text-white">
        25
      </div>
      <div className="opacity-0 bg-blue-500 size-20 rounded flex items-center justify-center text-white">
        0
      </div>
    </div>
  );
};

const ArbitraryOpacityExample: React.FC = () => {
  return (
    <div className="opacity-[.65] bg-purple-500 size-20 rounded flex items-center justify-center text-white">
      任意の値: opacity-[.65]
    </div>
  );
};

// ページコンポーネント本体
const OpacityPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Effects: Opacity ';
  const jaTitle = '不透明度';
  const links = [
    {
      title: 'Tailwind CSS: Opacity',
      url: 'https://tailwindcss.com/docs/opacity',
    },
    {
      title: 'MDN: opacity',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/opacity',
    },
  ];

  // コードスニペットを定義
  const opacityHtml = `
<div class="opacity-100 ...">...</div> {/* 100% */}
<div class="opacity-75 ...">...</div>  {/* 75% */}
<div class="opacity-50 ...">...</div>  {/* 50% */}
<div class="opacity-25 ...">...</div>  {/* 25% */}
<div class="opacity-0 ...">...</div>   {/* 0% */}
  `.trim();
  const arbitraryOpacityHtml = `<div class="opacity-[.65] ...">...</div>`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>
      <Helmet>
        <title>Opacity - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Opacity utility in Tailwind CSS. Examples and usage details for Opacity."
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
              要素全体の不透明度を設定するためのユーティリティクラスです。要素とその内容を半透明にしたり、完全に透明にしたりすることができます。
            </p>
            <p>
              CSS の <code>opacity</code> プロパティを制御します。
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
              <code>opacity-{'{amount}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>
              <code>{'{amount}'}</code> には、0 から 100 までの数値 (通常は 5 または 10 刻み)
              を指定します。これはパーセンテージに対応します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>opacity-0</code>
                </strong>{' '}
                (0%)
              </li>
              <li>
                <strong>
                  <code>opacity-5</code>
                </strong>{' '}
                (5%)
              </li>
              <li>...</li>
              <li>
                <strong>
                  <code>opacity-25</code>
                </strong>{' '}
                (25%)
              </li>
              <li>
                <strong>
                  <code>opacity-50</code>
                </strong>{' '}
                (50%)
              </li>
              <li>
                <strong>
                  <code>opacity-75</code>
                </strong>{' '}
                (75%)
              </li>
              <li>...</li>
              <li>
                <strong>
                  <code>opacity-100</code>
                </strong>{' '}
                (100% - デフォルト)
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>opacity-[.65]</code>) も使用可能です (Tailwind JIT モード)。0 から
              1 の間の数値を指定します。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">異なる不透明度の適用例。</p>
          <div className="space-y-6">
            {/* Standard Opacity */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準の不透明度
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{opacityHtml}</code>
              </pre>
              <OpacityExample />
            </div>
            {/* Arbitrary Opacity */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryOpacityHtml}</code>
              </pre>
              <ArbitraryOpacityExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:opacity-50</code> など) や状態 (<code>hover:opacity-75</code>
            , <code>disabled:opacity-25</code> など) に応じて不透明度を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ボタンのホバー効果や無効状態の表現によく使用されます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<button class="opacity-100 hover:opacity-75 disabled:opacity-25 ...">
  Submit
</button>
              `.trim()}
              </code>
            </pre>
            <button className="opacity-100 hover:opacity-75 disabled:opacity-25 transition-opacity bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2">
              Submit
            </button>
            <button
              className="opacity-100 hover:opacity-75 disabled:opacity-25 transition-opacity bg-blue-500 text-white font-bold py-2 px-4 rounded"
              disabled
            >
              Submit (Disabled)
            </button>
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <code>opacity</code> は要素全体 (背景、境界線、テキスト、子要素すべて)
                に影響します。特定の部分だけを半透明にしたい場合は、背景色やテキスト色の透明度ユーティリティ
                (例: <code>bg-blue-500/50</code>, <code>text-black/75</code>) を使用します。
              </li>
              <li>
                <code>opacity-0</code>{' '}
                は要素を完全に透明にしますが、レイアウト上のスペースは保持されます。要素を完全に非表示にしたい場合は{' '}
                <code>hidden</code> (<code>display: none;</code>) または <code>invisible</code> (
                <code>visibility: hidden;</code>) を使用します。
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
                背景色の透明度:{' '}
                <code>
                  bg-{'{color}'}/{'{opacity}'}
                </code>{' '}
                (例: <code>bg-red-500/50</code>) または <code>bg-opacity-*</code> (古い構文)。
              </li>
              <li>
                テキスト色の透明度:{' '}
                <code>
                  text-{'{color}'}/{'{opacity}'}
                </code>{' '}
                (例: <code>text-blue-500/75</code>) または <code>text-opacity-*</code> (古い構文)。
              </li>
              <li>
                境界線色の透明度:{' '}
                <code>
                  border-{'{color}'}/{'{opacity}'}
                </code>{' '}
                (例: <code>border-green-500/25</code>) または <code>border-opacity-*</code>{' '}
                (古い構文)。
              </li>
              <li>
                リング色の透明度:{' '}
                <code>
                  ring-{'{color}'}/{'{opacity}'}
                </code>{' '}
                (例: <code>ring-purple-500/50</code>) または <code>ring-opacity-*</code>{' '}
                (古い構文)。
              </li>
              <li>
                <code>visibility</code> (<code>invisible</code>, <code>visible</code>):
                要素の表示/非表示を切り替えます (レイアウトスペースは保持)。
              </li>
              <li>
                <code>display</code> (<code>hidden</code>, <code>block</code> など):
                要素の表示タイプを制御し、<code>hidden</code> でレイアウトから削除します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default OpacityPage;

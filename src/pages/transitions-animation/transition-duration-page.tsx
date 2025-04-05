import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント

const TransitionDurationExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="transition ease-in-out duration-75 hover:scale-110 bg-blue-500 text-white px-4 py-2 rounded">
        75ms
      </button>
      <button className="transition ease-in-out duration-150 hover:scale-110 bg-green-500 text-white px-4 py-2 rounded">
        150ms
      </button>
      <button className="transition ease-in-out duration-300 hover:scale-110 bg-yellow-500 text-black px-4 py-2 rounded">
        300ms (Default)
      </button>
      <button className="transition ease-in-out duration-700 hover:scale-110 bg-purple-500 text-white px-4 py-2 rounded">
        700ms
      </button>
      <button className="transition ease-in-out duration-1000 hover:scale-110 bg-red-500 text-white px-4 py-2 rounded">
        1000ms
      </button>
    </div>
  );
};

const ArbitraryTransitionDurationExample: React.FC = () => {
    return (
      <button className="transition ease-in-out duration-[2000ms] hover:scale-110 bg-teal-500 text-white px-4 py-2 rounded">
        Hover me (2000ms)
      </button>
    );
  };


// ページコンポーネント本体
const TransitionDurationPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Transitions & Animation: Transition Duration ';
const jaTitle = 'トランジション時間';
  const links = [
    {
      title: 'Tailwind CSS: Transition Duration',
      url: 'https://tailwindcss.com/docs/transition-duration',
    },
    {
      title: 'MDN: transition-duration',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration',
    },
  ];

  // コードスニペットを定義
  const transitionDurationHtml = `
<button class="transition duration-75 ...">...</button>   {/* 75ms */}
<button class="transition duration-100 ...">...</button>  {/* 100ms */}
<button class="transition duration-150 ...">...</button>  {/* 150ms */}
<button class="transition duration-200 ...">...</button>  {/* 200ms */}
<button class="transition duration-300 ...">...</button>  {/* 300ms (Default for 'duration') */}
<button class="transition duration-500 ...">...</button>  {/* 500ms */}
<button class="transition duration-700 ...">...</button>  {/* 700ms */}
<button class="transition duration-1000 ...">...</button> {/* 1000ms */}
  `.trim();

  const arbitraryTransitionDurationHtml = `<button class="transition duration-[2000ms] ...">...</button>`;


  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Transition Duration - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Transition Duration utility in Tailwind CSS. Examples and usage details for Transition Duration." />
      </Helmet>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              CSS トランジションの完了にかかる時間を制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>transition-duration</code> プロパティを制御します。
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
              <code>duration-{'{amount}'}</code> の形式でクラスを要素に適用します。<code>transition</code> または他の <code>transition-*</code> ユーティリティと一緒に使用します。
            </p>
            <p><code>{'{amount}'}</code> には、ミリ秒 (ms) を示す数値を指定します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>duration-75</code></strong> (75ms)</li>
              <li><strong><code>duration-100</code></strong> (100ms)</li>
              <li><strong><code>duration-150</code></strong> (150ms - デフォルト)</li>
              <li><strong><code>duration-200</code></strong> (200ms)</li>
              <li><strong><code>duration-300</code></strong> (300ms)</li>
              <li><strong><code>duration-500</code></strong> (500ms)</li>
              <li><strong><code>duration-700</code></strong> (700ms)</li>
              <li><strong><code>duration-1000</code></strong> (1000ms)</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>duration-[2000ms]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
             <p>
              デフォルトでは、Tailwind は 150ms のトランジション時間を提供します。<code>transition</code> クラスのみを使用した場合、このデフォルト値が適用されます。
            </p>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なるトランジション時間の適用例。ホバーして効果を確認してください。
          </p>
          <div className="space-y-6">
            {/* Standard Transition Duration */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準のトランジション時間</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{transitionDurationHtml}</code>
              </pre>
              <TransitionDurationExample />
            </div>
            {/* Arbitrary Transition Duration */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryTransitionDurationHtml}</code>
              </pre>
              <ArbitraryTransitionDurationExample />
            </div>
          </div>
        </section>

        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              トランジション時間は通常、要素の基本スタイルとして定義され、状態変化 (<code>hover:</code> など) で変更されるプロパティに適用されます。ブレークポイント (<code>md:duration-500</code> など) で時間を変更することも可能です。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ホバー時に背景色を 500ms かけて変更する例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<button class="transition-colors duration-500 ease-in-out bg-blue-500 hover:bg-red-500 ...">
  Hover Me
</button>
              `.trim()}</code>
            </pre>
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
                <code>transition-property-*</code> (<code>transition</code>, <code>transition-colors</code> など): どのプロパティをトランジションさせるかを指定します。
              </li>
              <li>
                <code>transition-timing-function-*</code> (<code>ease-*</code>): トランジションの速度カーブを設定します。
              </li>
              <li>
                <code>transition-delay-*</code>: トランジションが開始するまでの遅延時間を設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default TransitionDurationPage;
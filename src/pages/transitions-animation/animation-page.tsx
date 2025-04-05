import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント

const AnimationExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      {/* animate-spin */}
      <div className="text-center">
        <svg
          className="animate-spin h-8 w-8 text-blue-500 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <p className="text-xs mt-1">animate-spin</p>
      </div>

      {/* animate-ping */}
      <div className="text-center relative">
        <span className="relative flex h-5 w-5 mx-auto">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-sky-500"></span>
        </span>
        <p className="text-xs mt-2">animate-ping</p>
      </div>

      {/* animate-pulse */}
      <div className="text-center">
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs mt-1">animate-pulse</p>
      </div>

      {/* animate-bounce */}
      <div className="text-center">
        <svg
          className="animate-bounce w-6 h-6 text-green-500 mx-auto"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
        <p className="text-xs mt-1">animate-bounce</p>
      </div>

      {/* animate-none */}
      <div className="text-center">
        <svg
          className="animate-none h-8 w-8 text-red-500 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <p className="text-xs mt-1">animate-none</p>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const AnimationPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Transitions & Animation: Animation ';
  const jaTitle = 'アニメーション';
  const links = [
    {
      title: 'Tailwind CSS: Animation',
      url: 'https://tailwindcss.com/docs/animation',
    },
    {
      title: 'MDN: animation',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation',
    },
  ];

  // コードスニペットを定義
  const animationHtml = `
{/* Spin */}
<svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">...</svg>

{/* Ping */}
<span class="relative flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>

{/* Pulse */}
<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div class="animate-pulse flex space-x-4">...</div>
</div>

{/* Bounce */}
<svg class="animate-bounce w-6 h-6 ...">...</svg>

{/* No Animation */}
<button class="animate-none ...">...</button>
  `.trim();

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>
      <Helmet>
        <title>Animation - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Animation utility in Tailwind CSS. Examples and usage details for Animation."
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
              要素に基本的な CSS
              アニメーションを適用するためのユーティリティクラスです。ローディングスピナーや通知などの
              UI 要素に動きを加えるのに便利です。
            </p>
            <p>
              CSS の <code>animation</code> プロパティと関連する <code>@keyframes</code>{' '}
              を制御します。
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
                  <code>animate-spin</code>
                </strong>
                : 要素を線形に回転させます。ローディングインジケーターによく使用されます。
              </li>
              <li>
                <strong>
                  <code>animate-ping</code>
                </strong>
                :
                要素が拡大・縮小してフェードアウトするアニメーション。通知やレーダー効果に使用されます。通常、実際の要素と組み合わせて使用します。
              </li>
              <li>
                <strong>
                  <code>animate-pulse</code>
                </strong>
                :
                要素がゆっくりとフェードイン・アウトします。スケルトンローディングなどのプレースホルダーに使用されます。
              </li>
              <li>
                <strong>
                  <code>animate-bounce</code>
                </strong>
                : 要素が上下に跳ねるアニメーション。注意喚起やスクロール誘導に使用されます。
              </li>
              <li>
                <strong>
                  <code>animate-none</code>
                </strong>
                : 要素に適用されているアニメーションを削除します。
              </li>
            </ul>
            <p className="mt-4">
              カスタムアニメーションは <code>tailwind.config.js</code> の{' '}
              <code>theme.extend.animation</code> と <code>theme.extend.keyframes</code>{' '}
              で定義できます。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            Tailwind が提供する基本的なアニメーションの例。
          </p>
          <div className="space-y-6">
            {/* Standard Animations */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準アニメーション
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{animationHtml}</code>
              </pre>
              <AnimationExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            アニメーションユーティリティは、ブレークポイント (<code>md:animate-spin</code> など)
            や状態 (<code>hover:animate-none</code> など) に応じて適用または削除できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ホバー時にスピンアニメーションを停止する例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<svg class="animate-spin hover:animate-none h-5 w-5 ..." viewBox="0 0 24 24">...</svg>
              `.trim()}
              </code>
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
                <code>transition-*</code>:
                プロパティの変化を滑らかにするトランジション関連ユーティリティ。
              </li>
              <li>
                <code>transform</code>, <code>scale-*</code>, <code>rotate-*</code>,{' '}
                <code>translate-*</code>, <code>skew-*</code>:
                アニメーション内でよく使用される変形ユーティリティ。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default AnimationPage;

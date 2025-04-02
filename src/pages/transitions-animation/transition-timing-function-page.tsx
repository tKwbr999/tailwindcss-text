import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const TransitionTimingFunctionExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <button className="transition duration-500 ease-linear hover:translate-x-10 bg-blue-500 text-white px-4 py-2 rounded w-32 text-left">
        ease-linear
      </button>
      <button className="transition duration-500 ease-in hover:translate-x-10 bg-green-500 text-white px-4 py-2 rounded w-32 text-left">
        ease-in
      </button>
      <button className="transition duration-500 ease-out hover:translate-x-10 bg-yellow-500 text-black px-4 py-2 rounded w-32 text-left">
        ease-out
      </button>
      <button className="transition duration-500 ease-in-out hover:translate-x-10 bg-purple-500 text-white px-4 py-2 rounded w-32 text-left">
        ease-in-out (Default)
      </button>
    </div>
  );
};

const ArbitraryTransitionTimingFunctionExample: React.FC = () => {
    // cubic-bezier 関数は CSS で直接指定するか、Tailwind の設定でカスタムする必要があります。
    return (
      <div className="space-y-2">
         <p className="text-sm text-stone-600 dark:text-stone-400">
          任意の <code>cubic-bezier()</code> 値は通常 <code>tailwind.config.js</code> で設定します。
        </p>
        <button
          className="transition duration-500 hover:translate-x-10 bg-teal-500 text-white px-4 py-2 rounded w-32 text-left"
          style={{ transitionTimingFunction: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)' }} // インラインスタイルで例示
        >
          cubic-bezier(...)
        </button>
         <p className="text-xs text-gray-500">(上記ボタンはインラインスタイルで cubic-bezier を適用)</p>
      </div>
    );
  };


// ページコンポーネント本体
const TransitionTimingFunctionPage: React.FC = () => {
  // コードスニペットを定義
  const transitionTimingFunctionHtml = `
<button class="transition duration-500 ease-linear ...">...</button>  {/* linear */}
<button class="transition duration-500 ease-in ...">...</button>     {/* cubic-bezier(0.4, 0, 1, 1) */}
<button class="transition duration-500 ease-out ...">...</button>    {/* cubic-bezier(0, 0, 0.2, 1) */}
<button class="transition duration-500 ease-in-out ...">...</button> {/* cubic-bezier(0.4, 0, 0.2, 1) - Default */}
  `.trim();

  const arbitraryTransitionTimingFunctionHtml = `
{/* Requires configuration in tailwind.config.js */}
{/* e.g., theme: { extend: { transitionTimingFunction: { 'my-ease': 'cubic-bezier(...)' } } } */}
<button class="transition ease-my-ease ...">...</button>

{/* Or using arbitrary values (JIT) */}
<button class="transition ease-[cubic-bezier(0.1,0.7,1.0,0.1)] ...">...</button>
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
          Transitions & Animation: Transition Timing Function (イージング関数)
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
              CSS トランジションの速度カーブ (イージング関数) を制御するためのユーティリティクラスです。トランジション中の変化の仕方を定義します。
            </p>
            <p>
              CSS の <code>transition-timing-function</code> プロパティを制御します。
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
              <code>ease-{'{keyword}'}</code> の形式でクラスを要素に適用します。<code>transition</code> または他の <code>transition-*</code> ユーティリティと一緒に使用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>ease-linear</code></strong>: 一定の速度で変化します。</li>
              <li><strong><code>ease-in</code></strong>: ゆっくり始まり、徐々に加速します。</li>
              <li><strong><code>ease-out</code></strong>: 速く始まり、徐々に減速します。</li>
              <li><strong><code>ease-in-out</code></strong>: ゆっくり始まり、中間で加速し、ゆっくり終わります。これがデフォルトのイージング関数です。</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>ease-[cubic-bezier(0.1,0.7,1.0,0.1)]</code>) も使用可能です (Tailwind JIT モード)。カスタムの <code>cubic-bezier()</code> 関数を指定できます。
            </p>
          </CardContent>
        </Card>

        {/* 各パラメータの例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              異なるイージング関数の適用例。ホバーしてボタンの動きを確認してください。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Transition Timing Function */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準のイージング関数</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{transitionTimingFunctionHtml}</code>
              </pre>
              <TransitionTimingFunctionExample />
            </div>
            {/* Arbitrary Transition Timing Function */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値 (cubic-bezier)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryTransitionTimingFunctionHtml}</code>
              </pre>
              <ArbitraryTransitionTimingFunctionExample />
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
              イージング関数は通常、要素の基本スタイルとして定義されます。ブレークポイントで変更することは稀ですが可能です (例: <code>md:ease-in</code>)。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常は <code>ease-in-out</code> を使用し、中程度の画面サイズ以上で <code>ease-linear</code> に変更する場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<button class="transition duration-500 ease-in-out md:ease-linear hover:translate-x-10 ...">
  Hover Me
</button>
              `.trim()}</code>
            </pre>
          </CardContent>
        </Card>

        {/* 関連ユーティリティ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              関連ユーティリティ
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
               <li>
                <code>transition-property-*</code> (<code>transition</code>, <code>transition-colors</code> など): どのプロパティをトランジションさせるかを指定します。
              </li>
              <li>
                <code>transition-duration-*</code> (<code>duration-*</code>): トランジションの継続時間を設定します。
              </li>
              <li>
                <code>transition-delay-*</code> (<code>delay-*</code>): トランジションが開始するまでの遅延時間を設定します。
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
                  href="https://tailwindcss.com/docs/transition-timing-function"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Transition Timing Function
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: transition-timing-function
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TransitionTimingFunctionPage;
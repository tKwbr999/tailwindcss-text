import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const TransitionDelayExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="transition duration-300 ease-in-out delay-75 hover:scale-110 bg-blue-500 text-white px-4 py-2 rounded">
        Delay 75ms
      </button>
      <button className="transition duration-300 ease-in-out delay-150 hover:scale-110 bg-green-500 text-white px-4 py-2 rounded">
        Delay 150ms
      </button>
      <button className="transition duration-300 ease-in-out delay-300 hover:scale-110 bg-yellow-500 text-black px-4 py-2 rounded">
        Delay 300ms
      </button>
      <button className="transition duration-300 ease-in-out delay-700 hover:scale-110 bg-purple-500 text-white px-4 py-2 rounded">
        Delay 700ms
      </button>
      <button className="transition duration-300 ease-in-out delay-1000 hover:scale-110 bg-red-500 text-white px-4 py-2 rounded">
        Delay 1000ms
      </button>
    </div>
  );
};

const ArbitraryTransitionDelayExample: React.FC = () => {
    return (
      <button className="transition duration-300 ease-in-out delay-[2000ms] hover:scale-110 bg-teal-500 text-white px-4 py-2 rounded">
        Hover me (Delay 2000ms)
      </button>
    );
  };


// ページコンポーネント本体
const TransitionDelayPage: React.FC = () => {
  // コードスニペットを定義
  const transitionDelayHtml = `
<button class="transition delay-75 ...">...</button>   {/* 75ms */}
<button class="transition delay-100 ...">...</button>  {/* 100ms */}
<button class="transition delay-150 ...">...</button>  {/* 150ms */}
<button class="transition delay-200 ...">...</button>  {/* 200ms */}
<button class="transition delay-300 ...">...</button>  {/* 300ms */}
<button class="transition delay-500 ...">...</button>  {/* 500ms */}
<button class="transition delay-700 ...">...</button>  {/* 700ms */}
<button class="transition delay-1000 ...">...</button> {/* 1000ms */}
  `.trim();

  const arbitraryTransitionDelayHtml = `<button class="transition delay-[2000ms] ...">...</button>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Transitions & Animation: Transition Delay (トランジション遅延)
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
              CSS トランジションが開始するまでの待機時間を制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>transition-delay</code> プロパティを制御します。
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
              <code>delay-{'{amount}'}</code> の形式でクラスを要素に適用します。<code>transition</code> または他の <code>transition-*</code> ユーティリティと一緒に使用します。
            </p>
            <p><code>{'{amount}'}</code> には、ミリ秒 (ms) を示す数値を指定します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>delay-0</code></strong> (0ms - デフォルト)</li>
              <li><strong><code>delay-75</code></strong> (75ms)</li>
              <li><strong><code>delay-100</code></strong> (100ms)</li>
              <li><strong><code>delay-150</code></strong> (150ms)</li>
              <li><strong><code>delay-200</code></strong> (200ms)</li>
              <li><strong><code>delay-300</code></strong> (300ms)</li>
              <li><strong><code>delay-500</code></strong> (500ms)</li>
              <li><strong><code>delay-700</code></strong> (700ms)</li>
              <li><strong><code>delay-1000</code></strong> (1000ms)</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>delay-[2000ms]</code>) も使用可能です (Tailwind JIT モード)。
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
              異なるトランジション遅延時間の適用例。ホバーしてから指定時間後にトランジションが開始します。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Transition Delay */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準のトランジション遅延時間</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{transitionDelayHtml}</code>
              </pre>
              <TransitionDelayExample />
            </div>
            {/* Arbitrary Transition Delay */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryTransitionDelayHtml}</code>
              </pre>
              <ArbitraryTransitionDelayExample />
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
              トランジション遅延時間は通常、要素の基本スタイルとして定義されます。ブレークポイント (<code>md:delay-500</code> など) で遅延時間を変更することも可能です。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ホバー時に 500ms 遅延して背景色を変更する例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<button class="transition-colors duration-300 ease-in-out delay-500 bg-blue-500 hover:bg-red-500 ...">
  Hover Me (500ms delay)
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
                <code>transition-timing-function-*</code> (<code>ease-*</code>): トランジションの速度カーブを設定します。
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
                  href="https://tailwindcss.com/docs/transition-delay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Transition Delay
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: transition-delay
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TransitionDelayPage;
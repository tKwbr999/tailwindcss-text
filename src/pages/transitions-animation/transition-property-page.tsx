import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント

const TransitionPropertyExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <button className="transition-colors duration-300 ease-in-out hover:bg-blue-500 hover:text-white bg-gray-200 text-gray-700 px-4 py-2 rounded">
        Hover me (Colors)
      </button>
      <button className="transition-opacity duration-300 ease-in-out hover:opacity-50 bg-green-500 text-white px-4 py-2 rounded">
        Hover me (Opacity)
      </button>
       <button className="transition-shadow duration-300 ease-in-out hover:shadow-lg bg-yellow-500 text-black px-4 py-2 rounded">
        Hover me (Shadow)
      </button>
       <button className="transition-transform duration-300 ease-in-out hover:scale-110 bg-purple-500 text-white px-4 py-2 rounded">
        Hover me (Transform)
      </button>
       <button className="transition duration-300 ease-in-out hover:bg-red-500 hover:text-white hover:scale-105 bg-orange-500 text-white px-4 py-2 rounded">
        Hover me (All - default)
      </button>
       <button className="transition-none duration-300 ease-in-out hover:bg-indigo-500 hover:text-white bg-pink-500 text-white px-4 py-2 rounded">
        Hover me (None - no transition)
      </button>
    </div>
  );
};

const ArbitraryTransitionPropertyExample: React.FC = () => {
    // 任意の値は通常、カスタムプロパティや特定のCSSプロパティ名を指定します。
    // Tailwindでは通常、設定ファイルで拡張します。
    // ここでは例としてインラインスタイルで示すか、コメントで説明します。
    return (
      <div className="space-y-2">
        <p className="text-sm text-stone-600 dark:text-stone-400">
          任意の値は通常 <code>tailwind.config.js</code> で設定します。例: <code>transitionProperty: {'{'} 'height': 'height' {'}'}</code> を追加し、<code>transition-height</code> を使用。
        </p>
        {/* <button className="transition-[height] duration-300 ease-in-out hover:h-20 h-10 bg-teal-500 text-white px-4 py-2 rounded overflow-hidden">
          Hover me (Height - requires config)
        </button> */}
         <p className="text-xs text-gray-500">(上記ボタンは設定がないと機能しません)</p>
      </div>
    );
  };


// ページコンポーネント本体
const TransitionPropertyPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Transitions & Animation: Transition Property (トランジション対象プロパティ)';
  const links = [
    {
      title: 'Tailwind CSS: Transition Property',
      url: 'https://tailwindcss.com/docs/transition-property',
    },
    {
      title: 'MDN: transition-property',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property',
    },
  ];

  // コードスニペットを定義
  const transitionPropertyHtml = `
<button class="transition-none ...">...</button>        {/* transition-property: none; */}
<button class="transition-all ...">...</button>        {/* transition-property: all; */}
<button class="transition-colors ...">...</button>     {/* background-color, border-color, color, fill, stroke */}
<button class="transition-opacity ...">...</button>    {/* opacity */}
<button class="transition-shadow ...">...</button>     {/* box-shadow */}
<button class="transition-transform ...">...</button>   {/* transform */}
<button class="transition ...">...</button>           {/* colors, opacity, shadow, transform (デフォルト) */}
  `.trim();

  const arbitraryTransitionPropertyHtml = `
{/* Requires configuration in tailwind.config.js */}
{/* e.g., theme: { extend: { transitionProperty: { 'height': 'height' } } } */}
<button class="transition-height ...">...</button>
  `.trim();


  return (
    <ArticleLayout title={title} links={links}>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の状態変化時にどの CSS プロパティをトランジションさせるかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>transition-property</code> プロパティを制御します。
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
              要素に以下の形式でクラスを適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>transition-none</code></strong>: トランジションを無効にします。</li>
              <li><strong><code>transition-all</code></strong>: すべてのプロパティをトランジション対象にします。</li>
              <li><strong><code>transition-colors</code></strong>: 背景色、境界線色、文字色、SVG の fill と stroke を対象にします。</li>
              <li><strong><code>transition-opacity</code></strong>: 不透明度 (opacity) を対象にします。</li>
              <li><strong><code>transition-shadow</code></strong>: ボックスシャドウ (box-shadow) を対象にします。</li>
              <li><strong><code>transition-transform</code></strong>: transform (scale, rotate, translate, skew) を対象にします。</li>
              <li><strong><code>transition</code></strong>: デフォルト。<code>colors</code>, <code>opacity</code>, <code>shadow</code>, <code>transform</code> の組み合わせです。</li>
            </ul>
             <p className="mt-4">
              任意の値は通常、<code>tailwind.config.js</code> で <code>theme.extend.transitionProperty</code> を拡張して定義します。
            </p>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なるトランジションプロパティの適用例。ホバーして効果を確認してください。
          </p>
          <div className="space-y-6">
            {/* Standard Transition Property */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準のトランジションプロパティ</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{transitionPropertyHtml}</code>
              </pre>
              <TransitionPropertyExample />
            </div>
            {/* Arbitrary Transition Property */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値 (設定が必要)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryTransitionPropertyHtml}</code>
              </pre>
              <ArbitraryTransitionPropertyExample />
            </div>
          </div>
        </section>

        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              状態変化との組み合わせ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              <code>transition-*</code> ユーティリティは通常、<code>hover:</code>, <code>focus:</code> などの状態修飾子と組み合わせて使用します。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ホバー時に背景色とスケールを変化させる例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<button class="transition duration-300 ease-in-out hover:bg-blue-500 hover:scale-110 ...">
  Hover Me
</button>
{/* デフォルトの transition (all を含まない) でも機能する */}

<button class="transition-all duration-300 ease-in-out hover:bg-blue-500 hover:scale-110 ...">
  Hover Me (transition-all)
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
                <code>transition-duration-*</code>: トランジションの継続時間を設定します。
              </li>
              <li>
                <code>transition-timing-function-*</code> (<code>ease-*</code>): トランジションの速度カーブを設定します。
              </li>
              <li>
                <code>transition-delay-*</code>: トランジションが開始するまでの遅延時間を設定します。
              </li>
               <li>
                <code>animate-*</code>: CSS アニメーションを適用します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default TransitionPropertyPage;
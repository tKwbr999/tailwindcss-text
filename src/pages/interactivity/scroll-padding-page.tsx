import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React, { useRef } from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const ScrollPaddingExample: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    // block/inline: 'start' を使うとパディングの効果が見やすい
    element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  };

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="w-full h-48 overflow-scroll border border-gray-300 rounded p-4 scroll-smooth snap-y snap-mandatory bg-white dark:bg-gray-700 scroll-pt-8 scroll-pl-4"
      >
        {' '}
        {/* scroll-pt-8 と scroll-pl-4 を適用 */}
        <div
          className="snap-start h-32 mb-4 bg-blue-200 dark:bg-blue-800 flex items-center justify-center rounded"
          id="item-sp-1"
        >
          Item 1
        </div>
        <div
          className="snap-start h-32 mb-4 bg-green-200 dark:bg-green-800 flex items-center justify-center rounded"
          id="item-sp-2"
        >
          Item 2
        </div>
        <div
          className="snap-start h-32 mb-4 bg-yellow-200 dark:bg-yellow-800 flex items-center justify-center rounded"
          id="item-sp-3"
        >
          Item 3
        </div>
        <div
          className="snap-start h-32 bg-purple-200 dark:bg-purple-800 flex items-center justify-center rounded"
          id="item-sp-4"
        >
          Item 4
        </div>
      </div>
      <div className="mt-2 space-x-2 flex flex-wrap gap-2">
        <button
          onClick={() => scrollToElement('item-sp-1')}
          className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
        >
          Scroll to Item 1
        </button>
        <button
          onClick={() => scrollToElement('item-sp-2')}
          className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
        >
          Scroll to Item 2
        </button>
        <button
          onClick={() => scrollToElement('item-sp-3')}
          className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
        >
          Scroll to Item 3
        </button>
        <button
          onClick={() => scrollToElement('item-sp-4')}
          className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
        >
          Scroll to Item 4
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-1">
        コンテナには <code>scroll-pt-8</code> (上部パディング) と <code>scroll-pl-4</code>{' '}
        (左部パディング)
        が適用されています。ボタンをクリックすると、要素がスナップする際にこのパディングが考慮されます。
      </p>
    </div>
  );
};

const ArbitraryScrollPaddingExample: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="w-full h-48 overflow-y-scroll border border-gray-300 rounded p-4 scroll-smooth snap-y snap-mandatory bg-white dark:bg-gray-700 scroll-pt-[60px]"
      >
        {' '}
        {/* 任意の値 */}
        <div
          className="snap-start h-32 mb-4 bg-teal-200 dark:bg-teal-800 flex items-center justify-center rounded"
          id="item-arb-sp-1"
        >
          Item Arbitrary 1
        </div>
        <div
          className="snap-start h-32 bg-orange-200 dark:bg-orange-800 flex items-center justify-center rounded"
          id="item-arb-sp-2"
        >
          Item Arbitrary 2
        </div>
      </div>
      <div className="mt-2 space-x-2">
        <button
          onClick={() => scrollToElement('item-arb-sp-1')}
          className="bg-teal-500 text-white px-3 py-1 rounded text-sm"
        >
          Scroll to Arbitrary 1
        </button>
        <button
          onClick={() => scrollToElement('item-arb-sp-2')}
          className="bg-orange-500 text-white px-3 py-1 rounded text-sm"
        >
          Scroll to Arbitrary 2
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-1">
        コンテナには <code>scroll-pt-[60px]</code> が適用されています。
      </p>
    </div>
  );
};

// ページコンポーネント本体
const ScrollPaddingPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Interactivity: Scroll Padding (スクロールパディング)';
  const links = [
    {
      title: 'Tailwind CSS: Scroll Padding',
      url: 'https://tailwindcss.com/docs/scroll-padding',
    },
    {
      title: 'MDN: scroll-padding',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding',
    },
  ];

  // コードスニペットを定義
  const scrollPaddingHtml = `
{/* Scroll Padding Top */}
<div class="scroll-pt-4 ...">...</div>
<div class="scroll-pt-16 ...">...</div>

{/* Scroll Padding Bottom/Left/Right */}
<div class="scroll-pb-8 ...">...</div>
<div class="scroll-pl-2 ...">...</div>
<div class="scroll-pr-px ...">...</div>

{/* Scroll Padding X/Y */}
<div class="scroll-px-4 ...">...</div> {/* scroll-pl-4 scroll-pr-4 */}
<div class="scroll-py-8 ...">...</div> {/* scroll-pt-8 scroll-pb-8 */}
  `.trim();

  const arbitraryScrollPaddingHtml = `<div class="scroll-pt-[60px] ...">...</div>`;

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Scroll Padding - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Scroll Padding utility in Tailwind CSS. Examples and usage details for Scroll Padding." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              スクロールコンテナのスナップポート (スクロールが停止する境界)
              のパディングを制御するためのユーティリティクラスです。これにより、スクロールスナップ時に要素がコンテナの端にぴったりくっつくのではなく、指定したパディング分だけ内側に配置されるようになります。
            </p>
            <p>
              CSS の <code>scroll-padding-top</code>, <code>scroll-padding-right</code>,{' '}
              <code>scroll-padding-bottom</code>, <code>scroll-padding-left</code>{' '}
              プロパティを制御します。
            </p>
          </div>
        </section>
        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            基本的な使い方とパラメータ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>スクロール可能なコンテナ要素に以下の形式でクラスを適用します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>scroll-p-{'{size}'}</code>
                </strong>
                : 全方向に同じパディングを設定します。
              </li>
              <li>
                <strong>
                  <code>scroll-pt-{'{size}'}</code>
                </strong>
                : 上方向にパディングを設定します。
              </li>
              <li>
                <strong>
                  <code>scroll-pr-{'{size}'}</code>
                </strong>
                : 右方向にパディングを設定します。
              </li>
              <li>
                <strong>
                  <code>scroll-pb-{'{size}'}</code>
                </strong>
                : 下方向にパディングを設定します。
              </li>
              <li>
                <strong>
                  <code>scroll-pl-{'{size}'}</code>
                </strong>
                : 左方向にパディングを設定します。
              </li>
              <li>
                <strong>
                  <code>scroll-px-{'{size}'}</code>
                </strong>
                : 水平方向 (左右) にパディングを設定します。
              </li>
              <li>
                <strong>
                  <code>scroll-py-{'{size}'}</code>
                </strong>
                : 垂直方向 (上下) にパディングを設定します。
              </li>
            </ul>
            <p>
              <code>{'{size}'}</code> には、Tailwind のスペーシングスケール (例: 0, 1, 2, 4, px
              など) を指定します。
            </p>
            <p className="mt-4">
              任意の値 (例: <code>scroll-pt-[60px]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なるスクロールパディングの適用例。コンテナに <code>scroll-pt-8</code> と{' '}
            <code>scroll-pl-4</code>{' '}
            を適用しています。ボタンをクリックしてスクロールし、要素がコンテナの上端や左端から離れてスナップすることを確認してください。
          </p>
          <div className="space-y-6">
            {/* Scroll Padding Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                スクロールパディングの制御
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{scrollPaddingHtml}</code>
              </pre>
              <ScrollPaddingExample />
            </div>
            {/* Arbitrary Scroll Padding Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryScrollPaddingHtml}</code>
              </pre>
              <ArbitraryScrollPaddingExample />
            </div>
          </div>
        </section>
        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            特定のブレークポイントでのみスクロールパディングを変更するには、クラス名の前にブレークポイントプレフィックスを追加します
            (例: <code>md:scroll-pt-12</code>)。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常はパディング 8 を使用し、中程度の画面サイズ以上でパディング 12 にする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="scroll-pt-8 md:scroll-pt-12 ...">
  {/* ... */}
</div>
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
                <code>scroll-margin-*</code>: スナップする要素自体のマージンを設定します。
              </li>
              <li>
                <code>scroll-snap-type-*</code>: スクロールコンテナのスナップ動作を有効にします。
              </li>
              <li>
                <code>scroll-snap-align-*</code>:
                スナップコンテナ内の要素がどのようにスナップするかを指定します。
              </li>
              <li>
                <code>scroll-behavior-*</code>: ナビゲーションによるスクロールの動作
                (スムーズかどうか) を制御します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default ScrollPaddingPage;

import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React, { useRef } from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const ScrollMarginExample: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' }); // block: 'start' で要素の上端に合わせる
  };

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="h-48 overflow-y-scroll border border-gray-300 rounded p-4 scroll-smooth space-y-20 bg-white dark:bg-gray-700"
      >
        {/* 各要素に異なる scroll-margin-top を適用 */}
        <div id="item-mt-0" className="scroll-mt-0 h-10 bg-blue-200 dark:bg-blue-800 p-2 rounded">
          Item 1 (scroll-mt-0)
        </div>
        <div id="item-mt-4" className="scroll-mt-4 h-10 bg-green-200 dark:bg-green-800 p-2 rounded">
          Item 2 (scroll-mt-4)
        </div>
        <div
          id="item-mt-8"
          className="scroll-mt-8 h-10 bg-yellow-200 dark:bg-yellow-800 p-2 rounded"
        >
          Item 3 (scroll-mt-8)
        </div>
        <div
          id="item-mt-16"
          className="scroll-mt-16 h-10 bg-purple-200 dark:bg-purple-800 p-2 rounded"
        >
          Item 4 (scroll-mt-16)
        </div>
        <div id="item-mt-px" className="scroll-mt-px h-10 bg-red-200 dark:bg-red-800 p-2 rounded">
          Item 5 (scroll-mt-px)
        </div>
        {/* 他の方向の例 (scroll-mb, scroll-ml, scroll-mr) は視覚的に示しにくい */}
        <div
          id="item-mb-8"
          className="scroll-mb-8 h-10 bg-orange-200 dark:bg-orange-800 p-2 rounded"
        >
          Item 6 (scroll-mb-8)
        </div>
      </div>
      <div className="mt-2 space-x-2 flex flex-wrap gap-2">
        <button
          onClick={() => scrollToElement('item-mt-0')}
          className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
        >
          Scroll to Item 1
        </button>
        <button
          onClick={() => scrollToElement('item-mt-4')}
          className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
        >
          Scroll to Item 2
        </button>
        <button
          onClick={() => scrollToElement('item-mt-8')}
          className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
        >
          Scroll to Item 3
        </button>
        <button
          onClick={() => scrollToElement('item-mt-16')}
          className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
        >
          Scroll to Item 4
        </button>
        <button
          onClick={() => scrollToElement('item-mt-px')}
          className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
        >
          Scroll to Item 5
        </button>
        <button
          onClick={() => scrollToElement('item-mb-8')}
          className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
        >
          Scroll to Item 6
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-1">
        ボタンをクリックすると、各要素の上端にスクロールします。<code>scroll-mt-*</code>{' '}
        は、スクロール停止位置の上部に追加のマージンを指定します。
      </p>
    </div>
  );
};

const ArbitraryScrollMarginExample: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="h-48 overflow-y-scroll border border-gray-300 rounded p-4 scroll-smooth space-y-20 bg-white dark:bg-gray-700"
      >
        <div
          id="item-arbitrary"
          className="scroll-mt-[50px] h-10 bg-teal-200 dark:bg-teal-800 p-2 rounded"
        >
          Item Arbitrary (scroll-mt-[50px])
        </div>
        <div className="h-96"></div> {/* Spacer */}
      </div>
      <div className="mt-2">
        <button
          onClick={() => scrollToElement('item-arbitrary')}
          className="bg-teal-500 text-white px-3 py-1 rounded text-sm"
        >
          Scroll to Arbitrary Item
        </button>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const ScrollMarginPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Interactivity: Scroll Margin (スクロールマージン)';
  const links = [
    {
      title: 'Tailwind CSS: Scroll Margin',
      url: 'https://tailwindcss.com/docs/scroll-margin',
    },
    {
      title: 'MDN: scroll-margin',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin',
    },
  ];

  // コードスニペットを定義
  const scrollMarginHtml = `
{/* Scroll Margin Top */}
<div id="section1" class="scroll-mt-4 ...">...</div>
<div id="section2" class="scroll-mt-16 ...">...</div>

{/* Scroll Margin Bottom/Left/Right (less common for scroll snapping) */}
<div class="scroll-mb-8 ...">...</div>
<div class="scroll-ml-2 ...">...</div>
<div class="scroll-mr-px ...">...</div>

{/* Scroll Margin X/Y */}
<div class="scroll-mx-4 ...">...</div> {/* scroll-ml-4 scroll-mr-4 */}
<div class="scroll-my-8 ...">...</div> {/* scroll-mt-8 scroll-mb-8 */}
  `.trim();

  const arbitraryScrollMarginHtml = `<div id="section3" class="scroll-mt-[50px] ...">...</div>`;

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Scroll Margin - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Scroll Margin utility in Tailwind CSS. Examples and usage details for Scroll Margin." />
        {/* OGP タグ */}
        <meta property="og:title" content="Scroll Margin - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Scroll Margin utility in Tailwind CSS. Examples and usage details for Scroll Margin." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/interactivity/scroll-margin" />
        {/* <meta property="og:image" content="[画像のURL]" /> */} {/* 必要に応じて画像URLを設定 */}
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素がスクロールコンテナのスナップポート (スクロールが停止する境界)
              にスナップするときの外側のマージンを制御するためのユーティリティクラスです。主に、固定ヘッダーなどの要素によって隠れないように、スクロール停止位置を調整するために使用されます。
            </p>
            <p>
              CSS の <code>scroll-margin-top</code>, <code>scroll-margin-right</code>,{' '}
              <code>scroll-margin-bottom</code>, <code>scroll-margin-left</code>{' '}
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
            <p>スクロールスナップコンテナ内の要素に以下の形式でクラスを適用します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>scroll-m-{'{size}'}</code>
                </strong>
                : 全方向に同じマージンを設定します。
              </li>
              <li>
                <strong>
                  <code>scroll-mt-{'{size}'}</code>
                </strong>
                : 上方向にマージンを設定します。
              </li>
              <li>
                <strong>
                  <code>scroll-mr-{'{size}'}</code>
                </strong>
                : 右方向にマージンを設定します。
              </li>
              <li>
                <strong>
                  <code>scroll-mb-{'{size}'}</code>
                </strong>
                : 下方向にマージンを設定します。
              </li>
              <li>
                <strong>
                  <code>scroll-ml-{'{size}'}</code>
                </strong>
                : 左方向にマージンを設定します。
              </li>
              <li>
                <strong>
                  <code>scroll-mx-{'{size}'}</code>
                </strong>
                : 水平方向 (左右) にマージンを設定します。
              </li>
              <li>
                <strong>
                  <code>scroll-my-{'{size}'}</code>
                </strong>
                : 垂直方向 (上下) にマージンを設定します。
              </li>
            </ul>
            <p>
              <code>{'{size}'}</code> には、Tailwind のスペーシングスケール (例: 0, 1, 2, 4, px
              など) を指定します。
            </p>
            <p className="mt-4">
              任意の値 (例: <code>scroll-mt-[50px]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なるスクロールマージン (主に <code>scroll-mt</code>)
            の適用例。ボタンをクリックしてスクロール停止位置の違いを確認してください。
          </p>
          <div className="space-y-6">
            {/* Scroll Margin Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                スクロールマージンの制御
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{scrollMarginHtml}</code>
              </pre>
              <ScrollMarginExample />
            </div>
            {/* Arbitrary Scroll Margin Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryScrollMarginHtml}</code>
              </pre>
              <ArbitraryScrollMarginExample />
            </div>
          </div>
        </section>
        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            特定のブレークポイントでのみスクロールマージンを変更するには、クラス名の前にブレークポイントプレフィックスを追加します
            (例: <code>md:scroll-mt-8</code>)。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常はマージン 4 を使用し、中程度の画面サイズ以上でマージン 8 にする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div id="section-responsive" class="scroll-mt-4 md:scroll-mt-8 ...">
  {/* ... */}
</div>
              `.trim()}
              </code>
            </pre>
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <code>scroll-margin-*</code> はスクロールスナップコンテナ内のアイテムに適用します。
              </li>
              <li>
                このプロパティは、要素がスクロールスナップのターゲットになったときに、スナップポート
                (ビューポートまたはスクロールコンテナの表示領域)
                との間にどれだけの間隔を確保するかを指定します。
              </li>
              <li>
                主に固定ヘッダーや他の固定要素の下にコンテンツが隠れてしまうのを防ぐために{' '}
                <code>scroll-mt-*</code> がよく使われます。
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
                <code>scroll-padding-*</code>:
                スクロールコンテナ自体のスナップポートのパディングを設定します。
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

export default ScrollMarginPage;

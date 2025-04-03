import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React, { useRef } from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const ScrollBehaviorExample: React.FC = () => {
  const scrollContainerRefAuto = useRef<HTMLDivElement>(null);
  const scrollContainerRefSmooth = useRef<HTMLDivElement>(null);

  const scrollToTop = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollTo({ top: 0 }); // behavior は CSS で制御
    }
  };

  const scrollToBottom = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollTo({ top: ref.current.scrollHeight }); // behavior は CSS で制御
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
          scroll-auto (デフォルト)
        </h3>
        <div
          ref={scrollContainerRefAuto}
          className="scroll-auto h-48 overflow-y-scroll border border-gray-300 rounded p-2 bg-white dark:bg-gray-700"
        >
          <p className="mb-2">Top Content</p>
          <div className="h-96"></div> {/* Spacer */}
          <p id="auto-bottom" className="mt-2">
            Bottom Content
          </p>
        </div>
        <div className="mt-2 space-x-2">
          <button
            onClick={() => scrollToBottom(scrollContainerRefAuto)}
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
          >
            Scroll to Bottom (Auto)
          </button>
          <button
            onClick={() => scrollToTop(scrollContainerRefAuto)}
            className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
          >
            Scroll to Top (Auto)
          </button>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">scroll-smooth</h3>
        <div
          ref={scrollContainerRefSmooth}
          className="scroll-smooth h-48 overflow-y-scroll border border-gray-300 rounded p-2 bg-white dark:bg-gray-700"
        >
          <p className="mb-2">Top Content</p>
          <div className="h-96"></div> {/* Spacer */}
          <p id="smooth-bottom" className="mt-2">
            Bottom Content
          </p>
        </div>
        <div className="mt-2 space-x-2">
          <button
            onClick={() => scrollToBottom(scrollContainerRefSmooth)}
            className="bg-green-500 text-white px-3 py-1 rounded text-sm"
          >
            Scroll to Bottom (Smooth)
          </button>
          <button
            onClick={() => scrollToTop(scrollContainerRefSmooth)}
            className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
          >
            Scroll to Top (Smooth)
          </button>
        </div>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const ScrollBehaviorPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Interactivity: Scroll Behavior (スクロール動作)';
  const links = [
    {
      title: 'Tailwind CSS: Scroll Behavior',
      url: 'https://tailwindcss.com/docs/scroll-behavior',
    },
    {
      title: 'MDN: scroll-behavior',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior',
    },
  ];

  // コードスニペットを定義
  const scrollAutoHtml = `
<div class="scroll-auto ...">
  {/* ... content ... */}
</div>
  `.trim();

  const scrollSmoothHtml = `
<div class="scroll-smooth ...">
  {/* ... content ... */}
</div>
  `.trim();

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Scroll Behavior - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Scroll Behavior utility in Tailwind CSS. Examples and usage details for Scroll Behavior." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              ユーザーがリンクをクリックしたり、プログラム的にナビゲーションしたりしたときに、スクロールコンテナがどのようにスクロールするかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>scroll-behavior</code> プロパティを制御します。
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
              スクロール可能なコンテナ要素 (通常は <code>overflow</code> が <code>scroll</code>{' '}
              または <code>auto</code> に設定された要素) に以下のクラスを適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>scroll-auto</code>
                </strong>
                : スクロール位置が瞬時にジャンプします (<code>scroll-behavior: auto;</code>
                )。これがデフォルトの挙動です。
              </li>
              <li>
                <strong>
                  <code>scroll-smooth</code>
                </strong>
                : スクロール位置が滑らかにアニメーションします (
                <code>scroll-behavior: smooth;</code>)。
              </li>
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            <code>scroll-auto</code> と <code>scroll-smooth</code>{' '}
            の比較。ボタンをクリックしてスクロール動作を確認してください。
          </p>
          <div className="space-y-6">
            {/* Scroll Behavior Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                スクロール動作の制御
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{scrollAutoHtml}</code>
              </pre>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{scrollSmoothHtml}</code>
              </pre>
              <ScrollBehaviorExample />
            </div>
          </div>
        </section>
        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            特定のブレークポイントでのみスクロール動作を変更するには、クラス名の前にブレークポイントプレフィックスを追加します
            (例: <code>md:scroll-smooth</code>)。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常は自動スクロールを使用し、中程度の画面サイズ以上でスムーズスクロールにする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="scroll-auto md:scroll-smooth ...">
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
                <code>scroll-behavior</code> は、ユーザーによる手動スクロール
                (マウスホイールやタッチ操作) ではなく、ナビゲーションによるスクロール (例:
                アンカーリンクへのジャンプ、<code>element.scrollTo()</code> JavaScript メソッド)
                に影響します。
              </li>
              <li>
                ブラウザのサポート状況は良好ですが、非常に古いブラウザでは動作しない可能性があります。
              </li>
              <li>
                OS の設定でモーションの低減が有効になっている場合、<code>scroll-smooth</code>{' '}
                は無効になることがあります。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default ScrollBehaviorPage;

import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const ScrollSnapAlignExample: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Snap Start */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-start</h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-mandatory scroll-pl-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">
            Start
          </div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">
            Start
          </div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">
            Start
          </div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">
            Start
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          要素の左端がコンテナの左端 (scroll-padding を考慮) にスナップします。
        </p>
      </div>

      {/* Snap Center */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-center</h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-mandatory bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-center flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">
            Center
          </div>
          <div className="snap-center flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">
            Center
          </div>
          <div className="snap-center flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">
            Center
          </div>
          <div className="snap-center flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">
            Center
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">要素の中央がコンテナの中央にスナップします。</p>
      </div>

      {/* Snap End */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-end</h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-mandatory scroll-pr-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-end flex-shrink-0 w-40 h-32 bg-yellow-200 dark:bg-yellow-800 rounded flex items-center justify-center">
            End
          </div>
          <div className="snap-end flex-shrink-0 w-40 h-32 bg-yellow-200 dark:bg-yellow-800 rounded flex items-center justify-center">
            End
          </div>
          <div className="snap-end flex-shrink-0 w-40 h-32 bg-yellow-200 dark:bg-yellow-800 rounded flex items-center justify-center">
            End
          </div>
          <div className="snap-end flex-shrink-0 w-40 h-32 bg-yellow-200 dark:bg-yellow-800 rounded flex items-center justify-center">
            End
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          要素の右端がコンテナの右端 (scroll-padding を考慮) にスナップします。
        </p>
      </div>
      {/* Snap None */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-none</h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-mandatory bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-none flex-shrink-0 w-40 h-32 bg-red-200 dark:bg-red-800 rounded flex items-center justify-center">
            None
          </div>
          <div className="snap-none flex-shrink-0 w-40 h-32 bg-red-200 dark:bg-red-800 rounded flex items-center justify-center">
            None
          </div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">
            Start (for comparison)
          </div>
          <div className="snap-none flex-shrink-0 w-40 h-32 bg-red-200 dark:bg-red-800 rounded flex items-center justify-center">
            None
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          要素はスナップしません (コンテナが <code>snap-mandatory</code> でも)。
        </p>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const ScrollSnapAlignPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Interactivity: Scroll Snap Align (スクロールスナップ位置揃え)';
  const links = [
    {
      title: 'Tailwind CSS: Scroll Snap Align',
      url: 'https://tailwindcss.com/docs/scroll-snap-align',
    },
    {
      title: 'MDN: scroll-snap-align',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align',
    },
  ];

  // コードスニペットを定義
  const scrollSnapAlignHtml = `
<div class="snap-x snap-mandatory ...">
  <div class="snap-start ...">...</div>
  <div class="snap-center ...">...</div>
  <div class="snap-end ...">...</div>
  <div class="snap-align-none ...">...</div> {/* Equivalent to snap-none */}
</div>
  `.trim();

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Scroll Snap Align - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Scroll Snap Align utility in Tailwind CSS. Examples and usage details for Scroll Snap Align." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              スクロールスナップコンテナ内の要素が、コンテナのスナップポートに対してどのように位置揃えされるかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>scroll-snap-align</code> プロパティを制御します。
            </p>
            <p>
              このユーティリティは、親のスクロールコンテナに <code>snap-x</code>,{' '}
              <code>snap-y</code>, または <code>snap-both</code> と、<code>snap-mandatory</code>{' '}
              または <code>snap-proximity</code> が設定されている場合に効果を発揮します。
            </p>
          </div>
        </section>
        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            基本的な使い方とパラメータ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>スナップコンテナ内の子要素に以下のクラスを適用します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>snap-start</code>
                </strong>
                : 要素の先頭 (左端または上端) をコンテナのスナップポートの先頭に揃えます (
                <code>scroll-snap-align: start;</code>)。
              </li>
              <li>
                <strong>
                  <code>snap-center</code>
                </strong>
                : 要素の中央をコンテナのスナップポートの中央に揃えます (
                <code>scroll-snap-align: center;</code>)。
              </li>
              <li>
                <strong>
                  <code>snap-end</code>
                </strong>
                : 要素の末尾 (右端または下端) をコンテナのスナップポートの末尾に揃えます (
                <code>scroll-snap-align: end;</code>)。
              </li>
              <li>
                <strong>
                  <code>snap-align-none</code>
                </strong>{' '}
                (または{' '}
                <strong>
                  <code>snap-none</code>
                </strong>
                ): 要素がスナップしないようにします (<code>scroll-snap-align: none;</code>)。
              </li>
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なるスナップ位置揃えの適用例。水平方向にスクロールして動作を確認してください。コンテナには{' '}
            <code>snap-x snap-mandatory</code> が適用されています。
          </p>
          <div className="space-y-6">
            {/* Scroll Snap Align Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                スナップ位置揃え
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{scrollSnapAlignHtml}</code>
              </pre>
              <ScrollSnapAlignExample />
            </div>
          </div>
        </section>
        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            特定のブレークポイントでのみスナップ位置揃えを変更するには、クラス名の前にブレークポイントプレフィックスを追加します
            (例: <code>md:snap-center</code>)。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常は先頭揃えでスナップし、中程度の画面サイズ以上で中央揃えにする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="snap-start md:snap-center ...">
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
                <code>scroll-snap-type-*</code>: 親コンテナでスナップ動作を有効にします。
              </li>
              <li>
                <code>scroll-snap-stop-*</code>: スナップを強制するかどうかを制御します。
              </li>
              <li>
                <code>scroll-padding-*</code>: スナップポートのパディングを設定します。
              </li>
              <li>
                <code>scroll-margin-*</code>: スナップする要素のマージンを設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default ScrollSnapAlignPage;

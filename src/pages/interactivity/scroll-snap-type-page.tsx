import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const ScrollSnapTypeExample: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Snap None (Default) */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
          snap-none (デフォルト)
        </h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-none bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-center flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">
            Item 1
          </div>
          <div className="snap-center flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">
            Item 2
          </div>
          <div className="snap-center flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">
            Item 3
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">スクロールはスナップしません。</p>
      </div>

      {/* Snap X */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-x</h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-mandatory scroll-pl-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">
            Item 1
          </div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">
            Item 2
          </div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">
            Item 3
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">水平方向 (X軸) にスナップします。</p>
      </div>

      {/* Snap Y */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-y</h3>
        <div className="w-full h-48 overflow-y-auto flex flex-col space-y-4 snap-y snap-mandatory scroll-pt-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-start flex-shrink-0 w-full h-32 bg-yellow-200 dark:bg-yellow-800 rounded flex items-center justify-center">
            Item 1
          </div>
          <div className="snap-start flex-shrink-0 w-full h-32 bg-yellow-200 dark:bg-yellow-800 rounded flex items-center justify-center">
            Item 2
          </div>
          <div className="snap-start flex-shrink-0 w-full h-32 bg-yellow-200 dark:bg-yellow-800 rounded flex items-center justify-center">
            Item 3
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">垂直方向 (Y軸) にスナップします。</p>
      </div>

      {/* Snap Both */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-both</h3>
        <p className="text-xs text-gray-500 mb-1">
          水平・垂直両方向にスナップします (この例では水平方向のみ表示)。
        </p>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-both snap-mandatory scroll-pl-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center">
            Item 1
          </div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center">
            Item 2
          </div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center">
            Item 3
          </div>
        </div>
      </div>

      {/* Snap Mandatory */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
          snap-mandatory (snap-x と併用)
        </h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-mandatory scroll-pl-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-red-200 dark:bg-red-800 rounded flex items-center justify-center">
            Mandatory 1
          </div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-red-200 dark:bg-red-800 rounded flex items-center justify-center">
            Mandatory 2
          </div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-red-200 dark:bg-red-800 rounded flex items-center justify-center">
            Mandatory 3
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          スクロール後、最も近いスナップポイントに強制的に移動します。
        </p>
      </div>

      {/* Snap Proximity */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
          snap-proximity (snap-x と併用)
        </h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-proximity scroll-pl-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-orange-200 dark:bg-orange-800 rounded flex items-center justify-center">
            Proximity 1
          </div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-orange-200 dark:bg-orange-800 rounded flex items-center justify-center">
            Proximity 2
          </div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-orange-200 dark:bg-orange-800 rounded flex items-center justify-center">
            Proximity 3
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          スクロール後、スナップポイントが十分に近い場合にのみ移動します。
        </p>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const ScrollSnapTypePage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Interactivity: Scroll Snap Type (スクロールスナップタイプ)';
  const links = [
    {
      title: 'Tailwind CSS: Scroll Snap Type',
      url: 'https://tailwindcss.com/docs/scroll-snap-type',
    },
    {
      title: 'MDN: scroll-snap-type',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type',
    },
  ];

  // コードスニペットを定義
  const scrollSnapTypeHtml = `
{/* No snapping */}
<div class="snap-none ...">...</div>

{/* Snap on the X axis */}
<div class="snap-x ...">...</div>

{/* Snap on the Y axis */}
<div class="snap-y ...">...</div>

{/* Snap on both axes */}
<div class="snap-both ...">...</div>

{/* Strictness: Mandatory */}
<div class="snap-x snap-mandatory ...">...</div>

{/* Strictness: Proximity */}
<div class="snap-x snap-proximity ...">...</div>
  `.trim();

  return (
    <ArticleLayout title={title} links={links}>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              スクロールコンテナでスクロールスナップをどのように適用するかを制御するためのユーティリティクラスです。どの軸でスナップするか、またスナップの厳密さを設定します。
            </p>
            <p>
              CSS の <code>scroll-snap-type</code> プロパティを制御します。
            </p>
          </div>
        </section>
        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            基本的な使い方とパラメータ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>スクロール可能なコンテナ要素に以下のクラスを適用します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>snap-none</code>
                </strong>
                : スクロールスナップを無効にします (<code>scroll-snap-type: none;</code>
                )。これがデフォルトです。
              </li>
              <li>
                <strong>
                  <code>snap-x</code>
                </strong>
                : 水平軸 (X軸) でのみスナップします (
                <code>scroll-snap-type: x var(--tw-scroll-snap-strictness);</code>)。
              </li>
              <li>
                <strong>
                  <code>snap-y</code>
                </strong>
                : 垂直軸 (Y軸) でのみスナップします (
                <code>scroll-snap-type: y var(--tw-scroll-snap-strictness);</code>)。
              </li>
              <li>
                <strong>
                  <code>snap-both</code>
                </strong>
                : 水平・垂直両方の軸でスナップします (
                <code>scroll-snap-type: both var(--tw-scroll-snap-strictness);</code>)。
              </li>
            </ul>
            <p className="mt-4">
              厳密さ (Strictness) を制御するクラス (上記クラスと組み合わせて使用):
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>snap-mandatory</code>
                </strong>
                : スクロール操作後、ブラウザは最も近いスナップポイントに自動的にスナップします (
                <code>--tw-scroll-snap-strictness: mandatory;</code>)。
              </li>
              <li>
                <strong>
                  <code>snap-proximity</code>
                </strong>
                : スクロール操作後、スナップポイントが十分に近い場合にのみブラウザはスナップします (
                <code>--tw-scroll-snap-strictness: proximity;</code>
                )。これがデフォルトの厳密さです。
              </li>
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なるスクロールスナップタイプと厳密さの適用例。コンテナをスクロールして動作を確認してください。
          </p>
          <div className="space-y-6">
            {/* Scroll Snap Type Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                スナップタイプと厳密さ
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{scrollSnapTypeHtml}</code>
              </pre>
              <ScrollSnapTypeExample />
            </div>
          </div>
        </section>
        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            特定のブレークポイントでのみスナップタイプを変更するには、クラス名の前にブレークポイントプレフィックスを追加します
            (例: <code>md:snap-y</code>, <code>lg:snap-mandatory</code>)。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常はスナップせず、中程度の画面サイズ以上で Y軸方向に強制スナップする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="snap-none md:snap-y md:snap-mandatory ...">
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
                <code>scroll-snap-align-*</code>:
                スナップコンテナ内の要素がどのようにスナップするかを指定します。
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

export default ScrollSnapTypePage;

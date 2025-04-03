import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const TouchActionExample: React.FC = () => {
  // スクロール可能なコンテナを作成して効果を示す
  return (
    <div className="space-y-6">
      {/* Touch Auto (Default) */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
          touch-auto (デフォルト)
        </h3>
        <div className="touch-auto w-full h-32 overflow-scroll border border-gray-300 rounded p-2 bg-white dark:bg-gray-700">
          <div className="h-48 w-48 bg-blue-200 dark:bg-blue-800">
            Try scrolling and panning here. Default browser behavior.
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          ブラウザのデフォルトのタッチ操作 (パン、ズーム) が可能です。
        </p>
      </div>

      {/* Touch None */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">touch-none</h3>
        <div className="touch-none w-full h-32 overflow-scroll border border-gray-300 rounded p-2 bg-white dark:bg-gray-700">
          <div className="h-48 w-48 bg-green-200 dark:bg-green-800">
            Try scrolling and panning here. Touch actions are disabled.
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          タッチ操作によるスクロールやパンが無効になります。
        </p>
      </div>

      {/* Touch Pan X */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">touch-pan-x</h3>
        <div className="touch-pan-x w-full h-32 overflow-scroll border border-gray-300 rounded p-2 bg-white dark:bg-gray-700">
          <div className="h-48 w-48 bg-yellow-200 dark:bg-yellow-800">
            Try scrolling and panning here. Only horizontal panning allowed.
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">水平方向のパンのみが許可されます。</p>
      </div>

      {/* Touch Pan Y */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">touch-pan-y</h3>
        <div className="touch-pan-y w-full h-32 overflow-scroll border border-gray-300 rounded p-2 bg-white dark:bg-gray-700">
          <div className="h-48 w-48 bg-purple-200 dark:bg-purple-800">
            Try scrolling and panning here. Only vertical panning allowed.
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">垂直方向のパンのみが許可されます。</p>
      </div>

      {/* Touch Pinch Zoom */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">touch-pinch-zoom</h3>
        <p className="text-xs text-gray-500 mb-1">
          パンは無効ですが、ピンチによるズームは可能です (ブラウザ/デバイス依存)。
        </p>
        <div className="touch-pinch-zoom w-full h-32 overflow-scroll border border-gray-300 rounded p-2 bg-white dark:bg-gray-700">
          <div className="h-48 w-48 bg-red-200 dark:bg-red-800">
            Try pinching to zoom here. Panning is disabled.
          </div>
        </div>
      </div>

      {/* Touch Manipulation */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
          touch-manipulation
        </h3>
        <p className="text-xs text-gray-500 mb-1">
          パンとピンチズームが許可されます (<code>touch-pan-x touch-pan-y touch-pinch-zoom</code>{' '}
          と同等)。
        </p>
        <div className="touch-manipulation w-full h-32 overflow-scroll border border-gray-300 rounded p-2 bg-white dark:bg-gray-700">
          <div className="h-48 w-48 bg-orange-200 dark:bg-orange-800">
            Try panning and zooming here.
          </div>
        </div>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const TouchActionPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Interactivity: Touch Action (タッチ操作)';
  const links = [
    {
      title: 'Tailwind CSS: Touch Action',
      url: 'https://tailwindcss.com/docs/touch-action',
    },
    {
      title: 'MDN: touch-action',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action',
    },
  ];

  // コードスニペットを定義
  const touchActionHtml = `
{/* Default browser behavior */}
<div class="touch-auto ...">...</div>

{/* Disable all touch interactions */}
<div class="touch-none ...">...</div>

{/* Allow horizontal panning */}
<div class="touch-pan-x ...">...</div>

{/* Allow vertical panning */}
<div class="touch-pan-y ...">...</div>

{/* Allow pinch zooming */}
<div class="touch-pinch-zoom ...">...</div>

{/* Allow panning and pinch zooming */}
<div class="touch-manipulation ...">...</div>
  `.trim();

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Touch Action - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Touch Action utility in Tailwind CSS. Examples and usage details for Touch Action." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              タッチスクリーンデバイスで、ユーザーが要素に対してどのようなタッチ操作
              (パン、ズームなど) を行えるかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>touch-action</code> プロパティを制御します。
            </p>
          </div>
        </section>
        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            基本的な使い方とパラメータ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>要素に以下の形式でクラスを適用します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>touch-auto</code>
                </strong>
                : ブラウザのデフォルトのタッチ操作を許可します (<code>touch-action: auto;</code>
                )。これがデフォルトです。
              </li>
              <li>
                <strong>
                  <code>touch-none</code>
                </strong>
                : すべてのタッチ操作 (パン、ズーム) を無効にします (<code>touch-action: none;</code>
                )。
              </li>
              <li>
                <strong>
                  <code>touch-pan-x</code>
                </strong>
                : 水平方向のパンのみを許可します (<code>touch-action: pan-x;</code>)。
              </li>
              <li>
                <strong>
                  <code>touch-pan-y</code>
                </strong>
                : 垂直方向のパンのみを許可します (<code>touch-action: pan-y;</code>)。
              </li>
              <li>
                <strong>
                  <code>touch-pan-left</code>
                </strong>
                ,{' '}
                <strong>
                  <code>touch-pan-right</code>
                </strong>
                : 特定の水平方向のパンのみを許可します。
              </li>
              <li>
                <strong>
                  <code>touch-pan-up</code>
                </strong>
                ,{' '}
                <strong>
                  <code>touch-pan-down</code>
                </strong>
                : 特定の垂直方向のパンのみを許可します。
              </li>
              <li>
                <strong>
                  <code>touch-pinch-zoom</code>
                </strong>
                : ピンチによるズーム操作のみを許可します (<code>touch-action: pinch-zoom;</code>
                )。パンは無効になります。
              </li>
              <li>
                <strong>
                  <code>touch-manipulation</code>
                </strong>
                : パンとピンチズームの両方を許可します (<code>touch-action: manipulation;</code>
                )。ダブルタップによるズームなど、追加の非標準ジェスチャーは無効になります。
              </li>
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なるタッチアクション設定の適用例。タッチデバイスで各ボックス内を操作して動作を確認してください。
          </p>
          <div className="space-y-6">
            {/* Touch Action Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                タッチアクションの制御
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{touchActionHtml}</code>
              </pre>
              <TouchActionExample />
            </div>
          </div>
        </section>
        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            特定のブレークポイントでのみタッチアクションを変更するには、クラス名の前にブレークポイントプレフィックスを追加します
            (例: <code>md:touch-none</code>)。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常はパンを許可し、中程度の画面サイズ以上でタッチ操作を無効にする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="touch-pan-y md:touch-none ...">
  {/* ... */}
</div>
              `.trim()}
              </code>
            </pre>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default TouchActionPage;

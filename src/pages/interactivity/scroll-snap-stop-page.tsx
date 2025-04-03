import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const ScrollSnapStopExample: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Snap Stop Normal (Default) */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
          snap-normal (デフォルト)
        </h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-mandatory scroll-pl-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-start snap-normal flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">
            Normal 1
          </div>
          <div className="snap-start snap-normal flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">
            Normal 2
          </div>
          <div className="snap-start snap-normal flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">
            Normal 3
          </div>
          <div className="snap-start snap-normal flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">
            Normal 4
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          速くスクロールすると、中間のスナップポイントを通過することがあります。
        </p>
      </div>

      {/* Snap Stop Always */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-always</h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-mandatory scroll-pl-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-start snap-always flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">
            Always 1
          </div>
          <div className="snap-start snap-always flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">
            Always 2
          </div>
          <div className="snap-start snap-always flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">
            Always 3
          </div>
          <div className="snap-start snap-always flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">
            Always 4
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          速くスクロールしても、各スナップポイントで必ず停止します。
        </p>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const ScrollSnapStopPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Interactivity: Scroll Snap Stop (スクロールスナップ停止)';
  const links = [
    {
      title: 'Tailwind CSS: Scroll Snap Stop',
      url: 'https://tailwindcss.com/docs/scroll-snap-stop',
    },
    {
      title: 'MDN: scroll-snap-stop',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop',
    },
  ];

  // コードスニペットを定義
  const scrollSnapStopHtml = `
{/* Default behavior: may skip snap points on fast scroll */}
<div class="snap-x snap-mandatory ...">
  <div class="snap-start snap-normal ...">...</div>
  {/* ... */}
</div>

{/* Always stop at each snap point */}
<div class="snap-x snap-mandatory ...">
  <div class="snap-start snap-always ...">...</div>
  {/* ... */}
</div>
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
              ユーザーが速くスクロールした場合に、ブラウザがスナップポイントを通過することを許可するかどうかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>scroll-snap-stop</code> プロパティを制御します。
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
                  <code>snap-normal</code>
                </strong>
                :
                ブラウザが現在のスクロール位置と次のスナップポイントの間のスナップポイントを通過することを許可します
                (<code>scroll-snap-stop: normal;</code>)。これがデフォルトの挙動です。
              </li>
              <li>
                <strong>
                  <code>snap-always</code>
                </strong>
                : ブラウザが必ず最初の到達可能なスナップポイントで停止するように強制します (
                <code>scroll-snap-stop: always;</code>)。
              </li>
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            <code>snap-normal</code> と <code>snap-always</code>{' '}
            の比較。コンテナを速くスクロールして動作の違いを確認してください。
          </p>
          <div className="space-y-6">
            {/* Scroll Snap Stop Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                スクロールスナップ停止の制御
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{scrollSnapStopHtml}</code>
              </pre>
              <ScrollSnapStopExample />
            </div>
          </div>
        </section>
        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            特定のブレークポイントでのみスナップ停止動作を変更するには、クラス名の前にブレークポイントプレフィックスを追加します
            (例: <code>md:snap-always</code>)。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常は <code>snap-normal</code> を使用し、中程度の画面サイズ以上で{' '}
              <code>snap-always</code> にする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="snap-normal md:snap-always ...">
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
                <code>scroll-snap-align-*</code>:
                スナップコンテナ内の要素がどのようにスナップするかを指定します。
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

export default ScrollSnapStopPage;

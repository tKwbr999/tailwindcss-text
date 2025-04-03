import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const MinH0Example: React.FC = () => {
  return (
    <div className="h-16 bg-gray-100 dark:bg-gray-800 p-2 rounded flex items-center">
      {' '}
      {/* 親要素に高さを設定 */}
      <div className="min-h-0 bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200 text-xs">
        min-h-0: 高さはコンテンツに依存しますが、0以下にはなりません。
      </div>
    </div>
  );
};

const MinHFullExample: React.FC = () => {
  return (
    <div className="h-32 bg-gray-100 dark:bg-gray-800 p-2 rounded">
      {' '}
      {/* 親要素に高さが必要 */}
      <div className="min-h-full bg-green-200 dark:bg-green-900 p-2 rounded text-green-800 dark:text-green-200">
        min-h-full: この要素は少なくとも親要素の全高 (100%) を持ちます。
      </div>
    </div>
  );
};

const MinHScreenExample: React.FC = () => {
  // 注意: min-h-screen はビューポート全体の高さになるため、親要素の高さを超える可能性があります。
  return (
    <div className="h-48 overflow-y-auto border border-gray-300 rounded">
      {' '}
      {/* 親の高さを制限し、スクロールで確認 */}
      <div className="min-h-screen bg-yellow-200 dark:bg-yellow-900 p-2 rounded text-yellow-800 dark:text-yellow-200">
        min-h-screen (ビューポートの高さ 100vh) -
        この要素は少なくともビューポートの高さになります。下にスクロールできます。
      </div>
    </div>
  );
};

const MinHMinMaxFitExample: React.FC = () => {
  return (
    <div className="flex items-start space-x-4">
      <div className="min-h-min w-24 bg-red-200 dark:bg-red-900 p-2 rounded text-red-800 dark:text-red-200 text-xs">
        min-h-min
        <br />
        最小
        <br />
        高さ
      </div>
      <div className="min-h-max w-24 bg-red-200 dark:bg-red-900 p-2 rounded text-red-800 dark:text-red-200 text-xs">
        min-h-max
        <br />
        最大
        <br />
        コンテンツ
        <br />
        高さ
      </div>
      <div className="min-h-fit w-24 bg-purple-200 dark:bg-purple-900 p-2 rounded text-purple-800 dark:text-purple-200 text-xs">
        min-h-fit
        <br />
        (v3.3+)
      </div>
    </div>
  );
};

// ページコンポーネント本体
const MinHeightPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Sizing: Min-Height (最小高さ)';
  const links = [
    {
      title: 'Tailwind CSS: Min-Height',
      url: 'https://tailwindcss.com/docs/min-height',
    },
    {
      title: 'MDN: min-height',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/min-height',
    },
  ];

  // コードスニペットを定義
  const minH0Html = `<div class="min-h-0 ...">...</div>`;
  const minHFullHtml = `<div class="min-h-full ...">...</div>`; // Requires parent height
  const minHScreenHtml = `<div class="min-h-screen ...">...</div>`;
  const minHMinMaxFitHtml = `
<div class="min-h-min ...">Min</div>
<div class="min-h-max ...">Max</div>
<div class="min-h-fit ...">Fit</div>
  `.trim();

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Min Height - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Min Height utility in Tailwind CSS. Examples and usage details for Min Height." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の最小高さを設定するためのユーティリティクラスです。要素が自身のコンテンツや親要素の制約によって特定の高さより小さくなることを防ぎます。
            </p>
            <p>
              CSS の <code>min-height</code> プロパティを制御します。
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
              <code>min-h-{'{size}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>
              <code>{'{size}'}</code> には以下の値を指定できます:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>0</code>
                </strong>{' '}
                (<code>min-height: 0px;</code>): 最小高さを 0 に設定します。
              </li>
              <li>
                <strong>
                  <code>full</code>
                </strong>{' '}
                (<code>min-height: 100%;</code>): 最小高さを親要素の全高に設定します。
                <strong>注意:</strong>{' '}
                親要素に明示的な高さが設定されていないと効果がない場合があります。
              </li>
              <li>
                <strong>
                  <code>screen</code>
                </strong>{' '}
                (<code>min-height: 100vh;</code>): 最小高さをビューポートの高さに設定します。
              </li>
              <li>
                <strong>
                  <code>min</code>
                </strong>{' '}
                (<code>min-height: min-content;</code>):
                最小高さをコンテンツがオーバーフローしない最小の高さに設定します。
              </li>
              <li>
                <strong>
                  <code>max</code>
                </strong>{' '}
                (<code>min-height: max-content;</code>):
                最小高さをコンテンツをすべて表示するために必要な固有の高さに設定します。
              </li>
              <li>
                <strong>
                  <code>fit</code>
                </strong>{' '}
                (<code>min-height: fit-content;</code>):
                最小高さをコンテンツに合わせてフィットさせますが、利用可能な高さを超えることはありません
                (比較的新しい値)。 (v3.3+)
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>min-h-[32rem]</code>) も使用可能です (Tailwind JIT
              モード)。Tailwind のデフォルト設定では、固定長の <code>min-h-*</code>{' '}
              ユーティリティは提供されていません (必要であれば設定で追加可能)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる min-height ユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* Min H 0 */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">min-h-0</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{minH0Html}</code>
              </pre>
              <MinH0Example />
            </div>
            {/* Min H Full */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">min-h-full</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{minHFullHtml}</code>
              </pre>
              <MinHFullExample />
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                (親要素に高さ <code>h-32</code> が設定されています)
              </p>
            </div>
            {/* Min H Screen */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                min-h-screen
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{minHScreenHtml}</code>
              </pre>
              <MinHScreenExample />
            </div>
            {/* Min/Max/Fit Height */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                コンテンツベース (min/max/fit)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{minHMinMaxFitHtml}</code>
              </pre>
              <MinHMinMaxFitExample />
            </div>
          </div>
        </section>
        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など)
            を使って、画面サイズに応じて最小高さを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>min-h-0 md:min-h-screen</code> は、小さい画面では最小高さ
              0、中程度の画面サイズ以上ではビューポートの高さを最小高さとします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="min-h-0 md:min-h-screen ...">
  Responsive Min-Height
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
                <code>min-height</code> は要素がそれより小さくなることを防ぎますが、
                <code>height</code> や <code>max-height</code>{' '}
                によってそれより大きくなることは妨げません。
              </li>
              <li>
                <code>min-h-full</code>{' '}
                を使用する場合、親要素に明示的な高さが設定されている必要があります。
              </li>
              <li>
                <code>min-h-min</code>, <code>min-h-max</code>, <code>min-h-fit</code>{' '}
                はコンテンツのサイズに依存します。
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
                <code>height</code> (<code>h-*</code>): 要素の高さを設定します。
              </li>
              <li>
                <code>max-height</code> (<code>max-h-*</code>): 要素の最大高さを設定します。
              </li>
              <li>
                <code>width</code> (<code>w-*</code>): 要素の幅を設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default MinHeightPage;

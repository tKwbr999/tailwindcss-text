import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const MinW0Example: React.FC = () => {
  return (
    <div className="w-1/2 bg-gray-100 dark:bg-gray-800 p-2 rounded">
      {' '}
      {/* 親要素で幅を制限 */}
      <div className="min-w-0 bg-blue-200 dark:bg-blue-900 p-2 rounded truncate">
        min-w-0:
        この非常に長いテキストは親要素の幅を超えても縮小され、truncateによって切り詰められます...
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
  );
};

const MinWFullExample: React.FC = () => {
  return (
    <div className="w-1/2 bg-gray-100 dark:bg-gray-800 p-2 rounded">
      <div className="min-w-full bg-green-200 dark:bg-green-900 p-2 rounded">
        min-w-full: この要素は少なくとも親要素の全幅 (100%) を持ちます。
      </div>
    </div>
  );
};

const MinWMinExample: React.FC = () => {
  return (
    <div className="w-1/2 bg-gray-100 dark:bg-gray-800 p-2 rounded inline-block">
      {' '}
      {/* inline-block で自身の幅に */}
      <div className="min-w-min bg-yellow-200 dark:bg-yellow-900 p-2 rounded">
        min-w-min: 最小コンテンツ幅。
      </div>
    </div>
  );
};

const MinWMaxExample: React.FC = () => {
  return (
    <div className="w-1/2 bg-gray-100 dark:bg-gray-800 p-2 rounded inline-block">
      <div className="min-w-max bg-red-200 dark:bg-red-900 p-2 rounded whitespace-nowrap">
        min-w-max: 最大コンテンツ幅 (折り返さない)。
      </div>
    </div>
  );
};

const MinWFitExample: React.FC = () => {
  // 注意: min-w-fit は v3.3+
  return (
    <div className="w-1/2 bg-gray-100 dark:bg-gray-800 p-2 rounded inline-block">
      <div className="min-w-fit bg-purple-200 dark:bg-purple-900 p-2 rounded">
        min-w-fit: コンテンツにフィットする最小幅 (v3.3+)。
      </div>
    </div>
  );
};

// ページコンポーネント本体
const MinWidthPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Sizing: Min-Width (最小幅)';
  const links = [
    {
      title: 'Tailwind CSS: Min-Width',
      url: 'https://tailwindcss.com/docs/min-width',
    },
    {
      title: 'MDN: min-width',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/min-width',
    },
  ];

  // コードスニペットを定義
  const minW0Html = `<div class="min-w-0 ...">...</div>`;
  const minWFullHtml = `<div class="min-w-full ...">...</div>`;
  const minWMinHtml = `<div class="min-w-min ...">...</div>`;
  const minWMaxHtml = `<div class="min-w-max ...">...</div>`;
  const minWFitHtml = `<div class="min-w-fit ...">...</div>`; // v3.3+

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Min Width - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Min Width utility in Tailwind CSS. Examples and usage details for Min Width." />
        {/* OGP タグ */}
        <meta property="og:title" content="Min Width - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Min Width utility in Tailwind CSS. Examples and usage details for Min Width." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/sizing/min-width" />
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
              要素の最小幅を設定するためのユーティリティクラスです。要素が自身のコンテンツや親要素の制約によって特定の幅より小さくなることを防ぎます。
            </p>
            <p>
              CSS の <code>min-width</code> プロパティを制御します。
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
              <code>min-w-{'{size}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>
              <code>{'{size}'}</code> には以下の値を指定できます:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>0</code>
                </strong>{' '}
                (<code>min-width: 0px;</code>): 最小幅を 0 に設定します。これにより、Flexbox
                アイテムなどが自身の固有サイズ以下に縮小できるようになります。
              </li>
              <li>
                <strong>
                  <code>full</code>
                </strong>{' '}
                (<code>min-width: 100%;</code>): 最小幅を親要素の全幅に設定します。
              </li>
              <li>
                <strong>
                  <code>min</code>
                </strong>{' '}
                (<code>min-width: min-content;</code>):
                最小幅をコンテンツがオーバーフローしない最小の幅に設定します。
              </li>
              <li>
                <strong>
                  <code>max</code>
                </strong>{' '}
                (<code>min-width: max-content;</code>):
                最小幅をコンテンツをすべて表示するために必要な固有の幅 (テキストは折り返さない)
                に設定します。
              </li>
              <li>
                <strong>
                  <code>fit</code>
                </strong>{' '}
                (<code>min-width: fit-content;</code>):
                最小幅をコンテンツに合わせてフィットさせますが、利用可能な幅を超えることはありません
                (比較的新しい値)。 (v3.3+)
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>min-w-[32rem]</code>) も使用可能です (Tailwind JIT
              モード)。Tailwind のデフォルト設定では、固定長の <code>min-w-*</code>{' '}
              ユーティリティは提供されていません (必要であれば設定で追加可能)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる min-width ユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* Min W 0 */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">min-w-0</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{minW0Html}</code>
              </pre>
              <MinW0Example />
            </div>
            {/* Min W Full */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">min-w-full</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{minWFullHtml}</code>
              </pre>
              <MinWFullExample />
            </div>
            {/* Min W Min */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">min-w-min</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{minWMinHtml}</code>
              </pre>
              <MinWMinExample />
            </div>
            {/* Min W Max */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">min-w-max</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{minWMaxHtml}</code>
              </pre>
              <MinWMaxExample />
            </div>
            {/* Min W Fit */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                min-w-fit (v3.3+)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{minWFitHtml}</code>
              </pre>
              <MinWFitExample />
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
            を使って、画面サイズに応じて最小幅を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>min-w-0 md:min-w-full</code>{' '}
              は、小さい画面では縮小可能にし、中程度の画面サイズ以上では親の全幅を最小幅とします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="min-w-0 md:min-w-full ...">
  Responsive Min-Width
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
                <code>min-width</code> は要素がそれより小さくなることを防ぎますが、
                <code>width</code> や <code>max-width</code>{' '}
                によってそれより大きくなることは妨げません。
              </li>
              <li>
                <code>min-w-0</code> は、Flexbox
                アイテムがコンテナサイズに合わせて自身の固有サイズ以下に縮小できるようにするためによく使用されます
                (デフォルトでは Flex アイテムはコンテンツサイズ以下には縮小しません)。
              </li>
              <li>
                <code>min-w-min</code>, <code>min-w-max</code>, <code>min-w-fit</code>{' '}
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
                <code>width</code> (<code>w-*</code>): 要素の幅を設定します。
              </li>
              <li>
                <code>max-width</code> (<code>max-w-*</code>): 要素の最大幅を設定します。
              </li>
              <li>
                <code>flex-shrink</code> (<code>shrink</code>, <code>shrink-0</code>): Flexbox
                アイテムの縮小係数を設定します。<code>min-w-0</code> と関連があります。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default MinWidthPage;

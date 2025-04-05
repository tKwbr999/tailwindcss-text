import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const MaxWFixedExample: React.FC = () => {
  return (
    <div className="space-y-2">
      <div className="max-w-lg bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200">
        max-w-lg (32rem / 512px): このテキストは最大幅を超えると折り返します。Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </div>
      <div className="max-w-xs bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200">
        max-w-xs (20rem / 320px): より狭い最大幅。
      </div>
      <div className="max-w-none bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200 whitespace-nowrap overflow-x-auto">
        max-w-none:
        最大幅の制限なし。この非常に長いテキストは親要素からはみ出す可能性があります。Lorem ipsum
        dolor sit amet consectetur adipisicing elit...
      </div>
    </div>
  );
};

const MaxWScreenExample: React.FC = () => {
  return (
    <div className="space-y-2">
      <div className="max-w-screen-md bg-green-200 dark:bg-green-900 p-2 rounded text-green-800 dark:text-green-200 mx-auto">
        max-w-screen-md (中画面のビューポート幅、通常 768px)
      </div>
      <div className="max-w-screen-lg bg-green-200 dark:bg-green-900 p-2 rounded text-green-800 dark:text-green-200 mx-auto">
        max-w-screen-lg (大画面のビューポート幅、通常 1024px)
      </div>
    </div>
  );
};

const MaxWMinMaxFitExample: React.FC = () => {
  return (
    <div className="space-y-2">
      <div className="max-w-min bg-yellow-200 dark:bg-yellow-900 p-2 rounded text-yellow-800 dark:text-yellow-200 inline-block">
        max-w-min
      </div>{' '}
      <br />
      <div className="max-w-max bg-red-200 dark:bg-red-900 p-2 rounded text-red-800 dark:text-red-200 inline-block">
        max-w-max (長いコンテンツでも幅は広がる)
      </div>{' '}
      <br />
      <div className="max-w-fit bg-purple-200 dark:bg-purple-900 p-2 rounded text-purple-800 dark:text-purple-200 inline-block">
        max-w-fit (v3.0+)
      </div>
    </div>
  );
};

const MaxWProseExample: React.FC = () => {
  return (
    <div className="max-w-prose bg-pink-200 dark:bg-pink-900 p-4 rounded text-pink-800 dark:text-pink-200 mx-auto">
      max-w-prose (65ch): このクラスは、テキストコンテンツの読みやすさを考慮した最適な行長
      (約65文字) に最大幅を設定します。長い文章を含むコンテナに適しています。Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
    </div>
  );
};

// ページコンポーネント本体
const MaxWidthPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Sizing: Max-Width ';
const jaTitle = '最大幅';
  const links = [
    {
      title: 'Tailwind CSS: Max-Width',
      url: 'https://tailwindcss.com/docs/max-width',
    },
    {
      title: 'MDN: max-width',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/max-width',
    },
  ];

  // コードスニペットを定義
  const maxWFixedHtml = `<div class="max-w-lg ...">...</div>`;
  const maxWNoneHtml = `<div class="max-w-none ...">...</div>`;
  const maxWScreenHtml = `<div class="max-w-screen-md ...">...</div>`;
  const maxWMinMaxFitHtml = `
<div class="max-w-min ...">Min</div>
<div class="max-w-max ...">Max</div>
<div class="max-w-fit ...">Fit</div>
  `.trim();
  const maxWProseHtml = `<div class="max-w-prose ...">...</div>`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Max Width - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Max Width utility in Tailwind CSS. Examples and usage details for Max Width." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の最大幅を設定するためのユーティリティクラスです。要素が特定の幅よりも大きくなることを防ぎます。レスポンシブデザインでコンテナの幅を制限するためによく使用されます。
            </p>
            <p>
              CSS の <code>max-width</code> プロパティを制御します。
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
              <code>max-w-{'{size}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>
              <code>{'{size}'}</code> には様々な値を指定できます:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>固定幅 (数値/スケール)</strong>: <code>max-w-0</code>, <code>max-w-xs</code>
                , <code>max-w-sm</code>, ..., <code>max-w-7xl</code> など、Tailwind
                のデフォルトブレークポイントやサイズスケールに基づいた固定の最大幅 (rem)。
              </li>
              <li>
                <strong>
                  <code>none</code>
                </strong>{' '}
                (<code>max-width: none;</code>): 最大幅の制限を解除します。
              </li>
              <li>
                <strong>割合 (分数/full)</strong>: <code>max-w-full</code> (100%),{' '}
                <code>max-w-1/2</code> (50% - カスタム設定が必要な場合あり)
                など、親要素の幅に対する割合。
              </li>
              <li>
                <strong>ビューポート幅</strong>: <code>max-w-screen-sm</code>,{' '}
                <code>max-w-screen-md</code>, ..., <code>max-w-screen-2xl</code>{' '}
                など、特定のビューポート幅を最大幅として設定します。
              </li>
              <li>
                <strong>コンテンツベース</strong>:
                <ul>
                  <li>
                    <code>max-w-min</code> (<code>max-width: min-content;</code>):
                    コンテンツがオーバーフローしない最小の幅を最大幅とします。
                  </li>
                  <li>
                    <code>max-w-max</code> (<code>max-width: max-content;</code>):
                    コンテンツをすべて表示するために必要な固有の幅を最大幅とします。
                  </li>
                  <li>
                    <code>max-w-fit</code> (<code>max-width: fit-content;</code>):
                    コンテンツに合わせてフィットする幅を最大幅とします (比較的新しい値)。 (v3.0+)
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  <code>prose</code>
                </strong>{' '}
                (<code>max-width: 65ch;</code>): テキストコンテンツの読みやすさに最適化された最大幅
                (約65文字) を設定します。
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>max-w-[600px]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる max-width ユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* Fixed Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                固定幅 (スケール) / None
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{maxWFixedHtml}</code> /{' '}
                <code className="language-html">{maxWNoneHtml}</code>
              </pre>
              <MaxWFixedExample />
            </div>
            {/* Screen Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                スクリーン幅
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{maxWScreenHtml}</code>
              </pre>
              <MaxWScreenExample />
            </div>
            {/* Min/Max/Fit Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                コンテンツベース (min/max/fit)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{maxWMinMaxFitHtml}</code>
              </pre>
              <MaxWMinMaxFitExample />
            </div>
            {/* Prose Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                Prose (読みやすさ)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{maxWProseHtml}</code>
              </pre>
              <MaxWProseExample />
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
            を使って、画面サイズに応じて最大幅を変更できます。コンテナ要素で非常によく使われます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>max-w-full md:max-w-screen-lg</code>{' '}
              は、小さい画面では親要素の全幅を最大とし、中程度の画面サイズ以上では最大幅を{' '}
              <code>lg</code> スクリーンサイズ (通常 1024px) に制限します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="max-w-full md:max-w-screen-lg mx-auto ..."> {/* mx-auto で中央揃え */}
  Responsive Max-Width Container
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
                <code>max-width</code> は要素がそれより大きくなることを防ぎますが、
                <code>width</code> や <code>min-width</code>{' '}
                によってそれより小さくなることは妨げません。
              </li>
              <li>
                コンテナ要素を中央揃えにするには、<code>max-w-*</code> と一緒に <code>mx-auto</code>{' '}
                を使用するのが一般的です。
              </li>
              <li>
                <code>max-w-screen-*</code> は、Tailwind の設定 (<code>theme.screens</code>)
                で定義されたブレークポイントの幅を使用します。
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
                <code>min-width</code> (<code>min-w-*</code>): 要素の最小幅を設定します。
              </li>
              <li>
                <code>container</code>: レスポンシブな固定幅コンテナを作成するためのユーティリティ
                (内部で <code>max-width</code> を使用)。
              </li>
              <li>
                <code>margin</code> (<code>mx-auto</code>): 要素を水平方向中央に配置します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default MaxWidthPage;

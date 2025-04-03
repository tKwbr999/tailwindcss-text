import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const MaxHFixedExample: React.FC = () => {
  return (
    <div className="flex items-start space-x-4">
      {' '}
      {/* items-start で高さを比較しやすく */}
      <div className="max-h-32 overflow-y-auto w-24 bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200 text-xs">
        {' '}
        {/* overflow-y-auto */}
        max-h-32 (8rem): このテキストは最大高さを超えるとスクロールします。
        <br />
        Line 2<br />
        Line 3<br />
        Line 4<br />
        Line 5<br />
        Line 6<br />
        Line 7<br />
        Line 8<br />
        Line 9<br />
        Line 10
      </div>
      <div className="max-h-24 overflow-y-auto w-24 bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200 text-xs">
        max-h-24 (6rem): より低い最大高さ。
        <br />
        Line 2<br />
        Line 3<br />
        Line 4<br />
        Line 5<br />
        Line 6
      </div>
      <div className="max-h-px overflow-hidden w-24 bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200 text-xs">
        {' '}
        {/* overflow-hidden */}
        max-h-px (1px): ほとんど見えません。
      </div>
      <div className="max-h-none w-24 bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200 text-xs">
        max-h-none: 最大高さの制限なし。
        <br />
        Line 2<br />
        Line 3
      </div>
    </div>
  );
};

const MaxHFullExample: React.FC = () => {
  return (
    <div className="h-32 bg-gray-100 dark:bg-gray-800 p-2 rounded">
      {' '}
      {/* 親要素に高さが必要 */}
      <div className="max-h-full overflow-y-auto bg-green-200 dark:bg-green-900 p-2 rounded text-green-800 dark:text-green-200 h-48">
        {' '}
        {/* h-48 で親より高く */}
        max-h-full: この要素の高さは最大でも親要素の高さ (100%)
        に制限されます。コンテンツがそれより高くてもスクロールします。
        <br />
        Line 2<br />
        Line 3<br />
        Line 4<br />
        Line 5<br />
        Line 6<br />
        Line 7
      </div>
    </div>
  );
};

const MaxHScreenExample: React.FC = () => {
  // 注意: max-h-screen はビューポート全体の高さになるため、親要素の高さを超える可能性があります。
  return (
    <div className="h-48 overflow-y-auto border border-gray-300 rounded">
      {' '}
      {/* 親の高さを制限 */}
      <div className="max-h-screen bg-yellow-200 dark:bg-yellow-900 p-2 rounded text-yellow-800 dark:text-yellow-200">
        max-h-screen (ビューポートの高さ 100vh) -
        この要素の高さは最大でもビューポートの高さに制限されます。
        <div className="h-[120vh] bg-yellow-300 dark:bg-yellow-800 mt-2">
          {' '}
          {/* 意図的にビューポートより高く */}
          Inner content taller than viewport
        </div>
      </div>
    </div>
  );
};

const MaxHMinMaxFitExample: React.FC = () => {
  return (
    <div className="flex items-start space-x-4">
      <div className="max-h-min w-24 bg-red-200 dark:bg-red-900 p-2 rounded text-red-800 dark:text-red-200 text-xs">
        max-h-min
        <br />
        最小
        <br />
        高さ
      </div>
      <div className="max-h-max w-24 bg-red-200 dark:bg-red-900 p-2 rounded text-red-800 dark:text-red-200 text-xs">
        max-h-max
        <br />
        最大
        <br />
        コンテンツ
        <br />
        高さ
      </div>
      <div className="max-h-fit w-24 bg-purple-200 dark:bg-purple-900 p-2 rounded text-purple-800 dark:text-purple-200 text-xs">
        max-h-fit
        <br />
        (v3.3+)
      </div>
    </div>
  );
};

// ページコンポーネント本体
const MaxHeightPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Sizing: Max-Height (最大高さ)';
  const links = [
    {
      title: 'Tailwind CSS: Max-Height',
      url: 'https://tailwindcss.com/docs/max-height',
    },
    {
      title: 'MDN: max-height',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/max-height',
    },
  ];

  // コードスニペットを定義
  const maxHFixedHtml = `<div class="max-h-32 overflow-y-auto ...">...</div>`;
  const maxHNoneHtml = `<div class="max-h-none ...">...</div>`;
  const maxHFullHtml = `<div class="max-h-full ...">...</div>`; // Requires parent height
  const maxHScreenHtml = `<div class="max-h-screen ...">...</div>`;
  const maxHMinMaxFitHtml = `
<div class="max-h-min ...">Min</div>
<div class="max-h-max ...">Max</div>
<div class="max-h-fit ...">Fit</div>
  `.trim();

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Max Height - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Max Height utility in Tailwind CSS. Examples and usage details for Max Height." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の最大高さを設定するためのユーティリティクラスです。要素が特定の高さよりも大きくなることを防ぎます。コンテンツが可変長の場合に、コンテナの高さに上限を設けたい場合などに使用されます。
            </p>
            <p>
              CSS の <code>max-height</code> プロパティを制御します。
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
              <code>max-h-{'{size}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>
              <code>{'{size}'}</code> には以下の値を指定できます:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>固定高さ (数値/スケール)</strong>: <code>max-h-0</code>,{' '}
                <code>max-h-px</code>, <code>max-h-0.5</code>, <code>max-h-1</code>, ...,{' '}
                <code>max-h-96</code> など、Tailwind
                のデフォルトスペーシングスケールに基づいた固定の最大高さ (rem または px)。
              </li>
              <li>
                <strong>
                  <code>none</code>
                </strong>{' '}
                (<code>max-height: none;</code>): 最大高さの制限を解除します。
              </li>
              <li>
                <strong>割合 (分数/full)</strong>: <code>max-h-full</code> (100%)
                など、親要素の高さに対する割合。<strong>注意:</strong>{' '}
                親要素に明示的な高さが設定されていないと効果がない場合があります。
              </li>
              <li>
                <strong>ビューポート高さ</strong>: <code>max-h-screen</code> (ビューポートの高さ
                100vh)。
              </li>
              <li>
                <strong>コンテンツベース</strong>: (v3.3+)
                <ul>
                  <li>
                    <code>max-h-min</code> (<code>max-height: min-content;</code>)
                  </li>
                  <li>
                    <code>max-h-max</code> (<code>max-height: max-content;</code>)
                  </li>
                  <li>
                    <code>max-h-fit</code> (<code>max-height: fit-content;</code>)
                  </li>
                </ul>
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>max-h-[32rem]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる max-height ユーティリティの適用例。多くの場合、<code>overflow</code>{' '}
            と組み合わせて使用されます。
          </p>
          <div className="space-y-6">
            {/* Fixed Height */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                固定高さ (数値/スケール) / None
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{maxHFixedHtml}</code> /{' '}
                <code className="language-html">{maxHNoneHtml}</code>
              </pre>
              <MaxHFixedExample />
            </div>
            {/* Full Height */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                Full (親要素基準)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{maxHFullHtml}</code>
              </pre>
              <MaxHFullExample />
            </div>
            {/* Screen Height */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                Screen (ビューポート基準)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{maxHScreenHtml}</code>
              </pre>
              <MaxHScreenExample />
            </div>
            {/* Min/Max/Fit Height */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                コンテンツベース (min/max/fit) (v3.3+)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{maxHMinMaxFitHtml}</code>
              </pre>
              <MaxHMinMaxFitExample />
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
            を使って、画面サイズに応じて最大高さを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>max-h-64 md:max-h-96</code> は、デフォルトで最大高さを{' '}
              <code>16rem</code>、中程度の画面サイズ以上で <code>24rem</code> に制限します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="max-h-64 md:max-h-96 overflow-y-auto ...">
  Responsive Max-Height Content...
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
                <code>max-height</code> は要素がそれより大きくなることを防ぎますが、
                <code>height</code> や <code>min-height</code>{' '}
                によってそれより小さくなることは妨げません。
              </li>
              <li>
                <code>max-h-full</code>{' '}
                を使用する場合、親要素に明示的な高さが設定されている必要があります。
              </li>
              <li>
                コンテンツが最大高さを超える場合、デフォルトでははみ出して表示されます。
                <code>overflow-hidden</code> や <code>overflow-y-auto</code>{' '}
                などを組み合わせて、はみ出したコンテンツの処理を指定することが一般的です。
              </li>
              <li>
                <code>max-h-min</code>, <code>max-h-max</code>, <code>max-h-fit</code>{' '}
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
                <code>min-height</code> (<code>min-h-*</code>): 要素の最小高さを設定します。
              </li>
              <li>
                <code>overflow</code> (<code>overflow-hidden</code>, <code>overflow-y-auto</code>{' '}
                など): コンテンツがはみ出した場合の処理を指定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default MaxHeightPage;

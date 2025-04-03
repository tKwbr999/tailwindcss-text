import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const GapExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">1</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">2</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">3</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">4</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">5</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">6</div>
      {/* 行間、列間ともに gap-4 (1rem) の溝が適用される */}
    </div>
  );
};

const GapXExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-2 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      {' '}
      {/* gap-y-2 で行間の溝を小さく */}
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">1</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">2</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">3</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">4</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">5</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">6</div>
      {/* 列間の溝のみ gap-x-8 (2rem) が適用される */}
    </div>
  );
};

const GapYExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-6 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      {' '}
      {/* gap-x-2 で列間の溝を小さく */}
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">1</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">2</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">3</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">4</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">5</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">6</div>
      {/* 行間の溝のみ gap-y-6 (1.5rem) が適用される */}
    </div>
  );
};

const FlexGapExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded w-64">
      {' '}
      {/* Flexbox で使用 */}
      <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">Flex 1</div>
      <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">Flex 2</div>
      <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">Flex 3</div>
      <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">Flex 4</div>
      {/* Flexbox でも gap を使用してアイテム間の溝を設定できる */}
    </div>
  );
};

// ページコンポーネント本体
const GapPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Flexbox & Grid: Gap (溝)';
  const links = [
    {
      title: 'Tailwind CSS: Gap',
      url: 'https://tailwindcss.com/docs/gap',
    },
    {
      title: 'MDN: gap',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/gap',
    },
    {
      title: 'MDN: row-gap',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap',
    },
    {
      title: 'MDN: column-gap',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap',
    },
  ];

  // コードスニペットを定義
  const gapHtml = `
<div class="grid grid-cols-3 gap-4 ...">
  {/* Items */}
</div>
  `.trim();

  const gapXHtml = `
<div class="grid grid-cols-3 gap-x-8 gap-y-2 ..."> {/* Row gap is smaller */}
  {/* Items */}
</div>
  `.trim();

  const gapYHtml = `
<div class="grid grid-cols-3 gap-x-2 gap-y-6 ..."> {/* Column gap is smaller */}
  {/* Items */}
</div>
  `.trim();

  const flexGapHtml = `
<div class="flex flex-wrap gap-4 ..."> {/* Works with Flexbox too! */}
  {/* Flex items */}
</div>
  `.trim();

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Gap - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Gap utility in Tailwind CSS. Examples and usage details for Gap." />
        {/* OGP タグ */}
        <meta property="og:title" content="Gap - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Gap utility in Tailwind CSS. Examples and usage details for Gap." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/flexbox-grid/gap" />
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
              グリッドレイアウトまたはフレックスボックスレイアウトにおいて、アイテム
              (行、列、またはフレックスアイテム) 間の溝 (gutter)
              のサイズを設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>gap</code>, <code>row-gap</code> (<code>grid-row-gap</code>),{' '}
              <code>column-gap</code> (<code>grid-column-gap</code>) プロパティを制御します。
            </p>
          </div>
        </section>
        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            基本的な使い方とパラメータ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>以下の形式でクラスをグリッドコンテナまたはフレックスコンテナに適用します:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>gap-{'{size}'}</code>
                </strong>
                : 行間と列間の両方に同じサイズの溝を設定します。
              </li>
              <li>
                <strong>
                  <code>gap-x-{'{size}'}</code>
                </strong>
                : 列間の溝 (水平方向の溝) のみを設定します (<code>column-gap</code>)。
              </li>
              <li>
                <strong>
                  <code>gap-y-{'{size}'}</code>
                </strong>
                : 行間の溝 (垂直方向の溝) のみを設定します (<code>row-gap</code>)。
              </li>
            </ul>
            <p className="mt-4">
              <code>{'{size}'}</code> には、Tailwind のデフォルトのスペーシングスケール (例:{' '}
              <code>0</code>, <code>px</code>, <code>0.5</code>, <code>1</code>, ...,{' '}
              <code>96</code>) を使用できます。任意の値 (例: <code>gap-[1.25rem]</code>,{' '}
              <code>gap-x-[5%]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる gap ユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* Gap */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                gap (行間・列間)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{gapHtml}</code>
              </pre>
              <GapExample />
            </div>
            {/* Gap X */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                gap-x (列間)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{gapXHtml}</code>
              </pre>
              <GapXExample />
            </div>
            {/* Gap Y */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                gap-y (行間)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{gapYHtml}</code>
              </pre>
              <GapYExample />
            </div>
            {/* Flexbox Gap */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                Flexbox での Gap
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{flexGapHtml}</code>
              </pre>
              <FlexGapExample />
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
            を使って、画面サイズに応じて溝のサイズを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>gap-2 md:gap-4</code> はデフォルトで <code>0.5rem</code>
              、中程度の画面サイズ以上で <code>1rem</code> の溝を設定します。<code>md:gap-x-8</code>{' '}
              のように軸ごとに指定することも可能です。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="grid grid-cols-2 gap-2 md:gap-4 lg:gap-x-8 lg:gap-y-4 ...">
  {/* ... items */}
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
                <code>gap</code>{' '}
                ユーティリティはグリッドコンテナまたはフレックスコンテナに適用します。
              </li>
              <li>
                <code>gap</code>{' '}
                はアイテム「間」のスペースを設定します。コンテナの端とアイテム間のスペースは設定しません
                (それは <code>padding</code> で行います)。
              </li>
              <li>
                Flexbox での <code>gap</code>{' '}
                のサポートは比較的新しいため、非常に古いブラウザでは動作しない可能性があります。Grid
                でのサポートはより広範です。
              </li>
              <li>
                Flexbox で <code>gap</code> を使用する場合、
                <code>justify-content: space-between</code>{' '}
                などとは異なり、アイテム間に一貫した溝ができます。
              </li>
              <li>
                <code>gap-x-*</code> と <code>gap-y-*</code>{' '}
                を個別に指定することで、行と列で異なる溝サイズを設定できます。<code>gap-*</code>{' '}
                は両方を同じ値に設定するショートハンドです。
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
                <code>display</code> (<code>grid</code>, <code>inline-grid</code>, <code>flex</code>
                , <code>inline-flex</code>): 要素をグリッドまたはフレックスコンテナにします。
              </li>
              <li>
                <code>padding</code> (<code>p-*</code>, <code>px-*</code>, <code>py-*</code>):
                コンテナの内側の余白を設定します。
              </li>
              <li>
                <code>space</code> (<code>space-x-*</code>, <code>space-y-*</code>): Flexbox
                でアイテム間にマージンを追加する代替方法 (gap が使えない場合や特定のデザインで)。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default GapPage;

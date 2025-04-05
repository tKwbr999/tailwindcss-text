import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// divide-* は Flexbox または Grid コンテナ内の隣接する兄弟要素間に境界線を追加します。

const DivideXExample: React.FC = () => {
  return (
    <div className="flex divide-x-4 divide-blue-500 bg-gray-100 dark:bg-gray-800 p-2 rounded">
      <div className="px-4 py-2 text-center">1</div>
      <div className="px-4 py-2 text-center">2</div>
      <div className="px-4 py-2 text-center">3</div>
      {/* アイテム間に太さ 4px の青い垂直境界線が表示される */}
    </div>
  );
};

const DivideYExample: React.FC = () => {
  return (
    <div className="grid grid-cols-1 divide-y-2 divide-green-500 bg-gray-100 dark:bg-gray-800 p-2 rounded w-48 mx-auto">
      <div className="py-4 px-2 text-center">1</div>
      <div className="py-4 px-2 text-center">2</div>
      <div className="py-4 px-2 text-center">3</div>
      {/* アイテム間に太さ 2px の緑の水平境界線が表示される */}
    </div>
  );
};

const DivideReverseExample: React.FC = () => {
  return (
    <div className="flex flex-row-reverse divide-x-4 divide-x-reverse divide-red-500 bg-gray-100 dark:bg-gray-800 p-2 rounded">
      <div className="px-4 py-2 text-center">1</div>
      <div className="px-4 py-2 text-center">2</div>
      <div className="px-4 py-2 text-center">3</div>
      {/* flex-row-reverse と divide-x-reverse により、アイテム間に右側の境界線が表示される */}
    </div>
  );
};

const ArbitraryDivideWidthExample: React.FC = () => {
  return (
    <div className="flex divide-x-[3px] divide-purple-500 bg-gray-100 dark:bg-gray-800 p-2 rounded">
      <div className="px-4 py-2 text-center">1</div>
      <div className="px-4 py-2 text-center">2</div>
      <div className="px-4 py-2 text-center">3</div>
      {/* アイテム間に太さ 3px の紫の垂直境界線が表示される */}
    </div>
  );
};

// ページコンポーネント本体
const DivideWidthPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Borders: Divide Width ';
  const jaTitle = '要素間の境界線の太さ';
  const links = [
    {
      title: 'Tailwind CSS: Divide Width',
      url: 'https://tailwindcss.com/docs/divide-width',
    },
    {
      title: 'MDN: border-width (関連)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-width',
    },
  ];

  // コードスニペットを定義
  const divideXHtml = `
<div class="flex divide-x-4 divide-blue-500 ...">
  <div>1</div>
  <div>2</div> {/* Left border added */}
  <div>3</div> {/* Left border added */}
</div>
  `.trim();
  const divideYHtml = `
<div class="grid grid-cols-1 divide-y-2 divide-green-500 ...">
  <div>1</div>
  <div>2</div> {/* Top border added */}
  <div>3</div> {/* Top border added */}
</div>
  `.trim();
  const divideReverseHtml = `
<div class="flex flex-row-reverse divide-x-4 divide-x-reverse divide-red-500 ...">
  <div>1</div>
  <div>2</div> {/* Right border added */}
  <div>3</div> {/* Right border added */}
</div>
  `.trim();
  const arbitraryDivideWidthHtml = `<div class="flex divide-x-[3px] divide-purple-500 ...">...</div>`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>
      <Helmet>
        <title>Divide Width - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Divide Width utility in Tailwind CSS. Examples and usage details for Divide Width."
        />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              隣接する兄弟要素の間に表示される境界線 (divider)
              の太さを設定するためのユーティリティクラスです。Flexbox または Grid
              コンテナ内のアイテム間に区切り線を追加するのに便利です。
            </p>
            <p>
              これは直接的な CSS プロパティではなく、Tailwind
              が提供するヘルパーユーティリティです。内部的には、最初の子要素を除くすべての直接の子要素に対して、適切な方向の{' '}
              <code>border-width</code> (<code>border-left-width</code> または{' '}
              <code>border-top-width</code> など) を設定します。
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
              <code>
                divide-{'{axis}'}-{'{width}'}
              </code>{' '}
              または <code>divide-{'{axis}'}-reverse</code> の形式でクラスを親要素 (Flexbox または
              Grid コンテナ) に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>divide-x-{'{width}'}</code>
                </strong>
                : 水平方向の隣接要素間に垂直な境界線を追加します (2番目以降の子要素に{' '}
                <code>border-left-width</code> を設定)。
                <ul>
                  <li>
                    <code>divide-x</code> (1px), <code>divide-x-0</code> (0px),{' '}
                    <code>divide-x-2</code> (2px), <code>divide-x-4</code> (4px),{' '}
                    <code>divide-x-8</code> (8px)。
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  <code>divide-y-{'{width}'}</code>
                </strong>
                : 垂直方向の隣接要素間に水平な境界線を追加します (2番目以降の子要素に{' '}
                <code>border-top-width</code> を設定)。
                <ul>
                  <li>
                    <code>divide-y</code> (1px), <code>divide-y-0</code> (0px),{' '}
                    <code>divide-y-2</code> (2px), <code>divide-y-4</code> (4px),{' '}
                    <code>divide-y-8</code> (8px)。
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  <code>divide-x-reverse</code>
                </strong>
                : 水平方向の境界線の方向を反転させます (<code>border-left-width</code> の代わりに{' '}
                <code>border-right-width</code> を設定)。通常 <code>flex-row-reverse</code>{' '}
                と組み合わせて使用します。
              </li>
              <li>
                <strong>
                  <code>divide-y-reverse</code>
                </strong>
                : 垂直方向の境界線の方向を反転させます (<code>border-top-width</code> の代わりに{' '}
                <code>border-bottom-width</code> を設定)。通常 <code>flex-col-reverse</code>{' '}
                と組み合わせて使用します。
              </li>
            </ul>
            <p className="mt-4">
              <code>{'{width}'}</code> には上記の数値 (<code>0</code>, <code>2</code>,{' '}
              <code>4</code>, <code>8</code>) を使用します。<code>divide-x</code>/
              <code>divide-y</code> は 1px の太さを設定します。
            </p>
            <p>
              任意の値 (例: <code>divide-x-[3px]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
            <p>
              境界線の色 (<code>divide-{'{color}'}</code>) とスタイル (<code>divide-solid</code>{' '}
              など) も別途指定する必要があります。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる divide-width ユーティリティの適用例。色とスタイルも指定しています。
          </p>
          <div className="space-y-6">
            {/* Divide X */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                水平方向 (divide-x-*)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{divideXHtml}</code>
              </pre>
              <DivideXExample />
            </div>
            {/* Divide Y */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                垂直方向 (divide-y-*)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{divideYHtml}</code>
              </pre>
              <DivideYExample />
            </div>
            {/* Divide Reverse */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                方向反転 (divide-*-reverse)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{divideReverseHtml}</code>
              </pre>
              <DivideReverseExample />
            </div>
            {/* Arbitrary Divide Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryDivideWidthHtml}</code>
              </pre>
              <ArbitraryDivideWidthExample />
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
            を使って、画面サイズに応じて要素間の境界線の太さを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>divide-x-2 md:divide-x-4</code> は、小さい画面では
              2px、中程度の画面サイズ以上で 4px の垂直境界線を設定します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="flex divide-x-2 md:divide-x-4 divide-gray-500 ...">
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
                <code>divide-*</code>{' '}
                ユーティリティは親要素に適用し、直接の子要素間に境界線を追加します。最初の子要素には境界線は追加されません。
              </li>
              <li>
                境界線を表示するには、太さ (<code>divide-*-*</code>) に加えて、色 (
                <code>divide-{'{color}'}</code>) とスタイル (<code>divide-solid</code> など)
                も指定する必要があります。
              </li>
              <li>
                <code>divide-x-reverse</code> と <code>divide-y-reverse</code>{' '}
                は、要素の順序が反転している場合 (例: <code>flex-row-reverse</code>)
                に、境界線の位置を調整するために使用します。
              </li>
              <li>
                これらのユーティリティは、要素間のマージンやパディングとは独立して動作します。
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
                <code>divide-color</code> (<code>divide-*</code>): 要素間の境界線の色を設定します。
              </li>
              <li>
                <code>divide-style</code> (<code>divide-solid</code>, <code>divide-dashed</code>{' '}
                など): 要素間の境界線のスタイルを設定します。
              </li>
              <li>
                <code>divide-opacity</code> (<code>divide-opacity-*</code>):
                要素間の境界線の色の透明度を設定します (古い構文)。
              </li>
              <li>
                <code>border-width</code> (<code>border</code>, <code>border-*</code>):
                要素自身の境界線の太さを設定します。
              </li>
              <li>
                <code>space</code> (<code>space-x-*</code>, <code>space-y-*</code>):
                子要素間にマージンを追加します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default DivideWidthPage;

import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const PaddingAllExample: React.FC = () => {
  return (
    <div className="p-4 bg-blue-200 dark:bg-blue-900 rounded text-blue-800 dark:text-blue-200">
      p-4 (全方向に 1rem)
    </div>
  );
};

const PaddingHorizontalExample: React.FC = () => {
  return (
    <div className="px-8 py-2 bg-green-200 dark:bg-green-900 rounded text-green-800 dark:text-green-200">
      {' '}
      {/* py-2 で高さを出す */}
      px-8 (左右に 2rem)
    </div>
  );
};

const PaddingVerticalExample: React.FC = () => {
  return (
    <div className="py-6 px-2 bg-yellow-200 dark:bg-yellow-900 rounded text-yellow-800 dark:text-yellow-200">
      {' '}
      {/* px-2 で幅を出す */}
      py-6 (上下に 1.5rem)
    </div>
  );
};

const PaddingSideExample: React.FC = () => {
  return (
    <div className="pt-6 pb-2 pl-4 pr-8 bg-red-200 dark:bg-red-900 rounded text-red-800 dark:text-red-200">
      pt-6 pb-2 pl-4 pr-8 (上: 1.5rem, 下: 0.5rem, 左: 1rem, 右: 2rem)
    </div>
  );
};

const PaddingLogicalExample: React.FC = () => {
  // 注意: ps-* / pe-* は書字方向 (LTR/RTL) に依存します。
  //       通常 LTR では ps は padding-left, pe は padding-right と同じです。
  return (
    <div className="ps-8 pe-4 py-2 bg-purple-200 dark:bg-purple-900 rounded text-purple-800 dark:text-purple-200">
      ps-8 pe-4 (開始側: 2rem, 終了側: 1rem - LTRの場合)
    </div>
  );
};

// ページコンポーネント本体
const PaddingPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Spacing: Padding ';
  const jaTitle = 'パディング';
  const links = [
    {
      title: 'Tailwind CSS: Padding',
      url: 'https://tailwindcss.com/docs/padding',
    },
    {
      title: 'MDN: padding',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding',
    },
  ];

  // コードスニペットを定義
  const pAllHtml = `<div class="p-4 ...">...</div>`;
  const pXHtml = `<div class="px-8 ...">...</div>`;
  const pYHtml = `<div class="py-6 ...">...</div>`;
  const pSideHtml = `<div class="pt-6 pb-2 pl-4 pr-8 ...">...</div>`;
  const pLogicalHtml = `<div class="ps-8 pe-4 ...">...</div>`; // v3.3+

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>
      <Helmet>
        <title>Padding - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Padding utility in Tailwind CSS. Examples and usage details for Padding."
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
              要素の境界線 (border) とその内部コンテンツの間のスペース (内側の余白)
              を設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>padding</code>, <code>padding-top</code>, <code>padding-right</code>,{' '}
              <code>padding-bottom</code>, <code>padding-left</code>, および論理プロパティ (
              <code>padding-inline-start</code>, <code>padding-inline-end</code>) を制御します。
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
                p{'{side}'}-{'{size}'}
              </code>{' '}
              の形式でクラスを要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>p-{'{size}'}</code>
                </strong>
                : 全方向 (上下左右) にパディングを設定します。
              </li>
              <li>
                <strong>
                  <code>px-{'{size}'}</code>
                </strong>
                : 水平方向 (左右) にパディングを設定します (<code>padding-left</code> と{' '}
                <code>padding-right</code>)。
              </li>
              <li>
                <strong>
                  <code>py-{'{size}'}</code>
                </strong>
                : 垂直方向 (上下) にパディングを設定します (<code>padding-top</code> と{' '}
                <code>padding-bottom</code>)。
              </li>
              <li>
                <strong>
                  <code>pt-{'{size}'}</code>
                </strong>
                : 上方向 (<code>padding-top</code>) にパディングを設定します。
              </li>
              <li>
                <strong>
                  <code>pr-{'{size}'}</code>
                </strong>
                : 右方向 (<code>padding-right</code>) にパディングを設定します。
              </li>
              <li>
                <strong>
                  <code>pb-{'{size}'}</code>
                </strong>
                : 下方向 (<code>padding-bottom</code>) にパディングを設定します。
              </li>
              <li>
                <strong>
                  <code>pl-{'{size}'}</code>
                </strong>
                : 左方向 (<code>padding-left</code>) にパディングを設定します。
              </li>
              {/* Tailwind v3.3+ */}
              <li>
                <strong>
                  <code>ps-{'{size}'}</code>
                </strong>
                : 書字方向の開始側 (通常は左) にパディングを設定します (
                <code>padding-inline-start</code>)。 (v3.3+)
              </li>
              <li>
                <strong>
                  <code>pe-{'{size}'}</code>
                </strong>
                : 書字方向の終了側 (通常は右) にパディングを設定します (
                <code>padding-inline-end</code>)。 (v3.3+)
              </li>
            </ul>
            <p className="mt-4">
              <code>{'{size}'}</code> には、Tailwind のデフォルトのスペーシングスケール (例:{' '}
              <code>0</code>, <code>px</code>, <code>0.5</code>, <code>1</code>, ...,{' '}
              <code>96</code>) を使用できます。任意の値 (例: <code>p-[1.25rem]</code>,{' '}
              <code>px-[5%]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる padding ユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* All Sides */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                全方向 (p-*)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{pAllHtml}</code>
              </pre>
              <PaddingAllExample />
            </div>
            {/* Horizontal */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                水平方向 (px-*)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{pXHtml}</code>
              </pre>
              <PaddingHorizontalExample />
            </div>
            {/* Vertical */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                垂直方向 (py-*)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{pYHtml}</code>
              </pre>
              <PaddingVerticalExample />
            </div>
            {/* Individual Sides */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                個別方向 (pt-*, pr-*, pb-*, pl-*)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{pSideHtml}</code>
              </pre>
              <PaddingSideExample />
            </div>
            {/* Logical Properties */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                論理プロパティ (ps-*, pe-*) (v3.3+)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{pLogicalHtml}</code>
              </pre>
              <PaddingLogicalExample />
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
            を使って、画面サイズに応じてパディングを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>p-4 md:p-8</code> はデフォルトで <code>1rem</code>
              、中程度の画面サイズ以上で <code>2rem</code> のパディングを全方向に設定します。
              <code>md:px-12</code> のように軸や方向を限定することも可能です。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="p-4 md:p-8 lg:px-16 ...">
  Responsive Padding
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
                パディングは要素の内部に追加されるスペースです。要素間のスペース (外側の余白)
                を設定するには <code>margin</code> ユーティリティを使用します。
              </li>
              <li>
                要素の <code>box-sizing</code> プロパティが <code>border-box</code> (Tailwind
                のデフォルト) の場合、パディングは要素の <code>width</code> と <code>height</code>{' '}
                に含まれます。<code>box-sizing: content-box;</code>{' '}
                の場合は、パディングは幅と高さに追加されます。
              </li>
              <li>
                論理プロパティ (<code>ps-*</code>, <code>pe-*</code>) は、書字方向 (LTR または RTL)
                に応じて適用される方向が変わるため、多言語対応などで便利ですが、ブラウザのサポート状況に注意が必要な場合があります
                (ただし、主要ブラウザでは広くサポートされています)。
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
                <code>margin</code> (<code>m-*</code>, <code>mx-*</code>, <code>mt-*</code> など):
                要素の外側の余白を設定します。
              </li>
              <li>
                <code>box-sizing</code> (<code>box-border</code>, <code>box-content</code>):
                パディングが要素のサイズ計算に含まれるかどうかを制御します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default PaddingPage;

import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const SkewExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'; // 山の画像例
  return (
    <div className="flex flex-wrap gap-8 items-center justify-center p-4">
      <img
        src={imageUrl}
        alt="Skew X 0"
        className="skew-x-0 transition-transform duration-300 hover:skew-x-3 w-24 h-16 rounded"
      />
      <img
        src={imageUrl}
        alt="Skew X 3"
        className="skew-x-3 transition-transform duration-300 hover:skew-x-6 w-24 h-16 rounded"
      />
      <img
        src={imageUrl}
        alt="Skew X 12"
        className="skew-x-12 transition-transform duration-300 hover:skew-x-0 w-24 h-16 rounded"
      />
      <img
        src={imageUrl}
        alt="Skew Y 6"
        className="skew-y-6 transition-transform duration-300 hover:skew-y-12 w-24 h-16 rounded"
      />
      <img
        src={imageUrl}
        alt="Skew Y 12"
        className="skew-y-12 transition-transform duration-300 hover:skew-y-0 w-24 h-16 rounded"
      />
      <img
        src={imageUrl}
        alt="Skew X -6"
        className="-skew-x-6 transition-transform duration-300 hover:-skew-x-12 w-24 h-16 rounded"
      />
      <img
        src={imageUrl}
        alt="Skew Y -12"
        className="-skew-y-12 transition-transform duration-300 hover:-skew-y-0 w-24 h-16 rounded"
      />
    </div>
  );
};

const ArbitrarySkewExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80';
  return (
    <img
      src={imageUrl}
      alt="Arbitrary Skew"
      className="skew-x-[15deg] transition-transform duration-300 hover:skew-x-0 w-24 h-16 rounded"
    />
  );
};

// ページコンポーネント本体
const SkewPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Transforms: Skew (傾斜)';
  const links = [
    {
      title: 'Tailwind CSS: Skew',
      url: 'https://tailwindcss.com/docs/skew',
    },
    {
      title: 'MDN: skewX()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewX',
    },
    {
      title: 'MDN: skewY()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewY',
    },
  ];

  // コードスニペットを定義
  const skewHtml = `
{/* X軸方向の傾斜 */}
<img class="skew-x-3 ..." src="...">   {/* 3deg */}
<img class="skew-x-12 ..." src="...">  {/* 12deg */}
<img class="-skew-x-6 ..." src="...">  {/* -6deg */}

{/* Y軸方向の傾斜 */}
<img class="skew-y-6 ..." src="...">   {/* 6deg */}
<img class="skew-y-12 ..." src="...">  {/* 12deg */}
<img class="-skew-y-3 ..." src="...">  {/* -3deg */}
  `.trim();

  const arbitrarySkewHtml = `<img class="skew-x-[15deg] ..." src="...">`;

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Skew - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Skew utility in Tailwind CSS. Examples and usage details for Skew." />
        {/* OGP タグ */}
        <meta property="og:title" content="Skew - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Skew utility in Tailwind CSS. Examples and usage details for Skew." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/transforms/skew" />
        {/* <meta property="og:image" content="[画像のURL]" /> */} {/* 必要に応じて画像URLを設定 */}
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>要素を水平または垂直方向に傾斜させるためのユーティリティクラスです。</p>
            <p>
              CSS の <code>transform: skewX()</code> および <code>transform: skewY()</code>{' '}
              プロパティを制御します。
            </p>
            <p>
              これらのユーティリティを使用するには、要素に <code>transform</code> (または他の
              transform 関連ユーティリティ) が適用されている必要がありますが、Tailwind
              は通常これを自動的に処理します。
            </p>
          </div>
        </section>
        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            基本的な使い方とパラメータ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>以下の形式でクラスを要素に適用します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>skew-x-{'{amount}'}</code>
                </strong>
                : 水平方向 (X軸) に傾斜させます。
              </li>
              <li>
                <strong>
                  <code>skew-y-{'{amount}'}</code>
                </strong>
                : 垂直方向 (Y軸) に傾斜させます。
              </li>
              <li>
                <strong>
                  <code>-skew-x-{'{amount}'}</code>
                </strong>
                : 水平方向 (X軸) に逆向きに傾斜させます。
              </li>
              <li>
                <strong>
                  <code>-skew-y-{'{amount}'}</code>
                </strong>
                : 垂直方向 (Y軸) に逆向きに傾斜させます。
              </li>
            </ul>
            <p>
              <code>{'{amount}'}</code> には、傾斜させる角度 (deg) を指定します。Tailwind
              は一般的な角度の値を提供します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>skew-*-0</code>
                </strong>{' '}
                (0deg - デフォルト)
              </li>
              <li>
                <strong>
                  <code>skew-*-1</code>
                </strong>{' '}
                (1deg)
              </li>
              <li>
                <strong>
                  <code>skew-*-2</code>
                </strong>{' '}
                (2deg)
              </li>
              <li>
                <strong>
                  <code>skew-*-3</code>
                </strong>{' '}
                (3deg)
              </li>
              <li>
                <strong>
                  <code>skew-*-6</code>
                </strong>{' '}
                (6deg)
              </li>
              <li>
                <strong>
                  <code>skew-*-12</code>
                </strong>{' '}
                (12deg)
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>skew-x-[15deg]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる傾斜角度の適用例。ホバーして効果を確認してください。
          </p>
          <div className="space-y-6">
            {/* Standard Skew */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準の傾斜角度
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{skewHtml}</code>
              </pre>
              <SkewExample />
            </div>
            {/* Arbitrary Skew */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitrarySkewHtml}</code>
              </pre>
              <ArbitrarySkewExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:skew-x-6</code> など) や状態 (<code>hover:skew-y-3</code>,{' '}
            <code>focus:-skew-x-1</code> など)
            に応じて傾斜角度を変更できます。トランジションと組み合わせるのが一般的です。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ホバー時に要素を Y軸方向に 3度 傾ける例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<button class="transition duration-300 ease-in-out skew-y-0 hover:skew-y-3 ...">
  Hover Me
</button>
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
                <code>transform</code>: transform 機能を有効にします (通常は自動)。
              </li>
              <li>
                <code>transform-origin-*</code>: 変形の原点を設定します。
              </li>
              <li>
                他の transform ユーティリティ: <code>scale-*</code>, <code>rotate-*</code>,{' '}
                <code>translate-*</code>。
              </li>
              <li>
                <code>transition-*</code>: 傾斜変化を滑らかにするために使用します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default SkewPage;

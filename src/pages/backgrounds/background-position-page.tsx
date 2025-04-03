import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// 背景画像の位置を示すため、背景画像、サイズ、繰り返しを設定します。
// 画像は placeholder.com の小さな画像を使用し、bg-no-repeat で位置を明確にします。

const BgPositionExample: React.FC = () => {
  const imageUrl = 'url("https://via.placeholder.com/80/a7f3d0/047857?text=BG")'; // ダミー画像
  return (
    <div className="grid grid-cols-3 gap-4">
      <div
        className="bg-bottom h-32 bg-no-repeat border border-dashed rounded bg-emerald-100 dark:bg-emerald-900"
        style={{ backgroundImage: imageUrl }}
      >
        <span className="text-xs p-1 bg-black/50 text-white rounded-sm">bottom</span>
      </div>
      <div
        className="bg-center h-32 bg-no-repeat border border-dashed rounded bg-emerald-100 dark:bg-emerald-900"
        style={{ backgroundImage: imageUrl }}
      >
        <span className="text-xs p-1 bg-black/50 text-white rounded-sm">center</span>
      </div>
      <div
        className="bg-left h-32 bg-no-repeat border border-dashed rounded bg-emerald-100 dark:bg-emerald-900"
        style={{ backgroundImage: imageUrl }}
      >
        <span className="text-xs p-1 bg-black/50 text-white rounded-sm">left</span>
      </div>
      <div
        className="bg-left-bottom h-32 bg-no-repeat border border-dashed rounded bg-emerald-100 dark:bg-emerald-900"
        style={{ backgroundImage: imageUrl }}
      >
        <span className="text-xs p-1 bg-black/50 text-white rounded-sm">left-bottom</span>
      </div>
      <div
        className="bg-left-top h-32 bg-no-repeat border border-dashed rounded bg-emerald-100 dark:bg-emerald-900"
        style={{ backgroundImage: imageUrl }}
      >
        <span className="text-xs p-1 bg-black/50 text-white rounded-sm">left-top</span>
      </div>
      <div
        className="bg-right h-32 bg-no-repeat border border-dashed rounded bg-emerald-100 dark:bg-emerald-900"
        style={{ backgroundImage: imageUrl }}
      >
        <span className="text-xs p-1 bg-black/50 text-white rounded-sm">right</span>
      </div>
      <div
        className="bg-right-bottom h-32 bg-no-repeat border border-dashed rounded bg-emerald-100 dark:bg-emerald-900"
        style={{ backgroundImage: imageUrl }}
      >
        <span className="text-xs p-1 bg-black/50 text-white rounded-sm">right-bottom</span>
      </div>
      <div
        className="bg-right-top h-32 bg-no-repeat border border-dashed rounded bg-emerald-100 dark:bg-emerald-900"
        style={{ backgroundImage: imageUrl }}
      >
        <span className="text-xs p-1 bg-black/50 text-white rounded-sm">right-top</span>
      </div>
      <div
        className="bg-top h-32 bg-no-repeat border border-dashed rounded bg-emerald-100 dark:bg-emerald-900"
        style={{ backgroundImage: imageUrl }}
      >
        <span className="text-xs p-1 bg-black/50 text-white rounded-sm">top</span>
      </div>
    </div>
  );
};

const ArbitraryPositionExample: React.FC = () => {
  const imageUrl = 'url("https://via.placeholder.com/50/f59e0b/ffffff?text=BG")';
  return (
    <div
      className="bg-[position:25%_75%] h-32 bg-no-repeat border border-dashed rounded bg-amber-100 dark:bg-amber-900"
      style={{ backgroundImage: imageUrl }}
    >
      <p className="text-amber-900 p-2 text-xs">
        任意の値: bg-[position:25%_75%] (左から25%, 上から75%の位置)
      </p>
    </div>
  );
};

// ページコンポーネント本体
const BackgroundPositionPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Backgrounds: Background Position (背景画像の位置)';
  const links = [
    {
      title: 'Tailwind CSS: Background Position',
      url: 'https://tailwindcss.com/docs/background-position',
    },
    {
      title: 'MDN: background-position',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-position',
    },
  ];

  // コードスニペットを定義 (代表例)
  const bgPosHtml = `
<div class="bg-bottom bg-no-repeat ..." style="background-image: url(...)">...</div>
<div class="bg-center bg-no-repeat ..." style="background-image: url(...)">...</div>
<div class="bg-left-top bg-no-repeat ..." style="background-image: url(...)">...</div>
{/* etc. */}
  `.trim();
  const arbitraryPosHtml = `<div class="bg-[position:25%_75%] bg-no-repeat ..." style="background-image: url(...)">...</div>`;

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Background Position - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Background Position utility in Tailwind CSS. Examples and usage details for Background Position." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の背景画像 (<code>background-image</code>)
              の初期位置を設定するためのユーティリティクラスです。背景画像の原点 (
              <code>background-origin</code>) を基準として、画像を上下左右や中央に配置します。
            </p>
            <p>
              CSS の <code>background-position</code> プロパティを制御します。
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
              <code>bg-{'{position}'}</code> の形式でクラスを背景画像を持つ要素に適用します。
            </p>
            <p>デフォルトで用意されている位置:</p>
            <ul className="list-disc list-inside space-y-1 pl-4 columns-2">
              <li>
                <strong>
                  <code>bg-bottom</code>
                </strong>{' '}
                (<code>bottom</code>)
              </li>
              <li>
                <strong>
                  <code>bg-center</code>
                </strong>{' '}
                (<code>center</code>)
              </li>
              <li>
                <strong>
                  <code>bg-left</code>
                </strong>{' '}
                (<code>left</code>)
              </li>
              <li>
                <strong>
                  <code>bg-left-bottom</code>
                </strong>{' '}
                (<code>left bottom</code>)
              </li>
              <li>
                <strong>
                  <code>bg-left-top</code>
                </strong>{' '}
                (<code>left top</code>)
              </li>
              <li>
                <strong>
                  <code>bg-right</code>
                </strong>{' '}
                (<code>right</code>)
              </li>
              <li>
                <strong>
                  <code>bg-right-bottom</code>
                </strong>{' '}
                (<code>right bottom</code>)
              </li>
              <li>
                <strong>
                  <code>bg-right-top</code>
                </strong>{' '}
                (<code>right top</code>)
              </li>
              <li>
                <strong>
                  <code>bg-top</code>
                </strong>{' '}
                (<code>top</code>)
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>bg-[position:25%_75%]</code>, <code>bg-[center_top_1rem]</code>)
              も使用可能です (Tailwind JIT モード)。X軸とY軸の位置をスペース区切りで指定します。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる background-position ユーティリティの適用例。<code>bg-no-repeat</code>{' '}
            を使用して位置を明確にしています。
          </p>
          <div className="space-y-6">
            {/* Standard Positions */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準の位置指定
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{bgPosHtml}</code>
              </pre>
              <BgPositionExample />
            </div>
            {/* Arbitrary Position */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryPosHtml}</code>
              </pre>
              <ArbitraryPositionExample />
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
            を使って、画面サイズに応じて背景画像の位置を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>bg-center md:bg-top</code>{' '}
              は、小さい画面では中央、中程度の画面サイズ以上では上端に背景画像を配置します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="bg-center md:bg-top bg-no-repeat ..." style="background-image: url(...)">
  ...
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
                これらのユーティリティは、要素に背景画像 (<code>background-image</code>)
                が設定されている場合にのみ効果があります。
              </li>
              <li>
                背景画像の位置は、<code>background-origin</code> で設定された原点を基準とします
                (デフォルトはパディングボックスの左上隅)。
              </li>
              <li>
                背景画像が繰り返される場合 (<code>bg-repeat</code>{' '}
                がデフォルト)、位置指定の効果は分かりにくくなることがあります。通常は{' '}
                <code>bg-no-repeat</code> と組み合わせて使用します。
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
                <code>background-image</code> (<code>bg-*</code>):
                背景画像やグラデーションを設定します。
              </li>
              <li>
                <code>background-origin</code> (<code>bg-origin-*</code>):
                背景画像の原点を設定します。
              </li>
              <li>
                <code>background-repeat</code> (<code>bg-repeat</code>, <code>bg-no-repeat</code>{' '}
                など): 背景画像の繰り返し方法を設定します。
              </li>
              <li>
                <code>background-size</code> (<code>bg-cover</code>, <code>bg-contain</code> など):
                背景画像のサイズを設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default BackgroundPositionPage;

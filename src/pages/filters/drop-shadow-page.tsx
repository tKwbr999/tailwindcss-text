import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// ドロップシャドウは要素のコンテンツ (テキストや透明でない部分) に基づいて影を落とします。
// box-shadow とは異なり、要素の形状に沿った影が生成されます。

const DropShadowExample: React.FC = () => {
  // SVG アイコン例 (Tailwind ロゴのようなもの)
  const svgIcon = (
    <svg className="size-24 fill-blue-500" viewBox="0 0 24 24">
      <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z" />
    </svg>
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 items-center justify-items-center">
      <div className="drop-shadow-sm">
        {React.cloneElement(svgIcon, { className: 'size-24 fill-cyan-500' })}
        <p className="text-xs text-center mt-1">sm</p>
      </div>
      <div className="drop-shadow">
        {React.cloneElement(svgIcon, { className: 'size-24 fill-cyan-500' })}
        <p className="text-xs text-center mt-1">default</p>
      </div>
      <div className="drop-shadow-md">
        {React.cloneElement(svgIcon, { className: 'size-24 fill-cyan-500' })}
        <p className="text-xs text-center mt-1">md</p>
      </div>
      <div className="drop-shadow-lg">
        {React.cloneElement(svgIcon, { className: 'size-24 fill-cyan-500' })}
        <p className="text-xs text-center mt-1">lg</p>
      </div>
      <div className="drop-shadow-xl">
        {React.cloneElement(svgIcon, { className: 'size-24 fill-cyan-500' })}
        <p className="text-xs text-center mt-1">xl</p>
      </div>
      <div className="drop-shadow-2xl">
        {React.cloneElement(svgIcon, { className: 'size-24 fill-cyan-500' })}
        <p className="text-xs text-center mt-1">2xl</p>
      </div>
      <div className="drop-shadow-none">
        {React.cloneElement(svgIcon, { className: 'size-24 fill-cyan-500' })}
        <p className="text-xs text-center mt-1">none</p>
      </div>
    </div>
  );
};

const ArbitraryDropShadowExample: React.FC = () => {
  const svgIcon = (
    <svg className="size-24 fill-purple-500" viewBox="0 0 24 24">
      <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z" />
    </svg>
  );
  return (
    <div className="drop-shadow-[0_4px_3px_rgba(168,_85,_247,_0.5)]">
      {svgIcon}
      <p className="text-xs text-center mt-1">
        任意の値: drop-shadow-[0_4px_3px_rgba(168,_85,_247,_0.5)]
      </p>
    </div>
  );
};

// ページコンポーネント本体
const DropShadowPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Filters: Drop Shadow ';
const jaTitle = 'ドロップシャドウ';
  const links = [
    {
      title: 'Tailwind CSS: Drop Shadow',
      url: 'https://tailwindcss.com/docs/drop-shadow',
    },
    {
      title: 'MDN: filter: drop-shadow()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow',
    },
  ];

  // コードスニペットを定義
  const dropShadowHtml = `
<img class="drop-shadow-sm ..." src="..." alt="...">
<img class="drop-shadow ..." src="..." alt="..."> {/* Default */}
<img class="drop-shadow-md ..." src="..." alt="...">
<img class="drop-shadow-lg ..." src="..." alt="...">
<img class="drop-shadow-xl ..." src="..." alt="...">
<img class="drop-shadow-2xl ..." src="..." alt="...">
<img class="drop-shadow-none ..." src="..." alt="...">
  `.trim();
  const arbitraryDropShadowHtml = `<img class="drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)] ..." src="..." alt="...">`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Drop Shadow - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Drop Shadow utility in Tailwind CSS. Examples and usage details for Drop Shadow." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素のコンテンツ (テキストや透明でない部分)
              に基づいてドロップシャドウを追加するためのユーティリティクラスです。
              <code>box-shadow</code> が要素のボックス全体に影を適用するのに対し、
              <code>drop-shadow</code> は要素の実際の形状に沿った影を生成します。PNG や SVG
              の透明部分には影が適用されません。
            </p>
            <p>
              CSS の <code>filter: drop-shadow();</code> プロパティを制御します。
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
              <code>drop-shadow-{'{size}'}</code> または <code>drop-shadow-none</code>{' '}
              の形式でクラスを要素に適用します。
            </p>
            <p>
              デフォルトで用意されているサイズ (<code>box-shadow</code> と同様のキー):
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>drop-shadow-sm</code>
                </strong>
                : 小さなドロップシャドウ。
              </li>
              <li>
                <strong>
                  <code>drop-shadow</code>
                </strong>
                : デフォルトのドロップシャドウ。
              </li>
              <li>
                <strong>
                  <code>drop-shadow-md</code>
                </strong>
                : 中程度のドロップシャドウ。
              </li>
              <li>
                <strong>
                  <code>drop-shadow-lg</code>
                </strong>
                : 大きなドロップシャドウ。
              </li>
              <li>
                <strong>
                  <code>drop-shadow-xl</code>
                </strong>
                : より大きなドロップシャドウ。
              </li>
              <li>
                <strong>
                  <code>drop-shadow-2xl</code>
                </strong>
                : 最大のドロップシャドウ。
              </li>
              <li>
                <strong>
                  <code>drop-shadow-none</code>
                </strong>
                : ドロップシャドウを削除します。
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]</code>) も使用可能です
              (Tailwind JIT モード)。CSS の <code>drop-shadow()</code> 関数に渡す値を指定します
              (通常は <code>box-shadow</code> と同様のオフセット、ぼかし半径、色)。
            </p>
            <p>
              ドロップシャドウの色は、任意の値で指定するか、CSS
              カスタムプロパティや他のテクニックで間接的に制御する必要があります (Tailwind v3.3
              時点では <code>drop-shadow-color-*</code> のような専用ユーティリティはありません)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なるドロップシャドウユーティリティの適用例 (SVG アイコンを使用)。
          </p>
          <div className="space-y-6">
            {/* Standard Drop Shadows */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準ドロップシャドウ
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{dropShadowHtml}</code>
              </pre>
              <DropShadowExample />
            </div>
            {/* Arbitrary Drop Shadow */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryDropShadowHtml}</code>
              </pre>
              <ArbitraryDropShadowExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:drop-shadow-lg</code> など) や状態 (
            <code>hover:drop-shadow-xl</code> など) に応じてドロップシャドウを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時にドロップシャドウを強くすることができます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<img class="drop-shadow-md hover:drop-shadow-xl transition ..." src="..." alt="...">
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
                <code>drop-shadow</code> は <code>filter</code>{' '}
                プロパティの一部です。他のフィルターユーティリティと組み合わせることができます。
              </li>
              <li>
                <code>box-shadow</code>{' '}
                とは異なり、要素の実際の描画内容に基づいて影が生成されます。透明な部分には影が付きません。
              </li>
              <li>
                パフォーマンス: 複雑な形状の要素や多数の要素に <code>drop-shadow</code>{' '}
                を適用すると、パフォーマンスに影響を与える可能性があります。<code>box-shadow</code>{' '}
                の方が一般的に軽量です。
              </li>
              <li>
                ドロップシャドウの色を直接制御するユーティリティはデフォルトでは提供されていません
                (v3.3 時点)。任意の値で色を指定するか、CSS カスタムプロパティを使用します。
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
                <code>filter</code>: 他のフィルターユーティリティを有効にするための基本クラス。
                <code>drop-shadow-*</code> は自動的にこれを有効にします。
              </li>
              <li>
                <code>box-shadow</code> (<code>shadow-*</code>):
                要素のボックス全体に影を追加します。
              </li>
              <li>
                他のフィルターユーティリティ: <code>blur</code>, <code>brightness</code>,{' '}
                <code>contrast</code>, <code>grayscale</code>, <code>hue-rotate</code>,{' '}
                <code>invert</code>, <code>saturate</code>, <code>sepia</code>。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default DropShadowPage;

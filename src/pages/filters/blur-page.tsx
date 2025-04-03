import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// 画像にぼかし効果を適用します。

const BlurExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'; // 山の画像例
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
      <img src={imageUrl} alt="Blur None" className="blur-none rounded-lg" />
      <img src={imageUrl} alt="Blur Small" className="blur-sm rounded-lg" />
      <img src={imageUrl} alt="Blur Default" className="blur rounded-lg" />
      <img src={imageUrl} alt="Blur Medium" className="blur-md rounded-lg" />
      <img src={imageUrl} alt="Blur Large" className="blur-lg rounded-lg" />
      <img src={imageUrl} alt="Blur XL" className="blur-xl rounded-lg" />
      <img src={imageUrl} alt="Blur 2XL" className="blur-2xl rounded-lg" />
      <img src={imageUrl} alt="Blur 3XL" className="blur-3xl rounded-lg" />
    </div>
  );
};

const ArbitraryBlurExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80';
  return <img src={imageUrl} alt="Arbitrary Blur" className="blur-[2px] rounded-lg" />;
};

// ページコンポーネント本体
const BlurPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Filters: Blur (ぼかし)';
  const links = [
    {
      title: 'Tailwind CSS: Blur',
      url: 'https://tailwindcss.com/docs/blur',
    },
    {
      title: 'MDN: filter: blur()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur',
    },
  ];

  // コードスニペットを定義
  const blurHtml = `
<img class="blur-none ..." src="..." alt="..."> {/* Default */}
<img class="blur-sm ..." src="..." alt="...">
<img class="blur ..." src="..." alt="...">
<img class="blur-md ..." src="..." alt="...">
<img class="blur-lg ..." src="..." alt="...">
<img class="blur-xl ..." src="..." alt="...">
<img class="blur-2xl ..." src="..." alt="...">
<img class="blur-3xl ..." src="..." alt="...">
  `.trim();
  const arbitraryBlurHtml = `<img class="blur-[2px] ..." src="..." alt="...">`;

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Blur - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Blur utility in Tailwind CSS. Examples and usage details for Blur." />
        {/* OGP タグ */}
        <meta property="og:title" content="Blur - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Blur utility in Tailwind CSS. Examples and usage details for Blur." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/filters/blur" />
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
              要素にぼかし (blur)
              フィルターを適用するためのユーティリティクラスです。画像やテキストなどの要素をぼかす効果があります。
            </p>
            <p>
              CSS の <code>filter: blur();</code> プロパティを制御します。
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
              <code>blur-{'{amount}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>デフォルトで用意されているぼかし量:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>blur-none</code>
                </strong>{' '}
                (0px - デフォルト)
              </li>
              <li>
                <strong>
                  <code>blur-sm</code>
                </strong>{' '}
                (4px)
              </li>
              <li>
                <strong>
                  <code>blur</code>
                </strong>{' '}
                (8px - デフォルトの <code>blur</code> クラス)
              </li>
              <li>
                <strong>
                  <code>blur-md</code>
                </strong>{' '}
                (12px)
              </li>
              <li>
                <strong>
                  <code>blur-lg</code>
                </strong>{' '}
                (16px)
              </li>
              <li>
                <strong>
                  <code>blur-xl</code>
                </strong>{' '}
                (24px)
              </li>
              <li>
                <strong>
                  <code>blur-2xl</code>
                </strong>{' '}
                (40px)
              </li>
              <li>
                <strong>
                  <code>blur-3xl</code>
                </strong>{' '}
                (64px)
              </li>
            </ul>
            <p className="mt-4">数値はぼかしの半径 (radius) をピクセル単位で示します。</p>
            <p>
              任意の値 (例: <code>blur-[2px]</code>) も使用可能です (Tailwind JIT モード)。CSS の{' '}
              <code>blur()</code> 関数で有効な値を指定します。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">異なるぼかし量の適用例。</p>
          <div className="space-y-6">
            {/* Standard Blur */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準のぼかし量
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{blurHtml}</code>
              </pre>
              <BlurExample />
            </div>
            {/* Arbitrary Blur */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryBlurHtml}</code>
              </pre>
              <ArbitraryBlurExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:blur-lg</code> など) や状態 (<code>hover:blur-none</code>{' '}
            など) に応じてぼかし効果を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時にぼかしを解除するインタラクションを作成できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<img class="blur-md hover:blur-none transition duration-300 ..." src="..." alt="...">
              `.trim()}
              </code>
            </pre>
            <img
              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80"
              alt="Hover to unblur"
              className="blur-md hover:blur-none transition duration-300 rounded-lg w-48"
            />
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>ぼかしフィルターは要素全体とその内容に適用されます。</li>
              <li>
                複数のフィルターユーティリティ (例: <code>blur-md</code>, <code>brightness-50</code>
                ) を組み合わせることができます。
              </li>
              <li>
                背景要素にぼかしを適用したい場合は、<code>backdrop-blur-*</code>{' '}
                ユーティリティを使用します。
              </li>
              <li>
                パフォーマンス:
                過度なぼかしや多数の要素への適用は、特に低スペックなデバイスでパフォーマンスに影響を与える可能性があります。
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
                <code>filter</code>: 他のフィルターユーティリティ (brightness, contrast など)
                を有効にするための基本クラス。<code>blur-*</code> は自動的にこれを有効にします。
              </li>
              <li>
                <code>backdrop-filter</code> (<code>backdrop-blur-*</code> など):
                要素の背後にあるコンテンツにフィルターを適用します。
              </li>
              <li>
                <code>brightness</code> (<code>brightness-*</code>): 明るさを調整します。
              </li>
              <li>
                <code>contrast</code> (<code>contrast-*</code>): コントラストを調整します。
              </li>
              <li>
                <code>grayscale</code> (<code>grayscale</code>): グレースケールに変換します。
              </li>
              <li>
                <code>hue-rotate</code> (<code>hue-rotate-*</code>): 色相を回転させます。
              </li>
              <li>
                <code>invert</code> (<code>invert</code>): 色を反転させます。
              </li>
              <li>
                <code>saturate</code> (<code>saturate-*</code>): 彩度を調整します。
              </li>
              <li>
                <code>sepia</code> (<code>sepia</code>): セピア調に変換します。
              </li>
              <li>
                <code>drop-shadow</code> (<code>drop-shadow-*</code>):
                要素のコンテンツに基づいてドロップシャドウを追加します (<code>box-shadow</code>{' '}
                とは異なります)。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default BlurPage;

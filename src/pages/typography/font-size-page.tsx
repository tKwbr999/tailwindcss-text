import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const FontSizeExample: React.FC = () => {
  return (
    <div className="space-y-2">
      <p className="text-xs">テキストサイズ xs (0.75rem)</p>
      <p className="text-sm">テキストサイズ sm (0.875rem)</p>
      <p className="text-base">テキストサイズ base (1rem - デフォルト)</p>
      <p className="text-lg">テキストサイズ lg (1.125rem)</p>
      <p className="text-xl">テキストサイズ xl (1.25rem)</p>
      <p className="text-2xl">テキストサイズ 2xl (1.5rem)</p>
      <p className="text-3xl">テキストサイズ 3xl (1.875rem)</p>
      {/* ... 他のサイズも同様 */}
      <p className="text-9xl">9xl</p>
    </div>
  );
};

const ArbitrarySizeExample: React.FC = () => {
  return (
    <p className="text-[22px] leading-[30px]">任意の値: text-[22px] leading-[30px]</p>
    // 行の高さ (leading) も同時に指定することが多い
  );
};

// ページコンポーネント本体
const FontSizePage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Typography: Font Size ';
  const jaTitle = 'フォントサイズ';
  const links = [
    {
      title: 'Tailwind CSS: Font Size',
      url: 'https://tailwindcss.com/docs/font-size',
    },
    {
      title: 'MDN: font-size',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-size',
    },
  ];

  // コードスニペットを定義
  const textSizeHtml = `
<p class="text-xs ...">...</p>
<p class="text-sm ...">...</p>
<p class="text-base ...">...</p>
<p class="text-lg ...">...</p>
<p class="text-xl ...">...</p>
{/* ...up to 9xl */}
  `.trim();

  const arbitrarySizeHtml = `<p class="text-[22px] leading-[30px] ...">...</p>`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>
      <Helmet>
        <title>Font Size - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Font Size utility in Tailwind CSS. Examples and usage details for Font Size."
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
              テキストのフォントサイズを設定するためのユーティリティクラスです。Tailwind
              はデフォルトでタイポグラフィックスケールを提供しており、見出しや本文テキストなどのサイズを簡単に指定できます。
            </p>
            <p>
              CSS の <code>font-size</code> プロパティを制御します。多くの場合、同時に{' '}
              <code>line-height</code> (行の高さ) も設定されます。
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
              <code>text-{'{size}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>デフォルトで用意されているサイズ (一部):</p>
            <ul className="list-disc list-inside space-y-1 pl-4 columns-2">
              <li>
                <strong>
                  <code>text-xs</code>
                </strong>{' '}
                (0.75rem / 12px)
              </li>
              <li>
                <strong>
                  <code>text-sm</code>
                </strong>{' '}
                (0.875rem / 14px)
              </li>
              <li>
                <strong>
                  <code>text-base</code>
                </strong>{' '}
                (1rem / 16px - デフォルト)
              </li>
              <li>
                <strong>
                  <code>text-lg</code>
                </strong>{' '}
                (1.125rem / 18px)
              </li>
              <li>
                <strong>
                  <code>text-xl</code>
                </strong>{' '}
                (1.25rem / 20px)
              </li>
              <li>
                <strong>
                  <code>text-2xl</code>
                </strong>{' '}
                (1.5rem / 24px)
              </li>
              <li>
                <strong>
                  <code>text-3xl</code>
                </strong>{' '}
                (1.875rem / 30px)
              </li>
              <li>
                <strong>
                  <code>text-4xl</code>
                </strong>{' '}
                (2.25rem / 36px)
              </li>
              {/* ... */}
              <li>
                <strong>
                  <code>text-9xl</code>
                </strong>{' '}
                (8rem / 128px)
              </li>
            </ul>
            <p className="mt-4">
              各サイズクラスは、デフォルトで対応する行の高さ (<code>line-height</code>)
              も設定します。これは <code>tailwind.config.js</code> でカスタマイズ可能です。
            </p>
            <p>
              任意の値 (例: <code>text-[22px]</code>) も使用可能です (Tailwind JIT
              モード)。任意の値を使用する場合、行の高さは自動では設定されないため、必要に応じて{' '}
              <code>leading-*</code> ユーティリティで指定します。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なるフォントサイズユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* Standard Sizes */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準サイズ</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{textSizeHtml}</code>
              </pre>
              <FontSizeExample />
            </div>
            {/* Arbitrary Size */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitrarySizeHtml}</code>
              </pre>
              <ArbitrarySizeExample />
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
            を使って、画面サイズに応じてフォントサイズを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>text-lg md:text-2xl</code> はデフォルトで <code>lg</code>{' '}
              サイズ、中程度の画面サイズ以上で <code>2xl</code> サイズになります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<p class="text-lg md:text-2xl ...">
  Responsive Font Size
</p>
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
                デフォルトの <code>text-*</code> クラスは、フォントサイズとともに行の高さ (
                <code>line-height</code>)
                も設定します。これにより、異なるサイズのテキストが混在しても行間のリズムが保たれやすくなります。
              </li>
              <li>
                任意の値 (例: <code>text-[22px]</code>)
                を使用する場合、行の高さは自動設定されません。必要に応じて <code>leading-*</code>{' '}
                ユーティリティで明示的に指定してください。
              </li>
              <li>
                フォントサイズは通常、<code>rem</code> 単位で定義されます。これはルート要素 (
                <code>&lt;html&gt;</code>)
                のフォントサイズに基づいているため、ユーザーのブラウザ設定やアクセシビリティ設定に対応しやすくなります。
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
                <code>line-height</code> (<code>leading-*</code>): 行の高さを設定します。
              </li>
              <li>
                <code>font-family</code> (<code>font-*</code>): フォントファミリーを設定します。
              </li>
              <li>
                <code>font-weight</code> (<code>font-*</code>): フォントの太さを設定します。
              </li>
              <li>
                <code>letter-spacing</code> (<code>tracking-*</code>): 文字間隔を設定します。
              </li>
              <li>
                <code>text-align</code> (<code>text-*</code>):
                テキストの水平方向の揃えを設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default FontSizePage;

import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント

const LeadingExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <p className="leading-none text-lg">
        Leading None (1):<br /> 行間が詰まります。テキストが重なる可能性も。
      </p>
      <p className="leading-tight text-lg">
        Leading Tight (1.25):<br /> 少し詰まった行間。
      </p>
      <p className="leading-snug text-lg">
        Leading Snug (1.375):<br /> やや詰まった行間。
      </p>
      <p className="leading-normal text-lg">
        Leading Normal (1.5 - デフォルト):<br /> 標準的な行間。
      </p>
      <p className="leading-relaxed text-lg">
        Leading Relaxed (1.625):<br /> ややゆったりした行間。
      </p>
      <p className="leading-loose text-lg">
        Leading Loose (2):<br /> ゆったりした行間。
      </p>
       <p className="leading-3 text-lg">
        Leading 3 (0.75rem):<br /> 固定値 (rem)。
      </p>
       <p className="leading-10 text-lg">
        Leading 10 (2.5rem):<br /> 固定値 (rem)。
      </p>
    </div>
  );
};

const ArbitraryLeadingExample: React.FC = () => {
    return (
      <p className="leading-[3rem] text-lg">任意の値: leading-[3rem]</p>
    );
  };


// ページコンポーネント本体
const LineHeightPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Typography: Line Height (行の高さ)';
  const links = [
    {
      title: 'Tailwind CSS: Line Height',
      url: 'https://tailwindcss.com/docs/line-height',
    },
    {
      title: 'MDN: line-height',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/line-height',
    },
  ];

  // コードスニペットを定義
  const leadingRelativeHtml = `
<p class="leading-none ...">...</p> {/* 1 */}
<p class="leading-tight ...">...</p> {/* 1.25 */}
<p class="leading-snug ...">...</p> {/* 1.375 */}
<p class="leading-normal ...">...</p> {/* 1.5 */}
<p class="leading-relaxed ...">...</p> {/* 1.625 */}
<p class="leading-loose ...">...</p> {/* 2 */}
  `.trim();
  const leadingFixedHtml = `
<p class="leading-3 ...">...</p> {/* 0.75rem */}
<p class="leading-4 ...">...</p> {/* 1rem */}
{/* ...up to leading-10 (2.5rem) */}
  `.trim();
  const arbitraryLeadingHtml = `<p class="leading-[3rem] ...">...</p>`;


  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Line Height - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Line Height utility in Tailwind CSS. Examples and usage details for Line Height." />
        {/* OGP タグ */}
        <meta property="og:title" content="Line Height - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Line Height utility in Tailwind CSS. Examples and usage details for Line Height." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/typography/line-height" />
        {/* <meta property="og:image" content="[画像のURL]" /> */} {/* 必要に応じて画像URLを設定 */}
      </Helmet>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              テキストの行の高さを設定するためのユーティリティクラスです。行間 (leading) を調整し、テキストの読みやすさやデザインを制御します。
            </p>
            <p>
              CSS の <code>line-height</code> プロパティを制御します。
            </p>
            <p>
              Tailwind は、相対的な値 (単位なし、フォントサイズに対する倍率) と固定値 (rem 単位) の両方のユーティリティを提供します。
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
              <code>leading-{'{size}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>デフォルトで用意されているサイズ:</p>
            <ul className="list-disc list-inside space-y-1 pl-4 columns-2">
              <li><strong>相対値 (単位なし):</strong>
                <ul>
                  <li><code>leading-none</code> (1)</li>
                  <li><code>leading-tight</code> (1.25)</li>
                  <li><code>leading-snug</code> (1.375)</li>
                  <li><code>leading-normal</code> (1.5 - デフォルト)</li>
                  <li><code>leading-relaxed</code> (1.625)</li>
                  <li><code>leading-loose</code> (2)</li>
                </ul>
              </li>
              <li><strong>固定値 (rem):</strong>
                <ul>
                  <li><code>leading-3</code> (0.75rem / 12px)</li>
                  <li><code>leading-4</code> (1rem / 16px)</li>
                  <li><code>leading-5</code> (1.25rem / 20px)</li>
                  <li><code>leading-6</code> (1.5rem / 24px)</li>
                  <li><code>leading-7</code> (1.75rem / 28px)</li>
                  <li><code>leading-8</code> (2rem / 32px)</li>
                  <li><code>leading-9</code> (2.25rem / 36px)</li>
                  <li><code>leading-10</code> (2.5rem / 40px)</li>
                </ul>
              </li>
            </ul>
             <p className="mt-4">
              相対値は現在のフォントサイズに基づいて行の高さが決まります。固定値はフォントサイズに関係なく一定の行の高さを設定します。
            </p>
             <p>
              任意の値 (例: <code>leading-[3]</code>, <code>leading-[2em]</code>, <code>leading-[40px]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なる行の高さユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* Relative & Fixed Leading */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">相対値と固定値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{leadingRelativeHtml}</code> <br/>
                <code className="language-html">{leadingFixedHtml}</code>
              </pre>
              <LeadingExample />
            </div>
            {/* Arbitrary Leading */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryLeadingHtml}</code>
              </pre>
              <ArbitraryLeadingExample />
            </div>
          </div>
        </section>

        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて行の高さを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>leading-normal md:leading-loose</code> はデフォルトで通常の行間、中程度の画面サイズ以上でゆったりした行間になります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="leading-normal md:leading-loose ...">
  Responsive Line Height
</p>
              `.trim()}</code>
            </pre>
          </div>
        </section>

        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              注意点
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                相対的な行の高さ (<code>leading-none</code>, <code>leading-tight</code> など) は、フォントサイズに基づいて計算されるため、フォントサイズを変更すると実際の行の高さ (ピクセル単位) も変わります。
              </li>
              <li>
                固定値の行の高さ (<code>leading-3</code>, <code>leading-4</code> など) は、フォントサイズに関係なく一定の高さを保ちます。フォントサイズが非常に大きい場合、テキストが重なる可能性があります。
              </li>
               <li>
                Tailwind のデフォルトの <code>text-*</code> ユーティリティは、多くの場合、対応する <code>leading-*</code> も同時に設定します。<code>text-*</code> を使用した後に <code>leading-*</code> を指定すると、行の高さを上書きできます。
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
                <code>font-size</code> (<code>text-*</code>): フォントサイズを設定します。相対的な行の高さの基準となります。
              </li>
              <li>
                <code>vertical-align</code> (<code>align-*</code>): インライン要素やテーブルセル要素の垂直方向の揃えを制御します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default LineHeightPage;
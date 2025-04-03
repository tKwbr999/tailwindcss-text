import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント
// 注意: フォントがこれらの OpenType 機能をサポートしている必要があります。

const NormalNumsExample: React.FC = () => {
  return <p className="normal-nums text-2xl">0123456789 (Normal)</p>;
};

const OrdinalExample: React.FC = () => {
  return <p className="ordinal text-2xl">1st 2nd 3rd 4th (Ordinal)</p>;
};

const SlashedZeroExample: React.FC = () => {
  return <p className="slashed-zero text-2xl font-mono">0O (Slashed Zero)</p>; // 等幅フォントで違いが分かりやすい
};

const LiningNumsExample: React.FC = () => {
  return <p className="lining-nums text-2xl">0123456789 (Lining)</p>; // すべてベースラインに揃う
};

const OldstyleNumsExample: React.FC = () => {
  return <p className="oldstyle-nums text-2xl">0123456789 (Oldstyle)</p>; // ベースラインから上下にはみ出す数字がある
};

const ProportionalNumsExample: React.FC = () => {
  return <p className="proportional-nums text-2xl font-mono">11111 vs 99999 (Proportional)</p>; // 各数字が固有の幅を持つ
};

const TabularNumsExample: React.FC = () => {
  return <p className="tabular-nums text-2xl font-mono">11111 vs 99999 (Tabular)</p>; // すべての数字が同じ幅を持つ
};

const DiagonalFractionsExample: React.FC = () => {
  return <p className="diagonal-fractions text-2xl">1/2 3/4 5/8 (Diagonal)</p>;
};

const StackedFractionsExample: React.FC = () => {
  return <p className="stacked-fractions text-2xl">1/2 3/4 5/8 (Stacked)</p>;
};


// ページコンポーネント本体
const FontVariantNumericPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Typography: Font Variant Numeric (数字・分数の字形)';
  const links = [
    {
      title: 'Tailwind CSS: Font Variant Numeric',
      url: 'https://tailwindcss.com/docs/font-variant-numeric',
    },
    {
      title: 'MDN: font-variant-numeric',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric',
    },
  ];

  // コードスニペットを定義 (代表例)
  const ordinalHtml = `<p class="ordinal ...">1st</p>`;
  const slashedZeroHtml = `<p class="slashed-zero font-mono ...">0</p>`;
  const tabularNumsHtml = `<p class="tabular-nums font-mono ...">12345</p>`;
  const diagonalFractionsHtml = `<p class="diagonal-fractions ...">1/2</p>`;


  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Font Variant Numeric - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Font Variant Numeric utility in Tailwind CSS. Examples and usage details for Font Variant Numeric." />
        {/* OGP タグ */}
        <meta property="og:title" content="Font Variant Numeric - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Font Variant Numeric utility in Tailwind CSS. Examples and usage details for Font Variant Numeric." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/typography/font-variant-numeric" />
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
              数字、分数、序数マーカーなどの表示に使用される OpenType フォント機能を制御するためのユーティリティクラスです。これにより、フォントがサポートしていれば、特定の字形 (グリフ) を有効にできます。
            </p>
            <p>
              CSS の <code>font-variant-numeric</code> プロパティ、および関連する OpenType 機能タグ (例: <code>ordn</code>, <code>zero</code>, <code>lnum</code>, <code>onum</code>, <code>pnum</code>, <code>tnum</code>, <code>frac</code>, <code>afrc</code>) を制御します。
            </p>
             <p className="text-sm text-orange-700 dark:text-orange-400">
              <strong>注意:</strong> これらのクラスの効果は、使用しているフォントが対応する OpenType 機能をサポートしている場合にのみ現れます。すべてのフォントがすべての機能をサポートしているわけではありません。
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
              以下のクラスをテキストを含む要素または親要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4 columns-2">
              <li><strong><code>normal-nums</code></strong>: すべての数値をデフォルトのスタイルに戻します。</li>
              <li><strong><code>ordinal</code></strong>: 序数マーカー (例: 1st, 2nd) に特別なグリフを使用します。</li>
              <li><strong><code>slashed-zero</code></strong>: 数字のゼロ (0) に斜線が入ったグリフを使用します (大文字の O との区別のため)。</li>
              <li><strong><code>lining-nums</code></strong>: すべての数字がベースライン上に揃うグリフ (ライニング数字) を使用します。</li>
              <li><strong><code>oldstyle-nums</code></strong>: テキスト中に自然に溶け込むように、一部の数字がベースラインから上下にはみ出すグリフ (オールドスタイル数字) を使用します。</li>
              <li><strong><code>proportional-nums</code></strong>: 各数字が固有の幅を持つグリフ (プロポーショナル数字) を使用します。</li>
              <li><strong><code>tabular-nums</code></strong>: すべての数字が同じ幅を持つグリフ (テーブル数字) を使用します。数値データを整列させるのに便利です。</li>
              <li><strong><code>diagonal-fractions</code></strong>: 分数 (例: 1/2) を斜線で区切られた小さなグリフで表示します。</li>
              <li><strong><code>stacked-fractions</code></strong>: 分数 (例: ½) を上下に積み重ねられた小さなグリフで表示します。</li>
            </ul>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なる font-variant-numeric ユーティリティの適用例。フォントによっては効果が見られない場合があります。
          </p>
          <div className="space-y-6">
            {/* Normal Nums */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">normal-nums</h3>
              <NormalNumsExample />
            </div>
            {/* Ordinal */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">ordinal</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{ordinalHtml}</code>
              </pre>
              <OrdinalExample />
            </div>
             {/* Slashed Zero */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">slashed-zero</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{slashedZeroHtml}</code>
              </pre>
              <SlashedZeroExample />
            </div>
             {/* Lining Nums */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">lining-nums</h3>
              <LiningNumsExample />
            </div>
             {/* Oldstyle Nums */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">oldstyle-nums</h3>
              <OldstyleNumsExample />
            </div>
             {/* Proportional Nums */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">proportional-nums</h3>
              <ProportionalNumsExample />
            </div>
             {/* Tabular Nums */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">tabular-nums</h3>
               <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{tabularNumsHtml}</code>
              </pre>
              <TabularNumsExample />
            </div>
             {/* Diagonal Fractions */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">diagonal-fractions</h3>
               <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{diagonalFractionsHtml}</code>
              </pre>
              <DiagonalFractionsExample />
            </div>
             {/* Stacked Fractions */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">stacked-fractions</h3>
              <StackedFractionsExample />
            </div>
          </div>
        </section>

        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみこれらの機能を有効にすることは通常ありませんが、技術的には可能です。
          </p>
          <div>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="tabular-nums md:proportional-nums ...">
  1111 / 9999
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
                <strong>フォントのサポートが必須:</strong> これらのクラスが効果を発揮するかどうかは、使用しているフォントが対応する OpenType 機能を持っているかに完全に依存します。
              </li>
              <li>
                複数の機能を同時に有効にすることも可能ですが (例: <code>tabular-nums slashed-zero</code>)、フォントがその組み合わせをサポートしている必要があります。
              </li>
               <li>
                <code>normal-nums</code> は、親要素から継承された特定の数値バリアントをリセットするために使用します。
              </li>
               <li>
                ブラウザや OS によって OpenType 機能のサポート状況やレンダリングが異なる場合があります。
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
                <code>font-family</code> (<code>font-*</code>): 使用するフォントファミリーを選択します。これが機能の利用可能性に影響します。
              </li>
              <li>
                <code>font-variant-ligatures</code> (<code>normal-ligatures</code>, <code>no-ligatures</code> など): 合字 (リガチャ) などの他の OpenType 機能を制御します。
              </li>
               <li>
                <code>font-variant-caps</code> (<code>small-caps</code>, <code>all-small-caps</code> など): 大文字・小文字の字形に関する OpenType 機能を制御します。
              </li>
               <li>
                <code>font-variant-alternates</code> (<code>historical-forms</code> など): 代替字形に関する OpenType 機能を制御します (Tailwind コアには含まれていない場合あり)。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default FontVariantNumericPage;
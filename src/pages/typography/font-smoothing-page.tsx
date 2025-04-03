import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント

const AntialiasedExample: React.FC = () => {
  return (
    <p className="antialiased text-lg text-gray-800 dark:text-gray-200">
      Antialiased: 滑らかなフォント表示 (通常 macOS/iOS で効果あり)。
    </p>
  );
};

const SubpixelAntialiasedExample: React.FC = () => {
  return (
    <p className="subpixel-antialiased text-lg text-gray-800 dark:text-gray-200">
      Subpixel Antialiased: よりシャープなフォント表示 (通常 macOS/iOS 以外、または低解像度ディスプレイで効果あり)。
    </p>
  );
};


// ページコンポーネント本体
const FontSmoothingPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Typography: Font Smoothing (フォントスムージング)';
  const links = [
    {
      title: 'Tailwind CSS: Font Smoothing',
      url: 'https://tailwindcss.com/docs/font-smoothing',
    },
    {
      title: 'MDN: font-smooth (関連する標準プロパティ)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth',
    },
    {
      title: 'MDN: -webkit-font-smoothing (非標準)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-font-smoothing',
    },
    {
      title: 'MDN: -moz-osx-font-smoothing (非標準, macOS のみ)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-osx-font-smoothing',
    },
  ];

  // コードスニペットを定義
  const antialiasedHtml = `<p class="antialiased ...">...</p>`;
  const subpixelHtml = `<p class="subpixel-antialiased ...">...</p>`;


  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Font Smoothing - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Font Smoothing utility in Tailwind CSS. Examples and usage details for Font Smoothing." />
        {/* OGP タグ */}
        <meta property="og:title" content="Font Smoothing - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Font Smoothing utility in Tailwind CSS. Examples and usage details for Font Smoothing." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/typography/font-smoothing" />
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
              テキストのレンダリング時にアンチエイリアス (スムージング) を適用するかどうか、またその方法を制御するためのユーティリティクラスです。主に macOS や iOS でのフォント表示の微調整に使用されます。
            </p>
            <p>
              CSS の非標準プロパティである <code>-webkit-font-smoothing</code> と <code>-moz-osx-font-smoothing</code> を制御します。
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
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>antialiased</code></strong>: フォントを滑らかに表示します (<code>-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;</code>)。macOS/iOS でより細い表示になることがあります。</li>
              <li><strong><code>subpixel-antialiased</code></strong>: サブピクセルレンダリングを使用してフォントを表示します (<code>-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;</code>)。通常はこちらがデフォルトの挙動ですが、明示的に指定することで <code>antialiased</code> の効果を打ち消します。</li>
            </ul>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              フォントスムージングユーティリティの適用例。効果は OS やブラウザによって異なります。
          </p>
          <div className="space-y-6">
            {/* Antialiased */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">antialiased</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{antialiasedHtml}</code>
              </pre>
              <AntialiasedExample />
            </div>
            {/* Subpixel Antialiased */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">subpixel-antialiased</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{subpixelHtml}</code>
              </pre>
              <SubpixelAntialiasedExample />
            </div>
          </div>
        </section>

        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみフォントスムージングを変更することは通常ありませんが、技術的には可能です。
          </p>
          <div>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="subpixel-antialiased md:antialiased ...">
  Responsive Font Smoothing (Uncommon)
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
                これらのクラスの効果は、ユーザーのオペレーティングシステム、ブラウザ、およびディスプレイ設定に大きく依存します。特に macOS/iOS 以外の環境では、<code>antialiased</code> と <code>subpixel-antialiased</code> の間に顕著な視覚的差異が見られない場合があります。
              </li>
              <li>
                <code>-webkit-font-smoothing</code> と <code>-moz-osx-font-smoothing</code> は標準的な CSS プロパティではありません。将来的にブラウザの挙動が変わる可能性があります。
              </li>
               <li>
                一般的に、<code>antialiased</code> は細い線で滑らかな表示を、<code>subpixel-antialiased</code> はよりシャープで太い表示を提供することを目指しています。デザイン上の好みに応じて選択します。
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
                <code>font-family</code> (<code>font-*</code>): フォントファミリーを設定します。
              </li>
              <li>
                <code>font-size</code> (<code>text-*</code>): フォントサイズを設定します。
              </li>
              <li>
                <code>font-weight</code> (<code>font-*</code>): フォントの太さを設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default FontSmoothingPage;
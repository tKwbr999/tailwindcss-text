import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント

const ItalicExample: React.FC = () => {
  return (
    <p className="italic text-lg text-gray-800 dark:text-gray-200">
      これはイタリック体です (italic)。
    </p>
  );
};

const NotItalicExample: React.FC = () => {
  return (
    <p className="not-italic text-lg text-gray-800 dark:text-gray-200">
      これは通常のスタイルです (not-italic)。イタリックが継承されている場合に打ち消します。
    </p>
  );
};


// ページコンポーネント本体
const FontStylePage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Typography: Font Style (フォントスタイル)';
  const links = [
    {
      title: 'Tailwind CSS: Font Style',
      url: 'https://tailwindcss.com/docs/font-style',
    },
    {
      title: 'MDN: font-style',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-style',
    },
  ];

  // コードスニペットを定義
  const italicHtml = `<p class="italic ...">...</p>`;
  const notItalicHtml = `<p class="not-italic ...">...</p>`;


  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Font Style - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Font Style utility in Tailwind CSS. Examples and usage details for Font Style." />
      </Helmet>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              テキストをイタリック体で表示するか、通常のスタイルで表示するかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>font-style</code> プロパティを制御します。
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
              <li><strong><code>italic</code></strong>: テキストをイタリック体で表示します (<code>font-style: italic;</code>)。</li>
              <li><strong><code>not-italic</code></strong>: テキストを通常のスタイルで表示します (<code>font-style: normal;</code>)。これは、親要素からイタリック体が継承されている場合に、それを打ち消すために使用します。</li>
            </ul>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              フォントスタイルユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* Italic */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">italic</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{italicHtml}</code>
              </pre>
              <ItalicExample />
            </div>
            {/* Not Italic */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">not-italic</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{notItalicHtml}</code>
              </pre>
              <div className="italic text-gray-500 dark:text-gray-400"> {/* 親でイタリックを適用 */}
                <NotItalicExample />
              </div>
            </div>
          </div>
        </section>

        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみフォントスタイルを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>not-italic md:italic</code> はデフォルトで通常スタイル、中程度の画面サイズ以上でイタリック体になります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="not-italic md:italic ...">
  Responsive Font Style
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
                多くのフォントには専用のイタリック体 (またはオブリーク体) が含まれています。フォントがイタリック体をサポートしていない場合、ブラウザは通常のフォントを傾けて表示しようとすることがあります (faux italic)。
              </li>
              <li>
                <code>not-italic</code> は、主に親要素から継承された <code>italic</code> スタイルをリセットするために使用されます。
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

export default FontStylePage;
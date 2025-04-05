import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント

const IndentExample: React.FC = () => {
  return (
    <div className="space-y-2">
      <p className="indent-px text-gray-800 dark:text-gray-200">
        Indent px (1px): 段落の最初の行が 1px インデントされます。Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p className="indent-4 text-gray-800 dark:text-gray-200">
        Indent 4 (1rem): 段落の最初の行が 1rem インデントされます。Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="indent-8 text-gray-800 dark:text-gray-200">
        Indent 8 (2rem): 段落の最初の行が 2rem インデントされます。Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  );
};

const NegativeIndentExample: React.FC = () => {
    return (
      <p className="-indent-4 text-gray-800 dark:text-gray-200">
        Negative Indent (-1rem): 段落の最初の行が左にはみ出すようにインデントされます (ハンギングインデント)。Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    );
  };

const ArbitraryIndentExample: React.FC = () => {
    return (
      <p className="indent-[3em] text-gray-800 dark:text-gray-200">
        任意の値: indent-[3em]: 最初の行が 3em インデントされます。Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    );
  };


// ページコンポーネント本体
const TextIndentPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Typography: Text Indent ';
const jaTitle = 'テキストインデント';
  const links = [
    {
      title: 'Tailwind CSS: Text Indent',
      url: 'https://tailwindcss.com/docs/text-indent',
    },
    {
      title: 'MDN: text-indent',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent',
    },
  ];

  // コードスニペットを定義
  const indentHtml = `
<p class="indent-4 ...">...</p> {/* 1rem indent */}
<p class="indent-8 ...">...</p> {/* 2rem indent */}
  `.trim();
  const negativeIndentHtml = `<p class="-indent-4 ...">...</p>`; // Hanging indent
  const arbitraryIndentHtml = `<p class="indent-[3em] ...">...</p>`;


  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Text Indent - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Text Indent utility in Tailwind CSS. Examples and usage details for Text Indent." />
      </Helmet>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              ブロックレベル要素 (通常は段落 <code>&lt;p&gt;</code>) の最初の行のテキストのインデント (字下げ) を設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>text-indent</code> プロパティを制御します。
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
              <code>indent-{'{size}'}</code> の形式でクラスをブロックレベル要素に適用します。
            </p>
            <p><code>{'{size}'}</code> には、Tailwind のデフォルトのスペーシングスケール (例: <code>px</code>, <code>0.5</code>, <code>1</code>, ..., <code>96</code>) を使用できます。</p>
             <p className="mt-4">
              任意の値 (例: <code>indent-[3em]</code>, <code>indent-[5%]</code>) や負の値 (例: <code>-indent-4</code>) も使用可能です (Tailwind JIT モード)。負の値を使用するとハンギングインデント (最初の行が左にはみ出す) を作成できます。
            </p>
             <p>
              デフォルトでは <code>indent-0</code> (インデントなし) が適用されます。
            </p>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なるテキストインデントユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* Standard Indent */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準インデント</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{indentHtml}</code>
              </pre>
              <IndentExample />
            </div>
            {/* Negative Indent */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">負のインデント</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{negativeIndentHtml}</code>
              </pre>
              <NegativeIndentExample />
            </div>
             {/* Arbitrary Indent */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryIndentHtml}</code>
              </pre>
              <ArbitraryIndentExample />
            </div>
          </div>
        </section>

        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてテキストインデントを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>indent-4 md:indent-8</code> はデフォルトで <code>1rem</code>、中程度の画面サイズ以上で <code>2rem</code> のインデントを設定します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="indent-4 md:indent-8 ...">
  Responsive text indent...
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
                <code>text-indent</code> はブロックレベルコンテナの最初の整形された行にのみ影響します。
              </li>
              <li>
                インデントの量は、現在のフォントサイズやコンテナの幅に対する割合 (<code>em</code> や <code>%</code> を使用した場合) に依存することがあります。
              </li>
               <li>
                負のインデントを使用する場合、テキストが親要素の境界からはみ出す可能性があるため、レイアウトに注意が必要です。
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
                <code>padding</code> (<code>pl-*</code>, <code>ps-*</code>): 要素全体の左側 (または開始側) にパディングを追加します。インデントとは異なり、すべての行に影響します。
              </li>
              <li>
                <code>margin</code> (<code>ml-*</code>, <code>ms-*</code>): 要素全体の左側 (または開始側) にマージンを追加します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default TextIndentPage;
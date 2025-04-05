import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント

const UppercaseExample: React.FC = () => {
  return (
    <p className="uppercase text-lg text-gray-800 dark:text-gray-200">
      Uppercase: all letters are capitalized.
    </p>
  );
};

const LowercaseExample: React.FC = () => {
  return (
    <p className="lowercase text-lg text-gray-800 dark:text-gray-200">
      Lowercase: ALL LETTERS ARE LOWERCASED.
    </p>
  );
};

const CapitalizeExample: React.FC = () => {
    return (
      <p className="capitalize text-lg text-gray-800 dark:text-gray-200">
        capitalize: the first letter of each word is capitalized.
      </p>
    );
  };

const NormalCaseExample: React.FC = () => {
    return (
      <p className="uppercase"> {/* 親で大文字に */}
        This text is initially uppercase, but
        <span className="normal-case bg-yellow-200 dark:bg-yellow-800 px-1"> this part is normal case</span>.
      </p>
    );
  };


// ページコンポーネント本体
const TextTransformPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Typography: Text Transform ';
const jaTitle = 'テキスト変換';
  const links = [
    {
      title: 'Tailwind CSS: Text Transform',
      url: 'https://tailwindcss.com/docs/text-transform',
    },
    {
      title: 'MDN: text-transform',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform',
    },
  ];

  // コードスニペットを定義
  const uppercaseHtml = `<p class="uppercase ...">...</p>`;
  const lowercaseHtml = `<p class="lowercase ...">...</p>`;
  const capitalizeHtml = `<p class="capitalize ...">...</p>`;
  const normalCaseHtml = `<p class="normal-case ...">...</p>`;


  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Text Transform - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Text Transform utility in Tailwind CSS. Examples and usage details for Text Transform." />
      </Helmet>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              テキストの大文字と小文字の変換を制御するためのユーティリティクラスです。テキスト全体を大文字や小文字にしたり、各単語の先頭文字を大文字にしたりできます。
            </p>
            <p>
              CSS の <code>text-transform</code> プロパティを制御します。
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
              <li><strong><code>uppercase</code></strong>: テキスト全体を大文字に変換します (<code>text-transform: uppercase;</code>)。</li>
              <li><strong><code>lowercase</code></strong>: テキスト全体を小文字に変換します (<code>text-transform: lowercase;</code>)。</li>
              <li><strong><code>capitalize</code></strong>: 各単語の先頭文字を大文字に変換します (<code>text-transform: capitalize;</code>)。</li>
              <li><strong><code>normal-case</code></strong>: テキストの変換を行いません (<code>text-transform: none;</code>)。親要素から継承された変換を打ち消すために使用します。これがデフォルトの挙動です。</li>
            </ul>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なるテキスト変換ユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* Uppercase */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">uppercase</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{uppercaseHtml}</code>
              </pre>
              <UppercaseExample />
            </div>
            {/* Lowercase */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">lowercase</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{lowercaseHtml}</code>
              </pre>
              <LowercaseExample />
            </div>
             {/* Capitalize */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">capitalize</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{capitalizeHtml}</code>
              </pre>
              <CapitalizeExample />
            </div>
             {/* Normal Case */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">normal-case</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{normalCaseHtml}</code>
              </pre>
              <NormalCaseExample />
            </div>
          </div>
        </section>

        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイント (<code>md:uppercase</code> など) や状態 (<code>hover:uppercase</code> など) に応じてテキスト変換を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ボタンのテキストをホバー時に大文字にすることができます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<button class="normal-case hover:uppercase ...">
  Submit
</button>
              `.trim()}</code>
            </pre>
             <button className="normal-case hover:uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
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
                <code>text-transform</code> は視覚的な表示のみを変更し、実際のテキストコンテンツ (DOM 内のテキスト) は変更しません。
              </li>
              <li>
                <code>capitalize</code> の挙動は、言語やブラウザによって単語の区切り方の解釈が異なる場合があり、必ずしも期待通りに動作するとは限りません。
              </li>
               <li>
                <code>normal-case</code> は、主に親要素から継承された変換スタイル (例: <code>uppercase</code>) をリセットするために使用されます。
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
                <code>font-variant-caps</code> (<code>small-caps</code> など): スモールキャップなどの OpenType 機能を使用して大文字小文字の表示を制御します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default TextTransformPage;
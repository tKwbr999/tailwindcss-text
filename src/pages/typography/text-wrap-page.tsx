import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント
// 注意: text-wrap, text-balance は比較的新しい CSS 機能です。

const TextWrapExample: React.FC = () => {
  return (
    <div className="w-48 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
      <p className="text-wrap text-gray-800 dark:text-gray-200">
        Text Wrap (デフォルト): テキストはコンテナの幅に合わせて通常通り折り返します。Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
};

const TextNowrapExample: React.FC = () => {
  return (
    <div className="w-48 overflow-x-auto bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300"> {/* overflow で確認 */}
      <p className="text-nowrap text-gray-800 dark:text-gray-200">
        Text Nowrap: テキストは折り返さず、一行で表示されます。コンテナからはみ出す可能性があります。Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

const TextBalanceExample: React.FC = () => {
    // 注意: text-balance の効果は微妙であり、ブラウザの実装に依存します。
    //       短い見出しなどで、行ごとの文字数を均等にしようとします。
    return (
      <div className="w-48 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
        <p className="text-balance text-lg font-semibold text-gray-800 dark:text-gray-200">
          Text Balance Example Title (Longer)
        </p>
         <p className="text-wrap text-sm text-gray-600 dark:text-gray-400 mt-2">
          (vs Normal Wrap) Text Balance Example Title (Longer)
        </p>
      </div>
    );
  };


// ページコンポーネント本体
const TextWrapPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Typography: Text Wrap (テキスト折り返し)';
  const links = [
    {
      title: 'Tailwind CSS: Text Wrap (v3.3+)',
      url: 'https://tailwindcss.com/docs/text-wrap',
    },
    {
      title: 'MDN: text-wrap',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap',
    },
     {
      title: 'Tailwind CSS: Whitespace (関連)',
      url: 'https://tailwindcss.com/docs/whitespace',
    },
  ];

  // コードスニペットを定義
  const textWrapHtml = `<p class="text-wrap ...">...</p>`; // Default
  const textNowrapHtml = `<p class="text-nowrap ...">...</p>`;
  const textBalanceHtml = `<p class="text-balance ...">...</p>`; // v3.3+


  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Text Wrap - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Text Wrap utility in Tailwind CSS. Examples and usage details for Text Wrap." />
      </Helmet>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              テキストがコンテナの境界に達したときに、どのように折り返すかを制御するためのユーティリティクラスです。通常の折り返し、折り返しなし、または行間の文字数を均等にするバランス調整などを指定できます。
            </p>
            <p>
              CSS の <code>text-wrap</code> プロパティ (および古い <code>white-space: nowrap;</code>) を制御します。<strong><code>text-wrap</code> と <code>text-balance</code> は Tailwind CSS v3.3 で追加された比較的新しい機能です。</strong>
            </p>
          </div>
        </section>

        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              基本的な使い方とパラメータ (text-wrap, text-balance は v3.3+)
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              (text-wrap, text-balance は v3.3+)
          </p>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              以下のクラスをテキストを含む要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>text-wrap</code></strong> (<code>text-wrap: wrap;</code>): デフォルト。テキストは通常通り、必要に応じて折り返します。</li>
              <li><strong><code>text-nowrap</code></strong> (<code>text-wrap: nowrap;</code> または古いブラウザ向けに <code>white-space: nowrap;</code>): テキストは折り返さず、一行で表示されます。コンテナからはみ出す可能性があります。</li>
              <li><strong><code>text-balance</code></strong> (<code>text-wrap: balance;</code>): ブラウザが行間の文字数を均等にしようと試みます。短い複数行の見出しなどで、よりバランスの取れた見た目になります。効果はブラウザの実装に依存し、常に保証されるわけではありません。</li>
            </ul>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なるテキスト折り返しユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* Wrap */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">text-wrap (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{textWrapHtml}</code>
              </pre>
              <TextWrapExample />
            </div>
            {/* Nowrap */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">text-nowrap</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{textNowrapHtml}</code>
              </pre>
              <TextNowrapExample />
            </div>
             {/* Balance */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">text-balance (v3.3+)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{textBalanceHtml}</code>
              </pre>
              <TextBalanceExample />
            </div>
          </div>
        </section>

        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてテキストの折り返し挙動を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>text-nowrap md:text-wrap</code> は小さい画面では折り返さず、中程度の画面サイズ以上で折り返すようにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="text-nowrap md:text-wrap ...">
  This text won't wrap on small screens, but will wrap on medium screens and larger.
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
                <code>text-wrap</code> と <code>text-balance</code> は比較的新しい CSS プロパティであり、Tailwind CSS v3.3 で追加されました。古いブラウザではサポートされていない可能性があります。
              </li>
              <li>
                <code>text-nowrap</code> は、内部的に <code>text-wrap: nowrap;</code> を設定しますが、古いブラウザとの互換性のために <code>white-space: nowrap;</code> も設定される場合があります。
              </li>
               <li>
                <code>text-balance</code> の効果は、特に短いテキスト (見出しなど、通常6行以下) で顕著であり、ブラウザの実装に依存します。常に完璧なバランスが保証されるわけではありません。
              </li>
               <li>
                <code>text-nowrap</code> を使用すると、テキストがコンテナからはみ出す可能性があるため、<code>overflow-hidden</code> や <code>overflow-x-auto</code> と組み合わせて使用することがあります。
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
                <code>whitespace</code> (<code>whitespace-nowrap</code>, <code>whitespace-normal</code> など): テキストの折り返しやスペースの扱いを制御します。<code>text-nowrap</code> は <code>whitespace-nowrap</code> と関連があります。
              </li>
              <li>
                <code>overflow</code> (<code>overflow-hidden</code>, <code>overflow-x-auto</code> など): コンテンツのはみ出しを制御します。
              </li>
              <li>
                <code>word-break</code> (<code>break-all</code>, <code>break-words</code>): 単語の途中での改行を制御します。
              </li>
               <li>
                <code>hyphens</code> (<code>hyphens-auto</code>, <code>hyphens-manual</code>): ハイフネーション (単語の分割) を制御します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default TextWrapPage;
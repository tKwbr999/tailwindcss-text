import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント

const DecorationSolidExample: React.FC = () => {
  return (
    <p className="underline decoration-solid text-lg text-gray-800 dark:text-gray-200">
      Decoration Solid (デフォルト): 実線の下線。
    </p>
  );
};

const DecorationDoubleExample: React.FC = () => {
  return (
    <p className="underline decoration-double text-lg text-gray-800 dark:text-gray-200">
      Decoration Double: 二重線の下線。
    </p>
  );
};

const DecorationDottedExample: React.FC = () => {
    return (
      <p className="underline decoration-dotted text-lg text-gray-800 dark:text-gray-200">
        Decoration Dotted: 点線の下線。
      </p>
    );
  };

const DecorationDashedExample: React.FC = () => {
    return (
      <p className="underline decoration-dashed text-lg text-gray-800 dark:text-gray-200">
        Decoration Dashed: 破線の下線。
      </p>
    );
  };

const DecorationWavyExample: React.FC = () => {
    return (
      <p className="underline decoration-wavy text-lg text-gray-800 dark:text-gray-200">
        Decoration Wavy: 波線の下線。
      </p>
    );
  };


// ページコンポーネント本体
const TextDecorationStylePage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Typography: Text Decoration Style (テキスト装飾線のスタイル)';
  const links = [
    {
      title: 'Tailwind CSS: Text Decoration Style',
      url: 'https://tailwindcss.com/docs/text-decoration-style',
    },
    {
      title: 'MDN: text-decoration-style',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style',
    },
  ];

  // コードスニペットを定義
  const decorationSolidHtml = `<p class="underline decoration-solid ...">...</p>`; // Default
  const decorationDoubleHtml = `<p class="underline decoration-double ...">...</p>`;
  const decorationDottedHtml = `<p class="underline decoration-dotted ...">...</p>`;
  const decorationDashedHtml = `<p class="underline decoration-dashed ...">...</p>`;
  const decorationWavyHtml = `<p class="underline decoration-wavy ...">...</p>`;


  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Text Decoration Style - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Text Decoration Style utility in Tailwind CSS. Examples and usage details for Text Decoration Style." />
        {/* OGP タグ */}
        <meta property="og:title" content="Text Decoration Style - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Text Decoration Style utility in Tailwind CSS. Examples and usage details for Text Decoration Style." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/typography/text-decoration-style" />
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
              テキストに追加された装飾線 (下線、上線、取り消し線) のスタイル (実線、二重線、点線など) を設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>text-decoration-style</code> プロパティを制御します。
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
              <code>decoration-{'{style}'}</code> の形式でクラスを要素に適用します。通常、<code>underline</code>, <code>overline</code>, <code>line-through</code> のいずれかと一緒に使用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>decoration-solid</code></strong>: 実線 (デフォルト)。</li>
              <li><strong><code>decoration-double</code></strong>: 二重線。</li>
              <li><strong><code>decoration-dotted</code></strong>: 点線。</li>
              <li><strong><code>decoration-dashed</code></strong>: 破線。</li>
              <li><strong><code>decoration-wavy</code></strong>: 波線。</li>
            </ul>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なるテキスト装飾線スタイルの適用例。
          </p>
          <div className="space-y-6">
            {/* Solid */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">decoration-solid (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{decorationSolidHtml}</code>
              </pre>
              <DecorationSolidExample />
            </div>
            {/* Double */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">decoration-double</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{decorationDoubleHtml}</code>
              </pre>
              <DecorationDoubleExample />
            </div>
             {/* Dotted */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">decoration-dotted</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{decorationDottedHtml}</code>
              </pre>
              <DecorationDottedExample />
            </div>
             {/* Dashed */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">decoration-dashed</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{decorationDashedHtml}</code>
              </pre>
              <DecorationDashedExample />
            </div>
             {/* Wavy */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">decoration-wavy</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{decorationWavyHtml}</code>
              </pre>
              <DecorationWavyExample />
            </div>
          </div>
        </section>

        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイント (<code>md:decoration-dotted</code> など) や状態 (<code>hover:decoration-wavy</code> など) に応じて装飾線のスタイルを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時に下線のスタイルを波線に変更できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<a href="#" class="underline decoration-solid hover:decoration-wavy ...">
  Hover for wavy underline
</a>
              `.trim()}</code>
            </pre>
             <a href="#" className="underline decoration-solid hover:decoration-wavy text-blue-600 dark:text-blue-400">
              Hover for wavy underline
            </a>
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
                装飾線のスタイルを変更するには、まず <code>underline</code>, <code>overline</code>, <code>line-through</code> のいずれかで装飾線自体を適用する必要があります。
              </li>
              <li>
                ブラウザによっては、特に <code>decoration-double</code> や <code>decoration-wavy</code> のレンダリングに若干の違いが見られる場合があります。
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
                <code>text-decoration</code> (<code>underline</code>, <code>overline</code>, <code>line-through</code>, <code>no-underline</code>): 装飾線の種類を設定します。
              </li>
              <li>
                <code>text-decoration-color</code> (<code>decoration-*</code>): 装飾線の色を設定します。
              </li>
              <li>
                <code>text-decoration-thickness</code> (<code>decoration-*</code>): 装飾線の太さを設定します。
              </li>
               <li>
                <code>text-underline-offset</code> (<code>underline-offset-*</code>): 下線のテキストからのオフセット距離を設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default TextDecorationStylePage;
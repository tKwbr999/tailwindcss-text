import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント

const DecorationThicknessExample: React.FC = () => {
  return (
    <div className="space-y-2">
      <p className="underline decoration-auto text-lg">Decoration Auto (デフォルト)</p>
      <p className="underline decoration-from-font text-lg">Decoration From Font</p>
      <p className="underline decoration-0 text-lg">Decoration 0</p>
      <p className="underline decoration-1 text-lg">Decoration 1</p>
      <p className="underline decoration-2 text-lg">Decoration 2</p>
      <p className="underline decoration-4 text-lg">Decoration 4</p>
      <p className="underline decoration-8 text-lg">Decoration 8</p>
    </div>
  );
};

const ArbitraryThicknessExample: React.FC = () => {
    return (
      <p className="underline decoration-[3px] text-lg">任意の値: decoration-[3px]</p>
    );
  };


// ページコンポーネント本体
const TextDecorationThicknessPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Typography: Text Decoration Thickness (テキスト装飾線の太さ)';
  const links = [
    {
      title: 'Tailwind CSS: Text Decoration Thickness',
      url: 'https://tailwindcss.com/docs/text-decoration-thickness',
    },
    {
      title: 'MDN: text-decoration-thickness',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness',
    },
  ];

  // コードスニペットを定義
  const decorationThicknessHtml = `
<p class="underline decoration-auto ...">...</p> {/* Default */}
<p class="underline decoration-from-font ...">...</p>
<p class="underline decoration-0 ...">...</p>
<p class="underline decoration-1 ...">...</p>
<p class="underline decoration-2 ...">...</p>
<p class="underline decoration-4 ...">...</p>
<p class="underline decoration-8 ...">...</p>
  `.trim();
  const arbitraryThicknessHtml = `<p class="underline decoration-[3px] ...">...</p>`;


  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Text Decoration Thickness - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Text Decoration Thickness utility in Tailwind CSS. Examples and usage details for Text Decoration Thickness." />
        {/* OGP タグ */}
        <meta property="og:title" content="Text Decoration Thickness - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Text Decoration Thickness utility in Tailwind CSS. Examples and usage details for Text Decoration Thickness." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/typography/text-decoration-thickness" />
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
              テキストに追加された装飾線 (下線、上線、取り消し線) の太さを設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>text-decoration-thickness</code> プロパティを制御します。
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
              <code>decoration-{'{thickness}'}</code> の形式でクラスを要素に適用します。通常、<code>underline</code>, <code>overline</code>, <code>line-through</code> のいずれかと一緒に使用します。
            </p>
            <p>デフォルトで用意されている太さ:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>decoration-auto</code></strong>: デフォルト。ブラウザが適切な太さを決定します。</li>
              <li><strong><code>decoration-from-font</code></strong>: フォントファイルに推奨される太さがあればそれを使用します。サポートされていない場合は <code>auto</code> と同様の挙動になります。</li>
              <li><strong><code>decoration-0</code></strong> (0px)</li>
              <li><strong><code>decoration-1</code></strong> (1px)</li>
              <li><strong><code>decoration-2</code></strong> (2px)</li>
              <li><strong><code>decoration-4</code></strong> (4px)</li>
              <li><strong><code>decoration-8</code></strong> (8px)</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>decoration-[3px]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なるテキスト装飾線の太さの適用例。
          </p>
          <div className="space-y-6">
            {/* Standard Thickness */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準の太さ</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{decorationThicknessHtml}</code>
              </pre>
              <DecorationThicknessExample />
            </div>
            {/* Arbitrary Thickness */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryThicknessHtml}</code>
              </pre>
              <ArbitraryThicknessExample />
            </div>
          </div>
        </section>

        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイント (<code>md:decoration-4</code> など) や状態 (<code>hover:decoration-2</code> など) に応じて装飾線の太さを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時に下線の太さを変更できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<a href="#" class="underline decoration-1 hover:decoration-4 ...">
  Hover for thicker underline
</a>
              `.trim()}</code>
            </pre>
             <a href="#" className="underline decoration-1 hover:decoration-4 text-blue-600 dark:text-blue-400">
              Hover for thicker underline
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
                装飾線の太さを変更するには、まず <code>underline</code>, <code>overline</code>, <code>line-through</code> のいずれかで装飾線自体を適用する必要があります。
              </li>
              <li>
                <code>decoration-from-font</code> の挙動は、使用するフォントがこの情報を持っているかに依存します。
              </li>
               <li>
                ブラウザのサポート状況を確認してください。<code>text-decoration-thickness</code> は比較的新しい CSS プロパティです。
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
                <code>text-decoration-style</code> (<code>decoration-solid</code>, <code>decoration-dashed</code> など): 装飾線のスタイルを設定します。
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

export default TextDecorationThicknessPage;
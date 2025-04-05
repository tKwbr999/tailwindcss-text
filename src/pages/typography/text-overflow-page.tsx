import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント
// text-overflow は通常、overflow: hidden と whitespace: nowrap と組み合わせて使用します。

const TruncateExample: React.FC = () => {
  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
      <p className="truncate text-gray-800 dark:text-gray-200">
        Truncate: この非常に長いテキストはコンテナの幅を超えると切り詰められ、末尾に省略記号 (...) が表示されます。Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

const TextEllipsisExample: React.FC = () => {
  return (
    <div className="w-64 overflow-hidden whitespace-nowrap bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300"> {/* overflow と whitespace が必要 */}
      <p className="text-ellipsis text-gray-800 dark:text-gray-200">
        Text Ellipsis: この非常に長いテキストも切り詰められ、省略記号が表示されます。Truncate と同様の効果ですが、overflow と whitespace の手動設定が必要です。Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

const TextClipExample: React.FC = () => {
    return (
      <div className="w-64 overflow-hidden whitespace-nowrap bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300"> {/* overflow と whitespace が必要 */}
        <p className="text-clip text-gray-800 dark:text-gray-200">
          Text Clip: この非常に長いテキストはコンテナの幅で単純に切り取られます。省略記号は表示されません。Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    );
  };


// ページコンポーネント本体
const TextOverflowPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Typography: Text Overflow ';
const jaTitle = 'テキストオーバーフロー';
  const links = [
    {
      title: 'Tailwind CSS: Text Overflow',
      url: 'https://tailwindcss.com/docs/text-overflow',
    },
    {
      title: 'MDN: text-overflow',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow',
    },
  ];

  // コードスニペットを定義
  const truncateHtml = `<p class="truncate ...">...</p>`; // Includes overflow, whitespace, and text-overflow
  const ellipsisHtml = `<p class="overflow-hidden whitespace-nowrap text-ellipsis ...">...</p>`;
  const clipHtml = `<p class="overflow-hidden whitespace-nowrap text-clip ...">...</p>`;


  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Text Overflow - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Text Overflow utility in Tailwind CSS. Examples and usage details for Text Overflow." />
      </Helmet>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              コンテナに収まりきらないテキストがどのように処理されるかを制御するためのユーティリティクラスです。通常、テキストを切り詰めて省略記号 (...) を表示したり、単純に切り取ったりします。
            </p>
            <p>
              CSS の <code>text-overflow</code> プロパティを制御します。多くの場合、<code>overflow: hidden;</code> と <code>white-space: nowrap;</code> (または他の折り返し制御) と組み合わせて使用する必要があります。
            </p>
            <p>
              Tailwind は便利な <code>truncate</code> クラスを提供しており、これら3つのプロパティ (<code>overflow: hidden;</code>, <code>white-space: nowrap;</code>, <code>text-overflow: ellipsis;</code>) を一括で設定します。
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
              以下のクラスをテキストを含む要素に適用します。多くの場合、親要素または自身に <code>overflow-hidden</code> と <code>whitespace-nowrap</code> も必要です。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>truncate</code></strong>: <code>overflow-hidden</code>, <code>white-space: nowrap</code>, <code>text-overflow: ellipsis</code> を一括で適用します。最も一般的な使い方です。</li>
              <li><strong><code>text-ellipsis</code></strong> (<code>text-overflow: ellipsis;</code>): はみ出したテキストを省略記号 (...) で置き換えます。<code>overflow</code> と <code>whitespace</code> の設定が別途必要です。</li>
              <li><strong><code>text-clip</code></strong> (<code>text-overflow: clip;</code>): はみ出したテキストをコンテナの境界で単純に切り取ります。省略記号は表示されません。<code>overflow</code> と <code>whitespace</code> の設定が別途必要です。</li>
            </ul>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なるテキストオーバーフローユーティリティの適用例。コンテナ幅は w-64。
          </p>
          <div className="space-y-6">
            {/* Truncate */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">truncate (推奨)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{truncateHtml}</code>
              </pre>
              <TruncateExample />
            </div>
            {/* Ellipsis */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">text-ellipsis</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{ellipsisHtml}</code>
              </pre>
              <TextEllipsisExample />
            </div>
             {/* Clip */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">text-clip</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{clipHtml}</code>
              </pre>
              <TextClipExample />
            </div>
          </div>
        </section>

        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてテキストオーバーフローの挙動を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>md:truncate</code> は中程度の画面サイズ以上でのみテキストを切り詰めます。小さい画面では通常通り折り返します (<code>whitespace-normal</code> などがデフォルトの場合)。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="whitespace-normal md:truncate ...">
  This text will wrap on small screens but truncate on medium screens and above.
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
                <code>text-ellipsis</code> と <code>text-clip</code> は、効果を発揮するために通常 <code>overflow-hidden</code> と <code>whitespace-nowrap</code> が必要です。<code>truncate</code> クラスはこれらをまとめて適用します。
              </li>
              <li>
                これらのユーティリティは、テキストが単一行に収まらない場合にのみ効果があります。複数行のテキストを指定行数で切り詰めたい場合は <code>line-clamp-*</code> ユーティリティ (プラグインが必要) を使用します。
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
                <code>overflow</code> (<code>overflow-hidden</code>): コンテンツのはみ出しを隠します。
              </li>
              <li>
                <code>whitespace</code> (<code>whitespace-nowrap</code>): テキストの折り返しを制御します。
              </li>
              <li>
                <code>line-clamp</code> (<code>line-clamp-*</code>): 複数行のテキストを指定行数で切り詰めます (プラグイン)。
              </li>
               <li>
                <code>word-break</code> (<code>break-all</code>, <code>break-words</code>): 単語の途中での改行を制御します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default TextOverflowPage;
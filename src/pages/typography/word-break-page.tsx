import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント
// 注意: hyphens プロパティの効果は、言語設定 (lang 属性) とブラウザの辞書に依存します。
//       また、テキストが実際に改行される必要がある場合にのみハイフネーションが発生します。

const BreakNormalExample: React.FC = () => {
  return (
    <div className="w-48 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
      <p className="break-normal text-gray-800 dark:text-gray-200">
        Break Normal (デフォルト): 通常の単語区切りで折り返します。longwordwithoutspaceswilloverflow
      </p>
    </div>
  );
};

const BreakWordsExample: React.FC = () => {
  return (
    <div className="w-48 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
      <p className="break-words text-gray-800 dark:text-gray-200">
        Break Words: 単語の途中でも折り返しますが、まずは単語間で折り返そうとします。longwordwithoutspaceswillbreak
      </p>
    </div>
  );
};

const BreakAllExample: React.FC = () => {
    return (
      <div className="w-48 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
        <p className="break-all text-gray-800 dark:text-gray-200">
          Break All: 単語に関係なく、任意の文字間で折り返します。longwordwithoutspaceswillbreakanywhere
        </p>
      </div>
    );
  };

const BreakKeepExample: React.FC = () => {
    // 注意: break-keep は主に CJK (中国語、日本語、韓国語) テキスト向けです。
    //       英語では break-normal と同様に見えることが多いです。
    return (
      <div className="w-48 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
        <p className="break-keep text-gray-800 dark:text-gray-200">
          Break Keep (CJK): CJK テキストで単語の途中での改行を防ぎます。English words wrap normally. 日本語では文節等で改行します。
        </p>
      </div>
    );
  };


// ページコンポーネント本体
const WordBreakPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Typography: Word Break (単語の改行)';
  const links = [
    {
      title: 'Tailwind CSS: Word Break',
      url: 'https://tailwindcss.com/docs/word-break',
    },
     {
      title: 'Tailwind CSS: Overflow Wrap (break-words に関連)',
      url: 'https://tailwindcss.com/docs/overflow-wrap',
    },
    {
      title: 'MDN: word-break',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/word-break',
    },
     {
      title: 'MDN: overflow-wrap',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap',
    },
  ];

  // コードスニペットを定義
  const breakNormalHtml = `<p class="break-normal ...">...</p>`; // Default
  const breakWordsHtml = `<p class="break-words ...">...</p>`;
  const breakAllHtml = `<p class="break-all ...">...</p>`;
  const breakKeepHtml = `<p class="break-keep ...">...</p>`; // Mainly for CJK


  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Word Break - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Word Break utility in Tailwind CSS. Examples and usage details for Word Break." />
      </Helmet>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              テキストがコンテナの境界に達したときに、単語の途中での改行 (word breaking) をどのように処理するかを制御するためのユーティリティクラスです。長い URL や連続した文字列がレイアウトを崩すのを防ぐために使用されます。
            </p>
            <p>
              CSS の <code>overflow-wrap</code> (以前の <code>word-wrap</code>) および <code>word-break</code> プロパティを制御します。
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
              以下のクラスをテキストを含む要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>break-normal</code></strong>: デフォルト。通常の単語区切りルールに従って改行します (<code>overflow-wrap: normal; word-break: normal;</code>)。長い単語ははみ出す可能性があります。</li>
              <li><strong><code>break-words</code></strong>: はみ出す可能性のある長い単語や URL がある場合、単語の途中で改行を許可します (<code>overflow-wrap: break-word;</code>)。まずは単語間で改行しようとします。</li>
              <li><strong><code>break-all</code></strong>: 単語に関係なく、任意の文字間で改行を許可します (<code>word-break: break-all;</code>)。</li>
              <li><strong><code>break-keep</code></strong>: 主に CJK (中国語、日本語、韓国語) テキスト用。単語の途中での改行を防ぎます (<code>word-break: keep-all;</code>)。CJK 以外の言語では <code>break-normal</code> と同様の挙動になることが多いです。</li>
            </ul>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なる単語改行ユーティリティの適用例。コンテナ幅は w-48。
          </p>
          <div className="space-y-6">
            {/* Normal */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">break-normal (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{breakNormalHtml}</code>
              </pre>
              <BreakNormalExample />
            </div>
            {/* Words */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">break-words</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{breakWordsHtml}</code>
              </pre>
              <BreakWordsExample />
            </div>
             {/* All */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">break-all</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{breakAllHtml}</code>
              </pre>
              <BreakAllExample />
            </div>
             {/* Keep */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">break-keep (CJK向け)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{breakKeepHtml}</code>
              </pre>
              <BreakKeepExample />
            </div>
          </div>
        </section>

        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて単語の改行ルールを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>break-all md:break-words</code> は小さい画面では任意の文字で改行し、中程度の画面サイズ以上では単語の途中での改行を許可します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="break-all md:break-words ...">
  longwordwithoutspaceswillbreakdifferently
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
                <code>break-words</code> は <code>overflow-wrap: break-word;</code> を使用し、<code>break-all</code> と <code>break-keep</code> は <code>word-break</code> プロパティを使用します。これらの CSS プロパティは微妙に異なる改行ルールを持っています。
              </li>
              <li>
                <code>break-words</code> は、単語全体が収まる場合は単語間で改行し、単語自体が長すぎて収まらない場合にのみ単語の途中で改行します。
              </li>
               <li>
                <code>break-all</code> は、単語の途中かどうかに関わらず、コンテナの端に達した時点で改行します。CJK 以外の言語では読みにくくなる可能性があります。
              </li>
               <li>
                <code>break-keep</code> は、CJK テキスト以外では通常 <code>break-normal</code> と同じ効果になります。
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
                <code>whitespace</code> (<code>whitespace-nowrap</code> など): テキストの折り返し自体を制御します。
              </li>
              <li>
                <code>overflow</code> (<code>overflow-hidden</code>, <code>overflow-x-auto</code> など): コンテンツのはみ出しを制御します。
              </li>
              <li>
                <code>text-overflow</code> (<code>truncate</code>, <code>text-ellipsis</code>): はみ出したテキストの表示方法 (省略記号など) を制御します。
              </li>
               <li>
                <code>hyphens</code> (<code>hyphens-auto</code>, <code>hyphens-manual</code>): ハイフネーションによる単語分割を制御します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default WordBreakPage;
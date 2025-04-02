import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

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
  // コードスニペットを定義
  const breakNormalHtml = `<p class="break-normal ...">...</p>`; // Default
  const breakWordsHtml = `<p class="break-words ...">...</p>`;
  const breakAllHtml = `<p class="break-all ...">...</p>`;
  const breakKeepHtml = `<p class="break-keep ...">...</p>`; // Mainly for CJK


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Typography: Word Break (単語の改行)
        </h1>
        {/* 概要 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              概要
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              テキストがコンテナの境界に達したときに、単語の途中での改行 (word breaking) をどのように処理するかを制御するためのユーティリティクラスです。長い URL や連続した文字列がレイアウトを崩すのを防ぐために使用されます。
            </p>
            <p>
              CSS の <code>overflow-wrap</code> (以前の <code>word-wrap</code>) および <code>word-break</code> プロパティを制御します。
            </p>
          </CardContent>
        </Card>
        {/* 基本的な使い方とパラメータ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              基本的な使い方とパラメータ
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              以下のクラスをテキストを含む要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>break-normal</code></strong>: デフォルト。通常の単語区切りルールに従って改行します (<code>overflow-wrap: normal; word-break: normal;</code>)。長い単語ははみ出す可能性があります。</li>
              <li><strong><code>break-words</code></strong>: はみ出す可能性のある長い単語や URL がある場合、単語の途中で改行を許可します (<code>overflow-wrap: break-word;</code>)。まずは単語間で改行しようとします。</li>
              <li><strong><code>break-all</code></strong>: 単語に関係なく、任意の文字間で改行を許可します (<code>word-break: break-all;</code>)。</li>
              <li><strong><code>break-keep</code></strong>: 主に CJK (中国語、日本語、韓国語) テキスト用。単語の途中での改行を防ぎます (<code>word-break: keep-all;</code>)。CJK 以外の言語では <code>break-normal</code> と同様の挙動になることが多いです。</li>
            </ul>
          </CardContent>
        </Card>

        {/* 各パラメータの例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              異なる単語改行ユーティリティの適用例。コンテナ幅は w-48。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
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
          </CardContent>
        </Card>

        {/* レスポンシブ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて単語の改行ルールを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        {/* 注意点 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              注意点
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
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
          </CardContent>
        </Card>

        {/* 関連ユーティリティ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              関連ユーティリティ
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
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
          </CardContent>
        </Card>

        {/* 公式ドキュメント参照 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              公式ドキュメント参照
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <a
                  href="https://tailwindcss.com/docs/word-break"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Word Break
                </a>
              </li>
               <li>
                <a
                  href="https://tailwindcss.com/docs/overflow-wrap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Overflow Wrap (<code>break-words</code> に関連)
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/word-break"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: word-break
                </a>
              </li>
               <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: overflow-wrap
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WordBreakPage;
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const WhitespaceNormalExample: React.FC = () => {
  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
      <p className="whitespace-normal text-gray-800 dark:text-gray-200">
        Whitespace Normal (デフォルト): テキストは通常通り折り返され、連続する空白は1つにまとめられます。
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.   Multiple spaces here.
      </p>
    </div>
  );
};

const WhitespaceNowrapExample: React.FC = () => {
  return (
    <div className="w-64 overflow-x-auto bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300"> {/* overflow で確認 */}
      <p className="whitespace-nowrap text-gray-800 dark:text-gray-200">
        Whitespace Nowrap: テキストは折り返さず、一行で表示されます。連続する空白は1つにまとめられます。Lorem ipsum dolor sit amet, consectetur adipiscing elit.   Multiple spaces here.
      </p>
    </div>
  );
};

const WhitespacePreExample: React.FC = () => {
    return (
      <div className="w-64 overflow-auto bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300"> {/* overflow */}
        <p className="whitespace-pre text-gray-800 dark:text-gray-200">
Whitespace Pre:
  空白と改行がそのまま保持されます。
    テキストははみ出すと折り返しません。
        </p>
      </div>
    );
  };

const WhitespacePreWrapExample: React.FC = () => {
    return (
      <div className="w-64 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
        <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200">
Whitespace Pre Wrap:
  空白と改行がそのまま保持されますが、
    必要に応じてテキストは折り返されます。
        </p>
      </div>
    );
  };

const WhitespacePreLineExample: React.FC = () => {
    return (
      <div className="w-64 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
        <p className="whitespace-pre-line text-gray-800 dark:text-gray-200">
Whitespace Pre Line:
  連続する空白は1つにまとめられますが、
改行は保持され、テキストは必要に応じて折り返されます。   Multiple spaces ignored.
        </p>
      </div>
    );
  };

const WhitespaceBreakSpacesExample: React.FC = () => {
    // 注意: whitespace-break-spaces は v3.0+
    return (
      <div className="w-64 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
        <p className="whitespace-break-spaces text-gray-800 dark:text-gray-200">
Whitespace Break Spaces (v3.0+):
  pre-wrap と似ていますが、連続する空白も保持され、行末のスペースでも折り返す可能性があります。   Multiple   spaces   preserved.
        </p>
      </div>
    );
  };


// ページコンポーネント本体
const WhitespacePage: React.FC = () => {
  // コードスニペットを定義
  const wsNormalHtml = `<p class="whitespace-normal ...">...</p>`; // Default
  const wsNowrapHtml = `<p class="whitespace-nowrap ...">...</p>`;
  const wsPreHtml = `<p class="whitespace-pre ...">...</p>`;
  const wsPreWrapHtml = `<p class="whitespace-pre-wrap ...">...</p>`;
  const wsPreLineHtml = `<p class="whitespace-pre-line ...">...</p>`;
  const wsBreakSpacesHtml = `<p class="whitespace-break-spaces ...">...</p>`; // v3.0+


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Typography: Whitespace (空白文字の扱い)
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
              要素内の空白文字 (スペース、タブ、改行) の扱い方と、テキストの折り返し方法を制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>white-space</code> プロパティを制御します。
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
              <code>whitespace-{'{value}'}</code> の形式でクラスを要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>whitespace-normal</code></strong>: デフォルト。連続する空白は1つにまとめられ、テキストは必要に応じて折り返します。改行文字も空白として扱われます。</li>
              <li><strong><code>whitespace-nowrap</code></strong>: 連続する空白は1つにまとめられますが、テキストは折り返しません。一行で表示されます。</li>
              <li><strong><code>whitespace-pre</code></strong>: 空白と改行をそのまま保持します。テキストは折り返しません (<code>&lt;pre&gt;</code> タグの挙動に似ています)。</li>
              <li><strong><code>whitespace-pre-wrap</code></strong>: 空白と改行をそのまま保持しますが、テキストは必要に応じて折り返します。</li>
              <li><strong><code>whitespace-pre-line</code></strong>: 連続する空白は1つにまとめられますが、改行は保持され、テキストは必要に応じて折り返します。</li>
              <li><strong><code>whitespace-break-spaces</code></strong>: <code>pre-wrap</code> と似ていますが、連続する空白も保持し、行末のスペースでも折り返す可能性があります (比較的新しい値)。 (v3.0+)</li>
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
              異なる whitespace ユーティリティの適用例。コンテナ幅は w-64。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Normal */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">whitespace-normal (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{wsNormalHtml}</code>
              </pre>
              <WhitespaceNormalExample />
            </div>
            {/* Nowrap */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">whitespace-nowrap</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{wsNowrapHtml}</code>
              </pre>
              <WhitespaceNowrapExample />
            </div>
             {/* Pre */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">whitespace-pre</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{wsPreHtml}</code>
              </pre>
              <WhitespacePreExample />
            </div>
             {/* Pre Wrap */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">whitespace-pre-wrap</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{wsPreWrapHtml}</code>
              </pre>
              <WhitespacePreWrapExample />
            </div>
             {/* Pre Line */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">whitespace-pre-line</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{wsPreLineHtml}</code>
              </pre>
              <WhitespacePreLineExample />
            </div>
             {/* Break Spaces */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">whitespace-break-spaces (v3.0+)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{wsBreakSpacesHtml}</code>
              </pre>
              <WhitespaceBreakSpacesExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて空白文字の扱いを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>whitespace-nowrap md:whitespace-normal</code> は小さい画面では折り返さず、中程度の画面サイズ以上で通常通り折り返すようにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="whitespace-nowrap md:whitespace-normal ...">
  This text won't wrap on small screens, but will wrap normally on medium screens and larger.
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
                <code>whitespace-nowrap</code> や <code>whitespace-pre</code> を使用すると、テキストがコンテナからはみ出す可能性があるため、<code>overflow</code> ユーティリティと組み合わせて使用することがよくあります。
              </li>
              <li>
                <code>whitespace-pre</code>, <code>whitespace-pre-wrap</code>, <code>whitespace-pre-line</code>, <code>whitespace-break-spaces</code> は、HTML ソースコード内の改行やスペースの扱いが異なるため、目的に応じて使い分ける必要があります。
              </li>
               <li>
                <code>whitespace-break-spaces</code> は比較的新しい CSS の値であり、ブラウザのサポート状況に注意が必要です。
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
                <code>overflow</code> (<code>overflow-hidden</code>, <code>overflow-x-auto</code> など): コンテンツのはみ出しを制御します。
              </li>
              <li>
                <code>text-overflow</code> (<code>truncate</code>, <code>text-ellipsis</code>, <code>text-clip</code>): テキストがはみ出した場合の表示方法 (省略記号など) を制御します。
              </li>
              <li>
                <code>word-break</code> (<code>break-all</code>, <code>break-words</code>): 単語の途中での改行を制御します。
              </li>
               <li>
                <code>text-wrap</code> (<code>text-wrap</code>, <code>text-nowrap</code>, <code>text-balance</code>): テキストの折り返し方法を制御する新しいプロパティ (v3.3+)。<code>whitespace-nowrap</code> と関連があります。
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
                  href="https://tailwindcss.com/docs/whitespace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Whitespace
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/white-space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: white-space
                </a>
              </li>
               <li>
                <a
                  href="https://tailwindcss.com/docs/text-wrap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Text Wrap (v3.3+ 関連)
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WhitespacePage;
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント
// 注意: text-wrap, text-balance は比較的新しい CSS 機能です。

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
  // ArticleLayout に渡すデータ
  const title = 'Typography: Whitespace (空白文字の扱い)';
  const links = [
    {
      title: 'Tailwind CSS: Whitespace',
      url: 'https://tailwindcss.com/docs/whitespace',
    },
    {
      title: 'MDN: white-space',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/white-space',
    },
     {
      title: 'Tailwind CSS: Text Wrap (v3.3+ 関連)',
      url: 'https://tailwindcss.com/docs/text-wrap',
    },
  ];

  // コードスニペットを定義
  const wsNormalHtml = `<p class="whitespace-normal ...">...</p>`; // Default
  const wsNowrapHtml = `<p class="whitespace-nowrap ...">...</p>`;
  const wsPreHtml = `<p class="whitespace-pre ...">...</p>`;
  const wsPreWrapHtml = `<p class="whitespace-pre-wrap ...">...</p>`;
  const wsPreLineHtml = `<p class="whitespace-pre-line ...">...</p>`;
  const wsBreakSpacesHtml = `<p class="whitespace-break-spaces ...">...</p>`; // v3.0+


  return (
    <ArticleLayout title={title} links={links}>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素内の空白文字 (スペース、タブ、改行) の扱い方と、テキストの折り返し方法を制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>white-space</code> プロパティを制御します。
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
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なる whitespace ユーティリティの適用例。コンテナ幅は w-64。
          </p>
          <div className="space-y-6">
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
          </div>
        </section>

        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて空白文字の扱いを変更できます。
          </p>
          <div>
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
                <code>whitespace-nowrap</code> や <code>whitespace-pre</code> を使用すると、テキストがコンテナからはみ出す可能性があるため、<code>overflow</code> ユーティリティと組み合わせて使用することがよくあります。
              </li>
              <li>
                <code>whitespace-pre</code>, <code>whitespace-pre-wrap</code>, <code>whitespace-pre-line</code>, <code>whitespace-break-spaces</code> は、HTML ソースコード内の改行やスペースの扱いが異なるため、目的に応じて使い分ける必要があります。
              </li>
               <li>
                <code>whitespace-break-spaces</code> は比較的新しい CSS の値であり、ブラウザのサポート状況に注意が必要です。
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
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default WhitespacePage;
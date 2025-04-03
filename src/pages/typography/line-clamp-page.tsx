import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント
// 注意: line-clamp は Webkit ベースのブラウザや Firefox でのサポートが主です。
//       また、display: -webkit-box; や overflow: hidden; など、関連する CSS プロパティが必要です。
//       Tailwind の line-clamp-* クラスはこれらを自動で適用します (プラグイン経由)。

const LineClampExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <p className="line-clamp-3 text-gray-800 dark:text-gray-200">
        <strong>line-clamp-3:</strong> このテキストは最大3行に制限されます。3行を超える部分は省略記号 (...) で表示されるはずです。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
       <p className="line-clamp-2 text-gray-800 dark:text-gray-200">
        <strong>line-clamp-2:</strong> このテキストは最大2行に制限されます。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>
       <p className="line-clamp-none text-gray-800 dark:text-gray-200">
        <strong>line-clamp-none:</strong> 行数制限なし (デフォルト)。テキストは通常通り折り返されます。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  );
};


// ページコンポーネント本体
const LineClampPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Typography: Line Clamp (行数制限)';
  const links = [
    {
      title: '@tailwindcss/line-clamp Plugin',
      url: 'https://github.com/tailwindlabs/tailwindcss-line-clamp',
    },
    {
      title: 'MDN: -webkit-line-clamp',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp',
    },
  ];

  // コードスニペットを定義
  const lineClampHtml = `
<p class="line-clamp-3 ...">
  長いテキスト...
</p>

<p class="line-clamp-none ..."> {/* 制限解除 */}
  テキスト...
</p>
  `.trim();


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
              複数行にわたるテキストコンテンツを指定した行数で切り詰め、末尾に省略記号 (...) を表示するためのユーティリティクラスです。カードコンポーネントの概要文など、表示スペースが限られている場合に便利です。
            </p>
            <p>
              これは公式の Tailwind CSS プラグイン (<code>@tailwindcss/line-clamp</code>) によって提供される機能です。使用するには、プラグインをインストールし、<code>tailwind.config.js</code> に追加する必要があります。
            </p>
            <p>
              内部的には <code>-webkit-line-clamp</code>, <code>display: -webkit-box;</code>, <code>-webkit-box-orient: vertical;</code>, <code>overflow: hidden;</code> などの CSS プロパティを組み合わせて実現しています。
            </p>
          </div>
        </section>

        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              基本的な使い方とパラメータ
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              (<code>@tailwindcss/line-clamp</code> プラグインが必要です)
          </p>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              <code>line-clamp-{'{number}'}</code> または <code>line-clamp-none</code> の形式でクラスをテキストを含む要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>line-clamp-{'{number}'}</code></strong> (例: <code>line-clamp-1</code>, ..., <code>line-clamp-6</code>): テキストを指定した行数に制限します。デフォルトでは 1 から 6 までが用意されています。</li>
              <li><strong><code>line-clamp-none</code></strong>: 行数制限を解除します。</li>
            </ul>
             <p className="mt-4">
              プラグインの設定で、利用可能な行数をカスタマイズできます。任意の値 (例: <code>line-clamp-[10]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>

        {/* 使用例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なる行数制限の適用例。
          </p>
          <div>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{lineClampHtml}</code>
            </pre>
            <LineClampExample />
          </div>
        </section>

        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて行数制限を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>line-clamp-2 md:line-clamp-4</code> はデフォルトで2行、中程度の画面サイズ以上で4行に制限します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="line-clamp-2 md:line-clamp-4 ...">
  Responsive Line Clamp...
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
                <strong>プラグインが必要:</strong> この機能は Tailwind CSS コアには含まれていません。<code>@tailwindcss/line-clamp</code> プラグインをインストールし、<code>tailwind.config.js</code> の <code>plugins</code> 配列に追加する必要があります。
              </li>
              <li>
                <strong>ブラウザサポート:</strong> <code>-webkit-line-clamp</code> プロパティに基づいているため、主に Webkit ベースのブラウザ (Chrome, Safari, Edge) と Firefox で動作します。古いブラウザや一部のブラウザではサポートされていない可能性があります。
              </li>
               <li>
                このユーティリティは、テキストが実際に指定行数を超える場合にのみ効果があります。
              </li>
               <li>
                内部的に複数の CSS プロパティ (<code>display</code>, <code>overflow</code> など) を設定するため、他のユーティリティと競合する可能性があります。
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
                <code>overflow</code> (<code>overflow-hidden</code>): コンテンツのはみ出しを隠します。line-clamp は内部でこれを使用します。
              </li>
              <li>
                <code>text-overflow</code> (<code>truncate</code>): 単一行のテキストがはみ出した場合に省略記号を表示します。line-clamp は複数行に対応します。
              </li>
              <li>
                <code>display</code>: line-clamp は内部的に <code>display: -webkit-box;</code> を使用します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default LineClampPage;
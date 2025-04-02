import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
  // コードスニペットを定義
  const textWrapHtml = `<p class="text-wrap ...">...</p>`; // Default
  const textNowrapHtml = `<p class="text-nowrap ...">...</p>`;
  const textBalanceHtml = `<p class="text-balance ...">...</p>`; // v3.3+


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Typography: Text Wrap (テキスト折り返し)
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
              テキストがコンテナの境界に達したときに、どのように折り返すかを制御するためのユーティリティクラスです。通常の折り返し、折り返しなし、または行間の文字数を均等にするバランス調整などを指定できます。
            </p>
            <p>
              CSS の <code>text-wrap</code> プロパティ (および古い <code>white-space: nowrap;</code>) を制御します。<strong><code>text-wrap</code> と <code>text-balance</code> は Tailwind CSS v3.3 で追加された比較的新しい機能です。</strong>
            </p>
          </CardContent>
        </Card>
        {/* 基本的な使い方とパラメータ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              基本的な使い方とパラメータ
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              (text-wrap, text-balance は v3.3+)
            </CardDescription>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              以下のクラスをテキストを含む要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>text-wrap</code></strong> (<code>text-wrap: wrap;</code>): デフォルト。テキストは通常通り、必要に応じて折り返します。</li>
              <li><strong><code>text-nowrap</code></strong> (<code>text-wrap: nowrap;</code> または古いブラウザ向けに <code>white-space: nowrap;</code>): テキストは折り返さず、一行で表示されます。コンテナからはみ出す可能性があります。</li>
              <li><strong><code>text-balance</code></strong> (<code>text-wrap: balance;</code>): ブラウザが行間の文字数を均等にしようと試みます。短い複数行の見出しなどで、よりバランスの取れた見た目になります。効果はブラウザの実装に依存し、常に保証されるわけではありません。</li>
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
              異なるテキスト折り返しユーティリティの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
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
          </CardContent>
        </Card>

        {/* レスポンシブ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてテキストの折り返し挙動を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                  href="https://tailwindcss.com/docs/text-wrap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Text Wrap (v3.3+)
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: text-wrap
                </a>
              </li>
               <li>
                <a
                  href="https://tailwindcss.com/docs/whitespace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Whitespace (関連)
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TextWrapPage;
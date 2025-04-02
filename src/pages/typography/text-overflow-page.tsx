import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
  // コードスニペットを定義
  const truncateHtml = `<p class="truncate ...">...</p>`; // Includes overflow, whitespace, and text-overflow
  const ellipsisHtml = `<p class="overflow-hidden whitespace-nowrap text-ellipsis ...">...</p>`;
  const clipHtml = `<p class="overflow-hidden whitespace-nowrap text-clip ...">...</p>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Typography: Text Overflow (テキストオーバーフロー)
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
              コンテナに収まりきらないテキストがどのように処理されるかを制御するためのユーティリティクラスです。通常、テキストを切り詰めて省略記号 (...) を表示したり、単純に切り取ったりします。
            </p>
            <p>
              CSS の <code>text-overflow</code> プロパティを制御します。多くの場合、<code>overflow: hidden;</code> と <code>white-space: nowrap;</code> (または他の折り返し制御) と組み合わせて使用する必要があります。
            </p>
            <p>
              Tailwind は便利な <code>truncate</code> クラスを提供しており、これら3つのプロパティ (<code>overflow: hidden;</code>, <code>white-space: nowrap;</code>, <code>text-overflow: ellipsis;</code>) を一括で設定します。
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
              以下のクラスをテキストを含む要素に適用します。多くの場合、親要素または自身に <code>overflow-hidden</code> と <code>whitespace-nowrap</code> も必要です。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>truncate</code></strong>: <code>overflow-hidden</code>, <code>white-space: nowrap</code>, <code>text-overflow: ellipsis</code> を一括で適用します。最も一般的な使い方です。</li>
              <li><strong><code>text-ellipsis</code></strong> (<code>text-overflow: ellipsis;</code>): はみ出したテキストを省略記号 (...) で置き換えます。<code>overflow</code> と <code>whitespace</code> の設定が別途必要です。</li>
              <li><strong><code>text-clip</code></strong> (<code>text-overflow: clip;</code>): はみ出したテキストをコンテナの境界で単純に切り取ります。省略記号は表示されません。<code>overflow</code> と <code>whitespace</code> の設定が別途必要です。</li>
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
              異なるテキストオーバーフローユーティリティの適用例。コンテナ幅は w-64。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
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
          </CardContent>
        </Card>

        {/* レスポンシブ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてテキストオーバーフローの挙動を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                <code>text-ellipsis</code> と <code>text-clip</code> は、効果を発揮するために通常 <code>overflow-hidden</code> と <code>whitespace-nowrap</code> が必要です。<code>truncate</code> クラスはこれらをまとめて適用します。
              </li>
              <li>
                これらのユーティリティは、テキストが単一行に収まらない場合にのみ効果があります。複数行のテキストを指定行数で切り詰めたい場合は <code>line-clamp-*</code> ユーティリティ (プラグインが必要) を使用します。
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
                  href="https://tailwindcss.com/docs/text-overflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Text Overflow
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: text-overflow
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TextOverflowPage;
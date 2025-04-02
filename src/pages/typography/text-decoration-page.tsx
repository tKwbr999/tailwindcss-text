import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const UnderlineExample: React.FC = () => {
  return (
    <p className="underline text-lg text-gray-800 dark:text-gray-200">
      Underline: テキストに下線が引かれます。
    </p>
  );
};

const OverlineExample: React.FC = () => {
  return (
    <p className="overline text-lg text-gray-800 dark:text-gray-200">
      Overline: テキストに上線が引かれます。
    </p>
  );
};

const LineThroughExample: React.FC = () => {
    return (
      <p className="line-through text-lg text-gray-800 dark:text-gray-200">
        Line-through: テキストに取り消し線が引かれます。
      </p>
    );
  };

const NoUnderlineExample: React.FC = () => {
    return (
      <a href="#" className="underline text-blue-600 dark:text-blue-400">
        これは下線付きリンクですが、
        <span className="no-underline bg-yellow-200 dark:bg-yellow-800 px-1">この部分は</span>
        下線がありません (no-underline)。
      </a>
    );
  };


// ページコンポーネント本体
const TextDecorationPage: React.FC = () => {
  // コードスニペットを定義
  const underlineHtml = `<p class="underline ...">...</p>`;
  const overlineHtml = `<p class="overline ...">...</p>`;
  const lineThroughHtml = `<p class="line-through ...">...</p>`;
  const noUnderlineHtml = `<a href="#" class="underline ..."><span class="no-underline ...">No underline here</span></a>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Typography: Text Decoration (テキスト装飾線)
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
              テキストに下線 (underline)、上線 (overline)、取り消し線 (line-through) などの装飾線を追加したり、削除したりするためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>text-decoration-line</code> プロパティ (および <code>text-decoration: none;</code>) を制御します。
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
              以下のクラスをテキストを含む要素または親要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>underline</code></strong>: テキストに下線を引きます (<code>text-decoration-line: underline;</code>)。</li>
              <li><strong><code>overline</code></strong>: テキストに上線を引きます (<code>text-decoration-line: overline;</code>)。</li>
              <li><strong><code>line-through</code></strong>: テキストに取り消し線を引きます (<code>text-decoration-line: line-through;</code>)。</li>
              <li><strong><code>no-underline</code></strong>: テキストの装飾線を削除します (<code>text-decoration-line: none;</code>)。リンク (<code>&lt;a&gt;</code> タグ) のデフォルトの下線を消す場合などによく使用されます。</li>
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
              異なるテキスト装飾ユーティリティの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Underline */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">underline</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{underlineHtml}</code>
              </pre>
              <UnderlineExample />
            </div>
            {/* Overline */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">overline</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{overlineHtml}</code>
              </pre>
              <OverlineExample />
            </div>
             {/* Line Through */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">line-through</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{lineThroughHtml}</code>
              </pre>
              <LineThroughExample />
            </div>
             {/* No Underline */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">no-underline</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{noUnderlineHtml}</code>
              </pre>
              <NoUnderlineExample />
            </div>
          </CardContent>
        </Card>

        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブと状態変化
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイント (<code>md:underline</code> など) や状態 (<code>hover:underline</code>, <code>focus:no-underline</code> など) に応じてテキスト装飾を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              リンクのホバー時に下線を表示するのは一般的なパターンです。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<a href="#" class="no-underline hover:underline ...">
  Hover me
</a>
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
                複数の装飾線 (例: 下線と上線) を同時に適用することは、CSS の仕様上、<code>text-decoration-line</code> プロパティで直接行うことはできません (Tailwind の基本クラスでは不可)。ただし、<code>text-decoration</code> ショートハンドプロパティを使えば可能です (任意の値やカスタム CSS で対応)。
              </li>
              <li>
                装飾線の色、スタイル (点線など)、太さ、オフセット (テキストからの距離) は、それぞれ別のユーティリティクラス (<code>decoration-*</code>, <code>decoration-style-*</code>, <code>decoration-thickness-*</code>, <code>underline-offset-*</code>) で制御します。
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
                <code>text-decoration-color</code> (<code>decoration-*</code>): 装飾線の色を設定します。
              </li>
              <li>
                <code>text-decoration-style</code> (<code>decoration-solid</code>, <code>decoration-dashed</code> など): 装飾線のスタイルを設定します。
              </li>
              <li>
                <code>text-decoration-thickness</code> (<code>decoration-*</code>): 装飾線の太さを設定します。
              </li>
               <li>
                <code>text-underline-offset</code> (<code>underline-offset-*</code>): 下線のテキストからのオフセット距離を設定します。
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
                  href="https://tailwindcss.com/docs/text-decoration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Text Decoration
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: text-decoration-line
                </a>
              </li>
               <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: text-decoration (shorthand)
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TextDecorationPage;
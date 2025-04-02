import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const ItalicExample: React.FC = () => {
  return (
    <p className="italic text-lg text-gray-800 dark:text-gray-200">
      これはイタリック体です (italic)。
    </p>
  );
};

const NotItalicExample: React.FC = () => {
  return (
    <p className="not-italic text-lg text-gray-800 dark:text-gray-200">
      これは通常のスタイルです (not-italic)。イタリックが継承されている場合に打ち消します。
    </p>
  );
};


// ページコンポーネント本体
const FontStylePage: React.FC = () => {
  // コードスニペットを定義
  const italicHtml = `<p class="italic ...">...</p>`;
  const notItalicHtml = `<p class="not-italic ...">...</p>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Typography: Font Style (フォントスタイル)
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
              テキストをイタリック体で表示するか、通常のスタイルで表示するかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>font-style</code> プロパティを制御します。
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
              <li><strong><code>italic</code></strong>: テキストをイタリック体で表示します (<code>font-style: italic;</code>)。</li>
              <li><strong><code>not-italic</code></strong>: テキストを通常のスタイルで表示します (<code>font-style: normal;</code>)。これは、親要素からイタリック体が継承されている場合に、それを打ち消すために使用します。</li>
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
              フォントスタイルユーティリティの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Italic */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">italic</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{italicHtml}</code>
              </pre>
              <ItalicExample />
            </div>
            {/* Not Italic */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">not-italic</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{notItalicHtml}</code>
              </pre>
              <div className="italic text-gray-500 dark:text-gray-400"> {/* 親でイタリックを適用 */}
                <NotItalicExample />
              </div>
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみフォントスタイルを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>not-italic md:italic</code> はデフォルトで通常スタイル、中程度の画面サイズ以上でイタリック体になります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="not-italic md:italic ...">
  Responsive Font Style
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
                多くのフォントには専用のイタリック体 (またはオブリーク体) が含まれています。フォントがイタリック体をサポートしていない場合、ブラウザは通常のフォントを傾けて表示しようとすることがあります (faux italic)。
              </li>
              <li>
                <code>not-italic</code> は、主に親要素から継承された <code>italic</code> スタイルをリセットするために使用されます。
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
                <code>font-family</code> (<code>font-*</code>): フォントファミリーを設定します。
              </li>
              <li>
                <code>font-size</code> (<code>text-*</code>): フォントサイズを設定します。
              </li>
              <li>
                <code>font-weight</code> (<code>font-*</code>): フォントの太さを設定します。
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
                  href="https://tailwindcss.com/docs/font-style"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Font Style
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-style"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: font-style
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FontStylePage;
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const AntialiasedExample: React.FC = () => {
  return (
    <p className="antialiased text-lg text-gray-800 dark:text-gray-200">
      Antialiased: 滑らかなフォント表示 (通常 macOS/iOS で効果あり)。
    </p>
  );
};

const SubpixelAntialiasedExample: React.FC = () => {
  return (
    <p className="subpixel-antialiased text-lg text-gray-800 dark:text-gray-200">
      Subpixel Antialiased: よりシャープなフォント表示 (通常 macOS/iOS 以外、または低解像度ディスプレイで効果あり)。
    </p>
  );
};


// ページコンポーネント本体
const FontSmoothingPage: React.FC = () => {
  // コードスニペットを定義
  const antialiasedHtml = `<p class="antialiased ...">...</p>`;
  const subpixelHtml = `<p class="subpixel-antialiased ...">...</p>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Typography: Font Smoothing (フォントスムージング)
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
              テキストのレンダリング時にアンチエイリアス (スムージング) を適用するかどうか、またその方法を制御するためのユーティリティクラスです。主に macOS や iOS でのフォント表示の微調整に使用されます。
            </p>
            <p>
              CSS の非標準プロパティである <code>-webkit-font-smoothing</code> と <code>-moz-osx-font-smoothing</code> を制御します。
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
              <li><strong><code>antialiased</code></strong>: フォントを滑らかに表示します (<code>-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;</code>)。macOS/iOS でより細い表示になることがあります。</li>
              <li><strong><code>subpixel-antialiased</code></strong>: サブピクセルレンダリングを使用してフォントを表示します (<code>-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;</code>)。通常はこちらがデフォルトの挙動ですが、明示的に指定することで <code>antialiased</code> の効果を打ち消します。</li>
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
              フォントスムージングユーティリティの適用例。効果は OS やブラウザによって異なります。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Antialiased */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">antialiased</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{antialiasedHtml}</code>
              </pre>
              <AntialiasedExample />
            </div>
            {/* Subpixel Antialiased */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">subpixel-antialiased</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{subpixelHtml}</code>
              </pre>
              <SubpixelAntialiasedExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみフォントスムージングを変更することは通常ありませんが、技術的には可能です。
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="subpixel-antialiased md:antialiased ...">
  Responsive Font Smoothing (Uncommon)
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
                これらのクラスの効果は、ユーザーのオペレーティングシステム、ブラウザ、およびディスプレイ設定に大きく依存します。特に macOS/iOS 以外の環境では、<code>antialiased</code> と <code>subpixel-antialiased</code> の間に顕著な視覚的差異が見られない場合があります。
              </li>
              <li>
                <code>-webkit-font-smoothing</code> と <code>-moz-osx-font-smoothing</code> は標準的な CSS プロパティではありません。将来的にブラウザの挙動が変わる可能性があります。
              </li>
               <li>
                一般的に、<code>antialiased</code> は細い線で滑らかな表示を、<code>subpixel-antialiased</code> はよりシャープで太い表示を提供することを目指しています。デザイン上の好みに応じて選択します。
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
                  href="https://tailwindcss.com/docs/font-smoothing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Font Smoothing
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: font-smooth (関連する標準プロパティ)
                </a>
              </li>
               <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-font-smoothing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: -webkit-font-smoothing (非標準)
                </a>
              </li>
               <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-osx-font-smoothing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: -moz-osx-font-smoothing (非標準, macOS のみ)
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FontSmoothingPage;
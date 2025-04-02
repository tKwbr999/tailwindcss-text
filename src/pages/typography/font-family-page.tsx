import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const FontSansExample: React.FC = () => {
  return (
    <p className="font-sans text-lg">これはサンセリフ体です (font-sans)。</p>
  );
};

const FontSerifExample: React.FC = () => {
  return (
    <p className="font-serif text-lg">これはセリフ体です (font-serif)。</p>
  );
};

const FontMonoExample: React.FC = () => {
    return (
      <p className="font-mono text-lg">これは等幅フォントです (font-mono)。</p>
    );
  };

// ページコンポーネント本体
const FontFamilyPage: React.FC = () => {
  // コードスニペットを定義
  const fontSansHtml = `<p class="font-sans ...">...</p>`;
  const fontSerifHtml = `<p class="font-serif ...">...</p>`;
  const fontMonoHtml = `<p class="font-mono ...">...</p>`;
  const customFontJs = `
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'display': ['Oswald', ...], // 'font-display' クラスを追加
        'body': ['"Open Sans"', ...], // 'font-body' クラスを追加
      },
    },
  },
}
  `.trim();
  const customFontHtml = `<p class="font-display ...">カスタムディスプレイフォント</p>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif"> {/* デフォルトは serif */}
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Typography: Font Family (フォントファミリー)
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
              要素のテキストに使用されるフォントファミリー (書体) を設定するためのユーティリティクラスです。サンセリフ、セリフ、等幅などの基本的なフォントスタックや、カスタムフォントを指定できます。
            </p>
            <p>
              CSS の <code>font-family</code> プロパティを制御します。
            </p>
            <p>
              Tailwind はデフォルトでクロスプラットフォームで利用可能なフォントスタックを提供しています。
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
              <code>font-{'{family}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>デフォルトで用意されているファミリー:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>font-sans</code></strong>: UI フォントスタック (<code>ui-sans-serif</code>, <code>system-ui</code>, など)。</li>
              <li><strong><code>font-serif</code></strong>: <code>ui-serif</code>, <code>Georgia</code>, <code>Cambria</code>, など。</li>
              <li><strong><code>font-mono</code></strong>: <code>ui-monospace</code>, <code>SFMono-Regular</code>, <code>Menlo</code>, など。</li>
            </ul>
             <p className="mt-4">
              これらのクラスは、複数のフォント名をカンマ区切りで指定したフォントスタックを適用します。ブラウザはリストの先頭から利用可能なフォントを探して使用します。
            </p>
          </CardContent>
        </Card>

        {/* 各パラメータの例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              デフォルトのフォントファミリーユーティリティの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Sans */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">font-sans</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{fontSansHtml}</code>
              </pre>
              <FontSansExample />
            </div>
            {/* Serif */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">font-serif</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{fontSerifHtml}</code>
              </pre>
              <FontSerifExample />
            </div>
             {/* Mono */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">font-mono</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{fontMonoHtml}</code>
              </pre>
              <FontMonoExample />
            </div>
          </CardContent>
        </Card>

         {/* カスタマイズ Card */}
         <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              カスタマイズ (<code>tailwind.config.js</code>)
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>tailwind.config.js</code> の <code>theme.extend.fontFamily</code> でカスタムフォントファミリーを追加できます。
            </CardDescription>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
             <p>
              キーがクラス名 (<code>font-{'{key}'}</code>) になり、値がフォント名またはフォントスタック (配列) になります。フォント名にスペースが含まれる場合は引用符で囲みます。
            </p>
            {/* コード表示 (JS) */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-javascript">{customFontJs}</code>
            </pre>
             {/* コード表示 (HTML) */}
             <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{customFontHtml}</code>
            </pre>
             <p className="mt-4">
              <strong>注意:</strong> カスタムフォントを使用するには、別途 CSS (例: <code>@font-face</code> ルール) や HTML (例: Google Fonts の <code>&lt;link&gt;</code> タグ) でフォントファイルを読み込む必要があります。
            </p>
          </CardContent>
        </Card>

        {/* レスポンシブ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてフォントファミリーを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>font-serif md:font-sans</code> はデフォルトでセリフ体、中程度の画面サイズ以上でサンセリフ体を使用します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="font-serif md:font-sans ...">
  Responsive Font Family
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
                指定したフォントがユーザーのシステムにインストールされていない場合、ブラウザはフォントスタック内の次のフォント、またはデフォルトのフォントを使用します。
              </li>
              <li>
                Web フォント (Google Fonts など) やカスタムフォントを使用する場合は、それらのフォントファイルを適切に読み込む設定が必要です。Tailwind はフォントの読み込み自体は行いません。
              </li>
               <li>
                <code>font-family</code> は継承されるため、通常は <code>&lt;body&gt;</code> や主要なコンテナ要素にベースとなるフォントファミリーを設定し、見出しなどで部分的に上書きします。
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
                <code>font-size</code> (<code>text-*</code>): フォントサイズを設定します。
              </li>
              <li>
                <code>font-weight</code> (<code>font-*</code>): フォントの太さを設定します。
              </li>
              <li>
                <code>font-style</code> (<code>italic</code>, <code>not-italic</code>): フォントスタイル (イタリックなど) を設定します。
              </li>
               <li>
                <code>letter-spacing</code> (<code>tracking-*</code>): 文字間隔を設定します。
              </li>
               <li>
                <code>line-height</code> (<code>leading-*</code>): 行の高さを設定します。
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
                  href="https://tailwindcss.com/docs/font-family"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Font Family
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-family"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: font-family
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FontFamilyPage;
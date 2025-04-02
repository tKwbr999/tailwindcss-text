import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const FontWeightExample: React.FC = () => {
  return (
    <div className="space-y-1">
      <p className="font-thin">Thin (100)</p>
      <p className="font-extralight">Extra Light (200)</p>
      <p className="font-light">Light (300)</p>
      <p className="font-normal">Normal (400 - デフォルト)</p>
      <p className="font-medium">Medium (500)</p>
      <p className="font-semibold">Semi Bold (600)</p>
      <p className="font-bold">Bold (700)</p>
      <p className="font-extrabold">Extra Bold (800)</p>
      <p className="font-black">Black (900)</p>
    </div>
  );
};


// ページコンポーネント本体
const FontWeightPage: React.FC = () => {
  // コードスニペットを定義
  const fontWeightHtml = `
<p class="font-thin ...">Thin</p>
<p class="font-light ...">Light</p>
<p class="font-normal ...">Normal</p>
<p class="font-medium ...">Medium</p>
<p class="font-semibold ...">Semi Bold</p>
<p class="font-bold ...">Bold</p>
<p class="font-black ...">Black</p>
  `.trim();


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Typography: Font Weight (フォントの太さ)
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
              テキストのフォントの太さ (weight) を制御するためのユーティリティクラスです。Thin から Black までの様々な太さを指定できます。
            </p>
            <p>
              CSS の <code>font-weight</code> プロパティを制御します。
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
              <code>font-{'{weight}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>デフォルトで用意されている太さ:</p>
            <ul className="list-disc list-inside space-y-1 pl-4 columns-2">
              <li><strong><code>font-thin</code></strong> (100)</li>
              <li><strong><code>font-extralight</code></strong> (200)</li>
              <li><strong><code>font-light</code></strong> (300)</li>
              <li><strong><code>font-normal</code></strong> (400 - デフォルト)</li>
              <li><strong><code>font-medium</code></strong> (500)</li>
              <li><strong><code>font-semibold</code></strong> (600)</li>
              <li><strong><code>font-bold</code></strong> (700)</li>
              <li><strong><code>font-extrabold</code></strong> (800)</li>
              <li><strong><code>font-black</code></strong> (900)</li>
            </ul>
             <p className="mt-4">
              数値は CSS の <code>font-weight</code> 値に対応します。
            </p>
             <p>
              任意の値 (例: <code>font-[550]</code>) も使用可能です (Tailwind JIT モード)。ただし、使用するフォントがその太さをサポートしている必要があります。
            </p>
          </CardContent>
        </Card>

        {/* 使用例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              異なるフォントの太さの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{fontWeightHtml}</code>
            </pre>
            <FontWeightExample />
          </CardContent>
        </Card>

        {/* レスポンシブ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてフォントの太さを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>font-normal md:font-bold</code> はデフォルトで通常の太さ、中程度の画面サイズ以上で太字になります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="font-normal md:font-bold ...">
  Responsive Font Weight
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
                指定した太さが使用するフォントファミリーで利用可能である必要があります。利用できない場合、ブラウザは最も近い利用可能な太さで表示しようとするか、太さを合成しようとすることがあります (faux bold)。
              </li>
              <li>
                Web フォントを使用する場合、必要な太さのフォントファイルをすべて読み込んでいることを確認してください。
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
                <code>font-style</code> (<code>italic</code>, <code>not-italic</code>): フォントスタイルを設定します。
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
                  href="https://tailwindcss.com/docs/font-weight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Font Weight
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: font-weight
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FontWeightPage;
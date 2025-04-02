import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const FontSizeExample: React.FC = () => {
  return (
    <div className="space-y-2">
      <p className="text-xs">テキストサイズ xs (0.75rem)</p>
      <p className="text-sm">テキストサイズ sm (0.875rem)</p>
      <p className="text-base">テキストサイズ base (1rem - デフォルト)</p>
      <p className="text-lg">テキストサイズ lg (1.125rem)</p>
      <p className="text-xl">テキストサイズ xl (1.25rem)</p>
      <p className="text-2xl">テキストサイズ 2xl (1.5rem)</p>
      <p className="text-3xl">テキストサイズ 3xl (1.875rem)</p>
      {/* ... 他のサイズも同様 */}
      <p className="text-9xl">9xl</p>
    </div>
  );
};

const ArbitrarySizeExample: React.FC = () => {
    return (
      <p className="text-[22px] leading-[30px]">任意の値: text-[22px] leading-[30px]</p>
      // 行の高さ (leading) も同時に指定することが多い
    );
  };


// ページコンポーネント本体
const FontSizePage: React.FC = () => {
  // コードスニペットを定義
  const textSizeHtml = `
<p class="text-xs ...">...</p>
<p class="text-sm ...">...</p>
<p class="text-base ...">...</p>
<p class="text-lg ...">...</p>
<p class="text-xl ...">...</p>
{/* ...up to 9xl */}
  `.trim();

  const arbitrarySizeHtml = `<p class="text-[22px] leading-[30px] ...">...</p>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Typography: Font Size (フォントサイズ)
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
              テキストのフォントサイズを設定するためのユーティリティクラスです。Tailwind はデフォルトでタイポグラフィックスケールを提供しており、見出しや本文テキストなどのサイズを簡単に指定できます。
            </p>
            <p>
              CSS の <code>font-size</code> プロパティを制御します。多くの場合、同時に <code>line-height</code> (行の高さ) も設定されます。
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
              <code>text-{'{size}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>デフォルトで用意されているサイズ (一部):</p>
            <ul className="list-disc list-inside space-y-1 pl-4 columns-2">
              <li><strong><code>text-xs</code></strong> (0.75rem / 12px)</li>
              <li><strong><code>text-sm</code></strong> (0.875rem / 14px)</li>
              <li><strong><code>text-base</code></strong> (1rem / 16px - デフォルト)</li>
              <li><strong><code>text-lg</code></strong> (1.125rem / 18px)</li>
              <li><strong><code>text-xl</code></strong> (1.25rem / 20px)</li>
              <li><strong><code>text-2xl</code></strong> (1.5rem / 24px)</li>
              <li><strong><code>text-3xl</code></strong> (1.875rem / 30px)</li>
              <li><strong><code>text-4xl</code></strong> (2.25rem / 36px)</li>
              {/* ... */}
              <li><strong><code>text-9xl</code></strong> (8rem / 128px)</li>
            </ul>
             <p className="mt-4">
              各サイズクラスは、デフォルトで対応する行の高さ (<code>line-height</code>) も設定します。これは <code>tailwind.config.js</code> でカスタマイズ可能です。
            </p>
             <p>
              任意の値 (例: <code>text-[22px]</code>) も使用可能です (Tailwind JIT モード)。任意の値を使用する場合、行の高さは自動では設定されないため、必要に応じて <code>leading-*</code> ユーティリティで指定します。
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
              異なるフォントサイズユーティリティの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Sizes */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準サイズ</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{textSizeHtml}</code>
              </pre>
              <FontSizeExample />
            </div>
            {/* Arbitrary Size */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitrarySizeHtml}</code>
              </pre>
              <ArbitrarySizeExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてフォントサイズを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>text-lg md:text-2xl</code> はデフォルトで <code>lg</code> サイズ、中程度の画面サイズ以上で <code>2xl</code> サイズになります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="text-lg md:text-2xl ...">
  Responsive Font Size
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
                デフォルトの <code>text-*</code> クラスは、フォントサイズとともに行の高さ (<code>line-height</code>) も設定します。これにより、異なるサイズのテキストが混在しても行間のリズムが保たれやすくなります。
              </li>
              <li>
                任意の値 (例: <code>text-[22px]</code>) を使用する場合、行の高さは自動設定されません。必要に応じて <code>leading-*</code> ユーティリティで明示的に指定してください。
              </li>
               <li>
                フォントサイズは通常、<code>rem</code> 単位で定義されます。これはルート要素 (<code>&lt;html&gt;</code>) のフォントサイズに基づいているため、ユーザーのブラウザ設定やアクセシビリティ設定に対応しやすくなります。
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
                <code>line-height</code> (<code>leading-*</code>): 行の高さを設定します。
              </li>
              <li>
                <code>font-family</code> (<code>font-*</code>): フォントファミリーを設定します。
              </li>
              <li>
                <code>font-weight</code> (<code>font-*</code>): フォントの太さを設定します。
              </li>
               <li>
                <code>letter-spacing</code> (<code>tracking-*</code>): 文字間隔を設定します。
              </li>
               <li>
                <code>text-align</code> (<code>text-*</code>): テキストの水平方向の揃えを設定します。
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
                  href="https://tailwindcss.com/docs/font-size"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Font Size
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: font-size
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FontSizePage;
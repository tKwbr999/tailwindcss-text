import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const StrokeWidthExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <svg className="size-16 stroke-blue-500 fill-none stroke-0" viewBox="0 0 24 24"> {/* stroke-0 */}
        <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z"/>
      </svg>
       <svg className="size-16 stroke-green-500 fill-none stroke-1" viewBox="0 0 24 24"> {/* stroke-1 */}
        <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z"/>
      </svg>
       <svg className="size-16 stroke-red-500 fill-none stroke-2" viewBox="0 0 24 24"> {/* stroke-2 */}
        <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z"/>
      </svg>
    </div>
  );
};

const ArbitraryStrokeWidthExample: React.FC = () => {
    return (
      <svg className="size-16 stroke-purple-500 fill-none stroke-[3]" viewBox="0 0 24 24"> {/* stroke-[3] */}
        <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z"/>
      </svg>
    );
  };


// ページコンポーネント本体
const StrokeWidthPage: React.FC = () => {
  // コードスニペットを定義
  const strokeWidthHtml = `
<svg class="stroke-0 ...">...</svg> {/* 0px */}
<svg class="stroke-1 ...">...</svg> {/* 1px */}
<svg class="stroke-2 ...">...</svg> {/* 2px */}
  `.trim();

  const arbitraryStrokeWidthHtml = `<svg class="stroke-[3] ...">...</svg>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          SVG: Stroke Width (線の太さ)
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
              SVG 要素の線の太さを設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>stroke-width</code> プロパティを制御します。
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
              <code>stroke-{'{width}'}</code> の形式でクラスを SVG 要素またはその子要素に適用します。
            </p>
            <p><code>{'{width}'}</code> には、線の太さを示す数値を指定します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>stroke-0</code></strong> (0px)</li>
              <li><strong><code>stroke-1</code></strong> (1px)</li>
              <li><strong><code>stroke-2</code></strong> (2px)</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>stroke-[3]</code>) も使用可能です (Tailwind JIT モード)。単位なしの数値はピクセルとして解釈されます。
            </p>
             <p>
              線の色を設定するには <code>stroke-*</code> ユーティリティを使用します。
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
              異なる線の太さの適用例。<code>fill-none</code> を併用しています。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Stroke Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準の線の太さ</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{strokeWidthHtml}</code>
              </pre>
              <StrokeWidthExample />
            </div>
            {/* Arbitrary Stroke Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryStrokeWidthHtml}</code>
              </pre>
              <ArbitraryStrokeWidthExample />
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
              ブレークポイント (<code>md:stroke-2</code> など) や状態 (<code>hover:stroke-1</code> など) に応じて線の太さを変更できます。トランジションと組み合わせることも可能です (<code>transition</code> が必要ですが、<code>stroke-width</code> のトランジションは一般的ではありません)。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ホバー時に線の太さを変更する例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<svg class="stroke-1 hover:stroke-2 transition ...">
  {/* ... */}
</svg>
              `.trim()}</code>
            </pre>
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
                <code>stroke-*</code>: SVG の線の色を設定します。
              </li>
              <li>
                <code>fill-*</code>: SVG の塗りつぶし色を設定します。
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
                  href="https://tailwindcss.com/docs/stroke-width"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Stroke Width
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: stroke-width (SVG Attribute)
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StrokeWidthPage;
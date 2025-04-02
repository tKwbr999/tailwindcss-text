import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const FillExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <svg className="size-16 fill-blue-500" viewBox="0 0 24 24">
        <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z"/>
      </svg>
       <svg className="size-16 fill-green-500" viewBox="0 0 24 24">
        <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z"/>
      </svg>
       <svg className="size-16 fill-current text-red-500" viewBox="0 0 24 24"> {/* fill-current */}
        <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z"/>
      </svg>
       <svg className="size-16 fill-none stroke-purple-500 stroke-2" viewBox="0 0 24 24"> {/* fill-none */}
        <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z"/>
      </svg>
    </div>
  );
};

const ArbitraryFillExample: React.FC = () => {
    return (
      <svg className="size-16 fill-[#ff7f50]" viewBox="0 0 24 24"> {/* fill-[#ff7f50] */}
        <path d="M12 2.62l-5.2 10.48L1.6 14l10.4 4.4 10.4-4.4-5.2-1.08L12 2.62zm0 16.76L6.8 14.9l5.2 2.2 5.2-2.2-5.2 4.48z"/>
      </svg>
    );
  };


// ページコンポーネント本体
const FillPage: React.FC = () => {
  // コードスニペットを定義
  const fillHtml = `
{/* Fill with a specific color */}
<svg class="fill-blue-500 ...">...</svg>

{/* Use the current text color */}
<svg class="fill-current text-red-500 ...">...</svg>

{/* No fill */}
<svg class="fill-none stroke-black ...">...</svg>
  `.trim();

  const arbitraryFillHtml = `<svg class="fill-[#ff7f50] ...">...</svg>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          SVG: Fill (塗りつぶし)
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
              SVG 要素の塗りつぶし色を設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>fill</code> プロパティを制御します。
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
              <code>fill-{'{color}'}</code> の形式でクラスを SVG 要素またはその子要素に適用します。
            </p>
            <p><code>{'{color}'}</code> には、Tailwind のカラーパレット (例: <code>blue-500</code>, <code>green-600</code>) を指定します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>fill-inherit</code></strong>: 親要素から継承します。</li>
              <li><strong><code>fill-current</code></strong>: 現在のテキストカラー (<code>currentColor</code>) を使用します。テキストカラーユーティリティ (<code>text-*</code>) と組み合わせて使用します。</li>
              <li><strong><code>fill-transparent</code></strong>: 透明にします。</li>
              <li><strong><code>fill-black</code></strong>, <strong><code>fill-white</code></strong></li>
              <li><strong><code>fill-{'{color}-{shade}'}</code></strong>: Tailwind のカラーパレット (例: <code>fill-sky-500</code>)。</li>
              <li><strong><code>fill-none</code></strong>: 塗りつぶしを無効にします (<code>fill: none;</code>)。</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>fill-[#ff7f50]</code>) も使用可能です (Tailwind JIT モード)。
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
              異なる塗りつぶし色の適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Fill */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準の塗りつぶし色</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{fillHtml}</code>
              </pre>
              <FillExample />
            </div>
            {/* Arbitrary Fill */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryFillHtml}</code>
              </pre>
              <ArbitraryFillExample />
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
              ブレークポイント (<code>md:fill-green-500</code> など) や状態 (<code>hover:fill-red-500</code> など) に応じて塗りつぶし色を変更できます。トランジションと組み合わせることも可能です (<code>transition-colors</code> が必要)。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ホバー時に塗りつぶし色を変更する例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<svg class="fill-blue-500 hover:fill-purple-500 transition-colors duration-300 ...">
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
                <code>stroke-width-*</code>: SVG の線の太さを設定します。
              </li>
              <li>
                <code>text-*</code>: <code>fill-current</code> と組み合わせて使用するテキストカラー。
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
                  href="https://tailwindcss.com/docs/fill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Fill
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: fill (SVG Attribute)
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FillPage;
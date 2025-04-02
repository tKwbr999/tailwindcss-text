import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const OpacityExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <div className="opacity-100 bg-blue-500 size-20 rounded flex items-center justify-center text-white">100</div>
      <div className="opacity-75 bg-blue-500 size-20 rounded flex items-center justify-center text-white">75</div>
      <div className="opacity-50 bg-blue-500 size-20 rounded flex items-center justify-center text-white">50</div>
      <div className="opacity-25 bg-blue-500 size-20 rounded flex items-center justify-center text-white">25</div>
      <div className="opacity-0 bg-blue-500 size-20 rounded flex items-center justify-center text-white">0</div>
    </div>
  );
};

const ArbitraryOpacityExample: React.FC = () => {
    return (
      <div className="opacity-[.65] bg-purple-500 size-20 rounded flex items-center justify-center text-white">
        任意の値: opacity-[.65]
      </div>
    );
  };


// ページコンポーネント本体
const OpacityPage: React.FC = () => {
  // コードスニペットを定義
  const opacityHtml = `
<div class="opacity-100 ...">...</div> {/* 100% */}
<div class="opacity-75 ...">...</div>  {/* 75% */}
<div class="opacity-50 ...">...</div>  {/* 50% */}
<div class="opacity-25 ...">...</div>  {/* 25% */}
<div class="opacity-0 ...">...</div>   {/* 0% */}
  `.trim();
  const arbitraryOpacityHtml = `<div class="opacity-[.65] ...">...</div>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Effects: Opacity (不透明度)
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
              要素全体の不透明度を設定するためのユーティリティクラスです。要素とその内容を半透明にしたり、完全に透明にしたりすることができます。
            </p>
            <p>
              CSS の <code>opacity</code> プロパティを制御します。
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
              <code>opacity-{'{amount}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p><code>{'{amount}'}</code> には、0 から 100 までの数値 (通常は 5 または 10 刻み) を指定します。これはパーセンテージに対応します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>opacity-0</code></strong> (0%)</li>
              <li><strong><code>opacity-5</code></strong> (5%)</li>
              <li>...</li>
              <li><strong><code>opacity-25</code></strong> (25%)</li>
              <li><strong><code>opacity-50</code></strong> (50%)</li>
              <li><strong><code>opacity-75</code></strong> (75%)</li>
              <li>...</li>
              <li><strong><code>opacity-100</code></strong> (100% - デフォルト)</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>opacity-[.65]</code>) も使用可能です (Tailwind JIT モード)。0 から 1 の間の数値を指定します。
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
              異なる不透明度の適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Opacity */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準の不透明度</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{opacityHtml}</code>
              </pre>
              <OpacityExample />
            </div>
            {/* Arbitrary Opacity */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryOpacityHtml}</code>
              </pre>
              <ArbitraryOpacityExample />
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
              ブレークポイント (<code>md:opacity-50</code> など) や状態 (<code>hover:opacity-75</code>, <code>disabled:opacity-25</code> など) に応じて不透明度を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ボタンのホバー効果や無効状態の表現によく使用されます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<button class="opacity-100 hover:opacity-75 disabled:opacity-25 ...">
  Submit
</button>
              `.trim()}</code>
            </pre>
             <button className="opacity-100 hover:opacity-75 disabled:opacity-25 transition-opacity bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2">
              Submit
            </button>
             <button className="opacity-100 hover:opacity-75 disabled:opacity-25 transition-opacity bg-blue-500 text-white font-bold py-2 px-4 rounded" disabled>
              Submit (Disabled)
            </button>
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
                <code>opacity</code> は要素全体 (背景、境界線、テキスト、子要素すべて) に影響します。特定の部分だけを半透明にしたい場合は、背景色やテキスト色の透明度ユーティリティ (例: <code>bg-blue-500/50</code>, <code>text-black/75</code>) を使用します。
              </li>
              <li>
                <code>opacity-0</code> は要素を完全に透明にしますが、レイアウト上のスペースは保持されます。要素を完全に非表示にしたい場合は <code>hidden</code> (<code>display: none;</code>) または <code>invisible</code> (<code>visibility: hidden;</code>) を使用します。
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
                背景色の透明度: <code>bg-{'{color}'}/{'{opacity}'}</code> (例: <code>bg-red-500/50</code>) または <code>bg-opacity-*</code> (古い構文)。
              </li>
              <li>
                テキスト色の透明度: <code>text-{'{color}'}/{'{opacity}'}</code> (例: <code>text-blue-500/75</code>) または <code>text-opacity-*</code> (古い構文)。
              </li>
              <li>
                境界線色の透明度: <code>border-{'{color}'}/{'{opacity}'}</code> (例: <code>border-green-500/25</code>) または <code>border-opacity-*</code> (古い構文)。
              </li>
               <li>
                リング色の透明度: <code>ring-{'{color}'}/{'{opacity}'}</code> (例: <code>ring-purple-500/50</code>) または <code>ring-opacity-*</code> (古い構文)。
              </li>
               <li>
                <code>visibility</code> (<code>invisible</code>, <code>visible</code>): 要素の表示/非表示を切り替えます (レイアウトスペースは保持)。
              </li>
               <li>
                <code>display</code> (<code>hidden</code>, <code>block</code> など): 要素の表示タイプを制御し、<code>hidden</code> でレイアウトから削除します。
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
                  href="https://tailwindcss.com/docs/opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Opacity
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: opacity
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OpacityPage;
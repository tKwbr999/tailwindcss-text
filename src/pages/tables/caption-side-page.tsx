import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const CaptionSideExample: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">caption-top (デフォルト)</h3>
        <table className="caption-top border border-slate-400 w-full">
          <caption className="text-sm text-slate-500 dark:text-slate-400 p-2">Table 1: A table with the caption positioned on top.</caption>
          <thead>
            <tr>
              <th className="border border-slate-300 p-2">Header 1</th>
              <th className="border border-slate-300 p-2">Header 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 p-2">Data 1</td>
              <td className="border border-slate-300 p-2">Data 2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">caption-bottom</h3>
        <table className="caption-bottom border border-slate-400 w-full">
          <caption className="text-sm text-slate-500 dark:text-slate-400 p-2">Table 2: A table with the caption positioned on the bottom.</caption>
          <thead>
            <tr>
              <th className="border border-slate-300 p-2">Header 1</th>
              <th className="border border-slate-300 p-2">Header 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 p-2">Data 1</td>
              <td className="border border-slate-300 p-2">Data 2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};


// ページコンポーネント本体
const CaptionSidePage: React.FC = () => {
  // コードスニペットを定義
  const captionTopHtml = `
<table class="caption-top ...">
  <caption>Table 1: ...</caption>
  <thead>
    {/* ... */}
  </thead>
  <tbody>
    {/* ... */}
  </tbody>
</table>
  `.trim();

  const captionBottomHtml = `
<table class="caption-bottom ...">
  <caption>Table 2: ...</caption>
  <thead>
    {/* ... */}
  </thead>
  <tbody>
    {/* ... */}
  </tbody>
</table>
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
          Tables: Caption Side (キャプションの位置)
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
              テーブルのキャプション (<code>&lt;caption&gt;</code> 要素) の位置を制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>caption-side</code> プロパティを制御します。
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
              テーブル要素 (<code>&lt;table&gt;</code>) に以下のクラスを適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>caption-top</code></strong>: キャプションをテーブルの上に配置します (<code>caption-side: top;</code>)。これがデフォルトの挙動です。</li>
              <li><strong><code>caption-bottom</code></strong>: キャプションをテーブルの下に配置します (<code>caption-side: bottom;</code>)。</li>
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
              キャプションの位置の比較。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Caption Top */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">caption-top</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{captionTopHtml}</code>
              </pre>
            </div>
            {/* Caption Bottom */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">caption-bottom</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{captionBottomHtml}</code>
              </pre>
            </div>
             {/* Rendered Example */}
             <CaptionSideExample />
          </CardContent>
        </Card>

        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              特定のブレークポイントでのみキャプションの位置を変更するには、クラス名の前にブレークポイントプレフィックスを追加します (例: <code>md:caption-bottom</code>)。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常は上に配置し、中程度の画面サイズ以上で下に配置する場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<table class="caption-top md:caption-bottom ...">
  <caption>...</caption>
  {/* ... */}
</table>
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
                <code>table-layout-*</code>: テーブルのレイアウトアルゴリズムを制御します。
              </li>
              <li>
                <code>border-collapse</code>, <code>border-separate</code>: テーブルの境界線の表示方法を制御します。
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
                  href="https://tailwindcss.com/docs/caption-side"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Caption Side
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: caption-side
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CaptionSidePage;
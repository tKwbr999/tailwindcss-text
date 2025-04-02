import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const TableLayoutExample: React.FC = () => {
  const longText = "This is a very long text string that might cause issues with table layout if not handled properly.";
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">table-auto (デフォルト)</h3>
        <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">ブラウザが内容に基づいて列幅を決定します。</p>
        <table className="table-auto border border-slate-400 w-full">
          <thead>
            <tr>
              <th className="border border-slate-300 p-2 w-1/4">Title 1</th>
              <th className="border border-slate-300 p-2 w-3/4">Title 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 p-2">Short</td>
              <td className="border border-slate-300 p-2">{longText}</td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-2">{longText}</td>
              <td className="border border-slate-300 p-2">Short</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">table-fixed</h3>
        <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">テーブルの幅と列の幅設定に基づいて列幅を決定します。内容がはみ出す可能性があります。</p>
        <table className="table-fixed border border-slate-400 w-full">
          <thead>
            <tr>
              <th className="border border-slate-300 p-2 w-1/4">Title 1 (w-1/4)</th>
              <th className="border border-slate-300 p-2 w-3/4">Title 2 (w-3/4)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 p-2 truncate">Short</td> {/* truncateを追加してはみ出しを抑制 */}
              <td className="border border-slate-300 p-2 truncate">{longText}</td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-2 truncate">{longText}</td>
              <td className="border border-slate-300 p-2 truncate">Short</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};


// ページコンポーネント本体
const TableLayoutPage: React.FC = () => {
  // コードスニペットを定義
  const tableAutoHtml = `
<table class="table-auto w-full ...">
  <thead>
    <tr>
      <th class="w-1/4 ...">Title 1</th>
      <th class="w-3/4 ...">Title 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Short content</td>
      <td>${"Very long content ".repeat(5)}</td>
    </tr>
    {/* ... */}
  </tbody>
</table>
  `.trim();

  const tableFixedHtml = `
<table class="table-fixed w-full ...">
  <thead>
    <tr>
      <th class="w-1/4 ...">Title 1</th> {/* Explicit width */}
      <th class="w-3/4 ...">Title 2</th> {/* Explicit width */}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="truncate ...">Short content</td> {/* Truncate might be needed */}
      <td class="truncate ...">${"Very long content ".repeat(5)}</td>
    </tr>
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
          Tables: Table Layout (テーブルレイアウト)
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
              テーブルの列幅を計算するために使用されるアルゴリズムを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>table-layout</code> プロパティを制御します。
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
              <li><strong><code>table-auto</code></strong>: ブラウザがテーブルの内容に基づいて列幅を自動的に計算します (<code>table-layout: auto;</code>)。これがデフォルトの挙動です。列幅は内容によって変動します。</li>
              <li><strong><code>table-fixed</code></strong>: テーブル全体の幅と列に設定された幅に基づいて列幅を計算します (<code>table-layout: fixed;</code>)。内容が指定された幅を超える場合、はみ出すか、<code>overflow</code> や <code>text-overflow</code> ユーティリティで処理する必要があります。パフォーマンスは <code>table-auto</code> より良い場合があります。</li>
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
              <code>table-auto</code> と <code>table-fixed</code> の比較。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Table Auto */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">table-auto</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{tableAutoHtml}</code>
              </pre>
            </div>
            {/* Table Fixed */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">table-fixed</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{tableFixedHtml}</code>
              </pre>
            </div>
             {/* Rendered Example */}
             <TableLayoutExample />
          </CardContent>
        </Card>

        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              特定のブレークポイントでのみテーブルレイアウトを変更するには、クラス名の前にブレークポイントプレフィックスを追加します (例: <code>md:table-fixed</code>)。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常は自動レイアウトを使用し、中程度の画面サイズ以上で固定レイアウトにする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<table class="table-auto md:table-fixed w-full ...">
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
                <code>w-*</code>: テーブルや列 (<code>&lt;th&gt;</code>, <code>&lt;td&gt;</code>) の幅を設定します (<code>table-fixed</code> で特に重要)。
              </li>
              <li>
                <code>truncate</code>, <code>text-ellipsis</code>, <code>overflow-*</code>: <code>table-fixed</code> で内容がはみ出す場合の処理に使用します。
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
                  href="https://tailwindcss.com/docs/table-layout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Table Layout
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: table-layout
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TableLayoutPage;
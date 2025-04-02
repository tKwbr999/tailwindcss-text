import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const BorderCollapseExample: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">border-collapse (結合)</h3>
        <table className="border-collapse border border-slate-400 w-full">
          <thead>
            <tr>
              <th className="border border-slate-300 p-2">State</th>
              <th className="border border-slate-300 p-2">City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 p-2">Indiana</td>
              <td className="border border-slate-300 p-2">Indianapolis</td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-2">Ohio</td>
              <td className="border border-slate-300 p-2">Columbus</td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-2">Michigan</td>
              <td className="border border-slate-300 p-2">Detroit</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">border-separate (分離)</h3>
        <table className="border-separate border border-slate-400 border-spacing-2 w-full">
          {/* border-spacing は border-separate と一緒に使う */}
          <thead>
            <tr>
              <th className="border border-slate-300 p-2">State</th>
              <th className="border border-slate-300 p-2">City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 p-2">Indiana</td>
              <td className="border border-slate-300 p-2">Indianapolis</td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-2">Ohio</td>
              <td className="border border-slate-300 p-2">Columbus</td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-2">Michigan</td>
              <td className="border border-slate-300 p-2">Detroit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};


// ページコンポーネント本体
const BorderCollapsePage: React.FC = () => {
  // コードスニペットを定義
  const borderCollapseHtml = `
<table class="border-collapse border border-slate-400 ...">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">State</th>
      <th class="border border-slate-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ...">Indiana</td>
      <td class="border border-slate-300 ...">Indianapolis</td>
    </tr>
    {/* ... */}
  </tbody>
</table>
  `.trim();

  const borderSeparateHtml = `
<table class="border-separate border border-slate-400 border-spacing-2 ...">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">State</th>
      <th class="border border-slate-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ...">Indiana</td>
      <td class="border border-slate-300 ...">Indianapolis</td>
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
          Tables: Border Collapse (境界線の結合/分離)
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
              テーブルの境界線 (border) を結合するか分離するかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>border-collapse</code> プロパティを制御します。
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
              <li><strong><code>border-collapse</code></strong>: 隣接するセルの境界線を結合します (<code>border-collapse: collapse;</code>)。これがデフォルトの挙動です。</li>
              <li><strong><code>border-separate</code></strong>: 各セルの境界線を分離します (<code>border-collapse: separate;</code>)。この場合、<code>border-spacing-*</code> ユーティリティでセル間の間隔を調整できます。</li>
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
              境界線の結合と分離の比較。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Border Collapse */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">border-collapse (結合)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{borderCollapseHtml}</code>
              </pre>
            </div>
            {/* Border Separate */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">border-separate (分離)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{borderSeparateHtml}</code>
              </pre>
            </div>
             {/* Rendered Example */}
             <BorderCollapseExample />
          </CardContent>
        </Card>

        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              特定のブレークポイントでのみ境界線のスタイルを変更するには、クラス名の前にブレークポイントプレフィックスを追加します (例: <code>md:border-separate</code>)。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常は結合しておき、中程度の画面サイズ以上で分離する場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<table class="border-collapse md:border-separate ...">
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
                <code>border-spacing-*</code>: <code>border-separate</code> が適用されている場合に、セル間の間隔を設定します。
              </li>
              <li>
                <code>border-*</code>: テーブルやセルの境界線のスタイル、幅、色を設定します。
              </li>
              <li>
                <code>table-layout-*</code>: テーブルのレイアウトアルゴリズムを制御します。
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
                  href="https://tailwindcss.com/docs/border-collapse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Border Collapse
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: border-collapse
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BorderCollapsePage;
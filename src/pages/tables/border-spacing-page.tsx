import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const BorderSpacingExample: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">border-spacing-x-4 border-spacing-y-2</h3>
        <table className="border-separate border border-slate-400 border-spacing-x-4 border-spacing-y-2 w-full">
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
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">border-spacing-4 (x と y 両方)</h3>
        <table className="border-separate border border-slate-400 border-spacing-4 w-full">
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ArbitraryBorderSpacingExample: React.FC = () => {
    return (
      <table className="border-separate border border-slate-400 border-spacing-[10px] w-full">
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
        </tbody>
      </table>
    );
  };


// ページコンポーネント本体
const BorderSpacingPage: React.FC = () => {
  // コードスニペットを定義
  const borderSpacingHtml = `
{/* X軸とY軸で異なる間隔 */}
<table class="border-separate border-spacing-x-4 border-spacing-y-2 ...">
  {/* ... */}
</table>

{/* X軸とY軸で同じ間隔 */}
<table class="border-separate border-spacing-4 ...">
  {/* ... */}
</table>
  `.trim();

  const arbitraryBorderSpacingHtml = `<table class="border-separate border-spacing-[10px] ..."> ... </table>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Tables: Border Spacing (境界線の間隔)
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
              <code>border-separate</code> が適用されたテーブルのセル間の間隔を制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>border-spacing</code> プロパティを制御します。
            </p>
            <p>
              <strong>注意:</strong> このユーティリティは <code>border-separate</code> と一緒に使用する必要があります。<code>border-collapse</code> が適用されているテーブルには効果がありません。
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
              <code>border-separate</code> が適用されたテーブル要素に以下の形式でクラスを適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>border-spacing-{'{size}'}</code></strong>: 水平方向と垂直方向の両方に同じ間隔を設定します。</li>
              <li><strong><code>border-spacing-x-{'{size}'}</code></strong>: 水平方向の間隔を設定します。</li>
              <li><strong><code>border-spacing-y-{'{size}'}</code></strong>: 垂直方向の間隔を設定します。</li>
            </ul>
            <p><code>{'{size}'}</code> には、Tailwind のスペーシングスケール (例: 0, 1, 2, 4, px など) を指定します。</p>
             <p className="mt-4">
              任意の値 (例: <code>border-spacing-[10px]</code>, <code>border-spacing-x-[1rem]</code>) も使用可能です (Tailwind JIT モード)。
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
              異なる境界線間隔の適用例。<code>border-separate</code> が必須です。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Border Spacing */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準の境界線間隔</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{borderSpacingHtml}</code>
              </pre>
              <BorderSpacingExample />
            </div>
            {/* Arbitrary Border Spacing */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryBorderSpacingHtml}</code>
              </pre>
              <ArbitraryBorderSpacingExample />
            </div>
          </CardContent>
        </Card>

        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              特定のブレークポイントでのみ境界線の間隔を変更するには、クラス名の前にブレークポイントプレフィックスを追加します (例: <code>md:border-spacing-4</code>)。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              デフォルトの間隔を 2 にし、中程度の画面サイズ以上で 4 にする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<table class="border-separate border-spacing-2 md:border-spacing-4 ...">
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
                <code>border-separate</code>: セルの境界線を分離するために必要です。
              </li>
              <li>
                <code>border-collapse</code>: セルの境界線を結合します (<code>border-spacing</code> は無効になります)。
              </li>
              <li>
                <code>border-*</code>: テーブルやセルの境界線のスタイル、幅、色を設定します。
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
                  href="https://tailwindcss.com/docs/border-spacing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Border Spacing
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: border-spacing
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BorderSpacingPage;
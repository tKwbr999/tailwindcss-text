import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const TableLayoutExample: React.FC = () => {
  const longText =
    'This is a very long text string that might cause issues with table layout if not handled properly.';
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
          table-auto (デフォルト)
        </h3>
        <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
          ブラウザが内容に基づいて列幅を決定します。
        </p>
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
        <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
          テーブルの幅と列の幅設定に基づいて列幅を決定します。内容がはみ出す可能性があります。
        </p>
        <table className="table-fixed border border-slate-400 w-full">
          <thead>
            <tr>
              <th className="border border-slate-300 p-2 w-1/4">Title 1 (w-1/4)</th>
              <th className="border border-slate-300 p-2 w-3/4">Title 2 (w-3/4)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 p-2 truncate">Short</td>{' '}
              {/* truncateを追加してはみ出しを抑制 */}
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
  // ArticleLayout に渡すデータ
  const title = 'Tables: Table Layout (テーブルレイアウト)';
  const links = [
    {
      title: 'Tailwind CSS: Table Layout',
      url: 'https://tailwindcss.com/docs/table-layout',
    },
    {
      title: 'MDN: table-layout',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout',
    },
  ];

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
      <td>${'Very long content '.repeat(5)}</td>
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
      <td class="truncate ...">${'Very long content '.repeat(5)}</td>
    </tr>
    {/* ... */}
  </tbody>
</table>
  `.trim();

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Table Layout - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Table Layout utility in Tailwind CSS. Examples and usage details for Table Layout." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              テーブルの列幅を計算するために使用されるアルゴリズムを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>table-layout</code> プロパティを制御します。
            </p>
          </div>
        </section>
        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            基本的な使い方とパラメータ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              テーブル要素 (<code>&lt;table&gt;</code>) に以下のクラスを適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>table-auto</code>
                </strong>
                : ブラウザがテーブルの内容に基づいて列幅を自動的に計算します (
                <code>table-layout: auto;</code>
                )。これがデフォルトの挙動です。列幅は内容によって変動します。
              </li>
              <li>
                <strong>
                  <code>table-fixed</code>
                </strong>
                : テーブル全体の幅と列に設定された幅に基づいて列幅を計算します (
                <code>table-layout: fixed;</code>)。内容が指定された幅を超える場合、はみ出すか、
                <code>overflow</code> や <code>text-overflow</code>{' '}
                ユーティリティで処理する必要があります。パフォーマンスは <code>table-auto</code>{' '}
                より良い場合があります。
              </li>
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            <code>table-auto</code> と <code>table-fixed</code> の比較。
          </p>
          <div className="space-y-6">
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
          </div>
        </section>
        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            特定のブレークポイントでのみテーブルレイアウトを変更するには、クラス名の前にブレークポイントプレフィックスを追加します
            (例: <code>md:table-fixed</code>)。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常は自動レイアウトを使用し、中程度の画面サイズ以上で固定レイアウトにする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<table class="table-auto md:table-fixed w-full ...">
  {/* ... */}
</table>
              `.trim()}
              </code>
            </pre>
          </div>
        </section>
        {/* 関連ユーティリティ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            関連ユーティリティ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <code>w-*</code>: テーブルや列 (<code>&lt;th&gt;</code>, <code>&lt;td&gt;</code>)
                の幅を設定します (<code>table-fixed</code> で特に重要)。
              </li>
              <li>
                <code>truncate</code>, <code>text-ellipsis</code>, <code>overflow-*</code>:{' '}
                <code>table-fixed</code> で内容がはみ出す場合の処理に使用します。
              </li>
              <li>
                <code>border-collapse</code>, <code>border-separate</code>:
                テーブルの境界線の表示方法を制御します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default TableLayoutPage;

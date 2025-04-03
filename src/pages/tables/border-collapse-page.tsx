import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const BorderCollapseExample: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
          border-collapse (結合)
        </h3>
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
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
          border-separate (分離)
        </h3>
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
  // ArticleLayout に渡すデータ
  const title = 'Tables: Border Collapse (境界線の結合/分離)';
  const links = [
    {
      title: 'Tailwind CSS: Border Collapse',
      url: 'https://tailwindcss.com/docs/border-collapse',
    },
    {
      title: 'MDN: border-collapse',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse',
    },
  ];

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
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Border Collapse - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Border Collapse utility in Tailwind CSS. Examples and usage details for Border Collapse." />
        {/* OGP タグ */}
        <meta property="og:title" content="Border Collapse - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Border Collapse utility in Tailwind CSS. Examples and usage details for Border Collapse." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/tables/border-collapse" />
        {/* <meta property="og:image" content="[画像のURL]" /> */} {/* 必要に応じて画像URLを設定 */}
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              テーブルの境界線 (border)
              を結合するか分離するかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>border-collapse</code> プロパティを制御します。
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
                  <code>border-collapse</code>
                </strong>
                : 隣接するセルの境界線を結合します (<code>border-collapse: collapse;</code>
                )。これがデフォルトの挙動です。
              </li>
              <li>
                <strong>
                  <code>border-separate</code>
                </strong>
                : 各セルの境界線を分離します (<code>border-collapse: separate;</code>)。この場合、
                <code>border-spacing-*</code> ユーティリティでセル間の間隔を調整できます。
              </li>
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">境界線の結合と分離の比較。</p>
          <div className="space-y-6">
            {/* Border Collapse */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                border-collapse (結合)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{borderCollapseHtml}</code>
              </pre>
            </div>
            {/* Border Separate */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                border-separate (分離)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{borderSeparateHtml}</code>
              </pre>
            </div>
            {/* Rendered Example */}
            <BorderCollapseExample />
          </div>
        </section>
        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            特定のブレークポイントでのみ境界線のスタイルを変更するには、クラス名の前にブレークポイントプレフィックスを追加します
            (例: <code>md:border-separate</code>)。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常は結合しておき、中程度の画面サイズ以上で分離する場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<table class="border-collapse md:border-separate ...">
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
                <code>border-spacing-*</code>: <code>border-separate</code>{' '}
                が適用されている場合に、セル間の間隔を設定します。
              </li>
              <li>
                <code>border-*</code>: テーブルやセルの境界線のスタイル、幅、色を設定します。
              </li>
              <li>
                <code>table-layout-*</code>: テーブルのレイアウトアルゴリズムを制御します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default BorderCollapsePage;

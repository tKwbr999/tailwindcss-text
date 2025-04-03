import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const CaptionSideExample: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
          caption-top (デフォルト)
        </h3>
        <table className="caption-top border border-slate-400 w-full">
          <caption className="text-sm text-slate-500 dark:text-slate-400 p-2">
            Table 1: A table with the caption positioned on top.
          </caption>
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
          <caption className="text-sm text-slate-500 dark:text-slate-400 p-2">
            Table 2: A table with the caption positioned on the bottom.
          </caption>
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
  // ArticleLayout に渡すデータ
  const title = 'Tables: Caption Side (キャプションの位置)';
  const links = [
    {
      title: 'Tailwind CSS: Caption Side',
      url: 'https://tailwindcss.com/docs/caption-side',
    },
    {
      title: 'MDN: caption-side',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side',
    },
  ];

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
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Caption Side - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Caption Side utility in Tailwind CSS. Examples and usage details for Caption Side." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              テーブルのキャプション (<code>&lt;caption&gt;</code> 要素)
              の位置を制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>caption-side</code> プロパティを制御します。
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
                  <code>caption-top</code>
                </strong>
                : キャプションをテーブルの上に配置します (<code>caption-side: top;</code>
                )。これがデフォルトの挙動です。
              </li>
              <li>
                <strong>
                  <code>caption-bottom</code>
                </strong>
                : キャプションをテーブルの下に配置します (<code>caption-side: bottom;</code>)。
              </li>
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">キャプションの位置の比較。</p>
          <div className="space-y-6">
            {/* Caption Top */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">caption-top</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{captionTopHtml}</code>
              </pre>
            </div>
            {/* Caption Bottom */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                caption-bottom
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{captionBottomHtml}</code>
              </pre>
            </div>
            {/* Rendered Example */}
            <CaptionSideExample />
          </div>
        </section>
        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            特定のブレークポイントでのみキャプションの位置を変更するには、クラス名の前にブレークポイントプレフィックスを追加します
            (例: <code>md:caption-bottom</code>)。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常は上に配置し、中程度の画面サイズ以上で下に配置する場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<table class="caption-top md:caption-bottom ...">
  <caption>...</caption>
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
                <code>table-layout-*</code>: テーブルのレイアウトアルゴリズムを制御します。
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

export default CaptionSidePage;

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ArticleLayout from '@/components/layout/ArticleLayout'; // ArticleLayout をインポート

// 各コードサンプルに対応するReact実装コンポーネント
// 注意: box-decoration-break の効果は、要素が複数行に分割された場合に顕著になります。
//       特にインライン要素や、カラムレイアウトで分割されたブロック要素で確認できます。

const SliceExample: React.FC = () => {
  return (
    <div className="columns-2 gap-8">
      <span className="box-decoration-slice bg-gradient-to-r from-indigo-500 to-pink-500 text-white p-2 leading-[3]">
        これは
        <br />
        複数行に
        <br />
        またがる
        <br />
        テキストです (slice)
      </span>
    </div>
  );
};

const CloneExample: React.FC = () => {
  return (
    <div className="columns-2 gap-8">
       <span className="box-decoration-clone bg-gradient-to-r from-indigo-500 to-pink-500 text-white p-2 leading-[3]">
        これは
        <br />
        複数行に
        <br />
        またがる
        <br />
        テキストです (clone)
      </span>
    </div>
  );
};

// ページコンポーネント本体
const BoxDecorationBreakPage: React.FC = () => {
  // コードスニペットを定義
  const sliceHtml = `
<div class="columns-2">
  <span class="box-decoration-slice bg-gradient-to-r from-indigo-500 to-pink-500 text-white p-2 ...">
    これは<br>
    複数行に<br>
    またがる<br>
    テキストです (slice)
  </span>
</div>
  `.trim();

  const cloneHtml = `
<div class="columns-2">
  <span class="box-decoration-clone bg-gradient-to-r from-indigo-500 to-pink-500 text-white p-2 ...">
    これは<br>
    複数行に<br>
    またがる<br>
    テキストです (clone)
  </span>
</div>
  `.trim();


// 参照リンクの定義を追加
const links = [
  {
    title: 'Tailwind CSS: Box Decoration Break',
    url: 'https://tailwindcss.com/docs/box-decoration-break',
  },
  {
    title: 'MDN: box-decoration-break',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break',
  },
];

  return (
    <ArticleLayout title="Layout: Box Decoration Break (要素分割時の装飾)" links={links}>
        {/* 概要 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              概要
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素が複数行、カラム、またはページに分割された場合に、その要素の <code>padding</code>, <code>border</code>, <code>border-radius</code>, <code>box-shadow</code>, <code>background</code> などの装飾がどのようにレンダリングされるかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>box-decoration-break</code> プロパティを制御します。
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
              <code>box-decoration-{'{value}'}</code> の形式でクラスを指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong><code>box-decoration-slice</code></strong>: デフォルト。要素が分割された場合、装飾 (背景、境界線など) は要素全体に対して一度だけ適用され、分割点で「スライス」されたように見えます。例えば、角丸は要素全体の四隅にのみ適用されます。
              </li>
              <li>
                <strong><code>box-decoration-clone</code></strong>: 要素が分割された場合、各フラグメント (断片) が独立した要素であるかのように、それぞれの断片に対して装飾が適用されます。例えば、角丸は各行/各カラムの断片の四隅に適用されます。背景グラデーションなども各断片で繰り返されます。
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Slice (デフォルト) Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              Slice (デフォルト)
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>box-decoration-slice</code> は、分割された要素の装飾を要素全体で一度だけ適用します。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              この例では、背景のグラデーションは要素全体に適用され、各行でスライスされています。パディングも要素全体の外側に適用されます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{sliceHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <SliceExample />
            </div>
          </CardContent>
        </Card>

        {/* Clone Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              Clone
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>box-decoration-clone</code> は、分割された各断片に装飾を個別に適用します。
            </CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-stone-700 dark:text-stone-300 mb-4">
              この例では、背景のグラデーションとパディングが各行 (断片) ごとに適用されています。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{cloneHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <CloneExample />
            </div>
          </CardContent>
        </Card>

        {/* レスポンシブ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみ <code>box-decoration-break</code> プロパティを適用できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>md:box-decoration-clone</code> は中程度の画面サイズ以上でのみ <code>clone</code> の挙動を適用します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<span class="box-decoration-slice md:box-decoration-clone ...">
  テキスト...
</span>
              `.trim()}</code>
            </pre>
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
                このプロパティの効果は、要素が実際に複数行や複数カラムに分割される場合にのみ現れます。単一行のインライン要素や、分割されないブロック要素には影響しません。
              </li>
              <li>
                特にインライン要素 (<code>&amp;lt;span&amp;gt;</code> など) が複数行にわたる場合に、背景やパディングの表示を制御するのに役立ちます。
              </li>
              <li>
                ブラウザのサポート状況を確認してください。比較的新しい CSS プロパティです。
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
                <code>break-inside</code>, <code>break-before</code>, <code>break-after</code>: 要素の改ページ/改カラムの挙動を制御します。
              </li>
              <li>
                <code>columns</code>: コンテンツを複数カラムに分割します。<code>box-decoration-break</code> の効果を確認しやすい状況を作ります。
              </li>
               <li>
                各種装飾ユーティリティ (<code>bg-*</code>, <code>border-*</code>, <code>p-*</code>, <code>rounded-*</code>, <code>shadow-*</code> など): これらの装飾が分割時にどのように扱われるかを <code>box-decoration-break</code> で制御します。
              </li>
            </ul>
          </CardContent>
        </Card>
    </ArticleLayout>
  );
};

export default BoxDecorationBreakPage;
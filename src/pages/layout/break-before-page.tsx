import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ArticleLayout from '@/components/layout/ArticleLayout'; // ArticleLayout をインポート

// 各コードサンプルに対応するReact実装コンポーネント
// 注意: break-before の効果は主に印刷時や複数カラムレイアウトで顕著になります。
//       Webブラウザ上での視覚的な変化は限定的か、または確認が難しい場合があります。
//       以下のサンプルはクラスの適用を示すもので、実際の改ページ/改カラム効果は
//       コンテキスト (カラムレイアウト、印刷プレビューなど) に依存します。

const AutoExample: React.FC = () => {
  return (
    <div className="columns-2 gap-8">
      <p>最初の段落。</p>
      <p className="break-before-auto bg-blue-100 dark:bg-blue-900 p-2 rounded">この段落の前もデフォルトの挙動です。</p>
      <p>前の段落に続く段落。</p>
      <p>さらに次の段落。</p>
    </div>
  );
};

const AvoidExample: React.FC = () => {
  return (
    <div className="columns-2 gap-8">
      <p>最初の段落。</p>
      <p className="break-before-avoid bg-green-100 dark:bg-green-900 p-2 rounded">この段落の前では、可能な限り改ページ/改カラムを避けます。</p>
      <p>前の段落と同じカラム/ページに配置されようとします。</p>
      <p>さらに次の段落。</p>
    </div>
  );
};

const AllExample: React.FC = () => {
  return (
    <div className="columns-2 gap-8">
      <p>最初の段落。</p>
      <p className="break-before-all bg-red-100 dark:bg-red-900 p-2 rounded">この段落の前では、常に改ページ/改カラムが行われます。</p>
      <p>この段落は新しいカラム/ページから始まります。</p>
      <p>さらに次の段落。</p>
    </div>
  );
};

const AvoidPageExample: React.FC = () => {
  return (
    <div> {/* カラムレイアウトなしで表示 */}
      <p>最初の段落。</p>
      <p className="break-before-avoid-page bg-yellow-100 dark:bg-yellow-900 p-2 rounded">この段落の前では、可能な限り改ページを避けます (印刷時)。</p>
      <p>印刷プレビューで確認すると、前の段落と同じページに配置されようとします。</p>
    </div>
  );
};

const PageExample: React.FC = () => {
  return (
    <div> {/* カラムレイアウトなしで表示 */}
      <p>最初の段落。</p>
      <p className="break-before-page bg-purple-100 dark:bg-purple-900 p-2 rounded">この段落の前では、常に改ページが行われます (印刷時)。</p>
      <p>この段落は印刷プレビューで確認すると、新しいページから始まります。</p>
    </div>
  );
};

const ColumnExample: React.FC = () => {
    return (
      <div className="columns-2 gap-8">
        <p>最初の段落。</p>
        <p className="break-before-column bg-pink-100 dark:bg-pink-900 p-2 rounded">この段落の前では、常に改カラムが行われます。</p>
        <p>この段落は新しいカラムから始まります。</p>
        <p>さらに次の段落。</p>
      </div>
    );
  };


// ページコンポーネント本体
const BreakBeforePage: React.FC = () => {
  // コードスニペットを定義
  const autoHtml = `
<div class="columns-2">
  <p>...</p>
  <p class="break-before-auto">この段落の前もデフォルトの挙動</p>
  <p>...</p>
</div>
  `.trim();

  const avoidHtml = `
<div class="columns-2">
  <p>...</p>
  <p class="break-before-avoid">この段落の前では改ページ/改カラムを避ける</p>
  <p>...</p>
</div>
  `.trim();

  const allHtml = `
<div class="columns-2">
  <p>...</p>
  <p class="break-before-all">この段落の前で常に改ページ/改カラム</p> {/* 新しいカラム/ページから開始 */}
  <p>...</p>
</div>
  `.trim();

  const avoidPageHtml = `
<div>
  <p>...</p>
  <p class="break-before-avoid-page">この段落の前で改ページを避ける (印刷時)</p>
  <p>...</p>
</div>
  `.trim();

  const pageHtml = `
<div>
  <p>...</p>
  <p class="break-before-page">この段落の前で常に改ページ (印刷時)</p> {/* 新しいページから開始 */}
  <p>...</p>
</div>
  `.trim();

  const columnHtml = `
<div class="columns-2">
  <p>...</p>
  <p class="break-before-column">この段落の前で常に改カラム</p> {/* 新しいカラムから開始 */}
  <p>...</p>
</div>
  `.trim();

// 参照リンクの定義を追加
const links = [
  {
    title: 'Tailwind CSS: Break Before',
    url: 'https://tailwindcss.com/docs/break-before',
  },
  {
    title: 'MDN: break-before',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/break-before',
  },
];

  return (
    <ArticleLayout title="Layout: Break Before (要素前の改ページ/改カラム)" links={links}>

      <Helmet>
        <title>Layout: Break Before - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Layout: Break Before utility in Tailwind CSS. Examples and usage details for Layout: Break Before." />
        {/* OGP タグ */}
        <meta property="og:title" content="Layout: Break Before - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Layout: Break Before utility in Tailwind CSS. Examples and usage details for Layout: Break Before." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/layout/break-before" />
        {/* <meta property="og:image" content="[画像のURL]" /> */} {/* 必要に応じて画像URLを設定 */}
      </Helmet>
        {/* 概要 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              概要
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の前にどのように改ページ (page break) または改カラム (column break) を行うかを制御するためのユーティリティクラスです。
              主に印刷レイアウトや複数カラムレイアウト (<code>columns-*</code>) で使用されます。
            </p>
            <p>
              CSS の <code>break-before</code> プロパティを制御します。
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
              <code>break-before-{'{value}'}</code> の形式でクラスを指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>break-before-auto</code></strong>: デフォルト。要素の前で改ページ/改カラムを強制も回避もしません。</li>
              <li><strong><code>break-before-avoid</code></strong>: 要素の前での改ページ/改カラムを可能な限り回避します。</li>
              <li><strong><code>break-before-all</code></strong>: 要素の前で常に改ページ/改カラムを強制します。</li>
              <li><strong><code>break-before-avoid-page</code></strong>: 要素の前での改ページを可能な限り回避します (印刷コンテキスト)。</li>
              <li><strong><code>break-before-page</code></strong>: 要素の前で常に改ページを強制します (印刷コンテキスト)。</li>
              <li><strong><code>break-before-left</code></strong>: 要素の前で、その要素が左ページから始まるように1つまたは2つの改ページを強制します (印刷コンテキスト、見開きページ)。</li>
              <li><strong><code>break-before-right</code></strong>: 要素の前で、その要素が右ページから始まるように1つまたは2つの改ページを強制します (印刷コンテキスト、見開きページ)。</li>
              <li><strong><code>break-before-column</code></strong>: 要素の前で常に改カラムを強制します (複数カラムレイアウト)。</li>
            </ul>
             <p className="mt-4 text-sm text-stone-600 dark:text-stone-400">
              ※ <code>left</code>, <code>right</code> は特定の印刷シナリオ向けであり、一般的なWeb表示では効果がありません。
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
              各パラメータの適用例。効果はコンテキスト (カラムレイアウト、印刷プレビュー) に依存します。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Auto */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">break-before-auto (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{autoHtml}</code>
              </pre>
              <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
                <AutoExample />
              </div>
            </div>
            {/* Avoid */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">break-before-avoid</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{avoidHtml}</code>
              </pre>
              <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
                <AvoidExample />
              </div>
            </div>
             {/* All */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">break-before-all</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{allHtml}</code>
              </pre>
              <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
                <AllExample />
              </div>
            </div>
             {/* Avoid Page */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">break-before-avoid-page (印刷時)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{avoidPageHtml}</code>
              </pre>
              <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
                <AvoidPageExample />
              </div>
            </div>
             {/* Page */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">break-before-page (印刷時)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{pageHtml}</code>
              </pre>
              <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
                <PageExample />
              </div>
            </div>
             {/* Column */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">break-before-column</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{columnHtml}</code>
              </pre>
              <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
                <ColumnExample />
              </div>
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみ <code>break-before</code> プロパティを適用できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>md:break-before-column</code> は中程度の画面サイズ以上でのみ要素の前に改カラムを強制します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="columns-1 md:columns-2">
  <p>...</p>
  {/* 中画面以上でのみ改カラム */}
  <p class="md:break-before-column">この段落の前、md以上で改カラム</p>
  <p>...</p>
</div>
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
                <code>break-before</code> の効果は、コンテナが複数カラムレイアウト (<code>columns-*</code>) であるか、印刷コンテキストであるかに強く依存します。通常の単一カラムのWebページ表示では、<code>break-before-column</code> や <code>break-before-page</code> などは視覚的な効果を示さないことが多いです。
              </li>
              <li>
                ブラウザのサポート状況は比較的新しい機能であるため、古いブラウザでは意図した通りに動作しない可能性があります。
              </li>
               <li>
                <code>break-before-left</code> と <code>break-before-right</code> は、見開きページ (recto/verso) を持つ印刷物など、非常に特殊な状況向けです。
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
                <code>break-after</code> (<code>break-after-column</code> など): 要素の<strong>後</strong>で改ページ/改カラムを制御します。
              </li>
              <li>
                <code>break-inside</code> (<code>break-inside-avoid</code> など): 要素の<strong>内部</strong>で改ページ/改カラムが発生するのを防ぎます。
              </li>
              <li>
                <code>columns</code> (<code>columns-2</code>, <code>columns-md</code> など): コンテンツを複数カラムに分割します。<code>break-before-column</code> などと組み合わせて使用されます。
              </li>
            </ul>
          </CardContent>
        </Card>
    </ArticleLayout>
  );
};

export default BreakBeforePage;
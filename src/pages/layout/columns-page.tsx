import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ArticleLayout from '@/components/layout/ArticleLayout'; // ArticleLayout をインポート

// 各コードサンプルに対応するReact実装コンポーネント
const BasicExample: React.FC = () => {
  return (
    <div className="columns-2 gap-8">
      <img className="w-full aspect-video mb-4 rounded" src="https://via.placeholder.com/600x400/cbd5e1/475569?text=Image+1" alt="Placeholder 1" />
      <img className="w-full aspect-square mb-4 rounded" src="https://via.placeholder.com/400x400/fecaca/7f1d1d?text=Image+2" alt="Placeholder 2" />
      <img className="w-full aspect-video mb-4 rounded" src="https://via.placeholder.com/600x400/a5f3fc/0e7490?text=Image+3" alt="Placeholder 3" />
      <img className="w-full aspect-square mb-4 rounded" src="https://via.placeholder.com/400x400/fef08a/854d0e?text=Image+4" alt="Placeholder 4" />
      <img className="w-full aspect-video mb-4 rounded" src="https://via.placeholder.com/600x400/d1fae5/065f46?text=Image+5" alt="Placeholder 5" />
      <img className="w-full aspect-square mb-4 rounded" src="https://via.placeholder.com/400x400/fbcfe8/86198f?text=Image+6" alt="Placeholder 6" />
    </div>
  );
};

const FixedWidthExample: React.FC = () => {
  return (
    <div className="columns-xs gap-8"> {/* columns-xs は 24rem (384px) */}
      <img className="w-full aspect-video mb-4 rounded" src="https://via.placeholder.com/600x400/cbd5e1/475569?text=Image+1" alt="Placeholder 1" />
      <img className="w-full aspect-square mb-4 rounded" src="https://via.placeholder.com/400x400/fecaca/7f1d1d?text=Image+2" alt="Placeholder 2" />
      <img className="w-full aspect-video mb-4 rounded" src="https://via.placeholder.com/600x400/a5f3fc/0e7490?text=Image+3" alt="Placeholder 3" />
      <img className="w-full aspect-square mb-4 rounded" src="https://via.placeholder.com/400x400/fef08a/854d0e?text=Image+4" alt="Placeholder 4" />
      <img className="w-full aspect-video mb-4 rounded" src="https://via.placeholder.com/600x400/d1fae5/065f46?text=Image+5" alt="Placeholder 5" />
      <img className="w-full aspect-square mb-4 rounded" src="https://via.placeholder.com/400x400/fbcfe8/86198f?text=Image+6" alt="Placeholder 6" />
    </div>
  );
};

const ResponsiveExample: React.FC = () => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
      <img className="w-full aspect-video mb-4 rounded" src="https://via.placeholder.com/600x400/cbd5e1/475569?text=Image+1" alt="Placeholder 1" />
      <img className="w-full aspect-square mb-4 rounded" src="https://via.placeholder.com/400x400/fecaca/7f1d1d?text=Image+2" alt="Placeholder 2" />
      <img className="w-full aspect-video mb-4 rounded" src="https://via.placeholder.com/600x400/a5f3fc/0e7490?text=Image+3" alt="Placeholder 3" />
      <img className="w-full aspect-square mb-4 rounded" src="https://via.placeholder.com/400x400/fef08a/854d0e?text=Image+4" alt="Placeholder 4" />
      <img className="w-full aspect-video mb-4 rounded" src="https://via.placeholder.com/600x400/d1fae5/065f46?text=Image+5" alt="Placeholder 5" />
      <img className="w-full aspect-square mb-4 rounded" src="https://via.placeholder.com/400x400/fbcfe8/86198f?text=Image+6" alt="Placeholder 6" />
    </div>
  );
};

const AutoExample: React.FC = () => {
    return (
      <div className="columns-auto gap-8"> {/* columns-auto はデフォルト */}
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p className="mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p className="mb-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  };


// ページコンポーネント本体
const ColumnsPage: React.FC = () => {
  // コードスニペットを定義
  const basicHtml = `
<div class="columns-2 gap-8">
  <img class="w-full aspect-video ..." src="..." />
  <img class="w-full aspect-square ..." src="..." />
  {/* ... more images */}
</div>
  `.trim();

  const fixedWidthHtml = `
<div class="columns-xs gap-8"> {/* カラム幅 24rem */}
  <img class="w-full aspect-video ..." src="..." />
  <img class="w-full aspect-square ..." src="..." />
  {/* ... more images */}
</div>
  `.trim();

  const responsiveHtml = `
<div class="columns-1 md:columns-2 lg:columns-3 gap-8">
  <img class="w-full aspect-video ..." src="..." />
  <img class="w-full aspect-square ..." src="..." />
  {/* ... more images */}
</div>
  `.trim();

  const autoHtml = `
<div class="columns-auto gap-8"> {/* デフォルトの挙動 */}
  <p>...</p>
  <p>...</p>
  {/* ... more content */}
</div>
  `.trim();

// 参照リンクの定義を追加
const links = [
  {
    title: 'Tailwind CSS: Columns',
    url: 'https://tailwindcss.com/docs/columns',
  },
  {
    title: 'MDN: columns (shorthand property)',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/columns',
  },
  {
    title: 'MDN: column-count',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-count',
  },
  {
    title: 'MDN: column-width',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-width',
  },
];

  return (
    <ArticleLayout title="Layout: Columns (カラム)" links={links}>

      <Helmet>
        <title>Layout: Columns - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Layout: Columns utility in Tailwind CSS. Examples and usage details for Layout: Columns." />
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
              コンテンツを複数カラムに分割するためのユーティリティクラスです。テキストコンテンツや画像ギャラリーなどを、新聞記事のように段組み表示させたい場合に使用します。
            </p>
            <p>
              CSS の <code>column-count</code> および <code>column-width</code> プロパティを制御します。
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
              <code>columns-{'{count}'}</code> または <code>columns-{'{width}'}</code> の形式でクラスを指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong><code>columns-{'{count}'}</code> (例: <code>columns-2</code>, <code>columns-3</code>)</strong>:
                指定した数のカラムに分割します。<code>1</code> から <code>12</code> までの数値がデフォルトで用意されています。
              </li>
              <li>
                <strong><code>columns-{'{width}'}</code> (例: <code>columns-xs</code>, <code>columns-sm</code>)</strong>:
                カラムの最適な幅を指定します。ブラウザはコンテナの幅に基づいて、指定した幅を維持できる限り多くのカラムを作成します。デフォルトの幅スケール (<code>xs</code> から <code>7xl</code>) が利用可能です。
              </li>
              <li>
                <strong><code>columns-auto</code></strong>: デフォルト。ブラウザの標準的なカラム挙動に従います (通常は1カラム)。
              </li>
            </ul>
            <p>
              カラム間の溝 (gap) は <code>gap-{'{size}'}</code> ユーティリティ (例: <code>gap-8</code>) で調整します。
            </p>
          </CardContent>
        </Card>
        {/* カラム数指定 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              カラム数の指定
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>columns-{'{count}'}</code> を使用してカラム数を固定します。
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{basicHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="mt-4 p-4 border border-stone-300 dark:border-stone-600 rounded">
              <BasicExample />
            </div>
          </CardContent>
        </Card>
        {/* カラム幅指定 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              カラム幅の指定
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>columns-{'{width}'}</code> を使用して最適なカラム幅を指定します。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              この例では <code>columns-xs</code> (24rem / 384px) を指定しています。コンテナの幅に応じてカラム数が自動調整されます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{fixedWidthHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="mt-4 p-4 border border-stone-300 dark:border-stone-600 rounded">
              <FixedWidthExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてカラム数を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              この例では、デフォルトで1カラム、<code>md</code> 以上で2カラム、<code>lg</code> 以上で3カラムになります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{responsiveHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="mt-4 p-4 border border-stone-300 dark:border-stone-600 rounded">
              <ResponsiveExample />
            </div>
          </CardContent>
        </Card>
         {/* Auto Card */}
         <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              Auto (デフォルト)
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>columns-auto</code> はブラウザのデフォルトの挙動 (通常1カラム) になります。
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{autoHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="mt-4 p-4 border border-stone-300 dark:border-stone-600 rounded">
              <AutoExample />
            </div>
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
                カラム内の要素がカラム間で分割されるのを防ぎたい場合は、<code>break-inside-avoid</code> ユーティリティをその要素に適用します (例: 画像や特定のテキストブロック)。
              </li>
              <li>
                カラム間の溝の幅は <code>gap-{'{size}'}</code> で制御します。
              </li>
              <li>
                <code>columns-{'{width}'}</code> を使用する場合、実際のカラム数はコンテナの幅と指定されたカラム幅によって決まります。
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
                <code>gap</code> (<code>gap-4</code>, <code>gap-x-8</code> など): カラム間の溝 (gap) のサイズを制御します。<code>columns-*</code> と一緒に使う場合は <code>gap-*</code> (または <code>gap-x-*</code>) を使用します。
              </li>
              <li>
                <code>break-after</code> (<code>break-after-column</code> など): 要素の後でカラム区切りを強制または回避します。
              </li>
              <li>
                <code>break-before</code> (<code>break-before-column</code> など): 要素の前でカラム区切りを強制または回避します。
              </li>
              <li>
                <code>break-inside</code> (<code>break-inside-avoid</code>, <code>break-inside-avoid-column</code> など): 要素がカラム間で分割されるのを防ぎます。
              </li>
            </ul>
          </CardContent>
        </Card>
    </ArticleLayout>
  );
};

export default ColumnsPage;
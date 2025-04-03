import ArticleLayout from '@/components/layout/ArticleLayout';
import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; // Card コンポーネントをインポート
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
const BasicExample1: React.FC = () => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const BasicExample2: React.FC = () => {
  return (
    <div className="w-48 mx-auto">
      {/* 背景色を stone 系に変更 */}
      <div className="aspect-square bg-stone-200 dark:bg-stone-700 rounded flex items-center justify-center">
        <span className="text-stone-500 dark:text-stone-400">1:1</span>
        {/* <img src="..." alt="..." className="w-full h-full object-cover rounded"> */}
      </div>
    </div>
  );
};

const ResponsiveExample: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      {/* 背景色とテキスト色を stone 系に合わせた色 (例: indigo -> sky) に変更 */}
      <div className="aspect-square md:aspect-video bg-sky-200 dark:bg-sky-900 rounded flex items-center justify-center">
        <span className="text-sky-800 dark:text-sky-200">aspect-square md:aspect-video</span>
      </div>
    </div>
  );
};

const CustomExample: React.FC = () => {
  return (
    <div className="w-64 mx-auto">
      {/* 背景色とテキスト色を stone 系に合わせた色 (例: teal -> emerald) に変更 */}
      <div className="aspect-[4/3] bg-emerald-200 dark:bg-emerald-900 rounded flex items-center justify-center">
        <span className="text-emerald-800 dark:text-emerald-200">aspect-4/3 (要設定)</span>
      </div>
    </div>
  );
};

const ArbitraryExample: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* 背景色とテキスト色を stone 系に合わせた色 (例: rose -> pink) に変更 */}
      <div className="aspect-[2/1] bg-pink-200 dark:bg-pink-900 rounded flex items-center justify-center">
        <span className="text-pink-800 dark:text-pink-200">aspect-[2/1]</span>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const AspectRatioPage: React.FC = () => {
  // コードスニペットを定義 (変更なし)
  const basicHtml1 = `
{/* 16:9 のアスペクト比を持つ iframe (例: YouTube埋め込み) */}
<div class="w-full max-w-xl mx-auto"> {/* 親要素で幅を指定 */}
  <div class="aspect-video">
    <iframe class="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>
  `.trim();

  const basicHtml2 = `
{/* 正方形のアスペクト比を持つ画像コンテナ */}
<div class="w-48 mx-auto"> {/* 親要素で幅を指定 */}
  <div class="aspect-square bg-stone-200 dark:bg-stone-700 rounded flex items-center justify-center"> {/* 背景色を更新 */}
    <span class="text-stone-500 dark:text-stone-400">1:1</span> {/* テキスト色を更新 */}
    {/* <img src="..." alt="..." class="w-full h-full object-cover rounded"> */}
  </div>
</div>
  `.trim();

  const responsiveHtml = `
{/* デフォルトは正方形、md以上で 16:9 */}
<div class="w-full max-w-md mx-auto">
  <div class="aspect-square md:aspect-video bg-sky-200 dark:bg-sky-900 rounded flex items-center justify-center"> {/* 色を更新 */}
    <span class="text-sky-800 dark:text-sky-200">aspect-square md:aspect-video</span> {/* 色を更新 */}
  </div>
</div>
  `.trim();

  const customizeJs = `
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3', // aspect-4/3 クラスを追加
        '3/2': '3 / 2', // aspect-3/2 クラスを追加
        'golden': '1.618 / 1', // aspect-golden クラスを追加
      },
    },
  },
}
  `.trim();

  const customizeHtml = `
{/* カスタムアスペクト比を使用 */}
<div class="w-64 mx-auto">
  <div class="aspect-4/3 bg-emerald-200 dark:bg-emerald-900 rounded flex items-center justify-center"> {/* 色を更新 */}
    <span class="text-emerald-800 dark:text-emerald-200">aspect-4/3</span> {/* 色を更新 */}
  </div>
</div>
  `.trim();

  const arbitraryHtml = `
{/* 任意のアスペクト比 2:1 を指定 */}
<div class="w-full max-w-lg mx-auto">
  <div class="aspect-[2/1] bg-pink-200 dark:bg-pink-900 rounded flex items-center justify-center"> {/* 色を更新 */}
    <span class="text-pink-800 dark:text-pink-200">aspect-[2/1]</span> {/* 色を更新 */}
  </div>
</div>
  `.trim();

  // 参照リンクの定義を追加
  const links = [
    {
      title: 'Tailwind CSS: Aspect Ratio',
      url: 'https://tailwindcss.com/docs/aspect-ratio',
    },
    {
      title: 'MDN: aspect-ratio',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio',
    },
  ];

  return (
    <ArticleLayout title="Layout: Aspect Ratio (アスペクト比)" links={links}>
      <Helmet>
        <title>Aspect Ratio - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn how to control the aspect ratio of elements using Tailwind CSS utility classes like aspect-square, aspect-video, and custom ratios." />
        {/* OGP タグ */}
        <meta property="og:title" content="Aspect Ratio - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn how to control the aspect ratio of elements using Tailwind CSS utility classes like aspect-square, aspect-video, and custom ratios." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/layout/aspect-ratio" />
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
            要素のアスペクト比（幅に対する高さの比率）を固定するためのユーティリティクラスです。主に動画
            (<code>iframe</code>)
            や画像の埋め込みで、親要素の幅に基づいて高さを自動調整し、指定した比率を維持したい場合に使用します。
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
            <code>aspect-{'{ratio}'}</code> の形式でクラスを指定します。
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>
              <strong>
                <code>aspect-auto</code>
              </strong>
              : デフォルト。要素固有のアスペクト比を使用します。
            </li>
            <li>
              <strong>
                <code>aspect-square</code>
              </strong>
              : アスペクト比を 1:1 (正方形) にします。
            </li>
            <li>
              <strong>
                <code>aspect-video</code>
              </strong>
              : アスペクト比を 16:9 (一般的な動画比率) にします。
            </li>
          </ul>
        </CardContent>
      </Card>
      {/* 基本例1 Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
            基本例 1: 動画 (16:9)
          </CardTitle>
          <CardDescription className="text-stone-600 dark:text-stone-400">
            16:9 のアスペクト比を持つ iframe (例: YouTube埋め込み)
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* コード表示 */}
          <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
            <code className="language-html">{basicHtml1}</code>
          </pre>
          {/* 実装サンプル */}
          <div className="mt-4 p-4 border border-stone-300 dark:border-stone-600 rounded">
            <BasicExample1 />
          </div>
        </CardContent>
      </Card>
      {/* 基本例2 Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
            基本例 2: 画像コンテナ (正方形)
          </CardTitle>
          <CardDescription className="text-stone-600 dark:text-stone-400">
            正方形のアスペクト比を持つ画像コンテナ
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* コード表示 */}
          <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
            <code className="language-html">{basicHtml2}</code>
          </pre>
          {/* 実装サンプル */}
          <div className="mt-4 p-4 border border-stone-300 dark:border-stone-600 rounded">
            <BasicExample2 />
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
            ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など)
            を使って、画面サイズに応じてアスペクト比を変更できます。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ例
          </h3>
          <p className="text-stone-700 dark:text-stone-300 mb-4">
            デフォルトは正方形、md以上で 16:9
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
      {/* カスタマイズ Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
            カスタマイズ (<code>tailwind.config.js</code>)
          </CardTitle>
          <CardDescription className="text-stone-600 dark:text-stone-400">
            <code>tailwind.config.js</code> の <code>theme.extend.aspectRatio</code>{' '}
            でカスタムのアスペクト比を追加できます。キーがクラス名 (<code>aspect-{'{key}'}</code>)
            になり、値が比率 (数値または <code>'width/height'</code> 形式の文字列) になります。
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* コード表示 (JS) */}
          <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
            <code className="language-javascript">{customizeJs}</code>
          </pre>
          <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mt-6 mb-2">
            カスタム例
          </h3>
          <p className="text-stone-700 dark:text-stone-300 mb-4">
            カスタムアスペクト比を使用 (<code>tailwind.config.js</code> での定義が必要です)
          </p>
          {/* コード表示 (HTML) */}
          <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
            <code className="language-html">{customizeHtml}</code>
          </pre>
          {/* 実装サンプル */}
          <div className="mt-4 p-4 border border-stone-300 dark:border-stone-600 rounded">
            <CustomExample />
          </div>
        </CardContent>
      </Card>
      {/* 任意の値 Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
            任意の値 (Arbitrary Values)
          </CardTitle>
          <CardDescription className="text-stone-600 dark:text-stone-400">
            設定ファイルで定義されていない任意のアスペクト比を直接クラス名に記述することも可能です。
            <code>aspect-[width/height]</code> の形式で指定します。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            任意の値の例
          </h3>
          <p className="text-stone-700 dark:text-stone-300 mb-4">任意のアスペクト比 2:1 を指定</p>
          {/* コード表示 */}
          <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
            <code className="language-html">{arbitraryHtml}</code>
          </pre>
          {/* 実装サンプル */}
          <div className="mt-4 p-4 border border-stone-300 dark:border-stone-600 rounded">
            <ArbitraryExample />
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
              このユーティリティは、要素の<strong>幅</strong>に基づいて<strong>高さ</strong>
              を自動調整します。したがって、通常は親要素や要素自身に幅を指定する必要があります (
              <code>w-full</code>, <code>max-w-md</code> など)。
            </li>
            <li>
              内部の要素 (例: <code>iframe</code>, <code>img</code>) には <code>w-full h-full</code>{' '}
              を適用して、アスペクト比コンテナいっぱいに広がるようにします。画像の場合は{' '}
              <code>object-fit</code> (例: <code>object-cover</code>) も併用すると良いでしょう。
            </li>
            <li>
              この機能は CSS の <code>aspect-ratio</code>{' '}
              プロパティに基づいています。古いブラウザではサポートされていない場合があります。
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
              <code>object-fit</code> (<code>object-cover</code>, <code>object-contain</code> など):{' '}
              <code>&amp;lt;img&amp;gt;</code> や <code>&amp;lt;video&amp;gt;</code>{' '}
              要素の内容がコンテナにどうフィットするかを制御します。
            </li>
            <li>
              <code>object-position</code> (<code>object-center</code>, <code>object-top</code>{' '}
              など): <code>object-fit</code> を使用した際の要素内容の位置を制御します。
            </li>
          </ul>
        </CardContent>
      </Card>
    </ArticleLayout>
  );
};

export default AspectRatioPage;

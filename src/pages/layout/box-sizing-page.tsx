import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ArticleLayout from '@/components/layout/ArticleLayout'; // ArticleLayout をインポート

// 各コードサンプルに対応するReact実装コンポーネント

const BorderBoxExample: React.FC = () => {
  return (
    <div className="box-border h-32 w-32 p-4 border-4 border-blue-500 bg-blue-100 dark:bg-blue-900">
      <p className="text-xs text-blue-800 dark:text-blue-200">
        box-border (デフォルト):<br />
        高さ 32 (128px)<br />
        幅 32 (128px)<br />
        Padding と Border は幅/高さに含まれる。
        コンテンツ領域: 128px - (16px*2) - (4px*2) = 88px
      </p>
    </div>
  );
};

const ContentBoxExample: React.FC = () => {
  return (
    <div className="box-content h-32 w-32 p-4 border-4 border-green-500 bg-green-100 dark:bg-green-900">
       <p className="text-xs text-green-800 dark:text-green-200">
        box-content:<br />
        高さ 32 (128px) + Padding + Border<br />
        幅 32 (128px) + Padding + Border<br />
        Padding と Border は幅/高さに追加される。
        実際の占有幅: 128px + (16px*2) + (4px*2) = 168px
      </p>
    </div>
  );
};

// ページコンポーネント本体
const BoxSizingPage: React.FC = () => {
  // コードスニペットを定義
  const borderBoxHtml = `
<div class="box-border h-32 w-32 p-4 border-4 ...">
  <!--
    高さ = 128px (h-32)
    幅 = 128px (w-32)
    Padding (p-4 = 16px) と Border (border-4 = 4px) は
    この 128x128px の中に含まれる。
    コンテンツ領域 = 128 - (16*2) - (4*2) = 88px
  -->
</div>
  `.trim();

  const contentBoxHtml = `
<div class="box-content h-32 w-32 p-4 border-4 ...">
  <!--
    高さ = 128px (h-32) + Padding + Border
    幅 = 128px (w-32) + Padding + Border
    Padding (p-4 = 16px) と Border (border-4 = 4px) は
    指定された 128x128px に追加される。
    実際の占有幅/高さ = 128 + (16*2) + (4*2) = 168px
  -->
</div>
  `.trim();

// 参照リンクの定義を追加
const links = [
  {
    title: 'Tailwind CSS: Box Sizing',
    url: 'https://tailwindcss.com/docs/box-sizing',
  },
  {
    title: 'MDN: box-sizing',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing',
  },
];

  return (
    <ArticleLayout title="Layout: Box Sizing (ボックスサイジング)" links={links}>

      <Helmet>
        <title>Layout: Box Sizing - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Layout: Box Sizing utility in Tailwind CSS. Examples and usage details for Layout: Box Sizing." />
        {/* OGP タグ */}
        <meta property="og:title" content="Layout: Box Sizing - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Layout: Box Sizing utility in Tailwind CSS. Examples and usage details for Layout: Box Sizing." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/layout/box-sizing" />
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
              要素の幅 (<code>width</code>) と高さ (<code>height</code>) を計算する際に、パディング (<code>padding</code>) と境界線 (<code>border</code>) を含めるかどうかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>box-sizing</code> プロパティを制御します。
            </p>
             <p>
              Tailwind CSS では、デフォルトですべての要素に <code>box-sizing: border-box;</code> が適用されています (Preflight による)。これにより、通常はこのユーティリティを意識する必要はあまりありませんが、挙動を理解しておくことは重要です。
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
              <code>box-{'{value}'}</code> の形式でクラスを指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong><code>box-border</code></strong>: デフォルト (Tailwind Preflight により)。要素の <code>width</code> と <code>height</code> に <code>padding</code> と <code>border</code> が<strong>含まれます</strong>。つまり、<code>w-32</code> (幅 128px) を指定した場合、パディングや境界線を追加しても要素の表示上の合計幅は 128px のままです (コンテンツ領域が狭まります)。レイアウト計算が直感的になります。
              </li>
              <li>
                <strong><code>box-content</code></strong>: 要素の <code>width</code> と <code>height</code> はコンテンツ領域のみを示し、<code>padding</code> と <code>border</code> はその外側に<strong>追加されます</strong>。つまり、<code>w-32</code> (幅 128px) を指定し、パディングや境界線を追加すると、要素の表示上の合計幅は 128px よりも大きくなります。
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Border Box (デフォルト) Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              Border Box (デフォルト)
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>box-border</code> は、幅と高さにパディングと境界線を含めます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              <code>h-32 w-32 p-4 border-4</code> を指定した場合、要素の表示上のサイズは 128px x 128px のままです。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{borderBoxHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded flex justify-center">
              <BorderBoxExample />
            </div>
          </CardContent>
        </Card>

        {/* Content Box Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              Content Box
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>box-content</code> は、幅と高さにパディングと境界線を追加します。
            </CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-stone-700 dark:text-stone-300 mb-4">
              <code>h-32 w-32 p-4 border-4</code> を指定した場合、要素の表示上のサイズは 128px + (16px*2) + (4px*2) = 168px 四方になります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{contentBoxHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded flex justify-center">
              <ContentBoxExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみ <code>box-sizing</code> プロパティを変更できます (通常は不要)。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>md:box-content</code> は中程度の画面サイズ以上でのみ <code>content-box</code> の挙動を適用します。ただし、Tailwind のデフォルト (<code>border-box</code>) を変更することは稀です。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="box-border md:box-content ...">
  <!-- デフォルトは border-box, md以上で content-box -->
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
                Tailwind CSS の Preflight スタイルにより、デフォルトで <code>box-sizing: border-box;</code> がグローバルに適用されています。これにより、ほとんどの場合 <code>box-border</code> を明示的に指定する必要はありません。
              </li>
              <li>
                <code>box-content</code> を使用すると、要素の最終的な表示サイズが <code>width</code>/<code>height</code> ユーティリティで指定した値と異なるため、レイアウト計算が複雑になる可能性があります。特別な理由がない限り、デフォルトの <code>box-border</code> を使用することが推奨されます。
              </li>
              <li>
                このプロパティは要素自身のサイズ計算方法に影響し、子要素のレイアウトには直接影響しません。
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
                <code>width</code> (<code>w-*</code>): 要素の幅を設定します。
              </li>
              <li>
                <code>height</code> (<code>h-*</code>): 要素の高さを設定します。
              </li>
              <li>
                <code>padding</code> (<code>p-*</code>, <code>px-*</code>, <code>py-*</code> など): 要素のパディングを設定します。
              </li>
               <li>
                <code>border</code> (<code>border</code>, <code>border-*</code> など): 要素の境界線を設定します。
              </li>
            </ul>
          </CardContent>
        </Card>
    </ArticleLayout>
  );
};

export default BoxSizingPage;
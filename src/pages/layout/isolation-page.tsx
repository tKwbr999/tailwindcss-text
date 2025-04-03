import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ArticleLayout from '@/components/layout/ArticleLayout'; // ArticleLayout をインポート

// 各コードサンプルに対応するReact実装コンポーネント
// 注意: isolation の効果は、mix-blend-mode や z-index と組み合わせた場合に顕著になります。
//       単独で使用しても視覚的な変化は通常ありません。

const NoIsolationExample: React.FC = () => {
  return (
    <div className="relative bg-gray-200 dark:bg-gray-700 p-8 rounded">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50"></div> {/* 背景要素 */}
      <div className="relative flex justify-around items-center h-32">
        {/* isolation なし */}
        <div className="w-24 h-24 bg-pink-500 rounded-full mix-blend-multiply"></div>
        <div className="w-24 h-24 bg-yellow-500 rounded-full mix-blend-multiply -mt-8"></div>
        <div className="w-24 h-24 bg-lime-500 rounded-full mix-blend-multiply"></div>
      </div>
       <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-400">
        <code>isolation</code> なし: 各要素が背景や他の要素とブレンドされます。
      </p>
    </div>
  );
};

const IsolationExample: React.FC = () => {
  return (
    <div className="relative bg-gray-200 dark:bg-gray-700 p-8 rounded">
       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50"></div> {/* 背景要素 */}
      {/* isolation あり */}
      <div className="isolate relative flex justify-around items-center h-32">
        <div className="w-24 h-24 bg-pink-500 rounded-full mix-blend-multiply"></div>
        <div className="w-24 h-24 bg-yellow-500 rounded-full mix-blend-multiply -mt-8"></div>
        <div className="w-24 h-24 bg-lime-500 rounded-full mix-blend-multiply"></div>
      </div>
       <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-400">
        <code>isolate</code> あり: このグループ内でブレンドされ、グループ全体が背景とはブレンドされません。
      </p>
    </div>
  );
};

const AutoExample: React.FC = () => {
    // isolation-auto はデフォルトなので、NoIsolationExample と同じ結果になるはず
    return (
      <div className="relative bg-gray-200 dark:bg-gray-700 p-8 rounded">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-50"></div> {/* 背景要素 */}
        <div className="isolation-auto relative flex justify-around items-center h-32">
          <div className="w-24 h-24 bg-red-500 rounded-full mix-blend-multiply"></div>
          <div className="w-24 h-24 bg-orange-500 rounded-full mix-blend-multiply -mt-8"></div>
          <div className="w-24 h-24 bg-amber-500 rounded-full mix-blend-multiply"></div>
        </div>
         <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-400">
          <code>isolation-auto</code> (デフォルト): 各要素が背景や他の要素とブレンドされます。
        </p>
      </div>
    );
  };


// ページコンポーネント本体
const IsolationPage: React.FC = () => {
  // コードスニペットを定義
  const noIsolationHtml = `
<div class="relative ...">
  {/* 背景 */}
  <div class="absolute inset-0 ..."></div>

  {/* isolation なし */}
  <div class="relative flex ...">
    <div class="... mix-blend-multiply">Element 1</div>
    <div class="... mix-blend-multiply">Element 2</div>
    <div class="... mix-blend-multiply">Element 3</div>
  </div>
</div>
  `.trim();

  const isolationHtml = `
<div class="relative ...">
  {/* 背景 */}
  <div class="absolute inset-0 ..."></div>

  {/* isolation あり */}
  <div class="isolate relative flex ...">
    <div class="... mix-blend-multiply">Element 1</div>
    <div class="... mix-blend-multiply">Element 2</div>
    <div class="... mix-blend-multiply">Element 3</div>
    {/* これらの要素は互いにブレンドされるが、グループ外(背景)とはブレンドされない */}
  </div>
</div>
  `.trim();

  const autoHtml = `
<div class="relative ...">
  {/* 背景 */}
  <div class="absolute inset-0 ..."></div>

  {/* isolation-auto (デフォルト) */}
  <div class="isolation-auto relative flex ...">
    <div class="... mix-blend-multiply">Element 1</div>
    <div class="... mix-blend-multiply">Element 2</div>
    <div class="... mix-blend-multiply">Element 3</div>
    {/* isolation なしの場合と同じ挙動 */}
  </div>
</div>
  `.trim();

// 参照リンクの定義を追加
const links = [
  {
    title: 'Tailwind CSS: Isolation',
    url: 'https://tailwindcss.com/docs/isolation',
  },
  {
    title: 'MDN: isolation',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/isolation',
  },
  {
    title: 'MDN: Stacking context (関連概念)',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context',
  },
];

  return (
    <ArticleLayout title="Layout: Isolation (分離)" links={links}>

      <Helmet>
        <title>Layout: Isolation - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Layout: Isolation utility in Tailwind CSS. Examples and usage details for Layout: Isolation." />
        {/* OGP タグ */}
        <meta property="og:title" content="Layout: Isolation - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Layout: Isolation utility in Tailwind CSS. Examples and usage details for Layout: Isolation." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/layout/isolation" />
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
              要素に対して新しいスタッキングコンテキスト (stacking context) を強制的に作成するためのユーティリティクラスです。
              これは主に、<code>z-index</code> や <code>mix-blend-mode</code> を使用する際に、要素が他の要素とどのように重なり合ったり、色が混合されたりするかを制御するのに役立ちます。
            </p>
            <p>
              CSS の <code>isolation</code> プロパティを制御します。
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
              <code>isolation</code> または <code>isolation-auto</code> クラスを要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong><code>isolate</code></strong> (<code>isolation: isolate;</code>): 要素に対して新しいスタッキングコンテキストを作成します。この要素内の子要素は、この要素の外部にある要素とは独立して重なり順 (<code>z-index</code>) や混合モード (<code>mix-blend-mode</code>) が計算されます。つまり、この要素を適用したグループ内の要素は互いに影響し合いますが、グループ全体として外部の要素とやり取りします。
              </li>
              <li>
                <strong><code>isolation-auto</code></strong> (<code>isolation: auto;</code>): デフォルト。新しいスタッキングコンテキストを作成しません。要素は通常のスタッキングコンテキストのルールに従います。
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Isolation なし Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              Isolation なし (デフォルト / isolation-auto)
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>isolation</code> を適用しない場合、要素は通常のスタッキングルールに従います。
            </CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-stone-700 dark:text-stone-300 mb-4">
              この例では、<code>mix-blend-multiply</code> を持つ各円が、互いだけでなく背景のグラデーションとも混合されています。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{noIsolationHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <NoIsolationExample />
            </div>
             {/* Auto のサンプルも表示 (結果は同じはず) */}
             <h3 className="font-semibold text-stone-700 dark:text-stone-300 mt-6 mb-2">isolation-auto (デフォルト)</h3>
             <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{autoHtml}</code>
            </pre>
             <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <AutoExample />
            </div>
          </CardContent>
        </Card>

        {/* Isolation あり Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              Isolation あり (isolate)
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>isolate</code> を適用すると、新しいスタッキングコンテキストが作成されます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              この例では、<code>isolate</code> を適用したコンテナ内の円は互いに <code>mix-blend-multiply</code> で混合されますが、コンテナ全体としては背景のグラデーションとは混合されません。グループが「分離」されているためです。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{isolationHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <IsolationExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみ <code>isolation</code> プロパティを適用できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>md:isolate</code> は中程度の画面サイズ以上でのみ新しいスタッキングコンテキストを作成します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="isolation-auto md:isolate ...">
  {/* デフォルトは auto, md以上で isolate */}
  ...
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
                <code>isolate</code> は、それ自体が直接的な視覚的変化をもたらすわけではありません。その効果は、内部要素の <code>z-index</code> や <code>mix-blend-mode</code> の解釈方法に影響を与えることで現れます。
              </li>
              <li>
                新しいスタッキングコンテキストを作成すると、その内部の <code>z-index</code> はそのコンテキスト内でのみ有効になり、外部の要素との比較には影響しなくなります。
              </li>
               <li>
                同様に、<code>isolate</code> を持つ要素内の <code>mix-blend-mode</code> は、その要素の背景 (スタッキングコンテキストのルート) と混合されますが、その要素の外部にある要素とは混合されません。
              </li>
              <li>
                パフォーマンスへの影響は通常軽微ですが、非常に複雑な DOM 構造や多数のスタッキングコンテキストが存在する場合は考慮が必要になるかもしれません。
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
                <code>z-index</code> (<code>z-10</code>, <code>z-auto</code> など): 要素のスタッキング順序 (重なり順) を制御します。<code>isolation</code> は <code>z-index</code> の解釈範囲に影響します。
              </li>
              <li>
                <code>mix-blend-mode</code> (<code>mix-blend-multiply</code>, <code>mix-blend-screen</code> など): 要素とその背景にある要素との色の混合方法を制御します。<code>isolation</code> は混合の範囲に影響します。
              </li>
              <li>
                <code>position</code> (<code>relative</code>, <code>absolute</code>, <code>fixed</code>, <code>sticky</code>): 要素の配置方法を制御します。特定の <code>position</code> 値 (<code>static</code> 以外) と <code>z-index</code> (<code>auto</code> 以外) の組み合わせなども新しいスタッキングコンテキストを作成する条件の一つですが、<code>isolate</code> はより明示的にコンテキスト作成を強制します。
              </li>
            </ul>
          </CardContent>
        </Card>
    </ArticleLayout>
  );
};

export default IsolationPage;
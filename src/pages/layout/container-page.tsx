import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
const BasicExample: React.FC = () => {
  return (
    <div className="container mx-auto bg-sky-100 dark:bg-sky-900 p-4 rounded">
      <p className="text-sky-800 dark:text-sky-200">
        これはコンテナ内のコンテンツです。コンテナは現在のブレークポイントに応じて最大幅を持ち、中央揃えされます。
      </p>
    </div>
  );
};

const CenteredExample: React.FC = () => {
  return (
    <div className="container bg-emerald-100 dark:bg-emerald-900 p-4 rounded">
      <p className="text-emerald-800 dark:text-emerald-200">
        <code>container</code> クラスを使用すると、通常 <code>mx-auto</code> を追加する必要はありません (設定で <code>center: true</code> がデフォルトの場合)。
      </p>
    </div>
  );
};

const PaddingExample: React.FC = () => {
  // この例は tailwind.config.js での padding 設定に依存します。
  // デフォルトでは padding は適用されませんが、設定で追加できます。
  return (
    <div className="container bg-indigo-100 dark:bg-indigo-900 p-4 rounded">
      <p className="text-indigo-800 dark:text-indigo-200">
        <code>tailwind.config.js</code> で <code>container.padding</code> を設定すると、コンテナにデフォルトのパディングを追加できます。この例では視覚的な変化はありませんが、設定が反映されていればパディングが適用されます。
      </p>
    </div>
  );
};


// ページコンポーネント本体
const ContainerPage: React.FC = () => {
  // コードスニペットを定義
  const basicHtml = `
<div class="container mx-auto">
  <!-- コンテンツ -->
</div>
  `.trim();

  const centeredHtml = `
{/* 通常、mx-auto は不要 (center: true の場合) */}
<div class="container">
  <!-- コンテンツ -->
</div>
  `.trim();

  const customizeJs = `
// tailwind.config.js
module.exports = {
  theme: {
    container: {
      center: true, // コンテナを中央揃えにする (デフォルト: true)
      padding: '2rem', // コンテナに左右のパディングを追加
      screens: { // ブレークポイントごとの最大幅を上書き
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    extend: {
      // 他の拡張設定
    },
  },
}
  `.trim();

  const paddingHtml = `
{/* tailwind.config.js で padding が設定されている場合 */}
<div class="container">
  {/* コンテンツには自動でパディングが適用される */}
</div>
  `.trim();


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Layout: Container (コンテナ)
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
              コンテンツを現在のブレークポイントに応じた固定幅で中央揃えするためのユーティリティクラスです。
              ウェブサイトのメインコンテンツエリアなど、特定の最大幅を持ち、画面中央に配置したい要素に使用します。
            </p>
          </CardContent>
        </Card>
        {/* 基本的な使い方 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              基本的な使い方
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素に <code>container</code> クラスを追加します。
              デフォルトでは、コンテナは各ブレークポイント (<code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>2xl</code>) で定義された最大幅 (<code>max-width</code>) を持ちます。
            </p>
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

        {/* 中央揃え Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              中央揃え
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              コンテナはデフォルトで中央揃えされます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              <code>tailwind.config.js</code> の <code>theme.container.center</code> が <code>true</code> (デフォルト) の場合、コンテナは自動的に中央揃えされます。そのため、通常 <code>mx-auto</code> を追加する必要はありません。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{centeredHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="mt-4 p-4 border border-stone-300 dark:border-stone-600 rounded">
              <CenteredExample />
            </div>
          </CardContent>
        </Card>

        {/* パディング Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              パディング
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              コンテナに左右のパディングを追加できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              <code>tailwind.config.js</code> の <code>theme.container.padding</code> を設定することで、コンテナにデフォルトの左右パディングを追加できます。これは、コンテナがビューポート幅いっぱいに広がるモバイル画面などで、コンテンツが画面端に接するのを防ぐのに役立ちます。
            </p>
            {/* コード表示 (HTML) */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{paddingHtml}</code>
            </pre>
             {/* 実装サンプル */}
             <div className="mt-4 p-4 border border-stone-300 dark:border-stone-600 rounded">
               <PaddingExample />
             </div>
             <p className="text-stone-700 dark:text-stone-300 mt-4">
              <strong>注意:</strong> このサンプルは <code>tailwind.config.js</code> での <code>padding</code> 設定に依存します。設定がない場合、視覚的なパディングは適用されません。
            </p>
          </CardContent>
        </Card>

        {/* カスタマイズ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              カスタマイズ (<code>tailwind.config.js</code>)
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>tailwind.config.js</code> の <code>theme.container</code> オブジェクトでコンテナの挙動をカスタマイズできます。
            </CardDescription>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
             <ul className="list-disc list-inside space-y-1 pl-4">
               <li>
                 <strong><code>center</code></strong>: <code>true</code> に設定するとコンテナを中央揃えします (デフォルト: <code>true</code>)。
               </li>
               <li>
                 <strong><code>padding</code></strong>: コンテナに適用するデフォルトの左右パディングを指定します。オブジェクト形式でブレークポイントごとに異なるパディングを指定することも可能です (例: <code>padding: {`{ DEFAULT: '1rem', sm: '2rem', lg: '4rem' }`}</code>)。
               </li>
               <li>
                 <strong><code>screens</code></strong>: デフォルトのブレークポイントごとの最大幅 (<code>max-width</code>) を上書きします。ここで指定しないブレークポイントはデフォルト値が使用されます。
               </li>
             </ul>
            {/* コード表示 (JS) */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-javascript">{customizeJs}</code>
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
                <code>container</code> は <code>max-width</code> を設定するユーティリティです。要素の幅そのものを設定するわけではありません。
              </li>
              <li>
                デフォルトでは、コンテナは <code>width: 100%</code> を持ち、設定された <code>max-width</code> を超えません。
              </li>
               <li>
                <code>center: true</code> (デフォルト) の場合、<code>margin-left: auto</code> と <code>margin-right: auto</code> が適用されるため、<code>mx-auto</code> を追加する必要はありません。
              </li>
              <li>
                <code>padding</code> 設定は、コンテナ自身のパディングとして適用されます。
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
                <code>max-width</code> (<code>max-w-sm</code>, <code>max-w-md</code> など): 要素の最大幅を直接設定します。
              </li>
              <li>
                <code>margin</code> (<code>mx-auto</code>, <code>ml-4</code> など): 要素のマージンを設定します。<code>mx-auto</code> はブロック要素を水平方向中央に配置するためによく使われます。
              </li>
              <li>
                <code>padding</code> (<code>p-4</code>, <code>px-8</code> など): 要素のパディングを設定します。
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
                  href="https://tailwindcss.com/docs/container"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Container
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContainerPage;
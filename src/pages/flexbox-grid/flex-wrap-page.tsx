import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const FlexWrapExample: React.FC = () => {
  return (
    <div className="flex flex-wrap bg-gray-100 dark:bg-gray-800 p-2 rounded w-64"> {/* 幅を制限して折り返しを発生させる */}
      <div className="w-1/2 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center border border-blue-400">Item 1 (1/2)</div>
      <div className="w-1/3 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center border border-blue-400">Item 2 (1/3)</div>
      <div className="w-1/2 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center border border-blue-400">Item 3 (1/2)</div>
      <div className="w-1/3 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center border border-blue-400">Item 4 (1/3)</div>
    </div>
  );
};

const FlexWrapReverseExample: React.FC = () => {
  return (
    <div className="flex flex-wrap-reverse bg-gray-100 dark:bg-gray-800 p-2 rounded w-64 h-32"> {/* 高さを指定 */}
      <div className="w-1/2 bg-green-300 dark:bg-green-700 p-2 rounded text-center border border-green-400">Item 1 (1/2)</div>
      <div className="w-1/3 bg-green-300 dark:bg-green-700 p-2 rounded text-center border border-green-400">Item 2 (1/3)</div>
      <div className="w-1/2 bg-green-300 dark:bg-green-700 p-2 rounded text-center border border-green-400">Item 3 (1/2)</div>
      <div className="w-1/3 bg-green-300 dark:bg-green-700 p-2 rounded text-center border border-green-400">Item 4 (1/3)</div>
    </div>
  );
};

const FlexNoWrapExample: React.FC = () => {
    return (
      <div className="flex flex-nowrap bg-gray-100 dark:bg-gray-800 p-2 rounded w-64 overflow-x-auto"> {/* overflow-x-auto で はみ出しを確認 */}
        <div className="w-1/2 flex-shrink-0 bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center border border-yellow-400">Item 1 (1/2)</div> {/* flex-shrink-0 で縮まないように */}
        <div className="w-1/3 flex-shrink-0 bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center border border-yellow-400 ml-2">Item 2 (1/3)</div>
        <div className="w-1/2 flex-shrink-0 bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center border border-yellow-400 ml-2">Item 3 (1/2)</div>
        <div className="w-1/3 flex-shrink-0 bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center border border-yellow-400 ml-2">Item 4 (1/3)</div>
      </div>
    );
  };


// ページコンポーネント本体
const FlexWrapPage: React.FC = () => {
  // コードスニペットを定義
  const flexWrapHtml = `
<div class="flex flex-wrap w-64 ..."> {/* 幅を制限 */}
  <div class="w-1/2 ...">Item 1</div>
  <div class="w-1/3 ...">Item 2</div>
  <div class="w-1/2 ...">Item 3</div> {/* 折り返して次の行へ */}
  <div class="w-1/3 ...">Item 4</div>
</div>
  `.trim();

  const flexWrapReverseHtml = `
<div class="flex flex-wrap-reverse w-64 h-32 ..."> {/* 高さを指定 */}
  <div class="w-1/2 ...">Item 1</div>
  <div class="w-1/3 ...">Item 2</div>
  <div class="w-1/2 ...">Item 3</div> {/* 折り返して前の行 (上) へ */}
  <div class="w-1/3 ...">Item 4</div>
</div>
  `.trim();

  const flexNoWrapHtml = `
<div class="flex flex-nowrap w-64 overflow-x-auto ..."> {/* 折り返さず、はみ出す */}
  <div class="w-1/2 flex-shrink-0 ...">Item 1</div> {/* shrink-0 */}
  <div class="w-1/3 flex-shrink-0 ...">Item 2</div>
  <div class="w-1/2 flex-shrink-0 ...">Item 3</div>
  <div class="w-1/3 flex-shrink-0 ...">Item 4</div>
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
          Flexbox & Grid: Flex Wrap (フレックス折り返し)
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
              フレックスコンテナ内のフレックスアイテムが、コンテナの主軸方向のスペースに収まらない場合に、複数行 (または複数列) に折り返すかどうか、およびその方向を制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>flex-wrap</code> プロパティを制御します。
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
              <code>flex-{'{wrap-value}'}</code> の形式でクラスをフレックスコンテナ (<code>display: flex</code> または <code>inline-flex</code> が適用された要素) に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>flex-wrap</code></strong>: アイテムがコンテナに収まらない場合、次の行 (または列) に折り返します。新しい行は下に追加されます (<code>flex-direction: row</code> の場合)。</li>
              <li><strong><code>flex-wrap-reverse</code></strong>: アイテムがコンテナに収まらない場合、前の行 (または列) に折り返します。新しい行は上に追加されます (<code>flex-direction: row</code> の場合)。</li>
              <li><strong><code>flex-nowrap</code></strong>: デフォルト。アイテムは折り返さず、コンテナの幅 (または高さ) を超えてはみ出すか、<code>flex-shrink</code> の設定に従って縮小します。</li>
            </ul>
          </CardContent>
        </Card>

        {/* 各パラメータの例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              各 flex-wrap 値の適用例。コンテナ幅は w-64。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Wrap */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">flex-wrap</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{flexWrapHtml}</code>
              </pre>
              <FlexWrapExample />
            </div>
            {/* Wrap Reverse */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">flex-wrap-reverse</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{flexWrapReverseHtml}</code>
              </pre>
              <FlexWrapReverseExample />
               <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                (アイテムが上方向に折り返しています)
              </p>
            </div>
             {/* No Wrap */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">flex-nowrap (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{flexNoWrapHtml}</code>
              </pre>
              <FlexNoWrapExample />
               <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                (アイテムは折り返さず、コンテナからはみ出しています。<code>flex-shrink-0</code> で縮小も防いでいます)
              </p>
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみ折り返し挙動を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>flex-nowrap md:flex-wrap</code> はデフォルトで折り返さず、中程度の画面サイズ以上で折り返すようにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="flex flex-nowrap md:flex-wrap ...">
  {/* ... items */}
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
                <code>flex-wrap</code> はフレックスコンテナに適用します。
              </li>
              <li>
                アイテムが折り返すかどうかは、コンテナのサイズとアイテムの <code>flex-basis</code> (または幅/高さ) の合計によって決まります。
              </li>
               <li>
                <code>flex-nowrap</code> (デフォルト) の場合、アイテムの合計サイズがコンテナを超えると、アイテムは <code>flex-shrink</code> の設定に従って縮小されるか、コンテナからはみ出します。
              </li>
               <li>
                <code>flex-wrap-reverse</code> は、交差軸 (cross axis) の方向を反転させます。<code>flex-direction: row</code> の場合は行が上に追加され、<code>flex-direction: column</code> の場合は列が左に追加されます (LTRの場合)。<code>align-content</code> や <code>align-items</code> の挙動にも影響します。
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
                <code>display</code> (<code>flex</code>, <code>inline-flex</code>): 要素をフレックスコンテナにします。
              </li>
              <li>
                <code>flex-direction</code> (<code>flex-row</code>, <code>flex-col</code> など): アイテムが配置される主軸方向を決定します。
              </li>
              <li>
                <code>flex-basis</code> (<code>basis-1/2</code>, <code>basis-auto</code> など): アイテムの初期サイズを設定します。
              </li>
               <li>
                <code>flex-grow</code> / <code>flex-shrink</code>: アイテムの伸縮性を制御します。
              </li>
               <li>
                <code>align-content</code> (<code>content-start</code>, <code>content-between</code> など): 複数行/列になった場合の、行/列間のスペース配分や揃え方を制御します。
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
                  href="https://tailwindcss.com/docs/flex-wrap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Flex Wrap
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: flex-wrap
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FlexWrapPage;
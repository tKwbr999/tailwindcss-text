import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const TransformOriginExample: React.FC = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'; // 山の画像例
  return (
    <div className="flex flex-wrap gap-8 items-center justify-center p-8"> {/* パディングを追加して回転が見えるように */}
      <div className="text-center">
        <img src={imageUrl} alt="Origin Center" className="origin-center rotate-45 transition-transform duration-300 hover:rotate-0 w-24 h-16 rounded" />
        <p className="text-xs mt-1">origin-center (Default)</p>
      </div>
      <div className="text-center">
        <img src={imageUrl} alt="Origin Top Left" className="origin-top-left rotate-45 transition-transform duration-300 hover:rotate-0 w-24 h-16 rounded" />
        <p className="text-xs mt-1">origin-top-left</p>
      </div>
      <div className="text-center">
        <img src={imageUrl} alt="Origin Bottom Right" className="origin-bottom-right rotate-45 transition-transform duration-300 hover:rotate-0 w-24 h-16 rounded" />
        <p className="text-xs mt-1">origin-bottom-right</p>
      </div>
       <div className="text-center">
        <img src={imageUrl} alt="Origin Top" className="origin-top rotate-45 transition-transform duration-300 hover:rotate-0 w-24 h-16 rounded" />
        <p className="text-xs mt-1">origin-top</p>
      </div>
       <div className="text-center">
        <img src={imageUrl} alt="Origin Left" className="origin-left rotate-45 transition-transform duration-300 hover:rotate-0 w-24 h-16 rounded" />
        <p className="text-xs mt-1">origin-left</p>
      </div>
    </div>
  );
};

const ArbitraryTransformOriginExample: React.FC = () => {
    const imageUrl = 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80';
    // 任意の値は CSS の transform-origin プロパティに直接渡せる値を指定
    return (
       <div className="text-center">
        <img src={imageUrl} alt="Arbitrary Origin" className="origin-[30%_70%] rotate-45 transition-transform duration-300 hover:rotate-0 w-24 h-16 rounded" />
         <p className="text-xs mt-1">origin-[30%_70%]</p>
      </div>
    );
  };


// ページコンポーネント本体
const TransformOriginPage: React.FC = () => {
  // コードスニペットを定義
  const transformOriginHtml = `
<img class="origin-center ... rotate-45 ..."> {/* center (Default) */}
<img class="origin-top-left ... rotate-45 ..."> {/* top left */}
<img class="origin-top ... rotate-45 ...">    {/* top */}
<img class="origin-right ... rotate-45 ...">  {/* right */}
{/* ... 他の方向 (top-right, left, bottom-left, bottom, bottom-right) */}
  `.trim();

  const arbitraryTransformOriginHtml = `<img class="origin-[30%_70%] ... rotate-45 ...">`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Transforms: Transform Origin (変形の原点)
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
              要素の transform (回転、拡大縮小、傾斜) の原点を設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>transform-origin</code> プロパティを制御します。
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
              <code>origin-{'{keyword}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p><code>{'{keyword}'}</code> には、原点の位置を示すキーワードを指定します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>origin-center</code></strong> (中央 - デフォルト)</li>
              <li><strong><code>origin-top</code></strong> (上辺中央)</li>
              <li><strong><code>origin-top-right</code></strong> (右上隅)</li>
              <li><strong><code>origin-right</code></strong> (右辺中央)</li>
              <li><strong><code>origin-bottom-right</code></strong> (右下隅)</li>
              <li><strong><code>origin-bottom</code></strong> (下辺中央)</li>
              <li><strong><code>origin-bottom-left</code></strong> (左下隅)</li>
              <li><strong><code>origin-left</code></strong> (左辺中央)</li>
              <li><strong><code>origin-top-left</code></strong> (左上隅)</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>origin-[30%_70%]</code>) も使用可能です (Tailwind JIT モード)。CSS の <code>transform-origin</code> で有効な値を指定します (例: <code>50px 50px</code>, <code>top 10px</code>)。
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
              異なる変形原点の適用例。要素は 45度 回転しており、ホバーすると回転が解除されます。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Transform Origin */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準の変形原点</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{transformOriginHtml}</code>
              </pre>
              <TransformOriginExample />
            </div>
            {/* Arbitrary Transform Origin */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryTransformOriginHtml}</code>
              </pre>
              <ArbitraryTransformOriginExample />
            </div>
          </CardContent>
        </Card>

        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブと状態変化
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイント (<code>md:origin-top</code> など) や状態 (<code>hover:origin-bottom</code> など) に応じて変形の原点を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ホバー時に原点を左上に変更する例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<img class="origin-center hover:origin-top-left rotate-45 transition duration-300 ..." src="...">
              `.trim()}</code>
            </pre>
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
                <code>transform</code>: transform 機能を有効にします (通常は自動)。
              </li>
              <li>
                <code>scale-*</code>, <code>rotate-*</code>, <code>translate-*</code>, <code>skew-*</code>: 要素を変形させるユーティリティ。
              </li>
               <li>
                <code>transition-*</code>: 変形を滑らかにするために使用します。
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
                  href="https://tailwindcss.com/docs/transform-origin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Transform Origin
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: transform-origin
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TransformOriginPage;
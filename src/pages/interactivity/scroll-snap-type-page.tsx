import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const ScrollSnapTypeExample: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Snap None (Default) */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-none (デフォルト)</h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-none bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-center flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">Item 1</div>
          <div className="snap-center flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">Item 2</div>
          <div className="snap-center flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">Item 3</div>
        </div>
         <p className="text-xs text-gray-500 mt-1">スクロールはスナップしません。</p>
      </div>

      {/* Snap X */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-x</h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-mandatory scroll-pl-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">Item 1</div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">Item 2</div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">Item 3</div>
        </div>
         <p className="text-xs text-gray-500 mt-1">水平方向 (X軸) にスナップします。</p>
      </div>

      {/* Snap Y */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-y</h3>
        <div className="w-full h-48 overflow-y-auto flex flex-col space-y-4 snap-y snap-mandatory scroll-pt-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-start flex-shrink-0 w-full h-32 bg-yellow-200 dark:bg-yellow-800 rounded flex items-center justify-center">Item 1</div>
          <div className="snap-start flex-shrink-0 w-full h-32 bg-yellow-200 dark:bg-yellow-800 rounded flex items-center justify-center">Item 2</div>
          <div className="snap-start flex-shrink-0 w-full h-32 bg-yellow-200 dark:bg-yellow-800 rounded flex items-center justify-center">Item 3</div>
        </div>
         <p className="text-xs text-gray-500 mt-1">垂直方向 (Y軸) にスナップします。</p>
      </div>

       {/* Snap Both */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-both</h3>
         <p className="text-xs text-gray-500 mb-1">水平・垂直両方向にスナップします (この例では水平方向のみ表示)。</p>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-both snap-mandatory scroll-pl-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center">Item 1</div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center">Item 2</div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center">Item 3</div>
        </div>
      </div>

       {/* Snap Mandatory */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-mandatory (snap-x と併用)</h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-mandatory scroll-pl-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-red-200 dark:bg-red-800 rounded flex items-center justify-center">Mandatory 1</div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-red-200 dark:bg-red-800 rounded flex items-center justify-center">Mandatory 2</div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-red-200 dark:bg-red-800 rounded flex items-center justify-center">Mandatory 3</div>
        </div>
         <p className="text-xs text-gray-500 mt-1">スクロール後、最も近いスナップポイントに強制的に移動します。</p>
      </div>

       {/* Snap Proximity */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-proximity (snap-x と併用)</h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-proximity scroll-pl-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-orange-200 dark:bg-orange-800 rounded flex items-center justify-center">Proximity 1</div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-orange-200 dark:bg-orange-800 rounded flex items-center justify-center">Proximity 2</div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-orange-200 dark:bg-orange-800 rounded flex items-center justify-center">Proximity 3</div>
        </div>
         <p className="text-xs text-gray-500 mt-1">スクロール後、スナップポイントが十分に近い場合にのみ移動します。</p>
      </div>
    </div>
  );
};


// ページコンポーネント本体
const ScrollSnapTypePage: React.FC = () => {
  // コードスニペットを定義
  const scrollSnapTypeHtml = `
{/* No snapping */}
<div class="snap-none ...">...</div>

{/* Snap on the X axis */}
<div class="snap-x ...">...</div>

{/* Snap on the Y axis */}
<div class="snap-y ...">...</div>

{/* Snap on both axes */}
<div class="snap-both ...">...</div>

{/* Strictness: Mandatory */}
<div class="snap-x snap-mandatory ...">...</div>

{/* Strictness: Proximity */}
<div class="snap-x snap-proximity ...">...</div>
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
          Interactivity: Scroll Snap Type (スクロールスナップタイプ)
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
              スクロールコンテナでスクロールスナップをどのように適用するかを制御するためのユーティリティクラスです。どの軸でスナップするか、またスナップの厳密さを設定します。
            </p>
            <p>
              CSS の <code>scroll-snap-type</code> プロパティを制御します。
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
              スクロール可能なコンテナ要素に以下のクラスを適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>snap-none</code></strong>: スクロールスナップを無効にします (<code>scroll-snap-type: none;</code>)。これがデフォルトです。</li>
              <li><strong><code>snap-x</code></strong>: 水平軸 (X軸) でのみスナップします (<code>scroll-snap-type: x var(--tw-scroll-snap-strictness);</code>)。</li>
              <li><strong><code>snap-y</code></strong>: 垂直軸 (Y軸) でのみスナップします (<code>scroll-snap-type: y var(--tw-scroll-snap-strictness);</code>)。</li>
              <li><strong><code>snap-both</code></strong>: 水平・垂直両方の軸でスナップします (<code>scroll-snap-type: both var(--tw-scroll-snap-strictness);</code>)。</li>
            </ul>
             <p className="mt-4">厳密さ (Strictness) を制御するクラス (上記クラスと組み合わせて使用):</p>
             <ul className="list-disc list-inside space-y-1 pl-4">
               <li><strong><code>snap-mandatory</code></strong>: スクロール操作後、ブラウザは最も近いスナップポイントに自動的にスナップします (<code>--tw-scroll-snap-strictness: mandatory;</code>)。</li>
               <li><strong><code>snap-proximity</code></strong>: スクロール操作後、スナップポイントが十分に近い場合にのみブラウザはスナップします (<code>--tw-scroll-snap-strictness: proximity;</code>)。これがデフォルトの厳密さです。</li>
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
              異なるスクロールスナップタイプと厳密さの適用例。コンテナをスクロールして動作を確認してください。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Scroll Snap Type Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">スナップタイプと厳密さ</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{scrollSnapTypeHtml}</code>
              </pre>
              <ScrollSnapTypeExample />
            </div>
          </CardContent>
        </Card>

        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              特定のブレークポイントでのみスナップタイプを変更するには、クラス名の前にブレークポイントプレフィックスを追加します (例: <code>md:snap-y</code>, <code>lg:snap-mandatory</code>)。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常はスナップせず、中程度の画面サイズ以上で Y軸方向に強制スナップする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="snap-none md:snap-y md:snap-mandatory ...">
  {/* ... */}
</div>
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
                <code>scroll-snap-align-*</code>: スナップコンテナ内の要素がどのようにスナップするかを指定します。
              </li>
              <li>
                <code>scroll-snap-stop-*</code>: スナップを強制するかどうかを制御します。
              </li>
              <li>
                <code>scroll-padding-*</code>: スナップポートのパディングを設定します。
              </li>
               <li>
                <code>scroll-margin-*</code>: スナップする要素のマージンを設定します。
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
                  href="https://tailwindcss.com/docs/scroll-snap-type"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Scroll Snap Type
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: scroll-snap-type
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScrollSnapTypePage;
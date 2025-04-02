import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const ScrollSnapStopExample: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Snap Stop Normal (Default) */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-normal (デフォルト)</h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-mandatory scroll-pl-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-start snap-normal flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">Normal 1</div>
          <div className="snap-start snap-normal flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">Normal 2</div>
          <div className="snap-start snap-normal flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">Normal 3</div>
          <div className="snap-start snap-normal flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">Normal 4</div>
        </div>
         <p className="text-xs text-gray-500 mt-1">速くスクロールすると、中間のスナップポイントを通過することがあります。</p>
      </div>

      {/* Snap Stop Always */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-always</h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-mandatory scroll-pl-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-start snap-always flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">Always 1</div>
          <div className="snap-start snap-always flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">Always 2</div>
          <div className="snap-start snap-always flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">Always 3</div>
          <div className="snap-start snap-always flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">Always 4</div>
        </div>
         <p className="text-xs text-gray-500 mt-1">速くスクロールしても、各スナップポイントで必ず停止します。</p>
      </div>
    </div>
  );
};


// ページコンポーネント本体
const ScrollSnapStopPage: React.FC = () => {
  // コードスニペットを定義
  const scrollSnapStopHtml = `
{/* Default behavior: may skip snap points on fast scroll */}
<div class="snap-x snap-mandatory ...">
  <div class="snap-start snap-normal ...">...</div>
  {/* ... */}
</div>

{/* Always stop at each snap point */}
<div class="snap-x snap-mandatory ...">
  <div class="snap-start snap-always ...">...</div>
  {/* ... */}
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
          Interactivity: Scroll Snap Stop (スクロールスナップ停止)
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
              ユーザーが速くスクロールした場合に、ブラウザがスナップポイントを通過することを許可するかどうかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>scroll-snap-stop</code> プロパティを制御します。
            </p>
             <p>
              このユーティリティは、親のスクロールコンテナに <code>snap-x</code>, <code>snap-y</code>, または <code>snap-both</code> と、<code>snap-mandatory</code> または <code>snap-proximity</code> が設定されている場合に効果を発揮します。
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
              スナップコンテナ内の子要素に以下のクラスを適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>snap-normal</code></strong>: ブラウザが現在のスクロール位置と次のスナップポイントの間のスナップポイントを通過することを許可します (<code>scroll-snap-stop: normal;</code>)。これがデフォルトの挙動です。</li>
              <li><strong><code>snap-always</code></strong>: ブラウザが必ず最初の到達可能なスナップポイントで停止するように強制します (<code>scroll-snap-stop: always;</code>)。</li>
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
              <code>snap-normal</code> と <code>snap-always</code> の比較。コンテナを速くスクロールして動作の違いを確認してください。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Scroll Snap Stop Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">スクロールスナップ停止の制御</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{scrollSnapStopHtml}</code>
              </pre>
              <ScrollSnapStopExample />
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
              特定のブレークポイントでのみスナップ停止動作を変更するには、クラス名の前にブレークポイントプレフィックスを追加します (例: <code>md:snap-always</code>)。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常は <code>snap-normal</code> を使用し、中程度の画面サイズ以上で <code>snap-always</code> にする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="snap-normal md:snap-always ...">
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
                <code>scroll-snap-type-*</code>: 親コンテナでスナップ動作を有効にします。
              </li>
              <li>
                <code>scroll-snap-align-*</code>: スナップコンテナ内の要素がどのようにスナップするかを指定します。
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
                  href="https://tailwindcss.com/docs/scroll-snap-stop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Scroll Snap Stop
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: scroll-snap-stop
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScrollSnapStopPage;
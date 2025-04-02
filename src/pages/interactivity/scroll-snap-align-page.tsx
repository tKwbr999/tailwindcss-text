import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const ScrollSnapAlignExample: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Snap Start */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-start</h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-mandatory scroll-pl-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">Start</div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">Start</div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">Start</div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">Start</div>
        </div>
         <p className="text-xs text-gray-500 mt-1">要素の左端がコンテナの左端 (scroll-padding を考慮) にスナップします。</p>
      </div>

      {/* Snap Center */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-center</h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-mandatory bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-center flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">Center</div>
          <div className="snap-center flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">Center</div>
          <div className="snap-center flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">Center</div>
          <div className="snap-center flex-shrink-0 w-40 h-32 bg-green-200 dark:bg-green-800 rounded flex items-center justify-center">Center</div>
        </div>
         <p className="text-xs text-gray-500 mt-1">要素の中央がコンテナの中央にスナップします。</p>
      </div>

      {/* Snap End */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-end</h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-mandatory scroll-pr-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-end flex-shrink-0 w-40 h-32 bg-yellow-200 dark:bg-yellow-800 rounded flex items-center justify-center">End</div>
          <div className="snap-end flex-shrink-0 w-40 h-32 bg-yellow-200 dark:bg-yellow-800 rounded flex items-center justify-center">End</div>
          <div className="snap-end flex-shrink-0 w-40 h-32 bg-yellow-200 dark:bg-yellow-800 rounded flex items-center justify-center">End</div>
          <div className="snap-end flex-shrink-0 w-40 h-32 bg-yellow-200 dark:bg-yellow-800 rounded flex items-center justify-center">End</div>
        </div>
         <p className="text-xs text-gray-500 mt-1">要素の右端がコンテナの右端 (scroll-padding を考慮) にスナップします。</p>
      </div>
       {/* Snap None */}
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">snap-none</h3>
        <div className="w-full h-48 overflow-x-auto flex space-x-4 snap-x snap-mandatory bg-gray-100 dark:bg-gray-800 rounded p-4">
          <div className="snap-none flex-shrink-0 w-40 h-32 bg-red-200 dark:bg-red-800 rounded flex items-center justify-center">None</div>
          <div className="snap-none flex-shrink-0 w-40 h-32 bg-red-200 dark:bg-red-800 rounded flex items-center justify-center">None</div>
          <div className="snap-start flex-shrink-0 w-40 h-32 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center">Start (for comparison)</div>
          <div className="snap-none flex-shrink-0 w-40 h-32 bg-red-200 dark:bg-red-800 rounded flex items-center justify-center">None</div>
        </div>
         <p className="text-xs text-gray-500 mt-1">要素はスナップしません (コンテナが <code>snap-mandatory</code> でも)。</p>
      </div>
    </div>
  );
};


// ページコンポーネント本体
const ScrollSnapAlignPage: React.FC = () => {
  // コードスニペットを定義
  const scrollSnapAlignHtml = `
<div class="snap-x snap-mandatory ...">
  <div class="snap-start ...">...</div>
  <div class="snap-center ...">...</div>
  <div class="snap-end ...">...</div>
  <div class="snap-align-none ...">...</div> {/* Equivalent to snap-none */}
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
          Interactivity: Scroll Snap Align (スクロールスナップ位置揃え)
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
              スクロールスナップコンテナ内の要素が、コンテナのスナップポートに対してどのように位置揃えされるかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>scroll-snap-align</code> プロパティを制御します。
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
              <li><strong><code>snap-start</code></strong>: 要素の先頭 (左端または上端) をコンテナのスナップポートの先頭に揃えます (<code>scroll-snap-align: start;</code>)。</li>
              <li><strong><code>snap-center</code></strong>: 要素の中央をコンテナのスナップポートの中央に揃えます (<code>scroll-snap-align: center;</code>)。</li>
              <li><strong><code>snap-end</code></strong>: 要素の末尾 (右端または下端) をコンテナのスナップポートの末尾に揃えます (<code>scroll-snap-align: end;</code>)。</li>
              <li><strong><code>snap-align-none</code></strong> (または <strong><code>snap-none</code></strong>): 要素がスナップしないようにします (<code>scroll-snap-align: none;</code>)。</li>
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
              異なるスナップ位置揃えの適用例。水平方向にスクロールして動作を確認してください。コンテナには <code>snap-x snap-mandatory</code> が適用されています。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Scroll Snap Align Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">スナップ位置揃え</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{scrollSnapAlignHtml}</code>
              </pre>
              <ScrollSnapAlignExample />
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
              特定のブレークポイントでのみスナップ位置揃えを変更するには、クラス名の前にブレークポイントプレフィックスを追加します (例: <code>md:snap-center</code>)。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常は先頭揃えでスナップし、中程度の画面サイズ以上で中央揃えにする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="snap-start md:snap-center ...">
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
                  href="https://tailwindcss.com/docs/scroll-snap-align"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Scroll Snap Align
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: scroll-snap-align
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScrollSnapAlignPage;
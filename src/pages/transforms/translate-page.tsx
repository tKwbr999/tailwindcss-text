import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const TranslateExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-8 items-center justify-center p-4 h-32"> {/* 親要素に高さを設定 */}
      <button className="translate-x-4 transition-transform duration-300 hover:translate-x-0 bg-blue-500 text-white px-4 py-2 rounded">
        X: 4
      </button>
      <button className="-translate-x-1/2 transition-transform duration-300 hover:translate-x-0 bg-green-500 text-white px-4 py-2 rounded">
        X: -1/2
      </button>
      <button className="translate-y-8 transition-transform duration-300 hover:translate-y-0 bg-yellow-500 text-black px-4 py-2 rounded">
        Y: 8
      </button>
       <button className="-translate-y-full transition-transform duration-300 hover:translate-y-0 bg-purple-500 text-white px-4 py-2 rounded">
        Y: -full
      </button>
       <button className="translate-x-full translate-y-1/2 transition-transform duration-300 hover:translate-x-0 hover:translate-y-0 bg-red-500 text-white px-4 py-2 rounded">
        X: full, Y: 1/2
      </button>
    </div>
  );
};

const ArbitraryTranslateExample: React.FC = () => {
    return (
      <button className="translate-x-[100px] transition-transform duration-300 hover:translate-x-0 bg-teal-500 text-white px-4 py-2 rounded">
        Hover me (X: 100px)
      </button>
    );
  };


// ページコンポーネント本体
const TranslatePage: React.FC = () => {
  // コードスニペットを定義
  const translateHtml = `
{/* X軸方向の移動 */}
<button class="translate-x-4 ...">...</button>    {/* 右へ移動 (1rem) */}
<button class="-translate-x-1/2 ...">...</button> {/* 左へ要素幅の半分移動 */}
<button class="translate-x-full ...">...</button> {/* 右へ要素幅分移動 */}

{/* Y軸方向の移動 */}
<button class="translate-y-8 ...">...</button>    {/* 下へ移動 (2rem) */}
<button class="-translate-y-1/2 ...">...</button> {/* 上へ要素高さの半分移動 */}
<button class="translate-y-full ...">...</button> {/* 下へ要素高さ分移動 */}
  `.trim();

  const arbitraryTranslateHtml = `<button class="translate-x-[100px] ...">...</button>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Transforms: Translate (移動)
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
              要素を現在の位置から水平または垂直方向に移動させるためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>transform: translateX()</code>, <code>transform: translateY()</code>, または <code>transform: translate()</code> プロパティを制御します。
            </p>
             <p>
              これらのユーティリティを使用するには、要素に <code>transform</code> (または他の transform 関連ユーティリティ) が適用されている必要がありますが、Tailwind は通常これを自動的に処理します。
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
              以下の形式でクラスを要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>translate-x-{'{amount}'}</code></strong>: 水平方向 (X軸) に移動します。</li>
              <li><strong><code>translate-y-{'{amount}'}</code></strong>: 垂直方向 (Y軸) に移動します。</li>
              <li><strong><code>-translate-x-{'{amount}'}</code></strong>: 水平方向 (X軸) に逆向きに移動します。</li>
              <li><strong><code>-translate-y-{'{amount}'}</code></strong>: 垂直方向 (Y軸) に逆向きに移動します。</li>
            </ul>
            <p><code>{'{amount}'}</code> には、Tailwind のスペーシングスケール (例: 0, 1, 2, 4, px など) やパーセンテージ (例: 1/2, 1/3, full など) を指定します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>数値スケール (例: <code>translate-x-4</code> は <code>1rem</code>)</li>
              <li>パーセンテージ (例: <code>-translate-x-1/2</code> は <code>-50%</code>, <code>translate-y-full</code> は <code>100%</code>)</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>translate-x-[100px]</code>, <code>translate-y-[33.33%]</code>) も使用可能です (Tailwind JIT モード)。
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
              異なる移動量の適用例。ホバーして元の位置に戻る効果を確認してください。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Translate */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準の移動量</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{translateHtml}</code>
              </pre>
              <TranslateExample />
            </div>
            {/* Arbitrary Translate */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryTranslateHtml}</code>
              </pre>
              <ArbitraryTranslateExample />
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
              ブレークポイント (<code>md:translate-x-0</code> など) や状態 (<code>hover:translate-y-2</code>, <code>group-hover:translate-x-1</code> など) に応じて移動量を変更できます。トランジションと組み合わせるのが一般的です。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ホバー時に要素を右に 4 (1rem) 移動させる例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<button class="transition duration-300 ease-in-out translate-x-0 hover:translate-x-4 ...">
  Hover Me
</button>
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
                <code>transform-origin-*</code>: 変形の原点を設定します。
              </li>
              <li>
                他の transform ユーティリティ: <code>scale-*</code>, <code>rotate-*</code>, <code>skew-*</code>。
              </li>
               <li>
                <code>transition-*</code>: 移動変化を滑らかにするために使用します。
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
                  href="https://tailwindcss.com/docs/translate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Translate
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: translate()
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TranslatePage;
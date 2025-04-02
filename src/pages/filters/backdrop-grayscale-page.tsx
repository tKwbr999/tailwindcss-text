import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// 背景要素の上に半透明の要素を重ねて効果を示します。

const BackdropGrayscaleExample: React.FC = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'; // 山の画像例
  return (
    <div className="relative h-48 w-full rounded-lg overflow-hidden">
      <img src={imageUrl} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 grid grid-cols-2 gap-px"> {/* gap-px で境界線を表現 */}
        <div className="backdrop-grayscale bg-white/30 flex items-center justify-center p-2"><span className="text-black text-xs font-semibold">grayscale</span></div>
        <div className="backdrop-grayscale-0 bg-white/30 flex items-center justify-center p-2"><span className="text-black text-xs font-semibold">grayscale-0 (Default)</span></div>
      </div>
    </div>
  );
};

const ArbitraryBackdropGrayscaleExample: React.FC = () => {
    const imageUrl = 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80';
    // 任意の値は通常 0 (0%) から 1 (100%)
    return (
      <div className="relative h-32 w-64 rounded-lg overflow-hidden">
        <img src={imageUrl} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 backdrop-filter backdrop-grayscale-[50%] bg-white/30 flex items-center justify-center p-2">
          {/* backdrop-filter が必要になる場合がある */}
          <span className="text-black text-sm font-semibold">任意の値: backdrop-grayscale-[50%]</span>
        </div>
      </div>
    );
  };


// ページコンポーネント本体
const BackdropGrayscalePage: React.FC = () => {
  // コードスニペットを定義
  const backdropGrayscaleHtml = `
<div class="backdrop-grayscale ...">...</div>   {/* 100% grayscale */}
<div class="backdrop-grayscale-0 ...">...</div> {/* 0% grayscale (Default) */}
  `.trim();
  const arbitraryBackdropGrayscaleHtml = `<div class="backdrop-filter backdrop-grayscale-[50%] ...">...</div> {/* Requires JIT & backdrop-filter enabled */} `;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Filters: Backdrop Grayscale (背景グレースケール)
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
              要素の背後にあるコンテンツにグレースケールフィルターを適用するためのユーティリティクラスです。背景を白黒にします。
            </p>
            <p>
              CSS の <code>backdrop-filter: grayscale();</code> プロパティを制御します。
            </p>
            <p>
              <strong>注意:</strong> この効果を有効にするには、要素に透明または半透明の背景が必要です (例: <code>bg-white/50</code>)。
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
              <code>backdrop-grayscale</code> または <code>backdrop-grayscale-0</code> の形式でクラスを要素に適用します。要素には透明度のある背景色が必要です。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>backdrop-grayscale</code></strong>: 背景を完全にグレースケールにします (<code>backdrop-filter: grayscale(100%);</code>)。</li>
              <li><strong><code>backdrop-grayscale-0</code></strong>: 背景にグレースケールフィルターを適用しません (<code>backdrop-filter: grayscale(0%);</code>)。これがデフォルトの挙動です。</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>backdrop-grayscale-[50%]</code>) も使用可能です (Tailwind JIT モード)。0% から 100% の間のパーセンテージを指定します。この場合、<code>backdrop-filter</code> ユーティリティも必要になることがあります。
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
              背景グレースケールフィルターの適用例。半透明の白い背景 (bg-white/30) を使用。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Backdrop Grayscale */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準背景グレースケール</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{backdropGrayscaleHtml}</code>
              </pre>
              <BackdropGrayscaleExample />
            </div>
             {/* Arbitrary Backdrop Grayscale */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値 (JIT)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryBackdropGrayscaleHtml}</code>
              </pre>
              <ArbitraryBackdropGrayscaleExample />
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
              ブレークポイント (<code>md:backdrop-grayscale</code> など) や状態 (<code>hover:backdrop-grayscale-0</code> など) に応じて背景グレースケール効果を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時に背景のグレースケールを解除するインタラクションを作成できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="relative h-32 w-64 ...">
  <img src="..." class="absolute ...">
  <div class="absolute inset-0 backdrop-grayscale hover:backdrop-grayscale-0 transition duration-300 bg-white/30 ...">
    Hover Me
  </div>
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
                <code>backdrop-filter</code> プロパティは、すべてのブラウザで完全にサポートされているわけではありません。
              </li>
              <li>
                効果を視認するためには、要素に透明または半透明の背景が必要です。
              </li>
               <li>
                複数の <code>backdrop-filter</code> ユーティリティを組み合わせることができます。
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
                <code>backdrop-filter</code>: 他の背景フィルターユーティリティを有効にするための基本クラス。<code>backdrop-grayscale-*</code> は自動的にこれを有効にします。
              </li>
              <li>
                <code>filter</code> (<code>grayscale</code> など): 要素自体とその内容にフィルターを適用します。
              </li>
              <li>
                他の背景フィルターユーティリティ: <code>backdrop-blur</code>, <code>backdrop-brightness</code>, <code>backdrop-contrast</code>, <code>backdrop-hue-rotate</code>, <code>backdrop-invert</code>, <code>backdrop-opacity</code>, <code>backdrop-saturate</code>, <code>backdrop-sepia</code>。
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
                  href="https://tailwindcss.com/docs/backdrop-grayscale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Backdrop Grayscale
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: backdrop-filter
                </a>
              </li>
               <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: filter: grayscale() (関連)
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BackdropGrayscalePage;
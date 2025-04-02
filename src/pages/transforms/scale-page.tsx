import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const ScaleExample: React.FC = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'; // 山の画像例
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <img src={imageUrl} alt="Scale 0" className="scale-0 transition-transform duration-300 hover:scale-50 w-24 h-16 rounded" />
      <img src={imageUrl} alt="Scale 50" className="scale-50 transition-transform duration-300 hover:scale-75 w-24 h-16 rounded" />
      <img src={imageUrl} alt="Scale 75" className="scale-75 transition-transform duration-300 hover:scale-90 w-24 h-16 rounded" />
      <img src={imageUrl} alt="Scale 90" className="scale-90 transition-transform duration-300 hover:scale-100 w-24 h-16 rounded" />
      <img src={imageUrl} alt="Scale 100" className="scale-100 transition-transform duration-300 hover:scale-110 w-24 h-16 rounded" /> {/* Default */}
      <img src={imageUrl} alt="Scale 110" className="scale-110 transition-transform duration-300 hover:scale-125 w-24 h-16 rounded" />
      <img src={imageUrl} alt="Scale 125" className="scale-125 transition-transform duration-300 hover:scale-150 w-24 h-16 rounded" />
      <img src={imageUrl} alt="Scale 150" className="scale-150 transition-transform duration-300 hover:scale-100 w-24 h-16 rounded" />
    </div>
  );
};

const ScaleAxisExample: React.FC = () => {
    const imageUrl = 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80';
    return (
      <div className="flex flex-wrap gap-4 items-center">
        <img src={imageUrl} alt="Scale X 125" className="scale-x-125 transition-transform duration-300 hover:scale-x-100 w-24 h-16 rounded" />
        <img src={imageUrl} alt="Scale Y 125" className="scale-y-125 transition-transform duration-300 hover:scale-y-100 w-24 h-16 rounded" />
      </div>
    );
  };

const ArbitraryScaleExample: React.FC = () => {
    const imageUrl = 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80';
    return (
      <img src={imageUrl} alt="Arbitrary Scale" className="scale-[1.75] transition-transform duration-300 hover:scale-100 w-24 h-16 rounded" />
    );
  };


// ページコンポーネント本体
const ScalePage: React.FC = () => {
  // コードスニペットを定義
  const scaleHtml = `
<img class="scale-50 ..." src="...">   {/* 50% */}
<img class="scale-100 ..." src="...">  {/* 100% (Default) */}
<img class="scale-150 ..." src="...">  {/* 150% */}
  `.trim();

  const scaleAxisHtml = `
<img class="scale-x-125 ..." src="..."> {/* Horizontal scale 125% */}
<img class="scale-y-125 ..." src="..."> {/* Vertical scale 125% */}
  `.trim();

  const arbitraryScaleHtml = `<img class="scale-[1.75] ..." src="...">`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Transforms: Scale (拡大縮小)
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
              要素を拡大または縮小するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>transform: scale()</code>, <code>transform: scaleX()</code>, <code>transform: scaleY()</code> プロパティを制御します。
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
              <li><strong><code>scale-{'{amount}'}</code></strong>: 水平・垂直方向に均等に拡大縮小します。</li>
              <li><strong><code>scale-x-{'{amount}'}</code></strong>: 水平方向 (X軸) にのみ拡大縮小します。</li>
              <li><strong><code>scale-y-{'{amount}'}</code></strong>: 垂直方向 (Y軸) にのみ拡大縮小します。</li>
            </ul>
            <p><code>{'{amount}'}</code> には、0 から 150 までの数値 (通常は 5, 10, 25 刻み) を指定します。これはパーセンテージに対応します (例: <code>scale-75</code> は 75% のサイズ)。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>scale-0</code></strong> (0%)</li>
              <li><strong><code>scale-50</code></strong> (50%)</li>
              <li><strong><code>scale-75</code></strong> (75%)</li>
              <li><strong><code>scale-90</code></strong> (90%)</li>
              <li><strong><code>scale-95</code></strong> (95%)</li>
              <li><strong><code>scale-100</code></strong> (100% - デフォルト、変化なし)</li>
              <li><strong><code>scale-105</code></strong> (105%)</li>
              <li><strong><code>scale-110</code></strong> (110%)</li>
              <li><strong><code>scale-125</code></strong> (125%)</li>
              <li><strong><code>scale-150</code></strong> (150%)</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>scale-[1.75]</code>, <code>scale-x-[2]</code>) も使用可能です (Tailwind JIT モード)。
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
              異なるスケール値の適用例。ホバーして効果を確認してください。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Uniform Scale */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">均等な拡大縮小 (scale-*)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{scaleHtml}</code>
              </pre>
              <ScaleExample />
            </div>
            {/* Axis Scale */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">軸ごとの拡大縮小 (scale-x-*, scale-y-*)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{scaleAxisHtml}</code>
              </pre>
              <ScaleAxisExample />
            </div>
            {/* Arbitrary Scale */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryScaleHtml}</code>
              </pre>
              <ArbitraryScaleExample />
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
              ブレークポイント (<code>md:scale-125</code> など) や状態 (<code>hover:scale-110</code>, <code>focus:scale-95</code> など) に応じてスケールを変更できます。トランジションと組み合わせるのが一般的です。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ホバー時に要素を 110% に拡大する例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<button class="transition duration-300 ease-in-out scale-100 hover:scale-110 ...">
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
                他の transform ユーティリティ: <code>rotate-*</code>, <code>translate-*</code>, <code>skew-*</code>。
              </li>
               <li>
                <code>transition-*</code>: スケール変化を滑らかにするために使用します。
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
                  href="https://tailwindcss.com/docs/scale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Scale
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: scale()
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScalePage;
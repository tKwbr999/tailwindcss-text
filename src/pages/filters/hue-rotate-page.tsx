import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// 画像に色相回転フィルターを適用します。

const HueRotateExample: React.FC = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'; // 山の画像例
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
      <img src={imageUrl} alt="Hue Rotate 0" className="hue-rotate-0 rounded-lg" /> {/* Default */}
      <img src={imageUrl} alt="Hue Rotate 15" className="hue-rotate-15 rounded-lg" />
      <img src={imageUrl} alt="Hue Rotate 30" className="hue-rotate-30 rounded-lg" />
      <img src={imageUrl} alt="Hue Rotate 60" className="hue-rotate-60 rounded-lg" />
      <img src={imageUrl} alt="Hue Rotate 90" className="hue-rotate-90 rounded-lg" />
      <img src={imageUrl} alt="Hue Rotate 180" className="hue-rotate-180 rounded-lg" />
    </div>
  );
};

const ArbitraryHueRotateExample: React.FC = () => {
    const imageUrl = 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80';
    return (
      <img src={imageUrl} alt="Arbitrary Hue Rotate" className="hue-rotate-[270deg] rounded-lg" />
    );
  };


// ページコンポーネント本体
const HueRotatePage: React.FC = () => {
  // コードスニペットを定義
  const hueRotateHtml = `
<img class="hue-rotate-0 ..." src="..." alt="...">   {/* 0deg (Default) */}
<img class="hue-rotate-15 ..." src="..." alt="...">  {/* 15deg */}
<img class="hue-rotate-30 ..." src="..." alt="...">  {/* 30deg */}
<img class="hue-rotate-60 ..." src="..." alt="...">  {/* 60deg */}
<img class="hue-rotate-90 ..." src="..." alt="...">  {/* 90deg */}
<img class="hue-rotate-180 ..." src="..." alt="..."> {/* 180deg */}
  `.trim();
  const arbitraryHueRotateHtml = `<img class="hue-rotate-[270deg] ..." src="..." alt="...">`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Filters: Hue Rotate (色相回転)
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
              要素に色相回転 (hue-rotate) フィルターを適用するためのユーティリティクラスです。要素の色相を指定した角度だけ回転させ、色味を変化させます。
            </p>
            <p>
              CSS の <code>filter: hue-rotate();</code> プロパティを制御します。
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
              <code>hue-rotate-{'{amount}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p><code>{'{amount}'}</code> には、回転させる角度 (deg) を指定します。Tailwind は一般的な角度の値を提供します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>hue-rotate-0</code></strong> (0deg - デフォルト、変化なし)</li>
              <li><strong><code>hue-rotate-15</code></strong> (15deg)</li>
              <li><strong><code>hue-rotate-30</code></strong> (30deg)</li>
              <li><strong><code>hue-rotate-60</code></strong> (60deg)</li>
              <li><strong><code>hue-rotate-90</code></strong> (90deg)</li>
              <li><strong><code>hue-rotate-180</code></strong> (180deg)</li>
            </ul>
             <p className="mt-4">
              負の値 (例: <code>-hue-rotate-30</code>) も使用可能で、逆方向に回転させます。
            </p>
             <p>
              任意の値 (例: <code>hue-rotate-[270deg]</code>) も使用可能です (Tailwind JIT モード)。CSS の <code>hue-rotate()</code> 関数で有効な角度値を指定します。
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
              異なる色相回転フィルターの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Hue Rotate */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準の色相回転</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{hueRotateHtml}</code>
              </pre>
              <HueRotateExample />
            </div>
            {/* Arbitrary Hue Rotate */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryHueRotateHtml}</code>
              </pre>
              <ArbitraryHueRotateExample />
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
              ブレークポイント (<code>md:hue-rotate-90</code> など) や状態 (<code>hover:hue-rotate-180</code> など) に応じて色相回転を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時に色相を大きく変化させる効果を作成できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<img class="hue-rotate-0 hover:hue-rotate-180 transition duration-500 ..." src="..." alt="...">
              `.trim()}</code>
            </pre>
             <img src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80" alt="Hover to rotate hue" className="hue-rotate-0 hover:hue-rotate-180 transition duration-500 rounded-lg w-48" />
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
                色相回転フィルターは要素全体とその内容に適用されます。
              </li>
              <li>
                複数のフィルターユーティリティを組み合わせることができます。
              </li>
               <li>
                背景要素に色相回転フィルターを適用したい場合は、<code>backdrop-hue-rotate-*</code> ユーティリティを使用します。
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
                <code>filter</code>: 他のフィルターユーティリティを有効にするための基本クラス。<code>hue-rotate-*</code> は自動的にこれを有効にします。
              </li>
              <li>
                <code>backdrop-filter</code> (<code>backdrop-hue-rotate-*</code> など): 要素の背後にあるコンテンツにフィルターを適用します。
              </li>
              <li>
                他のフィルターユーティリティ: <code>blur</code>, <code>brightness</code>, <code>contrast</code>, <code>grayscale</code>, <code>invert</code>, <code>saturate</code>, <code>sepia</code>, <code>drop-shadow</code>。
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
                  href="https://tailwindcss.com/docs/hue-rotate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Hue Rotate
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: filter: hue-rotate()
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HueRotatePage;
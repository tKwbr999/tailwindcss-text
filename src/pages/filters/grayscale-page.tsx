import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// 画像にグレースケールフィルターを適用します。

const GrayscaleExample: React.FC = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'; // 山の画像例
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <img src={imageUrl} alt="Grayscale" className="grayscale rounded-lg" />
      <img src={imageUrl} alt="No Grayscale" className="grayscale-0 rounded-lg" /> {/* Default */}
    </div>
  );
};

const ArbitraryGrayscaleExample: React.FC = () => {
    const imageUrl = 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80';
    // 任意の値は通常 0 (0%) から 1 (100%) の範囲ですが、Tailwind はキーワードのみ提供
    // ここでは例として filter プロパティを直接使うか、カスタム設定が必要
    // Tailwind のデフォルトでは任意の値クラスは生成されない
    return (
      <img src={imageUrl} alt="Arbitrary Grayscale (Example)" className="filter grayscale-[50%] rounded-lg" />
      // filter ユーティリティと任意の値を使用 (Tailwind JIT)
    );
  };


// ページコンポーネント本体
const GrayscalePage: React.FC = () => {
  // コードスニペットを定義
  const grayscaleHtml = `
<img class="grayscale ..." src="..." alt="...">   {/* 100% grayscale */}
<img class="grayscale-0 ..." src="..." alt="..."> {/* 0% grayscale (Default) */}
  `.trim();
  const arbitraryGrayscaleHtml = `<img class="filter grayscale-[50%] ..." src="..." alt="..."> {/* Requires JIT & filter enabled */} `;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Filters: Grayscale (グレースケール)
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
              要素にグレースケールフィルターを適用するためのユーティリティクラスです。要素の色を完全にまたは部分的に白黒に変換します。
            </p>
            <p>
              CSS の <code>filter: grayscale();</code> プロパティを制御します。
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
              <code>grayscale</code> または <code>grayscale-0</code> の形式でクラスを要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>grayscale</code></strong>: 要素を完全にグレースケールにします (<code>filter: grayscale(100%);</code>)。</li>
              <li><strong><code>grayscale-0</code></strong>: グレースケールフィルターを適用しません (<code>filter: grayscale(0%);</code>)。これがデフォルトの挙動です。</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>grayscale-[50%]</code>) も使用可能です (Tailwind JIT モード)。0% から 100% の間のパーセンテージを指定します。この場合、<code>filter</code> ユーティリティも必要になることがあります。
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
              グレースケールフィルターの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Grayscale */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準グレースケール</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{grayscaleHtml}</code>
              </pre>
              <GrayscaleExample />
            </div>
             {/* Arbitrary Grayscale */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値 (JIT)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryGrayscaleHtml}</code>
              </pre>
              <ArbitraryGrayscaleExample />
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
              ブレークポイント (<code>md:grayscale</code> など) や状態 (<code>hover:grayscale-0</code> など) に応じてグレースケール効果を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時にグレースケールを解除する効果を作成できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<img class="grayscale hover:grayscale-0 transition duration-300 ..." src="..." alt="...">
              `.trim()}</code>
            </pre>
             <img src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80" alt="Hover to remove grayscale" className="grayscale hover:grayscale-0 transition duration-300 rounded-lg w-48" />
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
                グレースケールフィルターは要素全体とその内容に適用されます。
              </li>
              <li>
                複数のフィルターユーティリティを組み合わせることができます。
              </li>
               <li>
                背景要素にグレースケールフィルターを適用したい場合は、<code>backdrop-grayscale-*</code> ユーティリティを使用します。
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
                <code>filter</code>: 他のフィルターユーティリティを有効にするための基本クラス。<code>grayscale-*</code> は自動的にこれを有効にします。
              </li>
              <li>
                <code>backdrop-filter</code> (<code>backdrop-grayscale</code> など): 要素の背後にあるコンテンツにフィルターを適用します。
              </li>
              <li>
                他のフィルターユーティリティ: <code>blur</code>, <code>brightness</code>, <code>contrast</code>, <code>hue-rotate</code>, <code>invert</code>, <code>saturate</code>, <code>sepia</code>, <code>drop-shadow</code>。
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
                  href="https://tailwindcss.com/docs/grayscale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Grayscale
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: filter: grayscale()
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GrayscalePage;
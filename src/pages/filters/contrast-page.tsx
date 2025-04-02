import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// 画像にコントラストフィルターを適用します。

const ContrastExample: React.FC = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'; // 山の画像例
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
      <img src={imageUrl} alt="Contrast 0" className="contrast-0 rounded-lg" />
      <img src={imageUrl} alt="Contrast 50" className="contrast-50 rounded-lg" />
      <img src={imageUrl} alt="Contrast 75" className="contrast-75 rounded-lg" />
      <img src={imageUrl} alt="Contrast 100" className="contrast-100 rounded-lg" /> {/* Default */}
      <img src={imageUrl} alt="Contrast 125" className="contrast-125 rounded-lg" />
      <img src={imageUrl} alt="Contrast 150" className="contrast-150 rounded-lg" />
      <img src={imageUrl} alt="Contrast 200" className="contrast-200 rounded-lg" />
    </div>
  );
};

const ArbitraryContrastExample: React.FC = () => {
    const imageUrl = 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80';
    return (
      <img src={imageUrl} alt="Arbitrary Contrast" className="contrast-[.85] rounded-lg" />
    );
  };


// ページコンポーネント本体
const ContrastPage: React.FC = () => {
  // コードスニペットを定義
  const contrastHtml = `
<img class="contrast-0 ..." src="..." alt="...">   {/* 0% */}
<img class="contrast-50 ..." src="..." alt="...">  {/* 50% */}
<img class="contrast-100 ..." src="..." alt="..."> {/* 100% (Default) */}
<img class="contrast-150 ..." src="..." alt="..."> {/* 150% */}
<img class="contrast-200 ..." src="..." alt="..."> {/* 200% */}
  `.trim();
  const arbitraryContrastHtml = `<img class="contrast-[.85] ..." src="..." alt="...">`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Filters: Contrast (コントラスト)
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
              要素にコントラストフィルターを適用するためのユーティリティクラスです。要素の明るい部分と暗い部分の差を調整します。
            </p>
            <p>
              CSS の <code>filter: contrast();</code> プロパティを制御します。
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
              <code>contrast-{'{amount}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p><code>{'{amount}'}</code> には、0 から 200 までの数値 (通常は 25 または 50 刻み) を指定します。これはパーセンテージに対応します (例: <code>contrast-75</code> は 75% のコントラスト)。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>contrast-0</code></strong> (0%)</li>
              <li><strong><code>contrast-50</code></strong> (50%)</li>
              <li><strong><code>contrast-75</code></strong> (75%)</li>
              <li><strong><code>contrast-100</code></strong> (100% - デフォルト、変化なし)</li>
              <li><strong><code>contrast-125</code></strong> (125%)</li>
              <li><strong><code>contrast-150</code></strong> (150%)</li>
              <li><strong><code>contrast-200</code></strong> (200%)</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>contrast-[.85]</code>) も使用可能です (Tailwind JIT モード)。0 以上の数値を指定します (例: 0.85 は 85%)。
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
              異なるコントラストフィルターの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Contrast */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準のコントラスト</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{contrastHtml}</code>
              </pre>
              <ContrastExample />
            </div>
            {/* Arbitrary Contrast */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryContrastHtml}</code>
              </pre>
              <ArbitraryContrastExample />
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
              ブレークポイント (<code>md:contrast-150</code> など) や状態 (<code>hover:contrast-125</code> など) に応じてコントラストを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時に画像のコントラストを上げる効果を作成できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<img class="contrast-100 hover:contrast-125 transition duration-300 ..." src="..." alt="...">
              `.trim()}</code>
            </pre>
             <img src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80" alt="Hover to increase contrast" className="contrast-100 hover:contrast-125 transition duration-300 rounded-lg w-48" />
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
                コントラストフィルターは要素全体とその内容に適用されます。
              </li>
              <li>
                複数のフィルターユーティリティ (例: <code>contrast-125</code>, <code>brightness-90</code>) を組み合わせることができます。
              </li>
               <li>
                背景要素にコントラストフィルターを適用したい場合は、<code>backdrop-contrast-*</code> ユーティリティを使用します。
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
                <code>filter</code>: 他のフィルターユーティリティを有効にするための基本クラス。<code>contrast-*</code> は自動的にこれを有効にします。
              </li>
              <li>
                <code>backdrop-filter</code> (<code>backdrop-contrast-*</code> など): 要素の背後にあるコンテンツにフィルターを適用します。
              </li>
              <li>
                他のフィルターユーティリティ: <code>blur</code>, <code>brightness</code>, <code>grayscale</code>, <code>hue-rotate</code>, <code>invert</code>, <code>saturate</code>, <code>sepia</code>, <code>drop-shadow</code>。
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
                  href="https://tailwindcss.com/docs/contrast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Contrast
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: filter: contrast()
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContrastPage;
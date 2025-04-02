import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const ShadowExample: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4">
      <div className="shadow-sm bg-white dark:bg-gray-800 p-6 rounded-lg text-center">shadow-sm</div>
      <div className="shadow bg-white dark:bg-gray-800 p-6 rounded-lg text-center">shadow (default)</div>
      <div className="shadow-md bg-white dark:bg-gray-800 p-6 rounded-lg text-center">shadow-md</div>
      <div className="shadow-lg bg-white dark:bg-gray-800 p-6 rounded-lg text-center">shadow-lg</div>
      <div className="shadow-xl bg-white dark:bg-gray-800 p-6 rounded-lg text-center">shadow-xl</div>
      <div className="shadow-2xl bg-white dark:bg-gray-800 p-6 rounded-lg text-center">shadow-2xl</div>
      <div className="shadow-inner bg-white dark:bg-gray-800 p-6 rounded-lg text-center">shadow-inner</div>
      <div className="shadow-none bg-white dark:bg-gray-800 p-6 rounded-lg text-center">shadow-none</div>
    </div>
  );
};

const ArbitraryShadowExample: React.FC = () => {
    return (
      <div className="shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
        任意の値: shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]
      </div>
    );
  };


// ページコンポーネント本体
const BoxShadowPage: React.FC = () => {
  // コードスニペットを定義
  const shadowHtml = `
<div class="shadow-sm ...">...</div>
<div class="shadow ...">...</div> {/* Default */}
<div class="shadow-md ...">...</div>
<div class="shadow-lg ...">...</div>
<div class="shadow-xl ...">...</div>
<div class="shadow-2xl ...">...</div>
<div class="shadow-inner ...">...</div>
<div class="shadow-none ...">...</div>
  `.trim();
  const arbitraryShadowHtml = `<div class="shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] ...">...</div>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Effects: Box Shadow (ボックスシャドウ)
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
              要素にボックスシャドウ (影) を追加するためのユーティリティクラスです。要素に奥行きを与えたり、視覚的に浮き上がらせたりする効果があります。
            </p>
            <p>
              CSS の <code>box-shadow</code> プロパティを制御します。Tailwind は複数の定義済みシャドウサイズと、内側のシャドウ (inner shadow) を提供します。
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
              <code>shadow-{'{size}'}</code> または <code>shadow-inner</code>, <code>shadow-none</code> の形式でクラスを要素に適用します。
            </p>
            <p>デフォルトで用意されているサイズ:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>shadow-sm</code></strong>: 小さな影。</li>
              <li><strong><code>shadow</code></strong>: デフォルトの影。</li>
              <li><strong><code>shadow-md</code></strong>: 中程度の影。</li>
              <li><strong><code>shadow-lg</code></strong>: 大きな影。</li>
              <li><strong><code>shadow-xl</code></strong>: より大きな影。</li>
              <li><strong><code>shadow-2xl</code></strong>: 最大の影。</li>
              <li><strong><code>shadow-inner</code></strong>: 内側の影。</li>
              <li><strong><code>shadow-none</code></strong>: 影を削除します。</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>shadow-[0_10px_20px_rgba(0,0,0,0.5)]</code>) も使用可能です (Tailwind JIT モード)。CSS の <code>box-shadow</code> の値を直接指定します。
            </p>
             <p>
              シャドウの色は <code>shadow-{'{color}'}</code> ユーティリティ (v3.0+) で変更できます。
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
              異なるボックスシャドウユーティリティの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Shadows */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準シャドウ</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{shadowHtml}</code>
              </pre>
              <ShadowExample />
            </div>
            {/* Arbitrary Shadow */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryShadowHtml}</code>
              </pre>
              <ArbitraryShadowExample />
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
              ブレークポイント (<code>md:shadow-lg</code> など) や状態 (<code>hover:shadow-xl</code>, <code>focus:shadow-outline</code> など) に応じてボックスシャドウを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ボタンやカードのホバー時に影を強くするのは一般的なインタラクションです。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<button class="shadow-md hover:shadow-xl transition-shadow ...">
  Hover Me
</button>
              `.trim()}</code>
            </pre>
             <button className="shadow-md hover:shadow-xl transition-shadow bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Hover Me
            </button>
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
                ボックスシャドウは要素のレイアウトに影響を与えませんが、視覚的には要素の外側に広がります。
              </li>
              <li>
                デフォルトのシャドウの色は通常、半透明の黒ですが、<code>shadow-{'{color}'}</code> ユーティリティ (v3.0+) で変更できます。
              </li>
               <li>
                複数のシャドウを重ねることも可能ですが、任意の値を使用するか、カスタム CSS で定義する必要があります。
              </li>
               <li>
                <code>shadow-inner</code> は要素の内側に影を落とします。
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
                <code>box-shadow-color</code> (<code>shadow-*</code> v3.0+): ボックスシャドウの色を設定します。
              </li>
              <li>
                <code>opacity</code> (<code>opacity-*</code>): 要素全体の透明度を設定します。
              </li>
              <li>
                <code>ring-width</code> (<code>ring-*</code>): <code>box-shadow</code> を利用してリング (輪郭線) を作成します。
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
                  href="https://tailwindcss.com/docs/box-shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Box Shadow
                </a>
              </li>
               <li>
                <a
                  href="https://tailwindcss.com/docs/box-shadow-color"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Box Shadow Color (v3.0+)
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: box-shadow
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BoxShadowPage;
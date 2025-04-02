import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// divide-* は Flexbox または Grid コンテナ内の隣接する兄弟要素間に境界線を追加します。
// 太さとスタイルも指定する必要があります。

const DivideColorExample: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex divide-x-2 divide-sky-500 bg-gray-100 dark:bg-gray-800 p-2 rounded">
        <div className="px-4 py-2 text-center">1</div>
        <div className="px-4 py-2 text-center">2</div>
        <div className="px-4 py-2 text-center">3</div>
      </div>
       <div className="flex divide-x-4 divide-red-500/75 bg-gray-100 dark:bg-gray-800 p-2 rounded"> {/* Opacity */}
        <div className="px-4 py-2 text-center">A</div>
        <div className="px-4 py-2 text-center">B</div>
      </div>
       <div className="flex divide-x divide-[#ff7f50] bg-gray-100 dark:bg-gray-800 p-2 rounded"> {/* Arbitrary */}
        <div className="px-4 py-2 text-center">X</div>
        <div className="px-4 py-2 text-center">Y</div>
      </div>
    </div>
  );
};

const DivideCurrentInheritTransparentExample: React.FC = () => {
    return (
      <div className="space-y-4">
         <div className="text-blue-600 flex divide-x-2 divide-current bg-gray-100 dark:bg-gray-800 p-2 rounded">
            <div className="px-4 py-2">Item 1</div>
            <div className="px-4 py-2">Item 2 (Divide Current)</div>
         </div>
         <div className="divide-x-2 divide-green-600 bg-gray-100 dark:bg-gray-800 p-2 rounded">
            Parent with green divide color.
            <div className="flex divide-x-2 divide-inherit mt-1 p-2">
                <div className="px-4 py-2">Child 1</div>
                <div className="px-4 py-2">Child 2 (Divide Inherit)</div>
            </div>
         </div>
         <div className="flex divide-x-2 divide-transparent bg-gray-100 dark:bg-gray-800 p-2 rounded">
            <div className="px-4 py-2">Item A</div>
            <div className="px-4 py-2">Item B (Divide Transparent)</div>
         </div>
      </div>
    );
  };


// ページコンポーネント本体
const DivideColorPage: React.FC = () => {
  // コードスニペットを定義
  const divideColorHtml = `
<div class="flex divide-x-2 divide-sky-500 ...">...</div>
<div class="flex divide-x-4 divide-red-500/75 ...">...</div> {/* With opacity */}
<div class="flex divide-x divide-[#ff7f50] ...">...</div> {/* Arbitrary value */}
  `.trim();
  const divideCurrentInheritTransparentHtml = `
<div class="flex divide-x-2 divide-current ...">...</div>
<div class="divide-x-2 divide-green-600 ...">
  <div class="flex divide-x-2 divide-inherit ...">...</div>
</div>
<div class="flex divide-x-2 divide-transparent ...">...</div>
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
          Borders: Divide Color (要素間の境界線の色)
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
              隣接する兄弟要素の間に追加される境界線 (divider) の色を設定するためのユーティリティクラスです。<code>divide-x-*</code> または <code>divide-y-*</code> ユーティリティと組み合わせて使用します。
            </p>
            <p>
              これは直接的な CSS プロパティではなく、Tailwind が提供するヘルパーユーティリティです。内部的には、最初の子要素を除くすべての直接の子要素に対して、適切な方向の <code>border-color</code> を設定します。
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
              <code>divide-{'{color}'}[-{'{shade}'}]</code> の形式でクラスを親要素 (Flexbox または Grid コンテナ) に適用します。<code>divide-x-*</code> または <code>divide-y-*</code> も同時に指定する必要があります。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>divide-{'{color}'}[-{'{shade}'}]</code></strong> (例: <code>divide-blue-500</code>, <code>divide-red-600</code>): 指定した色と濃淡を要素間の境界線に適用します。</li>
              <li><strong>特殊な値</strong>: <code>divide-inherit</code>, <code>divide-current</code>, <code>divide-transparent</code>, <code>divide-black</code>, <code>divide-white</code>。</li>
            </ul>
             <p className="mt-4">
              任意の色 (例: <code>divide-[#ff7f50]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
             <p>
              Tailwind CSS v3.0 以降では、スラッシュ記法 (例: <code>divide-blue-500/50</code>) を使用して透明度 (アルファ値) を指定できます。古いバージョンでは <code>divide-opacity-*</code> を使用しました。
            </p>
          </CardContent>
        </Card>

        {/* 色の指定例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              色の指定例
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              様々な色、透明度、任意の値の適用例。<code>divide-x-*</code> と併用。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{divideColorHtml}</code>
            </pre>
            <DivideColorExample />
          </CardContent>
        </Card>

         {/* 特殊な値 Card */}
         <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              特殊な値 (current, inherit, transparent)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{divideCurrentInheritTransparentHtml}</code>
            </pre>
            <DivideCurrentInheritTransparentExample />
          </CardContent>
        </Card>

        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブと状態変化
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイント (<code>md:divide-red-500</code> など) や状態 (<code>group-hover:divide-blue-600</code> など) に応じて要素間の境界線の色を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、グループ全体をホバーしたときに区切り線の色を変更できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="group flex divide-x divide-gray-300 hover:divide-blue-500 ...">
  <div class="px-4 ...">Item 1</div>
  <div class="px-4 ...">Item 2</div>
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
                <code>divide-{'{color}'}</code> ユーティリティは親要素に適用します。
              </li>
              <li>
                境界線を表示するには、色 (<code>divide-*</code>) に加えて、太さ (<code>divide-x-*</code> または <code>divide-y-*</code>) とスタイル (<code>divide-solid</code> など) も指定する必要があります。
              </li>
               <li>
                デフォルトの境界線スタイルは <code>divide-solid</code> です。
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
                <code>divide-width</code> (<code>divide-x-*</code>, <code>divide-y-*</code>): 要素間の境界線の太さを設定します。
              </li>
              <li>
                <code>divide-style</code> (<code>divide-solid</code>, <code>divide-dashed</code> など): 要素間の境界線のスタイルを設定します。
              </li>
              <li>
                <code>divide-opacity</code> (<code>divide-opacity-*</code>): 要素間の境界線の色の透明度を設定します (古い構文)。
              </li>
               <li>
                <code>border-color</code> (<code>border-*</code>): 要素自身の境界線の色を設定します。
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
                  href="https://tailwindcss.com/docs/divide-color"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Divide Color
                </a>
              </li>
              {/* divide-color は直接的な CSS プロパティではないため、関連する border-color の MDN リンクを記載 */}
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-color"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: border-color (関連)
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DivideColorPage;
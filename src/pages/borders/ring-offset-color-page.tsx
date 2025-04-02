import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// リングオフセットの色を示すため、リングのスタイル、太さ、色、オフセットの太さも設定します。

const RingOffsetColorExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center p-4 bg-gray-300 dark:bg-gray-700 rounded"> {/* 背景でオフセット色が見えるように */}
      <button className="ring ring-blue-500 ring-offset-4 ring-offset-sky-300 p-4 rounded">offset-sky-300</button>
      <button className="ring ring-blue-500 ring-offset-4 ring-offset-red-300 p-4 rounded">offset-red-300</button>
      <button className="ring ring-blue-500 ring-offset-4 ring-offset-emerald-300 p-4 rounded">offset-emerald-300</button>
      <button className="ring ring-blue-500 ring-offset-4 ring-offset-amber-300 p-4 rounded">offset-amber-300</button>
      <button className="ring ring-blue-500 ring-offset-4 ring-offset-violet-300 p-4 rounded">offset-violet-300</button>
      <button className="ring ring-blue-500 ring-offset-4 ring-offset-pink-300 p-4 rounded">offset-pink-300</button>
    </div>
  );
};

const ArbitraryRingOffsetColorExample: React.FC = () => {
    return (
      <div className="p-4 bg-gray-300 dark:bg-gray-700 rounded inline-block">
        <button className="ring ring-purple-500 ring-offset-4 ring-offset-[#ff7f50] p-4 rounded">
          任意の値: ring-offset-[#ff7f50] (Coral)
        </button>
      </div>
    );
  };


// ページコンポーネント本体
const RingOffsetColorPage: React.FC = () => {
  // コードスニペットを定義
  const ringOffsetColorHtml = `<button class="ring ring-offset-4 ring-offset-sky-300 ...">...</button>`;
  const arbitraryRingOffsetColorHtml = `<button class="ring ring-offset-4 ring-offset-[#ff7f50] ...">...</button>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Borders: Ring Offset Color (リングオフセットの色)
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
              要素とリング (<code>ring-*</code>) との間のスペース (オフセット) の色を設定するためのユーティリティクラスです。<code>ring-offset-width</code> と組み合わせて使用します。
            </p>
            <p>
              CSS の <code>--tw-ring-offset-color</code> カスタムプロパティを制御し、これが <code>box-shadow</code> の生成に使用されます。
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
              <code>ring-offset-{'{color}'}[-{'{shade}'}]</code> の形式でクラスを要素に適用します。通常、リングの太さ (<code>ring</code>, <code>ring-*</code>)、リングの色 (<code>ring-*</code>)、およびオフセットの太さ (<code>ring-offset-*</code>) も一緒に指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>ring-offset-{'{color}'}[-{'{shade}'}]</code></strong> (例: <code>ring-offset-blue-500</code>, <code>ring-offset-red-600</code>): 指定した色と濃淡をリングのオフセット部分に適用します。</li>
              <li><strong>特殊な値</strong>: <code>ring-offset-inherit</code>, <code>ring-offset-current</code>, <code>ring-offset-transparent</code>, <code>ring-offset-black</code>, <code>ring-offset-white</code> (デフォルト)。</li>
            </ul>
             <p className="mt-4">
              任意の色 (例: <code>ring-offset-[#ff7f50]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
             <p>
              透明度はサポートされていません (オフセットは通常、下のコンテンツを隠すために不透明な色を使用します)。
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
              異なるリングオフセットの色の適用例。<code>ring</code>, <code>ring-blue-500</code>, <code>ring-offset-4</code> を併用。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{ringOffsetColorHtml}</code>
            </pre>
            <RingOffsetColorExample />
          </CardContent>
        </Card>

         {/* 任意の値 Card */}
         <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              任意の値
            </CardTitle>
          </CardHeader>
          <CardContent>
             <p className="text-stone-700 dark:text-stone-300 mb-4">
              角括弧を使用して、任意の色コード (HEX, RGB, HSL) を直接指定できます。
            </p>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{arbitraryRingOffsetColorHtml}</code>
            </pre>
            <ArbitraryRingOffsetColorExample />
          </CardContent>
        </Card>

        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブと状態変化
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイント (<code>md:ring-offset-red-500</code> など) や状態 (<code>focus:ring-offset-blue-100</code>, <code>dark:ring-offset-black</code> など) に応じてリングオフセットの色を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ダークモードでオフセットの色を調整したり、フォーカス時にオフセットの色を変更したりできます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<button class="ring ring-blue-500 ring-offset-4 ring-offset-white dark:ring-offset-black focus:ring-offset-blue-200 ...">
  Button
</button>
              `.trim()}</code>
            </pre>
             <div className="p-4 bg-gray-300 dark:bg-gray-700 rounded inline-block">
               <button className="ring ring-blue-500 ring-offset-4 ring-offset-white dark:ring-offset-black focus:ring-offset-blue-200 p-4 rounded">
                Button
              </button>
            </div>
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
                リングオフセットの色を設定するには、リング自体が表示され、かつオフセットの太さが 0 より大きい必要があります (<code>ring</code>, <code>ring-*</code>, <code>ring-offset-*</code>)。
              </li>
              <li>
                オフセットの色は、要素の背景色とリングの色との間に視覚的な区切りを提供します。通常、要素の背景色と同じか、それに近い色を指定します。
              </li>
               <li>
                デフォルトのオフセット色は白 (<code>#fff</code>) です。ダークモードなど、背景が白でない場合は明示的に <code>dark:ring-offset-black</code> や他の適切な色を指定する必要があります。
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
                <code>ring-width</code> (<code>ring</code>, <code>ring-*</code>): リングの太さを設定します。
              </li>
              <li>
                <code>ring-color</code> (<code>ring-*</code>): リングの色を設定します。
              </li>
              <li>
                <code>ring-offset-width</code> (<code>ring-offset-*</code>): リングと要素の間のオフセット (隙間) の太さを設定します。
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
                  href="https://tailwindcss.com/docs/ring-offset-color"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Ring Offset Color
                </a>
              </li>
              {/* リングオフセットは直接的な CSS プロパティではないため、関連する box-shadow の MDN リンクを記載 */}
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: box-shadow (関連)
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RingOffsetColorPage;
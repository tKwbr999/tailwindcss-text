import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// リングは box-shadow を利用して実装されるため、レイアウトに影響を与えません。
// リングの色も指定する必要があります。

const RingWidthExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <button className="ring ring-blue-500 p-4 rounded">ring (3px)</button> {/* Default */}
      <button className="ring-0 ring-blue-500 p-4 rounded bg-gray-200 dark:bg-gray-700">ring-0 (0px)</button>
      <button className="ring-1 ring-blue-500 p-4 rounded">ring-1 (1px)</button>
      <button className="ring-2 ring-blue-500 p-4 rounded">ring-2 (2px)</button>
      <button className="ring-4 ring-blue-500 p-4 rounded">ring-4 (4px)</button>
      <button className="ring-8 ring-blue-500 p-4 rounded">ring-8 (8px)</button>
    </div>
  );
};

const RingInsetExample: React.FC = () => {
    return (
      <button className="ring ring-inset ring-green-500 p-4 rounded">
        ring-inset (内側にリング)
      </button>
    );
  };

const ArbitraryRingWidthExample: React.FC = () => {
    return (
      <button className="ring ring-[3px] ring-purple-500 p-4 rounded">
        任意の値: ring-[3px]
      </button>
    );
  };


// ページコンポーネント本体
const RingWidthPage: React.FC = () => {
  // コードスニペットを定義
  const ringWidthHtml = `
<button class="ring ...">...</button>       {/* Default (3px) */}
<button class="ring-0 ...">...</button>     {/* 0px */}
<button class="ring-1 ...">...</button>     {/* 1px */}
<button class="ring-2 ...">...</button>     {/* 2px */}
<button class="ring-4 ...">...</button>     {/* 4px */}
<button class="ring-8 ...">...</button>     {/* 8px */}
  `.trim();
  const ringInsetHtml = `<button class="ring ring-inset ...">...</button>`;
  const arbitraryRingWidthHtml = `<button class="ring ring-[3px] ...">...</button>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Borders: Ring Width (リングの太さ)
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
              <code>box-shadow</code> を利用して、要素の外側に境界線のような「リング」を作成するためのユーティリティクラスです。アウトラインと似ていますが、オフセットやスタイルに関して異なる制御が可能です。フォーカスリングの実装によく使用されます。
            </p>
            <p>
              CSS の <code>box-shadow</code> プロパティを巧妙に利用してリング効果をシミュレートします (<code>--tw-ring-offset-shadow</code>, <code>--tw-ring-shadow</code>, <code>box-shadow</code>)。
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
              <code>ring-{'{width}'}</code> の形式でクラスを要素に適用します。通常、リングの色 (<code>ring-{'{color}'}</code>) も一緒に指定します。
            </p>
            <p>デフォルトで用意されている太さ:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>ring-0</code></strong> (0px)</li>
              <li><strong><code>ring-1</code></strong> (1px)</li>
              <li><strong><code>ring-2</code></strong> (2px)</li>
              <li><strong><code>ring</code></strong>: デフォルトのリング太さ (通常 3px)。</li>
              <li><strong><code>ring-4</code></strong> (4px)</li>
              <li><strong><code>ring-8</code></strong> (8px)</li>
              <li><strong><code>ring-inset</code></strong>: リングを要素の内側に描画します (<code>--tw-ring-inset: inset</code> を設定)。</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>ring-[3px]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
             <p>
              リングを表示するには、太さ (<code>ring</code> または <code>ring-*</code>) と色 (<code>ring-*</code>) を指定する必要があります。<code>ring-inset</code> は他の太さユーティリティと組み合わせて使用します。
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
              異なるリングの太さの適用例。リングの色も指定しています。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準の太さ</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{ringWidthHtml}</code>
              </pre>
              <RingWidthExample />
            </div>
            {/* Inset */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">内側リング (ring-inset)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{ringInsetHtml}</code>
              </pre>
              <RingInsetExample />
            </div>
             {/* Arbitrary Width */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryRingWidthHtml}</code>
              </pre>
              <ArbitraryRingWidthExample />
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
              ブレークポイント (<code>md:ring-4</code> など) や状態 (<code>focus:ring-2</code> など) に応じてリングの太さを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              フォーム要素がフォーカスされたときにリングを表示するのは一般的なアクセシビリティパターンです。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<input class="focus:ring-2 focus:ring-blue-500 focus:outline-none ..." />
              `.trim()}</code>
            </pre>
             <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none border border-gray-300 p-2 rounded" placeholder="Focus me" />
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
                リングは <code>box-shadow</code> を利用しているため、要素のレイアウトには影響を与えません。
              </li>
              <li>
                リングを表示するには、太さ (<code>ring</code> または <code>ring-*</code>) と色 (<code>ring-*</code>) を指定する必要があります。<code>ring-0</code> はリングを非表示にします。
              </li>
               <li>
                デフォルトでは、リングは要素の境界線の外側に描画されます。<code>ring-inset</code> を使用すると内側に描画されます。
              </li>
               <li>
                リングと要素の間にスペースを設けたい場合は、<code>ring-offset-width</code> と <code>ring-offset-color</code> を使用します。
              </li>
               <li>
                複数の <code>box-shadow</code> を組み合わせる場合、Tailwind のリングユーティリティが生成するシャドウと競合しないように注意が必要です。
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
                <code>ring-color</code> (<code>ring-*</code>): リングの色を設定します。
              </li>
              <li>
                <code>ring-offset-width</code> (<code>ring-offset-*</code>): リングと要素の間のオフセット (隙間) の太さを設定します。
              </li>
              <li>
                <code>ring-offset-color</code> (<code>ring-offset-*</code>): リングのオフセット部分の色を設定します。
              </li>
               <li>
                <code>outline-width</code> (<code>outline-*</code>): アウトラインの太さを設定します。リングとは異なるアプローチです。
              </li>
               <li>
                <code>box-shadow</code> (<code>shadow-*</code>): 要素に影を追加します。リングはこれを利用しています。
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
                  href="https://tailwindcss.com/docs/ring-width"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Ring Width
                </a>
              </li>
              {/* リングは box-shadow で実装されるため、関連する MDN リンクを記載 */}
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

export default RingWidthPage;
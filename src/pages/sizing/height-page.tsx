import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const HeightFixedExample: React.FC = () => {
  return (
    <div className="flex items-start space-x-4"> {/* items-start で高さを比較しやすく */}
      <div className="h-32 w-16 bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200 text-xs">h-32 (8rem)</div>
      <div className="h-24 w-16 bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200 text-xs">h-24 (6rem)</div>
      <div className="h-16 w-16 bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200 text-xs">h-16 (4rem)</div>
      <div className="h-px w-16 bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200 text-xs">h-px (1px)</div>
    </div>
  );
};

const HeightFractionExample: React.FC = () => {
  return (
    <div className="h-48 bg-gray-100 dark:bg-gray-800 p-4 rounded flex space-x-2 items-start"> {/* 親要素に高さが必要 */}
      <div className="h-1/2 w-16 bg-green-200 dark:bg-green-900 p-2 rounded text-green-800 dark:text-green-200 text-xs">h-1/2 (50%)</div>
      <div className="h-1/3 w-16 bg-green-200 dark:bg-green-900 p-2 rounded text-green-800 dark:text-green-200 text-xs">h-1/3</div>
      <div className="h-3/4 w-16 bg-green-200 dark:bg-green-900 p-2 rounded text-green-800 dark:text-green-200 text-xs">h-3/4</div>
      <div className="h-full w-16 bg-green-200 dark:bg-green-900 p-2 rounded text-green-800 dark:text-green-200 text-xs">h-full (100%)</div>
    </div>
  );
};

const HeightViewportExample: React.FC = () => {
    // 注意: h-screen はビューポート全体の高さになるため、親要素の高さを超える可能性があります。
    return (
      <div className="h-48 overflow-y-auto border border-gray-300 rounded"> {/* 親の高さを制限し、スクロールで確認 */}
        <div className="h-screen bg-yellow-200 dark:bg-yellow-900 p-2 rounded text-yellow-800 dark:text-yellow-200">
          h-screen (ビューポートの高さ 100vh) - 下にスクロールできます
        </div>
      </div>
    );
  };

const HeightMinMaxAutoFitExample: React.FC = () => {
    return (
      <div className="flex items-start space-x-4">
        <div className="h-auto w-24 bg-red-200 dark:bg-red-900 p-2 rounded text-red-800 dark:text-red-200 text-xs">h-auto<br/>コンテンツ<br/>高さ</div>
        <div className="h-min w-24 bg-red-200 dark:bg-red-900 p-2 rounded text-red-800 dark:text-red-200 text-xs">h-min<br/>最小<br/>高さ</div>
        <div className="h-max w-24 bg-red-200 dark:bg-red-900 p-2 rounded text-red-800 dark:text-red-200 text-xs">h-max<br/>最大<br/>コンテンツ<br/>高さ</div>
        <div className="h-fit w-24 bg-purple-200 dark:bg-purple-900 p-2 rounded text-purple-800 dark:text-purple-200 text-xs">h-fit<br/>(v3.3+)</div>
      </div>
    );
  };


// ページコンポーネント本体
const HeightPage: React.FC = () => {
  // コードスニペットを定義
  const hFixedHtml = `<div class="h-32 ...">...</div>`;
  const hFractionHtml = `<div class="h-1/2 ...">...</div>`; // Requires parent height
  const hViewportHtml = `<div class="h-screen ...">...</div>`;
  const hMinMaxAutoFitHtml = `
<div class="h-auto ...">Auto</div>
<div class="h-min ...">Min</div>
<div class="h-max ...">Max</div>
<div class="h-fit ...">Fit</div>
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
          Sizing: Height (高さ)
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
              要素の高さを設定するためのユーティリティクラスです。固定高さ、親要素に対する割合、ビューポート高さ、またはコンテンツに基づいた高さなどを指定できます。
            </p>
            <p>
              CSS の <code>height</code> プロパティを制御します。
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
              <code>h-{'{size}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p><code>{'{size}'}</code> には様々な値を指定できます:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong>固定高さ (数値/スケール)</strong>: <code>h-0</code>, <code>h-px</code>, <code>h-0.5</code>, <code>h-1</code>, ..., <code>h-96</code> など、Tailwind のデフォルトスペーシングスケールに基づいた固定高さ (rem または px)。</li>
              <li><strong>割合 (分数)</strong>: <code>h-1/2</code>, <code>h-1/3</code>, <code>h-2/3</code>, <code>h-1/4</code>, ..., <code>h-5/6</code>, <code>h-full</code> (100%) など、親要素の高さに対する割合。<strong>注意:</strong> 親要素に明示的な高さが設定されていないと、割合指定は効果がない場合があります。</li>
              <li><strong>ビューポート高さ</strong>: <code>h-screen</code> (ビューポートの高さ 100vh)。</li>
              <li><strong>コンテンツベース</strong>:
                <ul>
                  <li><code>h-auto</code> (<code>height: auto;</code>): デフォルト。ブラウザがコンテンツに基づいて高さを計算します。</li>
                  <li><code>h-min</code> (<code>height: min-content;</code>): コンテンツがオーバーフローしない最小の高さ。</li>
                  <li><code>h-max</code> (<code>height: max-content;</code>): コンテンツをすべて表示するために必要な固有の高さ。</li>
                  <li><code>h-fit</code> (<code>height: fit-content;</code>): コンテンツに合わせてフィットする高さ (比較的新しい値)。 (v3.0+)</li>
                </ul>
              </li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>h-[32rem]</code>, <code>h-[50%]</code>) も使用可能です (Tailwind JIT モード)。
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
              異なる height ユーティリティの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Fixed Height */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">固定高さ (数値/スケール)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{hFixedHtml}</code>
              </pre>
              <HeightFixedExample />
            </div>
            {/* Fractional Height */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">割合 (分数)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{hFractionHtml}</code>
              </pre>
              <HeightFractionExample />
               <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                (親要素に高さ <code>h-48</code> が設定されています)
              </p>
            </div>
             {/* Viewport Height */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">ビューポート高さ</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{hViewportHtml}</code>
              </pre>
              <HeightViewportExample />
            </div>
             {/* Min/Max/Auto/Fit Height */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">コンテンツベース (auto/min/max/fit)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{hMinMaxAutoFitHtml}</code>
              </pre>
              <HeightMinMaxAutoFitExample />
            </div>
          </CardContent>
        </Card>

        {/* レスポンシブ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて高さを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>h-32 md:h-48</code> は、デフォルトで <code>8rem</code>、中程度の画面サイズ以上で <code>12rem</code> の高さを設定します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="h-32 md:h-48 ...">
  Responsive Height
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
                割合 (<code>h-1/2</code> など) や <code>h-full</code> を使用する場合、親要素に明示的な高さが設定されている必要があります。親要素の高さがコンテンツ依存 (<code>h-auto</code>) の場合、これらのユーティリティは期待通りに動作しないことがあります。
              </li>
              <li>
                <code>h-screen</code> はビューポート全体の高さを参照します。
              </li>
               <li>
                <code>h-min</code>, <code>h-max</code>, <code>h-fit</code> はコンテンツのサイズに依存します。
              </li>
               <li>
                要素の最終的な表示高さは、<code>height</code> だけでなく、<code>padding</code>, <code>border</code>, <code>box-sizing</code> の影響も受けます。
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
                <code>min-height</code> (<code>min-h-*</code>): 要素の最小高さを設定します。
              </li>
              <li>
                <code>max-height</code> (<code>max-h-*</code>): 要素の最大高さを設定します。
              </li>
              <li>
                <code>width</code> (<code>w-*</code>): 要素の幅を設定します。
              </li>
               <li>
                <code>padding</code> / <code>border</code> / <code>box-sizing</code>: 要素のサイズ計算に影響します。
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
                  href="https://tailwindcss.com/docs/height"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Height
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/height"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: height
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HeightPage;
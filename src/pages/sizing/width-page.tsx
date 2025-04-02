import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const WidthFixedExample: React.FC = () => {
  return (
    <div className="space-y-2">
      <div className="w-96 bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200">w-96 (24rem / 384px)</div>
      <div className="w-48 bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200">w-48 (12rem / 192px)</div>
      <div className="w-20 bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200">w-20 (5rem / 80px)</div>
      <div className="w-px bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200">w-px (1px)</div>
    </div>
  );
};

const WidthFractionExample: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-800 p-4 rounded space-y-2"> {/* 親要素に幅が必要 */}
      <div className="w-1/2 bg-green-200 dark:bg-green-900 p-2 rounded text-green-800 dark:text-green-200">w-1/2 (50%)</div>
      <div className="w-1/3 bg-green-200 dark:bg-green-900 p-2 rounded text-green-800 dark:text-green-200">w-1/3 (33.33%)</div>
      <div className="w-3/4 bg-green-200 dark:bg-green-900 p-2 rounded text-green-800 dark:text-green-200">w-3/4 (75%)</div>
      <div className="w-full bg-green-200 dark:bg-green-900 p-2 rounded text-green-800 dark:text-green-200">w-full (100%)</div>
    </div>
  );
};

const WidthViewportExample: React.FC = () => {
    // 注意: w-screen はビューポート全体の幅になるため、コンテナからはみ出す可能性があります。
    return (
      <div className="overflow-x-auto"> {/* はみ出し確認用 */}
        <div className="w-screen bg-yellow-200 dark:bg-yellow-900 p-2 rounded text-yellow-800 dark:text-yellow-200">
          w-screen (ビューポート幅)
        </div>
      </div>
    );
  };

const WidthMinMaxAutoExample: React.FC = () => {
    return (
      <div className="space-y-2">
        <div className="w-auto inline-block bg-red-200 dark:bg-red-900 p-2 rounded text-red-800 dark:text-red-200">w-auto (コンテンツ幅)</div> <br/>
        <div className="w-min bg-red-200 dark:bg-red-900 p-2 rounded text-red-800 dark:text-red-200">w-min (最小コンテンツ幅)</div> <br/>
        <div className="w-max bg-red-200 dark:bg-red-900 p-2 rounded text-red-800 dark:text-red-200 whitespace-nowrap">w-max (最大コンテンツ幅 - 長いテキストは折り返さない)</div>
      </div>
    );
  };

const WidthFitExample: React.FC = () => {
    // 注意: w-fit は比較的新しい値です。
    return (
      <div className="w-fit bg-purple-200 dark:bg-purple-900 p-2 rounded text-purple-800 dark:text-purple-200">
        w-fit (コンテンツに合わせてフィットするが、利用可能な幅を超えることはない)
      </div>
    );
  };


// ページコンポーネント本体
const WidthPage: React.FC = () => {
  // コードスニペットを定義
  const wFixedHtml = `<div class="w-48 ...">...</div>`;
  const wFractionHtml = `<div class="w-1/2 ...">...</div>`;
  const wViewportHtml = `<div class="w-screen ...">...</div>`;
  const wMinMaxAutoHtml = `
<div class="w-auto ...">Auto</div>
<div class="w-min ...">Min</div>
<div class="w-max ...">Max</div>
  `.trim();
  const wFitHtml = `<div class="w-fit ...">Fit</div>`; // v3.0+


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Sizing: Width (幅)
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
              要素の幅を設定するためのユーティリティクラスです。固定幅、親要素に対する割合、ビューポート幅、またはコンテンツに基づいた幅などを指定できます。
            </p>
            <p>
              CSS の <code>width</code> プロパティを制御します。
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
              <code>w-{'{size}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p><code>{'{size}'}</code> には様々な値を指定できます:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong>固定幅 (数値/スケール)</strong>: <code>w-0</code>, <code>w-px</code>, <code>w-0.5</code>, <code>w-1</code>, ..., <code>w-96</code> など、Tailwind のデフォルトスペーシングスケールに基づいた固定幅 (rem または px)。</li>
              <li><strong>割合 (分数)</strong>: <code>w-1/2</code>, <code>w-1/3</code>, <code>w-2/3</code>, <code>w-1/4</code>, ..., <code>w-11/12</code>, <code>w-full</code> (100%) など、親要素の幅に対する割合。</li>
              <li><strong>ビューポート幅</strong>: <code>w-screen</code> (ビューポートの幅 100vw)。</li>
              <li><strong>コンテンツベース</strong>:
                <ul>
                  <li><code>w-auto</code> (<code>width: auto;</code>): デフォルト。ブラウザが幅を計算します (通常はコンテンツ幅、またはブロック要素なら親要素の幅)。</li>
                  <li><code>w-min</code> (<code>width: min-content;</code>): コンテンツがオーバーフローしない最小の幅。</li>
                  <li><code>w-max</code> (<code>width: max-content;</code>): コンテンツをすべて表示するために必要な固有の幅 (テキストは折り返さない)。</li>
                  <li><code>w-fit</code> (<code>width: fit-content;</code>): コンテンツに合わせてフィットしますが、利用可能な幅を超えることはありません (比較的新しい値)。 (v3.0+)</li>
                </ul>
              </li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>w-[32rem]</code>, <code>w-[50%]</code>) も使用可能です (Tailwind JIT モード)。
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
              異なる width ユーティリティの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Fixed Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">固定幅 (数値/スケール)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{wFixedHtml}</code>
              </pre>
              <WidthFixedExample />
            </div>
            {/* Fractional Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">割合 (分数)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{wFractionHtml}</code>
              </pre>
              <WidthFractionExample />
            </div>
             {/* Viewport Width */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">ビューポート幅</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{wViewportHtml}</code>
              </pre>
              <WidthViewportExample />
            </div>
             {/* Min/Max/Auto Width */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">コンテンツベース (auto/min/max)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{wMinMaxAutoHtml}</code>
              </pre>
              <WidthMinMaxAutoExample />
            </div>
             {/* Fit Content Width */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">フィットコンテンツ (w-fit) (v3.0+)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{wFitHtml}</code>
              </pre>
              <WidthFitExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて幅を変更できます。レスポンシブデザインの基本です。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>w-full md:w-1/2 lg:w-1/3</code> は、小さい画面では全幅、中程度の画面では半分の幅、大きい画面では1/3の幅になります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="w-full md:w-1/2 lg:w-1/3 ...">
  Responsive Width
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
                割合 (<code>w-1/2</code> など) は親要素の幅に基づきます。親要素に幅がない場合、期待通りに動作しないことがあります。
              </li>
              <li>
                <code>w-screen</code> はビューポート全体の幅を参照するため、親コンテナの幅やパディングを無視してはみ出す可能性があります。
              </li>
               <li>
                <code>w-min</code>, <code>w-max</code>, <code>w-fit</code> はコンテンツのサイズに依存するため、コンテンツが変わると幅も変わります。
              </li>
               <li>
                要素の最終的な表示幅は、<code>width</code> だけでなく、<code>padding</code>, <code>border</code>, <code>box-sizing</code> の影響も受けます (Tailwind のデフォルトは <code>box-border</code>)。
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
                <code>min-width</code> (<code>min-w-*</code>): 要素の最小幅を設定します。
              </li>
              <li>
                <code>max-width</code> (<code>max-w-*</code>): 要素の最大幅を設定します。レスポンシブなコンテナなどでよく使われます。
              </li>
              <li>
                <code>height</code> (<code>h-*</code>): 要素の高さを設定します。
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
                  href="https://tailwindcss.com/docs/width"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Width
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/width"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: width
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WidthPage;
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// リングの色を示すため、リングの太さも設定します (デフォルトの ring を使用)。

const RingColorExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <button className="ring ring-sky-500 p-4 rounded">ring-sky-500</button>
      <button className="ring ring-red-500 p-4 rounded">ring-red-500</button>
      <button className="ring ring-emerald-500 p-4 rounded">ring-emerald-500</button>
      <button className="ring ring-amber-400 p-4 rounded">ring-amber-400</button>
      <button className="ring ring-violet-600 p-4 rounded">ring-violet-600</button>
      <button className="ring ring-pink-500 p-4 rounded">ring-pink-500</button>
    </div>
  );
};

const RingCurrentInheritTransparentExample: React.FC = () => {
    return (
      <div className="space-y-4">
         <div className="text-blue-600 p-2 rounded">
            Parent with blue text.
            <button className="ring ring-current p-4 rounded mt-1">Ring Current: Ring inherits blue text color.</button>
         </div>
         <div className="ring ring-green-600 p-2 rounded">
            Parent with green ring.
            <button className="ring ring-inherit mt-1 p-4 rounded border border-dashed">Ring Inherit: Inherits green ring color.</button>
         </div>
         <button className="ring ring-transparent bg-gray-200 p-4 rounded">
            Ring Transparent: Ring is transparent.
         </button>
      </div>
    );
  };

const RingOpacityExample: React.FC = () => {
    return (
      <div className="flex flex-wrap gap-4 items-center">
        <button className="ring ring-indigo-500/75 p-4 rounded">ring-indigo-500/75</button>
        <button className="ring ring-indigo-500/50 p-4 rounded">ring-indigo-500/50</button>
        <button className="ring ring-indigo-500/25 p-4 rounded">ring-indigo-500/25</button>
        {/* Legacy syntax: <button class="ring ring-indigo-500 ring-opacity-75 ..."> */}
      </div>
    );
  };

const ArbitraryRingColorExample: React.FC = () => {
    return (
      <button className="ring ring-[#ff7f50] p-4 rounded">
        任意の値: ring-[#ff7f50] (Coral)
      </button>
    );
  };


// ページコンポーネント本体
const RingColorPage: React.FC = () => {
  // コードスニペットを定義
  const ringColorHtml = `<button class="ring ring-sky-500 ...">...</button>`;
  const ringCurrentInheritTransparentHtml = `
<button class="ring ring-current ...">...</button>
<button class="ring ring-inherit ...">...</button>
<button class="ring ring-transparent ...">...</button>
  `.trim();
  const ringOpacityHtml = `<button class="ring ring-indigo-500/75 ...">...</button>`; // New syntax
  const arbitraryRingColorHtml = `<button class="ring ring-[#ff7f50] ...">...</button>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Borders: Ring Color (リングの色)
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
              <code>box-shadow</code> を利用して作成されるリング (輪郭線) の色を設定するためのユーティリティクラスです。Tailwind の豊富なカラーパレットを使用して色を指定できます。
            </p>
            <p>
              CSS の <code>--tw-ring-color</code> カスタムプロパティを制御し、これが <code>box-shadow</code> の色として使用されます。
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
              <code>ring-{'{color}'}[-{'{shade}'}]</code> の形式でクラスを要素に適用します。通常、リングの太さ (<code>ring</code> または <code>ring-*</code>) も一緒に指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>ring-{'{color}'}[-{'{shade}'}]</code></strong> (例: <code>ring-blue-500</code>, <code>ring-red-600</code>): 指定した色と濃淡をリングに適用します。</li>
              <li><strong>特殊な値</strong>: <code>ring-inherit</code>, <code>ring-current</code>, <code>ring-transparent</code>, <code>ring-black</code>, <code>ring-white</code>。</li>
            </ul>
             <p className="mt-4">
              任意の色 (例: <code>ring-[#ff7f50]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
             <p>
              Tailwind CSS v3.0 以降では、スラッシュ記法 (例: <code>ring-blue-500/50</code>) を使用して透明度 (アルファ値) を指定できます。古いバージョンでは <code>ring-opacity-*</code> を使用しました。
            </p>
             <p>
              デフォルトのリングの色は通常、青系の色 (例: <code>rgb(59 130 246 / 0.5)</code>) ですが、<code>tailwind.config.js</code> で変更可能です。
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
              様々な色のリング。<code>ring</code> (デフォルト太さ) を併用。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{ringColorHtml}</code>
            </pre>
            <RingColorExample />
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
              <code className="language-html">{ringCurrentInheritTransparentHtml}</code>
            </pre>
            <RingCurrentInheritTransparentExample />
          </CardContent>
        </Card>

         {/* 透明度 Card */}
         <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              透明度の変更
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              リングの色に透明度を追加します。
            </CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-stone-700 dark:text-stone-300 mb-4">
              スラッシュ記法 (例: <code>ring-indigo-500/75</code>) を使用します (v3.0+)。
            </p>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{ringOpacityHtml}</code>
            </pre>
            <RingOpacityExample />
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
              <code className="language-html">{arbitraryRingColorHtml}</code>
            </pre>
            <ArbitraryRingColorExample />
          </CardContent>
        </Card>

        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブと状態変化
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイント (<code>md:ring-red-500</code> など) や状態 (<code>focus:ring-blue-600</code>, <code>dark:ring-gray-600</code> など) に応じてリングの色を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              フォーム要素がフォーカスされたときにリングの色を変更するのは一般的なパターンです。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<input class="ring-1 ring-gray-300 focus:ring-blue-500 focus:outline-none ..." />
              `.trim()}</code>
            </pre>
             <input className="ring-1 ring-gray-300 focus:ring-blue-500 focus:outline-none border border-transparent p-2 rounded" placeholder="Focus me" />
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
                リングを表示するには、色 (<code>ring-*</code>) に加えて、太さ (<code>ring</code> または <code>ring-*</code>) を指定する必要があります。
              </li>
              <li>
                リングの色は、<code>ring-opacity-*</code> ユーティリティ (古い構文) またはスラッシュ記法 (<code>ring-color/opacity</code>, v3.0+) で透明度を調整できます。
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
                <code>ring-offset-width</code> (<code>ring-offset-*</code>): リングと要素の間のオフセット (隙間) の太さを設定します。
              </li>
              <li>
                <code>ring-offset-color</code> (<code>ring-offset-*</code>): リングのオフセット部分の色を設定します。
              </li>
               <li>
                <code>ring-opacity</code> (<code>ring-opacity-*</code>): リングの色の透明度を設定します (古い構文)。
              </li>
               <li>
                <code>outline-color</code> (<code>outline-*</code>): アウトラインの色を設定します。
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
                  href="https://tailwindcss.com/docs/ring-color"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Ring Color
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

export default RingColorPage;
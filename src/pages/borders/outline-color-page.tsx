import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// アウトラインの色を示すため、アウトラインのスタイルと太さも設定します。

const OutlineColorExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="outline outline-2 outline-sky-500 p-4 rounded">outline-sky-500</button>
      <button className="outline outline-2 outline-red-500 p-4 rounded">outline-red-500</button>
      <button className="outline outline-2 outline-emerald-500 p-4 rounded">outline-emerald-500</button>
      <button className="outline outline-2 outline-amber-400 p-4 rounded">outline-amber-400</button>
      <button className="outline outline-2 outline-violet-600 p-4 rounded">outline-violet-600</button>
      <button className="outline outline-2 outline-pink-500 p-4 rounded">outline-pink-500</button>
    </div>
  );
};

const OutlineCurrentInheritTransparentExample: React.FC = () => {
    return (
      <div className="space-y-4">
         <div className="text-blue-600 p-2 rounded">
            Parent with blue text.
            <button className="outline outline-2 outline-current p-4 rounded mt-1">Outline Current: Outline inherits blue text color.</button>
         </div>
         <div className="outline outline-2 outline-green-600 p-2 rounded">
            Parent with green outline.
            <button className="outline outline-2 outline-inherit mt-1 p-4 rounded border border-dashed">Outline Inherit: Inherits green outline color.</button>
         </div>
         <button className="outline outline-2 outline-transparent bg-gray-200 p-4 rounded">
            Outline Transparent: Outline is transparent.
         </button>
      </div>
    );
  };

const OutlineOpacityExample: React.FC = () => {
    return (
      <div className="flex flex-wrap gap-4">
        <button className="outline outline-2 outline-indigo-500/75 p-4 rounded">outline-indigo-500/75</button>
        <button className="outline outline-2 outline-indigo-500/50 p-4 rounded">outline-indigo-500/50</button>
        <button className="outline outline-2 outline-indigo-500/25 p-4 rounded">outline-indigo-500/25</button>
        {/* Legacy syntax: <button class="outline outline-2 outline-indigo-500 outline-opacity-75 ..."> */}
      </div>
    );
  };

const ArbitraryOutlineColorExample: React.FC = () => {
    return (
      <button className="outline outline-2 outline-[#ff7f50] p-4 rounded">
        任意の値: outline-[#ff7f50] (Coral)
      </button>
    );
  };


// ページコンポーネント本体
const OutlineColorPage: React.FC = () => {
  // コードスニペットを定義
  const outlineColorHtml = `<button class="outline outline-2 outline-sky-500 ...">...</button>`;
  const outlineCurrentInheritTransparentHtml = `
<button class="outline outline-2 outline-current ...">...</button>
<button class="outline outline-2 outline-inherit ...">...</button>
<button class="outline outline-2 outline-transparent ...">...</button>
  `.trim();
  const outlineOpacityHtml = `<button class="outline outline-2 outline-indigo-500/75 ...">...</button>`; // New syntax
  const arbitraryOutlineColorHtml = `<button class="outline outline-2 outline-[#ff7f50] ...">...</button>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Borders: Outline Color (アウトラインの色)
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
              要素のアウトラインの色を設定するためのユーティリティクラスです。Tailwind の豊富なカラーパレットを使用して色を指定できます。
            </p>
            <p>
              CSS の <code>outline-color</code> プロパティを制御します。
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
              <code>outline-{'{color}'}[-{'{shade}'}]</code> の形式でクラスを要素に適用します。通常、アウトラインのスタイル (<code>outline</code>, <code>outline-dashed</code> など) と太さ (<code>outline-*</code>) も一緒に指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>outline-{'{color}'}[-{'{shade}'}]</code></strong> (例: <code>outline-blue-500</code>, <code>outline-red-600</code>): 指定した色と濃淡をアウトラインに適用します。</li>
              <li><strong>特殊な値</strong>: <code>outline-inherit</code>, <code>outline-current</code>, <code>outline-transparent</code>, <code>outline-black</code>, <code>outline-white</code>。</li>
            </ul>
             <p className="mt-4">
              任意の色 (例: <code>outline-[#ff7f50]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
             <p>
              Tailwind CSS v3.0 以降では、スラッシュ記法 (例: <code>outline-blue-500/50</code>) を使用して透明度 (アルファ値) を指定できます。古いバージョンでは <code>outline-opacity-*</code> を使用しました。
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
              様々な色のアウトライン。<code>outline</code> と <code>outline-2</code> を併用。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{outlineColorHtml}</code>
            </pre>
            <OutlineColorExample />
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
              <code className="language-html">{outlineCurrentInheritTransparentHtml}</code>
            </pre>
            <OutlineCurrentInheritTransparentExample />
          </CardContent>
        </Card>

         {/* 透明度 Card */}
         <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              透明度の変更
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              アウトラインの色に透明度を追加します。
            </CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-stone-700 dark:text-stone-300 mb-4">
              スラッシュ記法 (例: <code>outline-indigo-500/75</code>) を使用します (v3.0+)。
            </p>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{outlineOpacityHtml}</code>
            </pre>
            <OutlineOpacityExample />
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
              <code className="language-html">{arbitraryOutlineColorHtml}</code>
            </pre>
            <ArbitraryOutlineColorExample />
          </CardContent>
        </Card>

        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブと状態変化
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイント (<code>md:outline-red-500</code> など) や状態 (<code>focus:outline-blue-600</code>, <code>dark:outline-gray-600</code> など) に応じてアウトラインの色を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              フォーム要素がフォーカスされたときにアウトラインの色を変更するのは一般的なパターンです。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<input class="outline outline-2 outline-transparent focus:outline-blue-500 ..." />
              `.trim()}</code>
            </pre>
             <input className="outline outline-2 outline-transparent focus:outline-blue-500 border border-gray-300 p-2 rounded" placeholder="Focus me" />
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
                アウトラインを表示するには、色 (<code>outline-*</code>) に加えて、太さ (<code>outline-*</code>) とスタイル (<code>outline</code>, <code>outline-dashed</code> など) も指定する必要があります。
              </li>
              <li>
                デフォルトのアウトラインの色はブラウザによって異なりますが、通常は <code>outline-current</code> (テキスト色) に近い挙動をします。明示的に指定することが推奨されます。
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
                <code>outline-width</code> (<code>outline-*</code>): アウトラインの太さを設定します。
              </li>
              <li>
                <code>outline-style</code> (<code>outline</code>, <code>outline-dashed</code> など): アウトラインのスタイルを設定します。
              </li>
              <li>
                <code>outline-offset</code> (<code>outline-offset-*</code>): アウトラインと要素の境界線との間のスペースを設定します。
              </li>
               <li>
                <code>outline-opacity</code> (<code>outline-opacity-*</code>): アウトラインの色の透明度を設定します (古い構文)。
              </li>
               <li>
                <code>border-color</code> (<code>border-*</code>): 境界線の色を設定します。
              </li>
               <li>
                <code>ring-color</code> (<code>ring-*</code>): リング (輪郭線) の色を設定します。
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
                  href="https://tailwindcss.com/docs/outline-color"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Outline Color
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: outline-color
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OutlineColorPage;
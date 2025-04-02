import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const CaretColorExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="caret-blue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Caret Blue 500:</label>
        <input type="text" id="caret-blue" defaultValue="Focus here" className="caret-blue-500 border border-gray-300 rounded px-3 py-2 w-full focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white dark:border-gray-600" />
      </div>
      <div>
        <label htmlFor="caret-pink" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Caret Pink 500:</label>
        <textarea id="caret-pink" defaultValue="Focus inside this textarea" className="caret-pink-500 border border-gray-300 rounded px-3 py-2 w-full h-20 focus:ring focus:ring-pink-200 dark:bg-gray-700 dark:text-white dark:border-gray-600"></textarea>
      </div>
       <div>
        <label htmlFor="caret-transparent" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Caret Transparent:</label>
        <input type="text" id="caret-transparent" defaultValue="Caret is transparent" className="caret-transparent border border-gray-300 rounded px-3 py-2 w-full focus:ring focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:border-gray-600" />
      </div>
       <div>
        <label htmlFor="caret-current" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Caret Current (inherits text color):</label>
        <input type="text" id="caret-current" defaultValue="Focus here" className="caret-current text-purple-600 border border-gray-300 rounded px-3 py-2 w-full focus:ring focus:ring-purple-200 dark:bg-gray-700 dark:text-purple-400 dark:border-gray-600" />
      </div>
    </div>
  );
};

const ArbitraryCaretColorExample: React.FC = () => {
    return (
      <div>
        <label htmlFor="caret-arbitrary" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Caret Arbitrary (#ff7f50 - Coral):</label>
        <input type="text" id="caret-arbitrary" defaultValue="Focus here" className="caret-[#ff7f50] border border-gray-300 rounded px-3 py-2 w-full focus:ring focus:ring-orange-200 dark:bg-gray-700 dark:text-white dark:border-gray-600" />
      </div>
    );
  };


// ページコンポーネント本体
const CaretColorPage: React.FC = () => {
  // コードスニペットを定義
  const caretColorHtml = `
<input type="text" class="caret-pink-500 ...">
<textarea class="caret-indigo-300 ..."></textarea>

{/* Use caret-inherit to inherit from parent */}
<div class="text-blue-600">
  <input type="text" class="caret-inherit ...">
</div>

{/* Use caret-current to use the current text color */}
<input type="text" class="text-purple-600 caret-current ...">

{/* Use caret-transparent */}
<input type="text" class="caret-transparent ...">
  `.trim();

  const arbitraryCaretColorHtml = `<input type="text" class="caret-[#ff7f50] ...">`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Interactivity: Caret Color (キャレットカラー)
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
              テキスト入力フィールド (input や textarea) のキャレット (カーソル) の色を制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>caret-color</code> プロパティを制御します。
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
              <code>caret-{'{color}'}</code> の形式でクラスを入力要素に適用します。
            </p>
            <p><code>{'{color}'}</code> には、Tailwind のカラーパレット (例: <code>pink-500</code>, <code>blue-600</code>) を指定します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>caret-inherit</code></strong>: 親要素から継承します。</li>
              <li><strong><code>caret-current</code></strong>: 現在のテキストカラーを使用します。</li>
              <li><strong><code>caret-transparent</code></strong>: キャレットを透明にします。</li>
              <li><strong><code>caret-black</code></strong>, <strong><code>caret-white</code></strong></li>
              <li><strong><code>caret-{'{color}-{shade}'}</code></strong>: Tailwind のカラーパレット (例: <code>caret-sky-500</code>)。</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>caret-[#ff7f50]</code>) も使用可能です (Tailwind JIT モード)。
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
              異なるキャレットカラーの適用例。入力フィールドにフォーカスして確認してください。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Caret Color */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準のキャレットカラー</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{caretColorHtml}</code>
              </pre>
              <CaretColorExample />
            </div>
            {/* Arbitrary Caret Color */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryCaretColorHtml}</code>
              </pre>
              <ArbitraryCaretColorExample />
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
              キャレットカラーは通常、要素の基本スタイルとして定義されますが、ブレークポイント (<code>md:caret-green-500</code> など) や状態 (<code>focus:caret-red-500</code> - ただし通常は不要) で変更することも可能です。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              中程度の画面サイズ以上でキャレットカラーを変更する例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<input type="text" class="caret-blue-500 md:caret-green-500 ...">
              `.trim()}</code>
            </pre>
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
                  href="https://tailwindcss.com/docs/caret-color"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Caret Color
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: caret-color
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CaretColorPage;
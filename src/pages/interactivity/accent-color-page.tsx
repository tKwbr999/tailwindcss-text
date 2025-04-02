import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const AccentColorExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <input type="checkbox" defaultChecked className="accent-blue-500 size-5" />
        <label>Checkbox (accent-blue-500)</label>
      </div>
      <div className="flex items-center space-x-4">
        <input type="radio" name="radio-accent" defaultChecked className="accent-pink-500 size-5" />
        <label>Radio 1 (accent-pink-500)</label>
      </div>
       <div className="flex items-center space-x-4">
        <input type="radio" name="radio-accent" className="accent-pink-500 size-5" />
        <label>Radio 2 (accent-pink-500)</label>
      </div>
      <div className="flex items-center space-x-4">
        <input type="range" min="0" max="100" defaultValue="50" className="accent-emerald-500 w-full" />
        <label className="whitespace-nowrap">Range (accent-emerald-500)</label>
      </div>
       <div className="flex items-center space-x-4">
        <progress max="100" value="75" className="accent-purple-500 w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-purple-500 [&::-moz-progress-bar]:bg-purple-500"></progress>
        <label className="whitespace-nowrap">Progress (accent-purple-500)</label>
      </div>
       <div className="flex items-center space-x-4">
        <input type="checkbox" defaultChecked className="accent-auto size-5" />
        <label>Checkbox (accent-auto - default browser color)</label>
      </div>
    </div>
  );
};

const ArbitraryAccentColorExample: React.FC = () => {
    return (
      <div className="flex items-center space-x-4">
        <input type="checkbox" defaultChecked className="accent-[#ff7f50] size-5" />
        <label>Checkbox (accent-[#ff7f50] - Coral)</label>
      </div>
    );
  };


// ページコンポーネント本体
const AccentColorPage: React.FC = () => {
  // コードスニペットを定義
  const accentColorHtml = `
<input type="checkbox" checked class="accent-pink-500 ...">
<input type="radio" checked class="accent-purple-500 ...">
<input type="range" class="accent-blue-500 ...">
<progress class="accent-emerald-500 ..."></progress>

{/* Use accent-auto to inherit the browser's default accent color */}
<input type="checkbox" checked class="accent-auto ...">
  `.trim();

  const arbitraryAccentColorHtml = `<input type="checkbox" checked class="accent-[#ff7f50] ...">`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Interactivity: Accent Color (アクセントカラー)
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
              チェックボックス、ラジオボタン、レンジスライダー、プログレスバーなどのフォームコントロールのアクセントカラーを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>accent-color</code> プロパティを制御します。
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
              <code>accent-{'{color}'}</code> の形式でクラスをフォームコントロール要素に適用します。
            </p>
            <p><code>{'{color}'}</code> には、Tailwind のカラーパレット (例: <code>pink-500</code>, <code>blue-600</code>) を指定します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>accent-inherit</code></strong>: 親要素から継承します。</li>
              <li><strong><code>accent-current</code></strong>: 現在のテキストカラーを使用します。</li>
              <li><strong><code>accent-transparent</code></strong>: 透明にします。</li>
              <li><strong><code>accent-black</code></strong>, <strong><code>accent-white</code></strong></li>
              <li><strong><code>accent-{'{color}-{shade}'}</code></strong>: Tailwind のカラーパレット (例: <code>accent-sky-500</code>)。</li>
              <li><strong><code>accent-auto</code></strong>: ブラウザのデフォルトのアクセントカラーを使用します。</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>accent-[#ff7f50]</code>) も使用可能です (Tailwind JIT モード)。
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
              異なるアクセントカラーの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Accent Color */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準のアクセントカラー</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{accentColorHtml}</code>
              </pre>
              <AccentColorExample />
            </div>
            {/* Arbitrary Accent Color */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryAccentColorHtml}</code>
              </pre>
              <ArbitraryAccentColorExample />
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
              アクセントカラーは通常、要素の基本スタイルとして定義されますが、ブレークポイント (<code>md:accent-green-500</code> など) や状態 (<code>hover:accent-red-500</code> - ただし通常は非推奨) で変更することも可能です。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              中程度の画面サイズ以上でアクセントカラーを変更する例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<input type="checkbox" checked class="accent-blue-500 md:accent-green-500 ...">
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
                <code>accent-color</code> は比較的新しい CSS プロパティであり、すべてのブラウザや古いバージョンで完全にサポートされているわけではありません。
              </li>
              <li>
                このプロパティは、特定のフォーム要素 (チェックボックス、ラジオボタン、レンジスライダー、プログレスバー) にのみ影響します。
              </li>
               <li>
                要素の全体的なスタイル (背景色、境界線など) は他のユーティリティで制御する必要があります。
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
                  href="https://tailwindcss.com/docs/accent-color"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Accent Color
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: accent-color
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AccentColorPage;
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const DecorationColorExample: React.FC = () => {
  return (
    <div className="space-y-2">
      <p className="underline decoration-red-500 text-lg">Underline with Red 500</p>
      <p className="underline decoration-emerald-500 text-lg">Underline with Emerald 500</p>
      <p className="underline decoration-indigo-500/50 text-lg">Underline with Indigo 500 (50% opacity)</p>
      <p className="underline decoration-[#ff00ff] text-lg">Underline with Magenta (#ff00ff)</p>
    </div>
  );
};

const DecorationCurrentInheritTransparentExample: React.FC = () => {
    return (
      <div className="space-y-2">
         <div className="text-blue-600 p-2 rounded">
            Parent with blue text.
            <p className="underline decoration-current mt-1 p-1 border border-gray-400">Decoration Current: Underline inherits blue color.</p>
         </div>
         <div className="text-green-600 p-2 rounded">
            Parent with green text.
            <p className="underline decoration-inherit mt-1 p-1 border border-gray-400">Decoration Inherit: Underline inherits green color.</p>
         </div>
         <p className="underline decoration-transparent text-lg">
            Decoration Transparent: Underline is transparent (invisible).
         </p>
      </div>
    );
  };


// ページコンポーネント本体
const TextDecorationColorPage: React.FC = () => {
  // コードスニペットを定義
  const decorationColorHtml = `
<p class="underline decoration-red-500 ...">...</p>
<p class="underline decoration-emerald-500/75 ...">...</p> {/* With opacity */}
<p class="underline decoration-[#ff00ff] ...">...</p> {/* Arbitrary value */}
  `.trim();
  const decorationCurrentInheritTransparentHtml = `
<p class="underline decoration-current ...">...</p>
<p class="underline decoration-inherit ...">...</p>
<p class="underline decoration-transparent ...">...</p>
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
          Typography: Text Decoration Color (テキスト装飾線の色)
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
              テキストに追加された装飾線 (下線、上線、取り消し線) の色を設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>text-decoration-color</code> プロパティを制御します。
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
              <code>decoration-{'{color}'}</code> または <code>decoration-{'{color}'}-{'{shade}'}</code> の形式でクラスを要素に適用します。通常、<code>underline</code>, <code>overline</code>, <code>line-through</code> のいずれかと一緒に使用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>decoration-{'{color}'}-{'{shade}'}</code></strong> (例: <code>decoration-blue-500</code>, <code>decoration-red-600</code>): 指定した色と濃淡を装飾線に適用します。</li>
              <li><strong><code>decoration-inherit</code></strong>: 親要素から装飾線の色を継承します。</li>
              <li><strong><code>decoration-current</code></strong>: 要素自身の現在のテキストの色 (<code>color</code> プロパティの値) を装飾線の色として使用します。これがデフォルトの挙動です。</li>
              <li><strong><code>decoration-transparent</code></strong>: 装飾線を透明にします。</li>
              <li><strong><code>decoration-black</code></strong> / <strong><code>decoration-white</code></strong>: 純粋な黒または白を設定します。</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>decoration-[#ff00ff]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
             <p>
              Tailwind CSS v3.0 以降では、スラッシュ記法 (例: <code>decoration-blue-500/50</code>) を使用して透明度 (アルファ値) を指定できます。
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
              様々な色、透明度、任意の値の適用例。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{decorationColorHtml}</code>
            </pre>
            <DecorationColorExample />
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
              <code className="language-html">{decorationCurrentInheritTransparentHtml}</code>
            </pre>
            <DecorationCurrentInheritTransparentExample />
          </CardContent>
        </Card>

        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブと状態変化
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイント (<code>md:decoration-red-500</code> など) や状態 (<code>hover:decoration-blue-600</code> など) に応じて装飾線の色を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、リンクのホバー時に下線の色を変えることができます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<a href="#" class="underline decoration-transparent hover:decoration-current text-blue-600 ...">
  Hover to show underline
</a>
              `.trim()}</code>
            </pre>
             <a href="#" className="underline decoration-transparent hover:decoration-current text-blue-600 dark:text-blue-400">
              Hover to show underline
            </a>
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
                装飾線の色を変更するには、まず <code>underline</code>, <code>overline</code>, <code>line-through</code> のいずれかで装飾線自体を適用する必要があります。
              </li>
              <li>
                デフォルトでは、装飾線の色はテキストの色と同じです (<code>decoration-current</code> の挙動)。
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
                <code>text-decoration</code> (<code>underline</code>, <code>overline</code>, <code>line-through</code>, <code>no-underline</code>): 装飾線の種類を設定します。
              </li>
              <li>
                <code>text-decoration-style</code> (<code>decoration-solid</code>, <code>decoration-dashed</code> など): 装飾線のスタイルを設定します。
              </li>
              <li>
                <code>text-decoration-thickness</code> (<code>decoration-*</code>): 装飾線の太さを設定します。
              </li>
               <li>
                <code>text-underline-offset</code> (<code>underline-offset-*</code>): 下線のテキストからのオフセット距離を設定します。
              </li>
               <li>
                <code>text-color</code> (<code>text-*</code>): テキスト自体の色を設定します。
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
                  href="https://tailwindcss.com/docs/text-decoration-color"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Text Decoration Color
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: text-decoration-color
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TextDecorationColorPage;
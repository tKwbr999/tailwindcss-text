import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const GradientStopsExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="h-24 rounded bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white">
        from-cyan-500 to-blue-500 (デフォルト)
      </div>
      <div className="h-24 rounded bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500 flex items-center justify-center text-white">
        from-emerald-500 via-sky-500 to-indigo-500
      </div>
      <div className="h-24 rounded bg-gradient-to-r from-pink-500 from-10% via-purple-500 via-30% to-indigo-500 to-90% flex items-center justify-center text-white">
        from-10% via-30% to-90% (カスタム位置)
      </div>
       <div className="h-24 rounded bg-gradient-to-r from-yellow-400/50 via-red-500/75 to-rose-600 flex items-center justify-center text-black">
        Opacity stops: from-yellow-400/50 via-red-500/75 to-rose-600
      </div>
    </div>
  );
};


// ページコンポーネント本体
const GradientColorStopsPage: React.FC = () => {
  // コードスニペットを定義
  const gradientStopsHtml = `
<div class="bg-gradient-to-r from-cyan-500 to-blue-500 ...">...</div>
<div class="bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500 ...">...</div>
  `.trim();
  const gradientPositionHtml = `<div class="bg-gradient-to-r from-pink-500 from-10% via-purple-500 via-30% to-indigo-500 to-90% ...">...</div>`;
  const gradientOpacityHtml = `<div class="bg-gradient-to-r from-yellow-400/50 via-red-500/75 to-rose-600 ...">...</div>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Backgrounds: Gradient Color Stops (グラデーションの色停止点)
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
              CSS グラデーションで使用される色停止点 (color stops) を設定するためのユーティリティクラスです。グラデーションの開始色、中間色 (オプション)、終了色を指定します。
            </p>
            <p>
              これらのクラスは <code>bg-gradient-to-{'{direction}'}</code> ユーティリティと組み合わせて使用し、CSS の <code>linear-gradient()</code>, <code>radial-gradient()</code>, <code>conic-gradient()</code> 関数内の色指定部分を生成します。
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
              <code>from-{'{color}'}</code>, <code>via-{'{color}'}</code>, <code>to-{'{color}'}</code> の形式でクラスを要素に適用します。<code>bg-gradient-to-*</code> と一緒に使用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>from-{'{color}'}[-{'{shade}'}]</code></strong>: グラデーションの開始色を設定します。必須です。</li>
              <li><strong><code>via-{'{color}'}[-{'{shade}'}]</code></strong>: グラデーションの中間色を設定します。オプションで、複数指定することも可能です (ただし、Tailwind のデフォルト設定では <code>via</code> は1つのみ)。</li>
              <li><strong><code>to-{'{color}'}[-{'{shade}'}]</code></strong>: グラデーションの終了色を設定します。省略した場合、デフォルトでは透明 (transparent) になりますが、通常は指定します。</li>
            </ul>
             <p className="mt-4">
              <code>{'{color}'}</code> と <code>{'{shade}'}</code> には、Tailwind のカラーパレット (例: <code>blue-500</code>, <code>red-600</code>) や特殊な値 (<code>inherit</code>, <code>current</code>, <code>transparent</code>, <code>black</code>, <code>white</code>) を使用できます。
            </p>
             <p>
              任意の色 (例: <code>from-[#ff00ff]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
             <p>
              Tailwind CSS v3.0 以降では、スラッシュ記法 (例: <code>from-blue-500/50</code>) を使用して色停止点の透明度を指定できます。
            </p>
             <p>
              Tailwind CSS v3.2 以降では、色停止点の位置をパーセンテージで指定できます (例: <code>from-10%</code>, <code>via-30%</code>, <code>to-90%</code>)。これらは対応する色ユーティリティの直後に記述します。
            </p>
          </CardContent>
        </Card>

        {/* 使用例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              異なるグラデーション色停止点の組み合わせ例。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{gradientStopsHtml}</code> <br/>
              <code className="language-html">{gradientPositionHtml}</code> <br/>
              <code className="language-html">{gradientOpacityHtml}</code>
            </pre>
            <GradientStopsExample />
          </CardContent>
        </Card>

        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブと状態変化
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイント (<code>md:from-red-500</code> など) や状態 (<code>hover:to-blue-700</code> など) に応じてグラデーションの色停止点を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時にグラデーションの色を変更できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<button class="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 ...">
  Hover Me
</button>
              `.trim()}</code>
            </pre>
             <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded">
              Hover Me
            </button>
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
                <code>from-*</code>, <code>via-*</code>, <code>to-*</code> ユーティリティは、<code>bg-gradient-to-*</code> ユーティリティと組み合わせて使用する必要があります。単独では効果がありません。
              </li>
              <li>
                <code>via-*</code> はオプションであり、指定しない場合は <code>from-*</code> から <code>to-*</code> へ直接色が変化します。
              </li>
               <li>
                <code>to-*</code> を省略した場合、デフォルトでは透明 (transparent) へのグラデーションになります。
              </li>
               <li>
                色停止点の位置指定 (例: <code>from-10%</code>) は Tailwind CSS v3.2 以降の機能です。
              </li>
               <li>
                複雑なグラデーションや複数の色停止点を使用したい場合は、任意の値 (例: <code>bg-[linear-gradient(...)]</code>) を使用する方が柔軟な場合があります。
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
                <code>background-image</code> (<code>bg-gradient-to-*</code>): グラデーションの方向や種類を設定します。
              </li>
              <li>
                <code>background-color</code> (<code>bg-*</code>): 単色の背景を設定します。グラデーションのフォールバックとしても使用できます。
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
                  href="https://tailwindcss.com/docs/gradient-color-stops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Gradient Color Stops
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/docs/background-image#gradients"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Background Image (Gradients)
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/gradient"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: CSS Gradients
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GradientColorStopsPage;
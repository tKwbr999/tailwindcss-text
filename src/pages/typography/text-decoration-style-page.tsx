import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const DecorationSolidExample: React.FC = () => {
  return (
    <p className="underline decoration-solid text-lg text-gray-800 dark:text-gray-200">
      Decoration Solid (デフォルト): 実線の下線。
    </p>
  );
};

const DecorationDoubleExample: React.FC = () => {
  return (
    <p className="underline decoration-double text-lg text-gray-800 dark:text-gray-200">
      Decoration Double: 二重線の下線。
    </p>
  );
};

const DecorationDottedExample: React.FC = () => {
    return (
      <p className="underline decoration-dotted text-lg text-gray-800 dark:text-gray-200">
        Decoration Dotted: 点線の下線。
      </p>
    );
  };

const DecorationDashedExample: React.FC = () => {
    return (
      <p className="underline decoration-dashed text-lg text-gray-800 dark:text-gray-200">
        Decoration Dashed: 破線の下線。
      </p>
    );
  };

const DecorationWavyExample: React.FC = () => {
    return (
      <p className="underline decoration-wavy text-lg text-gray-800 dark:text-gray-200">
        Decoration Wavy: 波線の下線。
      </p>
    );
  };


// ページコンポーネント本体
const TextDecorationStylePage: React.FC = () => {
  // コードスニペットを定義
  const decorationSolidHtml = `<p class="underline decoration-solid ...">...</p>`; // Default
  const decorationDoubleHtml = `<p class="underline decoration-double ...">...</p>`;
  const decorationDottedHtml = `<p class="underline decoration-dotted ...">...</p>`;
  const decorationDashedHtml = `<p class="underline decoration-dashed ...">...</p>`;
  const decorationWavyHtml = `<p class="underline decoration-wavy ...">...</p>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Typography: Text Decoration Style (テキスト装飾線のスタイル)
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
              テキストに追加された装飾線 (下線、上線、取り消し線) のスタイル (実線、二重線、点線など) を設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>text-decoration-style</code> プロパティを制御します。
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
              <code>decoration-{'{style}'}</code> の形式でクラスを要素に適用します。通常、<code>underline</code>, <code>overline</code>, <code>line-through</code> のいずれかと一緒に使用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>decoration-solid</code></strong>: 実線 (デフォルト)。</li>
              <li><strong><code>decoration-double</code></strong>: 二重線。</li>
              <li><strong><code>decoration-dotted</code></strong>: 点線。</li>
              <li><strong><code>decoration-dashed</code></strong>: 破線。</li>
              <li><strong><code>decoration-wavy</code></strong>: 波線。</li>
            </ul>
          </CardContent>
        </Card>

        {/* 各パラメータの例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              異なるテキスト装飾線スタイルの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Solid */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">decoration-solid (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{decorationSolidHtml}</code>
              </pre>
              <DecorationSolidExample />
            </div>
            {/* Double */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">decoration-double</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{decorationDoubleHtml}</code>
              </pre>
              <DecorationDoubleExample />
            </div>
             {/* Dotted */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">decoration-dotted</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{decorationDottedHtml}</code>
              </pre>
              <DecorationDottedExample />
            </div>
             {/* Dashed */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">decoration-dashed</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{decorationDashedHtml}</code>
              </pre>
              <DecorationDashedExample />
            </div>
             {/* Wavy */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">decoration-wavy</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{decorationWavyHtml}</code>
              </pre>
              <DecorationWavyExample />
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
              ブレークポイント (<code>md:decoration-dotted</code> など) や状態 (<code>hover:decoration-wavy</code> など) に応じて装飾線のスタイルを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時に下線のスタイルを波線に変更できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<a href="#" class="underline decoration-solid hover:decoration-wavy ...">
  Hover for wavy underline
</a>
              `.trim()}</code>
            </pre>
             <a href="#" className="underline decoration-solid hover:decoration-wavy text-blue-600 dark:text-blue-400">
              Hover for wavy underline
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
                装飾線のスタイルを変更するには、まず <code>underline</code>, <code>overline</code>, <code>line-through</code> のいずれかで装飾線自体を適用する必要があります。
              </li>
              <li>
                ブラウザによっては、特に <code>decoration-double</code> や <code>decoration-wavy</code> のレンダリングに若干の違いが見られる場合があります。
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
                <code>text-decoration-color</code> (<code>decoration-*</code>): 装飾線の色を設定します。
              </li>
              <li>
                <code>text-decoration-thickness</code> (<code>decoration-*</code>): 装飾線の太さを設定します。
              </li>
               <li>
                <code>text-underline-offset</code> (<code>underline-offset-*</code>): 下線のテキストからのオフセット距離を設定します。
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
                  href="https://tailwindcss.com/docs/text-decoration-style"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Text Decoration Style
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: text-decoration-style
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TextDecorationStylePage;
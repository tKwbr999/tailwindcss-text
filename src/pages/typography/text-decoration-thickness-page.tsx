import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const DecorationThicknessExample: React.FC = () => {
  return (
    <div className="space-y-2">
      <p className="underline decoration-auto text-lg">Decoration Auto (デフォルト)</p>
      <p className="underline decoration-from-font text-lg">Decoration From Font</p>
      <p className="underline decoration-0 text-lg">Decoration 0</p>
      <p className="underline decoration-1 text-lg">Decoration 1</p>
      <p className="underline decoration-2 text-lg">Decoration 2</p>
      <p className="underline decoration-4 text-lg">Decoration 4</p>
      <p className="underline decoration-8 text-lg">Decoration 8</p>
    </div>
  );
};

const ArbitraryThicknessExample: React.FC = () => {
    return (
      <p className="underline decoration-[3px] text-lg">任意の値: decoration-[3px]</p>
    );
  };


// ページコンポーネント本体
const TextDecorationThicknessPage: React.FC = () => {
  // コードスニペットを定義
  const decorationThicknessHtml = `
<p class="underline decoration-auto ...">...</p> {/* Default */}
<p class="underline decoration-from-font ...">...</p>
<p class="underline decoration-0 ...">...</p>
<p class="underline decoration-1 ...">...</p>
<p class="underline decoration-2 ...">...</p>
<p class="underline decoration-4 ...">...</p>
<p class="underline decoration-8 ...">...</p>
  `.trim();
  const arbitraryThicknessHtml = `<p class="underline decoration-[3px] ...">...</p>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Typography: Text Decoration Thickness (テキスト装飾線の太さ)
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
              テキストに追加された装飾線 (下線、上線、取り消し線) の太さを設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>text-decoration-thickness</code> プロパティを制御します。
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
              <code>decoration-{'{thickness}'}</code> の形式でクラスを要素に適用します。通常、<code>underline</code>, <code>overline</code>, <code>line-through</code> のいずれかと一緒に使用します。
            </p>
            <p>デフォルトで用意されている太さ:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>decoration-auto</code></strong>: デフォルト。ブラウザが適切な太さを決定します。</li>
              <li><strong><code>decoration-from-font</code></strong>: フォントファイルに推奨される太さがあればそれを使用します。サポートされていない場合は <code>auto</code> と同様の挙動になります。</li>
              <li><strong><code>decoration-0</code></strong> (0px)</li>
              <li><strong><code>decoration-1</code></strong> (1px)</li>
              <li><strong><code>decoration-2</code></strong> (2px)</li>
              <li><strong><code>decoration-4</code></strong> (4px)</li>
              <li><strong><code>decoration-8</code></strong> (8px)</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>decoration-[3px]</code>) も使用可能です (Tailwind JIT モード)。
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
              異なるテキスト装飾線の太さの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Thickness */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準の太さ</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{decorationThicknessHtml}</code>
              </pre>
              <DecorationThicknessExample />
            </div>
            {/* Arbitrary Thickness */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryThicknessHtml}</code>
              </pre>
              <ArbitraryThicknessExample />
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
              ブレークポイント (<code>md:decoration-4</code> など) や状態 (<code>hover:decoration-2</code> など) に応じて装飾線の太さを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時に下線の太さを変更できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<a href="#" class="underline decoration-1 hover:decoration-4 ...">
  Hover for thicker underline
</a>
              `.trim()}</code>
            </pre>
             <a href="#" className="underline decoration-1 hover:decoration-4 text-blue-600 dark:text-blue-400">
              Hover for thicker underline
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
                装飾線の太さを変更するには、まず <code>underline</code>, <code>overline</code>, <code>line-through</code> のいずれかで装飾線自体を適用する必要があります。
              </li>
              <li>
                <code>decoration-from-font</code> の挙動は、使用するフォントがこの情報を持っているかに依存します。
              </li>
               <li>
                ブラウザのサポート状況を確認してください。<code>text-decoration-thickness</code> は比較的新しい CSS プロパティです。
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
                <code>text-decoration-style</code> (<code>decoration-solid</code>, <code>decoration-dashed</code> など): 装飾線のスタイルを設定します。
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
                  href="https://tailwindcss.com/docs/text-decoration-thickness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Text Decoration Thickness
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: text-decoration-thickness
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TextDecorationThicknessPage;
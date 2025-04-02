import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const UnderlineOffsetExample: React.FC = () => {
  return (
    <div className="space-y-2">
      <p className="underline underline-offset-auto text-lg">Offset Auto (デフォルト)</p>
      <p className="underline underline-offset-0 text-lg">Offset 0</p>
      <p className="underline underline-offset-1 text-lg">Offset 1</p>
      <p className="underline underline-offset-2 text-lg">Offset 2</p>
      <p className="underline underline-offset-4 text-lg">Offset 4</p>
      <p className="underline underline-offset-8 text-lg">Offset 8</p>
    </div>
  );
};

const ArbitraryOffsetExample: React.FC = () => {
    return (
      <p className="underline underline-offset-[3px] text-lg">任意の値: underline-offset-[3px]</p>
    );
  };


// ページコンポーネント本体
const TextUnderlineOffsetPage: React.FC = () => {
  // コードスニペットを定義
  const offsetHtml = `
<p class="underline underline-offset-auto ...">...</p> {/* Default */}
<p class="underline underline-offset-0 ...">...</p>
<p class="underline underline-offset-1 ...">...</p>
<p class="underline underline-offset-2 ...">...</p>
<p class="underline underline-offset-4 ...">...</p>
<p class="underline underline-offset-8 ...">...</p>
  `.trim();
  const arbitraryOffsetHtml = `<p class="underline underline-offset-[3px] ...">...</p>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Typography: Text Underline Offset (下線のオフセット)
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
              テキストの下線 (underline) とテキストのベースラインとの間の垂直方向の距離 (オフセット) を設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>text-underline-offset</code> プロパティを制御します。
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
              <code>underline-offset-{'{amount}'}</code> の形式でクラスを要素に適用します。通常、<code>underline</code> クラスと一緒に使用します。
            </p>
            <p>デフォルトで用意されているオフセット量:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>underline-offset-auto</code></strong>: デフォルト。ブラウザが適切なオフセットを決定します。</li>
              <li><strong><code>underline-offset-0</code></strong> (0px)</li>
              <li><strong><code>underline-offset-1</code></strong> (1px)</li>
              <li><strong><code>underline-offset-2</code></strong> (2px)</li>
              <li><strong><code>underline-offset-4</code></strong> (4px)</li>
              <li><strong><code>underline-offset-8</code></strong> (8px)</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>underline-offset-[3px]</code>) も使用可能です (Tailwind JIT モード)。
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
              異なる下線オフセットの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Standard Offset */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準オフセット</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{offsetHtml}</code>
              </pre>
              <UnderlineOffsetExample />
            </div>
            {/* Arbitrary Offset */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryOffsetHtml}</code>
              </pre>
              <ArbitraryOffsetExample />
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
              ブレークポイント (<code>md:underline-offset-4</code> など) や状態 (<code>hover:underline-offset-2</code> など) に応じて下線のオフセットを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時に下線の位置を少し上げる (オフセットを小さくする) ことができます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<a href="#" class="underline underline-offset-4 hover:underline-offset-2 ...">
  Hover for different offset
</a>
              `.trim()}</code>
            </pre>
             <a href="#" className="underline underline-offset-4 hover:underline-offset-2 text-blue-600 dark:text-blue-400">
              Hover for different offset
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
                下線のオフセットを変更するには、まず <code>underline</code> クラスで下線自体を適用する必要があります。
              </li>
              <li>
                <code>underline-offset-auto</code> の具体的な挙動はブラウザによって異なる場合があります。
              </li>
               <li>
                ブラウザのサポート状況を確認してください。<code>text-underline-offset</code> は比較的新しい CSS プロパティです。
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
                <code>text-decoration</code> (<code>underline</code>, <code>no-underline</code>): 下線を表示または非表示にします。
              </li>
              <li>
                <code>text-decoration-color</code> (<code>decoration-*</code>): 下線の色を設定します。
              </li>
              <li>
                <code>text-decoration-style</code> (<code>decoration-solid</code>, <code>decoration-dashed</code> など): 下線のスタイルを設定します。
              </li>
               <li>
                <code>text-decoration-thickness</code> (<code>decoration-*</code>): 下線の太さを設定します。
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
                  href="https://tailwindcss.com/docs/text-underline-offset"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Text Underline Offset
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: text-underline-offset
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TextUnderlineOffsetPage;
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// divide-* は Flexbox または Grid コンテナ内の隣接する兄弟要素間に境界線を追加します。
// 太さと色も指定する必要があります。

const DivideSolidExample: React.FC = () => {
  return (
    <div className="flex divide-x-2 divide-black dark:divide-white divide-solid bg-gray-100 dark:bg-gray-800 p-2 rounded">
      <div className="px-4 py-2 text-center">1</div>
      <div className="px-4 py-2 text-center">2</div>
      <div className="px-4 py-2 text-center">3</div>
      {/* アイテム間に実線の境界線が表示される (デフォルト) */}
    </div>
  );
};

const DivideDashedExample: React.FC = () => {
  return (
    <div className="flex divide-x-2 divide-black dark:divide-white divide-dashed bg-gray-100 dark:bg-gray-800 p-2 rounded">
      <div className="px-4 py-2 text-center">1</div>
      <div className="px-4 py-2 text-center">2</div>
      <div className="px-4 py-2 text-center">3</div>
      {/* アイテム間に破線の境界線が表示される */}
    </div>
  );
};

const DivideDottedExample: React.FC = () => {
    return (
      <div className="flex divide-x-2 divide-black dark:divide-white divide-dotted bg-gray-100 dark:bg-gray-800 p-2 rounded">
        <div className="px-4 py-2 text-center">1</div>
        <div className="px-4 py-2 text-center">2</div>
        <div className="px-4 py-2 text-center">3</div>
        {/* アイテム間に点線の境界線が表示される */}
      </div>
    );
  };

const DivideDoubleExample: React.FC = () => {
    // divide-double は divide-width が 3px 以上でないと見えにくい
    return (
      <div className="flex divide-x-4 divide-black dark:divide-white divide-double bg-gray-100 dark:bg-gray-800 p-2 rounded">
        <div className="px-4 py-2 text-center">1</div>
        <div className="px-4 py-2 text-center">2</div>
        <div className="px-4 py-2 text-center">3</div>
        {/* アイテム間に二重線の境界線が表示される */}
      </div>
    );
  };

const DivideNoneExample: React.FC = () => {
    // divide-none は divide-width があっても境界線を表示しない
    return (
      <div className="flex divide-x-4 divide-black dark:divide-white divide-none bg-gray-100 dark:bg-gray-800 p-2 rounded">
        <div className="px-4 py-2 text-center">1</div>
        <div className="px-4 py-2 text-center">2</div>
        <div className="px-4 py-2 text-center">3</div>
        {/* 境界線は表示されない */}
      </div>
    );
  };


// ページコンポーネント本体
const DivideStylePage: React.FC = () => {
  // コードスニペットを定義
  const divideSolidHtml = `<div class="flex divide-x-2 divide-solid ...">...</div>`; // Default
  const divideDashedHtml = `<div class="flex divide-x-2 divide-dashed ...">...</div>`;
  const divideDottedHtml = `<div class="flex divide-x-2 divide-dotted ...">...</div>`;
  const divideDoubleHtml = `<div class="flex divide-x-4 divide-double ...">...</div>`; // Needs sufficient width
  const divideNoneHtml = `<div class="flex divide-x-4 divide-none ...">...</div>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Borders: Divide Style (要素間の境界線のスタイル)
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
              隣接する兄弟要素の間に追加される境界線 (divider) のスタイル (実線、破線、点線など) を設定するためのユーティリティクラスです。<code>divide-x-*</code> または <code>divide-y-*</code> ユーティリティと組み合わせて使用します。
            </p>
            <p>
              これは直接的な CSS プロパティではなく、Tailwind が提供するヘルパーユーティリティです。内部的には、最初の子要素を除くすべての直接の子要素に対して、適切な方向の <code>border-style</code> を設定します。
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
              <code>divide-{'{style}'}</code> の形式でクラスを親要素 (Flexbox または Grid コンテナ) に適用します。<code>divide-x-*</code> または <code>divide-y-*</code> も同時に指定する必要があります。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>divide-solid</code></strong>: 実線 (デフォルト)。</li>
              <li><strong><code>divide-dashed</code></strong>: 破線。</li>
              <li><strong><code>divide-dotted</code></strong>: 点線。</li>
              <li><strong><code>divide-double</code></strong>: 二重線。境界線の太さが 3px 以上でないと効果が見えにくい場合があります。</li>
              <li><strong><code>divide-none</code></strong>: 境界線を表示しません (<code>border-style: none;</code>)。</li>
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
              異なる divide-style ユーティリティの適用例。太さと色も指定しています。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Solid */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">divide-solid (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{divideSolidHtml}</code>
              </pre>
              <DivideSolidExample />
            </div>
            {/* Dashed */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">divide-dashed</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{divideDashedHtml}</code>
              </pre>
              <DivideDashedExample />
            </div>
             {/* Dotted */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">divide-dotted</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{divideDottedHtml}</code>
              </pre>
              <DivideDottedExample />
            </div>
             {/* Double */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">divide-double</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{divideDoubleHtml}</code>
              </pre>
              <DivideDoubleExample />
            </div>
             {/* None */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">divide-none</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{divideNoneHtml}</code>
              </pre>
              <DivideNoneExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて要素間の境界線のスタイルを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>divide-solid md:divide-dashed</code> は、小さい画面では実線、中程度の画面サイズ以上で破線の区切り線になります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="flex divide-x-2 divide-solid md:divide-dashed divide-gray-500 ...">
  {/* ... items */}
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
                <code>divide-{'{style}'}</code> ユーティリティは親要素に適用します。
              </li>
              <li>
                境界線を表示するには、スタイル (<code>divide-*</code>) に加えて、太さ (<code>divide-x-*</code> または <code>divide-y-*</code>) と色 (<code>divide-{'{color}'}</code>) も指定する必要があります。
              </li>
               <li>
                <code>divide-double</code> の見た目は、境界線の太さ (<code>divide-width</code>) に依存します。
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
                <code>divide-width</code> (<code>divide-x-*</code>, <code>divide-y-*</code>): 要素間の境界線の太さを設定します。
              </li>
              <li>
                <code>divide-color</code> (<code>divide-*</code>): 要素間の境界線の色を設定します。
              </li>
              <li>
                <code>border-style</code> (<code>border-solid</code>, <code>border-dashed</code> など): 要素自身の境界線のスタイルを設定します。
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
                  href="https://tailwindcss.com/docs/divide-style"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Divide Style
                </a>
              </li>
              {/* divide-style は直接的な CSS プロパティではないため、関連する border-style の MDN リンクを記載 */}
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-style"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: border-style (関連)
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DivideStylePage;
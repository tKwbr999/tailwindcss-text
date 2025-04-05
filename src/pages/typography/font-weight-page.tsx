import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント

const FontWeightExample: React.FC = () => {
  return (
    <div className="space-y-1">
      <p className="font-thin">Thin (100)</p>
      <p className="font-extralight">Extra Light (200)</p>
      <p className="font-light">Light (300)</p>
      <p className="font-normal">Normal (400 - デフォルト)</p>
      <p className="font-medium">Medium (500)</p>
      <p className="font-semibold">Semi Bold (600)</p>
      <p className="font-bold">Bold (700)</p>
      <p className="font-extrabold">Extra Bold (800)</p>
      <p className="font-black">Black (900)</p>
    </div>
  );
};


// ページコンポーネント本体
const FontWeightPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Typography: Font Weight ';
const jaTitle = 'フォントの太さ';
  const links = [
    {
      title: 'Tailwind CSS: Font Weight',
      url: 'https://tailwindcss.com/docs/font-weight',
    },
    {
      title: 'MDN: font-weight',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight',
    },
  ];

  // コードスニペットを定義
  const fontWeightHtml = `
<p class="font-thin ...">Thin</p>
<p class="font-light ...">Light</p>
<p class="font-normal ...">Normal</p>
<p class="font-medium ...">Medium</p>
<p class="font-semibold ...">Semi Bold</p>
<p class="font-bold ...">Bold</p>
<p class="font-black ...">Black</p>
  `.trim();


  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Font Weight - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Font Weight utility in Tailwind CSS. Examples and usage details for Font Weight." />
      </Helmet>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              テキストのフォントの太さ (weight) を制御するためのユーティリティクラスです。Thin から Black までの様々な太さを指定できます。
            </p>
            <p>
              CSS の <code>font-weight</code> プロパティを制御します。
            </p>
          </div>
        </section>

        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              基本的な使い方とパラメータ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              <code>font-{'{weight}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>デフォルトで用意されている太さ:</p>
            <ul className="list-disc list-inside space-y-1 pl-4 columns-2">
              <li><strong><code>font-thin</code></strong> (100)</li>
              <li><strong><code>font-extralight</code></strong> (200)</li>
              <li><strong><code>font-light</code></strong> (300)</li>
              <li><strong><code>font-normal</code></strong> (400 - デフォルト)</li>
              <li><strong><code>font-medium</code></strong> (500)</li>
              <li><strong><code>font-semibold</code></strong> (600)</li>
              <li><strong><code>font-bold</code></strong> (700)</li>
              <li><strong><code>font-extrabold</code></strong> (800)</li>
              <li><strong><code>font-black</code></strong> (900)</li>
            </ul>
             <p className="mt-4">
              数値は CSS の <code>font-weight</code> 値に対応します。
            </p>
             <p>
              任意の値 (例: <code>font-[550]</code>) も使用可能です (Tailwind JIT モード)。ただし、使用するフォントがその太さをサポートしている必要があります。
            </p>
          </div>
        </section>

        {/* 使用例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なるフォントの太さの適用例。
          </p>
          <div>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{fontWeightHtml}</code>
            </pre>
            <FontWeightExample />
          </div>
        </section>

        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてフォントの太さを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>font-normal md:font-bold</code> はデフォルトで通常の太さ、中程度の画面サイズ以上で太字になります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="font-normal md:font-bold ...">
  Responsive Font Weight
</p>
              `.trim()}</code>
            </pre>
          </div>
        </section>

        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              注意点
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                指定した太さが使用するフォントファミリーで利用可能である必要があります。利用できない場合、ブラウザは最も近い利用可能な太さで表示しようとするか、太さを合成しようとすることがあります (faux bold)。
              </li>
              <li>
                Web フォントを使用する場合、必要な太さのフォントファイルをすべて読み込んでいることを確認してください。
              </li>
            </ul>
          </div>
        </section>

        {/* 関連ユーティリティ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              関連ユーティリティ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
               <li>
                <code>font-family</code> (<code>font-*</code>): フォントファミリーを設定します。
              </li>
              <li>
                <code>font-size</code> (<code>text-*</code>): フォントサイズを設定します。
              </li>
              <li>
                <code>font-style</code> (<code>italic</code>, <code>not-italic</code>): フォントスタイルを設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default FontWeightPage;
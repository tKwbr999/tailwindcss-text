import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント

const TrackingExample: React.FC = () => {
  return (
    <div className="space-y-1">
      <p className="tracking-tighter">Tighter (-0.05em)</p>
      <p className="tracking-tight">Tight (-0.025em)</p>
      <p className="tracking-normal">Normal (0em - デフォルト)</p>
      <p className="tracking-wide">Wide (0.025em)</p>
      <p className="tracking-wider">Wider (0.05em)</p>
      <p className="tracking-widest">Widest (0.1em)</p>
    </div>
  );
};

const ArbitraryTrackingExample: React.FC = () => {
    return (
      <p className="tracking-[.25em]">任意の値: tracking-[.25em]</p>
    );
  };


// ページコンポーネント本体
const LetterSpacingPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Typography: Letter Spacing (文字間隔)';
  const links = [
    {
      title: 'Tailwind CSS: Letter Spacing',
      url: 'https://tailwindcss.com/docs/letter-spacing',
    },
    {
      title: 'MDN: letter-spacing',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing',
    },
  ];

  // コードスニペットを定義
  const trackingHtml = `
<p class="tracking-tighter ...">...</p>
<p class="tracking-tight ...">...</p>
<p class="tracking-normal ...">...</p>
<p class="tracking-wide ...">...</p>
<p class="tracking-wider ...">...</p>
<p class="tracking-widest ...">...</p>
  `.trim();

  const arbitraryTrackingHtml = `<p class="tracking-[.25em] ...">...</p>`;


  return (
    <ArticleLayout title={title} links={links}>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              テキストの文字間隔 (トラッキング) を調整するためのユーティリティクラスです。文字同士の間隔を広げたり狭めたりして、テキストの読みやすさやデザインを調整します。
            </p>
            <p>
              CSS の <code>letter-spacing</code> プロパティを制御します。
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
              <code>tracking-{'{level}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>デフォルトで用意されているレベル:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>tracking-tighter</code></strong> (-0.05em)</li>
              <li><strong><code>tracking-tight</code></strong> (-0.025em)</li>
              <li><strong><code>tracking-normal</code></strong> (0em - デフォルト)</li>
              <li><strong><code>tracking-wide</code></strong> (0.025em)</li>
              <li><strong><code>tracking-wider</code></strong> (0.05em)</li>
              <li><strong><code>tracking-widest</code></strong> (0.1em)</li>
            </ul>
             <p className="mt-4">
              値は <code>em</code> 単位で指定されており、現在のフォントサイズに基づいた相対的な間隔となります。
            </p>
             <p>
              任意の値 (例: <code>tracking-[.15em]</code>, <code>tracking-[2px]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なる文字間隔ユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* Standard Tracking */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">標準レベル</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{trackingHtml}</code>
              </pre>
              <TrackingExample />
            </div>
            {/* Arbitrary Tracking */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryTrackingHtml}</code>
              </pre>
              <ArbitraryTrackingExample />
            </div>
          </div>
        </section>

        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて文字間隔を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>tracking-normal md:tracking-wide</code> はデフォルトで通常の間隔、中程度の画面サイズ以上で広い間隔になります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="tracking-normal md:tracking-wide ...">
  Responsive Letter Spacing
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
                文字間隔の調整は、特に見出しや短いテキストでデザインのアクセントとして有効ですが、本文テキストで過度に調整すると読みにくくなる可能性があります。
              </li>
              <li>
                <code>em</code> 単位は現在のフォントサイズに比例するため、フォントサイズを変更すると実際の文字間隔 (ピクセル単位) も変わります。
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
                <code>font-size</code> (<code>text-*</code>): フォントサイズを設定します。文字間隔の <code>em</code> 値の基準となります。
              </li>
              <li>
                <code>line-height</code> (<code>leading-*</code>): 行の高さを設定します。
              </li>
              <li>
                <code>word-spacing</code>: 単語間の間隔を制御します (Tailwind コアには含まれていない場合あり)。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default LetterSpacingPage;
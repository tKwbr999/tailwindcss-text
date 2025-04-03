import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

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
  // ArticleLayout に渡すデータ
  const title = 'Typography: Text Underline Offset (下線のオフセット)';
  const links = [
    {
      title: 'Tailwind CSS: Text Underline Offset',
      url: 'https://tailwindcss.com/docs/text-underline-offset',
    },
    {
      title: 'MDN: text-underline-offset',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset',
    },
  ];

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
    <ArticleLayout title={title} links={links}>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              テキストの下線 (underline) とテキストのベースラインとの間の垂直方向の距離 (オフセット) を設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>text-underline-offset</code> プロパティを制御します。
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
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なる下線オフセットの適用例。
          </p>
          <div className="space-y-6">
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
          </div>
        </section>

        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイント (<code>md:underline-offset-4</code> など) や状態 (<code>hover:underline-offset-2</code> など) に応じて下線のオフセットを変更できます。
          </p>
          <div>
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
                下線のオフセットを変更するには、まず <code>underline</code> クラスで下線自体を適用する必要があります。
              </li>
              <li>
                <code>underline-offset-auto</code> の具体的な挙動はブラウザによって異なる場合があります。
              </li>
               <li>
                ブラウザのサポート状況を確認してください。<code>text-underline-offset</code> は比較的新しい CSS プロパティです。
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
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default TextUnderlineOffsetPage;
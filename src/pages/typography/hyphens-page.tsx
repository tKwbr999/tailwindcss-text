import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント
// 注意: hyphens プロパティの効果は、言語設定 (lang 属性) とブラウザの辞書に依存します。
//       また、テキストが実際に改行される必要がある場合にのみハイフネーションが発生します。

const HyphensNoneExample: React.FC = () => {
  return (
    <div className="w-48 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
      <p className="hyphens-none text-gray-800 dark:text-gray-200" lang="en">
        Hyphens None (デフォルト): Hyphenation will not happen automatically for long words like supercalifragilisticexpialidocious.
      </p>
    </div>
  );
};

const HyphensManualExample: React.FC = () => {
  return (
    <div className="w-48 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
      <p className="hyphens-manual text-gray-800 dark:text-gray-200" lang="en">
        Hyphens Manual: Hyphenation only occurs where a soft hyphen (&amp;shy;) is present, like in super&shy;califragilistic&shy;expialidocious.
      </p>
    </div>
  );
};

const HyphensAutoExample: React.FC = () => {
    return (
      <div className="w-48 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
        <p className="hyphens-auto text-gray-800 dark:text-gray-200" lang="en">
          Hyphens Auto: The browser will automatically hyphenate words like supercalifragilisticexpialidocious based on its dictionary and line-breaking opportunities.
        </p>
      </div>
    );
  };


// ページコンポーネント本体
const HyphensPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Typography: Hyphens (ハイフネーション)';
  const links = [
    {
      title: 'Tailwind CSS: Hyphens',
      url: 'https://tailwindcss.com/docs/hyphens',
    },
    {
      title: 'MDN: hyphens',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens',
    },
  ];

  // コードスニペットを定義
  const hyphensNoneHtml = `<p class="hyphens-none ..." lang="en">...</p>`; // Default
  const hyphensManualHtml = `<p class="hyphens-manual ..." lang="en">super&shy;cali...</p>`; // &shy; is the soft hyphen
  const hyphensAutoHtml = `<p class="hyphens-auto ..." lang="en">...</p>`;


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
              テキストがコンテナの境界で折り返す際に、単語をハイフン (-) で分割 (ハイフネーション) するかどうか、またその方法を制御するためのユーティリティクラスです。これにより、特に狭いコンテナでのテキストの右端の不揃い (raggedness) を減らすことができます。
            </p>
            <p>
              CSS の <code>hyphens</code> プロパティを制御します。
            </p>
            <p className="text-sm text-orange-700 dark:text-orange-400">
              <strong>注意:</strong> ハイフネーションの挙動は、HTML 要素の <code>lang</code> 属性で指定された言語と、ブラウザがその言語のハイフネーション辞書を持っているかに依存します。
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
              以下のクラスをテキストを含む要素に適用します。<code>lang</code> 属性の設定も重要です。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>hyphens-none</code></strong>: デフォルト。自動ハイフネーションを行いません。単語は空白でのみ改行されます。</li>
              <li><strong><code>hyphens-manual</code></strong>: ソフトハイフン (<code>&amp;shy;</code> または <code>\u00AD</code>) が挿入されている場所でのみハイフネーションを許可します。</li>
              <li><strong><code>hyphens-auto</code></strong>: ブラウザが言語辞書に基づいて、適切な箇所で自動的にハイフネーションを行います。</li>
            </ul>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なるハイフネーションユーティリティの適用例。<code>lang="en"</code> を指定しています。
          </p>
          <div className="space-y-6">
            {/* None */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">hyphens-none (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{hyphensNoneHtml}</code>
              </pre>
              <HyphensNoneExample />
            </div>
            {/* Manual */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">hyphens-manual</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{hyphensManualHtml}</code>
              </pre>
              <HyphensManualExample />
            </div>
             {/* Auto */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">hyphens-auto</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{hyphensAutoHtml}</code>
              </pre>
              <HyphensAutoExample />
            </div>
          </div>
        </section>

        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてハイフネーションの挙動を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>hyphens-none md:hyphens-auto</code> は小さい画面ではハイフネーションせず、中程度の画面サイズ以上で自動ハイフネーションを有効にします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="hyphens-none md:hyphens-auto ..." lang="en">
  Hyphenation behavior changes based on screen size...
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
                <strong>言語指定 (<code>lang</code> 属性) が重要:</strong> 自動ハイフネーション (<code>hyphens-auto</code>) が正しく機能するためには、HTML 要素に適切な <code>lang</code> 属性 (例: <code>lang="en"</code>, <code>lang="ja"</code>) を設定する必要があります。これにより、ブラウザは正しい言語の辞書を使用できます。
              </li>
              <li>
                <strong>ブラウザと辞書のサポート:</strong> すべてのブラウザがすべての言語のハイフネーション辞書を持っているわけではありません。サポートされていない言語では <code>hyphens-auto</code> が機能しない場合があります。
              </li>
               <li>
                <code>hyphens-manual</code> を使用する場合、ハイフネーションさせたい箇所に手動でソフトハイフン (<code>&amp;shy;</code>) を挿入する必要があります。
              </li>
               <li>
                ハイフネーションはテキストの見た目に影響を与えるため、デザイン全体のバランスを考慮して使用してください。
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
                <code>word-break</code> (<code>break-all</code>, <code>break-words</code>): 単語の途中での改行ルールを制御します。ハイフネーションとは異なるアプローチです。
              </li>
              <li>
                <code>text-wrap</code> (<code>text-wrap</code>, <code>text-nowrap</code> など): テキストの折り返し方法を制御します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default HyphensPage;
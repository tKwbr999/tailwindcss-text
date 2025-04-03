import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント
// content-* は主に ::before / ::after 疑似要素と組み合わせて使用します。
// React コンポーネント内で直接スタイルを適用するのは一般的ではありませんが、
// CSS の効果を示すためにインラインスタイルや追加の CSS を使って表現します。

const ContentNoneExample: React.FC = () => {
  // Tailwind の content-none は ::before, ::after に適用されるため、
  // このコンポーネント単体では視覚的な効果を示しにくい。
  // CSS で ::before { content: 'default'; } があると仮定した場合の効果を示す。
  return (
    <div className="relative bg-gray-100 dark:bg-gray-800 p-4 rounded border border-gray-300">
      <style>{`
        .pseudo-example::before { content: 'Default: '; font-weight: bold; color: gray; }
        .pseudo-example.content-none::before { content: none; }
      `}</style>
      <p className="pseudo-example content-none text-gray-800 dark:text-gray-200">
        Content None: この要素の ::before 疑似要素の content は none に設定されます (デフォルトの 'Default: ' が消える)。
      </p>
       <p className="pseudo-example text-gray-800 dark:text-gray-200 mt-2">
        (Default): この要素には content-none が適用されていないため、::before が表示されます。
      </p>
    </div>
  );
};

const ContentStringExample: React.FC = () => {
    // 任意の値の例
  return (
    <div className="relative bg-gray-100 dark:bg-gray-800 p-4 rounded border border-gray-300">
       <style>{`
        .pseudo-string::before { content: attr(data-before); color: blue; margin-right: 0.5em; }
        .pseudo-quote::before { content: open-quote; }
        .pseudo-quote::after { content: close-quote; }
      `}</style>
      <p className="before:content-['Hello:_'] text-gray-800 dark:text-gray-200">
        before:content-['Hello:_']: 疑似要素に文字列を追加。
      </p>
       <p className="before:content-[attr(data-text)] before:font-bold before:mr-1 text-gray-800 dark:text-gray-200" data-text="Attr:">
        before:content-[attr(data-text)]: data属性からコンテンツを取得。
      </p>
       <p className="before:content-[''] text-gray-800 dark:text-gray-200">
        before:content-['']: 空文字列を設定 (マーカー削除などに)。
      </p>
       <p className="before:content-['\201C'] after:content-['\201D'] text-gray-800 dark:text-gray-200">
        引用符を追加 (Unicode)。
      </p>
       <p className="pseudo-quote quotes-['\00AB'_\00BB'] text-gray-800 dark:text-gray-200">
        quotes-* と open/close-quote を使用 (要 Tailwind v3.3+)。
      </p>
    </div>
  );
};


// ページコンポーネント本体
const ContentPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Typography: Content (コンテンツ)';
  const links = [
    {
      title: 'Tailwind CSS: Content (v3.0+)',
      url: 'https://tailwindcss.com/docs/content',
    },
    {
      title: 'MDN: content',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/content',
    },
     {
      title: 'Tailwind CSS: Before & After Pseudo-elements',
      url: 'https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after',
    },
  ];

  // コードスニペットを定義
  const contentNoneHtml = `<div class="before:content-none ...">...</div>`;
  const contentStringHtml = `
<div class="before:content-['Hello'] ...">...</div>
<div class="before:content-[attr(data-text)] ..." data-text="Hi">...</div>
<div class="before:content-[''] ...">...</div> {/* Empty */}
<div class="before:content-['\\u201C'] after:content-['\\u201D'] ...">Quote</div>
<div class="quotes-['«'_'»'] before:content-[open-quote] after:content-[close-quote] ...">Quote</div> {/* v3.3+ */}
  `.trim();


  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Content - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Content utility in Tailwind CSS. Examples and usage details for Content." />
      </Helmet>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の <code>::before</code> および <code>::after</code> 疑似要素の <code>content</code> プロパティを設定するためのユーティリティクラスです。これにより、CSS を使って要素の前後に装飾的なテキストや記号を追加できます。
            </p>
            <p>
              CSS の <code>content</code> プロパティを制御します。<strong>これは Tailwind CSS v3.0 で追加された機能です。</strong>
            </p>
          </div>
        </section>

        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              基本的な使い方とパラメータ (v3.0+)
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              <code>content-none</code> または任意の値 (<code>content-['...']</code>, <code>content-[attr(...)]</code> など) を、<code>before:</code> または <code>after:</code> 修飾子と組み合わせて要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>content-none</code></strong> (<code>content: none;</code>): 疑似要素のコンテンツを削除します。</li>
              <li><strong>任意の値 (文字列)</strong>: <code>content-['hello']</code> のように角括弧内に引用符で囲んだ文字列を指定します (例: <code>content: 'hello';</code>)。</li>
              <li><strong>任意の値 (空文字列)</strong>: <code>content-['']</code> のように空文字列を指定します (例: <code>content: '';</code>)。clearfix や他の装飾目的で使用されることがあります。</li>
              <li><strong>任意の値 (属性)</strong>: <code>content-[attr(data-text)]</code> のように <code>attr()</code> 関数を使用して、要素のデータ属性からコンテンツを取得します (例: <code>content: attr(data-text);</code>)。</li>
              <li><strong>任意の値 (引用符)</strong>: <code>content-[open-quote]</code> や <code>content-[close-quote]</code> を使用して、<code>quotes</code> プロパティで定義された引用符を表示します (v3.3+)。</li>
              <li><strong>任意の値 (URL)</strong>: <code>content-[url('/img.png')]</code> のように画像を表示することも可能ですが、通常は背景画像など他の方法が推奨されます。</li>
            </ul>
             <p className="mt-4">
              <code>before:</code> 修飾子は <code>::before</code> 疑似要素に、<code>after:</code> 修飾子は <code>::after</code> 疑似要素にスタイルを適用します。
            </p>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なる content ユーティリティの適用例 (主に <code>before:</code> 修飾子を使用)。
          </p>
          <div className="space-y-6">
            {/* None */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">content-none</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{contentNoneHtml}</code>
              </pre>
              <ContentNoneExample />
            </div>
            {/* String/Attr/Quotes */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">文字列、属性、引用符など</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{contentStringHtml}</code>
              </pre>
              <ContentStringExample />
            </div>
          </div>
        </section>

        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイント (<code>md:before:content-['Desktop:']</code> など) や状態 (<code>hover:after:content-['_↗']</code> など) に応じて疑似要素のコンテンツを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、リンクのホバー時にアイコンを追加できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<a href="#" class="after:content-[''] hover:after:content-['_↗'] ...">
  External Link
</a>
              `.trim()}</code>
            </pre>
             <a href="#" className="after:content-[''] hover:after:content-['_↗'] text-blue-600 dark:text-blue-400">
              External Link
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
                <code>content-*</code> ユーティリティは、<code>before:</code> または <code>after:</code> 修飾子と組み合わせて使用する必要があります。
              </li>
              <li>
                疑似要素はデフォルトではインライン要素として扱われます。必要に応じて <code>before:block</code> や <code>after:absolute</code> などの他のユーティリティを追加してスタイルを調整します。
              </li>
               <li>
                任意の値で文字列を指定する場合、文字列を引用符 (<code>'</code> または <code>"</code>) で囲む必要があります: <code>content-['hello']</code>。
              </li>
               <li>
                <code>attr()</code> 関数は現在、文字列値の取得にのみ広くサポートされています。他のデータ型や単位の扱いは限定的です。
              </li>
               <li>
                <code>open-quote</code> と <code>close-quote</code> を使用するには、<code>quotes</code> プロパティ (Tailwind v3.3+ の <code>quotes-*</code> ユーティリティ) で引用符の種類を定義する必要があります。
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
                <code>before:*</code> / <code>after:*</code>: 疑似要素に他のスタイル (色、パディング、配置など) を適用するための修飾子。
              </li>
              <li>
                <code>quotes</code> (<code>quotes-*</code>): <code>open-quote</code> と <code>close-quote</code> で使用される引用符の種類を定義します (v3.3+)。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default ContentPage;
import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント

const ListNoneExample: React.FC = () => {
  return (
    <ul className="list-none space-y-1 ml-6"> {/* ml-6 は比較のため */}
      <li>List item 1 (list-none)</li>
      <li>List item 2</li>
    </ul>
  );
};

const ListDiscExample: React.FC = () => {
  return (
    <ul className="list-disc list-inside space-y-1">
      <li>List item 1 (list-disc)</li>
      <li>List item 2</li>
    </ul>
  );
};

const ListDecimalExample: React.FC = () => {
    return (
      <ol className="list-decimal list-inside space-y-1"> {/* ol 要素を使用 */}
        <li>List item 1 (list-decimal)</li>
        <li>List item 2</li>
      </ol>
    );
  };


// ページコンポーネント本体
const ListStyleTypePage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Typography: List Style Type ';
const jaTitle = 'リストマーカーの種類';
  const links = [
    {
      title: 'Tailwind CSS: List Style Type',
      url: 'https://tailwindcss.com/docs/list-style-type',
    },
    {
      title: 'MDN: list-style-type',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type',
    },
  ];

  // コードスニペットを定義
  const listNoneHtml = `<ul class="list-none ...">...</ul>`;
  const listDiscHtml = `<ul class="list-disc list-inside ...">...</ul>`;
  const listDecimalHtml = `<ol class="list-decimal list-inside ...">...</ol>`; // Use <ol>


  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>List Style Type - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the List Style Type utility in Tailwind CSS. Examples and usage details for List Style Type." />
      </Helmet>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              リストアイテムのマーカーの種類 (例: 黒丸、数字、ローマ数字など) を設定するためのユーティリティクラスです。順序付きリスト (<code>&lt;ol&gt;</code>) と順序なしリスト (<code>&lt;ul&gt;</code>) の両方に適用できます。
            </p>
            <p>
              CSS の <code>list-style-type</code> プロパティを制御します。
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
              <code>list-{'{type}'}</code> の形式でクラスをリスト要素 (<code>&lt;ul&gt;</code> または <code>&lt;ol&gt;</code>) に適用します。
            </p>
            <p>デフォルトで用意されているタイプ:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>list-none</code></strong> (<code>list-style-type: none;</code>): マーカーを表示しません。</li>
              <li><strong><code>list-disc</code></strong> (<code>list-style-type: disc;</code>): 黒丸 (•) マーカーを表示します (<code>&lt;ul&gt;</code> のデフォルト)。</li>
              <li><strong><code>list-decimal</code></strong> (<code>list-style-type: decimal;</code>): 数字 (1, 2, 3...) マーカーを表示します (<code>&lt;ol&gt;</code> のデフォルト)。</li>
            </ul>
             <p className="mt-4">
              これらは最も一般的に使用されるタイプです。他の <code>list-style-type</code> 値 (例: <code>square</code>, <code>circle</code>, <code>upper-roman</code>, <code>lower-alpha</code> など) を使用したい場合は、<code>tailwind.config.js</code> で拡張するか、任意の値 (例: <code>list-[square]</code>) を使用します (Tailwind JIT モード)。
            </p>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              基本的な list-style-type ユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* None */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">list-none</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{listNoneHtml}</code>
              </pre>
              <ListNoneExample />
            </div>
            {/* Disc */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">list-disc</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{listDiscHtml}</code>
              </pre>
              <ListDiscExample />
            </div>
             {/* Decimal */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">list-decimal</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{listDecimalHtml}</code>
              </pre>
              <ListDecimalExample />
            </div>
          </div>
        </section>

        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてリストスタイルタイプを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>list-disc md:list-decimal</code> はデフォルトで黒丸マーカー、中程度の画面サイズ以上で数字マーカーを使用します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<ul class="list-disc md:list-decimal list-inside ...">
  {/* ... list items */}
</ul>
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
                <code>list-style-type</code> はリスト要素 (<code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>) または個々のリストアイテム (<code>&lt;li&gt;</code>) に適用できますが、通常はリスト要素全体に適用します。
              </li>
              <li>
                マーカーの表示には、<code>list-style-position</code> (<code>list-inside</code> または <code>list-outside</code>) も影響します。<code>list-outside</code> (デフォルト) の場合、マーカーが見えるようにリスト要素にマージンやパディングが必要になることがあります。
              </li>
               <li>
                <code>list-none</code> を使用すると、すべてのマーカーが非表示になります。
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
                <code>list-style-position</code> (<code>list-inside</code>, <code>list-outside</code>): リストマーカーの位置を設定します。
              </li>
              <li>
                <code>list-style-image</code> (<code>list-image-*</code>): リストマーカーとして画像を使用します。これが設定されている場合、<code>list-style-type</code> はフォールバックとして機能します。
              </li>
               <li>
                <code>margin</code> / <code>padding</code> (<code>ml-*</code>, <code>pl-*</code> など): リスト全体のインデントを調整します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default ListStyleTypePage;
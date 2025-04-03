import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント

const ListInsideExample: React.FC = () => {
  return (
    <ul className="list-inside list-disc bg-gray-100 dark:bg-gray-800 p-4 rounded border border-gray-300">
      <li>List item 1: list-inside. マーカーはテキストと同じブロック内に配置され、テキストが折り返すとマーカーの下に回り込みます。</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  );
};

const ListOutsideExample: React.FC = () => {
  return (
    <ul className="list-outside list-disc bg-gray-100 dark:bg-gray-800 p-4 rounded border border-gray-300 ml-6"> {/* ml-6 で左マージンを追加してマーカーが見えるように */}
      <li>List item 1: list-outside (デフォルト). マーカーはテキストブロックの外側に配置され、テキストはマーカーの右側に揃えられます。</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  );
};


// ページコンポーネント本体
const ListStylePositionPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Typography: List Style Position (リストマーカー位置)';
  const links = [
    {
      title: 'Tailwind CSS: List Style Position',
      url: 'https://tailwindcss.com/docs/list-style-position',
    },
    {
      title: 'MDN: list-style-position',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position',
    },
  ];

  // コードスニペットを定義
  const listInsideHtml = `<ul class="list-inside list-disc ...">...</ul>`;
  const listOutsideHtml = `<ul class="list-outside list-disc ml-6 ...">...</ul>`; // ml-6 for visibility


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
              リストアイテムのマーカー (例: • や数字) を、リストアイテムのテキストコンテンツに対して内側に配置するか外側に配置するかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>list-style-position</code> プロパティを制御します。
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
              以下のクラスをリスト要素 (<code>&lt;ul&gt;</code> または <code>&lt;ol&gt;</code>) に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>list-inside</code></strong>: マーカーをリストアイテムのテキストと同じブロック内に配置します。テキストが折り返すと、マーカーの下に回り込みます。</li>
              <li><strong><code>list-outside</code></strong>: デフォルト。マーカーをリストアイテムのテキストブロックの外側に配置します。テキストはマーカーの右側にインデントされて表示されます。</li>
            </ul>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              list-inside と list-outside の違い。
          </p>
          <div className="space-y-6">
            {/* Inside */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">list-inside</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{listInsideHtml}</code>
              </pre>
              <ListInsideExample />
            </div>
            {/* Outside */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">list-outside (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{listOutsideHtml}</code>
              </pre>
              <ListOutsideExample />
               <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                (マーカーが見えるように左マージン <code>ml-6</code> を追加しています)
              </p>
            </div>
          </div>
        </section>

        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてマーカーの位置を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>list-inside md:list-outside</code> はデフォルトで内側、中程度の画面サイズ以上で外側にマーカーを配置します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<ul class="list-inside md:list-outside list-disc ...">
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
                <code>list-style-position</code> はリスト要素 (<code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>) または個々のリストアイテム (<code>&lt;li&gt;</code>) に適用できますが、通常はリスト要素全体に適用します。
              </li>
              <li>
                <code>list-outside</code> (デフォルト) を使用する場合、マーカーが親コンテナのパディング領域にはみ出して見えなくなることがあります。必要に応じてリスト要素に左マージン (<code>ml-*</code>) や左パディング (<code>pl-*</code>) を追加して調整します。
              </li>
               <li>
                <code>list-inside</code> を使用すると、複数行にわたるテキストのインデントがマーカーの下に回り込むため、見た目が異なる場合があります。
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
                <code>list-style-type</code> (<code>list-disc</code>, <code>list-decimal</code> など): リストマーカーの種類を設定します。
              </li>
              <li>
                <code>list-style-image</code> (<code>list-image-*</code>): リストマーカーとして画像を使用します。
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

export default ListStylePositionPage;
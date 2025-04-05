import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const OrderExample: React.FC = () => {
  return (
    <div className="flex bg-gray-100 dark:bg-gray-800 p-2 rounded space-x-2">
      <div className="order-3 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">
        Item 1 (order-3)
      </div>
      <div className="order-1 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">
        Item 2 (order-1)
      </div>
      <div className="order-2 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">
        Item 3 (order-2)
      </div>
      {/* DOM上の順序は 1, 2, 3 だが、表示順は 2, 3, 1 となる */}
    </div>
  );
};

const OrderFirstLastExample: React.FC = () => {
  return (
    <div className="flex bg-gray-100 dark:bg-gray-800 p-2 rounded space-x-2">
      <div className="order-last bg-green-300 dark:bg-green-700 p-2 rounded text-center">
        Item 1 (order-last)
      </div>{' '}
      {/* order: 9999 */}
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded text-center">
        Item 2 (デフォルト order: 0)
      </div>
      <div className="order-first bg-green-300 dark:bg-green-700 p-2 rounded text-center">
        Item 3 (order-first)
      </div>{' '}
      {/* order: -9999 */}
      {/* 表示順は 3, 2, 1 となる */}
    </div>
  );
};

const OrderNoneExample: React.FC = () => {
  return (
    <div className="flex bg-gray-100 dark:bg-gray-800 p-2 rounded space-x-2">
      <div className="order-2 bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">
        Item 1 (order-2)
      </div>
      <div className="order-none bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">
        Item 2 (order-none)
      </div>{' '}
      {/* order: 0 */}
      <div className="order-1 bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">
        Item 3 (order-1)
      </div>
      {/* 表示順は 2, 3, 1 となる (order-none は order: 0 と同じ) */}
    </div>
  );
};

// ページコンポーネント本体
const OrderPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Flexbox & Grid: Order ';
  const jaTitle = '順序';
  const links = [
    {
      title: 'Tailwind CSS: Order',
      url: 'https://tailwindcss.com/docs/order',
    },
    {
      title: 'MDN: order',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/order',
    },
  ];

  // コードスニペットを定義
  const orderHtml = `
<div class="flex ...">
  <div class="order-3 ...">Item 1</div>
  <div class="order-1 ...">Item 2</div> {/* これが最初に表示 */}
  <div class="order-2 ...">Item 3</div>
</div>
  `.trim();

  const orderFirstLastHtml = `
<div class="flex ...">
  <div class="order-last ...">Item 1</div>  {/* これが最後に表示 */}
  <div>Item 2</div> {/* デフォルト (order: 0) */}
  <div class="order-first ...">Item 3</div> {/* これが最初に表示 */}
</div>
  `.trim();

  const orderNoneHtml = `
<div class="flex ...">
  <div class="order-2 ...">Item 1</div>
  <div class="order-none ...">Item 2</div> {/* order: 0 と同じ */}
  <div class="order-1 ...">Item 3</div>
</div>
  `.trim();

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>
      <Helmet>
        <title>Order - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Order utility in Tailwind CSS. Examples and usage details for Order."
        />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              フレックスアイテムまたはグリッドアイテムの視覚的な表示順序を、DOM (ソースコード)
              上の順序とは独立して制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>order</code> プロパティを制御します。
            </p>
            <p>
              デフォルトでは、すべてのアイテムは <code>order: 0;</code> を持ち、DOM
              の順序通りに表示されます。<code>order</code>{' '}
              の値が小さいアイテムほど先に表示されます。
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
              <code>order-{'{number}'}</code>, <code>order-first</code>, <code>order-last</code>,{' '}
              <code>order-none</code>{' '}
              の形式でクラスをフレックスアイテムまたはグリッドアイテムに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>order-{'{number}'}</code>
                </strong>{' '}
                (例: <code>order-1</code>, <code>order-2</code>, ..., <code>order-12</code>):
                指定した数値 (1から12) を <code>order</code>{' '}
                値として設定します。数値が小さいほど先に表示されます。
              </li>
              <li>
                <strong>
                  <code>order-first</code>
                </strong>{' '}
                (<code>order: -9999;</code>): アイテムを他のすべてのアイテムよりも先に表示させます。
              </li>
              <li>
                <strong>
                  <code>order-last</code>
                </strong>{' '}
                (<code>order: 9999;</code>): アイテムを他のすべてのアイテムよりも後に表示させます。
              </li>
              <li>
                <strong>
                  <code>order-none</code>
                </strong>{' '}
                (<code>order: 0;</code>): デフォルトの順序 (DOM 順) にリセットします。
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>order-[99]</code>) や負の値 (例: <code>-order-1</code>)
              も使用可能です (Tailwind JIT モード)。負の値は <code>order-none</code> (0)
              より先に表示されます。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる order 値を持つフレックスアイテムの表示順序。
          </p>
          <div className="space-y-6">
            {/* Numbered Order */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                数値指定 (order-1, order-2, order-3)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{orderHtml}</code>
              </pre>
              <OrderExample />
            </div>
            {/* First / Last */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                order-first / order-last
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{orderFirstLastHtml}</code>
              </pre>
              <OrderFirstLastExample />
            </div>
            {/* None */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">order-none</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{orderNoneHtml}</code>
              </pre>
              <OrderNoneExample />
            </div>
          </div>
        </section>
        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など)
            を使って、特定の画面サイズでのみ <code>order</code>{' '}
            を変更できます。レスポンシブレイアウトで要素の順序を調整するのに非常に便利です。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>order-last md:order-first</code>{' '}
              はデフォルトでアイテムを最後に配置し、中程度の画面サイズ以上で最初に配置します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="flex flex-col md:flex-row ...">
  <div class="order-last md:order-first ...">Sidebar</div>
  <div class="order-first md:order-last ...">Main Content</div>
</div>
              `.trim()}
              </code>
            </pre>
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <code>order</code> はフレックスアイテムまたはグリッドアイテムに適用します。
              </li>
              <li>
                <code>order</code> プロパティは視覚的な表示順序のみを変更します。DOM
                の順序は変わらないため、キーボードナビゲーション (Tab キーでの移動順序)
                やスクリーンリーダーの読み上げ順序は DOM の順序に従います。視覚的な順序と DOM
                の順序が大きく異なると、アクセシビリティの問題を引き起こす可能性があります。重要なコンテンツの順序変更には特に注意が必要です。
              </li>
              <li>
                同じ <code>order</code> 値を持つアイテムは、DOM の順序通りに表示されます。
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
                <code>display</code> (<code>flex</code>, <code>inline-flex</code>, <code>grid</code>
                , <code>inline-grid</code>):
                要素をフレックスコンテナまたはグリッドコンテナにします。<code>order</code>{' '}
                はこれらのコンテナ内のアイテムに適用されます。
              </li>
              <li>
                <code>flex-direction</code> (<code>flex-row-reverse</code>,{' '}
                <code>flex-col-reverse</code>): アイテムの配置方向と順序を反転させます。
                <code>order</code> とは異なるアプローチで順序を変更します。
              </li>
              <li>
                Grid 配置ユーティリティ (<code>grid-cols-*</code>, <code>grid-rows-*</code>,{' '}
                <code>col-start-*</code>, <code>row-start-*</code> など):
                グリッドレイアウトにおけるアイテムの位置をより細かく制御します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default OrderPage;

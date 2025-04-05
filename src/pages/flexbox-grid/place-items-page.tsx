import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// place-items は align-items と justify-items のショートハンドです。Grid レイアウトに適用されます。

const PlaceItemsStartExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 place-items-start gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded h-32">
      {' '}
      {/* h-32 */}
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded">1</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded">Item 2</div> {/* サイズが異なる */}
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded">3</div>
      {/* 各アイテムは自身のグリッドエリアの開始位置 (左上) に配置される (align-items: start, justify-items: start) */}
    </div>
  );
};

const PlaceItemsEndExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 place-items-end gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded h-32">
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded">1</div>
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded">Item 2</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded">3</div>
      {/* 各アイテムは自身のグリッドエリアの終了位置 (右下) に配置される (align-items: end, justify-items: end) */}
    </div>
  );
};

const PlaceItemsCenterExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 place-items-center gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded h-32">
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded">1</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-2 rounded">Item 2</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded">3</div>
      {/* 各アイテムは自身のグリッドエリアの中央に配置される (align-items: center, justify-items: center) */}
    </div>
  );
};

const PlaceItemsStretchExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 place-items-stretch gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded h-32">
      <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">1</div>
      <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">Item 2</div>{' '}
      {/* サイズが異なる */}
      <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">3</div>
      {/* 各アイテムは自身のグリッドエリア全体に引き伸ばされる (デフォルト) (align-items: stretch, justify-items: stretch) */}
    </div>
  );
};

// Baseline は place-items では直接指定できない (align-items: baseline のみ)
// 必要であれば align-items-baseline と justify-items-* を組み合わせる

// ページコンポーネント本体
const PlaceItemsPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Flexbox & Grid: Place Items ';
  const jaTitle = 'アイテムの揃え - Grid';
  const links = [
    {
      title: 'Tailwind CSS: Place Items',
      url: 'https://tailwindcss.com/docs/place-items',
    },
    {
      title: 'MDN: place-items',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/place-items',
    },
  ];

  // コードスニペットを定義
  const placeStartHtml = `<div class="grid place-items-start h-32 ...">...</div>`;
  const placeEndHtml = `<div class="grid place-items-end h-32 ...">...</div>`;
  const placeCenterHtml = `<div class="grid place-items-center h-32 ...">...</div>`;
  const placeStretchHtml = `<div class="grid place-items-stretch h-32 ...">...</div>`; // Default

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>
      <Helmet>
        <title>Place Items - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Place Items utility in Tailwind CSS. Examples and usage details for Place Items."
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
              グリッドコンテナ内のすべてのグリッドアイテムを、それぞれのグリッドエリア内で両方の軸
              (インライン軸とブロック軸)
              に沿ってどのように配置するかを一括で制御するためのユーティリティクラス
              (ショートハンド) です。
            </p>
            <p>
              CSS の <code>place-items</code> プロパティ (<code>align-items</code> と{' '}
              <code>justify-items</code> のショートハンド) を制御します。
              <strong>これは Grid レイアウト専用です。</strong> Flexbox には効果がありません。
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
              <code>place-items-{'{alignment}'}</code>{' '}
              の形式でクラスをグリッドコンテナに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>place-items-start</code>
                </strong>
                : アイテムをグリッドエリアの開始位置 (左上) に配置します (
                <code>align-items: start; justify-items: start;</code>)。
              </li>
              <li>
                <strong>
                  <code>place-items-end</code>
                </strong>
                : アイテムをグリッドエリアの終了位置 (右下) に配置します (
                <code>align-items: end; justify-items: end;</code>)。
              </li>
              <li>
                <strong>
                  <code>place-items-center</code>
                </strong>
                : アイテムをグリッドエリアの中央に配置します (
                <code>align-items: center; justify-items: center;</code>)。
              </li>
              <li>
                <strong>
                  <code>place-items-stretch</code>
                </strong>
                : デフォルト。アイテムをグリッドエリア全体に引き伸ばします (
                <code>align-items: stretch; justify-items: stretch;</code>)。
              </li>
            </ul>
            <p className="mt-4">
              <code>place-items</code> は <code>align-items</code> と <code>justify-items</code>{' '}
              に同じ値を設定するショートハンドです。異なる値を設定したい場合は、<code>items-*</code>{' '}
              と <code>justify-items-*</code> を個別に使用します。例えば、
              <code>items-center justify-items-start</code> のように組み合わせます。
            </p>
            {/* Tailwind v3.3+ */}
            <p>
              書字方向に対応する <code>place-items-normal</code> (デフォルトの揃え方、通常{' '}
              <code>stretch</code>), <code>place-items-baseline</code> もありますが、
              <code>baseline</code> は通常 <code>items-baseline</code> で指定します (v3.3+)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            使用例 (Grid)
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            Grid コンテナに対する各 place-items 値の適用例。コンテナには高さが必要です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Start */}
            <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                place-items-start
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{placeStartHtml}</code>
              </pre>
              <PlaceItemsStartExample />
            </div>
            {/* End */}
            <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                place-items-end
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{placeEndHtml}</code>
              </pre>
              <PlaceItemsEndExample />
            </div>
            {/* Center */}
            <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                place-items-center
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{placeCenterHtml}</code>
              </pre>
              <PlaceItemsCenterExample />
            </div>
            {/* Stretch */}
            <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                place-items-stretch (デフォルト)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{placeStretchHtml}</code>
              </pre>
              <PlaceItemsStretchExample />
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
            を使って、画面サイズに応じてアイテムの揃え方を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>place-items-start md:place-items-center</code>{' '}
              はデフォルトで左上揃え、中程度の画面サイズ以上で中央揃えにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="grid place-items-start md:place-items-center h-32 ...">
  {/* ... items */}
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
                <code>place-items</code> はグリッドコンテナに適用します。
              </li>
              <li>
                このプロパティは Grid レイアウト専用です。Flexbox レイアウトには効果がありません。
              </li>
              <li>
                <code>place-items</code> は <code>align-items</code> と <code>justify-items</code>{' '}
                の両方を設定します。軸ごとに異なる揃え方をしたい場合は、<code>items-*</code> と{' '}
                <code>justify-items-*</code> を個別に使用してください。
              </li>
              <li>
                <code>place-items-stretch</code> (デフォルト)
                以外の値を使用すると、アイテムは自身のコンテンツサイズに基づいてサイズが決まります
                (グリッドエリア内で)。
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
                <code>display</code> (<code>grid</code>, <code>inline-grid</code>):
                要素をグリッドコンテナにします。
              </li>
              <li>
                <code>align-items</code> (<code>items-*</code>):
                交差軸方向の揃え方を個別に設定します。
              </li>
              <li>
                <code>justify-items</code> (<code>justify-items-*</code>):
                インライン軸方向の揃え方を個別に設定します。
              </li>
              <li>
                <code>place-content</code> (<code>place-content-*</code>):
                複数行/列の場合の揃えとスペース配分を両軸で設定します。
              </li>
              <li>
                <code>place-self</code> (<code>place-self-*</code>):
                個々のグリッドアイテムの揃え方を両軸で設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default PlaceItemsPage;

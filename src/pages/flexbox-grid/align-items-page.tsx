import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// align-items は単一行/列の場合に効果があります。

const ItemsStartExample: React.FC = () => {
  return (
    <div className="flex items-start bg-gray-100 dark:bg-gray-800 p-2 rounded h-24 space-x-2">
      {' '}
      {/* h-24 で高さを指定 */}
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded">1</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded">Item 2</div> {/* 高さが異なる */}
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded">3</div>
      {/* アイテムはコンテナの上端 (交差軸の開始位置) に揃えられる */}
    </div>
  );
};

const ItemsEndExample: React.FC = () => {
  return (
    <div className="flex items-end bg-gray-100 dark:bg-gray-800 p-2 rounded h-24 space-x-2">
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded">1</div>
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded">Item 2</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded">3</div>
      {/* アイテムはコンテナの下端 (交差軸の終了位置) に揃えられる */}
    </div>
  );
};

const ItemsCenterExample: React.FC = () => {
  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-2 rounded h-24 space-x-2">
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded">1</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-2 rounded">Item 2</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded">3</div>
      {/* アイテムはコンテナの中央 (交差軸方向) に揃えられる */}
    </div>
  );
};

const ItemsBaselineExample: React.FC = () => {
  return (
    <div className="flex items-baseline bg-gray-100 dark:bg-gray-800 p-2 rounded space-x-2">
      <div className="bg-red-300 dark:bg-red-700 pt-2 pb-6 rounded text-sm">Baseline 1</div>{' '}
      {/* padding で高さを変える */}
      <div className="bg-red-300 dark:bg-red-700 pt-8 pb-2 rounded text-lg">Baseline 2</div>{' '}
      {/* font-size も変える */}
      <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-xs">Baseline 3</div>
      {/* アイテムのテキストのベースラインが揃えられる */}
    </div>
  );
};

const ItemsStretchExample: React.FC = () => {
  return (
    <div className="flex items-stretch bg-gray-100 dark:bg-gray-800 p-2 rounded h-24 space-x-2">
      <div className="bg-purple-300 dark:bg-purple-700 p-4 rounded">1</div>
      <div className="bg-purple-300 dark:bg-purple-700 p-2 rounded">Item 2</div>{' '}
      {/* 高さ指定なし */}
      <div className="bg-purple-300 dark:bg-purple-700 p-4 rounded">3</div>
      {/* アイテムはコンテナの高さ全体に引き伸ばされる (デフォルト) */}
    </div>
  );
};

// ページコンポーネント本体
const AlignItemsPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Flexbox & Grid: Align Items ';
const jaTitle = 'アイテムの交差軸揃え';
  const links = [
    {
      title: 'Tailwind CSS: Align Items',
      url: 'https://tailwindcss.com/docs/align-items',
    },
    {
      title: 'MDN: align-items',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/align-items',
    },
  ];

  // コードスニペットを定義
  const itemsStartHtml = `<div class="flex items-start h-24 ...">...</div>`;
  const itemsEndHtml = `<div class="flex items-end h-24 ...">...</div>`;
  const itemsCenterHtml = `<div class="flex items-center h-24 ...">...</div>`;
  const itemsBaselineHtml = `<div class="flex items-baseline ...">...</div>`;
  const itemsStretchHtml = `<div class="flex items-stretch h-24 ...">...</div>`; // Default

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Align Items - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Align Items utility in Tailwind CSS. Examples and usage details for Align Items." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              フレックスコンテナまたはグリッドコンテナ内のアイテムを、交差軸 (cross axis) 方向
              (通常は垂直方向)
              にどのように配置するかを一括で制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>align-items</code> プロパティを制御します。
            </p>
            <p>
              <strong>注意:</strong>{' '}
              このプロパティは、アイテムが単一行/列にある場合に効果があります。複数行/列に折り返している場合は{' '}
              <code>align-content</code> が行/列全体の揃え方を制御します。
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
              <code>items-{'{alignment}'}</code>{' '}
              の形式でクラスをフレックスコンテナまたはグリッドコンテナに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>items-start</code>
                </strong>
                : アイテムを交差軸の開始位置 (通常は上端) に揃えます。
              </li>
              <li>
                <strong>
                  <code>items-end</code>
                </strong>
                : アイテムを交差軸の終了位置 (通常は下端) に揃えます。
              </li>
              <li>
                <strong>
                  <code>items-center</code>
                </strong>
                : アイテムを交差軸の中央に揃えます。
              </li>
              <li>
                <strong>
                  <code>items-baseline</code>
                </strong>
                : アイテムのテキストのベースライン (文字の底が揃う線) を揃えます。
              </li>
              <li>
                <strong>
                  <code>items-stretch</code>
                </strong>
                : デフォルト。アイテムをコンテナの交差軸方向のサイズいっぱいに引き伸ばします
                (アイテムにサイズ指定がない場合)。
              </li>
            </ul>
            {/* Tailwind v3.3+ */}
            <p className="mt-4">
              書字方向に対応する <code>items-normal</code> (デフォルトの揃え方、通常{' '}
              <code>stretch</code>) もあります (v3.3+)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            使用例 (Flexbox)
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            Flexbox コンテナに対する各 align-items 値の適用例。コンテナには高さが必要です。
          </p>
          <div className="space-y-6">
            {/* Start */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">items-start</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{itemsStartHtml}</code>
              </pre>
              <ItemsStartExample />
            </div>
            {/* End */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">items-end</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{itemsEndHtml}</code>
              </pre>
              <ItemsEndExample />
            </div>
            {/* Center */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                items-center
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{itemsCenterHtml}</code>
              </pre>
              <ItemsCenterExample />
            </div>
            {/* Baseline */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                items-baseline
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{itemsBaselineHtml}</code>
              </pre>
              <ItemsBaselineExample />
            </div>
            {/* Stretch */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                items-stretch (デフォルト)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{itemsStretchHtml}</code>
              </pre>
              <ItemsStretchExample />
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
            を使って、画面サイズに応じて交差軸の揃え方を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>items-start md:items-center</code>{' '}
              はデフォルトで上揃え、中程度の画面サイズ以上で中央揃えにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="flex items-start md:items-center h-24 ...">
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
                <code>align-items</code>{' '}
                はフレックスコンテナまたはグリッドコンテナに適用します。個々のアイテムの揃え方を変更したい場合は{' '}
                <code>align-self</code> を使用します。
              </li>
              <li>
                このプロパティは、アイテムが単一行/列にある場合に効果があります。複数行/列の場合は{' '}
                <code>align-content</code> が行/列全体の揃え方を制御します。
              </li>
              <li>
                効果を確認するには、コンテナに交差軸方向のサイズ (通常は高さ <code>h-*</code>)
                が必要になる場合があります (特に <code>items-stretch</code> 以外の場合)。
              </li>
              <li>
                <code>items-baseline</code> は、アイテム内にテキストが存在する場合に意味を持ちます。
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
                , <code>inline-grid</code>): 要素をコンテナにします。
              </li>
              <li>
                <code>align-self</code> (<code>self-*</code>):
                個々のアイテムの交差軸方向の揃え方を制御します。<code>align-items</code>{' '}
                の設定を上書きします。
              </li>
              <li>
                <code>align-content</code> (<code>content-*</code>):
                複数行/列になった場合の、交差軸方向の行/列間のスペース配分や揃え方を制御します。
              </li>
              <li>
                <code>justify-content</code> (<code>justify-*</code>):
                主軸方向のアイテムの揃え方やスペース配分を制御します。
              </li>
              <li>
                <code>place-items</code> (<code>place-items-*</code>): <code>align-items</code> と{' '}
                <code>justify-items</code> を一括で設定するショートハンドです (Grid のみ)。
              </li>
              <li>
                <code>height</code> (<code>h-*</code>): コンテナの高さを設定します。
                <code>align-items</code> の効果を確認するために必要になることがあります。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default AlignItemsPage;

import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// justify-items は Grid レイアウトに適用されます。

const JustifyItemsStartExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 justify-items-start gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded">1</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded">Item 2</div> {/* 幅が異なる */}
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded">3</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded">Item 4</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded">5</div>
      {/* 各アイテムは自身のグリッドエリアの開始位置 (左端) に寄せられる */}
    </div>
  );
};

const JustifyItemsEndExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 justify-items-end gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded">1</div>
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded">Item 2</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded">3</div>
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded">Item 4</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded">5</div>
      {/* 各アイテムは自身のグリッドエリアの終了位置 (右端) に寄せられる */}
    </div>
  );
};

const JustifyItemsCenterExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded">1</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-2 rounded">Item 2</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded">3</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-2 rounded">Item 4</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded">5</div>
      {/* 各アイテムは自身のグリッドエリアの中央に配置される */}
    </div>
  );
};

const JustifyItemsStretchExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 justify-items-stretch gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">1</div>
      <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">Item 2</div>{' '}
      {/* 幅が異なる */}
      <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">3</div>
      <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">Item 4</div>
      <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">5</div>
      {/* 各アイテムは自身のグリッドエリアの幅いっぱいに引き伸ばされる (デフォルト) */}
    </div>
  );
};

// ページコンポーネント本体
const JustifyItemsPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Flexbox & Grid: Justify Items ';
  const jaTitle = 'アイテムのインライン軸揃え - Grid';
  const links = [
    {
      title: 'Tailwind CSS: Justify Items',
      url: 'https://tailwindcss.com/docs/justify-items',
    },
    {
      title: 'MDN: justify-items',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items',
    },
  ];

  // コードスニペットを定義
  const justifyStartHtml = `<div class="grid justify-items-start ...">...</div>`;
  const justifyEndHtml = `<div class="grid justify-items-end ...">...</div>`;
  const justifyCenterHtml = `<div class="grid justify-items-center ...">...</div>`;
  const justifyStretchHtml = `<div class="grid justify-items-stretch ...">...</div>`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>
      <Helmet>
        <title>Justify Items - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Justify Items utility in Tailwind CSS. Examples and usage details for Justify Items."
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
              グリッドコンテナ内のすべてのグリッドアイテムを、それぞれのグリッドエリア内でインライン軸
              (通常は水平方向)
              に沿ってどのように配置するかを一括で制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>justify-items</code> プロパティを制御します。
              <strong>これは Grid レイアウト専用です。</strong> Flexbox には効果がありません
              (Flexbox では <code>justify-content</code> を使用します)。
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
              <code>justify-items-{'{alignment}'}</code>{' '}
              の形式でクラスをグリッドコンテナに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>justify-items-start</code>
                </strong>
                : 各アイテムをそれぞれのグリッドエリアの開始位置 (通常は左端) に配置します。
              </li>
              <li>
                <strong>
                  <code>justify-items-end</code>
                </strong>
                : 各アイテムをそれぞれのグリッドエリアの終了位置 (通常は右端) に配置します。
              </li>
              <li>
                <strong>
                  <code>justify-items-center</code>
                </strong>
                : 各アイテムをそれぞれのグリッドエリアの中央に配置します。
              </li>
              <li>
                <strong>
                  <code>justify-items-stretch</code>
                </strong>
                : デフォルト。各アイテムをそれぞれのグリッドエリアの幅いっぱいに引き伸ばします。
              </li>
            </ul>
            {/* Tailwind v3.3+ */}
            <p className="mt-4">
              書字方向に対応する <code>justify-items-normal</code> (デフォルトの揃え方、通常{' '}
              <code>stretch</code>), <code>justify-items-legacy</code> もあります (v3.3+)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            使用例 (Grid)
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            Grid コンテナに対する各 justify-items 値の適用例。
          </p>
          <div className="space-y-6">
            {/* Start */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                justify-items-start
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{justifyStartHtml}</code>
              </pre>
              <JustifyItemsStartExample />
            </div>
            {/* End */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                justify-items-end
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{justifyEndHtml}</code>
              </pre>
              <JustifyItemsEndExample />
            </div>
            {/* Center */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                justify-items-center
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{justifyCenterHtml}</code>
              </pre>
              <JustifyItemsCenterExample />
            </div>
            {/* Stretch */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                justify-items-stretch (デフォルト)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{justifyStretchHtml}</code>
              </pre>
              <JustifyItemsStretchExample />
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
            を使って、画面サイズに応じてインライン軸の揃え方を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>justify-items-start md:justify-items-center</code>{' '}
              はデフォルトで左揃え、中程度の画面サイズ以上で中央揃えにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="grid justify-items-start md:justify-items-center ...">
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
                <code>justify-items</code>{' '}
                はグリッドコンテナに適用します。個々のアイテムの揃え方を変更したい場合は{' '}
                <code>justify-self</code> を使用します。
              </li>
              <li>
                このプロパティは Grid レイアウト専用です。Flexbox レイアウトには効果がありません。
              </li>
              <li>
                <code>justify-items-stretch</code> (デフォルト)
                以外の値を使用すると、アイテムは自身のコンテンツサイズに基づいて幅が決まります
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
                <code>justify-self</code> (<code>justify-self-*</code>):
                個々のグリッドアイテムのインライン軸方向の揃え方を制御します。
                <code>justify-items</code> の設定を上書きします。
              </li>
              <li>
                <code>align-items</code> (<code>items-*</code>): グリッドアイテムのブロック軸
                (通常は垂直) 方向の揃え方を制御します。
              </li>
              <li>
                <code>place-items</code> (<code>place-items-*</code>): <code>align-items</code> と{' '}
                <code>justify-items</code> を一括で設定するショートハンドです。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default JustifyItemsPage;

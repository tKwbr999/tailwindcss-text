import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const FlexRowExample: React.FC = () => {
  return (
    <div className="flex flex-row bg-gray-100 dark:bg-gray-800 p-2 rounded space-x-2">
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded">Item 1</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded">Item 2</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-2 rounded">Item 3</div>
    </div>
  );
};

const FlexRowReverseExample: React.FC = () => {
  return (
    <div className="flex flex-row-reverse bg-gray-100 dark:bg-gray-800 p-2 rounded space-x-2 space-x-reverse">
      {' '}
      {/* space-x-reverse で逆順のマージン */}
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded">Item 1</div>
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded">Item 2</div>
      <div className="bg-green-300 dark:bg-green-700 p-2 rounded">Item 3</div>
    </div>
  );
};

const FlexColExample: React.FC = () => {
  return (
    <div className="flex flex-col bg-gray-100 dark:bg-gray-800 p-2 rounded space-y-2 w-32 mx-auto">
      {' '}
      {/* 幅を指定 */}
      <div className="bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">Item 1</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">Item 2</div>
      <div className="bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">Item 3</div>
    </div>
  );
};

const FlexColReverseExample: React.FC = () => {
  return (
    <div className="flex flex-col-reverse bg-gray-100 dark:bg-gray-800 p-2 rounded space-y-2 space-y-reverse w-32 mx-auto">
      {' '}
      {/* space-y-reverse */}
      <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">Item 1</div>
      <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">Item 2</div>
      <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">Item 3</div>
    </div>
  );
};

// ページコンポーネント本体
const FlexDirectionPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Flexbox & Grid: Flex Direction ';
const jaTitle = 'フレックス方向';
  const links = [
    {
      title: 'Tailwind CSS: Flex Direction',
      url: 'https://tailwindcss.com/docs/flex-direction',
    },
    {
      title: 'MDN: flex-direction',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction',
    },
  ];

  // コードスニペットを定義
  const flexRowHtml = `
<div class="flex flex-row ...">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
  `.trim();

  const flexRowReverseHtml = `
<div class="flex flex-row-reverse ...">
  <div>Item 1</div> {/* 右端に表示 */}
  <div>Item 2</div>
  <div>Item 3</div> {/* 左端に表示 */}
</div>
  `.trim();

  const flexColHtml = `
<div class="flex flex-col ...">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
  `.trim();

  const flexColReverseHtml = `
<div class="flex flex-col-reverse ...">
  <div>Item 1</div> {/* 下端に表示 */}
  <div>Item 2</div>
  <div>Item 3</div> {/* 上端に表示 */}
</div>
  `.trim();

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Flex Direction - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Flex Direction utility in Tailwind CSS. Examples and usage details for Flex Direction." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              フレックスコンテナ内のフレックスアイテムが配置される方向 (主軸)
              を設定するためのユーティリティクラスです。アイテムを水平方向 (行) に並べるか、垂直方向
              (列) に並べるかを制御します。
            </p>
            <p>
              CSS の <code>flex-direction</code> プロパティを制御します。
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
              <code>flex-{'{direction}'}</code> の形式でクラスをフレックスコンテナ (
              <code>display: flex</code> または <code>inline-flex</code> が適用された要素)
              に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>flex-row</code>
                </strong>
                : デフォルト。アイテムを左から右へ水平方向に配置します (書字方向が LTR
                の場合)。主軸は水平方向になります。
              </li>
              <li>
                <strong>
                  <code>flex-row-reverse</code>
                </strong>
                : アイテムを右から左へ水平方向に配置します (書字方向が LTR
                の場合)。主軸は水平方向になります。
              </li>
              <li>
                <strong>
                  <code>flex-col</code>
                </strong>
                : アイテムを上から下へ垂直方向に配置します。主軸は垂直方向になります。
              </li>
              <li>
                <strong>
                  <code>flex-col-reverse</code>
                </strong>
                : アイテムを下から上へ垂直方向に配置します。主軸は垂直方向になります。
              </li>
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">各 flex-direction 値の適用例。</p>
          <div className="space-y-6">
            {/* Row */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                flex-row (デフォルト)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{flexRowHtml}</code>
              </pre>
              <FlexRowExample />
            </div>
            {/* Row Reverse */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                flex-row-reverse
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{flexRowReverseHtml}</code>
              </pre>
              <FlexRowReverseExample />
            </div>
            {/* Column */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">flex-col</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{flexColHtml}</code>
              </pre>
              <FlexColExample />
            </div>
            {/* Column Reverse */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                flex-col-reverse
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{flexColReverseHtml}</code>
              </pre>
              <FlexColReverseExample />
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
            を使って、特定の画面サイズでのみ <code>flex-direction</code>{' '}
            を変更できます。これはレスポンシブレイアウトで非常に一般的です。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>flex-col md:flex-row</code>{' '}
              はデフォルトでアイテムを縦に積み重ね、中程度の画面サイズ以上で横に並べます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="flex flex-col md:flex-row ...">
  <div>Item 1</div>
  <div>Item 2</div>
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
                <code>flex-direction</code>{' '}
                はフレックスコンテナに適用します。フレックスアイテム自体には適用しません。
              </li>
              <li>
                主軸の方向が変わると、<code>justify-content</code> (主軸方向の揃え) と{' '}
                <code>align-items</code> (交差軸方向の揃え)
                の効果の方向も変わることに注意してください。
              </li>
              <li>
                <code>flex-row-reverse</code> や <code>flex-col-reverse</code> を使用すると、DOM
                の順序と視覚的な順序が異なるため、キーボードナビゲーションやスクリーンリーダーの読み上げ順序に影響を与える可能性があります。アクセシビリティに配慮して使用してください。
              </li>
              <li>
                アイテム間のスペースは <code>gap-*</code> ユーティリティや、アイテム自身へのマージン
                (例: <code>space-x-*</code>, <code>space-y-*</code> ヘルパー) で制御します。
                <code>flex-row-reverse</code> や <code>flex-col-reverse</code> を使用する場合、
                <code>space-x-reverse</code> や <code>space-y-reverse</code>{' '}
                を使うとマージンの方向も反転できます。
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
                <code>display</code> (<code>flex</code>, <code>inline-flex</code>):
                要素をフレックスコンテナにします。
              </li>
              <li>
                <code>flex-wrap</code> (<code>flex-wrap</code>, <code>flex-nowrap</code> など):
                アイテムの折り返しを制御します。
              </li>
              <li>
                <code>justify-content</code> (<code>justify-start</code>,{' '}
                <code>justify-center</code> など): 主軸方向のアイテムの揃え方を制御します。
              </li>
              <li>
                <code>align-items</code> (<code>items-start</code>, <code>items-center</code> など):
                交差軸方向のアイテムの揃え方を制御します。
              </li>
              <li>
                <code>gap</code> (<code>gap-4</code>, <code>gap-x-2</code> など):
                フレックスアイテム間の溝 (gap) を設定します。
              </li>
              <li>
                <code>space</code> (<code>space-x-4</code>, <code>space-y-2</code> など):
                アイテム間にマージンを追加します (gap が使えない場合の代替)。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default FlexDirectionPage;

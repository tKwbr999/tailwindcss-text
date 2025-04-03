import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const GrowExample: React.FC = () => {
  return (
    <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded">
      <div className="grow h-14 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">grow (1)</div>{' '}
      {/* flex-grow: 1 */}
      <div className="grow h-14 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">grow (1)</div>
      <div className="grow h-14 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">grow (1)</div>
      {/* 3つのアイテムが利用可能なスペースを均等に分け合う */}
    </div>
  );
};

const Grow0Example: React.FC = () => {
  return (
    <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded">
      <div className="grow h-14 bg-green-300 dark:bg-green-700 p-2 rounded text-center">
        grow (1)
      </div>
      <div className="grow-0 h-14 bg-green-300 dark:bg-green-700 p-2 rounded text-center w-24">
        grow-0 (w-24)
      </div>{' '}
      {/* flex-grow: 0 */}
      <div className="grow h-14 bg-green-300 dark:bg-green-700 p-2 rounded text-center">
        grow (1)
      </div>
      {/* grow-0 のアイテムは拡大せず、残りのスペースを grow のアイテムが分け合う */}
    </div>
  );
};

const GrowSpecificExample: React.FC = () => {
  // 注意: Tailwind CSS v3.0 以降では、デフォルトで grow-* (grow-2 など) は含まれていません。
  //       カスタム値として設定するか、任意の値を使用する必要があります。
  //       ここでは任意の値の例を示します。
  return (
    <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded">
      <div className="grow-[2] h-14 bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">
        grow-[2]
      </div>{' '}
      {/* flex-grow: 2 */}
      <div className="grow h-14 bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">
        grow (1)
      </div>{' '}
      {/* flex-grow: 1 */}
      <div className="grow h-14 bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">
        grow (1)
      </div>{' '}
      {/* flex-grow: 1 */}
      {/* 最初のアイテムが他のアイテムの2倍の割合で余剰スペースを獲得する */}
    </div>
  );
};

// ページコンポーネント本体
const FlexGrowPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Flexbox & Grid: Flex Grow (フレックス拡大係数)';
  const links = [
    {
      title: 'Tailwind CSS: Flex Grow',
      url: 'https://tailwindcss.com/docs/flex-grow',
    },
    {
      title: 'MDN: flex-grow',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow',
    },
  ];

  // コードスニペットを定義
  const growHtml = `
<div class="flex ...">
  <div class="grow ...">Item 1</div> {/* flex-grow: 1 */}
  <div class="grow ...">Item 2</div> {/* flex-grow: 1 */}
</div>
  `.trim();

  const grow0Html = `
<div class="flex ...">
  <div class="grow ...">Item 1</div>   {/* flex-grow: 1 */}
  <div class="grow-0 ...">Item 2</div> {/* flex-grow: 0 */}
  <div class="grow ...">Item 3</div>   {/* flex-grow: 1 */}
</div>
  `.trim();

  const growSpecificHtml = `
<div class="flex ...">
  <div class="grow-[2] ...">Item 1</div> {/* flex-grow: 2 */}
  <div class="grow ...">Item 2</div>    {/* flex-grow: 1 */}
</div>
  `.trim(); // 任意の値を使用

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Flex Grow - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Flex Grow utility in Tailwind CSS. Examples and usage details for Flex Grow." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              フレックスアイテムがフレックスコンテナ内の利用可能な余剰スペースをどれだけの割合で占めるかを制御するためのユーティリティクラスです。
              アイテムがコンテナ内でどのように拡大するかを定義します。
            </p>
            <p>
              CSS の <code>flex-grow</code> プロパティを制御します。
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
              <code>grow</code> または <code>grow-0</code> クラスをフレックスアイテムに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>grow</code>
                </strong>{' '}
                (<code>flex-grow: 1;</code>):
                アイテムが利用可能な余剰スペースを占めることを許可します。同じコンテナ内の他の{' '}
                <code>grow</code> を持つアイテムとスペースを分け合います。
              </li>
              <li>
                <strong>
                  <code>grow-0</code>
                </strong>{' '}
                (<code>flex-grow: 0;</code>):
                デフォルト。アイテムが利用可能な余剰スペースを占めることを許可しません。アイテムは自身の{' '}
                <code>flex-basis</code> (または幅/高さ) に基づくサイズを維持しようとします。
              </li>
            </ul>
            <p className="mt-4">
              Tailwind CSS v3.0 以降では、<code>grow-2</code>, <code>grow-3</code>{' '}
              のようなクラスはデフォルトでは含まれていません。特定の拡大比率を指定したい場合は、任意の値
              (例: <code>grow-[2]</code>, <code>grow-[3]</code>) を使用するか、
              <code>tailwind.config.js</code> でカスタム値として定義する必要があります。
            </p>
            <p>
              <code>flex-grow</code> の値は相対的な比率です。例えば、あるアイテムが{' '}
              <code>grow-[2]</code> で他のアイテムが <code>grow</code> (つまり{' '}
              <code>flex-grow: 1;</code>)
              の場合、最初のアイテムは他のアイテムの2倍の割合で余剰スペースを獲得します。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">異なる flex-grow 値の適用例。</p>
          <div className="space-y-6">
            {/* grow */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                grow (flex-grow: 1)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{growHtml}</code>
              </pre>
              <GrowExample />
            </div>
            {/* grow-0 */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                grow-0 (flex-grow: 0)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{grow0Html}</code>
              </pre>
              <Grow0Example />
            </div>
            {/* Specific Grow Value */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                特定の拡大比率 (任意の値)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{growSpecificHtml}</code>
              </pre>
              <GrowSpecificExample />
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
            を使って、特定の画面サイズでのみ <code>flex-grow</code> プロパティを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>grow-0 md:grow</code>{' '}
              はデフォルトで拡大せず、中程度の画面サイズ以上で拡大するようにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="flex ...">
  <div class="grow-0 md:grow ...">Item 1</div>
  <div class="grow ...">Item 2</div>
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
                <code>flex-grow</code> はフレックスアイテムに適用します。
              </li>
              <li>
                <code>flex-grow</code>{' '}
                の値は、コンテナ内に余剰スペースがある場合にのみ効果があります。アイテムの合計{' '}
                <code>flex-basis</code> (または幅/高さ) がコンテナサイズを超えている場合、
                <code>flex-grow</code> は影響せず、代わりに <code>flex-shrink</code>{' '}
                が考慮されます。
              </li>
              <li>
                <code>flex</code> ユーティリティ (<code>flex-1</code>, <code>flex-auto</code> など)
                は <code>flex-grow</code> を含んでいるため、これらと <code>grow</code>/
                <code>grow-0</code> を同時に指定すると予期しない結果になる可能性があります。通常は{' '}
                <code>flex-*</code> ショートハンドを使うか、<code>grow</code>/<code>shrink</code>/
                <code>basis</code> を個別に指定するかのどちらかを選択します。
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
                <code>flex-shrink</code> (<code>shrink</code>, <code>shrink-0</code>):
                アイテムの縮小係数を設定します。
              </li>
              <li>
                <code>flex-basis</code> (<code>basis-*</code>): アイテムの基準サイズを設定します。
              </li>
              <li>
                <code>flex</code> (<code>flex-1</code>, <code>flex-auto</code>,{' '}
                <code>flex-initial</code>, <code>flex-none</code>): <code>flex-grow</code>,{' '}
                <code>flex-shrink</code>, <code>flex-basis</code> のショートハンド。
              </li>
              <li>
                <code>display</code> (<code>flex</code>, <code>inline-flex</code>):
                要素をフレックスコンテナにします。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default FlexGrowPage;

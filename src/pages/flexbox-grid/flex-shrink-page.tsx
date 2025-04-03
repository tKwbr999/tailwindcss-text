import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const ShrinkExample: React.FC = () => {
  return (
    <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded w-64">
      {' '}
      {/* 幅を制限して縮小を発生させる */}
      <div className="shrink w-32 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">
        shrink (1) w-32
      </div>{' '}
      {/* flex-shrink: 1 */}
      <div className="shrink w-32 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">
        shrink (1) w-32
      </div>
      <div className="shrink w-32 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">
        shrink (1) w-32
      </div>
      {/* アイテムの合計幅 (32*3=96) がコンテナ幅 (64) を超えるため、shrink=1 に従って縮小される */}
    </div>
  );
};

const Shrink0Example: React.FC = () => {
  return (
    <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded w-64 overflow-x-auto">
      {' '}
      {/* overflow で はみ出しを確認 */}
      <div className="shrink w-32 bg-green-300 dark:bg-green-700 p-2 rounded text-center">
        shrink (1) w-32
      </div>
      <div className="shrink-0 w-32 bg-green-300 dark:bg-green-700 p-2 rounded text-center">
        shrink-0 w-32
      </div>{' '}
      {/* flex-shrink: 0 */}
      <div className="shrink w-32 bg-green-300 dark:bg-green-700 p-2 rounded text-center">
        shrink (1) w-32
      </div>
      {/* shrink-0 のアイテムは縮小せず、他の shrink アイテムがより多く縮小するか、コンテナからはみ出す */}
    </div>
  );
};

const ShrinkSpecificExample: React.FC = () => {
  // 注意: Tailwind CSS v3.0 以降では、デフォルトで shrink-* (shrink-2 など) は含まれていません。
  //       カスタム値として設定するか、任意の値を使用する必要があります。
  //       ここでは任意の値の例を示します。
  return (
    <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded w-64">
      {' '}
      {/* 幅を制限 */}
      <div className="shrink-[2] w-48 bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">
        shrink-[2] w-48
      </div>{' '}
      {/* flex-shrink: 2 */}
      <div className="shrink w-48 bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">
        shrink (1) w-48
      </div>{' '}
      {/* flex-shrink: 1 */}
      {/* 最初のアイテムが他のアイテムの2倍の割合で縮小する */}
    </div>
  );
};

// ページコンポーネント本体
const FlexShrinkPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Flexbox & Grid: Flex Shrink (フレックス縮小係数)';
  const links = [
    {
      title: 'Tailwind CSS: Flex Shrink',
      url: 'https://tailwindcss.com/docs/flex-shrink',
    },
    {
      title: 'MDN: flex-shrink',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink',
    },
  ];

  // コードスニペットを定義
  const shrinkHtml = `
<div class="flex w-64 ..."> {/* 幅を制限 */}
  <div class="shrink w-32 ...">Item 1</div> {/* flex-shrink: 1 */}
  <div class="shrink w-32 ...">Item 2</div> {/* flex-shrink: 1 */}
  <div class="shrink w-32 ...">Item 3</div> {/* flex-shrink: 1 */}
</div>
  `.trim();

  const shrink0Html = `
<div class="flex w-64 ..."> {/* 幅を制限 */}
  <div class="shrink w-32 ...">Item 1</div>    {/* flex-shrink: 1 */}
  <div class="shrink-0 w-32 ...">Item 2</div> {/* flex-shrink: 0 */}
  <div class="shrink w-32 ...">Item 3</div>    {/* flex-shrink: 1 */}
</div>
  `.trim();

  const shrinkSpecificHtml = `
<div class="flex w-64 ..."> {/* 幅を制限 */}
  <div class="shrink-[2] w-48 ...">Item 1</div> {/* flex-shrink: 2 */}
  <div class="shrink w-48 ...">Item 2</div>    {/* flex-shrink: 1 */}
</div>
  `.trim(); // 任意の値を使用

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Flex Shrink - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Flex Shrink utility in Tailwind CSS. Examples and usage details for Flex Shrink." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              フレックスアイテムがフレックスコンテナ内のスペース不足時に、どれだけの割合で縮小するかを制御するためのユーティリティクラスです。
              アイテムがコンテナからはみ出す場合に、どのようにサイズを調整するかを定義します。
            </p>
            <p>
              CSS の <code>flex-shrink</code> プロパティを制御します。
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
              <code>shrink</code> または <code>shrink-0</code>{' '}
              クラスをフレックスアイテムに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>shrink</code>
                </strong>{' '}
                (<code>flex-shrink: 1;</code>):
                デフォルト。アイテムがスペース不足時に縮小することを許可します。同じコンテナ内の他の{' '}
                <code>shrink</code> を持つアイテムと、その <code>flex-basis</code>{' '}
                に応じた割合で縮小量を分け合います。
              </li>
              <li>
                <strong>
                  <code>shrink-0</code>
                </strong>{' '}
                (<code>flex-shrink: 0;</code>):
                アイテムがスペース不足時にも縮小しないようにします。アイテムは自身の{' '}
                <code>flex-basis</code> (または幅/高さ) に基づくサイズを維持しようとします。
              </li>
            </ul>
            <p className="mt-4">
              Tailwind CSS v3.0 以降では、<code>shrink-2</code>, <code>shrink-3</code>{' '}
              のようなクラスはデフォルトでは含まれていません。特定の縮小比率を指定したい場合は、任意の値
              (例: <code>shrink-[2]</code>, <code>shrink-[3]</code>) を使用するか、
              <code>tailwind.config.js</code> でカスタム値として定義する必要があります。
            </p>
            <p>
              <code>flex-shrink</code> の値は相対的な比率です。例えば、あるアイテムが{' '}
              <code>shrink-[2]</code> で他のアイテムが <code>shrink</code> (つまり{' '}
              <code>flex-shrink: 1;</code>)
              の場合、スペースが不足した際に最初のアイテムは他のアイテムの2倍の割合で縮小します
              (ただし、<code>flex-basis</code> も考慮されます)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる flex-shrink 値の適用例。コンテナ幅は w-64。
          </p>
          <div className="space-y-6">
            {/* shrink */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                shrink (flex-shrink: 1 - デフォルト)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{shrinkHtml}</code>
              </pre>
              <ShrinkExample />
            </div>
            {/* shrink-0 */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                shrink-0 (flex-shrink: 0)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{shrink0Html}</code>
              </pre>
              <Shrink0Example />
            </div>
            {/* Specific Shrink Value */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                特定の縮小比率 (任意の値)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{shrinkSpecificHtml}</code>
              </pre>
              <ShrinkSpecificExample />
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
            を使って、特定の画面サイズでのみ <code>flex-shrink</code> プロパティを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>shrink md:shrink-0</code>{' '}
              はデフォルトで縮小を許可し、中程度の画面サイズ以上で縮小しないようにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="flex ...">
  <div class="shrink md:shrink-0 ...">Item 1</div>
  <div class="shrink ...">Item 2</div>
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
                <code>flex-shrink</code> はフレックスアイテムに適用します。
              </li>
              <li>
                <code>flex-shrink</code>{' '}
                の値は、コンテナ内にスペースが不足している場合にのみ効果があります。アイテムの合計{' '}
                <code>flex-basis</code> (または幅/高さ) がコンテナサイズ以下の場合、
                <code>flex-shrink</code> は影響しません。
              </li>
              <li>
                実際の縮小量は、<code>flex-shrink</code> の値だけでなく、アイテムの{' '}
                <code>flex-basis</code> (または幅/高さ) にも依存します。基本的には、(shrink係数 ×
                basisサイズ) に比例して縮小量が配分されます。
              </li>
              <li>
                <code>flex</code> ユーティリティ (<code>flex-1</code>, <code>flex-auto</code>,{' '}
                <code>flex-initial</code>, <code>flex-none</code>) は <code>flex-shrink</code>{' '}
                を含んでいるため、これらと <code>shrink</code>/<code>shrink-0</code>{' '}
                を同時に指定すると予期しない結果になる可能性があります。通常はどちらか一方を使用します。
              </li>
              <li>
                <code>shrink-0</code>{' '}
                を指定したアイテムは縮小しないため、他のアイテムがより多く縮小するか、コンテナからはみ出す原因となることがあります。
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
                <code>flex-grow</code> (<code>grow</code>, <code>grow-0</code>):
                アイテムの拡大係数を設定します。
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
              <li>
                <code>min-width</code> (<code>min-w-*</code>):
                アイテムが特定の幅以下に縮小しないように制限するために使用されることがあります。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default FlexShrinkPage;

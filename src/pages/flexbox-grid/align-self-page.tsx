import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// align-self は個々の Flex または Grid アイテムに適用されます。

const AlignSelfExample: React.FC = () => {
  return (
    <div className="flex items-stretch bg-gray-100 dark:bg-gray-800 p-2 rounded h-32 space-x-2">
      {' '}
      {/* items-stretch が親のデフォルト */}
      <div className="self-start bg-blue-300 dark:bg-blue-700 p-2 rounded">Start</div>
      <div className="self-end bg-green-300 dark:bg-green-700 p-2 rounded">End</div>
      <div className="self-center bg-yellow-300 dark:bg-yellow-700 p-2 rounded">Center</div>
      <div className="self-baseline bg-red-300 dark:bg-red-700 pt-6 pb-2 rounded text-sm">
        Baseline
      </div>
      <div className="self-stretch bg-purple-300 dark:bg-purple-700 p-2 rounded text-center">
        Stretch (Default)
      </div>
      <div className="self-auto bg-pink-300 dark:bg-pink-700 p-2 rounded">
        Auto (Inherits Stretch)
      </div>
      {/* 各アイテムは自身の self-* 設定に従って配置される (親の items-stretch を上書き) */}
    </div>
  );
};

// ページコンポーネント本体
const AlignSelfPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Flexbox & Grid: Align Self ';
const jaTitle = '個別アイテムの交差軸揃え';
  const links = [
    {
      title: 'Tailwind CSS: Align Self',
      url: 'https://tailwindcss.com/docs/align-self',
    },
    {
      title: 'MDN: align-self',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/align-self',
    },
  ];

  // // コードスニペットを定義
  // const selfStartHtml = `<div class="self-start ...">Item</div>`;
  // const selfEndHtml = `<div class="self-end ...">Item</div>`;
  // const selfCenterHtml = `<div class="self-center ...">Item</div>`;
  // const selfBaselineHtml = `<div class="self-baseline ...">Item</div>`;
  // const selfStretchHtml = `<div class="self-stretch ...">Item</div>`;
  // const selfAutoHtml = `<div class="self-auto ...">Item</div>`; // Inherits parent's align-items

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Align Self - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Align Self utility in Tailwind CSS. Examples and usage details for Align Self." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              個々のフレックスアイテムまたはグリッドアイテムが、コンテナの <code>align-items</code>{' '}
              設定を上書きして、自身を交差軸 (cross axis) 方向 (通常は垂直方向)
              にどのように配置するかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>align-self</code> プロパティを制御します。
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
              <code>self-{'{alignment}'}</code>{' '}
              の形式でクラスをフレックスアイテムまたはグリッドアイテムに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>self-auto</code>
                </strong>
                : デフォルト。親コンテナの <code>align-items</code> プロパティの値に従います。
              </li>
              <li>
                <strong>
                  <code>self-start</code>
                </strong>
                : アイテムを交差軸の開始位置 (通常は上端) に配置します。
              </li>
              <li>
                <strong>
                  <code>self-end</code>
                </strong>
                : アイテムを交差軸の終了位置 (通常は下端) に配置します。
              </li>
              <li>
                <strong>
                  <code>self-center</code>
                </strong>
                : アイテムを交差軸の中央に配置します。
              </li>
              <li>
                <strong>
                  <code>self-stretch</code>
                </strong>
                : アイテムをコンテナの交差軸方向のサイズいっぱいに引き伸ばします
                (アイテムにサイズ指定がない場合)。
              </li>
              <li>
                <strong>
                  <code>self-baseline</code>
                </strong>
                : アイテムのテキストのベースラインを、同じベースラインを持つ他のアイテムと揃えます。
              </li>
            </ul>
            {/* Tailwind v3.3+ */}
            <p className="mt-4">
              書字方向に対応する <code>self-normal</code> (デフォルトの揃え方、通常{' '}
              <code>stretch</code>) もあります (v3.3+)。
            </p>
          </div>
        </section>
        {/* 使用例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            使用例 (Flexbox)
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            Flexbox アイテムに対する各 align-self 値の適用例。親コンテナは{' '}
            <code>items-stretch</code> (デフォルト)。
          </p>
          <div className="space-y-6">
            <div>
              {/* コード表示は各アイテムに適用するため冗長になるので省略 */}
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{`
<div class="flex items-stretch h-32 ...">
  <div class="self-start ...">Start</div>
  <div class="self-end ...">End</div>
  <div class="self-center ...">Center</div>
  <div class="self-baseline ...">Baseline</div>
  <div class="self-stretch ...">Stretch</div>
  <div class="self-auto ...">Auto</div>
</div>
                `}</code>
              </pre>
              <AlignSelfExample />
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
            を使って、画面サイズに応じて個々のアイテムの交差軸揃えを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>self-center md:self-start</code>{' '}
              はデフォルトで中央揃え、中程度の画面サイズ以上で上揃えにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="flex items-center ..."> {/* 親は中央揃え */}
  <div class="...">Item 1 (Center)</div>
  <div class="self-center md:self-start ...">Item 2 (Center -> Start)</div>
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
                <code>align-self</code> はフレックスアイテムまたはグリッドアイテムに適用します。
              </li>
              <li>
                このプロパティは、親コンテナの <code>align-items</code> 設定を上書きします。
              </li>
              <li>
                <code>self-stretch</code>{' '}
                以外の値を使用すると、アイテムは自身のコンテンツサイズに基づいて高さ (または幅、
                <code>flex-direction: column</code> の場合) が決まります (交差軸方向)。
              </li>
              <li>
                <code>self-baseline</code> は、アイテム内にテキストが存在し、かつ親コンテナが{' '}
                <code>align-items: baseline</code> でない場合に特に意味を持ちます。
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
                <code>align-items</code> (<code>items-*</code>):
                コンテナ内のすべてのアイテムのデフォルトの交差軸揃えを設定します。
              </li>
              <li>
                <code>justify-self</code> (<code>justify-self-*</code>):
                個々のグリッドアイテムのインライン軸 (通常は水平) 方向の揃え方を制御します (Grid
                のみ)。
              </li>
              <li>
                <code>place-self</code> (<code>place-self-*</code>): <code>align-self</code> と{' '}
                <code>justify-self</code> を一括で設定するショートハンドです (Grid のみ)。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default AlignSelfPage;

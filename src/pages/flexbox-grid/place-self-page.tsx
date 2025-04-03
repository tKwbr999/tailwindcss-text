import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// place-self は align-self と justify-self のショートハンドです。Grid アイテムに適用されます。

const PlaceSelfExample: React.FC = () => {
  // ★修正: JustifySelfExample -> PlaceSelfExample
  return (
    <div className="grid grid-cols-3 gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded h-48">
      {' '}
      {/* h-48 */}
      <div className="place-self-start bg-blue-300 dark:bg-blue-700 p-2 rounded">Start</div>
      <div className="place-self-center bg-green-300 dark:bg-green-700 p-2 rounded">Center</div>
      <div className="place-self-end bg-yellow-300 dark:bg-yellow-700 p-2 rounded">End</div>
      <div className="place-self-stretch bg-red-300 dark:bg-red-700 p-2 rounded text-center">
        Stretch (Default)
      </div>
      <div className="place-self-auto bg-purple-300 dark:bg-purple-700 p-2 rounded">
        Auto (Inherits Stretch)
      </div>
      <div className="place-self-center bg-pink-300 dark:bg-pink-700 p-2 rounded">Center Again</div>
      {/* 各アイテムは自身の place-self 設定に従ってグリッドエリア内で配置される */}
    </div>
  );
};

// ページコンポーネント本体
const PlaceSelfPage: React.FC = () => {
  // ★修正: JustifySelfPage -> PlaceSelfPage
  // ArticleLayout に渡すデータ
  const title = 'Flexbox & Grid: Place Self (個別アイテムの揃え - Grid)';
  const links = [
    {
      title: 'Tailwind CSS: Place Self',
      url: 'https://tailwindcss.com/docs/place-self',
    },
    {
      title: 'MDN: place-self',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/place-self',
    },
  ];

  // // コードスニペットを定義
  // const justifySelfStartHtml = `<div class="justify-self-start ...">Item</div>`;
  // const justifySelfEndHtml = `<div class="justify-self-end ...">Item</div>`;
  // const justifySelfCenterHtml = `<div class="justify-self-center ...">Item</div>`;
  // const justifySelfStretchHtml = `<div class="justify-self-stretch ...">Item</div>`; // Default
  // const justifySelfAutoHtml = `<div class="justify-self-auto ...">Item</div>`; // Usually same as stretch

  return (
    <ArticleLayout title={title} links={links}>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              個々のグリッドアイテムが、自身が配置されているグリッドエリア内でインライン軸
              (通常は水平方向)
              に沿ってどのように配置されるかを制御するためのユーティリティクラスです。
              グリッドコンテナの <code>justify-items</code> 設定を個別に上書きします。
            </p>
            <p>
              CSS の <code>justify-self</code> プロパティを制御します。
              <strong>これは Grid レイアウト専用です。</strong> Flexbox
              アイテムには効果がありません。
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
              <code>justify-self-{'{alignment}'}</code>{' '}
              の形式でクラスをグリッドアイテムに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>justify-self-auto</code>
                </strong>
                : 親グリッドコンテナの <code>justify-items</code> プロパティの値に従います
                (デフォルトは <code>stretch</code>)。
              </li>
              <li>
                <strong>
                  <code>justify-self-start</code>
                </strong>
                : アイテムをグリッドエリアの開始位置 (通常は左端) に配置します。
              </li>
              <li>
                <strong>
                  <code>justify-self-end</code>
                </strong>
                : アイテムをグリッドエリアの終了位置 (通常は右端) に配置します。
              </li>
              <li>
                <strong>
                  <code>justify-self-center</code>
                </strong>
                : アイテムをグリッドエリアの中央に配置します。
              </li>
              <li>
                <strong>
                  <code>justify-self-stretch</code>
                </strong>
                : デフォルト (<code>auto</code>{' '}
                経由)。アイテムをグリッドエリアの幅いっぱいに引き伸ばします。
              </li>
            </ul>
            {/* Tailwind v3.3+ */}
            <p className="mt-4">
              書字方向に対応する <code>justify-self-normal</code> (デフォルトの揃え方、通常{' '}
              <code>stretch</code>), <code>justify-self-legacy</code> もあります (v3.3+)。
            </p>
          </div>
        </section>
        {/* 使用例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            使用例 (Grid)
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            Grid アイテムに対する各 justify-self 値の適用例。親コンテナはデフォルト
            (place-items-stretch)。
          </p>
          <div className="space-y-6">
            <div>
              {/* コード表示は各アイテムに適用するため冗長になるので省略 */}
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{`
<div class="grid grid-cols-3 gap-4 h-48 ...">
  <div class="justify-self-start ...">Start</div>
  <div class="justify-self-center ...">Center</div>
  <div class="justify-self-end ...">End</div>
  <div class="justify-self-stretch ...">Stretch</div>
  <div class="justify-self-auto ...">Auto</div>
  {/* ... */}
</div>
                `}</code>
              </pre>
              <PlaceSelfExample /> {/* ★修正: JustifySelfExample -> PlaceSelfExample */}
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
            を使って、画面サイズに応じて個々のアイテムのインライン軸揃えを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>justify-self-center md:justify-self-start</code>{' '}
              はデフォルトで中央揃え、中程度の画面サイズ以上で左揃えにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="grid grid-cols-2 gap-4 ...">
  <div class="...">Item 1 (Inherits)</div>
  <div class="justify-self-center md:justify-self-start ...">Item 2</div>
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
                <code>justify-self</code>{' '}
                はグリッドアイテムに適用します。グリッドコンテナではありません。
              </li>
              <li>
                このプロパティは Grid レイアウト専用です。Flexbox レイアウトには効果がありません。
              </li>
              <li>
                <code>justify-self</code> は、親コンテナの <code>justify-items</code>{' '}
                設定を上書きします。
              </li>
              <li>
                <code>justify-self-stretch</code> (または <code>auto</code>)
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
                <code>justify-items</code> (<code>justify-items-*</code>):
                グリッドコンテナ内のすべてのアイテムのデフォルトのインライン軸揃えを設定します。
              </li>
              <li>
                <code>align-self</code> (<code>self-*</code>): 個々のグリッドアイテムのブロック軸
                (通常は垂直) 方向の揃え方を制御します。
              </li>
              <li>
                <code>place-self</code> (<code>place-self-*</code>): <code>align-self</code> と{' '}
                <code>justify-self</code> を一括で設定するショートハンドです。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default PlaceSelfPage; // ★修正: JustifySelfPage -> PlaceSelfPage

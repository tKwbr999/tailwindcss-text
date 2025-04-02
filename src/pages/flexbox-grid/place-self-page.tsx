import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// place-self は align-self と justify-self のショートハンドです。Grid アイテムに適用されます。

const PlaceSelfExample: React.FC = () => {
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
  // // コードスニペットを定義
  // const placeSelfStartHtml = `<div class="place-self-start ...">Item</div>`;
  // const placeSelfEndHtml = `<div class="place-self-end ...">Item</div>`;
  // const placeSelfCenterHtml = `<div class="place-self-center ...">Item</div>`;
  // const placeSelfStretchHtml = `<div class="place-self-stretch ...">Item</div>`; // Default
  // const placeSelfAutoHtml = `<div class="place-self-auto ...">Item</div>`; // Inherits parent's place-items

  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Flexbox & Grid: Place Self (個別アイテムの揃え - Grid)
        </h1>
        {/* 概要 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              概要
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              個々のグリッドアイテムが、自身が配置されているグリッドエリア内で両方の軸
              (インライン軸とブロック軸)
              に沿ってどのように配置されるかを一括で制御するためのユーティリティクラス
              (ショートハンド) です。 グリッドコンテナの <code>place-items</code> (または{' '}
              <code>align-items</code> と <code>justify-items</code>) 設定を個別に上書きします。
            </p>
            <p>
              CSS の <code>place-self</code> プロパティ (<code>align-self</code> と{' '}
              <code>justify-self</code> のショートハンド) を制御します。
              <strong>これは Grid レイアウト専用です。</strong> Flexbox
              アイテムには効果がありません。
            </p>
          </CardContent>
        </Card>
        {/* 基本的な使い方とパラメータ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              基本的な使い方とパラメータ
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              <code>place-self-{'{alignment}'}</code> の形式でクラスをグリッドアイテムに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>place-self-auto</code>
                </strong>
                : デフォルト。親グリッドコンテナの <code>place-items</code> プロパティの値に従います
                (デフォルトは <code>stretch</code>)。
              </li>
              <li>
                <strong>
                  <code>place-self-start</code>
                </strong>
                : アイテムをグリッドエリアの開始位置 (左上) に配置します (
                <code>align-self: start; justify-self: start;</code>)。
              </li>
              <li>
                <strong>
                  <code>place-self-end</code>
                </strong>
                : アイテムをグリッドエリアの終了位置 (右下) に配置します (
                <code>align-self: end; justify-self: end;</code>)。
              </li>
              <li>
                <strong>
                  <code>place-self-center</code>
                </strong>
                : アイテムをグリッドエリアの中央に配置します (
                <code>align-self: center; justify-self: center;</code>)。
              </li>
              <li>
                <strong>
                  <code>place-self-stretch</code>
                </strong>
                : アイテムをグリッドエリア全体に引き伸ばします (
                <code>align-self: stretch; justify-self: stretch;</code>)。
              </li>
            </ul>
            <p className="mt-4">
              <code>place-self</code> は <code>align-self</code> と <code>justify-self</code>{' '}
              に同じ値を設定するショートハンドです。軸ごとに異なる値を設定したい場合は、
              <code>self-*</code> と <code>justify-self-*</code> を個別に使用します。例えば、
              <code>self-center justify-self-start</code> のように組み合わせます。
            </p>
            {/* Tailwind v3.3+ */}
            <p>
              書字方向に対応する <code>place-self-normal</code> (デフォルトの揃え方、通常{' '}
              <code>stretch</code>) もあります (v3.3+)。
            </p>
          </CardContent>
        </Card>
        {/* 使用例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例 (Grid)
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              Grid アイテムに対する各 place-self 値の適用例。親コンテナはデフォルト
              (place-items-stretch)。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              {/* コード表示は各アイテムに適用するため冗長になるので省略 */}
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{`
<div class="grid grid-cols-3 gap-4 h-48 ...">
  <div class="place-self-start ...">Start</div>
  <div class="place-self-center ...">Center</div>
  <div class="place-self-end ...">End</div>
  <div class="place-self-stretch ...">Stretch</div>
  <div class="place-self-auto ...">Auto</div>
  {/* ... */}
</div>
                `}</code>
              </pre>
              <PlaceSelfExample />
            </div>
          </CardContent>
        </Card>
        {/* レスポンシブ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など)
              を使って、画面サイズに応じて個々のアイテムの揃え方を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>place-self-center md:place-self-start</code>{' '}
              はデフォルトで中央揃え、中程度の画面サイズ以上で左上揃えにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="grid grid-cols-2 gap-4 ...">
  <div class="...">Item 1 (Inherits)</div>
  <div class="place-self-center md:place-self-start ...">Item 2</div>
</div>
              `.trim()}
              </code>
            </pre>
          </CardContent>
        </Card>
        {/* 注意点 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              注意点
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <code>place-self</code> はグリッドアイテムに適用します。
              </li>
              <li>
                このプロパティは Grid レイアウト専用です。Flexbox レイアウトには効果がありません。
              </li>
              <li>
                <code>place-self</code> は、親コンテナの <code>place-items</code> (または{' '}
                <code>align-items</code> と <code>justify-items</code>) 設定を上書きします。
              </li>
              <li>
                <code>place-self-stretch</code> (または <code>auto</code>)
                以外の値を使用すると、アイテムは自身のコンテンツサイズに基づいてサイズが決まります
                (グリッドエリア内で)。
              </li>
            </ul>
          </CardContent>
        </Card>
        {/* 関連ユーティリティ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              関連ユーティリティ
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <code>display</code> (<code>grid</code>, <code>inline-grid</code>):
                要素をグリッドコンテナにします。
              </li>
              <li>
                <code>place-items</code> (<code>place-items-*</code>):
                グリッドコンテナ内のすべてのアイテムのデフォルトの揃え方を両軸で設定します。
              </li>
              <li>
                <code>align-self</code> (<code>self-*</code>):
                個々のアイテムの交差軸方向の揃え方を個別に設定します。
              </li>
              <li>
                <code>justify-self</code> (<code>justify-self-*</code>):
                個々のアイテムのインライン軸方向の揃え方を個別に設定します。
              </li>
            </ul>
          </CardContent>
        </Card>
        {/* 公式ドキュメント参照 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              公式ドキュメント参照
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <a
                  href="https://tailwindcss.com/docs/place-self"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Place Self
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/place-self"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: place-self
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlaceSelfPage;

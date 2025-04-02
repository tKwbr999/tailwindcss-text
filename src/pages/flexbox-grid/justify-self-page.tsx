import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// justify-self は Grid アイテムに適用されます。

const JustifySelfExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="justify-self-start bg-blue-300 dark:bg-blue-700 p-2 rounded">Start</div>
      <div className="justify-self-center bg-green-300 dark:bg-green-700 p-2 rounded">Center</div>
      <div className="justify-self-end bg-yellow-300 dark:bg-yellow-700 p-2 rounded">End</div>
      <div className="justify-self-stretch bg-red-300 dark:bg-red-700 p-2 rounded text-center">
        Stretch (Default)
      </div>
      <div className="justify-self-auto bg-purple-300 dark:bg-purple-700 p-2 rounded">Auto</div>{' '}
      {/* 通常 Stretch と同じ */}
      <div className="justify-self-center bg-pink-300 dark:bg-pink-700 p-2 rounded">
        Center Again
      </div>
      {/* 各アイテムは自身の justify-self 設定に従ってグリッドエリア内で配置される */}
    </div>
  );
};

// ページコンポーネント本体
const JustifySelfPage: React.FC = () => {
  // // コードスニペットを定義
  // const justifySelfStartHtml = `<div class="justify-self-start ...">Item</div>`;
  // const justifySelfEndHtml = `<div class="justify-self-end ...">Item</div>`;
  // const justifySelfCenterHtml = `<div class="justify-self-center ...">Item</div>`;
  // const justifySelfStretchHtml = `<div class="justify-self-stretch ...">Item</div>`; // Default
  // const justifySelfAutoHtml = `<div class="justify-self-auto ...">Item</div>`; // Usually same as stretch

  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Flexbox & Grid: Justify Self (個別アイテムのインライン軸揃え - Grid)
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
          </CardContent>
        </Card>
        {/* 使用例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例 (Grid)
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              Grid アイテムに対する各 justify-self 値の適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              {/* コード表示は各アイテムに適用するため冗長になるので省略 */}
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{`
<div class="grid grid-cols-3 gap-4 ...">
  <div class="justify-self-start ...">Start</div>
  <div class="justify-self-center ...">Center</div>
  <div class="justify-self-end ...">End</div>
  <div class="justify-self-stretch ...">Stretch</div>
  <div class="justify-self-auto ...">Auto</div>
  {/* ... */}
</div>
                `}</code>
              </pre>
              <JustifySelfExample />
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
              を使って、画面サイズに応じて個々のアイテムのインライン軸揃えを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>justify-self-center md:justify-self-start</code>{' '}
              はデフォルトで中央揃え、中程度の画面サイズ以上で左揃えにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="grid grid-cols-2 gap-4 ...">
  <div class="justify-self-center md:justify-self-start ...">Item 1</div>
  <div class="justify-self-center md:justify-self-end ...">Item 2</div>
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
                  href="https://tailwindcss.com/docs/justify-self"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Justify Self
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: justify-self
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JustifySelfPage;

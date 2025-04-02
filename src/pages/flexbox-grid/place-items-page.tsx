import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// place-items は align-items と justify-items のショートハンドです。Grid レイアウトに適用されます。

const PlaceItemsStartExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 place-items-start gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded h-32"> {/* h-32 */}
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
        <div className="bg-red-300 dark:bg-red-700 p-2 rounded text-center">Item 2</div> {/* サイズが異なる */}
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">3</div>
        {/* 各アイテムは自身のグリッドエリア全体に引き伸ばされる (デフォルト) (align-items: stretch, justify-items: stretch) */}
      </div>
    );
  };

// Baseline は place-items では直接指定できない (align-items: baseline のみ)
// 必要であれば align-items-baseline と justify-items-* を組み合わせる


// ページコンポーネント本体
const PlaceItemsPage: React.FC = () => {
  // コードスニペットを定義
  const placeStartHtml = `<div class="grid place-items-start h-32 ...">...</div>`;
  const placeEndHtml = `<div class="grid place-items-end h-32 ...">...</div>`;
  const placeCenterHtml = `<div class="grid place-items-center h-32 ...">...</div>`;
  const placeStretchHtml = `<div class="grid place-items-stretch h-32 ...">...</div>`; // Default


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Flexbox & Grid: Place Items (アイテムの揃え - Grid)
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
              グリッドコンテナ内のすべてのグリッドアイテムを、それぞれのグリッドエリア内で両方の軸 (インライン軸とブロック軸) に沿ってどのように配置するかを一括で制御するためのユーティリティクラス (ショートハンド) です。
            </p>
            <p>
              CSS の <code>place-items</code> プロパティ (<code>align-items</code> と <code>justify-items</code> のショートハンド) を制御します。<strong>これは Grid レイアウト専用です。</strong> Flexbox には効果がありません。
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
              <code>place-items-{'{alignment}'}</code> の形式でクラスをグリッドコンテナに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>place-items-start</code></strong>: アイテムをグリッドエリアの開始位置 (左上) に配置します (<code>align-items: start; justify-items: start;</code>)。</li>
              <li><strong><code>place-items-end</code></strong>: アイテムをグリッドエリアの終了位置 (右下) に配置します (<code>align-items: end; justify-items: end;</code>)。</li>
              <li><strong><code>place-items-center</code></strong>: アイテムをグリッドエリアの中央に配置します (<code>align-items: center; justify-items: center;</code>)。</li>
              <li><strong><code>place-items-stretch</code></strong>: デフォルト。アイテムをグリッドエリア全体に引き伸ばします (<code>align-items: stretch; justify-items: stretch;</code>)。</li>
            </ul>
             <p className="mt-4">
              <code>place-items</code> は <code>align-items</code> と <code>justify-items</code> に同じ値を設定するショートハンドです。異なる値を設定したい場合は、<code>items-*</code> と <code>justify-items-*</code> を個別に使用します。例えば、<code>items-center justify-items-start</code> のように組み合わせます。
            </p>
             {/* Tailwind v3.3+ */}
             <p>
              書字方向に対応する <code>place-items-normal</code> (デフォルトの揃え方、通常 <code>stretch</code>), <code>place-items-baseline</code> もありますが、<code>baseline</code> は通常 <code>items-baseline</code> で指定します (v3.3+)。
            </p>
          </CardContent>
        </Card>

        {/* 各パラメータの例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例 (Grid)
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              Grid コンテナに対する各 place-items 値の適用例。コンテナには高さが必要です。
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Start */}
            <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">place-items-start</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{placeStartHtml}</code>
              </pre>
              <PlaceItemsStartExample />
            </div>
            {/* End */}
            <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">place-items-end</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{placeEndHtml}</code>
              </pre>
              <PlaceItemsEndExample />
            </div>
             {/* Center */}
             <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">place-items-center</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{placeCenterHtml}</code>
              </pre>
              <PlaceItemsCenterExample />
            </div>
             {/* Stretch */}
             <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">place-items-stretch (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{placeStretchHtml}</code>
              </pre>
              <PlaceItemsStretchExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてアイテムの揃え方を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>place-items-start md:place-items-center</code> はデフォルトで左上揃え、中程度の画面サイズ以上で中央揃えにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="grid place-items-start md:place-items-center h-32 ...">
  {/* ... items */}
</div>
              `.trim()}</code>
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
                <code>place-items</code> はグリッドコンテナに適用します。
              </li>
              <li>
                このプロパティは Grid レイアウト専用です。Flexbox レイアウトには効果がありません。
              </li>
               <li>
                <code>place-items</code> は <code>align-items</code> と <code>justify-items</code> の両方を設定します。軸ごとに異なる揃え方をしたい場合は、<code>items-*</code> と <code>justify-items-*</code> を個別に使用してください。
              </li>
               <li>
                <code>place-items-stretch</code> (デフォルト) 以外の値を使用すると、アイテムは自身のコンテンツサイズに基づいてサイズが決まります (グリッドエリア内で)。
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
                <code>display</code> (<code>grid</code>, <code>inline-grid</code>): 要素をグリッドコンテナにします。
              </li>
              <li>
                <code>align-items</code> (<code>items-*</code>): 交差軸方向の揃え方を個別に設定します。
              </li>
              <li>
                <code>justify-items</code> (<code>justify-items-*</code>): インライン軸方向の揃え方を個別に設定します。
              </li>
               <li>
                <code>place-content</code> (<code>place-content-*</code>): 複数行/列の場合の揃えとスペース配分を両軸で設定します。
              </li>
               <li>
                <code>place-self</code> (<code>place-self-*</code>): 個々のグリッドアイテムの揃え方を両軸で設定します。
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
                  href="https://tailwindcss.com/docs/place-items"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Place Items
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/place-items"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: place-items
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlaceItemsPage;
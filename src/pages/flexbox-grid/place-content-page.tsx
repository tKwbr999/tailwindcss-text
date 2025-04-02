import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// place-content は align-content と justify-content のショートハンドです。
// 複数行/列の場合に効果があります。

const PlaceContentCenterExample: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 place-content-center bg-gray-100 dark:bg-gray-800 p-4 rounded h-48"> {/* h-48 */}
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">1</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">2</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">3</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded text-center">4</div>
      {/* アイテムのグループ全体がコンテナの中央に配置される (align-content: center, justify-content: center) */}
    </div>
  );
};

const PlaceContentStartExample: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 place-content-start bg-gray-100 dark:bg-gray-800 p-4 rounded h-48">
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">1</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">2</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">3</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">4</div>
      {/* アイテムのグループ全体がコンテナの開始位置 (左上) に配置される (align-content: start, justify-content: start) */}
    </div>
  );
};

const PlaceContentEndExample: React.FC = () => {
    return (
      <div className="grid grid-cols-2 gap-4 place-content-end bg-gray-100 dark:bg-gray-800 p-4 rounded h-48">
        <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">1</div>
        <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">2</div>
        <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">3</div>
        <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center">4</div>
        {/* アイテムのグループ全体がコンテナの終了位置 (右下) に配置される (align-content: end, justify-content: end) */}
      </div>
    );
  };

const PlaceContentBetweenExample: React.FC = () => {
    return (
      <div className="grid grid-cols-2 gap-4 place-content-between bg-gray-100 dark:bg-gray-800 p-4 rounded h-48">
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">1</div>
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">2</div>
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">3</div>
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded text-center">4</div>
        {/* 行/列がコンテナの両端に配置され、間のスペースが均等に分配される (align-content: between, justify-content: between) */}
      </div>
    );
  };

const PlaceContentAroundExample: React.FC = () => {
    return (
      <div className="grid grid-cols-2 gap-4 place-content-around bg-gray-100 dark:bg-gray-800 p-4 rounded h-48">
        <div className="bg-purple-300 dark:bg-purple-700 p-4 rounded text-center">1</div>
        <div className="bg-purple-300 dark:bg-purple-700 p-4 rounded text-center">2</div>
        <div className="bg-purple-300 dark:bg-purple-700 p-4 rounded text-center">3</div>
        <div className="bg-purple-300 dark:bg-purple-700 p-4 rounded text-center">4</div>
        {/* 各行/列の周囲に均等なスペースが分配される (align-content: around, justify-content: around) */}
      </div>
    );
  };

const PlaceContentEvenlyExample: React.FC = () => {
    return (
      <div className="grid grid-cols-2 gap-4 place-content-evenly bg-gray-100 dark:bg-gray-800 p-4 rounded h-48">
        <div className="bg-pink-300 dark:bg-pink-700 p-4 rounded text-center">1</div>
        <div className="bg-pink-300 dark:bg-pink-700 p-4 rounded text-center">2</div>
        <div className="bg-pink-300 dark:bg-pink-700 p-4 rounded text-center">3</div>
        <div className="bg-pink-300 dark:bg-pink-700 p-4 rounded text-center">4</div>
        {/* 行/列間およびコンテナ端との間のスペースがすべて均等になる (align-content: evenly, justify-content: evenly) */}
      </div>
    );
  };

const PlaceContentStretchExample: React.FC = () => {
    // 注意: place-content-stretch は v3.3+
    return (
      <div className="grid grid-cols-2 gap-4 place-content-stretch bg-gray-100 dark:bg-gray-800 p-4 rounded h-48">
        <div className="bg-indigo-300 dark:bg-indigo-700 p-4 rounded text-center">Stretch 1</div>
        <div className="bg-indigo-300 dark:bg-indigo-700 p-4 rounded text-center">Stretch 2</div>
        <div className="bg-indigo-300 dark:bg-indigo-700 p-4 rounded text-center">Stretch 3</div>
        <div className="bg-indigo-300 dark:bg-indigo-700 p-4 rounded text-center">Stretch 4</div>
        {/* アイテムが行/列のスペースを埋めるように引き伸ばされる (align-content: stretch, justify-content: stretch) */}
      </div>
    );
  };


// ページコンポーネント本体
const PlaceContentPage: React.FC = () => {
  // コードスニペットを定義
  const placeContentCenterHtml = `<div class="grid place-content-center h-48 ...">...</div>`;
  const placeContentStartHtml = `<div class="grid place-content-start h-48 ...">...</div>`;
  const placeContentEndHtml = `<div class="grid place-content-end h-48 ...">...</div>`;
  const placeContentBetweenHtml = `<div class="grid place-content-between h-48 ...">...</div>`;
  const placeContentAroundHtml = `<div class="grid place-content-around h-48 ...">...</div>`;
  const placeContentEvenlyHtml = `<div class="grid place-content-evenly h-48 ...">...</div>`;
  const placeContentStretchHtml = `<div class="grid place-content-stretch h-48 ...">...</div>`; // v3.3+


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Flexbox & Grid: Place Content (複数行/列の揃えとスペース配分)
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
              グリッドコンテナまたはフレックスコンテナ内で、アイテムが複数行/列に折り返した場合に、それらの行/列全体を両方の軸 (主軸と交差軸) に沿ってどのように配置し、スペースを分配するかを一括で制御するためのユーティリティクラス (ショートハンド) です。
            </p>
            <p>
              CSS の <code>place-content</code> プロパティ (<code>align-content</code> と <code>justify-content</code> のショートハンド) を制御します。
            </p>
             <p>
              <strong>注意:</strong> このプロパティは、アイテムが複数行/列になっている場合にのみ効果があります (例: Flexbox で <code>flex-wrap: wrap;</code> が設定されている、または Grid で複数行/列が存在する)。単一行/列の場合は効果がありません。
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
              <code>place-content-{'{alignment}'}</code> の形式でクラスをグリッドコンテナまたはフレックスコンテナに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>place-content-center</code></strong>: 行/列を両方の軸の中央に配置します (<code>align-content: center; justify-content: center;</code>)。</li>
              <li><strong><code>place-content-start</code></strong>: 行/列を両方の軸の開始位置に配置します (<code>align-content: start; justify-content: start;</code>)。</li>
              <li><strong><code>place-content-end</code></strong>: 行/列を両方の軸の終了位置に配置します (<code>align-content: end; justify-content: end;</code>)。</li>
              <li><strong><code>place-content-between</code></strong>: 行/列を両方の軸の両端に配置し、間のスペースを均等に分配します (<code>align-content: between; justify-content: between;</code>)。</li>
              <li><strong><code>place-content-around</code></strong>: 各行/列の周囲に均等なスペースを分配します (<code>align-content: around; justify-content: around;</code>)。</li>
              <li><strong><code>place-content-evenly</code></strong>: 各行/列間およびコンテナ端との間のスペースを両方の軸で均等に分配します (<code>align-content: evenly; justify-content: evenly;</code>)。</li>
              <li><strong><code>place-content-stretch</code></strong>: 行/列がコンテナのスペースを埋めるように引き伸ばされます (<code>align-content: stretch; justify-content: stretch;</code>)。 (v3.3+)</li>
            </ul>
             {/* Tailwind v3.3+ */}
             <p className="mt-4">
              書字方向に対応する <code>place-content-normal</code> (デフォルトの揃え方、通常 <code>stretch</code>), <code>place-content-baseline</code> もあります (v3.3+)。
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
              Grid コンテナに対する各 place-content 値の適用例。コンテナには高さが必要です。
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Center */}
            <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">place-content-center</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{placeContentCenterHtml}</code>
              </pre>
              <PlaceContentCenterExample />
            </div>
            {/* Start */}
            <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">place-content-start</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{placeContentStartHtml}</code>
              </pre>
              <PlaceContentStartExample />
            </div>
             {/* End */}
             <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">place-content-end</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{placeContentEndHtml}</code>
              </pre>
              <PlaceContentEndExample />
            </div>
             {/* Between */}
             <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">place-content-between</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{placeContentBetweenHtml}</code>
              </pre>
              <PlaceContentBetweenExample />
            </div>
             {/* Around */}
             <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">place-content-around</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{placeContentAroundHtml}</code>
              </pre>
              <PlaceContentAroundExample />
            </div>
             {/* Evenly */}
             <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">place-content-evenly</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{placeContentEvenlyHtml}</code>
              </pre>
              <PlaceContentEvenlyExample />
            </div>
             {/* Stretch */}
             <div className="text-center md:col-span-2"> {/* Stretch は幅を取るので2列使う */}
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">place-content-stretch (v3.3+)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{placeContentStretchHtml}</code>
              </pre>
              <PlaceContentStretchExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて配置とスペース配分を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>place-content-start md:place-content-center</code> はデフォルトで左上揃え、中程度の画面サイズ以上で中央揃えにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="grid place-content-start md:place-content-center h-48 ...">
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
                <code>place-content</code> はグリッドコンテナまたはフレックスコンテナに適用します。
              </li>
              <li>
                このプロパティは、アイテムが複数行/列に折り返している場合にのみ効果があります。単一行/列の場合は効果がありません。
              </li>
               <li>
                効果を確認するには、コンテナに両方の軸方向のサイズ (通常は幅 <code>w-*</code> と高さ <code>h-*</code>) が必要になる場合があります。
              </li>
               <li>
                <code>place-content</code> は <code>align-content</code> と <code>justify-content</code> の両方を設定するため、これらの個別プロパティを後から指定すると <code>place-content</code> の設定が上書きされる可能性があります。
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
                <code>display</code> (<code>flex</code>, <code>inline-flex</code>, <code>grid</code>, <code>inline-grid</code>): 要素をコンテナにします。
              </li>
              <li>
                <code>flex-wrap</code> (<code>flex-wrap</code>): Flexbox でアイテムの折り返しを有効にします。
              </li>
              <li>
                <code>align-content</code> (<code>content-*</code>): 交差軸方向の揃えとスペース配分を個別に設定します。
              </li>
               <li>
                <code>justify-content</code> (<code>justify-*</code>): 主軸方向の揃えとスペース配分を個別に設定します。
              </li>
               <li>
                <code>place-items</code> (<code>place-items-*</code>): 単一行/列の場合のアイテムの揃え方を両軸で設定します (Grid のみ)。
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
                  href="https://tailwindcss.com/docs/place-content"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Place Content
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/place-content"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: place-content
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlaceContentPage;
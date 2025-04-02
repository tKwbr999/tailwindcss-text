import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const SpaceXExample: React.FC = () => {
  return (
    <div className="flex space-x-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded">1</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded">2</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded">3</div>
      {/* 2番目以降のアイテムの左側に space-x-4 (1rem) のマージンが追加される */}
    </div>
  );
};

const SpaceYExample: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4 bg-gray-100 dark:bg-gray-800 p-4 rounded w-32 mx-auto"> {/* w-32 */}
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">1</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">2</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded text-center">3</div>
      {/* 2番目以降のアイテムの上側に space-y-4 (1rem) のマージンが追加される */}
    </div>
  );
};

const SpaceReverseExample: React.FC = () => {
    return (
      <div className="flex flex-row-reverse space-x-4 space-x-reverse bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded">1</div>
        <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded">2</div>
        <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded">3</div>
        {/* flex-row-reverse と space-x-reverse により、2番目以降のアイテムの右側にマージンが追加される */}
      </div>
    );
  };

const NegativeSpaceExample: React.FC = () => {
    // 注意: 負の space-* は通常、要素を重ね合わせるために使用されます。
    return (
      <div className="flex -space-x-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded border-2 border-red-500 z-30">1</div>
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded border-2 border-red-500 z-20">2</div>
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded border-2 border-red-500 z-10">3</div>
        {/* 2番目以降のアイテムに負の左マージン (-1rem) が適用され、要素が重なる */}
      </div>
    );
  };


// ページコンポーネント本体
const SpaceBetweenPage: React.FC = () => {
  // コードスニペットを定義
  const spaceXHtml = `
<div class="flex space-x-4 ...">
  <div>1</div>
  <div>2</div> {/* margin-left: 1rem; */}
  <div>3</div> {/* margin-left: 1rem; */}
</div>
  `.trim();

  const spaceYHtml = `
<div class="flex flex-col space-y-4 ...">
  <div>1</div>
  <div>2</div> {/* margin-top: 1rem; */}
  <div>3</div> {/* margin-top: 1rem; */}
</div>
  `.trim();

  const spaceReverseHtml = `
<div class="flex flex-row-reverse space-x-4 space-x-reverse ...">
  <div>1</div>
  <div>2</div> {/* margin-right: 1rem; */}
  <div>3</div> {/* margin-right: 1rem; */}
</div>
  `.trim();

    const negativeSpaceHtml = `
<div class="flex -space-x-4 ...">
  <div>1</div>
  <div>2</div> {/* margin-left: -1rem; */}
  <div>3</div> {/* margin-left: -1rem; */}
</div>
  `.trim();


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Spacing: Space Between (要素間のスペース)
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
              隣接する兄弟要素間に均等なスペース (マージン) を追加するためのユーティリティクラスです。Flexbox や Grid レイアウトだけでなく、通常のブロック要素のリストなどでも使用できます。
            </p>
            <p>
              これは直接的な CSS プロパティではなく、Tailwind が提供する便利なヘルパーユーティリティです。内部的には、最初の子要素を除くすべての直接の子要素に対して、適切な方向のマージン (<code>margin-left</code>, <code>margin-top</code> など) を設定します。
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
              <code>space-{'{axis}'}-{'{size}'}</code> または <code>space-{'{axis}'}-reverse</code> の形式でクラスを親要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>space-x-{'{size}'}</code></strong>: 水平方向の隣接要素間にスペースを追加します (2番目以降の子要素に <code>margin-left</code> を追加)。</li>
              <li><strong><code>space-y-{'{size}'}</code></strong>: 垂直方向の隣接要素間にスペースを追加します (2番目以降の子要素に <code>margin-top</code> を追加)。</li>
              <li><strong><code>space-x-reverse</code></strong>: 水平方向のスペースの方向を反転させます (<code>margin-left</code> の代わりに <code>margin-right</code> を追加)。通常 <code>flex-row-reverse</code> と組み合わせて使用します。</li>
              <li><strong><code>space-y-reverse</code></strong>: 垂直方向のスペースの方向を反転させます (<code>margin-top</code> の代わりに <code>margin-bottom</code> を追加)。通常 <code>flex-col-reverse</code> と組み合わせて使用します。</li>
            </ul>
             <p className="mt-4">
              <code>{'{size}'}</code> には、Tailwind のデフォルトのスペーシングスケール (例: <code>0</code>, <code>px</code>, <code>0.5</code>, <code>1</code>, ..., <code>96</code>) を使用できます。任意の値 (例: <code>space-x-[1.25rem]</code>) や負の値 (例: <code>-space-x-4</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </CardContent>
        </Card>

        {/* 各パラメータの例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              異なる space-* ユーティリティの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Space X */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">水平方向 (space-x-*)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{spaceXHtml}</code>
              </pre>
              <SpaceXExample />
            </div>
            {/* Space Y */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">垂直方向 (space-y-*)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{spaceYHtml}</code>
              </pre>
              <SpaceYExample />
            </div>
             {/* Space Reverse */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">方向反転 (space-*-reverse)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{spaceReverseHtml}</code>
              </pre>
              <SpaceReverseExample />
            </div>
             {/* Negative Space */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">負のスペース (-space-*-*)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{negativeSpaceHtml}</code>
              </pre>
              <NegativeSpaceExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて要素間のスペースを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>space-y-2 md:space-y-4</code> はデフォルトで <code>0.5rem</code>、中程度の画面サイズ以上で <code>1rem</code> の垂直スペースを設定します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="flex flex-col space-y-2 md:space-y-4 ...">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
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
                <code>space-*</code> ユーティリティは親要素に適用し、直接の子要素間にマージンを追加します。
              </li>
              <li>
                これは CSS の <code>gap</code> プロパティとは異なります。<code>gap</code> は Flexbox や Grid コンテナに適用され、アイテム間の「溝」を設定しますが、<code>space-*</code> は単純に隣接する兄弟要素にマージンを追加します。
              </li>
               <li>
                <code>space-*</code> は、最初の子要素にはマージンを追加しません。これにより、コンテナの端に不要なスペースができるのを防ぎます。
              </li>
               <li>
                要素が折り返す場合 (例: <code>flex-wrap</code>)、<code>space-x-*</code> は同じ行にある隣接要素にのみ影響し、<code>space-y-*</code> は行間のスペースには影響しません (行間のスペースは <code>gap-y-*</code> や <code>align-content</code> で制御します)。
              </li>
               <li>
                負の <code>space-*</code> 値は要素を重ね合わせる効果がありますが、<code>z-index</code> を調整しないと意図しない重なり順になることがあります。
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
                <code>margin</code> (<code>m-*</code>, <code>mx-*</code>, <code>mt-*</code> など): 個々の要素にマージンを設定します。
              </li>
              <li>
                <code>gap</code> (<code>gap-*</code>, <code>gap-x-*</code>, <code>gap-y-*</code>): Flexbox または Grid コンテナ内のアイテム間の溝を設定します。
              </li>
               <li>
                <code>divide</code> (<code>divide-x-*</code>, <code>divide-y-*</code>): 隣接する兄弟要素間に境界線を追加します。スペースではなく区切り線で要素を分けたい場合に便利です。
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
                  href="https://tailwindcss.com/docs/space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Space Between
                </a>
              </li>
              {/* space-* は直接的な CSS プロパティではないため、MDN リンクは省略 */}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SpaceBetweenPage;
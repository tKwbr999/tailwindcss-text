import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ArticleLayout from '@/components/layout/ArticleLayout'; // ArticleLayout をインポート

// 各コードサンプルに対応するReact実装コンポーネント

const TopLeftExample: React.FC = () => {
  return (
    <div className="relative h-32 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
       <p className="text-xs mb-1">親要素 (relative)</p>
      <div className="absolute top-4 left-4 bg-blue-300 dark:bg-blue-700 p-2 rounded">
        top-4 left-4
      </div>
    </div>
  );
};

const BottomRightExample: React.FC = () => {
  return (
    <div className="relative h-32 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
       <p className="text-xs mb-1">親要素 (relative)</p>
      <div className="absolute bottom-4 right-4 bg-green-300 dark:bg-green-700 p-2 rounded">
        bottom-4 right-4
      </div>
    </div>
  );
};

const InsetExample: React.FC = () => {
  return (
    <div className="relative h-32 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
       <p className="text-xs mb-1">親要素 (relative)</p>
      <div className="absolute inset-4 bg-yellow-300 dark:bg-yellow-700 p-2 rounded">
        inset-4 (top, right, bottom, left すべて 4)
      </div>
    </div>
  );
};

const InsetXExample: React.FC = () => {
  return (
    <div className="relative h-32 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
       <p className="text-xs mb-1">親要素 (relative)</p>
      <div className="absolute inset-x-8 top-4 bottom-auto bg-red-300 dark:bg-red-700 p-2 rounded h-16"> {/* bottom-auto で下方向の inset を解除 */}
        inset-x-8 top-4 (left & right 8, top 4)
      </div>
    </div>
  );
};

const InsetYExample: React.FC = () => {
    return (
      <div className="relative h-32 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
         <p className="text-xs mb-1">親要素 (relative)</p>
        <div className="absolute inset-y-8 left-4 right-auto bg-purple-300 dark:bg-purple-700 p-2 rounded w-24"> {/* right-auto で右方向の inset を解除 */}
          inset-y-8 left-4 (top & bottom 8, left 4)
        </div>
      </div>
    );
  };

const NegativeExample: React.FC = () => {
    return (
      <div className="relative h-32 bg-gray-100 dark:bg-gray-800 p-4 rounded border border-gray-300 overflow-visible"> {/* overflow-visible でないと見えない */}
         <p className="text-xs mb-1">親要素 (relative)</p>
        <div className="absolute -top-2 -left-2 bg-pink-300 dark:bg-pink-700 p-2 rounded shadow">
          -top-2 -left-2 (親要素の外側へ)
        </div>
      </div>
    );
  };

const ArbitraryExample: React.FC = () => {
    return (
      <div className="relative h-32 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
         <p className="text-xs mb-1">親要素 (relative)</p>
        <div className="absolute top-[30px] left-[50px] bg-teal-300 dark:bg-teal-700 p-2 rounded">
          top-[30px] left-[50px]
        </div>
      </div>
    );
  };


// ページコンポーネント本体
const TopRightBottomLeftPage: React.FC = () => {
  // コードスニペットを定義
  const topLeftHtml = `
<div class="relative ...">
  <div class="absolute top-4 left-4 ...">...</div>
</div>
  `.trim();
  const bottomRightHtml = `
<div class="relative ...">
  <div class="absolute bottom-4 right-4 ...">...</div>
</div>
  `.trim();
  const insetHtml = `
<div class="relative ...">
  <div class="absolute inset-4 ...">...</div> {/* top/right/bottom/left: 4 */}
</div>
  `.trim();
  const insetXHtml = `
<div class="relative ...">
  <div class="absolute inset-x-8 top-4 ...">...</div> {/* left/right: 8, top: 4 */}
</div>
  `.trim();
  const insetYHtml = `
<div class="relative ...">
  <div class="absolute inset-y-8 left-4 ...">...</div> {/* top/bottom: 8, left: 4 */}
</div>
  `.trim();
    const negativeHtml = `
<div class="relative overflow-visible ...">
  <div class="absolute -top-2 -left-2 ...">...</div> {/* 親の外側へ */}
</div>
  `.trim();
    const arbitraryHtml = `
<div class="relative ...">
  <div class="absolute top-[30px] left-[50px] ...">...</div>
</div>
  `.trim();

// 参照リンクの定義を追加
const links = [
  {
    title: 'Tailwind CSS: Top / Right / Bottom / Left',
    url: 'https://tailwindcss.com/docs/top-right-bottom-left',
  },
  {
    title: 'Tailwind CSS: Inset (ショートハンド)',
    url: 'https://tailwindcss.com/docs/inset',
  },
  {
    title: 'MDN: top (right, bottom, left も同様)',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/top',
  },
  {
    title: 'MDN: inset (ショートハンド)',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/inset',
  },
];

  return (
    <ArticleLayout title="Layout: Top / Right / Bottom / Left (配置オフセット)" links={links}>

      <Helmet>
        <title>Layout: Top / Right / Bottom / Left - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Layout: Top / Right / Bottom / Left utility in Tailwind CSS. Examples and usage details for Layout: Top / Right / Bottom / Left." />
      </Helmet>
        {/* 概要 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              概要
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              配置された要素 (position が <code>static</code> 以外) の、基準となる要素 (最も近い配置済み祖先要素またはビューポート) の辺からのオフセット距離を制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> プロパティを制御します。<code>inset</code>, <code>inset-x</code>, <code>inset-y</code> はこれらのショートハンドです。
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
              <code>{'{side}'}-{'{value}'}</code> または <code>inset-{'{value}'}</code>, <code>inset-{'{axis}'}-{'{value}'}</code> の形式でクラスを配置された要素 (<code>relative</code>, <code>absolute</code>, <code>fixed</code>, <code>sticky</code>) に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>top-{'{value}'}</code></strong>: 上辺からのオフセット。</li>
              <li><strong><code>right-{'{value}'}</code></strong>: 右辺からのオフセット。</li>
              <li><strong><code>bottom-{'{value}'}</code></strong>: 下辺からのオフセット。</li>
              <li><strong><code>left-{'{value}'}</code></strong>: 左辺からのオフセット。</li>
              <li><strong><code>inset-{'{value}'}</code></strong>: <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> すべてに同じ値を設定します。</li>
              <li><strong><code>inset-x-{'{value}'}</code></strong>: <code>left</code> と <code>right</code> に同じ値を設定します。</li>
              <li><strong><code>inset-y-{'{value}'}</code></strong>: <code>top</code> と <code>bottom</code> に同じ値を設定します。</li>
            </ul>
             <p className="mt-4">
              <code>{'{value}'}</code> には、Tailwind のデフォルトのスペーシングスケール (例: <code>0</code>, <code>4</code>, <code>8</code>)、パーセンテージ (例: <code>1/2</code> は 50%)、<code>auto</code>、または任意の値 (例: <code>[30px]</code>) を使用できます。負の値 (例: <code>-top-4</code>) を使って要素を基準要素の外側にはみ出させることも可能です。
            </p>
          </CardContent>
        </Card>

        {/* 各パラメータの例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例 (absolute 要素)
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>absolute</code> 配置された要素に対する各オフセット指定の例。親要素は <code>relative</code>。
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Top Left */}
            <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">top / left</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{topLeftHtml}</code>
              </pre>
              <TopLeftExample />
            </div>
            {/* Bottom Right */}
            <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">bottom / right</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{bottomRightHtml}</code>
              </pre>
              <BottomRightExample />
            </div>
             {/* Inset */}
             <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">inset</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{insetHtml}</code>
              </pre>
              <InsetExample />
            </div>
             {/* Inset-X */}
             <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">inset-x / top</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{insetXHtml}</code>
              </pre>
              <InsetXExample />
            </div>
             {/* Inset-Y */}
             <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">inset-y / left</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{insetYHtml}</code>
              </pre>
              <InsetYExample />
            </div>
             {/* Negative */}
             <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">負の値 (-top / -left)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{negativeHtml}</code>
              </pre>
              <NegativeExample />
            </div>
             {/* Arbitrary */}
             <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値 (top / left)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryHtml}</code>
              </pre>
              <ArbitraryExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみオフセット値を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>top-4 md:top-8</code> はデフォルトで上から <code>4</code>、中程度の画面サイズ以上で上から <code>8</code> の位置に配置します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="absolute top-4 left-4 md:top-8 md:left-8 ...">
  ...
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
                これらのユーティリティは、要素の <code>position</code> が <code>static</code> (デフォルト) 以外の場合にのみ効果があります。
              </li>
              <li>
                <code>absolute</code> または <code>fixed</code> 配置の場合、通常は少なくとも2つのオフセット (例: <code>top-4 left-4</code> または <code>inset-0</code>) を指定して要素の位置を完全に決定します。1つだけ指定した場合、残りの位置は <code>auto</code> となり、ブラウザが決定します。
              </li>
               <li>
                <code>relative</code> 配置の場合、これらのユーティリティは要素を通常の位置から「ずらす」だけであり、周囲のレイアウトには影響しません。
              </li>
               <li>
                <code>sticky</code> 配置の場合、これらのユーティリティは要素が「固定」される閾値の位置を指定します (例: <code>top-0</code> はスクロール時に上端に固定)。
              </li>
               <li>
                <code>inset-*</code> ユーティリティは、対応する <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> プロパティを設定します。例えば <code>inset-4</code> は <code>top: 1rem; right: 1rem; bottom: 1rem; left: 1rem;</code> と同等です。
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
                <code>position</code> (<code>static</code>, <code>relative</code>, <code>absolute</code>, <code>fixed</code>, <code>sticky</code>): 要素の配置方法を設定します。これらのオフセットユーティリティの前提となります。
              </li>
              <li>
                <code>z-index</code> (<code>z-10</code>, <code>z-auto</code> など): 要素のスタッキング順序 (重なり順) を制御します。<code>static</code> 以外の position を持つ要素に適用されます。
              </li>
               <li>
                <code>translate</code> (<code>translate-x-4</code>, <code>-translate-y-1/2</code> など): 要素を自身のサイズに基づいて相対的に移動させます。<code>position</code> とは異なり、レイアウト上の元のスペースは保持されます。中央揃えなどによく使われます。
              </li>
            </ul>
          </CardContent>
        </Card>
    </ArticleLayout>
  );
};

export default TopRightBottomLeftPage;
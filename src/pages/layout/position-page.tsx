import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ArticleLayout from '@/components/layout/ArticleLayout'; // ArticleLayout をインポート

// 各コードサンプルに対応するReact実装コンポーネント

const StaticExample: React.FC = () => {
  return (
    <div className="relative h-24 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
      <div className="static bg-blue-200 dark:bg-blue-900 p-2 rounded">
        Static (デフォルト): 通常のフローに従って配置されます。top/right/bottom/left は効果がありません。
      </div>
       {/* <div className="absolute top-0 left-0 bg-red-300 p-1">絶対配置要素</div> */}
    </div>
  );
};

const RelativeExample: React.FC = () => {
  return (
    <div className="relative h-32 bg-green-100 dark:bg-green-900 p-2 rounded border border-green-300">
       <p className="text-xs mb-1">親要素 (relative)</p>
      <div className="relative top-2 left-4 bg-green-300 dark:bg-green-700 p-2 rounded w-3/4">
        Relative: 通常の位置から top-2 (0.5rem 下), left-4 (1rem 右) にオフセットされます。後続要素のレイアウトには影響しません。
      </div>
       <div className="absolute bottom-1 right-1 bg-red-300 dark:bg-red-700 p-1 rounded text-xs">
        絶対配置の子要素 (基準は親)
      </div>
    </div>
  );
};

const AbsoluteExample: React.FC = () => {
  return (
    <div className="relative h-32 bg-yellow-100 dark:bg-yellow-900 p-2 rounded border border-yellow-300">
       <p className="text-xs mb-1">親要素 (relative)</p>
      <div className="absolute top-4 right-4 bg-yellow-300 dark:bg-yellow-700 p-2 rounded">
        Absolute: 最も近い relative/absolute/fixed の親要素 (ここでは外側の div) を基準に top-4, right-4 の位置に配置されます。通常のフローから外れます。
      </div>
       <div className="bg-gray-200 p-1 text-xs">後続の要素 (absolute要素は無視)</div>
    </div>
  );
};

const FixedExample: React.FC = () => {
  // 注意: Fixed要素はビューポート基準なので、このコンポーネント内での表示は限定的
  return (
    <div className="h-24 bg-red-100 dark:bg-red-900 p-2 rounded border border-red-300 overflow-hidden"> {/* overflow-hidden で表示範囲を制限 */}
       <p className="text-xs mb-1">コンテナ要素</p>
      <div className="fixed bottom-4 right-4 bg-red-300 dark:bg-red-700 p-2 rounded shadow-lg z-10">
        Fixed: ビューポートを基準に bottom-4, right-4 に固定されます (この例では親の範囲にクリップされる可能性あり)。
      </div>
       <p className="text-xs mt-1">コンテナ内の他のコンテンツ</p>
    </div>
  );
};

const StickyExample: React.FC = () => {
    // 注意: Sticky要素はスクロール可能な親要素内で効果を発揮
    return (
      <div className="h-48 overflow-auto bg-purple-100 dark:bg-purple-900 p-2 rounded border border-purple-300">
        <p className="text-xs mb-1">スクロール可能な親要素</p>
        <div className="sticky top-2 bg-purple-300 dark:bg-purple-700 p-2 rounded shadow z-10">
          Sticky: 通常は relative のように配置されますが、親要素をスクロールして top-2 の位置に達すると、そこに固定されます。
        </div>
        <div className="h-64"> {/* スクロール領域を確保するためのダミー */}
          <p className="mt-4 text-xs">下にスクロールしてください...</p>
          <p className="mt-4 text-xs">...</p>
          <p className="mt-4 text-xs">...</p>
          <p className="mt-4 text-xs">...</p>
           <p className="mt-4 text-xs">Sticky要素が上部に固定されるのを確認できます。</p>
        </div>
      </div>
    );
  };


// ページコンポーネント本体
const PositionPage: React.FC = () => {
  // コードスニペットを定義
  const staticHtml = `<div class="static ...">...</div>`;
  const relativeHtml = `
<div class="relative ..."> {/* 親要素 */}
  <div class="relative top-2 left-4 ...">Relative Child</div>
  <div class="absolute bottom-1 right-1 ...">Absolute Child</div>
</div>
  `.trim();
  const absoluteHtml = `
<div class="relative ..."> {/* 親要素 */}
  <div class="absolute top-4 right-4 ...">Absolute Child</div>
</div>
  `.trim();
  const fixedHtml = `<div class="fixed bottom-4 right-4 ...">Fixed Element</div>`;
  const stickyHtml = `
<div class="h-48 overflow-auto ..."> {/* スクロール可能な親 */}
  <div class="sticky top-2 ...">Sticky Header</div>
  {/* ... 大量のコンテンツ */}
</div>
  `.trim();

// 参照リンクの定義を追加
const links = [
  {
    title: 'Tailwind CSS: Position',
    url: 'https://tailwindcss.com/docs/position',
  },
  {
    title: 'MDN: position',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/position',
  },
];

  return (
    <ArticleLayout title="Layout: Position (配置)" links={links}>

      <Helmet>
        <title>Layout: Position - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Layout: Position utility in Tailwind CSS. Examples and usage details for Layout: Position." />
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
              要素の配置方法 (positioning method) を制御するためのユーティリティクラスです。要素が通常のドキュメントフローに従うか、あるいは親要素やビューポートを基準に特定の位置に配置されるかを決定します。
            </p>
            <p>
              CSS の <code>position</code> プロパティを制御します。<code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>, <code>inset</code> などの位置指定ユーティリティと組み合わせて使用します。
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
              要素に適用したい <code>position</code> 値に対応するクラスを指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>static</code></strong>: デフォルト。要素は通常のドキュメントフローに従って配置されます。<code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>, <code>z-index</code> プロパティは効果がありません。</li>
              <li><strong><code>relative</code></strong>: 要素は通常のドキュメントフローに従って配置されますが、<code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> を使って通常の位置から相対的にオフセットできます。後続の要素のレイアウトには影響を与えません。また、絶対配置 (<code>absolute</code>) された子要素の基準点となります。</li>
              <li><strong><code>absolute</code></strong>: 要素は通常のドキュメントフローから取り除かれ、最も近い <code>static</code> 以外の <code>position</code> を持つ祖先要素を基準に配置されます。そのような祖先要素がない場合は、初期包含ブロック (通常は <code>&lt;html&gt;</code>) を基準とします。<code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> で位置を指定します。</li>
              <li><strong><code>fixed</code></strong>: 要素は通常のドキュメントフローから取り除かれ、ビューポート (ブラウザウィンドウ) を基準に配置されます。スクロールしても位置は変わりません。<code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> で位置を指定します。</li>
              <li><strong><code>sticky</code></strong>: 要素は通常のドキュメントフローに従って配置されますが (<code>relative</code> に似ています)、スクロールによって特定の閾値 (<code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> で指定) に達すると、最も近いスクロール可能な祖先要素またはビューポートに対して固定されたかのように振る舞います (<code>fixed</code> に似ています)。</li>
            </ul>
          </CardContent>
        </Card>

        {/* 各 Position 値の例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              各 position 値の適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Static */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">static (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{staticHtml}</code>
              </pre>
              <StaticExample />
            </div>
            {/* Relative */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">relative</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{relativeHtml}</code>
              </pre>
              <RelativeExample />
            </div>
             {/* Absolute */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">absolute</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{absoluteHtml}</code>
              </pre>
              <AbsoluteExample />
            </div>
             {/* Fixed */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">fixed</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{fixedHtml}</code>
              </pre>
              <FixedExample />
               <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                (注意: Fixed要素はビューポート基準のため、この枠内での表示は実際の挙動と異なる場合があります)
              </p>
            </div>
             {/* Sticky */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">sticky</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{stickyHtml}</code>
              </pre>
              <StickyExample />
               <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                (注意: 上のボックス内をスクロールして挙動を確認してください)
              </p>
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみ <code>position</code> プロパティを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>relative lg:absolute</code> はデフォルトと小さい画面では <code>relative</code>、ラージスクリーン以上で <code>absolute</code> として配置します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="relative lg:absolute top-0 right-0 ...">
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
                <code>absolute</code>, <code>fixed</code>, <code>sticky</code> を使用する要素は、通常 <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>, または <code>inset</code> ユーティリティを使って位置を指定する必要があります。指定しない場合、要素は <code>static</code> であった場合の位置に留まろうとしますが、ドキュメントフローからは外れます。
              </li>
              <li>
                <code>absolute</code> 要素の基準となる祖先要素は、<code>static</code> 以外の <code>position</code> (<code>relative</code>, <code>absolute</code>, <code>fixed</code>, <code>sticky</code>) を持つ最も近い要素です。親要素に <code>relative</code> を設定することが一般的なパターンです。
              </li>
               <li>
                <code>fixed</code> 要素はビューポート基準であり、親要素のスクロールに関係なく同じ位置に留まります。モーダルダイアログのオーバーレイや固定ヘッダー/フッターによく使われます。
              </li>
               <li>
                <code>sticky</code> 要素は、最も近いスクロール可能な祖先要素内で動作します。閾値 (例: <code>top-0</code>) に達するまでは通常のフローに従い、達するとその位置に固定されます。
              </li>
               <li>
                <code>absolute</code> と <code>fixed</code> を使用すると要素がドキュメントフローから完全に外れるため、後続の要素のレイアウトに影響を与えます (要素が存在しないかのようにレイアウトされます)。
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
                <code>top</code> / <code>right</code> / <code>bottom</code> / <code>left</code> (<code>top-0</code>, <code>left-4</code> など): 配置された要素の位置をオフセットで指定します。
              </li>
              <li>
                <code>inset</code> (<code>inset-0</code>, <code>inset-x-4</code>, <code>inset-y-auto</code> など): <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> を一括または軸ごとに指定するショートハンドです。
              </li>
              <li>
                <code>z-index</code> (<code>z-10</code>, <code>z-auto</code> など): 要素のスタッキング順序 (重なり順) を制御します。<code>static</code> 以外の position を持つ要素に適用されます。
              </li>
            </ul>
          </CardContent>
        </Card>
    </ArticleLayout>
  );
};

export default PositionPage;
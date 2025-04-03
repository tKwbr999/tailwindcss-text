import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// align-content は複数行/列になった場合に効果があります (flex-wrap: wrap または grid で複数行)

const ContentStartExample: React.FC = () => {
  return (
    <div className="flex flex-wrap content-start bg-gray-100 dark:bg-gray-800 p-2 rounded h-48 w-64">
      {' '}
      {/* h-48, w-64 */}
      <div className="w-1/3 bg-blue-300 dark:bg-blue-700 p-4 rounded text-center border border-blue-400">
        1
      </div>
      <div className="w-1/3 bg-blue-300 dark:bg-blue-700 p-4 rounded text-center border border-blue-400">
        2
      </div>
      <div className="w-1/3 bg-blue-300 dark:bg-blue-700 p-4 rounded text-center border border-blue-400">
        3
      </div>
      <div className="w-1/3 bg-blue-300 dark:bg-blue-700 p-4 rounded text-center border border-blue-400">
        4
      </div>
      <div className="w-1/3 bg-blue-300 dark:bg-blue-700 p-4 rounded text-center border border-blue-400">
        5
      </div>
      {/* 行はコンテナの上端に詰められる */}
    </div>
  );
};

const ContentEndExample: React.FC = () => {
  return (
    <div className="flex flex-wrap content-end bg-gray-100 dark:bg-gray-800 p-2 rounded h-48 w-64">
      <div className="w-1/3 bg-green-300 dark:bg-green-700 p-4 rounded text-center border border-green-400">
        1
      </div>
      <div className="w-1/3 bg-green-300 dark:bg-green-700 p-4 rounded text-center border border-green-400">
        2
      </div>
      <div className="w-1/3 bg-green-300 dark:bg-green-700 p-4 rounded text-center border border-green-400">
        3
      </div>
      <div className="w-1/3 bg-green-300 dark:bg-green-700 p-4 rounded text-center border border-green-400">
        4
      </div>
      <div className="w-1/3 bg-green-300 dark:bg-green-700 p-4 rounded text-center border border-green-400">
        5
      </div>
      {/* 行はコンテナの下端に詰められる */}
    </div>
  );
};

const ContentCenterExample: React.FC = () => {
  return (
    <div className="flex flex-wrap content-center bg-gray-100 dark:bg-gray-800 p-2 rounded h-48 w-64">
      <div className="w-1/3 bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center border border-yellow-400">
        1
      </div>
      <div className="w-1/3 bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center border border-yellow-400">
        2
      </div>
      <div className="w-1/3 bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center border border-yellow-400">
        3
      </div>
      <div className="w-1/3 bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center border border-yellow-400">
        4
      </div>
      <div className="w-1/3 bg-yellow-300 dark:bg-yellow-700 p-4 rounded text-center border border-yellow-400">
        5
      </div>
      {/* 行はコンテナの中央に配置される */}
    </div>
  );
};

const ContentBetweenExample: React.FC = () => {
  return (
    <div className="flex flex-wrap content-between bg-gray-100 dark:bg-gray-800 p-2 rounded h-48 w-64">
      <div className="w-1/3 bg-red-300 dark:bg-red-700 p-4 rounded text-center border border-red-400">
        1
      </div>
      <div className="w-1/3 bg-red-300 dark:bg-red-700 p-4 rounded text-center border border-red-400">
        2
      </div>
      <div className="w-1/3 bg-red-300 dark:bg-red-700 p-4 rounded text-center border border-red-400">
        3
      </div>
      <div className="w-1/3 bg-red-300 dark:bg-red-700 p-4 rounded text-center border border-red-400">
        4
      </div>
      <div className="w-1/3 bg-red-300 dark:bg-red-700 p-4 rounded text-center border border-red-400">
        5
      </div>
      {/* 最初の行は上端、最後の行は下端に配置され、残りの行がその間に均等に配置される */}
    </div>
  );
};

const ContentAroundExample: React.FC = () => {
  return (
    <div className="flex flex-wrap content-around bg-gray-100 dark:bg-gray-800 p-2 rounded h-48 w-64">
      <div className="w-1/3 bg-purple-300 dark:bg-purple-700 p-4 rounded text-center border border-purple-400">
        1
      </div>
      <div className="w-1/3 bg-purple-300 dark:bg-purple-700 p-4 rounded text-center border border-purple-400">
        2
      </div>
      <div className="w-1/3 bg-purple-300 dark:bg-purple-700 p-4 rounded text-center border border-purple-400">
        3
      </div>
      <div className="w-1/3 bg-purple-300 dark:bg-purple-700 p-4 rounded text-center border border-purple-400">
        4
      </div>
      <div className="w-1/3 bg-purple-300 dark:bg-purple-700 p-4 rounded text-center border border-purple-400">
        5
      </div>
      {/* 各行の上下に均等なスペースが分配される (行間のスペースは端のスペースの2倍になる) */}
    </div>
  );
};

const ContentEvenlyExample: React.FC = () => {
  return (
    <div className="flex flex-wrap content-evenly bg-gray-100 dark:bg-gray-800 p-2 rounded h-48 w-64">
      <div className="w-1/3 bg-pink-300 dark:bg-pink-700 p-4 rounded text-center border border-pink-400">
        1
      </div>
      <div className="w-1/3 bg-pink-300 dark:bg-pink-700 p-4 rounded text-center border border-pink-400">
        2
      </div>
      <div className="w-1/3 bg-pink-300 dark:bg-pink-700 p-4 rounded text-center border border-pink-400">
        3
      </div>
      <div className="w-1/3 bg-pink-300 dark:bg-pink-700 p-4 rounded text-center border border-pink-400">
        4
      </div>
      <div className="w-1/3 bg-pink-300 dark:bg-pink-700 p-4 rounded text-center border border-pink-400">
        5
      </div>
      {/* 各行間および最初/最後の行とコンテナ端の間のスペースがすべて均等になるように分配される */}
    </div>
  );
};

const ContentStretchExample: React.FC = () => {
  // 注意: content-stretch は v3.3+ で、かつアイテムに高さが指定されていない場合に効果があります。
  //       Grid レイアウトでより一般的に使用されます。Flexbox での効果は限定的です。
  return (
    <div className="flex flex-wrap content-stretch bg-gray-100 dark:bg-gray-800 p-2 rounded h-48 w-64">
      <div className="w-1/3 bg-indigo-300 dark:bg-indigo-700 p-4 rounded text-center border border-indigo-400">
        Stretch? 1
      </div>
      <div className="w-1/3 bg-indigo-300 dark:bg-indigo-700 p-4 rounded text-center border border-indigo-400">
        Stretch? 2
      </div>
      <div className="w-1/3 bg-indigo-300 dark:bg-indigo-700 p-4 rounded text-center border border-indigo-400">
        Stretch? 3
      </div>
      <div className="w-1/3 bg-indigo-300 dark:bg-indigo-700 p-4 rounded text-center border border-indigo-400">
        Stretch? 4
      </div>
      <div className="w-1/3 bg-indigo-300 dark:bg-indigo-700 p-4 rounded text-center border border-indigo-400">
        Stretch? 5
      </div>
      {/* Flexbox では auto サイズのアイテムが行の高さを埋めるように拡大する (content-stretch 自体の直接効果ではない) */}
    </div>
  );
};

// ページコンポーネント本体
const AlignContentPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Flexbox & Grid: Align Content (複数行/列の交差軸揃え)';
  const links = [
    {
      title: 'Tailwind CSS: Align Content',
      url: 'https://tailwindcss.com/docs/align-content',
    },
    {
      title: 'MDN: align-content',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/align-content',
    },
  ];

  // コードスニペットを定義
  const contentStartHtml = `<div class="flex flex-wrap content-start h-48 ...">...</div>`;
  const contentEndHtml = `<div class="flex flex-wrap content-end h-48 ...">...</div>`;
  const contentCenterHtml = `<div class="flex flex-wrap content-center h-48 ...">...</div>`;
  const contentBetweenHtml = `<div class="flex flex-wrap content-between h-48 ...">...</div>`;
  const contentAroundHtml = `<div class="flex flex-wrap content-around h-48 ...">...</div>`;
  const contentEvenlyHtml = `<div class="flex flex-wrap content-evenly h-48 ...">...</div>`;
  const contentStretchHtml = `<div class="flex flex-wrap content-stretch h-48 ...">...</div>`; // v3.3+

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Align Content - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Align Content utility in Tailwind CSS. Examples and usage details for Align Content." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              フレックスコンテナまたはグリッドコンテナ内で、アイテムが複数行または複数列に折り返した場合に、それらの行/列全体を交差軸
              (cross axis) 方向 (通常は垂直方向)
              にどのように配置し、スペースを分配するかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>align-content</code> プロパティを制御します。
            </p>
            <p>
              <strong>注意:</strong>{' '}
              このプロパティは、アイテムが複数行/列になっている場合にのみ効果があります (例: Flexbox
              で <code>flex-wrap: wrap;</code> が設定されている、または Grid
              で複数行が存在する)。単一行/列の場合は <code>align-items</code> を使用します。
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
              <code>content-{'{alignment}'}</code>{' '}
              の形式でクラスをフレックスコンテナまたはグリッドコンテナに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>content-start</code>
                </strong>
                : 行/列をコンテナの開始位置 (通常は上端) に寄せます。
              </li>
              <li>
                <strong>
                  <code>content-end</code>
                </strong>
                : 行/列をコンテナの終了位置 (通常は下端) に寄せます。
              </li>
              <li>
                <strong>
                  <code>content-center</code>
                </strong>
                : 行/列をコンテナの中央に配置します。
              </li>
              <li>
                <strong>
                  <code>content-between</code>
                </strong>
                :
                最初と最後の行/列をコンテナの両端に配置し、残りの行/列間のスペースを均等に分配します。
              </li>
              <li>
                <strong>
                  <code>content-around</code>
                </strong>
                : 各行/列の上下 (または左右)
                に均等なスペースを分配します。結果として、行/列間のスペースはコンテナ端と行/列間のスペースの2倍になります。
              </li>
              <li>
                <strong>
                  <code>content-evenly</code>
                </strong>
                :
                すべての行/列間、および最初/最後の行/列とコンテナ端の間のスペースがすべて均等になるように分配します。
              </li>
              <li>
                <strong>
                  <code>content-stretch</code>
                </strong>
                : デフォルト
                (Grid)。行/列がコンテナの交差軸方向のスペースを埋めるように引き伸ばされます
                (アイテムにサイズ指定がない場合)。Flexbox での効果は限定的です。 (v3.3+)
              </li>
            </ul>
            {/* Tailwind v3.3+ */}
            <p className="mt-4">
              書字方向に対応する <code>content-normal</code> (デフォルトの揃え方、通常{' '}
              <code>stretch</code>), <code>content-baseline</code> もあります (v3.3+)。
              <code>content-baseline</code> は Flexbox でのみ意味を持ちます。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            使用例 (Flexbox with wrap)
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            <code>flex flex-wrap</code> コンテナに対する各 align-content
            値の適用例。コンテナには高さが必要です。
          </p>
          <div className="space-y-6">
            {/* Start */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                content-start
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{contentStartHtml}</code>
              </pre>
              <ContentStartExample />
            </div>
            {/* End */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">content-end</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{contentEndHtml}</code>
              </pre>
              <ContentEndExample />
            </div>
            {/* Center */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                content-center
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{contentCenterHtml}</code>
              </pre>
              <ContentCenterExample />
            </div>
            {/* Between */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                content-between
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{contentBetweenHtml}</code>
              </pre>
              <ContentBetweenExample />
            </div>
            {/* Around */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                content-around
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{contentAroundHtml}</code>
              </pre>
              <ContentAroundExample />
            </div>
            {/* Evenly */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                content-evenly
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{contentEvenlyHtml}</code>
              </pre>
              <ContentEvenlyExample />
            </div>
            {/* Stretch */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                content-stretch (v3.3+)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{contentStretchHtml}</code>
              </pre>
              <ContentStretchExample />
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                (Flexbox では通常、アイテムの高さが auto の場合にスペースを埋めるように拡大します)
              </p>
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
            を使って、画面サイズに応じて交差軸方向の揃え方を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>content-start md:content-center</code>{' '}
              はデフォルトで上揃え、中程度の画面サイズ以上で中央揃えにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="flex flex-wrap content-start md:content-center h-48 ...">
  {/* ... items */}
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
                <code>align-content</code> はフレックスコンテナまたはグリッドコンテナに適用します。
              </li>
              <li>
                このプロパティは、アイテムが複数行/列に折り返している場合にのみ効果があります。単一行/列の場合は効果がなく、代わりに{' '}
                <code>align-items</code> がアイテムの揃え方を制御します。
              </li>
              <li>
                効果を確認するには、コンテナに交差軸方向のサイズ (通常は高さ <code>h-*</code>)
                が必要です。
              </li>
              <li>
                Grid レイアウトにおけるデフォルトは <code>content-stretch</code> ですが、Tailwind の{' '}
                <code>content-stretch</code> クラスは v3.3 で追加されました。
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
                <code>flex-wrap</code> (<code>flex-wrap</code>, <code>flex-wrap-reverse</code>):
                Flexbox でアイテムの折り返しを有効にします。<code>align-content</code>{' '}
                が効果を持つ条件です。
              </li>
              <li>
                <code>align-items</code> (<code>items-*</code>):
                単一行/列の場合の、交差軸方向のアイテムの揃え方を制御します。
              </li>
              <li>
                <code>justify-content</code> (<code>justify-*</code>):
                主軸方向のアイテムの揃え方やスペース配分を制御します。
              </li>
              <li>
                <code>height</code> (<code>h-*</code>): コンテナの高さを設定します。
                <code>align-content</code> の効果を確認するために必要になることが多いです。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default AlignContentPage;

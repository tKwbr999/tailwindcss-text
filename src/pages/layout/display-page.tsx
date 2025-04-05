import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout'; // ArticleLayout をインポート
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const BlockExample: React.FC = () => {
  return (
    <div>
      <span className="block bg-blue-200 dark:bg-blue-900 p-2 rounded mb-2">display: block;</span>
      <span className="block bg-blue-200 dark:bg-blue-900 p-2 rounded">次のブロック要素</span>
    </div>
  );
};

const InlineBlockExample: React.FC = () => {
  return (
    <div>
      テキストの途中にある
      <span className="inline-block bg-green-200 dark:bg-green-900 p-2 rounded mx-1">
        inline-block
      </span>
      要素。幅と高さ、マージン/パディングが適用されます。
      <span className="inline-block bg-green-200 dark:bg-green-900 p-4 rounded mx-1">
        別の inline-block
      </span>
    </div>
  );
};

const InlineExample: React.FC = () => {
  return (
    <div>
      テキストの途中にある
      <span className="inline bg-yellow-200 dark:bg-yellow-900 p-2 rounded mx-1">inline</span>
      要素。幅/高さや垂直マージン/パディングは通常無視されます。
      <span className="inline bg-yellow-200 dark:bg-yellow-900 px-4 rounded mx-1">別の inline</span>
    </div>
  );
};

const FlexExample: React.FC = () => {
  return (
    <div className="flex bg-purple-200 dark:bg-purple-900 p-2 rounded space-x-2">
      <div className="bg-purple-400 dark:bg-purple-700 p-2 rounded">Flex Item 1</div>
      <div className="bg-purple-400 dark:bg-purple-700 p-2 rounded">Flex Item 2</div>
    </div>
  );
};

const InlineFlexExample: React.FC = () => {
  return (
    <div>
      テキストの途中にある
      <div className="inline-flex bg-pink-200 dark:bg-pink-900 p-2 rounded space-x-2 mx-1">
        <div className="bg-pink-400 dark:bg-pink-700 p-1 rounded">Inline Flex 1</div>
        <div className="bg-pink-400 dark:bg-pink-700 p-1 rounded">Inline Flex 2</div>
      </div>
      コンテナ。
    </div>
  );
};

const GridExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-2 bg-teal-200 dark:bg-teal-900 p-2 rounded">
      <div className="bg-teal-400 dark:bg-teal-700 p-2 rounded">Grid Item 1</div>
      <div className="bg-teal-400 dark:bg-teal-700 p-2 rounded">Grid Item 2</div>
      <div className="bg-teal-400 dark:bg-teal-700 p-2 rounded">Grid Item 3</div>
      <div className="bg-teal-400 dark:bg-teal-700 p-2 rounded col-span-2">
        Grid Item 4 (span 2)
      </div>
      <div className="bg-teal-400 dark:bg-teal-700 p-2 rounded">Grid Item 5</div>
    </div>
  );
};

const InlineGridExample: React.FC = () => {
  return (
    <div>
      テキストの途中にある
      <div className="inline-grid grid-cols-2 gap-1 bg-cyan-200 dark:bg-cyan-900 p-2 rounded mx-1">
        <div className="bg-cyan-400 dark:bg-cyan-700 p-1 rounded">Inline Grid 1</div>
        <div className="bg-cyan-400 dark:bg-cyan-700 p-1 rounded">Inline Grid 2</div>
        <div className="bg-cyan-400 dark:bg-cyan-700 p-1 rounded">Inline Grid 3</div>
      </div>
      コンテナ。
    </div>
  );
};

const ContentsExample: React.FC = () => {
  // 注意: 'contents' の効果は視覚的に示しにくい。
  //       親要素のスタイルが子要素に直接適用されるかのように振る舞う。
  return (
    <div className="flex space-x-4 text-center">
      <div className="flex-1 bg-gray-300 dark:bg-gray-700 p-2 rounded">通常のDiv</div>
      <div className="contents">
        {' '}
        {/* このDiv自体はレイアウトに影響しない */}
        <div className="flex-1 bg-orange-300 dark:bg-orange-700 p-2 rounded">Contents内のDiv 1</div>
        <div className="flex-1 bg-orange-300 dark:bg-orange-700 p-2 rounded">Contents内のDiv 2</div>
      </div>
      <div className="flex-1 bg-gray-300 dark:bg-gray-700 p-2 rounded">通常のDiv</div>
    </div>
  );
};

const HiddenExample: React.FC = () => {
  return (
    <div>
      <div className="bg-red-200 dark:bg-red-900 p-2 rounded">この要素は表示されます。</div>
      <div className="hidden bg-red-200 dark:bg-red-900 p-2 rounded my-2">
        この要素は非表示です (display: none)。
      </div>
      <div className="bg-red-200 dark:bg-red-900 p-2 rounded">この要素も表示されます。</div>
    </div>
  );
};

// ページコンポーネント本体
const DisplayPage: React.FC = () => {
  // コードスニペットを定義
  const blockHtml = `<span class="block ...">display: block;</span>`;
  const inlineBlockHtml = `<span class="inline-block ...">inline-block</span>`;
  const inlineHtml = `<span class="inline ...">inline</span>`;
  const flexHtml = `<div class="flex ...">...</div>`;
  const inlineFlexHtml = `<div class="inline-flex ...">...</div>`;
  const gridHtml = `<div class="grid grid-cols-3 gap-4 ...">...</div>`;
  const inlineGridHtml = `<div class="inline-grid grid-cols-2 gap-2 ...">...</div>`;
  const contentsHtml = `<div class="contents">...</div>`;
  const tableHtml = `
<div class="table w-full ...">
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell ...">A1</div>
      <div class="table-cell ...">B1</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">A2</div>
      <div class="table-cell ...">B2</div>
    </div>
  </div>
</div>
  `.trim(); // table関連は複雑なので代表例のみ
  const hiddenHtml = `<div class="hidden ...">非表示</div>`;

  // 参照リンクの定義を追加
  const links = [
    {
      title: 'Tailwind CSS: Display',
      url: 'https://tailwindcss.com/docs/display',
    },
    {
      title: 'MDN: display',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/display',
    },
  ];

  return (
    <ArticleLayout title="Layout: Display (表示タイプ)" links={links}>
      <Helmet>
        <title>Layout: Display - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Layout: Display utility in Tailwind CSS. Examples and usage details for Layout: Display."
        />
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
            要素の表示タイプ (外側の表示タイプと内側の表示タイプ)
            を制御するためのユーティリティクラスです。要素がどのようにレイアウトフローに参加し、子要素をどのように配置するかを決定します。
          </p>
          <p>
            CSS の <code>display</code> プロパティを制御します。
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
            要素に適用したい <code>display</code> 値に対応するクラスを指定します。
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4 columns-2">
            <li>
              <strong>
                <code>block</code>
              </strong>
              : ブロックレベル要素。前後に改行が入り、幅と高さを持ちます。
            </li>
            <li>
              <strong>
                <code>inline-block</code>
              </strong>
              :
              インラインブロック要素。テキストのようにインラインに配置されますが、幅、高さ、垂直マージン/パディングを持ちます。
            </li>
            <li>
              <strong>
                <code>inline</code>
              </strong>
              :
              インライン要素。テキストの一部として扱われ、幅/高さや垂直マージン/パディングは通常適用されません。
            </li>
            <li>
              <strong>
                <code>flex</code>
              </strong>
              : ブロックレベルのフレックスコンテナ。子要素をフレックスアイテムとして配置します。
            </li>
            <li>
              <strong>
                <code>inline-flex</code>
              </strong>
              : インラインレベルのフレックスコンテナ。
            </li>
            <li>
              <strong>
                <code>grid</code>
              </strong>
              : ブロックレベルのグリッドコンテナ。子要素をグリッドアイテムとして配置します。
            </li>
            <li>
              <strong>
                <code>inline-grid</code>
              </strong>
              : インラインレベルのグリッドコンテナ。
            </li>
            <li>
              <strong>
                <code>contents</code>
              </strong>
              :
              要素自体はレイアウトツリーから削除され、子要素が親要素に直接属するかのように扱われます
              (注意が必要)。
            </li>
            <li>
              <strong>
                <code>table</code>
              </strong>
              ,{' '}
              <strong>
                <code>inline-table</code>
              </strong>
              ,{' '}
              <strong>
                <code>table-caption</code>
              </strong>
              ,{' '}
              <strong>
                <code>table-cell</code>
              </strong>
              ,{' '}
              <strong>
                <code>table-column</code>
              </strong>
              ,{' '}
              <strong>
                <code>table-column-group</code>
              </strong>
              ,{' '}
              <strong>
                <code>table-footer-group</code>
              </strong>
              ,{' '}
              <strong>
                <code>table-header-group</code>
              </strong>
              ,{' '}
              <strong>
                <code>table-row-group</code>
              </strong>
              ,{' '}
              <strong>
                <code>table-row</code>
              </strong>
              : テーブルレイアウト関連。
            </li>
            <li>
              <strong>
                <code>flow-root</code>
              </strong>
              : 新しいブロック整形コンテキスト (BFC)
              を確立します。フロートのクリアなどに使われます。
            </li>
            <li>
              <strong>
                <code>hidden</code>
              </strong>
              : 要素を非表示にします (<code>display: none;</code>)。レイアウトにも影響を与えません。
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* 各 Display 値の例 Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
            使用例
          </CardTitle>
          <CardDescription className="text-stone-600 dark:text-stone-400">
            主要な display 値の適用例。
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Block */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">block</h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code>{blockHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <BlockExample />
            </div>
          </div>
          {/* Inline Block */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">inline-block</h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code>{inlineBlockHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <InlineBlockExample />
            </div>
          </div>
          {/* Inline */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">inline</h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code>{inlineHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <InlineExample />
            </div>
          </div>
          {/* Flex */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">flex</h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code>{flexHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <FlexExample />
            </div>
          </div>
          {/* Inline Flex */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">inline-flex</h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code>{inlineFlexHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <InlineFlexExample />
            </div>
          </div>
          {/* Grid */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">grid</h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code>{gridHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <GridExample />
            </div>
          </div>
          {/* Inline Grid */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">inline-grid</h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code>{inlineGridHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <InlineGridExample />
            </div>
          </div>
          {/* Contents */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">contents</h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code>{contentsHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <ContentsExample />
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-2">
              注意: <code>contents</code> を適用した要素 (中央の2つのオレンジのボックスの親)
              はレイアウト上存在しないかのように扱われ、子要素が直接親の Flexbox (または Grid)
              レイアウトに参加します。アクセシビリティへの影響に注意が必要です。
            </p>
          </div>
          {/* Table (簡易例) */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
              table (関連クラス)
            </h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{tableHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              {/* TableExample コンポーネントは複雑になるため省略。HTML構造を参照 */}
              <div className="table w-full border border-collapse border-gray-400">
                <div className="table-row-group">
                  <div className="table-row">
                    <div className="table-cell border border-gray-300 p-2">A1</div>
                    <div className="table-cell border border-gray-300 p-2">B1</div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell border border-gray-300 p-2">A2</div>
                    <div className="table-cell border border-gray-300 p-2">B2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hidden */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">hidden</h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code>{hiddenHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <HiddenExample />
            </div>
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
            を使って、特定の画面サイズでのみ <code>display</code>{' '}
            プロパティを変更できます。これはレスポンシブデザインで非常に一般的です。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-stone-700 dark:text-stone-300 mb-4">
            例えば、<code>block md:flex</code>{' '}
            はデフォルトでブロック要素として表示し、中程度の画面サイズ以上でフレックスコンテナとして表示します。
            <code>hidden md:block</code>{' '}
            はモバイルで非表示にし、中画面以上で表示するためによく使われます。
          </p>
          {/* コード表示 */}
          <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
            <code className="language-html">
              {`
{/* デフォルトはブロック、md以上でフレックス */}
<div class="block md:flex ...">...</div>

{/* デフォルトは非表示、lg以上でグリッド */}
<div class="hidden lg:grid ...">...</div>
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
              <code>display</code>{' '}
              プロパティは要素の基本的なレイアウト挙動を決定するため、他のレイアウト関連ユーティリティ
              (Flexbox, Grid, Position など) と密接に関連します。
            </li>
            <li>
              <code>hidden</code> (<code>display: none;</code>)
              は要素を完全に非表示にし、レイアウト上のスペースも占有しません。要素を視覚的に隠しつつスペースは維持したい場合は{' '}
              <code>invisible</code> (<code>visibility: hidden;</code>) を使用します。
            </li>
            <li>
              <code>contents</code>{' '}
              は要素のボックス自体を無視させるため、予期しないレイアウトやアクセシビリティの問題を引き起こす可能性があります。慎重に使用してください。
            </li>
            <li>
              テーブル関連の display 値 (<code>table</code>, <code>table-cell</code> など) は、HTML
              の <code>&lt;table&gt;</code>{' '}
              要素を使わずにテーブルのようなレイアウトを模倣するために使用できますが、通常は Flexbox
              や Grid の方が柔軟性が高いです。
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
              Flexbox 関連 (<code>flex-direction</code>, <code>justify-content</code>,{' '}
              <code>align-items</code> など): <code>flex</code> または <code>inline-flex</code>{' '}
              と組み合わせて使用します。
            </li>
            <li>
              Grid 関連 (<code>grid-template-columns</code>, <code>grid-template-rows</code>,{' '}
              <code>gap</code> など): <code>grid</code> または <code>inline-grid</code>{' '}
              と組み合わせて使用します。
            </li>
            <li>
              <code>visibility</code> (<code>visible</code>, <code>invisible</code>):
              要素の可視性を制御します (スペースは維持されます)。
            </li>
            <li>
              <code>position</code> (<code>static</code>, <code>relative</code>,{' '}
              <code>absolute</code>, <code>fixed</code>, <code>sticky</code>):
              要素の配置方法を制御します。
            </li>
          </ul>
        </CardContent>
      </Card>
    </ArticleLayout>
  );
};

export default DisplayPage;

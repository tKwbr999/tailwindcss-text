import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ArticleLayout from '@/components/layout/ArticleLayout'; // ArticleLayout をインポート

// 各コードサンプルに対応するReact実装コンポーネント
// z-index は position が static 以外の場合に効果があります。

const ZIndexExample: React.FC = () => {
  return (
    <div className="relative h-48 bg-gray-100 dark:bg-gray-800 p-4 rounded border border-gray-300 flex items-center justify-center">
      <div className="absolute z-10 top-4 left-4 w-24 h-24 bg-red-400 dark:bg-red-600 rounded shadow flex items-center justify-center text-white font-bold">
        z-10
      </div>
      <div className="absolute z-20 top-8 left-8 w-24 h-24 bg-yellow-400 dark:bg-yellow-600 rounded shadow flex items-center justify-center text-white font-bold">
        z-20
      </div>
      <div className="absolute z-30 top-12 left-12 w-24 h-24 bg-green-400 dark:bg-green-600 rounded shadow flex items-center justify-center text-white font-bold">
        z-30
      </div>
      <div className="absolute z-0 top-16 left-16 w-24 h-24 bg-blue-400 dark:bg-blue-600 rounded shadow flex items-center justify-center text-white font-bold">
        z-0
      </div>
    </div>
  );
};

const ZAutoExample: React.FC = () => {
  return (
    <div className="relative h-48 bg-gray-100 dark:bg-gray-800 p-4 rounded border border-gray-300 flex items-center justify-center">
      <div className="absolute z-auto top-4 left-4 w-24 h-24 bg-purple-400 dark:bg-purple-600 rounded shadow flex items-center justify-center text-white font-bold">
        z-auto (0)
      </div>
      <div className="absolute z-10 top-8 left-8 w-24 h-24 bg-pink-400 dark:bg-pink-600 rounded shadow flex items-center justify-center text-white font-bold">
        z-10
      </div>
      {/* z-auto は通常 z-0 と同じスタックレベル。後から記述された z-10 が上に表示される */}
    </div>
  );
};

const NegativeZIndexExample: React.FC = () => {
  return (
    <div className="relative h-48 bg-gray-100 dark:bg-gray-800 p-4 rounded border border-gray-300 flex items-center justify-center">
      <div className="absolute z-10 top-8 left-8 w-24 h-24 bg-cyan-400 dark:bg-cyan-600 rounded shadow flex items-center justify-center text-white font-bold">
        z-10
      </div>
      <div className="absolute -z-10 top-4 left-4 w-32 h-32 bg-orange-400 dark:bg-orange-600 rounded shadow flex items-center justify-center text-white font-bold">
        -z-10 (背後)
      </div>
      {/* -z-10 は親要素の背後に配置される可能性がある (親がスタッキングコンテキストを作る場合) */}
      {/* この例では z-10 の要素より下に表示される */}
      <p className="absolute bottom-2 right-2 text-xs text-gray-500">親要素の背景が見える</p>
    </div>
  );
};

// ページコンポーネント本体
const ZIndexPage: React.FC = () => {
  // コードスニペットを定義
  const zIndexHtml = `
<div class="relative h-48 ...">
  <div class="absolute z-10 top-4 left-4 ...">z-10</div>
  <div class="absolute z-20 top-8 left-8 ...">z-20</div> {/* z-10 より上 */}
  <div class="absolute z-30 top-12 left-12 ...">z-30</div> {/* z-20 より上 */}
  <div class="absolute z-0 top-16 left-16 ...">z-0</div> {/* 一番下 */}
</div>
  `.trim();

  const zAutoHtml = `
<div class="relative h-48 ...">
  <div class="absolute z-auto top-4 left-4 ...">z-auto (0)</div>
  <div class="absolute z-10 top-8 left-8 ...">z-10</div> {/* z-auto より上 */}
</div>
  `.trim();

  const negativeZIndexHtml = `
<div class="relative h-48 ...">
  <div class="absolute z-10 ...">z-10</div>
  <div class="absolute -z-10 ...">-z-10 (背後)</div>
</div>
  `.trim();

  // 参照リンクの定義を追加
  const links = [
    {
      title: 'Tailwind CSS: Z-Index',
      url: 'https://tailwindcss.com/docs/z-index',
    },
    {
      title: 'MDN: z-index',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/z-index',
    },
    {
      title: 'MDN: Stacking context (関連概念)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context',
    },
  ];

  return (
    <ArticleLayout enTitle="Layout: Z-Index" jaTitle="重ね順" links={links}>
      <Helmet>
        <title>Layout: Z-Index - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Layout: Z-Index utility in Tailwind CSS. Examples and usage details for Layout: Z-Index."
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
            配置された要素 (position が <code>static</code> 以外) のスタッキング順序
            (重ね合わせの順序、z軸方向の順序)
            を制御するためのユーティリティクラスです。数値が大きい要素ほど手前に表示されます。
          </p>
          <p>
            CSS の <code>z-index</code> プロパティを制御します。
          </p>
          <p>
            <code>z-index</code> は、同じスタッキングコンテキスト (stacking context)
            内にある要素同士の重なり順序にのみ影響します。異なるスタッキングコンテキスト間の要素の重なり順は、コンテキスト自体の重なり順によって決まります。
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
            <code>z-{'{index}'}</code> の形式でクラスを配置された要素 (<code>relative</code>,{' '}
            <code>absolute</code>, <code>fixed</code>, <code>sticky</code>) に適用します。
          </p>
          <p>デフォルトで用意されている値:</p>
          <ul className="list-disc list-inside space-y-1 pl-4 columns-2">
            <li>
              <strong>
                <code>z-0</code>
              </strong>
            </li>
            <li>
              <strong>
                <code>z-10</code>
              </strong>
            </li>
            <li>
              <strong>
                <code>z-20</code>
              </strong>
            </li>
            <li>
              <strong>
                <code>z-30</code>
              </strong>
            </li>
            <li>
              <strong>
                <code>z-40</code>
              </strong>
            </li>
            <li>
              <strong>
                <code>z-50</code>
              </strong>
            </li>
            <li>
              <strong>
                <code>z-auto</code>
              </strong>{' '}
              (<code>z-index: auto;</code> - 通常は <code>0</code> と同じスタックレベル)
            </li>
          </ul>
          <p className="mt-4">
            負の値 (例: <code>-z-10</code>)
            も使用でき、要素を親要素や他の要素の背後に配置するのに役立ちます。任意の値 (例:{' '}
            <code>z-[100]</code>) も使用可能です (Tailwind JIT モード)。
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
            異なる z-index 値を持つ absolute 配置要素の重ね順。
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Positive Z-Index */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">正の Z-Index</h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{zIndexHtml}</code>
            </pre>
            <ZIndexExample />
          </div>
          {/* Z-Auto */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">Z-Auto</h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{zAutoHtml}</code>
            </pre>
            <ZAutoExample />
          </div>
          {/* Negative Z-Index */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">負の Z-Index</h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{negativeZIndexHtml}</code>
            </pre>
            <NegativeZIndexExample />
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
            を使って、特定の画面サイズでのみ <code>z-index</code> を変更できます。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-stone-700 dark:text-stone-300 mb-4">
            例えば、<code>z-10 md:z-30</code> はデフォルトで <code>z-10</code>
            、中程度の画面サイズ以上で <code>z-30</code> になります。
          </p>
          {/* コード表示 */}
          <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
            <code className="language-html">
              {`
<div class="absolute z-10 md:z-30 ...">
  ...
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
              <code>z-index</code> は、<code>position</code> が <code>static</code> (デフォルト)
              以外の要素にのみ効果があります。
            </li>
            <li>
              要素の重なり順は、同じスタッキングコンテキスト内でのみ <code>z-index</code>{' '}
              の値によって比較されます。
            </li>
            <li>
              新しいスタッキングコンテキストは、<code>position</code> が <code>static</code> 以外で{' '}
              <code>z-index</code> が <code>auto</code> 以外の場合や、<code>opacity</code> が 1
              未満の場合、<code>transform</code>, <code>filter</code>, <code>perspective</code>,{' '}
              <code>clip-path</code>, <code>mask</code> が適用されている場合、そして{' '}
              <code>isolation: isolate;</code> (<code>isolate</code> クラス)
              が指定されている場合などに作成されます。
            </li>
            <li>
              負の <code>z-index</code> を持つ要素は、そのスタッキングコンテキスト内で{' '}
              <code>z-index: auto;</code> (または <code>z-0</code>)
              の要素よりも背後に配置されます。親要素がスタッキングコンテキストを形成する場合、親要素の背景よりもさらに背後に配置されることがあります。
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
              <code>position</code> (<code>static</code>, <code>relative</code>,{' '}
              <code>absolute</code>, <code>fixed</code>, <code>sticky</code>):
              要素の配置方法を設定します。<code>z-index</code> が効果を持つための前提条件です。
            </li>
            <li>
              <code>isolation</code> (<code>isolate</code>, <code>isolation-auto</code>):
              要素が新しいスタッキングコンテキストを作成するかどうかを制御します。
            </li>
          </ul>
        </CardContent>
      </Card>
    </ArticleLayout>
  );
};

export default ZIndexPage;

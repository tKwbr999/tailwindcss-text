import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ArticleLayout from '@/components/layout/ArticleLayout'; // ArticleLayout をインポート

// 各コードサンプルに対応するReact実装コンポーネント

const FloatLeftExample: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-hidden"> {/* overflow-hidden で clearfix */}
      <img
        className="float-left w-24 h-24 mr-4 mb-1 rounded" // 右と下にマージンを追加
        src="https://via.placeholder.com/150/a5f3fc/0e7490?text=Left"
        alt="Float Left"
      />
      <p className="text-gray-700 dark:text-gray-300">
        このテキストは左にフロートされた画像の周りに回り込みます。
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
};

const FloatRightExample: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-hidden"> {/* overflow-hidden で clearfix */}
      <img
        className="float-right w-24 h-24 ml-4 mb-1 rounded" // 左と下にマージンを追加
        src="https://via.placeholder.com/150/fecaca/7f1d1d?text=Right"
        alt="Float Right"
      />
      <p className="text-gray-700 dark:text-gray-300">
        このテキストは右にフロートされた画像の周りに回り込みます。
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
      </p>
    </div>
  );
};

const FloatNoneExample: React.FC = () => {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <img
          className="float-none w-24 h-24 mb-2 rounded mx-auto" // 中央揃えしてみる
          src="https://via.placeholder.com/150/fef08a/854d0e?text=None"
          alt="Float None"
        />
        <p className="text-gray-700 dark:text-gray-300 clear-both"> {/* clear-both を追加 */}
          このテキストはフロートされていない画像の下に表示されます。<code>float-none</code> は要素のフロートを解除します。
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    );
  };


// ページコンポーネント本体
const FloatsPage: React.FC = () => {
  // コードスニペットを定義
  const floatLeftHtml = `
<div class="overflow-hidden ..."> {/* clearfix */}
  <img class="float-left w-24 h-24 mr-4 mb-1 ..." src="..." alt="Float Left" />
  <p>
    このテキストは左にフロートされた画像の周りに回り込みます...
  </p>
</div>
  `.trim();

  const floatRightHtml = `
<div class="overflow-hidden ..."> {/* clearfix */}
  <img class="float-right w-24 h-24 ml-4 mb-1 ..." src="..." alt="Float Right" />
  <p>
    このテキストは右にフロートされた画像の周りに回り込みます...
  </p>
</div>
  `.trim();

  const floatNoneHtml = `
<div>
  <img class="float-none w-24 h-24 mb-2 mx-auto ..." src="..." alt="Float None" />
  <p class="clear-both ..."> {/* clear で回り込み解除 */}
    このテキストはフロートされていない画像の下に表示されます...
  </p>
</div>
  `.trim();

// 参照リンクの定義を追加
const links = [
  {
    title: 'Tailwind CSS: Floats',
    url: 'https://tailwindcss.com/docs/float',
  },
  {
    title: 'MDN: float',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/float',
  },
  {
    title: 'Tailwind CSS: Clear (関連)',
    url: 'https://tailwindcss.com/docs/clear',
  },
];

  return (
    <ArticleLayout title="Layout: Floats (フロート)" links={links}>
        {/* 概要 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              概要
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素をコンテナの左端または右端に配置し、後続のコンテンツがその周りに回り込むようにするためのユーティリティクラスです。主に画像とテキストを組み合わせたレイアウトで使用されます。
            </p>
            <p>
              CSS の <code>float</code> プロパティを制御します。
            </p>
             <p className="text-sm text-orange-700 dark:text-orange-400">
              <strong>注意:</strong> Flexbox や Grid が主流となった現代の Web 開発では、レイアウト目的での <code>float</code> の使用は推奨されません。これらは主にレガシーな状況や、テキストの回り込みが必要な特定のケース (例: 記事中の画像) で使用されます。レイアウトには Flexbox (<code>flex</code>) や Grid (<code>grid</code>) の使用を検討してください。
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
              <code>float-{'{direction}'}</code> の形式でクラスを指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>float-right</code></strong>: 要素をコンテナの右端にフロートさせます。</li>
              <li><strong><code>float-left</code></strong>: 要素をコンテナの左端にフロートさせます。</li>
              <li><strong><code>float-none</code></strong>: 要素のフロートを解除します (デフォルトの挙動に戻します)。</li>
              {/* Tailwind v3.3+ */}
              <li><strong><code>float-start</code></strong>: 書字方向に応じて、要素をコンテナの開始端 (通常は左) にフロートさせます (LTR の場合は <code>float-left</code> と同じ)。</li>
              <li><strong><code>float-end</code></strong>: 書字方向に応じて、要素をコンテナの終了端 (通常は右) にフロートさせます (LTR の場合は <code>float-right</code> と同じ)。</li>
            </ul>
             <p className="mt-4">
              フロートされた要素の後に続くコンテンツの回り込みを解除するには、<code>clear</code> ユーティリティ (例: <code>clear-left</code>, <code>clear-right</code>, <code>clear-both</code>) を使用します。また、フロートを含む親要素が適切に高さを認識できるように、clearfix と呼ばれる手法が必要になることがあります (例: 親要素に <code>overflow-hidden</code> や <code>flow-root</code> を適用する)。
            </p>
          </CardContent>
        </Card>

        {/* Float Left Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              Float Left
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>float-left</code> で要素を左にフロートさせます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{floatLeftHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <FloatLeftExample />
            </div>
          </CardContent>
        </Card>

        {/* Float Right Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              Float Right
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>float-right</code> で要素を右にフロートさせます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{floatRightHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <FloatRightExample />
            </div>
          </CardContent>
        </Card>

        {/* Float None Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              Float None
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>float-none</code> で要素のフロートを解除します。
            </CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-stone-700 dark:text-stone-300 mb-4">
              この例では、画像はフロートせず、テキストは <code>clear-both</code> によって画像の回り込みを解除されています。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{floatNoneHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <FloatNoneExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみフロートを適用または解除できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>md:float-left</code> は中程度の画面サイズ以上でのみ要素を左にフロートさせます。小さい画面ではフロートしません。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<img class="float-none md:float-left ..." src="..." />
{/* デフォルトはフロートなし、md以上で左フロート */}

<img class="float-left sm:float-none ..." src="..." />
{/* デフォルトは左フロート、sm以上でフロート解除 */}
              `.trim()}</code>
            </pre>
          </CardContent>
        </Card>

        {/* 注意点 (Clearfix) Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              注意点: Clearfix
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              フロートされた要素は通常のドキュメントフローから外れるため、親要素がフロートされた子要素の高さを認識できなくなることがあります。これにより、親要素の背景や境界線が意図せず短くなったり、後続の要素が予期しない位置に表示されたりする問題が発生します。
            </p>
            <p>
              この問題を解決するために「Clearfix」と呼ばれるテクニックが使われます。Tailwind CSS では、以下のいずれかの方法で簡単に Clearfix を実現できます。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>overflow-hidden</code> (または <code>overflow-auto</code>)</strong>: 親要素に適用します。これが最も簡単な方法の一つです。</li>
              <li><strong><code>display: flow-root;</code> (<code>flow-root</code> クラス)</strong>: 親要素に適用します。新しいブロック整形コンテキスト (BFC) を作成し、フロートを内包します。</li>
              <li><strong><code>clear</code> ユーティリティ</strong>: フロートされた要素の後に、回り込みを解除するための要素 (例: <code><div className="clear-both"></div></code>) を追加します。</li>
            </ul>
             <p>
              上記のサンプルコードでは、親の <code>div</code> に <code>overflow-hidden</code> を適用して Clearfix を行っています。
            </p>
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
                <code>clear</code> (<code>clear-left</code>, <code>clear-right</code>, <code>clear-both</code>, <code>clear-none</code>): 前の要素のフロートに対する回り込みを解除します。
              </li>
              <li>
                <code>overflow</code> (<code>overflow-hidden</code>, <code>overflow-auto</code>): Clearfix のために親要素に適用されることがあります。
              </li>
              <li>
                <code>display: flow-root</code> (<code>flow-root</code> クラス): Clearfix のために親要素に適用されることがあります。
              </li>
               <li>
                Flexbox (<code>flex</code> など) / Grid (<code>grid</code> など): 現代的なレイアウト手法であり、多くの場合フロートよりも適しています。
              </li>
            </ul>
          </CardContent>
        </Card>
    </ArticleLayout>
  );
};

export default FloatsPage;
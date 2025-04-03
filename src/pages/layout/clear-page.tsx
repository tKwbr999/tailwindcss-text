import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ArticleLayout from '@/components/layout/ArticleLayout'; // ArticleLayout をインポート

// 各コードサンプルに対応するReact実装コンポーネント

const ClearLeftExample: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <img
        className="float-left w-20 h-20 mr-4 mb-1 rounded"
        src="https://via.placeholder.com/100/a5f3fc/0e7490?text=FloatL"
        alt="Float Left"
      />
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        このテキストは左フロート要素の隣に表示されます。
      </p>
      <p className="clear-left text-red-700 dark:text-red-300 border-t border-red-300 pt-2">
        <code>clear-left</code> が適用されたこのテキストは、左フロート要素の下に移動します。回り込みが解除されます。
      </p>
       <p className="text-gray-700 dark:text-gray-300 mt-2">
        後続のテキスト。
      </p>
    </div>
  );
};

const ClearRightExample: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <img
        className="float-right w-20 h-20 ml-4 mb-1 rounded"
        src="https://via.placeholder.com/100/fecaca/7f1d1d?text=FloatR"
        alt="Float Right"
      />
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        このテキストは右フロート要素の隣に表示されます。
      </p>
      <p className="clear-right text-blue-700 dark:text-blue-300 border-t border-blue-300 pt-2">
        <code>clear-right</code> が適用されたこのテキストは、右フロート要素の下に移動します。回り込みが解除されます。
      </p>
       <p className="text-gray-700 dark:text-gray-300 mt-2">
        後続のテキスト。
      </p>
    </div>
  );
};

const ClearBothExample: React.FC = () => {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <img
          className="float-left w-20 h-20 mr-4 mb-1 rounded"
          src="https://via.placeholder.com/100/a5f3fc/0e7490?text=FloatL"
          alt="Float Left"
        />
         <img
          className="float-right w-20 h-20 ml-4 mb-1 rounded"
          src="https://via.placeholder.com/100/fecaca/7f1d1d?text=FloatR"
          alt="Float Right"
        />
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          このテキストは左右のフロート要素の間に表示されます。
        </p>
        <p className="clear-both text-green-700 dark:text-green-300 border-t border-green-300 pt-2">
          <code>clear-both</code> が適用されたこのテキストは、左右両方のフロート要素の下に移動します。
        </p>
         <p className="text-gray-700 dark:text-gray-300 mt-2">
          後続のテキスト。
        </p>
      </div>
    );
  };

const ClearNoneExample: React.FC = () => {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <img
          className="float-left w-20 h-20 mr-4 mb-1 rounded"
          src="https://via.placeholder.com/100/a5f3fc/0e7490?text=FloatL"
          alt="Float Left"
        />
        <p className="clear-none text-purple-700 dark:text-purple-300 mb-2">
          <code>clear-none</code> (デフォルト) が適用されたこのテキストは、通常通りフロート要素の隣に回り込みます。
        </p>
         <p className="text-gray-700 dark:text-gray-300 mt-2">
          後続のテキストも回り込みます。
        </p>
      </div>
    );
  };


// ページコンポーネント本体
const ClearPage: React.FC = () => {
  // コードスニペットを定義
  const clearLeftHtml = `
<div>
  <img class="float-left ..." src="..." />
  <p>回り込むテキスト...</p>
  <p class="clear-left ...">この要素は左フロートの下に移動</p>
</div>
  `.trim();

  const clearRightHtml = `
<div>
  <img class="float-right ..." src="..." />
  <p>回り込むテキスト...</p>
  <p class="clear-right ...">この要素は右フロートの下に移動</p>
</div>
  `.trim();

  const clearBothHtml = `
<div>
  <img class="float-left ..." src="..." />
  <img class="float-right ..." src="..." />
  <p>回り込むテキスト...</p>
  <p class="clear-both ...">この要素は両方のフロートの下に移動</p>
</div>
  `.trim();

  const clearNoneHtml = `
<div>
  <img class="float-left ..." src="..." />
  <p class="clear-none ...">この要素は通常通り回り込む (デフォルト)</p>
</div>
  `.trim();

// 参照リンクの定義を追加
const links = [
  {
    title: 'Tailwind CSS: Clear',
    url: 'https://tailwindcss.com/docs/clear',
  },
  {
    title: 'MDN: clear',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/clear',
  },
  {
    title: 'Tailwind CSS: Floats (関連)',
    url: 'https://tailwindcss.com/docs/float',
  },
];

  return (
    <ArticleLayout title="Layout: Clear (回り込み解除)" links={links}>

      <Helmet>
        <title>Layout: Clear - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Layout: Clear utility in Tailwind CSS. Examples and usage details for Layout: Clear." />
        {/* OGP タグ */}
        <meta property="og:title" content="Layout: Clear - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Layout: Clear utility in Tailwind CSS. Examples and usage details for Layout: Clear." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/layout/clear" />
        {/* <meta property="og:image" content="[画像のURL]" /> */} {/* 必要に応じて画像URLを設定 */}
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
              先行する要素のフロート (<code>float</code>) に対する、要素の回り込みを制御するためのユーティリティクラスです。特定のフロート要素の下に要素を配置したい場合に使用します。
            </p>
            <p>
              CSS の <code>clear</code> プロパティを制御します。
            </p>
             <p className="text-sm text-orange-700 dark:text-orange-400">
              <strong>注意:</strong> このユーティリティは <code>float</code> プロパティと密接に関連しています。現代的なレイアウトでは Flexbox や Grid が主流であり、<code>float</code> と <code>clear</code> の使用頻度は減少しています。
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
              <code>clear-{'{side}'}</code> の形式でクラスを指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>clear-left</code></strong>: 左側のフロート要素に対する回り込みを解除します。要素は先行する左フロート要素の下端よりも下に配置されます。</li>
              <li><strong><code>clear-right</code></strong>: 右側のフロート要素に対する回り込みを解除します。要素は先行する右フロート要素の下端よりも下に配置されます。</li>
              <li><strong><code>clear-both</code></strong>: 左右両方のフロート要素に対する回り込みを解除します。要素は先行する左右両方のフロート要素の下端よりも下に配置されます。</li>
              <li><strong><code>clear-none</code></strong>: デフォルト。回り込みを解除しません。要素は通常通りフロート要素の隣に配置されます。</li>
               {/* Tailwind v3.3+ */}
              <li><strong><code>clear-start</code></strong>: 書字方向に応じて、開始側 (通常は左) のフロート要素に対する回り込みを解除します (LTR の場合は <code>clear-left</code> と同じ)。</li>
              <li><strong><code>clear-end</code></strong>: 書字方向に応じて、終了側 (通常は右) のフロート要素に対する回り込みを解除します (LTR の場合は <code>clear-right</code> と同じ)。</li>
            </ul>
          </CardContent>
        </Card>

        {/* Clear Left Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              Clear Left
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>clear-left</code> で左フロートの回り込みを解除します。
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{clearLeftHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <ClearLeftExample />
            </div>
          </CardContent>
        </Card>

        {/* Clear Right Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              Clear Right
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>clear-right</code> で右フロートの回り込みを解除します。
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{clearRightHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <ClearRightExample />
            </div>
          </CardContent>
        </Card>

        {/* Clear Both Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              Clear Both
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>clear-both</code> で左右両方のフロートの回り込みを解除します。
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{clearBothHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <ClearBothExample />
            </div>
          </CardContent>
        </Card>

         {/* Clear None Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              Clear None (デフォルト)
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>clear-none</code> は回り込みを解除しません。
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{clearNoneHtml}</code>
            </pre>
            {/* 実装サンプル */}
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <ClearNoneExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみ回り込み解除を適用できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>md:clear-left</code> は中程度の画面サイズ以上でのみ左フロートの回り込みを解除します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div>
  <img class="float-left ..." src="..." />
  {/* デフォルトは回り込む、md以上で回り込み解除 */}
  <p class="clear-none md:clear-left ...">テキスト...</p>
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
                <code>clear</code> プロパティは、それが適用された要素自身の配置に影響を与えます。先行するフロート要素の挙動を変えるわけではありません。
              </li>
              <li>
                フロートレイアウトでは、親要素がフロートされた子要素の高さを認識しない問題 (高さの消失) が発生することがあります。これを解決するには Clearfix が必要です (例: 親要素に <code>overflow-hidden</code> や <code>flow-root</code> を適用)。<code>clear</code> ユーティリティ自体は Clearfix の問題を直接解決しませんが、フロートの後に空の要素 (<code><div className="clear-both"></div></code>) を追加する古典的な Clearfix 手法の一部として使われることがあります。
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
                <code>float</code> (<code>float-left</code>, <code>float-right</code>, <code>float-none</code>): 要素をフロートさせます。<code>clear</code> はこのフロートに対する回り込みを制御します。
              </li>
              <li>
                <code>overflow</code> (<code>overflow-hidden</code>, <code>overflow-auto</code>): Clearfix のために親要素に適用されることがあります。
              </li>
              <li>
                <code>display: flow-root</code> (<code>flow-root</code> クラス): Clearfix のために親要素に適用されることがあります。
              </li>
            </ul>
          </CardContent>
        </Card>
    </ArticleLayout>
  );
};

export default ClearPage;
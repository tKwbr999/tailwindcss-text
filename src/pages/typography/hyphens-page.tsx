import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// 注意: hyphens プロパティの効果は、言語設定 (lang 属性) とブラウザの辞書に依存します。
//       また、テキストが実際に改行される必要がある場合にのみハイフネーションが発生します。

const HyphensNoneExample: React.FC = () => {
  return (
    <div className="w-48 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
      <p className="hyphens-none text-gray-800 dark:text-gray-200" lang="en">
        Hyphens None (デフォルト): Hyphenation will not happen automatically for long words like supercalifragilisticexpialidocious.
      </p>
    </div>
  );
};

const HyphensManualExample: React.FC = () => {
  return (
    <div className="w-48 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
      <p className="hyphens-manual text-gray-800 dark:text-gray-200" lang="en">
        Hyphens Manual: Hyphenation only occurs where a soft hyphen (&amp;shy;) is present, like in super&shy;califragilistic&shy;expialidocious.
      </p>
    </div>
  );
};

const HyphensAutoExample: React.FC = () => {
    return (
      <div className="w-48 bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300">
        <p className="hyphens-auto text-gray-800 dark:text-gray-200" lang="en">
          Hyphens Auto: The browser will automatically hyphenate words like supercalifragilisticexpialidocious based on its dictionary and line-breaking opportunities.
        </p>
      </div>
    );
  };


// ページコンポーネント本体
const HyphensPage: React.FC = () => {
  // コードスニペットを定義
  const hyphensNoneHtml = `<p class="hyphens-none ..." lang="en">...</p>`; // Default
  const hyphensManualHtml = `<p class="hyphens-manual ..." lang="en">super&shy;cali...</p>`; // &shy; is the soft hyphen
  const hyphensAutoHtml = `<p class="hyphens-auto ..." lang="en">...</p>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Typography: Hyphens (ハイフネーション)
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
              テキストがコンテナの境界で折り返す際に、単語をハイフン (-) で分割 (ハイフネーション) するかどうか、またその方法を制御するためのユーティリティクラスです。これにより、特に狭いコンテナでのテキストの右端の不揃い (raggedness) を減らすことができます。
            </p>
            <p>
              CSS の <code>hyphens</code> プロパティを制御します。
            </p>
            <p className="text-sm text-orange-700 dark:text-orange-400">
              <strong>注意:</strong> ハイフネーションの挙動は、HTML 要素の <code>lang</code> 属性で指定された言語と、ブラウザがその言語のハイフネーション辞書を持っているかに依存します。
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
              以下のクラスをテキストを含む要素に適用します。<code>lang</code> 属性の設定も重要です。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>hyphens-none</code></strong>: デフォルト。自動ハイフネーションを行いません。単語は空白でのみ改行されます。</li>
              <li><strong><code>hyphens-manual</code></strong>: ソフトハイフン (<code>&amp;shy;</code> または <code>\u00AD</code>) が挿入されている場所でのみハイフネーションを許可します。</li>
              <li><strong><code>hyphens-auto</code></strong>: ブラウザが言語辞書に基づいて、適切な箇所で自動的にハイフネーションを行います。</li>
            </ul>
          </CardContent>
        </Card>

        {/* 各パラメータの例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              異なるハイフネーションユーティリティの適用例。<code>lang="en"</code> を指定しています。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* None */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">hyphens-none (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{hyphensNoneHtml}</code>
              </pre>
              <HyphensNoneExample />
            </div>
            {/* Manual */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">hyphens-manual</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{hyphensManualHtml}</code>
              </pre>
              <HyphensManualExample />
            </div>
             {/* Auto */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">hyphens-auto</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{hyphensAutoHtml}</code>
              </pre>
              <HyphensAutoExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてハイフネーションの挙動を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>hyphens-none md:hyphens-auto</code> は小さい画面ではハイフネーションせず、中程度の画面サイズ以上で自動ハイフネーションを有効にします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="hyphens-none md:hyphens-auto ..." lang="en">
  Hyphenation behavior changes based on screen size...
</p>
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
                <strong>言語指定 (<code>lang</code> 属性) が重要:</strong> 自動ハイフネーション (<code>hyphens-auto</code>) が正しく機能するためには、HTML 要素に適切な <code>lang</code> 属性 (例: <code>lang="en"</code>, <code>lang="ja"</code>) を設定する必要があります。これにより、ブラウザは正しい言語の辞書を使用できます。
              </li>
              <li>
                <strong>ブラウザと辞書のサポート:</strong> すべてのブラウザがすべての言語のハイフネーション辞書を持っているわけではありません。サポートされていない言語では <code>hyphens-auto</code> が機能しない場合があります。
              </li>
               <li>
                <code>hyphens-manual</code> を使用する場合、ハイフネーションさせたい箇所に手動でソフトハイフン (<code>&amp;shy;</code>) を挿入する必要があります。
              </li>
               <li>
                ハイフネーションはテキストの見た目に影響を与えるため、デザイン全体のバランスを考慮して使用してください。
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
                <code>word-break</code> (<code>break-all</code>, <code>break-words</code>): 単語の途中での改行ルールを制御します。ハイフネーションとは異なるアプローチです。
              </li>
              <li>
                <code>text-wrap</code> (<code>text-wrap</code>, <code>text-nowrap</code> など): テキストの折り返し方法を制御します。
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
                  href="https://tailwindcss.com/docs/hyphens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Hyphens
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: hyphens
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HyphensPage;
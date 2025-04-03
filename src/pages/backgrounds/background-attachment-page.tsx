import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// 注意: background-attachment の効果は、要素がスクロール可能な場合に顕著になります。
//       背景画像が必要です。ここではダミーのグラデーションを使用します。

const BgFixedExample: React.FC = () => {
  return (
    <div className="h-48 overflow-auto border border-gray-300 rounded">
      <div
        className="bg-fixed bg-gradient-to-r from-cyan-500 to-blue-500 h-64 bg-center bg-no-repeat" // h-64 でスクロールを発生させる
        // style={{ backgroundImage: 'url(...)' }} // 実際の画像URLを指定
      >
        <p className="text-white p-4 bg-black/30 backdrop-blur-sm">
          Bg Fixed: 背景はビューポートに対して固定されます。要素をスクロールしても背景は動きません。
          <br />
          Scroll down...
          <br />
          Scroll down...
          <br />
          Scroll down...
          <br />
          Scroll down...
          <br />
          Scroll down...
          <br />
          Scroll down...
        </p>
      </div>
    </div>
  );
};

const BgLocalExample: React.FC = () => {
  return (
    <div className="h-48 overflow-auto border border-gray-300 rounded">
      <div className="bg-local bg-gradient-to-r from-emerald-500 to-lime-500 h-64 bg-center bg-no-repeat">
        <p className="text-white p-4 bg-black/30 backdrop-blur-sm">
          Bg Local: 背景は要素のコンテンツと一緒にスクロールします。
          <br />
          Scroll down...
          <br />
          Scroll down...
          <br />
          Scroll down...
          <br />
          Scroll down...
          <br />
          Scroll down...
          <br />
          Scroll down...
        </p>
      </div>
    </div>
  );
};

const BgScrollExample: React.FC = () => {
  return (
    <div className="h-48 overflow-auto border border-gray-300 rounded">
      <div className="bg-scroll bg-gradient-to-r from-amber-500 to-orange-500 h-64 bg-center bg-no-repeat">
        <p className="text-white p-4 bg-black/30 backdrop-blur-sm">
          Bg Scroll (デフォルト):
          背景は要素自体に対して固定されますが、コンテンツとは一緒にスクロールしません
          (要素がスクロールしても背景の位置は変わらない)。
          <br />
          Scroll down...
          <br />
          Scroll down...
          <br />
          Scroll down...
          <br />
          Scroll down...
          <br />
          Scroll down...
          <br />
          Scroll down...
        </p>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const BackgroundAttachmentPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Backgrounds: Background Attachment (背景の固定)';
  const links = [
    {
      title: 'Tailwind CSS: Background Attachment',
      url: 'https://tailwindcss.com/docs/background-attachment',
    },
    {
      title: 'MDN: background-attachment',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment',
    },
  ];

  // コードスニペットを定義
  const bgFixedHtml = `<div class="bg-fixed bg-cover bg-center h-48 overflow-auto ..." style="background-image: url(...)">...</div>`;
  const bgLocalHtml = `<div class="bg-local bg-cover bg-center h-48 overflow-auto ..." style="background-image: url(...)">...</div>`;
  const bgScrollHtml = `<div class="bg-scroll bg-cover bg-center h-48 overflow-auto ..." style="background-image: url(...)">...</div>`; // Default

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Background Attachment - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Background Attachment utility in Tailwind CSS. Examples and usage details for Background Attachment." />
        {/* OGP タグ */}
        <meta property="og:title" content="Background Attachment - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Background Attachment utility in Tailwind CSS. Examples and usage details for Background Attachment." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/backgrounds/background-attachment" />
        {/* <meta property="og:image" content="[画像のURL]" /> */} {/* 必要に応じて画像URLを設定 */}
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の背景画像が、要素のスクロールに伴ってどのように動作するか
              (ビューポートに対して固定されるか、要素自体に固定されるか、コンテンツと共にスクロールするか)
              を制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>background-attachment</code> プロパティを制御します。
            </p>
          </div>
        </section>
        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            基本的な使い方とパラメータ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>以下のクラスを背景画像を持つ要素に適用します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>bg-fixed</code>
                </strong>
                :
                背景画像をビューポートに対して固定します。要素がスクロールされても背景画像は動きません。パララックス効果のような表現に使用できます。
              </li>
              <li>
                <strong>
                  <code>bg-local</code>
                </strong>
                :
                背景画像を要素のコンテンツに対して固定します。要素の内容がスクロールされると、背景画像も一緒にスクロールします。
              </li>
              <li>
                <strong>
                  <code>bg-scroll</code>
                </strong>
                :
                デフォルト。背景画像を要素自体に対して固定します。要素がスクロールされても背景画像の位置は変わりませんが、ビューポートに対しては固定されません
                (ページ全体がスクロールされれば背景も動きます)。
              </li>
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる background-attachment
            ユーティリティの適用例。効果を確認するには、各ボックス内をスクロールしてください。
          </p>
          <div className="space-y-6">
            {/* Fixed */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">bg-fixed</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{bgFixedHtml}</code>
              </pre>
              <BgFixedExample />
            </div>
            {/* Local */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">bg-local</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{bgLocalHtml}</code>
              </pre>
              <BgLocalExample />
            </div>
            {/* Scroll */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                bg-scroll (デフォルト)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{bgScrollHtml}</code>
              </pre>
              <BgScrollExample />
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
            を使って、画面サイズに応じて背景の固定方法を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>bg-scroll md:bg-fixed</code>{' '}
              は、小さい画面ではデフォルトのスクロール挙動、中程度の画面サイズ以上で背景をビューポートに固定します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="bg-scroll md:bg-fixed ..." style="background-image: url(...)">
  ...
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
                これらのユーティリティは、要素に背景画像 (<code>background-image</code>)
                が設定されている場合にのみ意味を持ちます。
              </li>
              <li>
                <code>bg-fixed</code>{' '}
                は、背景がビューポートに対して固定されるため、要素の境界や他の要素との関係で予期しない表示になることがあります。特に、複数の{' '}
                <code>bg-fixed</code> 要素がある場合に注意が必要です。
              </li>
              <li>
                <code>bg-local</code> は、要素のコンテンツがスクロール可能な場合にのみ{' '}
                <code>bg-scroll</code> との違いが明確になります。
              </li>
              <li>
                モバイルデバイスでは <code>bg-fixed</code>{' '}
                のパフォーマンスが悪影響を受ける場合や、意図通りに動作しない場合があります。
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
                <code>background-image</code> (<code>bg-*</code>):
                背景画像やグラデーションを設定します。
              </li>
              <li>
                <code>background-position</code> (<code>bg-*</code>): 背景画像の位置を設定します。
              </li>
              <li>
                <code>background-repeat</code> (<code>bg-repeat</code>, <code>bg-no-repeat</code>{' '}
                など): 背景画像の繰り返し方法を設定します。
              </li>
              <li>
                <code>background-size</code> (<code>bg-cover</code>, <code>bg-contain</code> など):
                背景画像のサイズを設定します。
              </li>
              <li>
                <code>overflow</code> (<code>overflow-auto</code>, <code>overflow-scroll</code>{' '}
                など): 要素のスクロールを可能にします。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default BackgroundAttachmentPage;

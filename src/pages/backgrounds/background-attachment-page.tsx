import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
          <br />Scroll down...<br />Scroll down...<br />Scroll down...<br />Scroll down...<br />Scroll down...<br />Scroll down...
        </p>
      </div>
    </div>
  );
};

const BgLocalExample: React.FC = () => {
  return (
    <div className="h-48 overflow-auto border border-gray-300 rounded">
      <div
        className="bg-local bg-gradient-to-r from-emerald-500 to-lime-500 h-64 bg-center bg-no-repeat"
      >
        <p className="text-white p-4 bg-black/30 backdrop-blur-sm">
          Bg Local: 背景は要素のコンテンツと一緒にスクロールします。
          <br />Scroll down...<br />Scroll down...<br />Scroll down...<br />Scroll down...<br />Scroll down...<br />Scroll down...
        </p>
      </div>
    </div>
  );
};

const BgScrollExample: React.FC = () => {
    return (
      <div className="h-48 overflow-auto border border-gray-300 rounded">
        <div
          className="bg-scroll bg-gradient-to-r from-amber-500 to-orange-500 h-64 bg-center bg-no-repeat"
        >
          <p className="text-white p-4 bg-black/30 backdrop-blur-sm">
            Bg Scroll (デフォルト): 背景は要素自体に対して固定されますが、コンテンツとは一緒にスクロールしません (要素がスクロールしても背景の位置は変わらない)。
            <br />Scroll down...<br />Scroll down...<br />Scroll down...<br />Scroll down...<br />Scroll down...<br />Scroll down...
          </p>
        </div>
      </div>
    );
  };


// ページコンポーネント本体
const BackgroundAttachmentPage: React.FC = () => {
  // コードスニペットを定義
  const bgFixedHtml = `<div class="bg-fixed bg-cover bg-center h-48 overflow-auto ..." style="background-image: url(...)">...</div>`;
  const bgLocalHtml = `<div class="bg-local bg-cover bg-center h-48 overflow-auto ..." style="background-image: url(...)">...</div>`;
  const bgScrollHtml = `<div class="bg-scroll bg-cover bg-center h-48 overflow-auto ..." style="background-image: url(...)">...</div>`; // Default


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Backgrounds: Background Attachment (背景の固定)
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
              要素の背景画像が、要素のスクロールに伴ってどのように動作するか (ビューポートに対して固定されるか、要素自体に固定されるか、コンテンツと共にスクロールするか) を制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>background-attachment</code> プロパティを制御します。
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
              以下のクラスを背景画像を持つ要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>bg-fixed</code></strong>: 背景画像をビューポートに対して固定します。要素がスクロールされても背景画像は動きません。パララックス効果のような表現に使用できます。</li>
              <li><strong><code>bg-local</code></strong>: 背景画像を要素のコンテンツに対して固定します。要素の内容がスクロールされると、背景画像も一緒にスクロールします。</li>
              <li><strong><code>bg-scroll</code></strong>: デフォルト。背景画像を要素自体に対して固定します。要素がスクロールされても背景画像の位置は変わりませんが、ビューポートに対しては固定されません (ページ全体がスクロールされれば背景も動きます)。</li>
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
              異なる background-attachment ユーティリティの適用例。効果を確認するには、各ボックス内をスクロールしてください。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
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
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">bg-scroll (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{bgScrollHtml}</code>
              </pre>
              <BgScrollExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて背景の固定方法を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>bg-scroll md:bg-fixed</code> は、小さい画面ではデフォルトのスクロール挙動、中程度の画面サイズ以上で背景をビューポートに固定します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="bg-scroll md:bg-fixed ..." style="background-image: url(...)">
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
                これらのユーティリティは、要素に背景画像 (<code>background-image</code>) が設定されている場合にのみ意味を持ちます。
              </li>
              <li>
                <code>bg-fixed</code> は、背景がビューポートに対して固定されるため、要素の境界や他の要素との関係で予期しない表示になることがあります。特に、複数の <code>bg-fixed</code> 要素がある場合に注意が必要です。
              </li>
               <li>
                <code>bg-local</code> は、要素のコンテンツがスクロール可能な場合にのみ <code>bg-scroll</code> との違いが明確になります。
              </li>
               <li>
                モバイルデバイスでは <code>bg-fixed</code> のパフォーマンスが悪影響を受ける場合や、意図通りに動作しない場合があります。
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
                <code>background-image</code> (<code>bg-*</code>): 背景画像やグラデーションを設定します。
              </li>
              <li>
                <code>background-position</code> (<code>bg-*</code>): 背景画像の位置を設定します。
              </li>
              <li>
                <code>background-repeat</code> (<code>bg-repeat</code>, <code>bg-no-repeat</code> など): 背景画像の繰り返し方法を設定します。
              </li>
               <li>
                <code>background-size</code> (<code>bg-cover</code>, <code>bg-contain</code> など): 背景画像のサイズを設定します。
              </li>
               <li>
                <code>overflow</code> (<code>overflow-auto</code>, <code>overflow-scroll</code> など): 要素のスクロールを可能にします。
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
                  href="https://tailwindcss.com/docs/background-attachment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Background Attachment
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: background-attachment
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BackgroundAttachmentPage;
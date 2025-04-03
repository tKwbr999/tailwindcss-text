import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// 背景色とパディング、ボーダーを設定して効果を分かりやすくします。

const BgClipBorderExample: React.FC = () => {
  return (
    <div className="bg-clip-border p-6 border-8 border-dashed border-blue-500/50 bg-gradient-to-r from-cyan-300 to-blue-300 rounded">
      <p className="text-blue-900">
        Bg Clip Border (デフォルト): 背景は境界ボックス (border box) まで拡張されます。
      </p>
    </div>
  );
};

const BgClipPaddingExample: React.FC = () => {
  return (
    <div className="bg-clip-padding p-6 border-8 border-dashed border-green-500/50 bg-gradient-to-r from-lime-300 to-green-300 rounded">
      <p className="text-green-900">
        Bg Clip Padding: 背景はパディングボックス (padding box) まで拡張されます
        (境界線の内側まで)。
      </p>
    </div>
  );
};

const BgClipContentExample: React.FC = () => {
  return (
    <div className="bg-clip-content p-6 border-8 border-dashed border-yellow-500/50 bg-gradient-to-r from-amber-300 to-yellow-300 rounded">
      <p className="text-yellow-900">
        Bg Clip Content: 背景はコンテンツボックス (content box) まで拡張されます
        (パディングの内側まで)。
      </p>
    </div>
  );
};

const BgClipTextExample: React.FC = () => {
  // 注意: bg-clip-text は通常、テキストを透明 (text-transparent) にして使用します。
  return (
    <p className="text-4xl font-extrabold">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Bg Clip Text
      </span>
    </p>
  );
};

// ページコンポーネント本体
const BackgroundClipPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Backgrounds: Background Clip (背景のクリッピング領域)';
  const links = [
    {
      title: 'Tailwind CSS: Background Clip',
      url: 'https://tailwindcss.com/docs/background-clip',
    },
    {
      title: 'MDN: background-clip',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip',
    },
  ];

  // コードスニペットを定義
  const clipBorderHtml = `<div class="bg-clip-border p-6 border-8 border-dashed bg-gradient-to-r ...">...</div>`; // Default
  const clipPaddingHtml = `<div class="bg-clip-padding p-6 border-8 border-dashed bg-gradient-to-r ...">...</div>`;
  const clipContentHtml = `<div class="bg-clip-content p-6 border-8 border-dashed bg-gradient-to-r ...">...</div>`;
  const clipTextHtml = `<span class="bg-clip-text text-transparent bg-gradient-to-r ...">...</span>`;

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Background Clip - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Background Clip utility in Tailwind CSS. Examples and usage details for Background Clip." />
        {/* OGP タグ */}
        <meta property="og:title" content="Background Clip - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the Background Clip utility in Tailwind CSS. Examples and usage details for Background Clip." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/backgrounds/background-clip" />
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
              要素の背景 (背景色または背景画像) がどの領域まで拡張されるか (クリッピングされるか)
              を制御するためのユーティリティクラスです。境界線まで、パディングまで、コンテンツ領域まで、またはテキストの形に合わせてクリップするかを指定できます。
            </p>
            <p>
              CSS の <code>background-clip</code> プロパティを制御します。
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
              <code>bg-clip-{'{keyword}'}</code> の形式でクラスを要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>bg-clip-border</code>
                </strong>
                : デフォルト。背景は境界ボックス (border box) まで拡張されます。
              </li>
              <li>
                <strong>
                  <code>bg-clip-padding</code>
                </strong>
                : 背景はパディングボックス (padding box) まで拡張されます。境界線の内側までです。
              </li>
              <li>
                <strong>
                  <code>bg-clip-content</code>
                </strong>
                : 背景はコンテンツボックス (content box)
                まで拡張されます。パディングの内側までです。
              </li>
              <li>
                <strong>
                  <code>bg-clip-text</code>
                </strong>
                :
                背景をテキストの形に合わせてクリッピングします。これにより、テキストにグラデーションや画像を表示する効果が可能になります。通常、
                <code>text-transparent</code> と組み合わせて使用します。
              </li>
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる background-clip ユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* Border */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                bg-clip-border (デフォルト)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{clipBorderHtml}</code>
              </pre>
              <BgClipBorderExample />
            </div>
            {/* Padding */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                bg-clip-padding
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{clipPaddingHtml}</code>
              </pre>
              <BgClipPaddingExample />
            </div>
            {/* Content */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                bg-clip-content
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{clipContentHtml}</code>
              </pre>
              <BgClipContentExample />
            </div>
            {/* Text */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                bg-clip-text
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{clipTextHtml}</code>
              </pre>
              <BgClipTextExample />
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
            を使って、画面サイズに応じて背景のクリッピング領域を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>bg-clip-border md:bg-clip-padding</code>{' '}
              は、小さい画面では境界まで、中程度の画面サイズ以上ではパディングまで背景を拡張します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="bg-clip-border md:bg-clip-padding ...">
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
                <code>background-clip</code> は背景色と背景画像の両方に影響します。
              </li>
              <li>
                <code>bg-clip-text</code>{' '}
                を使用する場合、効果を視認するためには通常、テキストの色を透明 (
                <code>text-transparent</code>) に設定する必要があります。
              </li>
              <li>
                <code>bg-clip-text</code>{' '}
                のブラウザサポートは比較的新しいため、古いブラウザでは動作しない可能性があります
                (多くの場合、プレフィックス付きのプロパティ{' '}
                <code>-webkit-background-clip: text;</code> が内部で使用されます)。
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
                <code>background-color</code> (<code>bg-*</code>): 背景色を設定します。
              </li>
              <li>
                <code>background-image</code> (<code>bg-gradient-to-*</code>,{' '}
                <code>bg-[url(...)]</code> など): 背景画像やグラデーションを設定します。
              </li>
              <li>
                <code>background-origin</code> (<code>bg-origin-*</code>): 背景画像の描画開始位置
                (border-box, padding-box, content-box) を制御します。
              </li>
              <li>
                <code>padding</code> (<code>p-*</code>): パディングを設定します。
              </li>
              <li>
                <code>border-width</code> (<code>border-*</code>): 境界線の太さを設定します。
              </li>
              <li>
                <code>text-color</code> (<code>text-transparent</code>): テキストの色を設定します。
                <code>bg-clip-text</code> と組み合わせて使用します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default BackgroundClipPage;

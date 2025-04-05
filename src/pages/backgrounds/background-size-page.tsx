import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// 背景画像とサイズ、繰り返しを設定します。

const BgAutoExample: React.FC = () => {
  const imageUrl = 'url("https://via.placeholder.com/100x50/a7f3d0/047857?text=BG")'; // 100x50 画像
  return (
    <div
      className="bg-auto bg-no-repeat bg-center h-32 w-full border border-dashed rounded bg-emerald-100 dark:bg-emerald-900"
      style={{ backgroundImage: imageUrl }}
    >
      <span className="text-xs p-1 bg-black/50 text-white rounded-sm absolute top-1 left-1">
        auto (default)
      </span>
      {/* 背景画像は元のサイズ (100x50) で表示される */}
    </div>
  );
};

const BgCoverExample: React.FC = () => {
  const imageUrl = 'url("https://via.placeholder.com/150/fef08a/854d0e?text=Cover")';
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-32 w-full border border-dashed rounded bg-amber-100 dark:bg-amber-900"
      style={{ backgroundImage: imageUrl }}
    >
      <span className="text-xs p-1 bg-black/50 text-white rounded-sm absolute top-1 left-1">
        cover
      </span>
      {/* 背景画像はアスペクト比を維持したままコンテナ全体を覆うように拡大縮小される (一部切り取られる可能性あり) */}
    </div>
  );
};

const BgContainExample: React.FC = () => {
  const imageUrl = 'url("https://via.placeholder.com/150/a5f3fc/0e7490?text=Contain")';
  return (
    <div
      className="bg-contain bg-no-repeat bg-center h-32 w-full border border-dashed rounded bg-cyan-100 dark:bg-cyan-900"
      style={{ backgroundImage: imageUrl }}
    >
      <span className="text-xs p-1 bg-black/50 text-white rounded-sm absolute top-1 left-1">
        contain
      </span>
      {/* 背景画像はアスペクト比を維持したままコンテナ内に完全に収まるように拡大縮小される (余白ができる可能性あり) */}
    </div>
  );
};

const ArbitrarySizeExample: React.FC = () => {
  const imageUrl = 'url("https://via.placeholder.com/150/fbcfe8/86198f?text=Arbitrary")';
  return (
    <div
      className="bg-[length:50%_75%] bg-no-repeat bg-center h-32 w-full border border-dashed rounded bg-pink-100 dark:bg-pink-900"
      style={{ backgroundImage: imageUrl }}
    >
      <span className="text-xs p-1 bg-black/50 text-white rounded-sm absolute top-1 left-1">
        length:50% 75%
      </span>
      {/* 背景画像は幅 50%, 高さ 75% に設定される */}
    </div>
  );
};

// ページコンポーネント本体
const BackgroundSizePage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Backgrounds: Background Size ';
  const jaTitle = '背景画像のサイズ';
  const links = [
    {
      title: 'Tailwind CSS: Background Size',
      url: 'https://tailwindcss.com/docs/background-size',
    },
    {
      title: 'MDN: background-size',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-size',
    },
  ];

  // コードスニペットを定義
  const bgAutoHtml = `<div class="bg-auto bg-no-repeat ..." style="background-image: url(...)">...</div>`; // Default
  const bgCoverHtml = `<div class="bg-cover bg-no-repeat ..." style="background-image: url(...)">...</div>`;
  const bgContainHtml = `<div class="bg-contain bg-no-repeat ..." style="background-image: url(...)">...</div>`;
  const arbitrarySizeHtml = `<div class="bg-[length:50%_75%] bg-no-repeat ..." style="background-image: url(...)">...</div>`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>
      <Helmet>
        <title>Background Size - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Background Size utility in Tailwind CSS. Examples and usage details for Background Size."
        />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の背景画像 (<code>background-image</code>)
              のサイズを制御するためのユーティリティクラスです。画像をコンテナに合わせて拡大縮小したり、特定のサイズに設定したりします。
            </p>
            <p>
              CSS の <code>background-size</code> プロパティを制御します。
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
              <code>bg-{'{size}'}</code> の形式でクラスを背景画像を持つ要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>bg-auto</code>
                </strong>
                : デフォルト。背景画像を元のサイズで表示します。
              </li>
              <li>
                <strong>
                  <code>bg-cover</code>
                </strong>
                :
                背景画像を、アスペクト比を維持したまま要素のコンテナ全体を完全に覆う最小サイズに拡大縮小します。画像の一部が切り取られる可能性があります。
              </li>
              <li>
                <strong>
                  <code>bg-contain</code>
                </strong>
                :
                背景画像を、アスペクト比を維持したまま要素のコンテナ内に完全に収まる最大サイズに拡大縮小します。コンテナと画像のアスペクト比が異なる場合、余白ができます。
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>bg-[length:50%_75%]</code>, <code>bg-[size:200px_auto]</code>)
              も使用可能です (Tailwind JIT モード)。<code>background-size</code>{' '}
              プロパティに指定できる値 (キーワード、長さ、パーセンテージなど)
              を角括弧内に記述します。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる background-size ユーティリティの適用例。<code>bg-no-repeat</code> と{' '}
            <code>bg-center</code> を併用しています。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Auto */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                bg-auto (デフォルト)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{bgAutoHtml}</code>
              </pre>
              <BgAutoExample />
            </div>
            {/* Cover */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">bg-cover</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{bgCoverHtml}</code>
              </pre>
              <BgCoverExample />
            </div>
            {/* Contain */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">bg-contain</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{bgContainHtml}</code>
              </pre>
              <BgContainExample />
            </div>
            {/* Arbitrary Size */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitrarySizeHtml}</code>
              </pre>
              <ArbitrarySizeExample />
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
            を使って、画面サイズに応じて背景画像のサイズを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>bg-contain md:bg-cover</code>{' '}
              は、小さい画面では画像をコンテナ内に収め、中程度の画面サイズ以上ではコンテナ全体を覆うようにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="bg-contain md:bg-cover ..." style="background-image: url(...)">
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
                が設定されている場合にのみ効果があります。
              </li>
              <li>
                <code>bg-cover</code>{' '}
                は画像の一部が切り取られる可能性があるため、重要な情報が画像に含まれている場合は注意が必要です。
              </li>
              <li>
                <code>bg-contain</code>{' '}
                はコンテナ内に余白ができる可能性があるため、デザインに応じて背景色 (
                <code>bg-*</code>) を設定すると良いでしょう。
              </li>
              <li>
                任意の値を使用する場合、CSS の <code>background-size</code>{' '}
                プロパティで有効な値を指定する必要があります (例: <code>50% auto</code>,{' '}
                <code>100px 200px</code>)。
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
                <code>background-origin</code> (<code>bg-origin-*</code>):
                背景画像の原点を設定します。
              </li>
              <li>
                <code>background-clip</code> (<code>bg-clip-*</code>):
                背景のクリッピング領域を設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default BackgroundSizePage;

import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// 背景画像の繰り返しを示すため、背景画像とサイズを設定します。
// 画像は placeholder.com の小さな画像を使用します。

const BgRepeatExample: React.FC = () => {
  const imageUrl = 'url("https://via.placeholder.com/50/a7f3d0/047857?text=R")'; // ダミー画像
  return (
    <div
      className="bg-repeat h-32 w-full border border-dashed rounded bg-emerald-100 dark:bg-emerald-900"
      style={{ backgroundImage: imageUrl }}
    >
      {/* 背景画像がタイル状に繰り返される */}
      <span className="text-xs p-1 bg-black/50 text-white rounded-sm absolute top-1 left-1">
        repeat (default)
      </span>
    </div>
  );
};

const BgNoRepeatExample: React.FC = () => {
  const imageUrl = 'url("https://via.placeholder.com/50/fef08a/854d0e?text=NR")';
  return (
    <div
      className="bg-no-repeat h-32 w-full border border-dashed rounded bg-amber-100 dark:bg-amber-900 bg-center" // bg-center で中央に配置
      style={{ backgroundImage: imageUrl }}
    >
      <span className="text-xs p-1 bg-black/50 text-white rounded-sm absolute top-1 left-1">
        no-repeat
      </span>
      {/* 背景画像は繰り返されず、1回だけ表示される */}
    </div>
  );
};

const BgRepeatXExample: React.FC = () => {
  const imageUrl = 'url("https://via.placeholder.com/50/a5f3fc/0e7490?text=X")';
  return (
    <div
      className="bg-repeat-x h-32 w-full border border-dashed rounded bg-cyan-100 dark:bg-cyan-900 bg-center" // bg-center
      style={{ backgroundImage: imageUrl }}
    >
      <span className="text-xs p-1 bg-black/50 text-white rounded-sm absolute top-1 left-1">
        repeat-x
      </span>
      {/* 背景画像は水平方向にのみ繰り返される */}
    </div>
  );
};

const BgRepeatYExample: React.FC = () => {
  const imageUrl = 'url("https://via.placeholder.com/50/fbcfe8/86198f?text=Y")';
  return (
    <div
      className="bg-repeat-y h-32 w-full border border-dashed rounded bg-pink-100 dark:bg-pink-900 bg-center" // bg-center
      style={{ backgroundImage: imageUrl }}
    >
      <span className="text-xs p-1 bg-black/50 text-white rounded-sm absolute top-1 left-1">
        repeat-y
      </span>
      {/* 背景画像は垂直方向にのみ繰り返される */}
    </div>
  );
};

const BgRepeatRoundExample: React.FC = () => {
  const imageUrl = 'url("https://via.placeholder.com/50/c4b5fd/4c1d95?text=Ro")';
  return (
    <div
      className="bg-repeat-round h-32 w-full border border-dashed rounded bg-violet-100 dark:bg-violet-900"
      style={{ backgroundImage: imageUrl }}
    >
      <span className="text-xs p-1 bg-black/50 text-white rounded-sm absolute top-1 left-1">
        repeat-round
      </span>
      {/* 背景画像は切り取られずにスペースに合わせて整数回繰り返される (間隔が調整される場合あり) */}
    </div>
  );
};

const BgRepeatSpaceExample: React.FC = () => {
  const imageUrl = 'url("https://via.placeholder.com/50/d1d5db/1f2937?text=Sp")';
  return (
    <div
      className="bg-repeat-space h-32 w-full border border-dashed rounded bg-gray-100 dark:bg-gray-900"
      style={{ backgroundImage: imageUrl }}
    >
      <span className="text-xs p-1 bg-black/50 text-white rounded-sm absolute top-1 left-1">
        repeat-space
      </span>
      {/* 背景画像は切り取られずに繰り返され、余ったスペースが画像間に均等に分配される */}
    </div>
  );
};

// ページコンポーネント本体
const BackgroundRepeatPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Backgrounds: Background Repeat (背景画像の繰り返し)';
  const links = [
    {
      title: 'Tailwind CSS: Background Repeat',
      url: 'https://tailwindcss.com/docs/background-repeat',
    },
    {
      title: 'MDN: background-repeat',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat',
    },
  ];

  // コードスニペットを定義
  const bgRepeatHtml = `<div class="bg-repeat ..." style="background-image: url(...)">...</div>`; // Default
  const bgNoRepeatHtml = `<div class="bg-no-repeat ..." style="background-image: url(...)">...</div>`;
  const bgRepeatXHtml = `<div class="bg-repeat-x ..." style="background-image: url(...)">...</div>`;
  const bgRepeatYHtml = `<div class="bg-repeat-y ..." style="background-image: url(...)">...</div>`;
  const bgRepeatRoundHtml = `<div class="bg-repeat-round ..." style="background-image: url(...)">...</div>`;
  const bgRepeatSpaceHtml = `<div class="bg-repeat-space ..." style="background-image: url(...)">...</div>`;

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Background Repeat - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Background Repeat utility in Tailwind CSS. Examples and usage details for Background Repeat." />
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
              をどのように繰り返して表示するかを制御するためのユーティリティクラスです。タイル状に繰り返す、繰り返さない、特定の軸方向のみ繰り返すなどを指定できます。
            </p>
            <p>
              CSS の <code>background-repeat</code> プロパティを制御します。
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
              <code>bg-repeat-{'{keyword}'}</code> の形式でクラスを背景画像を持つ要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>bg-repeat</code>
                </strong>
                : デフォルト。背景画像を水平・垂直両方向に繰り返します。
              </li>
              <li>
                <strong>
                  <code>bg-no-repeat</code>
                </strong>
                : 背景画像を繰り返しません。画像は <code>background-position</code>{' '}
                に従って一度だけ描画されます。
              </li>
              <li>
                <strong>
                  <code>bg-repeat-x</code>
                </strong>
                : 背景画像を水平方向にのみ繰り返します。
              </li>
              <li>
                <strong>
                  <code>bg-repeat-y</code>
                </strong>
                : 背景画像を垂直方向にのみ繰り返します。
              </li>
              <li>
                <strong>
                  <code>bg-repeat-round</code>
                </strong>
                :
                背景画像を切り取らずに、スペースに合わせて整数回繰り返されるように画像のサイズを調整します
                (間隔が均等にならない場合あり)。
              </li>
              <li>
                <strong>
                  <code>bg-repeat-space</code>
                </strong>
                :
                背景画像を切り取らずに繰り返し、余ったスペースを画像間の均等な間隔として分配します。
              </li>
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる background-repeat ユーティリティの適用例。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Repeat */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                bg-repeat (デフォルト)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{bgRepeatHtml}</code>
              </pre>
              <BgRepeatExample />
            </div>
            {/* No Repeat */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                bg-no-repeat
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{bgNoRepeatHtml}</code>
              </pre>
              <BgNoRepeatExample />
            </div>
            {/* Repeat X */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">bg-repeat-x</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{bgRepeatXHtml}</code>
              </pre>
              <BgRepeatXExample />
            </div>
            {/* Repeat Y */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">bg-repeat-y</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{bgRepeatYHtml}</code>
              </pre>
              <BgRepeatYExample />
            </div>
            {/* Repeat Round */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                bg-repeat-round
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{bgRepeatRoundHtml}</code>
              </pre>
              <BgRepeatRoundExample />
            </div>
            {/* Repeat Space */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                bg-repeat-space
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{bgRepeatSpaceHtml}</code>
              </pre>
              <BgRepeatSpaceExample />
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
            を使って、画面サイズに応じて背景画像の繰り返し方法を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>bg-repeat md:bg-no-repeat</code>{' '}
              は、小さい画面では背景を繰り返し、中程度の画面サイズ以上では繰り返さないようにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="bg-repeat md:bg-no-repeat ..." style="background-image: url(...)">
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
                <code>bg-repeat-round</code> と <code>bg-repeat-space</code>{' '}
                の挙動は、画像のサイズとコンテナのサイズの関係によって決まります。また、ブラウザのサポート状況にも注意が必要です。
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
                <code>background-size</code> (<code>bg-cover</code>, <code>bg-contain</code> など):
                背景画像のサイズを設定します。
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

export default BackgroundRepeatPage;

import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

const RingColorExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <button className="ring ring-sky-500 p-4 rounded">ring-sky-500</button>
      <button className="ring ring-red-500 p-4 rounded">ring-red-500</button>
      <button className="ring ring-emerald-500 p-4 rounded">ring-emerald-500</button>
      <button className="ring ring-amber-400 p-4 rounded">ring-amber-400</button>
      <button className="ring ring-violet-600 p-4 rounded">ring-violet-600</button>
      <button className="ring ring-pink-500 p-4 rounded">ring-pink-500</button>
    </div>
  );
};

const RingCurrentInheritTransparentExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="text-blue-600 p-2 rounded">
        Parent with blue text.
        <button className="ring ring-current p-4 rounded mt-1">
          Ring Current: Ring inherits blue text color.
        </button>
      </div>
      <div className="ring ring-green-600 p-2 rounded">
        Parent with green ring.
        <button className="ring ring-inherit mt-1 p-4 rounded border border-dashed">
          Ring Inherit: Inherits green ring color.
        </button>
      </div>
      <button className="ring ring-transparent bg-gray-200 p-4 rounded">
        Ring Transparent: Ring is transparent.
      </button>
    </div>
  );
};

const RingOpacityExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <button className="ring ring-indigo-500/75 p-4 rounded">ring-indigo-500/75</button>
      <button className="ring ring-indigo-500/50 p-4 rounded">ring-indigo-500/50</button>
      <button className="ring ring-indigo-500/25 p-4 rounded">ring-indigo-500/25</button>
      {/* Legacy syntax: <button class="ring ring-indigo-500 ring-opacity-75 ..."> */}
    </div>
  );
};

const ArbitraryRingColorExample: React.FC = () => {
  return (
    <button className="ring ring-[#ff7f50] p-4 rounded">任意の値: ring-[#ff7f50] (Coral)</button>
  );
};

// ページコンポーネント本体
const RingColorPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Borders: Ring Color ';
const jaTitle = 'リングの色';
  const links = [
    {
      title: 'Tailwind CSS: Ring Color',
      url: 'https://tailwindcss.com/docs/ring-color',
    },
    {
      title: 'MDN: box-shadow (関連)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow',
    },
  ];

  // コードスニペットを定義
  const ringColorHtml = `<button class="ring ring-sky-500 ...">...</button>`;
  const ringCurrentInheritTransparentHtml = `
<button class="ring ring-current ...">...</button>
<button class="ring ring-inherit ...">...</button>
<button class="ring ring-transparent ...">...</button>
  `.trim();
  const ringOpacityHtml = `<button class="ring ring-indigo-500/75 ...">...</button>`; // New syntax
  const arbitraryRingColorHtml = `<button class="ring ring-[#ff7f50] ...">...</button>`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Ring Color - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Ring Color utility in Tailwind CSS. Examples and usage details for Ring Color." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              <code>box-shadow</code> を利用して作成されるリング (輪郭線)
              の色を設定するためのユーティリティクラスです。Tailwind
              の豊富なカラーパレットを使用して色を指定できます。
            </p>
            <p>
              CSS の <code>--tw-ring-color</code> カスタムプロパティを制御し、これが{' '}
              <code>box-shadow</code> の色として使用されます。
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
              <code>
                ring-{'{color}'}[-{'{shade}'}]
              </code>{' '}
              の形式でクラスを要素に適用します。通常、リングの太さ (<code>ring</code> または{' '}
              <code>ring-*</code>) も一緒に指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>
                    ring-{'{color}'}[-{'{shade}'}]
                  </code>
                </strong>{' '}
                (例: <code>ring-blue-500</code>, <code>ring-red-600</code>):
                指定した色と濃淡をリングに適用します。
              </li>
              <li>
                <strong>特殊な値</strong>: <code>ring-inherit</code>, <code>ring-current</code>,{' '}
                <code>ring-transparent</code>, <code>ring-black</code>, <code>ring-white</code>。
              </li>
            </ul>
            <p className="mt-4">
              任意の色 (例: <code>ring-[#ff7f50]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
            <p>
              Tailwind CSS v3.0 以降では、スラッシュ記法 (例: <code>ring-blue-500/50</code>)
              を使用して透明度 (アルファ値) を指定できます。古いバージョンでは{' '}
              <code>ring-opacity-*</code> を使用しました。
            </p>
            <p>
              デフォルトのリングの色は通常、青系の色 (例: <code>rgb(59 130 246 / 0.5)</code>)
              ですが、<code>tailwind.config.js</code> で変更可能です。
            </p>
          </div>
        </section>
        {/* 色の指定例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            色の指定例
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            様々な色のリング。<code>ring</code> (デフォルト太さ) を併用。
          </p>
          <div>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{ringColorHtml}</code>
            </pre>
            <RingColorExample />
          </div>
        </section>
        {/* 特殊な値 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            特殊な値 (current, inherit, transparent)
          </h2>
          <div>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{ringCurrentInheritTransparentHtml}</code>
            </pre>
            <RingCurrentInheritTransparentExample />
          </div>
        </section>
        {/* 透明度 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            透明度の変更
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            リングの色に透明度を追加します。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              スラッシュ記法 (例: <code>ring-indigo-500/75</code>) を使用します (v3.0+)。
            </p>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{ringOpacityHtml}</code>
            </pre>
            <RingOpacityExample />
          </div>
        </section>
        {/* 任意の値 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            任意の値
          </h2>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              角括弧を使用して、任意の色コード (HEX, RGB, HSL) を直接指定できます。
            </p>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{arbitraryRingColorHtml}</code>
            </pre>
            <ArbitraryRingColorExample />
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:ring-red-500</code> など) や状態 (
            <code>focus:ring-blue-600</code>, <code>dark:ring-gray-600</code> など)
            に応じてリングの色を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              フォーム要素がフォーカスされたときにリングの色を変更するのは一般的なパターンです。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<input class="ring-1 ring-gray-300 focus:ring-blue-500 focus:outline-none ..." />
              `.trim()}
              </code>
            </pre>
            <input
              className="ring-1 ring-gray-300 focus:ring-blue-500 focus:outline-none border border-transparent p-2 rounded"
              placeholder="Focus me"
            />
          </div>
        </section>
        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">注意点</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                リングを表示するには、色 (<code>ring-*</code>) に加えて、太さ (<code>ring</code>{' '}
                または <code>ring-*</code>) を指定する必要があります。
              </li>
              <li>
                リングの色は、<code>ring-opacity-*</code> ユーティリティ (古い構文)
                またはスラッシュ記法 (<code>ring-color/opacity</code>, v3.0+)
                で透明度を調整できます。
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
                <code>ring-width</code> (<code>ring</code>, <code>ring-*</code>):
                リングの太さを設定します。
              </li>
              <li>
                <code>ring-offset-width</code> (<code>ring-offset-*</code>):
                リングと要素の間のオフセット (隙間) の太さを設定します。
              </li>
              <li>
                <code>ring-offset-color</code> (<code>ring-offset-*</code>):
                リングのオフセット部分の色を設定します。
              </li>
              <li>
                <code>ring-opacity</code> (<code>ring-opacity-*</code>):
                リングの色の透明度を設定します (古い構文)。
              </li>
              <li>
                <code>outline-color</code> (<code>outline-*</code>): アウトラインの色を設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default RingColorPage;

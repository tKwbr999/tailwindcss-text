import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// アウトラインの色を示すため、アウトラインのスタイルと太さも設定します。

const OutlineColorExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="outline outline-2 outline-sky-500 p-4 rounded">outline-sky-500</button>
      <button className="outline outline-2 outline-red-500 p-4 rounded">outline-red-500</button>
      <button className="outline outline-2 outline-emerald-500 p-4 rounded">
        outline-emerald-500
      </button>
      <button className="outline outline-2 outline-amber-400 p-4 rounded">outline-amber-400</button>
      <button className="outline outline-2 outline-violet-600 p-4 rounded">
        outline-violet-600
      </button>
      <button className="outline outline-2 outline-pink-500 p-4 rounded">outline-pink-500</button>
    </div>
  );
};

const OutlineCurrentInheritTransparentExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="text-blue-600 p-2 rounded">
        Parent with blue text.
        <button className="outline outline-2 outline-current p-4 rounded mt-1">
          Outline Current: Outline inherits blue text color.
        </button>
      </div>
      <div className="outline outline-2 outline-green-600 p-2 rounded">
        Parent with green outline.
        <button className="outline outline-2 outline-inherit mt-1 p-4 rounded border border-dashed">
          Outline Inherit: Inherits green outline color.
        </button>
      </div>
      <button className="outline outline-2 outline-transparent bg-gray-200 p-4 rounded">
        Outline Transparent: Outline is transparent.
      </button>
    </div>
  );
};

const OutlineOpacityExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="outline outline-2 outline-indigo-500/75 p-4 rounded">
        outline-indigo-500/75
      </button>
      <button className="outline outline-2 outline-indigo-500/50 p-4 rounded">
        outline-indigo-500/50
      </button>
      <button className="outline outline-2 outline-indigo-500/25 p-4 rounded">
        outline-indigo-500/25
      </button>
      {/* Legacy syntax: <button class="outline outline-2 outline-indigo-500 outline-opacity-75 ..."> */}
    </div>
  );
};

const ArbitraryOutlineColorExample: React.FC = () => {
  return (
    <button className="outline outline-2 outline-[#ff7f50] p-4 rounded">
      任意の値: outline-[#ff7f50] (Coral)
    </button>
  );
};

// ページコンポーネント本体
const OutlineColorPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Borders: Outline Color ';
  const jaTitle = 'アウトラインの色';
  const links = [
    {
      title: 'Tailwind CSS: Outline Color',
      url: 'https://tailwindcss.com/docs/outline-color',
    },
    {
      title: 'MDN: outline-color',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color',
    },
  ];

  // コードスニペットを定義
  const outlineColorHtml = `<button class="outline outline-2 outline-sky-500 ...">...</button>`;
  const outlineCurrentInheritTransparentHtml = `
<button class="outline outline-2 outline-current ...">...</button>
<button class="outline outline-2 outline-inherit ...">...</button>
<button class="outline outline-2 outline-transparent ...">...</button>
  `.trim();
  const outlineOpacityHtml = `<button class="outline outline-2 outline-indigo-500/75 ...">...</button>`; // New syntax
  const arbitraryOutlineColorHtml = `<button class="outline outline-2 outline-[#ff7f50] ...">...</button>`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>
      <Helmet>
        <title>Outline Color - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Outline Color utility in Tailwind CSS. Examples and usage details for Outline Color."
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
              要素のアウトラインの色を設定するためのユーティリティクラスです。Tailwind
              の豊富なカラーパレットを使用して色を指定できます。
            </p>
            <p>
              CSS の <code>outline-color</code> プロパティを制御します。
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
                outline-{'{color}'}[-{'{shade}'}]
              </code>{' '}
              の形式でクラスを要素に適用します。通常、アウトラインのスタイル (<code>outline</code>,{' '}
              <code>outline-dashed</code> など) と太さ (<code>outline-*</code>) も一緒に指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>
                    outline-{'{color}'}[-{'{shade}'}]
                  </code>
                </strong>{' '}
                (例: <code>outline-blue-500</code>, <code>outline-red-600</code>):
                指定した色と濃淡をアウトラインに適用します。
              </li>
              <li>
                <strong>特殊な値</strong>: <code>outline-inherit</code>,{' '}
                <code>outline-current</code>, <code>outline-transparent</code>,{' '}
                <code>outline-black</code>, <code>outline-white</code>。
              </li>
            </ul>
            <p className="mt-4">
              任意の色 (例: <code>outline-[#ff7f50]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
            <p>
              Tailwind CSS v3.0 以降では、スラッシュ記法 (例: <code>outline-blue-500/50</code>)
              を使用して透明度 (アルファ値) を指定できます。古いバージョンでは{' '}
              <code>outline-opacity-*</code> を使用しました。
            </p>
          </div>
        </section>
        {/* 色の指定例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            色の指定例
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            様々な色のアウトライン。<code>outline</code> と <code>outline-2</code> を併用。
          </p>
          <div>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{outlineColorHtml}</code>
            </pre>
            <OutlineColorExample />
          </div>
        </section>
        {/* 特殊な値 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            特殊な値 (current, inherit, transparent)
          </h2>
          <div>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{outlineCurrentInheritTransparentHtml}</code>
            </pre>
            <OutlineCurrentInheritTransparentExample />
          </div>
        </section>
        {/* 透明度 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            透明度の変更
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            アウトラインの色に透明度を追加します。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              スラッシュ記法 (例: <code>outline-indigo-500/75</code>) を使用します (v3.0+)。
            </p>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{outlineOpacityHtml}</code>
            </pre>
            <OutlineOpacityExample />
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
              <code className="language-html">{arbitraryOutlineColorHtml}</code>
            </pre>
            <ArbitraryOutlineColorExample />
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:outline-red-500</code> など) や状態 (
            <code>focus:outline-blue-600</code>, <code>dark:outline-gray-600</code> など)
            に応じてアウトラインの色を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              フォーム要素がフォーカスされたときにアウトラインの色を変更するのは一般的なパターンです。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<input class="outline outline-2 outline-transparent focus:outline-blue-500 ..." />
              `.trim()}
              </code>
            </pre>
            <input
              className="outline outline-2 outline-transparent focus:outline-blue-500 border border-gray-300 p-2 rounded"
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
                アウトラインを表示するには、色 (<code>outline-*</code>) に加えて、太さ (
                <code>outline-*</code>) とスタイル (<code>outline</code>,{' '}
                <code>outline-dashed</code> など) も指定する必要があります。
              </li>
              <li>
                デフォルトのアウトラインの色はブラウザによって異なりますが、通常は{' '}
                <code>outline-current</code> (テキスト色)
                に近い挙動をします。明示的に指定することが推奨されます。
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
                <code>outline-width</code> (<code>outline-*</code>):
                アウトラインの太さを設定します。
              </li>
              <li>
                <code>outline-style</code> (<code>outline</code>, <code>outline-dashed</code> など):
                アウトラインのスタイルを設定します。
              </li>
              <li>
                <code>outline-offset</code> (<code>outline-offset-*</code>):
                アウトラインと要素の境界線との間のスペースを設定します。
              </li>
              <li>
                <code>outline-opacity</code> (<code>outline-opacity-*</code>):
                アウトラインの色の透明度を設定します (古い構文)。
              </li>
              <li>
                <code>border-color</code> (<code>border-*</code>): 境界線の色を設定します。
              </li>
              <li>
                <code>ring-color</code> (<code>ring-*</code>): リング (輪郭線) の色を設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default OutlineColorPage;

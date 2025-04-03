import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const BorderColorExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="border-4 border-sky-500 p-4 rounded">border-sky-500</div>
      <div className="border-4 border-red-500 p-4 rounded">border-red-500</div>
      <div className="border-4 border-emerald-500 p-4 rounded">border-emerald-500</div>
      <div className="border-4 border-amber-400 p-4 rounded">border-amber-400</div>
      <div className="border-4 border-violet-600 p-4 rounded">border-violet-600</div>
      <div className="border-4 border-pink-500 p-4 rounded">border-pink-500</div>
    </div>
  );
};

const BorderSideColorExample: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="border-t-4 border-t-blue-500 p-4 rounded">border-t-blue-500</div>
      <div className="border-r-4 border-r-green-500 p-4 rounded text-right">border-r-green-500</div>
      <div className="border-b-8 border-b-red-500 p-4 rounded">border-b-red-500</div>
      <div className="border-l-2 border-l-yellow-500 p-4 rounded">border-l-yellow-500</div>
      {/* Logical Properties (v3.3+) */}
      <div className="border-s-4 border-s-purple-500 p-4 rounded">border-s-purple-500 (v3.3+)</div>
      <div className="border-e-4 border-e-pink-500 p-4 rounded text-right">
        border-e-pink-500 (v3.3+)
      </div>
    </div>
  );
};

const BorderXYColorExample: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="border-x-4 border-x-cyan-500 border-y-2 border-y-transparent p-4 rounded">
        border-x-cyan-500
      </div>{' '}
      {/* y方向は透明に */}
      <div className="border-y-8 border-y-fuchsia-500 border-x-2 border-x-transparent p-4 rounded">
        border-y-fuchsia-500
      </div>{' '}
      {/* x方向は透明に */}
    </div>
  );
};

const BorderCurrentInheritTransparentExample: React.FC = () => {
  return (
    <div className="space-y-2">
      <div className="text-blue-600 border-4 border-current p-2 rounded">
        Border Current: Border inherits blue text color.
      </div>
      <div className="border-4 border-green-600 p-2 rounded">
        Parent with green border.
        <div className="border-4 border-inherit mt-1 p-2">
          Border Inherit: Inherits green border color.
        </div>
      </div>
      <div className="border-4 border-transparent bg-gray-200 p-2 rounded">
        Border Transparent: Border is transparent.
      </div>
    </div>
  );
};

const BorderOpacityExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="border-4 border-indigo-500/75 p-4 rounded">border-indigo-500/75</div>
      <div className="border-4 border-indigo-500/50 p-4 rounded">border-indigo-500/50</div>
      <div className="border-4 border-indigo-500/25 p-4 rounded">border-indigo-500/25</div>
      {/* Legacy syntax: <div class="border-4 border-indigo-500 border-opacity-75 ..."> */}
    </div>
  );
};

const ArbitraryBorderColorExample: React.FC = () => {
  return (
    <div className="border-4 border-[#ff7f50] p-4 rounded">任意の値: border-[#ff7f50] (Coral)</div>
  );
};

// ページコンポーネント本体
const BorderColorPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Borders: Border Color (境界線の色)';
  const links = [
    {
      title: 'Tailwind CSS: Border Color',
      url: 'https://tailwindcss.com/docs/border-color',
    },
    {
      title: 'MDN: border-color',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-color',
    },
  ];

  // コードスニペットを定義
  const borderColorHtml = `<div class="border-4 border-sky-500 ...">...</div>`;
  const borderSideColorHtml = `
<div class="border-t-4 border-t-blue-500 ...">...</div> {/* Top */}
<div class="border-r-4 border-r-green-500 ...">...</div> {/* Right */}
{/* Logical Properties (v3.3+) */}
<div class="border-s-4 border-s-purple-500 ...">...</div> {/* Start */}
<div class="border-e-4 border-e-pink-500 ...">...</div> {/* End */}
  `.trim();
  const borderXYColorHtml = `
<div class="border-x-4 border-x-cyan-500 ...">...</div> {/* Left & Right */}
<div class="border-y-8 border-y-fuchsia-500 ...">...</div> {/* Top & Bottom */}
  `.trim();
  const borderCurrentInheritTransparentHtml = `
<div class="border-4 border-current ...">...</div>
<div class="border-4 border-inherit ...">...</div>
<div class="border-4 border-transparent ...">...</div>
  `.trim();
  const borderOpacityHtml = `<div class="border-4 border-indigo-500/75 ...">...</div>`; // New syntax
  const arbitraryBorderColorHtml = `<div class="border-4 border-[#ff7f50] ...">...</div>`;

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>Border Color - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Border Color utility in Tailwind CSS. Examples and usage details for Border Color." />
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の境界線 (border)
              の色を設定するためのユーティリティクラスです。すべての辺、特定の辺、または水平/垂直方向の辺の色を個別に制御できます。
            </p>
            <p>
              CSS の <code>border-color</code> およびその個別指定プロパティ (
              <code>border-top-color</code> など)、論理プロパティ (
              <code>border-inline-start-color</code> など) を制御します。
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
              <code>border-&lbrace;side&rbrace;-&lbrace;color&rbrace;[-&lbrace;shade&rbrace;]</code>{' '}
              または{' '}
              <code>border-&lbrace;axis&rbrace;-&lbrace;color&rbrace;[-&lbrace;shade&rbrace;]</code>
              , <code>border-&lbrace;color&rbrace;[-&lbrace;shade&rbrace;]</code>{' '}
              の形式でクラスを要素に適用します。通常、<code>border</code> または{' '}
              <code>border-&lbrace;side/axis&rbrace;-&lbrace;width&rbrace;</code>{' '}
              と一緒に使用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>
                    border-{'{color}'}[-{'{shade}'}]
                  </code>
                </strong>
                : すべての辺に同じ色を設定します (例: <code>border-blue-500</code>)。
              </li>
              <li>
                <strong>
                  <code>
                    border-{'{side}'}-{'{color}'}[-{'{shade}'}]
                  </code>
                </strong>
                : 特定の辺の色を設定します。
                <ul>
                  <li>
                    <code>t</code> (上), <code>r</code> (右), <code>b</code> (下), <code>l</code>{' '}
                    (左)。
                  </li>
                  {/* v3.3+ */}
                  <li>
                    <code>s</code> (開始側), <code>e</code> (終了側) (v3.3+ 論理プロパティ)。
                  </li>
                </ul>
                例: <code>border-t-red-500</code>, <code>border-s-green-600</code> (v3.3+)。
              </li>
              <li>
                <strong>
                  <code>
                    border-{'{axis}'}-{'{color}'}[-{'{shade}'}]
                  </code>
                </strong>
                : 水平または垂直方向の辺の色を設定します。
                <ul>
                  <li>
                    <code>x</code> (左右), <code>y</code> (上下)。
                  </li>
                </ul>
                例: <code>border-x-purple-500</code>, <code>border-y-pink-600</code>。
              </li>
              <li>
                <strong>特殊な値</strong>: <code>border-inherit</code>, <code>border-current</code>,{' '}
                <code>border-transparent</code>, <code>border-black</code>,{' '}
                <code>border-white</code>。
              </li>
            </ul>
            <p className="mt-4">
              <code>{'{color}'}</code> と <code>{'{shade}'}</code> には、Tailwind
              のカラーパレットを使用します。
            </p>
            <p>
              任意の色 (例: <code>border-[#ff7f50]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
            <p>
              Tailwind CSS v3.0 以降では、スラッシュ記法 (例: <code>border-blue-500/50</code>)
              を使用して透明度 (アルファ値) を指定できます。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる境界線色ユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* All Sides */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                すべての辺 (border-*)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{borderColorHtml}</code>
              </pre>
              <BorderColorExample />
            </div>
            {/* Individual Sides */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                特定の辺 (border-{'{side}'}-*)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{borderSideColorHtml}</code>
              </pre>
              <BorderSideColorExample />
            </div>
            {/* Horizontal/Vertical Sides */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                水平/垂直の辺 (border-{'{axis}'}-*)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{borderXYColorHtml}</code>
              </pre>
              <BorderXYColorExample />
            </div>
            {/* Special Values */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">特殊な値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{borderCurrentInheritTransparentHtml}</code>
              </pre>
              <BorderCurrentInheritTransparentExample />
            </div>
            {/* Opacity */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">透明度</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{borderOpacityHtml}</code>
              </pre>
              <BorderOpacityExample />
            </div>
            {/* Arbitrary Color */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryBorderColorHtml}</code>
              </pre>
              <ArbitraryBorderColorExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:border-red-500</code> など) や状態 (
            <code>hover:border-blue-600</code>, <code>dark:border-gray-600</code> など)
            に応じて境界線の色を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              フォーム入力のフォーカス時やボタンのホバー時に境界線の色を変えるのは一般的なパターンです。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<input class="border border-gray-300 focus:border-blue-500 ..." />

<button class="border border-transparent hover:border-black ...">...</button>
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
                境界線を表示するには、色 (<code>border-*</code>) に加えて、通常は太さ (
                <code>border</code>, <code>border-*</code>) とスタイル (<code>border-solid</code>{' '}
                など) も指定する必要があります。
              </li>
              <li>
                デフォルトでは、境界線の色は <code>border-gray-200</code> (ライトモード) または{' '}
                <code>border-gray-700</code> (ダークモード、設定による)
                が適用されることが多いですが、明示的に指定することが推奨されます。
              </li>
              <li>
                論理プロパティ (<code>border-s-*</code>, <code>border-e-*</code>) は Tailwind CSS
                v3.3 で追加されました。
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
                <code>border-width</code> (<code>border</code>, <code>border-*</code>):
                境界線の太さを設定します。
              </li>
              <li>
                <code>border-style</code> (<code>border-solid</code>, <code>border-dashed</code>{' '}
                など): 境界線のスタイルを設定します。
              </li>
              <li>
                <code>border-opacity</code> (<code>border-opacity-*</code>):
                境界線の色の透明度を設定します (古い構文)。
              </li>
              <li>
                <code>divide-color</code> (<code>divide-*</code>):
                子要素間の境界線の色を設定します。
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

export default BorderColorPage;

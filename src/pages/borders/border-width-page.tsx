import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const BorderWidthExample: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="border border-black dark:border-white p-4 rounded">border (1px)</div>
      <div className="border-0 border-black dark:border-white p-4 rounded bg-gray-200 dark:bg-gray-700">
        border-0 (0px)
      </div>
      <div className="border-2 border-black dark:border-white p-4 rounded">border-2 (2px)</div>
      <div className="border-4 border-black dark:border-white p-4 rounded">border-4 (4px)</div>
      <div className="border-8 border-black dark:border-white p-4 rounded">border-8 (8px)</div>
    </div>
  );
};

const BorderSideWidthExample: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="border-t-4 border-blue-500 p-4 rounded">border-t-4</div>
      <div className="border-r-4 border-green-500 p-4 rounded text-right">border-r-4</div>
      <div className="border-b-8 border-red-500 p-4 rounded">border-b-8</div>
      <div className="border-l-2 border-yellow-500 p-4 rounded">border-l-2</div>
      {/* Logical Properties (v3.3+) */}
      <div className="border-s-4 border-purple-500 p-4 rounded">border-s-4 (v3.3+)</div>
      <div className="border-e-4 border-pink-500 p-4 rounded text-right">border-e-4 (v3.3+)</div>
    </div>
  );
};

const BorderXYWidthExample: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="border-x-4 border-cyan-500 p-4 rounded">border-x-4 (Left & Right)</div>
      <div className="border-y-8 border-fuchsia-500 p-4 rounded">border-y-8 (Top & Bottom)</div>
    </div>
  );
};

const ArbitraryWidthExample: React.FC = () => {
  return <div className="border-[3px] border-orange-500 p-4 rounded">任意の値: border-[3px]</div>;
};

// ページコンポーネント本体
const BorderWidthPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Borders: Border Width (境界線の太さ)';
  const links = [
    {
      title: 'Tailwind CSS: Border Width',
      url: 'https://tailwindcss.com/docs/border-width',
    },
    {
      title: 'MDN: border-width',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-width',
    },
  ];

  // コードスニペットを定義
  const borderWidthHtml = `
<div class="border ...">...</div>   {/* 1px */}
<div class="border-0 ...">...</div> {/* 0px */}
<div class="border-2 ...">...</div> {/* 2px */}
<div class="border-4 ...">...</div> {/* 4px */}
<div class="border-8 ...">...</div> {/* 8px */}
  `.trim();
  const borderSideWidthHtml = `
<div class="border-t-4 ...">...</div> {/* Top */}
<div class="border-r-4 ...">...</div> {/* Right */}
<div class="border-b-8 ...">...</div> {/* Bottom */}
<div class="border-l-2 ...">...</div> {/* Left */}
{/* Logical Properties (v3.3+) */}
<div class="border-s-4 ...">...</div> {/* Start */}
<div class="border-e-4 ...">...</div> {/* End */}
  `.trim();
  const borderXYWidthHtml = `
<div class="border-x-4 ...">...</div> {/* Left & Right */}
<div class="border-y-8 ...">...</div> {/* Top & Bottom */}
  `.trim();
  const arbitraryWidthHtml = `<div class="border-[3px] ...">...</div>`;

  return (
    <ArticleLayout title={title} links={links}>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              要素の境界線 (border)
              の太さを設定するためのユーティリティクラスです。すべての辺、特定の辺、または水平/垂直方向の辺の太さを個別に制御できます。
            </p>
            <p>
              CSS の <code>border-width</code> およびその個別指定プロパティ (
              <code>border-top-width</code> など)、論理プロパティ (
              <code>border-inline-start-width</code> など) を制御します。
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
              <code>border-&lbrace;side&rbrace;-&lbrace;width&rbrace;</code> または{' '}
              <code>border-&lbrace;axis&rbrace;-&lbrace;width&rbrace;</code>,{' '}
              <code>border-&lbrace;width&rbrace;</code> の形式でクラスを要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>border-{'{width}'}</code>
                </strong>
                : すべての辺に同じ太さを設定します。
                <ul>
                  <li>
                    <code>border</code> (1px - デフォルト), <code>border-0</code> (0px),{' '}
                    <code>border-2</code> (2px), <code>border-4</code> (4px), <code>border-8</code>{' '}
                    (8px)。
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  <code>
                    border-{'{side}'}-{'{width}'}
                  </code>
                </strong>
                : 特定の辺の太さを設定します。
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
                例: <code>border-t-4</code>, <code>border-r-2</code>, <code>border-s-0</code>{' '}
                (v3.3+)。
              </li>
              <li>
                <strong>
                  <code>
                    border-{'{axis}'}-{'{width}'}
                  </code>
                </strong>
                : 水平または垂直方向の辺の太さを設定します。
                <ul>
                  <li>
                    <code>x</code> (左右), <code>y</code> (上下)。
                  </li>
                </ul>
                例: <code>border-x-4</code>, <code>border-y-2</code>。
              </li>
            </ul>
            <p className="mt-4">
              <code>{'{width}'}</code> には上記の数値 (<code>0</code>, <code>2</code>,{' '}
              <code>4</code>, <code>8</code>) を使用します。<code>border</code> クラスは{' '}
              <code>border-1</code> と同等です。
            </p>
            <p>
              任意の値 (例: <code>border-[3px]</code>, <code>border-t-[1.5px]</code>) も使用可能です
              (Tailwind JIT モード)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる境界線の太さユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* All Sides */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                すべての辺 (border-*)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{borderWidthHtml}</code>
              </pre>
              <BorderWidthExample />
            </div>
            {/* Individual Sides */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                特定の辺 (border-{'{side}'}-*)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{borderSideWidthHtml}</code>
              </pre>
              <BorderSideWidthExample />
            </div>
            {/* Horizontal/Vertical Sides */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                水平/垂直の辺 (border-{'{axis}'}-*)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{borderXYWidthHtml}</code>
              </pre>
              <BorderXYWidthExample />
            </div>
            {/* Arbitrary Width */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryWidthHtml}</code>
              </pre>
              <ArbitraryWidthExample />
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
            を使って、画面サイズに応じて境界線の太さを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>border-2 md:border-4</code> は、小さい画面では
              2px、中程度の画面サイズ以上で 4px の境界線になります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="border-2 md:border-4 border-black ...">
  Responsive Border Width
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
                境界線を表示するには、太さ (<code>border-*</code>) に加えて、通常は色 (
                <code>border-{'{color}'}</code>) とスタイル (<code>border-solid</code> など、ただし{' '}
                <code>border</code> クラスには <code>solid</code> が含まれる)
                も指定する必要があります。Tailwind の <code>border</code> クラスは{' '}
                <code>border-width: 1px;</code> と <code>border-style: solid;</code>{' '}
                を同時に設定します (色は別途指定)。
              </li>
              <li>
                <code>border-0</code>{' '}
                はすべての辺の境界線を非表示にします。特定の辺だけ非表示にしたい場合は{' '}
                <code>border-t-0</code> などを使用します。
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
                <code>border-color</code> (<code>border-*</code>): 境界線の色を設定します。
              </li>
              <li>
                <code>border-style</code> (<code>border-solid</code>, <code>border-dashed</code>{' '}
                など): 境界線のスタイルを設定します。
              </li>
              <li>
                <code>border-radius</code> (<code>rounded-*</code>): 要素の角を丸めます。
              </li>
              <li>
                <code>divide-width</code> (<code>divide-x-*</code>, <code>divide-y-*</code>):
                子要素間の境界線の太さを設定します。
              </li>
              <li>
                <code>ring-width</code> (<code>ring-*</code>): 要素の外側に輪郭線 (リング)
                を追加します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default BorderWidthPage;

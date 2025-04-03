import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const SizeFixedExample: React.FC = () => {
  return (
    <div className="flex items-start space-x-4">
      <div className="size-32 bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200 text-xs flex items-center justify-center">
        size-32 (8rem x 8rem)
      </div>
      <div className="size-24 bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200 text-xs flex items-center justify-center">
        size-24 (6rem x 6rem)
      </div>
      <div className="size-16 bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200 text-xs flex items-center justify-center">
        size-16 (4rem x 4rem)
      </div>
      <div className="size-px bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200 text-xs flex items-center justify-center">
        size-px (1px x 1px)
      </div>
    </div>
  );
};

const SizeFractionExample: React.FC = () => {
  return (
    <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 p-4 rounded flex items-start space-x-2">
      {' '}
      {/* 親要素にサイズが必要 */}
      <div className="size-1/2 bg-green-200 dark:bg-green-900 p-2 rounded text-green-800 dark:text-green-200 text-xs flex items-center justify-center">
        size-1/2 (50% x 50%)
      </div>
      <div className="size-1/3 bg-green-200 dark:bg-green-900 p-2 rounded text-green-800 dark:text-green-200 text-xs flex items-center justify-center">
        size-1/3
      </div>
      {/* 親要素の幅と高さの割合 */}
    </div>
  );
};

const SizeAutoFitMinMaxExample: React.FC = () => {
  return (
    <div className="flex items-start space-x-4">
      <div className="size-auto bg-red-200 dark:bg-red-900 p-2 rounded text-red-800 dark:text-red-200 text-xs">
        size-auto
        <br />
        コンテンツ
        <br />
        サイズ
      </div>
      <div className="size-min bg-yellow-200 dark:bg-yellow-900 p-2 rounded text-yellow-800 dark:text-yellow-200 text-xs">
        size-min
        <br />
        最小
      </div>
      <div className="size-max bg-purple-200 dark:bg-purple-900 p-2 rounded text-purple-800 dark:text-purple-200 text-xs whitespace-nowrap">
        size-max (折り返さない)
      </div>
      <div className="size-fit bg-pink-200 dark:bg-pink-900 p-2 rounded text-pink-800 dark:text-pink-200 text-xs">
        size-fit
        <br />
        (v3.3+)
      </div>
    </div>
  );
};

const SizeFullExample: React.FC = () => {
  return (
    <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      {' '}
      {/* 親要素にサイズが必要 */}
      <div className="size-full bg-teal-200 dark:bg-teal-900 p-2 rounded text-teal-800 dark:text-teal-200 flex items-center justify-center">
        size-full (親の 100% x 100%)
      </div>
    </div>
  );
};

// ページコンポーネント本体
const SizePage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Sizing: Size (サイズ - 幅と高さ)';
  const links = [
    {
      title: 'Tailwind CSS: Size (v3.3+)',
      url: 'https://tailwindcss.com/docs/size',
    },
    {
      title: 'MDN: width',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/width',
    },
    {
      title: 'MDN: height',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/height',
    },
  ];

  // コードスニペットを定義
  const sizeFixedHtml = `<div class="size-32 ...">...</div>`;
  const sizeFractionHtml = `<div class="size-1/2 ...">...</div>`; // Requires parent size
  const sizeAutoFitMinMaxHtml = `
<div class="size-auto ...">Auto</div>
<div class="size-min ...">Min</div>
<div class="size-max ...">Max</div>
<div class="size-fit ...">Fit</div>
  `.trim();
  const sizeFullHtml = `<div class="size-full ...">...</div>`; // Requires parent size

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
              要素の幅 (width) と高さ (height) を同時に設定するためのユーティリティクラス
              (ショートハンド) です。正方形の要素などを作成する際に便利です。
            </p>
            <p>
              CSS の <code>width</code> と <code>height</code> プロパティを同時に制御します。
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
              <code>size-{'{size}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>
              <code>{'{size}'}</code> には <code>width</code> や <code>height</code>{' '}
              で使用できる値の多くを指定できます:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>固定サイズ (数値/スケール)</strong>: <code>size-0</code>,{' '}
                <code>size-px</code>, <code>size-0.5</code>, <code>size-1</code>, ...,{' '}
                <code>size-96</code> など。
              </li>
              <li>
                <strong>割合 (分数)</strong>: <code>size-1/2</code>, <code>size-1/3</code>,{' '}
                <code>size-full</code> (100%) など。親要素のサイズに対する割合。
                <strong>注意:</strong> 親要素に明示的なサイズが必要です。
              </li>
              <li>
                <strong>コンテンツベース</strong>:
                <ul>
                  <li>
                    <code>size-auto</code> (<code>width: auto; height: auto;</code>)
                  </li>
                  <li>
                    <code>size-min</code> (<code>width: min-content; height: min-content;</code>)
                  </li>
                  <li>
                    <code>size-max</code> (<code>width: max-content; height: max-content;</code>)
                  </li>
                  <li>
                    <code>size-fit</code> (<code>width: fit-content; height: fit-content;</code>)
                    (v3.3+)
                  </li>
                </ul>
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>size-[10rem]</code>, <code>size-[50%]</code>) も使用可能です
              (Tailwind JIT モード)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる size ユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* Fixed Size */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                固定サイズ (数値/スケール)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{sizeFixedHtml}</code>
              </pre>
              <SizeFixedExample />
            </div>
            {/* Fractional Size */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">割合 (分数)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{sizeFractionHtml}</code>
              </pre>
              <SizeFractionExample />
            </div>
            {/* Auto/Fit/Min/Max Size */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                コンテンツベース (auto/fit/min/max)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{sizeAutoFitMinMaxHtml}</code>
              </pre>
              <SizeAutoFitMinMaxExample />
            </div>
            {/* Full Size */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                Full (親要素基準)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{sizeFullHtml}</code>
              </pre>
              <SizeFullExample />
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
            を使って、画面サイズに応じてサイズを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>size-16 md:size-32</code> は、デフォルトで <code>4rem</code>{' '}
              四方、中程度の画面サイズ以上で <code>8rem</code> 四方のサイズになります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="size-16 md:size-32 ...">
  Responsive Size
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
                <code>size-*</code> は <code>width</code> と <code>height</code>{' '}
                の両方を設定するショートハンドです。幅と高さを個別に設定したい場合は{' '}
                <code>w-*</code> と <code>h-*</code> を使用します。
              </li>
              <li>
                割合 (<code>size-1/2</code> など) や <code>size-full</code>{' '}
                を使用する場合、親要素に明示的なサイズ (幅と高さの両方)
                が設定されている必要があります。
              </li>
              <li>
                <code>size-min</code>, <code>size-max</code>, <code>size-fit</code>{' '}
                はコンテンツのサイズに依存します。
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
                <code>width</code> (<code>w-*</code>): 要素の幅を個別に設定します。
              </li>
              <li>
                <code>height</code> (<code>h-*</code>): 要素の高さを個別に設定します。
              </li>
              <li>
                <code>min-width</code> / <code>max-width</code> / <code>min-height</code> /{' '}
                <code>max-height</code>: 要素の最小/最大サイズを設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default SizePage;

import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const BgNoneExample: React.FC = () => {
  return (
    <div className="bg-none h-24 w-full border border-dashed rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
      <span className="text-gray-500">bg-none (No background image)</span>
    </div>
  );
};

const BgGradientExample: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-24 rounded flex items-center justify-center text-white">
        Right Gradient
      </div>
      <div className="bg-gradient-to-bl from-emerald-500 via-sky-500 to-indigo-500 h-24 rounded flex items-center justify-center text-white">
        Bottom-Left Gradient (with via)
      </div>
      <div className="bg-gradient-to-t from-fuchsia-500 h-24 rounded flex items-center justify-center text-white">
        Top Gradient
      </div>
      <div className="bg-gradient-radial from-orange-400 to-rose-500 h-24 rounded flex items-center justify-center text-white">
        Radial Gradient (カスタム設定が必要な場合あり)
      </div>
    </div>
  );
};

const ArbitraryUrlExample: React.FC = () => {
  // 注意: 実際の画像パスはプロジェクト構成に依存します。
  //       ここではダミーの placeholder 画像を使用します。
  const imageUrl = 'https://via.placeholder.com/150/fbbf24/422006?text=URL';
  return (
    <div
      className={`bg-[url('${imageUrl}')] bg-center bg-no-repeat h-32 w-full border border-dashed rounded bg-amber-100 dark:bg-amber-900`}
    >
      <span className="text-xs p-1 bg-black/50 text-white rounded-sm absolute top-1 left-1">
        Arbitrary URL
      </span>
    </div>
  );
};

const ArbitraryGradientExample: React.FC = () => {
  return (
    <div className="bg-[linear-gradient(to_right,_#ff7e5f,_#feb47b)] h-24 rounded flex items-center justify-center text-white">
      Arbitrary Linear Gradient
    </div>
  );
};

// ページコンポーネント本体
const BackgroundImagePage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Backgrounds: Background Image (背景画像)';
  const links = [
    {
      title: 'Tailwind CSS: Background Image',
      url: 'https://tailwindcss.com/docs/background-image',
    },
    {
      title: 'Tailwind CSS: Gradient Color Stops',
      url: 'https://tailwindcss.com/docs/gradient-color-stops',
    },
    {
      title: 'MDN: background-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-image',
    },
  ];

  // コードスニペットを定義
  const bgNoneHtml = `<div class="bg-none ...">...</div>`;
  const bgGradientHtml = `
<div class="bg-gradient-to-r from-cyan-500 to-blue-500 ...">...</div>
<div class="bg-gradient-to-bl from-emerald-500 via-sky-500 to-indigo-500 ...">...</div>
  `.trim();
  const arbitraryUrlHtml = `<div class="bg-[url('/img/hero.jpg')] ...">...</div>`;
  const arbitraryGradientHtml = `<div class="bg-[linear-gradient(...)] ...">...</div>`;

  return (
    <ArticleLayout title={title} links={links}>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>要素の背景として画像やグラデーションを設定するためのユーティリティクラスです。</p>
            <p>
              CSS の <code>background-image</code> プロパティを制御します。
            </p>
          </div>
        </section>
        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            基本的な使い方とパラメータ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>以下の形式でクラスを要素に適用します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>bg-none</code>
                </strong>{' '}
                (<code>background-image: none;</code>): 背景画像を設定しません。
              </li>
              <li>
                <strong>グラデーションユーティリティ</strong>:
                <ul>
                  <li>
                    <code>bg-gradient-to-{'{direction}'}</code> (例: <code>bg-gradient-to-r</code>,{' '}
                    <code>bg-gradient-to-bl</code>): 線形グラデーションの方向を指定します。
                    <code>r</code> (右), <code>l</code> (左), <code>t</code> (上), <code>b</code>{' '}
                    (下), <code>tr</code> (右上), <code>tl</code> (左上), <code>br</code> (右下),{' '}
                    <code>bl</code> (左下)。
                  </li>
                  <li>
                    <code>from-{'{color}'}</code>, <code>via-{'{color}'}</code>,{' '}
                    <code>to-{'{color}'}</code>: グラデーションの色停止点を設定します。
                    <code>from</code> は必須、<code>via</code> は任意 (中間色)、<code>to</code>{' '}
                    は必須 (または <code>from</code> のみで単色から透明へのグラデーション)。色は
                    Tailwind のカラーパレットを使用します (例: <code>from-blue-500</code>,{' '}
                    <code>via-purple-500/50</code>, <code>to-pink-500</code>)。
                  </li>
                  <li>
                    <code>bg-gradient-radial</code>, <code>bg-gradient-conic</code>:
                    放射状または円錐状グラデーション (カスタム設定が必要な場合あり)。
                  </li>
                </ul>
              </li>
              <li>
                <strong>任意の値 (URL)</strong>: <code>bg-[url('/path/to/image.jpg')]</code>{' '}
                のように角括弧と <code>url()</code>{' '}
                関数を使用して、任意の画像ファイルを背景として指定します。
              </li>
              <li>
                <strong>任意の値 (グラデーション)</strong>: <code>bg-[linear-gradient(...)]</code>{' '}
                や <code>bg-[radial-gradient(...)]</code> のように、CSS
                のグラデーション関数を直接記述します。
              </li>
            </ul>
            <p className="mt-4">
              <code>tailwind.config.js</code> の <code>theme.extend.backgroundImage</code>{' '}
              でカスタムの画像 URL やグラデーションを定義することも可能です。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる background-image ユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* None */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">bg-none</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{bgNoneHtml}</code>
              </pre>
              <BgNoneExample />
            </div>
            {/* Gradient */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                グラデーション
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{bgGradientHtml}</code>
              </pre>
              <BgGradientExample />
            </div>
            {/* Arbitrary URL */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                任意の値 (URL)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryUrlHtml}</code>
              </pre>
              <ArbitraryUrlExample />
            </div>
            {/* Arbitrary Gradient */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                任意の値 (グラデーション)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryGradientHtml}</code>
              </pre>
              <ArbitraryGradientExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:bg-gradient-to-r</code> など) や状態 (
            <code>hover:bg-blue-500</code> など) に応じて背景画像やグラデーションを変更できます
            (ただし、背景色への変更が一般的)。
          </p>
          <div>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="bg-gradient-to-r from-white to-gray-100 md:bg-gradient-to-b ...">
  {/* Gradient direction changes on medium screens */}
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
                背景画像を使用する場合、画像の読み込み時間やファイルサイズがパフォーマンスに影響を与える可能性があります。
              </li>
              <li>
                グラデーションの色停止点 (<code>from-*</code>, <code>via-*</code>, <code>to-*</code>
                ) は、<code>bg-gradient-to-*</code> ユーティリティと一緒に使用する必要があります。
              </li>
              <li>
                任意の値で URL
                を指定する場合、パスはプロジェクトの構成に合わせて正しく設定する必要があります。
              </li>
              <li>
                背景画像と前景コンテンツ (テキストなど)
                のコントラストに注意し、十分な可読性を確保してください。
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
                <code>background-color</code> (<code>bg-*</code>):
                背景色を設定します。背景画像がない場合や、画像が読み込めない場合のフォールバックとして使用できます。
              </li>
              <li>
                <code>gradient-color-stops</code> (<code>from-*</code>, <code>via-*</code>,{' '}
                <code>to-*</code>): グラデーションの色停止点を設定します。
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
                <code>background-origin</code> / <code>background-clip</code>:
                背景の原点とクリッピング領域を制御します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default BackgroundImagePage;

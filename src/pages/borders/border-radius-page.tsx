import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const RoundedExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="rounded-none bg-blue-200 dark:bg-blue-900 size-24 flex items-center justify-center text-xs">
        None
      </div>
      <div className="rounded-sm bg-blue-200 dark:bg-blue-900 size-24 flex items-center justify-center text-xs">
        Small
      </div>
      <div className="rounded bg-blue-200 dark:bg-blue-900 size-24 flex items-center justify-center text-xs">
        Default
      </div>
      <div className="rounded-md bg-blue-200 dark:bg-blue-900 size-24 flex items-center justify-center text-xs">
        Medium
      </div>
      <div className="rounded-lg bg-blue-200 dark:bg-blue-900 size-24 flex items-center justify-center text-xs">
        Large
      </div>
      <div className="rounded-xl bg-blue-200 dark:bg-blue-900 size-24 flex items-center justify-center text-xs">
        XL
      </div>
      <div className="rounded-2xl bg-blue-200 dark:bg-blue-900 size-24 flex items-center justify-center text-xs">
        2XL
      </div>
      <div className="rounded-3xl bg-blue-200 dark:bg-blue-900 size-24 flex items-center justify-center text-xs">
        3XL
      </div>
      <div className="rounded-full bg-blue-200 dark:bg-blue-900 size-24 flex items-center justify-center text-xs">
        Full (Pill/Circle)
      </div>
    </div>
  );
};

const RoundedSideExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="rounded-t-lg bg-green-200 dark:bg-green-900 size-24 flex items-center justify-center text-xs">
        Top Large
      </div>
      <div className="rounded-r-xl bg-green-200 dark:bg-green-900 size-24 flex items-center justify-center text-xs">
        Right XL
      </div>
      <div className="rounded-b-2xl bg-green-200 dark:bg-green-900 size-24 flex items-center justify-center text-xs">
        Bottom 2XL
      </div>
      <div className="rounded-l-full bg-green-200 dark:bg-green-900 size-24 flex items-center justify-center text-xs">
        Left Full
      </div>
    </div>
  );
};

const RoundedCornerExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="rounded-tl-lg bg-yellow-200 dark:bg-yellow-900 size-24 flex items-center justify-center text-xs">
        Top-Left Large
      </div>
      <div className="rounded-tr-xl bg-yellow-200 dark:bg-yellow-900 size-24 flex items-center justify-center text-xs">
        Top-Right XL
      </div>
      <div className="rounded-br-2xl bg-yellow-200 dark:bg-yellow-900 size-24 flex items-center justify-center text-xs">
        Bottom-Right 2XL
      </div>
      <div className="rounded-bl-full bg-yellow-200 dark:bg-yellow-900 size-24 flex items-center justify-center text-xs">
        Bottom-Left Full
      </div>
      {/* Logical Properties (v3.3+) */}
      <div className="rounded-ss-lg bg-red-200 dark:bg-red-900 size-24 flex items-center justify-center text-xs">
        Start-Start Large (v3.3+)
      </div>
      <div className="rounded-ee-xl bg-red-200 dark:bg-red-900 size-24 flex items-center justify-center text-xs">
        End-End XL (v3.3+)
      </div>
    </div>
  );
};

const ArbitraryRadiusExample: React.FC = () => {
  return (
    <div className="rounded-[10px] bg-purple-200 dark:bg-purple-900 size-24 flex items-center justify-center text-xs">
      Arbitrary: rounded-[10px]
    </div>
  );
};

// ページコンポーネント本体
const BorderRadiusPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Borders: Border Radius ';
  const jaTitle = '角丸';
  const links = [
    {
      title: 'Tailwind CSS: Border Radius',
      url: 'https://tailwindcss.com/docs/border-radius',
    },
    {
      title: 'MDN: border-radius',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius',
    },
  ];

  // コードスニペットを定義
  const roundedHtml = `
<div class="rounded-none ...">...</div>
<div class="rounded-sm ...">...</div>
<div class="rounded ...">...</div> {/* Default */}
<div class="rounded-md ...">...</div>
<div class="rounded-lg ...">...</div>
<div class="rounded-xl ...">...</div>
<div class="rounded-2xl ...">...</div>
<div class="rounded-3xl ...">...</div>
<div class="rounded-full ...">...</div>
  `.trim();
  const roundedSideHtml = `
<div class="rounded-t-lg ...">...</div> {/* Top */}
<div class="rounded-r-xl ...">...</div> {/* Right */}
<div class="rounded-b-2xl ...">...</div> {/* Bottom */}
<div class="rounded-l-full ...">...</div> {/* Left */}
  `.trim();
  const roundedCornerHtml = `
<div class="rounded-tl-lg ...">...</div> {/* Top-Left */}
<div class="rounded-tr-xl ...">...</div> {/* Top-Right */}
<div class="rounded-br-2xl ...">...</div> {/* Bottom-Right */}
<div class="rounded-bl-full ...">...</div> {/* Bottom-Left */}
{/* Logical Properties (v3.3+) */}
<div class="rounded-ss-lg ...">...</div> {/* Start-Start */}
<div class="rounded-se-xl ...">...</div> {/* Start-End */}
<div class="rounded-ee-2xl ...">...</div> {/* End-End */}
<div class="rounded-es-full ...">...</div> {/* End-Start */}
  `.trim();
  const arbitraryRadiusHtml = `<div class="rounded-[10px] ...">...</div>`;

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>
      <Helmet>
        <title>Border Radius - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Border Radius utility in Tailwind CSS. Examples and usage details for Border Radius."
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
              要素の角の丸みを設定するためのユーティリティクラスです。様々なサイズの角丸や、特定の角だけを丸めることができます。
            </p>
            <p>
              CSS の <code>border-radius</code> およびその個別指定プロパティ (
              <code>border-top-left-radius</code> など) を制御します。
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
              <code>rounded-{'{size}'}</code>,{' '}
              <code>
                rounded-{'{side}'}-{'{size}'}
              </code>
              ,{' '}
              <code>
                rounded-{'{corner}'}-{'{size}'}
              </code>{' '}
              の形式でクラスを要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>rounded-{'{size}'}</code>
                </strong>
                : すべての角に同じ丸みを適用します。
                <ul>
                  <li>
                    <code>none</code> (0px), <code>sm</code> (0.125rem), <code>DEFAULT</code>{' '}
                    (0.25rem), <code>md</code> (0.375rem), <code>lg</code> (0.5rem), <code>xl</code>{' '}
                    (0.75rem), <code>2xl</code> (1rem), <code>3xl</code> (1.5rem), <code>full</code>{' '}
                    (9999px - 円や楕円形にする)。
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  <code>
                    rounded-{'{side}'}-{'{size}'}
                  </code>
                </strong>
                : 特定の辺の角 (2つ) に丸みを適用します。
                <ul>
                  <li>
                    <code>t</code> (上: top-left, top-right), <code>r</code> (右: top-right,
                    bottom-right), <code>b</code> (下: bottom-right, bottom-left), <code>l</code>{' '}
                    (左: top-left, bottom-left)。
                  </li>
                  {/* v3.3+ */}
                  <li>
                    <code>s</code> (開始側: start-start, start-end), <code>e</code> (終了側:
                    end-start, end-end) (v3.3+ 論理プロパティ)。
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  <code>
                    rounded-{'{corner}'}-{'{size}'}
                  </code>
                </strong>
                : 特定の角 (1つ) に丸みを適用します。
                <ul>
                  <li>
                    <code>tl</code> (左上), <code>tr</code> (右上), <code>br</code> (右下),{' '}
                    <code>bl</code> (左下)。
                  </li>
                  {/* v3.3+ */}
                  <li>
                    <code>ss</code> (開始-開始), <code>se</code> (開始-終了), <code>es</code>{' '}
                    (終了-開始), <code>ee</code> (終了-終了) (v3.3+ 論理プロパティ)。
                  </li>
                </ul>
              </li>
            </ul>
            <p className="mt-4">
              <code>{'{size}'}</code> には上記のキーワード (<code>sm</code>, <code>lg</code>,{' '}
              <code>full</code> など) を使用します。サイズを省略した場合 (例: <code>rounded</code>
              )、デフォルトサイズ (0.25rem) が適用されます。
            </p>
            <p>
              任意の値 (例: <code>rounded-[10px]</code>, <code>rounded-t-[1rem]</code>)
              も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる角丸ユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* All Corners */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                すべての角 (rounded-*)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{roundedHtml}</code>
              </pre>
              <RoundedExample />
            </div>
            {/* Sides */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                特定の辺 (rounded-{'{side}'}-*)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{roundedSideHtml}</code>
              </pre>
              <RoundedSideExample />
            </div>
            {/* Corners */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                特定の角 (rounded-{'{corner}'}-*)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{roundedCornerHtml}</code>
              </pre>
              <RoundedCornerExample />
            </div>
            {/* Arbitrary Radius */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryRadiusHtml}</code>
              </pre>
              <ArbitraryRadiusExample />
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
            を使って、画面サイズに応じて角丸のサイズや適用箇所を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>rounded-lg md:rounded-full</code> は、小さい画面では <code>lg</code>{' '}
              の角丸、中程度の画面サイズ以上で完全な丸 (<code>full</code>) にします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="rounded-lg md:rounded-full size-24 ...">
  Responsive Radius
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
              <li>角丸の効果は、要素に背景色や境界線がある場合に視覚的に確認しやすくなります。</li>
              <li>
                <code>rounded-full</code> は、要素が正方形の場合は円形に、長方形の場合は楕円形
                (ピル形状) にします。
              </li>
              <li>
                論理プロパティ (<code>rounded-s-*</code>, <code>rounded-e-*</code>,{' '}
                <code>rounded-ss-*</code> など) は Tailwind CSS v3.3 で追加されました。書字方向
                (LTR/RTL) に応じて適用される角が変わります。
              </li>
              <li>
                個別の角指定 (例: <code>rounded-tl-lg</code>) は、他の包括的な指定 (例:{' '}
                <code>rounded-lg</code>) よりも優先度が高くなります (CSS
                の詳細度のルールに従います)。
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
                <code>border-width</code> (<code>border-*</code>): 境界線の太さを設定します。
              </li>
              <li>
                <code>border-color</code> (<code>border-*</code>): 境界線の色を設定します。
              </li>
              <li>
                <code>background-color</code> (<code>bg-*</code>): 背景色を設定します。
              </li>
              <li>
                <code>overflow</code> (<code>overflow-hidden</code>):
                子要素が親の角丸からはみ出すのを防ぐために使用されることがあります。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default BorderRadiusPage;

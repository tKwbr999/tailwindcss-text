import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const BgColorExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-sky-500 p-4 rounded text-white text-center">bg-sky-500</div>
      <div className="bg-red-500 p-4 rounded text-white text-center">bg-red-500</div>
      <div className="bg-emerald-500 p-4 rounded text-white text-center">bg-emerald-500</div>
      <div className="bg-amber-400 p-4 rounded text-black text-center">bg-amber-400</div>
      <div className="bg-violet-600 p-4 rounded text-white text-center">bg-violet-600</div>
      <div className="bg-pink-500 p-4 rounded text-white text-center">bg-pink-500</div>
    </div>
  );
};

const BgCurrentInheritTransparentExample: React.FC = () => {
  return (
    <div className="space-y-2">
      <div className="text-blue-600 border border-blue-600 p-2 rounded">
        Parent with blue text.
        <div className="bg-current mt-1 p-2 rounded text-white">
          Bg Current: Background is blue.
        </div>
      </div>
      <div className="bg-green-600 p-2 rounded">
        Parent with green background.
        <div className="bg-inherit mt-1 p-2 border border-gray-400 text-black">
          Bg Inherit: Inherits green background.
        </div>
      </div>
      <div className="bg-transparent border border-dashed border-gray-400 p-2 rounded">
        Bg Transparent: Background is transparent.
      </div>
    </div>
  );
};

const BgOpacityExample: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-indigo-500/75 p-4 rounded text-white text-center">bg-indigo-500/75</div>
      <div className="bg-indigo-500/50 p-4 rounded text-white text-center">bg-indigo-500/50</div>
      <div className="bg-indigo-500/25 p-4 rounded text-black text-center">bg-indigo-500/25</div>
      {/* Legacy syntax: <div class="bg-indigo-500 bg-opacity-75 ..."> */}
    </div>
  );
};

const ArbitraryBgColorExample: React.FC = () => {
  return (
    <div className="bg-[#ff7f50] p-4 rounded text-white text-center">
      任意の値: bg-[#ff7f50] (Coral)
    </div>
  );
};

// ページコンポーネント本体
const BackgroundColorPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Backgrounds: Background Color (背景色)';
  const links = [
    {
      title: 'Tailwind CSS: Background Color',
      url: 'https://tailwindcss.com/docs/background-color',
    },
    {
      title: 'MDN: background-color',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-color',
    },
  ];

  // コードスニペットを定義
  const bgColorHtml = `
<div class="bg-sky-500 ...">...</div>
<div class="bg-red-600 ...">...</div>
  `.trim();
  const bgCurrentInheritTransparentHtml = `
<div class="bg-current ...">...</div>
<div class="bg-inherit ...">...</div>
<div class="bg-transparent ...">...</div>
  `.trim();
  const bgOpacityHtml = `<div class="bg-indigo-500/75 ...">...</div>`; // New syntax
  const arbitraryBgColorHtml = `<div class="bg-[#ff7f50] ...">...</div>`;

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
              要素の背景色を設定するためのユーティリティクラスです。Tailwind
              には豊富なデフォルトカラーパレットが用意されており、簡単に色を指定できます。
            </p>
            <p>
              CSS の <code>background-color</code> プロパティを制御します。
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
              <code>bg-{'{color}'}</code> または{' '}
              <code>
                bg-{'{color}'}-{'{shade}'}
              </code>{' '}
              の形式でクラスを要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>
                    bg-{'{color}'}-{'{shade}'}
                  </code>
                </strong>{' '}
                (例: <code>bg-blue-500</code>, <code>bg-red-600</code>): 指定した色と濃淡 (通常 50,
                100, ..., 900, 950) を背景色として適用します。
              </li>
              <li>
                <strong>
                  <code>bg-inherit</code>
                </strong>
                : 親要素から背景色を継承します。
              </li>
              <li>
                <strong>
                  <code>bg-current</code>
                </strong>
                : 要素自身の現在のテキストの色 (<code>color</code> プロパティの値)
                を背景色として使用します。
              </li>
              <li>
                <strong>
                  <code>bg-transparent</code>
                </strong>
                : 背景を透明にします。
              </li>
              <li>
                <strong>
                  <code>bg-black</code>
                </strong>{' '}
                /{' '}
                <strong>
                  <code>bg-white</code>
                </strong>
                : 純粋な黒または白を設定します。
              </li>
            </ul>
            <p className="mt-4">
              任意の値 (例: <code>bg-[#ff7f50]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>
        {/* 色の指定例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            色の指定例
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">様々な色と濃淡の適用例。</p>
          <div>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{bgColorHtml}</code>
            </pre>
            <BgColorExample />
          </div>
        </section>
        {/* 特殊な値 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            特殊な値 (current, inherit, transparent)
          </h2>
          <div>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{bgCurrentInheritTransparentHtml}</code>
            </pre>
            <BgCurrentInheritTransparentExample />
          </div>
        </section>
        {/* 透明度 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            透明度の変更
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">背景色に透明度を追加します。</p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              Tailwind CSS v3.0 以降では、スラッシュ記法 (例: <code>bg-indigo-500/75</code>)
              を使用して透明度 (アルファ値) を指定できます。古いバージョンでは{' '}
              <code>bg-opacity-*</code> ユーティリティを使用しました。
            </p>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{bgOpacityHtml}</code>
            </pre>
            <BgOpacityExample />
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
              <code className="language-html">{arbitraryBgColorHtml}</code>
            </pre>
            <ArbitraryBgColorExample />
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:bg-red-500</code> など) や状態 (
            <code>hover:bg-blue-600</code>, <code>dark:bg-gray-800</code> など)
            に応じて背景色を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ボタンのホバー効果やダークモード対応などで頻繁に使用されます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<button class="bg-blue-500 hover:bg-blue-700 text-white ...">
  Save Changes
</button>

<div class="bg-white dark:bg-gray-800 ...">
  Light/Dark Mode Content
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
                背景色は要素のパディング領域まで広がりますが、境界線 (border) の下には描画されません
                (<code>background-clip: border-box</code> がデフォルトの場合)。
              </li>
              <li>背景色とテキスト色のコントラスト比に注意し、十分な可読性を確保してください。</li>
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
                <code>text-color</code> (<code>text-*</code>): テキストの色を設定します。
              </li>
              <li>
                <code>background-image</code> (<code>bg-gradient-to-*</code>,{' '}
                <code>bg-[url(...)]</code> など): 背景画像やグラデーションを設定します。
              </li>
              <li>
                <code>background-clip</code> (<code>bg-clip-*</code>): 背景の描画領域を制御します。
              </li>
              <li>
                <code>background-opacity</code> (<code>bg-opacity-*</code>):
                背景色の透明度を設定します (古い構文)。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default BackgroundColorPage;

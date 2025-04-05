import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント

const TextColorExample: React.FC = () => {
  return (
    <div className="space-y-1">
      <p className="text-black dark:text-white">Text Black / White</p>
      <p className="text-slate-500">Text Slate 500</p>
      <p className="text-red-600">Text Red 600</p>
      <p className="text-emerald-500">Text Emerald 500</p>
      <p className="text-sky-700">Text Sky 700</p>
      <p className="text-fuchsia-500">Text Fuchsia 500</p>
    </div>
  );
};

const TextCurrentInheritTransparentExample: React.FC = () => {
    return (
      <div className="space-y-2">
         <div className="text-blue-600 border border-blue-600 p-2 rounded">
            Parent with blue text and border.
            <p className="text-current border border-current mt-1 p-1">Text Current: Inherits blue color.</p>
         </div>
         <div className="text-green-600 p-2 rounded">
            Parent with green text.
            <p className="text-inherit mt-1 p-1 border border-gray-400">Text Inherit: Inherits green color.</p>
         </div>
         <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-bold">
            Text Transparent (used with background clip for gradient text)
         </p>
      </div>
    );
  };

const TextOpacityExample: React.FC = () => {
    return (
      <div className="space-y-1">
        <p className="text-blue-600 text-opacity-75">Text Blue 600 with 75% opacity (legacy)</p>
        <p className="text-blue-600/75">Text Blue 600 with 75% opacity (new syntax)</p>
        <p className="text-blue-600/50">Text Blue 600 with 50% opacity</p>
        <p className="text-blue-600/25">Text Blue 600 with 25% opacity</p>
      </div>
    );
  };

const ArbitraryColorExample: React.FC = () => {
    return (
      <p className="text-[#ff00ff]">任意の値: text-[#ff00ff] (Magenta)</p>
    );
  };


// ページコンポーネント本体
const TextColorPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Typography: Text Color ';
const jaTitle = 'テキストの色';
  const links = [
    {
      title: 'Tailwind CSS: Text Color',
      url: 'https://tailwindcss.com/docs/text-color',
    },
    {
      title: 'MDN: color',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color',
    },
  ];

  // コードスニペットを定義
  const textColorHtml = `
<p class="text-slate-500 ...">...</p>
<p class="text-red-600 ...">...</p>
<p class="text-emerald-500 ...">...</p>
  `.trim();
  const textCurrentInheritTransparentHtml = `
<div class="text-blue-600 ...">
  <p class="text-current ...">Inherits blue</p>
</div>
<div class="text-green-600 ...">
  <p class="text-inherit ...">Inherits green</p>
</div>
<p class="text-transparent bg-clip-text bg-gradient-to-r ...">Gradient</p>
  `.trim();
  const textOpacityHtml = `
<p class="text-blue-600/75 ...">75% Opacity</p> {/* New syntax */}
<p class="text-blue-600 text-opacity-50 ...">50% Opacity (Legacy)</p>
  `.trim();
  const arbitraryColorHtml = `<p class="text-[#ff00ff] ...">Magenta</p>`;


  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>

      <Helmet>
        <title>Text Color - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Text Color utility in Tailwind CSS. Examples and usage details for Text Color." />
      </Helmet>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              テキストの色を設定するためのユーティリティクラスです。Tailwind には豊富なカラーパレットが用意されており、様々な色と濃淡を指定できます。
            </p>
            <p>
              CSS の <code>color</code> プロパティを制御します。
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
              <code>text-{'{color}'}</code> または <code>text-{'{color}'}-{'{shade}'}</code> の形式でクラスを要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>text-{'{color}'}-{'{shade}'}</code></strong> (例: <code>text-blue-500</code>, <code>text-red-600</code>): 指定した色と濃淡 (通常 50, 100, ..., 900, 950) をテキストに適用します。</li>
              <li><strong><code>text-inherit</code></strong>: 親要素からテキストの色を継承します。</li>
              <li><strong><code>text-current</code></strong>: 要素自身の現在のテキストの色 (<code>color</code> プロパティの値) を使用します。SVG アイコンの色を親のテキスト色に合わせる場合などによく使われます。</li>
              <li><strong><code>text-transparent</code></strong>: テキストを透明にします。背景画像やグラデーションをテキストの形にクリップして表示する場合などに使用します (<code>bg-clip-text</code> と併用)。</li>
              <li><strong><code>text-black</code></strong> / <strong><code>text-white</code></strong>: 純粋な黒または白を設定します。</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>text-[#ff00ff]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>

        {/* 色の指定例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              色の指定例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              様々な色と濃淡の適用例。
          </p>
          <div>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{textColorHtml}</code>
            </pre>
            <TextColorExample />
          </div>
        </section>

         {/* 特殊な値 Card */}
         <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              特殊な値 (current, inherit, transparent)
          </h2>
          <div>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{textCurrentInheritTransparentHtml}</code>
            </pre>
            <TextCurrentInheritTransparentExample />
          </div>
        </section>

         {/* 透明度 Card */}
         <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              透明度の変更
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              テキストの色に透明度を追加します。
          </p>
          <div>
             <p className="text-stone-700 dark:text-stone-300 mb-4">
              Tailwind CSS v3.0 以降では、スラッシュ記法 (例: <code>text-blue-600/75</code>) を使用して透明度 (アルファ値) を指定できます。古いバージョンでは <code>text-opacity-*</code> ユーティリティを使用しました。
            </p>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{textOpacityHtml}</code>
            </pre>
            <TextOpacityExample />
          </div>
        </section>

         {/* 任意の値 Card */}
         <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              任意の値
          </h2>
          <div>
             <p className="text-stone-700 dark:text-stone-300 mb-4">
              角括弧を使用して、任意の色コード (HEX, RGB, HSL) を直接指定できます。
            </p>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{arbitraryColorHtml}</code>
            </pre>
            <ArbitraryColorExample />
          </div>
        </section>

        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントや状態 (hover, focus など) に応じてテキストの色を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>text-gray-700 hover:text-blue-600 md:text-lg</code> は、通常は灰色のテキストで、ホバー時に青色になり、中程度の画面サイズ以上でフォントサイズが大きくなります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<a href="#" class="text-gray-700 hover:text-blue-600 md:text-lg ...">
  Link Text
</a>
              `.trim()}</code>
            </pre>
          </div>
        </section>

        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              注意点
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                テキストの色は親要素から継承されます。明示的に色を指定しない場合、祖先要素の色が適用されます。
              </li>
              <li>
                色のコントラスト比に注意し、テキストが背景に対して十分な可読性を持つようにしてください (アクセシビリティの観点)。
              </li>
               <li>
                <code>text-current</code> は、SVG アイコンの色を周囲のテキストの色に合わせるのに特に便利です。SVG 側で <code>fill="currentColor"</code> または <code>stroke="currentColor"</code> を設定しておく必要があります。
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
                <code>background-color</code> (<code>bg-*</code>): 背景色を設定します。
              </li>
              <li>
                <code>border-color</code> (<code>border-*</code>): 境界線の色を設定します。
              </li>
              <li>
                <code>placeholder-color</code> (<code>placeholder-*</code>): フォーム入力のプレースホルダーテキストの色を設定します。
              </li>
               <li>
                <code>divide-color</code> (<code>divide-*</code>): <code>divide-*</code> ユーティリティで作成された境界線の色を設定します。
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

export default TextColorPage;
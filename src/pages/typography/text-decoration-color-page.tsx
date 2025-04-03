import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント

const DecorationColorExample: React.FC = () => {
  return (
    <div className="space-y-2">
      <p className="underline decoration-red-500 text-lg">Underline with Red 500</p>
      <p className="underline decoration-emerald-500 text-lg">Underline with Emerald 500</p>
      <p className="underline decoration-indigo-500/50 text-lg">Underline with Indigo 500 (50% opacity)</p>
      <p className="underline decoration-[#ff00ff] text-lg">Underline with Magenta (#ff00ff)</p>
    </div>
  );
};

const DecorationCurrentInheritTransparentExample: React.FC = () => {
    return (
      <div className="space-y-2">
         <div className="text-blue-600 p-2 rounded">
            Parent with blue text.
            <p className="underline decoration-current mt-1 p-1 border border-gray-400">Decoration Current: Underline inherits blue color.</p>
         </div>
         <div className="text-green-600 p-2 rounded">
            Parent with green text.
            <p className="underline decoration-inherit mt-1 p-1 border border-gray-400">Decoration Inherit: Underline inherits green color.</p>
         </div>
         <p className="underline decoration-transparent text-lg">
            Decoration Transparent: Underline is transparent (invisible).
         </p>
      </div>
    );
  };


// ページコンポーネント本体
const TextDecorationColorPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Typography: Text Decoration Color (テキスト装飾線の色)';
  const links = [
    {
      title: 'Tailwind CSS: Text Decoration Color',
      url: 'https://tailwindcss.com/docs/text-decoration-color',
    },
    {
      title: 'MDN: text-decoration-color',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color',
    },
  ];

  // コードスニペットを定義
  const decorationColorHtml = `
<p class="underline decoration-red-500 ...">...</p>
<p class="underline decoration-emerald-500/75 ...">...</p> {/* With opacity */}
<p class="underline decoration-[#ff00ff] ...">...</p> {/* Arbitrary value */}
  `.trim();
  const decorationCurrentInheritTransparentHtml = `
<p class="underline decoration-current ...">...</p>
<p class="underline decoration-inherit ...">...</p>
<p class="underline decoration-transparent ...">...</p>
  `.trim();


  return (
    <ArticleLayout title={title} links={links}>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              テキストに追加された装飾線 (下線、上線、取り消し線) の色を設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>text-decoration-color</code> プロパティを制御します。
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
              <code>decoration-{'{color}'}</code> または <code>decoration-{'{color}'}-{'{shade}'}</code> の形式でクラスを要素に適用します。通常、<code>underline</code>, <code>overline</code>, <code>line-through</code> のいずれかと一緒に使用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>decoration-{'{color}'}-{'{shade}'}</code></strong> (例: <code>decoration-blue-500</code>, <code>decoration-red-600</code>): 指定した色と濃淡を装飾線に適用します。</li>
              <li><strong><code>decoration-inherit</code></strong>: 親要素から装飾線の色を継承します。</li>
              <li><strong><code>decoration-current</code></strong>: 要素自身の現在のテキストの色 (<code>color</code> プロパティの値) を装飾線の色として使用します。これがデフォルトの挙動です。</li>
              <li><strong><code>decoration-transparent</code></strong>: 装飾線を透明にします。</li>
              <li><strong><code>decoration-black</code></strong> / <strong><code>decoration-white</code></strong>: 純粋な黒または白を設定します。</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>decoration-[#ff00ff]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
             <p>
              Tailwind CSS v3.0 以降では、スラッシュ記法 (例: <code>decoration-blue-500/50</code>) を使用して透明度 (アルファ値) を指定できます。
            </p>
          </div>
        </section>

        {/* 色の指定例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              色の指定例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              様々な色、透明度、任意の値の適用例。
          </p>
          <div>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{decorationColorHtml}</code>
            </pre>
            <DecorationColorExample />
          </div>
        </section>

         {/* 特殊な値 Card */}
         <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              特殊な値 (current, inherit, transparent)
          </h2>
          <div>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{decorationCurrentInheritTransparentHtml}</code>
            </pre>
            <DecorationCurrentInheritTransparentExample />
          </div>
        </section>

        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイント (<code>md:decoration-red-500</code> など) や状態 (<code>hover:decoration-blue-600</code> など) に応じて装飾線の色を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、リンクのホバー時に下線の色を変えることができます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<a href="#" class="underline decoration-transparent hover:decoration-current text-blue-600 ...">
  Hover to show underline
</a>
              `.trim()}</code>
            </pre>
             <a href="#" className="underline decoration-transparent hover:decoration-current text-blue-600 dark:text-blue-400">
              Hover to show underline
            </a>
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
                装飾線の色を変更するには、まず <code>underline</code>, <code>overline</code>, <code>line-through</code> のいずれかで装飾線自体を適用する必要があります。
              </li>
              <li>
                デフォルトでは、装飾線の色はテキストの色と同じです (<code>decoration-current</code> の挙動)。
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
                <code>text-decoration</code> (<code>underline</code>, <code>overline</code>, <code>line-through</code>, <code>no-underline</code>): 装飾線の種類を設定します。
              </li>
              <li>
                <code>text-decoration-style</code> (<code>decoration-solid</code>, <code>decoration-dashed</code> など): 装飾線のスタイルを設定します。
              </li>
              <li>
                <code>text-decoration-thickness</code> (<code>decoration-*</code>): 装飾線の太さを設定します。
              </li>
               <li>
                <code>text-underline-offset</code> (<code>underline-offset-*</code>): 下線のテキストからのオフセット距離を設定します。
              </li>
               <li>
                <code>text-color</code> (<code>text-*</code>): テキスト自体の色を設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default TextDecorationColorPage;
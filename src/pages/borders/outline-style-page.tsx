import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// アウトラインのスタイルを示すため、アウトラインの太さと色も設定します。

const OutlineNoneExample: React.FC = () => {
  return (
    <button className="outline-none p-4 rounded bg-gray-200 dark:bg-gray-700">
      outline-none (No outline)
    </button>
  );
};

const OutlineDefaultExample: React.FC = () => {
  return (
    <button className="outline outline-2 outline-blue-500 p-4 rounded">
      outline (Solid - Default)
    </button>
  );
};

const OutlineDashedExample: React.FC = () => {
  return (
    <button className="outline-dashed outline-2 outline-green-500 p-4 rounded">
      outline-dashed
    </button>
  );
};

const OutlineDottedExample: React.FC = () => {
  return (
    <button className="outline-dotted outline-2 outline-red-500 p-4 rounded">outline-dotted</button>
  );
};

const OutlineDoubleExample: React.FC = () => {
  // outline-double は outline-width が 3px 以上でないと見えにくい
  return (
    <button className="outline-double outline-4 outline-yellow-500 p-4 rounded">
      outline-double
    </button>
  );
};

// ページコンポーネント本体
const OutlineStylePage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Borders: Outline Style ';
  const jaTitle = 'アウトラインのスタイル';
  const links = [
    {
      title: 'Tailwind CSS: Outline Style',
      url: 'https://tailwindcss.com/docs/outline-style',
    },
    {
      title: 'MDN: outline-style',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/outline-style',
    },
  ];

  // コードスニペットを定義
  const outlineNoneHtml = `<button class="outline-none ...">...</button>`;
  const outlineDefaultHtml = `<button class="outline outline-2 ...">...</button>`; // outline implies solid
  const outlineDashedHtml = `<button class="outline-dashed outline-2 ...">...</button>`;
  const outlineDottedHtml = `<button class="outline-dotted outline-2 ...">...</button>`;
  const outlineDoubleHtml = `<button class="outline-double outline-4 ...">...</button>`; // Needs sufficient width

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>
      <Helmet>
        <title>Outline Style - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Outline Style utility in Tailwind CSS. Examples and usage details for Outline Style."
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
              要素のアウトラインのスタイル (実線、破線、点線など)
              を設定するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>outline-style</code> プロパティを制御します。
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
              <code>outline-{'{style}'}</code>{' '}
              の形式でクラスを要素に適用します。通常、アウトラインの太さ (<code>outline-*</code>)
              と色 (<code>outline-*</code>) も一緒に指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>outline</code>
                </strong>
                : <code>outline-style: solid;</code>{' '}
                を設定します。アウトラインを表示するための基本クラスです。
              </li>
              <li>
                <strong>
                  <code>outline-dashed</code>
                </strong>
                : 破線のアウトライン (<code>outline-style: dashed;</code>)。
              </li>
              <li>
                <strong>
                  <code>outline-dotted</code>
                </strong>
                : 点線のアウトライン (<code>outline-style: dotted;</code>)。
              </li>
              <li>
                <strong>
                  <code>outline-double</code>
                </strong>
                : 二重線のアウトライン (<code>outline-style: double;</code>)。アウトラインの太さが
                3px 以上でないと効果が見えにくい場合があります。
              </li>
              <li>
                <strong>
                  <code>outline-none</code>
                </strong>
                : アウトラインを非表示にします (<code>outline-style: none;</code> および{' '}
                <code>outline-width: 0px;</code>)。
              </li>
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なるアウトラインスタイルの適用例。太さと色も指定しています。
          </p>
          <div className="flex flex-wrap gap-4">
            {/* None */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                outline-none
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{outlineNoneHtml}</code>
              </pre>
              <OutlineNoneExample />
            </div>
            {/* Default (Solid) */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                outline (Solid)
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{outlineDefaultHtml}</code>
              </pre>
              <OutlineDefaultExample />
            </div>
            {/* Dashed */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                outline-dashed
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{outlineDashedHtml}</code>
              </pre>
              <OutlineDashedExample />
            </div>
            {/* Dotted */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                outline-dotted
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{outlineDottedHtml}</code>
              </pre>
              <OutlineDottedExample />
            </div>
            {/* Double */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                outline-double
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{outlineDoubleHtml}</code>
              </pre>
              <OutlineDoubleExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:outline-dashed</code> など) や状態 (
            <code>focus:outline-dotted</code> など) に応じてアウトラインのスタイルを変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              フォーム要素がフォーカスされたときにアウトラインのスタイルを変更できます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<input class="outline-none focus:outline-dotted focus:outline-2 focus:outline-blue-500 ..." />
              `.trim()}
              </code>
            </pre>
            <input
              className="outline-none focus:outline-dotted focus:outline-2 focus:outline-blue-500 border border-gray-300 p-2 rounded"
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
                アウトラインを表示するには、スタイル (<code>outline</code>, <code>outline-*</code>)
                に加えて、太さ (<code>outline-*</code>) と色 (<code>outline-*</code>)
                も指定する必要があります。<code>outline-none</code> はこれらをリセットします。
              </li>
              <li>
                <code>outline</code> クラスは <code>outline-style: solid;</code> を設定します。
              </li>
              <li>
                <code>outline-double</code> の見た目は、アウトラインの太さ (
                <code>outline-width</code>) に依存します。
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
                <code>outline-color</code> (<code>outline-*</code>): アウトラインの色を設定します。
              </li>
              <li>
                <code>outline-offset</code> (<code>outline-offset-*</code>):
                アウトラインと要素の境界線との間のスペースを設定します。
              </li>
              <li>
                <code>border-style</code> (<code>border-solid</code>, <code>border-dashed</code>{' '}
                など): 境界線のスタイルを設定します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default OutlineStylePage;

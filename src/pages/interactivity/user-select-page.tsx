import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const UserSelectExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">select-none</h3>
        <p className="select-none border border-gray-300 rounded p-3 bg-white dark:bg-gray-700">
          This text cannot be selected. Try dragging your mouse over it.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">select-text</h3>
        <p className="select-text border border-gray-300 rounded p-3 bg-white dark:bg-gray-700">
          This text can be selected normally. (This is often the default behavior for text).
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">select-all</h3>
        <p className="select-all border border-gray-300 rounded p-3 bg-white dark:bg-gray-700">
          Clicking once on this text will select all of it.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
          select-auto (Default)
        </h3>
        <p className="select-auto border border-gray-300 rounded p-3 bg-white dark:bg-gray-700">
          Browser default selection behavior. Usually same as select-text for text content.
        </p>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const UserSelectPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Interactivity: User Select (ユーザー選択)';
  const links = [
    {
      title: 'Tailwind CSS: User Select',
      url: 'https://tailwindcss.com/docs/user-select',
    },
    {
      title: 'MDN: user-select',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/user-select',
    },
  ];

  // コードスニペットを定義
  const userSelectHtml = `
{/* Prevent selection */}
<p class="select-none ...">Cannot select this.</p>

{/* Allow text selection */}
<p class="select-text ...">Can select this text.</p>

{/* Select all content on click */}
<p class="select-all ...">Click to select all.</p>

{/* Use browser default */}
<p class="select-auto ...">Browser default behavior.</p>
  `.trim();

  return (
    <ArticleLayout title={title} links={links}>

      <Helmet>
        <title>User Select - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the User Select utility in Tailwind CSS. Examples and usage details for User Select." />
        {/* OGP タグ */}
        <meta property="og:title" content="User Select - Tailwind CSS Cheatsheet" />
        <meta property="og:description" content="Learn about the User Select utility in Tailwind CSS. Examples and usage details for User Select." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tKwbr999.github.io/tailwindcss-text/#/interactivity/user-select" />
        {/* <meta property="og:image" content="[画像のURL]" /> */} {/* 必要に応じて画像URLを設定 */}
      </Helmet>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              ユーザーが要素内のテキストを選択できるかどうか、またどのように選択できるかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>user-select</code> プロパティを制御します。
            </p>
          </div>
        </section>
        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            基本的な使い方とパラメータ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>要素に以下のクラスを適用します。</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>select-none</code>
                </strong>
                : 要素内のテキスト選択を完全に無効にします (<code>user-select: none;</code>)。
              </li>
              <li>
                <strong>
                  <code>select-text</code>
                </strong>
                : ユーザーがテキストを選択できるようにします (<code>user-select: text;</code>
                )。通常、テキスト要素のデフォルトです。
              </li>
              <li>
                <strong>
                  <code>select-all</code>
                </strong>
                : 要素をクリックすると、その要素内のすべてのテキストが選択されます (
                <code>user-select: all;</code>)。
              </li>
              <li>
                <strong>
                  <code>select-auto</code>
                </strong>
                : ブラウザのデフォルトの選択動作を使用します (<code>user-select: auto;</code>
                )。これがほとんどの要素のデフォルトです。
              </li>
            </ul>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なるユーザー選択設定の適用例。各テキストブロックで選択を試してみてください。
          </p>
          <div className="space-y-6">
            {/* User Select Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                ユーザー選択の制御
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{userSelectHtml}</code>
              </pre>
              <UserSelectExample />
            </div>
          </div>
        </section>
        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            特定のブレークポイントでのみユーザー選択動作を変更するには、クラス名の前にブレークポイントプレフィックスを追加します
            (例: <code>md:select-all</code>)。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常はテキスト選択可能にし、中程度の画面サイズ以上で選択不可にする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<p class="select-text md:select-none ...">
  Selectable on small screens, not on medium and up.
</p>
              `.trim()}
              </code>
            </pre>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default UserSelectPage;

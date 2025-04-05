import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const ResizeExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="resize-none"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Resize None:
        </label>
        <textarea
          id="resize-none"
          className="resize-none border border-gray-300 rounded p-2 w-full h-24 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          defaultValue="Cannot be resized."
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="resize-y"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Resize Y (Vertical):
        </label>
        <textarea
          id="resize-y"
          className="resize-y border border-gray-300 rounded p-2 w-full h-24 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          defaultValue="Can be resized vertically."
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="resize-x"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Resize X (Horizontal):
        </label>
        <textarea
          id="resize-x"
          className="resize-x border border-gray-300 rounded p-2 w-full h-24 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          defaultValue="Can be resized horizontally."
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="resize"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Resize (Both):
        </label>
        <textarea
          id="resize"
          className="resize border border-gray-300 rounded p-2 w-full h-24 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          defaultValue="Can be resized in both directions."
        ></textarea>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const ResizePage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const enTitle = 'Interactivity: Resize ';
  const jaTitle = 'リサイズ';
  const links = [
    {
      title: 'Tailwind CSS: Resize',
      url: 'https://tailwindcss.com/docs/resize',
    },
    {
      title: 'MDN: resize',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/resize',
    },
  ];

  // コードスニペットを定義
  const resizeHtml = `
{/* Disable resizing */}
<textarea class="resize-none ..."></textarea>

{/* Enable vertical resizing */}
<textarea class="resize-y ..."></textarea>

{/* Enable horizontal resizing */}
<textarea class="resize-x ..."></textarea>

{/* Enable resizing in both directions */}
<textarea class="resize ..."></textarea>
  `.trim();

  return (
    <ArticleLayout enTitle={enTitle} jaTitle={jaTitle} links={links}>
      <Helmet>
        <title>Resize - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Resize utility in Tailwind CSS. Examples and usage details for Resize."
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
              要素 (通常は <code>&lt;textarea&gt;</code>)
              をユーザーがリサイズできるかどうか、またどの方向にリサイズできるかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>resize</code> プロパティを制御します。
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
              要素 (通常は <code>&lt;textarea&gt;</code>) に以下のクラスを適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>resize-none</code>
                </strong>
                : 要素のリサイズを無効にします (<code>resize: none;</code>)。
              </li>
              <li>
                <strong>
                  <code>resize-y</code>
                </strong>
                : 垂直方向のリサイズのみを許可します (<code>resize: vertical;</code>)。
              </li>
              <li>
                <strong>
                  <code>resize-x</code>
                </strong>
                : 水平方向のリサイズのみを許可します (<code>resize: horizontal;</code>)。
              </li>
              <li>
                <strong>
                  <code>resize</code>
                </strong>
                : 水平・垂直両方向のリサイズを許可します (<code>resize: both;</code>
                )。これが多くのブラウザでの <code>&lt;textarea&gt;</code> のデフォルトの挙動です。
              </li>
            </ul>
            <p className="mt-4">
              要素がリサイズ可能であるためには、通常 <code>overflow</code> プロパティが{' '}
              <code>auto</code>, <code>scroll</code>, または <code>hidden</code>{' '}
              である必要がありますが、<code>&lt;textarea&gt;</code>{' '}
              では通常デフォルトでそうなっています。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なるリサイズ設定の適用例。テキストエリアの右下隅をドラッグして試してください。
          </p>
          <div className="space-y-6">
            {/* Resize Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                リサイズ制御
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{resizeHtml}</code>
              </pre>
              <ResizeExample />
            </div>
          </div>
        </section>
        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            特定のブレークポイントでのみリサイズ動作を変更するには、クラス名の前にブレークポイントプレフィックスを追加します
            (例: <code>md:resize-none</code>)。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常はリサイズ可能にし、中程度の画面サイズ以上でリサイズを無効にする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<textarea class="resize md:resize-none ..."></textarea>
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

export default ResizePage;

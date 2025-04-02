import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// 注意: list-image-* は Tailwind CSS v3.3 で追加されました。
//       また、画像パスは実際のプロジェクト構成に合わせて調整する必要があります。

const ListImageNoneExample: React.FC = () => {
  return (
    <ul className="list-image-none list-disc list-inside space-y-1">
      <li>List item 1 (list-image-none, fallback to disc)</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  );
};

const ListImageCustomExample: React.FC = () => {
    // ダミーの画像 URL を使用
    const imageUrl = 'url("https://via.placeholder.com/16/cbd5e1/475569?text=•")'; // 例: 青い点
  return (
    <ul className={`list-image-[${imageUrl}] list-inside space-y-1 ml-4`}> {/* ml-4 でインデント調整 */}
      <li>List item 1 with custom image</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  );
};


// ページコンポーネント本体
const ListStyleImagePage: React.FC = () => {
  // コードスニペットを定義
  const listImageNoneHtml = `<ul class="list-image-none list-disc list-inside ...">...</ul>`;
  const listImageCustomHtml = `<ul class="list-image-[url('/img/check.svg')] list-inside ...">...</ul>`; // カスタム値


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Typography: List Style Image (リストマーカー画像)
        </h1>
        {/* 概要 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              概要
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              リストアイテムのマーカーとして画像を使用するためのユーティリティクラスです。デフォルトのディスク (•) や数字の代わりにカスタム画像を表示できます。
            </p>
            <p>
              CSS の <code>list-style-image</code> プロパティを制御します。<strong>これは Tailwind CSS v3.3 で追加された機能です。</strong>
            </p>
          </CardContent>
        </Card>
        {/* 基本的な使い方とパラメータ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              基本的な使い方とパラメータ
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              (v3.3+)
            </CardDescription>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              <code>list-image-{'{value}'}</code> の形式でクラスをリスト要素 (<code>&lt;ul&gt;</code> または <code>&lt;ol&gt;</code>) に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>list-image-none</code></strong> (<code>list-style-image: none;</code>): 画像マーカーを使用しません。<code>list-style-type</code> (例: <code>list-disc</code>) で指定されたマーカーが使用されます。</li>
              <li><strong>任意の値</strong> (例: <code>list-image-[url('/img/check.svg')]</code>): 指定した URL の画像をマーカーとして使用します。<code>url()</code> 関数を使用します。</li>
            </ul>
             <p className="mt-4">
              <code>tailwind.config.js</code> の <code>theme.listStyleImage</code> でカスタムのキーと URL を定義することも可能です。
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm mt-2">
                <code className="language-javascript">{`
// tailwind.config.js
module.exports = {
  theme: {
    listStyleImage: {
      checkmark: 'url("/img/checkmark.svg")',
      arrow: 'url("/img/arrow.svg")',
    },
  },
}
                `}</code>
              </pre>
              これにより、<code>list-image-checkmark</code> や <code>list-image-arrow</code> のようなクラスが使用可能になります。
            </p>
          </CardContent>
        </Card>

        {/* 各パラメータの例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              異なる list-style-image ユーティリティの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* None */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">list-image-none</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{listImageNoneHtml}</code>
              </pre>
              <ListImageNoneExample />
            </div>
            {/* Custom */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">カスタム画像 (任意の値)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{listImageCustomHtml}</code>
              </pre>
              <ListImageCustomExample />
            </div>
          </CardContent>
        </Card>

        {/* レスポンシブ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてリストマーカー画像を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>list-image-none md:list-image-[url('/img/arrow.svg')]</code> は、デフォルトでは画像マーカーなし、中程度の画面サイズ以上で矢印画像を表示します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<ul class="list-image-none md:list-image-[url('/img/arrow.svg')] list-inside ...">
  {/* ... list items */}
</ul>
              `.trim()}</code>
            </pre>
          </CardContent>
        </Card>

        {/* 注意点 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              注意点
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                このユーティリティは Tailwind CSS v3.3 で追加されました。それ以前のバージョンでは使用できません。
              </li>
              <li>
                <code>list-style-image</code> を使用する場合でも、フォールバックとして <code>list-style-type</code> (例: <code>list-disc</code>) を指定しておくことが推奨されます。画像が読み込めなかった場合に代替マーカーが表示されます。
              </li>
               <li>
                マーカーの位置は <code>list-style-position</code> (<code>list-inside</code>, <code>list-outside</code>) で制御します。画像マーカーの場合、<code>list-inside</code> の方が配置の制御が容易な場合があります。
              </li>
               <li>
                画像の URL は、プロジェクトのファイル構造やビルドプロセスに応じて適切に設定する必要があります。
              </li>
               <li>
                マーカー画像のサイズや垂直方向の位置調整は、<code>list-style-image</code> だけでは直接制御できません。より細かい制御が必要な場合は、疑似要素 (<code>::marker</code>) や背景画像などの代替手法を検討する必要があります。
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* 関連ユーティリティ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              関連ユーティリティ
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
               <li>
                <code>list-style-type</code> (<code>list-disc</code>, <code>list-decimal</code> など): リストマーカーの種類を設定します。
              </li>
              <li>
                <code>list-style-position</code> (<code>list-inside</code>, <code>list-outside</code>): リストマーカーの位置を設定します。
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* 公式ドキュメント参照 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              公式ドキュメント参照
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <a
                  href="https://tailwindcss.com/docs/list-style-image"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: List Style Image (v3.3+)
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: list-style-image
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ListStyleImagePage;
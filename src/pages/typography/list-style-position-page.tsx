import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const ListInsideExample: React.FC = () => {
  return (
    <ul className="list-inside list-disc bg-gray-100 dark:bg-gray-800 p-4 rounded border border-gray-300">
      <li>List item 1: list-inside. マーカーはテキストと同じブロック内に配置され、テキストが折り返すとマーカーの下に回り込みます。</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  );
};

const ListOutsideExample: React.FC = () => {
  return (
    <ul className="list-outside list-disc bg-gray-100 dark:bg-gray-800 p-4 rounded border border-gray-300 ml-6"> {/* ml-6 で左マージンを追加してマーカーが見えるように */}
      <li>List item 1: list-outside (デフォルト). マーカーはテキストブロックの外側に配置され、テキストはマーカーの右側に揃えられます。</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  );
};


// ページコンポーネント本体
const ListStylePositionPage: React.FC = () => {
  // コードスニペットを定義
  const listInsideHtml = `<ul class="list-inside list-disc ...">...</ul>`;
  const listOutsideHtml = `<ul class="list-outside list-disc ml-6 ...">...</ul>`; // ml-6 for visibility


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Typography: List Style Position (リストマーカー位置)
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
              リストアイテムのマーカー (例: • や数字) を、リストアイテムのテキストコンテンツに対して内側に配置するか外側に配置するかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>list-style-position</code> プロパティを制御します。
            </p>
          </CardContent>
        </Card>
        {/* 基本的な使い方とパラメータ Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              基本的な使い方とパラメータ
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              以下のクラスをリスト要素 (<code>&lt;ul&gt;</code> または <code>&lt;ol&gt;</code>) に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>list-inside</code></strong>: マーカーをリストアイテムのテキストと同じブロック内に配置します。テキストが折り返すと、マーカーの下に回り込みます。</li>
              <li><strong><code>list-outside</code></strong>: デフォルト。マーカーをリストアイテムのテキストブロックの外側に配置します。テキストはマーカーの右側にインデントされて表示されます。</li>
            </ul>
          </CardContent>
        </Card>

        {/* 各パラメータの例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              list-inside と list-outside の違い。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Inside */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">list-inside</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{listInsideHtml}</code>
              </pre>
              <ListInsideExample />
            </div>
            {/* Outside */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">list-outside (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{listOutsideHtml}</code>
              </pre>
              <ListOutsideExample />
               <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                (マーカーが見えるように左マージン <code>ml-6</code> を追加しています)
              </p>
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてマーカーの位置を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>list-inside md:list-outside</code> はデフォルトで内側、中程度の画面サイズ以上で外側にマーカーを配置します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<ul class="list-inside md:list-outside list-disc ...">
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
                <code>list-style-position</code> はリスト要素 (<code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>) または個々のリストアイテム (<code>&lt;li&gt;</code>) に適用できますが、通常はリスト要素全体に適用します。
              </li>
              <li>
                <code>list-outside</code> (デフォルト) を使用する場合、マーカーが親コンテナのパディング領域にはみ出して見えなくなることがあります。必要に応じてリスト要素に左マージン (<code>ml-*</code>) や左パディング (<code>pl-*</code>) を追加して調整します。
              </li>
               <li>
                <code>list-inside</code> を使用すると、複数行にわたるテキストのインデントがマーカーの下に回り込むため、見た目が異なる場合があります。
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
                <code>list-style-image</code> (<code>list-image-*</code>): リストマーカーとして画像を使用します。
              </li>
               <li>
                <code>margin</code> / <code>padding</code> (<code>ml-*</code>, <code>pl-*</code> など): リスト全体のインデントを調整します。
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
                  href="https://tailwindcss.com/docs/list-style-position"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: List Style Position
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: list-style-position
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ListStylePositionPage;
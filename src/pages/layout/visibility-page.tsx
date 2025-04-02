import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const VisibleExample: React.FC = () => {
  return (
    <div className="space-y-2">
      <div className="visible bg-blue-200 dark:bg-blue-900 p-2 rounded">
        Visible (デフォルト): この要素は表示されます。
      </div>
      <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded">隣接する要素</div>
    </div>
  );
};

const InvisibleExample: React.FC = () => {
  return (
    <div className="space-y-2">
      <div className="invisible bg-green-200 dark:bg-green-900 p-2 rounded">
        Invisible: この要素は表示されませんが、レイアウト上のスペースは占有します。
      </div>
       <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded">
        隣接する要素 (invisible要素のスペース分、下に配置されます)
      </div>
    </div>
  );
};

const CollapseExample: React.FC = () => {
    // 注意: collapse は主にテーブルレイアウトで使用され、挙動が hidden に似ています。
    //       一般的な div では hidden と同じように見えることが多いです。
    return (
      <div className="space-y-2">
        <div className="collapse bg-yellow-200 dark:bg-yellow-900 p-2 rounded">
          Collapse: この要素は非表示になり、スペースも通常は占有しません (テーブルレイアウト以外では hidden に似た挙動)。
        </div>
         <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded">
          隣接する要素 (collapse要素のスペースは通常詰まります)
        </div>
      </div>
    );
  };

// ページコンポーネント本体
const VisibilityPage: React.FC = () => {
  // コードスニペットを定義
  const visibleHtml = `<div class="visible ...">Visible Element</div>`;
  const invisibleHtml = `<div class="invisible ...">Invisible Element (Space Reserved)</div>`;
  const collapseHtml = `<div class="collapse ...">Collapsed Element</div>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Layout: Visibility (可視性)
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
              要素を表示するかどうか、および非表示の場合にレイアウト上のスペースを占有するかどうかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>visibility</code> プロパティを制御します。
            </p>
            <p>
              要素を完全に非表示にし、レイアウトからも削除したい場合は、<code>display</code> ユーティリティの <code>hidden</code> (<code>display: none;</code>) を使用します。
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
              要素に適用したい <code>visibility</code> 値に対応するクラスを指定します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>visible</code></strong>: デフォルト。要素は通常通り表示されます。</li>
              <li><strong><code>invisible</code></strong>: 要素は視覚的に非表示になりますが、レイアウト上のスペースは<strong>占有したまま</strong>です。要素が存在しないかのようにレイアウトされる <code>hidden</code> (<code>display: none;</code>) とは異なります。</li>
              <li><strong><code>collapse</code></strong>: 主にテーブル要素 (行、列、行グループ、列グループ) に対して使用されます。テーブルコンテキストでは、行や列を非表示にし、スペースを詰める効果があります。テーブル以外の要素に適用した場合、多くのブラウザでは <code>invisible</code> ではなく <code>hidden</code> と同様の挙動 (非表示になりスペースも詰まる) を示すことがあります。</li>
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
              各 visibility 値の適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Visible */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">visible (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{visibleHtml}</code>
              </pre>
              <VisibleExample />
            </div>
            {/* Invisible */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">invisible</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{invisibleHtml}</code>
              </pre>
              <InvisibleExample />
               <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                (緑のボックスは非表示ですが、その分のスペースが空いています)
              </p>
            </div>
             {/* Collapse */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">collapse</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{collapseHtml}</code>
              </pre>
              <CollapseExample />
               <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                (黄色のボックスは非表示になり、スペースも詰まっています。テーブル以外では hidden に似た挙動)
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみ <code>visibility</code> プロパティを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>invisible md:visible</code> はデフォルトと小さい画面では要素を非表示 (スペースは維持) にし、中程度の画面サイズ以上で表示します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="invisible md:visible ...">
  ...
</div>
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
                <strong><code>invisible</code> vs <code>hidden</code> (<code>display: none;</code>)</strong>: <code>invisible</code> は要素を非表示にしますが、レイアウト上のスペースは保持します。一方、<code>hidden</code> は要素を非表示にし、レイアウトからも完全に削除します (スペースは詰まります)。アニメーションやトランジションで要素をフェードアウトさせたいが、レイアウトのズレを防ぎたい場合などに <code>invisible</code> が役立ちます。
              </li>
              <li>
                <code>collapse</code> は元々テーブルレイアウト用に設計されており、テーブル以外の要素に対する挙動はブラウザによって異なる可能性があり、一般的には <code>hidden</code> と同様に扱われることが多いです。特別な理由がない限り、テーブル以外では <code>hidden</code> または <code>invisible</code> を使用するのが安全です。
              </li>
               <li>
                スクリーンリーダーなどの支援技術は、<code>invisible</code> や <code>collapse</code> で非表示にされた要素も読み上げることがあります。アクセシビリティを考慮する場合、<code>hidden</code> (<code>display: none;</code>) や <code>aria-hidden="true"</code> 属性の使用も検討してください。
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
                <code>display</code> (特に <code>hidden</code>): 要素の表示タイプを制御します。<code>hidden</code> は要素をレイアウトから削除します。
              </li>
              <li>
                <code>opacity</code> (<code>opacity-0</code> など): 要素の不透明度を制御します。<code>opacity-0</code> は要素を完全に透明にしますが、スペースは保持し、インタラクションも可能です (<code>invisible</code> とは異なる)。
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
                  href="https://tailwindcss.com/docs/visibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Visibility
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/visibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: visibility
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VisibilityPage;
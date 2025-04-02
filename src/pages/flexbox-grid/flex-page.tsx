import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const Flex1Example: React.FC = () => {
  return (
    <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded">
      <div className="flex-1 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">flex-1</div> {/* grow=1, shrink=1, basis=0% */}
      <div className="flex-1 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">flex-1</div>
      <div className="flex-1 bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">flex-1</div>
      {/* 3つのアイテムが利用可能なスペースを均等に分け合う */}
    </div>
  );
};

const FlexAutoExample: React.FC = () => {
  return (
    <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded">
      <div className="flex-auto bg-green-300 dark:bg-green-700 p-2 rounded text-center">flex-auto (短い)</div> {/* grow=1, shrink=1, basis=auto */}
      <div className="flex-auto bg-green-300 dark:bg-green-700 p-2 rounded text-center">flex-auto (少し長いコンテンツ)</div>
      <div className="flex-auto bg-green-300 dark:bg-green-700 p-2 rounded text-center">flex-auto</div>
      {/* アイテムはコンテンツサイズを基準にしつつ、利用可能なスペースを分け合う */}
    </div>
  );
};

const FlexInitialExample: React.FC = () => {
    return (
      <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded w-64 overflow-x-auto"> {/* 幅を制限 */}
        <div className="flex-initial w-32 bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">flex-initial (w-32)</div> {/* grow=0, shrink=1, basis=auto */}
        <div className="flex-initial w-24 bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">flex-initial (w-24)</div>
        <div className="flex-initial w-48 bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">flex-initial (w-48)</div>
        {/* アイテムは自身のサイズを維持しようとするが、スペースが足りなければ縮小する (shrink=1)。拡大はしない (grow=0)。 */}
      </div>
    );
  };

const FlexNoneExample: React.FC = () => {
    return (
      <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded w-64 overflow-x-auto"> {/* 幅を制限 */}
        <div className="flex-none w-32 bg-red-300 dark:bg-red-700 p-2 rounded text-center">flex-none (w-32)</div> {/* grow=0, shrink=0, basis=auto */}
        <div className="flex-none w-24 bg-red-300 dark:bg-red-700 p-2 rounded text-center">flex-none (w-24)</div>
        <div className="flex-none w-48 bg-red-300 dark:bg-red-700 p-2 rounded text-center">flex-none (w-48)</div>
        {/* アイテムは自身のサイズを維持し、拡大も縮小もしない (grow=0, shrink=0)。コンテナからはみ出す可能性がある。 */}
      </div>
    );
  };


// ページコンポーネント本体
const FlexPage: React.FC = () => {
  // コードスニペットを定義
  const flex1Html = `
<div class="flex ...">
  <div class="flex-1 ...">Item 1</div> {/* flex: 1 1 0% */}
  <div class="flex-1 ...">Item 2</div>
  <div class="flex-1 ...">Item 3</div>
</div>
  `.trim();

  const flexAutoHtml = `
<div class="flex ...">
  <div class="flex-auto ...">Item 1</div> {/* flex: 1 1 auto */}
  <div class="flex-auto ...">Item 2 (Longer)</div>
</div>
  `.trim();

  const flexInitialHtml = `
<div class="flex ...">
  <div class="flex-initial w-32 ...">Item 1</div> {/* flex: 0 1 auto */}
  <div class="flex-initial w-48 ...">Item 2</div>
</div>
  `.trim();

    const flexNoneHtml = `
<div class="flex ...">
  <div class="flex-none w-32 ...">Item 1</div> {/* flex: 0 0 auto */}
  <div class="flex-none w-48 ...">Item 2</div>
</div>
  `.trim();


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Flexbox & Grid: Flex (フレックス)
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
              フレックスアイテムがどのように伸縮するか (grow と shrink) およびその基準サイズ (basis) を一括で設定するためのユーティリティクラス (ショートハンド) です。
              フレックスコンテナ内のアイテムのサイズと柔軟性を制御します。
            </p>
            <p>
              CSS の <code>flex</code> プロパティ (<code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code> のショートハンド) を制御します。
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
              <code>flex-{'{value}'}</code> の形式でクラスをフレックスアイテムに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>flex-1</code></strong> (<code>flex: 1 1 0%;</code>): アイテムが利用可能なスペースを均等に分け合って拡大し (grow=1)、スペースが不足した場合は均等に縮小します (shrink=1)。基準サイズは 0% です。</li>
              <li><strong><code>flex-auto</code></strong> (<code>flex: 1 1 auto;</code>): アイテムが利用可能なスペースを分け合って拡大し (grow=1)、スペースが不足した場合は縮小します (shrink=1)。基準サイズはアイテムのコンテンツまたは <code>width</code>/<code>height</code> に基づきます (basis=auto)。</li>
              <li><strong><code>flex-initial</code></strong> (<code>flex: 0 1 auto;</code>): アイテムは拡大せず (grow=0)、スペースが不足した場合にのみ縮小します (shrink=1)。基準サイズはアイテムのコンテンツまたは <code>width</code>/<code>height</code> に基づきます (basis=auto)。</li>
              <li><strong><code>flex-none</code></strong> (<code>flex: 0 0 auto;</code>): アイテムは拡大も縮小もしません (grow=0, shrink=0)。基準サイズはアイテムのコンテンツまたは <code>width</code>/<code>height</code> に基づきます (basis=auto)。アイテムは常に自身のサイズを維持しようとします。</li>
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
              各 flex 値の適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* flex-1 */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">flex-1</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{flex1Html}</code>
              </pre>
              <Flex1Example />
            </div>
            {/* flex-auto */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">flex-auto</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{flexAutoHtml}</code>
              </pre>
              <FlexAutoExample />
            </div>
             {/* flex-initial */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">flex-initial</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{flexInitialHtml}</code>
              </pre>
              <FlexInitialExample />
            </div>
             {/* flex-none */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">flex-none</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{flexNoneHtml}</code>
              </pre>
              <FlexNoneExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみ <code>flex</code> プロパティを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>flex-initial md:flex-1</code> はデフォルトでアイテムが縮小のみ可能にし、中程度の画面サイズ以上で利用可能なスペースを均等に分け合うようにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="flex ...">
  <div class="flex-initial md:flex-1 ...">Item 1</div>
  <div class="flex-initial md:flex-1 ...">Item 2</div>
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
                <code>flex</code> ユーティリティは、<code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code> を一括で設定します。個別に制御したい場合は、それぞれのユーティリティ (<code>grow</code>, <code>shrink</code>, <code>basis-*</code>) を使用します。
              </li>
              <li>
                <code>flex-1</code> (<code>flex: 1 1 0%;</code>) は、アイテムのコンテンツサイズに関係なく、利用可能なスペースを均等に分配したい場合に便利です。
              </li>
               <li>
                <code>flex-auto</code> (<code>flex: 1 1 auto;</code>) は、アイテムのコンテンツサイズを考慮しつつ、利用可能なスペースを分配したい場合に適しています。
              </li>
               <li>
                <code>flex-initial</code> (<code>flex: 0 1 auto;</code>) は、アイテムが自身のサイズを基本とし、必要に応じて縮小するが拡大はしない場合に用います。
              </li>
               <li>
                <code>flex-none</code> (<code>flex: 0 0 auto;</code>) は、アイテムのサイズを固定し、伸縮させたくない場合に使用します。
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
                <code>flex-grow</code> (<code>grow</code>, <code>grow-0</code>): 個別に拡大係数を設定します。
              </li>
              <li>
                <code>flex-shrink</code> (<code>shrink</code>, <code>shrink-0</code>): 個別に縮小係数を設定します。
              </li>
              <li>
                <code>flex-basis</code> (<code>basis-*</code>): 個別に基準サイズを設定します。
              </li>
               <li>
                <code>display</code> (<code>flex</code>, <code>inline-flex</code>): 要素をフレックスコンテナにします。
              </li>
               <li>
                <code>flex-direction</code> / <code>flex-wrap</code>: コンテナの挙動を設定します。
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
                  href="https://tailwindcss.com/docs/flex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Flex
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: flex
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FlexPage;
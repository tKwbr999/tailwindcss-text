import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const MarginAllExample: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="m-4 bg-blue-200 dark:bg-blue-900 p-2 rounded text-blue-800 dark:text-blue-200">
        m-4 (全方向に 1rem)
      </div>
      <div className="bg-gray-300 dark:bg-gray-600 p-2 rounded text-gray-800 dark:text-gray-200">隣接要素</div>
    </div>
  );
};

const MarginHorizontalExample: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <div className="mx-8 my-2 bg-green-200 dark:bg-green-900 p-2 rounded text-green-800 dark:text-green-200"> {/* my-2 で上下マージン */}
        mx-8 (左右に 2rem)
      </div>
       <div className="bg-gray-300 dark:bg-gray-600 p-2 rounded text-gray-800 dark:text-gray-200">隣接要素</div>
    </div>
  );
};

const MarginVerticalExample: React.FC = () => {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <div className="my-6 mx-2 bg-yellow-200 dark:bg-yellow-900 p-2 rounded text-yellow-800 dark:text-yellow-200"> {/* mx-2 で左右マージン */}
          my-6 (上下に 1.5rem)
        </div>
         <div className="bg-gray-300 dark:bg-gray-600 p-2 rounded text-gray-800 dark:text-gray-200">隣接要素</div>
      </div>
    );
  };

const MarginSideExample: React.FC = () => {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <div className="mt-6 mb-2 ml-4 mr-8 bg-red-200 dark:bg-red-900 p-2 rounded text-red-800 dark:text-red-200">
          mt-6 mb-2 ml-4 mr-8 (上: 1.5rem, 下: 0.5rem, 左: 1rem, 右: 2rem)
        </div>
         <div className="bg-gray-300 dark:bg-gray-600 p-2 rounded text-gray-800 dark:text-gray-200">隣接要素</div>
      </div>
    );
  };

const MarginLogicalExample: React.FC = () => {
    // 注意: ms-* / me-* は書字方向 (LTR/RTL) に依存します。
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <div className="ms-8 me-4 my-2 bg-purple-200 dark:bg-purple-900 p-2 rounded text-purple-800 dark:text-purple-200">
          ms-8 me-4 (開始側: 2rem, 終了側: 1rem - LTRの場合)
        </div>
         <div className="bg-gray-300 dark:bg-gray-600 p-2 rounded text-gray-800 dark:text-gray-200">隣接要素</div>
      </div>
    );
  };

const MarginAutoExample: React.FC = () => {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <div className="mx-auto w-1/2 bg-pink-200 dark:bg-pink-900 p-2 rounded text-pink-800 dark:text-pink-200 text-center">
          mx-auto (左右マージン自動で中央揃え)
        </div>
      </div>
    );
  };

const NegativeMarginExample: React.FC = () => {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-hidden"> {/* overflow-hidden で親の範囲を示す */}
        <div className="-m-4 bg-teal-200 dark:bg-teal-900 p-4 rounded text-teal-800 dark:text-teal-200">
          -m-4 (全方向に負のマージン -1rem)
          <div className="bg-teal-400 dark:bg-teal-600 p-2">Inner Content</div>
        </div>
         <div className="mt-2 bg-gray-300 dark:bg-gray-600 p-2 rounded text-gray-800 dark:text-gray-200">隣接要素 (負のマージン分近づく)</div>
      </div>
    );
  };


// ページコンポーネント本体
const MarginPage: React.FC = () => {
  // コードスニペットを定義
  const mAllHtml = `<div class="m-4 ...">...</div>`;
  const mXHtml = `<div class="mx-8 ...">...</div>`;
  const mYHtml = `<div class="my-6 ...">...</div>`;
  const mSideHtml = `<div class="mt-6 mb-2 ml-4 mr-8 ...">...</div>`;
  const mLogicalHtml = `<div class="ms-8 me-4 ...">...</div>`; // v3.3+
  const mAutoHtml = `<div class="mx-auto w-1/2 ...">...</div>`; // 中央揃え
  const mNegativeHtml = `<div class="-m-4 ...">...</div>`; // 負のマージン


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Spacing: Margin (マージン)
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
              要素の境界線 (border) の外側にスペース (外側の余白) を設定するためのユーティリティクラスです。要素間の間隔を制御します。
            </p>
            <p>
              CSS の <code>margin</code>, <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, <code>margin-left</code>, および論理プロパティ (<code>margin-inline-start</code>, <code>margin-inline-end</code>) を制御します。
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
              <code>m{'{side}'}-{'{size}'}</code> の形式でクラスを要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>m-{'{size}'}</code></strong>: 全方向 (上下左右) にマージンを設定します。</li>
              <li><strong><code>mx-{'{size}'}</code></strong>: 水平方向 (左右) にマージンを設定します (<code>margin-left</code> と <code>margin-right</code>)。</li>
              <li><strong><code>my-{'{size}'}</code></strong>: 垂直方向 (上下) にマージンを設定します (<code>margin-top</code> と <code>margin-bottom</code>)。</li>
              <li><strong><code>mt-{'{size}'}</code></strong>: 上方向 (<code>margin-top</code>) にマージンを設定します。</li>
              <li><strong><code>mr-{'{size}'}</code></strong>: 右方向 (<code>margin-right</code>) にマージンを設定します。</li>
              <li><strong><code>mb-{'{size}'}</code></strong>: 下方向 (<code>margin-bottom</code>) にマージンを設定します。</li>
              <li><strong><code>ml-{'{size}'}</code></strong>: 左方向 (<code>margin-left</code>) にマージンを設定します。</li>
              {/* Tailwind v3.3+ */}
              <li><strong><code>ms-{'{size}'}</code></strong>: 書字方向の開始側 (通常は左) にマージンを設定します (<code>margin-inline-start</code>)。 (v3.3+)</li>
              <li><strong><code>me-{'{size}'}</code></strong>: 書字方向の終了側 (通常は右) にマージンを設定します (<code>margin-inline-end</code>)。 (v3.3+)</li>
            </ul>
             <p className="mt-4">
              <code>{'{size}'}</code> には、Tailwind のデフォルトのスペーシングスケール (例: <code>0</code>, <code>px</code>, <code>0.5</code>, <code>1</code>, ..., <code>96</code>)、<code>auto</code> を使用できます。任意の値 (例: <code>m-[1.25rem]</code>, <code>mx-[5%]</code>) や負の値 (例: <code>-mt-4</code>) も使用可能です (Tailwind JIT モード)。
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
              異なる margin ユーティリティの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* All Sides */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">全方向 (m-*)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{mAllHtml}</code>
              </pre>
              <MarginAllExample />
            </div>
            {/* Horizontal */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">水平方向 (mx-*)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{mXHtml}</code>
              </pre>
              <MarginHorizontalExample />
            </div>
             {/* Vertical */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">垂直方向 (my-*)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{mYHtml}</code>
              </pre>
              <MarginVerticalExample />
            </div>
             {/* Individual Sides */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">個別方向 (mt-*, mr-*, mb-*, ml-*)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{mSideHtml}</code>
              </pre>
              <MarginSideExample />
            </div>
             {/* Logical Properties */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">論理プロパティ (ms-*, me-*) (v3.3+)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{mLogicalHtml}</code>
              </pre>
              <MarginLogicalExample />
            </div>
             {/* Auto */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">自動マージン (mx-auto)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{mAutoHtml}</code>
              </pre>
              <MarginAutoExample />
            </div>
             {/* Negative Margin */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">負のマージン (-m-*)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{mNegativeHtml}</code>
              </pre>
              <NegativeMarginExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてマージンを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>m-4 md:m-8</code> はデフォルトで <code>1rem</code>、中程度の画面サイズ以上で <code>2rem</code> のマージンを全方向に設定します。<code>md:mx-auto</code> のように自動マージンを適用することも一般的です。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="m-4 md:m-8 lg:mx-auto ...">
  Responsive Margin
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
                マージンは要素の外側のスペースです。要素の内側のスペースを設定するには <code>padding</code> ユーティリティを使用します。
              </li>
              <li>
                <strong>マージンの相殺 (Margin Collapsing):</strong> 通常のブロック要素では、隣接する要素の垂直マージン (上下のマージン) が重なると、大きい方のマージンのみが適用される「マージンの相殺」という現象が発生します。Flexbox や Grid コンテナ内のアイテムでは、通常マージンの相殺は発生しません。
              </li>
               <li>
                <code>mx-auto</code> は、幅が指定されたブロックレベル要素を水平方向中央に配置するためによく使用されます。
              </li>
               <li>
                負のマージンは、要素を通常の位置から「引き寄せたり」、隣接する要素と重ねたりするために使用できますが、レイアウトが複雑になる可能性があるため注意が必要です。
              </li>
               <li>
                論理プロパティ (<code>ms-*</code>, <code>me-*</code>) は書字方向を考慮したマージン設定に便利です。
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
                <code>padding</code> (<code>p-*</code>, <code>px-*</code>, <code>pt-*</code> など): 要素の内側の余白を設定します。
              </li>
              <li>
                <code>space</code> (<code>space-x-*</code>, <code>space-y-*</code>): Flexbox や Grid の子要素間に均等なマージンを追加します (マージンの相殺を回避できます)。
              </li>
               <li>
                <code>width</code> (<code>w-*</code>): 要素の幅を設定します。<code>mx-auto</code> で中央揃えする場合に必要です。
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
                  href="https://tailwindcss.com/docs/margin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Margin
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: margin
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarginPage;
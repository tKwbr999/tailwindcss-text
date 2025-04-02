import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const JustifyStartExample: React.FC = () => {
  return (
    <div className="flex justify-start bg-gray-100 dark:bg-gray-800 p-2 rounded space-x-2">
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded">1</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded">2</div>
      <div className="bg-blue-300 dark:bg-blue-700 p-4 rounded">3</div>
      {/* アイテムはコンテナの開始位置 (左端) に寄せられる */}
    </div>
  );
};

const JustifyEndExample: React.FC = () => {
  return (
    <div className="flex justify-end bg-gray-100 dark:bg-gray-800 p-2 rounded space-x-2">
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded">1</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded">2</div>
      <div className="bg-green-300 dark:bg-green-700 p-4 rounded">3</div>
      {/* アイテムはコンテナの終了位置 (右端) に寄せられる */}
    </div>
  );
};

const JustifyCenterExample: React.FC = () => {
    return (
      <div className="flex justify-center bg-gray-100 dark:bg-gray-800 p-2 rounded space-x-2">
        <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded">1</div>
        <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded">2</div>
        <div className="bg-yellow-300 dark:bg-yellow-700 p-4 rounded">3</div>
        {/* アイテムはコンテナの中央に配置される */}
      </div>
    );
  };

const JustifyBetweenExample: React.FC = () => {
    return (
      <div className="flex justify-between bg-gray-100 dark:bg-gray-800 p-2 rounded"> {/* space-x は不要 */}
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded">1</div>
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded">2</div>
        <div className="bg-red-300 dark:bg-red-700 p-4 rounded">3</div>
        {/* 最初と最後のアイテムは端に寄せられ、残りのスペースがアイテム間に均等に分配される */}
      </div>
    );
  };

const JustifyAroundExample: React.FC = () => {
    return (
      <div className="flex justify-around bg-gray-100 dark:bg-gray-800 p-2 rounded"> {/* space-x は不要 */}
        <div className="bg-purple-300 dark:bg-purple-700 p-4 rounded">1</div>
        <div className="bg-purple-300 dark:bg-purple-700 p-4 rounded">2</div>
        <div className="bg-purple-300 dark:bg-purple-700 p-4 rounded">3</div>
        {/* 各アイテムの左右に均等なスペースが分配される (結果的にアイテム間のスペースは端のスペースの2倍になる) */}
      </div>
    );
  };

const JustifyEvenlyExample: React.FC = () => {
    return (
      <div className="flex justify-evenly bg-gray-100 dark:bg-gray-800 p-2 rounded"> {/* space-x は不要 */}
        <div className="bg-pink-300 dark:bg-pink-700 p-4 rounded">1</div>
        <div className="bg-pink-300 dark:bg-pink-700 p-4 rounded">2</div>
        <div className="bg-pink-300 dark:bg-pink-700 p-4 rounded">3</div>
        {/* アイテム間およびアイテムとコンテナ端の間のスペースがすべて均等になるように分配される */}
      </div>
    );
  };

const JustifyStretchExample: React.FC = () => {
    // 注意: justify-stretch は v3.3+ で、かつアイテムに幅が指定されていない場合に効果があります。
    //       Grid レイアウトでより一般的に使用されます。Flexbox での効果は限定的です。
    return (
      <div className="flex justify-stretch bg-gray-100 dark:bg-gray-800 p-2 rounded space-x-2 h-20"> {/* 高さを指定 */}
        <div className="bg-indigo-300 dark:bg-indigo-700 p-4 rounded text-center">Stretch? 1</div>
        <div className="bg-indigo-300 dark:bg-indigo-700 p-4 rounded text-center">Stretch? 2</div>
        <div className="bg-indigo-300 dark:bg-indigo-700 p-4 rounded text-center">Stretch? 3</div>
        {/* Flexbox では auto サイズのアイテムがスペースを埋めるように拡大する (justify-stretch 自体の直接効果ではない) */}
      </div>
    );
  };


// ページコンポーネント本体
const JustifyContentPage: React.FC = () => {
  // コードスニペットを定義
  const justifyStartHtml = `<div class="flex justify-start ...">...</div>`;
  const justifyEndHtml = `<div class="flex justify-end ...">...</div>`;
  const justifyCenterHtml = `<div class="flex justify-center ...">...</div>`;
  const justifyBetweenHtml = `<div class="flex justify-between ...">...</div>`;
  const justifyAroundHtml = `<div class="flex justify-around ...">...</div>`;
  const justifyEvenlyHtml = `<div class="flex justify-evenly ...">...</div>`;
  const justifyStretchHtml = `<div class="flex justify-stretch ...">...</div>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Flexbox & Grid: Justify Content (主軸方向の揃え)
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
              フレックスコンテナまたはグリッドコンテナ内のアイテムを、主軸 (main axis) 方向 (通常は水平方向) にどのように配置し、スペースを分配するかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>justify-content</code> プロパティを制御します。
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
              <code>justify-{'{alignment}'}</code> の形式でクラスをフレックスコンテナまたはグリッドコンテナに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>justify-start</code></strong>: デフォルト (Flexbox)。アイテムをコンテナの開始位置 (通常は左端) に寄せます。</li>
              <li><strong><code>justify-end</code></strong>: アイテムをコンテナの終了位置 (通常は右端) に寄せます。</li>
              <li><strong><code>justify-center</code></strong>: アイテムをコンテナの中央に配置します。</li>
              <li><strong><code>justify-between</code></strong>: 最初と最後のアイテムをコンテナの両端に配置し、残りのアイテム間のスペースを均等に分配します。</li>
              <li><strong><code>justify-around</code></strong>: 各アイテムの左右に均等なスペースを分配します。結果として、アイテム間のスペースはコンテナ端とアイテム間のスペースの2倍になります。</li>
              <li><strong><code>justify-evenly</code></strong>: すべてのアイテム間、および最初/最後のアイテムとコンテナ端の間のスペースが均等になるように分配します。</li>
              <li><strong><code>justify-stretch</code></strong>: デフォルト (Grid)。アイテムがコンテナの主軸方向のスペースを埋めるように引き伸ばされます (アイテムにサイズ指定がない場合)。Flexbox での効果は限定的です。 (v3.3+)</li>
            </ul>
             {/* Tailwind v3.3+ */}
             <p className="mt-4">
              書字方向に対応する <code>justify-normal</code> (デフォルトの揃え方、通常 <code>start</code>), <code>justify-stretch</code> もあります (v3.3+)。
            </p>
          </CardContent>
        </Card>

        {/* 各パラメータの例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例 (Flexbox)
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              Flexbox コンテナに対する各 justify-content 値の適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Start */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">justify-start (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{justifyStartHtml}</code>
              </pre>
              <JustifyStartExample />
            </div>
            {/* End */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">justify-end</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{justifyEndHtml}</code>
              </pre>
              <JustifyEndExample />
            </div>
             {/* Center */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">justify-center</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{justifyCenterHtml}</code>
              </pre>
              <JustifyCenterExample />
            </div>
             {/* Between */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">justify-between</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{justifyBetweenHtml}</code>
              </pre>
              <JustifyBetweenExample />
            </div>
             {/* Around */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">justify-around</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{justifyAroundHtml}</code>
              </pre>
              <JustifyAroundExample />
            </div>
             {/* Evenly */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">justify-evenly</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{justifyEvenlyHtml}</code>
              </pre>
              <JustifyEvenlyExample />
            </div>
             {/* Stretch */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">justify-stretch (v3.3+)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{justifyStretchHtml}</code>
              </pre>
              <JustifyStretchExample />
               <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                (Flexbox では通常、アイテムのサイズが auto の場合にスペースを埋めるように拡大します)
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて主軸方向の揃え方を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>justify-center md:justify-between</code> はデフォルトで中央揃え、中程度の画面サイズ以上で両端揃え (間隔均等) にします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="flex justify-center md:justify-between ...">
  {/* ... items */}
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
                <code>justify-content</code> はフレックスコンテナまたはグリッドコンテナに適用します。
              </li>
              <li>
                効果の方向は <code>flex-direction</code> (Flexbox の場合) や書字方向 (direction, writing-mode) に依存します。デフォルトの <code>flex-row</code> (水平方向) を前提として説明しています。<code>flex-col</code> の場合は垂直方向の揃えに影響します。
              </li>
               <li>
                <code>justify-between</code>, <code>justify-around</code>, <code>justify-evenly</code> は、コンテナ内に余剰スペースがある場合にのみ効果が顕著になります。アイテムがコンテナ幅いっぱいに広がっている場合は違いが見えません。
              </li>
               <li>
                Grid レイアウトにおけるデフォルトは <code>justify-content: stretch</code> ですが、Tailwind の <code>justify-stretch</code> クラスは v3.3 で追加されました。それ以前のバージョンでは任意の値を使う必要があります。
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
                <code>display</code> (<code>flex</code>, <code>inline-flex</code>, <code>grid</code>, <code>inline-grid</code>): 要素をコンテナにします。
              </li>
              <li>
                <code>flex-direction</code> (<code>flex-row</code>, <code>flex-col</code> など): 主軸の方向を決定します。
              </li>
              <li>
                <code>align-content</code> (<code>content-*</code>): 複数行/列になった場合の、交差軸方向の行/列間のスペース配分や揃え方を制御します。
              </li>
               <li>
                <code>align-items</code> (<code>items-*</code>): 単一行/列の場合の、交差軸方向のアイテムの揃え方を制御します。
              </li>
               <li>
                <code>justify-items</code> (<code>justify-items-*</code>): Grid レイアウトにおいて、グリッドエリア内でのアイテムの主軸方向の揃え方を制御します。
              </li>
               <li>
                <code>justify-self</code> (<code>justify-self-*</code>): Grid レイアウトにおいて、個々のグリッドアイテム自身の主軸方向の揃え方を制御します。
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
                  href="https://tailwindcss.com/docs/justify-content"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Justify Content
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: justify-content
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JustifyContentPage;
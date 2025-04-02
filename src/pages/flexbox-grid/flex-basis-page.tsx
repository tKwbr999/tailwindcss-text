import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const BasisAutoExample: React.FC = () => {
  return (
    <div className="flex flex-row space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded">
      <div className="basis-auto bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">Auto</div>
      <div className="basis-auto bg-blue-300 dark:bg-blue-700 p-2 rounded text-center grow">Auto & Grow</div> {/* grow で余白を埋める */}
      <div className="basis-auto bg-blue-300 dark:bg-blue-700 p-2 rounded text-center">Auto</div>
    </div>
  );
};

const BasisFixedExample: React.FC = () => {
  return (
    <div className="flex flex-row space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded">
      <div className="basis-1/4 bg-green-300 dark:bg-green-700 p-2 rounded text-center">1/4</div>
      <div className="basis-1/2 bg-green-300 dark:bg-green-700 p-2 rounded text-center">1/2</div>
      <div className="basis-1/4 bg-green-300 dark:bg-green-700 p-2 rounded text-center">1/4</div>
    </div>
  );
};

const BasisPixelsExample: React.FC = () => {
    return (
      <div className="flex flex-row space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded">
        <div className="basis-20 bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">20 (80px)</div>
        <div className="basis-32 bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center grow">32 (128px) & Grow</div>
        <div className="basis-16 bg-yellow-300 dark:bg-yellow-700 p-2 rounded text-center">16 (64px)</div>
      </div>
    );
  };

const BasisFullExample: React.FC = () => {
    return (
      <div className="flex flex-wrap bg-gray-100 dark:bg-gray-800 p-2 rounded"> {/* flex-wrap が必要 */}
        <div className="basis-full bg-red-300 dark:bg-red-700 p-2 rounded text-center mb-2">Full (100%)</div>
        <div className="basis-1/3 bg-red-300 dark:bg-red-700 p-2 rounded text-center">1/3</div>
        <div className="basis-1/3 bg-red-300 dark:bg-red-700 p-2 rounded text-center ml-2">1/3</div>
        <div className="basis-1/3 bg-red-300 dark:bg-red-700 p-2 rounded text-center ml-2">1/3</div>
      </div>
    );
  };


// ページコンポーネント本体
const FlexBasisPage: React.FC = () => {
  // コードスニペットを定義
  const basisAutoHtml = `
<div class="flex flex-row ...">
  <div class="basis-auto ...">Auto</div> {/* コンテンツに基づくサイズ */}
  <div class="basis-auto grow ...">Auto & Grow</div> {/* 余白を埋める */}
  <div class="basis-auto ...">Auto</div>
</div>
  `.trim();

  const basisFixedHtml = `
<div class="flex flex-row ...">
  <div class="basis-1/4 ...">1/4</div> {/* 幅の 25% */}
  <div class="basis-1/2 ...">1/2</div> {/* 幅の 50% */}
  <div class="basis-1/4 ...">1/4</div> {/* 幅の 25% */}
</div>
  `.trim();

  const basisPixelsHtml = `
<div class="flex flex-row ...">
  <div class="basis-20 ...">80px</div> {/* 固定幅 */}
  <div class="basis-32 grow ...">128px & Grow</div> {/* 固定幅 + 余白 */}
  <div class="basis-16 ...">64px</div> {/* 固定幅 */}
</div>
  `.trim();

    const basisFullHtml = `
<div class="flex flex-wrap ..."> {/* flex-wrap が重要 */}
  <div class="basis-full ...">Full (100%)</div> {/* 常に1行占有 */}
  <div class="basis-1/3 ...">1/3</div>
  <div class="basis-1/3 ...">1/3</div>
  <div class="basis-1/3 ...">1/3</div>
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
          Flexbox & Grid: Flex Basis (フレックス基準サイズ)
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
              フレックスアイテムの初期の主軸方向のサイズ (main size) を設定するためのユーティリティクラスです。
              フレックスコンテナ内のアイテムが利用可能なスペースに分配される前の、基準となるサイズを定義します。
            </p>
            <p>
              CSS の <code>flex-basis</code> プロパティを制御します。
            </p>
            <p>
              <code>flex-grow</code> や <code>flex-shrink</code> と組み合わせて、アイテムがどのように伸縮するかを制御する上で重要な役割を果たします。
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
              <code>basis-{'{size}'}</code> の形式でクラスをフレックスアイテムに適用します。
            </p>
            <p><code>{'{size}'}</code> には以下の値を使用できます:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>auto</code></strong> (<code>flex-basis: auto;</code>): デフォルト。アイテムのサイズは、主軸方向の <code>width</code> または <code>height</code> プロパティ (またはコンテンツサイズ) に基づきます。</li>
              <li><strong>Tailwind のスペーシング/サイズスケール</strong> (例: <code>0</code>, <code>px</code>, <code>0.5</code>, <code>1</code>, ..., <code>96</code>): 固定の長さを基準サイズとして設定します (例: <code>basis-20</code> は <code>flex-basis: 5rem;</code>)。</li>
              <li><strong>分数</strong> (例: <code>1/2</code>, <code>1/3</code>, <code>2/3</code>, ..., <code>11/12</code>): コンテナの主軸方向のサイズに対する割合を基準サイズとして設定します (例: <code>basis-1/2</code> は <code>flex-basis: 50%;</code>)。</li>
              <li><strong><code>full</code></strong> (<code>flex-basis: 100%;</code>): コンテナの主軸方向のサイズ全体を基準サイズとして設定します。<code>flex-wrap</code> と組み合わせると、アイテムが常に1行を占めるようになります。</li>
            </ul>
             <p className="mt-4">
              任意の値 (例: <code>basis-[300px]</code>, <code>basis-[25%]</code>) も使用可能です (Tailwind JIT モード)。
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
              異なる flex-basis 値を持つフレックスアイテムの初期サイズ。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Auto */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">basis-auto (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{basisAutoHtml}</code>
              </pre>
              <BasisAutoExample />
            </div>
            {/* Fixed (Fraction) */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">固定割合 (分数)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{basisFixedHtml}</code>
              </pre>
              <BasisFixedExample />
            </div>
             {/* Fixed (Pixels/Rem) */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">固定長 (px/rem)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{basisPixelsHtml}</code>
              </pre>
              <BasisPixelsExample />
            </div>
             {/* Full */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">basis-full</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{basisFullHtml}</code>
              </pre>
              <BasisFullExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみ <code>flex-basis</code> を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>basis-full md:basis-1/2</code> はデフォルトで全幅を占め、中程度の画面サイズ以上で半分の幅を基準サイズとします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="flex flex-wrap ...">
  <div class="basis-full md:basis-1/2 ...">Item 1</div>
  <div class="basis-full md:basis-1/2 ...">Item 2</div>
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
                <code>flex-basis</code> はあくまで初期サイズであり、<code>flex-grow</code> や <code>flex-shrink</code> の設定、およびコンテナ内の利用可能なスペースによって最終的なサイズは変化します。
              </li>
              <li>
                <code>flex-basis</code> が <code>auto</code> 以外に設定されている場合、通常はアイテムの主軸方向の <code>width</code> または <code>height</code> プロパティよりも優先されます。
              </li>
               <li>
                <code>flex</code> ユーティリティ (例: <code>flex-1</code>, <code>flex-auto</code>, <code>flex-none</code>) は、<code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code> を一括で設定するショートハンドです。これらと <code>basis-*</code> を同時に使用すると、意図しない結果になる可能性があります。通常はどちらか一方を使用します。
              </li>
               <li>
                <code>basis-full</code> を使用する場合、アイテムが折り返すように親のフレックスコンテナに <code>flex-wrap</code> または <code>flex-wrap-reverse</code> を設定する必要があります。
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
                <code>flex-grow</code> (<code>grow</code>, <code>grow-0</code>): アイテムが利用可能なスペースをどれだけ占めるかを設定します。
              </li>
              <li>
                <code>flex-shrink</code> (<code>shrink</code>, <code>shrink-0</code>): アイテムがスペース不足時にどれだけ縮小するかを設定します。
              </li>
              <li>
                <code>flex</code> (<code>flex-1</code>, <code>flex-auto</code>, <code>flex-none</code>): <code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code> のショートハンド。
              </li>
               <li>
                <code>flex-direction</code> (<code>flex-row</code>, <code>flex-col</code> など): フレックスアイテムが配置される主軸方向を決定します。<code>flex-basis</code> が幅と高さのどちらに対応するかに影響します。
              </li>
               <li>
                <code>width</code> / <code>height</code>: <code>flex-basis: auto;</code> の場合の基準サイズ、または <code>flex-basis</code> が設定されていない場合のサイズとして機能します。
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
                  href="https://tailwindcss.com/docs/flex-basis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Flex Basis
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: flex-basis
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FlexBasisPage;
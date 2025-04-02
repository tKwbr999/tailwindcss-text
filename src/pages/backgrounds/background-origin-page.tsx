import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// 背景画像の位置を示すため、背景画像、パディング、ボーダーを設定します。
// bg-center と bg-no-repeat を使用して位置を明確にします。

const BgOriginBorderExample: React.FC = () => {
  return (
    <div
      className="bg-origin-border p-6 border-8 border-dashed border-blue-500/50 bg-cyan-300 rounded bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("https://via.placeholder.com/50/06b6d4/ffffff?text=BG")' }} // ダミー画像
    >
      <p className="text-blue-900 h-24"> {/* 高さを確保 */}
        Bg Origin Border (デフォルト): 背景画像は境界線の左上隅を基準に配置されます。
      </p>
    </div>
  );
};

const BgOriginPaddingExample: React.FC = () => {
  return (
    <div
      className="bg-origin-padding p-6 border-8 border-dashed border-green-500/50 bg-lime-300 rounded bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("https://via.placeholder.com/50/16a34a/ffffff?text=BG")' }}
    >
      <p className="text-green-900 h-24">
        Bg Origin Padding: 背景画像はパディング領域の左上隅を基準に配置されます (境界線の内側)。
      </p>
    </div>
  );
};

const BgOriginContentExample: React.FC = () => {
    return (
      <div
        className="bg-origin-content p-6 border-8 border-dashed border-yellow-500/50 bg-amber-300 rounded bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://via.placeholder.com/50/f59e0b/ffffff?text=BG")' }}
      >
        <p className="text-yellow-900 h-24">
          Bg Origin Content: 背景画像はコンテンツ領域の左上隅を基準に配置されます (パディングの内側)。
        </p>
      </div>
    );
  };


// ページコンポーネント本体
const BackgroundOriginPage: React.FC = () => {
  // コードスニペットを定義
  const originBorderHtml = `<div class="bg-origin-border p-6 border-8 bg-center bg-no-repeat ..." style="background-image: url(...)">...</div>`; // Default
  const originPaddingHtml = `<div class="bg-origin-padding p-6 border-8 bg-center bg-no-repeat ..." style="background-image: url(...)">...</div>`;
  const originContentHtml = `<div class="bg-origin-content p-6 border-8 bg-center bg-no-repeat ..." style="background-image: url(...)">...</div>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Backgrounds: Background Origin (背景画像の原点)
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
              要素の背景画像 (<code>background-image</code>) の描画開始位置 (原点) を制御するためのユーティリティクラスです。背景画像が境界ボックス、パディングボックス、またはコンテンツボックスのどこを基準に配置されるかを設定します。
            </p>
            <p>
              CSS の <code>background-origin</code> プロパティを制御します。
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
              <code>bg-origin-{'{box}'}</code> の形式でクラスを背景画像を持つ要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>bg-origin-border</code></strong>: 背景画像の原点を境界ボックス (border box) の左上隅に設定します。背景は境界線の下にも描画されます。</li>
              <li><strong><code>bg-origin-padding</code></strong>: デフォルト。背景画像の原点をパディングボックス (padding box) の左上隅に設定します。背景はパディング領域まで描画されます。</li>
              <li><strong><code>bg-origin-content</code></strong>: 背景画像の原点をコンテンツボックス (content box) の左上隅に設定します。背景はコンテンツ領域のみに描画されます。</li>
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
              異なる background-origin ユーティリティの適用例。背景画像の位置に注目してください (中央揃えで表示)。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Border */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">bg-origin-border</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{originBorderHtml}</code>
              </pre>
              <BgOriginBorderExample />
            </div>
            {/* Padding */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">bg-origin-padding (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{originPaddingHtml}</code>
              </pre>
              <BgOriginPaddingExample />
            </div>
             {/* Content */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">bg-origin-content</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{originContentHtml}</code>
              </pre>
              <BgOriginContentExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて背景画像の原点を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>bg-origin-padding md:bg-origin-content</code> は、小さい画面ではパディングボックス基準、中程度の画面サイズ以上ではコンテンツボックス基準で背景画像を配置します。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="bg-origin-padding md:bg-origin-content ..." style="background-image: url(...)">
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
                <code>background-origin</code> は背景画像の配置の「原点」を設定します。実際の背景画像の位置は <code>background-position</code> によってさらに調整されます。
              </li>
              <li>
                このプロパティは、要素に背景画像 (<code>background-image</code>) が設定されている場合にのみ効果があります。背景色のみの場合は影響しません。
              </li>
               <li>
                <code>background-clip</code> プロパティと密接に関連しています。<code>background-clip</code> は背景が描画される領域を決定し、<code>background-origin</code> はその領域内で背景画像がどこを基準に配置されるかを決定します。
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
                <code>background-image</code> (<code>bg-*</code>): 背景画像やグラデーションを設定します。
              </li>
              <li>
                <code>background-position</code> (<code>bg-*</code>): 背景画像の位置を設定します。
              </li>
              <li>
                <code>background-clip</code> (<code>bg-clip-*</code>): 背景のクリッピング領域を設定します。
              </li>
               <li>
                <code>padding</code> (<code>p-*</code>): パディングを設定します。
              </li>
               <li>
                <code>border-width</code> (<code>border-*</code>): 境界線の太さを設定します。
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
                  href="https://tailwindcss.com/docs/background-origin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Background Origin
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: background-origin
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BackgroundOriginPage;
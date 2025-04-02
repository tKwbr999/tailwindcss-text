import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// 背景画像の上にテキストを重ねて効果を示します。

const BlendModeExample: React.FC<{ blendMode: string; label: string }> = ({ blendMode, label }) => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80'; // 山の画像例
  return (
    <div className="relative w-full h-32 rounded overflow-hidden">
      <img
        src={imageUrl}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className={`absolute inset-0 flex items-center justify-center ${blendMode}`}>
        <span className="text-4xl font-extrabold text-white bg-black/30 px-4 py-2 rounded">
          {label}
        </span>
      </div>
      <span className="absolute top-1 left-1 text-xs p-1 bg-black/70 text-white rounded-sm">
        {blendMode}
      </span>
    </div>
  );
};

// ページコンポーネント本体
const MixBlendModePage: React.FC = () => {
  // // コードスニペットを定義 (代表例)
  // const blendMultiplyHtml = `<div class="mix-blend-multiply ...">...</div>`;
  // const blendScreenHtml = `<div class="mix-blend-screen ...">...</div>`;
  // const blendOverlayHtml = `<div class="mix-blend-overlay ...">...</div>`;
  // const blendNormalHtml = `<div class="mix-blend-normal ...">...</div>`; // Default

  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Effects: Mix Blend Mode (混合ブレンドモード)
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
              要素のコンテンツが、その要素の背景や下にある要素とどのように色が混合 (ブレンド)
              されるかを設定するためのユーティリティクラスです。画像の上にテキストを重ねて特殊な効果を出す場合などに使用されます。
            </p>
            <p>
              CSS の <code>mix-blend-mode</code> プロパティを制御します。
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
              <code>mix-blend-{'{mode}'}</code> の形式でクラスを要素に適用します。
            </p>
            <p>利用可能なモード (一部):</p>
            <ul className="list-disc list-inside space-y-1 pl-4 columns-2">
              <li>
                <strong>
                  <code>mix-blend-normal</code>
                </strong>
                : デフォルト。ブレンドしません。
              </li>
              <li>
                <strong>
                  <code>mix-blend-multiply</code>
                </strong>
                : 乗算。色を掛け合わせ、結果は暗くなります。
              </li>
              <li>
                <strong>
                  <code>mix-blend-screen</code>
                </strong>
                : スクリーン。色を反転して掛け合わせ、結果は明るくなります。
              </li>
              <li>
                <strong>
                  <code>mix-blend-overlay</code>
                </strong>
                : オーバーレイ。乗算とスクリーンを組み合わせたような効果。
              </li>
              <li>
                <strong>
                  <code>mix-blend-darken</code>
                </strong>
                : 各カラーチャンネルで暗い方の色を選択します。
              </li>
              <li>
                <strong>
                  <code>mix-blend-lighten</code>
                </strong>
                : 各カラーチャンネルで明るい方の色を選択します。
              </li>
              <li>
                <strong>
                  <code>mix-blend-color-dodge</code>
                </strong>
                : 覆い焼きカラー。下のレイヤーを明るくします。
              </li>
              <li>
                <strong>
                  <code>mix-blend-color-burn</code>
                </strong>
                : 焼き込みカラー。下のレイヤーを暗くします。
              </li>
              <li>
                <strong>
                  <code>mix-blend-hard-light</code>
                </strong>
                : ハードライト。
              </li>
              <li>
                <strong>
                  <code>mix-blend-soft-light</code>
                </strong>
                : ソフトライト。
              </li>
              <li>
                <strong>
                  <code>mix-blend-difference</code>
                </strong>
                : 差の絶対値。
              </li>
              <li>
                <strong>
                  <code>mix-blend-exclusion</code>
                </strong>
                : 除外。
              </li>
              <li>
                <strong>
                  <code>mix-blend-hue</code>
                </strong>
                : 色相。
              </li>
              <li>
                <strong>
                  <code>mix-blend-saturation</code>
                </strong>
                : 彩度。
              </li>
              <li>
                <strong>
                  <code>mix-blend-color</code>
                </strong>
                : カラー。
              </li>
              <li>
                <strong>
                  <code>mix-blend-luminosity</code>
                </strong>
                : 輝度。
              </li>
              {/* v3.1+ */}
              <li>
                <strong>
                  <code>mix-blend-plus-lighter</code>
                </strong>
                : 加算 (より明るく)。 (v3.1+)
              </li>
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
              異なる混合ブレンドモードの適用例。背景画像の上にテキストを重ねています。
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <BlendModeExample blendMode="mix-blend-normal" label="Normal" />
            <BlendModeExample blendMode="mix-blend-multiply" label="Multiply" />
            <BlendModeExample blendMode="mix-blend-screen" label="Screen" />
            <BlendModeExample blendMode="mix-blend-overlay" label="Overlay" />
            <BlendModeExample blendMode="mix-blend-darken" label="Darken" />
            <BlendModeExample blendMode="mix-blend-lighten" label="Lighten" />
            <BlendModeExample blendMode="mix-blend-color-dodge" label="Color Dodge" />
            <BlendModeExample blendMode="mix-blend-color-burn" label="Color Burn" />
            <BlendModeExample blendMode="mix-blend-difference" label="Difference" />
            <BlendModeExample blendMode="mix-blend-exclusion" label="Exclusion" />
            <BlendModeExample blendMode="mix-blend-hue" label="Hue" />
            <BlendModeExample blendMode="mix-blend-saturation" label="Saturation" />
            <BlendModeExample blendMode="mix-blend-color" label="Color" />
            <BlendModeExample blendMode="mix-blend-luminosity" label="Luminosity" />
            {/* <BlendModeExample blendMode="mix-blend-plus-lighter" label="Plus Lighter" /> */}{' '}
            {/* v3.1+ */}
          </CardContent>
        </Card>
        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブと状態変化
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              ブレークポイント (<code>md:mix-blend-screen</code> など) や状態 (
              <code>hover:mix-blend-multiply</code> など) に応じて混合ブレンドモードを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、ホバー時にブレンドモードを変更して視覚的なフィードバックを与えることができます。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<div class="relative ...">
  <img src="..." class="absolute ...">
  <div class="absolute mix-blend-normal hover:mix-blend-multiply ...">
    Hover Text
  </div>
</div>
              `.trim()}
              </code>
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
                <code>mix-blend-mode</code>{' '}
                は、要素が重なり合っている場合に効果を発揮します。要素とその背景、または要素とその下にある兄弟要素との間で色が混合されます。
              </li>
              <li>効果は、要素とその背景/下にある要素の色によって大きく異なります。</li>
              <li>
                <code>isolation: isolate</code>{' '}
                を親要素に適用すると、その要素内でのブレンドに限定され、親要素の外にある要素とはブレンドされなくなります。
              </li>
              <li>ブラウザのサポート状況、特に古いブラウザでは注意が必要です。</li>
              <li>
                <code>mix-blend-plus-lighter</code> は Tailwind CSS v3.1 で追加されました。
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
                <code>background-blend-mode</code> (<code>bg-blend-*</code>):
                要素の背景画像と背景色をどのように混合するかを制御します。
              </li>
              <li>
                <code>isolation</code> (<code>isolate</code>, <code>isolation-auto</code>):
                要素が新しいスタッキングコンテキストを作成するかどうかを制御し、ブレンドモードの適用範囲に影響します。
              </li>
              <li>
                <code>opacity</code> (<code>opacity-*</code>):
                要素全体の不透明度を設定します。ブレンド結果に影響します。
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
                  href="https://tailwindcss.com/docs/mix-blend-mode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Mix Blend Mode
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: mix-blend-mode
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MixBlendModePage;

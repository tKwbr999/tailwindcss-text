import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
const BasicExample1: React.FC = () => {
  return (
    <div className="w-full max-w-xl mx-auto"> {/* 親要素で幅を指定 */}
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const BasicExample2: React.FC = () => {
  return (
    <div className="w-48 mx-auto"> {/* 親要素で幅を指定 */}
      <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
        <span className="text-gray-500 dark:text-gray-400">1:1</span>
        {/* <img src="..." alt="..." className="w-full h-full object-cover rounded"> */}
      </div>
    </div>
  );
};

const ResponsiveExample: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="aspect-square md:aspect-video bg-indigo-200 dark:bg-indigo-900 rounded flex items-center justify-center">
        <span className="text-indigo-800 dark:text-indigo-200">aspect-square md:aspect-video</span>
      </div>
    </div>
  );
};

// tailwind.config.js で aspect-4/3 が定義されている前提のコンポーネント
// 実際の表示には tailwind.config.js の設定が必要です
const CustomExample: React.FC = () => {
  return (
    <div className="w-64 mx-auto">
      {/* aspect-4/3 は tailwind.config.js で定義されている必要があります */}
      <div className="aspect-[4/3] bg-teal-200 dark:bg-teal-900 rounded flex items-center justify-center">
        <span className="text-teal-800 dark:text-teal-200">aspect-4/3 (要設定)</span>
      </div>
    </div>
  );
};

const ArbitraryExample: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="aspect-[2/1] bg-rose-200 dark:bg-rose-900 rounded flex items-center justify-center">
        <span className="text-rose-800 dark:text-rose-200">aspect-[2/1]</span>
      </div>
    </div>
  );
};


// ページコンポーネント本体
const AspectRatioPage: React.FC = () => {
  // コードスニペットを定義
  const basicHtml1 = `
{/* 16:9 のアスペクト比を持つ iframe (例: YouTube埋め込み) */}
<div class="w-full max-w-xl mx-auto"> {/* 親要素で幅を指定 */}
  <div class="aspect-video">
    <iframe class="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>
  `.trim();

  const basicHtml2 = `
{/* 正方形のアスペクト比を持つ画像コンテナ */}
<div class="w-48 mx-auto"> {/* 親要素で幅を指定 */}
  <div class="aspect-square bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
    <span class="text-gray-500 dark:text-gray-400">1:1</span>
    {/* <img src="..." alt="..." class="w-full h-full object-cover rounded"> */}
  </div>
</div>
  `.trim();

  const responsiveHtml = `
{/* デフォルトは正方形、md以上で 16:9 */}
<div class="w-full max-w-md mx-auto">
  <div class="aspect-square md:aspect-video bg-indigo-200 dark:bg-indigo-900 rounded flex items-center justify-center">
    <span class="text-indigo-800 dark:text-indigo-200">aspect-square md:aspect-video</span>
  </div>
</div>
  `.trim();

  const customizeJs = `
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3', // aspect-4/3 クラスを追加
        '3/2': '3 / 2', // aspect-3/2 クラスを追加
        'golden': '1.618 / 1', // aspect-golden クラスを追加
      },
    },
  },
}
  `.trim();

  const customizeHtml = `
{/* カスタムアスペクト比を使用 */}
<div class="w-64 mx-auto">
  <div class="aspect-4/3 bg-teal-200 dark:bg-teal-900 rounded flex items-center justify-center">
    <span class="text-teal-800 dark:text-teal-200">aspect-4/3</span>
  </div>
</div>
  `.trim();

  const arbitraryHtml = `
{/* 任意のアスペクト比 2:1 を指定 */}
<div class="w-full max-w-lg mx-auto">
  <div class="aspect-[2/1] bg-rose-200 dark:bg-rose-900 rounded flex items-center justify-center">
    <span class="text-rose-800 dark:text-rose-200">aspect-[2/1]</span>
  </div>
</div>
  `.trim();

  return (
    // prose クラスで見出しやリストなどのスタイルを適用
    <div className="prose lg:prose-xl max-w-none dark:prose-invert p-6">
      {/* ページタイトル */}
      <h1>Layout: Aspect Ratio (アスペクト比)</h1>

      {/* 概要 */}
      <h2>概要</h2>
      <p>
        要素のアスペクト比（幅に対する高さの比率）を固定するためのユーティリティクラスです。主に動画 (<code>iframe</code>) や画像の埋め込みで、親要素の幅に基づいて高さを自動調整し、指定した比率を維持したい場合に使用します。
      </p>

      {/* 基本的な使い方とパラメータ */}
      <h2>基本的な使い方とパラメータ</h2>
      <p>
        <code>aspect-{'{ratio}'}</code> の形式でクラスを指定します。
      </p>
      <ul>
        <li><strong><code>aspect-auto</code></strong>: デフォルト。要素固有のアスペクト比を使用します。</li>
        <li><strong><code>aspect-square</code></strong>: アスペクト比を 1:1 (正方形) にします。</li>
        <li><strong><code>aspect-video</code></strong>: アスペクト比を 16:9 (一般的な動画比率) にします。</li>
      </ul>

      {/* 基本例1 */}
      <h3 className="mt-8">基本例 1: 動画 (16:9)</h3>
      <p>16:9 のアスペクト比を持つ iframe (例: YouTube埋め込み)</p>
      {/* コード表示 */}
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto"><code className="language-html">{basicHtml1}</code></pre>
      {/* 実装サンプル */}
      <div className="my-4 p-4 border rounded dark:border-gray-700">
        <BasicExample1 />
      </div>

      <hr className="my-8 border-dashed dark:border-gray-700" />

      {/* 基本例2 */}
      <h3 className="mt-8">基本例 2: 画像コンテナ (正方形)</h3>
      <p>正方形のアスペクト比を持つ画像コンテナ</p>
      {/* コード表示 */}
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto"><code className="language-html">{basicHtml2}</code></pre>
      {/* 実装サンプル */}
      <div className="my-4 p-4 border rounded dark:border-gray-700">
        <BasicExample2 />
      </div>

      {/* レスポンシブ */}
      <h2 className="mt-12">レスポンシブ</h2>
      <p>
        ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてアスペクト比を変更できます。
      </p>
      <h3 className="mt-8">レスポンシブ例</h3>
      <p>デフォルトは正方形、md以上で 16:9</p>
      {/* コード表示 */}
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto"><code className="language-html">{responsiveHtml}</code></pre>
      {/* 実装サンプル */}
      <div className="my-4 p-4 border rounded dark:border-gray-700">
        <ResponsiveExample />
      </div>

      {/* カスタマイズ */}
      <h2 className="mt-12">カスタマイズ (<code>tailwind.config.js</code>)</h2>
      <p>
        <code>tailwind.config.js</code> の <code>theme.extend.aspectRatio</code> でカスタムのアスペクト比を追加できます。キーがクラス名 (<code>aspect-{'{key}'}</code>) になり、値が比率 (数値または <code>'width/height'</code> 形式の文字列) になります。
      </p>
      {/* コード表示 (JS) */}
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto"><code className="language-javascript">{customizeJs}</code></pre>
      <h3 className="mt-8">カスタム例</h3>
      <p>カスタムアスペクト比を使用 (<code>tailwind.config.js</code> での定義が必要です)</p>
      {/* コード表示 (HTML) */}
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto"><code className="language-html">{customizeHtml}</code></pre>
      {/* 実装サンプル */}
      <div className="my-4 p-4 border rounded dark:border-gray-700">
        <CustomExample />
      </div>

      {/* 任意の値 */}
      <h2 className="mt-12">任意の値 (Arbitrary Values)</h2>
      <p>
        設定ファイルで定義されていない任意のアスペクト比を直接クラス名に記述することも可能です。<code>aspect-[width/height]</code> の形式で指定します。
      </p>
      <h3 className="mt-8">任意の値の例</h3>
      <p>任意のアスペクト比 2:1 を指定</p>
      {/* コード表示 */}
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto"><code className="language-html">{arbitraryHtml}</code></pre>
      {/* 実装サンプル */}
      <div className="my-4 p-4 border rounded dark:border-gray-700">
        <ArbitraryExample />
      </div>

      {/* 注意点 */}
      <h2 className="mt-12">注意点</h2>
      <ul>
        <li>このユーティリティは、要素の<strong>幅</strong>に基づいて<strong>高さ</strong>を自動調整します。したがって、通常は親要素や要素自身に幅を指定する必要があります (<code>w-full</code>, <code>max-w-md</code> など)。</li>
        <li>内部の要素 (例: <code>iframe</code>, <code>img</code>) には <code>w-full h-full</code> を適用して、アスペクト比コンテナいっぱいに広がるようにします。画像の場合は <code>object-fit</code> (例: <code>object-cover</code>) も併用すると良いでしょう。</li>
        <li>この機能は CSS の <code>aspect-ratio</code> プロパティに基づいています。古いブラウザではサポートされていない場合があります。</li>
      </ul>

      {/* 関連ユーティリティ */}
      <h2 className="mt-12">関連ユーティリティ</h2>
      <ul>
        <li><code>object-fit</code> (<code>object-cover</code>, <code>object-contain</code> など): <code>&amp;lt;img&amp;gt;</code> や <code>&amp;lt;video&amp;gt;</code> 要素の内容がコンテナにどうフィットするかを制御します。</li>
        <li><code>object-position</code> (<code>object-center</code>, <code>object-top</code> など): <code>object-fit</code> を使用した際の要素内容の位置を制御します。</li>
      </ul>

      {/* 公式ドキュメント参照 */}
      <h2 className="mt-12">公式ドキュメント参照</h2>
      <ul>
        <li><a href="https://tailwindcss.com/docs/aspect-ratio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Tailwind CSS: Aspect Ratio</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">MDN: aspect-ratio</a></li>
      </ul>
    </div>
  );
};

export default AspectRatioPage;
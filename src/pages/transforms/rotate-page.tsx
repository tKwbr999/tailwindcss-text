import ArticleLayout from '@/components/layout/ArticleLayout';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const RotateExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'; // 山の画像例
  return (
    <div className="flex flex-wrap gap-8 items-center justify-center p-4">
      <img
        src={imageUrl}
        alt="Rotate 0"
        className="rotate-0 transition-transform duration-300 hover:rotate-12 w-24 h-16 rounded"
      />
      <img
        src={imageUrl}
        alt="Rotate 1"
        className="rotate-1 transition-transform duration-300 hover:rotate-12 w-24 h-16 rounded"
      />
      <img
        src={imageUrl}
        alt="Rotate 12"
        className="rotate-12 transition-transform duration-300 hover:rotate-45 w-24 h-16 rounded"
      />
      <img
        src={imageUrl}
        alt="Rotate 45"
        className="rotate-45 transition-transform duration-300 hover:rotate-90 w-24 h-16 rounded"
      />
      <img
        src={imageUrl}
        alt="Rotate 90"
        className="rotate-90 transition-transform duration-300 hover:rotate-180 w-24 h-16 rounded"
      />
      <img
        src={imageUrl}
        alt="Rotate 180"
        className="rotate-180 transition-transform duration-300 hover:rotate-0 w-24 h-16 rounded"
      />
      <img
        src={imageUrl}
        alt="Rotate -45"
        className="-rotate-45 transition-transform duration-300 hover:-rotate-90 w-24 h-16 rounded"
      />
    </div>
  );
};

const ArbitraryRotateExample: React.FC = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80';
  return (
    <img
      src={imageUrl}
      alt="Arbitrary Rotate"
      className="rotate-[22.5deg] transition-transform duration-300 hover:rotate-0 w-24 h-16 rounded"
    />
  );
};

// ページコンポーネント本体
const RotatePage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Transforms: Rotate (回転)';
  const links = [
    {
      title: 'Tailwind CSS: Rotate',
      url: 'https://tailwindcss.com/docs/rotate',
    },
    {
      title: 'MDN: rotate()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate',
    },
  ];

  // コードスニペットを定義
  const rotateHtml = `
<img class="rotate-0 ..." src="...">    {/* 0deg */}
<img class="rotate-45 ..." src="...">   {/* 45deg */}
<img class="rotate-90 ..." src="...">   {/* 90deg */}
<img class="rotate-180 ..." src="...">  {/* 180deg */}
<img class="-rotate-45 ..." src="..."> {/* -45deg */}
  `.trim();

  const arbitraryRotateHtml = `<img class="rotate-[22.5deg] ..." src="...">`;

  return (
    <ArticleLayout title={title} links={links}>
      <div className="space-y-8">
        {' '}
        {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">概要</h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>要素を回転させるためのユーティリティクラスです。</p>
            <p>
              CSS の <code>transform: rotate()</code> プロパティを制御します。
            </p>
            <p>
              これらのユーティリティを使用するには、要素に <code>transform</code> (または他の
              transform 関連ユーティリティ) が適用されている必要がありますが、Tailwind
              は通常これを自動的に処理します。
            </p>
          </div>
        </section>
        {/* 基本的な使い方とパラメータ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            基本的な使い方とパラメータ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              <code>rotate-{'{amount}'}</code> または <code>-rotate-{'{amount}'}</code>{' '}
              の形式でクラスを要素に適用します。
            </p>
            <p>
              <code>{'{amount}'}</code> には、回転させる角度 (deg) を指定します。Tailwind
              は一般的な角度の値を提供します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>
                  <code>rotate-0</code>
                </strong>{' '}
                (0deg - デフォルト)
              </li>
              <li>
                <strong>
                  <code>rotate-1</code>
                </strong>{' '}
                (1deg)
              </li>
              <li>
                <strong>
                  <code>rotate-2</code>
                </strong>{' '}
                (2deg)
              </li>
              <li>
                <strong>
                  <code>rotate-3</code>
                </strong>{' '}
                (3deg)
              </li>
              <li>
                <strong>
                  <code>rotate-6</code>
                </strong>{' '}
                (6deg)
              </li>
              <li>
                <strong>
                  <code>rotate-12</code>
                </strong>{' '}
                (12deg)
              </li>
              <li>
                <strong>
                  <code>rotate-45</code>
                </strong>{' '}
                (45deg)
              </li>
              <li>
                <strong>
                  <code>rotate-90</code>
                </strong>{' '}
                (90deg)
              </li>
              <li>
                <strong>
                  <code>rotate-180</code>
                </strong>{' '}
                (180deg)
              </li>
            </ul>
            <p className="mt-4">
              負の値 (例: <code>-rotate-45</code>) は逆方向 (時計回り) に回転させます。
            </p>
            <p>
              任意の値 (例: <code>rotate-[22.5deg]</code>) も使用可能です (Tailwind JIT モード)。
            </p>
          </div>
        </section>
        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">使用例</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            異なる回転角度の適用例。ホバーして効果を確認してください。
          </p>
          <div className="space-y-6">
            {/* Standard Rotate */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
                標準の回転角度
              </h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{rotateHtml}</code>
              </pre>
              <RotateExample />
            </div>
            {/* Arbitrary Rotate */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">任意の値</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{arbitraryRotateHtml}</code>
              </pre>
              <ArbitraryRotateExample />
            </div>
          </div>
        </section>
        {/* レスポンシブと状態変化 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            レスポンシブと状態変化
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            ブレークポイント (<code>md:rotate-90</code> など) や状態 (<code>hover:rotate-12</code>,{' '}
            <code>focus:-rotate-6</code> など)
            に応じて回転角度を変更できます。トランジションと組み合わせるのが一般的です。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              ホバー時に要素を 12度 回転させる例:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">
                {`
<button class="transition duration-300 ease-in-out rotate-0 hover:rotate-12 ...">
  Hover Me
</button>
              `.trim()}
              </code>
            </pre>
          </div>
        </section>
        {/* 関連ユーティリティ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
            関連ユーティリティ
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <code>transform</code>: transform 機能を有効にします (通常は自動)。
              </li>
              <li>
                <code>transform-origin-*</code>: 変形の原点を設定します (回転の中心)。
              </li>
              <li>
                他の transform ユーティリティ: <code>scale-*</code>, <code>translate-*</code>,{' '}
                <code>skew-*</code>。
              </li>
              <li>
                <code>transition-*</code>: 回転変化を滑らかにするために使用します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default RotatePage;

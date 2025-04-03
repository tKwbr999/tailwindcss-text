import React from 'react';
import ArticleLayout from '@/components/layout/ArticleLayout';

// 各コードサンプルに対応するReact実装コンポーネント

const TextAlignLeftExample: React.FC = () => {
  return (
    <p className="text-left text-gray-800 dark:text-gray-200">
      Text Align Left (デフォルト LTR): テキストは左揃えになります。Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  );
};

const TextAlignCenterExample: React.FC = () => {
  return (
    <p className="text-center text-gray-800 dark:text-gray-200">
      Text Align Center: テキストは中央揃えになります。Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  );
};

const TextAlignRightExample: React.FC = () => {
    return (
      <p className="text-right text-gray-800 dark:text-gray-200">
        Text Align Right (デフォルト RTL): テキストは右揃えになります。Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    );
  };

const TextAlignJustifyExample: React.FC = () => {
    return (
      <p className="text-justify text-gray-800 dark:text-gray-200">
        Text Align Justify: テキストは両端揃えになります。行内の単語間隔が調整され、左右の端が揃います。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>
    );
  };

const TextAlignStartEndExample: React.FC = () => {
    // 注意: text-start/text-end は書字方向 (LTR/RTL) に依存します。
    return (
      <div className="space-y-2">
        <p className="text-start text-gray-800 dark:text-gray-200">
          Text Align Start: 書字方向の開始位置に揃えます (LTR では左揃え)。
        </p>
         <p className="text-end text-gray-800 dark:text-gray-200">
          Text Align End: 書字方向の終了位置に揃えます (LTR では右揃え)。
        </p>
      </div>
    );
  };


// ページコンポーネント本体
const TextAlignPage: React.FC = () => {
  // ArticleLayout に渡すデータ
  const title = 'Typography: Text Align (テキスト揃え)';
  const links = [
    {
      title: 'Tailwind CSS: Text Align',
      url: 'https://tailwindcss.com/docs/text-align',
    },
    {
      title: 'MDN: text-align',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-align',
    },
  ];

  // コードスニペットを定義
  const textAlignLeftHtml = `<p class="text-left ...">...</p>`;
  const textAlignCenterHtml = `<p class="text-center ...">...</p>`;
  const textAlignRightHtml = `<p class="text-right ...">...</p>`;
  const textAlignJustifyHtml = `<p class="text-justify ...">...</p>`;
  const textAlignStartEndHtml = `
<p class="text-start ...">...</p> {/* LTR: left, RTL: right */}
<p class="text-end ...">...</p>   {/* LTR: right, RTL: left */}
  `.trim();


  return (
    <ArticleLayout title={title} links={links}>
      <div className="space-y-8"> {/* 元のCard間のマージンを再現 */}
        {/* 概要 */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              概要
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              ブロックレベル要素またはテーブルセル要素内のインラインコンテンツ (テキストなど) の水平方向の揃え方を制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>text-align</code> プロパティを制御します。
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
              <code>text-{'{alignment}'}</code> の形式でクラスをテキストを含むブロックレベル要素またはテーブルセルに適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>text-left</code></strong>: テキストを左揃えにします (LTR のデフォルト)。</li>
              <li><strong><code>text-center</code></strong>: テキストを中央揃えにします。</li>
              <li><strong><code>text-right</code></strong>: テキストを右揃えにします (RTL のデフォルト)。</li>
              <li><strong><code>text-justify</code></strong>: テキストを両端揃えにします。行内の単語間隔が調整されます。</li>
              <li><strong><code>text-start</code></strong>: 書字方向の開始位置にテキストを揃えます (LTR では <code>text-left</code> と同じ)。</li>
              <li><strong><code>text-end</code></strong>: 書字方向の終了位置にテキストを揃えます (LTR では <code>text-right</code> と同じ)。</li>
            </ul>
          </div>
        </section>

        {/* 各パラメータの例 Card */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              使用例
          </h2>
           <p className="text-stone-600 dark:text-stone-400 mb-4">
              異なるテキスト揃えユーティリティの適用例。
          </p>
          <div className="space-y-6">
            {/* Left */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">text-left</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{textAlignLeftHtml}</code>
              </pre>
              <TextAlignLeftExample />
            </div>
            {/* Center */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">text-center</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{textAlignCenterHtml}</code>
              </pre>
              <TextAlignCenterExample />
            </div>
             {/* Right */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">text-right</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{textAlignRightHtml}</code>
              </pre>
              <TextAlignRightExample />
            </div>
             {/* Justify */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">text-justify</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{textAlignJustifyHtml}</code>
              </pre>
              <TextAlignJustifyExample />
            </div>
             {/* Start / End */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">text-start / text-end</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{textAlignStartEndHtml}</code>
              </pre>
              <TextAlignStartEndExample />
            </div>
          </div>
        </section>

        {/* レスポンシブ Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
              レスポンシブ
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じてテキストの揃え方を変更できます。
          </p>
          <div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>text-center sm:text-left</code> は小さい画面では中央揃え、<code>sm</code> ブレークポイント以上で左揃えになります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p class="text-center sm:text-left ...">
  Responsive Text Alignment
</p>
              `.trim()}</code>
            </pre>
          </div>
        </section>

        {/* 注意点 Card */}
        <section>
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4">
              注意点
          </h2>
          <div className="text-stone-700 dark:text-stone-300 space-y-4">
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <code>text-align</code> はインラインコンテンツに適用されるため、ブロックレベル要素自体を中央揃えにするには <code>mx-auto</code> を使用します。
              </li>
              <li>
                <code>text-justify</code> は、テキストが複数行にわたる場合に効果が顕著になります。最終行は通常、左揃え (または書字方向の開始位置揃え) になります。
              </li>
               <li>
                <code>text-start</code> と <code>text-end</code> は、書字方向 (LTR または RTL) に応じて <code>left</code> または <code>right</code> として解釈されるため、多言語対応に便利です。
              </li>
            </ul>
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
                <code>margin</code> (<code>mx-auto</code>): ブロックレベル要素を水平方向中央に配置します。
              </li>
              <li>
                <code>vertical-align</code> (<code>align-*</code>): インライン要素やテーブルセル要素の垂直方向の揃えを制御します。
              </li>
              <li>
                <code>justify-content</code> / <code>align-items</code> など: Flexbox や Grid コンテナ内のアイテムの配置を制御します。
              </li>
            </ul>
          </div>
        </section>
        {/* 参照リンクは ArticleLayout に移動 */}
      </div>
    </ArticleLayout>
  );
};

export default TextAlignPage;
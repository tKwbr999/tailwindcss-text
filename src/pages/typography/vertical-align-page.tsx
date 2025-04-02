import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント
// vertical-align はインラインレベル要素とテーブルセル要素に適用されます。

const AlignBaselineExample: React.FC = () => {
  return (
    <p className="text-lg">
      テキストと
      <span className="align-baseline bg-blue-200 dark:bg-blue-900 text-xs px-1 mx-1 rounded">Baseline (デフォルト)</span>
      インライン要素。
    </p>
  );
};

const AlignTopExample: React.FC = () => {
  return (
    <p className="text-lg">
      テキストと
      <span className="align-top bg-green-200 dark:bg-green-900 text-xs px-1 mx-1 rounded">Top</span>
      インライン要素。
    </p>
  );
};

const AlignMiddleExample: React.FC = () => {
    return (
      <p className="text-lg">
        テキストと
        <span className="align-middle bg-yellow-200 dark:bg-yellow-900 text-xs px-1 mx-1 rounded">Middle</span>
        インライン要素。
      </p>
    );
  };

const AlignBottomExample: React.FC = () => {
    return (
      <p className="text-lg">
        テキストと
        <span className="align-bottom bg-red-200 dark:bg-red-900 text-xs px-1 mx-1 rounded">Bottom</span>
        インライン要素。
      </p>
    );
  };

const AlignTextTopExample: React.FC = () => {
    return (
      <p className="text-lg">
        テキストと
        <span className="align-text-top bg-purple-200 dark:bg-purple-900 text-xs px-1 mx-1 rounded">Text-Top</span>
        インライン要素。
      </p>
    );
  };

const AlignTextBottomExample: React.FC = () => {
    return (
      <p className="text-lg">
        テキストと
        <span className="align-text-bottom bg-pink-200 dark:bg-pink-900 text-xs px-1 mx-1 rounded">Text-Bottom</span>
        インライン要素。
      </p>
    );
  };

const AlignSubExample: React.FC = () => {
    return (
      <p className="text-lg">
        H<span className="align-sub text-xs">2</span>O (Subscript)
      </p>
    );
  };

const AlignSuperExample: React.FC = () => {
    return (
      <p className="text-lg">
        E=mc<span className="align-super text-xs">2</span> (Superscript)
      </p>
    );
  };


// ページコンポーネント本体
const VerticalAlignPage: React.FC = () => {
  // コードスニペットを定義 (代表例)
  const alignBaselineHtml = `<span class="align-baseline ...">...</span>`; // Default
  const alignTopHtml = `<span class="align-top ...">...</span>`;
  const alignMiddleHtml = `<span class="align-middle ...">...</span>`;
  const alignBottomHtml = `<span class="align-bottom ...">...</span>`;
  const alignTextTopHtml = `<span class="align-text-top ...">...</span>`;
  const alignTextBottomHtml = `<span class="align-text-bottom ...">...</span>`;
  const alignSubHtml = `<span class="align-sub ...">...</span>`;
  const alignSuperHtml = `<span class="align-super ...">...</span>`;


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Typography: Vertical Align (垂直方向の揃え)
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
              インラインレベル要素 (<code>&lt;span&gt;</code>, <code>&lt;img&gt;</code> など) またはテーブルセル要素 (<code>&lt;td&gt;</code>, <code>&lt;th&gt;</code>) の垂直方向の揃え方を、それらが含まれる行ボックスに対して制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>vertical-align</code> プロパティを制御します。
            </p>
            <p>
              <strong>注意:</strong> このプロパティはブロックレベル要素には直接効果がありません。Flexbox や Grid のアイテムの垂直方向の揃えには <code>align-items</code> や <code>align-self</code> を使用します。
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
              <code>align-{'{alignment}'}</code> の形式でクラスをインラインレベル要素またはテーブルセル要素に適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>align-baseline</code></strong>: デフォルト。要素のベースラインを親要素のベースラインに揃えます。</li>
              <li><strong><code>align-top</code></strong>: 要素の上端を行ボックスの上端に揃えます。</li>
              <li><strong><code>align-middle</code></strong>: 要素の中央を親要素のベースライン + x-height の半分に揃えます (テキストの中央あたり)。</li>
              <li><strong><code>align-bottom</code></strong>: 要素の下端を行ボックスの下端に揃えます。</li>
              <li><strong><code>align-text-top</code></strong>: 要素の上端を親要素のフォントの上端に揃えます。</li>
              <li><strong><code>align-text-bottom</code></strong>: 要素の下端を親要素のフォントの下端に揃えます。</li>
              <li><strong><code>align-sub</code></strong>: 要素を下付き文字のように配置します。</li>
              <li><strong><code>align-super</code></strong>: 要素を上付き文字のように配置します。</li>
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
              異なる垂直方向揃えユーティリティの適用例。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Baseline */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">align-baseline (デフォルト)</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{alignBaselineHtml}</code>
              </pre>
              <AlignBaselineExample />
            </div>
            {/* Top */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">align-top</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{alignTopHtml}</code>
              </pre>
              <AlignTopExample />
            </div>
             {/* Middle */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">align-middle</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{alignMiddleHtml}</code>
              </pre>
              <AlignMiddleExample />
            </div>
             {/* Bottom */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">align-bottom</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{alignBottomHtml}</code>
              </pre>
              <AlignBottomExample />
            </div>
             {/* Text Top */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">align-text-top</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{alignTextTopHtml}</code>
              </pre>
              <AlignTextTopExample />
            </div>
             {/* Text Bottom */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">align-text-bottom</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{alignTextBottomHtml}</code>
              </pre>
              <AlignTextBottomExample />
            </div>
             {/* Sub */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">align-sub</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{alignSubHtml}</code>
              </pre>
              <AlignSubExample />
            </div>
             {/* Super */}
             <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">align-super</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{alignSuperHtml}</code>
              </pre>
              <AlignSuperExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、画面サイズに応じて垂直方向の揃え方を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>align-middle md:align-baseline</code> はデフォルトで中央揃え、中程度の画面サイズ以上でベースライン揃えにします。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<p>
  Text with <span class="align-middle md:align-baseline ...">aligned</span> element.
</p>
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
                <code>vertical-align</code> はインラインレベル要素とテーブルセル要素にのみ適用されます。ブロックレベル要素には効果がありません。
              </li>
              <li>
                Flexbox や Grid レイアウト内のアイテムの垂直方向の揃えには、<code>align-items</code>, <code>align-self</code>, <code>align-content</code>, <code>place-items</code>, <code>place-self</code>, <code>place-content</code> などの専用ユーティリティを使用します。
              </li>
               <li>
                <code>align-middle</code> は、要素の中心を親要素のテキストのベースライン + x-height の半分に合わせるものであり、必ずしも行ボックスの厳密な中央に配置されるわけではありません。
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
                <code>display</code> (<code>inline</code>, <code>inline-block</code>, <code>table-cell</code> など): 要素の表示タイプを設定します。<code>vertical-align</code> が適用可能な要素タイプにします。
              </li>
              <li>
                Flexbox/Grid の Align 系ユーティリティ (<code>items-*</code>, <code>self-*</code>, <code>content-*</code>, <code>place-*</code>): Flexbox/Grid レイアウトでの垂直方向の配置を制御します。
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
                  href="https://tailwindcss.com/docs/vertical-align"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Vertical Align
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: vertical-align
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VerticalAlignPage;
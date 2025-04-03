import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ArticleLayout from '@/components/layout/ArticleLayout'; // ArticleLayout をインポート

// 各コードサンプルに対応するReact実装コンポーネント
// object-position は object-fit が fill 以外の場合に効果があります。
// ここでは object-none と組み合わせて効果を示します。

const ObjectPositionTopExample: React.FC = () => {
  return (
    <div className="w-48 h-32 bg-indigo-100 dark:bg-indigo-900 rounded overflow-hidden mx-auto">
      <img
        className="object-none object-top w-full h-full"
        src="https://via.placeholder.com/80x80/818cf8/ffffff?text=Top" // コンテナより小さい画像
        alt="Object Position Top"
      />
    </div>
  );
};

const ObjectPositionBottomExample: React.FC = () => {
  return (
    <div className="w-48 h-32 bg-pink-100 dark:bg-pink-900 rounded overflow-hidden mx-auto">
      <img
        className="object-none object-bottom w-full h-full"
        src="https://via.placeholder.com/80x80/f9a8d4/ffffff?text=Bottom"
        alt="Object Position Bottom"
      />
    </div>
  );
};

const ObjectPositionCenterExample: React.FC = () => {
  return (
    <div className="w-48 h-32 bg-emerald-100 dark:bg-emerald-900 rounded overflow-hidden mx-auto">
      <img
        className="object-none object-center w-full h-full"
        src="https://via.placeholder.com/80x80/a7f3d0/047857?text=Center"
        alt="Object Position Center"
      />
    </div>
  );
};

const ObjectPositionLeftExample: React.FC = () => {
  return (
    <div className="w-48 h-32 bg-amber-100 dark:bg-amber-900 rounded overflow-hidden mx-auto">
      <img
        className="object-none object-left w-full h-full"
        src="https://via.placeholder.com/80x80/fef08a/854d0e?text=Left"
        alt="Object Position Left"
      />
    </div>
  );
};

const ObjectPositionRightExample: React.FC = () => {
    return (
      <div className="w-48 h-32 bg-cyan-100 dark:bg-cyan-900 rounded overflow-hidden mx-auto">
        <img
          className="object-none object-right w-full h-full"
          src="https://via.placeholder.com/80x80/a5f3fc/0e7490?text=Right"
          alt="Object Position Right"
        />
      </div>
    );
  };

const ObjectPositionTopLeftExample: React.FC = () => {
    return (
      <div className="w-48 h-32 bg-purple-100 dark:bg-purple-900 rounded overflow-hidden mx-auto">
        <img
          className="object-none object-left-top w-full h-full" // または object-top-left
          src="https://via.placeholder.com/80x80/c4b5fd/ffffff?text=TL"
          alt="Object Position Top Left"
        />
      </div>
    );
  };

// ページコンポーネント本体
const ObjectPositionPage: React.FC = () => {
  // コードスニペットを定義
  const positionTopHtml = `
<div class="w-48 h-32 ...">
  <img class="object-none object-top w-full h-full" src="..." />
</div>
  `.trim();
  const positionBottomHtml = `
<div class="w-48 h-32 ...">
  <img class="object-none object-bottom w-full h-full" src="..." />
</div>
  `.trim();
  const positionCenterHtml = `
<div class="w-48 h-32 ...">
  <img class="object-none object-center w-full h-full" src="..." />
</div>
  `.trim();
  const positionLeftHtml = `
<div class="w-48 h-32 ...">
  <img class="object-none object-left w-full h-full" src="..." />
</div>
  `.trim();
  const positionRightHtml = `
<div class="w-48 h-32 ...">
  <img class="object-none object-right w-full h-full" src="..." />
</div>
  `.trim();
  const positionTopLeftHtml = `
<div class="w-48 h-32 ...">
  <img class="object-none object-left-top w-full h-full" src="..." />
</div>
  `.trim(); // 他の組み合わせ (例: object-right-bottom) も同様

// 参照リンクの定義を追加
const links = [
  {
    title: 'Tailwind CSS: Object Position',
    url: 'https://tailwindcss.com/docs/object-position',
  },
  {
    title: 'MDN: object-position',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/object-position',
  },
];

  return (
    <ArticleLayout title="Layout: Object Position (置換要素の位置)" links={links}>

      <Helmet>
        <title>Layout: Object Position - Tailwind CSS Cheatsheet</title>
        <meta name="description" content="Learn about the Layout: Object Position utility in Tailwind CSS. Examples and usage details for Layout: Object Position." />
      </Helmet>
        {/* 概要 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              概要
            </CardTitle>
          </CardHeader>
          <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
            <p>
              置換要素 (<code>&amp;lt;img&amp;gt;</code>, <code>&amp;lt;video&amp;gt;</code> など) のコンテンツが、その要素のコンテナ内でどのように配置されるかを制御するためのユーティリティクラスです。
              これは、<code>object-fit</code> プロパティが <code>fill</code> (デフォルト) 以外の値 (例: <code>contain</code>, <code>none</code>, <code>scale-down</code>) に設定されている場合に効果があります。
            </p>
            <p>
              CSS の <code>object-position</code> プロパティを制御します。
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
              <code>object-{'{position}'}</code> の形式でクラスを置換要素に適用します。<code>object-fit</code> が <code>fill</code> 以外の場合に使用します。
            </p>
            <p>
              位置はキーワードで指定します:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4 columns-2">
              <li><strong><code>object-bottom</code></strong></li>
              <li><strong><code>object-center</code></strong> (デフォルト)</li>
              <li><strong><code>object-left</code></strong></li>
              <li><strong><code>object-left-bottom</code></strong></li>
              <li><strong><code>object-left-top</code></strong></li>
              <li><strong><code>object-right</code></strong></li>
              <li><strong><code>object-right-bottom</code></strong></li>
              <li><strong><code>object-right-top</code></strong></li>
              <li><strong><code>object-top</code></strong></li>
            </ul>
             <p className="mt-4">
              これらのクラスは、コンテナ内で余白がある場合に、コンテンツ (画像や動画) をどの位置に寄せるかを決定します。例えば、<code>object-contain</code> で縦長のコンテナに横長の画像を表示した場合、上下に余白ができます。<code>object-top</code> を指定すると画像は上端に、<code>object-bottom</code> を指定すると下端に配置されます。
            </p>
          </CardContent>
        </Card>

        {/* 各パラメータの例 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-200">
              使用例 (object-none との組み合わせ)
            </CardTitle>
             <CardDescription className="text-stone-600 dark:text-stone-400">
              <code>object-none</code> (リサイズなし) と各位置指定クラスの組み合わせ。コンテナサイズは w-48 h-32。画像サイズは 80x80。
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Top */}
            <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">object-top</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{positionTopHtml}</code>
              </pre>
              <ObjectPositionTopExample />
            </div>
            {/* Bottom */}
            <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">object-bottom</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{positionBottomHtml}</code>
              </pre>
              <ObjectPositionBottomExample />
            </div>
             {/* Center */}
             <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">object-center</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{positionCenterHtml}</code>
              </pre>
              <ObjectPositionCenterExample />
            </div>
             {/* Left */}
             <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">object-left</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{positionLeftHtml}</code>
              </pre>
              <ObjectPositionLeftExample />
            </div>
             {/* Right */}
             <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">object-right</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{positionRightHtml}</code>
              </pre>
              <ObjectPositionRightExample />
            </div>
             {/* Top Left */}
             <div className="text-center">
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">object-left-top</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{positionTopLeftHtml}</code>
              </pre>
              <ObjectPositionTopLeftExample />
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
              ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など) を使って、特定の画面サイズでのみ <code>object-position</code> プロパティを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              例えば、<code>object-center md:object-top</code> はデフォルトで中央寄せ、中程度の画面サイズ以上で上寄せになります。
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<img class="object-contain object-center md:object-top w-full h-48" src="..." />
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
                <code>object-position</code> は、<code>object-fit</code> が <code>fill</code> (デフォルト) 以外の値に設定されている場合にのみ効果があります。<code>object-fill</code> の場合、コンテンツは常にコンテナ全体を埋めるため、位置指定は意味を持ちません。
              </li>
              <li>
                このプロパティも置換要素 (<code>&amp;lt;img&amp;gt;</code>, <code>&amp;lt;video&amp;gt;</code> など) にのみ適用されます。
              </li>
               <li>
                任意の値 (例: <code>object-[25%_75%]</code>) を使用して、より細かい位置指定も可能です (Tailwind JIT モード)。
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
                <code>object-fit</code> (<code>object-contain</code>, <code>object-cover</code> など): コンテンツのフィット方法を制御します。<code>object-position</code> はこれと組み合わせて使用します。
              </li>
              <li>
                <code>width</code> (<code>w-*</code>) / <code>height</code> (<code>h-*</code>): 要素のサイズを指定します。
              </li>
            </ul>
          </CardContent>
        </Card>
    </ArticleLayout>
  );
};

export default ObjectPositionPage;
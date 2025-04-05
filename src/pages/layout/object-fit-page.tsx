import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import ArticleLayout from '@/components/layout/ArticleLayout'; // ArticleLayout をインポート
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント

const ObjectContainExample: React.FC = () => {
  return (
    <div className="w-48 h-32 bg-indigo-100 dark:bg-indigo-900 rounded overflow-hidden mx-auto">
      <img
        className="object-contain w-full h-full"
        src="https://via.placeholder.com/300x150/818cf8/ffffff?text=Contain(3:2)" // 横長の画像
        alt="Object Contain"
      />
    </div>
  );
};

const ObjectCoverExample: React.FC = () => {
  return (
    <div className="w-48 h-32 bg-pink-100 dark:bg-pink-900 rounded overflow-hidden mx-auto">
      <img
        className="object-cover w-full h-full"
        src="https://via.placeholder.com/150x300/f9a8d4/ffffff?text=Cover(1:2)" // 縦長の画像
        alt="Object Cover"
      />
    </div>
  );
};

const ObjectFillExample: React.FC = () => {
  return (
    <div className="w-48 h-32 bg-emerald-100 dark:bg-emerald-900 rounded overflow-hidden mx-auto">
      <img
        className="object-fill w-full h-full"
        src="https://via.placeholder.com/100x100/a7f3d0/047857?text=Fill(1:1)" // 正方形の画像
        alt="Object Fill"
      />
    </div>
  );
};

const ObjectNoneExample: React.FC = () => {
  return (
    <div className="w-48 h-32 bg-amber-100 dark:bg-amber-900 rounded overflow-hidden mx-auto">
      <img
        className="object-none w-full h-full" // object-position で中央寄せも可能
        src="https://via.placeholder.com/50x50/fef08a/854d0e?text=None" // 小さい画像
        alt="Object None"
      />
    </div>
  );
};

const ObjectScaleDownExample: React.FC = () => {
  return (
    <div className="flex justify-around">
      <div className="text-center">
        <p className="text-sm mb-1">元の画像が大きい場合 (Containと同じ):</p>
        <div className="w-48 h-32 bg-cyan-100 dark:bg-cyan-900 rounded overflow-hidden mx-auto">
          <img
            className="object-scale-down w-full h-full"
            src="https://via.placeholder.com/300x150/a5f3fc/0e7490?text=ScaleDown(3:2)" // 横長の画像
            alt="Object Scale Down Large"
          />
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm mb-1">元の画像が小さい場合 (Noneと同じ):</p>
        <div className="w-48 h-32 bg-cyan-100 dark:bg-cyan-900 rounded overflow-hidden mx-auto">
          <img
            className="object-scale-down w-full h-full"
            src="https://via.placeholder.com/50x50/a5f3fc/0e7490?text=ScaleDown" // 小さい画像
            alt="Object Scale Down Small"
          />
        </div>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const ObjectFitPage: React.FC = () => {
  // コードスニペットを定義
  const containHtml = `
<div class="w-48 h-32 ...">
  <img class="object-contain w-full h-full" src="..." />
</div>
  `.trim();

  const coverHtml = `
<div class="w-48 h-32 ...">
  <img class="object-cover w-full h-full" src="..." />
</div>
  `.trim();

  const fillHtml = `
<div class="w-48 h-32 ...">
  <img class="object-fill w-full h-full" src="..." />
</div>
  `.trim();

  const noneHtml = `
<div class="w-48 h-32 ...">
  <img class="object-none w-full h-full" src="..." />
</div>
  `.trim();

  const scaleDownHtml = `
<div class="w-48 h-32 ...">
  {/* 画像が大きい場合は contain、小さい場合は none のように振る舞う */}
  <img class="object-scale-down w-full h-full" src="..." />
</div>
  `.trim();

  // 参照リンクの定義を追加
  const links = [
    {
      title: 'Tailwind CSS: Object Fit',
      url: 'https://tailwindcss.com/docs/object-fit',
    },
    {
      title: 'MDN: object-fit',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit',
    },
  ];

  return (
    <ArticleLayout enTitle="Layout: Object Fit" jaTitle="置換要素のフィット方法" links={links}>
      <Helmet>
        <title>Layout: Object Fit - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Layout: Object Fit utility in Tailwind CSS. Examples and usage details for Layout: Object Fit."
        />
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
            置換要素 (replaced element) のコンテンツ (主に <code>&lt;img&gt;</code> や{' '}
            <code>&lt;video&gt;</code>)
            が、その要素のコンテナにどのようにフィットするかを制御するためのユーティリティクラスです。
            画像のトリミングやアスペクト比の維持に使用されます。
          </p>
          <p>
            CSS の <code>object-fit</code> プロパティを制御します。
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
            <code>object-{'{value}'}</code> の形式でクラスを置換要素 (<code>&lt;img&gt;</code>,{' '}
            <code>&lt;video&gt;</code> など) に適用します。
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>
              <strong>
                <code>object-contain</code>
              </strong>
              :
              コンテンツのアスペクト比を維持したまま、要素のコンテナ内に収まるようにサイズ調整されます。コンテナとコンテンツのアスペクト比が異なる場合、余白ができます。
            </li>
            <li>
              <strong>
                <code>object-cover</code>
              </strong>
              :
              コンテンツのアスペクト比を維持したまま、要素のコンテナ全体を完全に覆うようにサイズ調整されます。コンテナとコンテンツのアスペクト比が異なる場合、コンテンツの一部がはみ出してトリミングされます。
            </li>
            <li>
              <strong>
                <code>object-fill</code>
              </strong>
              :
              デフォルト。コンテンツのアスペクト比を無視して、要素のコンテナ全体を埋めるようにサイズ調整されます。コンテンツが引き伸ばされたり圧縮されたりすることがあります。
            </li>
            <li>
              <strong>
                <code>object-none</code>
              </strong>
              :
              コンテンツはサイズ調整されません。コンテナ内に元のサイズで配置され、はみ出した部分はトリミングされます。
              <code>object-position</code> で配置位置を調整できます。
            </li>
            <li>
              <strong>
                <code>object-scale-down</code>
              </strong>
              : コンテンツのサイズがコンテナより小さい場合は <code>object-none</code>{' '}
              のように、大きい場合は <code>object-contain</code>{' '}
              のように動作します。つまり、元のサイズで表示するか、コンテナに収まるように縮小します。
            </li>
          </ul>
          <p className="mt-4">
            これらのユーティリティは通常、要素に <code>width</code> と <code>height</code> (例:{' '}
            <code>w-full h-full</code>, <code>w-32 h-32</code>)
            が指定されている場合に意味を持ちます。
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
            各 object-fit 値の適用例。コンテナサイズは w-48 h-32 (3:2)。
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Contain */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
              object-contain
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
              アスペクト比を維持してコンテナ内に収める (画像 3:2)
            </p>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{containHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <ObjectContainExample />
            </div>
          </div>
          {/* Cover */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">object-cover</h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
              アスペクト比を維持してコンテナを覆う (画像 1:2)
            </p>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{coverHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <ObjectCoverExample />
            </div>
          </div>
          {/* Fill */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">object-fill</h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
              アスペクト比を無視してコンテナを埋める (画像 1:1)
            </p>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{fillHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <ObjectFillExample />
            </div>
          </div>
          {/* None */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">object-none</h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
              サイズ変更せず、はみ出しはトリミング (画像 小)
            </p>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{noneHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <ObjectNoneExample />
            </div>
          </div>
          {/* Scale Down */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
              object-scale-down
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
              小さい場合は none、大きい場合は contain のように動作
            </p>
            <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{scaleDownHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <ObjectScaleDownExample />
            </div>
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
            ブレークポイントプレフィックス (<code>sm:</code>, <code>md:</code> など)
            を使って、特定の画面サイズでのみ <code>object-fit</code> プロパティを変更できます。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-stone-700 dark:text-stone-300 mb-4">
            例えば、<code>object-contain md:object-cover</code> はデフォルトで <code>contain</code>
            、中程度の画面サイズ以上で <code>cover</code> のように動作します。
          </p>
          {/* コード表示 */}
          <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
            <code className="language-html">
              {`
<img class="object-contain md:object-cover w-full h-48" src="..." />
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
              <code>object-fit</code> は置換要素 (<code>&lt;img&gt;</code>,{' '}
              <code>&lt;video&gt;</code>, <code>&lt;iframe&gt;</code>, <code>&lt;embed&gt;</code>{' '}
              など) にのみ効果があります。通常の <code>&lt;div&gt;</code> などには適用されません。
            </li>
            <li>
              効果を発揮させるためには、通常、要素に明示的な幅と高さが指定されている必要があります。
            </li>
            <li>
              <code>object-cover</code> や <code>object-none</code>{' '}
              を使用すると、コンテンツの一部が見えなくなる可能性があることに注意してください。
            </li>
            <li>
              <code>object-position</code> ユーティリティと組み合わせることで、
              <code>object-contain</code> や <code>object-none</code>{' '}
              を使用した際のコンテンツの配置位置 (例: 中央、上端、右下など) を制御できます。
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
              <code>object-position</code> (<code>object-center</code>, <code>object-top</code>{' '}
              など): <code>object-fit</code> が適用された要素内のコンテンツの位置を制御します。
            </li>
            <li>
              <code>width</code> (<code>w-*</code>) / <code>height</code> (<code>h-*</code>):
              要素のサイズを指定します。<code>object-fit</code> の効果に影響します。
            </li>
            <li>
              <code>aspect-ratio</code> (<code>aspect-video</code>, <code>aspect-square</code>{' '}
              など): 要素のアスペクト比を固定します。画像コンテナなどで <code>object-fit</code>{' '}
              と組み合わせて使うことがあります。
            </li>
          </ul>
        </CardContent>
      </Card>
    </ArticleLayout>
  );
};

export default ObjectFitPage;

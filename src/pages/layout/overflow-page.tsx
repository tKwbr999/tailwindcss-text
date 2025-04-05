import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ArticleLayout from '@/components/layout/ArticleLayout'; // ArticleLayout をインポート

// 各コードサンプルに対応するReact実装コンポーネント

const OverflowAutoExample: React.FC = () => {
  return (
    <div className="overflow-auto h-32 w-48 bg-blue-100 dark:bg-blue-900 p-2 rounded border border-blue-300">
      <p className="text-blue-800 dark:text-blue-200 whitespace-nowrap">
        これは非常に長いコンテンツです。コンテナの幅を超えるため、水平スクロールバーが表示されるはずです。
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p className="text-blue-800 dark:text-blue-200 mt-10">
        これもコンテンツです。コンテナの高さを超えるため、垂直スクロールバーも表示されるはずです。
      </p>
      <p className="text-blue-800 dark:text-blue-200 mt-10">さらにコンテンツ。</p>
    </div>
  );
};

const OverflowHiddenExample: React.FC = () => {
  return (
    <div className="overflow-hidden h-32 w-48 bg-green-100 dark:bg-green-900 p-2 rounded border border-green-300">
      <p className="text-green-800 dark:text-green-200 whitespace-nowrap">
        これは非常に長いコンテンツですが、<code>overflow-hidden</code>{' '}
        によりはみ出した部分は表示されません。スクロールバーも出ません。 Lorem ipsum dolor sit
        amet...
      </p>
      <p className="text-green-800 dark:text-green-200 mt-10">
        高さ方向にはみ出した部分も表示されません。
      </p>
      <p className="text-green-800 dark:text-green-200 mt-10">さらにコンテンツ。</p>
    </div>
  );
};

const OverflowClipExample: React.FC = () => {
  return (
    <div className="overflow-clip h-32 w-48 bg-yellow-100 dark:bg-yellow-900 p-2 rounded border border-yellow-300">
      <p className="text-yellow-800 dark:text-yellow-200 whitespace-nowrap">
        <code>overflow-clip</code> は <code>overflow-hidden</code>{' '}
        と似ていますが、プログラムによるスクロールも許可しません。はみ出しはクリップされます。 Lorem
        ipsum dolor sit amet...
      </p>
      <p className="text-yellow-800 dark:text-yellow-200 mt-10">
        高さ方向のはみ出しもクリップされます。
      </p>
      <p className="text-yellow-800 dark:text-yellow-200 mt-10">さらにコンテンツ。</p>
    </div>
  );
};

const OverflowVisibleExample: React.FC = () => {
  return (
    <div className="overflow-visible h-32 w-48 bg-red-100 dark:bg-red-900 p-2 rounded border border-red-300 relative">
      {' '}
      {/* relative でないと見えにくい場合がある */}
      <p className="text-red-800 dark:text-red-200 whitespace-nowrap absolute -right-5">
        {' '}
        {/* absolute で意図的にはみ出させる */}
        <code>overflow-visible</code> (デフォルト)
        では、コンテンツはコンテナからはみ出して表示されます。 Lorem ipsum dolor sit amet...
      </p>
      <p className="text-red-800 dark:text-red-200 absolute -bottom-5 left-2">
        高さ方向にもはみ出します。
      </p>
    </div>
  );
};

const OverflowScrollExample: React.FC = () => {
  return (
    <div className="overflow-scroll h-32 w-48 bg-purple-100 dark:bg-purple-900 p-2 rounded border border-purple-300">
      <p className="text-purple-800 dark:text-purple-200 whitespace-nowrap">
        <code>overflow-scroll</code>{' '}
        は、コンテンツがはみ出しているかどうかに関わらず、常にスクロールバーを表示します。 Lorem
        ipsum dolor sit amet...
      </p>
      <p className="text-purple-800 dark:text-purple-200 mt-10">
        高さ方向にも常にスクロールバーが表示されます。
      </p>
      {/* <p className="text-purple-800 dark:text-purple-200 mt-10">
        さらにコンテンツ。
      </p> */}
    </div>
  );
};

const OverflowXAutoExample: React.FC = () => {
  return (
    <div className="overflow-x-auto overflow-y-hidden h-20 w-48 bg-teal-100 dark:bg-teal-900 p-2 rounded border border-teal-300">
      <p className="text-teal-800 dark:text-teal-200 whitespace-nowrap">
        <code>overflow-x-auto</code>: 水平方向のみ、必要に応じてスクロールバーを表示します。垂直方向
        (<code>overflow-y-hidden</code>) は隠します。 Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-teal-800 dark:text-teal-200">このテキストは表示されません (y-hidden)。</p>
    </div>
  );
};

// ページコンポーネント本体
const OverflowPage: React.FC = () => {
  // コードスニペットを定義
  const autoHtml = `<div class="overflow-auto h-32 ...">...</div>`;
  const hiddenHtml = `<div class="overflow-hidden h-32 ...">...</div>`;
  const clipHtml = `<div class="overflow-clip h-32 ...">...</div>`;
  const visibleHtml = `<div class="overflow-visible h-32 ...">...</div>`;
  const scrollHtml = `<div class="overflow-scroll h-32 ...">...</div>`;
  const xAutoHtml = `<div class="overflow-x-auto overflow-y-hidden h-32 ...">...</div>`; // y方向も指定

  // 参照リンクの定義を追加
  const links = [
    {
      title: 'Tailwind CSS: Overflow',
      url: 'https://tailwindcss.com/docs/overflow',
    },
    {
      title: 'MDN: overflow',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/overflow',
    },
  ];

  return (
    <ArticleLayout enTitle="Layout: Overflow" jaTitle="オーバーフロー" links={links}>
      <Helmet>
        <title>Layout: Overflow - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Layout: Overflow utility in Tailwind CSS. Examples and usage details for Layout: Overflow."
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
            要素のコンテンツがその要素の境界ボックス (padding edge)
            を超えた場合に、どのように処理するかを制御するためのユーティリティクラスです。スクロールバーの表示や、はみ出したコンテンツのクリッピング
            (切り抜き) などを行います。
          </p>
          <p>
            CSS の <code>overflow</code>, <code>overflow-x</code>, <code>overflow-y</code>{' '}
            プロパティを制御します。
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
            <code>overflow-{'{value}'}</code>, <code>overflow-x-{'{value}'}</code>,{' '}
            <code>overflow-y-{'{value}'}</code> の形式でクラスを要素に適用します。
          </p>
          <p>主な値:</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>
              <strong>
                <code>overflow-auto</code>
              </strong>
              : コンテンツがはみ出した場合にのみ、ブラウザが必要に応じてスクロールバーを表示します。
            </li>
            <li>
              <strong>
                <code>overflow-hidden</code>
              </strong>
              : コンテンツがはみ出した場合、その部分は表示されず、スクロールバーも表示されません。
            </li>
            <li>
              <strong>
                <code>overflow-clip</code>
              </strong>
              : <code>overflow-hidden</code> と似ていますが、プログラムによるスクロール (例:
              JavaScript の <code>Element.scrollTop</code>)
              も含め、いかなるスクロールも許可しません。より厳密なクリッピングです。
            </li>
            <li>
              <strong>
                <code>overflow-visible</code>
              </strong>
              : デフォルト。コンテンツは要素の境界ボックスからはみ出して表示されます。
            </li>
            <li>
              <strong>
                <code>overflow-scroll</code>
              </strong>
              : コンテンツがはみ出しているかどうかに関わらず、常にスクロールバーを表示します
              (スペースが確保されます)。
            </li>
          </ul>
          <p className="mt-4">
            <code>overflow-x-*</code> は水平方向のオーバーフローのみ、<code>overflow-y-*</code>{' '}
            は垂直方向のオーバーフローのみを制御します。両方を個別に設定できます。
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
            各 overflow 値の適用例。コンテナサイズは w-48 h-32。
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Auto */}
          <div className="text-center">
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">overflow-auto</h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{autoHtml}</code>
            </pre>
            <OverflowAutoExample />
          </div>
          {/* Hidden */}
          <div className="text-center">
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
              overflow-hidden
            </h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{hiddenHtml}</code>
            </pre>
            <OverflowHiddenExample />
          </div>
          {/* Clip */}
          <div className="text-center">
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">overflow-clip</h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{clipHtml}</code>
            </pre>
            <OverflowClipExample />
          </div>
          {/* Visible */}
          <div className="text-center">
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
              overflow-visible (デフォルト)
            </h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{visibleHtml}</code>
            </pre>
            <OverflowVisibleExample />
          </div>
          {/* Scroll */}
          <div className="text-center">
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
              overflow-scroll
            </h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{scrollHtml}</code>
            </pre>
            <OverflowScrollExample />
          </div>
          {/* X-Auto / Y-Hidden */}
          <div className="text-center">
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
              overflow-x-auto / y-hidden
            </h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{xAutoHtml}</code>
            </pre>
            <OverflowXAutoExample />
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
            を使って、特定の画面サイズでのみ <code>overflow</code> プロパティを変更できます。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-stone-700 dark:text-stone-300 mb-4">
            例えば、<code>overflow-hidden md:overflow-auto</code>{' '}
            はデフォルトでコンテンツを隠し、中程度の画面サイズ以上で必要に応じてスクロールバーを表示します。
          </p>
          {/* コード表示 */}
          <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
            <code className="language-html">
              {`
<div class="overflow-hidden md:overflow-auto h-32 ...">
  ...
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
              <code>overflow</code> プロパティ (<code>visible</code> 以外)
              を設定すると、通常、新しいブロック整形コンテキスト (BFC)
              が作成されます。これはフロートの Clearfix
              など、他のレイアウト問題の解決に役立つことがあります。
            </li>
            <li>
              <code>overflow-hidden</code> や <code>overflow-clip</code>{' '}
              は、ドロップダウンメニューやツールチップなど、意図的にはみ出して表示させたい要素も隠してしまう可能性があるため注意が必要です。
            </li>
            <li>
              <code>overflow-scroll</code>{' '}
              は常にスクロールバーを表示するため、コンテンツがはみ出していない場合でもスクロールバーのスペースが確保され、レイアウトに影響を与える可能性があります。
            </li>
            <li>
              <code>overflow-clip</code>{' '}
              は比較的新しい値であり、古いブラウザではサポートされていない場合があります。
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
              <code>overscroll-behavior</code> (<code>overscroll-contain</code>,{' '}
              <code>overscroll-none</code> など):
              スクロールが親要素に連鎖するのを防ぐなど、オーバーフローした際のスクロール挙動を制御します。
            </li>
            <li>
              <code>whitespace</code> (<code>whitespace-nowrap</code> など):
              テキストの折り返しを制御します。<code>overflow-x-auto</code>{' '}
              などと組み合わせて、長いテキストを水平スクロールさせることがあります。
            </li>
            <li>
              <code>width</code> / <code>height</code> / <code>max-width</code> /{' '}
              <code>max-height</code>:
              要素のサイズを制限し、オーバーフローが発生する条件を作ります。
            </li>
          </ul>
        </CardContent>
      </Card>
    </ArticleLayout>
  );
};

export default OverflowPage;

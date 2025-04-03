import ArticleLayout from '@/components/layout/ArticleLayout'; // ArticleLayout をインポート
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

// 各コードサンプルに対応するReact実装コンポーネント
// 注意: overscroll-behavior の効果は、ネストされたスクロール可能な要素で顕著になります。
//       内側の要素をスクロールしきったときに、外側の要素 (例: <body>) がスクロールするかどうかを制御します。
//       このページ単体では効果を完全に再現・確認するのは難しい場合があります。

const OverscrollAutoExample: React.FC = () => {
  return (
    <div className="h-48 overflow-auto border border-gray-300 rounded p-2 bg-gray-50 dark:bg-gray-800">
      <p className="mb-2 text-sm font-semibold">外側コンテナ (overscroll-auto - デフォルト)</p>
      <div className="overscroll-auto h-32 overflow-auto border border-blue-300 rounded p-2 bg-blue-100 dark:bg-blue-900">
        <p className="text-blue-800 dark:text-blue-200">
          内側 (auto): スクロールしきると親 (外側コンテナや body) がスクロールします
          (デフォルトの挙動)。
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
          <br />
          Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>
    </div>
  );
};

const OverscrollContainExample: React.FC = () => {
  return (
    <div className="h-48 overflow-auto border border-gray-300 rounded p-2 bg-gray-50 dark:bg-gray-800">
      <p className="mb-2 text-sm font-semibold">外側コンテナ</p>
      <div className="overscroll-contain h-32 overflow-auto border border-green-300 rounded p-2 bg-green-100 dark:bg-green-900">
        <p className="text-green-800 dark:text-green-200">
          内側 (contain):
          スクロールしきっても親のスクロールは発生しませんが、ブラウザの「引っ張って更新」のようなネイティブなスクロール効果は維持されます。
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
          <br />
          Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>
    </div>
  );
};

const OverscrollNoneExample: React.FC = () => {
  return (
    <div className="h-48 overflow-auto border border-gray-300 rounded p-2 bg-gray-50 dark:bg-gray-800">
      <p className="mb-2 text-sm font-semibold">外側コンテナ</p>
      <div className="overscroll-none h-32 overflow-auto border border-red-300 rounded p-2 bg-red-100 dark:bg-red-900">
        <p className="text-red-800 dark:text-red-200">
          内側 (none):
          スクロールしきっても親のスクロールは発生せず、ブラウザのネイティブなスクロール効果
          (引っ張って更新など) も抑制されます。
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
          <br />
          Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>
    </div>
  );
};

const OverscrollYContainExample: React.FC = () => {
  return (
    <div className="h-48 overflow-auto border border-gray-300 rounded p-2 bg-gray-50 dark:bg-gray-800">
      <p className="mb-2 text-sm font-semibold">外側コンテナ</p>
      <div className="overscroll-y-contain overscroll-x-auto h-32 overflow-auto border border-purple-300 rounded p-2 bg-purple-100 dark:bg-purple-900">
        <p className="text-purple-800 dark:text-purple-200 whitespace-nowrap">
          内側 (y-contain, x-auto): 垂直方向のスクロールしきりでは親はスクロールしませんが、水平方向
          (x-auto) では親がスクロールする可能性があります
          (この例では親に水平スクロールがないため影響なし)。
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          <br />
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
          <br />
          Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const OverscrollBehaviorPage: React.FC = () => {
  // コードスニペットを定義
  const autoHtml = `<div class="overscroll-auto h-32 overflow-auto ...">...</div>`;
  const containHtml = `<div class="overscroll-contain h-32 overflow-auto ...">...</div>`;
  const noneHtml = `<div class="overscroll-none h-32 overflow-auto ...">...</div>`;
  const yContainHtml = `<div class="overscroll-y-contain overscroll-x-auto h-32 overflow-auto ...">...</div>`; // x方向も指定

  // 参照リンクの定義を追加
  const links = [
    {
      title: 'Tailwind CSS: Overscroll Behavior',
      url: 'https://tailwindcss.com/docs/overscroll-behavior',
    },
    {
      title: 'MDN: overscroll-behavior',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior',
    },
  ];

  return (
    <ArticleLayout title="Layout: Overscroll Behavior (オーバースクロール挙動)" links={links}>
      {/* 概要 Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
            概要
          </CardTitle>
        </CardHeader>
        <CardContent className="text-stone-700 dark:text-stone-300 space-y-4">
          <p>
            スクロール可能な領域の境界に達したときに、ブラウザがどのように振る舞うかを制御するためのユーティリティクラスです。
            主に、モーダルウィンドウやチャットボックスなど、ネストされたスクロール領域内でスクロールした際に、背後にある親要素
            (例: <code>&lt;body&gt;</code>)
            が意図せずスクロールしてしまう「スクロールチェーン」現象を防ぐために使用されます。
          </p>
          <p>
            CSS の <code>overscroll-behavior</code>, <code>overscroll-behavior-x</code>,{' '}
            <code>overscroll-behavior-y</code> プロパティを制御します。
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
            <code>overscroll-{'{value}'}</code>, <code>overscroll-x-{'{value}'}</code>,{' '}
            <code>overscroll-y-{'{value}'}</code> の形式でクラスをスクロール可能な要素 (
            <code>overflow</code> が <code>visible</code> 以外に設定されている要素) に適用します。
          </p>
          <p>主な値:</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>
              <strong>
                <code>overscroll-auto</code>
              </strong>
              : デフォルト。要素のスクロールが境界に達すると、親要素へのスクロール伝播
              (スクロールチェーン) が通常通り発生します。ブラウザのネイティブな境界効果 (例: Android
              のグロー効果、iOS のバウンス効果、macOS のラバーバンド効果) も発生します。
            </li>
            <li>
              <strong>
                <code>overscroll-contain</code>
              </strong>
              :
              要素のスクロールが境界に達しても、親要素へのスクロール伝播は発生しません。ただし、ブラウザのネイティブな境界効果は維持されます
              (例: 「引っ張って更新」など)。
            </li>
            <li>
              <strong>
                <code>overscroll-none</code>
              </strong>
              :
              要素のスクロールが境界に達しても、親要素へのスクロール伝播は発生せず、ブラウザのネイティブな境界効果も抑制されます。
            </li>
          </ul>
          <p className="mt-4">
            <code>overscroll-x-*</code> は水平方向、<code>overscroll-y-*</code>{' '}
            は垂直方向のオーバースクロール挙動のみを制御します。
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
            各 overscroll 値の適用例。内側のボックスをスクロールしきった際の挙動に注目してください
            (親コンテナやページ全体のスクロールが発生するかどうか)。
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Auto */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
              overscroll-auto (デフォルト)
            </h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{autoHtml}</code>
            </pre>
            <OverscrollAutoExample />
          </div>
          {/* Contain */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
              overscroll-contain
            </h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{containHtml}</code>
            </pre>
            <OverscrollContainExample />
          </div>
          {/* None */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
              overscroll-none
            </h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{noneHtml}</code>
            </pre>
            <OverscrollNoneExample />
          </div>
          {/* Y-Contain */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
              overscroll-y-contain / x-auto
            </h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-1 rounded overflow-x-auto text-xs text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{yContainHtml}</code>
            </pre>
            <OverscrollYContainExample />
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
            を使って、特定の画面サイズでのみ <code>overscroll-behavior</code>{' '}
            プロパティを変更できます。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-stone-700 dark:text-stone-300 mb-4">
            例えば、<code>overscroll-auto md:overscroll-contain</code>{' '}
            はデフォルトでスクロールチェーンを許可し、中程度の画面サイズ以上でそれを抑制します。
          </p>
          {/* コード表示 */}
          <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
            <code className="language-html">
              {`
<div class="overscroll-auto md:overscroll-contain h-32 overflow-auto ...">
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
              <code>overscroll-behavior</code> は、要素が実際にスクロール可能である (
              <code>overflow</code> が <code>visible</code> 以外で、コンテンツがはみ出している)
              場合にのみ効果があります。
            </li>
            <li>
              このプロパティは比較的新しいため、古いブラウザではサポートされていない可能性があります。
            </li>
            <li>
              <code>overscroll-none</code>{' '}
              は「引っ張って更新」のような便利なネイティブ機能も無効にしてしまうため、ユーザー体験を損なわないか考慮が必要です。通常は{' '}
              <code>overscroll-contain</code> で十分な場合が多いです。
            </li>
            <li>
              水平方向と垂直方向で異なる挙動を設定したい場合は、<code>overscroll-x-*</code> と{' '}
              <code>overscroll-y-*</code> を組み合わせて使用します。
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
              <code>overflow</code> (<code>overflow-auto</code>, <code>overflow-scroll</code> など):
              要素のオーバーフロー処理とスクロールバーの表示を制御します。
              <code>overscroll-behavior</code> はこの <code>overflow</code>{' '}
              が設定された要素に適用します。
            </li>
          </ul>
        </CardContent>
      </Card>
    </ArticleLayout>
  );
};

export default OverscrollBehaviorPage;

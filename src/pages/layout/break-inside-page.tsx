import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ArticleLayout from '@/components/layout/ArticleLayout'; // ArticleLayout をインポート

// 各コードサンプルに対応するReact実装コンポーネント
// 注意: break-inside の効果は主に印刷時や複数カラムレイアウトで顕著になります。
//       Webブラウザ上での視覚的な変化は限定的か、または確認が難しい場合があります。
//       以下のサンプルはクラスの適用を示すもので、実際の改ページ/改カラム効果は
//       コンテキスト (カラムレイアウト、印刷プレビューなど) に依存します。

const AutoExample: React.FC = () => {
  return (
    <div className="columns-2 gap-8">
      <div className="break-inside-auto bg-blue-100 dark:bg-blue-900 p-4 rounded mb-4">
        <h4 className="font-bold mb-2">要素 1</h4>
        <p>
          この要素の内部では、改ページ/改カラムは通常通り発生する可能性があります (デフォルト)。
        </p>
        <p>長いコンテンツの場合、途中で分割されるかもしれません。</p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
        <h4 className="font-bold mb-2">要素 2</h4>
        <p>隣接する要素。</p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
        <h4 className="font-bold mb-2">要素 3</h4>
        <p>さらに別の要素。</p>
      </div>
    </div>
  );
};

const AvoidExample: React.FC = () => {
  return (
    <div className="columns-2 gap-8">
      <div className="break-inside-avoid bg-green-100 dark:bg-green-900 p-4 rounded mb-4">
        <h4 className="font-bold mb-2">要素 1 (Avoid)</h4>
        <p>この要素の内部では、可能な限り改ページ/改カラムが回避されます。</p>
        <p>要素全体が同じカラム/ページに収まるように試みられます。</p>
        <img
          className="w-full aspect-square mt-2 rounded"
          src="https://via.placeholder.com/200x200/a7f3d0/047857?text=Img"
          alt="Placeholder"
        />
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
        <h4 className="font-bold mb-2">要素 2</h4>
        <p>隣接する要素。</p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
        <h4 className="font-bold mb-2">要素 3</h4>
        <p>さらに別の要素。</p>
      </div>
    </div>
  );
};

const AvoidPageExample: React.FC = () => {
  return (
    <div>
      {' '}
      {/* カラムレイアウトなしで表示 */}
      <div className="break-inside-avoid-page bg-yellow-100 dark:bg-yellow-900 p-4 rounded mb-4">
        <h4 className="font-bold mb-2">要素 1 (Avoid Page)</h4>
        <p>この要素の内部では、可能な限り改ページが回避されます (印刷時)。</p>
        <p>印刷プレビューで確認すると、要素全体が同じページに収まるように試みられます。</p>
        <img
          className="w-full aspect-video mt-2 rounded"
          src="https://via.placeholder.com/400x200/fef9c3/b45309?text=Img"
          alt="Placeholder"
        />
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
        <h4 className="font-bold mb-2">要素 2</h4>
        <p>隣接する要素。</p>
      </div>
    </div>
  );
};

const AvoidColumnExample: React.FC = () => {
  return (
    <div className="columns-2 gap-8">
      <div className="break-inside-avoid-column bg-pink-100 dark:bg-pink-900 p-4 rounded mb-4">
        <h4 className="font-bold mb-2">要素 1 (Avoid Column)</h4>
        <p>この要素の内部では、可能な限り改カラムが回避されます。</p>
        <p>要素全体が同じカラムに収まるように試みられます。</p>
        <img
          className="w-full aspect-square mt-2 rounded"
          src="https://via.placeholder.com/200x200/fce7f3/9d174d?text=Img"
          alt="Placeholder"
        />
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
        <h4 className="font-bold mb-2">要素 2</h4>
        <p>隣接する要素。</p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
        <h4 className="font-bold mb-2">要素 3</h4>
        <p>さらに別の要素。</p>
      </div>
    </div>
  );
};

// ページコンポーネント本体
const BreakInsidePage: React.FC = () => {
  // コードスニペットを定義
  const autoHtml = `
<div class="columns-2">
  <div class="break-inside-auto ...">
    {/* この要素内では通常通り改ページ/改カラムが発生しうる */}
    <p>...</p>
    <p>...</p>
  </div>
  {/* ... */}
</div>
  `.trim();

  const avoidHtml = `
<div class="columns-2">
  <div class="break-inside-avoid ...">
    {/* この要素内での改ページ/改カラムを避ける */}
    <p>...</p>
    <img src="..." />
    <p>...</p>
  </div>
  {/* ... */}
</div>
  `.trim();

  const avoidPageHtml = `
<div> {/* 印刷コンテキスト */}
  <div class="break-inside-avoid-page ...">
    {/* この要素内での改ページを避ける */}
    <p>...</p>
    <img src="..." />
    <p>...</p>
  </div>
  {/* ... */}
</div>
  `.trim();

  const avoidColumnHtml = `
<div class="columns-2">
  <div class="break-inside-avoid-column ...">
    {/* この要素内での改カラムを避ける */}
    <p>...</p>
    <img src="..." />
    <p>...</p>
  </div>
  {/* ... */}
</div>
  `.trim();

  // 参照リンクの定義を追加
  const links = [
    {
      title: 'Tailwind CSS: Break Inside',
      url: 'https://tailwindcss.com/docs/break-inside',
    },
    {
      title: 'MDN: break-inside',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside',
    },
  ];

  return (
    <ArticleLayout title="Layout: Break Inside (要素内の改ページ/改カラム回避)" links={links}>
      <Helmet>
        <title>Layout: Break Inside - Tailwind CSS Cheatsheet</title>
        <meta
          name="description"
          content="Learn about the Layout: Break Inside utility in Tailwind CSS. Examples and usage details for Layout: Break Inside."
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
            要素の内部でどのように改ページ (page break) または改カラム (column break)
            を行うかを制御するためのユーティリティクラスです。
            主に、画像とキャプション、図表、コードブロックなど、ひとまとまりとして表示したい要素が途中で分割されるのを防ぐために使用します。
          </p>
          <p>
            CSS の <code>break-inside</code> プロパティを制御します。
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
            <code>break-inside-{'{value}'}</code> の形式でクラスを指定します。
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>
              <strong>
                <code>break-inside-auto</code>
              </strong>
              : デフォルト。要素の内部で通常通り改ページ/改カラムが発生する可能性があります。
            </li>
            <li>
              <strong>
                <code>break-inside-avoid</code>
              </strong>
              : 要素の内部での改ページ/改カラムを可能な限り回避します。
            </li>
            <li>
              <strong>
                <code>break-inside-avoid-page</code>
              </strong>
              : 要素の内部での改ページを可能な限り回避します (印刷コンテキスト)。
            </li>
            <li>
              <strong>
                <code>break-inside-avoid-column</code>
              </strong>
              : 要素の内部での改カラムを可能な限り回避します (複数カラムレイアウト)。
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
            各パラメータの適用例。効果はコンテキスト (カラムレイアウト、印刷プレビュー)
            に依存します。
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Auto */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
              break-inside-auto (デフォルト)
            </h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{autoHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <AutoExample />
            </div>
          </div>
          {/* Avoid */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
              break-inside-avoid
            </h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{avoidHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <AvoidExample />
            </div>
          </div>
          {/* Avoid Page */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
              break-inside-avoid-page (印刷時)
            </h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{avoidPageHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <AvoidPageExample />
            </div>
          </div>
          {/* Avoid Column */}
          <div>
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">
              break-inside-avoid-column
            </h3>
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
              <code className="language-html">{avoidColumnHtml}</code>
            </pre>
            <div className="p-4 border border-stone-300 dark:border-stone-600 rounded">
              <AvoidColumnExample />
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
            を使って、特定の画面サイズでのみ <code>break-inside</code> プロパティを適用できます。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-stone-700 dark:text-stone-300 mb-4">
            例えば、<code>md:break-inside-avoid-column</code>{' '}
            は中程度の画面サイズ以上でのみ要素内部の改カラムを回避します。
          </p>
          {/* コード表示 */}
          <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
            <code className="language-html">
              {`
<div class="columns-1 md:columns-2">
  {/* 中画面以上でのみ内部改カラムを回避 */}
  <div class="md:break-inside-avoid-column ...">
    <p>...</p>
    <img src="..." />
    <p>...</p>
  </div>
  {/* ... */}
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
              <code>break-inside</code> の効果は、コンテナが複数カラムレイアウト (
              <code>columns-*</code>)
              であるか、印刷コンテキストであるかに強く依存します。通常の単一カラムのWebページ表示では、視覚的な効果がない場合があります。
            </li>
            <li>
              このユーティリティは、要素全体を次のカラムやページに移動させるのではなく、あくまで要素の「内部」での分割を防ごうとします。
            </li>
            <li>
              ブラウザのサポート状況は比較的新しい機能であるため、古いブラウザでは意図した通りに動作しない可能性があります。特に{' '}
              <code>avoid</code> の挙動はブラウザによって差が出ることがあります。
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
              <code>break-before</code> (<code>break-before-column</code> など): 要素の
              <strong>前</strong>で改ページ/改カラムを制御します。
            </li>
            <li>
              <code>break-after</code> (<code>break-after-column</code> など): 要素の
              <strong>後</strong>で改ページ/改カラムを制御します。
            </li>
            <li>
              <code>columns</code> (<code>columns-2</code>, <code>columns-md</code> など):
              コンテンツを複数カラムに分割します。<code>break-inside-*</code>{' '}
              と組み合わせて使用されます。
            </li>
          </ul>
        </CardContent>
      </Card>
    </ArticleLayout>
  );
};

export default BreakInsidePage;

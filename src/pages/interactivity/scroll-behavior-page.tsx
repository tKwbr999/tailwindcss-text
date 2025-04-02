import React, { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// 各コードサンプルに対応するReact実装コンポーネント

const ScrollBehaviorExample: React.FC = () => {
  const scrollContainerRefAuto = useRef<HTMLDivElement>(null);
  const scrollContainerRefSmooth = useRef<HTMLDivElement>(null);

  const scrollToTop = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollTo({ top: 0 }); // behavior は CSS で制御
    }
  };

  const scrollToBottom = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollTo({ top: ref.current.scrollHeight }); // behavior は CSS で制御
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">scroll-auto (デフォルト)</h3>
        <div ref={scrollContainerRefAuto} className="scroll-auto h-48 overflow-y-scroll border border-gray-300 rounded p-2 bg-white dark:bg-gray-700">
          <p className="mb-2">Top Content</p>
          <div className="h-96"></div> {/* Spacer */}
          <p id="auto-bottom" className="mt-2">Bottom Content</p>
        </div>
        <div className="mt-2 space-x-2">
           <button onClick={() => scrollToBottom(scrollContainerRefAuto)} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Scroll to Bottom (Auto)</button>
           <button onClick={() => scrollToTop(scrollContainerRefAuto)} className="bg-gray-500 text-white px-3 py-1 rounded text-sm">Scroll to Top (Auto)</button>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">scroll-smooth</h3>
        <div ref={scrollContainerRefSmooth} className="scroll-smooth h-48 overflow-y-scroll border border-gray-300 rounded p-2 bg-white dark:bg-gray-700">
           <p className="mb-2">Top Content</p>
          <div className="h-96"></div> {/* Spacer */}
          <p id="smooth-bottom" className="mt-2">Bottom Content</p>
        </div>
         <div className="mt-2 space-x-2">
           <button onClick={() => scrollToBottom(scrollContainerRefSmooth)} className="bg-green-500 text-white px-3 py-1 rounded text-sm">Scroll to Bottom (Smooth)</button>
           <button onClick={() => scrollToTop(scrollContainerRefSmooth)} className="bg-gray-500 text-white px-3 py-1 rounded text-sm">Scroll to Top (Smooth)</button>
        </div>
      </div>
    </div>
  );
};


// ページコンポーネント本体
const ScrollBehaviorPage: React.FC = () => {
  // コードスニペットを定義
  const scrollAutoHtml = `
<div class="scroll-auto ...">
  {/* ... content ... */}
</div>
  `.trim();

  const scrollSmoothHtml = `
<div class="scroll-smooth ...">
  {/* ... content ... */}
</div>
  `.trim();


  return (
    // ページ全体の背景色とパディング
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {' '}
        {/* space-y で Card 間の余白を設定 */}
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          Interactivity: Scroll Behavior (スクロール動作)
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
              ユーザーがリンクをクリックしたり、プログラム的にナビゲーションしたりしたときに、スクロールコンテナがどのようにスクロールするかを制御するためのユーティリティクラスです。
            </p>
            <p>
              CSS の <code>scroll-behavior</code> プロパティを制御します。
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
              スクロール可能なコンテナ要素 (通常は <code>overflow</code> が <code>scroll</code> または <code>auto</code> に設定された要素) に以下のクラスを適用します。
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong><code>scroll-auto</code></strong>: スクロール位置が瞬時にジャンプします (<code>scroll-behavior: auto;</code>)。これがデフォルトの挙動です。</li>
              <li><strong><code>scroll-smooth</code></strong>: スクロール位置が滑らかにアニメーションします (<code>scroll-behavior: smooth;</code>)。</li>
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
              <code>scroll-auto</code> と <code>scroll-smooth</code> の比較。ボタンをクリックしてスクロール動作を確認してください。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Scroll Behavior Example */}
            <div>
              <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-2">スクロール動作の制御</h3>
              <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{scrollAutoHtml}</code>
              </pre>
               <pre className="bg-stone-200 dark:bg-stone-700 p-2 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200 mb-2">
                <code className="language-html">{scrollSmoothHtml}</code>
              </pre>
              <ScrollBehaviorExample />
            </div>
          </CardContent>
        </Card>

        {/* レスポンシブと状態変化 Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-stone-800 dark:text-stone-200">
              レスポンシブ
            </CardTitle>
            <CardDescription className="text-stone-600 dark:text-stone-400">
              特定のブレークポイントでのみスクロール動作を変更するには、クラス名の前にブレークポイントプレフィックスを追加します (例: <code>md:scroll-smooth</code>)。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              通常は自動スクロールを使用し、中程度の画面サイズ以上でスムーズスクロールにする場合:
            </p>
            {/* コード表示 */}
            <pre className="bg-stone-200 dark:bg-stone-700 p-4 rounded overflow-x-auto text-sm text-stone-800 dark:text-stone-200">
              <code className="language-html">{`
<div class="scroll-auto md:scroll-smooth ...">
  {/* ... */}
</div>
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
                <code>scroll-behavior</code> は、ユーザーによる手動スクロール (マウスホイールやタッチ操作) ではなく、ナビゲーションによるスクロール (例: アンカーリンクへのジャンプ、<code>element.scrollTo()</code> JavaScript メソッド) に影響します。
              </li>
              <li>
                ブラウザのサポート状況は良好ですが、非常に古いブラウザでは動作しない可能性があります。
              </li>
               <li>
                OS の設定でモーションの低減が有効になっている場合、<code>scroll-smooth</code> は無効になることがあります。
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
                  href="https://tailwindcss.com/docs/scroll-behavior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  Tailwind CSS: Scroll Behavior
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 underline"
                >
                  MDN: scroll-behavior
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScrollBehaviorPage;
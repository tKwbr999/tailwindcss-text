import { useEffect } from 'react'; // Reactフック
import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import { Route, Routes, useLocation } from 'react-router-dom'; // ルーティング用コンポーネント
import aiSourcesConfig from './config/ai-sources.json'; // 相対パスを修正
import HomePage from './pages/HomePage'; // ホームページコンポーネント

// グローバル window に dataLayer を追加
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Vite の import.meta.glob を使用してページコンポーネントを動的に読み込む
// eager: true で同期的にモジュールを読み込む
const modules = import.meta.glob('./pages/**/*-page.tsx', { eager: true });

const routes = Object.entries(modules)
  .map(([path, module]) => {
    // パスから URL を生成
    // 例: './pages/layout/aspect-ratio-page.tsx' -> '/layout/aspect-ratio'
    const urlPath = path
      .replace('./pages', '') // './pages' を削除
      .replace(/-page\.tsx$/, ''); // '-page.tsx' を削除

    // default export されたコンポーネントを取得し、検証する
    const potentialComponent = (module as { default: unknown }).default;
    const Component =
      typeof potentialComponent === 'function' ? (potentialComponent as React.ComponentType) : null;

    // コンポーネントが無効な場合はエラーを出力し、null を返す
    if (!Component) {
      console.error(`Module ${path} does not export a valid React component.`);
      return null;
    }

    return { path: urlPath, Component };
  })
  .filter((route): route is { path: string; Component: React.ComponentType } => route !== null); // null を除去し、型ガードを行う

// GTMトラッキング用のコンポーネント
function TrackingComponent() {
  const location = useLocation();

  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page_path: location.pathname + location.search,
      });

      // 環境変数からAIソースを取得して配列に変換
      const aiSources = aiSourcesConfig.aiSources;
      const referrer = document.referrer;
      if (aiSources.some((source: string) => referrer.includes(source))) {
        window.dataLayer.push({
          event: 'ai_referral',
          ai_source: referrer,
        });
      }
    }
  }, [location]);

  return null;
}

/**
 * アプリケーションのルートコンポーネント
 * 全体のレイアウトとルーティングを定義
 */
function App() {
  const location = useLocation(); // 現在の location を取得

  // location.pathname が変更されたときにスクロールをトップに移動
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    // 全体のコンテナ、左右に自動マージン、上下左右にパディング
    <div className="container mx-auto p-4">
      {/* デフォルトのメタ情報とHTML属性を設定 */}
      <Helmet htmlAttributes={{ lang: 'ja' }}>
        {/* 基本的なメタ情報 */}
        <title>Tailwind CSS Text Utilities (日本語解説)</title>
        <meta
          name="description"
          content="A comprehensive cheatsheet for Tailwind CSS text-related utility classes. Find examples for typography, spacing, alignment, decoration, and more."
        />
        {/* OGP タグ */}
        <meta property="og:site_name" content="Tailwind CSS 日本語解説" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/ogp-image.png" />
        <meta
          property="og:url"
          content={
            import.meta.env.VITE_SITE_DOMAIN || 'https://tKwbr999.github.io/tailwindcss-text/'
          }
        />
        {/* Twitter Card タグ */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tKwbr999" />
        <meta name="twitter:image" content="/ogp-image.png" />
      </Helmet>

      {/* トラッキングコンポーネント */}
      <TrackingComponent />

      {/* 各ページのコンテンツを表示するメインエリア */}
      <main>
        {/* ルーティング設定 */}
        <Routes>
          {/* ルートパス ("/") に HomePage を割り当て */}
          <Route path="/" element={<HomePage />} />

          {/* 動的に生成されたルート */}
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;

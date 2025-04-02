import { Routes, Route } from 'react-router-dom'; // ルーティング用コンポーネント
import HomePage from './pages/HomePage'; // ホームページコンポーネント
// import ArticlePage from './pages/ArticlePage'; // 必要に応じてコメント解除

// Vite の import.meta.glob を使用してページコンポーネントを動的に読み込む
// eager: true で同期的にモジュールを読み込む
const modules = import.meta.glob('./pages/**/*-page.tsx', { eager: true });

const routes = Object.entries(modules).map(([path, module]) => {
  // パスから URL を生成
  // 例: './pages/layout/aspect-ratio-page.tsx' -> '/layout/aspect-ratio'
  const urlPath = path
    .replace('./pages', '') // './pages' を削除
    .replace(/-page\.tsx$/, ''); // '-page.tsx' を削除

  // default export されたコンポーネントを取得
  // 型アサーションを使用して React コンポーネント型であることを示す
  const Component = (module as { default: React.ComponentType }).default;

  // ArticlePage は動的ルートで処理するため除外 (必要に応じて調整)
  // if (urlPath.includes('/ArticlePage')) {
  //    return null;
  // }

  return { path: urlPath, Component };
}).filter((route): route is { path: string; Component: React.ComponentType } => route !== null); // null を除去し、型ガードを行う


/**
 * アプリケーションのルートコンポーネント
 * 全体のレイアウトとルーティングを定義
 */
function App() {
  return (
    // 全体のコンテナ、左右に自動マージン、上下左右にパディング
    <div className="container mx-auto p-4">
      {/* 各ページのコンテンツを表示するメインエリア */}
      <main>
        {/* ルーティング設定 */}
        <Routes>
          {/* ルートパス ("/") に HomePage を割り当て */}
          <Route path="/" element={<HomePage />} />
          {/* 動的ルート: ArticlePage は一旦コメントアウト or 削除 (必要に応じて調整) */}
          {/* <Route path="/:section/:articleName" element={<ArticlePage />} /> */}

          {/* 動的に生成されたルート */}
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          {/* TODO: 他の静的ページルートや動的ルートをここに追加 */}
        </Routes>
      </main>
    </div>
  );
}

export default App;

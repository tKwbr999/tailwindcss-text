import { Routes, Route } from 'react-router-dom'; // ルーティング用コンポーネント
import HomePage from './pages/HomePage'; // ホームページコンポーネント
import ArticlePage from './pages/ArticlePage'; // 記事ページコンポーネント
import AspectRatioPage from './pages/layout/aspect-ratio-page'; // Aspect Ratio ページ
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
          {/* 作成した静的ページへのルート */}
          <Route path="/layout/aspect-ratio" element={<AspectRatioPage />} />
          {/* TODO: 他の静的ページルートや動的ルートをここに追加 */}
        </Routes>
      </main>
    </div>
  );
}

export default App;

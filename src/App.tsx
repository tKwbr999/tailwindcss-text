import { Routes, Route } from 'react-router-dom'; // ルーティング用コンポーネント
import HomePage from './pages/HomePage'; // ホームページコンポーネント
import ArticlePage from './pages/ArticlePage'; // 記事ページコンポーネント

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
          {/* 動的ルート: セクション名と記事名に基づいて ArticlePage を表示 */}
          <Route path="/:section/:articleName" element={<ArticlePage />} />
          {/* TODO: 他のルート (例: 検索結果ページなど) を将来的に追加 */}
        </Routes>
      </main>
    </div>
  );
}

export default App;

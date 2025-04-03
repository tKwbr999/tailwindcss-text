import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// HashRouter を使用して GitHub Pages での静的ホスティングに対応
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // HelmetProvider をインポート
import './index.css'; // グローバル CSS (Tailwind ディレクティブを含む)
import App from './App.tsx'; // ルートコンポーネント

// ルート要素を取得
const rootElement = document.getElementById('root');

// ルート要素が存在することを確認
if (!rootElement) {
  throw new Error("Failed to find the root element with id 'root'");
}

// React ルートを作成
const root = createRoot(rootElement);

// アプリケーションをレンダリング
root.render(
  <StrictMode> {/* 潜在的な問題を検出するための StrictMode */}
    <HashRouter> {/* ルーティング機能を提供 */}
      <HelmetProvider> {/* HelmetProvider で App をラップ */}
        <App /> {/* アプリケーション本体 */}
      </HelmetProvider>
    </HashRouter>
  </StrictMode>
);

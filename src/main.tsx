import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // HashRouter をインポート
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter> {/* App を HashRouter でラップ */}
      <App />
    </HashRouter>
  </StrictMode>
);

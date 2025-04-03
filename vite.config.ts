import react from '@vitejs/plugin-react-swc';
import { componentTagger } from 'lovable-tagger';
import path from 'path'; // path をインポート
import { defineConfig } from 'vite';
import viteSitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // GitHub Pages用のベースパスを設定
  // HashRouterを使用する場合、ベースURLは単純な相対パスでよい
  // tailwindcss-text 用のベースパスに変更
  const base = process.env.GITHUB_PAGES ? '/tailwindcss-text/' : './';
  const hostname = process.env.GITHUB_PAGES ? 'https://tKwbr999.github.io/tailwindcss-text/' : 'http://localhost:8080'; // ホスト名も動的に

  return {
    base,
    define: {
      'import.meta.env.GITHUB_PAGES': JSON.stringify(process.env.GITHUB_PAGES),
    },
    server: {
      host: '::',
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
      viteSitemap({
        hostname: hostname, // 動的に設定
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});

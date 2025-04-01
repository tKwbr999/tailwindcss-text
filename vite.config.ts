import path from "path" // path をインポート
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { // resolve を追加
    alias: {
      "@": path.resolve(__dirname, "./src"), // @ エイリアスを設定
    },
  },
})

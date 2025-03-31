# Vite を使用した Tailwind CSS のインストール

このガイドでは、[Vite](https://vitejs.dev/) プロジェクトで Tailwind CSS v3 をセットアップする方法を説明します。

## 1. プロジェクトの作成

まず、Vite を使用して新しいプロジェクトを作成します（まだ作成していない場合）。最も一般的な方法は、Create Vite を使用することです。

```bash
bun create vite my-project --template react
cd my-project
```

## 2. Tailwind CSS のインストール

次に、`tailwindcss` とそのピア依存関係をインストールし、`tailwind.config.js` ファイルを生成します。

```bash
bun add -d tailwindcss postcss autoprefixer
bunx tailwindcss init -p
```

## 3. テンプレートパスの設定

`tailwind.config.js` ファイルで、すべてのテンプレートファイルへのパスを設定します。

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 4. Tailwind ディレクティブを CSS に追加する

メインの CSS ファイル（通常は `./src/index.css`）に、Tailwind の各レイヤーに対する `@tailwind` ディレクティブを追加します。

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 5. ビルドプロセスを開始する

ターミナルで Vite ビルドプロセスを実行します。

```bash
bun run dev
```

メインの JavaScript ファイル（通常は `./src/main.jsx` または `./src/main.js`）で CSS ファイルをインポートしていることを確認してください。

```js
// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // ← これを追加

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## 6. Tailwind を使い始める

これで完了です！ HTML で Tailwind のユーティリティクラスを使用してスタイリングを開始できます。

```html
<!-- src/App.jsx -->
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```
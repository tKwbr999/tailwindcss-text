<div align="center">
  <!-- TODO: ヘッダー画像を追加 -->
  <!-- <img src="docs/images/header.png" alt="Tailwind CSS Utilities Documentation Site" width="600"> -->
  <h1>📝 Tailwind CSS Utilities Documentation Site</h1>
  <p>Tailwind CSS の各ユーティリティクラスを解説するドキュメントサイト</p>

  <!-- TODO: Shields.io などでバッジを生成 -->
  <p>
    <img src="https://img.shields.io/badge/React-61DAFB?logo=react&amp;logoColor=black" alt="React">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&amp;logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&amp;logoColor=white" alt="Vite">
    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&amp;logoColor=white" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/Bun-000000?logo=bun&amp;logoColor=white" alt="Bun">
  </p>
</div>

`tailwindcss-utilities-md/` ディレクトリには、Tailwind CSS の各ユーティリティクラスを解説するマークダウンファイルがカテゴリ別に格納されています。このサイトは、これらのファイルを元に生成されています。

関連 Issue: [#3](https://github.com/tKwbr999/tailwindcss-text/issues/3)

## ✨ サイト概要 (使用方法)

このサイトは、Tailwind CSS の豊富なユーティリティクラスを素早く検索・参照するためのドキュメントサイトです。

*   **ナビゲーション:** トップページから、目的のユーティリティカテゴリを選択します。（将来的にはサイドバーナビゲーションを実装予定）
*   **コンテンツ:** 各ページには、ユーティリティクラスの使い方や例が表示されます。

<!-- TODO: スクリーンショットを追加 -->
<!-- <p align="center">
  <img src="docs/images/screenshot.png" alt="Screenshot" width="700">
</p> -->

## 🚀 アーキテクチャ概要

- **フレームワーク:** React + TypeScript
- **ビルドツール:** Vite
- **スタイリング:** Tailwind CSS
- **ルーティング:** React Router DOM (`HashRouter` を使用し、GitHub Pages での静的ホスティングに対応)
- **パッケージ管理:** Bun

## 🛠️ 構築手順

1.  **リポジトリのクローンと移動:**

    ```bash
    git clone https://github.com/tKwbr999/tailwindcss-text.git
    cd tailwindcss-text
    ```

2.  **初期セットアップ (必要な場合のみ):**
    *   **注意:** このリポジトリには既に Vite プロジェクトと Tailwind CSS がセットアップされています。新規にセットアップする場合や、設定ファイルが失われた場合にのみ以下のコマンドを実行してください。
    *   Vite プロジェクトの初期化:
        ```bash
        # bun create vite@latest . --template react-swc-ts
        ```
    *   Tailwind CSS のセットアップ:
        ```bash
        # bunx tailwindcss init -p
        ```
        `tailwind.config.js` の `content` 配列と、メイン CSS (`./src/index.css`) に `@tailwind` ディレクティブを追加してください（詳細は[公式ドキュメント](https://tailwindcss.com/docs/installation/using-postcss)参照）。

    *   Prettier のセットアップ (推奨):
        ```bash
        npm install --save-dev prettier
        ```
        設定ファイル (`.prettierrc` など) を作成し、フォーマットルールを定義します。

    *   shadcn/ui の導入 (必要な場合のみ):
        ```bash
        # bunx shadcn@latest init
        ```
        `tsconfig.json` に `baseUrl` と `paths` が設定されていることを確認してください。

    *   その他ライブラリのインストール:
        ```bash
        bun add react-router-dom react-markdown remark-gfm
        ```

3.  **依存関係のインストール:**
    ```bash
    bun install
    ```
    または `Makefile` を使用:
    ```bash
    make install
    ```

4.  **開発サーバーの起動:**
    ```bash
    bun run dev
    ```
    または `Makefile` を使用:
    ```bash
    make dev
    ```
    ブラウザで `http://localhost:5173` (または表示されたポート) を開きます。

5.  **静的ファイルのビルド:**
    ```bash
    bun run build
    ```
    または `Makefile` を使用:
    ```bash
    make build
    ```
    ビルドされたファイルは `dist` ディレクトリに出力されます。

## 📂 ディレクトリ構造

```
.
├── docs/                     # (既存のドキュメント)
├── tailwindcss-utilities-md/ # 各ユーティリティクラス解説の元となるマークダウンファイル (カテゴリ別)
├── src/                      # アプリケーションソースコード
│   ├── components/           # 再利用可能な UI コンポーネント
│   ├── data/                 # データファイル (記事情報など)
│   ├── lib/                  # ユーティリティ関数など
│   ├── pages/                # ページコンポーネント
│   ├── App.tsx               # ルートコンポーネント、ルーティング設定
│   ├── index.css             # CSS エントリーポイント (Tailwind ディレクティブ)
│   └── main.tsx              # アプリケーションエントリーポイント
├── public/                   # 静的アセット (Vite デフォルト)
├── .gitignore
├── bun.lockb
├── index.html                # HTML エントリーポイント
├── Makefile                  # ビルド/開発/初期化用コマンド
├── components.json           # shadcn/ui 設定
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## ✅ 今後のタスク

- [ ] 各記事ページコンポーネントの作成
- [ ] マークダウンファイルのコンテンツをページに表示する機能の実装
- [ ] GitHub Pages へのデプロイ設定
- [ ] デザインの改善 (サイドバーナビゲーションなど)
- [ ] README の分割 (構築手順、ディレクトリ構造など)

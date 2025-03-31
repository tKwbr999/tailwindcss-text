# Tailwind CSS Utilities Documentation Site

`tailwindcss-utilities-md/` ディレクトリ内のマークダウンファイルを元に生成された、Tailwind CSS ユーティリティクラスのドキュメントサイトです。

関連 Issue: [#3](https://github.com/tKwbr999/tailwindcss-text/issues/3)

## アーキテクチャ概要

*   **フレームワーク:** React + TypeScript
*   **ビルドツール:** Vite
*   **スタイリング:** Tailwind CSS
*   **ルーティング:** React Router DOM (`HashRouter` を使用し、GitHub Pages での静的ホスティングに対応)
*   **パッケージ管理:** Bun

## 構築手順

1.  **リポジトリのクローンと移動:**
    ```bash
    git clone https://github.com/tKwbr999/tailwindcss-text.git
    cd tailwindcss-text
    ```

2.  **初期セットアップ (必要な場合のみ):**
    *   **注意:** このリポジトリには既に Vite プロジェクトと Tailwind CSS がセットアップされています。新規にセットアップする場合や、設定ファイルが失われた場合にのみ以下のコマンドを実行してください。
    *   Vite プロジェクトの初期化 (現在のディレクトリにファイルが生成されます):
        ```bash
        # make init-vite # または bun create vite@latest . --template react-ts
        ```
    *   Tailwind CSS 設定ファイルの生成:
        ```bash
        # make init-tailwind # または bunx tailwindcss init -p
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

## ディレクトリ構造

```
.
├── docs/                     # (既存のドキュメント)
├── tailwindcss-utilities-md/ # 元となるマークダウンファイル
├── src/                      # アプリケーションソースコード
│   ├── data/                 # データファイル (記事情報など)
│   │   └── markdownFiles.ts
│   ├── pages/                # ページコンポーネント
│   │   └── HomePage.tsx
│   ├── App.tsx               # ルートコンポーネント、ルーティング設定
│   ├── index.css             # CSS エントリーポイント (Tailwind ディレクティブ)
│   └── main.tsx              # アプリケーションエントリーポイント
├── public/                   # 静的アセット (Vite デフォルト)
├── .gitignore
├── bun.lockb
├── index.html                # HTML エントリーポイント
├── Makefile                  # ビルド/開発用コマンド
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 今後のタスク

*   各記事ページコンポーネントの作成
*   マークダウンファイルのコンテンツをページに表示する機能の実装
*   GitHub Pages へのデプロイ設定
*   デザインの改善

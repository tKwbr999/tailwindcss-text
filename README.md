# Tailwind CSS Utilities Documentation Site

`tailwindcss-utilities-md/` ディレクトリには、Tailwind CSS の各ユーティリティクラスを解説するマークダウンファイルがカテゴリ別に格納されています。このサイトは、これらのファイルを元に生成されています。

関連 Issue: [#3](https://github.com/tKwbr999/tailwindcss-text/issues/3)

## アーキテクチャ概要

- **フレームワーク:** React + TypeScript
- **ビルドツール:** Vite
- **スタイリング:** Tailwind CSS
- **ルーティング:** React Router DOM (`HashRouter` を使用し、GitHub Pages での静的ホスティングに対応)
- **パッケージ管理:** Bun

## 構築手順

1.  **リポジトリのクローンと移動:**

    ```bash
    git clone https://github.com/tKwbr999/tailwindcss-text.git
    cd tailwindcss-text
    ```

2.  **初期セットアップ (必要な場合のみ):**
    - **注意:** このリポジトリには既に Vite プロジェクトと Tailwind CSS がセットアップされています。新規にセットアップする場合や、設定ファイルが失われた場合にのみ以下のコマンドを実行してください。
    - Vite プロジェクトの初期化 (現在のディレクトリにファイルが生成されます):
      ```bash
      # make init-vite # または bun create vite@latest . --template react-swc-ts
      ```

- **Tailwind CSS のセットアップ (必要な場合のみ):**

  - **注意:** このリポジトリには既に Tailwind CSS がセットアップされています。新規にセットアップする場合や、設定ファイルが失われた場合にのみ以下のコマンドを実行してください。
  - Tailwind CSS とその依存関係のインストール, 設定ファイルの生成 (`tailwind.config.js` と `postcss.config.js`):
    ```bash
    # make init-tailwind
    ```
  - `tailwind.config.js` の設定: `content` 配列に、Tailwind を適用したいテンプレートファイルのパスを追加します。
    ```js
    // tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}', // プロジェクトのファイル構造に合わせて確認・調整してください
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```
  - メインの CSS ファイル (`./src/index.css` など) の設定: ファイルの先頭に Tailwind のディレクティブを追加します。
    ```css
    /* ./src/index.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

- **Prettier のセットアップ (推奨):**
  - コードフォーマッター Prettier をインストールします。
  ```bash
  npm install --save-dev prettier
  ```
  - 設定ファイル (`.prettierrc` など) を作成し、フォーマットルールを定義します。

3.  **shadcn/ui の導入 (必要な場合のみ):**

    - **注意:** このリポジトリには既に shadcn/ui が導入されています。新規に導入する場合や、設定ファイルが失われた場合にのみ以下のコマンドを実行してください。
    - `tsconfig.json` に `baseUrl` と `paths` が設定されていることを確認してください（shadcn/ui はインポートエイリアスを必要とします）。
      ```json
      // tsconfig.json (抜粋)
      {
        "compilerOptions": {
          "baseUrl": ".",
          "paths": {
            "@/*": ["./src/*"]
          }
          // ...
        }
      }
      ```
    - shadcn/ui CLI を使用して初期化します。対話形式で設定を選択します。
      ```bash
      # make init-shadcn # または bunx shadcn@latest init
      ```

    * **その他ライブラリのインストール:**

      - ルーティングライブラリをインストールします。

      ```bash
      bun add react-router-dom react-markdown remark-gfm
      ```

    * **React Markdown のインストール:**
      - Markdown を React コンポーネントとしてレンダリングするライブラリをインストールします。
      ```bash
      bun add react-markdown
      ```

4.  **依存関係のインストール:**

    - shadcn/ui の初期化時に依存関係がインストールされますが、手動でインストールする場合は以下を実行します。

    ```bash
    bun install
    ```

    または `Makefile` を使用:

    ```bash
    make install
    ```

5.  **開発サーバーの起動:**

    ```bash
    bun run dev
    ```

    または `Makefile` を使用:

    ```bash
    make dev
    ```

    ブラウザで `http://localhost:5173` (または表示されたポート) を開きます。

6.  **静的ファイルのビルド:**
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
├── tailwindcss-utilities-md/ # 各ユーティリティクラス解説の元となるマークダウンファイル (カテゴリ別)
├── src/                      # アプリケーションソースコード
│   ├── data/                 # データファイル (記事情報など)
│   │   └── markdownFiles.ts
│   ├── lib/                  # shadcn/ui ユーティリティ
│   │   └── utils.ts
│   ├── pages/                # ページコンポーネント
│   │   └── HomePage.tsx
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

## 今後のタスク

- 各記事ページコンポーネントの作成
- マークダウンファイルのコンテンツをページに表示する機能の実装
- GitHub Pages へのデプロイ設定
- デザインの改善

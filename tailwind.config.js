/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ダークモードをクラスベースで有効化
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))', // ボーダー色
        input: 'hsl(var(--input))', // 入力欄ボーダー色
        ring: 'hsl(var(--ring))', // フォーカスリング色
        background: 'hsl(var(--background))', // 背景色
        foreground: 'hsl(var(--foreground))', // 前景色 (テキストなど)
        primary: {
          DEFAULT: 'hsl(var(--primary))', // プライマリ色 (アクセント、リンクなど)
          foreground: 'hsl(var(--primary-foreground))', // プライマリ色上のテキスト色
        },
        secondary: { // 必要に応じて定義
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: { // 必要に応じて定義 (エラー表示など)
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: { // 補助的な要素
          DEFAULT: 'hsl(var(--muted))', // ミュート背景
          foreground: 'hsl(var(--muted-foreground))', // ミュート前景 (補助テキスト)
        },
        accent: { // 必要に応じて定義 (強調など)
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: { // ポップオーバー用
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: { // カードコンポーネント用
          DEFAULT: 'hsl(var(--card))', // カード背景
          foreground: 'hsl(var(--card-foreground))', // カード前景
        },
      },
      borderRadius: { // 例として追加
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      }
    },
  },
  plugins: [],
}

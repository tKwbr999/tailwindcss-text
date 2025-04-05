import { Helmet } from 'react-helmet-async'; // Helmet をインポート
import { Link } from 'react-router-dom';
import { sections } from '../data/markdownFiles'; // データファイルをインポート

function HomePage() {
  // const [searchKeyword, setSearchKeyword] = useState(''); // 検索キーワード用の State
  // const [domainError, setDomainError] = useState(false); // ドメイン未設定エラー表示用の State

  // const handleSearch = () => {
  //   const currentSiteDomain = import.meta.env.VITE_SITE_DOMAIN || ''; // 最新の環境変数を取得
  //
  //   // ドメイン設定チェック
  //   if (currentSiteDomain === '') {
  //     setDomainError(true); // エラー State を true に設定
  //     return; // 処理を中断
  //   } else {
  //     setDomainError(false); // ドメインが設定されていればエラー State を false に戻す
  //   }
  //
  //   // キーワードチェック
  //   if (searchKeyword.trim() === '') {
  //     // キーワードが空の場合は何もしない
  //     return;
  //   }
  //   const encodedKeyword = encodeURIComponent(searchKeyword);
  //   const searchUrl = `https://www.google.com/search?q=site:${currentSiteDomain}+${encodedKeyword}`;
  //   window.open(searchUrl, '_blank'); // 新しいタブで Google 検索を開く
  // };

  return (
    // ページ全体に背景色とパディング (もう一段暗く)
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      <Helmet>
        {/* ページタイトル: App.tsx のデフォルトを上書き */}
        <title>Tailwind CSS Utilities Cheatsheet - Home</title>
        {/* ページの説明: App.tsx のデフォルトを上書き */}
        <meta
          name="description"
          content="Explore all Tailwind CSS utility classes with examples. Find sections for layout, flexbox, grid, spacing, typography, and more."
        />
        {/* OGP タグは App.tsx でデフォルト設定 */}
      </Helmet>{' '}
      {/* bg-stone-100 を bg-stone-200 に変更 */}
      {/* コンテナ: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-3xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6">
        {/* メインタイトル: サイズ、太さ、色 */}
        <h1 className="text-3xl font-bold mb-8 text-center text-stone-900 dark:text-stone-100">
          Tailwind CSS Utilities
          <br />
          <span className="text-lg font-medium">日本語解説</span>
        </h1>

        {/* サイト内検索フォーム (コメントアウト)
        <div className="mb-2">
          <label htmlFor="site-search-input" className="sr-only">
            サイト内検索
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              id="site-search-input"
              value={searchKeyword}
              onChange={e => setSearchKeyword(e.target.value)}
              placeholder="サイト内を検索..."
              className="flex-grow px-3 py-2 border border-stone-300 dark:border-stone-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-stone-700 dark:text-stone-100"
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-stone-800 transition-colors duration-150"
            >
              検索
            </button>
          </div>
        </div>
        */}
        {/* ドメイン未設定時のエラーメッセージ (コメントアウト)
        {domainError && (
          <p className="mb-6 text-sm text-red-600 dark:text-red-400">
            検索機能を利用するには、管理者によるサイトドメインの設定が必要です。(.env ファイルの VITE_SITE_DOMAIN)
          </p>
        )}
        */}
        {sections.map(section => (
          <section key={section.name} className="mb-8 last:mb-0">
            {/* セクションタイトル: サイズ、太さ、色、下線 */}
            <h2 className="text-2xl font-semibold mb-4 text-stone-800 dark:text-stone-200 border-b border-stone-300 dark:border-stone-700 pb-2">
              {section.name}
            </h2>
            {/* リスト: Flexboxで横並び、折り返し、間隔調整 */}
            <ul className="list-none flex flex-wrap gap-x-3 gap-y-1">
              {section.articles.map(article => (
                <li key={article.path}>
                  <Link
                    to={article.path}
                    // リンク: 落ち着いた色、ホバー時の色と下線、トランジション、フォントの太さ
                    className="text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:underline transition-colors duration-150 font-medium"
                  >
                    {article.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

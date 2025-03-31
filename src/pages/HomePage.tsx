import { Link } from 'react-router-dom';
import { sections } from '../data/markdownFiles'; // データファイルをインポート

function HomePage() {
  return (
    // ページ全体に背景色とパディング (もう一段暗く)
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif"> {/* bg-stone-100 を bg-stone-200 に変更 */}
      {/* コンテナ: 最大幅、中央揃え、背景色、角丸、影 */}
      <div className="max-w-3xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6">
        {/* メインタイトル: サイズ、太さ、色 */}
        <h1 className="text-3xl font-bold mb-8 text-center text-stone-900 dark:text-stone-100">Tailwind CSS Utilities</h1>
        {sections.map(section => (
          <section key={section.name} className="mb-8 last:mb-0">
            {/* セクションタイトル: サイズ、太さ、色、下線 */}
            <h2 className="text-2xl font-semibold mb-4 text-stone-800 dark:text-stone-200 border-b border-stone-300 dark:border-stone-700 pb-2">
              {section.name}
            </h2>
            {/* リスト: マーカーなし、スペース調整 */}
            <ul className="list-none space-y-3 pl-2">
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

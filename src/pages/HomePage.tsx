import { Link } from "react-router-dom";
import { sections } from "../data/markdownFiles"; // データファイルをインポート

function HomePage() {
  return (
    <div>
      {sections.map((section) => (
        <section key={section.name} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            {section.name}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {section.articles.map((article) => (
              <li key={article.path}>
                <Link
                  to={article.path} // Use the full hash path
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {article.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default HomePage;

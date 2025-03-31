import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { sections, ArticleInfo } from "../data/markdownFiles"; // Import sections and ArticleInfo

function ArticlePage() {
  const { section: sectionParam, articleName: articleNameParam } = useParams<{
    section: string;
    articleName: string;
  }>();
  const [markdown, setMarkdown] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [articleInfo, setArticleInfo] = useState<ArticleInfo | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setMarkdown("");
    setArticleInfo(null);

    // Find the article info based on URL parameters
    let foundArticle: ArticleInfo | undefined;
    for (const section of sections) {
      // Compare section name (case-insensitive, remove leading numbers)
      const formattedSectionParam = sectionParam
        ?.toLowerCase()
        .replace(/^\d+_/, "");
      const formattedSectionName = section.name
        .toLowerCase()
        .replace(/^\d+_/, "");

      if (formattedSectionName === formattedSectionParam) {
        foundArticle = section.articles.find((article) => {
          // Compare article name (case-insensitive, remove leading numbers and .md)
          const formattedArticleNameParam = articleNameParam
            ?.toLowerCase()
            .replace(/^\d+_/, "")
            .replace(/\.md$/, "");
          const formattedArticleName = article.name
            .toLowerCase()
            .replace(/^\d+_/, "")
            .replace(/\.md$/, "")
            .replace(/-/g, " "); // Also replace hyphens in name for comparison
          // Handle potential differences in formatting (e.g., spaces vs hyphens)
          const articleNameFromPath = article.path
            .split("/")
            .pop()
            ?.toLowerCase()
            .replace(/^\d+_/, "")
            .replace(/\.md$/, "");
          return (
            formattedArticleName.replace(/ /g, "") ===
              formattedArticleNameParam?.replace(/ /g, "") ||
            articleNameFromPath?.replace(/-/g, "") ===
              formattedArticleNameParam?.replace(/-/g, "")
          );
        });
        if (foundArticle) break;
      }
    }

    if (foundArticle) {
      setArticleInfo(foundArticle);
      // Fetch the markdown content using the markdownPath
      // Ensure the path is relative to the public directory or served correctly
      // For Vite, placing files in `public` makes them accessible from the root
      // Adjust the fetch path if your markdown files are served differently.
      // Assuming markdown files are accessible relative to the project root during development
      // or served from a specific path in production.
      // We need to construct the correct path relative to the application's host.
      // Using the raw markdownPath which should be relative to the project root.
      fetch(`/${foundArticle.markdownPath}`) // Fetch from the root, assuming files are served there
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then((text) => {
          setMarkdown(text);
          setLoading(false);
        })
        .catch((e) => {
          console.error("Failed to fetch markdown:", e);
          setError(
            `Failed to load article content from ${foundArticle?.markdownPath}. Please check the file path and server configuration.`,
          );
          setLoading(false);
        });
    } else {
      setError(
        `Article "${articleNameParam}" in section "${sectionParam}" not found.`,
      );
      setLoading(false);
    }
  }, [sectionParam, articleNameParam]); // Rerun effect when params change

  return (
    <div className="prose lg:prose-xl max-w-none">
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        &larr; Back to Home
      </Link>
      {loading && <p>Loading article...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      {articleInfo && !loading && !error && (
        <>
          <h1 className="text-3xl font-bold mb-4">{articleInfo.name}</h1>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </>
      )}
      {!articleInfo && !loading && !error && (
        <p>Article content could not be loaded.</p>
      )}
    </div>
  );
}

export default ArticlePage;

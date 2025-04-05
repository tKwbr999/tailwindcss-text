import ReferenceLinks from '@/components/ui/ReferenceLinks'; // ReferenceLinksをインポート
import React from 'react';
import { Link } from 'react-router-dom'; // Link をインポート (ArticleLayout内で使用)

interface LinkInfo {
  title: string;
  url: string;
}

interface ArticleLayoutProps {
  enTitle: string; // 英語タイトル
  jaTitle: string; // 日本語タイトル
  links: LinkInfo[];
  children: React.ReactNode;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ enTitle, jaTitle, links, children }) => {
  return (
    // ページ全体の背景色とパディング (screen-readers-page.tsxから移動)
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* トップページへのリンク */}
      <div className="max-w-4xl mx-auto text-left text-xs m-2">
        <Link
          to="/"
          className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
        >
          ← top page
        </Link>
      </div>

      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 (screen-readers-page.tsxから移動) */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100 leading-tight">
          {enTitle}
          <br />
          <span className="text-lg font-medium">{jaTitle}</span> {/* 日本語は少し小さく */}
        </h1>
        {/* 参照リンク */}
        <ReferenceLinks links={links} />
        {/* 記事の主要コンテンツ */}
        {children}
      </div>
    </div>
  );
};

export default ArticleLayout;

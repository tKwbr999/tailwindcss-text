import ReferenceLinks from '@/components/ui/ReferenceLinks'; // ReferenceLinksをインポート
import React from 'react';
import { Link } from 'react-router-dom';

interface LinkInfo {
  title: string;
  url: string;
}

interface ArticleLayoutProps {
  title: string;
  links: LinkInfo[];
  children: React.ReactNode;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ title, links, children }) => {
  return (
    // ページ全体の背景色とパディング (screen-readers-page.tsxから移動)
    <div className="bg-stone-200 dark:bg-stone-900 min-h-screen p-4 md:p-8 font-serif">
      {/* コンテンツエリア: 最大幅、中央揃え、背景色、角丸、影 (screen-readers-page.tsxから移動) */}
      <div className="max-w-4xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-lg shadow-md p-6 space-y-8">
        {/* トップページへのリンク */}
        <div className="text-right">
          <Link
            to="/"
            className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
          >
            ← トップページに戻る
          </Link>
        </div>
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100">
          {title}
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

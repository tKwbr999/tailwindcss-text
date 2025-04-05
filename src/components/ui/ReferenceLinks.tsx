import React from 'react';

interface LinkInfo {
  title: string;
  url: string;
}

interface ReferenceLinksProps {
  links: LinkInfo[];
}

const ReferenceLinks: React.FC<ReferenceLinksProps> = ({ links }) => {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2 mb-4">
      {' '}
      {/* z-10を追加して他の要素より手前に表示 */}
      <span className="text-xs text-gray-400 dark:text-gray-500">参照:</span>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:underline"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default ReferenceLinks;

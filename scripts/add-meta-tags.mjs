import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';

const pagesDir = path.resolve('src/pages');
const targetPattern = path.join(pagesDir, '**/*-page.tsx').replace(/\\/g, '/'); // globはスラッシュ区切りを期待
const excludePatterns = [
  path.join(pagesDir, 'HomePage.tsx').replace(/\\/g, '/'),
  path.join(pagesDir, 'ArticlePage.tsx').replace(/\\/g, '/'), // ArticlePageも除外（存在する場合）
];
const baseUrl = 'https://tKwbr999.github.io/tailwindcss-text/#'; // GitHub PagesのベースURL + HashRouter

async function addMetaTags() {
  console.log(`Searching for files matching: ${targetPattern}`);
  const files = await glob(targetPattern, { ignore: excludePatterns });
  console.log(`Found ${files.length} files to process.`);

  let modifiedCount = 0;
  let skippedCount = 0;

  for (const file of files) {
    const relativePath = path.relative(process.cwd(), file).replace(/\\/g, '/');
    console.log(`\nProcessing: ${relativePath}`);
    try {
      let content = await fs.readFile(file, 'utf-8');
      let importAdded = false;
      let helmetAdded = false;

      // 1. Check if Helmet is already imported
      if (!/import .*\{.*Helmet.*\}.* from 'react-helmet-async'/.test(content)) {
        // Add import statement if not found
        content = `import { Helmet } from 'react-helmet-async'; // Helmet をインポート\n${content}`;
        importAdded = true;
        console.log('  - Added Helmet import.');
      } else {
        console.log('  - Helmet import already exists.');
      }

      // 2. Check if <Helmet> tag already exists
      if (/<Helmet>/.test(content)) {
        console.log('  - <Helmet> tag already exists. Skipping.');
        skippedCount++;
        continue; // Skip if Helmet tag is already present
      }

      // 3. Extract title from ArticleLayout or generate from filename
      let pageTitle = 'Tailwind CSS Cheatsheet'; // Default title
      const titleMatch = content.match(/<ArticleLayout\s+title="([^"]+)"/);
      if (titleMatch && titleMatch[1]) {
        pageTitle = titleMatch[1].replace(/\s*\(.*\)/, ''); // Remove Japanese part like (アスペクト比)
        console.log(`  - Extracted title from ArticleLayout: "${pageTitle}"`);
      } else {
        // Generate title from filename if not found in ArticleLayout
        const filename = path.basename(file, '-page.tsx');
        pageTitle = filename
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        console.log(`  - Generated title from filename: "${pageTitle}"`);
      }
      const fullTitle = `${pageTitle} - Tailwind CSS Cheatsheet`;

      // 4. Generate description and URL
      const defaultDescription = `Learn about the ${pageTitle} utility in Tailwind CSS. Examples and usage details for ${pageTitle}.`;
      const urlPath = file
        .replace(pagesDir, '')
        .replace(/\\/g, '/') // Ensure forward slashes
        .replace(/-page\.tsx$/, '');
      const pageUrl = `${baseUrl}${urlPath}`;
      console.log(`  - Generated URL: ${pageUrl}`);

      // 5. Generate Helmet component string
      const helmetString = `
      <Helmet>
        <title>${fullTitle}</title>
        <meta name="description" content="${defaultDescription}" />
        {/* OGP タグ */}
        <meta property="og:title" content="${fullTitle}" />
        <meta property="og:description" content="${defaultDescription}" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="${pageUrl}" />
        {/* <meta property="og:image" content="[画像のURL]" /> */} {/* 必要に応じて画像URLを設定 */}
      </Helmet>`;

      // 6. Find insertion point (after <ArticleLayout ... > tag)
      const insertionMatch = content.match(/(<ArticleLayout[^>]*>)/);
      if (insertionMatch && insertionMatch.index !== undefined) {
        const insertionIndex = insertionMatch.index + insertionMatch[0].length;
        content = `${content.slice(0, insertionIndex)}\n${helmetString}${content.slice(insertionIndex)}`;
        helmetAdded = true;
        console.log('  - Inserted <Helmet> tag.');
      } else {
        console.log('  - Could not find insertion point (<ArticleLayout> tag). Skipping Helmet insertion.');
        // If import was added but Helmet wasn't, revert the import addition
        if (importAdded) {
           content = content.replace("import { Helmet } from 'react-helmet-async'; // Helmet をインポート\n", "");
           console.log('  - Reverted Helmet import addition.');
        }
        skippedCount++;
        continue;
      }

      // 7. Write changes back to file
      if (helmetAdded) {
        await fs.writeFile(file, content, 'utf-8');
        modifiedCount++;
        console.log('  - Successfully modified file.');
      }

    } catch (error) {
      console.error(`  - Error processing file ${relativePath}:`, error);
      skippedCount++;
    }
  }

  console.log(`\nFinished processing.`);
  console.log(`  - Modified files: ${modifiedCount}`);
  console.log(`  - Skipped files: ${skippedCount}`);
}

addMetaTags();
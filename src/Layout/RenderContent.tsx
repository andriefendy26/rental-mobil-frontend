import DOMPurify from "dompurify";

const renderBlogContent = (content?: string): JSX.Element => {
  if (!content) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-lg italic text-gray-500">Konten tidak tersedia.</p>
      </div>
    );
  }

  // Sanitize HTML content untuk keamanan
  const sanitizedContent = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: [
      "p",
      "br",
      "strong",
      "em",
      "u",
      "s",
      "sub",
      "sup",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "ol",
      "li",
      "blockquote",
      "a",
      "img",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "code",
      "pre",
      "div",
      "span",
      "hr",
    ],
    ALLOWED_ATTR: [
      "href",
      "target",
      "rel",
      "src",
      "alt",
      "width",
      "height",
      "class",
      "style",
    ],
    // ALLOWED_SCHEMES: ["http", "https", "mailto", "tel"],
  });

  return (
    <article
      className="
        prose-lg prose-slate /* Headings
        
        */ prose-headings:font-bold prose-headings:tracking-tight
        prose-h1:text-4xl prose-h1:mb-8
        prose-h1:mt-12 prose-h1:text-gray-900 prose-h2:text-3xl prose-h2:mb-6
        prose-h2:mt-10 prose-h2:text-gray-900 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2 prose-h3:text-2xl prose-h3:mb-4
        prose-h3:mt-8 prose-h3:text-gray-800 prose-h4:text-xl prose-h4:mb-3
        prose-h4:mt-6 prose-h4:text-gray-800 prose-h5:text-lg prose-h5:mb-2
        prose-h5:mt-4 prose-h5:text-gray-700 prose-h6:text-base prose-h6:mb-2
        prose-h6:mt-4 prose-h6:text-gray-700 prose-h6:font-semibold /* Paragraphs
        
        */ prose-p:text-gray-700 prose-p:leading-8
        prose-p:mb-6 prose-p:text-lg prose-p:font-normal /* Lists
        
        */ prose-ul:mb-6 prose-ol:mb-6
        prose-li:mb-2 prose-li:text-gray-700 prose-li:leading-7 /* Links
        
        */ prose-a:text-blue-600 prose-a:no-underline
        prose-a:font-medium hover:prose-a:text-blue-800 hover:prose-a:underline prose-a:transition-colors prose-a:duration-200
        /* Blockquotes
        
        */ prose-blockquote:border-l-4 prose-blockquote:border-blue-500
        prose-blockquote:bg-blue-50 prose-blockquote:p-6 prose-blockquote:my-8 
        prose-blockquote:italic prose-blockquote:text-gray-800 prose-blockquote:rounded-r-lg prose-blockquote:shadow-sm
        /* Code
        
        */ prose-code:bg-gray-100 prose-code:text-gray-800
        prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono 
        prose-code:text-sm prose-code:font-semibold prose-code:before:content-none prose-code:after:content-none
        /* Pre/Code
        
        blocks */ prose-pre:bg-gray-900 prose-pre:text-gray-100
        prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:shadow-lg 
        prose-pre:my-8 prose-pre:border prose-pre:border-gray-800
        /* Images
        
        */ prose-img:rounded-xl prose-img:shadow-lg
        prose-img:my-8 prose-img:border prose-img:border-gray-200 /* Tables
        
        */ prose-table:border-collapse prose-table:border
        prose-table:border-gray-300 prose-table:my-8 prose-table:rounded-lg prose-table:overflow-hidden
        prose-table:shadow-sm prose-thead:bg-gray-50 prose-th:border
        prose-th:border-gray-300
        prose-th:px-6 prose-th:py-4 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900 
        prose-td:border prose-td:border-gray-300
        prose-td:px-6 prose-td:py-4 prose-td:text-gray-700 prose-tbody:bg-white /*
        Strong/Bold
        
        */ prose-strong:text-gray-900 prose-strong:font-bold
        /* Emphasis/Italic
        
        */ prose-em:text-gray-800 prose-em:italic
        /* HR
        
        */ prose-hr:border-gray-300 prose-hr:my-12
        /* First
        
        paragraph special styling */ prose max-w-none
        [&>p:first-child]:mb-8 [&>p:first-child]:text-xl [&>p:first-child]:font-medium
        [&>p:first-child]:leading-8 [&>p:first-child]:text-gray-800
      "
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

// Blog Layout Component
const BlogPost = ({
  title,
  content,
  author,
  publishedAt,
  tags,
  readTime,
}: {
  title: string;
  content?: string;
  author?: string;
  publishedAt?: string;
  tags?: string[];
  readTime?: string;
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            {title}
          </h1>

          {/* Meta information */}
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
            {author && (
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                  <span className="text-xs font-semibold text-white">
                    {author.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="font-medium">{author}</span>
              </div>
            )}

            {publishedAt && (
              <span className="flex items-center gap-1">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {publishedAt}
              </span>
            )}

            {readTime && (
              <span className="flex items-center gap-1">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {readTime}
              </span>
            )}
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border bg-white p-8 shadow-sm md:p-12">
          {renderBlogContent(content)}
        </div>

        {/* Share buttons */}
        <div className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Bagikan artikel ini
          </h3>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              Twitter
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-blue-800 px-4 py-2 text-white transition-colors hover:bg-blue-900">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

// Export functions
export { renderBlogContent, BlogPost };

// Usage examples:

// 1. Simple content rendering
export const SimpleArticle = ({ content }: { content?: string }) => {
  return (
    <div className="mx-auto max-w-4xl p-6">{renderBlogContent(content)}</div>
  );
};

// 2. Full blog post with metadata
// const MyBlogPost = () => {
//   const blogData = {
//     title: "Panduan Lengkap Menggunakan React dengan TypeScript",
//     content: `
//       <p>React dan TypeScript adalah kombinasi yang sangat powerful untuk pengembangan web modern.</p>
      
//       <h2>Mengapa TypeScript?</h2>
//       <p>TypeScript memberikan type safety yang membantu mengurangi bug dan meningkatkan developer experience.</p>
      
//       <blockquote>
//         "TypeScript is JavaScript that scales" - Microsoft
//       </blockquote>
      
//       <h3>Keuntungan Utama</h3>
//       <ul>
//         <li>Type safety</li>
//         <li>Better IDE support</li>
//         <li>Easier refactoring</li>
//       </ul>
      
//       <pre><code>
// interface Props {
//   title: string;
//   content?: string;
// }

// const BlogPost: React.FC<Props> = ({ title, content }) => {
//   return <div>{title}</div>;
// };
//       </code></pre>
//     `,
//     author: "John Doe",
//     publishedAt: "15 Januari 2024",
//     tags: ["React", "TypeScript", "Web Development"],
//     readTime: "5 min read",
//   };

//   return <BlogPost {...blogData} />;
// };

// 3. Custom blog layout with sidebar
export const BlogWithSidebar = ({
  content,
  relatedPosts,
}: {
  content?: string;
  relatedPosts?: Array<{ title: string; excerpt: string; slug: string }>;
}) => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            {renderBlogContent(content)}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Table of Contents */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Daftar Isi
            </h3>
            <nav className="space-y-2">
              <a
                href="#section1"
                className="block text-sm text-blue-600 hover:text-blue-800"
              >
                Introduction
              </a>
              <a
                href="#section2"
                className="block text-sm text-blue-600 hover:text-blue-800"
              >
                Getting Started
              </a>
              <a
                href="#section3"
                className="block text-sm text-blue-600 hover:text-blue-800"
              >
                Advanced Topics
              </a>
            </nav>
          </div>

          {/* Related Posts */}
          {relatedPosts && relatedPosts.length > 0 && (
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Artikel Terkait
              </h3>
              <div className="space-y-4">
                {relatedPosts.map((post, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-4 last:border-b-0"
                  >
                    <h4 className="mb-2 font-medium text-gray-900">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-600">{post.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

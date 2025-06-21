import React, { useState, useEffect } from "react";
import { Search, Calendar, User, ArrowRight, Grid, List } from "lucide-react";

interface ArticleData {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

const articlesData: ArticleData[] = [
  {
    id: 1,
    title: "Panduan Lengkap Memilih Rental Mobil Terpercaya",
    excerpt:
      "Tips dan trik memilih jasa rental mobil yang aman, terpercaya, dan sesuai dengan kebutuhan perjalanan Anda.",
    author: "Ahmad Fauzi",
    date: "2024-06-15",
    category: "Tips",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop",
    tags: ["Rental Mobil", "Tips", "Perjalanan"],
  },
];

// const categories = [
//   "Semua",
//   "Tips",
//   "Perbandingan",
//   "Budget",
//   "Asuransi",
//   "Mudik",
//   "Luxury",
// ];

interface ArticleCardProps {
  article: ArticleData;
  isListView?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  isListView = false,
}) => (
  <div
    className={`group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isListView ? "flex" : ""}`}
  >
    <div className={`${isListView ? "w-80 flex-shrink-0" : "w-full"}`}>
      <img
        src={article.image}
        alt={article.title}
        className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${isListView ? "h-full" : "h-48"}`}
      />
    </div>

    <div className={`p-6 ${isListView ? "flex-1" : ""}`}>
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-[#800000]/20 px-3 py-1 text-sm font-medium text-[#800000]">
          {article.category}
        </span>
        <span className="text-sm text-gray-500">{article.readTime}</span>
      </div>

      <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-[#800000]">
        {article.title}
      </h3>

      <p className="mb-4 leading-relaxed text-gray-600">{article.excerpt}</p>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#800000]">
            <User className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">
              {article.author}
            </p>
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Calendar className="h-3 w-3" />
              <span>{new Date(article.date).toLocaleDateString("id-ID")}</span>
            </div>
          </div>
        </div>

        <button className="group flex items-center space-x-1 text-sm font-medium text-[#800000] hover:text-[#800000]/70">
          <span>Baca Selengkapnya</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  </div>
);

export default function Artikel(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  // const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filteredArticles, setFilteredArticles] =
    useState<ArticleData[]>(articlesData);

  useEffect(() => {
    let filtered = articlesData;

    if (searchTerm) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    // if (selectedCategory !== "Semua") {
    //   filtered = filtered.filter(
    //     (article) => article.category === selectedCategory,
    //   );
    // }

    setFilteredArticles(filtered);
  }, [searchTerm]);

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Blog Rental Mobil
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Temukan tips, panduan, dan informasi terbaru seputar rental mobil
              untuk perjalanan yang lebih nyaman
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Search and Filter Bar */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              <input
                type="text"
                placeholder="Cari artikel rental mobil..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-transparent focus:ring-2 focus:ring-[#800000]"
              />
            </div>

            {/* <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-[#800000] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div> */}

            <div className="flex rounded-lg bg-gray-100 p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`rounded-md p-2 transition-colors ${
                  viewMode === "grid"
                    ? "bg-white shadow-sm"
                    : "hover:bg-gray-200"
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`rounded-md p-2 transition-colors ${
                  viewMode === "list"
                    ? "bg-white shadow-sm"
                    : "hover:bg-gray-200"
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* <div className="mb-6">
          <p className="text-gray-600">
            Menampilkan {filteredArticles.length} artikel
            {selectedCategory !== "Semua" &&
              ` dalam kategori "${selectedCategory}"`}
            {searchTerm && ` untuk "${searchTerm}"`}
          </p>
        </div> */}

        {filteredArticles.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                : "space-y-6"
            }
          >
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                isListView={viewMode === "list"}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Artikel tidak ditemukan
            </h3>
            <p className="text-gray-600">
              Coba ubah kata kunci pencarian atau filter kategori
            </p>
          </div>
        )}

        {filteredArticles.length > 0 && (
          <div className="mt-12 text-center">
            <button className="rounded-lg bg-[#800000] px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-[#800000]/80 hover:shadow-xl">
              Muat Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

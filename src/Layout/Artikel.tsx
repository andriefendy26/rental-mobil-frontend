import React, { useState, useEffect, useMemo } from "react";
import { Search, Calendar, User, ArrowRight, Grid, List } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface ArticleData {
  id: number;
  judul: string;
  sub_judul: string;
  author: string;
  gambar: string;
  tags: string;
  created_at: string;
  updated_at: string;
}

interface ArtikelProps {
  data: ArticleData[];
}

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
        src={article.gambar}
        alt={article.judul}
        className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${isListView ? "h-full" : "h-48"}`}
      />
    </div>

    <div className={`p-6 ${isListView ? "flex-1" : ""}`}>
      <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-[#800000]">
        {article.judul}
      </h3>

      <p className="mb-4 leading-relaxed text-gray-600">{article.sub_judul}</p>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {article?.tags?.split(",").map((tag: string, index: number) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
            >
              #{tag.trim()}
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
              <span>
                {new Date(article.created_at).toLocaleDateString("id-ID")}
              </span>
            </div>
          </div>
        </div>

        <Link
          to={`/artikel/detail/${article.id}`}
          className="group flex items-center space-x-1 text-sm font-medium text-[#800000] hover:text-[#800000]/70"
        >
          <span>Baca Selengkapnya</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </div>
);

const Artikel: React.FC<ArtikelProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter artikel berdasarkan search term
  const filteredArticles = useMemo(() => {
    if (!searchTerm.trim()) {
      return data || [];
    }

    const searchLower = searchTerm.toLowerCase().trim();

    return (data || []).filter((article) => {
      // Cari di judul
      const titleMatch = article.judul?.toLowerCase().includes(searchLower);

      // Cari di sub judul
      const subTitleMatch = article.sub_judul
        ?.toLowerCase()
        .includes(searchLower);

      // Cari di author
      const authorMatch = article.author?.toLowerCase().includes(searchLower);

      // Cari di tags
      const tagsMatch = article.tags?.toLowerCase().includes(searchLower);

      return titleMatch || subTitleMatch || authorMatch || tagsMatch;
    });
  }, [data, searchTerm]);

  // Clear search when component unmounts or data changes
  useEffect(() => {
    setSearchTerm("");
  }, [data]);

  return (
    <>
      <Helmet>
        {/* — SEO Essentials — */}
        <title>Artikel Seputar Rental Mobil – CV Tujuh Sembilan Oto</title>
        <meta
          name="description"
          content="Baca berbagai artikel, panduan, dan tips bermanfaat seputar layanan rental mobil di Berau agar perjalanan Anda lebih aman dan nyaman."
        />
        <link
          rel="canonical"
          href="https://cvtujuhsembilanotorentcar.com/artikel"
        />

        {/* — Open Graph (Facebook, WhatsApp, LinkedIn) — */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Artikel Seputar Rental Mobil – CV Tujuh Sembilan Oto"
        />
        <meta
          property="og:description"
          content="Temukan berbagai artikel informatif mengenai tips rental mobil, panduan perjalanan, hingga rekomendasi kendaraan terbaik di Berau."
        />
        <meta
          property="og:image"
          content="https://cvtujuhsembilanotorentcar.com/assets/tentang1-EEqb0RDB.png"
        />
        <meta
          property="og:url"
          content="https://cvtujuhsembilanotorentcar.com/artikel"
        />

        {/* — Twitter Cards — */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Artikel Seputar Rental Mobil – CV Tujuh Sembilan Oto"
        />
        <meta
          name="twitter:description"
          content="Tips, panduan, dan informasi rental mobil terpercaya di Berau untuk perjalanan Anda."
        />
        <meta
          name="twitter:image"
          content="https://cvtujuhsembilanotorentcar.com/assets/tentang1-EEqb0RDB.png"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24">
        {/* Header Section */}
        <div className="border-b bg-white shadow-sm">
          <div
            data-aos="fade-right"
            className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
          >
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                Blog Rental Mobil
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-gray-600">
                Temukan tips, panduan, dan informasi terbaru seputar rental
                mobil untuk perjalanan yang lebih nyaman
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Search and Filter Bar */}
          <div
            data-aos="fade-down"
            className="mb-8 rounded-xl bg-white p-6 shadow-lg"
          >
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              <div className="relative max-w-md flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari artikel rental mobil..."
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchTerm(e.target.value)
                  }
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-transparent focus:ring-2 focus:ring-[#800000]"
                />
              </div>

              <div className="flex items-center gap-4">
                {/* Search Results Count */}
                {searchTerm && (
                  <span className="text-sm text-gray-600">
                    {filteredArticles.length} artikel ditemukan
                  </span>
                )}

                {/* View Mode Toggle */}
                <div className="flex rounded-lg bg-gray-100 p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`rounded-md p-2 transition-colors ${
                      viewMode === "grid"
                        ? "bg-white shadow-sm"
                        : "hover:bg-gray-200"
                    }`}
                    title="Grid View"
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
                    title="List View"
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Display */}
          {filteredArticles && filteredArticles.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                  : "space-y-6"
              }
            >
              {filteredArticles.map((article: ArticleData) => (
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
                {searchTerm ? "Artikel tidak ditemukan" : "Belum ada artikel"}
              </h3>
              <p className="text-gray-600">
                {searchTerm
                  ? `Tidak ada artikel yang cocok dengan "${searchTerm}". Coba ubah kata kunci pencarian.`
                  : "Artikel akan muncul di sini ketika tersedia"}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="mt-4 rounded-lg bg-[#800000] px-4 py-2 text-white transition-colors hover:bg-[#800000]/90"
                >
                  Hapus Pencarian
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Artikel;

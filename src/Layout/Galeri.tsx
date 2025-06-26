import { useState } from "react";

interface GalleryItem {
  gambar: string;
}

interface GaleriProps {
  data: GalleryItem[];
  isLoading: boolean;
}

export default function Galeri({ data, isLoading }: GaleriProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageLink: string) => {
    setSelectedImage(imageLink);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Loading skeleton component
  const SkeletonItem = ({ height }: { height: number }) => (
    <div
      className="mb-6 animate-pulse break-inside-avoid"
      style={{ height: `${height}px` }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gray-300 dark:bg-gray-700">
        <div className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="flex h-full items-center justify-center">
          <svg
            className="h-12 w-12 text-gray-400 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
      </div>
    </div>
  );

  // Beautiful Empty State Component
  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      {/* Animated Camera Icon */}
      <div className="relative mb-8">
        <div className="animate-float">
          <div className="relative">
            {/* Camera body */}
            <div className="w-24 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl shadow-2xl transform rotate-3">
              {/* Camera lens */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-slate-900 to-black rounded-full shadow-inner">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-950 rounded-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-80"></div>
                </div>
              </div>
              {/* Camera flash */}
              <div className="absolute top-2 right-2 w-3 h-2 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-sm"></div>
              {/* Camera viewfinder */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-slate-600 rounded-sm"></div>
            </div>
            
            {/* Floating photo frames */}
            <div className="absolute -top-6 -left-8 w-8 h-6 bg-white rounded-sm shadow-lg transform -rotate-12 animate-bounce-slow opacity-60">
              <div className="w-full h-4 bg-gradient-to-br from-blue-200 to-blue-300 rounded-t-sm"></div>
            </div>
            <div className="absolute -top-4 -right-6 w-6 h-8 bg-white rounded-sm shadow-lg transform rotate-12 animate-bounce-slow animation-delay-300 opacity-60">
              <div className="w-full h-5 bg-gradient-to-br from-green-200 to-green-300 rounded-t-sm"></div>
            </div>
            <div className="absolute -bottom-2 -left-6 w-7 h-5 bg-white rounded-sm shadow-lg transform rotate-6 animate-bounce-slow animation-delay-600 opacity-60">
              <div className="w-full h-3 bg-gradient-to-br from-purple-200 to-purple-300 rounded-t-sm"></div>
            </div>
          </div>
        </div>
        
        {/* Sparkle effects */}
        <div className="absolute -top-4 -right-4 text-yellow-400 animate-pulse">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l2.4 7.2L22 12l-7.6 4.8L12 24l-2.4-7.2L2 12l7.6-4.8z"/>
          </svg>
        </div>
        <div className="absolute -bottom-6 -left-4 text-blue-400 animate-pulse animation-delay-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l2.4 7.2L22 12l-7.6 4.8L12 24l-2.4-7.2L2 12l7.6-4.8z"/>
          </svg>
        </div>
      </div>

      {/* Main message */}
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Galeri Masih Kosong
      </h2>
      
      {/* Subtitle */}
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-md leading-relaxed">
        Belum ada foto yang ditampilkan di galeri ini. Foto-foto indah akan segera hadir!
      </p>

      {/* Decorative elements */}
      <div className="flex space-x-2 mb-8">
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-200"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce animation-delay-400"></div>
      </div>
    </div>
  );

  // Generate random heights for skeleton items to simulate masonry layout
  const skeletonHeights = [
    200, 280, 320, 240, 360, 220, 300, 260, 340, 180, 250, 290,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div
        data-aos="fade-left"
        className="container mx-auto px-4 pt-10 text-center"
      >
        <h2 className="bg-[#800000] bg-clip-text text-4xl  font-bold text-transparent sm:text-5xl">
          GALERI KAMI
        </h2>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"></div>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Berikut adalah galeri dari kami
        </p>
      </div>

      {/* Gallery Content */}
      {isLoading ? (
        // Loading state
        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="columns-2 gap-6 space-y-6 sm:columns-2 lg:columns-3 xl:columns-4">
              {skeletonHeights.map((height, index) => (
                <SkeletonItem key={index} height={height} />
              ))}
            </div>
          </div>
        </div>
      ) : data.length > 0 ? (
        // Gallery with images
        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="columns-2 gap-6 space-y-6 sm:columns-2 lg:columns-3 xl:columns-4">
              {data.map(({ gambar }, index) => (
                <div
                  key={index}
                  className="group mb-6 cursor-pointer break-inside-avoid"
                  onClick={() => openModal(gambar)}
                >
                  <div className="relative transform overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={gambar}
                      alt={`Gallery photo ${index + 1}`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Beautiful empty state
        <EmptyState />
      )}

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <div className="relative max-h-full max-w-4xl">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white transition-colors hover:text-gray-300"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Full size gallery photo"
              className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px) rotate(var(--rotation, 0deg));
          }
          50% {
            transform: translateY(-8px) rotate(var(--rotation, 0deg));
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}
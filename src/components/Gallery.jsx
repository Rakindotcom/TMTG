import Navbar from './Navbar';
import usePageTitle from '../hooks/usePageTitle';

const Gallery = () => {
  usePageTitle('Gallery');
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Gallery Content */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="english-text text-5xl font-bold text-gray-800 mb-4">Gallery</h1>
            <h2 className="bengali-text text-2xl text-gray-600 mb-2">ছবির গ্যালারি</h2>
            <p className="english-text text-lg text-gray-600 max-w-2xl mx-auto">
              A visual journey of our mission to break the siege and bring hope to Gaza
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(12)].map((_, index) => (
              <div 
                key={index}
                className="group relative aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="english-text text-gray-500 text-lg font-medium">
                    Image {index + 1}
                  </span>
                  <span className="english-text text-gray-400 text-sm mt-2">
                    [Placeholder]
                  </span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <p className="english-text text-white font-semibold text-lg">Gallery Image {index + 1}</p>
                    <p className="bengali-text text-white/90 text-sm">ছবি {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-16">
            <a 
              href="/"
              className="english-text inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h3 className="english-text text-xl font-bold">A Thousand Madleens To Gaza</h3>
              <p className="bengali-text text-gray-400">বাংলাদেশ ডেলিগেশন</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="english-text text-gray-400 text-sm">
              © 2026 Bangladesh Delegation - A Thousand Madleens To Gaza
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;

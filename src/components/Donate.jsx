import Navbar from './Navbar';

const Donate = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Coming Soon Content */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-20">
        <div className="text-center">
          <h1 className="english-text text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Coming Soon
          </h1>
          <p className="bengali-text text-xl md:text-2xl text-gray-600 mb-8">
            শীঘ্রই আসছে
          </p>
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
    </div>
  );
};

export default Donate;
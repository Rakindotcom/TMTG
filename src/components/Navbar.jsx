import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src="/logo.jpg" alt="TMTG Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="english-text font-bold text-lg text-gray-800">Madleens to Gaza</h1>
              <p className="bengali-text text-sm text-gray-600">বাংলাদেশ ডেলিগেশন</p>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={scrollToTop}
              className={`english-text transition-colors font-medium ${
                isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </button>

            <a
              href="/gallery"
              className={`english-text transition-colors font-medium ${
                isActive('/gallery') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Gallery
            </a>

            <a
              href="/donate"
              className={`english-text transition-all duration-300 transform hover:scale-105 ${
                isActive('/donate')
                  ? 'text-blue-600 font-semibold'
                  : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg'
              }`}
            >
              Donate Now
            </a>

            <SocialLinks className="pl-1" iconClassName="h-6 w-6" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}></span>
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 bg-white rounded-2xl shadow-2xl mt-4 mx-2 border border-gray-100">
            <div className="px-6 space-y-3">
              <button
                onClick={scrollToTop}
                className="english-text flex items-center p-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-all duration-200 group w-full text-left"
              >
                <span className="font-medium group-hover:text-blue-600 transition-colors">Home</span>
              </button>

              <a
                href="/gallery"
                className="english-text flex items-center p-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
              >
                <span className="font-medium group-hover:text-blue-600 transition-colors">Gallery</span>
              </a>

              <a
                href="/donate"
                className="english-text block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>Donate Now</span>
                </div>
              </a>

              <SocialLinks className="justify-center pt-2" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

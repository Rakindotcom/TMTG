import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
    setIsHomeDropdownOpen(false);
  };

  const scrollToTop = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
    setIsMenuOpen(false);
    setIsHomeDropdownOpen(false);
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
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="english-text font-bold text-lg text-gray-800">Madleens to Gaza</h1>
              <p className="bengali-text text-sm text-gray-600">বাংলাদেশ ডেলিগেশন</p>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsHomeDropdownOpen(true)}
                onMouseLeave={() => setIsHomeDropdownOpen(false)}
                onClick={scrollToTop}
                className={`english-text transition-colors font-medium flex items-center space-x-1 ${
                  isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <span>Home</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isHomeDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Creative Dropdown Menu */}
              <div 
                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 transition-all duration-300 ${
                  isHomeDropdownOpen 
                    ? 'opacity-100 visible translate-y-0 scale-100' 
                    : 'opacity-0 invisible -translate-y-4 scale-95'
                }`}
                onMouseEnter={() => setIsHomeDropdownOpen(true)}
                onMouseLeave={() => setIsHomeDropdownOpen(false)}
              >
                {/* Arrow pointing up */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                </div>
                
                {/* Dropdown content */}
                <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden min-w-[280px]">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4">
                    <h3 className="english-text text-white font-semibold text-lg">Explore Our Mission</h3>
                    <p className="bengali-text text-blue-100 text-sm mt-1">আমাদের মিশন জানুন</p>
                  </div>
                  
                  {/* Menu Items */}
                  <div className="py-2">
                    <button
                      onClick={() => scrollToSection('about')}
                      className="english-text group flex items-center w-full px-6 py-4 text-gray-700 hover:bg-blue-50 transition-all duration-200"
                    >
                      <div className="text-left flex-1">
                        <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">About Us</div>
                        <div className="bengali-text text-sm text-gray-500">আমরা কারা</div>
                      </div>
                      <svg className="w-4 h-4 text-gray-400 ml-4 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => scrollToSection('mission')}
                      className="english-text group flex items-center w-full px-6 py-4 text-gray-700 hover:bg-blue-50 transition-all duration-200"
                    >
                      <div className="text-left flex-1">
                        <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Our Mission</div>
                        <div className="bengali-text text-sm text-gray-500">আমাদের মিশন</div>
                      </div>
                      <svg className="w-4 h-4 text-gray-400 ml-4 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => scrollToSection('budget')}
                      className="english-text group flex items-center w-full px-6 py-4 text-gray-700 hover:bg-blue-50 transition-all duration-200"
                    >
                      <div className="text-left flex-1">
                        <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Fund Usage</div>
                        <div className="bengali-text text-sm text-gray-500">অর্থের ব্যবহার</div>
                      </div>
                      <svg className="w-4 h-4 text-gray-400 ml-4 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Footer */}
                  <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                    <p className="english-text text-xs text-gray-500 text-center">
                      Learn more about our peaceful mission
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
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
            {/* Mobile Home Section */}
            <div className="px-6 pb-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-4 mb-4">
                <h3 className="english-text text-white font-semibold text-lg">Explore Our Mission</h3>
                <p className="bengali-text text-blue-100 text-sm">আমাদের মিশন জানুন</p>
              </div>
              
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="english-text group flex items-center w-full p-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  <div className="text-left flex-1">
                    <div className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">About Us</div>
                    <div className="bengali-text text-xs text-gray-500">আমরা কারা</div>
                  </div>
                </button>
                
                <button 
                  onClick={() => scrollToSection('mission')}
                  className="english-text group flex items-center w-full p-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  <div className="text-left flex-1">
                    <div className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">Our Mission</div>
                    <div className="bengali-text text-xs text-gray-500">আমাদের মিশন</div>
                  </div>
                </button>
                
                <button 
                  onClick={() => scrollToSection('budget')}
                  className="english-text group flex items-center w-full p-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  <div className="text-left flex-1">
                    <div className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">Fund Usage</div>
                    <div className="bengali-text text-xs text-gray-500">অর্থের ব্যবহার</div>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="border-t border-gray-200 mx-6"></div>
            
            <div className="px-6 pt-4 space-y-3">
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
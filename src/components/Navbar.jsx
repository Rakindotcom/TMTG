import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const navItems = [
  { label: 'মিশন', section: 'mission' },
  { label: 'তহবিল', section: 'budget' },
  { label: 'গ্যালারি', path: '/gallery' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const useDarkHeroStyle = !scrolled && location.pathname !== '/donate';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goHome = () => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    navigate('/');
  };

  const goToSection = (sectionId) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between border px-4 py-3 backdrop-blur-xl transition-all duration-300 ${
            !useDarkHeroStyle
              ? 'border-stone-200/80 bg-white/90 shadow-xl shadow-stone-950/10'
              : 'border-white/20 bg-stone-950/20 text-white'
          }`}
        >
          <button type="button" onClick={goHome} className="group flex min-w-0 items-center gap-3 text-left">
            <img
              src="/logo.jpg"
              alt="TMTG Logo"
              className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-emerald-400/60"
            />
            <span className="min-w-0">
              <span className={`english-text block truncate text-sm font-black uppercase tracking-[0.18em] ${useDarkHeroStyle ? 'text-white' : 'text-stone-950'}`}>
                TMTG
              </span>
              <span className={`bengali-text block truncate text-sm font-semibold ${useDarkHeroStyle ? 'text-stone-200' : 'text-stone-500'}`}>
                বাংলাদেশ ডেলিগেশন
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) =>
              item.path ? (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`bengali-text px-4 py-2 text-base font-bold transition hover:text-emerald-500 ${
                    location.pathname === item.path ? 'text-emerald-500' : useDarkHeroStyle ? 'text-white' : 'text-stone-700'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => goToSection(item.section)}
                  className={`bengali-text px-4 py-2 text-base font-bold transition hover:text-emerald-500 ${
                    useDarkHeroStyle ? 'text-white' : 'text-stone-700'
                  }`}
                >
                  {item.label}
                </button>
              ),
            )}
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <SocialLinks
              className="gap-3"
              iconClassName="h-5 w-5"
              linkClassName={useDarkHeroStyle ? 'text-white/80 hover:text-emerald-200 focus:ring-offset-stone-950' : 'text-stone-600 hover:text-emerald-600'}
            />
            <Link
              to="/donate"
              className="bengali-text inline-flex items-center gap-2 bg-emerald-400 px-4 py-3 text-base font-black text-stone-950 transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              অনুদান
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`inline-flex h-11 w-11 items-center justify-center border md:hidden ${
              useDarkHeroStyle ? 'border-white/25 text-white' : 'border-stone-300 text-stone-950'
            }`}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="relative h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        <div className={`overflow-hidden transition-all duration-300 md:hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="border border-stone-200 bg-white p-3 shadow-2xl">
            {navItems.map((item) =>
              item.path ? (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="bengali-text block px-4 py-3 text-lg font-black text-stone-800"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => goToSection(item.section)}
                  className="bengali-text block w-full px-4 py-3 text-left text-lg font-black text-stone-800"
                >
                  {item.label}
                </button>
              ),
            )}
            <Link
              to="/donate"
              onClick={() => setIsMenuOpen(false)}
              className="bengali-text mt-2 flex items-center justify-center gap-2 bg-stone-950 px-4 py-4 text-lg font-black text-white"
            >
              অনুদান দিন
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

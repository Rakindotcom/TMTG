import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import usePageTitle from '../hooks/usePageTitle';

const galleryImages = [
  { src: '/gallery-1.jpg', title: 'প্রচারণার মুহূর্ত' },
  { src: '/gallery-2.jpg', title: 'সংহতির সমাবেশ' },
  { src: '/gallery-3.jpg', title: 'ডেলিগেশনের কাজ' },
  { src: '/gallery-4.jpg', title: 'জনসমর্থন সংগঠন' },
  { src: '/gallery-5.jpg', title: 'ফ্লোটিলা সমর্থন' },
  { src: '/gallery-6.jpg', title: 'কমিউনিটি অ্যাকশন' },
  { src: '/gallery-7.jpg', title: 'মিশন প্রস্তুতি' },
  { src: '/gallery-8.jpg', title: 'সংগঠক দল' },
  { src: '/gallery-9.jpg', title: 'মানবিক সহায়তার লক্ষ্য' },
  { src: '/gallery-10.jpg', title: 'বাংলাদেশ ডেলিগেশন' },
  { src: '/hero-image.jpg', title: 'A Thousand Madleens To Gaza', english: true },
  { src: '/first-wave-image.jpg', title: 'প্রথম তরঙ্গ' },
];

const Gallery = () => {
  usePageTitle('Gallery');
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f4ee] text-stone-950">
      <Navbar />

      <main>
        <section className="relative isolate flex min-h-[72vh] items-end overflow-hidden px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8">
          <img src="/gallery-10.jpg" alt="Campaign gallery" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-stone-950 via-stone-950/55 to-stone-950/10" />
          <div className="mx-auto w-full max-w-7xl">
            <p className="section-kicker text-emerald-300">ছবির গ্যালারি</p>
            <h1 className="bengali-text mt-4 max-w-4xl text-5xl font-black leading-[1.05] sm:text-7xl">
              পড়ার আগেই যে প্রচারণা অনুভব করা যায়।
            </h1>
            <p className="bengali-text mt-6 max-w-2xl text-xl leading-9 text-stone-200">
              প্রস্তুতি, সংহতি ও জনঅংশগ্রহণের মুহূর্তগুলো এখানে একসাথে সংরক্ষিত আছে।
            </p>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl auto-rows-[18rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveImage(image)}
                className={`group relative overflow-hidden bg-stone-900 text-left shadow-xl shadow-stone-950/10 ${
                  index === 0 || index === 10 ? 'sm:col-span-2 sm:row-span-2' : ''
                } ${index === 5 ? 'lg:col-span-2' : ''}`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent opacity-80 transition group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="english-text text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Frame {String(index + 1).padStart(2, '0')}</p>
                  <p className={`${image.english ? 'english-text' : 'bengali-text'} mt-2 text-xl font-black`}>{image.title}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-4 border-t border-stone-300 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="bengali-text max-w-2xl text-lg leading-8 text-stone-600">
              এই ছবিগুলো বাংলাদেশ ডেলিগেশনের কাজ, সমর্থন ও মানবিক প্রতিশ্রুতির দৃশ্যমান দলিল।
            </p>
            <a
              href="/"
              className="bengali-text inline-flex w-fit items-center gap-3 bg-stone-950 px-5 py-3 text-lg font-black text-white transition hover:-translate-y-1"
            >
              হোমে ফিরুন
            </a>
          </div>
        </section>
      </main>

      {activeImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-stone-950/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-h-[90vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="bengali-text absolute right-0 top-0 z-10 bg-white px-4 py-3 text-base font-black text-stone-950 transition hover:bg-emerald-300"
            >
              বন্ধ করুন
            </button>
            <img src={activeImage.src} alt={activeImage.title} className="max-h-[90vh] w-full object-contain" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-950/90 to-transparent p-6 text-white">
              <p className="section-kicker text-emerald-300">নির্বাচিত ছবি</p>
              <h2 className={`${activeImage.english ? 'english-text' : 'bengali-text'} mt-2 text-3xl font-black`}>{activeImage.title}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

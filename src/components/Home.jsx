import { useEffect, useMemo, useState } from 'react';
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';
import usePageTitle from '../hooks/usePageTitle';

const missionCards = [
  {
    id: 'solidarity',
    kicker: 'বেসামরিক মিশন',
    title: 'মানবিক সহায়তার স্পষ্ট লক্ষ্য নিয়ে শান্তিপূর্ণ ফ্লোটিলা',
    copy: 'গাজার অবরোধ ভাঙতে এবং সমুদ্রপথে জীবনরক্ষাকারী সহায়তা পৌঁছে দিতে বাংলাদেশ ডেলিগেশন একটি বৈশ্বিক বেসামরিক প্রচেষ্টায় যুক্ত হচ্ছে।',
    image: '/organization-image.jpg',
  },
  {
    id: 'bangladesh',
    kicker: 'বাংলাদেশ ডেলিগেশন',
    title: 'আন্তর্জাতিক আন্দোলনে বাংলাদেশের দৃশ্যমান অংশগ্রহণ',
    copy: 'সমর্থক, স্বেচ্ছাসেবক, সংগঠক ও দাতাদের একত্র করে এই প্রচারণা বৃহত্তর ফ্লোটিলা কোয়ালিশনে বাংলাদেশের মর্যাদাপূর্ণ অবস্থান তৈরি করছে।',
    image: '/shahidul-alam-image.jpg',
  },
  {
    id: 'readiness',
    kicker: 'অপারেশন প্রস্তুতি',
    title: 'সমুদ্রযাত্রাকে বাস্তব করতে প্রয়োজনীয় কাজগুলোর তহবিল',
    copy: 'আপনার সহায়তা নৌযান প্রস্তুতি, নিরাপত্তা সরঞ্জাম, লজিস্টিকস, ক্রু সমন্বয়, ডকুমেন্টেশন এবং মানবিক সহায়তা প্রস্তুত করতে কাজে লাগে।',
    image: '/ship-preparation-image.jpg',
  },
];

const timeline = [
  {
    label: 'প্রথম তরঙ্গ',
    title: 'একই নৈতিক অবস্থানে দাঁড়িয়েছেন বিশ্বের স্বেচ্ছাসেবকেরা',
    copy: 'প্রথম ফ্লোটিলা তরঙ্গ অবরোধের বিরুদ্ধে নাগরিক-নেতৃত্বাধীন দৃশ্যমান অবস্থান তৈরি করে এবং বিষয়টিকে আবার জনআলোচনায় নিয়ে আসে।',
    image: '/first-wave-image.jpg',
  },
  {
    label: 'বাংলাদেশ এগিয়ে আসে',
    title: 'মানুষ, সম্পদ ও আস্থা নিয়ে সংগঠিত হচ্ছে ডেলিগেশন',
    copy: 'আরও বড় ও প্রস্তুত মিশনের জন্য বাংলাদেশি সংগঠক ও সমর্থকেরা প্রয়োজনীয় মাঠ-সমন্বয় গড়ে তুলছেন।',
    image: '/hero-image.jpg',
  },
  {
    label: 'সামনে এগিয়ে চলা',
    title: 'আরও প্রস্তুত মিশনের জন্য দ্রুত সহায়তা দরকার',
    copy: 'পরবর্তী প্রচেষ্টা নির্ভর করছে বাস্তব তহবিলের ওপর: সরঞ্জাম, সহায়তা সামগ্রী, যোগাযোগ ব্যবস্থা এবং নিরাপদ যাত্রার লজিস্টিকস।',
    image: '/madleens-vision-image.jpg',
  },
];

const budgetTabs = [
  {
    id: 'vessel',
    title: 'নৌযান ও সরঞ্জাম',
    image: '/boat-equipment-image.jpg',
    summary: 'নৌযান প্রস্তুতি, প্রযুক্তিগত আপগ্রেড, নেভিগেশন, অনবোর্ড নিরাপত্তা এবং যোগাযোগ ব্যবস্থা।',
    items: ['নৌযান মেরামত ও পরিদর্শন', 'GPS ও যোগাযোগ ব্যবস্থা', 'ক্যামেরা ও ডকুমেন্টেশন টুল', 'নিরাপত্তা সরঞ্জাম'],
  },
  {
    id: 'aid',
    title: 'মানবিক সহায়তা',
    image: '/medical-aid-image.jpg',
    summary: 'গাজার মানুষের জন্য চিকিৎসা সামগ্রী, খাদ্য সহায়তা, পানি, স্যানিটেশন এবং মৌলিক প্রয়োজনীয় সামগ্রী।',
    items: ['প্রাথমিক চিকিৎসা ও মেডিকেল সাপ্লাই', 'খাদ্য ও প্রয়োজনীয় সামগ্রী', 'পানি ও স্যানিটেশন সহায়তা', 'সহায়তা প্যাকেজিং ও হ্যান্ডলিং'],
  },
  {
    id: 'coordination',
    title: 'মিশন লজিস্টিকস',
    image: '/organization-budget-image.jpg',
    summary: 'বন্দর ফি, জ্বালানি, ক্রু প্রস্তুতি, স্বেচ্ছাসেবক সমন্বয়, আইনি সহায়তা এবং যাত্রার লজিস্টিকস।',
    items: ['বন্দর ও জ্বালানি খরচ', 'ক্রু ও স্বেচ্ছাসেবক প্রশিক্ষণ', 'আন্তর্জাতিক সমন্বয়', 'মাঠ পর্যায়ের লজিস্টিকস'],
  },
];

const galleryPreview = [
  '/gallery-1.jpg',
  '/gallery-4.jpg',
  '/gallery-7.jpg',
  '/gallery-10.jpg',
];

const renderMixedText = (text) =>
  text.split(/([A-Za-z][A-Za-z0-9./-]*)/g).map((part, index) =>
    /[A-Za-z]/.test(part) ? (
      <span key={`${part}-${index}`} className="english-text">
        {part}
      </span>
    ) : (
      part
    ),
  );

const Home = () => {
  usePageTitle();

  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const [activeMission, setActiveMission] = useState(missionCards[0].id);
  const [activeBudget, setActiveBudget] = useState(budgetTabs[0].id);
  const [scrollProgress, setScrollProgress] = useState(0);

  const selectedMission = useMemo(
    () => missionCards.find((card) => card.id === activeMission) ?? missionCards[0],
    [activeMission],
  );

  const selectedBudget = useMemo(
    () => budgetTabs.find((tab) => tab.id === activeBudget) ?? budgetTabs[0],
    [activeBudget],
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHeroPointer = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setCursor({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f4ee] text-stone-950">
      <div
        className="fixed left-0 top-0 z-[60] h-1 bg-emerald-500 transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />

      <main>
        <section
          className="premium-hero relative min-h-[100svh] overflow-hidden pt-20 text-white sm:pt-24"
          onPointerMove={handleHeroPointer}
          style={{
            '--spot-x': `${cursor.x}%`,
            '--spot-y': `${cursor.y}%`,
            '--cursor-x': (cursor.x - 50) / 50,
            '--cursor-y': (cursor.y - 50) / 50,
          }}
        >
          <div className="hero-animated-bg absolute inset-0" aria-hidden="true">
            <div className="hero-light-field" />
            <div className="hero-sea-lines" />
            <div className="hero-flag-stage">
              <div className="hero-flag-pole" />
              <div className="hero-flag-cloth">
                <span className="hero-flag-black" />
                <span className="hero-flag-white" />
                <span className="hero-flag-green" />
                <span className="hero-flag-red" />
                <span className="hero-flag-shine" />
              </div>
              <div className="hero-flag-shadow" />
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--spot-x)_var(--spot-y),rgba(16,185,129,0.1),transparent_24rem),linear-gradient(105deg,rgba(4,8,7,0.94),rgba(4,8,7,0.78)_45%,rgba(4,8,7,0.36))]" />

          <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl flex-col justify-center px-5 pb-10 sm:min-h-[calc(100vh-6rem)] sm:px-6 sm:pb-16 lg:px-8">
            <div className="max-w-4xl">
              <div className="bengali-text mb-5 inline-flex items-center gap-3 border border-white/20 bg-white/10 px-3 py-2 text-base font-semibold text-emerald-100 backdrop-blur-md sm:mb-6 sm:px-4 sm:text-lg">
                বাংলাদেশ ডেলিগেশন
              </div>
              <h1 className="english-text max-w-5xl text-[2.85rem] font-black leading-[0.92] text-white sm:text-6xl lg:text-8xl">
                A Thousand Madleens To Gaza
              </h1>
              <p className="bengali-text mt-6 max-w-2xl text-lg leading-8 text-stone-100 sm:mt-7 sm:text-2xl sm:leading-9">
                গাজার অবরোধ ভাঙতে এবং জরুরি মানবিক সহায়তা সমুদ্রপথে পৌঁছে দিতে শান্তিপূর্ণ বেসামরিক ফ্লোটিলায় যোগ দিন।
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
                <a
                  href="/donate"
                  className="bengali-text group inline-flex items-center justify-center gap-3 bg-emerald-400 px-6 py-4 text-lg font-black text-slate-950 shadow-[0_20px_70px_rgba(16,185,129,0.36)] transition hover:-translate-y-1 hover:bg-emerald-300"
                >
                  অনুদান দিন
                </a>
                <button
                  type="button"
                  onClick={() => scrollToSection('mission')}
                  className="bengali-text inline-flex items-center justify-center gap-3 border border-white/30 bg-white/10 px-6 py-4 text-lg font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
                >
                  মিশন দেখুন
                </button>
              </div>
            </div>

          </div>
        </section>

        <section id="mission" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="section-kicker">মিশন কন্ট্রোল</p>
              <h2 className="bengali-text mt-4 text-4xl font-black leading-tight text-stone-950 sm:text-6xl">
                স্থির প্রচারণা নয়, এটি একটি জীবন্ত মিশন ব্রিফ।
              </h2>
            </div>
            <p className="bengali-text max-w-2xl text-xl leading-9 text-stone-700 lg:justify-self-end">
              গাজার অবরোধ ভাঙতে এবং অসহায় মানুষের কাছে জীবনরক্ষাকারী মানবিক সহায়তা পৌঁছে দিতে এই শান্তিপূর্ণ বেসামরিক উদ্যোগে আপনার সমর্থন জরুরি।
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-3">
              {missionCards.map((card, index) => (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setActiveMission(card.id)}
                  className={`w-full border p-6 text-left transition duration-300 ${
                    activeMission === card.id
                      ? 'border-emerald-500 bg-stone-950 text-white shadow-2xl shadow-stone-950/20'
                      : 'border-stone-200 bg-white/70 text-stone-950 hover:-translate-y-1 hover:border-stone-400'
                  }`}
                >
                  <span className="bengali-text text-sm font-black tracking-[0.08em] text-emerald-500">
                    <span className="english-text">0{index + 1}</span> / {card.kicker}
                  </span>
                  <h3 className="bengali-text mt-3 text-2xl font-black">{card.title}</h3>
                  <p className={`bengali-text mt-3 text-lg leading-8 ${activeMission === card.id ? 'text-stone-200' : 'text-stone-600'}`}>
                    {card.copy}
                  </p>
                </button>
              ))}
            </div>

            <div className="group sticky top-28 h-[34rem] overflow-hidden bg-stone-900 shadow-2xl shadow-stone-950/20">
              <img
                key={selectedMission.image}
                src={selectedMission.image}
                alt={selectedMission.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="bengali-text text-sm font-black tracking-[0.12em] text-emerald-300">{selectedMission.kicker}</p>
                <p className="bengali-text mt-3 max-w-xl text-2xl font-black">{selectedMission.title}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-stone-950 px-4 py-24 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-kicker text-emerald-300">প্রচারণার পথচলা</p>
                <h2 className="bengali-text mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">যে অগ্রগতি চোখে দেখা যায়।</h2>
              </div>
              <a
                href="/gallery"
                className="bengali-text inline-flex w-fit items-center gap-3 border border-white/20 px-5 py-3 text-lg font-bold text-white transition hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-200"
              >
                গ্যালারি দেখুন
              </a>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {timeline.map((item, index) => (
                <article key={item.label} className="group relative min-h-[30rem] overflow-hidden border border-white/10 bg-white/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />
                  <div className="relative flex h-full min-h-[30rem] flex-col justify-end p-7">
                    <p className="english-text mb-auto w-fit bg-emerald-400 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-stone-950">
                      0{index + 1}
                    </p>
                    <p className="bengali-text text-sm font-black tracking-[0.12em] text-emerald-300">{item.label}</p>
                    <h3 className="bengali-text mt-3 text-2xl font-black">{item.title}</h3>
                    <p className="bengali-text mt-4 text-lg leading-8 text-stone-200">{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="budget" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="section-kicker">অনুদান কোথায় যাবে</p>
                <h2 className="bengali-text mt-4 text-4xl font-black leading-tight sm:text-6xl">প্রতিটি টাকার নির্দিষ্ট কাজ আছে।</h2>
                <p className="bengali-text mt-6 text-xl leading-9 text-stone-700">
                  অনুদান সরাসরি মিশনের বাস্তব প্রয়োজনীয় কাজে ব্যবহৃত হবে। কোন খাতে কী কাজ হবে, তা দেখতে একটি অগ্রাধিকার নির্বাচন করুন।
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {budgetTabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveBudget(tab.id)}
                      className={`bengali-text px-4 py-3 text-lg font-black transition ${
                        activeBudget === tab.id
                          ? 'bg-stone-950 text-white'
                          : 'border border-stone-300 bg-white text-stone-700 hover:border-stone-950'
                      }`}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-0 overflow-hidden bg-white shadow-2xl shadow-stone-950/10 lg:grid-cols-[0.95fr_1.05fr]">
                <img
                  key={selectedBudget.image}
                  src={selectedBudget.image}
                  alt={selectedBudget.title}
                  className="h-80 w-full object-cover lg:h-full"
                />
                <div className="p-8 sm:p-10">
                  <p className="section-kicker text-emerald-600">নির্বাচিত অগ্রাধিকার</p>
                  <h3 className="bengali-text mt-4 text-3xl font-black text-stone-950">{selectedBudget.title}</h3>
                  <p className="bengali-text mt-4 text-lg leading-8 text-stone-700">{selectedBudget.summary}</p>
                  <ul className="mt-8 space-y-4">
                    {selectedBudget.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-stone-800">
                        <span className="h-2.5 w-2.5 shrink-0 bg-emerald-500" />
                        <span className="bengali-text text-lg font-semibold">{renderMixedText(item)}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/donate"
                    className="bengali-text mt-10 inline-flex items-center gap-3 bg-emerald-500 px-5 py-3 text-lg font-black text-stone-950 transition hover:-translate-y-1 hover:bg-emerald-400"
                  >
                    এই কাজে অনুদান দিন
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#d9eee6] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="section-kicker">ভিজ্যুয়াল রেকর্ড</p>
              <h2 className="bengali-text mt-4 text-4xl font-black leading-tight text-stone-950 sm:text-6xl">ছবি যেন মানুষকে গল্পের ভেতরে টেনে আনে।</h2>
              <p className="bengali-text mt-6 text-xl leading-9 text-stone-700">
                এই ছবিগুলো আমাদের প্রস্তুতি, সংহতি, স্বেচ্ছাসেবী কাজ এবং মানবিক মিশনের পথচলার সাক্ষ্য বহন করে।
              </p>
              <div className="mt-8 flex gap-3">
                <a
                  href="/gallery"
                  className="bengali-text inline-flex items-center gap-3 bg-stone-950 px-5 py-3 text-lg font-black text-white transition hover:-translate-y-1"
                >
                  গ্যালারি খুলুন
                </a>
                <SocialLinks className="pl-2" iconClassName="h-7 w-7" />
              </div>
            </div>

            <div className="gallery-stack grid grid-cols-2 gap-4">
              {galleryPreview.map((src, index) => (
                <a
                  href="/gallery"
                  key={src}
                  className={`group block overflow-hidden bg-stone-900 shadow-xl shadow-stone-950/10 ${
                    index % 2 === 0 ? 'translate-y-8' : ''
                  }`}
                >
                  <img
                    src={src}
                    alt={`Campaign gallery preview ${index + 1}`}
                    className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:opacity-80"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-stone-950 px-4 py-24 text-white sm:px-6 lg:px-8">
          <img src="/madleens-vision-image.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 -z-10 bg-stone-950/70" />
          <div className="mx-auto max-w-5xl text-center">
            <p className="section-kicker text-emerald-300">এখনই এগিয়ে আসুন</p>
            <h2 className="bengali-text mt-5 text-4xl font-black leading-tight sm:text-6xl">
              সংহতিকে বাস্তব সমুদ্রযাত্রায় রূপ দিতে সাহায্য করুন।
            </h2>
            <p className="bengali-text mx-auto mt-6 max-w-2xl text-xl leading-9 text-stone-200">
              আপনার অনুদান নৌযান প্রস্তুতি, সহায়তা সামগ্রী সংগ্রহ, লজিস্টিকস এবং আন্তর্জাতিক সমন্বয়ের মাধ্যমে প্রচারণাকে প্রস্তুতির পর্যায়ে নিয়ে যায়।
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/donate"
                className="bengali-text inline-flex items-center justify-center gap-3 bg-emerald-400 px-7 py-4 text-lg font-black text-stone-950 transition hover:-translate-y-1 hover:bg-emerald-300"
              >
                অনুদান দিন
              </a>
              <button
                type="button"
                onClick={() => scrollToSection('budget')}
                className="bengali-text inline-flex items-center justify-center border border-white/25 px-7 py-4 text-lg font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                তহবিল দেখুন
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0d1715] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="TMTG Logo" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <h3 className="english-text text-lg font-black">A Thousand Madleens To Gaza</h3>
                <p className="bengali-text text-sm text-stone-400">বাংলাদেশ ডেলিগেশন</p>
              </div>
            </div>
            <p className="bengali-text mt-5 max-w-xl text-lg leading-8 text-stone-300">
              গাজার মানুষের জন্য মানবিক সহায়তায় নিবেদিত একটি শান্তিপূর্ণ বেসামরিক ফ্লোটিলা উদ্যোগ।
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <SocialLinks linkClassName="text-stone-300 hover:text-emerald-300 focus:ring-offset-stone-950" />
            <p className="english-text text-sm text-stone-500">
              Copyright 2026 Bangladesh Delegation. Developed by{' '}
              <a className="text-stone-300 hover:text-white" href="https://framecipher.info" target="_blank" rel="noopener noreferrer">
                FrameCipher
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

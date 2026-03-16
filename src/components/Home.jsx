  import { useState, useEffect } from 'react';
  import Navbar from './Navbar';
  import usePageTitle from '../hooks/usePageTitle';

  const Home = () => {
    usePageTitle(); // Use default title for home page
    
    const scrollToSection = (sectionId) => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-500/10"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <div className="fade-in-up">
              <h1 className="english-text text-5xl md:text-7xl mt-5 font-bold text-gray-800 mb-4">
                A Thousand <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Madleens</span>
              </h1>
              <h2 className="english-text text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
                To Gaza
              </h2>
              <p className="bengali-text text-xl md:text-2xl text-gray-600 mb-8">
                বাংলাদেশ ডেলিগেশন
              </p>
              
              <div className="w-full h-80 bg-gray-200 rounded-2xl mb-8 flex items-center justify-center shadow-xl">
                <span className="english-text text-gray-500 text-xl">[Hero Image Placeholder]</span>
              </div>

              <h3 className="english-text text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Join the Flotilla, Break the Siege
              </h3>
              
              <p className="bengali-text text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
                এটি বাংলাদেশ ডেলিগেশনের জন্য অফিসিয়াল ফান্ডরেইজিং পেজ। আমাদের সাথে যুক্ত হোন এবং একটি শান্তিপূর্ণ বেসামরিক <span className="english-text">flotilla</span> উদ্যোগে অবদান রাখুন, যার লক্ষ্য গাজার অবৈধ অবরোধ ভেঙে সমুদ্রপথে জীবনরক্ষাকারী মানবিক সহায়তা পৌঁছে দেওয়া।
              </p>

              <div className="flex justify-center items-center">
                <a 
                  href="/donate"
                  className="english-text mb-10 float-animation bg-gradient-to-r from-blue-600 to-blue-500 text-white px-10 py-4 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Donate Now
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="bengali-text text-4xl font-bold text-gray-800 mb-4">আমরা কারা</h2>
              <h3 className="english-text text-2xl font-semibold text-gray-600">Who We Are</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-full h-80 bg-gray-200 rounded-2xl mb-6 flex items-center justify-center shadow-lg">
                  <span className="english-text text-gray-500 text-lg">[Organization Image Placeholder]</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="bengali-text text-lg text-gray-700 leading-relaxed">
                  <span className="english-text font-bold">Freedom Flotilla Coalition</span> এবং <span className="english-text font-bold">A Thousand Madleens to Gaza</span> হল আন্তর্জাতিক নাগরিক আন্দোলন, যেখানে বিশ্বের বিভিন্ন প্রান্ত থেকে মানুষ একত্রিত হয়েছে।
                </p>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="bengali-text text-xl font-semibold text-gray-800 mb-4">এই সংগঠনগুলো একসাথে কাজ করছে:</h4>
                  <ul className="bengali-text space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span>অর্থ সংগ্রহ করার জন্য</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span>জাহাজ প্রস্তুত ও সজ্জিত করার জন্য</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span>গাজার ওপর আরোপিত অবরোধ ভাঙতে সমুদ্রপথে মানবিক সহায়তা পৌঁছে দেওয়ার জন্য</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20 bg-white scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="english-text text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="bengali-text text-xl text-gray-600">আমাদের মিশন</p>
            </div>

            {/* The First Wave */}
            <div className="mb-20">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-12">
                <h3 className="english-text text-3xl font-bold text-gray-800 mb-4 text-center">The First Wave</h3>
                <div className="w-full h-64 bg-gray-200 rounded-xl mb-6 flex items-center justify-center">
                  <span className="english-text text-gray-500 text-lg">[First Wave Image Placeholder]</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="bengali-text text-gray-700 mb-4 leading-relaxed">
                      যখন শুধু কথার মাধ্যমে ইসরায়েল এবং তাদের মিত্রদের অবস্থান পরিবর্তন করা সম্ভব হয় না, তখন আরও কার্যকর পদক্ষেপ প্রয়োজন হয়।
                    </p>
                    <p className="bengali-text text-gray-700 mb-4 leading-relaxed">
                      ২০২৫ সালে বিশ্বের বিভিন্ন প্রান্তের স্বেচ্ছাসেবকদের নিয়ে একটি বড় <span className="english-text">flotilla coalition</span> গঠন করা হয়।
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h4 className="bengali-text text-lg font-semibold text-gray-800 mb-3">এই <span className="english-text">flotilla</span>:</h4>
                    <ul className="bengali-text space-y-2 text-gray-700">
                      <li>• ইসরায়েলি সামরিক বাহিনী দ্বারা আটক করা হয়</li>
                      <li>• অংশগ্রহণকারীদের আটক করা হয়</li>
                      <li>• তাদের একটি উচ্চ নিরাপত্তা সম্পন্ন ইসরায়েলি কারাগারে নিয়ে যাওয়া হয়</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
                  <p className="bengali-text text-gray-700 leading-relaxed">
                    তবুও এই সম্মিলিত উদ্যোগ বিশ্বজুড়ে ব্যাপক সংহতি সৃষ্টি করে এবং একটি বাস্তব প্রভাব ফেলে। এটি বিশ্বজুড়ে মানুষকে অনুপ্রাণিত করে এবং আশা জাগায়। গাজার মানুষও বুঝতে পারে যে তারা ভুলে যাওয়া হয়নি।
                  </p>
                </div>
              </div>
            </div>

            {/* Bangladesh Participation */}
            <div className="mb-20">
              <h3 className="bengali-text text-3xl font-bold text-gray-800 mb-8 text-center">বাংলাদেশের অংশগ্রহণ</h3>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-80 bg-gray-200 rounded-2xl mb-6 flex items-center justify-center shadow-lg">
                    <span className="english-text text-gray-500 text-lg">[Shahidul Alam Image Placeholder]</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="bengali-text text-lg text-gray-700 leading-relaxed">
                    এই <span className="english-text">flotilla</span>-তে বাংলাদেশের অংশগ্রহণও ছিল। বাংলাদেশের বিখ্যাত ফটোসাংবাদিক ও অ্যাক্টিভিস্ট <strong>শহিদুল আলম</strong> <span className="english-text">"Conscience"</span> নামের জাহাজে অংশগ্রহণ করেছিলেন।
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                    <h4 className="bengali-text text-lg font-semibold text-gray-800 mb-3">এছাড়াও:</h4>
                    <ul className="bengali-text space-y-2 text-gray-700">
                      <li>• সহায়ক জাহাজগুলোতে</li>
                      <li>• স্থলভিত্তিক সমন্বয় কার্যক্রমে</li>
                    </ul>
                    <p className="bengali-text text-gray-700 mt-4 leading-relaxed">
                      বাংলাদেশি প্রবাসীদের অনেকেই তাদের সময়, সম্পদ এবং ব্যক্তিগত ঝুঁকি নিয়ে এই প্রচেষ্টায় অংশ নেন।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Moving Forward */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-8 text-white">
              <h3 className="english-text text-3xl font-bold mb-6 text-center">Moving Forward</h3>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-full h-64 bg-white/20 rounded-xl mb-6 flex items-center justify-center">
                    <span className="english-text text-white/70 text-lg">[Ship Preparation Image Placeholder]</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="bengali-text text-lg leading-relaxed">
                    এখন আমরা আরও বড় একটি <span className="english-text">flotilla</span> প্রস্তুত করছি। এইবার <span className="english-text">flotilla</span>-তে একটি <strong>বিশেষ বাংলাদেশি জাহাজ</strong> অন্তর্ভুক্ত করার পরিকল্পনা রয়েছে।
                  </p>
                  
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <h4 className="bengali-text text-lg font-semibold mb-3">এর অর্থ হলো:</h4>
                    <ul className="bengali-text space-y-2">
                      <li>• একটি জাহাজ সংগ্রহ করা</li>
                      <li>• সেটিকে প্রয়োজনীয়ভাবে সজ্জিত করা</li>
                      <li>• ইউরোপের একটি বন্দর থেকে যাত্রা শুরু করা</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-400/20 rounded-xl p-4">
                    <p className="english-text font-semibold text-yellow-100">Launch Timeline: <span className="english-text">Spring 2026</span></p>
                    <p className="english-text text-sm text-yellow-200"><span className="english-text">Mediterranean</span> Port Departure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="bengali-text text-4xl font-bold text-gray-800 mb-4">কেন বাংলাদেশ ডেলিগেশন গুরুত্বপূর্ণ</h2>
              <h3 className="english-text text-2xl font-semibold text-gray-600">Why Bangladesh Delegation Matters</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="english-text text-xl font-semibold text-gray-800 mb-3">Global Movement</h4>
                <p className="bengali-text text-gray-600">আন্তর্জাতিক আন্দোলনের অংশ</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="english-text text-xl font-semibold text-gray-800 mb-3">Peaceful Mission</h4>
                <p className="bengali-text text-gray-600">অহিংস উদ্দেশ্য</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="english-text text-xl font-semibold text-gray-800 mb-3">Solidarity</h4>
                <p className="bengali-text text-gray-600">বিশ্বব্যাপী সংহতি</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="bengali-text text-2xl font-semibold text-gray-800 mb-6">আমাদের লক্ষ্য:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="bengali-text space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>ফিলিস্তিনি ভূখণ্ডের দখলের বিরুদ্ধে প্রতিবাদ অব্যাহত রাখা</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>বিশ্ব সরকারের ওপর চাপ বৃদ্ধি করা</span>
                  </li>
                </ul>
                <ul className="bengali-text space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>যেন তারা দ্রুত পদক্ষেপ নেয়</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                <p className="bengali-text text-xl font-bold text-gray-800">
                  চলুন বিশ্বকে দেখাই যে বাংলাদেশের মানুষ ইতিহাসের সঠিক পাশে দাঁড়িয়েছে।
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Budget Section */}
        <section id="budget" className="py-20 bg-white scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="bengali-text text-4xl font-bold text-gray-800 mb-4">সংগ্রহ করা অর্থ কোথায় ব্যয় হবে</h2>
              <h3 className="english-text text-2xl font-semibold text-gray-600">How Your Donation Will Be Used</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Boat & Equipment */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="english-text text-2xl font-bold text-blue-800 mb-4 text-center">Boat & Equipment</h3>
                
                <div className="w-full h-48 bg-white rounded-xl mb-4 flex items-center justify-center shadow-md">
                  <span className="english-text text-gray-400 text-sm">[Boat Equipment Image]</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="bengali-text font-semibold text-gray-800 mb-2">জাহাজ প্রস্তুতি:</h4>
                    <ul className="bengali-text text-sm text-gray-700 space-y-1">
                      <li>• জাহাজ মেরামত</li>
                      <li>• জাহাজ আপগ্রেড</li>
                      <li>• নিরাপত্তা পরীক্ষা</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="bengali-text font-semibold text-gray-800 mb-2">প্রয়োজনীয় সরঞ্জাম:</h4>
                    <ul className="bengali-text text-sm text-gray-700 space-y-1">
                      <li>• <span className="english-text">GPS</span></li>
                      <li>• যোগাযোগ ব্যবস্থা</li>
                      <li>• ক্যামেরা</li>
                      <li>• নিরাপত্তা সরঞ্জাম</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Medical & Humanitarian Aid */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="english-text text-2xl font-bold text-blue-800 mb-4 text-center">Humanitarian Aid</h3>
                
                <div className="w-full h-48 bg-white rounded-xl mb-4 flex items-center justify-center shadow-md">
                  <span className="english-text text-gray-400 text-sm">[Medical Aid Image]</span>
                </div>
                
                <ul className="bengali-text text-sm text-gray-700 space-y-2">
                  <li>• চিকিৎসা ও প্রাথমিক চিকিৎসা সরঞ্জাম</li>
                  <li>• খাদ্য সহায়তা</li>
                  <li>• মৌলিক জীবনযাত্রার প্রয়োজনীয় সামগ্রী</li>
                  <li>• পানি ও স্যানিটেশন ব্যবস্থা</li>
                </ul>
              </div>

              {/* Organizing the Flotilla */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="english-text text-2xl font-bold text-blue-800 mb-4 text-center">Organizing the Flotilla</h3>
                
                <div className="w-full h-48 bg-white rounded-xl mb-4 flex items-center justify-center shadow-md">
                  <span className="english-text text-gray-400 text-sm">[Organization Image]</span>
                </div>
                
                <ul className="bengali-text text-sm text-gray-700 space-y-2">
                  <li>• বন্দরের ফি</li>
                  <li>• জ্বালানি ব্যয়</li>
                  <li>• যাত্রার লজিস্টিক প্রস্তুতি</li>
                  <li>• ক্রু এবং স্বেচ্ছাসেবকদের প্রশিক্ষণ</li>
                  <li>• সমন্বয় কার্যক্রম</li>
                </ul>
                
                <div className="mt-4 bg-white rounded-lg p-3">
                  <p className="bengali-text text-xs text-gray-600 italic">
                    এই আন্দোলনটি মূলত স্বেচ্ছাসেবকদের দ্বারা পরিচালিত
                  </p>
                </div>
              </div>
            </div>

            {/* Overall Goal */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-12 text-white text-center shadow-2xl">
              <h2 className="bengali-text text-3xl font-bold mb-4">সামগ্রিক লক্ষ্য</h2>
              <div className="mb-6">
                <p className="bengali-text text-4xl font-bold mb-2">গাজার অবরোধ</p>
                <p className="bengali-text text-3xl font-semibold">ভাঙা</p>
              </div>
              
              <div className="w-full h-64 bg-white/20 rounded-xl mb-6 flex items-center justify-center backdrop-blur-sm">
                <span className="english-text text-white/70 text-lg">[Madleens Vision Image]</span>
              </div>
              
              <p className="bengali-text text-xl leading-relaxed max-w-4xl mx-auto">
                বিশ্বব্যাপী জাহাজের সমর্থন সংগ্রহ করে গাজার অবরোধ ভাঙার একটি বৃহৎ আন্তর্জাতিক প্রচেষ্টা
              </p>
            </div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="bengali-text text-4xl font-bold text-blue-800 mb-4">কেন এখনই অনুদান জরুরি</h2>
              <h3 className="english-text text-2xl font-semibold text-blue-600">Why Donate Now</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="english-text text-xl font-semibold text-gray-800 mb-3">Preparation Started</h4>
                <p className="bengali-text text-gray-700"><span className="english-text">Spring 2026</span>-এর <span className="english-text">flotilla</span> প্রস্তুতি ইতিমধ্যেই শুরু হয়েছে</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-600">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="english-text text-xl font-semibold text-gray-800 mb-3">Bigger Mission</h4>
                <p className="bengali-text text-gray-700">এইবারের <span className="english-text">flotilla</span> গত বছরের তুলনায় আরও বড় হবে</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h4 className="english-text text-xl font-semibold text-gray-800 mb-3">Urgent Need</h4>
                <p className="bengali-text text-gray-700">গাজার ওপর অবরোধ যত দীর্ঘস্থায়ী হয়, মানুষের পরিস্থিতি তত খারাপ হয়</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <a 
                href="/donate"
                className="english-text inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-12 py-4 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Donate Now
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Logo & Description */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                  <div>
                    <h3 className="english-text text-xl font-bold">A Thousand Madleens To Gaza</h3>
                    <p className="bengali-text text-gray-400">বাংলাদেশ ডেলিগেশন</p>
                  </div>
                </div>
                <p className="english-text text-gray-300 leading-relaxed mb-4">
                  Join the peaceful civilian flotilla initiative to break the illegal blockade of Gaza and deliver life-saving humanitarian aid by sea.
                </p>
                <p className="bengali-text text-gray-300 leading-relaxed">
                  গাজার অবৈধ অবরোধ ভেঙে সমুদ্রপথে জীবনরক্ষাকারী মানবিক সহায়তা পৌঁছে দেওয়ার শান্তিপূর্ণ বেসামরিক <span className="english-text">flotilla</span> উদ্যোগে যোগ দিন।
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="english-text text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollToSection('about')} className="english-text text-gray-300 hover:text-white transition-colors">About Us</button></li>
                  <li><button onClick={() => scrollToSection('mission')} className="english-text text-gray-300 hover:text-white transition-colors">Our Mission</button></li>
                  <li><button onClick={() => scrollToSection('budget')} className="english-text text-gray-300 hover:text-white transition-colors">Fund Usage</button></li>
                  <li><a href="/gallery" className="english-text text-gray-300 hover:text-white transition-colors">Gallery</a></li>
                  <li><a href="/donate" className="english-text text-gray-300 hover:text-white transition-colors">Donate</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="english-text text-lg font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-300">
                  <p className="english-text">Email: info@madleenstogaza.org</p>
                  <p className="english-text">Phone: +880-XXX-XXXX</p>
                  <div className="flex space-x-4 mt-4">
                    <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="english-text text-gray-400 mb-2">
                © 2026 Bangladesh Delegation - A Thousand Madleens To Gaza
              </p>
              <p className="bengali-text text-gray-500 text-sm">
                <span className="english-text">Freedom Flotilla Coalition</span> | <span className="english-text">Thousand Madleens to Gaza</span> | <span className="english-text">Bangladesh Delegation Crowdfund</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  };

  export default Home;
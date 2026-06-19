import { useState } from 'react';
import Navbar from './Navbar';
import usePageTitle from '../hooks/usePageTitle';

const BKASH_DONATION_URL = 'https://donation.bkash.com/en/dt1/donate';

const bankDetails = [
  {
    key: 'accountName',
    bn: 'অ্যাকাউন্টের নাম',
    en: 'Account Name',
    value: 'Drik Trust',
  },
  {
    key: 'bankName',
    bn: 'ব্যাংকের নাম',
    en: 'Bank Name',
    value: 'AB Bank Limited',
  },
  {
    key: 'branch',
    bn: 'শাখা',
    en: 'Branch',
    value: 'Dhanmondi',
  },
  {
    key: 'branchCode',
    bn: 'শাখা কোড',
    en: 'Branch Code',
    value: '4021',
  },
  {
    key: 'accountNo',
    bn: 'অ্যাকাউন্ট নম্বর',
    en: 'Account No.',
    value: '1361-119475-430',
    highlight: true,
  },
  {
    key: 'accountType',
    bn: 'অ্যাকাউন্টের ধরন',
    en: 'Account Type',
    value: 'SND',
  },
  {
    key: 'swift',
    bn: 'সুইফট কোড',
    en: 'Swift Code',
    value: 'ABBLBDDH',
  },
  {
    key: 'routing',
    bn: 'রাউটিং নম্বর',
    en: 'Routing No.',
    value: '020261182',
  },
  {
    key: 'address',
    bn: 'ঠিকানা',
    en: 'Address',
    value: 'House 45, Road 16, Dhanmondi R. A., Dhaka 1209, Bangladesh',
    wide: true,
  },
];

const priorities = [
  {
    bn: 'নৌযান প্রস্তুতি ও নিরাপত্তা সরঞ্জাম',
    en: 'Boat preparation and safety equipment',
  },
  {
    bn: 'চিকিৎসা, খাদ্য ও জরুরি মানবিক সহায়তা',
    en: 'Medical, food, and emergency humanitarian aid',
  },
  {
    bn: 'স্বেচ্ছাসেবক, লজিস্টিকস ও আন্তর্জাতিক সমন্বয়',
    en: 'Volunteer, logistics, and international coordination',
  },
];

const Donate = () => {
  usePageTitle('Donate');

  const [language, setLanguage] = useState('bn');
  const [copiedKey, setCopiedKey] = useState('');
  const isBangla = language === 'bn';

  const copyValue = async (key, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(''), 1800);
    } catch {
      setCopiedKey('');
    }
  };

  const text = {
    eyebrow: isBangla ? 'বাংলাদেশ ডেলিগেশন তহবিল' : 'Bangladesh Delegation Fund',
    title: isBangla ? 'আপনার অনুদান সমুদ্রযাত্রাকে বাস্তব করে।' : 'Your donation moves the mission to sea.',
    intro: isBangla
      ? 'গাজার মানুষের কাছে মানবিক সহায়তা পৌঁছে দিতে নৌযান, সরঞ্জাম, লজিস্টিকস এবং আন্তর্জাতিক সমন্বয়ের জন্য সরাসরি সহায়তা করুন।'
      : 'Support the vessel, equipment, logistics, and coordination needed to deliver humanitarian aid to Gaza by sea.',
    bkash: isBangla ? 'বিকাশে অনুদান দিন' : 'Donate with bKash',
    bank: isBangla ? 'ব্যাংক ট্রান্সফার' : 'Bank Transfer',
    choose: isBangla ? 'অনুদানের মাধ্যম নির্বাচন করুন' : 'Choose a Donation Method',
    bankIntro: isBangla
      ? 'দৃক ট্রাস্টের ব্যাংক অ্যাকাউন্টে সরাসরি অনুদান পাঠাতে নিচের তথ্য ব্যবহার করুন।'
      : "Use the details below to send your donation directly to Drik Trust's bank account.",
    copy: isBangla ? 'কপি' : 'Copy',
    copied: isBangla ? 'কপি হয়েছে' : 'Copied',
    usage: isBangla ? 'আপনার অনুদান ব্যবহৃত হবে' : 'Your Donation Supports',
    noteTitle: isBangla ? 'দুইভাবে অনুদান পাঠানো যাবে' : 'Two Ways to Donate',
    noteBody: isBangla
      ? 'আপনি সরাসরি ব্যাংক ট্রান্সফার করতে পারেন অথবা বিকাশের মাধ্যমে অনুদান দিতে পারেন।'
      : 'You can donate through direct bank transfer or through bKash.',
    home: isBangla ? 'হোমে ফিরুন' : 'Back Home',
  };

  return (
    <div className="min-h-screen bg-[#f8f4ee] text-stone-950">
      <Navbar />

      <main>
        <section className="relative isolate overflow-hidden bg-[#07110f] px-4 pb-14 pt-32 text-white sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-y-0 right-0 w-[58%] bg-[linear-gradient(135deg,transparent_0_22%,rgba(228,49,43,0.34)_22%_38%,transparent_38%),linear-gradient(180deg,rgba(0,0,0,0.62)_0_33%,rgba(255,255,255,0.12)_33%_66%,rgba(20,153,84,0.38)_66%_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_26%,rgba(16,185,129,0.22),transparent_22rem),linear-gradient(90deg,#07110f_0%,rgba(7,17,15,0.94)_42%,rgba(7,17,15,0.72)_100%)]" />
          </div>

          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_0.78fr] lg:items-center">
            <div className={isBangla ? 'bengali-text' : 'english-text'}>
              <p className="text-lg font-black text-emerald-300">{text.eyebrow}</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight sm:text-7xl">{text.title}</h1>
              <p className="mt-6 max-w-3xl text-xl leading-9 text-stone-200">{text.intro}</p>
            </div>

            <div className="border border-white/15 bg-white p-5 text-stone-950 shadow-2xl shadow-black/30 sm:p-6">
              <div className="mb-5 flex border border-stone-200 p-1">
                <button
                  type="button"
                  onClick={() => setLanguage('bn')}
                  className={`bengali-text flex-1 px-4 py-3 text-base font-black transition ${
                    isBangla ? 'bg-stone-950 text-white' : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  বাংলা
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`english-text flex-1 px-4 py-3 text-sm font-black uppercase tracking-[0.16em] transition ${
                    !isBangla ? 'bg-stone-950 text-white' : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  English
                </button>
              </div>

              <p className={`${isBangla ? 'bengali-text' : 'english-text'} text-2xl font-black`}>{text.choose}</p>
              <p className={`${isBangla ? 'bengali-text' : 'english-text'} mt-2 leading-7 text-stone-600`}>{text.noteBody}</p>

              <div className="mt-6 grid gap-3">
                <a
                  href={BKASH_DONATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isBangla ? 'bengali-text' : 'english-text'} flex items-center justify-between bg-[#d8206a] px-5 py-4 text-lg font-black text-white transition hover:-translate-y-1 hover:bg-[#c3185d]`}
                >
                  <span>{text.bkash}</span>
                  <span className="english-text text-sm">bKash</span>
                </a>

                <div className="border border-stone-200 bg-stone-50 p-4">
                  <p className={`${isBangla ? 'bengali-text' : 'english-text'} text-sm font-black text-stone-500`}>
                    {isBangla ? 'ব্যাংক অ্যাকাউন্ট নম্বর' : 'Bank Account Number'}
                  </p>
                  <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="english-text text-2xl font-black text-stone-950">1361-119475-430</p>
                    <button
                      type="button"
                      onClick={() => copyValue('heroAccountNo', '1361-119475-430')}
                      className={`${isBangla ? 'bengali-text' : 'english-text'} border border-stone-300 bg-white px-4 py-3 text-sm font-black text-stone-800 transition hover:border-stone-950`}
                    >
                      {copiedKey === 'heroAccountNo' ? text.copied : text.copy}
                    </button>
                  </div>
                </div>

                <a
                  href="#bank-details"
                  className={`${isBangla ? 'bengali-text' : 'english-text'} flex items-center justify-center border border-stone-300 px-5 py-4 text-lg font-black text-stone-900 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white`}
                >
                  {text.bank}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.38fr]">
            <div id="bank-details" className="bg-white p-5 shadow-2xl shadow-stone-950/10 sm:p-8">
              <div className={isBangla ? 'bengali-text' : 'english-text'}>
                <p className={isBangla ? 'section-kicker' : 'english-text text-sm font-black uppercase tracking-[0.16em] text-emerald-700'}>
                  {text.choose}
                </p>
                <h2 className="mt-3 text-4xl font-black text-stone-950">{text.bank}</h2>
                <p className="mt-4 text-lg leading-8 text-stone-600">{text.bankIntro}</p>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {bankDetails.map((detail) => (
                  <div
                    key={detail.key}
                    className={`border p-4 transition hover:border-emerald-500 ${
                      detail.highlight ? 'border-emerald-500 bg-emerald-50' : 'border-stone-200 bg-stone-50'
                    } ${detail.wide ? 'md:col-span-2' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={`${isBangla ? 'bengali-text' : 'english-text'} text-sm font-black text-stone-500`}>
                          {isBangla ? detail.bn : detail.en}
                        </p>
                        <p className="english-text mt-2 break-words text-xl font-black text-stone-950">{detail.value}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => copyValue(detail.key, detail.value)}
                        className={`${isBangla ? 'bengali-text' : 'english-text'} shrink-0 border border-stone-300 bg-white px-3 py-2 text-sm font-black text-stone-700 transition hover:border-stone-950 hover:text-stone-950`}
                      >
                        {copiedKey === detail.key ? text.copied : text.copy}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-5">
              <div className="bg-stone-950 p-6 text-white">
                <p className={`${isBangla ? 'bengali-text' : 'english-text'} text-2xl font-black`}>{text.usage}</p>
                <div className="mt-6 space-y-4">
                  {priorities.map((priority, index) => (
                    <div key={priority.en} className="flex gap-3 border-t border-white/10 pt-4">
                      <span className="english-text text-lg font-black text-emerald-300">0{index + 1}</span>
                      <p className={`${isBangla ? 'bengali-text' : 'english-text'} leading-7 text-stone-200`}>
                        {isBangla ? priority.bn : priority.en}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-stone-200 bg-white p-6">
                <p className={`${isBangla ? 'bengali-text' : 'english-text'} text-xl font-black text-stone-950`}>
                  {isBangla ? 'দ্রুত অনুদান' : 'Quick Donation'}
                </p>
                <a
                  href={BKASH_DONATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isBangla ? 'bengali-text' : 'english-text'} mt-5 flex items-center justify-center bg-[#d8206a] px-5 py-4 text-lg font-black text-white transition hover:-translate-y-1 hover:bg-[#c3185d]`}
                >
                  {text.bkash}
                </a>
              </div>

              <a
                href="/"
                className={`${isBangla ? 'bengali-text' : 'english-text'} flex items-center justify-center border border-stone-300 bg-transparent px-5 py-4 text-lg font-black text-stone-800 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white`}
              >
                {text.home}
              </a>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Donate;

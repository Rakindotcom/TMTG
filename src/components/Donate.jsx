import Navbar from './Navbar';
import usePageTitle from '../hooks/usePageTitle';

const BKASH_DONATION_URL = 'https://donation.bkash.com/en/dt1/donate';

const Donate = () => {
  usePageTitle('Donate');
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Donation Content */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-20 pb-8">
        <div className="w-full px-2 sm:px-3">
          
          {/* Bengali Section */}
          <div className="bg-white rounded-xl shadow-xl p-6 mb-6">
            <h1 className="bengali-text text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              বাংলাদেশ ইতিহাসে যোগ দিচ্ছে
            </h1>
            
            <div className="bengali-text text-lg leading-relaxed space-y-3 text-gray-700">
              <p>আমাদের তহবিলে আপনারা দুই ভাবে অনুদান পাঠাতে পারেন।</p>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <ul className="list-decimal list-inside ml-4 text-base space-y-1">
                  <li>সরাসরি দৃক ট্রাস্ট-এর ব্যাংক অ্যাকাউন্টে আপনার অনুদান পাঠাতে পারেন, অথবা</li>
                  <li>বিকাশের মাধ্যমে</li>
                </ul>
              </div>
            </div>
            
            {/* Bank Details - Bengali */}
            <div className="mt-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 rounded-lg">
              <h2 className="bengali-text text-2xl font-bold mb-3">দৃক ট্রাস্ট-এর ব্যাংক অ্যাকাউন্টের তথ্য</h2>
              <div className="space-y-1 text-base">
                <p className="bengali-text"><span className="font-semibold">অ্যাকাউন্টের নাম:</span> <span className="english-text">Drik Trust</span> (দৃক ট্রাস্ট)</p>
                <p className="bengali-text"><span className="font-semibold">ব্যাংকের নাম:</span> এবি ব্যাংক লিমিটেড (<span className="english-text">AB Bank Limited</span>)</p>
                <p className="bengali-text"><span className="font-semibold">শাখা:</span> ধানমন্ডি | <span className="font-semibold">শাখা কোড:</span> ৪০২১</p>
                <p className="bengali-text"><span className="font-semibold">অ্যাকাউন্ট নম্বর:</span> ১৩৬১-১১৯৪৭৫-৪৩০</p>
                <p className="bengali-text"><span className="font-semibold">অ্যাকাউন্টের ধরন:</span> এসএনডি (<span className="english-text">SND</span>)</p>
                <p className="bengali-text"><span className="font-semibold">সুইফট কোড:</span> <span className="english-text">ABBLBDDH</span> | <span className="font-semibold">রাউটিং নম্বর:</span> ০২০২৬১১৮২</p>
                <p className="bengali-text"><span className="font-semibold">ঠিকানা:</span> হাউস ৪৫, রোড ১৬, ধানমন্ডি আ/এ, ঢাকা ১২০৯, বাংলাদেশ</p>
              </div>
            </div>
            
            <div className="text-center mt-5">
              <p className="bengali-text text-xl font-bold text-blue-600 mb-4">
                নিচের বাটনে ক্লিক করে বিকাশের মাধ্যমে অনুদান দিতে পারেন।
              </p>
              <a
                href={BKASH_DONATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bengali-text inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-3 rounded-full font-bold text-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                বিকাশে অনুদান দিন
              </a>
            </div>
          </div>
          
          {/* English Section */}
          <div className="bg-white rounded-xl shadow-xl p-6 mb-6">
            <h1 className="english-text text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              Bangladesh is Joining History
            </h1>
            
            <div className="english-text text-lg leading-relaxed space-y-3 text-gray-700">
              <p>You can send your donation to our fund in two ways.</p>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <ul className="list-decimal list-inside ml-4 text-base space-y-1">
                  <li>You can send your donation directly to Drik Trust's bank account, or</li>
                  <li>Donate through bKash</li>
                </ul>
              </div>
            </div>
            
            {/* Bank Details - English */}
            <div className="mt-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 rounded-lg">
              <h2 className="english-text text-2xl font-bold mb-3">Bank Account Information of Drik Trust</h2>
              <div className="english-text space-y-1 text-base">
                <p><span className="font-semibold">Account Name:</span> Drik Trust</p>
                <p><span className="font-semibold">Bank Name:</span> AB Bank Limited</p>
                <p><span className="font-semibold">Branch:</span> Dhanmondi | <span className="font-semibold">Branch Code:</span> 4021</p>
                <p><span className="font-semibold">Account No.:</span> 1361-119475-430</p>
                <p><span className="font-semibold">Account Type:</span> SND</p>
                <p><span className="font-semibold">Swift Code:</span> ABBLBDDH | <span className="font-semibold">Routing No.:</span> 020261182</p>
                <p><span className="font-semibold">Address:</span> House 45, Road 16, Dhanmondi R. A., Dhaka 1209, Bangladesh</p>
              </div>
            </div>
            
            <div className="text-center mt-5">
              <p className="english-text text-xl font-bold text-blue-600 mb-4">
                Click the button below to donate through bKash.
              </p>
              <a
                href={BKASH_DONATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="english-text inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-3 rounded-full font-bold text-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Donate with bKash
              </a>
            </div>
          </div>
          
          {/* Back to Home Button */}
          <div className="text-center">
            <a 
              href="/"
              className="english-text inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;

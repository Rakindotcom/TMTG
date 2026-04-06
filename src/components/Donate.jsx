import Navbar from './Navbar';
import usePageTitle from '../hooks/usePageTitle';

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
            <h1 className="bengali-text text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
              বাংলাদেশ ইতিহাসে যোগ দিচ্ছে
            </h1>
            
            <div className="bengali-text text-base leading-relaxed space-y-3 text-gray-700">
              <p>বিশ্বজুড়ে সংগঠনগুলো একসাথে আছে, বাংলাদেশও যুক্ত হচ্ছে। এই মুহূর্তে কোন প্রকার সরকারি হস্তক্ষেপ ছাড়া, কোনো রাজনৈতিক দলের ব্যানার ছাড়া পৃথিবীর বিভিন্ন প্রান্ত থেকে মানুষ একসাথে কাজ করছে। শুধুমাত্র মানবতার জন্য।</p>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="font-semibold mb-1">কারা এই মিশনে আছে?</p>
                <ul className="list-disc list-inside ml-4 text-sm">
                  <li><span className="english-text">A Thousand Madleens to Gaza (TMTG)</span></li>
                  <li><span className="english-text">Freedom Flotilla Coalition (FFC)</span></li>
                  <li>আরও অনেক আন্তর্জাতিক সংগঠন এবং প্ল্যাটফর্ম</li>
                </ul>
              </div>
              
              <p>প্রথমবারের মতো, বাংলাদেশ থেকে নিজস্ব প্রতিনিধি দল গাজায় যাবে। শহীদুল আলম এবং <span className="english-text">DRIK</span>-এর নেতৃত্বে এই ঐতিহাসিক যাত্রা। <span className="english-text">DRIK Trust</span> জনগণের তহবিল সংগ্রহের অনুমতি পেয়েছে।</p>
              
              <p>এই মিশন সম্পূর্ণ স্বাধীন। কোনো সরকারের নিয়ন্ত্রণ নেই। এটি জনগণের মিশন। মানুষের মিশন। এবং আপনিও এতে যুক্ত হতে পারেন।</p>
              
              <p className="font-semibold text-blue-600">আপনার অবদান শুধু অর্থ নয়। আপনার শেয়ার, আপনার কথা, আপনার সমর্থন - সবই গুরুত্বপূর্ণ।</p>
            </div>
            
            {/* Bank Details - Bengali */}
            <div className="mt-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 rounded-lg">
              <h2 className="bengali-text text-xl font-bold mb-3">দৃক ট্রাস্ট-এর ব্যাংক অ্যাকাউন্টের তথ্য</h2>
              <div className="space-y-1 text-sm">
                <p className="bengali-text"><span className="font-semibold">অ্যাকাউন্টের নাম:</span> <span className="english-text">Drik Trust</span> (দৃক ট্রাস্ট)</p>
                <p className="bengali-text"><span className="font-semibold">ব্যাংকের নাম:</span> এবি ব্যাংক লিমিটেড (<span className="english-text">AB Bank Limited</span>)</p>
                <p className="bengali-text"><span className="font-semibold">শাখা:</span> ধানমন্ডি | <span className="font-semibold">শাখা কোড:</span> ৪০২১</p>
                <p className="bengali-text"><span className="font-semibold">অ্যাকাউন্ট নম্বর:</span> ১৩৬১-১১৯৪৭৫-৪৩০</p>
                <p className="bengali-text"><span className="font-semibold">অ্যাকাউন্টের ধরন:</span> এসএনডি (<span className="english-text">SND</span>)</p>
                <p className="bengali-text"><span className="font-semibold">সুইফট কোড:</span> <span className="english-text">ABBLBDDH</span> | <span className="font-semibold">রাউটিং নম্বর:</span> ০২০২৬১১৮২</p>
                <p className="bengali-text"><span className="font-semibold">ঠিকানা:</span> হাউস ৪৫, রোড ১৬, ধানমন্ডি আ/এ, ঢাকা ১২০৯, বাংলাদেশ</p>
              </div>
            </div>
            
            <p className="bengali-text text-lg font-bold text-center mt-4 text-blue-600">
              বাংলাদেশ ইতিহাসে যোগ দিচ্ছে। আপনিও যোগ দিন! এই মিশনের অংশ হন। গাজার পাশে দাঁড়ান।
            </p>
          </div>
          
          {/* English Section */}
          <div className="bg-white rounded-xl shadow-xl p-6 mb-6">
            <h1 className="english-text text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
              Bangladesh is Joining History
            </h1>
            
            <div className="english-text text-base leading-relaxed space-y-3 text-gray-700">
              <p>Organizations across the world are coming together. Bangladesh is joining. So can you.</p>
              
              <p>This is not one country's effort. This is the effort of people around the world.</p>
              
              <p>Right now, people from different corners of the globe are working together. Without government intervention. Without any political party's banner. Only for humanity.</p>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="font-semibold mb-1">Who is part of this mission?</p>
                <ul className="list-disc list-inside ml-4 text-sm">
                  <li>A Thousand Madleens to Gaza (TMTG)</li>
                  <li>Freedom Flotilla Coalition (FFC)</li>
                  <li>Many other international organizations and platforms</li>
                </ul>
              </div>
              
              <p>For the first time, a delegation from Bangladesh will sail to Gaza. DRIK Trust has received clearance to collect public funds. This is not just a boat's journey; this is a message: Israel's illegal siege cannot continue. The people of the world will not remain silent spectators.</p>
              
              <p>This mission is completely independent. No government control. This is a people's mission. A humanity's mission. And you can join too!</p>
              
              <p className="font-semibold text-blue-600">Your contribution is not just money. Your share, your voice, your support - everything matters.</p>
            </div>
            
            {/* Bank Details - English */}
            <div className="mt-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 rounded-lg">
              <h2 className="english-text text-xl font-bold mb-3">Bank Account Information of Drik Trust</h2>
              <div className="english-text space-y-1 text-sm">
                <p><span className="font-semibold">Account Name:</span> Drik Trust</p>
                <p><span className="font-semibold">Bank Name:</span> AB Bank Limited</p>
                <p><span className="font-semibold">Branch:</span> Dhanmondi | <span className="font-semibold">Branch Code:</span> 4021</p>
                <p><span className="font-semibold">Account No.:</span> 1361-119475-430</p>
                <p><span className="font-semibold">Account Type:</span> SND</p>
                <p><span className="font-semibold">Swift Code:</span> ABBLBDDH | <span className="font-semibold">Routing No.:</span> 020261182</p>
                <p><span className="font-semibold">Address:</span> House 45, Road 16, Dhanmondi R. A., Dhaka 1209, Bangladesh</p>
              </div>
            </div>
            
            <p className="english-text text-lg font-bold text-center mt-4 text-blue-600">
              Bangladesh is joining history. Be part of this mission, stand with Gaza.
            </p>
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
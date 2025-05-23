import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaShieldAlt, FaLock, FaSync, FaUserFriends, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/myABL.apk";
    link.download = "АВᒪ_Mobile.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadStarted(true);
    setTimeout(() => {
      setDownloadStarted(false);
    }, 3000);
  };

  const s1 = "/images/st1.webp";
  const s2 = "/images/st2.webp";
  const s3 = "/images/st3.webp";
  const s4 = "/images/st4.webp";
  const s5 = "/images/st5.webp";

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
          <div className="w-24 h-24 mb-4">
            <img src="/myABL_logo.png" alt="АВᒪ Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-green-700 mb-8">АВᒪ Mobile</h1>
          <div className="w-16 h-16 border-t-4 border-green-700 border-solid rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading experience...</p>
        </div>
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans text-gray-800 w-screen max-w-[100vw] overflow-x-hidden px-4 sm:px-6 lg:px-8 box-border">
          {/* Disclaimer Banner */}
          {showDisclaimer && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sticky top-0 z-50">
          <div className="flex justify-between items-center">
            <div className="flex">
              <div className="flex-shrink-0 text-blue-500">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-50">
                  This is an unofficial distribution page for the АВᒪ Mobile app. This app is intended for educational and demonstration purposes only.
                </p>

                  
              </div>
            </div>
            <button 
              onClick={() => setShowDisclaimer(false)}
              className="text-blue-500 hover:text-blue-700"
              aria-label="Close disclaimer"
            >
              <FaTimes />
            </button>
          </div>
        </div>
          )}
          
          <header className="bg-white shadow-md sticky top-0 z-40">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <div className="flex items-center">
                <img src="/myABL_logo.png" alt="АВᒪ Logo" className="h-10 object-contain" />
                <span className="text-xl font-semibold ml-2 text-green-700">АВᒪ Mobile</span>
              </div>
              <button 
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FaTimes className="text-green-700 text-xl" /> : <FaBars className="text-green-700 text-xl" />}
              </button>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-6">
                <a href="#features" className="text-gray-700 hover:text-green-700 transition-colors duration-200">Features</a>
                <a href="#screenshots" className="text-gray-700 hover:text-green-700 transition-colors duration-200">Screenshots</a>
                <a href="#download" className="text-gray-700 hover:text-green-700 transition-colors duration-200">Download</a>
                <button 
                  className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center"
                  onClick={() => setIsContactOpen(true)}
                >
                  Contact
                </button>
              </nav>
            </div>
            
            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden bg-white border-t border-gray-200 py-2 px-4 shadow-lg">
                <nav className="flex flex-col space-y-3">
                  <a 
                    href="#features" 
                    className="py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a 
                    href="#screenshots" 
                    className="py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Screenshots
                  </a>
                  <a 
                    href="#download" 
                    className="py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Download
                  </a>
                  <button 
                    className="py-2 px-3 text-left bg-green-700 hover:bg-green-800 text-white font-medium rounded-md transition-colors duration-200"
                    onClick={() => {
                      setIsContactOpen(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    Contact
                  </button>
                </nav>
              </div>
            )}
          </header>

          {/* Hero Section */}
          <section className="bg-gradient-to-b from-white to-gray-100 py-8 md:py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
              <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">
                  ABL Mobile Banking
                </h1>
                <p className="text-base md:text-lg text-gray-600 mb-6 max-w-lg mx-auto md:mx-0">
                  Experience seamless banking on the go with АВᒪ Mobile - your complete banking solution in your pocket.
                </p>
                <motion.button 
                  className="bg-green-700 hover:bg-green-800 text-white font-bold py-2.5 px-6 rounded-lg shadow-lg flex items-center justify-center mx-auto md:mx-0 w-full md:w-auto"
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={downloadStarted}
                >
                  <FaDownload className="mr-2" /> 
                  {downloadStarted ? 'Downloading...' : 'Download App'}
                </motion.button>
                {downloadStarted && (
                  <motion.p 
                    className="text-green-600 mt-3 font-medium text-sm md:text-base"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Download started! Check your downloads folder.
                  </motion.p>
                )}
              </div>
              <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                <motion.img 
                  src="/hero-image.jpg" 
alt="АВᒪ Mobile App Preview" 
                  className="w-full md:w-3/4 max-h-[300px] md:max-h-96 object-contain shadow-xl rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-8 md:py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Key Features</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Discover the powerful features that make АВᒪ Mobile the perfect banking companion for your daily financial needs.</p>
              </div>
              
              <div className="flex overflow-x-auto pb-8 space-x-6 snap-x scrollbar-hide">
                <motion.div 
                  className="flex-shrink-0 w-64 md:w-72 snap-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="rounded-xl shadow-md overflow-hidden">
                    <div className="text-green-700 text-2xl md:text-3xl p-4 bg-green-50 flex items-center justify-center">
                      <FaShieldAlt />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-2">Secure Banking</h3>
                      <p className="text-gray-600">Bank with confidence knowing your data is protected with advanced security measures.</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex-shrink-0 w-64 md:w-72 snap-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="rounded-xl shadow-md overflow-hidden">
                    <div className="text-green-700 text-2xl md:text-3xl p-4 bg-green-50 flex items-center justify-center">
                      <FaSync />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-2">Real-time Updates</h3>
                      <p className="text-gray-600">Get instant notifications for all your account activities and transactions.</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex-shrink-0 w-64 md:w-72 snap-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="rounded-xl shadow-md overflow-hidden">
                    <div className="text-green-700 text-2xl md:text-3xl p-4 bg-green-50 flex items-center justify-center">
                      <FaLock />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-2">Biometric Login</h3>
                      <p className="text-gray-600">Quick and secure access with fingerprint or face recognition authentication.</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex-shrink-0 w-64 md:w-72 snap-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="rounded-xl shadow-md overflow-hidden">
                    <div className="text-green-700 text-2xl md:text-3xl p-4 bg-green-50 flex items-center justify-center">
                      <FaUserFriends />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-2">Easy Transfers</h3>
                      <p className="text-gray-600">Send money to friends and family with just a few taps on your screen.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Screenshots Section */}
          <section id="screenshots" className="py-8 md:py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">App Screenshots</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Experience the all-new АВᒪ Mobile Banking app with enhanced features and security.</p>
              </div>
              
              <div className="flex overflow-x-auto pb-8 space-x-6 snap-x scrollbar-hide">
                <motion.div 
                  className="flex-shrink-0 w-64 md:w-72 snap-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="rounded-xl shadow-md overflow-hidden">
                    <img src={s1} alt="Login Screen" className="w-full h-96 object-contain rounded-xl" />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-2">Login Screen</h3>
                      <p className="text-gray-600">Secure and easy login with biometric authentication</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex-shrink-0 w-64 md:w-72 snap-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="rounded-xl shadow-md overflow-hidden">
                    <img src={s2} alt="Dashboard" className="w-full h-96 object-contain rounded-xl" />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-2">Dashboard</h3>
                      <p className="text-gray-600">Overview of your accounts and transactions</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex-shrink-0 w-64 md:w-72 snap-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="rounded-xl shadow-md overflow-hidden">
                    <img src={s3} alt="Transfer Money" className="w-full h-96 object-contain rounded-xl" />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-2">Transfer Money</h3>
                      <p className="text-gray-600">Quick and secure money transfers</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex-shrink-0 w-64 md:w-72 snap-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="rounded-xl shadow-md overflow-hidden">
                    <img src={s4} alt="Transactions" className="w-full h-96 object-contain rounded-xl" />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-2">Transactions</h3>
                      <p className="text-gray-600">View and manage your transaction history</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex-shrink-0 w-64 md:w-72 snap-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="rounded-xl shadow-md overflow-hidden">
                    <img src={s5} alt="Settings" className="w-full h-96 object-contain rounded-xl" />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-2">Settings</h3>
                      <p className="text-gray-600">Customize your app preferences</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Download Section */}
          <section id="download" className="py-8 md:py-16 bg-gradient-to-b from-white to-gray-100">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">Get АВᒪ Mobile App Now</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
                Download our app and experience the future of banking right in your hands. It's free, secure, and constantly updated with new features.
              </p>
              
              <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
                <div className="flex flex-col items-center text-center">
                  <div className="space-y-4 mb-6">
                    <h3 className="text-2xl font-semibold text-green-700">Direct Download</h3>
                    <ul className="text-left text-gray-600 text-sm md:text-base">
                      <li className="flex items-center mb-2">
                        <FaChevronDown className="text-green-700 mr-2" /> Latest version
                      </li>
                      <li className="flex items-center mb-2">
                        <FaChevronDown className="text-green-700 mr-2" /> Android 5.0+
                      </li>
                      <li className="flex items-center">
                        <FaChevronDown className="text-green-700 mr-2" /> Size: 4.7MB
                      </li>
                    </ul>
                  </div>
                  
                  <motion.button 
                    className="bg-green-700 hover:bg-green-800 text-white font-bold py-2.5 px-6 rounded-lg shadow-lg flex items-center justify-center w-full max-w-xs mx-auto"
                    onClick={handleDownload}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={downloadStarted}
                  >
                    <FaDownload className="mr-2" /> 
                    {downloadStarted ? 'Downloading...' : 'Download APK'}
                  </motion.button>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <img src="/myABL_logo.png" alt="АВᒪ Logo" className="w-10 h-10 object-contain" />
                    <span className="text-xl font-semibold ml-2 text-green-400">АВᒪ Mobile</span>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm md:text-base">
                    АВᒪ Mobile Banking app provides secure and convenient banking services on your smartphone. 
                    Access your accounts, transfer funds, pay bills, and manage your finances anytime, anywhere.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-200">
                      <FaFacebook className="text-xl" />
                    </a>
                    <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-200">
                      <FaTwitter className="text-xl" />
                    </a>
                    <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-200">
                      <FaInstagram className="text-xl" />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-200">
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
                    <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-200">Features</a>
                    <a href="#screenshots" className="text-gray-400 hover:text-white transition-colors duration-200">Screenshots</a>
                    <a href="#download" className="text-gray-400 hover:text-white transition-colors duration-200">Download</a>
                    <a 
                      href="#" 
                      onClick={(e) => {e.preventDefault(); setIsContactOpen(true);}} 
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-green-400">Contact Us</h3>
                  <div className="space-y-3 text-sm md:text-base">
                    <div className="flex items-start">
                      <FaEnvelope className="text-green-400 mt-1 mr-3" />
                      <span className="font-medium">support@nvll.com</span>
                    </div>
                    <div className="flex items-start">
                      <FaPhone className="text-green-400 mt-1 mr-3" />
                      <span className="font-medium">+92 21 111 111 425</span>
                    </div>
                    <div className="flex items-start">
                      <FaMapMarkerAlt className="text-green-400 mt-1 mr-3" />
                      <span className="font-medium">123 Banking Street, Karachi, Pakistan</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 mb-4 md:mb-0 text-sm md:text-base"> {new Date().getFullYear()} АВᒪ Mobile. All rights reserved.</p>
                <div className="flex space-x-6">
                  <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</Link>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Terms of Use</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Contact</a>
                </div>
              </div>
            </div>
          </footer>

          {/* Contact Popup */}
          {isContactOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <motion.div 
                className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-green-800">Contact АВᒪ Support</h3>
                  <button 
                    onClick={() => setIsContactOpen(false)}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    aria-label="Close"
                  >
                    <FaTimes />
                  </button>
                </div>
                
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                  For any queries or assistance with the АВᒪ Mobile Banking App, please reach out to our customer support team:
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-3">
                    <FaEnvelope className="text-green-700 mr-3" />
                    <span className="font-medium">support@nvll.com</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <FaPhone className="text-green-700 mr-3" />
                    <span className="font-medium">+92 21 111 111 425</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-green-700 mr-3" />
                    <span className="font-medium">24/7 Customer Support</span>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <motion.button 
                    className="bg-green-700 hover:bg-green-800 text-white font-medium py-2.5 px-6 rounded-lg shadow transition-colors duration-200 flex items-center"
                    onClick={handleDownload}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload className="mr-2" /> Download App
                  </motion.button>
                  <motion.button 
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2.5 px-6 rounded-lg shadow transition-colors duration-200"
                    onClick={() => setIsContactOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      )}
      
      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-green-800">Contact НВⅬ Support</h3>
              <button 
                onClick={() => setIsContactOpen(false)}
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>
            
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              For any queries or assistance with the НВⅬ Mobile Banking App, please reach out to our customer support team:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-3">
                <FaEnvelope className="text-green-700 mr-3" />
                <span className="font-medium">support@nvll.com</span>
              </div>
              <div className="flex items-center mb-3">
                <FaPhone className="text-green-700 mr-3" />
                <span className="font-medium">+92 21 111 111 425</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-green-700 mr-3" />
                <span className="font-medium">24/7 Customer Support</span>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <motion.button 
                className="bg-green-700 hover:bg-green-800 text-white font-medium py-2.5 px-6 rounded-lg shadow transition-colors duration-200 flex items-center"
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="mr-2" /> Download App
              </motion.button>
              <motion.button 
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2.5 px-6 rounded-lg shadow transition-colors duration-200"
                onClick={() => setIsContactOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default App;

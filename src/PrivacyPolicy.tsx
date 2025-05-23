import { FC } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PrivacyPolicy: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-green-700 hover:text-green-800">
              <FaArrowLeft className="mr-2" /> Back to Home
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="prose prose-green max-w-none">
            <p className="text-gray-600 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Introduction</h2>
            <p className="text-gray-600 mb-4">
              This Privacy Policy describes how we collect, use, and disclose your information when you use our ABL Mobile Banking app and related services. This is an unofficial distribution of the app for educational and demonstration purposes only.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We do not collect any personal information through this distribution page. However, the app itself may collect the following types of information:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600">
              <li className="mb-2">Device information (model, operating system version)</li>
              <li className="mb-2">App usage statistics</li>
              <li className="mb-2">Non-personally identifiable information for analytics</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              Any information collected is used solely for the purpose of:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600">
              <li className="mb-2">Improving the app experience</li>
              <li className="mb-2">Troubleshooting technical issues</li>
              <li className="mb-2">Analyzing usage patterns to enhance functionality</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              This app may use third-party services that collect information. These third parties have their own privacy policies addressing how they use such information.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-none pl-5 mb-4 text-gray-600">
              <li className="mb-2">Email: support@nvll.com</li>
              <li className="mb-2">Phone: +92 21 111 111 425</li>
            </ul>
            
            <div className="border-t border-gray-200 pt-6 mt-6">
              <p className="text-gray-500 text-sm">
                This privacy policy is for demonstration purposes only. This is not an official ABL service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

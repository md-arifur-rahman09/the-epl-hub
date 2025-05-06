import React from 'react';

const PrivacyPolicy = () => {
  const effectiveDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="w-11/12 lg:w-9/12 mx-auto p-6 bg-white shadow-md rounded-lg my-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-4 text-center">
        Effective Date: <span className="font-semibold">{effectiveDate}</span>
      </p>

      <div className="space-y-4 text-base leading-relaxed">
        <p>
          At <strong>The EPL Hub</strong>, your privacy is very important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use our website and services.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
        <p>We may collect personal information such as your name, email address, and any other information you voluntarily provide while using our services or signing up on our platform.</p>

        <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
        <p>Your data is used to provide and improve our services, send updates, personalize user experience, and respond to inquiries or support requests.</p>

        <h2 className="text-2xl font-semibold mt-6">3. Information Sharing</h2>
        <p>We do not sell, trade, or rent users’ personal identification information to others. We may share generic aggregated demographic information not linked to any personal data.</p>

        <h2 className="text-2xl font-semibold mt-6">4. Cookies</h2>
        <p>Our website may use "cookies" to enhance user experience. You can choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.</p>

        <h2 className="text-2xl font-semibold mt-6">5. Data Security</h2>
        <p>We adopt appropriate data collection, storage, and processing practices to protect against unauthorized access, alteration, or disclosure of your personal information.</p>

        <h2 className="text-2xl font-semibold mt-6">6. Third-Party Services</h2>
        <p>We may use third-party services (like analytics or authentication providers) which may collect and process data on our behalf under their own privacy policies.</p>

        <h2 className="text-2xl font-semibold mt-6">7. Your Consent</h2>
        <p>By using our website, you consent to our privacy policy.</p>

        <h2 className="text-2xl font-semibold mt-6">8. Changes to This Policy</h2>
        <p>We reserve the right to update this privacy policy at any time. Changes will be posted on this page with an updated effective date.</p>

        
        
      </div>
    </div>
  );
};

export default PrivacyPolicy;

import React from 'react';

const Terms = () => {
    const effectiveDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (

        <div className="w-11/12 lg:w-9/12 mx-auto p-6 bg-white shadow-md rounded-lg my-10 text-gray-800">
            <h1 className="text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>
            <p className="text-sm text-gray-500 mb-4 text-center">
                Effective Date: <span className="font-semibold">{effectiveDate}</span>
            </p>

            <p className="mb-4">
                Welcome to <strong>The EPL Hub</strong>. These Terms and Conditions govern your use of our website and services.
                By accessing or using the site, you agree to comply with and be bound by the following terms. If you disagree
                with any part of these terms, please do not use the website.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Website</h2>
            <p className="mb-4">
                This site is intended for educational and informational purposes related to English Premier League (EPL)
                matches, events, and fan engagement. You agree not to misuse the website or attempt to harm its functionality or security.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">2. Account & Registration</h2>
            <p className="mb-4">
                Users may register for an account to access certain features such as match booking. You are responsible for maintaining the
                confidentiality of your login credentials. We reserve the right to suspend or delete accounts involved in fraudulent activity
                or violation of terms.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">3. Content Accuracy</h2>
            <p className="mb-4">
                All match details, schedules, and event information are provided for demonstration and learning purposes only. The EPL Hub
                does not guarantee the accuracy or timeliness of the content, as this is a fictional educational project.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">4. Booking Policy</h2>
            <p className="mb-4">
                Users may book tickets for displayed matches; however, these bookings are <strong>simulated</strong> and not connected to real-life EPL events.
                Bookings are final and cannot be edited or refunded, as this feature is for learning demonstration only.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">5. User Conduct</h2>
            <p className="mb-4">
                You agree to use respectful language and behavior throughout the platform. Do not upload or share any harmful, illegal, or offensive content.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">6. Intellectual Property</h2>
            <p className="mb-4">
                All website designs, code, and media assets are used for educational purposes only. Any EPL logos or trademarks referenced are
                the property of their respective owners and are used under fair use for educational demonstration.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">7. Privacy</h2>
            <p className="mb-4">
                We do not collect or store real personal data. Any user data shown (e.g., email, profile picture) is only for simulation during
                development and testing.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">8. Modifications</h2>
            <p className="mb-4">
                These terms may be updated at any time. Continued use of the site after changes implies your acceptance of the revised terms.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">9. Disclaimer</h2>
            <p className="mb-6">
                This website is a student project for Assignment 09 and not affiliated with the official English Premier League or any of its sponsors.
            </p>

           
        </div>

    );
};

export default Terms;
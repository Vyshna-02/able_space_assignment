"use client";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-extrabold text-center text-blue-700">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-2">
            Have questions or feedback? Reach out to us anytime!
          </p>
          <p className="text-gray-700">
            Email: <span className="text-blue-600 font-semibold">support@gamil.com</span>
          </p>
          <p className="text-gray-700 mt-2">
            Phone: <span className="text-blue-600 font-semibold">+91 XXXXX XXXXX</span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us</h2>
          <div className="flex flex-col space-y-2 text-gray-700">
            <p>Twitter: <span className="text-blue-500">@BookExplorer</span></p>
            <p>Instagram: <span className="text-pink-500">@BookExplorer</span></p>
            <p>LinkedIn: <span className="text-blue-700">Book Explorer</span></p>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-700">
        <p>We’d love to hear from you! Your feedback helps us improve.</p>
      </div>
    </div>
  );
}


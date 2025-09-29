"use client";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-extrabold text-center text-blue-700">
        About Our Book Explorer
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-gray-700">
            We aim to help book lovers discover and explore a wide range of books,
            with detailed information and recommendations for every genre. Our
            platform combines technology and passion for literature.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Browse books by category</li>
            <li>Detailed product pages with reviews & ratings</li>
            <li>Recommended books based on your interests</li>
            <li>Responsive & accessible design</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Why Choose Us?</h2>
        <p className="text-gray-700">
          Our platform is fast, intuitive, and reliable. We fetch live data from
          trusted sources and present it in an easy-to-navigate interface for
          readers everywhere.
        </p>
      </div>
    </div>
  );
}



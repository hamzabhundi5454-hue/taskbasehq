"use client";

export default function UpgradeModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">
          Upgrade to Premium
        </h2>

        <ul className="space-y-2 text-sm mb-6">
          <li>✔ Unlimited Invoice Downloads</li>
          <li>✔ Resume Builder & Analyzer</li>
          <li>✔ PDF Repair & AI Tools</li>
          <li>✔ No Watermark</li>
        </ul>

        <button className="w-full bg-purple-600 text-white py-3 rounded-lg mb-2">
          Upgrade Now
        </button>

        <button
          onClick={onClose}
          className="w-full text-gray-500 text-sm"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
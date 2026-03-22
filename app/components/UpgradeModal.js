"use client";

export default function UpgradeModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-6 rounded-xl w-80 text-center">

        <h2 className="text-xl font-bold mb-3">
          Upgrade Required 🚀
        </h2>

        <p className="text-gray-500 mb-4">
          You’ve reached your free limit. Upgrade to continue using this tool.
        </p>

        <div className="flex gap-3 justify-center">
          <a
            href="/pricing"
            className="bg-black text-white px-4 py-2 rounded"
          >
            Upgrade
          </a>

          <button
            onClick={onClose}
            className="border px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}
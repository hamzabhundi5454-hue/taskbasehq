"use client";

import { useState } from "react";
import UpgradeModal from "./UpgradeModal";

export default function PremiumGate({ children }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="relative">
        <div className="blur-sm pointer-events-none">
          {children}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setShow(true)}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Upgrade to Premium
          </button>
        </div>
      </div>

      {show && <UpgradeModal onClose={() => setShow(false)} />}
    </>
  );
}
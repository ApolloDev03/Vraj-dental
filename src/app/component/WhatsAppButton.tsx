"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+916354734441"; // Your number with country code (no +)

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-10 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all flex items-center justify-center"
      style={{ zIndex: 9999 }}
    >
      <FaWhatsapp size={26} />
    </button>
  );
}

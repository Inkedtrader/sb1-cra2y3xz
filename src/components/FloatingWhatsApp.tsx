import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  // The perfectionist's approach: Encode the message to handle spaces and accents correctly
  const phoneNumber = "593983813224";
  const message = "¡Hola Keren! Vi tu página web y me gustaría información sobre tatuajes o piercings.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-40 md:hidden flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
        isClicked ? 'bg-[#25D366]' : 'bg-secondary'
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
};

export default FloatingWhatsApp;
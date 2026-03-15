import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  onNext?: () => void;
  onPrevious?: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  onNext,
  onPrevious,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!isOpen) setIsZoomed(false);
  }, [isOpen, imageSrc]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 w-full h-full z-[99999] bg-black/98 flex flex-col items-center overflow-hidden"
        onClick={onClose}
      >
        {/* 1. HEADER (100px) */}
        <div className="w-full h-[100px] flex items-center justify-end px-8 shrink-0">
          <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all"
            >
              {isZoomed ? <ZoomOut size={28} /> : <ZoomIn size={28} />}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-3 bg-white/10 text-white rounded-full hover:bg-red-600 transition-all"
            >
              <X size={28} />
            </button>
          </div>
        </div>

        {/* 2. MAIN AREA */}
        <div className="relative flex-1 w-full flex items-center justify-center p-4 min-h-0">
          
          {/* DESKTOP ONLY ARROWS */}
          {!isZoomed && (
            <div className="absolute inset-x-0 w-full hidden md:flex justify-between px-4 z-[105] pointer-events-none">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); onPrevious?.(); }}
                className="pointer-events-auto p-4 text-white/30 hover:text-white transition-all"
              >
                <ChevronLeft size={64} />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); onNext?.(); }}
                className="pointer-events-auto p-4 text-white/30 hover:text-white transition-all"
              >
                <ChevronRight size={64} />
              </button>
            </div>
          )}

          <motion.img
            key={imageSrc}
            src={imageSrc}
            alt={imageAlt}
            // Swipe on mobile, free-move on zoom
            drag={isZoomed ? true : "x"}
            dragConstraints={isZoomed ? false : { left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (isZoomed) return;
              if (info.offset.x < -100 && onNext) onNext();
              if (info.offset.x > 100 && onPrevious) onPrevious();
            }}
            // RE-CENTERING LOGIC: Forces x/y to 0 when zooming out
            animate={{ 
              scale: isZoomed ? 3 : 1,
              x: isZoomed ? undefined : 0, 
              y: isZoomed ? undefined : 0 
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onDoubleClick={() => setIsZoomed(!isZoomed)}
            className="max-h-full max-w-full w-auto h-auto object-contain rounded-sm shadow-2xl"
            style={{ 
              cursor: isZoomed ? 'move' : 'zoom-in',
              pointerEvents: 'auto',
              touchAction: 'none'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        {/* 3. BOTTOM PADDING */}
        <div className="h-[60px] w-full shrink-0" />
      </div>
    </AnimatePresence>
  );
};

export default ImageModal;
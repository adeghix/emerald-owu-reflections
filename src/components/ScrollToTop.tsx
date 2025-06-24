
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <div className="relative">
        {/* Progress Ring */}
        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-gray-600"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
            d="M18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
          />
          <path
            className="text-emerald-500"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeDasharray={`${scrollProgress}, 100`}
            d="M18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
          />
        </svg>
        
        {/* Button */}
        <Button
          onClick={scrollToTop}
          size="sm"
          className="absolute inset-0 w-12 h-12 bg-emerald-500 hover:bg-emerald-600 rounded-full shadow-lg emerald-glow"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ScrollToTop;

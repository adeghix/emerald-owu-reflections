
import React from 'react';

interface WaterfallLogoProps {
  className?: string;
  showText?: boolean;
}

const WaterfallLogo: React.FC<WaterfallLogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
          <div className="text-black font-bold text-lg">O</div>
        </div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold text-white">Owu Falls</span>
          <span className="text-xs text-emerald-400">Nigeria's Tallest</span>
        </div>
      )}
    </div>
  );
};

export default WaterfallLogo;

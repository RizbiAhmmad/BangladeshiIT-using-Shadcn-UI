import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const totalScroll = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (windowHeight === 0) return;

    const scroll = totalScroll / windowHeight;
    setScrollProgress(scroll);

    if (totalScroll > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-8 left-8 md:bottom-12 md:left-16 z-[999] group cursor-pointer transition-all duration-500 flex items-center justify-center ${isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'
        }`}
    >
      <div className="relative flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(6,105,56,0.3)] hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-white/10">
        {/* SVG Progress Circle */}
        <svg viewBox="0 0 48 48" className="absolute inset-0 w-full h-full transform -rotate-90">
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            className="stroke-gray-100 dark:stroke-slate-700"
            strokeWidth="3"
          />
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            className="stroke-[#066938]"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
          />
        </svg>

        {/* Arrow Icon */}
        <ArrowUp className="w-5 h-5 text-[#066938] group-hover:-translate-y-0.5 transition-transform duration-300 relative z-10" />
      </div>
    </div>
  );
};

export default ScrollToTop;

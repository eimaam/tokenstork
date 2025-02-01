import { useState, useEffect } from 'react';

const useMobile = (breakpoint: number = 820): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < breakpoint);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [breakpoint]);

  return isMobile;
};

export default useMobile;
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there is a hash, scroll to the element
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Timeout ensures the element is rendered if coming from another page
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      // If no hash, scroll to top instantly
      // 'instant' behavior overrides CSS scroll-behavior: smooth if supported
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as any });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
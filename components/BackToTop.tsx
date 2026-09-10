'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

/** Appears after two screen heights. Bottom-right, clear of the mobile bar. */
const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 2);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-20 right-5 z-40 flex size-11 items-center justify-center border border-border bg-canvas text-forest shadow-sm transition-all duration-250 ease-soft hover:bg-surface lg:bottom-8 ${show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
    >
      <ArrowUp size={18} />
    </button>
  );
};

export default BackToTop;

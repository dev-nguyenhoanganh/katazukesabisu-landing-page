import { useEffect, useState, useRef, useCallback } from 'react';

export function useHeadsObserver(tocs: Element[]) {
  const observer = useRef<IntersectionObserver>();
  const [activeId, setActiveId] = useState('');

  const handleObsever = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry?.isIntersecting) {
        setActiveId(entry.target.id);
      }
    });
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: '0px 0px -95% 0px',
    });

    tocs.forEach((elem) => observer.current?.observe(elem));
    return () => observer.current?.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tocs]);

  return { activeId };
}

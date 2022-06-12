import { useEffect, useRef } from 'react';
import { useNavbarContext } from './useNavbarContext';

export const useSelectLink = (id: string) => {
  const div = useRef<HTMLDivElement>(null);
  const { setActiveLink } = useNavbarContext();

  useEffect(() => {
    const interceptor = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            console.log(`entrando ${id}`);
            setActiveLink(`#${id}`);
          }
        }
      },
      { rootMargin: '0px', threshold: [0.5] }
    );

    const section = div.current;

    section && interceptor.observe(section);

    return () => {
      section && interceptor.unobserve(section);
    };
  }, [div, id, setActiveLink]);

  return {
    div,
  };
};

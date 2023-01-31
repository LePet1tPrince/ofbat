import { useEffect } from 'react';

export function FadeInElement({ elementRef }) {
  useEffect(() => {
    function handleScroll() {
      if (elementRef.current.getBoundingClientRect().top < window.innerHeight) {
        elementRef.current.classList.add("fade-in-test");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef]);

  return <div ref={elementRef}>Content to fade in</div>;
}
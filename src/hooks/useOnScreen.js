import { useEffect, useState } from 'react';

export function useOnScreen(ref, thresholdOptions) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  const [getThreshold, setThreshold] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
        setThreshold(entry.intersectionRatio);
      },
      {
        threshold: thresholdOptions,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return { isIntersecting, getThreshold };
}

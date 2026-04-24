import { useState, useEffect, useCallback } from 'react';

interface UseSliderOptions {
  total: number;
  autoPlayInterval?: number;
}

interface UseSliderReturn {
  current: number;
  goTo: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
}

export function useSlider({ total, autoPlayInterval = 4000 }: UseSliderOptions): UseSliderReturn {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    if (!autoPlayInterval) return;
    const timer = setInterval(goNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [goNext, autoPlayInterval]);

  return { current, goTo, goNext, goPrev };
}

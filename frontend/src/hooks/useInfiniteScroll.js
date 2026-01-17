import { useEffect } from "react";

const useInfiniteScroll = ({
  targetRef,
  onIntersect,
  enabled = true,
}) => {
  useEffect(() => {
    if (!enabled || !targetRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      {
        rootMargin: "100px",
      }
    );

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [targetRef, onIntersect, enabled]);
};

export default useInfiniteScroll;

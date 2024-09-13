import { useEffect, useRef, useState } from "react";

function AutoIncrementTimer({ incrementBy, interval, limit }) {
  const [isvisible, setIsVisible] = useState(false);
  const [cnt, setCnt] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  useEffect(() => {
    if (isvisible) {
      const timer = setInterval(() => {
        if (cnt < limit) {
          setCnt((prev) => prev + incrementBy);
        }
      }, interval);
      return () => clearInterval(timer);
    }
  }, [cnt, isvisible]);

  return <div ref={ref}>{cnt}</div>;
}
export default AutoIncrementTimer;

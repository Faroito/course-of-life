import { useState, useEffect } from "react";

const useScrollPosition = (element) => {
  const [scrollPosition, setScrollPosition] = useState({
    left: undefined,
    top: undefined,
  });

  useEffect(() => {
    const ref = element.current;

    function handleScroll() {
      setScrollPosition({
        left: ref.scrollLeft,
        top: ref.scrollTop,
      });
    }
    ref.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => ref.removeEventListener("resize", handleScroll);
  }, [element]);

  return scrollPosition;
};

export default useScrollPosition;

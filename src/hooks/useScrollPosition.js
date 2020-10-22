import { useState, useEffect } from "react";

const useScrollPosition = (element) => {
  const [scrollPosition, setScrollPosition] = useState({
    left: undefined,
    top: undefined,
  });

  useEffect(() => {
    const ref = element ? element.current : window;

    function handleScroll() {
      setScrollPosition({
        left: element ? ref.scrollLeft : ref.scrollX,
        top: element ? ref.scrollTop : ref.scrollY,
      });
    }
    ref.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => ref.removeEventListener("resize", handleScroll);
  }, [element]);

  return scrollPosition;
};

export default useScrollPosition;

import { useState, useEffect } from "react";

const useScrollPosition = (element) => {
  const [scrollPosition, setScrollPosition] = useState({
    left: undefined,
    top: undefined,
  });

  const hasElement = !!element;

  useEffect(() => {
    const ref = hasElement ? element.current : window;

    function handleScroll() {
      setScrollPosition({
        left: hasElement ? ref.scrollLeft : ref.scrollX,
        top: hasElement ? ref.scrollTop : ref.scrollY,
      });
    }
    ref.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => ref.removeEventListener("resize", handleScroll);
  }, [element]);

  return scrollPosition;
};

export default useScrollPosition;

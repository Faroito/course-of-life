import { useState, useEffect } from "react";

const useElementTopWindow = (element) => {
  const [elementTopWindow, setElementTopWindow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (element && element.current) {
        const isTopWindow =
          element.current.getBoundingClientRect().top < 0 &&
          element.current.getBoundingClientRect().bottom > 0;
        setElementTopWindow(isTopWindow);
      } else setElementTopWindow(false);
    };
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [element]);

  return elementTopWindow;
};

export default useElementTopWindow;

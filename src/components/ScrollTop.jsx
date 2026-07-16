import { useEffect, useState } from "react";
import "./ScrollTop.css";

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    show && (
      <button className="scroll-top" onClick={top}>
        ↑
      </button>
    )
  );
}

export default ScrollTop;
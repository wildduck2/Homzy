import { useRef, useState } from "react";
import { Li } from "../menuLi/Li";

export const HeaderDisktopMenu = () => {
  const [active, setActive] = useState(false);
  const ulRef = useRef() as React.MutableRefObject<HTMLUListElement>;

  const activeHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const el = e.target as HTMLElement;
    const aLinks = ulRef.current.querySelectorAll(
      "a",
    ) as NodeListOf<HTMLAnchorElement>;

    setActive(!active);

    aLinks.forEach((link) => {
      link.classList.remove("active");
    });
    el.classList.add("active");
  };

  return (
    <>
      <ul className="header__disktop-menu" ref={ulRef}>
        <Li name="Property" index={2} onClick={activeHandler} mobile={false} />
        <Li name="Services" index={2} onClick={activeHandler} mobile={false} />
        <Li name="Product" index={3} onClick={activeHandler} mobile={false} />
        <Li name="about us" index={4} onClick={activeHandler} mobile={false} />
      </ul>
    </>
  );
};

import { Link } from "react-router-dom";
import { HeaderDisktopMenu } from "./headerDisktopMenu/HeaderDisktopMenu";
import { HeaderMobileMenu } from "./headerMobileMenu/HeaderMobileMenu";
import { Button } from "../button/Button";
import { Theme } from "./theme/Theme";
import { useEffect, useRef } from "react";

export const Header = () => {
    const headerRef = useRef<HTMLHeadElement>(null);

    useEffect(() => {
        addEventListener("scroll", () => {
            window.scrollY > 40
                ? headerRef.current?.classList.add("header__swipe")
                : headerRef.current?.classList.remove("header__swipe");
        });
    });

    return (
        <>
            <header className="header" ref={headerRef}>
                <nav className="header__nav">
                    <a href={"#home"} className="nav__logo">
                        Homyz
                    </a>

                    <HeaderMobileMenu />

                    <div className="header__last-div">
                        <HeaderDisktopMenu />
                        <Theme />
                        <Button header={"header__button"} children={"Contact"} />
                    </div>
                </nav>
            </header>
        </>
    );
};

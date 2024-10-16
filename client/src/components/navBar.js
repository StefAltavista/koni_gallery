import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/navBar.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function NavBar() {
    const locate = useLocation().pathname.replace("/", "");
    const menu = ["Works", "Info", "Exhibitions"];
    const [openMenu, setOpenMenu] = useState(false);
    useGSAP(
        () => {
            gsap.fromTo(
                "#menuLinks",
                { opacity: "0" },
                { opacity: "1", duration: 1, delay: 1 }
            );
        },
        { dependencies: [] }
    );

    const menuLinks = menu.map((x) => {
        return (
            <Link
                to={`/${x.toLocaleLowerCase()}`}
                key={x}
                onClick={() => setOpenMenu(false)}
            >
                <p
                    className={
                        locate.toLocaleLowerCase() == x.toLocaleLowerCase()
                            ? "selected"
                            : "notSelected"
                    }
                >{`${x}`}</p>
            </Link>
        );
    });
    return (
        <div id="navBar">
            <Link to="/">
                <h1 id="title">KONSTANTIN GRIMM</h1>
            </Link>
            <div
                id="menuIcon"
                onClick={() => {
                    setOpenMenu(!openMenu);
                    console.log(openMenu);
                }}
                className={openMenu ? "openMenu" : "closeMenu"}
            >
                <div></div>
            </div>
            {openMenu && (
                <div
                    id="backgroundoverlay"
                    onClick={() => setOpenMenu(false)}
                ></div>
            )}
            {openMenu && (
                <div
                    id="dropdown"
                    className={openMenu ? "openDropdown" : "closeDropdown"}
                >
                    {menuLinks}
                </div>
            )}
            <div id="menuLinks" className={`otherPageLayout `}>
                {menuLinks}
            </div>
        </div>
    );
}

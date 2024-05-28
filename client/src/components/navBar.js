import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/navBar.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function NavBar() {
    const locate = useLocation().pathname.replace("/", "");
    const menu = ["Works", "Info", "Exhibitions"];

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

    return (
        <div
            id="navBar"
            style={
                locate != ""
                    ? { borderBottom: "1px dotted rgb(180, 180, 180)" }
                    : null
            }
        >
            <Link to="/">
                <h1 id="title">KONI GRIMM</h1>
            </Link>
            <div
                id="menuLinks"
                className={
                    locate == "" && window.innerWidth > 800
                        ? "homePageLayout"
                        : "otherPageLayout"
                }
            >
                {location &&
                    menu.map((x) => {
                        return (
                            <Link to={`/${x.toLocaleLowerCase()}`} key={x}>
                                <p
                                    className={
                                        locate.toLocaleLowerCase() ==
                                        x.toLocaleLowerCase()
                                            ? "selected"
                                            : "notSelected"
                                    }
                                    style={
                                        locate == "" && window.innerWidth > 800
                                            ? { color: "white" }
                                            : null
                                    }
                                >{`${x}`}</p>
                            </Link>
                        );
                    })}
            </div>{" "}
        </div>
    );
}

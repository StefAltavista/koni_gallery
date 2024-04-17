import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/navBar.css";
import gsap from "gsap";

export default function NavBar() {
    const locate = useLocation().pathname.replace("/", "");
    const menu = ["Works", "Info", "Exhibitions"];

    let conditionalMenu;

    if (locate == "") {
        gsap.fromTo(
            ".menuLinks",
            { opacity: "0" },
            { opacity: "1", duration: 2, delay: 1 }
        );
        conditionalMenu = {
            position: "absolute",
            bottom: "45%",
            fontSize: "30px",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
        };
    }

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
            <div className="menuLinks" style={conditionalMenu}>
                {location &&
                    menu.map((x) => {
                        return (
                            <Link to={`/${x}`} key={x}>
                                <p
                                    className={
                                        locate.toLocaleLowerCase() ==
                                        x.toLocaleLowerCase()
                                            ? "selected"
                                            : "notSelected"
                                    }
                                    style={
                                        locate == "" ? { color: "white" } : null
                                    }
                                >{`${x}`}</p>
                            </Link>
                        );
                    })}
            </div>{" "}
        </div>
    );
}

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/navBar.css";
export default function NavBar() {
    const locate = useLocation().pathname.replace("/", "");
    const menu = ["Works", "CV"];

    return (
        <div id="navbar">
            <div id="head">
                <p id="title">KONI GRIMM</p>
                <div className="menuLinks">
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
                                    >{`${x}`}</p>
                                </Link>
                            );
                        })}
                </div>{" "}
            </div>
        </div>
    );
}

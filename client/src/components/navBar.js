import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/navBar.css";
export default function NavBar() {
    const location = useLocation().pathname.replace("/", "");
    const menu = ["Works", "Exhibitions", "CV"];
    console.log(location);

    return (
        <div id="navbar">
            <div id="head">
                {/* <img src="favicon.ico" /> */}
                <p id="title">KONI GRIMM</p>
                <div className="menuLinks">
                    {menu.map((x) => {
                        return (
                            <Link to={`/${x}`} key={x}>
                                <p
                                    className={
                                        location == x
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

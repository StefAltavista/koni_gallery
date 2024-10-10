import React from "react";
import { Link } from "react-router-dom";
import "../../css/footer.css";

export default function Footer() {
    return (
        <div id="footer">
            <p>&copy; 2023 konnigrimm.com - All rights reserved</p>
            <p>
                Developed by{" "}
                <a href="https://stefanoaltavista.com" target="blank">
                    S.A.M.
                </a>
            </p>
        </div>
    );
}

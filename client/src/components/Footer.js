import React from "react";
import { Link } from "react-router-dom";
import "../../css/footer.css";

export default function Footer() {
    return (
        <div id="footer">
            <Link to="/contacts">
                <p>Contacts</p>
            </Link>
        </div>
    );
}

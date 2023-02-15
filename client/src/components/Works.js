import React, { useState } from "react";

export default function Works({ files }) {
    const [section, setSection] = useState("drawings");
    const sections = ["Paintings", "Drawings", "Book"];

    return (
        <div id="works">
            <div id="sections">
                {sections.map((s) => (
                    <p
                        onClick={() => setSection(s)}
                        className={section == s ? "selected" : "notSelected"}
                    >
                        {s}
                    </p>
                ))}
            </div>

            <div id="gallery">
                {files &&
                    files[section.toLocaleLowerCase()].map((x, i) => (
                        <img src={x} key={i} />
                    ))}
            </div>
        </div>
    );
}

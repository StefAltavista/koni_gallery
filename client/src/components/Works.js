import React, { useEffect, useState } from "react";
import "../../css/works.css";
import { browserName } from "react-device-detect";

import Paintings from "./Paintings";
import Drawings from "./Drawings";
import Book from "./Book";

export default function Works({ files }) {
    const [section, setSection] = useState("Paintings");
    const sections = ["Paintings", "Drawings", "Book"];
    const { paintings } =
        browserName == "Safari" ? files.thumbnails.safari : files.thumbnails;
    const { drawings, book } = files.images;
    console.log(paintings);
    return (
        <div id="works">
            <div id="sections">
                {sections.map((s) => (
                    <p
                        onClick={() => setSection(s)}
                        className={section == s ? "selected" : "notSelected"}
                        key={s}
                    >
                        {s}
                    </p>
                ))}
            </div>

            {files && section == "Paintings" ? (
                <Paintings files={paintings.files} />
            ) : null}
            {section == "Drawings" ? <Drawings files={drawings.files} /> : null}
            {section == "Book" ? <Book files={book.files} /> : null}
        </div>
    );
}

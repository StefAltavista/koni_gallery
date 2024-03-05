import React, { useState } from "react";
import "../../css/works.css";
import { browserName } from "react-device-detect";

import PaintingsMenu from "./PaintingsMenu";
import Paintings from "./Paintings";
import Drawings from "./Drawings";
import Book from "./Book";

export default function Works({ files }) {
    const [load, setLoad] = useState("loading");
    setTimeout(() => setLoad("loaded"), 10);
    const [section, setSection] = useState("Book");
    const [paintingMenu, setPaintingMenu] = useState(false);
    const [category, setCategory] = useState();

    const { paintings, drawings, book } =
        browserName == "Safari" ? files.thumbnails.safari : files.thumbnails;

    return (
        <div id="works">
            <div id="sections" className={`toLoad ${load}`}>
                <p
                    onClick={() => {
                        setSection("Book");
                        setPaintingMenu(false);
                    }}
                    className={section == "Book" ? "selected" : "notSelected"}
                >
                    Book
                </p>

                <p
                    onClick={() => {
                        setPaintingMenu(!paintingMenu);
                    }}
                    className={
                        section == "Paintings" ? "selected" : "notSelected"
                    }
                >
                    Paintings
                </p>

                <PaintingsMenu
                    setCategory={setCategory}
                    setSection={setSection}
                    visible={paintingMenu}
                    setPaintingMenu={setPaintingMenu}
                />

                <p
                    onClick={() => {
                        setSection("Drawings");
                        setPaintingMenu(false);
                    }}
                    className={
                        section == "Drawings" ? "selected" : "notSelected"
                    }
                >
                    Drawings
                </p>
            </div>

            {section == "Paintings" && category && (
                <Paintings files={paintings[category].files} key={category} />
            )}
            {section == "Drawings" && <Drawings files={drawings.files} />}
            {section == "Book" && <Book files={book.files} />}
        </div>
    );
}

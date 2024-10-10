import React, { useState } from "react";
import "../../css/works.css";
import { browserName } from "react-device-detect";
import Paintings from "./Paintings";
import Drawings from "./Drawings";
import Book from "./Book";

export default function Works({ files }) {
    const [load, setLoad] = useState("loading");
    setTimeout(() => setLoad("loaded"), 10);
    const [section, setSection] = useState("Paintings");
    const [collection, setCollection] = useState("newPictures");

    const { paintings, drawings, book, graphics } =
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
                        setSection("Paintings");
                    }}
                    className={
                        section == "Paintings" ? "selected" : "notSelected"
                    }
                >
                    Paintings
                </p>

                {/* <PaintingsMenu
                    setCollection={setCollection}
                    setSection={setSection}
                    visible={paintingMenu}
                    setPaintingMenu={setPaintingMenu}
                /> */}

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
                <p
                    onClick={() => {
                        setSection("Graphics");
                        setPaintingMenu(false);
                    }}
                    className={
                        section == "Graphics" ? "selected" : "notSelected"
                    }
                >
                    Lithography
                </p>
            </div>

            {section == "Paintings" && <Paintings files={paintings} />}
            {section == "Drawings" && <Drawings files={drawings.files} />}
            {section == "Book" && <Book files={book.files} />}
            {section == "Graphics" && <Drawings files={graphics.files} />}
        </div>
    );
}

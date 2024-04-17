import React, { useState } from "react";
import "../../css/paintings.css";

export default function PaintingsMenu({
    setCollection,
    setSection,
    visible,
    setPaintingMenu,
}) {
    return (
        <div>
            <div
                id="paintingsMenu"
                className={visible ? "visible" : "invisible"}
            >
                <p
                    onClick={() => {
                        setCollection("newPictures");
                        setSection("Paintings");
                        setPaintingMenu("");
                    }}
                >
                    NEW PICTURES
                </p>
                <p
                    onClick={() => {
                        setCollection("elementsOfBuilding");
                        setSection("Paintings");
                        setPaintingMenu("");
                    }}
                >
                    ELEMENTS OF BUILDING
                </p>
            </div>
        </div>
    );
}

import React, { useState } from "react";
import "../../css/paintings.css";

export default function PaintingsMenu({
    setCategory,
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
                        setCategory("newPictures");
                        setSection("Paintings");
                        setPaintingMenu("");
                    }}
                >
                    NEW PICTURES
                </p>
                <p
                    onClick={() => {
                        setCategory("elementsOfBuilding");
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

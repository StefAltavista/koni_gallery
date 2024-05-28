import React, { createRef, useEffect, useRef, useState } from "react";
import "../../css/drawings.css";
import DrawingsScrollGallery from "./DrawingsScrollGallery";
import ViewModal from "./ViewModal";

export default function Drawings({ files }) {
    const [load, setLoad] = useState("loading");
    const [toggleScroll, setToggleScroll] = useState(false);
    const [initialView, setInitialView] = useState(null);
    const loaded = () => {
        setLoad("loaded");
    };

    return (
        <div id="drawingsPage">
            {files.map((x, idx) => (
                <div
                    key={idx}
                    className={`toLoad ${load} drawingPageImg`}
                    onClick={() => {
                        setToggleScroll(true);
                        setInitialView(idx);
                    }}
                >
                    <img src={x} onLoad={loaded} />
                </div>
            ))}
            {toggleScroll && (
                <ViewModal closeModal={() => setToggleScroll(false)}>
                    <DrawingsScrollGallery
                        files={files}
                        initialView={initialView}
                    />
                </ViewModal>
            )}
        </div>
    );
}

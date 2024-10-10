import React, { useState } from "react";
import "../../css/drawings.css";
import ScrollGallery from "./ScrollGallery";
import ViewModal from "./ViewModal";

export default function Drawings({ files }) {
    const [load, setLoad] = useState("loading");
    const [toggleScroll, setToggleScroll] = useState(false);
    const [initialView, setInitialView] = useState(null);
    const loaded = () => {
        setLoad("loaded");
    };

    return (
        <>
            <div id="drawings">
                {files.map((x, idx) => (
                    <div
                        key={idx}
                        className={`toLoad ${load} drawing`}
                        onClick={() => {
                            setToggleScroll(true);
                            setInitialView(idx);
                        }}
                    >
                        <img src={x} onLoad={loaded} className="litho" />
                    </div>
                ))}
            </div>
            {toggleScroll && (
                <ViewModal closeModal={() => setToggleScroll(false)}>
                    <ScrollGallery files={files} initialView={initialView} />
                </ViewModal>
            )}
        </>
    );
}

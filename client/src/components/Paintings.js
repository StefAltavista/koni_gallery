import React, { useState } from "react";
import ViewModal from "./ViewModal";
import "../../css/paintings.css";

export default function Paintings({ files }) {
    const [source, setSource] = useState("");

    const openModal = (x) => {
        setSource(x);
    };
    const closeModal = (e) => {
        e.target.id == "modalBackground" || e.target.id == "close"
            ? setSource(false)
            : null;
    };
    return (
        <div id="paintings">
            {files &&
                files.map((x, i) => (
                    <div className="paintingImage" key={i}>
                        <img src={x} onClick={() => openModal(x)} />
                    </div>
                ))}
            {source && (
                <ViewModal
                    file={source.replace("thumbnails", "images")}
                    closeModal={(e) => {
                        closeModal(e);
                    }}
                />
            )}
        </div>
    );
}

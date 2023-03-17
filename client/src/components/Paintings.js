import React, { useState } from "react";
import ViewModal from "./ViewModal";
// import Arrangable from "./Arrangable";
import { browserName } from "react-device-detect";
import "../../css/paintings.css";

export default function Paintings({ files }) {
    const [source, setSource] = useState("");

    const openModal = (x) => {
        let folder =
            browserName == "Safari" ? "thumbnails/safari" : "thumbnails";

        x = x.replace(folder, "originals").split(".")[0] + ".JPG";

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
                    <div key={i} onClick={() => openModal(x)}>
                        <img src={x} />
                    </div>
                    // <Arrangable key={i} img={x}></Arrangable>
                ))}
            {source && (
                <ViewModal
                    file={source}
                    closeModal={(e) => {
                        closeModal(e);
                    }}
                />
            )}
        </div>
    );
}

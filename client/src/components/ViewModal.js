import React, { useRef, useState } from "react";
import "../../css/viewModal.css";

export default function ViewModal({ file, closeModal }) {
    const image = useRef();
    const [load, setLoad] = useState("loading");
    const loaded = () => {
        console.log("now");
        setLoad("loaded");
    };

    return (
        <div
            id="modalBackground"
            onClick={(e) => {
                closeModal(e);
            }}
        >
            <div id="viewModal">
                <div
                    id="close"
                    onClick={(e) => {
                        closeModal(e);
                    }}
                >
                    x
                </div>
                {load == "loading" && <div id="spinner">Loading</div>}
                <img
                    src={file}
                    className={`modalImg ${load}`}
                    ref={image}
                    onLoad={loaded}
                />
            </div>
        </div>
    );
}

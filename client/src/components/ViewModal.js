import React, { useRef, useState } from "react";
import "../../css/viewModal.css";
import Loading from "./Loading";

export default function ViewModal({ file, closeModal }) {
    const image = useRef();
    const [load, setLoad] = useState("loading");
    const loaded = () => {
        setLoad("loaded");
    };

    return (
        <div id="modalBackground" onClick={closeModal}>
            <div id="viewModal" onClick={closeModal}>
                {load == "loading" && <Loading />}
                <img
                    src={file}
                    className={`modalImg ${load}`}
                    ref={image}
                    onLoad={loaded}
                    onClick={closeModal}
                />
                {/* <div
                    id="paintingInfo"
                    onClick={closeModal}
                >
                    <p>Title</p>
                    <br></br>
                    <p>Size</p>
                    <br></br>
                    <p>Media</p>
                </div> */}
            </div>
        </div>
    );
}

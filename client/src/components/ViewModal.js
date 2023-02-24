import React from "react";
import "../../css/viewModal.css";

export default function ViewModal({ file, closeModal }) {
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
                <img src={file} />
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { Resizable } from "re-resizable";
import DraggableCore from "react-draggable";

export default function Arrangable({ img }) {
    const [scale, setScale] = useState(40);
    const [visible, setVisible] = useState("hidden");
    return (
        <div
            onClick={() => {
                console.log("here", img);
            }}
        >
            <input
                type="range"
                value={scale}
                onChange={(e) => setScale(e.target.value)}
                style={{ visibility: visible }}
            />
            <DraggableCore
                defaultPosition={{ x: 0, y: 0 }}
                onStop={(e, data) => console.log(data.x, data.y)}
            >
                <img
                    draggable="false"
                    src={img}
                    className="painting"
                    style={{ width: scale + "px" }}
                />
            </DraggableCore>
        </div>
    );
}

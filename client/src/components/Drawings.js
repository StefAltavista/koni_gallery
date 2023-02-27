import React, { createRef, useEffect, useRef, useState } from "react";
import "../../css/drawings.css";

export default function Drawings({ files }) {
    const [inView, setInView] = useState(0);
    const gallery = useRef();
    const drawing = [];

    for (let i in files) {
        drawing[i] = useRef();
    }

    useEffect(() => {
        drawing[inView]
            ? drawing[inView].current.scrollIntoView({ behavior: "smooth" })
            : null;
    }, [inView]);

    return (
        <div id="drawings">
            <img
                src="arrowL.png"
                className="arrow"
                onClick={() =>
                    setInView(Math.floor(gallery.current.scrollLeft / 800) - 1)
                }
            />
            <div ref={gallery} id="drawingsGallery">
                {files.map((url, idx) => (
                    <div key={idx} ref={drawing[idx]}>
                        <img src={url} />
                    </div>
                ))}
            </div>
            <img
                src="arrowR.png"
                className="arrow"
                onClick={() =>
                    setInView(Math.floor(gallery.current.scrollLeft / 800) + 1)
                }
            />
        </div>
    );
}

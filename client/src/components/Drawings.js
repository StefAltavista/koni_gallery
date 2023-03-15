import React, { useEffect, useRef, useState } from "react";
import "../../css/drawings.css";

export default function Drawings({ files }) {
    const [inView, setInView] = useState(0);
    const gallery = useRef();

    const drawing = [];

    for (let i in files) {
        drawing[i] = useRef();
    }
    const scroll = (n) => {
        let v = Math.round(
            gallery.current.scrollLeft / gallery.current.clientWidth
        );
        if (v < 0) {
            return;
        } else if (v == files.length) {
            return;
        } else setInView(v + n);
    };

    const opacityL = () => {
        return { opacity: inView == 0 ? "0" : "1" };
    };

    const opacityR = () => {
        return { opacity: inView == files.length - 1 ? "0" : "1" };
    };

    useEffect(() => {
        drawing[inView]
            ? drawing[inView].current.scrollIntoView({ behavior: "smooth" })
            : null;
    }, [inView]);

    return (
        <div id="drawings" ref={page}>
            <img
                src="arrowL.png"
                className="arrow"
                onClick={() => {
                    scroll(-1);
                }}
                // style={opacityL()}
            />

            <div ref={gallery} id="drawingsGallery">
                {files.map((x, idx) => (
                    <div key={idx} ref={drawing[idx]} className="frame">
                        <img src={x} loading="eager" />
                    </div>
                ))}
            </div>
            <img
                src="arrowR.png"
                className="arrow"
                onClick={() => scroll(+1)}
                // style={opacityR()}
            />
        </div>
    );
}

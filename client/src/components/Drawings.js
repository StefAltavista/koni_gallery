import React, { useEffect, useRef, useState } from "react";
import "../../css/drawings.css";

export default function Drawings({ files }) {
    const [load, setLoad] = useState("loading");
    const loaded = () => {
        setLoad("loaded");
    };
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
            ? drawing[inView].current.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
              })
            : null;
    }, [inView]);

    return (
        <div id="drawings" ref={page}>
            <img
                src="images/arrowL.png"
                className="arrow"
                onClick={() => {
                    scroll(-1);
                }}

                // style={opacityL()}
            />

            <div ref={gallery} id="drawingsGallery">
                {files.map((x, idx) => (
                    <div key={idx} className="frame">
                        <img
                            src={x}
                            ref={drawing[idx]}
                            loading="eager"
                            className={`modalImg ${load}`}
                            onLoad={loaded}
                        />
                    </div>
                ))}
            </div>
            <img
                src="images/arrowR.png"
                className="arrow"
                onClick={() => scroll(+1)}
                // style={opacityR()}
            />
        </div>
    );
}

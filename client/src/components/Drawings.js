import React, { createRef, useEffect, useRef, useState } from "react";
import "../../css/drawings.css";

export default function Drawings({ files }) {
    const [load, setLoad] = useState("loading");
    const [v, setV] = useState(0);
    const loaded = () => {
        setLoad("loaded");
    };
    const [inView, setInView] = useState(0);
    let gallery = createRef();
    const drawing = [];

    const scroll = (n) => {
        setV(
            Math.round(gallery.current.scrollLeft / gallery.current.clientWidth)
        );

        if (n == "mouse") {
            n = v;
            setInView(v);
        }
        if (v < 0) {
            return;
        } else if (v == files.length) {
            return;
        } else {
            setInView(v + n);
            setV(v + n);
        }
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
        <div id="drawings">
            <div
                ref={gallery}
                id="drawingsGallery"
                onWheel={() => {
                    setV(
                        Math.round(
                            gallery.current.scrollLeft /
                                gallery.current.clientWidth
                        )
                    );
                }}
            >
                {files.map((x, idx) => (
                    <div key={idx} className="frame">
                        <img
                            src={x}
                            ref={(drawing[idx] = createRef())}
                            loading="eager"
                            className={`toLoad ${load}`}
                            onLoad={loaded}
                        />
                    </div>
                ))}
            </div>
            <div>
                <img
                    src="images/arrowL.png"
                    className="arrow"
                    onClick={() => {
                        scroll(-1);
                    }}
                    style={{ width: v > 0 ? "20px" : "0px" }}
                />
                <img
                    src="images/arrowR.png"
                    className="arrow"
                    onClick={() => scroll(+1)}
                    style={{
                        width: v == files.length - 1 ? "0px" : "20px",
                    }}
                />
            </div>
        </div>
    );
}

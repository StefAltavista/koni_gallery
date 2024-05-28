import React, { createRef, useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import "../../css/drawingsScrollGallery.css";

export default function DrawingsScrollGallery({ files, initialView }) {
    const [load, setLoad] = useState("loading");
    const [firstLoad, setFirstLoad] = useState(true);
    const [v, setV] = useState(initialView);
    const [inView, setInView] = useState(initialView);
    const drawing = [];

    const loaded = () => {
        setLoad("loaded");
    };

    let gallery = createRef();

    const handleArrowScroll = (n) => {
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
        if (firstLoad) {
            setFirstLoad(false);
            drawing[initialView].current.scrollIntoView({
                behavior: "instant",
                block: "end",
            });
        } else {
            drawing[inView]
                ? drawing[inView].current.scrollIntoView({
                      behavior: "smooth",
                      block: "end",
                  })
                : null;
        }
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
            {!isMobile && (
                <div
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                >
                    <img
                        src="images/arrowL.png"
                        className="arrow"
                        onClick={() => {
                            handleArrowScroll(-1);
                        }}
                        style={{ width: v > 0 ? "20px" : "0px" }}
                    />
                    <img
                        src="images/arrowR.png"
                        className="arrow"
                        onClick={() => handleArrowScroll(+1)}
                        style={{
                            width: v == files.length - 1 ? "0px" : "20px",
                        }}
                    />
                </div>
            )}
        </div>
    );
}

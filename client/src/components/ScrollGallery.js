import React, { createRef, useEffect, useRef, useState } from "react";
import { browserName, isMobile } from "react-device-detect";
import "../../css/scrollGallery.css";

export default function ScrollGallery({ files, initialView }) {
    const [load, setLoad] = useState("loading");
    const [firstLoad, setFirstLoad] = useState(true);
    const [v, setV] = useState(initialView);
    const [inView, setInView] = useState(initialView);
    const image = [];

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
            image[initialView].current.scrollIntoView({
                behavior: "instant",
                block: "end",
            });
        } else {
            image[inView]
                ? image[inView].current.scrollIntoView({
                      behavior: "smooth",
                      block: "end",
                  })
                : null;
        }
    }, [inView]);

    return (
        <div id="scrollGalleryContainer">
            <div
                ref={gallery}
                id="scrollGallery"
                onWheel={() => {
                    setV(
                        Math.round(
                            gallery.current.scrollLeft /
                                gallery.current.clientWidth
                        )
                    );
                }}
            >
                {files.map((x, idx) => {
                    const folder =
                        browserName == "Safari"
                            ? "thumbnails/safari"
                            : "thumbnails";
                    x = x.replace(folder, "originals").split(".")[0] + ".JPG";

                    return (
                        <div key={idx} className="frame">
                            <img
                                src={x}
                                ref={(image[idx] = createRef())}
                                loading="eager"
                                className={`toLoad ${load}`}
                                onLoad={loaded}
                            />
                        </div>
                    );
                })}
            </div>
            {!isMobile && (
                <div
                    className="arrows"
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

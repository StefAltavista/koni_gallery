import React, { useRef, useState } from "react";

import HTMLFlipBook from "react-pageflip";
import useWindowDimension from "../hooks/useWindowDimension";

import "../../css/book.css";

export default function Book({ files }) {
    const bookRef = useRef();
    const [load, setLoad] = useState("loading");
    const { width, height } = useWindowDimension();

    return (
        <div id="book">
            <img
                src="images/arrowL.png"
                className="arrow"
                onClick={() => bookRef.current.pageFlip().flipPrev()}
            />
            <div
                id="bookComponent"
                className={`toLoad ${load}`}
                onLoad={() => setLoad("loaded")}
            >
                <HTMLFlipBook
                    ref={bookRef}
                    size="stretch"
                    width={height * 0.6417322834645669 * 0.8}
                    maxWidth={height * 0.6417322834645669 * 0.8}
                    minWidth={0}
                    height={height * 0.8}
                    maxHeight={height * 0.8}
                    minHeight={0}
                    usePortrait={false}
                    maxShadowOpacity={0.2}
                    flippingTime={1000}
                >
                    {files.map((x, i) => (
                        <img
                            src={x}
                            key={i}
                            className="bookImg"
                            loading="eager"
                        />
                    ))}
                </HTMLFlipBook>
            </div>

            <img
                src="images/arrowR.png"
                className="arrow"
                onClick={() => bookRef.current.pageFlip().flipNext()}
            />
        </div>
    );
}

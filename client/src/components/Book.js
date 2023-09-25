import React, { useRef } from "react";

import HTMLFlipBook from "react-pageflip";
import useWindowDimension from "../hooks/useWindowDimension";

import "../../css/book.css";

export default function Book({ files }) {
    const bookRef = useRef();
    const { width, height } = useWindowDimension();
    console.log(width, height);

    return (
        <div id="book">
            <img
                src="images/arrowL.png"
                className="arrow"
                onClick={() => bookRef.current.pageFlip().flipPrev()}
            />
            <div id="bookComponent">
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
                            loading="eager"
                            className="bookImg"
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

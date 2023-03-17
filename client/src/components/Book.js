import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import useWindowDimension from "../hooks/useWindowDimension";

import "../../css/book.css";

export default function Book({ files }) {
    const book = useRef();
    const { width, height } = useWindowDimension();
    const r = 0.8;

    return (
        <div id="book">
            <img
                src="images/arrowL.png"
                className="arrow"
                onClick={() => book.current.pageFlip().flipPrev()}
            />

            <HTMLFlipBook
                ref={book}
                width={489 * r}
                height={710 * r}
                usePortrait={false}
                maxShadowOpacity={0.2}
                flippingTime={1000}
            >
                {files.map((x, i) => (
                    <img src={x} key={i} loading="eager" className="bookImg" />
                ))}
            </HTMLFlipBook>
            <img
                src="images/arrowR.png"
                className="arrow"
                onClick={() => book.current.pageFlip().flipNext()}
            />
        </div>
    );
}

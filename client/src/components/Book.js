import React, { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

import "../../css/book.css";

export default function Book({ files }) {
    const [page, setPage] = useState(0);
    const book = useRef();

    return (
        <div id="book">
            <img
                src="arrowL.png"
                className="arrow"
                onClick={() => book.current.pageFlip().flipPrev()}
            />

            <HTMLFlipBook
                ref={book}
                width={405}
                height={642}
                usePortrait={false}
                maxShadowOpacity={0.2}
                flippingTime={1000}
                // showCover={true}
                onFlip={(e) => setPage(e.data / 2)}
            >
                {files.map((x, i) => (
                    <img src={x} key={i} loading="eager" className="bookImg" />
                ))}
            </HTMLFlipBook>
            <img
                src="arrowR.png"
                className="arrow"
                onClick={() => book.current.pageFlip().flipNext()}
            />
        </div>
    );
}

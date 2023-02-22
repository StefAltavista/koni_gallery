import React, { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

import "../../css/book.css";

export default function Book({ files }) {
    const [page, setPage] = useState(0);
    const book = useRef();

    return (
        <div id="book">
            <HTMLFlipBook
                ref={book}
                width={312}
                height={494}
                usePortrait={false}
                maxShadowOpacity={0.3}
                flippingTime={1000}
                onFlip={(e) => setPage(e.data / 2)}
            >
                {files.map((x, i) => (
                    <img src={x} key={i} loading="eager" className="bookImg" />
                ))}
            </HTMLFlipBook>
            <div id="comands">
                <p
                    onClick={() => book.current.pageFlip().flipPrev()}
                    className="flip"
                >
                    ← Prev
                </p>
                <p>Page {page}</p>
                <p
                    onClick={() => book.current.pageFlip().flipNext()}
                    className="flip"
                >
                    Next →
                </p>
            </div>
        </div>
    );
}

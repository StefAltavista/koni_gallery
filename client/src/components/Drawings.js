import React from "react";
// import useWindowDimensions from "../hooks/useWindowDimension";
import "../../css/drawings.css";

export default function Drawings({ files }) {
    // const { width, height, scroll } = useWindowDimensions();
    console.log(scroll);

    return (
        <div id="drawings">
            {files &&
                files.map((x, i) => <img src={x} key={i} loading="lazy" />)}
        </div>
    );
}

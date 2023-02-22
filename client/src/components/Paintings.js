import React from "react";
// import useWindowDimensions from "../hooks/useWindowDimension";
import "../../css/paintings.css";

export default function Paintings({ files }) {
    // const { width, height, scroll } = useWindowDimensions();
    console.log(scroll);

    return (
        <div id="paintings">
            {files &&
                files.map((x, i) => <img src={x} key={i} loading="lazy" />)}
        </div>
    );
}

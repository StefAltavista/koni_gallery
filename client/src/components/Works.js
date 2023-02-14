import React, { useState } from "react";

export default function Works({ files }) {
    const [type, setType] = useState("Paintings");
    console.log(files);
    return (
        <>
            <h3>Works</h3>
            <div id="sections">
                <p onClick={() => setType("Paintings")}>Paintings</p>
                <p onClick={() => setType("Book")}>Book</p>
                <p onClick={() => setType("Drawings")}>Drawings</p>
            </div>
            <p>{type}</p>
            {files &&
                files[type.toLocaleLowerCase()].map((x, i) => (
                    <img src={x} key={i} />
                ))}
        </>
    );
}

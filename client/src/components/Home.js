import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import "../../css/home.css";

export default function Home() {
    const [load, setLoad] = useState("loading");

    const [randomImage, setRandomImage] = useState(
        Math.floor(Math.random() * 6) + 1
    );
    const [imageLeaving, setImageLeaving] = useState(false);
    const device = isMobile ? "mobile" : "desktop";
    const SelectRandomImage = `/images/home/${device}/`;

    setTimeout(() => setLoad("loaded"), 10);
    const rotate = () => {
        setImageLeaving(true);
        setTimeout(() => {
            if (randomImage == 6) {
                setRandomImage(1);
            } else setRandomImage(randomImage + 1);
            setImageLeaving(false);
        }, 1000);
    };
    return (
        <div id="home" onClick={rotate} className={`toLoad ${load}`}>
            <img
                src={`${SelectRandomImage}${randomImage}.jpeg`}
                // className={imageLeaving ? "imageLeaving" : "imageComing"}
                className={imageLeaving ? "imageLeaving" : "imageComing"}
                id="homeImage"
            />
        </div>
    );
}

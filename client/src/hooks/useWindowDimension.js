import { useState, useEffect } from "react";

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height, scrollX: scroll } = window;
    return {
        width,
        height,
        scroll,
    };
}

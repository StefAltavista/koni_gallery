import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import preloadImages from "../api/preloadImages";

import "../../css/style.css";

import NavBar from "./NavBar";
import Home from "./Home";
import Works from "./Works";
import Exhibitions from "./Exhibitions";
import Cv from "./Cv";
import Contacts from "./Contacts";
import Footer from "./Footer";

export default function App() {
    const [files, setFiles] = useState();
    const [imgsLoaded, setImgsLoaded] = useState(false);
    useEffect(() => {
        fetch("/api/getFiles")
            .then((r) => r.json())
            .then((f) => {
                setFiles(f);
                preloadImages(f.images.book.files);
                preloadImages(f.images.drawings.files);
                preloadImages(f.images.paintings.files);
                setImgsLoaded(true);
            });
    }, []);

    return (
        <BrowserRouter>
            <div id="page">
                <NavBar />
                {files && (
                    <div id="body">
                        <Routes>
                            <Route exact path="/" element={<Home></Home>} />
                            {/* <Route
                                exact
                                path="/"
                                element={<Works files={files} />}
                            /> */}
                            <Route
                                path="/works"
                                element={<Works files={files} />}
                            />
                            <Route
                                path="/exhibitions"
                                element={<Exhibitions />}
                            />
                            <Route path="/CV" element={<Cv />} />
                            <Route path="/Contacts" element={<Contacts />} />
                        </Routes>
                    </div>
                )}
                <Footer />
            </div>
        </BrowserRouter>
    );
}

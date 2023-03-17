import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import preloadImages from "../api/preloadImages";

import "../../css/style.css";

const NavBar = React.lazy(() => import("./navBar"));
const Home = React.lazy(() => import("./Home"));
const Works = React.lazy(() => import("./Works"));
const Cv = React.lazy(() => import("./Cv"));
const Footer = React.lazy(() => import("./Footer"));

import * as data from "../../../data.json";

export default function App() {
    const [files, setFiles] = useState();

    useEffect(() => {
        setFiles(data);
    }, []);

    return (
        <BrowserRouter>
            <div id="page">
                <NavBar />
                {files && (
                    <div id="body">
                        <Routes>
                            <Route
                                exact
                                path="/"
                                element={
                                    <Suspense>
                                        <Home></Home>
                                    </Suspense>
                                }
                            />

                            <Route
                                path="/works"
                                element={
                                    <Suspense>
                                        <Works files={files} />
                                    </Suspense>
                                }
                            />

                            <Route
                                path="/CV"
                                element={
                                    <Suspense>
                                        <Cv />
                                    </Suspense>
                                }
                            />
                        </Routes>
                    </div>
                )}
                <Footer />
            </div>
        </BrowserRouter>
    );
}

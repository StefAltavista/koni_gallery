import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../../css/style.css";

import NavBar from "./navBar";
import Home from "./Home";
import Works from "./Works";
import Exhibitions from "./Exhibitions";
import Cv from "./Cv";
import Contacts from "./Contacts";

export default function App() {
    return (
        <BrowserRouter>
            <div id="page">
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/exhibitions" element={<Exhibitions />} />
                    <Route path="/CV" element={<Cv />} />
                    <Route path="/Contacts" element={<Contacts />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

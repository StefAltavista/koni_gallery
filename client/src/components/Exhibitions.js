import React, { useState } from "react";
import "../../css/exhibitions.css";
export default function Exhibitions() {
    const [load, setLoad] = useState("loading");
    setTimeout(() => setLoad("loaded"), 10);
    return (
        <div id="exhibitions" className={`toLoad ${load}`}>
            <p>UPCOMING</p>
            <br></br>
            <p>
                Pilotprojekt Chemnitz Kulturhauptstadt 2025, Juli 2024, Workshop
                und Ausstellung in Chemnitz (location tba)
            </p>
            <br></br>
            <p>
                Einzelausstellung/Exhibition at Galerie AK Galerie,
                Schlüterstraße 70 Berlin, 1. September - 15. Oktober
            </p>
            <br></br>
            <p>
                Chemnitz Kulturhauptstadt 2025, Mai, Juni, Juli 2024
                Festivalmomat mit Ausstellung, Performance, Workshops
                (wechselnde locations, tba)
            </p>
            <br></br>
            <div className="line"></div>
            <br></br>
            <p>PAST</p>
            <br></br>
            <p>2023</p>
            <p>Artist in Residency, Casa Justicia Montevideo, Uruguay</p>
            <br></br>
            <p>2022</p>
            <p>
                Schulz- Stübner Preis, group show, Foyer of Universität der
                Künste Berlin
            </p>
            <p>
                Excuse me I’m looking for the Rabbit Hole, group show, CULTERIM
                Berlin
            </p>
            <br></br>
            <p>2020</p>
            <p>
                Institut für unvorhergesehene Zusammenarbeit with
                Gintersdorfer/Klaßen, Floating University, Berlin
            </p>
        </div>
    );
}

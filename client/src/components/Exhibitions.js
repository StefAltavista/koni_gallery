import React, { useState } from "react";
import "../../css/exhibitions.css";
import ViewModal from "./ViewModal";

export default function Exhibitions({ files }) {
    const [load, setLoad] = useState("loading");
    const [toggleModal, setToggleModal] = useState(false);

    const schulzStuebner = files.exhibitions.schulzStuebner.files;
    const excuseMeExhibit = files.exhibitions.excuseMeExhibit.files;

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
            <div>
                {schulzStuebner.map((x, idx) => (
                    <img
                        src={x}
                        key={idx}
                        alt="Koni Grim Schulz Stuebner Preis"
                        onClick={() => setToggleModal(x)}
                        className="exhibitionImg"
                    />
                ))}
            </div>
            <p>
                Excuse me I’m looking for the Rabbit Hole, group show, CULTERIM
                Berlin
            </p>
            <div>
                {excuseMeExhibit.map((x, idx) => (
                    <img
                        src={x}
                        key={idx}
                        alt="Koni Grim Exhibitions"
                        onClick={() => setToggleModal(x)}
                        className="exhibitionImg"
                    />
                ))}
            </div>
            <br></br>
            <p>2020</p>
            <p>
                Institut für unvorhergesehene Zusammenarbeit with
                Gintersdorfer/Klaßen, Floating University, Berlin
            </p>
            {toggleModal && (
                <ViewModal
                    file={toggleModal}
                    closeModal={() => setToggleModal(false)}
                />
            )}
        </div>
    );
}

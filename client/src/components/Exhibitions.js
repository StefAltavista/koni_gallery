import React, { useState } from "react";
import "../../css/exhibitions.css";
// import portfolio from "../../../public/portfolio.pdf";

export default function Exhibitions({ files }) {
    const [load, setLoad] = useState("loading");
    const [toggleModal, setToggleModal] = useState(false);
    const [initialView, setInitialView] = useState();

    const schulzStuebner = files.exhibitions.schulzStuebner.files;
    const excuseMeExhibit = files.exhibitions.excuseMeExhibit.files;

    setTimeout(() => setLoad("loaded"), 10);

    return (
        <>
            <div id="exhibitions" className={`toLoad ${load}`}>
                <p>UPCOMING</p>
                <br></br>
                <p>
                    Bataille und Verschwendung Künstlerisches Rechercheprojekt
                    und Seminar, UdK Berlin, 2024/25
                </p>
                <br></br>
                <p>
                    Pilotprojekt Chemnitz Kulturhauptstadt 2025, Juli 2024,
                    Workshop und Ausstellung in Chemnitz (location tba)
                </p>
                <br></br>
                <p>
                    Bataille und Verschwendung: finnische Saunarituale,
                    Performanceprojekt, Oslo, Norwegen, 2025
                </p>
                <br></br>
                <div className="line"></div>
                <br></br>
                <p>PAST</p>
                <br></br>

                <p>
                    Artist in Residency Casa Justicia: 3-wöchiges
                    Artist-in-Residence Programm mit Workshops zum Thema
                    “Calavera Revolucionaria”. <br></br>Montevideo (UY), 2023
                </p>
                <br></br>
                <p>
                    Gruppenausstellung: „Karl-Hofer-Stipendium“, Galerie der
                    Universität der Künste Berlin. <br></br>Berlin 2022
                </p>
                <br></br>
                <p>
                    Gruppenausstellung: „Excuse me I’m looking for the Rabbit
                    Hole“, CULTERIM Galerie. <br></br>Berlin 2022
                </p>
                <br></br>
                <p>
                    Gruppenausstellung: Ciudad Abierta Chile “La Orchestra de
                    Plantas”. <br></br>Ritoque, Chile 2021
                </p>
                <br></br>
                <p>
                    Performance: „Institut für unvorhergesehene Zusammenarbeit“
                    mit Gintersdorfer/Klaßen, Floating University. <br></br>
                    Berlin 2020
                </p>
                <br></br>
                <div className="line"></div>
                <br></br>
                <p className="portfolio_button">
                    <a href={"/portfolio.pdf"} target="_blank" rel="noreferrer">
                        <img src="/icons\pdf_icon.svg" className="pdf_icon" />
                        Portfolio
                    </a>
                </p>
            </div>
        </>
    );
}

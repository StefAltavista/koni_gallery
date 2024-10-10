import React, { useState } from "react";
import "../../css/info.css";
export default function Info() {
    const [lang, setLang] = useState("de");
    const [load, setLoad] = useState("loading");
    setTimeout(() => setLoad("loaded"), 10);
    return (
        <div id="info" className={`toLoad ${load}`}>
            {/* 
            <br></br>
            <div className="line"></div>
            <br></br> */}
            <div className="lang_select">
                <p onClick={() => setLang("de")}>de</p> <p>|</p>{" "}
                <p onClick={() => setLang("eng")}>eng</p>
            </div>
            {lang == "de" ? (
                <>
                    <p>
                        Konstantin ist ein Maler, der 1993 in Chemnitz geboren
                        wurde. Derzeit lebt und arbeitet er in Berlin. Im Jahr
                        2022 erlangte er einen Master of Arts an der Universität
                        der Künste Berlin (UdK). Neben Berlin studierte
                        Konstantin Malerei unter anderem am Chelsea College of
                        London (UAL) und in Mexiko-Stadt an der Universidad
                        Nacional Autónoma de México (UNAM).
                    </p>
                    <br></br>
                    <p>
                        Konstantin Grimms Bilder thematisieren auf
                        unterschiedliche Weise das Ineinandergreifen von Farbe,
                        Zeichnung und Raum. Die kontrastreichen Farbtöne von
                        Blau-Rot, Grün-Pink sowie Schwarz-Weiß unterstreichen
                        die Tatsache, dass wir in einer Welt voller Gegensätze
                        und Konfrontationen leben. Konstantins Werke zelebrieren
                        die Unterschiede und schöpfen aus deren Potenzial. Im
                        Gegensatz zu den kräftigen Kontrastfarben steht die
                        Mattigkeit der Farbtöne, die den Bildern eine Patina aus
                        vergangener Zeit verleiht.{" "}
                    </p>
                </>
            ) : (
                <>
                    <p>
                        Konstantin is a painter, born in 1993 in Chemnitz.
                        Currently he lives and works in Berlin. 2022 he received
                        a Master of Arts at Universität der Künste Berlin (UdK).
                        Beside Berlin Konstantin studied painting including at
                        Chelsea College of London at the UAL and Mexico City at
                        Universidad Nacional Autónoma de México (UNAM).
                    </p>
                    <br></br>
                    <br></br>
                    <p>
                        Konstantin Grimm's paintings address in various ways the
                        interplay of color, drawing, and space. The contrasting
                        color tones of blue-red, green-pink, as well as
                        black-white underscore the fact that we live in a world
                        full of contrasts and confrontations. Konstantin's works
                        celebrate differences and draw from their potential. In
                        contrast to the vibrant contrasting colors, there is a
                        matte quality to the tones, giving the paintings a
                        patina of past times.
                    </p>
                </>
            )}
            <br></br> <br></br>
            <div className="more_info">
                <p>Für mehr Informationen:</p>
                <p>ko.grimm@posteo.de</p>
                <p className="portfolio_button">
                    <a href={"/portfolio.pdf"} target="_blank" rel="noreferrer">
                        <img src="/icons\pdf_icon.svg" className="pdf_icon" />
                        Portfolio
                    </a>
                </p>
            </div>
        </div>
    );
}

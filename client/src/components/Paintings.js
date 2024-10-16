import React, { useState } from "react";
import ViewModal from "./ViewModal";
import { browserName } from "react-device-detect";
import "../../css/paintings.css";
import Masonry from "react-masonry-css";

export default function Paintings({ files }) {
    const [collection, setCollection] = useState("newPictures");
    const [source, setSource] = useState("");
    const [load, setLoad] = useState("loading");

    const openModal = (x) => {
        let folder =
            browserName == "Safari" ? "thumbnails/safari" : "thumbnails";

        x = x.replace(folder, "originals").split(".")[0] + ".JPG";

        setSource(x);
    };
    const closeModal = () => {
        setSource(false);
    };

    const breakpoints = {
        default: 3,
        900: 2,
    };

    const renderImages = () => {
        files[collection].files.map((x, i) => (
            <div key={i} onClick={() => openModal(x)} className="painting-item">
                <img
                    src={x}
                    alt={`Koni Grimm Painting ${i} from ${collection}`}
                />
            </div>
        ));
    };

    return (
        <>
            {source && <ViewModal file={source} closeModal={closeModal} />}

            <div className="paintings_collection_menu">
                <p
                    className={
                        collection == "newPictures" ? "selected" : "notSelected"
                    }
                    onClick={() => setCollection("newPictures")}
                >
                    new pictures
                </p>
                <p
                    className={
                        collection == "elementsOfBuilding"
                            ? "selected"
                            : "notSelected"
                    }
                    onClick={() => setCollection("elementsOfBuilding")}
                >
                    elements of building
                </p>
            </div>
            <div
                id="paintings"
                className={`toLoad ${load} ${collection}`}
                onLoad={() => setLoad("loaded")}
                onScroll={(e) => handleScroll(e)}
            >
                {collection == "elementsOfBuilding" ? (
                    <Masonry
                        breakpointCols={breakpoints}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {files[collection].files.map((x, i) => (
                            <div
                                key={i}
                                onClick={() => openModal(x)}
                                className="painting-item"
                            >
                                <img
                                    src={x}
                                    alt={`Koni Grimm Painting ${i} from ${collection}`}
                                />
                            </div>
                        ))}
                    </Masonry>
                ) : (
                    files[collection].files.map((x, i) => (
                        <div
                            key={i}
                            onClick={() => openModal(x)}
                            className="painting-item"
                        >
                            <img
                                src={x}
                                alt={`Koni Grimm Painting ${i} from ${collection}`}
                            />
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

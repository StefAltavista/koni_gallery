const fs = require("fs");
const sharp = require("sharp");

const createThumbnail = (src) => {
    let dst = src.replace("images", "thumbnails").split(".")[0] + ".webp";
    if (src.includes("thumbnails")) {
        return;
    } else {
        sharp(src)
            .metadata()
            .then((metadata) => {
                sharp(src)
                    .resize(Math.round(metadata.width / 20))
                    .jpeg({ quality: 80 })
                    .toFile(dst)
                    .then(function (newFileInfo) {
                        console.log("Image Resized", newFileInfo);
                    })
                    .catch(function (err) {
                        console.log("Got Error", err);
                    });
            });
    }
};

module.exports = { createThumbnail };

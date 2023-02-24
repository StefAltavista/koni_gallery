const fs = require("fs");
const sharp = require("sharp");

const createThumbnail = (src) => {
    let dst = src.replace("images", "thumbnails");
    console.log(src);
    if (src.includes("thumbnails")) {
        return;
    } else {
        sharp(src)
            .resize({ width: 1000 })
            .toFile(dst)
            .then(function (newFileInfo) {
                console.log("Image Resized", newFileInfo);
            })
            .catch(function (err) {
                console.log("Got Error", err);
            });
    }
};

module.exports = { createThumbnail };

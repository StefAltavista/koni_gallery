const express = require("express");
const { listFiles } = require("./utils/listFiles");

const { createThumbnail } = require("./utils/createThumbnail");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/api/getFiles", (req, res) => {
    res.json(listFiles());
});

app.get("*", (req, res) => {
    res.redirect("/");
});

app.listen("5001", () => {
    console.log("listening");
});

const resizeimages = () => {
    const tree = listFiles();
    // tree.images.book.files.map((x) => createThumbnail("public" + x));
    // tree.images.drawings.files.map((x) => createThumbnail("public" + x));
    tree.images.paintings.files.map((x) => createThumbnail("public" + x));
};

resizeimages();

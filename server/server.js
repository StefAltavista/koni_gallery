const express = require("express");
const fs = require("fs");
const { listFiles } = require("./utils/listFiles");
const data = require("./data.json");

const { createThumbnail } = require("./utils/createThumbnail");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/api/getFiles", (req, res) => {
    res.json(data);
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
    // tree.images.paintings.files.map((x) => createThumbnail("public" + x));
    console.log(JSON.stringify(tree));
};

// resizeimages();

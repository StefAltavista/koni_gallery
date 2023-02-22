const express = require("express");
const { listFiles } = require("./utils/listFiles");
const path = require("path");

const app = express();

app.use(
    express.static("public")
    // express.static(path.join(__dirname, "..", "public", "drawings")),
    // express.static(path.join(__dirname, "..", "public", "paintings")),
    // express.static(path.join(__dirname, "..", "public", "book")),
    // express.static(path.join(__dirname, "..", "public", "thumbnails"))
);

app.get("/api/getFiles", (req, res) => {
    res.json(listFiles());
});

app.get("*", (req, res) => {
    res.redirect("/");
});

app.listen("5001", () => {
    console.log("listening");
});

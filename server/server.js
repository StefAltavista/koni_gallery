const express = require("express");
const { listFiles } = require("./utils/listFiles");
const path = require("path");

const app = express();

app.use(
    express.static(path.join(__dirname, "..", "public", "drawings")),
    express.static(path.join(__dirname, "..", "public", "paintings")),
    express.static(path.join(__dirname, "..", "public", "book"))
);

app.get("/api/getFiles", (req, res) => {
    listFiles((list) => res.json(list));
});

app.get("*", (req, res) => {
    res.redirect("/");
});

app.listen("5001", () => {
    console.log("listening");
});

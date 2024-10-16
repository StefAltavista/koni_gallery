const path = require("path");
const express = require("express");
const app = express();

const dir = path.join(__dirname, "images");

app.use(express.static(dir));

app.get("*", (req, res) => {
    res.redirect("/");
});

app.listen(1234, function () {
    console.log("konigrimm server for images");
});

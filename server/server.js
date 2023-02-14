const express = require("express");
const find = require("list-files");

const app = express();

app.get("/getFiles", (req, res) => {
    let files = { paintings: [], drawings: [], book: [] };

    find(
        function (result) {
            result.map((x) => {
                // x = x.replace("./public/", "");
                // x = x.slice(0, x.indexOf("/"));
                // console.log(x);

                console.log(x);

                if (x.includes("paintings/")) {
                    x = x.replace("./public/", "");
                    // x = x.slice(x.indexOf("/") + 1);
                    files.paintings.push(x);
                } else if (x.includes("drawings/")) {
                    files.drawings.push(x);
                } else if (x.includes("book/")) {
                    files.paintings.push(x);
                }
            });

            res.json(files);
        },
        {
            dir: "public",
        }
    );
});

app.get("*", (req, res) => {
    res.redirect("/");
});

app.listen("5001", () => {
    console.log("listening");
});

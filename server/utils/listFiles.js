const find = require("list-files");
const listFiles = (get) => {
    let list = { paintings: [], drawings: [], book: [] };
    find(
        (result) => {
            result.map((x) => {
                x = x.replace("./public/", "");
                let folder = x.slice(0, x.indexOf("/"));
                x = x.slice(x.indexOf("/") + 1);
                try {
                    list[folder].push(x);
                } catch {}
            });
            get(list);
        },
        {
            dir: "public",
        }
    );
};

module.exports = { listFiles };

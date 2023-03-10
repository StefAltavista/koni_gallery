const fs = require("fs");
const path = require("path");

const listFiles = () => {
    function directoryToTree(directoryPath) {
        const items = fs.readdirSync(directoryPath);
        let files = [];
        let tree = {};

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const itemPath = path.join(directoryPath, item);
            const itemStat = fs.statSync(itemPath);
            if (!itemPath.includes(".DS_Store")) {
                if (itemStat.isFile()) {
                    files = [...files, itemPath.replace("public", "")];

                    tree = { files };
                } else if (itemStat.isDirectory()) {
                    tree[item] = directoryToTree(itemPath);
                }
            }
        }

        return tree;
    }

    const directoryPath = "./public";
    const tree = directoryToTree(directoryPath);
    return tree;
};

module.exports = { listFiles };

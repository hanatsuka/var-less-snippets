const fs = require("fs");
console.log("---开始读取var.less---");
fs.readFile("./var.less", "utf8", (err, data) => {
    console.log("---读取完毕，开始转换---");
    const lineList = data.split("\n").filter((i) => i.startsWith("@"));
    const temp = {};
    lineList.forEach((i) => {
        const [key, value] = i.split(":");
        temp[key] = {
            prefix: key,
            body: [key],
            description: value.trim(),
        };
    });
    fs.writeFileSync("less.code-snippets", JSON.stringify(temp));
    console.log("---写入完毕---");
});

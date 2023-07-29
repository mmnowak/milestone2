beforeAll (() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("gamepage.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})
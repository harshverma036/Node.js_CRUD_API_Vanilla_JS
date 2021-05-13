const fs = require("fs");

const insertDataToFile = (filename, content) => {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", (err) => {
    if (error) {
      console.error(error);
    }
  });
};

module.exports = {
  insertDataToFile,
};

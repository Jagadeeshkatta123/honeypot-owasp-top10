const fs = require("fs");

exports.handler = async (event) => {
    const file = event.body; // Accepts any file without checking type
    fs.writeFileSync("/tmp/uploadedFile", file);

    return { statusCode: 200, body: "File uploaded successfully." };
};
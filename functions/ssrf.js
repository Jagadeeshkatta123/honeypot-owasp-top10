const fetch = require("node-fetch");

exports.handler = async (event) => {
    const { url } = JSON.parse(event.body);

    // No validation of the URL
    const response = await fetch(url);
    const data = await response.text();

    return { statusCode: 200, body: data };
};
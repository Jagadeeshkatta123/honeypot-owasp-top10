exports.handler = async (event) => {
    try {
        // Some logic that could throw an error
        throw new Error("Sample error");
    } catch (error) {
        // Exposes sensitive information in the response
        return { statusCode: 500, body: error.stack };
    }
};
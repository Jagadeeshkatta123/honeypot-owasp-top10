exports.handler = async (event) => {
    const { username, password } = JSON.parse(event.body);

    // Hardcoded credentials
    if (username === "admin" && password === "password123") {
        return { statusCode: 200, body: JSON.stringify({ token: "insecure-token" }) };
    }

    return { statusCode: 401, body: "Unauthorized" };
};
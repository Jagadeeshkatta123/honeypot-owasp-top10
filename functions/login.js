exports.handler = async (event) => {
    const { username, password } = JSON.parse(event.body);

    if (username === "admin" && password === "password123") {
        return { statusCode: 200, body: "Welcome, admin!" };
    }

    // No logging of failed attempts
    return { statusCode: 401, body: "Unauthorized" };
};
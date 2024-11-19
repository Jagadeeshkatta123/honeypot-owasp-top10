exports.handler = async (event) => {
    const { username, password } = JSON.parse(event.body);

    // Store password in plaintext (vulnerable)
    const user = { username, password }; // Save to database (omitted for simplicity)

    return { statusCode: 200, body: "User registered with insecure password storage." };
};
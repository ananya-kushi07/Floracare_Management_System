const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticatorLocal = async (req, res, next) => {
    try {
        // Retrieve the token from the Authorization header
        const authHeader = req.headers['authorization'];
        const authToken = authHeader && authHeader.split(' ')[1]; // Get the token part after "Bearer"

        if (!authToken) {
            console.log(`Authenticator: not an authenticated user (no token)`);
            return res.status(401).json({ data: null, msg: "Authenticator: not an authenticated user", auth: false });
        }

        // Verify the token
        const userId = await jwt.verify(authToken, process.env.JWT_SECRET_KEY);
        req.userId = userId.id; // Assuming your payload has _id
        req.isAdmin = userId.isAdmin;   // Assuming your payload has role
        
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ data: null, msg: "Token has expired", auth: false });
        }
        console.log(`Authenticator: an error occurred: ${err}`);
        res.status(500).json({ data: {}, msg: "A server error occurred in authentication", auth: false });
    }
}

module.exports = authenticatorLocal;
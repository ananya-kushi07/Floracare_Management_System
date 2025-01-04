const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const GardenerModel = require('../models/userModel');
require('dotenv').config();

const userLogin = (req, res) => {
    const { email, password } = req.body;
    GardenerModel.getGardenerByEmail(email, async (err, gardener) => {
        if (err) {
            console.error(`Error in fetching gardener: ${err}`);
            return res.status(500).json({ data: null, error: "Server error", msg: "Error in login", auth: false });
        }
        if (!gardener) {
            return res.status(401).json({ data: null, error: "User not registered", msg: "User not registered", auth: false });
        }
        const verified = await bcrypt.compare(password, gardener.password);
        if (verified) {
            const auth_token = jwt.sign(
                { id: gardener.G_id, isAdmin: gardener.isAdmin },
                process.env.JWT_SECRET_KEY,
                { expiresIn: process.env.JWT_EXPIRATION_TIME }
            );
            delete gardener.password;
            return res.status(200).json({
                data: gardener,
                appUserToken: auth_token,
                error: null,
                msg: "Login successful",
                auth: true,
            });
        } else {
            return res.status(400).json({ data: null, error: "Invalid credentials", msg: "Invalid credentials", auth: false });
        }
    });
};

const userSignup = (req, res) => {
    const { G_name, email, password, Phone, Experience_level, Specialization, isAdmin } = req.body;
    GardenerModel.getGardenerByEmail(email, async (err, gardener) => {
        if (err) {
            console.error(`Error in fetching gardener: ${err}`);
            return res.status(500).json({ data: null, error: "Server error", msg: "Error in signup" });
        }
        if (gardener) {
            return res.status(400).json({ data: { G_name: gardener.G_name }, error: "User exists", msg: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const gardenerData = { G_name, email, password: hashedPassword, Phone, Experience_level, Specialization, isAdmin };
        GardenerModel.addGardener(gardenerData, (err, result) => {
            if (err) {
                console.error(`Error in adding gardener: ${err}`);
                return res.status(500).json({ data: null, error: "Server error", msg: "Error in signup" });
            }
            return res.status(201).json({ data: { G_name }, error: null, msg: "Signup successful" });
        });
    });
};

const userProfile = (req, res) => {
    const { userId } = req;
    GardenerModel.getGardenerById(userId, (err, gardener) => {
        if (err) {
            console.error(`Error in fetching gardener: ${err}`);
            return res.status(500).json({ data: null, error: "Server error", msg: "Error in fetching profile", auth: false });
        }
        if (!gardener) {
            return res.status(404).json({ data: null, error: "User not found", msg: "Profile not found", auth: false });
        }
        delete gardener.password;
        res.status(200).json({ data: gardener, error: null, auth: true });
    });
};

const userLogout = (req, res) => {
    try {
        return res
            .clearCookie(process.env.AUTH_TOKEN_NAME, { httpOnly: true, secure: true, sameSite: "none" })
            .status(200)
            .json({ data: "User logged out", error: null, msg: "User logout successful", auth: false });
    } catch (err) {
        console.error(`An error occurred in logout: ${err}`);
        res.status(500).json({ data: null, error: "Logout error", msg: "Error in logout", auth: true });
    }
};

module.exports = { userLogin, userSignup, userLogout, userProfile };

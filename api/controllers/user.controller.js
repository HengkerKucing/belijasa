import jwt from 'jsonwebtoken';
const { verify } = jwt;

import User from "../models/user.model.js";

export const deleteUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");

    const token = req.cookies.accessToken;
    if (!token) return res.status(401).send("You are not authenticated!");

    verify(token, process.env.JWT_KEY, async (err, payload) => {
        if (err) return res.status(403).send("Invalid token");

        if (payload.id !== user._id.toString()) {
            return res.status(403).send("You can delete only your account!");
        }

        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("Deleted");
    });
};

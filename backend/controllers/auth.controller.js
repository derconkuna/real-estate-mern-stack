import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { password, email, username } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ password: hashedPassword, email, username });

  try {
    await newUser.save();
    res.status(201).json("User successfully added.");
  } catch (error) {
    next(error);
  }
};

import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signin = async (req, res) => {
  const { password, email, username } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ password: hashedPassword, email, username });

  try {
    await newUser.save();
    res.status(200).json("User successfully added");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

import User from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists." });
    }
    
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      name,
      email,
      password : hashedPassword,
    });


    return res.json( user );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
};


//login implementation
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
    
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({ error: "User not found!" });
        }

        //check if passwords match
        const match = await comparePassword(password, user.password);
        if(match){
          jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json(user)
          })
        }

        if (!match) {
          return res.status(401).json({ error: "Invalid credentials." });
        }
    
    
        return res.json( user );
      } catch (error) {
        console.error(error);
      }
}

const getProfile = async (req, res) => {
  const { token } = req.cookies;
  if(token){
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if(err) throw err;
      res.json(user);
    })
  }
  else{
    res.json(null);
  }
}

module.exports = { registerUser, loginUser, getProfile };

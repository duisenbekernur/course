const UserModel = require("../Models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const isExist = Boolean(await UserModel.findOne({ email: req.body.email }));
    if (isExist) {
      return res.json({
        userExist: true,
        message: "User already exist!",
      });
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      name: req.body.name,
      email: req.body.email,
      passwordHash: hash,
      rememberMe: false,
    });
    const user = await doc.save();
    const { passwordHash, ...userData } = user._doc;
    res.json(userData);
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    const remember = req.body.rememberMe;
    if (!user) {
      return res.json({
        message: "User is not found!",
      });
    }
    const validUser = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    );
    if (!validUser) {
      return res.sendStatus(202).json({
        message: "Неверный пароль",
      });
    }
    const token = jwt.sign(
      {
        _id: user._id,
      },
      "123123",
      {
        expiresIn: remember ? "30d" : "5m",
      }
    );
    const { passwordHash, ...userData } = user._doc;
    res.json(userData, token, remember);
  } catch (err) {
    console.log("Error occured with login", err);
  }
};

module.exports = { login, register };

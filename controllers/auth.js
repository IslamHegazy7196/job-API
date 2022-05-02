const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const BadrequestError = require("../errors/bad-request");
const unauthenticated = require("../errors/unauthenticated");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).send({ user: { name: user.name }, token });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadrequestError("please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new unauthenticated("invalid input");
  }
  const isPasswordCorrect=await user.comparePassword(password)
  if(!isPasswordCorrect){
    throw new unauthenticated('please provise valid password')
  }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = { login, register };

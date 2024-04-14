// jwt token it will generated from git bash

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 10 * 24 * 60 * 60 * 1000, // 15 day it will be valid
    secure: process.env.NODE_ENV !== "developement",
    sameSite: "strict",
  });
};

export default generateTokenAndSetCookie;

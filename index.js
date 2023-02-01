const express = require('express');
const cors = require('cors')
const fs = require('fs');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
      '/login',
      createProxyMiddleware({
        target: `http://localhost:${server.address().port}`,
        changeOrigin: true,
      })
  );
};

const app = express();
app.use(express.json());

dotenv.config();

app.use(cors());

app.get("/bank", (req, res) => {
  if (res.cookie === jwt.sign({ username: process.env.LOGIN_USERNAME }, process.env.JWT_SECRET_KEY))
    res.status(200).json({message: "Access Granted"});
  res
      .status(401)
      .json({ message: "You need to be logged in to access this resource" });
});

const server = app.listen(0, () => {
  console.log(`App running on Port:`, server.address().port);
});

let count = 0;
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(`${username} is trying to login ..`);
  console.log(++count, ": ", jwt.sign({ username: username }, process.env.JWT_SECRET_KEY));
  if (username === process.env.LOGIN_USERNAME && password === process.env.LOGIN_PASSWORD) {
    return res.status(200).json({
      token: jwt.sign({ username: username }, process.env.JWT_SECRET_KEY),
    });
  }
  return res
      .status(401)
      .json({ message: "The username and password you provided are invalid" });
});
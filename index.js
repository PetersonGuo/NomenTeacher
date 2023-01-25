const express = require('express');
const cors = require('cors')
const fs = require('fs');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const app = express();

dotenv.config();

app.use(cors());

let PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT} ...`);
});


app.post("/login", (req, res) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
    time: Date(),
    userId: 12,
  }

  const token = jwt.sign(data, jwtSecretKey);
  res.send(token);
  console.log(token);
});


app.get("/login", (req, res) => {
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    const token = req.header(tokenHeaderKey);

    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      return res.send({token});
    } else {
      return res.status(401).send(error);
    }
  } catch (error) {
    return res.status(401).send(error);
  }
});
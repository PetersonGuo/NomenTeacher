const { auth } = require('express-openid-connect');
const express = require('express');
require('dotenv').config();

const secret = process.env.REACT_APP_PEPPER;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: secret,
  baseURL: 'http://localhost:3000',
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_DOMAIN,
};

const PORT = 3001;

const app = express();

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const { auth } = require('express-openid-connect');
const express = require('express');
const { requiresAuth } = require('express-openid-connect');
require('dotenv').config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.REACT_APP_PEPPER,
  baseURL: 'http://localhost:3000',
  clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.REACT_APP_AUTH0_DOMAIN,
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

app.get('/bank', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});
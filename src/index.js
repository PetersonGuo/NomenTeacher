import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {GoogleOAuthProvider} from '@react-oauth/google';
import {BrowserRouter} from "react-router-dom";
import Auth from "./components/Auth";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <React.StrictMode>
        <BrowserRouter>
          <Auth>
            <App/>
          </Auth>
        </BrowserRouter>
      </React.StrictMode>
    </GoogleOAuthProvider>
);
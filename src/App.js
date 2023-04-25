import Nav from "./components/Nav";
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import IonicBonds from "./pages/IonicBonds";
import CovalentBonds from "./pages/CovalentBonds";
import Login from "./pages/Login";
import Bank from "./pages/Bank";
import {useState} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {setDarkMode(!darkMode)};
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const RequireAuth = () => {
    if (loggedIn) navigate('/login');
    else return <Bank/>;
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
      <BrowserRouter>
        <div className={`h-screen w-screen overflow-x-hidden`}>
          <div className="py-4">
            <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
          </div>
          <Routes>
            <Route exact path='/' element={<Navigate replace to="/home"/>}/>
            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/quiz' element={<Quiz/>}/>
            <Route exact path='/ionic-bonds' element={<IonicBonds/>}/>
            <Route exact path='/covalent-bonds' element={<CovalentBonds/>}/>
            <Route exact path="/bank" element={<RequireAuth/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

import Nav from "./components/Nav";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import IonicBonds from "./pages/IonicBonds";
import CovalentBonds from "./pages/CovalentBonds";
import React from "react";

export default function App() {
  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  };
  const [darkMode, setDarkMode] = React.useState(true);

  return (
      <BrowserRouter>
        <div className={`h-screen w-screen overflow-x-hidden`}>
          <div className="py-4">
            <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
          <Routes>
            <Route exact path='/' element={<Navigate replace to="/home"/>}></Route>
            <Route exact path='/home' element={<Home/>}></Route>
            <Route exact path='/quiz' element={<Quiz/>}></Route>
            <Route exact path='/ionic-bonds' element={<IonicBonds/>}></Route>
            <Route exact path='/covalent-bonds' element={<CovalentBonds/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

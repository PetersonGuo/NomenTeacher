import Nav from "./components/Nav";
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import IonicBonds from "./pages/IonicBonds";
import CovalentBonds from "./pages/CovalentBonds";
import {useEffect, useState} from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) document.getElementById('root').classList.add('dark')
    else document.getElementById('root').classList.remove('dark')
  }, []);

  return (
        <div className={`h-screen w-screen overflow-x-hidden ${darkMode ? "dark" : ""}`}>
            <div className={"w-[100%] h-[100%] dark:bg-gray-700 bg-white"}>
              <div className="py-4">
                <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
              </div>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/home' element={<Home/>}/>
                <Route exact path='/quiz' element={<Quiz/>}/>
                <Route exact path='/ionic-bonds' element={<IonicBonds/>}/>
                <Route exact path='/covalent-bonds' element={<CovalentBonds/>}/>
              </Routes>
            </div>
        </div>
  );
}

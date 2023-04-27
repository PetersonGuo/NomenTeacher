import Nav from "./components/Nav";
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import IonicBonds from "./pages/IonicBonds";
import CovalentBonds from "./pages/CovalentBonds";
import Bank from "./pages/Bank";
import ProtectedRoute from "./components/ProtectedRoute";
import {useState} from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {setDarkMode(!darkMode)};
  const [loggedIn, setLoggedIn] = useState(false);

  return (
        <div className={`h-screen w-screen overflow-x-hidden`}>
          <div className="py-4">
            <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
          </div>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/quiz' element={<Quiz/>}/>
            <Route exact path='/ionic-bonds' element={<IonicBonds/>}/>
            <Route exact path='/covalent-bonds' element={<CovalentBonds/>}/>
            <Route exact path='/bank' element={<ProtectedRoute/>}>
              <Route exact path="/bank" element={<Bank/>}/>
            </Route>
          </Routes>
        </div>
  );
}

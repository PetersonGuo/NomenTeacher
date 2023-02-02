import Nav from "./components/Nav";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import IonicBonds from "./pages/IonicBonds";
import CovalentBonds from "./pages/CovalentBonds";
import Login from "./pages/Login";
import useToken from "./components/useToken";
import Bank from "./pages/Bank";
import {useState} from "react";
import Cookies from "js-cookie";

export default function App() {
  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  };
  const {token, setToken} = useToken();
  const [darkMode, setDarkMode] = useState(true);
  const RequireAuth = ({children}) => {
    const userIsLogged = Cookies.get('login');; // Hook to get login status

    if (!userIsLogged) {
      return <Login token={token} setToken={setToken} />
    }
    return children;
  };

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
            <Route exact path="/bank" element={
              <RequireAuth>
                <Bank/>
              </RequireAuth>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

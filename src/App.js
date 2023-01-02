import './App.css';
import MyNav from "./components/MyNav";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/pages/Home";
import Quiz from "./components/pages/Quiz/Quiz";
import IonicBonds from "./components/pages/IonicBonds";
import CovalentBonds from "./components/pages/CovalentBonds";

export default function App() {
  return (
      <BrowserRouter>
          <MyNav />
          <Routes>
              <Route exact path='/' element={ <Navigate replace to="/home" /> }></Route>
              <Route exact path='/home' element={ <Home /> }></Route>
              <Route exact path='/quiz' element={ <Quiz /> }></Route>
              <Route exact path='/ionic' element={ <IonicBonds /> }></Route>
              <Route exact path='/covalent' element={ <CovalentBonds /> }></Route>
          </Routes>
      </BrowserRouter>
  );
}

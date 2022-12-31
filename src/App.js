import logo from './logo.svg';
import './App.css';
import MyNav from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/pages/Home";
import Quiz from "./components/pages/Quiz";
import MNBonds from "./components/pages/MNBonds";
import NNBonds from "./components/pages/NNBonds";

export default function App() {
  return (
      <BrowserRouter>
          <MyNav />
          <Routes>
              <Route exact path='/' element={ <Navigate replace to="/home" /> }></Route>
              <Route exact path='/home' element={ <Home /> }></Route>
              <Route exact path='/quiz' element={ <Quiz /> }></Route>
              <Route exact path='/material/mnbonds' element={ <MNBonds /> }></Route>
              <Route exact path='/material/nnbonds' element={ <NNBonds /> }></Route>
          </Routes>
      </BrowserRouter>
  );
}

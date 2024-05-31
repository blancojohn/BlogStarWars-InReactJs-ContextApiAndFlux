import React from 'react';
import injectContext from './store/AppContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import DetailsPeople from './pages/DetailsPeople';
import DetailsVehicle from './pages/DetailsVehicle';
import DetailsPlanet from './pages/DetailsPlanet';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/people/:uid' element={<DetailsPeople />} />
          <Route path='/vehicle/:uid' element={<DetailsVehicle />} />
          <Route path='/planet/:uid' element={<DetailsPlanet />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);
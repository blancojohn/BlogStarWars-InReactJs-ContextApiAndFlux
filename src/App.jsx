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
          <Route path='/characters/:uid' element={<DetailsPeople />} />
          <Route path='/vehicles/:uid' element={<DetailsVehicle />} />
          <Route path='/planets/:uid' element={<DetailsPlanet />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);
import React from 'react';
import injectContext from './store/AppContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Navbar from './components/Navbar';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:name' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);
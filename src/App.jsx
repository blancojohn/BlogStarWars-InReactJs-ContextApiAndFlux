import React from 'react';
import injectContext from './store/AppContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:name' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);